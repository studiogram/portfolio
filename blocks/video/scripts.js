import "./styles.scss";
import Plyr from "plyr";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import BlockParent from "../../assets/js/blocks/BlockParent";

const blockName = "video";
const controls = [
    "play-large",
    "play",
    "progress",
    "current-time",
    "mute",
    "volume",
];

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
            loop: { active: false },
        });
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
