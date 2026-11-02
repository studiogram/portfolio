import { gsap } from "gsap/all";
import { reducedMotion } from "../utils/motion";
import { cartoucheEnter } from "./cartoucheEnter";

export default class NotesArchive {
    constructor(element) {
        this.el = element;
        this.list = element.querySelector("[data-notes-list]");
        this.pages = [...element.querySelectorAll(".notes__page")];
        this.current = 1;
        this.loading = false;

        this.onClick = this.onClick.bind(this);
        this.pages.forEach((b) => b.addEventListener("click", this.onClick));

        cartoucheEnter(element.querySelector(".cartouche"));
        this.revealRows();
    }

    onClick(e) {
        const page = parseInt(e.currentTarget.dataset.page, 10);
        if (this.loading || page === this.current) return;
        this.setActive(page);
        this.load(page);
    }

    setActive(page) {
        this.current = page;
        this.pages.forEach((b) =>
            b.classList.toggle("is-active", parseInt(b.dataset.page, 10) === page),
        );
    }

    rows() {
        return [...this.list.querySelectorAll(".notes__row")];
    }

    revealRows() {
        const rows = this.rows();
        if (!rows.length) return;
        if (reducedMotion()) {
            gsap.set(rows, { autoAlpha: 1, y: 0 });
            return;
        }
        gsap.fromTo(
            rows,
            { autoAlpha: 0, y: 28 },
            { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.06 },
        );
    }

    hideRows() {
        const rows = this.rows();
        if (!rows.length || reducedMotion()) return Promise.resolve();
        return new Promise((resolve) => {
            gsap.to(rows, {
                autoAlpha: 0,
                y: -18,
                duration: 0.3,
                ease: "power2.in",
                stagger: 0.04,
                onComplete: resolve,
            });
        });
    }

    async load(page) {
        this.loading = true;
        await this.hideRows();

        const data = new FormData();
        data.append("action", "load_notes");
        data.append("paged", page);
        data.append("nonce", window.localize?.nonce ?? "");

        try {
            const res = await fetch(window.localize?.ajaxurl, {
                method: "POST",
                body: data,
                credentials: "same-origin",
            });
            const json = await res.json();
            if (json.success) {
                this.list.innerHTML = json.data.html;
                this.revealRows();
                this.el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } catch (e) {}

        this.loading = false;
    }

    destroy() {
        this.pages.forEach((b) => b.removeEventListener("click", this.onClick));
    }
}
