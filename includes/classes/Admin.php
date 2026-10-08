<?php

namespace STUDIOGRAM;

if (!defined('ABSPATH')) exit;

if (!class_exists('STUDIOGRAM\Admin')) :
    class Admin
    {
        public function __construct()
        {
            add_action('acf/init', [$this, 'acf_options_pages']);
            add_filter('acf/load_field/name=custom_menu_admin', [$this, 'acf_load_menu']);

            add_action('login_enqueue_scripts', [$this, 'custom_login_logo']);
            add_action('admin_enqueue_scripts', [$this, 'custom_admin_logo']);
            add_action('admin_head', [$this, 'custom_gutemberg_logo']);
            add_action('login_enqueue_scripts', [$this, 'update_admin_styles_scripts']);
            add_action('admin_enqueue_scripts', [$this, 'update_admin_styles_scripts']);
            add_filter('login_redirect', [$this, 'redirect_after_login'], 10, 3);

            add_filter('manage_post_posts_columns', [$this, 'post_columns']);
            add_action('manage_post_posts_custom_column', [$this, 'post_column_content'], 10, 2);
            add_action('wp_ajax_toggle_post_status', [$this, 'ajax_toggle_post_status']);
            add_action('admin_post_studiogram_duplicate', [$this, 'duplicate_post']);
            add_filter('option_wpseo', [$this, 'disable_yoast_ai']);
            add_filter('display_post_states', [$this, 'hide_post_states'], 10, 2);
            add_filter('pre_trash_post', [$this, 'force_delete_post'], 10, 2);


            remove_action('template_redirect', '_wp_admin_bar_init', 0);
            remove_action('admin_init', '_wp_admin_bar_init');
            remove_action('before_signup_header', '_wp_admin_bar_init');
            remove_action('activate_header', '_wp_admin_bar_init');
            remove_action('wp_body_open', 'wp_admin_bar_render', 0);
            remove_action('wp_footer', 'wp_admin_bar_render', 999);
            remove_action('in_admin_header', 'wp_admin_bar_render', 0);
            add_filter('body_class', function ($classes) {
                return array_diff($classes, ['admin-bar']);
            }, 999);
        }


        public function update_admin_styles_scripts()
        {
            if (function_exists('get_field')) {
                $colors_fields = ["colors_background_primary", "colors_background_secondary", "colors_buttons_background", "colors_buttons_texts"];
                foreach ($colors_fields as $color_field) {
                    $color_field_value = get_field($color_field, 'custom-theme');
                    if ($color_field_value) echo "<style>:root {--{$color_field}: {$color_field_value};}</style>";
                }
            }
            wp_register_script('admin-scripts', get_stylesheet_directory_uri()   . '/dist/js/admin.js', [], null, true);
            wp_enqueue_script('admin-scripts');
            wp_localize_script('admin-scripts', 'localize', [
                'templateUrl' => get_stylesheet_directory_uri(),
                'ajaxurl' => admin_url('admin-ajax.php'),
                'busCronNonce' => wp_create_nonce('trigger_bus_cron_nonce'),
                'testAcfCronNonce' => wp_create_nonce('test_acf_cron_nonce'),
                'toggleStatusNonce' => wp_create_nonce('studiogram_toggle_status')
            ]);
            wp_register_style('admin-styles', get_stylesheet_directory_uri() . '/dist/css/admin.css', false, null);
            wp_enqueue_style('admin-styles');
        }


        public function custom_login_logo()
        {
            if (!function_exists('get_field')) return;
            $login_logo = get_field('logo_login_logo', 'custom-theme');
            $login_height = get_field('logo_login_size', 'custom-theme');
            if ($login_logo && $login_height) {
                echo "<style>#login h1 a, .login h1 a { background-image: url({$login_logo});background-size: auto {$login_height}px;height: {$login_height}px;  }</style>";
            }
        }


        public function custom_gutemberg_logo()
        {
            if (!function_exists('get_field')) return;
            $gutemberg_logo = get_field('logo_gutemberg_logo', 'custom-theme');
            if ($gutemberg_logo) {
                echo "<style>.edit-post-fullscreen-mode-close-site-icon { background: url({$gutemberg_logo}) center / calc(100% - 6px) auto no-repeat !important; }.edit-post-fullscreen-mode-close-site-icon svg{opacity: 0;}</style>";
            }
        }


        public function custom_admin_logo()
        {
            if (!function_exists('get_field')) return;
            $login_logo = get_field('logo_admin_logo', 'custom-theme');
            $login_height = get_field('logo_admin_size', 'custom-theme');
            $padding = $login_height ? $login_height + 40 : 60;
            if ($login_logo && $login_height) {
                echo "<style> #adminmenuwrap{padding-top: {$padding}px !important; background: url({$login_logo}) top 20px center/auto {$login_height}px no-repeat !important; height: calc(100dvh - {$padding}px) !important;}</style>";
            }
        }


        public function post_columns($columns)
        {
            $out = [];
            foreach ($columns as $key => $label) {
                if ($key === 'title') {
                    $out['studiogram_dup'] = '';
                    $out['studiogram_thumb'] = '';
                }
                $out[$key] = $label;
            }
            $out['studiogram_status'] = 'Visibilité';
            return $out;
        }


        public function post_column_content($column, $post_id)
        {
            if ($column === 'studiogram_dup') {
                $url = wp_nonce_url(
                    admin_url('admin-post.php?action=studiogram_duplicate&post=' . (int) $post_id),
                    'studiogram_duplicate_' . $post_id
                );
                printf(
                    '<a href="%s" class="button studiogram-duplicate" aria-label="%s" title="%s">+</a>',
                    esc_url($url),
                    esc_attr__('Dupliquer', 'studiogram'),
                    esc_attr__('Dupliquer', 'studiogram')
                );
                return;
            }

            if ($column === 'studiogram_thumb') {
                echo get_the_post_thumbnail($post_id, [56, 56], [
                    'class' => 'studiogram-thumb',
                    'loading' => 'lazy',
                ]);
                return;
            }

            if ($column === 'studiogram_status') {
                $published = get_post_status($post_id) === 'publish';
                printf(
                    '<button type="button" class="button %s studiogram-toggle-status" data-post="%d">%s</button>',
                    $published ? 'button-secondary' : 'button-primary',
                    (int) $post_id,
                    $published ? esc_html__('Masquer', 'studiogram') : esc_html__('Publier', 'studiogram')
                );
            }
        }


        public function disable_yoast_ai($value)
        {
            if (is_array($value)) {
                $value['enable_ai_generator'] = false;
            }
            return $value;
        }


        public function duplicate_post()
        {
            $post_id = isset($_GET['post']) ? absint($_GET['post']) : 0;
            check_admin_referer('studiogram_duplicate_' . $post_id);

            $post = $post_id ? get_post($post_id) : null;
            if (!$post || $post->post_type !== 'post' || !current_user_can('edit_posts')) {
                wp_die('forbidden');
            }

            $new_id = wp_insert_post([
                'post_type'    => $post->post_type,
                'post_title'   => wp_slash($post->post_title),
                'post_content' => wp_slash($post->post_content),
                'post_excerpt' => wp_slash($post->post_excerpt),
                'post_status'  => 'draft',
                'post_author'  => get_current_user_id(),
            ], true);

            if (is_wp_error($new_id) || !$new_id) {
                wp_die('duplicate failed');
            }

            $skip_tax = ['language', 'post_translations', 'term_language', 'term_translations'];
            foreach (get_object_taxonomies($post->post_type) as $tax) {
                if (in_array($tax, $skip_tax, true)) {
                    continue;
                }
                $terms = wp_get_object_terms($post_id, $tax, ['fields' => 'ids']);
                if (!is_wp_error($terms)) {
                    wp_set_object_terms($new_id, $terms, $tax);
                }
            }

            foreach (get_post_meta($post_id) as $key => $values) {
                if (in_array($key, ['_edit_lock', '_edit_last'], true)) {
                    continue;
                }
                foreach ($values as $value) {
                    add_post_meta($new_id, $key, wp_slash(maybe_unserialize($value)));
                }
            }

            if (function_exists('pll_get_post_language') && function_exists('pll_set_post_language')) {
                $lang = pll_get_post_language($post_id);
                if ($lang) {
                    pll_set_post_language($new_id, $lang);
                }
            }

            wp_safe_redirect(admin_url('edit.php?post_type=post'));
            exit;
        }


        public function force_delete_post($check, $post)
        {
            if ($post && $post->post_type === 'post') {
                wp_delete_post($post->ID, true);
                return true;
            }
            return $check;
        }


        public function hide_post_states($states, $post)
        {
            if ($post && $post->post_type === 'post') {
                return [];
            }
            return $states;
        }


        public function ajax_toggle_post_status()
        {
            check_ajax_referer('studiogram_toggle_status', 'nonce');

            $post_id = isset($_POST['post']) ? absint($_POST['post']) : 0;
            if (!$post_id || !current_user_can('edit_post', $post_id)) {
                wp_send_json_error('forbidden', 403);
            }

            $new = get_post_status($post_id) === 'publish' ? 'draft' : 'publish';
            wp_update_post(['ID' => $post_id, 'post_status' => $new]);

            wp_send_json_success(['status' => $new]);
        }


        public function redirect_after_login($redirect_to, $requested_redirect_to, $user)
        {
            if (!is_wp_error($user) && $user->has_cap('edit_posts')) {
                return \admin_url('edit.php');
            }

            return $redirect_to;
        }


        public function acf_options_pages()
        {
            $options_theme = acf_add_options_page([
                'menu_title' => 'Customisations',
                'page_title' => 'Customisation thème',
                'menu_slug' => 'custom-theme',
                'capability' => 'activate_plugins',
                'icon_url' => 'dashicons-editor-alignleft',
                'redirect' => false,
                'post_id' => "custom-theme",
                'position' => 10
            ]);
            $options_content = acf_add_options_page([
                'menu_title' => 'Contenu',
                'page_title' => 'Contenu',
                'menu_slug' => 'custom-content',
                'capability' => 'activate_plugins',
                'icon_url' => 'dashicons-edit',
                'redirect' => false,
                'post_id' => "custom-content",
                'position' => 5,
                'show_in_graphql' => true,
                'graphql_field_name' => 'acfContent'
            ]);
            $options_menu = acf_add_options_page([
                'menu_title' => 'Menus',
                'page_title' => 'Menus',
                'menu_slug' => 'custom-menu',
                'capability' => 'activate_plugins',
                'icon_url' => 'dashicons-edit',
                'redirect' => false,
                'post_id' => "custom-menu",
                'position' => 5,
                'show_in_graphql' => true,
                'graphql_field_name' => 'acfContent'
            ]);
        }


        /**
         * @param array $fields - List of fields
         * @return array $fields
         */
        public function acf_load_menu($fields)
        {
            $fields['choices'] = [];
            foreach ($GLOBALS['menu'] as $key => $menu) {
                if ($menu[0]) $fields['choices'][$menu[2]] = $menu[0];
            }
            return $fields;
        }
    }
endif;
