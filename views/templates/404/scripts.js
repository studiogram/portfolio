import { gsap } from "gsap/all";
import { reducedMotion } from "../../../assets/js/utils/motion";

const GROUPS = ["fill-vert", "fill-rouge", "fill-rose", "fill-bleu", "fill-bleuciel"];

export default class NotFound {
    constructor(element) {
        this.element = element;
        this.circles = element.querySelectorAll(".width-limit circle");
        if (!this.circles.length) return;

        if (reducedMotion()) {
            gsap.set(this.circles, { autoAlpha: 1 });
            return;
        }

        gsap.set(this.circles, { scale: 0, autoAlpha: 1, transformOrigin: "center" });
        GROUPS.forEach((group, i) => {
            gsap.to(element.querySelectorAll("." + group), {
                scale: 1,
                duration: 0.5,
                transformOrigin: "center",
                delay: i * 0.25,
            });
        });
    }

    destroy() {}
}
