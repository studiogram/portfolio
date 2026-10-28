import "./styles.scss";
import BlockParent from "../../assets/js/blocks/BlockParent";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const blockName = "labo";

class Labo extends BlockParent {
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
        this.imgs = [...this.element.querySelectorAll("[data-labo-img]")];
        this.blobs = [...this.element.querySelectorAll(".labo__blobs")];
        if (reduce || admin) return;

        this.build();
    }

    build() {
        this.teardown();
        this.tweens = [];

        const parallax = (el, amount) => {
            const t = gsap.fromTo(
                el,
                { yPercent: amount },
                {
                    yPercent: -amount,
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
            this.tweens.push(t);
        };

        this.imgs.forEach((img, i) => parallax(img, 18 + i * 12));
        this.blobs.forEach((b, i) => parallax(b, 6 + i * 4));
    }

    teardown() {
        this.tweens?.forEach((t) => {
            t.scrollTrigger?.kill();
            t.kill();
        });
        this.tweens = null;
    }

    update() {
        this.destroy();
        this.init();
    }

    destroy() {
        this.teardown();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () =>
        new BlockEvents(blockName, Labo),
    );
} else {
    new BlockEvents(blockName, Labo);
}
