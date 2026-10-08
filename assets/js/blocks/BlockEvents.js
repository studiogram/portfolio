const registry = new Set();
const registeredNames = new Set();

/* Has a BlockEvents already been created for this block type? Lets the main
   bundle's loader skip types whose per-page script already booted them. */
export function isBlockRegistered(blockName) {
    return registeredNames.has(blockName);
}

export default class BlockEvents {
    constructor(blockName, BlockClass) {
        // A block type can boot from two places: its own enqueued script (initial
        // load / editor) and the main bundle's loader (Taxi SPA nav). Register
        // each type once so listeners aren't double-bound.
        if (registeredNames.has(blockName)) return;
        registeredNames.add(blockName);

        this.blockName = blockName;
        this.BlockClass = BlockClass;
        this.blocks = {};
        registry.add(this);
        this.events();
        this.adminEvents();
    }

    /* Re-sync every registered block type against the current DOM. Call after a
       Taxi SPA navigation so blocks on the new page init and blocks from the old
       page are destroyed (releasing per-block resources like Spline/WebGL). */
    static syncAll() {
        registry.forEach((instance) => instance.sync());
    }

    events() {
        this.sync();

        /* window resize */
        window.addEventListener("resize", (event) => {
            for (const id in this.blocks) {
                this.blocks[id].resize();
            }
        });
    }

    // Document that hosts the rendered blocks. In an iframed block editor the
    // canvas lives in iframe[name="editor-canvas"] and blocks render inside it,
    // not in the parent document this script runs in. Falls back to the parent
    // document (frontend, or non-iframed editor).
    blockDoc() {
        const canvas = document.querySelector('iframe[name="editor-canvas"]');
        return canvas?.contentDocument || document;
    }

    sync() {
        const present = new Set();
        this.blockDoc()
            .querySelectorAll(`[data-block-type="${this.blockName}"]`)
            .forEach((block) => {
                const id = block
                    .getAttribute("data-block-id")
                    .replace("block_", "");
                present.add(id);
                if (!(id in this.blocks))
                    this.blocks[id] = new this.BlockClass(block);
            });

        /* Tear down blocks whose DOM was removed (e.g. previous page). */
        for (const id in this.blocks) {
            if (!present.has(id)) {
                this.blocks[id].destroy?.();
                delete this.blocks[id];
            }
        }
    }

    adminEvents() {
        // A per-block script can boot before <body> is parsed (header/defer
        // timing in the editor), so bail and retry once the DOM is ready.
        if (!document.body) {
            document.addEventListener(
                "DOMContentLoaded",
                () => this.adminEvents(),
                { once: true },
            );
            return;
        }
        if (document.body.classList.contains("wp-admin")) {
            /* Iframed editor: the canvas iframe (and the blocks already on the
               page) may not exist when this per-block script first runs, so the
               constructor's sync() found nothing. Re-sync once the canvas is
               ready so initial blocks init. */
            let tries = 0;
            const waitForCanvas = setInterval(() => {
                tries++;
                const canvas = document.querySelector(
                    'iframe[name="editor-canvas"]',
                );
                if (canvas?.contentDocument?.body) {
                    clearInterval(waitForCanvas);
                    this.sync();
                } else if (tries > 50) {
                    // ~10s with no canvas: non-iframed editor. The constructor's
                    // sync() already ran against the parent document.
                    clearInterval(waitForCanvas);
                }
            }, 200);

            /* block added */
            document.addEventListener("blockAdded", (event) => {
                if (event.detail.name === this.blockName) {
                    const id = event.detail.id;
                    this.checkForElement(
                        `[data-block-type][data-block-id="block_${id}"]`,
                        (element) => {
                            if (!(id in this.blocks))
                                this.blocks[id] = new this.BlockClass(element);
                        },
                    );
                }
            });

            /* block removed */
            document.addEventListener("blockRemoved", (event) => {
                if (event.detail.name === this.blockName) {
                    const id = event.detail.id;
                    if (id in this.blocks) {
                        this.blocks[id].destroy();
                        delete this.blocks[id];
                    }
                }
            });

            /* block updated */
            document.body.addEventListener("change", (event) => {
                if (
                    event.target.matches(
                        ".acf-field input, .acf-field textarea, .acf-field select",
                    )
                ) {
                    const { select } = wp.data;
                    const id =
                        select("core/block-editor").getSelectedBlockClientId();
                    if (id in this.blocks) this.blocks[id].update();

                    for (let id in this.blocks) {
                        this.blocks[id].acf();
                    }
                }
            });
        }
    }

    checkForElement(selector, callback) {
        const doc = this.blockDoc();
        const element = doc.querySelector(selector);
        if (element) {
            callback(element);
            return;
        }
        const observer = new MutationObserver((mutations, obs) => {
            const element = this.blockDoc().querySelector(selector);
            if (element) {
                obs.disconnect();
                callback(element);
            }
        });
        observer.observe(doc.body || document.body, {
            childList: true,
            subtree: true,
        });
    }
}
