import "../css/admin.scss";

// Prevent Gutenberg from scrolling to newly added blocks
if (document.body.classList.contains("block-editor-page")) {
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (options) {
        if (this.closest(".block-editor-block-list__layout")) return;
        originalScrollIntoView.call(this, options);
    };
}

document.addEventListener("click", async (e) => {
    const btn = e.target.closest(".studiogram-toggle-status");
    if (!btn || btn.disabled) return;
    e.preventDefault();
    btn.disabled = true;

    const data = new FormData();
    data.append("action", "toggle_post_status");
    data.append("post", btn.dataset.post);
    data.append("nonce", window.localize?.toggleStatusNonce ?? "");

    try {
        const res = await fetch(window.localize?.ajaxurl, {
            method: "POST",
            body: data,
            credentials: "same-origin",
        });
        const json = await res.json();
        if (json.success) {
            const published = json.data.status === "publish";
            btn.textContent = published ? "Masquer" : "Publier";
            btn.classList.toggle("button-primary", !published);
            btn.classList.toggle("button-secondary", published);
        }
    } catch (err) {}

    btn.disabled = false;
});

