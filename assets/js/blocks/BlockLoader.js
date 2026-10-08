import { isBlockRegistered } from "./BlockEvents.js";

// Lazy importers for every block script, keyed by block name (its directory).
// import.meta.glob keeps each block code-split, so a block's JS (e.g. Swiper for
// the slider) only downloads when that block actually appears on a page.
const loaders = {};
for (const [path, loader] of Object.entries(
    import.meta.glob("../../../blocks/*/scripts.js"),
)) {
    const name = path.match(/blocks\/([^/]+)\/scripts\.js$/)?.[1];
    if (name) loaders[name] = loader;
}

/* Import the module for every block type present in `root` that hasn't
   registered yet, so a block first met via Taxi SPA navigation boots here
   instead of relying on a per-page enqueued script that never runs for a page
   the block wasn't originally part of. */
export async function ensureBlocks(root = document) {
    const types = new Set();
    if (root !== document && root.getAttribute?.("data-block-type"))
        types.add(root.getAttribute("data-block-type"));
    root.querySelectorAll("[data-block-type]").forEach((el) =>
        types.add(el.getAttribute("data-block-type")),
    );

    await Promise.all(
        [...types].map((name) =>
            isBlockRegistered(name) || !loaders[name]
                ? null
                : loaders[name](),
        ),
    );
}
