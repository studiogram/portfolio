<?php

namespace STUDIOGRAM;

if (!defined('ABSPATH')) exit;

/**
 * Front-end asset trimming.
 *
 * Dashicons ships on the front for visitors who never see the admin bar.
 *
 * NB: Gravity Forms assets are deliberately NOT dequeued here. The theme loads
 * GF core on every page (Theme::force_gravity_forms_scripts) because Taxi SPA
 * navigation only re-runs a form's inline init and never re-loads head/footer
 * assets — so `gform` (and GF's CSS) must already be present site-wide, or a
 * form first met via SPA nav throws "gform is not defined" and renders unstyled.
 */
class Performance
{
    public function __construct()
    {
        add_action('wp_enqueue_scripts', [$this, 'trim_assets'], 100);
    }

    public function trim_assets(): void
    {
        if (is_admin()) {
            return;
        }

        // Dashicons: only needed when the admin bar renders.
        if (!is_admin_bar_showing()) {
            wp_dequeue_style('dashicons');
        }
    }
}
