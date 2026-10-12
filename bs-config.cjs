module.exports = {
    proxy: "https://studiogram.localhost/",
    files: [
        "dist/js/*.js",
        "dist/css/*.css",
        "views/**/*.twig",
        "blocks/**/*.twig",
    ],
    open: false,
    reloadDebounce: 500,
    serveStatic: [
        {
            route: "/wp-content/themes/studiogram/dist",
            dir: "dist",
        },
    ],
};
