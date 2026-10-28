const DESKTOP = 992;

export default class Header {
    constructor(element) {
        this.el = element;
        this.burger = element.querySelector(".burger");
        this.label = element.querySelector(".burger__label");
        this.nav = element.querySelector(".header__nav");
        this.links = this.nav ? [...this.nav.querySelectorAll("a")] : [];

        element
            .querySelectorAll(".header__link")
            .forEach((a) => this.splitLink(a));

        this.onBurger = () => this.toggle();
        this.onLink = () => this.close();
        this.onKey = (e) => { if (e.key === "Escape") this.close(); };
        this.onResize = () => {
            if (window.innerWidth >= DESKTOP) this.close();
            this.updateContrast();
            if (!this.nav) return;
            this.nav.style.transition = "none";
            clearTimeout(this.resizeT);
            this.resizeT = setTimeout(() => { this.nav.style.transition = ""; }, 100);
        };

        this.burger?.addEventListener("click", this.onBurger);
        this.links.forEach((a) => a.addEventListener("click", this.onLink));
        addEventListener("keydown", this.onKey);
        addEventListener("resize", this.onResize);

        this.onContrast = () => {
            if (this.raf) return;
            this.raf = requestAnimationFrame(() => {
                this.raf = null;
                this.updateContrast();
            });
        };
        addEventListener("scroll", this.onContrast, { passive: true });
        this.updateContrast();
    }

    crosses(selector, band) {
        for (const el of document.querySelectorAll(selector)) {
            const r = el.getBoundingClientRect();
            if (r.top <= band && r.bottom > band) return true;
        }
        return false;
    }

    updateContrast() {
        const band = 48;
        const darkSel =
            window.innerWidth < DESKTOP
                ? ".cartouche, .bg-dark, .panel__list"
                : ".cartouche, .bg-dark";
        const dark = this.crosses(darkSel, band);
        this.el.classList.toggle("is-on-dark", dark);
    }

    splitLink(a) {
        const text = a.textContent.trim();
        a.setAttribute("aria-label", text);
        const frag = document.createDocumentFragment();
        [...text].forEach((ch, i) => {
            const c = document.createElement("span");
            c.className = "char";
            c.setAttribute("aria-hidden", "true");
            c.style.setProperty("--i", i);
            const top = document.createElement("span");
            top.textContent = ch === " " ? " " : ch;
            c.append(top, top.cloneNode(true));
            frag.appendChild(c);
        });
        a.textContent = "";
        a.appendChild(frag);
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
        removeEventListener("scroll", this.onContrast);
        if (this.raf) cancelAnimationFrame(this.raf);
    }
}
