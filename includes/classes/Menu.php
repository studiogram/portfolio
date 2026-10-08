<?php

namespace STUDIOGRAM;

if (!defined('ABSPATH')) exit;

if (!class_exists('STUDIOGRAM\Menu')) :
    class Menu
    {
        public function __construct()
        {
            add_action('admin_menu', [$this, 'custom_menu'], 99);
            add_filter('custom_menu_order', '__return_true');
            add_filter('menu_order', [$this, 'reorder_admin_menu']);
            add_filter('manage_posts_columns', [$this, 'remove_columns']);
            add_filter('manage_pages_columns', [$this, 'remove_columns']);
            add_action('load-edit.php', [$this, 'default_language_redirect']);
            add_action('restrict_manage_posts', [$this, 'render_language_switcher']);
            add_action('admin_init', [$this, 'remove_yoast_filters'], 99);
            add_filter('disable_months_dropdown', '__return_true');
        }


        /**
         * @param int $post_ID
         * @param object $post
         */
        public function remove_columns($columns)
        {
            unset($columns['comments']);
            unset($columns['author']);
            unset($columns['tags']);
            unset($columns['date']);
            return $columns;
        }

        public function remove_yoast_filters()
        {
            global $wpseo_meta_columns;
            if ($wpseo_meta_columns) {
                remove_action('restrict_manage_posts', [$wpseo_meta_columns, 'posts_filter_dropdown']);
                remove_action('restrict_manage_posts', [$wpseo_meta_columns, 'posts_filter_dropdown_readability']);
            }
        }

        public function custom_menu()
        {
            // dump(array_map(function ($item) {
            //     return isset($item[2]) ? $item[2] : null;
            // }, $GLOBALS['menu']));

            if (function_exists('get_field') && is_array(get_option('superadmins')) && !in_array(get_current_user_id(), get_option('superadmins'))) {
                $hidden_menus = get_field('custom_menu_admin', 'custom-theme');
                if (is_array($hidden_menus)) {
                    foreach ($hidden_menus as $menu) remove_menu_page($menu);
                }
            }
            remove_menu_page('edit-comments.php');

            add_menu_page("logout", "Se déconnecter", 'manage_options', wp_logout_url(), null, 'dashicons-no', 200);
        }


        /**
         * Redirect to ?lang=fr by default on post list screens.
         */
        public function default_language_redirect()
        {
            if (!function_exists('pll_default_language')) {
                return;
            }

            if (!isset($_GET['lang'])) {
                $url = add_query_arg('lang', pll_default_language(), $_SERVER['REQUEST_URI']);
                wp_redirect($url);
                exit;
            }
        }


        /**
         * Render flag-only language switcher on post list screens.
         */
        public function render_language_switcher()
        {
            if (!function_exists('pll_languages_list')) {
                return;
            }

            $languages = pll_languages_list(['fields' => []]);
            if (empty($languages)) {
                return;
            }

            $current_lang = $_GET['lang'] ?? '';
            $base_url = remove_query_arg('lang');

            foreach ($languages as $lang) {
                $url = add_query_arg('lang', $lang->slug, $base_url);
                $active = ($current_lang === $lang->slug);
                $class = $active ? 'button button-primary' : 'button';
                echo '<a href="' . esc_url($url) . '" class="' . $class . '" style="text-decoration:none;margin-right:8px !important;">';
                echo $lang->flag ?? esc_html(strtoupper($lang->slug));
                echo '</a>';
            }
        }


        /**
         * @param array $menu_order
         * @return array
         */
        public function reorder_admin_menu($menu_order)
        {
            $pages_index = array_search('edit.php?post_type=page', $menu_order);

            if ($pages_index !== false) {
                unset($menu_order[$pages_index]);
                $menu_order = array_values($menu_order);

                $dashboard_index = array_search('index.php', $menu_order);
                $insert_at = ($dashboard_index !== false) ? $dashboard_index + 1 : 0;
                array_splice($menu_order, $insert_at, 0, 'edit.php?post_type=page');
            }

            return $menu_order;
        }
    }
endif;
