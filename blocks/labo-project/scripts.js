import "./styles.scss";
import BlockParent from "../../assets/js/blocks/BlockParent";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const blockName = "labo-project";

class LaboProject extends BlockParent {
    constructor(element) {
        super(element);
        this.element = element;
        this.init();
    }

    init() {
        this.lazyVideos();
        this.hold();
    }

    lazyVideos() {
        this.videos = [
            ...this.element.querySelectorAll(".labo-project__video"),
        ];
        if (!this.videos.length) return;

        this.io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;
                    if (entry.isIntersecting) {
                        const source = video.querySelector("source");
                        if (source && !source.src && source.dataset.src) {
                            source.src = source.dataset.src;
                            video.addEventListener(
                                "loadedmetadata",
                                () => {
                                    if (video.videoWidth) {
                                        video.style.aspectRatio = `${video.videoWidth} / ${video.videoHeight}`;
                                    }
                                },
                                { once: true },
                            );
                            video.load();
                        }
                        if (!this.reduced) video.play?.().catch(() => {});
                    } else {
                        video.pause?.();
                    }
                });
            },
            { rootMargin: "200px 0px" },
        );

        this.videos.forEach((video) => this.io.observe(video));
    }

    hold() {
        if (this.reduced || document.body.classList.contains("wp-admin"))
            return;

        this.wrap = this.element.querySelector(".labo-project__wrap");
        this.intro = this.element.querySelector(".labo-project__intro");
        this.media = this.element.querySelector(".labo-project__media");
        if (!this.wrap || !this.intro || !this.media) return;

        const header = document.querySelector(".header");
        const offset = (header?.offsetHeight || 0) + 32;
        const travel = () =>
            Math.max(0, this.media.offsetHeight - this.intro.offsetHeight);

        this.mm = gsap.matchMedia();
        this.mm.add("(min-width: 1024px)", () => {
            if (travel() <= 0) return;
            const tween = gsap.to(this.intro, {
                y: travel,
                ease: "none",
                scrollTrigger: {
                    trigger: this.wrap,
                    start: () => `top top+=${offset}`,
                    end: () => `+=${travel()}`,
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            });

            // Media loads lazily (videos, images) and grows the column after
            // the trigger was measured — refresh so the release point tracks it.
            let t;
            const ro = new ResizeObserver(() => {
                clearTimeout(t);
                t = setTimeout(() => ScrollTrigger.refresh(), 150);
            });
            ro.observe(this.media);

            return () => {
                ro.disconnect();
                clearTimeout(t);
                tween.scrollTrigger?.kill();
                tween.kill();
                gsap.set(this.intro, { clearProps: "transform" });
            };
        });
    }

    update() {
        this.destroy();
        this.init();
    }

    destroy() {
        this.io?.disconnect();
        this.videos?.forEach((video) => video.pause?.());
        this.mm?.revert();
    }
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        () => new BlockEvents(blockName, LaboProject),
    );
} else {
    new BlockEvents(blockName, LaboProject);
}
