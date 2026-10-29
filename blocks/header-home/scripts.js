import BlockParent from "../../assets/js/blocks/BlockParent";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

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
        this.enter();
    }

    enter() {
        if (this.entered) return;
        this.entered = true;
        const admin = document.body.classList.contains("wp-admin");
        this.cartouche = this.element.querySelector(".cartouche");
        if (!this.cartouche || admin || this.reduced) return;

        gsap.set(this.cartouche, {
            transformPerspective: 900,
            transformOrigin: "top center",
        });

        gsap.from(this.cartouche, {
            rotationX: -20,
            duration: 1.4,
            ease: "power2.out",
            onComplete: () => this.scrollTilt(),
        });
    }

    scrollTilt() {
        this.tilt = gsap.to(this.cartouche, {
            rotationX: -20,
            ease: "none",
            scrollTrigger: {
                trigger: this.element,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });
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
        this.tilt?.scrollTrigger?.kill();
        this.tilt?.kill();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => new BlockEvents(blockName, HeaderHome));
} else {
    new BlockEvents(blockName, HeaderHome);
}
