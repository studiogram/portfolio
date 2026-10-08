<?php
if (!defined('ABSPATH')) exit;

define('STUDIOGRAM_THEME_FILE', __FILE__);
define('STUDIOGRAM_THEME_DIR', __DIR__);
define('STUDIOGRAM_BLOCKS_PATH', get_stylesheet_directory() . '/blocks/');

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/autoloader.php';

Timber\Timber::init();
new \STUDIOGRAM\Security();
new \STUDIOGRAM\Setup();
new \STUDIOGRAM\ACF();
new \STUDIOGRAM\ACFColorPalette();
new \STUDIOGRAM\Admin();
new \STUDIOGRAM\Gutemberg();
new \STUDIOGRAM\Helpers();
new \STUDIOGRAM\Menu();
new \STUDIOGRAM\PostTypes();
new \STUDIOGRAM\Theme();
new \STUDIOGRAM\Users();
new \STUDIOGRAM\Analytics();
new \STUDIOGRAM\Seo();
new \STUDIOGRAM\Performance();
