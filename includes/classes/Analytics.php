<?php

namespace STUDIOGRAM;

if (!defined('ABSPATH')) exit;

if (!class_exists('STUDIOGRAM\Analytics')) :
    class Analytics
    {
        public const META_HISTORY = '_view_counts';
        public const META_CURRENT = '_view_count_current';
        public const COUNTED_TYPES = ['post', 'page'];

        private array $bot_signatures = [
            'bot', 'crawl', 'spider', 'slurp', 'bingpreview',
            'facebookexternalhit', 'headless', 'python-requests',
            'curl', 'wget', 'phantomjs', 'lighthouse', 'pingdom',
            // AI / LLM crawlers
            'gptbot', 'oai-searchbot', 'chatgpt', 'claudebot', 'anthropic',
            'ccbot', 'bytespider', 'google-extended', 'perplexitybot',
            'amazonbot', 'applebot', 'meta-externalagent', 'diffbot',
            // SEO / monitoring crawlers
            'ahrefs', 'semrush', 'mj12bot', 'dotbot', 'dataforseo',
            'petalbot', 'yandex', 'baiduspider', 'duckduckbot',
            'scrapy', 'okhttp', 'go-http-client', 'node-fetch', 'axios',
        ];

        private array $local_hosts = [
            'localhost', '127.0.0.1', '::1', '[::1]',
        ];

        private array $local_tlds = [
            '.localhost', '.local', '.test', '.dev', '.localdev',
        ];

        public function __construct()
        {
            add_action('wp_ajax_nopriv_track_view', [$this, 'track_view']);
            add_action('wp_ajax_track_view', [$this, 'track_view']);

            add_filter('manage_posts_columns', [$this, 'add_views_column']);
            add_filter('manage_pages_columns', [$this, 'add_views_column']);
            add_action('manage_posts_custom_column', [$this, 'render_views_column'], 10, 2);
            add_action('manage_pages_custom_column', [$this, 'render_views_column'], 10, 2);
            add_filter('manage_edit-post_sortable_columns', [$this, 'add_sortable_column']);
            add_filter('manage_edit-page_sortable_columns', [$this, 'add_sortable_column']);
            add_action('pre_get_posts', [$this, 'sort_by_views']);

            add_action('admin_menu', [$this, 'add_reset_page']);
            add_action('admin_post_studiogram_reset_views', [$this, 'handle_reset_views']);
        }

        public function add_reset_page()
        {
            add_management_page(
                'Réinitialiser les vues',
                'Réinitialiser les vues',
                'activate_plugins',
                'studiogram-reset-views',
                [$this, 'render_reset_page']
            );
        }

        public function render_reset_page()
        {
            $done = isset($_GET['reset']) && $_GET['reset'] === 'done';
            echo '<div class="wrap">';
            echo '<h1>Réinitialiser les vues</h1>';
            if ($done) {
                echo '<div class="notice notice-success"><p>Toutes les vues des articles et pages ont été remises à zéro.</p></div>';
            }
            echo '<p>Remet à zéro le compteur de vues de tous les articles et toutes les pages. Action irréversible.</p>';
            echo '<form method="post" action="' . esc_url(admin_url('admin-post.php')) . '" onsubmit="return confirm(\'Remettre à zéro toutes les vues ? Cette action est irréversible.\');">';
            echo '<input type="hidden" name="action" value="studiogram_reset_views">';
            wp_nonce_field('studiogram_reset_views');
            submit_button('Réinitialiser les vues', 'delete');
            echo '</form>';
            echo '</div>';
        }

        public function handle_reset_views()
        {
            check_admin_referer('studiogram_reset_views');
            if (!current_user_can('activate_plugins')) {
                wp_die('forbidden');
            }

            // $delete_all=true removes the key for every post, no per-post loop.
            delete_metadata('post', 0, self::META_HISTORY, '', true);
            delete_metadata('post', 0, self::META_CURRENT, '', true);
            delete_metadata('post', 0, 'post_views_count', '', true);

            wp_safe_redirect(add_query_arg(
                ['page' => 'studiogram-reset-views', 'reset' => 'done'],
                admin_url('tools.php')
            ));
            exit;
        }

        public function track_view()
        {
            if (!check_ajax_referer('ajax-nonce', 'nonce', false)) {
                wp_send_json_error('bad nonce', 403);
            }
            if (is_user_logged_in()) {
                wp_send_json_success('skipped: logged in');
            }
            if ($this->is_local()) {
                wp_send_json_success('skipped: local');
            }
            if ($this->is_bot()) {
                wp_send_json_success('skipped: bot');
            }

            $post_id = isset($_POST['post_id']) ? absint($_POST['post_id']) : 0;
            if (!$post_id) {
                wp_send_json_error('missing post_id', 400);
            }

            $post = get_post($post_id);
            if (
                !$post
                || $post->post_status !== 'publish'
                || !in_array($post->post_type, self::COUNTED_TYPES, true)
            ) {
                wp_send_json_error('invalid post', 400);
            }

            $this->increment($post_id);
            wp_send_json_success('counted');
        }

        public function add_views_column($columns)
        {
            $columns['views'] = 'Vues';
            return $columns;
        }

        public function render_views_column($column, $post_id)
        {
            if ($column !== 'views') {
                return;
            }
            echo esc_html((int) get_post_meta($post_id, self::META_CURRENT, true));
        }

        public function add_sortable_column($columns)
        {
            $columns['views'] = 'views';
            return $columns;
        }

        public function sort_by_views($query)
        {
            if (!is_admin() || !$query->is_main_query()) {
                return;
            }
            if ($query->get('orderby') !== 'views') {
                return;
            }
            add_filter('posts_clauses', [$this, 'views_orderby_clauses'], 10, 2);
        }

        public function views_orderby_clauses($clauses, $query)
        {
            global $wpdb;
            // Run once for this query only.
            remove_filter('posts_clauses', [$this, 'views_orderby_clauses'], 10);

            $order = strtoupper((string) $query->get('order')) === 'ASC' ? 'ASC' : 'DESC';

            // LEFT JOIN so unvisited posts (no meta row) are kept and sorted as 0.
            $clauses['join'] .= $wpdb->prepare(
                " LEFT JOIN {$wpdb->postmeta} AS studiogram_vc"
                    . " ON ({$wpdb->posts}.ID = studiogram_vc.post_id AND studiogram_vc.meta_key = %s) ",
                self::META_CURRENT
            );
            $clauses['orderby'] = "CAST(COALESCE(studiogram_vc.meta_value, 0) AS SIGNED) {$order}, {$wpdb->posts}.post_date DESC";
            $clauses['groupby'] = "{$wpdb->posts}.ID";

            return $clauses;
        }

        private function increment(int $post_id): void
        {
            $year = date('Y');
            $counts = get_post_meta($post_id, self::META_HISTORY, true);
            if (!is_array($counts)) {
                $counts = [];
            }
            $counts[$year] = ($counts[$year] ?? 0) + 1;
            update_post_meta($post_id, self::META_HISTORY, $counts);
            update_post_meta($post_id, self::META_CURRENT, $counts[$year]);
        }

        private function is_local(): bool
        {
            if (function_exists('wp_get_environment_type') && wp_get_environment_type() === 'local') {
                return true;
            }

            $host = strtolower($_SERVER['HTTP_HOST'] ?? '');
            if ($host === '') {
                return false;
            }
            // Strip port (e.g. localhost:3000).
            $host = preg_replace('/:\d+$/', '', $host);

            if (in_array($host, $this->local_hosts, true)) {
                return true;
            }
            foreach ($this->local_tlds as $tld) {
                if (substr($host, -strlen($tld)) === $tld) {
                    return true;
                }
            }
            return false;
        }

        private function is_bot(): bool
        {
            $ua = strtolower($_SERVER['HTTP_USER_AGENT'] ?? '');
            if ($ua === '') {
                return true;
            }
            foreach ($this->bot_signatures as $sig) {
                if (strpos($ua, $sig) !== false) {
                    return true;
                }
            }
            return false;
        }
    }
endif;
