<?php

use Timber\Timber;

$context = Timber::context();

$note = [
    'body'     => function_exists('get_field') ? get_field('body') : '',
    'back_url' => ($notes_page = get_page_by_path('notes')) ? get_permalink($notes_page) : home_url('/notes/'),
    'project'  => null,
];

$pid = function_exists('get_field') ? (int) get_field('related_project') : 0;
if ($pid && ($project = get_post($pid))) {
    $terms = get_the_terms($pid, 'category');
    $term  = (!is_wp_error($terms) && $terms) ? $terms[0] : null;
    $color = $term && function_exists('get_field')
        ? (get_field('color', 'category_' . $term->term_id) ?: 'dark')
        : 'dark';

    $note['project'] = [
        'title' => get_the_title($project),
        'url'   => get_permalink($project),
        'color' => $color,
    ];
}

$context['note'] = $note;

Timber::render('views/templates/note/view.twig', $context);
