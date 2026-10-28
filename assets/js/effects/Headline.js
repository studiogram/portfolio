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

        this.split = SplitText.create(element, {
            type: "lines,chars",
            mask: "lines",
            linesClass: "headline__line",
            autoSplit: true,
            onSplit: (self) => this.build(self),
        });
    }

    build(split) {
        split.lines.forEach((line) => {
            const mask = line.parentNode;
            mask.style.paddingBottom = "0.2em";
            mask.style.marginBottom = "-0.2em";
        });

        if (this.played) return;
        this.played = true;

        const strongChars = split.chars.filter((c) => c.closest("strong"));
        const soft = strongChars.length
            ? getComputedStyle(strongChars[0]).color
            : getComputedStyle(document.documentElement)
                  .getPropertyValue("--color-soft")
                  .trim();

        const tl = gsap.timeline({
            scrollTrigger: { trigger: this.el, start: "top 85%", once: true },
        });

        tl.from(split.lines, {
            yPercent: 110,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.14,
        });

        const revealEnd = 0.9 + (split.lines.length - 1) * 0.14;
        let at = Math.max(revealEnd - 0.5, 0);
        strongChars.forEach((char) => {
            const color = this.theme[(Math.random() * this.theme.length) | 0];
            tl.to(char, { color, duration: 0.15, ease: "power1.inOut" }, at).to(
                char,
                { color: soft, duration: 0.2, ease: "power1.out" },
                at + 0.2,
            );
            at += 0.035;
        });

        return tl;
    }

    destroy() {
        this.split?.revert();
    }
}
