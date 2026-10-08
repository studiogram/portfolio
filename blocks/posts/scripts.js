import "./styles.scss";

import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import BlockEvents from "../../assets/js/blocks/BlockEvents.js";
import BlockParent from "../../assets/js/blocks/BlockParent.js";

const BLOCK_NAME = "posts";

class Posts extends BlockParent {
    constructor(element) {
        super(element);
        this.element = element;
        this.init();
    }

    init() {
        this.slider = this.element.querySelector(".swiper");
        this.initSlider();
    }

    initSlider() {
        if (!this.slider) return;

        this.swiper = new Swiper(this.slider, {
            modules: [Navigation],
            speed: 600,
            slidesPerView: 1,
            spaceBetween: 32,
            touchStartPreventDefault: false,
            adaptiveHeight: true,
            navigation: {
                prevEl: this.element.querySelector(".prev"),
                nextEl: this.element.querySelector(".next"),
            },
            breakpoints: {
                768: {
                    slidesPerView: 2.85,
                    adaptiveHeight: false,
                },
            },
            on: {
                afterInit: (sw) =>
                    requestAnimationFrame(() => sw.updateAutoHeight()),
                slideChange: (sw) => sw.updateAutoHeight(sw.params.speed),
            },
        });

        this.slider.addEventListener("lazyloaded", this.onLazyLoaded, true);
    }

    onLazyLoaded = () => {
        if (this.swiper) this.swiper.updateAutoHeight();
    };

    update() {
        this.destroy();
        this.init();
    }

    destroy() {
        if (this.slider) {
            this.slider.removeEventListener("lazyloaded", this.onLazyLoaded, true);
        }
        if (this.swiper) {
            this.swiper.destroy();
            this.swiper = null;
        }
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        new BlockEvents(BLOCK_NAME, Posts);
    });
} else {
    new BlockEvents(BLOCK_NAME, Posts);
}
