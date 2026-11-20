import * as THREE from "three";
import Stage from "./Stage";
import Cube from "./Cube";
import { planThrow } from "./Physics";
import { getSmooth } from "../../../assets/js/actions/Smooth";
import { motionQuery } from "../../../assets/js/utils/motion";

const R = {
    H: 40, fov: 24, taille: 0.2, arrondi: 0.045, rugosite: 0.79, cercle: 0.53,
    lumiere: 0.66, ambiante: 0.51, appoint: 0, lumiereX: -0.3, lumiereZ: -0.45, lampe: 1.6,
    ombre: 0.3, flou: 3, flouHauteur: 1.5, ombreFondu: 0.25, tache: 0.3, tacheTaille: 1, tacheFondu: 0.5,
    iconeLacet: 12, iconeRemplissage: 0.8, pause: 400,
    hauteur: 8.1, gravite: 22.5, vitesse: 1.25, rotation: 11, tours: 2.6, tolerance: 0.2,
    rebondMurs: 0.82, rebondSol: 0.43, frottement: 0.4, rebondsMin: 2,
};

const NORMALS = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];

export default class Dice {
    constructor(el) {
        this.el = el;
        this.canvas = el.querySelector(".dice__scene");
        this.btn = el.querySelector(".dice__btn");
        const json = el.querySelector(".dice__data");
        try { this.data = json ? JSON.parse(json.textContent) : null; } catch { this.data = null; }
        if (!this.data || !this.data.faces?.length || !this.canvas || !this.btn) return;

        this.reduce = motionQuery;
        this.onClick = this.onClick.bind(this);
        this.onKey = this.onKey.bind(this);
        this.btn.addEventListener("click", this.onClick);
    }

    baseline() {
        const cats = this.data.faces.map((f) => f.color);
        while (cats.length < 5) cats.push(this.data.soft);
        return [cats[0], cats[1], this.data.soft, cats[2], cats[3], cats[4]];
    }

    pickCategory() {
        let pool = this.data.faces.filter((f) => f.urls.length);
        if (!pool.length) pool = this.data.faces;
        const choices = pool.filter((f) => !this.last || f.slug !== this.last);
        const face = (choices.length ? choices : pool)[Math.floor(Math.random() * (choices.length ? choices.length : pool.length))];
        if (face) this.last = face.slug;
        return face || null;
    }

    pickUrl(face) {
        const here = location.pathname.replace(/\/$/, "");
        const path = (u) => { try { return new URL(u, location.href).pathname.replace(/\/$/, ""); } catch { return u; } };
        let urls = face.urls.filter((u) => path(u) !== here);
        if (!urls.length) urls = face.urls;
        return urls.length ? urls[Math.floor(Math.random() * urls.length)] : face.archive;
    }

    quatIcone() {
        return new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), R.iconeLacet * Math.PI / 180);
    }

    instantCache(frames, k) {
        for (const seuil of [-0.3, 0]) {
            for (let f = 2; f < frames.length; f++) {
                const F = frames[f];
                const n = new THREE.Vector3(...NORMALS[k]).applyQuaternion(new THREE.Quaternion(F[3], F[4], F[5], F[6]));
                if (n.y < seuil) return f;
            }
        }
        return -1;
    }

    ensureScene() {
        if (this.stage) return;
        this.stage = new Stage(this.canvas, R);
        if (this.canvas.parentNode !== document.body) document.body.appendChild(this.canvas);
    }

    ensureCube(s) {
        const key = s.toFixed(3);
        if (this.cubeKey === key) return;
        if (this.cube) { this.stage.scene.remove(this.cube.mesh); this.cube.dispose(); }
        this.cube = new Cube(s, R);
        this.stage.add(this.cube.mesh);
        this.cubeKey = key;
    }

    onClick() {
        if (this.busy) return;
        const face = this.pickCategory();
        if (!face) return;
        const url = this.pickUrl(face);
        if (!url) return;
        if (this.reduce.matches) return this.goto(url);

        this.busy = true;
        this.ensureScene();
        const cadre = this.stage.resize();
        this.ensureCube(cadre.s);

        const rect = this.btn.getBoundingClientRect();
        const visible = rect.bottom > 0 && rect.top < innerHeight;
        const origine = visible
            ? { x: ((rect.left + rect.width / 2) / innerWidth) * 2 - 1, z: ((rect.top + rect.height / 2) / innerHeight) * 2 - 1 }
            : null;
        const qI = this.quatIcone();
        const baseline = this.baseline();

        let plan, depart, final, bascule;
        for (let essai = 0; essai < 6; essai++) {
            plan = planThrow(cadre, Math.random, Object.assign({}, R, {
                origine, quatDepart: visible ? { x: qI.x, y: qI.y, z: qI.z, w: qI.w } : null,
            }));
            if (!plan || !plan.frames || plan.frames.length < 2) continue;
            if (!visible) break;
            depart = baseline.slice();
            final = depart.slice();
            const ancienne = final.indexOf(face.color);
            [final[plan.up], final[ancienne]] = [final[ancienne], final[plan.up]];
            bascule = [0, 1, 2, 3, 4, 5].map((k) => (depart[k] === final[k] ? 0 : this.instantCache(plan.frames, k)));
            if (!bascule.includes(-1)) break;
        }
        if (!plan || !plan.frames || plan.frames.length < 2) { this.busy = false; return; }

        let etat = null;
        if (visible) {
            bascule = bascule.map((f) => Math.max(0, f));
            this.cube.mesh.quaternion.copy(qI);
            this.cube.mesh.position.set(0, 0, 0);
            this.cube.mesh.scale.setScalar(1);
            this.cube.mesh.updateMatrixWorld();
            const b = new THREE.Box3().setFromObject(this.cube.mesh);
            const F0 = plan.frames[0];
            let minX = 1e9, maxX = -1e9;
            for (const x of [b.min.x, b.max.x]) for (const y of [b.min.y, b.max.y]) for (const z of [b.min.z, b.max.z]) {
                const v = new THREE.Vector3(x + F0[0], y + F0[1], z + F0[2]).project(this.stage.camera);
                const px = (v.x + 1) / 2 * innerWidth;
                minX = Math.min(minX, px); maxX = Math.max(maxX, px);
            }
            const largeurIcone = rect.width * R.iconeRemplissage;
            etat = { depart, final, bascule, echelle0: Math.min(1, largeurIcone / Math.max(1, maxX - minX)) };
            this.cube.setFaces(depart);
        } else {
            const arr = baseline.slice();
            const anc = arr.indexOf(face.color);
            [arr[plan.up], arr[anc]] = [arr[anc], arr[plan.up]];
            this.cube.setFaces(arr);
        }

        this.rollColor = face.color;
        this.el.classList.add("is-rolling");
        this.canvas.classList.add("actif");
        this.lock(true);
        addEventListener("keydown", this.onKey);
        this.animate(plan.frames, url, etat);
    }

    render(frames, f, etat) {
        let echelle = 1;
        if (etat) {
            for (let k = 0; k < 6; k++) {
                this.cube.mesh.material[k] = this.cube.material(f >= etat.bascule[k] ? etat.final[k] : etat.depart[k]);
            }
            const m = Math.min(1, f / 20);
            echelle = etat.echelle0 + (1 - etat.echelle0) * (1 - Math.pow(1 - m, 3));
        }
        this.cube.mesh.scale.setScalar(echelle);
        this.stage.poser(this.cube.mesh, frames, f);
    }

    animate(frames, url, etat) {
        const start = performance.now();
        const loop = (now) => {
            const f = Math.max(0, (now - start) / 1000 * 60);
            if (f >= frames.length - 1) {
                this.render(frames, frames.length - 1, etat);
                return this.finish(url);
            }
            this.render(frames, f, etat);
            this.raf = requestAnimationFrame(loop);
        };
        this.raf = requestAnimationFrame(loop);
    }

    finish(url) {
        // return; // DEBUG: freeze landed dice (skip reveal) to screenshot it; re-comment to resume the transition
        this.timer = setTimeout(() => this.reveal(url), R.pause);
    }

    easeInOut(k) {
        return k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    }

    animer(ms, step) {
        return new Promise((ok) => {
            const t0 = performance.now();
            const tick = (n) => {
                const k = Math.min(1, (n - t0) / ms);
                step(this.easeInOut(k));
                if (k < 1) requestAnimationFrame(tick);
                else ok();
            };
            requestAnimationFrame(tick);
        });
    }

    pastilleTarget(url) {
        let hash = "";
        try { hash = new URL(url, location.href).hash.slice(1); } catch { hash = ""; }
        if (hash) {
            const el = document.getElementById(hash);
            return el?.querySelector("[data-pastille]") || null;
        }
        return document.querySelector("[data-pastille]");
    }

    async reveal(url) {
        const p = this.stage.pastille(this.cube.mesh);
        const fin = Math.hypot(Math.max(p.x, innerWidth - p.x), Math.max(p.y, innerHeight - p.y)) + 4;
        const v = document.createElement("div");
        Object.assign(v.style, {
            position: "fixed", inset: "0", zIndex: "2001", background: this.rollColor,
            pointerEvents: "none", clipPath: `circle(${p.r}px at ${p.x}px ${p.y}px)`,
        });
        document.body.appendChild(v);
        this.canvas.classList.remove("actif");
        removeEventListener("keydown", this.onKey);

        await this.animer(620, (e) => {
            v.style.clipPath = `circle(${p.r + (fin - p.r) * e}px at ${p.x}px ${p.y}px)`;
        });

        if (!url) { v.remove(); this.el.classList.remove("is-rolling"); this.lock(false); this.busy = false; return; }
        if (window.taxi?.navigateTo) {
            try { await window.taxi.navigateTo(url, "dice"); } catch { location.href = url; return; }
        } else {
            location.href = url;
            return;
        }

        this.lock(false);
        let hash = "";
        try { hash = new URL(url, location.href).hash.slice(1); } catch { hash = ""; }
        const anchor = hash ? document.getElementById(hash) : null;
        if (anchor) {
            if (window.lenis?.scrollTo) window.lenis.scrollTo(anchor, { immediate: true });
            else anchor.scrollIntoView({ block: "center" });
        } else if (window.lenis?.scrollTo) {
            window.lenis.scrollTo(0, { immediate: true });
        } else {
            scrollTo(0, 0);
        }
        await new Promise((ok) => requestAnimationFrame(ok));
        const target = this.pastilleTarget(url);
        if (target) {
            const b = target.getBoundingClientRect();
            const tx = b.left + b.width / 2, ty = b.top + b.height / 2, tr = Math.max(4, b.width / 2);
            await this.animer(700, (e) => {
                const x = p.x + (tx - p.x) * e, y = p.y + (ty - p.y) * e, r = fin + (tr - fin) * e;
                v.style.clipPath = `circle(${r}px at ${x}px ${y}px)`;
            });
        } else {
            v.style.transition = "opacity .45s";
            v.style.opacity = "0";
            await new Promise((ok) => setTimeout(ok, 460));
        }
        v.remove();
        this.el.classList.remove("is-rolling");
        this.busy = false;
    }

    onKey(e) {
        if (e.key === "Escape") this.cancel();
    }

    lock(on) {
        const lenis = getSmooth();
        if (lenis) lenis.isStopped = on;
    }

    cancel() {
        cancelAnimationFrame(this.raf);
        clearTimeout(this.timer);
        removeEventListener("keydown", this.onKey);
        this.canvas.classList.remove("actif");
        this.el.classList.remove("is-rolling");
        this.lock(false);
        this.busy = false;
    }

    goto(url) {
        this.cancel();
        if (!url) return;
        if (window.taxi?.navigateTo) window.taxi.navigateTo(url);
        else location.href = url;
    }

    destroy() {
        this.cancel();
        this.btn?.removeEventListener("click", this.onClick);
        this.cube?.dispose();
        this.stage?.renderer.dispose();
        if (this.canvas?.parentNode === document.body) this.canvas.remove();
    }
}
