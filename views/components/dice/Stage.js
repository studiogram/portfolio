import * as THREE from "three";

const coinsLocaux = [];
for (const x of [-1, 1])
    for (const y of [-1, 1])
        for (const z of [-1, 1]) coinsLocaux.push([x, y, z]);

function enveloppe(pts) {
    pts.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const cross = (o, a, b) =>
        (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const bas = [],
        haut = [];
    for (const p of pts) {
        while (
            bas.length >= 2 &&
            cross(bas[bas.length - 2], bas[bas.length - 1], p) <= 0
        )
            bas.pop();
        bas.push(p);
    }
    for (let i = pts.length - 1; i >= 0; i--) {
        const p = pts[i];
        while (
            haut.length >= 2 &&
            cross(haut[haut.length - 2], haut[haut.length - 1], p) <= 0
        )
            haut.pop();
        haut.push(p);
    }
    return bas.slice(0, -1).concat(haut.slice(0, -1));
}

function tacheTexture() {
    const c = document.createElement("canvas");
    c.width = c.height = 256;
    const x = c.getContext("2d");
    const g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.3, "rgba(255,255,255,.7)");
    g.addColorStop(0.65, "rgba(255,255,255,.2)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    x.fillStyle = g;
    x.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
}

export default class Stage {
    constructor(canvas, R) {
        this.R = R;
        this.renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
        });
        this.renderer.setClearColor(0x000000, 0);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(R.fov, 1, 1, 200);
        this.camera.position.set(0, R.H, 0);
        this.camera.up.set(0, 0, -1);
        this.camera.lookAt(0, 0, 0);

        const L = Math.PI;
        this.hemi = new THREE.HemisphereLight(
            0xffffff,
            0xb9b0c8,
            R.ambiante * L,
        );
        this.appoint = new THREE.DirectionalLight(0xffffff, R.appoint * L);
        this.spot = new THREE.SpotLight(
            0xffffff,
            R.lumiere * L,
            0,
            Math.PI / 3,
            0,
            0,
        );
        this.scene.add(this.hemi, this.appoint, this.spot, this.spot.target);

        const vide = () => Array.from({ length: 6 }, () => new THREE.Vector2());
        this.sol = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.ShaderMaterial({
                transparent: true,
                depthWrite: false,
                uniforms: {
                    pa: { value: vide() },
                    pb: { value: vide() },
                    n: { value: 0 },
                    flou: { value: 0.1 },
                    rayon: { value: 0 },
                    opacite: { value: R.ombre },
                },
                vertexShader:
                    "varying vec2 vP; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vP = w.xz; gl_Position = projectionMatrix * viewMatrix * w; }",
                fragmentShader: `
                uniform vec2 pa[6]; uniform vec2 pb[6]; uniform int n; uniform float flou; uniform float rayon; uniform float opacite;
                varying vec2 vP;
                void main() {
                    float d = 1e9; bool dedans = true;
                    for (int i = 0; i < 6; i++) {
                        if (i >= n) break;
                        vec2 e = pb[i] - pa[i], w = vP - pa[i];
                        float h = clamp(dot(w, e) / dot(e, e), 0.0, 1.0);
                        d = min(d, length(w - e * h));
                        if (e.x * w.y - e.y * w.x < 0.0) dedans = false;
                    }
                    float sd = (dedans ? -d : d) - rayon;
                    float a = 1.0 - smoothstep(-flou, flou, sd);
                    gl_FragColor = vec4(0.0, 0.0, 0.0, a * opacite);
                }`,
            }),
        );
        this.sol.rotation.x = -Math.PI / 2;
        this.sol.position.y = 0.005;
        this.scene.add(this.sol);

        this.tache = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshBasicMaterial({
                map: tacheTexture(),
                color: 0x000000,
                transparent: true,
                depthWrite: false,
                opacity: 0,
            }),
        );
        this.tache.rotation.x = -Math.PI / 2;
        this.tache.position.y = 0.01;
        this.tache.renderOrder = 1;
        this.scene.add(this.tache);
    }

    add(mesh) {
        this.scene.add(mesh);
    }

    pastille(de) {
        const s = this.cadre.s;
        const c = de.position.clone();
        c.y += s / 2;
        const bord = c.clone();
        bord.x += (s * this.R.cercle) / 2;
        const a = c.clone().project(this.camera),
            b = bord.project(this.camera);
        const px = (v) => ({
            x: ((v.x + 1) / 2) * innerWidth,
            y: ((1 - v.y) / 2) * innerHeight,
        });
        const pa = px(a),
            pb = px(b);
        return { x: pa.x, y: pa.y, r: Math.hypot(pb.x - pa.x, pb.y - pa.y) };
    }

    resize() {
        const R = this.R,
            w = innerWidth,
            h = innerHeight;
        this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
        this.renderer.setSize(w, h, false);
        this.camera.fov = R.fov;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        const hh = R.H * Math.tan(((R.fov / 2) * Math.PI) / 180),
            hw = (hh * w) / h;
        let s = Math.max(hh * 0.15, Math.min(hw, hh) * R.taille);
        if (w < 768) s *= 1.3;
        this.cadre = { hw, hh, H: R.H, s };
        this.appliquerRendu();
        return this.cadre;
    }

    appliquerRendu() {
        const R = this.R,
            c = this.cadre;
        if (!c) return;
        const hl = c.H * R.lampe;
        this.spot.position.set(
            c.hw * R.lumiereX * R.lampe,
            hl,
            c.hh * R.lumiereZ * R.lampe,
        );
        const loin = Math.hypot(
            c.hw + Math.abs(this.spot.position.x),
            c.hh + Math.abs(this.spot.position.z),
        );
        this.spot.angle = Math.min(1.45, Math.atan(loin / hl) * 1.08);
        this.appoint.position.set(
            -c.hw * R.lumiereX * 2,
            c.H * 0.35,
            -c.hh * R.lumiereZ * 2,
        );
    }

    dessinerOmbre(de, h, echelle = 1) {
        const R = this.R,
            s = this.cadre.s * echelle,
            L = this.spot.position;
        const demi = (s / 2) * (1 - R.arrondi * 0.9);
        const v = new THREE.Vector3();
        const pts = coinsLocaux.map(([x, y, z]) => {
            v.set(x * demi, y * demi, z * demi)
                .applyQuaternion(de.quaternion)
                .add(de.position);
            const k = L.y / Math.max(0.001, L.y - v.y);
            return [L.x + (v.x - L.x) * k, L.z + (v.z - L.z) * k];
        });
        let hull = enveloppe(pts);
        if (hull.length > 6) hull = hull.slice(0, 6);
        const u = this.sol.material.uniforms,
            n = hull.length;
        hull.forEach((p, k) => {
            u.pa.value[k].set(p[0], p[1]);
            const q = hull[(k + 1) % n];
            u.pb.value[k].set(q[0], q[1]);
        });
        u.n.value = n;
        const flou = s * (0.03 + R.flou * 0.05 + h * R.flouHauteur * 0.14);
        u.flou.value = flou;
        u.rayon.value = s * R.arrondi * 0.7;
        u.opacite.value = R.ombre * Math.max(0.55, 1 - (h * R.ombreFondu) / 4);
        const cx = hull.reduce((a, p) => a + p[0], 0) / n,
            cz = hull.reduce((a, p) => a + p[1], 0) / n;
        const W =
            2 *
            (Math.max(...hull.map((p) => Math.hypot(p[0] - cx, p[1] - cz))) +
                flou * 1.2 +
                s * 0.1);
        this.sol.position.x = cx;
        this.sol.position.z = cz;
        this.sol.scale.set(W, W, 1);
    }

    poser(de, frames, f) {
        const R = this.R,
            s = this.cadre.s;
        if (!frames || !frames.length) return;
        let fi = Math.floor(f);
        if (!isFinite(fi) || fi < 0) fi = 0;
        const i = Math.min(frames.length - 1, fi),
            j = Math.min(frames.length - 1, i + 1),
            t = f - fi;
        const A = frames[i],
            B = frames[j];
        if (!A || !B) return;
        de.position.set(
            A[0] + (B[0] - A[0]) * t,
            A[1] + (B[1] - A[1]) * t,
            A[2] + (B[2] - A[2]) * t,
        );
        de.quaternion.copy(
            new THREE.Quaternion(A[3], A[4], A[5], A[6]).slerp(
                new THREE.Quaternion(B[3], B[4], B[5], B[6]),
                t,
            ),
        );

        const echelle = de.scale.x;
        const alt = Math.max(0, de.position.y - s / 2);
        const hRel = alt / s;
        this.dessinerOmbre(de, hRel, echelle);
        this.tache.position.x = de.position.x - R.lumiereX * alt * 0.25;
        this.tache.position.z = de.position.z - R.lumiereZ * alt * 0.25;
        const e = s * echelle * (R.tacheTaille + (alt / s) * 0.9);
        this.tache.scale.set(e, e, 1);
        this.tache.material.opacity =
            R.tache * Math.max(0, 1 - alt / (s * R.tacheFondu)) ** 1.5;

        this.renderer.render(this.scene, this.camera);
    }
}
