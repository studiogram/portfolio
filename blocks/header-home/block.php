<?php

use Timber\Timber;

$context['block'] = $block;
$context['fields'] = $fields;

$archive = get_post_type_archive_link('post') ?: home_url('/');

$categories = [];
if (function_exists('get_field')) {
    $terms = get_terms(['taxonomy' => 'category', 'hide_empty' => false]);
    foreach (is_array($terms) ? $terms : [] as $term) {
        $color = get_field('color', $term);
        if (!$color) {
            continue;
        }
        $categories[] = [
            'title' => $term->name,
            'color' => $color,
            'url'   => add_query_arg('secteur', $term->slug, $archive),
        ];
    }
}
$context['categories'] = $categories;

Timber::render('blocks/' . basename(__DIR__) . '/block.twig', $context);
