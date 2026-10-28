import "./styles.scss";
import BlockParent from "../../assets/js/blocks/BlockParent";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import { gsap } from "gsap/all";

const blockName = "logos";
const SPEED = 60;

class Logos extends BlockParent {
    constructor(element) {
        super(element);
        this.element = element;
        this.init();
    }

    init() {
        this.root = this.element.querySelector(".logos");
        this.viewport = this.element.querySelector(".logos__viewport");
        this.track = this.element.querySelector(".logos__track");
        if (!this.root || !this.viewport || !this.track) return;

        this.reduce = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        this.admin = document.body.classList.contains("wp-admin");
        this.marquee = this.root.hasAttribute("data-logos-marquee");

        const build = () => {
            if (document.contains(this.element)) this.build();
        };
        if (document.fonts?.ready) document.fonts.ready.then(build);
        else build();
    }

    build() {
        this.teardown();
        if (!this.marquee || this.reduce || this.admin) return;
        if (this.track.scrollWidth <= this.viewport.clientWidth) return;

        const gap = parseFloat(getComputedStyle(this.track).columnGap) || 0;
        this.clone = this.track.cloneNode(true);
        this.clone.setAttribute("aria-hidden", "true");

        this.lane = document.createElement("div");
        this.lane.className = "logos__lane";
        this.viewport.appendChild(this.lane);
        this.lane.append(this.track, this.clone);
        this.root.setAttribute("data-logos-running", "");

        const dist = this.track.offsetWidth + gap;
        this.tween = gsap.to(this.lane, {
            x: -dist,
            duration: dist / SPEED,
            ease: "none",
            repeat: -1,
        });

        this.onEnter = () => this.tween?.pause();
        this.onLeave = () => this.tween?.resume();
        this.root.addEventListener("mouseenter", this.onEnter);
        this.root.addEventListener("mouseleave", this.onLeave);
    }

    teardown() {
        this.tween?.kill();
        this.tween = null;
        if (this.onEnter) this.root.removeEventListener("mouseenter", this.onEnter);
        if (this.onLeave) this.root.removeEventListener("mouseleave", this.onLeave);
        this.onEnter = this.onLeave = null;
        this.root?.removeAttribute("data-logos-running");
        if (this.lane) {
            this.clone?.remove();
            gsap.set(this.track, { clearProps: "transform" });
            this.viewport.appendChild(this.track);
            this.lane.remove();
            this.lane = null;
            this.clone = null;
        }
    }

    resize() {
        clearTimeout(this.rt);
        this.rt = setTimeout(() => this.build(), 200);
    }

    update() {
        this.teardown();
        this.init();
    }

    destroy() {
        clearTimeout(this.rt);
        this.teardown();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () =>
        new BlockEvents(blockName, Logos),
    );
} else {
    new BlockEvents(blockName, Logos);
}
