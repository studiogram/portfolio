import "./styles.scss";
import BlockParent from "../../assets/js/blocks/BlockParent";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const blockName = "transmission";

class Transmission extends BlockParent {
    constructor(element) {
        super(element);
        this.element = element;
        this.init();
    }

    init() {
        const admin = document.body.classList.contains("wp-admin");
        this.left = this.element.querySelector('[data-trans="left"]');
        this.right = this.element.querySelector('[data-trans="right"]');
        if ((!this.left && !this.right) || admin || this.reduced) return;
        this.build();
    }

    build() {
        this.teardown();
        this.tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.element,
                start: "top bottom",
                end: "top top",
                scrub: true,
                invalidateOnRefresh: true,
            },
        });
        if (this.left)
            this.tl.fromTo(
                this.left,
                { xPercent: 0 },
                { xPercent: -4, ease: "none" },
                0,
            );
        if (this.right)
            this.tl.fromTo(
                this.right,
                { xPercent: 0 },
                { xPercent: 4, ease: "none" },
                0,
            );
    }

    teardown() {
        this.tl?.scrollTrigger?.kill();
        this.tl?.kill();
        this.tl = null;
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
    document.addEventListener(
        "DOMContentLoaded",
        () => new BlockEvents(blockName, Transmission),
    );
} else {
    new BlockEvents(blockName, Transmission);
}
