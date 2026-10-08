/* Each component is a lazy loader: its module (and heavy deps like Spline's
   WebGL runtime or GSAP) is only fetched when a matching [data-component] is
   present on the page. Keeps the main bundle small — Spline no longer ships
   site-wide. */
const components = [
    {
        name: "load-more",
        load: () => import("../actions/LoadMore"),
    },
    {
        name: "archive-filter",
        load: () => import("../actions/ArchiveFilter"),
    },
    {
        name: "spline",
        // Heavy WebGL hero — defer to browser idle so it never blocks LCP/TBT.
        defer: true,
        load: () => import("../../../views/components/spline/scripts"),
    },
    {
        name: "header-arrow",
        load: () => import("../../../views/components/header-arrow/scripts"),
    },
    {
        name: "gradient",
        load: () => import("../../../views/components/gradient/scripts"),
    },
];

export default components;
