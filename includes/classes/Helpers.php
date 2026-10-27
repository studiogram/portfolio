<?php

namespace STUDIOGRAM;

use Twig\TwigFunction;
use Timber\PostQuery;
use WP_Query;

if (!defined('ABSPATH')) exit;

if (!class_exists('STUDIOGRAM\Helpers')) :
    class Helpers
    {
        public function __construct()
        {
            add_filter('timber/twig', [$this, 'add_to_twig']);
        }

        /**
         * @param \Twig\Environment $twig
         * @return \Twig\Environment
         */
        public function add_to_twig($twig)
        {
            $twig->addFunction(new TwigFunction('block_class', [$this, 'block_class']));
            $twig->addFunction(new TwigFunction('image_info', [$this, 'image_info']));
            $twig->addFunction(new TwigFunction('image_dimensions', [$this, 'image_dimensions']));
            $twig->addFunction(new TwigFunction('image_size_url', [$this, 'image_size_url']));
            $twig->addFunction(new TwigFunction('responsive_image', [$this, 'responsive_image']));
            $twig->addFunction(new TwigFunction('return_responsive_image', [$this, 'return_responsive_image']));
            $twig->addFunction(new TwigFunction('priority_image', [$this, 'priority_image']));
            $twig->addFunction(new TwigFunction('image_legend', [$this, 'image_legend']));
            $twig->addFunction(new TwigFunction('field', [$this, 'field']));
            $twig->addFunction(new TwigFunction('permalink_by_ID', [$this, 'permalink_by_ID']));
            $twig->addFunction(new TwigFunction('get_selected_menu', [$this, 'get_selected_menu']));
            $twig->addFunction(new TwigFunction('get_single_selected_menu', [$this, 'get_single_selected_menu']));
            $twig->addFunction(new TwigFunction('default_introduction', [$this, 'default_introduction']));
            $twig->addFunction(new TwigFunction('background', [$this, 'background']));
            $twig->addFunction(new TwigFunction('block_classes', [$this, 'block_classes']));
            $twig->addFunction(new TwigFunction('post_card', [$this, 'post_card']));
            $twig->addFunction(new TwigFunction('theme_for', [$this, 'theme_for']));
            $twig->addFunction(new TwigFunction('favicon_href', [$this, 'favicon_href']));
            $twig->addFunction(new TwigFunction('favicon_ico_href', [$this, 'favicon_ico_href']));
            $twig->addFunction(new TwigFunction('apple_touch_href', [$this, 'apple_touch_href']));

            return $twig;
        }

        public function theme_for($ref): string
        {
            if (!$ref) return 'light';
            $id = is_numeric($ref) ? (int) $ref : url_to_postid($ref);
            if (!$id && !is_numeric($ref)) {
                $path = trim((string) parse_url($ref, PHP_URL_PATH), '/');
                if ($path) {
                    $found = get_page_by_path($path, OBJECT, get_post_types(['public' => true]));
                    if ($found) $id = $found->ID;
                } else {
                    $id = (int) get_option('page_on_front');
                }
            }
            if (!$id) return 'light';
            return get_post_meta($id, 'theme', true) ? 'light' : 'dark';
        }

        private const HEADER_BLOCKS = [
            'studiogram/header',
            'studiogram/header-home',
            'studiogram/header-post',
        ];

        /* Normalise a header-post block's fields (ACF-resolved or raw block data)
           into ready-to-render values. Shared by the block and the card so both
           stay identical. */
        public static function normalize_header($fields, $post_id): array
        {
            $cat_id   = (int) ($fields['category'] ?? 0);
            if ($cat_id && function_exists('pll_get_term') && function_exists('pll_current_language')) {
                $translated = pll_get_term($cat_id, pll_current_language());
                if ($translated) $cat_id = (int) $translated;
            }
            $category = $cat_id ? get_term($cat_id) : null;
            $category = ($category && !is_wp_error($category)) ? $category : null;

            /* Layout is derived from the category itself (its canonical slug),
               not a per-post or per-term extra field. */
            $layout = self::category_layout($cat_id);

            /* Accent colour = category palette colour (Catégories field group). */
            $type_color = ($category ? (get_field('color', 'category_' . $category->term_id) ?: null) : null) ?: 'dark';

            /* Tags are a text repeater (rows of {text}); tolerate the old
               taxonomy shape (term ids) for not-yet-resaved posts. */
            $tags = [];
            foreach ((array) ($fields['tags'] ?? []) as $tag) {
                if (is_array($tag)) {
                    $name = trim((string) ($tag['text'] ?? ''));
                    if ($name !== '') $tags[] = $name;
                } else {
                    $term = get_term((int) $tag);
                    if ($term && !is_wp_error($term)) $tags[] = $term->name;
                }
            }

            /* Blob shape is an uploaded SVG (image field, return_format array).
               Derive its URL + intrinsic dims (viewBox) so the shape component
               can mask it and keep the right aspect-ratio. */
            $forme     = $fields['forme'] ?? null;
            $forme_id  = is_array($forme) ? (int) ($forme['ID'] ?? 0) : (int) $forme;
            $forme_url = $forme_id ? wp_get_attachment_url($forme_id) : '';
            $forme_dim = $forme_id ? self::image_dimensions($forme_id) : [1, 1];

            /* Per-post shape colour (ACF "color" group → color subfield). Raw block
               data stores it flat. Falls back to the category palette colour. */
            $color_group = is_array($fields['color'] ?? null) ? $fields['color'] : [
                'color' => $fields['color_color'] ?? null,
            ];
            $shape_color = ($color_group['color'] ?? null) ?: $type_color;

            /* Per-post background colour (ACF "color2" group → color subfield),
               used by layouts that paint the whole card (e.g. expertises). */
            $color2_group = is_array($fields['color2'] ?? null) ? $fields['color2'] : [
                'color' => $fields['color2_color'] ?? null,
            ];
            $bg_color = ($color2_group['color'] ?? null) ?: $type_color;

            /* Case-study shape placement (position group: horizontal Gauche/Droite,
               vertical Haut/Bas). Raw block data stores it flat. */
            $position = is_array($fields['position'] ?? null) ? $fields['position'] : [
                'horizontal' => $fields['position_horizontal'] ?? 0,
                'vertical'   => $fields['position_vertical'] ?? 0,
            ];
            $theme = ($post_id && get_post_meta($post_id, 'theme', true)) ? 'light' : 'dark';

            /* Published date in the post's own language (front end + admin block
               preview), independent of the admin UI locale: French
               "29 mai 2026", English "May 26, 2026". Numeric wp_date parts +
               manual month names avoid any locale-switch quirks. */
            $lang = (function_exists('pll_get_post_language') && $post_id)
                ? pll_get_post_language($post_id)
                : (function_exists('pll_current_language') ? pll_current_language() : substr(get_locale(), 0, 2));
            $ts  = get_post_timestamp($post_id);
            $mi  = (int) wp_date('n', $ts) - 1;
            if ($lang === 'fr') {
                $months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
                $date   = wp_date('j', $ts) . ' ' . $months[$mi] . ' ' . wp_date('Y', $ts);
            } else {
                $months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                $date   = $months[$mi] . ' ' . wp_date('j', $ts) . ', ' . wp_date('Y', $ts);
            }

            return [
                'type_color'    => $type_color,
                'layout'        => $layout,
                'category'      => $category,
                'category_link' => $category ? get_term_link($category) : '',
                'tags'          => $tags,
                'date'          => $date,
                'svg_url'       => $forme_url,
                'svg_dim'       => $forme_dim,
                'shape_right'   => !empty($position['horizontal']),
                'shape_bottom'  => !empty($position['vertical']),
                'shape_color'   => $shape_color,
                'bg_color'      => $bg_color,
                'forme_color'   => $type_color,
                'gradient_from' => $theme === 'light' ? 'white' : 'dark',
                'image'         => $fields['image'] ?? null,
                'title'         => $fields['title'] ?? '',
                'url'           => get_permalink($post_id),
            ];
        }

        /* Category → header layout, from the "header_layout" select on the term.
           Editors pick it once; new categories just choose a value. With Polylang
           the value can live on any translation, so fall back across the group. */
        private static function category_layout($cat_id): string
        {
            if (!$cat_id) return 'case';
            $layout = get_field('header_layout', 'category_' . $cat_id);
            if (!$layout && function_exists('pll_get_term_translations')) {
                foreach (pll_get_term_translations($cat_id) as $tid) {
                    $l = get_field('header_layout', 'category_' . $tid);
                    if ($l) {
                        $layout = $l;
                        break;
                    }
                }
            }
            return $layout ?: 'case';
        }

        /* Twig: normalised header data for any post, read from its header block.
           Used by the post-card component in archives / related lists. */
        public function post_card($post_id)
        {
            $post_id = (int) $post_id;
            if (!$post_id) return null;

            $block = self::find_header_block(parse_blocks(get_post_field('post_content', $post_id)));
            if (!$block) return null;

            $attrs = $block['attrs']['data'] ?? [];

            /* Raw block data stores the forme image field as an attachment ID;
               tags stay flat (row count + tags_{i}_text). */
            $tags = [];
            if (is_array($attrs['tags'] ?? null)) {
                $tags = $attrs['tags'];
            } else {
                $rows = (int) ($attrs['tags'] ?? 0);
                for ($i = 0; $i < $rows; $i++) {
                    $tags[] = ['text' => $attrs["tags_{$i}_text"] ?? ''];
                }
            }

            $category = $attrs['category'] ?? null;
            if (is_array($category)) $category = reset($category) ?: null;

            return self::normalize_header([
                'category'    => $category,
                'tags'        => $tags,
                'image'       => $attrs['image'] ?? null,
                'title'       => $attrs['title'] ?? '',
                'forme'       => $attrs['forme'] ?? null,
                'color_color' => $attrs['color_color'] ?? null,
                'color2_color' => $attrs['color2_color'] ?? null,
                'position_horizontal' => $attrs['position_horizontal'] ?? 0,
                'position_vertical'   => $attrs['position_vertical'] ?? 0,
            ], $post_id);
        }

        private static function find_header_block(array $blocks): ?array
        {
            foreach ($blocks as $block) {
                if (in_array($block['blockName'] ?? '', self::HEADER_BLOCKS, true)) {
                    return $block;
                }
                if (!empty($block['innerBlocks'])) {
                    $found = self::find_header_block($block['innerBlocks']);
                    if ($found) return $found;
                }
            }
            return null;
        }

        /**
         * Resolve an ACF `background` field group into ready-to-use markup bits.
         * Gradient (type on): inline `style` + light/dark text class.
         * Solid (type off): `bg-{color}` class.
         *
         * @param array|null $bg
         * @return array{style:string,class:string,text:string}
         */
        public static function background($bg)
        {
            $bg = is_array($bg) ? $bg : [];
            $style = '';
            $class = '';
            $text = '';

            if (!empty($bg['type'])) {
                $style = sprintf(
                    '--gx: %s; --gy: %s; background-image: radial-gradient(circle at var(--gx) var(--gy), var(--color-%s), var(--color-%s));',
                    $bg['horizontal'] ?? '',
                    $bg['vertical'] ?? '',
                    $bg['color1'] ?? '',
                    $bg['color2'] ?? ''
                );
                $text = !empty($bg['text']) ? 'text-dark' : 'text-white';
            } elseif (!empty($bg['color'])) {
                $class = 'bg-' . $bg['color'];
            }

            return [
                'type' => !empty($bg['type']),
                'style' => $style,
                'class' => $class,
                'text' => $text,
            ];
        }

        /**
         * @param string $title
         * @return object
         */
        public static function default_introduction($title, $show_subtitle = true)
        {
            return [
                'show_intro' => true,
                'show_subtitle' => $show_subtitle,
                'subtitle' => $title,
                'title' => "Titre",
                'text' => "<p>Texte d'introduction</p>"
            ];
        }

        /**
         * @param array $pages
         * @return string
         */
        public static function get_selected_menu($pages)
        {
            if (!is_array($pages)) return '';
            $current_url = get_permalink();
            foreach ($pages as $page) {
                $page_id = $page['subpage'] ?? null;
                if ($page_id && get_the_permalink($page_id) === $current_url) {
                    return 'active';
                }
            }
            return '';
        }

        /**
         * @param string $page_url
         * @return string
         */
        public static function get_single_selected_menu($page_url)
        {
            if (!$page_url) return '';
            $current_url = get_permalink();
            return ($current_url === $page_url) ? 'active' : '';
        }

        /**
         * @param int $page_ID
         * @return string
         */
        public static function permalink_by_ID($page_ID)
        {
            return get_the_permalink($page_ID);
        }


        /**
         * @param int $id identifiant du post
         * @return string 
         */
        public static function field($field, $id)
        {
            return function_exists('get_field') ? get_field($field, $id) : null;
        }


        /**
         * Generic block chrome classes from the "Block" ACF group.
         * Headers only get the background color; other blocks also get spacing.
         *
         * @param array $fields
         * @param bool $is_header
         * @return string
         */
        /**
         * Color slug for the current sector context, or '' when none applies.
         * Labo → lightblue; single project → its category color; archive filtered
         * by ?secteur=<term_id> or a category archive → that category's color.
         *
         * @return string
         */
        public static function sector_slug()
        {
            if (!function_exists('get_field')) return '';

            if (is_singular('labo') || is_post_type_archive('labo') || is_page('labo')) {
                return 'lightblue';
            }

            if (is_singular('post')) {
                foreach ((get_the_category() ?: []) as $cat) {
                    if ($slug = get_field('color', 'category_' . $cat->term_id)) return $slug;
                }
            }

            $secteur = isset($_GET['secteur']) ? sanitize_text_field(wp_unslash($_GET['secteur'])) : '';
            if ($secteur !== '') {
                $term = is_numeric($secteur)
                    ? get_term((int) $secteur, 'category')
                    : get_term_by('slug', $secteur, 'category');
                if ($term && !is_wp_error($term) && ($slug = get_field('color', 'category_' . $term->term_id))) return $slug;
            }

            if (is_category()) {
                $term = get_queried_object();
                if ($term && ($slug = get_field('color', 'category_' . $term->term_id))) return $slug;
            }

            return '';
        }

        /**
         * Favicon asset URL: the sector-colored variant (<prefix>-<slug>.<ext>)
         * when it exists for the current context, otherwise the default.
         *
         * @param string $prefix
         * @param string $ext
         * @return string
         */
        private static function sector_asset($prefix, $ext)
        {
            $base = '/dist/favicons/';
            $slug = self::sector_slug();

            if ($slug && file_exists(get_template_directory() . $base . $prefix . '-' . $slug . '.' . $ext)) {
                return get_template_directory_uri() . $base . $prefix . '-' . $slug . '.' . $ext;
            }

            return get_template_directory_uri() . $base . $prefix . '.' . $ext;
        }

        public static function favicon_href()
        {
            return self::sector_asset('favicon', 'svg');
        }

        public static function favicon_ico_href()
        {
            return self::sector_asset('favicon', 'ico');
        }

        public static function apple_touch_href()
        {
            return self::sector_asset('apple-touch-icon', 'png');
        }


        public static function block_classes($fields, $is_header = false, $with_spacing = true)
        {
            $fields = is_array($fields) ? $fields : [];
            $classes = [];

            if (!empty($fields['background'])) {
                $classes[] = 'bg-' . $fields['background'];
            }

            if (!$is_header) {
                $classes[] = 'block';
                if ($with_spacing && !empty($fields['spacing'])) {
                    $classes[] = 'block--space-' . $fields['spacing'];
                }
            }

            return esc_attr(implode(' ', $classes));
        }


        public static function block_class($bg, $text, $espacement)
        {
            $classes = 'block block--' . esc_attr($bg);
            if (!empty($text)) {
                $classes .= ' text-color--' . esc_attr($text);
            }
            if (!empty($espacement)) {
                $classes .= ' space--' . esc_attr($espacement);
            }
            return $classes;
        }


        /**
         * @param string|array $content
         */
        public static function dump($content)
        {
            if (\ENVIRONMENT === 'localhost') :
                dump($content);
            endif;
        }


        /**
         * @param int $image_id
         * @return array $image
         */
        public static function image_info($image_id)
        {
            $image = [
                'alt_text' => get_post_meta($image_id, '_wp_attachment_image_alt', true),
                'sm' => wp_get_attachment_image_url($image_id, 'sm'),
                'md' => wp_get_attachment_image_url($image_id, 'md'),
                'lg' => wp_get_attachment_image_url($image_id, 'lg'),
                'xl' => wp_get_attachment_image_url($image_id, 'xl'),
            ];

            return $image;
        }

        /**
         * Returns [width, height] for an attachment. Rasters use their metadata;
         * SVGs have no dimensions in WP, so parse viewBox / width-height instead.
         *
         * @param int $image_id
         * @return array [width, height]
         */
        public static function image_dimensions($image_id)
        {
            $meta = wp_get_attachment_metadata($image_id);
            if (!empty($meta['width']) && !empty($meta['height'])) {
                return [(float) $meta['width'], (float) $meta['height']];
            }

            $fallback = [1, 1];
            $path = get_attached_file($image_id);
            if (!$path || !file_exists($path)) {
                return $fallback;
            }

            if (get_post_mime_type($image_id) !== 'image/svg+xml') {
                $size = @getimagesize($path);
                return $size ? [(float) $size[0], (float) $size[1]] : $fallback;
            }

            $xml = @simplexml_load_file($path);
            if (!$xml) {
                return $fallback;
            }

            $attrs = $xml->attributes();
            if (isset($attrs['viewBox'])) {
                $vb = preg_split('/[\s,]+/', trim((string) $attrs['viewBox']));
                if (count($vb) === 4 && (float) $vb[2] > 0 && (float) $vb[3] > 0) {
                    return [(float) $vb[2], (float) $vb[3]];
                }
            }

            $w = isset($attrs['width']) ? (float) $attrs['width'] : 0;
            $h = isset($attrs['height']) ? (float) $attrs['height'] : 0;
            return ($w > 0 && $h > 0) ? [$w, $h] : $fallback;
        }

        /**
         * @param int $image_id
         * @param string $size
         * @return array $image
         */
        public static function image_size_url($image_id, $size)
        {
            $image = [
                'sm' => wp_get_attachment_image_url($image_id, 'sm'),
                'md' => wp_get_attachment_image_url($image_id, 'md'),
                'lg' => wp_get_attachment_image_url($image_id, 'lg'),
                'xl' => wp_get_attachment_image_url($image_id, 'xl'),
            ];
            return $image[$size];
        }

        /**
         * @param int $image_id
         */
        public static function responsive_image($image_id)
        {
            if ($image_id != '') {
                $image = self::image_info($image_id);
                $dims = self::image_dimensions($image_id);
                echo
                'width="' . (int) $dims[0] . '" height="' . (int) $dims[1] . '"
                alt="' . $image['alt_text'] . '"
                src="' . $image['sm'] . '"
                data-sizes="(max-width: 500px) 100vw,
                            (max-width: 1000px) 100vw, 
                            (max-width: 1500px) 100vw, 
                            (max-width: 2000px) 100vw, 
                            2000px" 
                data-src="' . $image['sm'] . '" 
                data-srcset="' . $image['sm'] . ' 500w, 
                             ' . $image['md'] . ' 1000w, 
                             ' . $image['lg'] . ' 1500w, 
                             ' . $image['xl'] . ' 2000w"';
            }
        }


        /**
         * @param int $image_id
         */
        public static function priority_image($image_id)
        {
            if ($image_id != '') {
                $image = self::image_info($image_id);
                $dims = self::image_dimensions($image_id);
                echo
                'width="' . (int) $dims[0] . '" height="' . (int) $dims[1] . '"
                alt="' . $image['alt_text'] . '"
                src="' . $image['sm'] . '"
                srcset="' . $image['sm'] . ' 500w,
                        ' . $image['md'] . ' 1000w, 
                        ' . $image['lg'] . ' 1500w, 
                        ' . $image['xl'] . ' 2000w"';
            }
        }


        /**
         * @param int $image_id 
         * @return string $content
         */

        public static function return_responsive_image($image_id)
        {
            $content = '';
            if ($image_id != '') {
                $image = self::image_info($image_id);
                $content =
                    'alt="' . $image['alt_text'] . '" 
                    src="' . $image['sm'] . '" 
                    data-sizes="(max-width: 500px) 100vw, 
                                (max-width: 1000px) 100vw, 
                                (max-width: 1500px) 100vw, 
                                (max-width: 2000px) 100vw, 
                                2000px" 
                    data-src="' . $image['sm'] . '" 
                    data-srcset="' . $image['sm'] . ' 500w, 
                                ' . $image['md'] . ' 1000w, 
                                ' . $image['lg'] . ' 1500w, 
                                ' . $image['xl'] . ' 2000w"';
            }
            return $content;
        }

        /**
         * @param int $image_id
         */
        public static function image_legend($image_id)
        {
            return wp_get_attachment_caption($image_id);
        }


        /**
         * @param object $blocks
         * @param string $block_name
         * @return boolean
         */
        public static function has_block_type($blocks, $block_name)
        {
            foreach ($blocks as $block) {
                if (is_array($block) && $block['blockName'] === $block_name) {
                    return true;
                }
            }
            return false;
        }
    }
endif;
