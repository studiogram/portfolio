<?php

use Timber\Timber;

$context['block'] = $block;
$context['fields'] = $fields;

$ids = ['sciences' => 4, 'culture' => 6, 'sante' => 5, 'ville' => 1];
$archive = get_post_type_archive_link('post') ?: home_url('/');
$sectors = [];
foreach ($ids as $slug => $id) {
    $sectors[$slug] = add_query_arg('secteur', $id, $archive);
}
$context['sectors'] = $sectors;

Timber::render('blocks/' . basename(__DIR__) . '/block.twig', $context);
