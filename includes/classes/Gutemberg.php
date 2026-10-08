<?php

namespace STUDIOGRAM;

use Timber\Timber;


if (!defined('ABSPATH')) exit;

if (!class_exists('STUDIOGRAM\Gutemberg')) :
    class Gutemberg
    {
        public function __construct()
        {
            add_action('init', [$this, 'register_acf_blocks']);
            add_action('init', [$this, 'init_block_template'], 99);
            remove_action('enqueue_block_editor_assets', 'wp_enqueue_editor_block_directory_assets');
            add_filter('allowed_block_types_all', [$this, 'limit_block_type'], 10, 2);
            add_filter('block_editor_settings_all', [$this, 'remove_blocks_suggestions'], 10, 1);
            add_filter('block_categories_all', [$this, 'set_custom_block_categories'], 10, 1);
            add_filter('use_block_editor_for_post', [$this, 'disable_gutemberg_post_types'], 10, 2);
            add_filter('use_block_editor_for_post', [$this, 'disable_gutemberg_pages_templates'], 90, 2);
        }


        /**
         * @param array $categories
         * @return array $categories
         */
        public function set_custom_block_categories($categories)
        {
            $categories[] = [
                'slug'  => 'headers',
                'title' => 'En-têtes'
            ];
            $categories[] = [
                'slug'  => 'studiogram',
                'title' => 'Blocs'
            ];

            return $categories;
        }


        /**
         * @param array $editor_settings
         */
        public function remove_blocks_suggestions($editor_settings)
        {
            if (isset($editor_settings['enableBlockDirectory'])) {
                $editor_settings['enableBlockDirectory'] = false;
            }
            return $editor_settings;
        }



        public function limit_block_type($allowed_blocks)
        {

            $acf_blocks = STUDIOGRAM_BLOCKS_PATH;
            $acf_blocks = scandir($acf_blocks);
            if ($acf_blocks) :
                $allowed_blocks = [];
                foreach ($acf_blocks as $key => $acf_block) {
                    if ($acf_block == '.' || $acf_block == '..') {
                        unset($acf_blocks[$key]);
                        continue;
                    }
                    $allowed_blocks[] = 'studiogram/' . $acf_block;
                }
            endif;
            return $allowed_blocks;
        }


        public function register_acf_blocks()
        {
            foreach ($blocks = new \DirectoryIterator(STUDIOGRAM_BLOCKS_PATH) as $item) {
                if (
                    $item->isDir() && !$item->isDot()
                    && file_exists($item->getPathname() . '/block.json')
                ) {
                    register_block_type($item->getPathname(), [
                        'render_callback' => [$this, 'render_block'],
                    ]);
                }
            }
        }


        private function fields_with_defaults($block = null): array
        {
            $values = function_exists('get_fields') ? (get_fields() ?: []) : [];
            if (empty($block['name']) || !function_exists('acf_get_field_groups')) {
                return $values;
            }

            // Once a field is configured, ACF stores it in $block['data'] keyed either by
            // field name ("text", on save/reload) or field key ("field_abc123", during the
            // live edit preview). A field with neither key present has never been set, so
            // fall back to its ACF default. Keying on presence (not the value) keeps
            // intentional false/empty saves untouched.
            $data = is_array($block['data'] ?? null) ? $block['data'] : [];

            foreach (acf_get_field_groups(['block' => $block['name']]) as $group) {
                foreach ((acf_get_fields($group) ?: []) as $field) {
                    $name = $field['name'] ?? '';
                    $key = $field['key'] ?? '';
                    $default = $field['default_value'] ?? null;
                    if ($name === '' || $default === null || $default === '') continue;
                    if (!array_key_exists($name, $values) && !array_key_exists($name, $data) && !array_key_exists($key, $data)) {
                        $values[$name] = $default;
                    }
                }
            }
            return $values;
        }


        public function render_block($block, $content = '', $is_preview = false)
        {
            $context = Timber::context();
            $slug = str_replace('studiogram/', '', $block['name']);
            $file = get_theme_file_path('blocks/' . $slug . '/block.php');
            $preview_image_path = 'blocks/' . $slug . '/preview.jpg';

            if ($is_preview && !empty($block['data']['preview_image']) && file_exists(get_theme_file_path($preview_image_path))) {
                echo '<img src="' . esc_url(get_theme_file_uri($preview_image_path)) . '" style="width:100%; height: auto;" />';
                return;
            }

            $fields = $this->fields_with_defaults($block);
            $context['block_id'] = !empty($fields['has_id']) && !empty($fields['identifiant']) ? 'id="' . esc_attr($fields['identifiant']) . '"' : '';

            if ($file) {
                extract($block);
                extract($context);
                require $file;
            } else {
                $context['block'] = $block;
                $context['fields'] = $fields;
                Timber::render('blocks/' . $slug . '/block.twig', $context);
            }
        }


        public function init_block_template()
        {
            if (!empty($_GET['from_post']) && !empty($_GET['new_lang'])) {
                return;
            }

            /* Pre-insert a header block on new pages/posts. */
            $default_headers = [
                'page' => 'studiogram/header',
                'post' => 'studiogram/header',
            ];

            foreach ($default_headers as $post_type => $header_block) {
                $post_type_object = get_post_type_object($post_type);
                if (!$post_type_object) continue;
                $post_type_object->template = [[$header_block]];
            }
        }

        /**
         * @param boolean $use_block_editor
         * @param object $post
         * @return boolean $use_block_editor
         */
        public function disable_gutemberg_post_types($use_block_editor, $post)
        {
            $disable_types = [];
            return in_array($post->post_type, $disable_types) ? false : $use_block_editor;
        }

        /**
         * @param boolean $use_block_editor
         * @param object $post
         * @return boolean $use_block_editor
         */
        public function disable_gutemberg_pages_templates($use_block_editor, $post)
        {
            if ($post && (int) $post->ID === (int) get_option('page_for_posts')) {
                return false;
            }
            $disable_templates = [];
            return 'page' === $post->post_type && in_array(get_page_template_slug($post->ID), $disable_templates) ? false : $use_block_editor;
        }
    }
endif;
