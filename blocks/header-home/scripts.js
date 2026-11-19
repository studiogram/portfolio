import "./styles.scss";
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
            rotationX: -20,
            autoAlpha: 0,
        });

        const play = () => {
            gsap.to(this.cartouche, {
                autoAlpha: 1,
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(this.cartouche, {
                rotationX: 0,
                duration: 1,
                ease: "power3.out",
                onComplete: () => this.scrollTilt(),
            });
        };

        // Play once the initial-load cover has cleared, so the fade-in + flip
        // happen in view. On SPA navigation the intro already ran → play now.
        if (window.__introDone) play();
        else document.addEventListener("app:intro", play, { once: true });
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
        const t = e.currentTarget;
        let href = t.getAttribute("href") || t.href?.baseVal;
        if (!href) {
            const sector = t.getAttribute("data-sector");
            href = this.element
                .querySelector(`a[data-sector="${sector}"]`)
                ?.getAttribute("href");
        }
        if (!href) return;
        if (window.taxi?.navigateTo) window.taxi.navigateTo(href);
        else location.href = href;
    }

    update() {
        this.destroy();
        this.init();
    }

    destroy() {
        this.links?.forEach((a) =>
            a.removeEventListener("click", this.onClick),
        );
        this.tilt?.scrollTrigger?.kill();
        this.tilt?.kill();
    }
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        () => new BlockEvents(blockName, HeaderHome),
    );
} else {
    new BlockEvents(blockName, HeaderHome);
}
