<?php

use Timber\Timber;

$context['block'] = $block;
$context['fields'] = $fields;

$id = get_the_ID();
$context['post'] = Timber::get_post($id);

$cats = get_the_terms($id, 'category');
$term = ($cats && !is_wp_error($cats)) ? $cats[0] : null;

$context['sector_color'] = ($term && function_exists('get_field'))
    ? get_field('color', 'category_' . $term->term_id)
    : '';
$context['sector_name'] = $term ? $term->name : '';

$header_image = function_exists('get_field') ? get_field('header_image', $id) : null;
$context['thumb_id'] = $header_image ?: ($context['post'] && $context['post']->thumbnail ? $context['post']->thumbnail->id : null);

Timber::render('blocks/' . basename(__DIR__) . '/block.twig', $context);
