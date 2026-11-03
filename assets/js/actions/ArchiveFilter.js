import { gsap } from "gsap/all";
import { reducedMotion } from "../utils/motion";

export default class ArchiveFilter {
    constructor(element) {
        this.el = element;
        this.defaultTitle = element.dataset.defaultTitle || "";
        this.cats = [...element.querySelectorAll(".archive__cat")];
        this.select = element.querySelector("[data-cat-select]");
        this.grid = element.querySelector("[data-grid]");
        this.loader = element.querySelector("[data-loader]");
        this.cartouche = element.querySelector(".archive-hero__cartouche");
        this.heroTitle = element.querySelector("[data-hero-title]");
        this.heroInner = element.querySelector("[data-hero-inner]");
        this.loading = false;

        this.onClick = this.onClick.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.cats.forEach((a) => a.addEventListener("click", this.onClick));
        this.select?.addEventListener("change", this.onSelect);

        this.revealTitle();
        this.revealCards();
        this.revealPills();
    }

    revealPills() {
        if (!this.cats.length) return;
        if (reducedMotion()) {
            gsap.set(this.cats, { yPercent: 0, visibility: "visible" });
            return;
        }
        gsap.set(this.cats, { yPercent: -130, visibility: "visible" });
        gsap.to(this.cats, {
            yPercent: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            delay: 0.55,
        });
    }

    onClick(e) {
        e.preventDefault();
        if (this.loading) return;
        const link = e.currentTarget;
        const cat = link.dataset.cat || "0";
        this.setActive(cat);
        this.setCartouche(cat, link.dataset.color, link.textContent.trim());
        history.replaceState(history.state, "", link.href);
        this.filter(cat);
    }

    onSelect(e) {
        if (this.loading) return;
        const opt = e.currentTarget.selectedOptions[0];
        const cat = e.currentTarget.value || "0";
        this.setActive(cat);
        this.setCartouche(cat, opt?.dataset.color, opt?.textContent.trim());
        this.filter(cat);
    }

    setActive(cat) {
        this.cats.forEach((a) =>
            a.classList.toggle("is-active", (a.dataset.cat || "0") === cat),
        );
        if (this.select) this.select.value = cat;
    }

    setCartouche(cat, color, title) {
        if (this.cartouche) {
            if (cat !== "0" && color) this.cartouche.dataset.color = color;
            else delete this.cartouche.dataset.color;
        }
        this.slideTitle(cat === "0" ? this.defaultTitle : title);
    }

    revealTitle() {
        if (!this.heroInner) return;
        if (reducedMotion()) {
            gsap.set(this.heroInner, { yPercent: 0 });
            if (this.heroTitle) this.heroTitle.style.visibility = "visible";
            return;
        }
        gsap.set(this.heroInner, { yPercent: 100 });
        if (this.heroTitle) this.heroTitle.style.visibility = "visible";
        gsap.to(this.heroInner, { yPercent: 0, duration: 0.6, ease: "power3.out" });
    }

    slideTitle(title) {
        if (!this.heroInner) return;
        if (this.heroTitle) this.heroTitle.style.visibility = "visible";
        if (reducedMotion()) {
            this.heroInner.textContent = title;
            return;
        }
        gsap.timeline()
            .to(this.heroInner, {
                yPercent: 100,
                duration: 0.3,
                ease: "power2.in",
            })
            .add(() => {
                const from = this.heroTitle.offsetHeight;
                this.heroInner.textContent = title;
                const to = this.heroTitle.offsetHeight;
                if (from !== to) {
                    gsap.fromTo(
                        this.heroTitle,
                        { height: from },
                        {
                            height: to,
                            duration: 0.45,
                            ease: "power3.out",
                            clearProps: "height",
                        },
                    );
                }
            })
            .set(this.heroInner, { yPercent: 100 })
            .to(this.heroInner, {
                yPercent: 0,
                duration: 0.45,
                ease: "power3.out",
            });
    }

    cards() {
        return [...this.grid.querySelectorAll(".archive__item > a")];
    }

    hideCards() {
        const items = this.cards();
        if (!items.length || reducedMotion()) return Promise.resolve();
        return gsap.to(items, {
            yPercent: 100,
            duration: 0.35,
            ease: "power2.in",
            stagger: 0.05,
        });
    }

    revealCards() {
        const items = this.cards();
        if (!items.length) return;
        if (reducedMotion()) {
            gsap.set(items, { clearProps: "all", visibility: "visible" });
            return;
        }
        gsap.set(items, { visibility: "visible" });
        gsap.fromTo(
            items,
            { yPercent: 100 },
            {
                yPercent: 0,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.1,
            },
        );
    }

    async filter(cat) {
        this.loading = true;
        if (this.loader) this.loader.hidden = false;

        const [json] = await Promise.all([
            this.fetchPosts(cat),
            this.hideCards(),
        ]);

        if (json?.success) {
            this.grid.innerHTML = json.data.html;
            this.revealCards();
        }

        if (this.loader) this.loader.hidden = true;
        this.loading = false;
    }

    async fetchPosts(cat) {
        const data = new FormData();
        data.append("action", "load_posts");
        data.append("cat", cat);
        data.append("nonce", window.localize?.nonce ?? "");

        try {
            const res = await fetch(window.localize?.ajaxurl, {
                method: "POST",
                body: data,
                credentials: "same-origin",
            });
            return await res.json();
        } catch (e) {
            return null;
        }
    }

    destroy() {
        this.cats.forEach((a) => a.removeEventListener("click", this.onClick));
        this.select?.removeEventListener("change", this.onSelect);
    }
}
