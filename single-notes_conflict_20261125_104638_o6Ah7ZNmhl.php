<?php

use Timber\Timber;

$context = Timber::context();

$note = [
    'body'     => function_exists('get_field') ? get_field('body') : '',
    'category' => '',
    'next'     => null,
];

$terms = get_the_terms(get_the_ID(), 'note_category');
if (!is_wp_error($terms) && $terms) {
    $note['category'] = $terms[0]->name;
}

$next = get_next_post() ?: get_previous_post();
if ($next) {
    $nterms = get_the_terms($next->ID, 'note_category');
    $note['next'] = [
        'title'    => get_the_title($next),
        'url'      => get_permalink($next),
        'category' => (!is_wp_error($nterms) && $nterms) ? $nterms[0]->name : '',
    ];
}

$context['note'] = $note;

Timber::render('views/templates/note/view.twig', $context);
