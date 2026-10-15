import "./styles.scss";
import BlockParent from "../../assets/js/blocks/BlockParent";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const blockName = "mosaic";

// yPercent amplitude per column-step away from the center. Higher = sharper arrow.
const STEP = 6;

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
        this.cols = [...this.element.querySelectorAll(".mosaic__col")];
        if (!this.cols.length || reduce) return;

        const center = (this.cols.length - 1) / 2;

        // Scrub each column down as the block passes; the closer to the center,
        // the more it drops → a ∨ arrow forms. Outer columns barely move.
        this.tweens = this.cols
            .map((col, i) => {
                const amp = (center - Math.abs(i - center)) * STEP;
                if (!amp) return null;
                return gsap.fromTo(
                    col,
                    { yPercent: -amp },
                    {
                        yPercent: amp,
                        ease: "none",
                        scrollTrigger: {
                            trigger: this.element,
                            start: "top bottom",
                            end: "bottom center",
                            scrub: 1,
                            invalidateOnRefresh: true,
                        },
                    },
                );
            })
            .filter(Boolean);
    }

    update() {
        this.destroy();
        this.init();
    }

    destroy() {
        this.tweens?.forEach((t) => {
            t.scrollTrigger?.kill();
            t.kill();
        });
        this.tweens = null;
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        new BlockEvents(blockName, Mosaic);
    });
} else {
    new BlockEvents(blockName, Mosaic);
}
