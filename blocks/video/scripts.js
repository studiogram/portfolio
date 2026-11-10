import "./styles.scss";
import Plyr from "plyr";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import BlockParent from "../../assets/js/blocks/BlockParent";

const blockName = "video";
const controls = ["play-large"];
const FADE = 0.6;

class Video extends BlockParent {
    constructor(element) {
        super(element);
        this.element = element;
        this.getElements();
        this.init();
    }

    getElements() {
        this.videoPlayer = this.element.querySelector(".video__player");
    }

    init() {
        if (!this.videoPlayer) return;

        this.player = new Plyr(this.videoPlayer, {
            controls,
            clickToPlay: true,
            muted: true,
            loop: { active: true },
        });

        this.player.on("ready", () => {
            this.player.muted = true;
            if (this.reduced) {
                this.player.pause();
            }
            const overlaid = this.element.querySelector(
                ".plyr__control--overlaid",
            );
            if (overlaid && !overlaid.querySelector(".plyr-pause-icon")) {
                overlaid
                    .querySelector("svg")
                    ?.classList.add("plyr-play-icon");
                overlaid.insertAdjacentHTML(
                    "beforeend",
                    '<svg class="plyr-pause-icon" aria-hidden="true" focusable="false"><use xlink:href="#plyr-pause"></use></svg>',
                );
            }
        });

        if (!this.reduced) {
            this.player.on("timeupdate", () => {
                const d = this.player.duration;
                if (!d) return;
                const t = this.player.currentTime;
                this.videoPlayer.classList.toggle("is-faded", d - t <= FADE);
            });
        }
    }

    update() {
        this.destroy();
        this.init();
    }

    destroy() {
        if (this.player) {
            this.player.destroy();
            this.player = null;
        }
    }
}

// Initialisation
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        new BlockEvents(blockName, Video);
    });
} else {
    new BlockEvents(blockName, Video);
}
