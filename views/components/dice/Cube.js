import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

function faceIndex(nx, ny, nz) {
    const ax = Math.abs(nx), ay = Math.abs(ny), az = Math.abs(nz);
    if (ax >= ay && ax >= az) return nx > 0 ? 0 : 1;
    if (ay >= az) return ny > 0 ? 2 : 3;
    return nz > 0 ? 4 : 5;
}

export default class Cube {
    constructor(size, R) {
        this.R = R;
        this.materials = new Map();
        this.geometry = new RoundedBoxGeometry(size, size, size, 4, size * R.arrondi);
        this.assignGroups();
        this.mesh = new THREE.Mesh(this.geometry, []);
    }

    assignGroups() {
        const g = this.geometry, nor = g.attributes.normal, idx = g.index;
        const tris = idx ? idx.count / 3 : g.attributes.position.count / 3;
        g.clearGroups();
        for (let t = 0; t < tris; t++) {
            const vi = idx ? idx.getX(t * 3) : t * 3;
            g.addGroup(t * 3, 3, faceIndex(nor.getX(vi), nor.getY(vi), nor.getZ(vi)));
        }
    }

    material(couleur) {
        if (this.materials.has(couleur)) return this.materials.get(couleur);
        const c = document.createElement("canvas");
        c.width = c.height = 512;
        const x = c.getContext("2d");
        x.fillStyle = "#F7F5F2";
        x.fillRect(0, 0, 512, 512);
        x.fillStyle = couleur;
        x.beginPath();
        x.arc(256, 256, 256 * this.R.cercle, 0, Math.PI * 2);
        x.fill();
        const map = new THREE.CanvasTexture(c);
        map.colorSpace = THREE.SRGBColorSpace;
        map.anisotropy = 8;
        const m = new THREE.MeshStandardMaterial({ map, roughness: this.R.rugosite, metalness: 0 });
        this.materials.set(couleur, m);
        return m;
    }

    setFaces(colors) {
        this.mesh.material = colors.map((hex) => this.material(hex));
    }

    swapFace(i, hex) {
        this.mesh.material[i] = this.material(hex);
    }

    dispose() {
        this.geometry.dispose();
        this.materials.forEach((m) => { m.map?.dispose(); m.dispose(); });
    }
}
