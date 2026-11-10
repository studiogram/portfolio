import { gsap, SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default class Rise {
    constructor(element) {
        this.el = element;
        this.html = element.innerHTML;

        const start = () => {
            if (!document.contains(element)) return;
            this.split();
            this.play();
        };
        if (document.fonts?.ready) document.fonts.ready.then(start);
        else start();
    }

    split() {
        this.el.style.visibility = "visible";
        this.el.innerHTML = this.html;
        this.st = new SplitText(this.el, { type: "chars", mask: "chars" });
    }

    play() {
        this.tl = gsap.from(this.st.chars, {
            yPercent: 120,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.04,
            scrollTrigger: { trigger: this.el, start: "top 85%", once: true },
        });
    }

    destroy() {
        this.tl?.scrollTrigger?.kill();
        this.tl?.kill();
        this.st?.revert();
    }
}
