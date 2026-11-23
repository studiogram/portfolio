import BlockParent from "../../assets/js/blocks/BlockParent";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import { gsap } from "gsap/all";

const blockName = "header-contact";

class HeaderContact extends BlockParent {
    constructor(element) {
        super(element);
        this.element = element;
        this.groups = [...element.querySelectorAll("svg > g")];
        this.init();
    }

    init() {
        if (this.reduced || !this.groups.length) return;

        this.play = () => {
            this.groups.forEach((g, i) => {
                gsap.from(g, {
                    rotation: i % 2 ? -180 : 180,
                    svgOrigin: "77.5 77.5",
                    duration: 1,
                    ease: "sine.out",
                    delay: i * 0.12,
                });
            });
        };

        if (window.__introDone) this.play();
        else document.addEventListener("app:intro", this.play, { once: true });
    }

    destroy() {
        if (this.play) document.removeEventListener("app:intro", this.play);
    }
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        () => new BlockEvents(blockName, HeaderContact),
    );
} else {
    new BlockEvents(blockName, HeaderContact);
}
