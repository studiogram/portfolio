<?php

use Timber\Timber;

$context = Timber::context();

Timber::render('views/templates/archive/view.twig', $context);
