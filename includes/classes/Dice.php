<?php

namespace STUDIOGRAM;

if (!defined('ABSPATH')) exit;

if (!class_exists('STUDIOGRAM\Dice')) :
    class Dice
    {
        const SOFT = '#51648A';
        const OPTION = 'studiogram_dice_clicks';

        public function __construct()
        {
            add_action('wp_ajax_nopriv_dice_click', [$this, 'count_click']);
            add_action('wp_ajax_dice_click', [$this, 'count_click']);
            add_action('wp_dashboard_setup', [$this, 'dashboard_widget']);
        }

        public function count_click()
        {
            if (!check_ajax_referer('ajax-nonce', 'nonce', false)) {
                wp_send_json_error('bad nonce', 403);
            }
            $count = (int) get_option(self::OPTION, 0) + 1;
            update_option(self::OPTION, $count, false);
            wp_send_json_success($count);
        }

        public function dashboard_widget()
        {
            wp_add_dashboard_widget(
                'studiogram_dice_clicks',
                'Lancers du dé',
                [$this, 'render_widget']
            );
        }

        public function render_widget()
        {
            $count = (int) get_option(self::OPTION, 0);
            require STUDIOGRAM_THEME_DIR . '/includes/admin/dice-widget.php';
        }

        public static function data()
        {
            if (!function_exists('get_field')) return null;

            $palette = [];
            foreach (ACFColorPalette::get_palette() as $c) {
                $palette[$c['slug']] = $c['color'];
            }

            $lightblue = $palette['lightblue'] ?? null;

            $faces = [];
            foreach (get_terms(['taxonomy' => 'category', 'hide_empty' => false]) as $term) {
                $slug = get_field('color', $term);
                $color = $slug && isset($palette[$slug]) ? $palette[$slug] : null;
                if (!$color) continue;
                if ($lightblue && strcasecmp($color, $lightblue) === 0) continue;

                $urls = array_map('get_permalink', get_posts([
                    'post_type'   => 'post',
                    'numberposts' => -1,
                    'fields'      => 'ids',
                    'tax_query'   => [['taxonomy' => 'category', 'terms' => $term->term_id]],
                ]));

                $archive = get_term_link($term);
                if (is_wp_error($archive)) $archive = '';

                $faces[] = [
                    'slug'    => $term->slug,
                    'name'    => $term->name,
                    'color'   => $color,
                    'archive' => $archive,
                    'urls'    => array_values(array_filter($urls)),
                ];
            }

            $labo = get_page_by_path('labo');
            if ($labo && $lightblue) {
                $url = get_permalink($labo);
                $anchors = self::labo_anchors($labo, $url);
                $faces[] = [
                    'slug'    => 'labo',
                    'name'    => 'Labo',
                    'color'   => $lightblue,
                    'archive' => $url,
                    'urls'    => $anchors ?: [$url],
                ];
            }

            return ['soft' => self::SOFT, 'faces' => array_slice($faces, 0, 5)];
        }

        private static function labo_anchors($labo, $url)
        {
            $anchors = [];
            foreach (parse_blocks($labo->post_content) as $b) {
                if (!in_array($b['blockName'] ?? '', ['acf/studiogram-labo-project', 'studiogram/labo-project'], true)) continue;
                $title = $b['attrs']['data']['title'] ?? '';
                if ($title) $anchors[] = $url . '#' . sanitize_title($title);
            }
            return $anchors;
        }
    }
endif;
