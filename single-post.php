<?php

use Timber\Timber;

$context = Timber::context();

$current = get_the_ID();
$all = get_posts([
    'post_type'      => 'post',
    'posts_per_page' => -1,
    'orderby'        => 'date',
    'order'          => 'DESC',
    'fields'         => 'ids',
]);

$n = count($all);
$i = array_search($current, $all, true);
$ids = [];

if ($n > 1 && $i !== false) {
    $previous = $all[($i + 1) % $n];
    $next     = $all[($i - 1 + $n) % $n];

    foreach ([$previous, $next] as $id) {
        if ($id !== $current && !in_array($id, $ids, true)) {
            $ids[] = $id;
        }
    }
}

$context['others'] = array_map(fn ($id) => Timber::get_post($id), $ids);

Timber::render('views/templates/singular/view.twig', $context);
