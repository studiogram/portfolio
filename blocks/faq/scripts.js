import "./styles.scss";
import BlockParent from "../../assets/js/blocks/BlockParent";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import gsap from "gsap";

const blockName = "faq";

class FAQ extends BlockParent {
    constructor(element) {
        super(element);
        this.element = element;
        this.onClickfaqBound = this.onClickfaq.bind(this);
        this.onResizeBound = this.onResize.bind(this);
        this.init();
    }

    init() {
        this.getElements();
        this.events();
    }

    getElements() {
        this.faqs = this.element.querySelectorAll(".faq__question");
        this.dynamic = !!this.element.querySelector('[data-dynamic="true"]');
    }

    events() {
        if (this.faqs) {
            this.faqs.forEach((faq) => {
                faq.addEventListener("click", this.onClickfaqBound);
            });
        }
        window.addEventListener("resize", this.onResizeBound);
    }

    onResize() {
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => this.closeAll(), 150);
    }

    closeAll() {
        this.faqs.forEach((question) => {
            let li = question.parentElement;
            if (li.dataset.open !== "true") return;

            let content = question.nextElementSibling;
            let bg = this.dynamic ? li.querySelector(".faq__bg") : null;
            // Only the width tween is ours here; killing all li tweens would also
        // destroy the from-left scroll animation (xPercent/autoAlpha) on the li.
        gsap.killTweensOf(li, "width");
        gsap.killTweensOf([content, bg]);
            gsap.set(content, { height: 0, opacity: 0 });
            if (this.dynamic) {
                gsap.set(content, { position: "absolute" });
                li.style.width = "";
                if (bg) bg.style.width = "";
                li._closedWidth = 0;
            }
            li.dataset.open = "false";
        });
    }

    onClickfaq(el) {
        let question = el.currentTarget;
        let content = question.nextElementSibling;
        if (!content) return;

        let li = question.parentElement;
        let isOpen = li.dataset.open === "true";

        // Height changes here → recompute ScrollTrigger positions so scroll
        // animations (from-left, …) on items below stay in sync.
        gsap.delayedCall(0.95, () =>
            document.dispatchEvent(new Event("scroll-refresh")),
        );

        if (!this.dynamic) {
            gsap.killTweensOf(content);
            gsap.to(content, {
                height: isOpen ? 0 : "auto",
                opacity: isOpen ? 0 : 1,
                duration: 0.9,
                ease: "power2.inOut",
            });
            li.dataset.open = !isOpen;
            return;
        }

        let bg = li.querySelector(".faq__bg");
        let ease = "power2.inOut";

        // Only the width tween is ours here; killing all li tweens would also
        // destroy the from-left scroll animation (xPercent/autoAlpha) on the li.
        gsap.killTweensOf(li, "width");
        gsap.killTweensOf([content, bg]);

        if (!isOpen) {
            let closedWidth = li.offsetWidth;
            let fullWidth = li.parentElement.clientWidth;
            li._closedWidth = closedWidth;
            li.dataset.open = "true";

            gsap.set(bg, { width: closedWidth });
            gsap.to(li, {
                width: fullWidth,
                duration: 0.2,
                ease: "power2.out",
            });
            gsap.fromTo(
                bg,
                { width: closedWidth },
                { width: fullWidth, duration: 0.6, ease: ease },
            );
            gsap.set(content, { position: "static" });
            gsap.to(content, {
                height: "auto",
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
            });
        } else {
            li.dataset.open = "false";

            let full = li.offsetWidth;
            let closed =
                li._closedWidth || li.querySelector(".faq__bg").offsetWidth;

            let tl = gsap.timeline({
                onComplete: () => {
                    gsap.set(content, { position: "absolute" });
                    li.style.width = "";
                    bg.style.width = "";
                },
            });
            tl.to(
                content,
                { height: 0, opacity: 0, duration: 0.5, ease: "power2.in" },
                0,
            );
            tl.fromTo(
                li,
                { width: full },
                { width: closed, duration: 0.5, ease: "power2.inOut" },
                0,
            );
            tl.fromTo(
                bg,
                { width: full },
                { width: closed, duration: 0.75, ease: ease },
                0,
            );
        }
    }

    update() {
        this.destroy();
        this.init();
    }

    destroy() {
        if (this.faqs) {
            this.faqs.forEach((faq) => {
                faq.removeEventListener("click", this.onClickfaqBound);
            });
        }
        window.removeEventListener("resize", this.onResizeBound);
        clearTimeout(this.resizeTimer);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        new BlockEvents(blockName, FAQ);
    });
} else {
    new BlockEvents(blockName, FAQ);
}
