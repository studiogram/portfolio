import "./styles.scss";
import BlockParent from "../../assets/js/blocks/BlockParent";
import BlockEvents from "../../assets/js/blocks/BlockEvents";
import { cartoucheEnter } from "../../assets/js/actions/cartoucheEnter";

const blockName = "header-about";

class HeaderAbout extends BlockParent {
	constructor(element) {
		super(element);
		this.element = element;
		this.init();
	}

	init() {
		cartoucheEnter(this.element.querySelector(".cartouche"));
	}

	destroy() {}
}

if (document.readyState === "loading") {
	document.addEventListener(
		"DOMContentLoaded",
		() => new BlockEvents(blockName, HeaderAbout),
	);
} else {
	new BlockEvents(blockName, HeaderAbout);
}
