<?php

use Timber\Timber;

$fields['background'] = 'medium';

static $labo_project_index = 0;
$fields['flip'] = ($labo_project_index++ % 2) === 1;

$context['block'] = $block;
$context['fields'] = $fields;

Timber::render('blocks/' . basename(__DIR__) . '/block.twig', $context);
