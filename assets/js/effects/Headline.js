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
        element.style.visibility = "visible";

        const css = getComputedStyle(document.documentElement);
        this.theme = THEME_VARS.map((v) =>
            css.getPropertyValue(v).trim(),
        ).filter(Boolean);

        this.split = new SplitText(element, {
            type: "lines,chars",
            mask: "lines",
            linesClass: "headline__line",
        });

        this.split.lines.forEach((line) => {
            const mask = line.parentNode;
            mask.style.paddingBottom = "0.2em";
            mask.style.marginBottom = "-0.2em";
        });

        this.strongChars = this.split.chars.filter((c) => c.closest("strong"));
        this.soft = this.strongChars.length
            ? getComputedStyle(this.strongChars[0]).color
            : css.getPropertyValue("--color-soft").trim();

        this.build();
    }

    build() {
        this.tl = gsap.timeline({
            scrollTrigger: { trigger: this.el, start: "top 85%", once: true },
        });

        this.tl.from(this.split.lines, {
            yPercent: 110,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.14,
        });

        const revealEnd = 0.9 + (this.split.lines.length - 1) * 0.14;
        let at = Math.max(revealEnd - 0.5, 0);
        this.strongChars.forEach((char) => {
            const color = this.theme[(Math.random() * this.theme.length) | 0];
            this.tl
                .to(char, { color, duration: 0.1, ease: "power1.inOut" }, at)
                .to(
                    char,
                    { color: this.soft, duration: 0.2, ease: "power1.out" },
                    at + 0.05,
                );
            at += 0.035;
        });
    }

    destroy() {
        this.tl?.scrollTrigger?.kill();
        this.tl?.kill();
        this.split?.revert();
    }
}
