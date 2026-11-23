<?php

namespace STUDIOGRAM;

if (!defined('ABSPATH')) exit;


if (!class_exists('STUDIOGRAM\PostTypes')) :
    class PostTypes
    {
        public function __construct()
        {
            add_action('init', [$this, 'register'], 5);
            add_action('after_switch_theme', 'flush_rewrite_rules');
            add_filter('custom_menu_order', '__return_true');
            add_filter('menu_order', [$this, 'reorder_menu']);
            add_filter('post_link', [$this, 'post_permalink'], 10, 2);
        }

        public function register()
        {
            $this->rename_post_type('Projets', 'Projet', 'dashicons-portfolio', true, 'post');
            $this->rename_post_type('Pages', 'Page', 'dashicons-format-aside', false, 'page');
            unregister_taxonomy_for_object_type('post_tag', 'post');
            $this->register_cpt('notes', 'Notes', 'Note', 'dashicons-editor-paste-text', false, 22, false);
            $this->register_tax('note_category', 'notes', 'Catégories', 'Catégorie', 'note-categorie');

            add_rewrite_rule('^projets/([^/]+)/?$', 'index.php?post_type=post&name=$matches[1]', 'top');
        }

        public function post_permalink($url, $post)
        {
            return $post->post_type === 'post'
                ? home_url('/projets/' . $post->post_name . '/')
                : $url;
        }

        /**
         * Group Pages, Projets, Notes contiguously at Pages' slot.
         */
        public function reorder_menu($menu_order)
        {
            $group = [
                'edit.php?post_type=page', // Pages
                'edit.php',                // Projets (built-in post)
                'edit.php?post_type=notes',
            ];
            $out = [];
            foreach ($menu_order as $item) {
                if ($item === 'edit.php?post_type=page') {
                    array_push($out, ...$group);
                } elseif (!in_array($item, $group, true)) {
                    $out[] = $item;
                }
            }
            return $out;
        }

        /**
         * Register a public, block-editor CPT with French labels.
         */
        public function register_cpt($slug, $plural, $singular, $icon, $masculine = false, $position = null, $has_archive = true)
        {
            register_post_type($slug, [
                'labels' => [
                    'name' => $plural,
                    'singular_name' => $singular,
                    'menu_name' => $plural,
                    'add_new' => 'Ajouter',
                    'add_new_item' => "Ajouter",
                    'edit_item' => "Modifier",
                    'new_item' => "Nouveau",
                    'view_item' => "Voir",
                    'search_items' => "Rechercher",
                    'all_items' => $masculine ? "Tous" : "Toutes",
                    'not_found' => "Aucun élément trouvé",
                    'not_found_in_trash' => "Aucun élément dans la corbeille",
                ],
                'public' => true,
                'has_archive' => $has_archive,
                'show_in_rest' => true,
                'menu_icon' => $icon,
                'menu_position' => $position,
                'supports' => ['title', 'revisions'],
                'rewrite' => ['slug' => $slug, 'with_front' => false],
            ]);
        }

        public function register_tax($slug, $object_type, $plural, $singular, $rewrite = null)
        {
            register_taxonomy($slug, $object_type, [
                'labels' => [
                    'name' => $plural,
                    'singular_name' => $singular,
                    'menu_name' => $plural,
                    'all_items' => "Toutes les {$plural}",
                    'edit_item' => "Modifier",
                    'add_new_item' => "Ajouter",
                    'new_item_name' => "Nouvelle {$singular}",
                    'search_items' => "Rechercher",
                ],
                'public' => true,
                'hierarchical' => true,
                'show_admin_column' => true,
                'show_in_rest' => true,
                'rewrite' => ['slug' => $rewrite ?: $slug, 'with_front' => false],
            ]);
        }

        /**
         * Relabel the built-in "post" type (name + icon). Call from register().
         */
        public function rename_post_type($plural, $singular, $icon = 'dashicons-admin-post', $masculine = false, $post)
        {
            $post = get_post_type_object($post);
            if (!$post) return;

            $post->menu_icon = $icon;
            $l = $post->labels;
            $l->name = $plural;
            $l->singular_name = $singular;
            $l->menu_name = $plural;
            $l->name_admin_bar = $singular;
            $l->add_new_item = "Ajouter";
            $l->edit_item = "Modifier";
            $l->new_item = "Nouveau";
            $l->view_item = "Voir";
            $l->all_items = $masculine ? "Tous" : "Toutes";
            $l->search_items = "Rechercher";
        }
    }
endif;
