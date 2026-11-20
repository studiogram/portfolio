<?php

use Timber\Timber;

$fields['background'] = 'medium';

static $labo_project_index = 0;
$fields['flip'] = ($labo_project_index++ % 2) === 1;

if (!empty($fields['title'])) {
    $context['block_id'] = 'id="' . esc_attr(sanitize_title($fields['title'])) . '"';
}

$context['block'] = $block;
$context['fields'] = $fields;

Timber::render('blocks/' . basename(__DIR__) . '/block.twig', $context);
