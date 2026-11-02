<?php

use Timber\Timber;

$context['block'] = $block;
$context['fields'] = $fields;

$context['form'] = '';
if (!empty($fields['form']) && function_exists('gravity_form')) {
    $context['form'] = gravity_form($fields['form'], false, false, false, null, true, 0, false);
}

Timber::render('blocks/' . basename(__DIR__) . '/block.twig', $context);
