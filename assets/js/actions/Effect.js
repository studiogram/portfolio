import effects from "../effects";

export default class Effect {
    constructor(element) {
        const load = effects[element.dataset.effect];
        if (!load) return;
        if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)
            return;

        load().then(({ default: EffectClass }) => {
            // Element may have left the DOM (Taxi nav) before the chunk resolved.
            if (!document.contains(element)) return;
            this.effect = new EffectClass(element);
        });
    }

    destroy() {
        this.effect?.destroy?.();
    }
}
