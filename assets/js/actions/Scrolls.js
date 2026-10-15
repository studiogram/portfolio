import { gsap, SplitText, ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { getSmooth } from "./Smooth";
gsap.registerPlugin(SplitText, ScrollToPlugin, ScrollTrigger);

export default class Scrolls {
    constructor() {
        this.getElements();
        this.events();
        this.scrolls();
        this.reveal();
    }

    // Drop the CSS pre-hide once GSAP has applied the animations' start states,
    // so nothing flashes in its plain state on load. Failsafe timeout ensures
    // content is never left hidden if something above throws.
    reveal() {
        const body = document.body;
        const done = () => {
            if (body.classList.contains("is-scroll-ready")) return;
            // .is-revealing enables the CSS ease-in for one window, then is
            // removed so the transition never interferes with GSAP's scrub.
            body.classList.add("is-scroll-ready", "is-revealing");
            setTimeout(() => body.classList.remove("is-revealing"), 400);
        };
        requestAnimationFrame(done);
        setTimeout(done, 1000);
    }

    getElements() {
        this.height = 0;
        this.header = document.querySelector(".header");
        this.adminBar = document.getElementById("wpadminbar");
        this.links = document.querySelectorAll('a[href^="#"]');
        this.fades = [...document.querySelectorAll('[data-scroll="fade"]')];
        this.zoomIn = [...document.querySelectorAll('[data-scroll="zoomIn"]')];
        this.zooms = [...document.querySelectorAll('[data-scroll="zoomOut"]')];
        this.scales = [...document.querySelectorAll('[data-scroll="scale"]')];
        this.numbers = [
            ...document.querySelectorAll('[data-scroll="numbers"]'),
        ];
        this.bars = [...document.querySelectorAll('[data-scroll="bars"]')];
        this.letters = [
            ...document.querySelectorAll('[data-scroll="letters"]'),
        ];
        this.underlines = [
            ...document.querySelectorAll(
                '.wysiwyg u, .wysiwyg [style*="underline"]',
            ),
        ];
        this.titles = [
            ...document.querySelectorAll(
                ".wysiwyg h1, .wysiwyg h2, .wysiwyg h3",
            ),
        ];
        this.aligns = [...document.querySelectorAll('[data-scroll="align"]')];
        this.shapes = [...document.querySelectorAll('[data-scroll="shape"]')];
        this.radiuses = [
            ...document.querySelectorAll('[data-scroll="radius"]'),
        ];
        this.rotates = [...document.querySelectorAll('[data-scroll="rotate"]')];
        this.blurs = [...document.querySelectorAll('[data-scroll="blur"]')];
        this.reveals = [...document.querySelectorAll('[data-scroll="reveal"]')];
        this.revealCircles = [
            ...document.querySelectorAll("[data-reveal-circle]"),
        ];
        this.revealCirclesSmart = [
            ...document.querySelectorAll("[data-reveal-circle-smart]"),
        ];
        this.fromLeft = [
            ...document.querySelectorAll('[data-scroll="from-left"]'),
        ];
        this.fromLeftFull = [
            ...document.querySelectorAll('[data-scroll="from-left-full"]'),
        ];
        this.perspectives = [
            ...document.querySelectorAll('[data-scroll="perspective"]'),
        ];
    }

    // True when the element is at least partly inside the viewport at load,
    // meaning it won't scroll in and its reveal should play immediately.
    inInitialViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    // Extra tween vars for an enter animation. When the trigger is already on
    // screen at load it never scrolls in, so play on a timer. Otherwise, with
    // scrub it tracks the scroll position; without scrub it fires once when the
    // element hits `start` and plays on its own timer (snappier, not laggy).
    enterVars(
        trigger,
        {
            start = "top bottom",
            end = "top 35%",
            duration = 1.2,
            delay = 0.2,
            scrub = true,
            markers = false,
        } = {},
    ) {
        if (this.inInitialViewport(trigger)) {
            return { duration, delay, ease: "power2.out" };
        }
        if (!scrub) {
            return {
                duration,
                ease: "power2.out",
                scrollTrigger: {
                    trigger,
                    start,
                    toggleActions: "play none none none",
                    markers,
                },
            };
        }
        return {
            ease: "none",
            scrollTrigger: { trigger, start, end, scrub, markers },
        };
    }

    scrolls() {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (this.perspectives && !reduceMotion) {
            this.perspectives.forEach((perspective) => {
                gsap.fromTo(
                    perspective,
                    { rotationX: 0 },
                    {
                        rotationX: 40,
                        autoAlpha: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: perspective.parentElement,
                            start: "top top",
                            end: "center top",
                            scrub: 1,
                            invalidateOnRefresh: true,
                        },
                    },
                );
            });
        }

        if (this.fromLeft) {
            this.fromLeft.forEach((fromLeft) => {
                gsap.fromTo(
                    fromLeft,
                    { autoAlpha: 0, xPercent: -10 },
                    {
                        autoAlpha: 1,
                        xPercent: 0,
                        ...this.enterVars(fromLeft, {
                            end: "top 60%",
                        }),
                    },
                );
            });
        }

        if (this.fromLeftFull) {
            this.fromLeftFull.forEach((fromLeft) => {
                gsap.fromTo(
                    fromLeft,
                    { autoAlpha: 0, xPercent: -100 },
                    {
                        autoAlpha: 1,
                        xPercent: 0,
                        ...this.enterVars(fromLeft, {
                            end: "top 60%",
                        }),
                    },
                );
            });
        }

        if (this.fades) {
            this.fades.forEach((fade) => {
                gsap.fromTo(
                    fade,
                    { autoAlpha: 0 },
                    { autoAlpha: 1, ...this.enterVars(fade) },
                );
            });
        }

        if (this.zooms) {
            this.zooms.forEach((zoom) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: zoom,
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                    },
                });
                tl.to(zoom, { scale: 1.25 });
            });
        }

        if (this.zoomIn) {
            this.zoomIn.forEach((zoom) => {
                gsap.from(zoom, { scale: 0, ...this.enterVars(zoom) });
            });
        }

        if (this.scales) {
            this.scales.forEach((scale) => {
                gsap.from(scale, { scale: 0, ...this.enterVars(scale) });
            });
        }

        if (this.bars) {
            this.bars.forEach((bar) => {
                gsap.fromTo(
                    bar,
                    { width: "0%" },
                    { width: "100%", ...this.enterVars(bar) },
                );
            });
        }

        if (this.numbers) {
            this.numbers.forEach((number) => {
                let upper = number > 100 && number % 5 == 0 ? 5 : 1;
                upper = number > 1000 && number % 100 == 0 ? 100 : 1;

                number.style.display = "inline-block";
                number.style.textAlign = "center";
                number.style.fontVariantNumeric = "tabular-nums";
                number.style.minWidth = `${number.offsetWidth}px`;

                gsap.from(number, {
                    textContent: 0,
                    duration: 1,
                    snap: { textContent: upper },
                    stagger: 1,
                    ...(this.inInitialViewport(number)
                        ? { delay: 0.2 }
                        : {
                              scrollTrigger: {
                                  trigger: number,
                                  start: "top bottom",
                                  scrub: false,
                              },
                          }),
                });
            });
        }

        if (this.underlines) {
            this.underlines.forEach((underline) => {
                gsap.fromTo(
                    underline,
                    { "--underline": "0%" },
                    {
                        "--underline": "100%",
                        ...this.enterVars(underline, { delay: 0.3 }),
                    },
                );
            });
        }

        if (this.reveals) {
            this.reveals.forEach((reveal) => {
                gsap.set(reveal, { clipPath: "circle(0% at 50% 50%)" });
                gsap.to(reveal, {
                    clipPath: "circle(75% at 50% 50%)",
                    ...this.enterVars(reveal, {
                        end: "top 15%",
                        duration: 1.4,
                    }),
                });
            });
        }

        const revealDur = window.innerWidth <= 1024 ? 1 : 1.3;

        if (this.revealCircles) {
            this.revealCircles.forEach((circle) => {
                const svg = circle.ownerSVGElement;
                const vb = svg && svg.viewBox && svg.viewBox.baseVal;
                const target = vb
                    ? (Math.hypot(vb.width, vb.height) / 2) * 1.1
                    : 1000;
                // Prime hidden state (r=0) before revealing the svg, so the
                // CSS-hidden image never flashes fully before the animation.
                gsap.set(circle, { attr: { r: 0 } });
                gsap.set(svg, { autoAlpha: 1 });
                gsap.to(circle, {
                    attr: { r: target },
                    ...this.enterVars(svg, {
                        end: "top top",
                        duration: revealDur,
                    }),
                });
            });
        }

        if (this.revealCirclesSmart) {
            this.revealCirclesSmart.forEach((circle) => {
                const svg = circle.ownerSVGElement;
                const vb = svg && svg.viewBox && svg.viewBox.baseVal;
                const target = vb
                    ? (Math.hypot(vb.width, vb.height) / 2) * 1.1
                    : 1000;
                // Prime hidden state (r=0) before revealing the svg, so the
                // CSS-hidden image never flashes fully before the animation.
                gsap.set(circle, { attr: { r: 0 } });
                gsap.set(svg, { autoAlpha: 1 });
                gsap.to(circle, {
                    attr: { r: target },
                    ...this.enterVars(svg, {
                        end: "top 50%",
                        duration: revealDur,
                    }),
                });
            });
        }

        if (this.aligns.length) {
            this.mm = this.mm || gsap.matchMedia();
            this.mm.add("(min-width: 1025px)", () => {
                this.aligns.forEach((group) => {
                    const items = gsap.utils.toArray(group.children);
                    gsap.fromTo(
                        items,
                        { yPercent: (i) => 20 + (i % 3) * 30, autoAlpha: 0 },
                        {
                            yPercent: 0,
                            autoAlpha: 1,
                            ease: "none",
                            scrollTrigger: {
                                trigger: group,
                                start: "top bottom",
                                end: "top 40%",
                                scrub: true,
                            },
                        },
                    );
                });
            });
        }

        if (this.shapes.length) {
            this.shapes.forEach((shape) => {
                gsap.to(shape, {
                    rotation: 45,
                    scale: 1.5,
                    transformOrigin: "center center",
                    ease: "none",
                    scrollTrigger: this.scrollTriggerParameters(
                        shape,
                        "top bottom",
                        "bottom center",
                    ),
                });
            });
        }

        if (this.radiuses.length) {
            this.radiuses.forEach((el) => {
                gsap.from(el, {
                    borderRadius: 0,
                    ...this.enterVars(el, { end: "top top" }),
                });
            });
        }

        const footer = document.querySelector(".footer");
        if (footer) {
            this.mm = this.mm || gsap.matchMedia();
            this.mm.add("(min-width: 1025px)", () => {
                gsap.set(footer, { clearProps: "borderRadius" });
                gsap.from(footer, {
                    borderRadius: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: footer,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });
            });
        }

        if (this.rotates.length) {
            this.rotates.forEach((el) => {
                gsap.from(el, {
                    rotation: -10,
                    transformOrigin: "center center",
                    ...this.enterVars(el),
                });
            });
        }

        if (this.blurs.length) {
            this.blurs.forEach((el) => {
                const targets = el.querySelectorAll('[style*="underline"]');
                if (!targets.length) return;
                gsap.from(targets, {
                    filter: "blur(12px)",
                    autoAlpha: 0,
                    stagger: 0.25,
                    ...this.enterVars(el, { end: "top 25%" }),
                });
            });
        }

        if (this.letters) {
            this.letters.forEach((letter) => {
                const words = new SplitText(letter, { type: "words" });
                gsap.from(words.words, {
                    autoAlpha: 0.25,
                    stagger: 0.1,
                    ...this.enterVars(letter, { end: "top 40%" }),
                });
            });
        }
    }

    /**
     * @param {Element} el - triggering element
     * @param {String} start - starting scroll
     * @param {String} end - ending scroll
     * @param {Boolean} scrub - adapt scroll to scrollbar
     * @param {Boolean} markers - display markers helpers or not
     * @returns {object} - parameters details
     */
    scrollTriggerParameters(
        el,
        start = "top bottom",
        end = "top 35%",
        scrub = true,
        markers = false,
    ) {
        return {
            trigger: el,
            start,
            end,
            scrub,
            markers,
        };
    }

    events() {
        if (this.links) {
            if (this.header) {
                this.height += this.header.offsetHeight;
            }
            if (this.adminBar) {
                this.height += this.adminBar.offsetHeight;
            }
            this.onLink = this.onScrollLink.bind(this);
            this.links.forEach((link) => {
                link.addEventListener("click", this.onLink);
            });
        }
        this.onRefresh = () => ScrollTrigger.refresh();
        this.onLoad = () => setTimeout(() => ScrollTrigger.refresh(), 300);
        document.addEventListener("scroll-refresh", this.onRefresh);
        window.addEventListener("load", this.onLoad);
    }

    destroy() {
        document.removeEventListener("scroll-refresh", this.onRefresh);
        window.removeEventListener("load", this.onLoad);
        if (this.onLink) {
            this.links.forEach((link) =>
                link.removeEventListener("click", this.onLink),
            );
        }
        this.mm?.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }

    onScrollLink(e) {
        e.preventDefault();
        const target = document.querySelector(
            e.currentTarget.getAttribute("href"),
        );
        if (!target) return;
        const lenis = getSmooth();
        if (lenis) {
            lenis.scrollTo(target, { offset: -this.height, duration: 1 });
            return;
        }
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: target, offsetY: this.height },
        });
    }
}
