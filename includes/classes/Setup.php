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
            add_action('pre_get_posts', [$this, 'filter_secteur']);
            add_action('wp_ajax_load_posts', [$this, 'load_posts']);
            add_action('wp_ajax_nopriv_load_posts', [$this, 'load_posts']);
            add_action('wp_ajax_load_notes', [$this, 'load_notes']);
            add_action('wp_ajax_nopriv_load_notes', [$this, 'load_notes']);
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

            $context['header'] = $menus['header'] ?: null;
            $context['contact'] = $menus['contact'] ?: null;
            $context['footer'] = $menus['footer'] ?: null;

            $context['show_contact'] = function_exists('get_field') ? get_field('show_contact') : null;
            $context['dice'] = Dice::data();
            $context['home'] = function_exists('pll_home_url') ? pll_home_url() : home_url('/');

            if (is_home() || is_category() || is_post_type_archive('post')) {
                $context['archive'] = $this->archive_context();
            }
            if (is_post_type_archive('notes')) {
                $context['notes_archive'] = $this->notes_archive_context();
            }
            return $context;
        }

        private const NOTES_PER_PAGE = 12;

        private function notes_archive_context()
        {
            $query = $this->notes_query(1);

            return [
                'title'       => (function_exists('get_field') ? (string) get_field('notes_title', 'custom-content') : '') ?: '',
                'description' => (function_exists('get_field') ? (string) get_field('notes_description', 'custom-content') : '') ?: '',
                'url'         => get_post_type_archive_link('notes'),
                'notes'       => $this->note_rows($query),
                'pages'       => (int) $query->max_num_pages,
                'current'     => 1,
            ];
        }

        private function notes_query(int $paged): \WP_Query
        {
            return new \WP_Query([
                'post_type'      => 'notes',
                'post_status'    => 'publish',
                'posts_per_page' => self::NOTES_PER_PAGE,
                'paged'          => max(1, $paged),
            ]);
        }

        private function note_rows(\WP_Query $query): array
        {
            $rows = [];
            foreach ($query->posts as $post) {
                $pid     = function_exists('get_field') ? (int) get_field('related_project', $post->ID) : 0;
                $project = null;
                if ($pid && ($p = get_post($pid))) {
                    $terms = get_the_terms($pid, 'category');
                    $term  = (!is_wp_error($terms) && $terms) ? $terms[0] : null;
                    $color = $term && function_exists('get_field')
                        ? (get_field('color', 'category_' . $term->term_id) ?: 'dark')
                        : 'dark';
                    $project = ['label' => get_the_title($p), 'color' => $color];
                }
                $rows[] = [
                    'title'   => get_the_title($post),
                    'url'     => get_permalink($post),
                    'project' => $project,
                ];
            }
            return $rows;
        }

        public function load_notes()
        {
            check_ajax_referer('ajax-nonce', 'nonce');

            $paged = isset($_POST['paged']) ? max(1, (int) $_POST['paged']) : 1;
            $query = $this->notes_query($paged);
            $html  = \Timber\Timber::compile('views/partials/notes/rows.twig', [
                'notes' => $this->note_rows($query),
            ]);

            wp_send_json_success([
                'html'    => $html,
                'pages'   => (int) $query->max_num_pages,
                'current' => $paged,
            ]);
        }


        /**
         * Context for the Projets archive: hero ACF fields (stored on the
         * posts page), sector filter terms + their colour, and the main query.
         *
         * @return array
         */
        private function archive_context()
        {
            $posts_page = (int) get_option('page_for_posts');
            $base_url   = $posts_page ? get_permalink($posts_page) : home_url('/');
            $current    = is_category() ? (int) get_queried_object_id() : 0;

            $field = fn(string $name, string $fallback = '') =>
                ($posts_page && function_exists('get_field') ? get_field($name, $posts_page) : '') ?: $fallback;

            $categories = [];
            $terms = get_terms(['taxonomy' => 'category', 'hide_empty' => true]);
            if (!is_wp_error($terms)) {
                foreach ($terms as $term) {
                    $link  = get_term_link($term);
                    $color = function_exists('get_field') ? get_field('color', 'category_' . $term->term_id) : '';
                    $color = $color ?: 'dark';
                    $categories[] = [
                        'id'         => $term->term_id,
                        'title'      => $term->name,
                        'url'        => is_wp_error($link) ? $base_url : $link,
                        'color'      => $color,
                        'text_color' => $this->contrast($color),
                    ];
                }
            }

            return [
                'hero_title'    => $field('hero_title', 'Projets'),
                'hero_subtitle' => $field('hero_subtitle'),
                'filter_label'  => $field('filter_label', 'Filtrer par secteur :'),
                'categories'    => $categories,
                'current_cat'   => $current,
                'cartouche'     => $this->cartouche_data($current, $field('hero_title', 'Projets'), $field('hero_subtitle')),
                'url'           => $base_url,
                'posts'         => $this->archive_posts($current),
            ];
        }

        private function archive_posts(int $cat)
        {
            $args = ['post_type' => 'post', 'post_status' => 'publish', 'posts_per_page' => -1];
            if ($cat > 0) $args['cat'] = $cat;

            return \Timber\Timber::get_posts(new \WP_Query($args));
        }

        private function contrast(string $slug): string
        {
            return $slug === 'dark' ? 'light' : 'dark';
        }

        private function cartouche_data(int $cat, string $default_title, string $subtitle): array
        {
            if ($cat <= 0) {
                return ['title' => $default_title, 'text' => $subtitle, 'color' => ''];
            }

            return [
                'title' => get_cat_name($cat) ?: $default_title,
                'text'  => $subtitle,
                'color' => (function_exists('get_field') ? (string) get_field('color', 'category_' . $cat) : '') ?: 'dark',
            ];
        }


        public function load_posts()
        {
            check_ajax_referer('ajax-nonce', 'nonce');

            $cat   = isset($_POST['cat']) ? (int) $_POST['cat'] : 0;
            $posts = $this->archive_posts($cat);
            $html  = \Timber\Timber::compile('views/partials/archive/posts.twig', ['posts' => $posts]);

            wp_send_json_success(['html' => $html]);
        }



        public function filter_secteur($query)
        {
            if (is_admin() || !$query->is_main_query()) return;
            if (!isset($_GET['secteur'])) return;
            $secteur = sanitize_text_field(wp_unslash($_GET['secteur']));
            if ($secteur === '') return;
            $term = is_numeric($secteur)
                ? get_term((int) $secteur, 'category')
                : get_term_by('slug', $secteur, 'category');
            if ($term && !is_wp_error($term) && ($query->is_home() || $query->is_post_type_archive('post'))) {
                $query->set('cat', $term->term_id);
            }
        }


        public function redirect_dashboard()
        {
            global $pagenow;

            if ($pagenow === 'index.php' && ! wp_doing_ajax() && ! current_user_can('update_core')) {
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
            // our dynamic sector favicon is the single source of truth
            remove_action('wp_head', 'wp_site_icon', 99);
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
