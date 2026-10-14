import * as CANNON from "cannon-es";

function simulateThrow(b, rng, p) {
    const { hw, hh, H, s } = b;
    p = Object.assign(
        { gravite: 19, hauteur: 6, vitesse: 1.25, rotation: 16, rebondMurs: 0.72, rebondSol: 0.36, frottement: 0.3 },
        p || {},
    );
    const world = new CANNON.World();
    world.gravity.set(0, -p.gravite * s, 0);
    world.broadphase = new CANNON.NaiveBroadphase();
    world.solver.iterations = 16;

    const mFloor = new CANNON.Material("floor"), mWall = new CANNON.Material("wall"), mDie = new CANNON.Material("die");
    world.addContactMaterial(new CANNON.ContactMaterial(mFloor, mDie, { friction: p.frottement, restitution: p.rebondSol }));
    world.addContactMaterial(new CANNON.ContactMaterial(mWall, mDie, { friction: 0.03, restitution: p.rebondMurs }));

    const V = (x, y, z) => new CANNON.Vec3(x, y, z);
    const walls = [];
    const addPlane = (pos, normal, mat, isWall) => {
        const body = new CANNON.Body({ mass: 0, material: mat });
        body.addShape(new CANNON.Plane());
        body.position.copy(pos);
        const n = normal.clone(); n.normalize();
        body.quaternion.setFromVectors(V(0, 0, 1), n);
        world.addBody(body);
        if (isWall) walls.push(body);
    };
    const m = 0.04 * s, ex = hw - m, ez = hh - m;
    addPlane(V(0, 0, 0), V(0, 1, 0), mFloor, false);
    addPlane(V(0, Math.min(H * 0.7, (p.hauteur + 3) * s), 0), V(0, -1, 0), mWall, false);
    addPlane(V(ex, 0, 0), V(-H, -ex, 0), mWall, true);
    addPlane(V(-ex, 0, 0), V(H, -ex, 0), mWall, true);
    addPlane(V(0, 0, -ez), V(0, -ez, H), mWall, true);
    addPlane(V(0, 0, ez), V(0, -ez, -H), mWall, true);

    const die = new CANNON.Body({ mass: 1, material: mDie });
    die.addShape(new CANNON.Box(V(s / 2, s / 2, s / 2)));
    die.linearDamping = 0.03; die.angularDamping = 0.05;
    world.addBody(die);

    const g = p.gravite * s;
    const apex = Math.min(H * 0.6, p.hauteur * s + rng() * 1.2 * s);
    if (p.origine && p.quatDepart) die.quaternion.set(p.quatDepart.x, p.quatDepart.y, p.quatDepart.z, p.quatDepart.w);
    else die.quaternion.setFromEuler(rng() * 6.283, rng() * 6.283, rng() * 6.283);
    if (p.origine) {
        const y0 = p.quatDepart ? 0.52 * s : 0.8 * s;
        const bord = p.quatDepart ? 0.6 * s : 0.9 * s;
        const x0 = Math.max(-hw + bord, Math.min(hw - bord, p.origine.x * hw));
        const z0 = Math.max(-hh + bord, Math.min(hh - bord, p.origine.z * hh));
        die.position.set(x0, y0, z0);
        const vy = Math.sqrt(2 * g * Math.max(s, apex - y0));
        const suivi = vy / H * 1.5;
        const cible = Math.atan2(-z0, -x0) + (rng() - 0.5) * 2.2;
        const speed = (p.vitesse * 0.45 + rng() * 0.35) * Math.max(hw, hh);
        die.velocity.set(-x0 * suivi + Math.cos(cible) * speed, vy, -z0 * suivi + Math.sin(cible) * speed);
    } else {
        const y0 = apex;
        const k = (H - y0) / H;
        const side = rng() < 0.5 ? -1 : 1;
        const x0 = -side * hw * k * (rng() * 0.5);
        const z0 = -hh * k + 0.95 * s;
        die.position.set(x0, y0, z0);
        const speed = (p.vitesse + rng() * 0.6) * Math.max(hw, hh);
        const angle = (0.25 + rng() * 0.35) * Math.PI / 2;
        die.velocity.set(side * Math.cos(angle) * speed, s * (1.5 + rng() * 1.5), Math.sin(angle) * speed);
    }
    const w = p.rotation * (p.facteur || 1) * (0.85 + rng() * 0.3);
    die.angularVelocity.set((rng() - 0.5) * w, (rng() - 0.5) * w, (rng() - 0.5) * w);

    let wallHits = 0, lastHit = -99, frame = 0;
    die.addEventListener("collide", (e) => {
        if (walls.includes(e.body) && frame - lastHit > 10) { wallHits++; lastHit = frame; }
    });

    const frames = [];
    const push = () => {
        const f = new Float32Array(7);
        f[0] = die.position.x; f[1] = die.position.y; f[2] = die.position.z;
        f[3] = die.quaternion.x; f[4] = die.quaternion.y; f[5] = die.quaternion.z; f[6] = die.quaternion.w;
        frames.push(f);
    };
    push();
    let still = 0, tours = 0;
    const qPrec = die.quaternion.clone();
    const wMax = p.rotation * (p.facteur || 1) * 1.6;
    for (frame = 1; frame < 540; frame++) {
        world.step(1 / 120); world.step(1 / 120);
        if (die.position.y < s * 0.62 && die.velocity.length() < 0.9 * s) { die.angularDamping = 0.55; die.linearDamping = 0.35; }
        else { die.angularDamping = 0.05; die.linearDamping = 0.03; }
        const wn = die.angularVelocity.length();
        if (wn > wMax) die.angularVelocity.scale(wMax / wn, die.angularVelocity);
        const dq = qPrec.conjugate().mult(die.quaternion);
        tours += 2 * Math.acos(Math.min(1, Math.abs(dq.w))) / (2 * Math.PI);
        qPrec.copy(die.quaternion);
        push();
        const calm = die.velocity.length() < 0.06 * s && die.angularVelocity.length() < 0.25;
        still = frame > 40 && calm ? still + 1 : 0;
        if (still >= 12) break;
    }
    frames.splice(Math.max(2, frames.length - 8));

    const normals = [V(1, 0, 0), V(-1, 0, 0), V(0, 1, 0), V(0, -1, 0), V(0, 0, 1), V(0, 0, -1)];
    let up = 0, dot = -2;
    normals.forEach((n, i) => { const y = die.quaternion.vmult(n).y; if (y > dot) { dot = y; up = i; } });
    return { frames, up, flat: dot > 0.97, wallHits, tours };
}

export function planThrow(b, rng, p) {
    const min = p && p.rebondsMin != null ? p.rebondsMin : 2;
    const cible = (p && p.tours) || 2.6, tol = (p && p.tolerance != null) ? p.tolerance : 0.2;
    let facteur = 1, meilleur = null, ecartMeilleur = Infinity;
    for (let i = 0; i < 30; i++) {
        const r = simulateThrow(b, rng, Object.assign({}, p, { facteur }));
        const ecart = Math.abs(r.tours - cible) / cible;
        if (r.flat && r.wallHits >= min && ecart <= tol) return r;
        const score = ecart + (r.flat ? 0 : 10) + (r.wallHits >= min ? 0 : 1);
        if (score < ecartMeilleur) { ecartMeilleur = score; meilleur = r; }
        if (r.tours > 0) facteur = Math.max(0.3, Math.min(2.5, facteur * Math.pow(cible / r.tours, 0.8)));
    }
    return meilleur;
}
