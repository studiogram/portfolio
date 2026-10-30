import "./styles.scss";
import BlockParent from "../../assets/js/blocks/BlockParent";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const blockName = "panels";

class Panels extends BlockParent {
    constructor(element) {
        super(element);
        this.element = element;
        this.init();
    }

    init() {
        this.panels = [...this.element.querySelectorAll("[data-panels-panel]")];
        const admin = document.body.classList.contains("wp-admin");
        if (this.panels.length < 2 || admin || this.reduced) return;
        this.build();
    }

    build() {
        this.teardown();
        this.element.classList.add("is-pinned");

        const slides = this.panels.slice(1);
        gsap.set(slides, { xPercent: 110 });

        this.tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.element,
                start: "center center",
                end: "+=" + slides.length * 100 + "%",
                pin: true,
                scrub: true,
                invalidateOnRefresh: true,
                markers: true,
            },
        });

        slides.forEach((panel, i) => {
            this.tl.to(panel, { xPercent: 0, ease: "none", duration: 1 }, i);
        });
    }

    teardown() {
        this.tl?.scrollTrigger?.kill();
        this.tl?.kill();
        this.tl = null;
        this.element.classList.remove("is-pinned");
        if (this.panels) gsap.set(this.panels, { clearProps: "transform" });
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
        () => new BlockEvents(blockName, Panels),
    );
} else {
    new BlockEvents(blockName, Panels);
}
