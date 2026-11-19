import "./styles.scss";
import BlockParent from "../../assets/js/blocks/BlockParent";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import { gsap } from "gsap/all";

const blockName = "header-labo";

class HeaderLabo extends BlockParent {
    constructor(element) {
        super(element);
        this.element = element;
        this.blobs = element.querySelector(".header-labo__blobs");
        this.init();
    }

    init() {
        const admin = document.body.classList.contains("wp-admin");
        if (this.reduced || admin) return;

        if (!this.blobs) return;
        gsap.set(this.blobs, { autoAlpha: 0 });

        this.play = () => {
            gsap.to(this.blobs, {
                autoAlpha: 1,
                duration: 1.1,
                ease: "power2.out",
            });
        };

        if (window.__introDone) this.play();
        else document.addEventListener("app:intro", this.play, { once: true });
    }

    destroy() {
        if (this.play) {
            document.removeEventListener("app:intro", this.play);
        }
    }
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        () => new BlockEvents(blockName, HeaderLabo),
    );
} else {
    new BlockEvents(blockName, HeaderLabo);
}
