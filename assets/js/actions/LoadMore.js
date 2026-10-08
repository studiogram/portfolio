export default class LoadMore {
    constructor(element) {
        this.element = element;
        this.grid = element.querySelector("[data-grid]");
        this.button = element.querySelector("[data-load-more-btn]");
        this.loader = element.querySelector("[data-loader]");
        this.cat = element.dataset.cat || "0";
        this.paged = 1;
        this.loading = false;

        if (this.button) {
            this.onClick = () => this.load();
            this.button.addEventListener("click", this.onClick);
        }

        this.onReset = (e) => {
            this.cat = e.detail?.cat ?? "0";
            this.paged = 1;
            this.loading = false;
            this.setLoading(false);
        };
        this.element.addEventListener("archive:reset", this.onReset);
    }

    async load() {
        if (this.loading) return;
        this.loading = true;
        this.setLoading(true);

        const data = new FormData();
        data.append("action", "load_posts");
        data.append("cat", this.cat);
        data.append("paged", String(this.paged + 1));
        data.append("nonce", window.localize?.nonce ?? "");

        try {
            const res = await fetch(window.localize?.ajaxurl, {
                method: "POST",
                body: data,
                credentials: "same-origin",
            });
            const json = await res.json();
            if (json.success) {
                this.paged += 1;
                this.grid.insertAdjacentHTML("beforeend", json.data.html);
                if (this.button) this.button.hidden = !json.data.has_more;
            }
        } catch (e) {}

        this.loading = false;
        this.setLoading(false);
    }

    setLoading(state) {
        if (this.loader) this.loader.hidden = !state;
        if (this.button) this.button.disabled = state;
    }
}
