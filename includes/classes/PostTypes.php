<?php

namespace STUDIOGRAM;

if (!defined('ABSPATH')) exit;

/**
 * Custom post types — STARTER EXAMPLE.
 *
 * Edit register() per project: add/remove CPTs via register_cpt(), and
 * optionally relabel the built-in "post" type via rename_post_type() instead
 * of adding a near-duplicate CPT (keeps native URLs, feeds and REST).
 */
if (!class_exists('STUDIOGRAM\PostTypes')) :
    class PostTypes
    {
        public function __construct()
        {
            add_action('init', [$this, 'register'], 5);
            add_action('after_switch_theme', 'flush_rewrite_rules');
        }

        public function register()
        {
            // Example CPT — rename/remove per project.
            $this->register_cpt('projets', 'Projets', 'Projet', 'dashicons-portfolio', 20);

            // Or relabel the built-in post type instead of a new CPT:
            // $this->rename_post_type('Projets', 'Projet', 'dashicons-portfolio');
        }

        /**
         * Register a public, block-editor CPT with French labels.
         */
        public function register_cpt($slug, $plural, $singular, $icon, $position)
        {
            register_post_type($slug, [
                'labels' => [
                    'name' => $plural,
                    'singular_name' => $singular,
                    'menu_name' => $plural,
                    'add_new' => 'Ajouter',
                    'add_new_item' => "Ajouter : {$singular}",
                    'edit_item' => "Modifier : {$singular}",
                    'new_item' => "Nouveau : {$singular}",
                    'view_item' => "Voir : {$singular}",
                    'search_items' => "Rechercher : {$plural}",
                    'all_items' => "Tous : {$plural}",
                    'not_found' => "Aucun élément trouvé",
                    'not_found_in_trash' => "Aucun élément dans la corbeille",
                ],
                'public' => true,
                'has_archive' => true,
                'show_in_rest' => true,
                'menu_icon' => $icon,
                'menu_position' => $position,
                'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'revisions'],
                'rewrite' => ['slug' => $slug, 'with_front' => false],
            ]);
        }

        /**
         * Relabel the built-in "post" type (name + icon). Call from register().
         */
        public function rename_post_type($plural, $singular, $icon = 'dashicons-admin-post')
        {
            $post = get_post_type_object('post');
            if (!$post) return;

            $post->menu_icon = $icon;
            $l = $post->labels;
            $l->name = $plural;
            $l->singular_name = $singular;
            $l->menu_name = $plural;
            $l->name_admin_bar = $singular;
            $l->add_new_item = "Ajouter : {$singular}";
            $l->edit_item = "Modifier : {$singular}";
            $l->new_item = "Nouveau : {$singular}";
            $l->view_item = "Voir : {$singular}";
            $l->all_items = "Tous : {$plural}";
            $l->search_items = "Rechercher : {$plural}";
        }
    }
endif;
