<?php

use Timber\Timber;

$fields['background'] = 'medium';

$context['block'] = $block;
$context['fields'] = $fields;

Timber::render('blocks/' . basename(__DIR__) . '/block.twig', $context);
