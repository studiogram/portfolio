import "./styles.scss";
import BlockParent from "../../assets/js/blocks/BlockParent";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const blockName = "labo";

class Labo extends BlockParent {
    constructor(element) {
        super(element);
        this.element = element;
        this.init();
    }

    init() {
        const admin = document.body.classList.contains("wp-admin");
        this.imgs = [...this.element.querySelectorAll("[data-labo-img]")];
        // this.blobs = [...this.element.querySelectorAll(".labo__blobs")];
        if (this.reduced || admin) return;

        this.build();
    }

    build() {
        this.teardown();
        this.tweens = [];

        this.imgs.forEach((img) => {
            const x = parseFloat(img.dataset.x) || 0;
            const rot = parseFloat(img.dataset.rot) || 0;
            const t = gsap.fromTo(
                img,
                { rotation: 0, xPercent: 0 },
                {
                    rotation: rot,
                    xPercent: x,
                    ease: "none",
                    scrollTrigger: {
                        trigger: this.element,
                        start: "top bottom",
                        end: "center center",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                },
            );
            this.tweens.push(t);
        });
    }

    teardown() {
        this.tweens?.forEach((t) => {
            t.scrollTrigger?.kill();
            t.kill();
        });
        this.tweens = null;
    }

    update() {
        this.destroy();
        this.init();
    }

    destroy() {
        this.teardown();
    }
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        () => new BlockEvents(blockName, Labo),
    );
} else {
    new BlockEvents(blockName, Labo);
}
