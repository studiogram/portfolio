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
        const admin = document.body.classList.contains("wp-admin");
        const back = this.element.querySelector("[data-panel-back]");
        const wrap = this.element.querySelector(".panel");
        if (!back || !wrap || reduce || admin) return;

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

        const head = this.element.querySelector(".panel__head");
        if (head) {
            this.mm = gsap.matchMedia();
            this.mm.add("(min-width: 1025px)", () => {
                const st = ScrollTrigger.create({
                    trigger: head,
                    start: "center center",
                    endTrigger: wrap,
                    end: () => "bottom center+=" + head.offsetHeight / 2,
                    pin: head,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                });
                return () => st.kill();
            });
        }

        this.itemTweens = [
            ...this.element.querySelectorAll(".panel__item"),
        ].map((item) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            });
            tl.fromTo(item, { opacity: 0 }, { opacity: 1, duration: 1, ease: "none" })
                .to(item, { opacity: 1, duration: 0.6, ease: "none" })
                .to(item, { opacity: 0, duration: 1, ease: "none" });
            return tl;
        });

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
        [this.tween, this.wheelTween, ...(this.itemTweens || [])].forEach((t) => {
            t?.scrollTrigger?.kill();
            t?.kill();
        });
        this.tween = null;
        this.wheelTween = null;
        this.itemTweens = null;
        this.mm?.revert();
        this.mm = null;
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        new BlockEvents(blockName, Panel);
    });
} else {
    new BlockEvents(blockName, Panel);
}
