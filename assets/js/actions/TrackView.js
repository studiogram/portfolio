export default function sendView(view) {
    // On taxi navigation, pass the new view element: during a transition the
    // old [data-taxi-view] is still in the DOM, so a global querySelector would
    // grab the previous page. On initial load there is only one, so fall back.
    const el = view || document.querySelector("[data-taxi-view]");
    if (!el) return;

    // Count each view element at most once (initial load can fire from both
    // main.js and the taxi renderer).
    if (el.dataset.viewCounted) return;
    el.dataset.viewCounted = "1";

    const postId = el.dataset.postId;
    if (!postId) return;

    const data = new FormData();
    data.append("action", "track_view");
    data.append("post_id", postId);
    data.append("nonce", window.localize?.nonce ?? "");

    fetch(window.localize?.ajaxurl, {
        method: "POST",
        body: data,
        credentials: "same-origin",
    }).catch(() => {});
}
