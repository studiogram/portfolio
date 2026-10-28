import { gsap, SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const THEME_VARS = [
    "--color-red",
    "--color-green",
    "--color-pink",
    "--color-blue",
];

export default class Headline {
    constructor(element) {
        this.el = element;

        const css = getComputedStyle(document.documentElement);
        this.theme = THEME_VARS.map((v) =>
            css.getPropertyValue(v).trim(),
        ).filter(Boolean);
        this.soft = css.getPropertyValue("--color-soft").trim();
        this.onResize = this.onResize.bind(this);

        const start = () => {
            if (!document.contains(element)) return;
            this.split();
            this.play();
            window.addEventListener("resize", this.onResize);
        };
        if (document.fonts?.ready) document.fonts.ready.then(start);
        else start();
    }

    split() {
        this.el.style.visibility = "visible";
        this.st = new SplitText(this.el, {
            type: "lines,chars",
            mask: "lines",
            linesClass: "headline__line",
        });
        this.st.lines.forEach((line) => {
            const mask = line.parentNode;
            mask.style.paddingBottom = "0.2em";
            mask.style.marginBottom = "-0.2em";
        });
    }

    play() {
        const strongChars = this.st.chars.filter((c) => c.closest("strong"));
        const soft = strongChars.length
            ? getComputedStyle(strongChars[0]).color
            : this.soft;

        this.tl = gsap.timeline({
            scrollTrigger: { trigger: this.el, start: "top 90%", once: true },
        });

        this.tl.from(this.st.lines, {
            yPercent: 110,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.14,
        });

        const revealEnd = 0.9 + (this.st.lines.length - 1) * 0.14;
        let at = Math.max(revealEnd - 0.5, 0);
        strongChars.forEach((char) => {
            const color = this.theme[(Math.random() * this.theme.length) | 0];
            this.tl
                .to(char, { color, duration: 0.15, ease: "power1.inOut" }, at)
                .to(char, { color: soft, duration: 0.2, ease: "power1.out" }, at + 0.2);
            at += 0.035;
        });
    }

    onResize() {
        clearTimeout(this.rt);
        this.rt = setTimeout(() => {
            this.st?.revert();
            this.split();
        }, 200);
    }

    destroy() {
        clearTimeout(this.rt);
        window.removeEventListener("resize", this.onResize);
        this.tl?.scrollTrigger?.kill();
        this.tl?.kill();
        this.st?.revert();
    }
}
