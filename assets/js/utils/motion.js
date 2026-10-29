export const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

export const reducedMotion = () => motionQuery.matches;
