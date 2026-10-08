import components from "../views/components";

/* One instance per element, shared across frontend load, Taxi navigation and the
   admin editor. Keeps components (e.g. Spline/WebGL) from being double-initialised
   and disposes them once their element leaves the DOM, so contexts never leak. */
const instances = new Map();
// Elements whose module is mid-download, so a second sync pass doesn't
// double-instantiate them before the first resolves.
const pending = new WeakSet();

// Deferred components load on browser idle so their chunk + init never block
// LCP/TBT; the rest load immediately.
function whenReady(defer, fn) {
    if (!defer) return fn();
    if (typeof requestIdleCallback === "function") {
        requestIdleCallback(fn, { timeout: 2000 });
    } else {
        setTimeout(fn, 200);
    }
}

function initIn(root) {
    components.forEach(({ name, load, defer }) => {
        const els = [
            ...root.querySelectorAll(`[data-component="${name}"]`),
        ].filter((el) => !instances.has(el) && !pending.has(el));
        if (!els.length) return;

        els.forEach((el) => pending.add(el));
        whenReady(defer, () =>
            load()
                .then(({ default: Class }) => {
                    els.forEach((el) => {
                        pending.delete(el);
                        // Element may have left the DOM while the chunk loaded.
                        if (!document.contains(el) || instances.has(el)) return;
                        instances.set(el, new Class(el));
                    });
                })
                .catch((err) => {
                    els.forEach((el) => pending.delete(el));
                    console.error(`Component "${name}" failed to load`, err);
                }),
        );
    });
}

function pruneDetached() {
    instances.forEach((instance, el) => {
        if (!document.contains(el)) {
            instance.destroy?.();
            instances.delete(el);
        }
    });
}

/* Dispose components whose element is gone, then init any newly present ones. */
export function syncComponents(root = document) {
    pruneDetached();
    initIn(root);
}

/* Dispose components inside a subtree while it is still attached and sized.
   Call on Taxi onLeave so WebGL loops (Spline) stop before the leaving page's
   canvas is detached to zero size — otherwise it renders to a 0x0 framebuffer
   for a frame and floods the console with GL errors. */
export function destroyIn(root) {
    if (!root) return;
    instances.forEach((instance, el) => {
        if (root === el || root.contains?.(el)) {
            instance.destroy?.();
            instances.delete(el);
        }
    });
}

export function destroyAllComponents() {
    instances.forEach((instance) => instance.destroy?.());
    instances.clear();
}
