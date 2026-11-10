import { Transition } from "@unseenco/taxi";
import { gsap, ScrollTrigger } from "gsap/all";

export default class ProjectTransition extends Transition {
    onLeave({ trigger, done }) {
        document.documentElement.classList.add("is-loading");
        document.querySelector(".header")?.classList.remove("is-on-dark");
        this.wrapper = document.querySelector("[data-taxi]");
        const cover = document.querySelector("[data-cover]");
        const fold = trigger
            ?.closest?.(".archive__item, .related__item")
            ?.querySelector(".project-fold");

        if (this.wrapper) {
            this.wrapper.style.minHeight = `${this.wrapper.offsetHeight}px`;
        }
        // Freeze scroll-driven layers so the nav scroll-reset doesn't jump them.
        ScrollTrigger.getAll().forEach((t) => t.disable(false));
        if (fold) fold.classList.add("is-folding");

        if (cover) {
            gsap.to(cover, {
                opacity: 1,
                duration: 0.6,
                ease: "power1.out",
                onComplete: done,
            });
        } else {
            gsap.delayedCall(0.6, done);
        }
    }

    onEnter({ done }) {
        const cover = document.querySelector("[data-cover]");
        const finish = () => {
            document.documentElement.classList.remove("is-loading");
            if (this.wrapper) this.wrapper.style.minHeight = "";
            done();
        };
        if (cover) {
            gsap.to(cover, {
                opacity: 0,
                duration: 0.5,
                ease: "power1.out",
                onComplete: finish,
            });
        } else {
            finish();
        }
    }
}
