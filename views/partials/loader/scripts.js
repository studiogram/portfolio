import { gsap, ScrollTrigger } from "gsap/all";
import { getSmooth } from "../../../assets/js/actions/Smooth";

// First-visit intro loader. Runs once on the initial full page load; Taxi
// handles every later navigation without a reload, so it never fires again.
export default class Loader {
    constructor(element) {
        this.el = element;
        this.cartouche = element.querySelector(".page-loader__cartouche");
        this.circles = element.querySelectorAll("circle");
        this.header = document.querySelector(".header");
        this.lenis = getSmooth();
        this.reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        this.ready = document.readyState === "complete";
        this.init();
    }

    init() {
        // Lock scroll while the loader covers the page.
        this.lenis?.stop();
        document.documentElement.classList.add("is-loading");

        if (this.reduced) {
            this.out();
            return;
        }

        gsap.set(this.circles, { autoAlpha: 0 });
        window.addEventListener("load", () => (this.ready = true), {
            once: true,
        });

        // Circles light up one after another, looping until the page is ready;
        // onRepeat only fires between full cycles, so the animation always
        // finishes a complete pass before the loader leaves.
        this.loop = gsap.timeline({
            repeat: -1,
            onRepeat: () => {
                if (this.ready) {
                    this.loop.kill();
                    this.out();
                }
            },
        });
        this.loop
            .to(this.circles, {
                autoAlpha: 1,
                duration: 0.1,
                stagger: 0.08,
            })
            .to(
                this.circles,
                { autoAlpha: 0, duration: 0.1, stagger: 0.08 },
                "+=0.2",
            );
    }

    out() {
        const done = () => {
            this.el.remove();
            this.lenis?.start();
            ScrollTrigger.refresh();
            document.documentElement.classList.remove("is-loading");
        };

        // Loader lifts away as one motion: slide up, fade out, and the cartouche
        // tilts from its top edge — all on the same clock so they stay in sync.
        const tl = gsap.timeline({
            defaults: { duration: 1, ease: "power3.inOut" },
            onComplete: done,
        });
        // Fade only the background (alpha of its own colour, rgb kept constant so
        // no hue shift); the cartouche and its circles stay fully opaque.
        const bg = getComputedStyle(this.el).backgroundColor;
        const bgTransparent = bg.replace("rgb(", "rgba(").replace(")", ", 0)");
        tl.to(this.el, { yPercent: -100 }, 0);
        tl.to(this.el, { backgroundColor: bgTransparent, duration: 0.45 }, 0);
        if (this.cartouche) {
            tl.fromTo(
                this.cartouche,
                {
                    rotationX: 0,
                    transformPerspective: 900,
                    transformOrigin: "top center",
                },
                { rotationX: -90 },
                0,
            );
        }
        if (this.header) {
            tl.fromTo(
                this.header,
                { top: "-8rem" },
                { top: "1rem", duration: 1.6, ease: "elastic.out(1, 0.7)" },
                0.3,
            );
        }
    }
}
