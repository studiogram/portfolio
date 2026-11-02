<?php

use Timber\Timber;

$context = Timber::context();

Timber::render('views/templates/notes/view.twig', $context);
