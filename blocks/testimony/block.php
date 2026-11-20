<?php

use Timber\Timber;

$context['block'] = $block;
$context['fields'] = $fields;

$id = get_the_ID();
$cats = $id ? get_the_terms($id, 'category') : null;
$term = ($cats && !is_wp_error($cats)) ? $cats[0] : null;
$context['sector_color'] = ($term && function_exists('get_field'))
    ? get_field('color', 'category_' . $term->term_id)
    : '';

Timber::render('blocks/' . basename(__DIR__) . '/block.twig', $context);
