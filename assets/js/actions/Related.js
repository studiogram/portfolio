import { gsap, ScrollTrigger } from "gsap/all";
import { reducedMotion } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

export default class Related {
    constructor(element) {
        this.el = element;
        this.init();
    }

    init() {
        if (reducedMotion()) return;
        const layers = [...this.el.querySelectorAll("[data-parallax]")];
        if (!layers.length) return;

        gsap.set(layers, { autoAlpha: 0 });
        this.parallax = layers.map((el) =>
            gsap.fromTo(
                el,
                { yPercent: 20 },
                {
                    yPercent: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: el.closest(".related__item") || el,
                        start: "top bottom",
                        end: "center 35%",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                },
            ),
        );
        ScrollTrigger.refresh();
        gsap.to(layers, {
            autoAlpha: 1,
            duration: 0.4,
            delay: 0.15,
            ease: "power1.out",
        });
    }

    destroy() {
        this.parallax?.forEach((t) => {
            // Killing the trigger reverts the scrub tween to its start, which
            // jumps the layer down mid-navigation. Snapshot the current transform
            // and re-pin it inline so it stays put as the page leaves.
            const el = t.targets?.()[0];
            const transform = el ? getComputedStyle(el).transform : null;
            t.scrollTrigger?.kill();
            t.kill();
            if (el && transform) el.style.transform = transform;
        });
        this.parallax = null;
    }
}
