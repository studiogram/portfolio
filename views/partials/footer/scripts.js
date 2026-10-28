import { gsap } from "gsap";

export default class Footer {
    constructor(element) {
        this.element = element;
        this.getElements();
        this.events();
        this.onResize = this.reserve.bind(this);
        addEventListener("resize", this.onResize);
        this.reserve();
        document.fonts?.ready.then(() => this.reserve());
    }

    reserve() {
        const prev = this.element.previousElementSibling;
        if (prev) prev.style.marginBottom = this.element.offsetHeight + "px";
    }

    getElements() {
        this.gradient = this.element.querySelector("radialGradient");
        this.stops = this.gradient
            ? [...this.gradient.querySelectorAll("stop")]
            : [];
        this.baseOffsets = this.stops.map((stop) =>
            parseFloat(stop.getAttribute("offset") || 0),
        );
    }

    events() {
        if (!this.gradient) return;
        this.element.addEventListener("mousemove", this.onMouseMove.bind(this));
        this.element.addEventListener(
            "mouseleave",
            this.onMouseLeave.bind(this),
        );
    }

    onMouseMove(event) {
        const rect = this.element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;

        this.stops.forEach((stop, i) => {
            const spread = (i / (this.stops.length - 1) - 0.5) * 2;
            const offset = gsap.utils.clamp(
                0,
                1,
                this.baseOffsets[i] + x * 0.35 * spread,
            );
            gsap.to(stop, {
                attr: { offset },
                duration: 0.8,
                ease: "power2.out",
            });
        });
    }

    onMouseLeave() {
        gsap.to(this.gradient, {
            attr: { cx: 0, cy: 0 },
            duration: 1,
            ease: "power2.out",
        });
        this.stops.forEach((stop, i) => {
            gsap.to(stop, {
                attr: { offset: this.baseOffsets[i] },
                duration: 1,
                ease: "power2.out",
            });
        });
    }
}
