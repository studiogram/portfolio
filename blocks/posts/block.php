<?php

use Timber\Timber;

$context['block'] = $block;
$context['fields'] = $fields;

/* Latest One Flux posts. A category (single term id) narrows to that category,
   otherwise all posts. Order follows the admin order (menu_order, driven by the
   Simple Custom Post Order plugin), not date. */
$cat = (int) ($fields['category'] ?? 0);

$args = [
    'post_type'      => 'post',
    'post_status'    => 'publish',
    'posts_per_page' => 9,
    'orderby'        => 'menu_order',
    'order'          => 'ASC',
];
if ($cat) {
    $args['cat'] = $cat;
}
if (function_exists('pll_current_language')) {
    $args['lang'] = pll_current_language();
}

$query = new WP_Query($args);
$context['posts_list'] = array_map(
    fn($p) => Timber::get_post($p->ID),
    $query->posts
);
wp_reset_postdata();

Timber::render('blocks/' . basename(__DIR__) . '/block.twig', $context);
