import { gsap } from "gsap";
import { reducedMotion } from "../utils/motion";

// Shared header-cartouche entrance: hidden → quick fade-in + 3D flip, played
// once the initial-load cover clears (the `app:intro` signal). On SPA
// navigation the intro already ran, so it plays immediately. Skipped for
// reduced-motion and the block editor (the global `html.js .cartouche` CSS
// leaves it visible in those cases).
export function cartoucheEnter(cartouche, { onComplete } = {}) {
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
			onComplete,
		});
	};

	if (window.__introDone) play();
	else document.addEventListener("app:intro", play, { once: true });
}
