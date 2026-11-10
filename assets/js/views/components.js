/* Each component is a lazy loader: its module (and heavy deps like Spline's
   WebGL runtime or GSAP) is only fetched when a matching [data-component] is
   present on the page. Keeps the main bundle small — Spline no longer ships
   site-wide. */
const components = [
    {
        name: "archive-filter",
        load: () => import("../actions/ArchiveFilter"),
    },
    {
        name: "notes-archive",
        load: () => import("../actions/NotesArchive"),
    },
    {
        name: "related",
        load: () => import("../actions/Related"),
    },
    {
        name: "spline",
        // Heavy WebGL hero — defer to browser idle so it never blocks LCP/TBT.
        defer: true,
        load: () => import("../../../views/components/spline/scripts"),
    },
    {
        name: "dice",
        defer: true,
        load: () => import("../../../views/components/dice/scripts"),
    },
];

export default components;
