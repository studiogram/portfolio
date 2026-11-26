import "../css/editor.scss";
import { syncComponents } from "./components/ComponentManager";

class Editor {
    constructor() {
        this.initViews();
        this.watchPreviews();
        this.events();
        this.forceClassicLink();
    }

    forceClassicLink() {
        const tinymce = window.tinymce;
        if (!tinymce) return;

        const bind = (editor) => {
            editor.on("init", () => {
                const openModal = () => {
                    window.wpLink?.open?.(editor.id);
                    return true;
                };
                editor.addCommand("WP_Link", openModal);
                const btn = editor.buttons?.link;
                if (btn) btn.onclick = openModal;
            });
        };

        tinymce.on("AddEditor", (event) => bind(event.editor));
        (tinymce.editors || []).forEach(bind);
    }

    initViews() {
        syncComponents();
    }

    // ACF re-renders block previews (field change, insert) by replacing their
    // markup, which swaps [data-component] elements. Re-sync on a debounce so new
    // components init and replaced ones (e.g. Spline/WebGL) are disposed.
    watchPreviews() {
        let timer = null;
        const observer = new MutationObserver((mutations) => {
            // Ignore the wpLink modal's own DOM churn — resyncing components while
            // it is open tears the classic-editor link popup down mid-open.
            if (
                document.querySelector(
                    '[data-wplink-edit="true"], .mce-inline-toolbar-grp:not([style*="none"]), #wp-link-wrap',
                )
            ) {
                return;
            }
            clearTimeout(timer);
            timer = setTimeout(() => syncComponents(), 300);
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    events() {
        const { select, subscribe, dispatch } = wp.data;
        const getBlockList = () => select("core/block-editor").getBlocks();

        const isLinkModalOpen = () => {
            const wrap = document.getElementById("wp-link-wrap");
            if (wrap && getComputedStyle(wrap).display !== "none") return true;
            // Inline link toolbar (classic TinyMCE): a placeholder link is being
            // edited, or the inline link popover is on screen.
            return !!document.querySelector(
                '[data-wplink-edit="true"], .mce-inline-toolbar-grp:not([style*="none"])',
            );
        };

        const dispatchBlockEvent = (eventName, detail) => {
            const event = new CustomEvent(eventName, { detail });
            document.dispatchEvent(event);
        };

        let previousSelectedBlockId = null;
        let previousSidebar = null;
        const sidebarWidth = 400;

        subscribe(() => {
            const selectedBlockId =
                select("core/block-editor").getSelectedBlockClientId();
            const activeSidebar =
                select("core/edit-post")?.getActiveGeneralSidebarName?.();
            if (
                selectedBlockId &&
                selectedBlockId !== previousSelectedBlockId &&
                activeSidebar !== "edit-post/block" &&
                !isLinkModalOpen()
            ) {
                setTimeout(() => {
                    dispatch("core/edit-post")?.openGeneralSidebar?.(
                        "edit-post/block",
                    );
                }, 0);
            }
            previousSelectedBlockId = selectedBlockId;

            const sidebar =
                select("core/edit-post")?.getActiveGeneralSidebarName?.();
            if (sidebar !== previousSidebar) {
                const isOpen = !!sidebar;
                document.documentElement.style.setProperty(
                    "--sidebar-width",
                    isOpen ? `${sidebarWidth}px` : "0px",
                );
                previousSidebar = sidebar;
            }
        });

        let blockList = getBlockList().map((block) => ({
            id: block.clientId,
            name: block.name.replace("studiogram/", ""),
        }));

        subscribe(() => {
            const newBlockList = getBlockList().map((block) => ({
                id: block.clientId,
                name: block.name.replace("studiogram/", ""),
            }));
            if (newBlockList.length !== blockList.length) {
                if (newBlockList.length > blockList.length) {
                    const added = newBlockList.filter(
                        (newBlock) =>
                            !blockList.some(
                                (oldBlock) => oldBlock.id === newBlock.id,
                            ),
                    );
                    added?.forEach((addedBlock) => {
                        dispatchBlockEvent("blockAdded", addedBlock);
                        if (select("core/edit-post")?.isInserterOpened?.()) {
                            dispatch("core/edit-post")?.setIsInserterOpened?.(
                                false,
                            );
                        }
                    });
                } else {
                    const removed = blockList.filter(
                        (oldBlock) =>
                            !newBlockList.some(
                                (newBlock) => newBlock.id === oldBlock.id,
                            ),
                    );
                    removed?.forEach((removedBlock) =>
                        dispatchBlockEvent("blockRemoved", removedBlock),
                    );
                }
                blockList = newBlockList;
            }

            /* Reload after save */
            // const isSavingPost = wp.data.select("core/editor").isSavingPost();
            // const isAutosaving = wp.data
            //     .select("core/editor")
            //     .isAutosavingPost();

            // if (isSavingPost && !isAutosaving) {
            //     setTimeout(() => {
            //         location.reload();
            //     }, 1500);
            // }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Editor();

    // The block editor may be iframed (WP renders the canvas in
    // iframe[name="editor-canvas"]); when it is, .editor-styles-wrapper and the
    // ACF after-title field live inside that iframe's document, not the parent.
    // Query both documents so this works iframed or not.
    const docs = () => {
        const list = [document];
        const canvas = document.querySelector('iframe[name="editor-canvas"]');
        if (canvas?.contentDocument) list.push(canvas.contentDocument);
        return list;
    };

    const find = (selector) => {
        for (const doc of docs()) {
            const el = doc.querySelector(selector);
            if (el) return el;
        }
        return null;
    };

    // Inject grid overlay in editor from PHP-provided HTML
    const injectGrid = (wrapper) => {
        if (!wrapper || wrapper.querySelector(".grid-element")) return;
        if (
            typeof studiogramEditor === "undefined" ||
            !studiogramEditor.gridHtml
        )
            return;

        const container = wrapper.ownerDocument.createElement("div");
        container.innerHTML = studiogramEditor.gridHtml;
        wrapper.prepend(container.firstElementChild);
    };

    // Wait for both editor wrapper AND ACF field to exist (in either document).
    // Failsafe stop so a missing field never leaves the interval running.
    let waitCount = 0;
    const waitForReady = setInterval(() => {
        waitCount++;
        const wrapper = find(".editor-styles-wrapper");
        const field = find('[data-name="theme"] input');

        if (wrapper && field) {
            clearInterval(waitForReady);
            injectGrid(wrapper);
        } else if (waitCount > 50) {
            clearInterval(waitForReady);
        }
    }, 200);
});
