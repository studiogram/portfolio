import { gsap } from "gsap/all";

export default class ArchiveFilter {
    constructor(element) {
        this.el = element;
        this.cats = [...element.querySelectorAll(".archive__cat")];
        this.grid = element.querySelector("[data-grid]");
        this.loader = element.querySelector("[data-loader]");
        this.title = element.querySelector("[data-title]");
        this.loadMore = element.querySelector('[data-component="load-more"]');
        this.button = element.querySelector("[data-load-more-btn]");
        this.loading = false;

        this.onClick = this.onClick.bind(this);
        this.cats.forEach((a) => a.addEventListener("click", this.onClick));
    }

    onClick(e) {
        e.preventDefault();
        if (this.loading) return;
        const link = e.currentTarget;
        const cat = link.dataset.cat || "0";
        this.setActive(link);
        history.replaceState(history.state, "", link.href);
        this.filter(cat);
    }

    setActive(link) {
        this.cats.forEach((a) => a.classList.toggle("is-active", a === link));
    }

    async filter(cat) {
        this.loading = true;
        if (this.loader) this.loader.hidden = false;

        await this.fadeOut();

        const data = new FormData();
        data.append("action", "load_posts");
        data.append("cat", cat);
        data.append("paged", "1");
        data.append("nonce", window.localize?.nonce ?? "");

        try {
            const res = await fetch(window.localize?.ajaxurl, {
                method: "POST",
                body: data,
                credentials: "same-origin",
            });
            const json = await res.json();
            if (json.success) {
                this.grid.innerHTML = json.data.html;
                this.resetLoadMore(cat, json.data.has_more);
                this.fadeIn();
                this.updateTitle(json.data.title || "");
            }
        } catch (e) {}

        if (this.loader) this.loader.hidden = true;
        this.loading = false;
    }

    fadeOut() {
        const targets = [this.grid, this.title].filter(Boolean);
        return new Promise((resolve) => {
            gsap.to(targets, {
                autoAlpha: 0,
                duration: 0.3,
                ease: "power1.out",
                onComplete: resolve,
            });
        });
    }

    fadeIn() {
        gsap.fromTo(
            this.grid,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.4, ease: "power1.out" },
        );
    }

    updateTitle(html) {
        if (!this.title) return;
        const header = this.title.closest("header");
        const fromH = header ? header.offsetHeight : 0;

        this.title.innerHTML = html;
        this.title.classList.toggle("hidden", !html);

        if (header) {
            const toH = header.offsetHeight;
            if (fromH && toH !== fromH) {
                gsap.fromTo(
                    header,
                    { height: fromH },
                    {
                        height: toH,
                        duration: 0.4,
                        ease: "power2.out",
                        onComplete: () =>
                            gsap.set(header, { clearProps: "height" }),
                    },
                );
            }
        }

        if (!html) return;

        gsap.fromTo(
            this.title,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.5, ease: "power1.out" },
        );
    }

    resetLoadMore(cat, hasMore) {
        if (this.button) this.button.hidden = !hasMore;
        if (this.loadMore) {
            this.loadMore.dataset.cat = cat;
            this.loadMore.dispatchEvent(
                new CustomEvent("archive:reset", { detail: { cat } }),
            );
        }
    }

    destroy() {
        this.cats.forEach((a) => a.removeEventListener("click", this.onClick));
    }
}
