const DESKTOP = 992;

export default class Header {
    constructor(element) {
        this.el = element;
        this.burger = element.querySelector(".burger");
        this.label = element.querySelector(".burger__label");
        this.nav = element.querySelector(".header__nav");
        this.links = this.nav ? [...this.nav.querySelectorAll("a")] : [];

        this.onBurger = () => this.toggle();
        this.onLink = () => this.close();
        this.onKey = (e) => { if (e.key === "Escape") this.close(); };
        this.onResize = () => {
            if (window.innerWidth >= DESKTOP) this.close();
            if (!this.nav) return;
            this.nav.style.transition = "none";
            clearTimeout(this.resizeT);
            this.resizeT = setTimeout(() => { this.nav.style.transition = ""; }, 100);
        };

        this.burger?.addEventListener("click", this.onBurger);
        this.links.forEach((a) => a.addEventListener("click", this.onLink));
        addEventListener("keydown", this.onKey);
        addEventListener("resize", this.onResize);
    }

    toggle() {
        this.el.classList.contains("is-menu-open") ? this.close() : this.open();
    }

    open() {
        this.el.classList.add("is-menu-open");
        this.burger?.setAttribute("data-isopen", "true");
        this.burger?.setAttribute("aria-expanded", "true");
        this.burger?.setAttribute("aria-label", "Fermer");
        if (this.label) this.label.textContent = "Fermer";
    }

    close() {
        this.el.classList.remove("is-menu-open");
        this.burger?.setAttribute("data-isopen", "false");
        this.burger?.setAttribute("aria-expanded", "false");
        this.burger?.setAttribute("aria-label", "Menu");
        if (this.label) this.label.textContent = "Menu";
    }

    destroy() {
        this.burger?.removeEventListener("click", this.onBurger);
        this.links.forEach((a) => a.removeEventListener("click", this.onLink));
        removeEventListener("keydown", this.onKey);
        removeEventListener("resize", this.onResize);
    }
}
