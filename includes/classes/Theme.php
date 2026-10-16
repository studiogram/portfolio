<?php

namespace STUDIOGRAM;


if (!defined('ABSPATH')) exit;

if (!class_exists('STUDIOGRAM\Theme')) :
    class Theme
    {
        public function __construct()
        {
            $this->set_thumbnails();
            add_action('after_setup_theme', [$this, 'register_menus']);
            add_action('wp_enqueue_scripts', [$this, 'enqueue_styles_and_scripts']);
            add_action('wp_enqueue_scripts', [$this, 'force_gravity_forms_scripts'], 20);
            add_filter('gform_field_content', [$this, 'delegend_choice_label'], 10, 5);
            add_filter('gform_field_container', [$this, 'label_choice_fieldset'], 10, 3);
            add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_styles_and_scripts']);
            add_action('enqueue_block_assets', [$this, 'enqueue_canvas_styles']);
            add_filter('script_loader_tag', [$this, 'add_module_type'], 10, 3);
            add_shortcode('orange', [$this, 'add_orange_shortcode']);
        }

        public function add_orange_shortcode($atts, $content = null)
        {
            return '<span class="text-warning">' . $content . '</span>';
        }

        public function register_menus()
        {
            // register_nav_menus([
            //     'primary' => 'Menu principal',
            //     'footer'  => 'Menu pied de page',
            // ]);
        }

        public function set_thumbnails()
        {
            if (function_exists('add_theme_support')) {
                add_theme_support('title-tag');
                add_theme_support('post-thumbnails');
                remove_image_size('1536x1536');
                remove_image_size('2048x2048');
                remove_image_size('medium_large');
                add_image_size('square', 500, 500, true);
                add_image_size('sm', 500, '', false);
                add_image_size('md', 1000, '', false);
                add_image_size('lg', 1500, '', false);
                add_image_size('xl', 2000, '', false);
            }
        }


        public function force_gravity_forms_scripts()
        {
            if (is_admin() || !function_exists('gravity_form_enqueue_scripts') || !class_exists('GFAPI')) {
                return;
            }
            $forms = \GFAPI::get_forms();
            if (!is_array($forms)) {
                return;
            }
            foreach ($forms as $form) {
                if (!empty($form['id'])) {
                    gravity_form_enqueue_scripts($form['id'], true);
                }
            }
        }


        public function delegend_choice_label($content, $field, $value = null, $lead_id = 0, $form_id = 0)
        {
            if (is_admin()) {
                return $content;
            }

            $label_id = 'gf_label_' . $form_id . '_' . $field->id;

            return preg_replace_callback(
                '/<legend(\s[^>]*?)?>(.*?)<\/legend>/is',
                function ($m) use ($label_id) {
                    $attrs = $m[1] ?? '';
                    if (stripos($attrs, ' id=') === false) {
                        $attrs .= ' id="' . $label_id . '"';
                    }
                    return '<div' . $attrs . '>' . $m[2] . '</div>';
                },
                $content
            );
        }

        /**
         * Point the fieldset at its now-div label via aria-labelledby so the
         * choice group keeps an accessible name after delegend_choice_label().
         */
        public function label_choice_fieldset($container, $field, $form)
        {
            if (is_admin() || stripos($container, '<fieldset') === false) {
                return $container;
            }

            $label_id = 'gf_label_' . rgar($form, 'id') . '_' . $field->id;

            return preg_replace(
                '/<fieldset\b/',
                '<fieldset aria-labelledby="' . esc_attr($label_id) . '"',
                $container,
                1
            );
        }

        public function enqueue_styles_and_scripts()
        {
            $dir = get_stylesheet_directory();
            $ver = fn(string $rel) => file_exists($dir . $rel) ? filemtime($dir . $rel) : null;

            wp_enqueue_style('studiogram-styles', get_stylesheet_directory_uri() . "/dist/css/main.min.css", [], $ver('/dist/css/main.min.css'));
            wp_enqueue_script('studiogram-scripts', get_stylesheet_directory_uri() . "/dist/js/main.min.js", [], $ver('/dist/js/main.min.js'), ['in_footer' => true, 'strategy' => 'defer']);
            wp_localize_script('studiogram-scripts', 'localize', [
                'ajaxurl' => admin_url('admin-ajax.php'),
                'homeurl' => get_home_url(),
                'styles' => get_stylesheet_directory_uri(),
                'nonce' => wp_create_nonce('ajax-nonce'),
                'plugins' => plugins_url(),
                'fileUpload' => [
                    'noFileChosen' => function_exists('pll__') ? pll__('Aucun fichier choisi') : 'Aucun fichier choisi',
                    'chooseFile' => function_exists('pll__') ? pll__('Choisir un fichier') : 'Choisir un fichier'
                ]
            ]);
        }

        public function enqueue_canvas_styles()
        {
            if (!is_admin()) return;
            $uri = get_stylesheet_directory_uri();
            $dir = get_stylesheet_directory();
            $ver = fn(string $rel) => file_exists($dir . $rel) ? filemtime($dir . $rel) : null;

            wp_enqueue_style('sg-canvas-tailwind', $uri . '/assets/css/tailwind.build.css', [], $ver('/assets/css/tailwind.build.css'));
            wp_enqueue_style('sg-canvas-styles', $uri . '/dist/css/main.min.css', [], $ver('/dist/css/main.min.css'));
        }


        public function enqueue_editor_styles_and_scripts()
        {
            // Load Inclusive Sans in the editor iframe too (the frontend gets it
            // via base.twig's <link>, which the editor doesn't include).
            $dir = get_stylesheet_directory();
            $ver = fn(string $rel) => file_exists($dir . $rel) ? filemtime($dir . $rel) : null;

            wp_enqueue_style('studiogram-editor-fonts', 'https://fonts.googleapis.com/css2?family=Inclusive+Sans:wght@300..700&display=swap', [], null);
            wp_enqueue_style('studiogram-editor-tailwind', get_stylesheet_directory_uri() . "/assets/css/tailwind.build.css", [], $ver('/assets/css/tailwind.build.css'));
            wp_enqueue_style('studiogram-editor-styles', get_stylesheet_directory_uri() . "/dist/css/editor.css", ['studiogram-editor-tailwind'], $ver('/dist/css/editor.css'));
            wp_enqueue_script('studiogram-editor-scripts', get_stylesheet_directory_uri() . "/dist/js/editor.js", ['wp-dom-ready'], $ver('/dist/js/editor.js'), ['in_footer' => true, 'strategy' => 'defer']);

            $grid_html = \Timber\Timber::compile('views/partials/grid/view.twig');
            wp_localize_script('studiogram-editor-scripts', 'studiogramEditor', [
                'gridHtml' => $grid_html,
            ]);
        }

        public function add_module_type($tag, $handle, $src)
        {
            $theme_uri = get_stylesheet_directory_uri();
            if (str_contains($src, $theme_uri) && !str_contains($tag, 'type="module"')) {
                $tag = str_replace('type="text/javascript"', 'type="module"', $tag);
                if (!str_contains($tag, 'type="module"')) {
                    $tag = str_replace(' src=', ' type="module" src=', $tag);
                }
            }
            return $tag;
        }
    }
endif;
