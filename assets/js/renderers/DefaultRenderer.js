import { Renderer } from "@unseenco/taxi";
import templates from "../views/templates";
import BlockEvents from "../blocks/BlockEvents";
import { ensureBlocks } from "../blocks/BlockLoader";
import { syncComponents, destroyIn } from "../components/ComponentManager";
import Scrolls from "../actions/Scrolls";
import { getSmooth, resetSmooth } from "../actions/Smooth";
import sendView from "../actions/TrackView";

let scrolls = null;

export default class DefaultRenderer extends Renderer {
    update() {
        if (!this._DOM) this.createDom();
        super.update();
    }

    onEnter() {
        document.body.classList.remove("is-scroll-ready");
        const lenis = getSmooth();
        if (lenis) lenis.scrollTo(0, { immediate: true });
        else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        this.syncHead();
    }

    async onEnterCompleted() {
        // Kill the previous page's ScrollTriggers up front. Scrolls.destroy()
        // nukes *every* trigger, so it must run before initViews/ensureBlocks
        // create this page's component- and block-owned triggers (e.g. the
        // header arrow's rotate-on-scroll) — otherwise it kills them the moment
        // they're born and they freeze at their inline start state.
        scrolls?.destroy();
        this.initViews();
        await ensureBlocks(this.content);
        BlockEvents.syncAll();
        // Only *adds* [data-scroll] triggers (never kills), so the triggers
        // built above survive. Runs after ensureBlocks so block-injected
        // scroll elements are captured too.
        scrolls = new Scrolls();
        // Blocks/components just mounted — recompute scroll positions and land
        // at the top now that final page height is known.
        resetSmooth();
        this.syncActiveMenu();
        sendView(this.content);
    }

    syncHead() {
        const next = this.page;
        if (!next) return;

        const nextBody = next.querySelector("body");
        if (nextBody) {
            const keep = [...document.body.classList].filter((c) =>
                c.startsWith("is-"),
            );
            document.body.className = nextBody.className;
            keep.forEach((c) => document.body.classList.add(c));
        }

        if (this.title) document.title = this.title;

        const selectors = [
            'meta[name="description"]',
            'meta[name="robots"]',
            'meta[property^="og:"]',
            'meta[property^="article:"]',
            'meta[name^="twitter:"]',
            'link[rel="canonical"]',
            'link[rel="icon"]',
            'link[rel="shortcut icon"]',
            'link[rel="apple-touch-icon"]',
            'script[type="application/ld+json"]',
        ];
        selectors.forEach((selector) => {
            document.head
                .querySelectorAll(selector)
                .forEach((el) => el.remove());
            next.querySelectorAll(selector).forEach((el) =>
                document.head.appendChild(el.cloneNode(true)),
            );
        });
    }

    syncActiveMenu() {
        const view = this.content?.matches?.("[data-menu-active]")
            ? this.content
            : this.content?.querySelector?.("[data-menu-active]") ||
              this.content?.closest?.("[data-menu-active]");
        const active = view?.getAttribute("data-menu-active") || "";
        document.querySelectorAll("[data-menu-id]").forEach((item) => {
            const isActive = item.getAttribute("data-menu-id") === active;
            item.classList.toggle("is-current", isActive);
            if (isActive) {
                item.setAttribute("aria-current", "page");
            } else {
                item.removeAttribute("aria-current");
            }
        });
    }

    onLeave() {
        // Dispose WebGL components (Spline) now, while their canvas is still
        // attached and sized. Waiting until onLeaveCompleted lets them render to
        // a zero-size framebuffer during the transition and spam GL errors.
        destroyIn(this.content);
    }

    onLeaveCompleted() {
        this.destroyViews();
    }

    initViews() {
        const wrapper = this.wrapper;
        // Components (Spline, ...) are owned by the shared manager so they init and
        // dispose consistently across the initial load and every navigation.
        syncComponents(wrapper);
        this.instances = [];
        templates.forEach((template) => {
            const found = wrapper.querySelector(
                `[data-template="${template.name}"]`,
            );
            if (found) this.instances.push(new template.Class(found));
        });
    }

    destroyViews() {
        (this.instances || []).forEach((instance) => instance.destroy?.());
        this.instances = [];
    }
}
