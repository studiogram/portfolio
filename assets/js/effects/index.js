/* Each effect is a lazy loader: its module (and GSAP) is only fetched when a
   matching [data-effect] is on the page. Add a new effect here. */
const effects = {
    repeal: () => import("./Repeal"),
};

export default effects;
