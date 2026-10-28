<?php

namespace STUDIOGRAM;

if (!defined('ABSPATH')) exit;

if (!class_exists('STUDIOGRAM\ACF')) :
    class ACF
    {
        public function __construct()
        {
            add_filter('acf/fields/wysiwyg/toolbars', [$this, 'custom_toolbars'], 20, 1);
            add_filter('tiny_mce_before_init', [$this, 'limit_block_formats']);
            add_filter('acf/format_value/type=text', 'do_shortcode', 20);
            add_filter('acf/format_value/type=textarea', 'do_shortcode', 20);
            add_filter('acf/format_value/type=wysiwyg', 'do_shortcode', 20);
            add_filter('acf/format_value/type=wysiwyg', [$this, 'mark_spacer_paragraphs'], 21);
            add_filter('acf/format_value/type=wysiwyg', [$this, 'wrap_link_dots'], 22);
            add_filter('tiny_mce_before_init', [$this, 'set_custom_wysiwyg_colors']);
            add_filter('tiny_mce_plugins', [$this, 'remove_colorpicker_plugin']);
            add_filter('acf/load_field/name=form', [$this, 'populate_gravity_forms']);
            add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_styles']);
            add_filter('wp_kses_allowed_html', [$this, 'allow_svg_kses'], 10, 2);
        }

        public function allow_svg_kses($tags, $context)
        {
            if ($context !== 'post') return $tags;

            $svg = [
                'svg'      => ['xmlns' => true, 'xmlns:xlink' => true, 'viewbox' => true, 'class' => true, 'width' => true, 'height' => true, 'fill' => true, 'preserveaspectratio' => true, 'data-effect' => true, 'aria-hidden' => true, 'role' => true, 'version' => true],
                'defs'     => [],
                'g'        => ['class' => true, 'fill' => true, 'transform' => true],
                'path'     => ['d' => true, 'fill' => true, 'class' => true, 'id' => true, 'transform' => true, 'style' => true],
                'circle'   => ['cx' => true, 'cy' => true, 'r' => true, 'fill' => true, 'class' => true],
                'line'     => ['x1' => true, 'y1' => true, 'x2' => true, 'y2' => true],
                'text'     => ['fill' => true, 'class' => true, 'text-anchor' => true, 'font-family' => true, 'font-size' => true, 'font-weight' => true, 'x' => true, 'y' => true],
                'textpath' => ['href' => true, 'xlink:href' => true, 'startoffset' => true, 'class' => true],
                'tspan'    => ['x' => true, 'y' => true, 'class' => true, 'fill' => true],
                'a'        => array_merge($tags['a'] ?? [], ['href' => true, 'xlink:href' => true, 'class' => true, 'data-sector' => true, 'data-taxi-ignore' => true, 'style' => true, 'aria-label' => true, 'target' => true]),
            ];

            return array_merge($tags, $svg);
        }

        public function mark_spacer_paragraphs($value)
        {
            if (!is_string($value) || $value === '') {
                return $value;
            }
            return preg_replace(
                '/<p>(?:\s|&nbsp;|\x{00A0})+<\/p>/u',
                '<p class="is-spacer"></p>',
                $value
            );
        }

        public function wrap_link_dots($value)
        {
            if (!is_string($value) || $value === '') {
                return $value;
            }
            return preg_replace(
                '/(<a\b[^>]*>\s*)\x{25CF}/u',
                '$1<span class="link-dot">●</span>',
                $value
            );
        }

        public function custom_toolbars($toolbars)
        {
            $toolbars['Full'][1] = ['formatselect', 'styleselect', 'forecolor', 'bold', 'italic', 'underline', 'bullist', 'link', "alignleft", "aligncenter", "alignright"];
            return $toolbars;
        }

        public function limit_block_formats($settings)
        {
            $settings['block_formats'] = 'Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5';

            // Size styles: apply to whatever block element the caret sits in
            // (p, h1-h6, li) via `selector` so the class adapts to its parent tag.
            $sizes = [
                'XXXL' => 'text-xxxl',
                'XXL'  => 'text-xxl',
                'XL'  => 'text-xl',
                'L'   => 'text-l',
                'M'   => 'text-m',
                'S'   => 'text-s',
                'XS'  => 'text-xs',
            ];

            $size_items = [];
            foreach ($sizes as $title => $class) {
                $size_items[] = [
                    'title'    => $title,
                    'selector' => 'p,h1,h2,h3,h4,h5,h6,li',
                    'classes'  => $class,
                ];
            }

            $color_items = [];
            $theme_json = get_template_directory() . '/theme.json';
            if (file_exists($theme_json)) {
                $palette = json_decode(file_get_contents($theme_json), true)['settings']['color']['palette'] ?? [];
                foreach ($palette as $color) {
                    $color_items[] = [
                        'title'   => $color['name'],
                        'inline'  => 'span',
                        'classes' => 'text-' . $color['slug'],
                    ];
                }
            }

            $style_formats = [['title' => 'Taille', 'items' => $size_items]];
            if ($color_items) $style_formats[] = ['title' => 'Couleur', 'items' => $color_items];
            $settings['style_formats'] = json_encode($style_formats);

            // Load theme fonts/styles in editor
            $uri = get_stylesheet_directory_uri();
            $extra_css = $uri . '/dist/css/editor.css,' . $uri . '/assets/css/tailwind.build.css';
            if (isset($settings['content_css'])) {
                $settings['content_css'] .= ',' . $extra_css;
            } else {
                $settings['content_css'] = $extra_css;
            }
            $settings['body_class'] = 'studiogram';

            return $settings;
        }

        public function set_custom_wysiwyg_colors($init)
        {
            $theme_json = json_decode(file_get_contents(get_template_directory() . '/theme.json'), true);
            $palette = $theme_json['settings']['color']['palette'] ?? [];

            $color_map = [];
            foreach ($palette as $color) {
                $color_map[] = '"' . ltrim($color['color'], '#') . '"';
                $color_map[] = '"' . $color['name'] . '"';
            }

            $init['textcolor_map'] = '[' . implode(',', $color_map) . ']';
            $init['textcolor_rows'] = 1;
            $init['textcolor_cols'] = count($palette);

            return $init;
        }

        public function remove_colorpicker_plugin($plugins)
        {
            foreach ($plugins as $key => $plugin_name) {
                if ('colorpicker' === $plugin_name) {
                    unset($plugins[$key]);
                    return $plugins;
                }
            }
            return $plugins;
        }

        public function populate_gravity_forms($field)
        {
            if (!class_exists('GFAPI')) {
                return $field;
            }

            $field['choices'] = [];
            $forms = \GFAPI::get_forms();

            foreach ($forms as $form) {
                $field['choices'][$form['id']] = $form['title'];
            }

            return $field;
        }

        public function enqueue_admin_styles()
        {
            wp_enqueue_style(
                'admin-styles',
                get_stylesheet_directory_uri() . '/dist/css/admin.css',
                [],
                filemtime(get_stylesheet_directory() . '/dist/css/admin.css')
            );
        }
    }
endif;
