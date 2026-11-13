import "./styles.scss";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import BlockParent from "../../assets/js/blocks/BlockParent";

const blockName = "before-after";

class BeforeAfter extends BlockParent {
    constructor(element) {
        super(element);
        this.element = element;
        this.getElements();
        this.init();
    }

    getElements() {
        this.root = this.element.querySelector(".before-after");
    }

    init() {
        if (!this.root) return;
        this.onDown = this.onDown.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onUp = this.onUp.bind(this);
        this.root.addEventListener("pointerdown", this.onDown);
    }

    onDown(e) {
        this.dragging = true;
        this.root.classList.add("is-grabbing");
        this.move(e.clientX);
        window.addEventListener("pointermove", this.onMove);
        window.addEventListener("pointerup", this.onUp);
        e.preventDefault();
    }

    onMove(e) {
        if (this.dragging) this.move(e.clientX);
    }

    onUp() {
        this.dragging = false;
        this.root?.classList.remove("is-grabbing");
        window.removeEventListener("pointermove", this.onMove);
        window.removeEventListener("pointerup", this.onUp);
    }

    move(clientX) {
        const r = this.root.getBoundingClientRect();
        const p = Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100));
        this.root.style.setProperty("--pos", `${p}%`);
    }

    update() {
        this.getElements();
    }

    destroy() {
        this.onUp();
        this.root?.removeEventListener("pointerdown", this.onDown);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        new BlockEvents(blockName, BeforeAfter);
    });
} else {
    new BlockEvents(blockName, BeforeAfter);
}
