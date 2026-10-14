import { gsap } from "gsap";

const SHAPE = { radius: 160, shift: 8, rot: 0 };
const GROUP = { radius: 240, shift: 24, rot: 12 };

export default class Repeal {
    constructor(element) {
        this.el = element;
        const groups = [...element.querySelectorAll("[data-sector]")];
        this.cfg = groups.length ? GROUP : SHAPE;

        const targets = groups.length
            ? groups
            : [...element.querySelectorAll("path, circle, rect, ellipse")];
        if (!targets.length) return;

        this.items = targets.map((t) => {
            if (this.cfg.rot) gsap.set(t, { transformOrigin: "center" });
            return {
                el: t,
                setX: gsap.quickTo(t, "x", { duration: 0.6, ease: "power3.out" }),
                setY: gsap.quickTo(t, "y", { duration: 0.6, ease: "power3.out" }),
                setR: this.cfg.rot ? gsap.quickTo(t, "rotation", { duration: 0.6, ease: "power3.out" }) : null,
            };
        });

        this.onMove = this.onMove.bind(this);
        window.addEventListener("mousemove", this.onMove, { passive: true });
    }

    onMove(e) {
        const { radius, shift, rot } = this.cfg;
        this.items.forEach(({ el, setX, setY, setR }) => {
            const r = el.getBoundingClientRect();
            const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
            const dx = cx - e.clientX, dy = cy - e.clientY;
            const dist = Math.hypot(dx, dy) || 1;
            if (dist < radius) {
                const force = 1 - dist / radius;
                setX((dx / dist) * force * shift);
                setY((dy / dist) * force * shift);
                if (setR) {
                    const side = (e.clientX - cx) / (r.width / 2 || 1);
                    setR(-side * force * rot);
                }
            } else {
                setX(0);
                setY(0);
                if (setR) setR(0);
            }
        });
    }

    destroy() {
        if (this.onMove) window.removeEventListener("mousemove", this.onMove);
        this.items?.forEach(({ el }) => gsap.set(el, { x: 0, y: 0, rotation: 0 }));
    }
}
