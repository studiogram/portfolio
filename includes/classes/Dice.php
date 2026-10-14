<?php

namespace STUDIOGRAM;

if (!defined('ABSPATH')) exit;

if (!class_exists('STUDIOGRAM\Dice')) :
    class Dice
    {
        const SOFT = '#51648A';

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
                if (!in_array($b['blockName'] ?? '', ['acf/studiogram-labo', 'studiogram/labo'], true)) continue;
                $data = $b['attrs']['data'] ?? [];
                $count = (int) ($data['items'] ?? 0);
                for ($i = 0; $i < $count; $i++) {
                    $title = $data["items_{$i}_title"] ?? '';
                    if ($title) $anchors[] = $url . '#' . sanitize_title($title);
                }
            }
            return $anchors;
        }
    }
endif;
