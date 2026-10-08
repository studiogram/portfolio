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

    return lenis;
}

export function getSmooth() {
    return lenis;
}

// Jump to top and recompute trigger positions after a Taxi content swap.
export function resetSmooth() {
    if (!lenis) return;
    lenis.scrollTo(0, { immediate: true });
    lenis.resize();
    ScrollTrigger.refresh();
}
