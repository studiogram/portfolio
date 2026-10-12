<?php

namespace STUDIOGRAM;

if (!defined('ABSPATH')) exit;

if (!class_exists('STUDIOGRAM\ACFColorPalette')) :
    class ACFColorPalette
    {
        public function __construct()
        {
            add_action('acf/include_field_types', [$this, 'register_field_type']);
        }

        public function register_field_type()
        {
            new ACFColorPaletteField();
        }

        public static function get_palette()
        {
            $theme_json_path = get_template_directory() . '/theme.json';
            if (!file_exists($theme_json_path)) return [];

            $theme_json = json_decode(file_get_contents($theme_json_path), true);
            return $theme_json['settings']['color']['palette'] ?? [];
        }
    }

    if (class_exists('acf_field')) :
    class ACFColorPaletteField extends \acf_field
    {
        public function __construct()
        {
            $this->name     = 'color_palette';
            $this->label    = __('Color Palette', 'studiogram');
            $this->category = 'choice';

            // Get all color slugs for default
            $palette = ACFColorPalette::get_palette();
            $all_slugs = array_column($palette, 'slug');

            $this->defaults = [
                'allow_null'     => 0,
                'default_value'  => '',
                'allowed_colors' => $all_slugs,
            ];

            parent::__construct();
        }

        public function render_field_settings($field)
        {
            acf_render_field_setting($field, [
                'label'        => __('Allow Null', 'studiogram'),
                'instructions' => '',
                'type'         => 'true_false',
                'name'         => 'allow_null',
                'ui'           => 1,
            ]);

            $palette = ACFColorPalette::get_palette();
            $slugs   = array_column($palette, 'slug');

            // Build choices for allowed colors checkbox
            $color_choices = [];
            foreach ($palette as $color) {
                $color_choices[$color['slug']] = $color['name'];
            }

            acf_render_field_setting($field, [
                'label'        => __('Allowed Colors', 'studiogram'),
                'instructions' => __('Select which colors to show. Leave empty to show all.', 'studiogram'),
                'type'         => 'checkbox',
                'name'         => 'allowed_colors',
                'choices'      => $color_choices,
                'layout'       => 'vertical',
            ]);

            acf_render_field_setting($field, [
                'label'        => __('Default Value', 'studiogram'),
                'instructions' => __('Enter a color slug from theme.json (e.g. primary, dark)', 'studiogram'),
                'type'         => 'text',
                'name'         => 'default_value',
                'placeholder'  => implode(', ', $slugs),
            ]);
        }

        public function render_field($field)
        {
            $palette    = ACFColorPalette::get_palette();

            // Filter palette if allowed_colors is set
            if (!empty($field['allowed_colors']) && is_array($field['allowed_colors'])) {
                $palette = array_filter($palette, function($color) use ($field) {
                    return in_array($color['slug'], $field['allowed_colors']);
                });
            }

            $value      = $field['value'] ?? '';
            $allow_null = !empty($field['allow_null']);
            $name       = esc_attr($field['name']);
            $id         = esc_attr($field['id']);

            require get_template_directory() . '/includes/admin/acf-color-palette-field.php';
        }

        public function input_admin_enqueue_scripts()
        {
            $dir = get_stylesheet_directory_uri();
            $v   = wp_get_theme()->get('Version');

            wp_enqueue_style('acf-cpf-tailwind', $dir . '/dist/css/main.min.css', [], $v);
        }
    }
    endif;
endif;
