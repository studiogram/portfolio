import "./styles.scss";
import BlockParent from "../../assets/js/blocks/BlockParent";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const blockName = "panel";
const TILT = 5; // degrees

class Panel extends BlockParent {
    constructor(element) {
        super(element);
        this.element = element;
        this.init();
    }

    init() {
        const reduce = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        const back = this.element.querySelector("[data-panel-back]");
        const wrap = this.element.querySelector(".panel");
        if (!back || !wrap || reduce) return;

        const left = wrap.dataset.panelSide === "left";
        const tilt = left ? TILT : -TILT;

        // the back panel rotates in from flat to its resting tilt as it enters
        this.tween = gsap.fromTo(
            back,
            { rotation: 0 },
            {
                rotation: tilt,
                transformOrigin: left ? "bottom left" : "bottom right",
                ease: "none",
                scrollTrigger: {
                    trigger: this.element,
                    start: "top bottom",
                    end: "center center",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            },
        );

        const wheel = this.element.querySelector("[data-panel-wheel] svg");
        if (wheel) {
            this.wheelTween = gsap.fromTo(
                wheel,
                { rotation: 0 },
                {
                    rotation: 270,
                    transformOrigin: "center center",
                    ease: "none",
                    scrollTrigger: {
                        trigger: this.element,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                },
            );
        }
    }

    update() {
        this.destroy();
        this.init();
    }

    destroy() {
        [this.tween, this.wheelTween].forEach((t) => {
            t?.scrollTrigger?.kill();
            t?.kill();
        });
        this.tween = null;
        this.wheelTween = null;
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        new BlockEvents(blockName, Panel);
    });
} else {
    new BlockEvents(blockName, Panel);
}
