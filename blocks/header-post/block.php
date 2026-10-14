<?php

use Timber\Timber;

$context['block'] = $block;
$context['fields'] = $fields;

$cats = get_the_terms(get_the_ID(), 'category');
$context['pastille'] = ($cats && !is_wp_error($cats) && function_exists('get_field'))
    ? get_field('color', 'category_' . $cats[0]->term_id)
    : '';

Timber::render('blocks/' . basename(__DIR__) . '/block.twig', $context);
