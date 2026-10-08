<?php

use Timber\Timber;

$context = Timber::context();


Timber::render('views/templates/singular/view.twig', $context);
