<?php

use Timber\Timber;

$context = Timber::context();

Timber::render('views/templates/404/view.twig', $context);
