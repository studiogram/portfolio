export default class BlockParent {
    constructor(el) {
        if (el && document.body.classList.contains("wp-admin")) {
            this._blockType = el.getAttribute("data-block-type") || "unknown";
            this._blockId = el.getAttribute("data-block-id");
            this._wrapper =
                el.closest(".acf-block-preview") || el.parentElement;
            setTimeout(() => this._startObserver(), 1000);
        }
    }

    _getElement() {
        if (!this._wrapper) return null;
        return this._wrapper.querySelector(
            `[data-block-type="${this._blockType}"]`,
        );
    }

    _startObserver() {
        if (!this._wrapper) return;
        let debounceTimer = null;
        this._observer = new MutationObserver(() => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                this._observer.disconnect();
                this.destroy();
                const newEl = this._getElement();
                if (newEl) this.element = newEl;
                this.init();
                setTimeout(() => this._startObserver(), 1000);
            }, 300);
        });
        this._observer.observe(this._wrapper, {
            childList: true,
            subtree: true,
            characterData: true,
        });
    }

    init() {}

    acf() {}

    update() {}

    destroy() {}

    resize() {}
}
