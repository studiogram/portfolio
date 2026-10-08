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
            add_filter('tiny_mce_before_init', [$this, 'set_custom_wysiwyg_colors']);
            add_filter('tiny_mce_plugins', [$this, 'remove_colorpicker_plugin']);
            add_filter('acf/load_field/name=form', [$this, 'populate_gravity_forms']);
            add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_styles']);
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
                'XLD' => 'text-xld',
                'XD'  => 'text-xd',
                'MD'  => 'text-md',
                'L'   => 'text-l',
                'M'   => 'text-m',
                'S'   => 'text-s',
                'XS'  => 'text-xs',
            ];

            $style_formats = [];
            foreach ($sizes as $title => $class) {
                $style_formats[] = [
                    'title'    => $title,
                    'selector' => 'p,h1,h2,h3,h4,h5,h6,li',
                    'classes'  => $class,
                ];
            }
            $settings['style_formats'] = json_encode($style_formats);

            // Load theme fonts/styles in editor
            $editor_css = get_stylesheet_directory_uri() . '/dist/css/editor.css';
            if (isset($settings['content_css'])) {
                $settings['content_css'] .= ',' . $editor_css;
            } else {
                $settings['content_css'] = $editor_css;
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
