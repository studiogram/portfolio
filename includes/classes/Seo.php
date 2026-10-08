<?php

namespace STUDIOGRAM;

if (!defined('ABSPATH')) exit;

/**
 * GEO / AI-search helpers.
 *
 * Serves /llms.txt — a plain-text map of the site that generative engines read
 * to understand structure and pick pages to cite. Generated live from published
 * content so it never goes stale.
 */
class Seo
{
    public function __construct()
    {
        add_action('template_redirect', [$this, 'serve_llms_txt']);
    }

    public function serve_llms_txt(): void
    {
        $path = trim((string) parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/');
        if ($path !== 'llms.txt') {
            return;
        }

        status_header(200);
        header('Content-Type: text/plain; charset=utf-8');
        header('X-Robots-Tag: noindex');
        echo $this->build_llms_txt();
        exit;
    }

    private function build_llms_txt(): string
    {
        $name = get_bloginfo('name');
        $desc = get_bloginfo('description');

        $out = "# {$name}\n\n";
        if ($desc) {
            $out .= "> {$desc}\n\n";
        }

        // Key pages.
        $pages = get_posts([
            'post_type' => 'page',
            'post_status' => 'publish',
            'numberposts' => -1,
            'orderby' => 'menu_order title',
            'order' => 'ASC',
            'suppress_filters' => false,
        ]);
        if ($pages) {
            $out .= "## Pages\n";
            foreach ($pages as $p) {
                $out .= $this->line($p);
            }
            $out .= "\n";
        }

        // Posts.
        $posts = get_posts([
            'post_type' => 'post',
            'post_status' => 'publish',
            'numberposts' => 50,
            'suppress_filters' => false,
        ]);
        if ($posts) {
            $out .= "## Posts\n";
            foreach ($posts as $p) {
                $out .= $this->line($p);
            }
            $out .= "\n";
        }

        return $out;
    }

    private function line(\WP_Post $p): string
    {
        $title = get_the_title($p);
        $url = get_permalink($p);
        $summary = trim(wp_strip_all_tags(get_the_excerpt($p)));
        $summary = $summary !== '' ? ': ' . wp_trim_words($summary, 25, '…') : '';
        return "- [{$title}]({$url}){$summary}\n";
    }
}
