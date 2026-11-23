<?php

use Timber\Timber;

$context = Timber::context();

$error = function_exists('get_field') ? (get_field('error_404', 'custom-content') ?: []) : [];

$context['error'] = [
    'text_1' => $error['text_1'] ?? '',
    'button' => $error['btn'] ?? null,
];

Timber::render('views/templates/404/view.twig', $context);
