import "./styles.scss";
import BlockParent from "../../assets/js/blocks/BlockParent";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const blockName = "mosaic";

class Mosaic extends BlockParent {
    constructor(element) {
        super(element);
        this.element = element;
        this.init();
    }

    init() {
        const reduce = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        const cols = [...this.element.querySelectorAll(".mosaic__col")];
        this.oddCols = cols.filter(
            (c) => !c.classList.contains("mosaic__col--offset"),
        );
        this.offsetCol = cols.find((c) =>
            c.classList.contains("mosaic__col--offset"),
        );
        if (!this.oddCols.length || !this.offsetCol || reduce) return;

        const targetY = () =>
            parseFloat(getComputedStyle(this.offsetCol).marginTop) || 0;

        this.tween = gsap.fromTo(
            this.oddCols,
            { y: 0 },
            {
                y: targetY,
                ease: "none",
                scrollTrigger: {
                    trigger: this.element,
                    start: "top bottom",
                    end: "bottom 75%",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            },
        );
    }

    update() {
        this.destroy();
        this.init();
    }

    destroy() {
        this.tween?.scrollTrigger?.kill();
        this.tween?.kill();
        this.tween = null;
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        new BlockEvents(blockName, Mosaic);
    });
} else {
    new BlockEvents(blockName, Mosaic);
}
