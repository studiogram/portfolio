import { Transition } from "@unseenco/taxi";
import { gsap } from "gsap/all";

export default class DefaultTransition extends Transition {
    onLeave({ from, done }) {
        document.documentElement.classList.add("is-loading");
        this.wrapper = document.querySelector("[data-taxi]");
        this.cover = document.querySelector("[data-cover]");
        if (this.wrapper) {
            this.wrapper.style.minHeight = `${this.wrapper.offsetHeight}px`;
        }
        if (this.cover) {
            gsap.to(this.cover, {
                opacity: 1,
                duration: 0.45,
                ease: "power1.out",
                onComplete: done,
            });
        } else {
            done();
        }
    }

    onEnter({ to, done }) {
        const finish = () => {
            document.documentElement.classList.remove("is-loading");
            if (this.wrapper) this.wrapper.style.minHeight = "";
            done();
        };
        if (this.cover) {
            gsap.to(this.cover, {
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
