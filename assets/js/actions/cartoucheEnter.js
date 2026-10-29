import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reducedMotion } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

export function cartoucheEnter(cartouche, { onComplete, tilt = true } = {}) {
	if (!cartouche) return;
	if (reducedMotion() || document.body.classList.contains("wp-admin")) {
		onComplete?.();
		return;
	}

	gsap.set(cartouche, {
		transformPerspective: 900,
		transformOrigin: "top center",
		rotationX: -20,
		autoAlpha: 0,
	});

	const play = () => {
		gsap.to(cartouche, { autoAlpha: 1, duration: 0.3, ease: "power2.out" });
		gsap.to(cartouche, {
			rotationX: 0,
			duration: 1,
			ease: "power3.out",
			onComplete: () => {
				if (tilt) startTilt(cartouche);
				onComplete?.();
			},
		});
	};

	if (window.__introDone) play();
	else document.addEventListener("app:intro", play, { once: true });
}

function startTilt(cartouche) {
	const trigger = cartouche.closest("[data-block-type]") || cartouche;
	gsap.to(cartouche, {
		rotationX: -20,
		ease: "none",
		scrollTrigger: {
			trigger,
			start: "top top",
			end: "bottom top",
			scrub: 1,
			invalidateOnRefresh: true,
		},
	});
}
