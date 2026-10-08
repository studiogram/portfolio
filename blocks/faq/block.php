<?php

use Timber\Timber;

$context['block'] = $block;
$context['fields'] = $fields;

// FAQPage structured data (GEO/rich results). Front end only — the editor
// preview does not need it. Answers are flattened to plain text.
$context['faq_schema'] = '';
if (!is_admin()) {
    $entities = [];
    foreach (($fields['questions'] ?? []) as $faq) {
        $question = trim(wp_strip_all_tags($faq['question'] ?? ''));
        $answer = trim(wp_strip_all_tags($faq['text'] ?? ''));
        if ($question === '' || $answer === '') {
            continue;
        }
        $entities[] = [
            '@type' => 'Question',
            'name' => $question,
            'acceptedAnswer' => ['@type' => 'Answer', 'text' => $answer],
        ];
    }
    if ($entities) {
        $context['faq_schema'] = wp_json_encode([
            '@context' => 'https://schema.org',
            '@type' => 'FAQPage',
            'mainEntity' => $entities,
        ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    }
}

Timber::render('blocks/' . basename(__DIR__) . '/block.twig', $context);
