import { gsap } from "gsap";

export default class Gradient {
    constructor(element) {
        this.el = element;
        const cs = getComputedStyle(this.el);
        this.x0 = this.toNumber(cs.getPropertyValue("--gx"), 50);
        this.y0 = this.toNumber(cs.getPropertyValue("--gy"), 50);
        this.pos = { x: this.x0, y: this.y0 };
        this.apply();
        this.onMove = this.onMove.bind(this);
        this.onLeave = this.onLeave.bind(this);
        this.el.addEventListener("mousemove", this.onMove);
        this.el.addEventListener("mouseleave", this.onLeave);
    }

    toNumber(value, fallback) {
        const v = String(value).trim().toLowerCase();
        const keywords = { left: 0, top: 0, center: 50, right: 100, bottom: 100 };
        if (v in keywords) return keywords[v];
        const n = parseFloat(v);
        return Number.isFinite(n) ? n : fallback;
    }

    apply() {
        this.el.style.setProperty("--gx", `${this.pos.x}%`);
        this.el.style.setProperty("--gy", `${this.pos.y}%`);
    }

    onMove(event) {
        const rect = this.el.getBoundingClientRect();
        gsap.to(this.pos, {
            x: ((event.clientX - rect.left) / rect.width) * 100,
            y: ((event.clientY - rect.top) / rect.height) * 100,
            duration: 0.8,
            ease: "power2.out",
            onUpdate: () => this.apply(),
        });
    }

    onLeave() {
        gsap.to(this.pos, {
            x: this.x0,
            y: this.y0,
            duration: 1,
            ease: "power2.out",
            onUpdate: () => this.apply(),
        });
    }

    destroy() {
        this.el.removeEventListener("mousemove", this.onMove);
        this.el.removeEventListener("mouseleave", this.onLeave);
    }
}
