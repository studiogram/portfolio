import "../css/tailwind.build.css";
import "swiper/css";
import "swiper/css/navigation";
import "plyr/dist/plyr.css";
import "lenis/dist/lenis.css";
import "../css/main.scss";
import "lazysizes";
import { Core } from "@unseenco/taxi";
import { gsap } from "gsap/all";
import partials from "./views/partials";
import { initSmooth } from "./actions/Smooth";
import { syncComponents } from "./components/ComponentManager";
import DefaultRenderer from "./renderers/DefaultRenderer";
import DefaultTransition from "./transitions/DefaultTransition";
import sendView from "./actions/TrackView";

document.documentElement.classList.add("is-loading");

class Main {
    constructor() {
        initSmooth();
        this.initPartials();
        syncComponents();
        this.initTaxi();
        this.introLoad();
        sendView();
    }

    introLoad() {
        const header = document.getElementById("header");
        const cover = document.querySelector("[data-cover]");
        const clearLoading = () =>
            document.documentElement.classList.remove("is-loading");
        const tl = gsap.timeline({
            defaults: { ease: "power2.out" },
            onComplete: clearLoading,
        });
        if (cover) {
            tl.to(
                cover,
                { opacity: 0, duration: 1.2, onComplete: clearLoading },
                0,
            );
        } else {
            clearLoading();
        }
        if (header) {
            tl.fromTo(
                header,
                { top: "-8rem" },
                {
                    top: "1rem",
                    duration: 1.6,
                    ease: "elastic.out(1, 0.7)",
                },
                0.15,
            );
        }
    }

    initPartials() {
        partials.forEach((partial) => {
            const foundPartial = document.getElementById(partial.name);
            if (foundPartial) {
                new partial.Class(foundPartial);
            }
        });
    }

    initTaxi() {
        if (!document.querySelector("[data-taxi-view]")) {
            return;
        }

        const taxi = (window.taxi = new Core({
            renderers: {
                default: DefaultRenderer,
            },
            transitions: {
                default: DefaultTransition,
            },
            // Block view scripts are handled by BlockLoader/ensureBlocks on
            // navigation, not here — WordPress only enqueues a block's script on
            // pages that originally contain it, so re-injection can't cover a
            // block first met via SPA nav.
            // Gravity Forms core is loaded on every page (Theme::force_gravity_forms_scripts),
            // so `gform` always exists. GF still prints its per-form init inline after
            // each form; re-run only those inline scripts so a form first met via SPA
            // nav boots and its AJAX submit works. Don't reload GF's external core here
            // or it would re-execute and redefine `gform` mid-init.
            reloadJsFilter: (element) => {
                const src = element.src || "";
                if (element.dataset.taxiReload !== undefined) return true;
                if (
                    !src &&
                    /gform|gravityforms/i.test(element.textContent || "")
                )
                    return true;
                return false;
            },
        }));

        taxi.on("NAVIGATE_OUT", () => {
            sessionStorage.setItem("studiogram:from", location.href);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Main();
});
