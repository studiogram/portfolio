<?php

use Timber\Timber;

$context['block'] = $block;
$context['fields'] = $fields;

// Service structured data (GEO) for Solution pages — these describe a service
// the company offers. Front end only. Yoast does not generate this type.
$context['service_schema'] = '';
if (!is_admin() && ($fields['header_type'] ?? '') === 'solution') {
    $post_id = get_the_ID();
    $name = get_the_title($post_id);
    if ($name) {
        $schema = [
            '@context' => 'https://schema.org',
            '@type' => 'Service',
            'name' => $name,
            'provider' => [
                '@type' => 'Organization',
                'name' => get_bloginfo('name'),
                'url' => home_url('/'),
            ],
            'areaServed' => ['France', 'International'],
            'url' => get_permalink($post_id),
        ];
        $description = trim(wp_strip_all_tags(get_the_excerpt($post_id)));
        if ($description === '') {
            $description = trim(wp_strip_all_tags($fields['text'] ?? ''));
        }
        if ($description !== '') {
            $schema['description'] = $description;
        }
        $context['service_schema'] = wp_json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    }
}

Timber::render('blocks/' . basename(__DIR__) . '/block.twig', $context);
