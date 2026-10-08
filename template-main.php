<?php

/**
 * Template Name: Page parent
 * Template Post Type: page
 */

use Timber\Timber;

$context = Timber::context();

Timber::render('views/templates/singular/view.twig', $context);
