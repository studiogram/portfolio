<?php

use Timber\Timber;

$selected = $fields['note'] ?? null;
$id = is_object($selected) ? $selected->ID : (int) $selected;

$note = null;
if ($id) {
    $terms = get_the_terms($id, 'note_category');
    $note = [
        'url'      => get_permalink($id),
        'title'    => get_the_title($id),
        'category' => (!is_wp_error($terms) && $terms) ? $terms[0]->name : '',
    ];
}

$fields['note'] = $note;

$context['block'] = $block;
$context['fields'] = $fields;

Timber::render('blocks/' . basename(__DIR__) . '/block.twig', $context);
