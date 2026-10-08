import { gsap } from "gsap";

const DESKTOP = 1024;

/* Mobile burger: toggles the submenu panel height. Desktop nav is pure CSS. */
export default class Header {
    constructor(element) {
        this.el = element;
        this.burger = this.el.querySelector(".burger");
        this.submenu = this.el.querySelector(".header__submenu");
        this.links = this.submenu
            ? [...this.submenu.querySelectorAll("a")]
            : [];
        this.init();
        this.bind();
    }

    isMobile() {
        return window.innerWidth < DESKTOP;
    }

    init() {
        if (this.submenu && this.isMobile()) gsap.set(this.submenu, { height: 0 });
    }

    bind() {
        this.burger?.addEventListener("click", () => this.toggle());
        this.links.forEach((a) => a.addEventListener("click", () => this.close()));
        window.addEventListener("resize", () => {
            if (!this.submenu) return;
            if (this.isMobile()) {
                if (!this.el.classList.contains("is-menu-open"))
                    gsap.set(this.submenu, { height: 0 });
            } else {
                gsap.set(this.submenu, { clearProps: "height" });
                this.el.classList.remove("is-menu-open");
                this.burger?.setAttribute("data-isopen", "false");
            }
        });
    }

    toggle() {
        this.el.classList.contains("is-menu-open") ? this.close() : this.open();
    }

    open() {
        if (!this.submenu) return;
        this.el.classList.add("is-menu-open");
        this.burger?.setAttribute("data-isopen", "true");
        gsap.to(this.submenu, { height: "auto", duration: 0.4, ease: "power2.inOut" });
    }

    close() {
        if (!this.submenu) return;
        this.el.classList.remove("is-menu-open");
        this.burger?.setAttribute("data-isopen", "false");
        gsap.to(this.submenu, { height: 0, duration: 0.4, ease: "power2.inOut" });
    }
}
