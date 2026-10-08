<?php

namespace STUDIOGRAM;


if (!defined('ABSPATH')) exit;

if (!class_exists('STUDIOGRAM\Setup')) :
    class Setup
    {

        public function __construct()
        {
            $this->disable_emojis();
            $this->remove_actions();
            $this->remove_comments();
            add_action('wp_default_scripts', [$this, 'remove_jquery_migrate']);
            add_filter('comments_open', '__return_false', 99, 2);
            add_filter('pings_open', '__return_false', 99, 2);
            add_filter('comments_array', '__return_empty_array', 10, 2);
            add_action('wp_enqueue_scripts', [$this, 'remove_styles_scripts']);
            add_action('wp_enqueue_scripts', [$this, 'defer_block_scripts']);
            add_filter('the_generator', [$this, 'remove_version']);
            add_filter('upload_mimes', [$this, 'add_mime_types']);
            add_filter('upload_size_limit', fn() => 20 * MB_IN_BYTES);
            add_filter('admin_footer_text', [$this, 'remove_footer_admin'], 20, 1);
            add_filter('timber/context', [$this, 'add_timber_context'], 99);
            add_filter('should_load_separate_core_block_assets', '__return_true');
            add_action('admin_init', [$this, 'disable_autosave']);
            add_action('admin_init', [$this, 'redirect_dashboard']);
        }


        /**
         * @param array $context
         * @return array $context
         */
        public function add_timber_context($context)
        {
            $post = get_post();
            $content = function_exists('get_fields') ? get_fields('custom-content') : null;
            $menus = function_exists('get_fields') ? get_fields('custom-menu') : null;
            $context['content'] = $content ?? null;
            $context['menu'] = $menus ?? null;
            $context['body_class'] = 'studiogram ' . $context['body_class'];
            $post = get_post();
            $context['post'] = $post;
            $context['admin'] = is_admin();
            $theme_source_id = $post ? $post->ID : 0;
            if (is_home() || is_category() || is_archive()) {
                $blog_id = (int) get_option('page_for_posts');
                if ($blog_id) $theme_source_id = $blog_id;
            }
            $context['theme'] = ($theme_source_id && get_post_meta($theme_source_id, 'theme', true)) ? 'light' : 'dark';
            $context['primary_menu'] = \Timber\Timber::get_menu('primary') ?: null;
            $context['footer_menu'] = \Timber\Timber::get_menu('footer') ?: null;
            $context['home'] = function_exists('pll_home_url') ? pll_home_url() : home_url('/');
            $context['languages'] = function_exists('pll_the_languages') ? pll_the_languages([
                'raw' => 1,
                'hide_if_no_translation' => 0,
                'display_names_as' => 'slug',
            ]) : [];
            return $context;
        }



        public function redirect_dashboard()
        {
            global $pagenow;

            if ($pagenow === 'index.php' && ! wp_doing_ajax()) {
                wp_safe_redirect(admin_url('edit.php?lang=fr'));
                exit;
            }
        }


        public function disable_autosave()
        {
            wp_deregister_script('autosave');
            add_filter('block_editor_settings_all', function ($settings) {
                $settings['autosaveInterval'] = 99999;
                $settings['localAutosaveInterval'] = 99999;
                return $settings;
            });
        }



        /**
         * @param object $scripts
         */
        public function remove_jquery_migrate($scripts)
        {
            if (!is_admin() && isset($scripts->registered['jquery'])) {
                $script = $scripts->registered['jquery'];
                if ($script->deps) {
                    $script->deps = array_diff($script->deps, ['jquery-migrate']);
                }
            }
        }



        public function remove_styles_scripts()
        {
            wp_dequeue_style('classic-theme-styles');
            wp_dequeue_style('global-styles');
        }

        /**
         * @return boolean
         */
        public function remove_footer_admin()
        {
            return false;
        }

        /**
         * @param array $mimes
         * @return array
         */
        public function add_mime_types($mimes)
        {
            $mimes['svg'] = 'image/svg+xml';
            $mimes['splinecode'] = 'application/octet-stream';
            return $mimes;
        }

        public function remove_version()
        {
            return '';
        }

        /**
         * @param array $plugins
         */
        public function disable_emojis_tinymce($plugins)
        {
            if (is_array($plugins)) {
                return array_diff($plugins, ['wpemoji']);
            }
            return [];
        }

        /**
         * @param array $urls
         * @param string $relation_type
         */
        public function disable_emojis_remove_dns_prefetch($urls, $relation_type)
        {
            if ('dns-prefetch' === $relation_type) {
                $emoji_svg_url = apply_filters('emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/');
                $urls = array_diff($urls, [$emoji_svg_url]);
            }
            return $urls;
        }

        private function remove_actions()
        {
            remove_action('wp_head', 'rest_output_link_wp_head', 10);
            remove_action('wp_head', 'wp_oembed_add_discovery_links', 10);
            remove_action('template_redirect', 'rest_output_link_header', 11, 0);
            remove_action('wp_head', 'rsd_link');
            remove_action('wp_head', 'wlwmanifest_link');
            remove_action('wp_head', 'wp_shortlink_wp_head');
        }

        private function remove_comments()
        {
            global $pagenow;
            if ($pagenow === 'edit-comments.php') {
                wp_redirect(admin_url());
                exit;
            }
            foreach (get_post_types() as $post_type) {
                if (post_type_supports($post_type, 'comments')) {
                    remove_post_type_support($post_type, 'comments');
                    remove_post_type_support($post_type, 'trackbacks');
                }
            }
        }


        private function disable_emojis()
        {
            remove_action('wp_head', 'print_emoji_detection_script', 7);
            remove_action('admin_print_scripts', 'print_emoji_detection_script');
            remove_action('wp_print_styles', 'print_emoji_styles');
            remove_action('admin_print_styles', 'print_emoji_styles');
            remove_filter('the_content_feed', 'wp_staticize_emoji');
            remove_filter('comment_text_rss', 'wp_staticize_emoji');
            remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
            add_filter('tiny_mce_plugins', [$this, 'disable_emojis_tinymce']);
            add_filter('wp_resource_hints', [$this, 'disable_emojis_remove_dns_prefetch'], 10, 2);
        }

        public function defer_block_scripts()
        {
            global $wp_scripts;
            foreach ($wp_scripts->registered as $handle => $script) {
                if (strpos($script->src, '/blocks/') !== false) {
                    add_filter('script_loader_tag', function ($tag, $script_handle) use ($handle) {
                        if ($handle === $script_handle) {
                            return str_replace(' src', ' defer src', $tag);
                        }
                        return $tag;
                    }, 10, 2);
                }
            }
        }
    }
endif;
