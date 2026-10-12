import { gsap } from "gsap";

const RADIUS = 160; // px of influence around the cursor
const MAX_SHIFT = 8; // px a shape travels at closest range

/* Shapes flee the cursor, inversely to distance, easing back when it leaves. */
export default class Repeal {
    constructor(element) {
        this.el = element;
        const shapes = [
            ...element.querySelectorAll("path, circle, rect, ellipse"),
        ];
        if (!shapes.length) return;

        this.shapes = shapes.map((shape) => ({
            shape,
            setX: gsap.quickTo(shape, "x", {
                duration: 0.6,
                ease: "power3.out",
            }),
            setY: gsap.quickTo(shape, "y", {
                duration: 0.6,
                ease: "power3.out",
            }),
        }));

        this.onMove = this.onMove.bind(this);
        window.addEventListener("mousemove", this.onMove, { passive: true });
    }

    onMove(e) {
        this.shapes.forEach(({ shape, setX, setY }) => {
            const r = shape.getBoundingClientRect();
            const dx = r.left + r.width / 2 - e.clientX;
            const dy = r.top + r.height / 2 - e.clientY;
            const dist = Math.hypot(dx, dy) || 1;
            if (dist < RADIUS) {
                const force = (1 - dist / RADIUS) * MAX_SHIFT;
                setX((dx / dist) * force);
                setY((dy / dist) * force);
            } else {
                setX(0);
                setY(0);
            }
        });
    }

    destroy() {
        if (this.onMove) window.removeEventListener("mousemove", this.onMove);
        this.shapes?.forEach(({ shape }) => gsap.set(shape, { x: 0, y: 0 }));
    }
}
