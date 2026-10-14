<?php

use Timber\Timber;

$context['block'] = $block;
$context['fields'] = $fields;

$items = [];
foreach (($fields['items'] ?? []) as $row) {
    $title = $row['title'] ?? '';
    if (!$title) continue;
    $term = $row['category'] ?? null;
    $color = ($term && function_exists('get_field')) ? get_field('color', 'category_' . $term->term_id) : '';
    $items[] = [
        'slug'  => sanitize_title($title),
        'title' => $title,
        'text'  => $row['text'] ?? '',
        'color' => $color ?: '',
    ];
}
$context['items'] = $items;

Timber::render('blocks/' . basename(__DIR__) . '/block.twig', $context);
