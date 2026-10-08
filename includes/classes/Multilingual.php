<?php

namespace STUDIOGRAM;

if (!defined('ABSPATH')) exit;

/**
 * Polylang integration — OPT-IN.
 *
 * All multilingual admin/ACF hooks live here so the starter theme works with
 * or without Polylang. Instantiated from functions.php only when Polylang is
 * active; the read-time language fallbacks scattered in Setup/Helpers/Menu/
 * Theme stay inline (they already guard with function_exists and no-op).
 */
if (!class_exists('STUDIOGRAM\Multilingual')) :
    class Multilingual
    {
        private array $translatable_options = ['custom-content', 'custom-menu'];

        /* FR category term ids in header-post conditional logic get rewritten to
           the current language's term (see translate_category_conditions). */
        const CATEGORY_FIELD_KEY = 'field_6a1ff804f266f';

        public function __construct()
        {
            // ACF options-page language routing.
            add_filter('acf/validate_post_id', [$this, 'acf_translate_options_post_id']);
            add_action('admin_notices', [$this, 'render_options_language_switcher']);
            add_action('acf/options_page/submitbox_before_major_actions', [$this, 'persist_options_language']);
            add_action('admin_init', [$this, 'default_options_language_redirect']);

            // Pre-fill a new translation from its source post.
            add_filter('default_title', [$this, 'translation_default_title'], 10, 2);
            add_filter('default_content', [$this, 'translation_default_content'], 10, 2);

            // ACF field sync + conditional-logic translation.
            add_filter('pll_copy_post_metas', [$this, 'unsync_metas'], 10, 1);
            add_filter('acf/prepare_field', [$this, 'translate_category_conditions']);
        }


        public function acf_translate_options_post_id($post_id)
        {
            if (!function_exists('pll_current_language')) {
                return $post_id;
            }

            if (!in_array($post_id, $this->translatable_options, true)) {
                return $post_id;
            }

            $lang = is_admin() ? $this->admin_current_language() : pll_current_language();

            if ($lang && $lang !== pll_default_language()) {
                $post_id .= '_' . $lang;
            }

            return $post_id;
        }


        /**
         * Language for options-page lookups inside wp-admin. The options screens
         * pass ?lang=; the block editor and its fetch-block preview AJAX don't, so
         * fall back to the edited post's language before the site default —
         * otherwise an English page's blocks pull French option content.
         */
        private function admin_current_language()
        {
            $lang = $_GET['lang'] ?? $_POST['lang'] ?? '';
            if ($lang !== '') {
                return sanitize_text_field($lang);
            }

            if (function_exists('pll_get_post_language')) {
                foreach (['post', 'post_ID', 'post_id'] as $key) {
                    if (!empty($_REQUEST[$key]) && is_numeric($_REQUEST[$key])) {
                        $lang = pll_get_post_language((int) $_REQUEST[$key]);
                        if ($lang) {
                            return $lang;
                        }
                        break;
                    }
                }
            }

            return pll_default_language();
        }


        public function render_options_language_switcher()
        {
            if (!function_exists('pll_languages_list')) {
                return;
            }

            $screen = get_current_screen();
            if (!$screen || !in_array($screen->id, ['toplevel_page_custom-content', 'toplevel_page_custom-menu', 'edit-category'])) {
                return;
            }

            $languages = pll_languages_list(['fields' => []]);
            if (empty($languages)) {
                return;
            }

            $current_lang = $this->admin_current_language();
            $base_url = remove_query_arg('lang');

            echo '<div style="padding:10px 0;">';
            foreach ($languages as $lang) {
                $url = add_query_arg('lang', $lang->slug, $base_url);
                $active = ($current_lang === $lang->slug);
                $class = $active ? 'button button-primary' : 'button';
                echo '<a href="' . esc_url($url) . '" class="' . $class . '" style="text-decoration:none;margin-right:8px !important;">';
                echo $lang->flag ?? esc_html(strtoupper($lang->slug));
                echo '</a>';
            }
            echo '</div>';
        }


        /* The ?lang= switcher only lives in the URL; on save that query arg is
           gone, so the language would fall back to the default and overwrite the
           wrong bucket. Ship the rendered language inside the form. */
        public function default_options_language_redirect()
        {
            if (!function_exists('pll_default_language')) {
                return;
            }
            if (isset($_GET['lang'])) {
                return;
            }
            if (!in_array($_GET['page'] ?? '', $this->translatable_options, true)) {
                return;
            }
            wp_safe_redirect(add_query_arg('lang', pll_default_language()));
            exit;
        }


        public function persist_options_language($page)
        {
            if (!in_array($page['post_id'] ?? '', $this->translatable_options, true)) {
                return;
            }
            echo '<input type="hidden" name="lang" value="' . esc_attr($this->admin_current_language()) . '">';
        }


        private function translation_source_post()
        {
            if (empty($_GET['from_post']) || empty($_GET['new_lang'])) {
                return null;
            }
            $post = get_post(absint($_GET['from_post']));
            return ($post && current_user_can('read_post', $post->ID)) ? $post : null;
        }


        public function translation_default_title($title, $post)
        {
            $source = $this->translation_source_post();
            return $source ? $source->post_title : $title;
        }


        public function translation_default_content($content, $post)
        {
            $source = $this->translation_source_post();
            if (!$source) {
                return $content;
            }
            if (empty($_GET['new_lang']) || !function_exists('pll_get_term')) {
                return $source->post_content;
            }
            $lang = sanitize_text_field($_GET['new_lang']);
            return serialize_blocks(
                $this->remap_block_translations(parse_blocks($source->post_content), $lang)
            );
        }


        private function remap_block_translations($blocks, $lang)
        {
            foreach ($blocks as &$block) {
                if (
                    ($block['blockName'] ?? '') === 'studiogram/header-post' &&
                    !empty($block['attrs']['data']['category'])
                ) {
                    $translated = pll_get_term((int) $block['attrs']['data']['category'], $lang);
                    if ($translated) {
                        $block['attrs']['data']['category'] = (string) $translated;
                    }
                }
                if (!empty($block['attrs']['data']) && is_array($block['attrs']['data'])) {
                    $block['attrs']['data'] = $this->remap_data_links($block['attrs']['data'], $lang);
                }
                if (!empty($block['innerBlocks'])) {
                    $block['innerBlocks'] = $this->remap_block_translations($block['innerBlocks'], $lang);
                }
            }
            return $blocks;
        }


        /**
         * Point post-reference ACF fields (page_link, post_object, relationship)
         * at their $lang translations. ACF stores block data flat — nested
         * repeater/group values become row-indexed keys, each paired with a
         * "_name" => field-key entry — so this single pass reaches every leaf.
         */
        private function remap_data_links(array $data, $lang)
        {
            if (!function_exists('pll_get_post') || !function_exists('acf_get_field')) {
                return $data;
            }

            $link_types = ['page_link', 'post_object', 'relationship'];

            foreach ($data as $name => $value) {
                if ($name === '' || $name[0] === '_') {
                    continue;
                }
                $key = $data['_' . $name] ?? '';
                if (!$key) {
                    continue;
                }
                $field = acf_get_field($key);
                if (!in_array($field['type'] ?? '', $link_types, true)) {
                    continue;
                }
                $data[$name] = is_array($value)
                    ? array_map(fn($id) => $this->translate_post_id($id, $lang), $value)
                    : $this->translate_post_id($value, $lang);
            }

            return $data;
        }


        private function translate_post_id($id, $lang)
        {
            $int = (int) $id;
            if (!$int) {
                return $id;
            }
            $translated = pll_get_post($int, $lang);
            if (!$translated) {
                return $id;
            }
            return is_string($id) ? (string) $translated : $translated;
        }


        /* Keep these ACF fields independent per language despite Polylang's
           custom-field synchronization (layout/disposition still syncs). */
        public function unsync_metas($keys)
        {
            return array_values(array_diff($keys, ['category_title', '_category_title']));
        }


        /* Rewrites the FR category term ids in header-post conditional logic to the
           current language's term, so the fields show on translated posts too. */
        public function translate_category_conditions($field)
        {
            if (empty($field['conditional_logic']) || !is_array($field['conditional_logic'])) {
                return $field;
            }
            if (!function_exists('pll_get_term') || !function_exists('pll_current_language')) {
                return $field;
            }
            $lang = pll_current_language();
            if (!$lang) {
                return $field;
            }
            foreach ($field['conditional_logic'] as $gi => $group) {
                foreach ($group as $ri => $rule) {
                    if (($rule['field'] ?? '') !== self::CATEGORY_FIELD_KEY) {
                        continue;
                    }
                    $term_id = (int) ($rule['value'] ?? 0);
                    if (!$term_id) {
                        continue;
                    }
                    $translated = pll_get_term($term_id, $lang);
                    if ($translated) {
                        $field['conditional_logic'][$gi][$ri]['value'] = (string) $translated;
                    }
                }
            }
            return $field;
        }
    }
endif;
