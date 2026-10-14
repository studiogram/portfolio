import BlockParent from "../../assets/js/blocks/BlockParent";
import BlockEvents from "../../assets/js/blocks/BlockEvents";

const blockName = "header-home";

class HeaderHome extends BlockParent {
    constructor(element) {
        super(element);
        this.element = element;
        this.onClick = this.onClick.bind(this);
        this.init();
    }

    init() {
        this.links = [...this.element.querySelectorAll("[data-sector]")];
        this.links.forEach((a) => a.addEventListener("click", this.onClick));
    }

    onClick(e) {
        e.preventDefault();
        const a = e.currentTarget;
        const href = a.getAttribute("href") || a.href?.baseVal;
        if (!href) return;
        if (window.taxi?.navigateTo) window.taxi.navigateTo(href);
        else location.href = href;
    }

    update() {
        this.destroy();
        this.init();
    }

    destroy() {
        this.links?.forEach((a) => a.removeEventListener("click", this.onClick));
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => new BlockEvents(blockName, HeaderHome));
} else {
    new BlockEvents(blockName, HeaderHome);
}
