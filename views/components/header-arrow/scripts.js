import { gsap, ScrollTrigger } from "gsap/all";
import { getSmooth } from "../../../assets/js/actions/Smooth";
gsap.registerPlugin(ScrollTrigger);

export default class HeaderArrow {
    constructor(element) {
        this.element = element;
        this.arrow = element.querySelector(".js-header-arrow");
        this.header = this.findHeader();
        this.content =
            this.header && this.header.querySelector(".js-header-content");

        // Frontend only: no page scroll to drive in the editor preview.
        if (!this.arrow || !this.header) return;
        if (document.body.classList.contains("wp-admin")) return;

        this.init();
    }

    // The header this arrow belongs to. Inside a block (header solution) it is
    // the containing block; in header-home the arrow is a sibling placed after
    // the header, so walk back to it.
    findHeader() {
        const parent = this.element.closest("[data-block-type]");
        if (parent) return parent;
        let prev = this.element.previousElementSibling;
        while (prev && !prev.matches('[data-block-type="header-home"]')) {
            prev = prev.previousElementSibling;
        }
        return prev || document.querySelector('[data-block-type="header-home"]');
    }

    init() {
        this.onArrowClick = () => {
            let next = this.header.nextElementSibling;
            while (next && !next.matches("[data-block-type]")) {
                next = next.nextElementSibling;
            }
            if (!next) return;
            const header = document.getElementById("header");
            const adminBar = document.getElementById("wpadminbar");
            let offset = 0;
            if (header) offset += header.offsetHeight;
            if (adminBar) offset += adminBar.offsetHeight;
            const lenis = getSmooth();
            if (lenis) {
                lenis.scrollTo(next, { offset: -offset, duration: 1 });
                return;
            }
            const top =
                next.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        };
        this.arrow.addEventListener("click", this.onArrowClick);

        if (this.header.dataset.blockType === "header-home") {
            this.fadeOnScroll();
        } else {
            this.rotateOnScroll();
        }
    }

    // header-home: shrink + fade the arrow (and content) across the first
    // header-height of scroll.
    fadeOnScroll() {
        this.onScroll = () => {
            const height = this.header.offsetHeight || window.innerHeight;
            const progress = Math.min(Math.max(window.scrollY / height, 0), 1);
            const scale = 1 - progress;
            this.arrow.style.transform = `scale(${scale})`;
            this.arrow.style.opacity = String(scale);
            if (this.content) this.content.style.opacity = String(1 - progress);
        };
        window.addEventListener("scroll", this.onScroll, { passive: true });
        this.onScroll();
    }

    // header solution: arrow rests at -45deg and unwinds to 0 as the header
    // scrolls past.
    rotateOnScroll() {
        this.tween = gsap.fromTo(
            this.arrow,
            { rotation: -45 },
            {
                rotation: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: this.header,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            },
        );
    }

    destroy() {
        if (this.arrow && this.onArrowClick) {
            this.arrow.removeEventListener("click", this.onArrowClick);
        }
        if (this.onScroll) {
            window.removeEventListener("scroll", this.onScroll);
        }
        if (this.tween) {
            this.tween.scrollTrigger?.kill();
            this.tween.kill();
        }
    }
}
