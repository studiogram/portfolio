import { Application } from "@splinetool/runtime";

export default class Spline {
    constructor(element) {
        this.element = element;
        this.canvas = this.element.querySelector("canvas");
        if (this.canvas) {
            this.init();
        }
    }

    init() {
        const url = this.canvas.dataset.url;
        if (!url) return;
        this.app = new Application(this.canvas);
        this.app
            .load(url)
            .then(() => {
                // Navigated away before load resolved: app already disposed.
                if (this.destroyed || !this.app) return;
                if (this.app.controls) {
                    this.app.controls.enableZoom = false;
                }
                this.canvas.classList.remove("opacity-0");
                this.forwardPointer();
            })
            .catch((err) => {
                if (this.destroyed) return;
                console.error("Spline load failed:", url, err);
            });
    }

    // Header is sticky behind later sections; once scrolled, those sections
    // capture pointer events so the canvas stops receiving them. Relay window
    // moves to the canvas so the scene keeps reacting to the mouse.
    forwardPointer() {
        this.onMove = (e) => {
            if (!this.canvas || e.target === this.canvas) return;
            const opts = {
                clientX: e.clientX,
                clientY: e.clientY,
                bubbles: false,
                cancelable: true,
                view: window,
            };
            this.canvas.dispatchEvent(
                new PointerEvent("pointermove", {
                    ...opts,
                    pointerId: e.pointerId ?? 1,
                    pointerType: e.pointerType ?? "mouse",
                    isPrimary: true,
                }),
            );
            this.canvas.dispatchEvent(new MouseEvent("mousemove", opts));
        };
        window.addEventListener("pointermove", this.onMove, { passive: true });
    }

    destroy() {
        this.destroyed = true;
        if (this.onMove) {
            window.removeEventListener("pointermove", this.onMove);
            this.onMove = null;
        }
        if (this.app) {
            this.app.dispose?.();
            this.app = null;
        }
    }
}
