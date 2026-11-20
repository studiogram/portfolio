import Lenis from "lenis";
import { gsap, ScrollTrigger } from "gsap/all";

// One Lenis instance for the whole app lifetime. Taxi swaps content inside the
// scroller, so the instance persists across navigation; it just resets and
// refreshes on each page (see Smooth.reset).
let lenis;

export function initSmooth() {
    if (lenis) return lenis;
    // Frontend only — the block editor owns its own scroll container, and
    // Lenis's html/body height overrides break it.
    if (document.body.classList.contains("wp-admin")) return;

    lenis = window.lenis = new Lenis({ lerp: 0.1 });

    // Drive Lenis from GSAP's ticker so scrub animations and the scroll share
    // one clock; keep ScrollTrigger in sync on every frame.
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    initHoverSync(lenis);

    return lenis;
}

function initHoverSync(lenis) {
    let x = -1;
    let y = -1;
    let raf = 0;
    let prev = [];

    const apply = () => {
        raf = 0;
        if (x < 0) return;
        let el = document.elementFromPoint(x, y);
        const next = [];
        while (el && el !== document.documentElement) {
            next.push(el);
            el = el.parentElement;
        }
        const set = new Set(next);
        prev.forEach((e) => {
            if (!set.has(e)) e.classList.remove("is-hover");
        });
        next.forEach((e) => e.classList.add("is-hover"));
        prev = next;
    };

    const schedule = () => {
        if (!raf) raf = requestAnimationFrame(apply);
    };

    const clear = () => {
        x = -1;
        y = -1;
        prev.forEach((e) => e.classList.remove("is-hover"));
        prev = [];
    };

    window.addEventListener(
        "pointermove",
        (e) => {
            x = e.clientX;
            y = e.clientY;
            schedule();
        },
        { passive: true },
    );
    document.addEventListener("pointerleave", clear);
    lenis.on("scroll", schedule);
}

export function getSmooth() {
    return lenis;
}

export function scrollToHash(hash, opts = {}) {
    if (!hash || hash === "#") return false;
    let el;
    try {
        el = document.querySelector(hash);
    } catch {
        return false;
    }
    if (!el) return false;
    if (lenis) {
        lenis.scrollTo(el, { immediate: true });
    } else {
        el.scrollIntoView();
    }
    return true;
}

// Jump to top and recompute trigger positions after a Taxi content swap.
export function resetSmooth() {
    if (!lenis) return;
    lenis.scrollTo(0, { immediate: true });
    lenis.resize();
    ScrollTrigger.refresh();
    requestAnimationFrame(() => {
        lenis.resize();
        ScrollTrigger.refresh();
    });
    setTimeout(() => {
        lenis.resize();
        ScrollTrigger.refresh();
    }, 400);
}
