import{g as Pc}from"./Smooth.C0RLnbHD.js";import{m as Lc}from"./motion.DVPkStEZ.js";import"./all.Bmp6iNDN.js";import"./CSSPlugin.C_ssCjSB.js";import"./ScrollTrigger.Cv03IO65.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="186",Ic=0,po=1,Nc=2,Gs=1,Dc=2,Qi=3,oi=0,Bt=1,Pn=2,In=0,es=1,mo=2,go=3,_o=4,Uc=5,Ci=100,Fc=101,Oc=102,Bc=103,zc=104,Gc=200,Vc=201,Hc=202,kc=203,Cl=204,Pl=205,Wc=206,Xc=207,qc=208,Yc=209,Kc=210,$c=211,Zc=212,Jc=213,Qc=214,Xr=0,qr=1,Yr=2,ns=3,Kr=4,$r=5,Zr=6,Jr=7,Ll=0,jc=1,eh=2,gn=0,Il=1,Nl=2,Dl=3,Ul=4,Fl=5,Ol=6,Bl=7,zl=300,li=301,Ni=302,ar=303,or=304,er=306,Qr=1e3,Ln=1001,jr=1002,Tt=1003,th=1004,ds=1005,Lt=1006,lr=1007,si=1008,kt=1009,Gl=1010,Vl=1011,is=1012,Da=1013,_n=1014,pn=1015,vn=1016,Ua=1017,Fa=1018,ss=1020,Hl=35902,kl=35899,Wl=1021,Xl=1022,tn=1023,Fn=1026,ri=1027,ql=1028,Oa=1029,ci=1030,Ba=1031,za=1033,Vs=33776,Hs=33777,ks=33778,Ws=33779,ea=35840,ta=35841,na=35842,ia=35843,sa=36196,ra=37492,aa=37496,oa=37488,la=37489,qs=37490,ca=37491,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,_a=37815,va=37816,xa=37817,Ma=37818,Sa=37819,ya=37820,Ea=37821,ba=36492,wa=36494,Ta=36495,Aa=36283,Ra=36284,Ys=36285,Ca=36286,nh=3200,Pa=0,ih=1,Kn="",Vt="srgb",Ks="srgb-linear",$s="linear",tt="srgb",cr=7680,sh=519,rh=512,ah=513,oh=514,Ga=515,lh=516,ch=517,Va=518,hh=519,uh=35044,vo="300 es",mn=2e3,rs=2001;function dh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Zs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fh(){const r=Zs("canvas");return r.style.display="block",r}const xo={};function Mo(...r){const e="THREE."+r.shift();console.log(e,...r)}function Yl(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Le(...r){r=Yl(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ze(...r){r=Yl(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Li(...r){const e=r.join(" ");e in xo||(xo[e]=!0,Le(...r))}function ph(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const mh={[Xr]:qr,[Yr]:Zr,[Kr]:Jr,[ns]:$r,[qr]:Xr,[Zr]:Yr,[Jr]:Kr,[$r]:ns};class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hr=Math.PI/180,Js=180/Math.PI;function os(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[r&255]+Ct[r>>8&255]+Ct[r>>16&255]+Ct[r>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function We(r,e,t){return Math.max(e,Math.min(t,r))}function gh(r,e){return(r%e+e)%e}function ur(r,e,t){return(1-t)*r+t*e}function Gi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Qa=class Qa{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qa.prototype.isVector2=!0;let Xe=Qa,xn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||c!==h||l!==p||u!==g){let m=c*h+l*p+u*g+d*_;m<0&&(h=-h,p=-p,g=-g,_=-_,m=-m);let f=1-o;if(m<.9995){const v=Math.acos(m),T=Math.sin(v);f=Math.sin(f*v)/T,o=Math.sin(o*v)/T,c=c*f+h*o,l=l*f+p*o,u=u*f+g*o,d=d*f+_*o}else{c=c*f+h*o,l=l*f+p*o,u=u*f+g*o,d=d*f+_*o;const v=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=v,l*=v,u*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*d+c*p-l*h,e[t+1]=c*g+u*h+l*d-o*p,e[t+2]=l*g+u*p+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),d=o(s/2),h=c(n/2),p=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};const ja=class ja{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(So.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(So.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-s*d,this.z=i+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dr.copy(this).projectOnVector(e),this.sub(dr)}reflect(e){return this.sub(dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ja.prototype.isVector3=!0;let X=ja;const dr=new X,So=new xn,eo=class eo{constructor(e,t,n,i,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],v=i[1],T=i[4],S=i[7],b=i[2],w=i[5],R=i[8];return s[0]=a*_+o*v+c*b,s[3]=a*m+o*T+c*w,s[6]=a*f+o*S+c*R,s[1]=l*_+u*v+d*b,s[4]=l*m+u*T+d*w,s[7]=l*f+u*S+d*R,s[2]=h*_+p*v+g*b,s[5]=h*m+p*T+g*w,s[8]=h*f+p*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*s,p=l*s-a*c,g=t*d+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*l-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Li("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fr.makeScale(e,t)),this}rotate(e){return Li("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fr.makeRotation(-e)),this}translate(e,t){return Li("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};eo.prototype.isMatrix3=!0;let Ne=eo;const fr=new Ne,yo=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eo=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _h(){const r={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(i.r=Nn(i.r),i.g=Nn(i.g),i.b=Nn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Kn?$s:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Li("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Li("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ks]:{primaries:e,whitePoint:n,transfer:$s,toXYZ:yo,fromXYZ:Eo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:yo,fromXYZ:Eo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),r}const ke=_h();function Nn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ii(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fi;class vh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fi===void 0&&(fi=Zs("canvas")),fi.width=e.width,fi.height=e.height;const i=fi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Nn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nn(t[n]/255)*255):t[n]=Nn(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xh=0;class Ha{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=os(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(pr(i[a].image)):s.push(pr(i[a]))}else s=pr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function pr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let Mh=0;const mr=new X;class It extends hi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Ln,i=Ln,s=Lt,a=si,o=tn,c=kt,l=It.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=os(),this.name="",this.source=new Ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mr).x}get height(){return this.source.getSize(mr).y}get depth(){return this.source.getSize(mr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=zl;It.DEFAULT_ANISOTROPY=1;const to=class to{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,S=(p+1)/2,b=(f+1)/2,w=(u+h)/4,R=(d+_)/4,M=(g+m)/4;return T>S&&T>b?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=w/n,s=R/n):S>b?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=M/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=R/s,i=M/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};to.prototype.isVector4=!0;let ut=to;class Sh extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new It(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ha(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends Sh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kl extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yh extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const js=class js{constructor(e,t,n,i,s,a,o,c,l,u,d,h,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,u,d,h,p,g,_,m)}set(e,t,n,i,s,a,o,c,l,u,d,h,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new js().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/pi.setFromMatrixColumn(e,0).length(),s=1/pi.setFromMatrixColumn(e,1).length(),a=1/pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=h-_*l,t[9]=-o*c,t[2]=_-h*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,p=c*d,g=l*u,_=l*d;t[0]=h+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,p=c*d,g=l*u,_=l*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,p=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=a*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eh,e,bh)}lookAt(e,t,n){const i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Vn.crossVectors(n,zt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Vn.crossVectors(n,zt)),Vn.normalize(),fs.crossVectors(zt,Vn),i[0]=Vn.x,i[4]=fs.x,i[8]=zt.x,i[1]=Vn.y,i[5]=fs.y,i[9]=zt.y,i[2]=Vn.z,i[6]=fs.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],T=n[7],S=n[11],b=n[15],w=i[0],R=i[4],M=i[8],A=i[12],L=i[1],D=i[5],z=i[9],I=i[13],P=i[2],N=i[6],U=i[10],V=i[14],q=i[3],G=i[7],$=i[11],Z=i[15];return s[0]=a*w+o*L+c*P+l*q,s[4]=a*R+o*D+c*N+l*G,s[8]=a*M+o*z+c*U+l*$,s[12]=a*A+o*I+c*V+l*Z,s[1]=u*w+d*L+h*P+p*q,s[5]=u*R+d*D+h*N+p*G,s[9]=u*M+d*z+h*U+p*$,s[13]=u*A+d*I+h*V+p*Z,s[2]=g*w+_*L+m*P+f*q,s[6]=g*R+_*D+m*N+f*G,s[10]=g*M+_*z+m*U+f*$,s[14]=g*A+_*I+m*V+f*Z,s[3]=v*w+T*L+S*P+b*q,s[7]=v*R+T*D+S*N+b*G,s[11]=v*M+T*z+S*U+b*$,s[15]=v*A+T*I+S*V+b*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15],v=c*p-l*h,T=o*p-l*d,S=o*h-c*d,b=a*p-l*u,w=a*h-c*u,R=a*d-o*u;return t*(_*v-m*T+f*S)-n*(g*v-m*b+f*w)+i*(g*T-_*b+f*R)-s*(g*S-_*w+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+i*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=t*o-n*a,T=t*c-i*a,S=t*l-s*a,b=n*c-i*o,w=n*l-s*o,R=i*l-s*c,M=u*_-d*g,A=u*m-h*g,L=u*f-p*g,D=d*m-h*_,z=d*f-p*_,I=h*f-p*m,P=v*I-T*z+S*D+b*L-w*A+R*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return e[0]=(o*I-c*z+l*D)*N,e[1]=(i*z-n*I-s*D)*N,e[2]=(_*R-m*w+f*b)*N,e[3]=(h*w-d*R-p*b)*N,e[4]=(c*L-a*I-l*A)*N,e[5]=(t*I-i*L+s*A)*N,e[6]=(m*S-g*R-f*T)*N,e[7]=(u*R-h*S+p*T)*N,e[8]=(a*z-o*L+l*M)*N,e[9]=(n*L-t*z-s*M)*N,e[10]=(g*w-_*S+f*v)*N,e[11]=(d*S-u*w-p*v)*N,e[12]=(o*A-a*D-c*M)*N,e[13]=(t*D-n*A+i*M)*N,e[14]=(_*T-g*b-m*v)*N,e[15]=(u*b-d*T+h*v)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,h=s*l,p=s*u,g=s*d,_=a*u,m=a*d,f=o*d,v=c*l,T=c*u,S=c*d,b=n.x,w=n.y,R=n.z;return i[0]=(1-(_+f))*b,i[1]=(p+S)*b,i[2]=(g-T)*b,i[3]=0,i[4]=(p-S)*w,i[5]=(1-(h+f))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(g+T)*R,i[9]=(m-v)*R,i[10]=(1-(h+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=pi.set(i[0],i[1],i[2]).length();const o=pi.set(i[4],i[5],i[6]).length(),c=pi.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Zt.copy(this);const l=1/a,u=1/o,d=1/c;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=d,Zt.elements[9]*=d,Zt.elements[10]*=d,t.setFromRotationMatrix(Zt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,a,o=mn,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),p=(n+i)/(n-i);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===mn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===rs)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=mn,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),p=-(n+i)/(n-i);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===mn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===rs)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};js.prototype.isMatrix4=!0;let dt=js;const pi=new X,Zt=new dt,Eh=new X(0,0,0),bh=new X(1,1,1),Vn=new X,fs=new X,zt=new X,bo=new dt,wo=new xn;class $n{constructor(e=0,t=0,n=0,i=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],d=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wo.setFromEuler(this),this.setFromQuaternion(wo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class $l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wh=0;const To=new X,mi=new xn,Mn=new dt,ps=new X,Vi=new X,Th=new X,Ah=new xn,Ao=new X(1,0,0),Ro=new X(0,1,0),Co=new X(0,0,1),Po={type:"added"},Rh={type:"removed"},gi={type:"childadded",child:null},gr={type:"childremoved",child:null};class St extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new X,t=new $n,n=new xn,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ne}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(Ao,e)}rotateY(e){return this.rotateOnAxis(Ro,e)}rotateZ(e){return this.rotateOnAxis(Co,e)}translateOnAxis(e,t){return To.copy(e).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ao,e)}translateY(e){return this.translateOnAxis(Ro,e)}translateZ(e){return this.translateOnAxis(Co,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ps.copy(e):ps.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Vi,ps,this.up):Mn.lookAt(ps,Vi,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),mi.setFromRotationMatrix(Mn),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Po),gi.child=e,this.dispatchEvent(gi),gi.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rh),gr.child=e,this.dispatchEvent(gr),gr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Po),gi.child=e,this.dispatchEvent(gi),gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,Th),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,Ah,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}St.DEFAULT_UP=new X(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ms extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ch={type:"move"};class _r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ch)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},gs={h:0,s:0,l:0};function vr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ke.workingColorSpace){if(e=gh(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=vr(a,s,e+1/3),this.g=vr(a,s,e),this.b=vr(a,s,e-1/3)}return ke.colorSpaceToWorking(this,i),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Zl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ke.workingToColorSpace(Pt.copy(this),e),Math.round(We(Pt.r*255,0,255))*65536+Math.round(We(Pt.g*255,0,255))*256+Math.round(We(Pt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(Pt.copy(this),t);const n=Pt.r,i=Pt.g,s=Pt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Vt){ke.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,i=Pt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(gs);const n=ur(Hn.h,gs.h,t),i=ur(Hn.s,gs.s,t),s=ur(Hn.l,gs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Ye;Ye.NAMES=Zl;class Ph extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Jt=new X,Sn=new X,xr=new X,yn=new X,_i=new X,vi=new X,Lo=new X,Mr=new X,Sr=new X,yr=new X,Er=new ut,br=new ut,wr=new ut;class en{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Jt.subVectors(e,t),i.cross(Jt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Jt.subVectors(i,t),Sn.subVectors(n,t),xr.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(Sn),c=Jt.dot(xr),l=Sn.dot(Sn),u=Sn.dot(xr),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yn.x),c.addScaledVector(a,yn.y),c.addScaledVector(o,yn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return Er.setScalar(0),br.setScalar(0),wr.setScalar(0),Er.fromBufferAttribute(e,t),br.fromBufferAttribute(e,n),wr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Er,s.x),a.addScaledVector(br,s.y),a.addScaledVector(wr,s.z),a}static isFrontFacing(e,t,n,i){return Jt.subVectors(n,t),Sn.subVectors(e,t),Jt.cross(Sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),Jt.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return en.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;_i.subVectors(i,n),vi.subVectors(s,n),Mr.subVectors(e,n);const c=_i.dot(Mr),l=vi.dot(Mr);if(c<=0&&l<=0)return t.copy(n);Sr.subVectors(e,i);const u=_i.dot(Sr),d=vi.dot(Sr);if(u>=0&&d<=u)return t.copy(i);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(_i,a);yr.subVectors(e,s);const p=_i.dot(yr),g=vi.dot(yr);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(vi,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Lo.subVectors(s,i),o=(d-u)/(d-u+(p-g)),t.copy(i).addScaledVector(Lo,o);const f=1/(m+_+h);return a=_*f,o=h*f,t.copy(n).addScaledVector(_i,a).addScaledVector(vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Oi{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(s,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_s.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_s.copy(n.boundingBox)),_s.applyMatrix4(e.matrixWorld),this.union(_s)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),vs.subVectors(this.max,Hi),xi.subVectors(e.a,Hi),Mi.subVectors(e.b,Hi),Si.subVectors(e.c,Hi),kn.subVectors(Mi,xi),Wn.subVectors(Si,Mi),Jn.subVectors(xi,Si);let t=[0,-kn.z,kn.y,0,-Wn.z,Wn.y,0,-Jn.z,Jn.y,kn.z,0,-kn.x,Wn.z,0,-Wn.x,Jn.z,0,-Jn.x,-kn.y,kn.x,0,-Wn.y,Wn.x,0,-Jn.y,Jn.x,0];return!Tr(t,xi,Mi,Si,vs)||(t=[1,0,0,0,1,0,0,0,1],!Tr(t,xi,Mi,Si,vs))?!1:(xs.crossVectors(kn,Wn),t=[xs.x,xs.y,xs.z],Tr(t,xi,Mi,Si,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const En=[new X,new X,new X,new X,new X,new X,new X,new X],Qt=new X,_s=new Oi,xi=new X,Mi=new X,Si=new X,kn=new X,Wn=new X,Jn=new X,Hi=new X,vs=new X,xs=new X,Qn=new X;function Tr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Qn.fromArray(r,s);const o=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),c=e.dot(Qn),l=t.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const gt=new X,Ms=new Xe;let Lh=0;class Dn extends hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix3(e),this.setXY(t,Ms.x,Ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Jl extends Dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ql extends Dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Un extends Dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ih=new Oi,ki=new X,Ar=new X;class ka{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ih.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ki,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(Ar)),this.expandByPoint(ki.copy(e.center).sub(Ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Nh=0;const qt=new dt,Rr=new St,yi=new X,Gt=new Oi,Wi=new Oi,wt=new X;class On extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dh(e)?Ql:Jl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Rr.lookAt(e),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Un(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Gt.min,Wi.min),Gt.expandByPoint(wt),wt.addVectors(Gt.max,Wi.max),Gt.expandByPoint(wt)):(Gt.expandByPoint(Wi.min),Gt.expandByPoint(Wi.max))}Gt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)wt.fromBufferAttribute(o,l),c&&(yi.fromBufferAttribute(e,l),wt.add(yi)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Dn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let M=0;M<n.count;M++)o[M]=new X,c[M]=new X;const l=new X,u=new X,d=new X,h=new Xe,p=new Xe,g=new Xe,_=new X,m=new X;function f(M,A,L){l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,L),h.fromBufferAttribute(s,M),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,L),u.sub(l),d.sub(l),p.sub(h),g.sub(h);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),o[M].add(_),o[A].add(_),o[L].add(_),c[M].add(m),c[A].add(m),c[L].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let M=0,A=v.length;M<A;++M){const L=v[M],D=L.start,z=L.count;for(let I=D,P=D+z;I<P;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const T=new X,S=new X,b=new X,w=new X;function R(M){b.fromBufferAttribute(i,M),w.copy(b);const A=o[M];T.copy(A),T.sub(b.multiplyScalar(b.dot(A))).normalize(),S.crossVectors(w,A);const D=S.dot(c[M])<0?-1:1;a.setXYZW(M,T.x,T.y,T.z,D)}for(let M=0,A=v.length;M<A;++M){const L=v[M],D=L.start,z=L.count;for(let I=D,P=D+z;I<P;I+=3)R(e.getX(I+0)),R(e.getX(I+1)),R(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new X,s=new X,a=new X,o=new X,c=new X,l=new X,u=new X,d=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let f=0;f<u;f++)h[g++]=l[p++]}return new Dn(h,u,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new On,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cr=new X,Dh=new X,Uh=new Ne;let Yn=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Cr.subVectors(n,t).cross(Dh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Cr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Uh.getNormalMatrix(e),i=this.coplanarPoint(Cr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Fh=0,ls=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=os(),this.name="",this.type="Material",this.blending=es,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Pl,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const bn=new X,Pr=new X,Ss=new X,ys=new X;let Oh=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pr.copy(e).add(t).multiplyScalar(.5),Ss.copy(t).sub(e).normalize(),ys.copy(this.origin).sub(Pr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ss),o=ys.dot(this.direction),c=-ys.dot(Ss),l=ys.lengthSq(),u=Math.abs(1-a*a);let d,h,p,g;if(u>0)if(d=a*c-o,h=a*o-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,p=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Pr).addScaledVector(Ss,h),p}intersectSphere(e,t){if(e.radius<0)return null;bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,p=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,f=n.x-a.x,v=n.y-a.y,T=n.z-a.z,S=Math.abs(c),b=Math.abs(l),w=Math.abs(u);let R,M,A,L,D,z,I,P,N,U,V,q;if(S>=b&&S>=w?(A=c,z=d,N=g,q=f,c>=0?(R=l,M=u,L=h,D=p,I=_,P=m,U=v,V=T):(R=u,M=l,L=p,D=h,I=m,P=_,U=T,V=v)):b>=w?(A=l,z=h,N=_,q=v,l>=0?(R=u,M=c,L=p,D=d,I=m,P=g,U=T,V=f):(R=c,M=u,L=d,D=p,I=g,P=m,U=f,V=T)):(A=u,z=p,N=m,q=T,u>=0?(R=c,M=l,L=d,D=h,I=g,P=_,U=f,V=v):(R=l,M=c,L=h,D=d,I=_,P=g,U=v,V=f)),A===0)return null;const G=R/A,$=M/A,Z=1/A,ie=L-G*z,ge=D-$*z,qe=I-G*N,Oe=P-$*N,He=U-G*q,J=V-$*q,ne=He*Oe-J*qe,Me=ie*J-ge*He,Ie=qe*ge-Oe*ie;if(i){if(ne<0||Me<0||Ie<0)return null}else if((ne<0||Me<0||Ie<0)&&(ne>0||Me>0||Ie>0))return null;const ve=ne+Me+Ie;if(ve===0)return null;const Be=Z*(ne*z+Me*N+Ie*q);return(ve>0?Be<0:Be>0)?null:this.at(Be/ve,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Wa extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Io=new dt,jn=new Oh,Es=new ka,No=new X,bs=new X,ws=new X,Ts=new X,Lr=new X,As=new X,Do=new X,Rs=new X;class Kt extends St{constructor(e=new On,t=new Wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){As.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(Lr.fromBufferAttribute(d,e),a?As.addScaledVector(Lr,u):As.addScaledVector(Lr.sub(t),u))}t.add(As)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(s),jn.copy(e.ray).recast(e.near),!(Es.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Es,No)===null||jn.origin.distanceToSquared(No)>(e.far-e.near)**2))&&(Io.copy(s).invert(),jn.copy(e.ray).applyMatrix4(Io),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,b=T;S<b;S+=3){const w=o.getX(S),R=o.getX(S+1),M=o.getX(S+2);i=Cs(this,f,e,n,l,u,d,w,R,M),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);i=Cs(this,a,e,n,l,u,d,v,T,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,b=T;S<b;S+=3){const w=S,R=S+1,M=S+2;i=Cs(this,f,e,n,l,u,d,w,R,M),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,T=m+1,S=m+2;i=Cs(this,a,e,n,l,u,d,v,T,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Bh(r,e,t,n,i,s,a,o){let c;if(e.side===Bt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===oi,o),c===null)return null;Rs.copy(o),Rs.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Rs);return l<t.near||l>t.far?null:{distance:l,point:Rs.clone(),object:r}}function Cs(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,bs),r.getVertexPosition(c,ws),r.getVertexPosition(l,Ts);const u=Bh(r,e,t,n,bs,ws,Ts,Do);if(u){const d=new X;en.getBarycoord(Do,bs,ws,Ts,d),i&&(u.uv=en.getInterpolatedAttribute(i,o,c,l,d,new Xe)),s&&(u.uv1=en.getInterpolatedAttribute(s,o,c,l,d,new Xe)),a&&(u.normal=en.getInterpolatedAttribute(a,o,c,l,d,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new X,materialIndex:0};en.getNormal(bs,ws,Ts,h.normal),u.face=h,u.barycoord=d}return u}class zh extends It{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Tt,u=Tt,d,h){super(null,a,o,c,l,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ei=new ka,Gh=new Xe(.5,.5),Ps=new X;class Xa{constructor(e=new Yn,t=new Yn,n=new Yn,i=new Yn,s=new Yn,a=new Yn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],p=s[7],g=s[8],_=s[9],m=s[10],f=s[11],v=s[12],T=s[13],S=s[14],b=s[15];if(i[0].setComponents(l-a,p-u,f-g,b-v).normalize(),i[1].setComponents(l+a,p+u,f+g,b+v).normalize(),i[2].setComponents(l+o,p+d,f+_,b+T).normalize(),i[3].setComponents(l-o,p-d,f-_,b-T).normalize(),n)i[4].setComponents(c,h,m,S).normalize(),i[5].setComponents(l-c,p-h,f-m,b-S).normalize();else if(i[4].setComponents(l-c,p-h,f-m,b-S).normalize(),t===mn)i[5].setComponents(l+c,p+h,f+m,b+S).normalize();else if(t===rs)i[5].setComponents(c,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);const t=Gh.distanceTo(e.center);return ei.radius=.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ps.x=i.normal.x>0?e.max.x:e.min.x,Ps.y=i.normal.y>0?e.max.y:e.min.y,Ps.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jl extends It{constructor(e=[],t=li,n,i,s,a,o,c,l,u){super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ec extends It{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class as extends It{constructor(e,t,n=_n,i,s,a,o=Tt,c=Tt,l,u=Fn,d=1){if(u!==Fn&&u!==ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ha(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Vh extends as{constructor(e,t=_n,n=li,i,s,a=Tt,o=Tt,c,l=Fn){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tc extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bi extends On{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Un(l,3)),this.setAttribute("normal",new Un(u,3)),this.setAttribute("uv",new Un(d,2));function g(_,m,f,v,T,S,b,w,R,M,A){const L=S/R,D=b/M,z=S/2,I=b/2,P=w/2,N=R+1,U=M+1;let V=0,q=0;const G=new X;for(let $=0;$<U;$++){const Z=$*D-I;for(let ie=0;ie<N;ie++){const ge=ie*L-z;G[_]=ge*v,G[m]=Z*T,G[f]=P,l.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[f]=w>0?1:-1,u.push(G.x,G.y,G.z),d.push(ie/R),d.push(1-$/M),V+=1}}for(let $=0;$<M;$++)for(let Z=0;Z<R;Z++){const ie=h+Z+N*$,ge=h+Z+N*($+1),qe=h+(Z+1)+N*($+1),Oe=h+(Z+1)+N*$;c.push(ie,ge,Oe),c.push(ge,qe,Oe),q+=6}o.addGroup(p,q,A),p+=q,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Di extends On{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,d=e/o,h=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const v=f*h-a;for(let T=0;T<l;T++){const S=T*d-s;g.push(S,-v,0),_.push(0,0,1),m.push(T/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<o;v++){const T=v+l*f,S=v+l*(f+1),b=v+1+l*(f+1),w=v+1+l*f;p.push(T,S,w),p.push(S,b,w)}this.setIndex(p),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ui(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(Uo(i))i.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Uo(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Dt(r){const e={};for(let t=0;t<r.length;t++){const n=Ui(r[t]);for(const i in n)e[i]=n[i]}return e}function Uo(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Hh(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function nc(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const kh={clone:Ui,merge:Dt};var Wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wh,this.fragmentShader=Xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Hh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ye().setHex(i.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new X().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(i.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class qh extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yh extends ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kh extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $h extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qa extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Zh extends qa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ir=new dt,Fo=new X,Oo=new X;class ic{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=kt,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Fo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fo),Oo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Ir.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ir,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;e.coordinateSystem===rs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Ir)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ls=new X,Is=new xn,ln=new X;class sc extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ls,Is,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ls,Is,ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ls,Is,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ls,Is,ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new X,Bo=new Xe,zo=new Xe;class Ht extends sc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Bo,zo),t.subVectors(zo,Bo)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Jh extends ic{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Js*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Qh extends qa{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Jh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Ya extends sc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jh extends ic{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eu extends qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new jh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ei=-90,bi=1;class tu extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(Ei,bi,e,t);i.layers=this.layers,this.add(i);const s=new Ht(Ei,bi,e,t);s.layers=this.layers,this.add(s);const a=new Ht(Ei,bi,e,t);a.layers=this.layers,this.add(a);const o=new Ht(Ei,bi,e,t);o.layers=this.layers,this.add(o);const c=new Ht(Ei,bi,e,t);c.layers=this.layers,this.add(c);const l=new Ht(Ei,bi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nu extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const no=class no{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};no.prototype.isMatrix2=!0;let Go=no;function Vo(r,e,t,n){const i=iu(n);switch(t){case Wl:return r*e;case ql:return r*e/i.components*i.byteLength;case Oa:return r*e/i.components*i.byteLength;case ci:return r*e*2/i.components*i.byteLength;case Ba:return r*e*2/i.components*i.byteLength;case Xl:return r*e*3/i.components*i.byteLength;case tn:return r*e*4/i.components*i.byteLength;case za:return r*e*4/i.components*i.byteLength;case Vs:case Hs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ks:case Ws:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ta:case ia:return Math.max(r,16)*Math.max(e,8)/4;case ea:case na:return Math.max(r,8)*Math.max(e,8)/2;case sa:case ra:case oa:case la:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case aa:case qs:case ca:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case da:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case fa:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case pa:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ma:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ga:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case _a:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case va:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case xa:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Sa:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ya:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ea:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ba:case wa:case Ta:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Aa:case Ra:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ys:case Ca:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iu(r){switch(r){case kt:case Gl:return{byteLength:1,components:1};case is:case Vl:case vn:return{byteLength:2,components:1};case Ua:case Fa:return{byteLength:2,components:4};case _n:case Da:case pn:return{byteLength:4,components:1};case Hl:case kl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rc(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function su(r){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=r.createBuffer();r.bindBuffer(c,h),r.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c.updateRanges;if(r.bindBuffer(l,o),d.length===0)r.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];r.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,au=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_u=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Au=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ru=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Lu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Du=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ou=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ku=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ku=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ju=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Qu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ju=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,id=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ad=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,od=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,md=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Rd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ef=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const af=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,of=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ff=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ef=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Af=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ff=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:ru,alphahash_pars_fragment:au,alphamap_fragment:ou,alphamap_pars_fragment:lu,alphatest_fragment:cu,alphatest_pars_fragment:hu,aomap_fragment:uu,aomap_pars_fragment:du,batching_pars_vertex:fu,batching_vertex:pu,begin_vertex:mu,beginnormal_vertex:gu,bsdfs:_u,iridescence_fragment:vu,bumpmap_pars_fragment:xu,clipping_planes_fragment:Mu,clipping_planes_pars_fragment:Su,clipping_planes_pars_vertex:yu,clipping_planes_vertex:Eu,color_fragment:bu,color_pars_fragment:wu,color_pars_vertex:Tu,color_vertex:Au,common:Ru,cube_uv_reflection_fragment:Cu,defaultnormal_vertex:Pu,displacementmap_pars_vertex:Lu,displacementmap_vertex:Iu,emissivemap_fragment:Nu,emissivemap_pars_fragment:Du,colorspace_fragment:Uu,colorspace_pars_fragment:Fu,envmap_fragment:Ou,envmap_common_pars_fragment:Bu,envmap_pars_fragment:zu,envmap_pars_vertex:Gu,envmap_physical_pars_fragment:Ju,envmap_vertex:Vu,fog_vertex:Hu,fog_pars_vertex:ku,fog_fragment:Wu,fog_pars_fragment:Xu,gradientmap_pars_fragment:qu,lightmap_pars_fragment:Yu,lights_lambert_fragment:Ku,lights_lambert_pars_fragment:$u,lights_pars_begin:Zu,lights_toon_fragment:Qu,lights_toon_pars_fragment:ju,lights_phong_fragment:ed,lights_phong_pars_fragment:td,lights_physical_fragment:nd,lights_physical_pars_fragment:id,lights_fragment_begin:sd,lights_fragment_maps:rd,lights_fragment_end:ad,lightprobes_pars_fragment:od,logdepthbuf_fragment:ld,logdepthbuf_pars_fragment:cd,logdepthbuf_pars_vertex:hd,logdepthbuf_vertex:ud,map_fragment:dd,map_pars_fragment:fd,map_particle_fragment:pd,map_particle_pars_fragment:md,metalnessmap_fragment:gd,metalnessmap_pars_fragment:_d,morphinstance_vertex:vd,morphcolor_vertex:xd,morphnormal_vertex:Md,morphtarget_pars_vertex:Sd,morphtarget_vertex:yd,normal_fragment_begin:Ed,normal_fragment_maps:bd,normal_pars_fragment:wd,normal_pars_vertex:Td,normal_vertex:Ad,normalmap_pars_fragment:Rd,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:Pd,clearcoat_pars_fragment:Ld,iridescence_pars_fragment:Id,opaque_fragment:Nd,packing:Dd,premultiplied_alpha_fragment:Ud,project_vertex:Fd,dithering_fragment:Od,dithering_pars_fragment:Bd,roughnessmap_fragment:zd,roughnessmap_pars_fragment:Gd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Hd,shadowmap_vertex:kd,shadowmask_pars_fragment:Wd,skinbase_vertex:Xd,skinning_pars_vertex:qd,skinning_vertex:Yd,skinnormal_vertex:Kd,specularmap_fragment:$d,specularmap_pars_fragment:Zd,tonemapping_fragment:Jd,tonemapping_pars_fragment:Qd,transmission_fragment:jd,transmission_pars_fragment:ef,uv_pars_fragment:tf,uv_pars_vertex:nf,uv_vertex:sf,worldpos_vertex:rf,background_vert:af,background_frag:of,backgroundCube_vert:lf,backgroundCube_frag:cf,cube_vert:hf,cube_frag:uf,depth_vert:df,depth_frag:ff,distance_vert:pf,distance_frag:mf,equirect_vert:gf,equirect_frag:_f,linedashed_vert:vf,linedashed_frag:xf,meshbasic_vert:Mf,meshbasic_frag:Sf,meshlambert_vert:yf,meshlambert_frag:Ef,meshmatcap_vert:bf,meshmatcap_frag:wf,meshnormal_vert:Tf,meshnormal_frag:Af,meshphong_vert:Rf,meshphong_frag:Cf,meshphysical_vert:Pf,meshphysical_frag:Lf,meshtoon_vert:If,meshtoon_frag:Nf,points_vert:Df,points_frag:Uf,shadow_vert:Ff,shadow_frag:Of,sprite_vert:Bf,sprite_frag:zf},de={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},fn={basic:{uniforms:Dt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Dt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Dt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Dt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Dt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Dt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Dt([de.points,de.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Dt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Dt([de.common,de.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Dt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Dt([de.sprite,de.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Dt([de.common,de.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Dt([de.lights,de.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};fn.physical={uniforms:Dt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Ns={r:0,b:0,g:0},Gf=new dt,ac=new Ne;ac.set(-1,0,0,0,1,0,0,0,1);function Vf(r,e,t,n,i,s){const a=new Ye(0);let o=i===!0?0:1,c,l,u=null,d=0,h=null;function p(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){const S=v.backgroundBlurriness>0;T=e.get(T,S)}return T}function g(v){let T=!1;const S=p(v);S===null?m(a,o):S&&S.isColor&&(m(S,1),T=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,T){const S=p(T);S&&(S.isCubeTexture||S.mapping===er)?(l===void 0&&(l=new Kt(new Bi(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Ui(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Gf.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ac),l.material.toneMapped=ke.getTransfer(S.colorSpace)!==tt,(u!==S||d!==S.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,h=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Kt(new Di(2,2),new rn({name:"BackgroundMaterial",uniforms:Ui(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ke.getTransfer(S.colorSpace)!==tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,h=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,T){v.getRGB(Ns,nc(r)),t.buffers.color.setClear(Ns.r,Ns.g,Ns.b,T,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:_,dispose:f}}function Hf(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(D,z,I,P,N){let U=!1;const V=d(D,P,I,z);s!==V&&(s=V,l(s.object)),U=p(D,P,I,N),U&&g(D,P,I,N),N!==null&&e.update(N,r.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,S(D,z,I,P),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return r.createVertexArray()}function l(D){return r.bindVertexArray(D)}function u(D){return r.deleteVertexArray(D)}function d(D,z,I,P){const N=P.wireframe===!0;let U=n[z.id];U===void 0&&(U={},n[z.id]=U);const V=D.isInstancedMesh===!0?D.id:0;let q=U[V];q===void 0&&(q={},U[V]=q);let G=q[I.id];G===void 0&&(G={},q[I.id]=G);let $=G[N];return $===void 0&&($=h(c()),G[N]=$),$}function h(D){const z=[],I=[],P=[];for(let N=0;N<t;N++)z[N]=0,I[N]=0,P[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:I,attributeDivisors:P,object:D,attributes:{},index:null}}function p(D,z,I,P){const N=s.attributes,U=z.attributes;let V=0;const q=I.getAttributes();for(const G in q)if(q[G].location>=0){const Z=N[G];let ie=U[G];if(ie===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),Z===void 0||Z.attribute!==ie||ie&&Z.data!==ie.data)return!0;V++}return s.attributesNum!==V||s.index!==P}function g(D,z,I,P){const N={},U=z.attributes;let V=0;const q=I.getAttributes();for(const G in q)if(q[G].location>=0){let Z=U[G];Z===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const ie={};ie.attribute=Z,Z&&Z.data&&(ie.data=Z.data),N[G]=ie,V++}s.attributes=N,s.attributesNum=V,s.index=P}function _(){const D=s.newAttributes;for(let z=0,I=D.length;z<I;z++)D[z]=0}function m(D){f(D,0)}function f(D,z){const I=s.newAttributes,P=s.enabledAttributes,N=s.attributeDivisors;I[D]=1,P[D]===0&&(r.enableVertexAttribArray(D),P[D]=1),N[D]!==z&&(r.vertexAttribDivisor(D,z),N[D]=z)}function v(){const D=s.newAttributes,z=s.enabledAttributes;for(let I=0,P=z.length;I<P;I++)z[I]!==D[I]&&(r.disableVertexAttribArray(I),z[I]=0)}function T(D,z,I,P,N,U,V){V===!0?r.vertexAttribIPointer(D,z,I,N,U):r.vertexAttribPointer(D,z,I,P,N,U)}function S(D,z,I,P){_();const N=P.attributes,U=I.getAttributes(),V=z.defaultAttributeValues;for(const q in U){const G=U[q];if(G.location>=0){let $=N[q];if($===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const Z=$.normalized,ie=$.itemSize,ge=e.get($);if(ge===void 0)continue;const qe=ge.buffer,Oe=ge.type,He=ge.bytesPerElement,J=Oe===r.INT||Oe===r.UNSIGNED_INT||$.gpuType===Da;if($.isInterleavedBufferAttribute){const ne=$.data,Me=ne.stride,Ie=$.offset;if(ne.isInstancedInterleavedBuffer){for(let ve=0;ve<G.locationSize;ve++)f(G.location+ve,ne.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ve=0;ve<G.locationSize;ve++)m(G.location+ve);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let ve=0;ve<G.locationSize;ve++)T(G.location+ve,ie/G.locationSize,Oe,Z,Me*He,(Ie+ie/G.locationSize*ve)*He,J)}else{if($.isInstancedBufferAttribute){for(let ne=0;ne<G.locationSize;ne++)f(G.location+ne,$.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ne=0;ne<G.locationSize;ne++)m(G.location+ne);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let ne=0;ne<G.locationSize;ne++)T(G.location+ne,ie/G.locationSize,Oe,Z,ie*He,ie/G.locationSize*ne*He,J)}}else if(V!==void 0){const Z=V[q];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(G.location,Z);break;case 3:r.vertexAttrib3fv(G.location,Z);break;case 4:r.vertexAttrib4fv(G.location,Z);break;default:r.vertexAttrib1fv(G.location,Z)}}}}v()}function b(){A();for(const D in n){const z=n[D];for(const I in z){const P=z[I];for(const N in P){const U=P[N];for(const V in U)u(U[V].object),delete U[V];delete P[N]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;const z=n[D.id];for(const I in z){const P=z[I];for(const N in P){const U=P[N];for(const V in U)u(U[V].object),delete U[V];delete P[N]}}delete n[D.id]}function R(D){for(const z in n){const I=n[z];for(const P in I){const N=I[P];if(N[D.id]===void 0)continue;const U=N[D.id];for(const V in U)u(U[V].object),delete U[V];delete N[D.id]}}}function M(D){for(const z in n){const I=n[z],P=D.isInstancedMesh===!0?D.id:0,N=I[P];if(N!==void 0){for(const U in N){const V=N[U];for(const q in V)u(V[q].object),delete V[q];delete N[U]}delete I[P],Object.keys(I).length===0&&delete n[z]}}}function A(){L(),a=!0,s!==i&&(s=i,l(s.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function kf(r,e,t){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(r.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Wf(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==tn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const M=R===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==kt&&R!==pn&&!M&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Le("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:S,maxSamples:b,samples:w}}function Xf(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Yn,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||i;return i=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const v=s?0:n,T=v*4;let S=f.clippingState||null;c.value=S,S=u(g,h,T,p);for(let b=0;b!==T;++b)S[b]=t[b];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,S=p;T!==_;++T,S+=4)a.copy(d[T]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Pi=4,qf=6,Yf=20,Kf=256,Xi=new Ya,Ho=new Ye;let Nr=null,Dr=0,Ur=0,Fr=!1;const $f=new X,ti=new X;class ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=$f}=s;Nr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nr,Dr,Ur),this._renderer.xr.enabled=Fr,e.scissorTest=!1,wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:vn,format:tn,colorSpace:Ks,depthBuffer:!1},i=Wo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wo(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zf(s)),this._blurMaterial=Qf(s,e,t),this._ggxMaterial=Jf(s,e,t)}return i}_compileMaterial(e){const t=new Kt(new On,e);this._renderer.compile(t,Xi)}_sceneToCubeUV(e,t,n,i,s){const c=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Ho),d.toneMapping=gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kt(new Bi,new Wa({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let f=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,f=!0):(m.color.copy(Ho),f=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):S===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));const b=this._cubeSize;wi(i,S*b,T>2?b:0,b,b),d.setRenderTarget(i),f&&d.render(_,c),d.render(e,c)}d.toneMapping=p,d.autoClear=h,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===li||e.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xo());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;wi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Xi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,p=d*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Pi?n-g+Pi:0),f=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,wi(s,m,f,3*_,2*_),i.setRenderTarget(s),i.render(o,Xi),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,wi(e,m,f,3*_,2*_),i.setRenderTarget(e),i.render(o,Xi)}_blur(e,t,n,i){const s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;const u=this._sizeLods[i],d=3*u*(i>this._lodMax-Pi?i-this._lodMax+Pi:0),h=4*(this._cubeSize-u);wi(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(c,Xi)}}function Zf(r){const e=[],t=[];let n=r;const i=r-Pi+1+qf;for(let s=0;s<i;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,p=3,g=new Float32Array(p*h*d),_=new Float32Array(p*h*d);for(let f=0;f<d;f++){const v=f%3*2/3-1,T=f>2?0:-1,S=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];g.set(S,p*h*f);for(let b=0;b<h;b++){const w=u[b*2]*2-1,R=u[b*2+1]*2-1;f===0?ti.set(1,R,w):f===1?ti.set(-w,1,-R):f===2?ti.set(-w,R,1):f===3?ti.set(-1,R,-w):f===4?ti.set(-w,-1,R):ti.set(w,R,-1),ti.toArray(_,(f*h+b)*p)}}const m=new On;m.setAttribute("position",new Dn(g,p)),m.setAttribute("outputDirection",new Dn(_,p)),t.push(new Kt(m,null)),n>Pi&&n--}return{lodMeshes:t,sizeLods:e}}function Wo(r,e,t){const n=new sn(r,e,t);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wi(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Jf(r,e,t){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Qf(r,e,t){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:Yf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Xo(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function qo(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function tr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class oc extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new jl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Bi(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:In});s.uniforms.tEquirect.value=t;const a=new Kt(i,s),o=t.minFilter;return t.minFilter===si&&(t.minFilter=Lt),new tu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function jf(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===ar||p===or)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new oc(g.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",l),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,g=p===ar||p===or,_=p===li||p===Ni;if(g||_){let m=t.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new ko(r)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return g&&v&&v.height>0||_&&v&&c(v)?(n===null&&(n=new ko(r)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===ar?h.mapping=li:p===or&&(h.mapping=Ni),h}function c(h){let p=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&p++;return p===g}function l(h){const p=h.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function ep(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Li("WebGLRenderer: "+n+" extension not supported."),i}}}function tp(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)e.update(h[p],r.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(p!==null){const v=p.array;_=p.version;for(let T=0,S=v.length;T<S;T+=3){const b=v[T+0],w=v[T+1],R=v[T+2];h.push(b,w,w,R,R,b)}}else{const v=g.array;_=g.version;for(let T=0,S=v.length/3-1;T<S;T+=3){const b=T+0,w=T+1,R=T+2;h.push(b,w,w,R,R,b)}}const m=new(g.count>=65535?Ql:Jl)(h,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function np(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function l(d,h,p){p!==0&&(r.drawElementsInstanced(n,h,s,d*a,p),t.update(h,n,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ip(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function sp(r,e,t){const n=new WeakMap,i=new ut;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let A=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let S=o.attributes.position.count*T,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*b*4*d),R=new Kl(w,S,b,d);R.type=pn,R.needsUpdate=!0;const M=T*4;for(let L=0;L<d;L++){const D=m[L],z=f[L],I=v[L],P=S*b*4*L;for(let N=0;N<D.count;N++){const U=N*M;p===!0&&(i.fromBufferAttribute(D,N),w[P+U+0]=i.x,w[P+U+1]=i.y,w[P+U+2]=i.z,w[P+U+3]=0),g===!0&&(i.fromBufferAttribute(z,N),w[P+U+4]=i.x,w[P+U+5]=i.y,w[P+U+6]=i.z,w[P+U+7]=0),_===!0&&(i.fromBufferAttribute(I,N),w[P+U+8]=i.x,w[P+U+9]=i.y,w[P+U+10]=i.z,w[P+U+11]=I.itemSize===4?i.w:1)}}h={count:d,texture:R,size:new Xe(S,b)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function rp(r,e,t,n,i){let s=new WeakMap;function a(l){const u=i.render.frame,d=l.geometry,h=e.get(l,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const ap={[Il]:"LINEAR_TONE_MAPPING",[Nl]:"REINHARD_TONE_MAPPING",[Dl]:"CINEON_TONE_MAPPING",[Ul]:"ACES_FILMIC_TONE_MAPPING",[Ol]:"AGX_TONE_MAPPING",[Bl]:"NEUTRAL_TONE_MAPPING",[Fl]:"CUSTOM_TONE_MAPPING"};function op(r,e,t,n,i,s){const a=new sn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new On;l.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Un([0,2,0,0,2,0],2));const u=new qh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Kt(l,u),h=new Ya(-1,1,1,-1,0,1);let p=null,g=null,_=!1,m,f=null,v=[],T=!1;this.setSize=function(S,b){a.setSize(S,b),o!==null&&o.setSize(S,b),c!==null&&c.setSize(S,b);for(let w=0;w<v.length;w++){const R=v[w];R.setSize&&R.setSize(S,b)}},this.setEffects=function(S){v=S,T=v.length>0&&v[0].isRenderPass===!0;const b=a.width,w=a.height;v.length>0&&o===null&&(o=new sn(b,w,{type:vn,depthBuffer:!1,stencilBuffer:!1}),c=new sn(b,w,{type:vn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){const M=v[R];M.setSize&&M.setSize(b,w)}},this.begin=function(S,b){if(_||S.toneMapping===gn&&v.length===0)return!1;if(f=b,b!==null){const w=b.width,R=b.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return T===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=gn,!0},this.hasRenderPass=function(){return T},this.end=function(S,b){S.toneMapping=m,_=!0;let w=a,R=o;for(let M=0;M<v.length;M++){const A=v[M];A.enabled!==!1&&(A.render(S,R,w,b),A.needsSwap!==!1&&(w=R,R=R===o?c:o))}if(p!==S.outputColorSpace||g!==S.toneMapping){p=S.outputColorSpace,g=S.toneMapping,u.defines={},ke.getTransfer(p)===tt&&(u.defines.SRGB_TRANSFER="");const M=ap[g];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(f),S.render(d,h),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const lc=new It,La=new as(1,1),cc=new Kl,hc=new yh,uc=new jl,Yo=[],Ko=[],$o=new Float32Array(16),Zo=new Float32Array(9),Jo=new Float32Array(4);function zi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Yo[i];if(s===void 0&&(s=new Float32Array(i),Yo[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Et(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function nr(r,e){let t=Ko[e];t===void 0&&(t=new Int32Array(e),Ko[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function lp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function cp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),Et(t,e)}}function hp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),Et(t,e)}}function up(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),Et(t,e)}}function dp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,n))return;Jo.set(n),r.uniformMatrix2fv(this.addr,!1,Jo),Et(t,n)}}function fp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,n))return;Zo.set(n),r.uniformMatrix3fv(this.addr,!1,Zo),Et(t,n)}}function pp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,n))return;$o.set(n),r.uniformMatrix4fv(this.addr,!1,$o),Et(t,n)}}function mp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function gp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2iv(this.addr,e),Et(t,e)}}function _p(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3iv(this.addr,e),Et(t,e)}}function vp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4iv(this.addr,e),Et(t,e)}}function xp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Mp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2uiv(this.addr,e),Et(t,e)}}function Sp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3uiv(this.addr,e),Et(t,e)}}function yp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4uiv(this.addr,e),Et(t,e)}}function Ep(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(La.compareFunction=t.isReversedDepthBuffer()?Va:Ga,s=La):s=lc,t.setTexture2D(e||s,i)}function bp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hc,i)}function wp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uc,i)}function Tp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cc,i)}function Ap(r){switch(r){case 5126:return lp;case 35664:return cp;case 35665:return hp;case 35666:return up;case 35674:return dp;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return gp;case 35668:case 35672:return _p;case 35669:case 35673:return vp;case 5125:return xp;case 36294:return Mp;case 36295:return Sp;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Tp}}function Rp(r,e){r.uniform1fv(this.addr,e)}function Cp(r,e){const t=zi(e,this.size,2);r.uniform2fv(this.addr,t)}function Pp(r,e){const t=zi(e,this.size,3);r.uniform3fv(this.addr,t)}function Lp(r,e){const t=zi(e,this.size,4);r.uniform4fv(this.addr,t)}function Ip(r,e){const t=zi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Np(r,e){const t=zi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Dp(r,e){const t=zi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Up(r,e){r.uniform1iv(this.addr,e)}function Fp(r,e){r.uniform2iv(this.addr,e)}function Op(r,e){r.uniform3iv(this.addr,e)}function Bp(r,e){r.uniform4iv(this.addr,e)}function zp(r,e){r.uniform1uiv(this.addr,e)}function Gp(r,e){r.uniform2uiv(this.addr,e)}function Vp(r,e){r.uniform3uiv(this.addr,e)}function Hp(r,e){r.uniform4uiv(this.addr,e)}function kp(r,e,t){const n=this.cache,i=e.length,s=nr(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=La:a=lc;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Wp(r,e,t){const n=this.cache,i=e.length,s=nr(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hc,s[a])}function Xp(r,e,t){const n=this.cache,i=e.length,s=nr(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||uc,s[a])}function qp(r,e,t){const n=this.cache,i=e.length,s=nr(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||cc,s[a])}function Yp(r){switch(r){case 5126:return Rp;case 35664:return Cp;case 35665:return Pp;case 35666:return Lp;case 35674:return Ip;case 35675:return Np;case 35676:return Dp;case 5124:case 35670:return Up;case 35667:case 35671:return Fp;case 35668:case 35672:return Op;case 35669:case 35673:return Bp;case 5125:return zp;case 36294:return Gp;case 36295:return Vp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return qp}}class Kp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ap(t.type)}}class $p{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yp(t.type)}}class Zp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function Qo(r,e){r.seq.push(e),r.map[e.id]=e}function Jp(r,e,t){const n=r.name,i=n.length;for(Or.lastIndex=0;;){const s=Or.exec(n),a=Or.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Qo(t,l===void 0?new Kp(o,r,e):new $p(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Zp(o),Qo(t,d)),t=d}}}class Xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Jp(o,c,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function jo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Qp=37297;let jp=0;function em(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const el=new Ne;function tm(r){ke._getMatrix(el,ke.workingColorSpace,r);const e=`mat3( ${el.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(r)){case $s:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function tl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+em(r.getShaderSource(e),o)}else return s}function nm(r,e){const t=tm(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const im={[Il]:"Linear",[Nl]:"Reinhard",[Dl]:"Cineon",[Ul]:"ACESFilmic",[Ol]:"AgX",[Bl]:"Neutral",[Fl]:"Custom"};function sm(r,e){const t=im[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ds=new X;function rm(){ke.getLuminanceCoefficients(Ds);const r=Ds.x.toFixed(4),e=Ds.y.toFixed(4),t=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function am(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function om(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lm(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ji(r){return r!==""}function nl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function il(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(r){return r.replace(cm,um)}const hm=new Map;function um(r,e){let t=Fe[e];if(t===void 0){const n=hm.get(e);if(n!==void 0)t=Fe[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ia(t)}const dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sl(r){return r.replace(dm,fm)}function fm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function rl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pm={[Gs]:"SHADOWMAP_TYPE_PCF",[Qi]:"SHADOWMAP_TYPE_VSM"};function mm(r){return pm[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gm={[li]:"ENVMAP_TYPE_CUBE",[Ni]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE_UV"};function _m(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":gm[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const vm={[Ni]:"ENVMAP_MODE_REFRACTION"};function xm(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":vm[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Mm={[Ll]:"ENVMAP_BLENDING_MULTIPLY",[jc]:"ENVMAP_BLENDING_MIX",[eh]:"ENVMAP_BLENDING_ADD"};function Sm(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Mm[r.combine]||"ENVMAP_BLENDING_NONE"}function ym(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Em(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=mm(t),l=_m(t),u=xm(t),d=Sm(t),h=ym(t),p=am(t),g=om(s),_=i.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ji).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ji).join(`
`),f.length>0&&(f+=`
`)):(m=[rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),f=[rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==gn?sm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,nm("linearToOutputTexel",t.outputColorSpace),rm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),a=Ia(a),a=nl(a,t),a=il(a,t),o=Ia(o),o=nl(o,t),o=il(o,t),a=sl(a),o=sl(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=v+m+a,S=v+f+o,b=jo(i,i.VERTEX_SHADER,T),w=jo(i,i.FRAGMENT_SHADER,S);i.attachShader(_,b),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(D){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(_)||"",I=i.getShaderInfoLog(b)||"",P=i.getShaderInfoLog(w)||"",N=z.trim(),U=I.trim(),V=P.trim();let q=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,w);else{const $=tl(i,b,"vertex"),Z=tl(i,w,"fragment");Ze("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+$+`
`+Z)}else N!==""?Le("WebGLProgram: Program Info Log:",N):(U===""||V==="")&&(G=!1);G&&(D.diagnostics={runnable:q,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:V,prefix:f}})}i.deleteShader(b),i.deleteShader(w),M=new Xs(i,_),A=lm(i,_)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(_,Qp)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let bm=0;class wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tm(e),t.set(e,n)),n}}class Tm{constructor(e){this.id=bm++,this.code=e,this.usedTimes=0}}function Am(r){return r===ci||r===qs||r===Ys}function Rm(r,e,t,n,i,s){const a=new $l,o=new wm,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function _(M,A,L,D,z,I){const P=D.fog,N=z.geometry,U=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,V=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,q=e.get(M.envMap||U,V),G=q&&q.mapping===er?q.image.height:null,$=p[M.type];M.precision!==null&&(h=n.getMaxPrecision(M.precision),h!==M.precision&&Le("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ie=Z!==void 0?Z.length:0;let ge=0;N.morphAttributes.position!==void 0&&(ge=1),N.morphAttributes.normal!==void 0&&(ge=2),N.morphAttributes.color!==void 0&&(ge=3);let qe,Oe,He,J;if($){const rt=fn[$];qe=rt.vertexShader,Oe=rt.fragmentShader}else{qe=M.vertexShader,Oe=M.fragmentShader;const rt=o.getVertexShaderStage(M),Qe=o.getFragmentShaderStage(M);o.update(M,rt,Qe),He=rt.id,J=Qe.id}const ne=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),Ie=z.isInstancedMesh===!0,ve=z.isBatchedMesh===!0,Be=!!M.map,xt=!!M.matcap,ze=!!q,$e=!!M.aoMap,st=!!M.lightMap,Ve=!!M.bumpMap&&M.wireframe===!1,ct=!!M.normalMap,bt=!!M.displacementMap,Ut=!!M.emissiveMap,ht=!!M.metalnessMap,pt=!!M.roughnessMap,B=M.anisotropy>0,At=M.clearcoat>0,et=M.dispersion>0,C=M.retroreflectivity>0,x=M.iridescence>0,H=M.sheen>0,Y=M.transmission>0,Q=B&&!!M.anisotropyMap,re=At&&!!M.clearcoatMap,ae=At&&!!M.clearcoatNormalMap,j=At&&!!M.clearcoatRoughnessMap,te=x&&!!M.iridescenceMap,oe=x&&!!M.iridescenceThicknessMap,Ae=H&&!!M.sheenColorMap,ue=H&&!!M.sheenRoughnessMap,le=!!M.specularMap,Re=!!M.specularColorMap,Pe=!!M.specularIntensityMap,De=Y&&!!M.transmissionMap,O=Y&&!!M.thicknessMap,ce=!!M.gradientMap,ee=!!M.alphaMap,he=M.alphaTest>0,me=!!M.alphaHash,se=!!M.extensions;let Ce=gn;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ce=r.toneMapping);const we={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:qe,fragmentShader:Oe,defines:M.defines,customVertexShaderID:He,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:ve,batchingColor:ve&&z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&z.instanceColor!==null,instancingMorph:Ie&&z.morphTexture!==null,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ke.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Be,matcap:xt,envMap:ze,envMapMode:ze&&q.mapping,envMapCubeUVHeight:G,aoMap:$e,lightMap:st,bumpMap:Ve,normalMap:ct,displacementMap:bt,emissiveMap:Ut,normalMapObjectSpace:ct&&M.normalMapType===ih,normalMapTangentSpace:ct&&M.normalMapType===Pa,packedNormalMap:ct&&M.normalMapType===Pa&&Am(M.normalMap.format),metalnessMap:ht,roughnessMap:pt,anisotropy:B,anisotropyMap:Q,clearcoat:At,clearcoatMap:re,clearcoatNormalMap:ae,clearcoatRoughnessMap:j,dispersion:et,retroreflection:C,iridescence:x,iridescenceMap:te,iridescenceThicknessMap:oe,sheen:H,sheenColorMap:Ae,sheenRoughnessMap:ue,specularMap:le,specularColorMap:Re,specularIntensityMap:Pe,transmission:Y,transmissionMap:De,thicknessMap:O,gradientMap:ce,opaque:M.transparent===!1&&M.blending===es&&M.alphaToCoverage===!1,alphaMap:ee,alphaTest:he,alphaHash:me,combine:M.combine,mapUv:Be&&g(M.map.channel),aoMapUv:$e&&g(M.aoMap.channel),lightMapUv:st&&g(M.lightMap.channel),bumpMapUv:Ve&&g(M.bumpMap.channel),normalMapUv:ct&&g(M.normalMap.channel),displacementMapUv:bt&&g(M.displacementMap.channel),emissiveMapUv:Ut&&g(M.emissiveMap.channel),metalnessMapUv:ht&&g(M.metalnessMap.channel),roughnessMapUv:pt&&g(M.roughnessMap.channel),anisotropyMapUv:Q&&g(M.anisotropyMap.channel),clearcoatMapUv:re&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ue&&g(M.sheenRoughnessMap.channel),specularMapUv:le&&g(M.specularMap.channel),specularColorMapUv:Re&&g(M.specularColorMap.channel),specularIntensityMapUv:Pe&&g(M.specularIntensityMap.channel),transmissionMapUv:De&&g(M.transmissionMap.channel),thicknessMapUv:O&&g(M.thicknessMap.channel),alphaMapUv:ee&&g(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ct||B),vertexNormals:!!N.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!N.attributes.uv&&(Be||ee),fog:!!P,useFog:M.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||N.attributes.normal===void 0&&ct===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ge,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Be&&M.map.isVideoTexture===!0&&ke.getTransfer(M.map.colorSpace)===tt,decodeVideoTextureEmissive:Ut&&M.emissiveMap.isVideoTexture===!0&&ke.getTransfer(M.emissiveMap.colorSpace)===tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pn,flipSided:M.side===Bt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:se&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&M.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function m(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)A.push(L),A.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(f(A,M),v(A,M),A.push(r.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function f(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numSunLights),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numSunLightShadows),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function T(M){const A=p[M.type];let L;if(A){const D=fn[A];L=kh.clone(D.uniforms)}else L=M.uniforms;return L}function S(M,A){let L=u.get(A);return L!==void 0?++L.usedTimes:(L=new Em(r,A,M,i),l.push(L),u.set(A,L)),L}function b(M){if(--M.usedTimes===0){const A=l.indexOf(M);l[A]=l[l.length-1],l.pop(),u.delete(M.cacheKey),M.destroy()}}function w(M){o.remove(M)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:T,acquireProgram:S,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:R}}function Cm(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Pm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function al(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ol(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,_,m,f){let v=r[e];return v===void 0?(v={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:f},r[e]=v):(v.id=h.id,v.object=h,v.geometry=p,v.material=g,v.materialVariant=a(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=m,v.group=f),e++,v}function c(h,p,g,_,m,f,v){v.reversedDepth===!0&&(m=-m);const T=o(h,p,g,_,m,f);g.transmission>0?n.push(T):g.transparent===!0?i.push(T):t.push(T)}function l(h,p,g,_,m,f){const v=o(h,p,g,_,m,f);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}function u(h,p){t.length>1&&t.sort(h||Pm),n.length>1&&n.sort(p||al),i.length>1&&i.sort(p||al)}function d(){for(let h=e,p=r.length;h<p;h++){const g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:d,sort:u}}function Lm(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new ol,r.set(n,[a])):i>=s.length?(a=new ol,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Im(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new Ye};break;case"SpotLight":t={position:new X,direction:new X,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function Nm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Dm=0;function Um(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Fm(r){const e=new Im,t=Nm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new X);const i=new X,s=new dt,a=new dt;function o(l){let u=0,d=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,T=0,S=0,b=0,w=0,R=0,M=0,A=0,L=0;l.sort(Um);for(let z=0,I=l.length;z<I;z++){const P=l[z],N=P.color,U=P.intensity,V=P.distance;let q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ci?q=P.shadow.map.texture:q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=N.r*U,d+=N.g*U,h+=N.b*U;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],U);L++}else if(P.isSunLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,Z=t.get(P);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[g]=Z,n.sunShadowMap[g]=q;const ie=$.getViewportCount();for(let ge=0;ge<ie;ge++)n.sunShadowMatrix[_+ge]=$.getMatrix(ge),n.sunShadowCascade[_+ge]=$._cascadeData[ge];_+=ie,g++}n.sun[p]=G,p++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,Z=t.get(P);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=P.shadow.matrix,b++}n.directional[m]=G,m++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(N).multiplyScalar(U),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[v]=G;const $=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,$.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[v]=$.matrix,P.castShadow){const Z=t.get(P);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=q,R++}v++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(N).multiplyScalar(U),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=G,T++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const $=P.shadow,Z=t.get(P);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,n.pointShadow[f]=Z,n.pointShadowMap[f]=q,n.pointShadowMatrix[f]=P.shadow.matrix,w++}n.point[f]=G,f++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(U),G.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[S]=G,S++}}T>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==f||D.spotLength!==v||D.rectAreaLength!==T||D.hemiLength!==S||D.numSunShadows!==g||D.numDirectionalShadows!==b||D.numPointShadows!==w||D.numSpotShadows!==R||D.numSpotMaps!==M||D.numLightProbes!==L)&&(n.sun.length=p,n.directional.length=m,n.spot.length=v,n.rectArea.length=T,n.point.length=f,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+M-A,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,D.sunLength=p,D.directionalLength=m,D.pointLength=f,D.spotLength=v,D.rectAreaLength=T,D.hemiLength=S,D.numSunShadows=g,D.numDirectionalShadows=b,D.numPointShadows=w,D.numSpotShadows=R,D.numSpotMaps=M,D.numLightProbes=L,n.version=Dm++)}function c(l,u){let d=0,h=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let v=0,T=l.length;v<T;v++){const S=l[v];if(S.isSunLight){const b=n.sun[d];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(f),d++}else if(S.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(f),h++}else if(S.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),a.identity(),s.copy(S.matrixWorld),s.premultiply(f),a.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const b=n.point[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:n}}function ll(r){const e=new Fm(r),t=[],n=[],i=[];function s(h){d.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){i.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Om(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new ll(r),e.set(i,[o])):s>=a.length?(o=new ll(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gm=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Vm=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],cl=new dt,qi=new X,Br=new X;function Hm(r,e,t){let n=new Xa;const i=new Xe,s=new Xe,a=new ut,o=new Kh,c=new $h,l={},u=t.maxTextureSize,d={[oi]:Bt,[Bt]:oi,[Pn]:Pn},h=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Bm,fragmentShader:zm}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new On;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Kt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let f=this.type;this.render=function(w,R,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Dc&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gs);const A=r.getRenderTarget(),L=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),z=r.state;z.setBlending(In),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const I=f!==this.type;I&&R.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(N=>N.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,N=w.length;P<N;P++){const U=w[P],V=U.shadow;if(V===void 0){Le("WebGLShadowMap:",U,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const q=V.getFrameExtents();i.multiply(q),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,V.mapSize.y=s.y));const G=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=G,V.map===null||I===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Qi){if(U.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new sn(i.x,i.y,{format:ci,type:vn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),V.map.texture.name=U.name+".shadowMap",V.map.depthTexture=new as(i.x,i.y,pn),V.map.depthTexture.name=U.name+".shadowMapDepth",V.map.depthTexture.format=Fn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Tt,V.map.depthTexture.magFilter=Tt}else U.isPointLight?(V.map=new oc(i.x),V.map.depthTexture=new Vh(i.x,_n)):(V.map=new sn(i.x,i.y),V.map.depthTexture=new as(i.x,i.y,_n)),V.map.depthTexture.name=U.name+".shadowMap",V.map.depthTexture.format=Fn,this.type===Gs?(V.map.depthTexture.compareFunction=G?Va:Ga,V.map.depthTexture.minFilter=Lt,V.map.depthTexture.magFilter=Lt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Tt,V.map.depthTexture.magFilter=Tt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);const $=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();U.isPointLight!==!0&&V.updateMatrices(U,M);for(let Z=0;Z<$;Z++){const ie=V.getCamera(Z);if(U.isPointLight){const ge=V.camera,qe=V.matrix,Oe=U.distance||ge.far;Oe!==ge.far&&(ge.far=Oe,ge.updateProjectionMatrix()),qi.setFromMatrixPosition(U.matrixWorld),ge.position.copy(qi),Br.copy(ge.position),Br.add(Gm[Z]),ge.up.copy(Vm[Z]),ge.lookAt(Br),ge.updateMatrixWorld(),qe.makeTranslation(-qi.x,-qi.y,-qi.z),cl.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),V._frustum.setFromProjectionMatrix(cl,ge.coordinateSystem,ge.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,Z),r.clear();else{Z===0&&(r.setRenderTarget(V.map),r.clear());const ge=V.getViewport(Z);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),z.viewport(a)}n=V.getFrustum(Z),S(R,M,ie,U,this.type)}V.isPointLightShadow!==!0&&this.type===Qi&&v(V,M),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(A,L,D)};function v(w,R){const M=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new sn(i.x,i.y,{format:ci,type:vn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(R,null,M,h,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(R,null,M,p,_,null)}function T(w,R,M,A){let L=null;const D=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)L=D;else if(L=M.isPointLight===!0?c:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=L.uuid,I=R.uuid;let P=l[z];P===void 0&&(P={},l[z]=P);let N=P[I];N===void 0&&(N=L.clone(),P[I]=N,R.addEventListener("dispose",b)),L=N}if(L.visible=R.visible,L.wireframe=R.wireframe,A===Qi?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:d[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,M.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const z=r.properties.get(L);z.light=M}return L}function S(w,R,M,A,L){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Qi)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);const I=e.update(w),P=w.material;if(Array.isArray(P)){const N=I.groups;for(let U=0,V=N.length;U<V;U++){const q=N[U],G=P[q.materialIndex];if(G&&G.visible){const $=T(w,G,A,L);w.onBeforeShadow(r,w,R,M,I,$,q),r.renderBufferDirect(M,null,I,$,w,q),w.onAfterShadow(r,w,R,M,I,$,q)}}}else if(P.visible){const N=T(w,P,A,L);w.onBeforeShadow(r,w,R,M,I,N,null),r.renderBufferDirect(M,null,I,N,w,null),w.onAfterShadow(r,w,R,M,I,N,null)}}const z=w.children;for(let I=0,P=z.length;I<P;I++)S(z[I],R,M,A,L)}function b(w){w.target.removeEventListener("dispose",b);for(const M in l){const A=l[M],L=w.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function km(r,e){function t(){let O=!1;const ce=new ut;let ee=null;const he=new ut(0,0,0,0);return{setMask:function(me){ee!==me&&!O&&(r.colorMask(me,me,me,me),ee=me)},setLocked:function(me){O=me},setClear:function(me,se,Ce,we,rt){rt===!0&&(me*=we,se*=we,Ce*=we),ce.set(me,se,Ce,we),he.equals(ce)===!1&&(r.clearColor(me,se,Ce,we),he.copy(ce))},reset:function(){O=!1,ee=null,he.set(-1,0,0,0)}}}function n(){let O=!1,ce=!1,ee=null,he=null,me=null;return{setReversed:function(se){if(ce!==se){const Ce=e.get("EXT_clip_control");se?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ce=se;const we=me;me=null,this.setClear(we)}},getReversed:function(){return ce},setTest:function(se){se?ne(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(se){ee!==se&&!O&&(r.depthMask(se),ee=se)},setFunc:function(se){if(ce&&(se=mh[se]),he!==se){switch(se){case Xr:r.depthFunc(r.NEVER);break;case qr:r.depthFunc(r.ALWAYS);break;case Yr:r.depthFunc(r.LESS);break;case ns:r.depthFunc(r.LEQUAL);break;case Kr:r.depthFunc(r.EQUAL);break;case $r:r.depthFunc(r.GEQUAL);break;case Zr:r.depthFunc(r.GREATER);break;case Jr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=se}},setLocked:function(se){O=se},setClear:function(se){me!==se&&(me=se,ce&&(se=1-se),r.clearDepth(se))},reset:function(){O=!1,ee=null,he=null,me=null,ce=!1}}}function i(){let O=!1,ce=null,ee=null,he=null,me=null,se=null,Ce=null,we=null,rt=null;return{setTest:function(Qe){O||(Qe?ne(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(Qe){ce!==Qe&&!O&&(r.stencilMask(Qe),ce=Qe)},setFunc:function(Qe,$t,an){(ee!==Qe||he!==$t||me!==an)&&(r.stencilFunc(Qe,$t,an),ee=Qe,he=$t,me=an)},setOp:function(Qe,$t,an){(se!==Qe||Ce!==$t||we!==an)&&(r.stencilOp(Qe,$t,an),se=Qe,Ce=$t,we=an)},setLocked:function(Qe){O=Qe},setClear:function(Qe){rt!==Qe&&(r.clearStencil(Qe),rt=Qe)},reset:function(){O=!1,ce=null,ee=null,he=null,me=null,se=null,Ce=null,we=null,rt=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},d={},h={},p=new WeakMap,g=[],_=null,m=!1,f=null,v=null,T=null,S=null,b=null,w=null,R=null,M=new Ye(0,0,0),A=0,L=!1,D=null,z=null,I=null,P=null,N=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=q>=2);let $=null,Z={};const ie=r.getParameter(r.SCISSOR_BOX),ge=r.getParameter(r.VIEWPORT),qe=new ut().fromArray(ie),Oe=new ut().fromArray(ge);function He(O,ce,ee,he){const me=new Uint8Array(4),se=r.createTexture();r.bindTexture(O,se),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<ee;Ce++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,me):r.texImage2D(ce+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,me);return se}const J={};J[r.TEXTURE_2D]=He(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=He(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=He(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=He(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(r.DEPTH_TEST),a.setFunc(ns),Ve(!1),ct(po),ne(r.CULL_FACE),$e(In);function ne(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function Me(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function Ie(O,ce){return h[O]!==ce?(r.bindFramebuffer(O,ce),h[O]=ce,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ce),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function ve(O,ce){let ee=g,he=!1;if(O){ee=p.get(ce),ee===void 0&&(ee=[],p.set(ce,ee));const me=O.textures;if(ee.length!==me.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let se=0,Ce=me.length;se<Ce;se++)ee[se]=r.COLOR_ATTACHMENT0+se;ee.length=me.length,he=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,he=!0);he&&r.drawBuffers(ee)}function Be(O){return _!==O?(r.useProgram(O),_=O,!0):!1}const xt={[Ci]:r.FUNC_ADD,[Fc]:r.FUNC_SUBTRACT,[Oc]:r.FUNC_REVERSE_SUBTRACT};xt[Bc]=r.MIN,xt[zc]=r.MAX;const ze={[Gc]:r.ZERO,[Vc]:r.ONE,[Hc]:r.SRC_COLOR,[Cl]:r.SRC_ALPHA,[Kc]:r.SRC_ALPHA_SATURATE,[qc]:r.DST_COLOR,[Wc]:r.DST_ALPHA,[kc]:r.ONE_MINUS_SRC_COLOR,[Pl]:r.ONE_MINUS_SRC_ALPHA,[Yc]:r.ONE_MINUS_DST_COLOR,[Xc]:r.ONE_MINUS_DST_ALPHA,[$c]:r.CONSTANT_COLOR,[Zc]:r.ONE_MINUS_CONSTANT_COLOR,[Jc]:r.CONSTANT_ALPHA,[Qc]:r.ONE_MINUS_CONSTANT_ALPHA};function $e(O,ce,ee,he,me,se,Ce,we,rt,Qe){if(O===In){m===!0&&(Me(r.BLEND),m=!1);return}if(m===!1&&(ne(r.BLEND),m=!0),O!==Uc){if(O!==f||Qe!==L){if((v!==Ci||b!==Ci)&&(r.blendEquation(r.FUNC_ADD),v=Ci,b=Ci),Qe)switch(O){case es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mo:r.blendFunc(r.ONE,r.ONE);break;case go:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _o:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ze("WebGLState: Invalid blending: ",O);break}else switch(O){case es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case go:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _o:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",O);break}T=null,S=null,w=null,R=null,M.set(0,0,0),A=0,f=O,L=Qe}return}me=me||ce,se=se||ee,Ce=Ce||he,(ce!==v||me!==b)&&(r.blendEquationSeparate(xt[ce],xt[me]),v=ce,b=me),(ee!==T||he!==S||se!==w||Ce!==R)&&(r.blendFuncSeparate(ze[ee],ze[he],ze[se],ze[Ce]),T=ee,S=he,w=se,R=Ce),(we.equals(M)===!1||rt!==A)&&(r.blendColor(we.r,we.g,we.b,rt),M.copy(we),A=rt),f=O,L=!1}function st(O,ce){O.side===Pn?Me(r.CULL_FACE):ne(r.CULL_FACE);let ee=O.side===Bt;ce&&(ee=!ee),Ve(ee),O.blending===es&&O.transparent===!1?$e(In):$e(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const he=O.stencilWrite;o.setTest(he),he&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ut(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ne(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(O){D!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),D=O)}function ct(O){O!==Ic?(ne(r.CULL_FACE),O!==z&&(O===po?r.cullFace(r.BACK):O===Nc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),z=O}function bt(O){O!==I&&(V&&r.lineWidth(O),I=O)}function Ut(O,ce,ee){O?(ne(r.POLYGON_OFFSET_FILL),(P!==ce||N!==ee)&&(P=ce,N=ee,a.getReversed()&&(ce=-ce),r.polygonOffset(ce,ee))):Me(r.POLYGON_OFFSET_FILL)}function ht(O){O?ne(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function pt(O){O===void 0&&(O=r.TEXTURE0+U-1),$!==O&&(r.activeTexture(O),$=O)}function B(O,ce,ee){ee===void 0&&($===null?ee=r.TEXTURE0+U-1:ee=$);let he=Z[ee];he===void 0&&(he={type:void 0,texture:void 0},Z[ee]=he),(he.type!==O||he.texture!==ce)&&($!==ee&&(r.activeTexture(ee),$=ee),r.bindTexture(O,ce||J[O]),he.type=O,he.texture=ce)}function At(){const O=Z[$];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function et(){try{r.compressedTexImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function x(){try{r.texSubImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function H(){try{r.texSubImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function Q(){try{r.compressedTexSubImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function re(){try{r.texStorage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function ae(){try{r.texStorage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function j(){try{r.texImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function te(){try{r.texImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function oe(O){return d[O]!==void 0?d[O]:r.getParameter(O)}function Ae(O,ce){d[O]!==ce&&(r.pixelStorei(O,ce),d[O]=ce)}function ue(O){qe.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),qe.copy(O))}function le(O){Oe.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Oe.copy(O))}function Re(O,ce){let ee=l.get(ce);ee===void 0&&(ee=new WeakMap,l.set(ce,ee));let he=ee.get(O);he===void 0&&(he=r.getUniformBlockIndex(ce,O.name),ee.set(O,he))}function Pe(O,ce){const he=l.get(ce).get(O);c.get(ce)!==he&&(r.uniformBlockBinding(ce,he,O.__bindingPointIndex),c.set(ce,he))}function De(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},$=null,Z={},h={},p=new WeakMap,g=[],_=null,m=!1,f=null,v=null,T=null,S=null,b=null,w=null,R=null,M=new Ye(0,0,0),A=0,L=!1,D=null,z=null,I=null,P=null,N=null,qe.set(0,0,r.canvas.width,r.canvas.height),Oe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:Me,bindFramebuffer:Ie,drawBuffers:ve,useProgram:Be,setBlending:$e,setMaterial:st,setFlipSided:Ve,setCullFace:ct,setLineWidth:bt,setPolygonOffset:Ut,setScissorTest:ht,activeTexture:pt,bindTexture:B,unbindTexture:At,compressedTexImage2D:et,compressedTexImage3D:C,texImage2D:j,texImage3D:te,pixelStorei:Ae,getParameter:oe,updateUBOMapping:Re,uniformBlockBinding:Pe,texStorage2D:re,texStorage3D:ae,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:ue,viewport:le,reset:De}}function Wm(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,u=new WeakMap,d=new Set;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return g?new OffscreenCanvas(C,x):Zs("canvas")}function m(C,x,H){let Y=1;const Q=et(C);if((Q.width>H||Q.height>H)&&(Y=H/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const re=Math.floor(Y*Q.width),ae=Math.floor(Y*Q.height);h===void 0&&(h=_(re,ae));const j=x?_(re,ae):h;return j.width=re,j.height=ae,j.getContext("2d").drawImage(C,0,0,re,ae),Le("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+re+"x"+ae+")."),j}else return"data"in C&&Le("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function f(C){return C.generateMipmaps}function v(C){r.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(C,x,H,Y,Q,re=!1){if(C!==null){if(r[C]!==void 0)return r[C];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae;Y&&(ae=e.get("EXT_texture_norm16"),ae||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===r.RED&&(H===r.FLOAT&&(j=r.R32F),H===r.HALF_FLOAT&&(j=r.R16F),H===r.UNSIGNED_BYTE&&(j=r.R8),H===r.UNSIGNED_SHORT&&ae&&(j=ae.R16_EXT),H===r.SHORT&&ae&&(j=ae.R16_SNORM_EXT)),x===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.R8UI),H===r.UNSIGNED_SHORT&&(j=r.R16UI),H===r.UNSIGNED_INT&&(j=r.R32UI),H===r.BYTE&&(j=r.R8I),H===r.SHORT&&(j=r.R16I),H===r.INT&&(j=r.R32I)),x===r.RG&&(H===r.FLOAT&&(j=r.RG32F),H===r.HALF_FLOAT&&(j=r.RG16F),H===r.UNSIGNED_BYTE&&(j=r.RG8),H===r.UNSIGNED_SHORT&&ae&&(j=ae.RG16_EXT),H===r.SHORT&&ae&&(j=ae.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RG8UI),H===r.UNSIGNED_SHORT&&(j=r.RG16UI),H===r.UNSIGNED_INT&&(j=r.RG32UI),H===r.BYTE&&(j=r.RG8I),H===r.SHORT&&(j=r.RG16I),H===r.INT&&(j=r.RG32I)),x===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RGB8UI),H===r.UNSIGNED_SHORT&&(j=r.RGB16UI),H===r.UNSIGNED_INT&&(j=r.RGB32UI),H===r.BYTE&&(j=r.RGB8I),H===r.SHORT&&(j=r.RGB16I),H===r.INT&&(j=r.RGB32I)),x===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),H===r.UNSIGNED_INT&&(j=r.RGBA32UI),H===r.BYTE&&(j=r.RGBA8I),H===r.SHORT&&(j=r.RGBA16I),H===r.INT&&(j=r.RGBA32I)),x===r.RGB&&(H===r.UNSIGNED_SHORT&&ae&&(j=ae.RGB16_EXT),H===r.SHORT&&ae&&(j=ae.RGB16_SNORM_EXT),H===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),x===r.RGBA){const te=re?$s:ke.getTransfer(Q);H===r.FLOAT&&(j=r.RGBA32F),H===r.HALF_FLOAT&&(j=r.RGBA16F),H===r.UNSIGNED_BYTE&&(j=te===tt?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT&&ae&&(j=ae.RGBA16_EXT),H===r.SHORT&&ae&&(j=ae.RGBA16_SNORM_EXT),H===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(C,x){let H;return C?x===null||x===_n||x===ss?H=r.DEPTH24_STENCIL8:x===pn?H=r.DEPTH32F_STENCIL8:x===is&&(H=r.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===_n||x===ss?H=r.DEPTH_COMPONENT24:x===pn?H=r.DEPTH_COMPONENT32F:x===is&&(H=r.DEPTH_COMPONENT16),H}function w(C,x){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Tt&&C.minFilter!==Lt?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function R(C){const x=C.target;x.removeEventListener("dispose",R),A(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function M(C){const x=C.target;x.removeEventListener("dispose",M),D(x)}function A(C){const x=n.get(C);if(x.__webglInit===void 0)return;const H=C.source,Y=p.get(H);if(Y){const Q=Y[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(C),Object.keys(Y).length===0&&p.delete(H)}n.remove(C)}function L(C){const x=n.get(C);r.deleteTexture(x.__webglTexture);const H=C.source,Y=p.get(H);delete Y[x.__cacheKey],a.memory.textures--}function D(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Q=0;Q<x.__webglFramebuffer[Y].length;Q++)r.deleteFramebuffer(x.__webglFramebuffer[Y][Q]);else r.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)r.deleteFramebuffer(x.__webglFramebuffer[Y]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=C.textures;for(let Y=0,Q=H.length;Y<Q;Y++){const re=n.get(H[Y]);re.__webglTexture&&(r.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(H[Y])}n.remove(C)}let z=0;function I(){z=0}function P(){return z}function N(C){z=C}function U(){const C=z;return C>=i.maxTextures&&Le("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),z+=1,C}function V(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function q(C,x){const H=n.get(C);if(C.isVideoTexture&&B(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const Y=C.image;if(Y===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(H,C,x);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+x)}function G(C,x){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Me(H,C,x);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+x)}function $(C,x){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Me(H,C,x);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+x)}function Z(C,x){const H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){Ie(H,C,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+x)}const ie={[Qr]:r.REPEAT,[Ln]:r.CLAMP_TO_EDGE,[jr]:r.MIRRORED_REPEAT},ge={[Tt]:r.NEAREST,[th]:r.NEAREST_MIPMAP_NEAREST,[ds]:r.NEAREST_MIPMAP_LINEAR,[Lt]:r.LINEAR,[lr]:r.LINEAR_MIPMAP_NEAREST,[si]:r.LINEAR_MIPMAP_LINEAR},qe={[rh]:r.NEVER,[hh]:r.ALWAYS,[ah]:r.LESS,[Ga]:r.LEQUAL,[oh]:r.EQUAL,[Va]:r.GEQUAL,[lh]:r.GREATER,[ch]:r.NOTEQUAL};function Oe(C,x){if(x.type===pn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Lt||x.magFilter===lr||x.magFilter===ds||x.magFilter===si||x.minFilter===Lt||x.minFilter===lr||x.minFilter===ds||x.minFilter===si)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ie[x.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ie[x.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ie[x.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ge[x.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ge[x.minFilter]),x.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,qe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Tt||x.minFilter!==ds&&x.minFilter!==si||x.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function He(C,x){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",R));const Y=x.source;let Q=p.get(Y);Q===void 0&&(Q={},p.set(Y,Q));const re=V(x);if(re!==C.__cacheKey){Q[re]===void 0&&(Q[re]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[re].usedTimes++;const ae=Q[C.__cacheKey];ae!==void 0&&(Q[C.__cacheKey].usedTimes--,ae.usedTimes===0&&L(x)),C.__cacheKey=re,C.__webglTexture=Q[re].texture}return H}function J(C,x,H){return Math.floor(Math.floor(C/H)/x)}function ne(C,x,H,Y){const re=C.updateRanges;if(re.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,H,Y,x.data);else{re.sort((Ae,ue)=>Ae.start-ue.start);let ae=0;for(let Ae=1;Ae<re.length;Ae++){const ue=re[ae],le=re[Ae],Re=ue.start+ue.count,Pe=J(le.start,x.width,4),De=J(ue.start,x.width,4);le.start<=Re+1&&Pe===De&&J(le.start+le.count-1,x.width,4)===Pe?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++ae,re[ae]=le)}re.length=ae+1;const j=t.getParameter(r.UNPACK_ROW_LENGTH),te=t.getParameter(r.UNPACK_SKIP_PIXELS),oe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let Ae=0,ue=re.length;Ae<ue;Ae++){const le=re[Ae],Re=Math.floor(le.start/4),Pe=Math.ceil(le.count/4),De=Re%x.width,O=Math.floor(Re/x.width),ce=Pe,ee=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,De),t.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,De,O,ce,ee,H,Y,x.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,j),t.pixelStorei(r.UNPACK_SKIP_PIXELS,te),t.pixelStorei(r.UNPACK_SKIP_ROWS,oe)}}function Me(C,x,H){let Y=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=r.TEXTURE_3D);const Q=He(C,x),re=x.source;t.bindTexture(Y,C.__webglTexture,r.TEXTURE0+H);const ae=n.get(re);if(re.version!==ae.__version||Q===!0){if(t.activeTexture(r.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ee=ke.getPrimaries(ke.workingColorSpace),he=x.colorSpace===Kn?null:ke.getPrimaries(x.colorSpace),me=x.colorSpace===Kn||ee===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let te=m(x.image,!1,i.maxTextureSize);te=At(x,te);const oe=s.convert(x.format,x.colorSpace),Ae=s.convert(x.type);let ue=S(x.internalFormat,oe,Ae,x.normalized,x.colorSpace,x.isVideoTexture);Oe(Y,x);let le;const Re=x.mipmaps,Pe=x.isVideoTexture!==!0,De=ae.__version===void 0||Q===!0,O=re.dataReady,ce=w(x,te);if(x.isDepthTexture)ue=b(x.format===ri,x.type),De&&(Pe?t.texStorage2D(r.TEXTURE_2D,1,ue,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,ue,te.width,te.height,0,oe,Ae,null));else if(x.isDataTexture)if(Re.length>0){Pe&&De&&t.texStorage2D(r.TEXTURE_2D,ce,ue,Re[0].width,Re[0].height);for(let ee=0,he=Re.length;ee<he;ee++)le=Re[ee],Pe?O&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,le.width,le.height,oe,Ae,le.data):t.texImage2D(r.TEXTURE_2D,ee,ue,le.width,le.height,0,oe,Ae,le.data);x.generateMipmaps=!1}else Pe?(De&&t.texStorage2D(r.TEXTURE_2D,ce,ue,te.width,te.height),O&&ne(x,te,oe,Ae)):t.texImage2D(r.TEXTURE_2D,0,ue,te.width,te.height,0,oe,Ae,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Pe&&De&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,ue,Re[0].width,Re[0].height,te.depth);for(let ee=0,he=Re.length;ee<he;ee++)if(le=Re[ee],x.format!==tn)if(oe!==null)if(Pe){if(O)if(x.layerUpdates.size>0){const me=Vo(le.width,le.height,x.format,x.type);for(const se of x.layerUpdates){const Ce=le.data.subarray(se*me/le.data.BYTES_PER_ELEMENT,(se+1)*me/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,se,le.width,le.height,1,oe,Ce)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,te.depth,oe,le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,ue,le.width,le.height,te.depth,0,le.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?O&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,te.depth,oe,Ae,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,ue,le.width,le.height,te.depth,0,oe,Ae,le.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Pe&&De&&t.texStorage2D(r.TEXTURE_2D,ce,ue,Re[0].width,Re[0].height);for(let ee=0,he=Re.length;ee<he;ee++)le=Re[ee],x.format!==tn?oe!==null?Pe?O&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,ue,le.width,le.height,0,le.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?O&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,le.width,le.height,oe,Ae,le.data):t.texImage2D(r.TEXTURE_2D,ee,ue,le.width,le.height,0,oe,Ae,le.data)}else if(x.isDataArrayTexture)if(Pe){if(De&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,ue,te.width,te.height,te.depth),O)if(x.layerUpdates.size>0){const ee=Vo(te.width,te.height,x.format,x.type);for(const he of x.layerUpdates){const me=te.data.subarray(he*ee/te.data.BYTES_PER_ELEMENT,(he+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,te.width,te.height,1,oe,Ae,me)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,oe,Ae,te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ue,te.width,te.height,te.depth,0,oe,Ae,te.data);else if(x.isData3DTexture)Pe?(De&&t.texStorage3D(r.TEXTURE_3D,ce,ue,te.width,te.height,te.depth),O&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,oe,Ae,te.data)):t.texImage3D(r.TEXTURE_3D,0,ue,te.width,te.height,te.depth,0,oe,Ae,te.data);else if(x.isFramebufferTexture){if(De)if(Pe)t.texStorage2D(r.TEXTURE_2D,ce,ue,te.width,te.height);else{let ee=te.width,he=te.height;for(let me=0;me<ce;me++)t.texImage2D(r.TEXTURE_2D,me,ue,ee,he,0,oe,Ae,null),ee>>=1,he>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){const ee=r.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),d.add(x),ee.onpaint=he=>{const me=he.changedElements;for(const se of d)me.includes(se.image)&&(se.needsUpdate=!0)},ee.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,te);else{const me=r.RGBA,se=r.RGBA,Ce=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,me,se,Ce,te)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Pe&&De){const ee=et(Re[0]);t.texStorage2D(r.TEXTURE_2D,ce,ue,ee.width,ee.height)}for(let ee=0,he=Re.length;ee<he;ee++)le=Re[ee],Pe?O&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,oe,Ae,le):t.texImage2D(r.TEXTURE_2D,ee,ue,oe,Ae,le);x.generateMipmaps=!1}else if(Pe){if(De){const ee=et(te);t.texStorage2D(r.TEXTURE_2D,ce,ue,ee.width,ee.height)}O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,Ae,te)}else t.texImage2D(r.TEXTURE_2D,0,ue,oe,Ae,te);f(x)&&v(Y),ae.__version=re.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ie(C,x,H){if(x.image.length!==6)return;const Y=He(C,x),Q=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+H);const re=n.get(Q);if(Q.version!==re.__version||Y===!0){t.activeTexture(r.TEXTURE0+H);const ae=ke.getPrimaries(ke.workingColorSpace),j=x.colorSpace===Kn?null:ke.getPrimaries(x.colorSpace),te=x.colorSpace===Kn||ae===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const oe=x.isCompressedTexture||x.image[0].isCompressedTexture,Ae=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let se=0;se<6;se++)!oe&&!Ae?ue[se]=m(x.image[se],!0,i.maxCubemapSize):ue[se]=Ae?x.image[se].image:x.image[se],ue[se]=At(x,ue[se]);const le=ue[0],Re=s.convert(x.format,x.colorSpace),Pe=s.convert(x.type),De=S(x.internalFormat,Re,Pe,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,ce=re.__version===void 0||Y===!0,ee=Q.dataReady;let he=w(x,le);Oe(r.TEXTURE_CUBE_MAP,x);let me;if(oe){O&&ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,he,De,le.width,le.height);for(let se=0;se<6;se++){me=ue[se].mipmaps;for(let Ce=0;Ce<me.length;Ce++){const we=me[Ce];x.format!==tn?Re!==null?O?ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,0,0,we.width,we.height,Re,we.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,De,we.width,we.height,0,we.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,0,0,we.width,we.height,Re,Pe,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,De,we.width,we.height,0,Re,Pe,we.data)}}}else{if(me=x.mipmaps,O&&ce){me.length>0&&he++;const se=et(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,he,De,se.width,se.height)}for(let se=0;se<6;se++)if(Ae){O?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ue[se].width,ue[se].height,Re,Pe,ue[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,De,ue[se].width,ue[se].height,0,Re,Pe,ue[se].data);for(let Ce=0;Ce<me.length;Ce++){const rt=me[Ce].image[se].image;O?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,0,0,rt.width,rt.height,Re,Pe,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,De,rt.width,rt.height,0,Re,Pe,rt.data)}}else{O?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Re,Pe,ue[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,De,Re,Pe,ue[se]);for(let Ce=0;Ce<me.length;Ce++){const we=me[Ce];O?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,0,0,Re,Pe,we.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,De,Re,Pe,we.image[se])}}}f(x)&&v(r.TEXTURE_CUBE_MAP),re.__version=Q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ve(C,x,H,Y,Q,re){const ae=s.convert(H.format,H.colorSpace),j=s.convert(H.type),te=S(H.internalFormat,ae,j,H.normalized,H.colorSpace),oe=n.get(x),Ae=n.get(H);if(Ae.__renderTarget=x,!oe.__hasExternalTextures){const ue=Math.max(1,x.width>>re),le=Math.max(1,x.height>>re);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,re,te,ue,le,x.depth,0,ae,j,null):t.texImage2D(Q,re,te,ue,le,0,ae,j,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),pt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,Q,Ae.__webglTexture,0,ht(x)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,Q,Ae.__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(C,x,H){if(r.bindRenderbuffer(r.RENDERBUFFER,C),x.depthBuffer){const Y=x.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,re=b(x.stencilBuffer,Q),ae=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht(x),re,x.width,x.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht(x),re,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,re,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,C)}else{const Y=x.textures;for(let Q=0;Q<Y.length;Q++){const re=Y[Q],ae=s.convert(re.format,re.colorSpace),j=s.convert(re.type),te=S(re.internalFormat,ae,j,re.normalized,re.colorSpace);pt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht(x),te,x.width,x.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht(x),te,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,te,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xt(C,x,H){const Y=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,x.depthTexture);const oe=s.convert(x.depthTexture.format),Ae=s.convert(x.depthTexture.type);let ue;x.depthTexture.format===Fn?ue=r.DEPTH_COMPONENT24:x.depthTexture.format===ri&&(ue=r.DEPTH24_STENCIL8);for(let le=0;le<6;le++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ue,x.width,x.height,0,oe,Ae,null)}}else q(x.depthTexture,0);const re=Q.__webglTexture,ae=ht(x),j=Y?r.TEXTURE_CUBE_MAP_POSITIVE_X+H:r.TEXTURE_2D,te=x.depthTexture.format===ri?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===Fn)pt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,j,re,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,te,j,re,0);else if(x.depthTexture.format===ri)pt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,j,re,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,te,j,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(C){const x=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=Y}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let Y=0;Y<6;Y++)xt(x.__webglFramebuffer[Y],C,Y);else{const Y=C.texture.mipmaps;Y&&Y.length>0?xt(x.__webglFramebuffer[0],C,0):xt(x.__webglFramebuffer,C,0)}else if(H){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=r.createRenderbuffer(),Be(x.__webglDepthbuffer[Y],C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,re)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Be(x.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,re)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(C,x,H){const Y=n.get(C);x!==void 0&&ve(Y.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&ze(C)}function st(C){const x=C.texture,H=n.get(C),Y=n.get(x);C.addEventListener("dispose",M);const Q=C.textures,re=C.isWebGLCubeRenderTarget===!0,ae=Q.length>1;if(ae||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=x.version,a.memory.textures++),re){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let te=0;te<x.mipmaps.length;te++)H.__webglFramebuffer[j][te]=r.createFramebuffer()}else H.__webglFramebuffer[j]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)H.__webglFramebuffer[j]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(ae)for(let j=0,te=Q.length;j<te;j++){const oe=n.get(Q[j]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&pt(C)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){const te=Q[j];H.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[j]);const oe=s.convert(te.format,te.colorSpace),Ae=s.convert(te.type),ue=S(te.internalFormat,oe,Ae,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),le=ht(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,le,ue,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,H.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Be(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)ve(H.__webglFramebuffer[j][te],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,te);else ve(H.__webglFramebuffer[j],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(x)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let j=0,te=Q.length;j<te;j++){const oe=Q[j],Ae=n.get(oe);let ue=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ae.__webglTexture),Oe(ue,oe),ve(H.__webglFramebuffer,C,oe,r.COLOR_ATTACHMENT0+j,ue,0),f(oe)&&v(ue)}t.unbindTexture()}else{let j=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(j,Y.__webglTexture),Oe(j,x),x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)ve(H.__webglFramebuffer[te],C,x,r.COLOR_ATTACHMENT0,j,te);else ve(H.__webglFramebuffer,C,x,r.COLOR_ATTACHMENT0,j,0);f(x)&&v(j),t.unbindTexture()}C.depthBuffer&&ze(C)}function Ve(C){const x=C.textures;for(let H=0,Y=x.length;H<Y;H++){const Q=x[H];if(f(Q)){const re=T(C),ae=n.get(Q).__webglTexture;t.bindTexture(re,ae),v(re),t.unbindTexture()}}}const ct=[],bt=[];function Ut(C){if(C.samples>0){if(pt(C)===!1){const x=C.textures,H=C.width,Y=C.height;let Q=r.COLOR_BUFFER_BIT;const re=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(C),j=x.length>1;if(j)for(let oe=0;oe<x.length;oe++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const te=C.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),j){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ae=n.get(x[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,H,Y,0,0,H,Y,Q,r.NEAREST),c===!0&&(ct.length=0,bt.length=0,ct.push(r.COLOR_ATTACHMENT0+oe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ct.push(re),bt.push(re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,bt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let oe=0;oe<x.length;oe++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ae=n.get(x[oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,Ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const x=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function ht(C){return Math.min(i.maxSamples,C.samples)}function pt(C){const x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function B(C){const x=a.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function At(C,x){const H=C.colorSpace,Y=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Ks&&H!==Kn&&(ke.getTransfer(H)===tt?(Y!==tn||Q!==kt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",H)),x}function et(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.getTextureUnits=P,this.setTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=Z,this.rebindTextures=$e,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Xm(r,e){function t(n,i=Kn){let s;const a=ke.getTransfer(i);if(n===kt)return r.UNSIGNED_BYTE;if(n===Ua)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Hl)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===kl)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gl)return r.BYTE;if(n===Vl)return r.SHORT;if(n===is)return r.UNSIGNED_SHORT;if(n===Da)return r.INT;if(n===_n)return r.UNSIGNED_INT;if(n===pn)return r.FLOAT;if(n===vn)return r.HALF_FLOAT;if(n===Wl)return r.ALPHA;if(n===Xl)return r.RGB;if(n===tn)return r.RGBA;if(n===Fn)return r.DEPTH_COMPONENT;if(n===ri)return r.DEPTH_STENCIL;if(n===ql)return r.RED;if(n===Oa)return r.RED_INTEGER;if(n===ci)return r.RG;if(n===Ba)return r.RG_INTEGER;if(n===za)return r.RGBA_INTEGER;if(n===Vs||n===Hs||n===ks||n===Ws)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ks)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ea||n===ta||n===na||n===ia)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ea)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ta)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===na)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ia)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sa||n===ra||n===aa||n===oa||n===la||n===qs||n===ca)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===sa||n===ra)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===aa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===oa)return s.COMPRESSED_R11_EAC;if(n===la)return s.COMPRESSED_SIGNED_R11_EAC;if(n===qs)return s.COMPRESSED_RG11_EAC;if(n===ca)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===Sa||n===ya||n===Ea)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ha)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ya)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ea)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ba||n===wa||n===Ta)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ba)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Aa||n===Ra||n===Ys||n===Ca)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Aa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ys)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ym=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new tc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rn({vertexShader:qm,fragmentShader:Ym,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new Di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $m extends hi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Km,f={},v=t.getContextAttributes();let T=null,S=null;const b=[],w=[],R=new Xe;let M=null,A=null;const L=new Ht;L.viewport=new ut;const D=new Ht;D.viewport=new ut;const z=[L,D],I=new nu;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=b[J];return ne===void 0&&(ne=new _r,b[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=b[J];return ne===void 0&&(ne=new _r,b[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=b[J];return ne===void 0&&(ne=new _r,b[J]=ne),ne.getHandSpace()};function U(J){const ne=w.indexOf(J.inputSource);if(ne===-1)return;const Me=b[ne];Me!==void 0&&(Me.update(J.inputSource,J.frame,l||a),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",q);for(let J=0;J<b.length;J++){const ne=w[J];ne!==null&&(w[J]=null,b[J].disconnect(ne))}P=null,N=null,m.reset();for(const J in f)delete f[J];if(e.setRenderTarget(T),p=null,h=null,d=null,i=null,S=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(R.width,R.height,!1),A!==null){const J=A.camera;J.fov=A.fov,J.zoom=A.zoom,J.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",V),i.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ie=null,ve=null;v.depth&&(ve=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=v.stencil?ri:Fn,Ie=v.stencil?ss:_n);const Be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Be),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new sn(h.textureWidth,h.textureHeight,{format:tn,type:kt,depthTexture:new as(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new sn(p.framebufferWidth,p.framebufferHeight,{format:tn,type:kt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(J){for(let ne=0;ne<J.removed.length;ne++){const Me=J.removed[ne],Ie=w.indexOf(Me);Ie>=0&&(w[Ie]=null,b[Ie].disconnect(Me))}for(let ne=0;ne<J.added.length;ne++){const Me=J.added[ne];let Ie=w.indexOf(Me);if(Ie===-1){for(let Be=0;Be<b.length;Be++)if(Be>=w.length){w.push(Me),Ie=Be;break}else if(w[Be]===null){w[Be]=Me,Ie=Be;break}if(Ie===-1)break}const ve=b[Ie];ve&&ve.connect(Me)}}const G=new X,$=new X;function Z(J,ne,Me){G.setFromMatrixPosition(ne.matrixWorld),$.setFromMatrixPosition(Me.matrixWorld);const Ie=G.distanceTo($),ve=ne.projectionMatrix.elements,Be=Me.projectionMatrix.elements,xt=ve[14]/(ve[10]-1),ze=ve[14]/(ve[10]+1),$e=(ve[9]+1)/ve[5],st=(ve[9]-1)/ve[5],Ve=(ve[8]-1)/ve[0],ct=(Be[8]+1)/Be[0],bt=xt*Ve,Ut=xt*ct,ht=Ie/(-Ve+ct),pt=ht*-Ve;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(pt),J.translateZ(ht),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ve[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const B=xt+ht,At=ze+ht,et=bt-pt,C=Ut+(Ie-pt),x=$e*ze/At*B,H=st*ze/At*B;J.projectionMatrix.makePerspective(et,C,x,H,B,At),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ie(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ne=J.near,Me=J.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),I.near=D.near=L.near=ne,I.far=D.far=L.far=Me,(P!==I.near||N!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),P=I.near,N=I.far),I.layers.mask=J.layers.mask|6,L.layers.mask=I.layers.mask&-5,D.layers.mask=I.layers.mask&-3;const Ie=J.parent,ve=I.cameras;ie(I,Ie);for(let Be=0;Be<ve.length;Be++)ie(ve[Be],Ie);ve.length===2?Z(I,L,D):I.projectionMatrix.copy(L.projectionMatrix),A===null&&J.isPerspectiveCamera&&(A={camera:J,fov:J.fov,zoom:J.zoom}),ge(J,I,Ie)};function ge(J,ne,Me){Me===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Js*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(J){c=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(J){return f[J]};let qe=null;function Oe(J,ne){if(u=ne.getViewerPose(l||a),g=ne,u!==null){const Me=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ie=!1;Me.length!==I.cameras.length&&(I.cameras.length=0,Ie=!0);for(let ze=0;ze<Me.length;ze++){const $e=Me[ze];let st=null;if(p!==null)st=p.getViewport($e);else{const ct=d.getViewSubImage(h,$e);st=ct.viewport,ze===0&&(e.setRenderTargetTextures(S,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(S))}let Ve=z[ze];Ve===void 0&&(Ve=new Ht,Ve.layers.enable(ze),Ve.viewport=new ut,z[ze]=Ve),Ve.matrix.fromArray($e.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray($e.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(st.x,st.y,st.width,st.height),ze===0&&(I.matrix.copy(Ve.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ie===!0&&I.cameras.push(Ve)}const ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const ze=d.getDepthInformation(Me[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,i.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let ze=0;ze<Me.length;ze++){const $e=Me[ze].camera;if($e){let st=f[$e];st||(st=new tc,f[$e]=st);const Ve=d.getCameraImage($e);st.sourceTexture=Ve}}}}for(let Me=0;Me<b.length;Me++){const Ie=w[Me],ve=b[Me];Ie!==null&&ve!==void 0&&ve.update(Ie,ne,l||a)}qe&&qe(J,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const He=new rc;He.setAnimationLoop(Oe),this.setAnimationLoop=function(J){qe=J},this.dispose=function(){}}}const Zm=new dt,dc=new Ne;dc.set(-1,0,0,0,1,0,0,0,1);function Jm(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,nc(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,T,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,v,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Bt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Bt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),T=v.envMap,S=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dc),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,v,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Qm(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){const w=b.program;n.uniformBlockBinding(S,w)}function l(S,b){let w=i[S.id];w===void 0&&(m(S),w=u(S),i[S.id]=w,S.addEventListener("dispose",v));const R=b.program;n.updateUBOMapping(S,R);const M=e.render.frame;s[S.id]!==M&&(h(S),s[S.id]=M)}function u(S){const b=d();S.__bindingPointIndex=b;const w=r.createBuffer(),R=S.__size,M=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,R,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,w),w}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const b=i[S.id],w=S.uniforms,R=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let M=0,A=w.length;M<A;M++){const L=w[M];if(Array.isArray(L))for(let D=0,z=L.length;D<z;D++)p(L[D],M,D,R);else p(L,M,0,R)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(S,b,w,R){if(_(S,b,w,R)===!0){const M=S.__offset,A=S.value;if(Array.isArray(A)){let L=0;for(let D=0;D<A.length;D++){const z=A[D],I=f(z);g(z,S.__data,L),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(L+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,S.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,M,S.__data)}}function g(S,b,w){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,w)}function _(S,b,w,R){const M=S.value,A=b+"_"+w;if(R[A]===void 0)return typeof M=="number"||typeof M=="boolean"?R[A]=M:ArrayBuffer.isView(M)?R[A]=M.slice():R[A]=M.clone(),!0;{const L=R[A];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return R[A]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(L.equals(M)===!1)return L.copy(M),!0}}return!1}function m(S){const b=S.uniforms;let w=0;const R=16;for(let A=0,L=b.length;A<L;A++){const D=Array.isArray(b[A])?b[A]:[b[A]];for(let z=0,I=D.length;z<I;z++){const P=D[z],N=Array.isArray(P.value)?P.value:[P.value];for(let U=0,V=N.length;U<V;U++){const q=N[U],G=f(q),$=w%R,Z=$%G.boundary,ie=$+Z;w+=Z,ie!==0&&R-ie<G.storage&&(w+=R-ie),P.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=G.storage}}}const M=w%R;return M>0&&(w+=R-M),S.__size=w,S.__cache={},this}function f(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",S),b}function v(S){const b=S.target;b.removeEventListener("dispose",v);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function T(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:c,update:l,dispose:T}}const jm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let cn=null;function eg(){return cn===null&&(cn=new zh(jm,16,16,ci,vn),cn.name="DFG_LUT",cn.minFilter=Lt,cn.magFilter=Lt,cn.wrapS=Ln,cn.wrapT=Ln,cn.generateMipmaps=!1,cn.needsUpdate=!0),cn}class tg{constructor(e={}){const{canvas:t=fh(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=kt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=p,m=new Set([za,Ba,Oa]),f=new Set([kt,_n,is,ss,Ua,Fa]),v=new Uint32Array(4),T=new Int32Array(4),S=new X;let b=null,w=null;const R=[],M=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,z=null,I=null,P=null,N=null;this._outputColorSpace=Vt;let U=0,V=0,q=null,G=-1,$=null;const Z=new ut,ie=new ut;let ge=null;const qe=new Ye(0);let Oe=0,He=t.width,J=t.height,ne=1,Me=null,Ie=null;const ve=new ut(0,0,He,J),Be=new ut(0,0,He,J);let xt=!1;const ze=new Xa;let $e=!1,st=!1;const Ve=new dt,ct=new X,bt=new ut,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function pt(){return q===null?ne:1}let B=n;function At(y,F){return t.getContext(y,F)}let et,C,x,H,Y,Q,re,ae,j,te,oe,Ae,ue,le,Re,Pe,De,O,ce,ee,he,me,se;try{const y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Na}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",$t,!1),B===null){const F="webgl2";if(B=At(F,y),B===null)throw At(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(y){throw t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",$t,!1),Ze("WebGLRenderer: "+y.message),y}function Ce(){et=new ep(B),et.init(),he=new Xm(B,et),C=new Wf(B,et,e,he),x=new km(B,et),C.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),I=B.createFramebuffer(),P=B.createFramebuffer(),N=B.createFramebuffer(),H=new ip(B),Y=new Cm,Q=new Wm(B,et,x,Y,C,he,H),re=new jf(L),ae=new su(B),me=new Hf(B,ae),j=new tp(B,ae,H,me),te=new rp(B,j,ae,me,H),O=new sp(B,C,Q),Re=new Xf(Y),oe=new Rm(L,re,et,C,me,Re),Ae=new Jm(L,Y),ue=new Lm,le=new Om(et),De=new Vf(L,re,x,te,g,c),Pe=new Hm(L,te,C),se=new Qm(B,H,C,x),ce=new kf(B,et,H),ee=new np(B,et,H),H.programs=oe.programs,L.capabilities=C,L.extensions=et,L.properties=Y,L.renderLists=ue,L.shadowMap=Pe,L.state=x,L.info=H}_!==kt&&(A=new op(_,t.width,t.height,o,i,s));const we=new $m(L,B);this.xr=we,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const y=et.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=et.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(y){y!==void 0&&(ne=y,this.setSize(He,J,!1))},this.getSize=function(y){return y.set(He,J)},this.setSize=function(y,F,K=!0){if(we.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}He=y,J=F,t.width=Math.floor(y*ne),t.height=Math.floor(F*ne),K===!0&&(t.style.width=y+"px",t.style.height=F+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(He*ne,J*ne).floor()},this.setDrawingBufferSize=function(y,F,K){He=y,J=F,ne=K,t.width=Math.floor(y*K),t.height=Math.floor(F*K),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(_===kt){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Z)},this.getViewport=function(y){return y.copy(ve)},this.setViewport=function(y,F,K,k){y.isVector4?ve.set(y.x,y.y,y.z,y.w):ve.set(y,F,K,k),x.viewport(Z.copy(ve).multiplyScalar(ne).round())},this.getScissor=function(y){return y.copy(Be)},this.setScissor=function(y,F,K,k){y.isVector4?Be.set(y.x,y.y,y.z,y.w):Be.set(y,F,K,k),x.scissor(ie.copy(Be).multiplyScalar(ne).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(y){x.setScissorTest(xt=y)},this.setOpaqueSort=function(y){Me=y},this.setTransparentSort=function(y){Ie=y},this.getClearColor=function(y){return y.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,K=!0){let k=0;if(y){let W=!1;if(q!==null){const pe=q.texture.format;W=m.has(pe)}if(W){const pe=q.texture.type,xe=f.has(pe),fe=De.getClearColor(),Ee=De.getClearAlpha(),Te=fe.r,Ue=fe.g,Ge=fe.b;xe?(v[0]=Te,v[1]=Ue,v[2]=Ge,v[3]=Ee,B.clearBufferuiv(B.COLOR,0,v)):(T[0]=Te,T[1]=Ue,T[2]=Ge,T[3]=Ee,B.clearBufferiv(B.COLOR,0,T))}else k|=B.COLOR_BUFFER_BIT}F&&(k|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(k|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),z=y},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",$t,!1),De.dispose(),ue.dispose(),le.dispose(),Y.dispose(),re.dispose(),te.dispose(),me.dispose(),se.dispose(),oe.dispose(),we.dispose(),we.removeEventListener("sessionstart",so),we.removeEventListener("sessionend",ro),Zn.stop()};function rt(y){y.preventDefault(),Mo("WebGLRenderer: Context Lost."),D=!0}function Qe(){Mo("WebGLRenderer: Context Restored."),D=!1;const y=H.autoReset,F=Pe.enabled,K=Pe.autoUpdate,k=Pe.needsUpdate,W=Pe.type;Ce(),H.autoReset=y,Pe.enabled=F,Pe.autoUpdate=K,Pe.needsUpdate=k,Pe.type=W}function $t(y){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function an(y){const F=y.target;F.removeEventListener("dispose",an),Ec(F)}function Ec(y){bc(y),Y.remove(y)}function bc(y){const F=Y.get(y).programs;F!==void 0&&(F.forEach(function(K){oe.releaseProgram(K)}),y.isShaderMaterial&&oe.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,K,k,W,pe){F===null&&(F=Ut);const xe=W.isMesh&&W.matrixWorld.determinantAffine()<0,fe=Ac(y,F,K,k,W);x.setMaterial(k,xe);let Ee=K.index,Te=1;if(k.wireframe===!0){if(Ee=j.getWireframeAttribute(K),Ee===void 0)return;Te=2}const Ue=K.drawRange,Ge=K.attributes.position;let be=Ue.start*Te,je=(Ue.start+Ue.count)*Te;pe!==null&&(be=Math.max(be,pe.start*Te),je=Math.min(je,(pe.start+pe.count)*Te)),Ee!==null?(be=Math.max(be,0),je=Math.min(je,Ee.count)):Ge!=null&&(be=Math.max(be,0),je=Math.min(je,Ge.count));const mt=je-be;if(mt<0||mt===1/0)return;me.setup(W,k,fe,K,Ee);let ot,it=ce;if(Ee!==null&&(ot=ae.get(Ee),it=ee,it.setIndex(ot)),W.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*pt()),it.setMode(B.LINES)):it.setMode(B.TRIANGLES);else if(W.isLine){let Rt=k.linewidth;Rt===void 0&&(Rt=1),x.setLineWidth(Rt*pt()),W.isLineSegments?it.setMode(B.LINES):W.isLineLoop?it.setMode(B.LINE_LOOP):it.setMode(B.LINE_STRIP)}else W.isPoints?it.setMode(B.POINTS):W.isSprite&&it.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(et.get("WEBGL_multi_draw"))it.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Rt=W._multiDrawStarts,_e=W._multiDrawCounts,Nt=W._multiDrawCount,Ke=Ee?ae.get(Ee).bytesPerElement:1,Xt=Y.get(k).currentProgram.getUniforms();for(let on=0;on<Nt;on++)Xt.setValue(B,"_gl_DrawID",on),it.render(Rt[on]/Ke,_e[on])}else if(W.isInstancedMesh)it.renderInstances(be,mt,W.count);else if(K.isInstancedBufferGeometry){const Rt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,_e=Math.min(K.instanceCount,Rt);it.renderInstances(be,mt,_e)}else it.render(be,mt)};function io(y,F,K,k){z!==null&&y.isNodeMaterial&&z.setObject(k,y),$e===!0&&Re.setState(y,K,!1),y.transparent===!0&&y.side===Pn&&y.forceSinglePass===!1?(y.side=Bt,y.needsUpdate=!0,us(y,F,k),y.side=oi,y.needsUpdate=!0,us(y,F,k),y.side=Pn):us(y,F,k)}this.compile=function(y,F,K=null){K===null&&(K=y),z!==null&&z.renderStart(y,F,K),w=le.get(K),w.init(F),M.push(w),K.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),y!==K&&y.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),st=this.localClippingEnabled,$e=Re.init(this.clippingPlanes,st),$e===!0&&Re.setGlobalState(this.clippingPlanes,F),z!==null&&Pe.render(w.state.shadowsArray,K,F);const k=new Set;return y.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const pe=W.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){const fe=pe[xe];io(fe,K,F,W),k.add(fe)}else io(pe,K,F,W),k.add(pe)}),w=M.pop(),z!==null&&z.renderEnd(),k},this.compileAsync=function(y,F,K=null){const k=this.compile(y,F,K);return new Promise(W=>{function pe(){if(k.forEach(function(xe){const Ee=Y.get(xe).currentProgram;(Ee===void 0||Ee.isReady())&&k.delete(xe)}),k.size===0){W(y);return}setTimeout(pe,10)}et.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let sr=null;function wc(y){sr&&sr(y)}function so(){Zn.stop()}function ro(){Zn.start()}const Zn=new rc;Zn.setAnimationLoop(wc),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(y){sr=y,we.setAnimationLoop(y),y===null?Zn.stop():Zn.start()},we.addEventListener("sessionstart",so),we.addEventListener("sessionend",ro),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(y,F);const K=we.enabled===!0&&we.isPresenting===!0,k=A!==null&&(q===null||K)&&A.begin(L,q);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(F),F=we.getCamera()),y.isScene===!0&&y.onBeforeRender(L,y,F,q),w=le.get(y,M.length),w.init(F),w.state.textureUnits=Q.getTextureUnits(),M.push(w),Ve.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ze.setFromProjectionMatrix(Ve,mn,F.reversedDepth),st=this.localClippingEnabled,$e=Re.init(this.clippingPlanes,st),b=ue.get(y,R.length),b.init(),R.push(b),we.enabled===!0&&we.isPresenting===!0){const xe=L.xr.getDepthSensingMesh();xe!==null&&rr(xe,F,-1/0,L.sortObjects)}rr(y,F,0,L.sortObjects),b.finish(),z!==null&&z.updateLights(w.state.lightsArray),L.sortObjects===!0&&b.sort(Me,Ie),ht=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ht&&De.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$e===!0&&Re.beginShadows();const W=w.state.shadowsArray;if(Pe.render(W,y,F),$e===!0&&Re.endShadows(),(k&&A.hasRenderPass())===!1){const xe=b.opaque,fe=b.transmissive;if(w.setupLights(),F.isArrayCamera){const Ee=F.cameras;if(fe.length>0)for(let Te=0,Ue=Ee.length;Te<Ue;Te++){const Ge=Ee[Te];oo(xe,fe,y,Ge)}ht&&De.render(y);for(let Te=0,Ue=Ee.length;Te<Ue;Te++){const Ge=Ee[Te];ao(b,y,Ge,Ge.viewport)}}else fe.length>0&&oo(xe,fe,y,F),ht&&De.render(y),ao(b,y,F)}q!==null&&V===0&&(Q.updateMultisampleRenderTarget(q),Q.updateRenderTargetMipmap(q)),k&&A.end(L),y.isScene===!0&&y.onAfterRender(L,y,F),me.resetDefaultState(),G=-1,$=null,M.pop(),M.length>0?(w=M[M.length-1],Q.setTextureUnits(w.state.textureUnits),$e===!0&&Re.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,z!==null&&z.renderEnd()};function rr(y,F,K,k){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)K=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLightProbeGrid)w.pushLightProbeGrid(y);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(ze)){k&&bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ve);const xe=te.update(y),fe=y.material;fe.visible&&b.push(y,xe,fe,K,bt.z,null,F)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(ze))){const xe=te.update(y),fe=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),bt.copy(y.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),bt.copy(xe.boundingSphere.center)),bt.applyMatrix4(y.matrixWorld).applyMatrix4(Ve)),Array.isArray(fe)){const Ee=xe.groups;for(let Te=0,Ue=Ee.length;Te<Ue;Te++){const Ge=Ee[Te],be=fe[Ge.materialIndex];be&&be.visible&&b.push(y,xe,be,K,bt.z,Ge,F)}}else fe.visible&&b.push(y,xe,fe,K,bt.z,null,F)}}const pe=y.children;for(let xe=0,fe=pe.length;xe<fe;xe++)rr(pe[xe],F,K,k)}function ao(y,F,K,k){const{opaque:W,transmissive:pe,transparent:xe}=y;w.setupLightsView(K),$e===!0&&Re.setGlobalState(L.clippingPlanes,K),k&&x.viewport(Z.copy(k)),W.length>0&&hs(W,F,K),pe.length>0&&hs(pe,F,K),xe.length>0&&hs(xe,F,K),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function oo(y,F,K,k){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const be=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new sn(1,1,{generateMipmaps:!0,type:be?vn:kt,minFilter:si,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ke.workingColorSpace})}const pe=w.state.transmissionRenderTarget[k.id],xe=k.viewport||Z;pe.setSize(xe.z*L.transmissionResolutionScale,xe.w*L.transmissionResolutionScale);const fe=L.getRenderTarget(),Ee=L.getActiveCubeFace(),Te=L.getActiveMipmapLevel();L.setRenderTarget(pe),L.getClearColor(qe),Oe=L.getClearAlpha(),Oe<1&&L.setClearColor(16777215,.5),L.clear(),ht&&De.render(K);const Ue=L.toneMapping;L.toneMapping=gn;const Ge=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),$e===!0&&Re.setGlobalState(L.clippingPlanes,k),hs(y,K,k),Q.updateMultisampleRenderTarget(pe),Q.updateRenderTargetMipmap(pe),et.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let je=0,mt=F.length;je<mt;je++){const ot=F[je],{object:it,geometry:Rt,material:_e,group:Nt}=ot;if(_e.side===Pn&&it.layers.test(k.layers)){const Ke=_e.side;_e.side=Bt,_e.needsUpdate=!0,lo(it,K,k,Rt,_e,Nt),_e.side=Ke,_e.needsUpdate=!0,be=!0}}be===!0&&(Q.updateMultisampleRenderTarget(pe),Q.updateRenderTargetMipmap(pe))}L.setRenderTarget(fe,Ee,Te),L.setClearColor(qe,Oe),Ge!==void 0&&(k.viewport=Ge),L.toneMapping=Ue}function hs(y,F,K){const k=F.isScene===!0?F.overrideMaterial:null;for(let W=0,pe=y.length;W<pe;W++){const xe=y[W],{object:fe,geometry:Ee,group:Te}=xe;let Ue=xe.material;Ue.allowOverride===!0&&k!==null&&(Ue=k),fe.layers.test(K.layers)&&lo(fe,F,K,Ee,Ue,Te)}}function lo(y,F,K,k,W,pe){z!==null&&W.isNodeMaterial&&z.setObject(y,W),y.onBeforeRender(L,F,K,k,W,pe),y.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(L,F,K,k,y,pe),W.transparent===!0&&W.side===Pn&&W.forceSinglePass===!1?(W.side=Bt,W.needsUpdate=!0,L.renderBufferDirect(K,F,k,W,y,pe),W.side=oi,W.needsUpdate=!0,L.renderBufferDirect(K,F,k,W,y,pe),W.side=Pn):L.renderBufferDirect(K,F,k,W,y,pe),y.onAfterRender(L,F,K,k,W,pe)}function us(y,F,K){F.isScene!==!0&&(F=Ut);const k=Y.get(y),W=w.state.lights,pe=w.state.shadowsArray,xe=W.state.version,fe=oe.getParameters(y,W.state,pe,F,K,w.state.lightProbeGridArray),Ee=oe.getProgramCacheKey(fe);let Te=k.programs;k.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;const Ue=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;k.envMap=re.get(y.envMap||k.environment,Ue),k.envMapRotation=k.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Te===void 0&&(y.addEventListener("dispose",an),Te=new Map,k.programs=Te);let Ge=Te.get(Ee);if(Ge!==void 0){if(k.currentProgram===Ge&&k.lightsStateVersion===xe)return ho(y,fe),Ge}else fe.uniforms=oe.getUniforms(y),z!==null&&y.isNodeMaterial&&z.build(y,K,fe),y.onBeforeCompile(fe,L),Ge=oe.acquireProgram(fe,Ee),Te.set(Ee,Ge),k.uniforms=fe.uniforms;const be=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(be.clippingPlanes=Re.uniform),ho(y,fe),k.needsLights=Cc(y),k.lightsStateVersion=xe,k.needsLights&&(be.ambientLightColor.value=W.state.ambient,be.lightProbe.value=W.state.probe,be.sunLights.value=W.state.sun,be.sunLightShadows.value=W.state.sunShadow,be.directionalLights.value=W.state.directional,be.directionalLightShadows.value=W.state.directionalShadow,be.spotLights.value=W.state.spot,be.spotLightShadows.value=W.state.spotShadow,be.rectAreaLights.value=W.state.rectArea,be.ltc_1.value=W.state.rectAreaLTC1,be.ltc_2.value=W.state.rectAreaLTC2,be.pointLights.value=W.state.point,be.pointLightShadows.value=W.state.pointShadow,be.hemisphereLights.value=W.state.hemi,be.sunShadowMatrix.value=W.state.sunShadowMatrix,be.sunShadowCascade.value=W.state.sunShadowCascade,be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,be.spotLightMatrix.value=W.state.spotLightMatrix,be.spotLightMap.value=W.state.spotLightMap,be.pointShadowMatrix.value=W.state.pointShadowMatrix),k.lightProbeGrid=w.state.lightProbeGridArray.length>0,k.currentProgram=Ge,k.uniformsList=null,Ge}function co(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Xs.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function ho(y,F){const K=Y.get(y);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function Tc(y,F){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let K=0,k=y.length;K<k;K++){const W=y[K];if(W.texture!==null&&W.boundingBox.containsPoint(S))return W}return null}function Ac(y,F,K,k,W){F.isScene!==!0&&(F=Ut),Q.resetTextureUnits();const pe=F.fog,xe=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,fe=q===null?L.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ke.workingColorSpace,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Te=re.get(k.envMap||xe,Ee),Ue=k.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ge=!!K.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),be=!!K.morphAttributes.position,je=!!K.morphAttributes.normal,mt=!!K.morphAttributes.color;let ot=gn;k.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ot=L.toneMapping);const it=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Rt=it!==void 0?it.length:0,_e=Y.get(k),Nt=w.state.lights;if($e===!0&&(st===!0||y!==$)){const at=y===$&&k.id===G;Re.setState(k,y,at)}let Ke=!1;k.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Nt.state.version||_e.outputColorSpace!==fe||W.isBatchedMesh&&_e.batching===!1||!W.isBatchedMesh&&_e.batching===!0||W.isBatchedMesh&&_e.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&_e.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&_e.instancing===!1||!W.isInstancedMesh&&_e.instancing===!0||W.isSkinnedMesh&&_e.skinning===!1||!W.isSkinnedMesh&&_e.skinning===!0||W.isInstancedMesh&&_e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&_e.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&_e.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&_e.instancingMorph===!1&&W.morphTexture!==null||_e.envMap!==Te||k.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Re.numPlanes||_e.numIntersection!==Re.numIntersection)||_e.vertexAlphas!==Ue||_e.vertexTangents!==Ge||_e.morphTargets!==be||_e.morphNormals!==je||_e.morphColors!==mt||_e.toneMapping!==ot||_e.morphTargetsCount!==Rt||!!_e.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,_e.__version=k.version);let Xt=_e.currentProgram;Ke===!0&&(Xt=us(k,F,W),z&&k.isNodeMaterial&&z.onUpdateProgram(k,Xt,_e));let on=!1,Bn=!1,ui=!1;const nt=Xt.getUniforms(),ft=_e.uniforms;if(x.useProgram(Xt.program)&&(on=!0,Bn=!0,ui=!0),k.id!==G&&(G=k.id,Bn=!0),_e.needsLights){const at=Tc(w.state.lightProbeGridArray,W);_e.lightProbeGrid!==at&&(_e.lightProbeGrid=at,Bn=!0)}if(on||$!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),nt.setValue(B,"projectionMatrix",y.projectionMatrix),nt.setValue(B,"viewMatrix",y.matrixWorldInverse);const Gn=nt.map.cameraPosition;Gn!==void 0&&Gn.setValue(B,ct.setFromMatrixPosition(y.matrixWorld)),C.logarithmicDepthBuffer&&nt.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&nt.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),$!==y&&($=y,Bn=!0,ui=!0)}if(_e.needsLights&&(Nt.state.sunShadowMap.length>0&&nt.setValue(B,"sunShadowMap",Nt.state.sunShadowMap,Q),Nt.state.directionalShadowMap.length>0&&nt.setValue(B,"directionalShadowMap",Nt.state.directionalShadowMap,Q),Nt.state.spotShadowMap.length>0&&nt.setValue(B,"spotShadowMap",Nt.state.spotShadowMap,Q),Nt.state.pointShadowMap.length>0&&nt.setValue(B,"pointShadowMap",Nt.state.pointShadowMap,Q)),W.isSkinnedMesh){nt.setOptional(B,W,"bindMatrix"),nt.setOptional(B,W,"bindMatrixInverse");const at=W.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),nt.setValue(B,"boneTexture",at.boneTexture,Q))}W.isBatchedMesh&&(nt.setOptional(B,W,"batchingTexture"),nt.setValue(B,"batchingTexture",W._matricesTexture,Q),nt.setOptional(B,W,"batchingIdTexture"),nt.setValue(B,"batchingIdTexture",W._indirectTexture,Q),nt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&nt.setValue(B,"batchingColorTexture",W._colorsTexture,Q));const zn=K.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&O.update(W,K,Xt),(Bn||_e.receiveShadow!==W.receiveShadow)&&(_e.receiveShadow=W.receiveShadow,nt.setValue(B,"receiveShadow",W.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(ft.envMapIntensity.value=F.environmentIntensity),ft.dfgLUT!==void 0&&(ft.dfgLUT.value=eg()),Bn){if(nt.setValue(B,"toneMappingExposure",L.toneMappingExposure),_e.needsLights&&Rc(ft,ui),pe&&k.fog===!0&&Ae.refreshFogUniforms(ft,pe),Ae.refreshMaterialUniforms(ft,k,ne,J,w.state.transmissionRenderTarget[y.id]),_e.needsLights&&_e.lightProbeGrid){const at=_e.lightProbeGrid;ft.probesSH.value=at.texture,ft.probesMin.value.copy(at.boundingBox.min),ft.probesMax.value.copy(at.boundingBox.max),ft.probesResolution.value.copy(at.resolution)}Xs.upload(B,co(_e),ft,Q)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Xs.upload(B,co(_e),ft,Q),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&nt.setValue(B,"center",W.center),nt.setValue(B,"modelViewMatrix",W.modelViewMatrix),nt.setValue(B,"normalMatrix",W.normalMatrix),nt.setValue(B,"modelMatrix",W.matrixWorld),k.uniformsGroups!==void 0){const at=k.uniformsGroups;for(let Gn=0,di=at.length;Gn<di;Gn++){const fo=at[Gn];se.update(fo,Xt),se.bind(fo,Xt)}}return Xt}function Rc(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.sunLights.needsUpdate=F,y.sunLightShadows.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Cc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(y,F,K){const k=Y.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Y.get(y.texture).__webglTexture=F,Y.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:K,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const K=Y.get(y);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,K=0){q=y,U=F,V=K;let k=null,W=!1,pe=!1;if(y){const fe=Y.get(y);if(fe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(B.FRAMEBUFFER,fe.__webglFramebuffer),Z.copy(y.viewport),ie.copy(y.scissor),ge=y.scissorTest,x.viewport(Z),x.scissor(ie),x.setScissorTest(ge),G=-1;return}else if(fe.__webglFramebuffer===void 0)Q.setupRenderTarget(y);else if(fe.__hasExternalTextures)Q.rebindTextures(y,Y.get(y.texture).__webglTexture,Y.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ue=y.depthTexture;if(fe.__boundDepthTexture!==Ue){if(Ue!==null&&Y.has(Ue)&&(y.width!==Ue.image.width||y.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(y)}}const Ee=y.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(pe=!0);const Te=Y.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Te[F])?k=Te[F][K]:k=Te[F],W=!0):y.samples>0&&Q.useMultisampledRTT(y)===!1?k=Y.get(y).__webglMultisampledFramebuffer:Array.isArray(Te)?k=Te[K]:k=Te,Z.copy(y.viewport),ie.copy(y.scissor),ge=y.scissorTest}else Z.copy(ve).multiplyScalar(ne).floor(),ie.copy(Be).multiplyScalar(ne).floor(),ge=xt;if(K!==0&&(k=I),x.bindFramebuffer(B.FRAMEBUFFER,k)&&x.drawBuffers(y,k),x.viewport(Z),x.scissor(ie),x.setScissorTest(ge),W){const fe=Y.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,fe.__webglTexture,K)}else if(pe){const fe=F;for(let Ee=0;Ee<y.textures.length;Ee++){const Te=Y.get(y.textures[Ee]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ee,Te.__webglTexture,K,fe)}}else if(y!==null&&K!==0){const fe=Y.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fe.__webglTexture,K)}G=-1};function uo(y){const F=Y.get(y);return(F.__readFormat!==y.format||F.__readType!==y.type)&&(F.__readFormat=y.format,F.__readType=y.type,F.__formatReadable=C.textureFormatReadable(y.format),F.__typeReadable=C.textureTypeReadable(y.type)),F}this.readRenderTargetPixels=function(y,F,K,k,W,pe,xe,fe=0){if(!(y&&y.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Y.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){x.bindFramebuffer(B.FRAMEBUFFER,Ee);try{const Te=y.textures[fe],Ue=Te.format,Ge=Te.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe);const be=uo(Te);if(be.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-k&&K>=0&&K<=y.height-W&&B.readPixels(F,K,k,W,he.convert(Ue),he.convert(Ge),pe)}finally{const Te=q!==null?Y.get(q).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(y,F,K,k,W,pe,xe,fe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Y.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee)if(F>=0&&F<=y.width-k&&K>=0&&K<=y.height-W){x.bindFramebuffer(B.FRAMEBUFFER,Ee);const Te=y.textures[fe],Ue=Te.format,Ge=Te.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe);const be=uo(Te);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.bufferData(B.PIXEL_PACK_BUFFER,pe.byteLength,B.STREAM_READ),B.readPixels(F,K,k,W,he.convert(Ue),he.convert(Ge),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const mt=q!==null?Y.get(q).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,mt);const ot=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ph(B,ot,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,pe),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(je),B.deleteSync(ot),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,K=0){const k=Math.pow(2,-K),W=Math.floor(y.image.width*k),pe=Math.floor(y.image.height*k),xe=F!==null?F.x:0,fe=F!==null?F.y:0;Q.setTexture2D(y,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,xe,fe,W,pe),x.unbindTexture()},this.copyTextureToTexture=function(y,F,K=null,k=null,W=0,pe=0){let xe,fe,Ee,Te,Ue,Ge,be,je,mt;const ot=y.isCompressedTexture?y.mipmaps[pe]:y.image;if(K!==null)xe=K.max.x-K.min.x,fe=K.max.y-K.min.y,Ee=K.isBox3?K.max.z-K.min.z:1,Te=K.min.x,Ue=K.min.y,Ge=K.isBox3?K.min.z:0;else{const ft=Math.pow(2,-W);xe=Math.floor(ot.width*ft),fe=Math.floor(ot.height*ft),y.isDataArrayTexture?Ee=ot.depth:y.isData3DTexture?Ee=Math.floor(ot.depth*ft):Ee=1,Te=0,Ue=0,Ge=0}k!==null?(be=k.x,je=k.y,mt=k.z):(be=0,je=0,mt=0);const it=he.convert(F.format),Rt=he.convert(F.type);let _e;F.isData3DTexture?(Q.setTexture3D(F,0),_e=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Q.setTexture2DArray(F,0),_e=B.TEXTURE_2D_ARRAY):(Q.setTexture2D(F,0),_e=B.TEXTURE_2D),x.activeTexture(B.TEXTURE0),x.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);const Nt=x.getParameter(B.UNPACK_ROW_LENGTH),Ke=x.getParameter(B.UNPACK_IMAGE_HEIGHT),Xt=x.getParameter(B.UNPACK_SKIP_PIXELS),on=x.getParameter(B.UNPACK_SKIP_ROWS),Bn=x.getParameter(B.UNPACK_SKIP_IMAGES);x.pixelStorei(B.UNPACK_ROW_LENGTH,ot.width),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot.height),x.pixelStorei(B.UNPACK_SKIP_PIXELS,Te),x.pixelStorei(B.UNPACK_SKIP_ROWS,Ue),x.pixelStorei(B.UNPACK_SKIP_IMAGES,Ge);const ui=y.isDataArrayTexture||y.isData3DTexture,nt=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const ft=Y.get(y),zn=Y.get(F),at=Y.get(ft.__renderTarget),Gn=Y.get(zn.__renderTarget);x.bindFramebuffer(B.READ_FRAMEBUFFER,at.__webglFramebuffer),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let di=0;di<Ee;di++)ui&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Y.get(y).__webglTexture,W,Ge+di),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Y.get(F).__webglTexture,pe,mt+di)),B.blitFramebuffer(Te,Ue,xe,fe,be,je,xe,fe,B.DEPTH_BUFFER_BIT,B.NEAREST);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||y.isRenderTargetTexture||Y.has(y)){const ft=Y.get(y),zn=Y.get(F);x.bindFramebuffer(B.READ_FRAMEBUFFER,P),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,N);for(let at=0;at<Ee;at++)ui?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ft.__webglTexture,W,Ge+at):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ft.__webglTexture,W),nt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,zn.__webglTexture,pe,mt+at):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,zn.__webglTexture,pe),W!==0?B.blitFramebuffer(Te,Ue,xe,fe,be,je,xe,fe,B.COLOR_BUFFER_BIT,B.NEAREST):nt?B.copyTexSubImage3D(_e,pe,be,je,mt+at,Te,Ue,xe,fe):B.copyTexSubImage2D(_e,pe,be,je,Te,Ue,xe,fe);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else nt?y.isDataTexture||y.isData3DTexture?B.texSubImage3D(_e,pe,be,je,mt,xe,fe,Ee,it,Rt,ot.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(_e,pe,be,je,mt,xe,fe,Ee,it,ot.data):B.texSubImage3D(_e,pe,be,je,mt,xe,fe,Ee,it,Rt,ot):y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,pe,be,je,xe,fe,it,Rt,ot.data):y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,pe,be,je,ot.width,ot.height,it,ot.data):B.texSubImage2D(B.TEXTURE_2D,pe,be,je,xe,fe,it,Rt,ot);x.pixelStorei(B.UNPACK_ROW_LENGTH,Nt),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ke),x.pixelStorei(B.UNPACK_SKIP_PIXELS,Xt),x.pixelStorei(B.UNPACK_SKIP_ROWS,on),x.pixelStorei(B.UNPACK_SKIP_IMAGES,Bn),pe===0&&F.generateMipmaps&&B.generateMipmap(_e),x.unbindTexture()},this.initRenderTarget=function(y){Y.get(y).__webglFramebuffer===void 0&&Q.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Q.setTextureCube(y,0):y.isData3DTexture?Q.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Q.setTexture2DArray(y,0):Q.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){U=0,V=0,q=null,x.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}}const fc=[];for(const r of[-1,1])for(const e of[-1,1])for(const t of[-1,1])fc.push([r,e,t]);function ng(r){r.sort((i,s)=>i[0]-s[0]||i[1]-s[1]);const e=(i,s,a)=>(s[0]-i[0])*(a[1]-i[1])-(s[1]-i[1])*(a[0]-i[0]),t=[],n=[];for(const i of r){for(;t.length>=2&&e(t[t.length-2],t[t.length-1],i)<=0;)t.pop();t.push(i)}for(let i=r.length-1;i>=0;i--){const s=r[i];for(;n.length>=2&&e(n[n.length-2],n[n.length-1],s)<=0;)n.pop();n.push(s)}return t.slice(0,-1).concat(n.slice(0,-1))}function ig(){const r=document.createElement("canvas");r.width=r.height=256;const e=r.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,.7)"),t.addColorStop(.65,"rgba(255,255,255,.2)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new ec(r)}class sg{constructor(e,t){this.R=t,this.renderer=new tg({canvas:e,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.scene=new Ph,this.camera=new Ht(t.fov,1,1,200),this.camera.position.set(0,t.H,0),this.camera.up.set(0,0,-1),this.camera.lookAt(0,0,0);const n=Math.PI;this.hemi=new Zh(16777215,12169416,t.ambiante*n),this.appoint=new eu(16777215,t.appoint*n),this.spot=new Qh(16777215,t.lumiere*n,0,Math.PI/3,0,0),this.scene.add(this.hemi,this.appoint,this.spot,this.spot.target);const i=()=>Array.from({length:6},()=>new Xe);this.sol=new Kt(new Di(1,1),new rn({transparent:!0,depthWrite:!1,uniforms:{pa:{value:i()},pb:{value:i()},n:{value:0},flou:{value:.1},rayon:{value:0},opacite:{value:t.ombre}},vertexShader:"varying vec2 vP; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vP = w.xz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
                }`})),this.sol.rotation.x=-Math.PI/2,this.sol.position.y=.005,this.scene.add(this.sol),this.tache=new Kt(new Di(1,1),new Wa({map:ig(),color:0,transparent:!0,depthWrite:!1,opacity:0})),this.tache.rotation.x=-Math.PI/2,this.tache.position.y=.01,this.tache.renderOrder=1,this.scene.add(this.tache)}add(e){this.scene.add(e)}pastille(e){const t=this.cadre.s,n=e.position.clone();n.y+=t/2;const i=n.clone();i.x+=t*this.R.cercle/2;const s=n.clone().project(this.camera),a=i.project(this.camera),o=u=>({x:(u.x+1)/2*innerWidth,y:(1-u.y)/2*innerHeight}),c=o(s),l=o(a);return{x:c.x,y:c.y,r:Math.hypot(l.x-c.x,l.y-c.y)}}resize(){const e=this.R,t=innerWidth,n=innerHeight;this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,2)),this.renderer.setSize(t,n,!1),this.camera.fov=e.fov,this.camera.aspect=t/n,this.camera.updateProjectionMatrix();const i=e.H*Math.tan(e.fov/2*Math.PI/180),s=i*t/n,a=Math.max(i*.15,Math.min(s,i)*e.taille);return this.cadre={hw:s,hh:i,H:e.H,s:a},this.appliquerRendu(),this.cadre}appliquerRendu(){const e=this.R,t=this.cadre;if(!t)return;const n=t.H*e.lampe;this.spot.position.set(t.hw*e.lumiereX*e.lampe,n,t.hh*e.lumiereZ*e.lampe);const i=Math.hypot(t.hw+Math.abs(this.spot.position.x),t.hh+Math.abs(this.spot.position.z));this.spot.angle=Math.min(1.45,Math.atan(i/n)*1.08),this.appoint.position.set(-t.hw*e.lumiereX*2,t.H*.35,-t.hh*e.lumiereZ*2)}dessinerOmbre(e,t,n=1){const i=this.R,s=this.cadre.s*n,a=this.spot.position,o=s/2*(1-i.arrondi*.9),c=new X,l=fc.map(([f,v,T])=>{c.set(f*o,v*o,T*o).applyQuaternion(e.quaternion).add(e.position);const S=a.y/Math.max(.001,a.y-c.y);return[a.x+(c.x-a.x)*S,a.z+(c.z-a.z)*S]});let u=ng(l);u.length>6&&(u=u.slice(0,6));const d=this.sol.material.uniforms,h=u.length;u.forEach((f,v)=>{d.pa.value[v].set(f[0],f[1]);const T=u[(v+1)%h];d.pb.value[v].set(T[0],T[1])}),d.n.value=h;const p=s*(.03+i.flou*.05+t*i.flouHauteur*.14);d.flou.value=p,d.rayon.value=s*i.arrondi*.7,d.opacite.value=i.ombre*Math.max(.55,1-t*i.ombreFondu/4);const g=u.reduce((f,v)=>f+v[0],0)/h,_=u.reduce((f,v)=>f+v[1],0)/h,m=2*(Math.max(...u.map(f=>Math.hypot(f[0]-g,f[1]-_)))+p*1.2+s*.1);this.sol.position.x=g,this.sol.position.z=_,this.sol.scale.set(m,m,1)}poser(e,t,n){const i=this.R,s=this.cadre.s;if(!t||!t.length)return;let a=Math.floor(n);(!isFinite(a)||a<0)&&(a=0);const o=Math.min(t.length-1,a),c=Math.min(t.length-1,o+1),l=n-a,u=t[o],d=t[c];if(!u||!d)return;e.position.set(u[0]+(d[0]-u[0])*l,u[1]+(d[1]-u[1])*l,u[2]+(d[2]-u[2])*l),e.quaternion.copy(new xn(u[3],u[4],u[5],u[6]).slerp(new xn(d[3],d[4],d[5],d[6]),l));const h=e.scale.x,p=Math.max(0,e.position.y-s/2),g=p/s;this.dessinerOmbre(e,g,h),this.tache.position.x=e.position.x-i.lumiereX*p*.25,this.tache.position.z=e.position.z-i.lumiereZ*p*.25;const _=s*h*(i.tacheTaille+p/s*.9);this.tache.scale.set(_,_,1),this.tache.material.opacity=i.tache*Math.max(0,1-p/(s*i.tacheFondu))**1.5,this.renderer.render(this.scene,this.camera)}}const Yi=new X;function Yt(r,e,t,n,i,s){const a=2*Math.PI*i/4,o=Math.max(s-2*i,0),c=Math.PI/4;Yi.copy(e),Yi[n]=0,Yi.normalize();const l=.5*a/(a+o),u=1-Yi.angleTo(r)/c;return Math.sign(Yi[t])===1?u*l:o/(a+o)+l+l*(1-u)}class Ka extends Bi{constructor(e=1,t=1,n=1,i=2,s=.1){const a=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new X,l=new X,u=new X(e,t,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,g=d.length/6,_=new X,m=.5/a;for(let f=0,v=0;f<d.length;f+=3,v+=2)switch(c.fromArray(d,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[f+0]=u.x*Math.sign(c.x)+l.x*s,d[f+1]=u.y*Math.sign(c.y)+l.y*s,d[f+2]=u.z*Math.sign(c.z)+l.z*s,h[f+0]=l.x,h[f+1]=l.y,h[f+2]=l.z,Math.floor(f/g)){case 0:_.set(1,0,0),p[v+0]=Yt(_,l,"z","y",s,n),p[v+1]=1-Yt(_,l,"y","z",s,t);break;case 1:_.set(-1,0,0),p[v+0]=1-Yt(_,l,"z","y",s,n),p[v+1]=1-Yt(_,l,"y","z",s,t);break;case 2:_.set(0,1,0),p[v+0]=1-Yt(_,l,"x","z",s,e),p[v+1]=Yt(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),p[v+0]=1-Yt(_,l,"x","z",s,e),p[v+1]=1-Yt(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),p[v+0]=1-Yt(_,l,"x","y",s,e),p[v+1]=1-Yt(_,l,"y","x",s,t);break;case 5:_.set(0,0,-1),p[v+0]=Yt(_,l,"x","y",s,e),p[v+1]=1-Yt(_,l,"y","x",s,t);break}}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.segments,e.radius)}}function rg(r,e,t){const n=Math.abs(r),i=Math.abs(e),s=Math.abs(t);return n>=i&&n>=s?r>0?0:1:i>=s?e>0?2:3:t>0?4:5}class ag{constructor(e,t){this.R=t,this.materials=new Map,this.geometry=new Ka(e,e,e,4,e*t.arrondi),this.assignGroups(),this.mesh=new Kt(this.geometry,[])}assignGroups(){const e=this.geometry,t=e.attributes.normal,n=e.index,i=n?n.count/3:e.attributes.position.count/3;e.clearGroups();for(let s=0;s<i;s++){const a=n?n.getX(s*3):s*3;e.addGroup(s*3,3,rg(t.getX(a),t.getY(a),t.getZ(a)))}}material(e){if(this.materials.has(e))return this.materials.get(e);const t=document.createElement("canvas");t.width=t.height=512;const n=t.getContext("2d");n.fillStyle="#F7F5F2",n.fillRect(0,0,512,512),n.fillStyle=e,n.beginPath(),n.arc(256,256,256*this.R.cercle,0,Math.PI*2),n.fill();const i=new ec(t);i.colorSpace=Vt,i.anisotropy=8;const s=new Yh({map:i,roughness:this.R.rugosite,metalness:0});return this.materials.set(e,s),s}setFaces(e){this.mesh.material=e.map(t=>this.material(t))}swapFace(e,t){this.mesh.material[e]=this.material(t)}dispose(){this.geometry.dispose(),this.materials.forEach(e=>{var t;(t=e.map)==null||t.dispose(),e.dispose()})}}class nn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new E);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new E);const n=this.elements,i=e.x,s=e.y,a=e.z;return t.x=n[0]*i+n[1]*s+n[2]*a,t.y=n[3]*i+n[4]*s+n[5]*a,t.z=n[6]*i+n[7]*s+n[8]*a,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new nn);const n=this.elements,i=e.elements,s=t.elements,a=n[0],o=n[1],c=n[2],l=n[3],u=n[4],d=n[5],h=n[6],p=n[7],g=n[8],_=i[0],m=i[1],f=i[2],v=i[3],T=i[4],S=i[5],b=i[6],w=i[7],R=i[8];return s[0]=a*_+o*v+c*b,s[1]=a*m+o*T+c*w,s[2]=a*f+o*S+c*R,s[3]=l*_+u*v+d*b,s[4]=l*m+u*T+d*w,s[5]=l*f+u*S+d*R,s[6]=h*_+p*v+g*b,s[7]=h*m+p*T+g*w,s[8]=h*f+p*S+g*R,t}scale(e,t){t===void 0&&(t=new nn);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new E);const n=3,i=4,s=[];let a,o;for(a=0;a<n*i;a++)s.push(0);for(a=0;a<3;a++)for(o=0;o<3;o++)s[a+i*o]=this.elements[a+3*o];s[3]=e.x,s[7]=e.y,s[11]=e.z;let c=3;const l=c;let u;const d=4;let h;do{if(a=l-c,s[a+i*a]===0){for(o=a+1;o<l;o++)if(s[a+i*o]!==0){u=d;do h=d-u,s[h+i*a]+=s[h+i*o];while(--u);break}}if(s[a+i*a]!==0)for(o=a+1;o<l;o++){const p=s[a+i*o]/s[a+i*a];u=d;do h=d-u,s[h+i*o]=h<=a?0:s[h+i*o]-s[h+i*a]*p;while(--u)}}while(--c);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new nn);const t=3,n=6,i=og;let s,a;for(s=0;s<3;s++)for(a=0;a<3;a++)i[s+n*a]=this.elements[s+3*a];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let o=3;const c=o;let l;const u=n;let d;do{if(s=c-o,i[s+n*s]===0){for(a=s+1;a<c;a++)if(i[s+n*a]!==0){l=u;do d=u-l,i[d+n*s]+=i[d+n*a];while(--l);break}}if(i[s+n*s]!==0)for(a=s+1;a<c;a++){const h=i[s+n*a]/i[s+n*s];l=u;do d=u-l,i[d+n*a]=d<=s?0:i[d+n*a]-i[d+n*s]*h;while(--l)}}while(--o);s=2;do{a=s-1;do{const h=i[s+n*a]/i[s+n*s];l=n;do d=n-l,i[d+n*a]=i[d+n*a]-i[d+n*s]*h;while(--l)}while(a--)}while(--s);s=2;do{const h=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*h;while(--l)}while(s--);s=2;do{a=2;do{if(d=i[t+a+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,a,d)}while(a--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,a=t+t,o=n+n,c=i+i,l=t*a,u=t*o,d=t*c,h=n*o,p=n*c,g=i*c,_=s*a,m=s*o,f=s*c,v=this.elements;return v[0]=1-(h+g),v[1]=u-f,v[2]=d+m,v[3]=u+f,v[4]=1-(l+g),v[5]=p-_,v[6]=d-m,v[7]=p+_,v[8]=1-(l+h),this}transpose(e){e===void 0&&(e=new nn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const og=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new E);const n=e.x,i=e.y,s=e.z,a=this.x,o=this.y,c=this.z;return t.x=o*s-c*i,t.y=c*n-a*s,t.z=a*i-o*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new E(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new E(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new nn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new E);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z;return Math.sqrt((s-t)*(s-t)+(a-n)*(a-n)+(o-i)*(o-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z;return(s-t)*(s-t)+(a-n)*(a-n)+(o-i)*(o-i)}scale(e,t){t===void 0&&(t=new E);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new E),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new E),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new E),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=lg,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const a=cg;Math.abs(i.x)<.9?(a.set(1,0,0),i.cross(a,e)):(a.set(0,1,0),i.cross(a,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,a=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=a+(e.z-a)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(hl),hl.almostEquals(e,t)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const lg=new E,cg=new E,hl=new E;class Wt{constructor(e){e===void 0&&(e={}),this.lowerBound=new E,this.upperBound=new E,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,a=this.upperBound,o=n;s.copy(e[0]),o&&o.vmult(s,s),a.copy(s);for(let c=1;c<e.length;c++){let l=e[c];o&&(o.vmult(l,ul),l=ul),l.x>a.x&&(a.x=l.x),l.x<s.x&&(s.x=l.x),l.y>a.y&&(a.y=l.y),l.y<s.y&&(s.y=l.y),l.z>a.z&&(a.z=l.z),l.z<s.z&&(s.z=l.z)}return t&&(t.vadd(s,s),t.vadd(a,a)),i&&(s.x-=i,s.y-=i,s.z-=i,a.x+=i,a.y+=i,a.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Wt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,a=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return a&&o&&c}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,a,o,c){const l=this.lowerBound,u=this.upperBound;e.copy(l),t.set(u.x,l.y,l.z),n.set(u.x,u.y,l.z),i.set(l.x,u.y,u.z),s.set(u.x,l.y,u.z),a.set(l.x,u.y,l.z),o.set(l.x,l.y,u.z),c.copy(u)}toLocalFrame(e,t){const n=dl,i=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(i,s,a,o,c,l,u,d);for(let h=0;h!==8;h++){const p=n[h];e.pointToLocal(p,p)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=dl,i=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(i,s,a,o,c,l,u,d);for(let h=0;h!==8;h++){const p=n[h];e.pointToWorld(p,p)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,a=1/t.z,o=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*a,h=(this.upperBound.z-n.z)*a,p=Math.max(Math.max(Math.min(o,c),Math.min(l,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(o,c),Math.max(l,u)),Math.max(d,h));return!(g<0||p>g)}}const ul=new E,dl=[new E,new E,new E,new E,new E,new E,new E,new E];class fl{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const a=s;s=i,i=a}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class pc{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class vt{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new E),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=hg,i=ug;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new vt);const n=this.x,i=this.y,s=this.z,a=this.w,o=e.x,c=e.y,l=e.z,u=e.w;return t.x=n*u+a*o+i*l-s*c,t.y=i*u+a*c+s*o-n*l,t.z=s*u+a*l+n*c-i*o,t.w=a*u-n*o-i*c-s*l,t}inverse(e){e===void 0&&(e=new vt);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const a=1/(t*t+n*n+i*i+s*s);return e.x*=a,e.y*=a,e.z*=a,e.w*=a,e}conjugate(e){return e===void 0&&(e=new vt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new E);const n=e.x,i=e.y,s=e.z,a=this.x,o=this.y,c=this.z,l=this.w,u=l*n+o*s-c*i,d=l*i+c*n-a*s,h=l*s+a*i-o*n,p=-a*n-o*i-c*s;return t.x=u*l+p*-a+d*-c-h*-o,t.y=d*l+p*-o+h*-a-u*-c,t.z=h*l+p*-c+u*-o-d*-a,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const a=this.x,o=this.y,c=this.z,l=this.w;switch(t){case"YZX":const u=a*o+c*l;if(u>.499&&(n=2*Math.atan2(a,l),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(a,l),i=-Math.PI/2,s=0),n===void 0){const d=a*a,h=o*o,p=c*c;n=Math.atan2(2*o*l-2*a*c,1-2*h-2*p),i=Math.asin(2*u),s=Math.atan2(2*a*l-2*o*c,1-2*d-2*p)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),a=Math.cos(t/2),o=Math.cos(n/2),c=Math.sin(e/2),l=Math.sin(t/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=c*a*o+s*l*u,this.y=s*l*o-c*a*u,this.z=s*a*u+c*l*o,this.w=s*a*o-c*l*u):i==="YXZ"?(this.x=c*a*o+s*l*u,this.y=s*l*o-c*a*u,this.z=s*a*u-c*l*o,this.w=s*a*o+c*l*u):i==="ZXY"?(this.x=c*a*o-s*l*u,this.y=s*l*o+c*a*u,this.z=s*a*u+c*l*o,this.w=s*a*o-c*l*u):i==="ZYX"?(this.x=c*a*o-s*l*u,this.y=s*l*o+c*a*u,this.z=s*a*u-c*l*o,this.w=s*a*o+c*l*u):i==="YZX"?(this.x=c*a*o+s*l*u,this.y=s*l*o+c*a*u,this.z=s*a*u-c*l*o,this.w=s*a*o-c*l*u):i==="XZY"&&(this.x=c*a*o-s*l*u,this.y=s*l*o-c*a*u,this.z=s*a*u+c*l*o,this.w=s*a*o+c*l*u),this}clone(){return new vt(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new vt);const i=this.x,s=this.y,a=this.z,o=this.w;let c=e.x,l=e.y,u=e.z,d=e.w,h,p,g,_,m;return p=i*c+s*l+a*u+o*d,p<0&&(p=-p,c=-c,l=-l,u=-u,d=-d),1-p>1e-6?(h=Math.acos(p),g=Math.sin(h),_=Math.sin((1-t)*h)/g,m=Math.sin(t*h)/g):(_=1-t,m=t),n.x=_*i+m*c,n.y=_*s+m*l,n.z=_*a+m*u,n.w=_*o+m*d,n}integrate(e,t,n,i){i===void 0&&(i=new vt);const s=e.x*n.x,a=e.y*n.y,o=e.z*n.z,c=this.x,l=this.y,u=this.z,d=this.w,h=t*.5;return i.x+=h*(s*d+a*u-o*l),i.y+=h*(a*d+o*c-s*u),i.z+=h*(o*d+s*l-a*c),i.w+=h*(-s*c-a*l-o*u),i}}const hg=new E,ug=new E,dg={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Se{constructor(e){e===void 0&&(e={}),this.id=Se.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Se.idCounter=0;Se.types=dg;class Je{constructor(e){e===void 0&&(e={}),this.position=new E,this.quaternion=new vt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Je.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Je.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new E),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new E),n.vsub(e,i),t.conjugate(pl),pl.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new E),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new E),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new E),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const pl=new vt;class ts extends Se{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:a}=e;super({type:Se.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new E;for(let s=0;s!==e.length;s++){const a=e[s],o=a.length;for(let c=0;c!==o;c++){const l=(c+1)%o;t[a[c]].vsub(t[a[l]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new E;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],a=this.vertices[n[2]];ts.computeNormal(i,s,a,t)}static computeNormal(e,t,n,i){const s=new E,a=new E;t.vsub(e,a),n.vsub(t,s),s.cross(a,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,a,o,c,l){const u=new E;let d=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),s.vmult(u,u);const _=u.dot(a);_>h&&(h=_,d=g)}const p=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],m=new E;m.copy(_),s.vmult(m,m),i.vadd(m,m),p.push(m)}d>=0&&this.clipFaceAgainstHull(a,e,t,p,o,c,l)}findSeparatingAxis(e,t,n,i,s,a,o,c){const l=new E,u=new E,d=new E,h=new E,p=new E,g=new E;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let f=0;f!==m.uniqueAxes.length;f++){n.vmult(m.uniqueAxes[f],l);const v=m.testSepAxis(l,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,a.copy(l))}else{const f=o?o.length:m.faces.length;for(let v=0;v<f;v++){const T=o?o[v]:v;l.copy(m.faceNormals[T]),n.vmult(l,l);const S=m.testSepAxis(l,e,t,n,i,s);if(S===!1)return!1;S<_&&(_=S,a.copy(l))}}if(e.uniqueAxes)for(let f=0;f!==e.uniqueAxes.length;f++){s.vmult(e.uniqueAxes[f],u);const v=m.testSepAxis(u,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,a.copy(u))}else{const f=c?c.length:e.faces.length;for(let v=0;v<f;v++){const T=c?c[v]:v;u.copy(e.faceNormals[T]),s.vmult(u,u);const S=m.testSepAxis(u,e,t,n,i,s);if(S===!1)return!1;S<_&&(_=S,a.copy(u))}}for(let f=0;f!==m.uniqueEdges.length;f++){n.vmult(m.uniqueEdges[f],h);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],p),h.cross(p,g),!g.almostZero()){g.normalize();const T=m.testSepAxis(g,e,t,n,i,s);if(T===!1)return!1;T<_&&(_=T,a.copy(g))}}return i.vsub(t,d),d.dot(a)>0&&a.negate(a),!0}testSepAxis(e,t,n,i,s,a){const o=this;ts.project(o,e,n,i,zr),ts.project(t,e,s,a,Gr);const c=zr[0],l=zr[1],u=Gr[0],d=Gr[1];if(c<d||u<l)return!1;const h=c-d,p=u-l;return h<p?h:p}calculateLocalInertia(e,t){const n=new E,i=new E;this.computeLocalAABB(i,n);const s=n.x-i.x,a=n.y-i.y,o=n.z-i.z;t.x=1/12*e*(2*a*2*a+2*o*2*o),t.y=1/12*e*(2*s*2*s+2*o*2*o),t.z=1/12*e*(2*a*2*a+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,a,o){const c=new E,l=new E,u=new E,d=new E,h=new E,p=new E,g=new E,_=new E,m=this,f=[],v=i,T=f;let S=-1,b=Number.MAX_VALUE;for(let L=0;L<m.faces.length;L++){c.copy(m.faceNormals[L]),n.vmult(c,c);const D=c.dot(e);D<b&&(b=D,S=L)}if(S<0)return;const w=m.faces[S];w.connectedFaces=[];for(let L=0;L<m.faces.length;L++)for(let D=0;D<m.faces[L].length;D++)w.indexOf(m.faces[L][D])!==-1&&L!==S&&w.connectedFaces.indexOf(L)===-1&&w.connectedFaces.push(L);const R=w.length;for(let L=0;L<R;L++){const D=m.vertices[w[L]],z=m.vertices[w[(L+1)%R]];D.vsub(z,l),u.copy(l),n.vmult(u,u),t.vadd(u,u),d.copy(this.faceNormals[S]),n.vmult(d,d),t.vadd(d,d),u.cross(d,h),h.negate(h),p.copy(D),n.vmult(p,p),t.vadd(p,p);const I=w.connectedFaces[L];g.copy(this.faceNormals[I]);const P=this.getPlaneConstantOfFace(I);_.copy(g),n.vmult(_,_);const N=P-_.dot(t);for(this.clipFaceAgainstPlane(v,T,_,N);v.length;)v.shift();for(;T.length;)v.push(T.shift())}g.copy(this.faceNormals[S]);const M=this.getPlaneConstantOfFace(S);_.copy(g),n.vmult(_,_);const A=M-_.dot(t);for(let L=0;L<v.length;L++){let D=_.dot(v[L])+A;if(D<=s&&(console.log(`clamped: depth=${D} to minDist=${s}`),D=s),D<=a){const z=v[L];if(D<=1e-6){const I={point:z,normal:_,depth:D};o.push(I)}}}}clipFaceAgainstPlane(e,t,n,i){let s,a;const o=e.length;if(o<2)return t;let c=e[e.length-1],l=e[0];s=n.dot(c)+i;for(let u=0;u<o;u++){if(l=e[u],a=n.dot(l)+i,s<0)if(a<0){const d=new E;d.copy(l),t.push(d)}else{const d=new E;c.lerp(l,s/(s-a),d),t.push(d)}else if(a<0){const d=new E;c.lerp(l,s/(s-a),d),t.push(d),t.push(l)}c=l,s=a}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new E);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let a,o,c,l,u,d,h=new E;for(let p=0;p<s.length;p++){h.copy(s[p]),t.vmult(h,h),e.vadd(h,h);const g=h;(a===void 0||g.x<a)&&(a=g.x),(l===void 0||g.x>l)&&(l=g.x),(o===void 0||g.y<o)&&(o=g.y),(u===void 0||g.y>u)&&(u=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(a,o,c),i.set(l,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new E);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const a=i[s];t.vmult(a,a)}for(let s=0;s<this.faceNormals.length;s++){const a=this.faceNormals[s];t.vmult(a,a)}}if(e)for(let s=0;s<n;s++){const a=i[s];a.vadd(e,a)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=new E;this.getAveragePointLocal(s);for(let a=0;a<this.faces.length;a++){let o=i[a];const c=t[n[a][0]],l=new E;e.vsub(c,l);const u=o.dot(l),d=new E;s.vsub(c,d);const h=o.dot(d);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(e,t,n,i,s){const a=e.vertices.length,o=fg;let c=0,l=0;const u=pg,d=e.vertices;u.setZero(),Je.vectorToLocalFrame(n,i,t,o),Je.pointToLocalFrame(n,i,u,u);const h=u.dot(o);l=c=d[0].dot(o);for(let p=1;p<a;p++){const g=d[p].dot(o);g>c&&(c=g),g<l&&(l=g)}if(l-=h,c-=h,l>c){const p=l;l=c,c=p}s[0]=c,s[1]=l}}const zr=[],Gr=[];new E;const fg=new E,pg=new E;class ir extends Se{constructor(e){super({type:Se.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=E,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new ts({vertices:s,faces:a,axes:o});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new E),ir.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let a=0;a<s.length;a++)qn.set(s[a][0],s[a][1],s[a][2]),t.vmult(qn,qn),e.vadd(qn,qn),n(qn.x,qn.y,qn.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;hn[0].set(s.x,s.y,s.z),hn[1].set(-s.x,s.y,s.z),hn[2].set(-s.x,-s.y,s.z),hn[3].set(-s.x,-s.y,-s.z),hn[4].set(s.x,-s.y,-s.z),hn[5].set(s.x,s.y,-s.z),hn[6].set(-s.x,s.y,-s.z),hn[7].set(s.x,-s.y,s.z);const a=hn[0];t.vmult(a,a),e.vadd(a,a),i.copy(a),n.copy(a);for(let o=1;o<8;o++){const c=hn[o];t.vmult(c,c),e.vadd(c,c);const l=c.x,u=c.y,d=c.z;l>i.x&&(i.x=l),u>i.y&&(i.y=u),d>i.z&&(i.z=d),l<n.x&&(n.x=l),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const qn=new E,hn=[new E,new E,new E,new E,new E,new E,new E,new E],$a={DYNAMIC:1,STATIC:2,KINEMATIC:4},Za={AWAKE:0,SLEEPY:1,SLEEPING:2};class ye extends pc{constructor(e){e===void 0&&(e={}),super(),this.id=ye.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new E,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new E,this.force=new E;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ye.STATIC:ye.DYNAMIC,typeof e.type==typeof ye.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ye.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new vt,this.initQuaternion=new vt,this.previousQuaternion=new vt,this.interpolatedQuaternion=new vt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new E,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new nn,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new nn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new E(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new E(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Wt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ye.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ye.SLEEPING&&this.dispatchEvent(ye.wakeupEvent)}sleep(){this.sleepState=ye.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===ye.AWAKE&&n<i?(this.sleepState=ye.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ye.sleepyEvent)):t===ye.SLEEPY&&n>i?this.wakeUp():t===ye.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ye.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ye.SLEEPING||this.type===ye.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new E),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new E),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new E),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new E),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new E,s=new vt;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const a=e[s];a.updateBoundingSphereRadius();const o=t[s].length(),c=a.boundingSphereRadius;o+c>i&&(i=o+c)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=mg,a=gg,o=this.quaternion,c=this.aabb,l=_g;for(let u=0;u!==i;u++){const d=e[u];o.vmult(t[u],s),s.vadd(this.position,s),o.mult(n[u],a),d.calculateWorldAABB(s,a,l.lowerBound,l.upperBound),u===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=vg,i=xg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new E),this.type!==ye.DYNAMIC)return;this.sleepState===ye.SLEEPING&&this.wakeUp();const n=Mg;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new E),this.type!==ye.DYNAMIC)return;const n=Sg,i=yg;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===ye.DYNAMIC&&(this.sleepState===ye.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new E),this.type!==ye.DYNAMIC)return;this.sleepState===ye.SLEEPING&&this.wakeUp();const n=t,i=Eg;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=bg;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new E),this.type!==ye.DYNAMIC)return;const n=wg,i=Tg;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=Ag;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ir.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new E;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ye.DYNAMIC||this.type===ye.KINEMATIC)||this.sleepState===ye.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,a=this.position,o=this.force,c=this.torque,l=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,p=u*e;i.x+=o.x*p*h.x,i.y+=o.y*p*h.y,i.z+=o.z*p*h.z;const g=d.elements,_=this.angularFactor,m=c.x*_.x,f=c.y*_.y,v=c.z*_.z;s.x+=e*(g[0]*m+g[1]*f+g[2]*v),s.y+=e*(g[3]*m+g[4]*f+g[5]*v),s.z+=e*(g[6]*m+g[7]*f+g[8]*v),a.x+=i.x*e,a.y+=i.y*e,a.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ye.idCounter=0;ye.COLLIDE_EVENT_NAME="collide";ye.DYNAMIC=$a.DYNAMIC;ye.STATIC=$a.STATIC;ye.KINEMATIC=$a.KINEMATIC;ye.AWAKE=Za.AWAKE;ye.SLEEPY=Za.SLEEPY;ye.SLEEPING=Za.SLEEPING;ye.wakeupEvent={type:"wakeup"};ye.sleepyEvent={type:"sleepy"};ye.sleepEvent={type:"sleep"};const mg=new E,gg=new vt,_g=new Wt,vg=new nn,xg=new nn;new nn;const Mg=new E,Sg=new E,yg=new E,Eg=new E,bg=new E,wg=new E,Tg=new E,Ag=new E;class Rg{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&ye.STATIC)!==0||e.sleepState===ye.SLEEPING)&&((t.type&ye.STATIC)!==0||t.sleepState===ye.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=Cg;t.position.vsub(e.position,s);const a=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<a&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=Pg,i=Lg,s=Ig,a=e.length;for(let o=0;o!==a;o++)i[o]=e[o],s[o]=t[o];e.length=0,t.length=0;for(let o=0;o!==a;o++){const c=i[o].id,l=s[o].id,u=c<l?`${c},${l}`:`${l},${c}`;n[u]=o,n.keys.push(u)}for(let o=0;o!==n.keys.length;o++){const c=n.keys.pop(),l=n[c];e.push(i[l]),t.push(s[l]),delete n[c]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new E;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Cg=new E;new E;new vt;new E;const Pg={keys:[]},Lg=[],Ig=[];new E;new E;new E;class mc extends Rg{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let a,o;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)a=i[c],o=i[l],this.needBroadphaseCollision(a,o)&&this.intersectionTest(a,o,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class Qs{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,a,o){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=a,this.distance=o}}let gc,_c,vc,xc,Mc,Sc,yc;const Ja={CLOSEST:1,ANY:2,ALL:4};gc=Se.types.SPHERE;_c=Se.types.PLANE;vc=Se.types.BOX;xc=Se.types.CYLINDER;Mc=Se.types.CONVEXPOLYHEDRON;Sc=Se.types.HEIGHTFIELD;yc=Se.types.TRIMESH;class _t{get[gc](){return this._intersectSphere}get[_c](){return this._intersectPlane}get[vc](){return this._intersectBox}get[xc](){return this._intersectConvex}get[Mc](){return this._intersectConvex}get[Sc](){return this._intersectHeightfield}get[yc](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new E),t===void 0&&(t=new E),this.from=e.clone(),this.to=t.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=_t.ANY,this.result=new Qs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||_t.ANY,this.result=t.result||new Qs,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ml),Vr.length=0,e.broadphase.aabbQuery(e,ml,Vr),this.intersectBodies(Vr),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=Ng,s=Dg;for(let a=0,o=e.shapes.length;a<o;a++){const c=e.shapes[a];if(!(n&&!c.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[a],s),e.quaternion.vmult(e.shapeOffsets[a],i),i.vadd(e.position,i),this.intersectShape(c,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(Kg(s,this.direction,n)>e.boundingSphereRadius)return;const o=this[e.type];o&&o.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const a=this.from,o=this.to,c=this.direction,l=new E(0,0,1);t.vmult(l,l);const u=new E;a.vsub(n,u);const d=u.dot(l);o.vsub(n,u);const h=u.dot(l);if(d*h>0||a.distanceTo(o)<d)return;const p=l.dot(c);if(Math.abs(p)<this.precision)return;const g=new E,_=new E,m=new E;a.vsub(n,g);const f=-l.dot(g)/p;c.scale(f,_),a.vadd(_,m),this.reportIntersection(l,m,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const a=Ug;a.from.copy(this.from),a.to.copy(this.to),Je.pointToLocalFrame(n,t,a.from,a.from),Je.pointToLocalFrame(n,t,a.to,a.to),a.updateDirection();const o=Fg;let c,l,u,d;c=l=0,u=d=e.data.length-1;const h=new Wt;a.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,o,!0),c=Math.max(c,o[0]),l=Math.max(l,o[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,o,!0),u=Math.min(u,o[0]+1),d=Math.min(d,o[1]+1);for(let p=c;p<u;p++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,g,h),!!h.overlapsRay(a)){if(e.getConvexTrianglePillar(p,g,!1),Je.pointToWorldFrame(n,t,e.pillarOffset,Us),this._intersectConvex(e.pillarConvex,t,Us,i,s,gl),this.result.shouldStop)return;e.getConvexTrianglePillar(p,g,!0),Je.pointToWorldFrame(n,t,e.pillarOffset,Us),this._intersectConvex(e.pillarConvex,t,Us,i,s,gl)}}}_intersectSphere(e,t,n,i,s){const a=this.from,o=this.to,c=e.radius,l=(o.x-a.x)**2+(o.y-a.y)**2+(o.z-a.z)**2,u=2*((o.x-a.x)*(a.x-n.x)+(o.y-a.y)*(a.y-n.y)+(o.z-a.z)*(a.z-n.z)),d=(a.x-n.x)**2+(a.y-n.y)**2+(a.z-n.z)**2-c**2,h=u**2-4*l*d,p=Og,g=Bg;if(!(h<0))if(h===0)a.lerp(o,h,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1);else{const _=(-u-Math.sqrt(h))/(2*l),m=(-u+Math.sqrt(h))/(2*l);if(_>=0&&_<=1&&(a.lerp(o,_,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(a.lerp(o,m,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1))}}_intersectConvex(e,t,n,i,s,a){const o=zg,c=_l,l=a&&a.faceList||null,u=e.faces,d=e.vertices,h=e.faceNormals,p=this.direction,g=this.from,_=this.to,m=g.distanceTo(_),f=l?l.length:u.length,v=this.result;for(let T=0;!v.shouldStop&&T<f;T++){const S=l?l[T]:T,b=u[S],w=h[S],R=t,M=n;c.copy(d[b[0]]),R.vmult(c,c),c.vadd(M,c),c.vsub(g,c),R.vmult(w,o);const A=p.dot(o);if(Math.abs(A)<this.precision)continue;const L=o.dot(c)/A;if(!(L<0)){p.scale(L,Ot),Ot.vadd(g,Ot),jt.copy(d[b[0]]),R.vmult(jt,jt),M.vadd(jt,jt);for(let D=1;!v.shouldStop&&D<b.length-1;D++){un.copy(d[b[D]]),dn.copy(d[b[D+1]]),R.vmult(un,un),R.vmult(dn,dn),M.vadd(un,un),M.vadd(dn,dn);const z=Ot.distanceTo(g);!(_t.pointInTriangle(Ot,jt,un,dn)||_t.pointInTriangle(Ot,un,jt,dn))||z>m||this.reportIntersection(o,Ot,s,i,S)}}}}_intersectTrimesh(e,t,n,i,s,a){const o=Gg,c=qg,l=Yg,u=_l,d=Vg,h=Hg,p=kg,g=Xg,_=Wg,m=e.indices;e.vertices;const f=this.from,v=this.to,T=this.direction;l.position.copy(n),l.quaternion.copy(t),Je.vectorToLocalFrame(n,t,T,d),Je.pointToLocalFrame(n,t,f,h),Je.pointToLocalFrame(n,t,v,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,p.vsub(h,d),d.normalize();const S=h.distanceSquared(p);e.tree.rayQuery(this,l,c);for(let b=0,w=c.length;!this.result.shouldStop&&b!==w;b++){const R=c[b];e.getNormal(R,o),e.getVertex(m[R*3],jt),jt.vsub(h,u);const M=d.dot(o),A=o.dot(u)/M;if(A<0)continue;d.scale(A,Ot),Ot.vadd(h,Ot),e.getVertex(m[R*3+1],un),e.getVertex(m[R*3+2],dn);const L=Ot.distanceSquared(h);!(_t.pointInTriangle(Ot,un,jt,dn)||_t.pointInTriangle(Ot,jt,un,dn))||L>S||(Je.vectorToWorldFrame(t,o,_),Je.pointToWorldFrame(n,t,Ot,g),this.reportIntersection(_,g,s,i,R))}c.length=0}reportIntersection(e,t,n,i,s){const a=this.from,o=this.to,c=a.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case _t.ALL:this.hasHit=!0,l.set(a,o,e,t,n,i,c),l.hasHit=!0,this.callback(l);break;case _t.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(a,o,e,t,n,i,c));break;case _t.ANY:this.hasHit=!0,l.hasHit=!0,l.set(a,o,e,t,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,ii),n.vsub(t,Ki),e.vsub(t,Hr);const s=ii.dot(ii),a=ii.dot(Ki),o=ii.dot(Hr),c=Ki.dot(Ki),l=Ki.dot(Hr);let u,d;return(u=c*o-a*l)>=0&&(d=s*l-a*o)>=0&&u+d<s*c-a*a}}_t.CLOSEST=Ja.CLOSEST;_t.ANY=Ja.ANY;_t.ALL=Ja.ALL;const ml=new Wt,Vr=[],Ki=new E,Hr=new E,Ng=new E,Dg=new vt,Ot=new E,jt=new E,un=new E,dn=new E;new E;new Qs;const gl={faceList:[0]},Us=new E,Ug=new _t,Fg=[],Og=new E,Bg=new E,zg=new E;new E;new E;const _l=new E,Gg=new E,Vg=new E,Hg=new E,kg=new E,Wg=new E,Xg=new E;new Wt;const qg=[],Yg=new Je,ii=new E,Fs=new E;function Kg(r,e,t){t.vsub(r,ii);const n=ii.dot(e);return e.scale(n,Fs),Fs.vadd(r,Fs),t.distanceTo(Fs)}class $g{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class vl{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class cs{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=cs.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new vl,this.jacobianElementB=new vl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,a=n;this.a=4/(a*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(a*a*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),a=this.computeGiMf();return-s*e-i*t-a*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,a=i.position;return e.spatial.dot(s)+t.spatial.dot(a)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,a=i.velocity,o=n.angularVelocity,c=i.angularVelocity;return e.multiplyVectors(s,o)+t.multiplyVectors(a,c)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,a=i.vlambda,o=n.wlambda,c=i.wlambda;return e.multiplyVectors(s,o)+t.multiplyVectors(a,c)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,a=n.torque,o=i.force,c=i.torque,l=n.invMassSolve,u=i.invMassSolve;return s.scale(l,xl),o.scale(u,Ml),n.invInertiaWorldSolve.vmult(a,Sl),i.invInertiaWorldSolve.vmult(c,yl),e.multiplyVectors(xl,Sl)+t.multiplyVectors(Ml,yl)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,a=i.invMassSolve,o=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+a;return o.vmult(e.rotational,Os),l+=Os.dot(e.rotational),c.vmult(t.rotational,Os),l+=Os.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,a=Zg;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,a),i.wlambda.addScaledVector(e,a,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,a),s.wlambda.addScaledVector(e,a,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}cs.idCounter=0;const xl=new E,Ml=new E,Sl=new E,yl=new E,Os=new E,Zg=new E;class Jg extends cs{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,a=this.ri,o=this.rj,c=Qg,l=jg,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=s.velocity,p=s.angularVelocity;s.force,s.torque;const g=e0,_=this.jacobianElementA,m=this.jacobianElementB,f=this.ni;a.cross(f,c),o.cross(f,l),f.negate(_.spatial),c.negate(_.rotational),m.spatial.copy(f),m.rotational.copy(l),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(a,g);const v=f.dot(g),T=this.restitution+1,S=T*h.dot(f)-T*u.dot(f)+p.dot(l)-d.dot(c),b=this.computeGiMf();return-v*t-S*n-e*b}getImpactVelocityAlongNormal(){const e=t0,t=n0,n=i0,i=s0,s=r0;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const Qg=new E,jg=new E,e0=new E,t0=new E,n0=new E,i0=new E,s0=new E,r0=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class El extends cs{constructor(e,t,n){super(e,t,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=a0,a=o0,o=this.t;n.cross(o,s),i.cross(o,a);const c=this.jacobianElementA,l=this.jacobianElementB;o.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(o),l.rotational.copy(a);const u=this.computeGW(),d=this.computeGiMf();return-u*t-e*d}}const a0=new E,o0=new E;class Fi{constructor(e,t,n){n=$g.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Fi.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Fi.idCounter=0;class ai{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=ai.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}ai.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new _t;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class l0 extends Se{constructor(){super({type:Se.types.PLANE}),this.worldNormal=new E,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new E),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){wn.set(0,0,1),t.vmult(wn,wn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),wn.x===1?i.x=e.x:wn.x===-1&&(n.x=e.x),wn.y===1?i.y=e.y:wn.y===-1&&(n.y=e.y),wn.z===1?i.z=e.z:wn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const wn=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Wt;new E;new Wt;new E;new E;new E;new E;new E;new E;new E;new Wt;new E;new Je;new Wt;class c0{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class h0 extends c0{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,a=this.equations,o=a.length,c=t.bodies,l=c.length,u=e;let d,h,p,g,_,m;if(o!==0)for(let S=0;S!==l;S++)c[S].updateSolveMassProperties();const f=d0,v=f0,T=u0;f.length=o,v.length=o,T.length=o;for(let S=0;S!==o;S++){const b=a[S];T[S]=0,v[S]=b.computeB(u),f[S]=1/b.computeC()}if(o!==0){for(let w=0;w!==l;w++){const R=c[w],M=R.vlambda,A=R.wlambda;M.set(0,0,0),A.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let w=0;w!==o;w++){const R=a[w];d=v[w],h=f[w],m=T[w],_=R.computeGWlambda(),p=h*(d-_-R.eps*m),m+p<R.minForce?p=R.minForce-m:m+p>R.maxForce&&(p=R.maxForce-m),T[w]+=p,g+=p>0?p:-p,R.addToWlambda(p)}if(g*g<s)break}for(let w=0;w!==l;w++){const R=c[w],M=R.velocity,A=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),M.vadd(R.vlambda,M),R.wlambda.vmul(R.angularFactor,R.wlambda),A.vadd(R.wlambda,A)}let S=a.length;const b=1/u;for(;S--;)a[S].multiplier=T[S]*b}return n}}const u0=[],d0=[],f0=[];class p0{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class m0 extends p0{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const lt={sphereSphere:Se.types.SPHERE,spherePlane:Se.types.SPHERE|Se.types.PLANE,boxBox:Se.types.BOX|Se.types.BOX,sphereBox:Se.types.SPHERE|Se.types.BOX,planeBox:Se.types.PLANE|Se.types.BOX,convexConvex:Se.types.CONVEXPOLYHEDRON,sphereConvex:Se.types.SPHERE|Se.types.CONVEXPOLYHEDRON,planeConvex:Se.types.PLANE|Se.types.CONVEXPOLYHEDRON,boxConvex:Se.types.BOX|Se.types.CONVEXPOLYHEDRON,sphereHeightfield:Se.types.SPHERE|Se.types.HEIGHTFIELD,boxHeightfield:Se.types.BOX|Se.types.HEIGHTFIELD,convexHeightfield:Se.types.CONVEXPOLYHEDRON|Se.types.HEIGHTFIELD,sphereParticle:Se.types.PARTICLE|Se.types.SPHERE,planeParticle:Se.types.PLANE|Se.types.PARTICLE,boxParticle:Se.types.BOX|Se.types.PARTICLE,convexParticle:Se.types.PARTICLE|Se.types.CONVEXPOLYHEDRON,cylinderCylinder:Se.types.CYLINDER,sphereCylinder:Se.types.SPHERE|Se.types.CYLINDER,planeCylinder:Se.types.PLANE|Se.types.CYLINDER,boxCylinder:Se.types.BOX|Se.types.CYLINDER,convexCylinder:Se.types.CONVEXPOLYHEDRON|Se.types.CYLINDER,heightfieldCylinder:Se.types.HEIGHTFIELD|Se.types.CYLINDER,particleCylinder:Se.types.PARTICLE|Se.types.CYLINDER,sphereTrimesh:Se.types.SPHERE|Se.types.TRIMESH,planeTrimesh:Se.types.PLANE|Se.types.TRIMESH};class g0{get[lt.sphereSphere](){return this.sphereSphere}get[lt.spherePlane](){return this.spherePlane}get[lt.boxBox](){return this.boxBox}get[lt.sphereBox](){return this.sphereBox}get[lt.planeBox](){return this.planeBox}get[lt.convexConvex](){return this.convexConvex}get[lt.sphereConvex](){return this.sphereConvex}get[lt.planeConvex](){return this.planeConvex}get[lt.boxConvex](){return this.boxConvex}get[lt.sphereHeightfield](){return this.sphereHeightfield}get[lt.boxHeightfield](){return this.boxHeightfield}get[lt.convexHeightfield](){return this.convexHeightfield}get[lt.sphereParticle](){return this.sphereParticle}get[lt.planeParticle](){return this.planeParticle}get[lt.boxParticle](){return this.boxParticle}get[lt.convexParticle](){return this.convexParticle}get[lt.cylinderCylinder](){return this.convexConvex}get[lt.sphereCylinder](){return this.sphereConvex}get[lt.planeCylinder](){return this.planeConvex}get[lt.boxCylinder](){return this.boxConvex}get[lt.convexCylinder](){return this.convexConvex}get[lt.heightfieldCylinder](){return this.heightfieldCylinder}get[lt.particleCylinder](){return this.particleCylinder}get[lt.sphereTrimesh](){return this.sphereTrimesh}get[lt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new m0,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,a){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=e,o.bj=t):o=new Jg(e,t),o.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;o.restitution=c.restitution,o.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||e.material,u=i.material||t.material;return l&&u&&l.restitution>=0&&u.restitution>=0&&(o.restitution=l.restitution*u.restitution),o.si=s||n,o.sj=a||i,o}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,a=e.sj,o=this.world,c=this.currentContactMaterial;let l=c.friction;const u=s.material||n.material,d=a.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(l=u.friction*d.friction),l>0){const h=l*(o.frictionGravity||o.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,_=g.length?g.pop():new El(n,i,h*p),m=g.length?g.pop():new El(n,i,h*p);return _.bi=m.bi=n,_.bj=m.bj=i,_.minForce=m.minForce=-h*p,_.maxForce=m.maxForce=h*p,_.ri.copy(e.ri),_.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(_.t,m.t),_.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,o.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,o.dt),_.enabled=m.enabled=e.enabled,t.push(_,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ni.setZero(),Ti.setZero(),Ai.setZero();const s=t.bi;t.bj;for(let o=0;o!==e;o++)t=this.result[this.result.length-1-o],t.bi!==s?(ni.vadd(t.ni,ni),Ti.vadd(t.ri,Ti),Ai.vadd(t.rj,Ai)):(ni.vsub(t.ni,ni),Ti.vadd(t.rj,Ti),Ai.vadd(t.ri,Ai));const a=1/e;Ti.scale(a,n.ri),Ai.scale(a,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ni.normalize(),ni.tangents(n.t,i.t)}getContacts(e,t,n,i,s,a,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=a;const c=x0,l=M0,u=_0,d=v0;for(let h=0,p=e.length;h!==p;h++){const g=e[h],_=t[h];let m=null;g.material&&_.material&&(m=n.getContactMaterial(g.material,_.material)||null);const f=g.type&ye.KINEMATIC&&_.type&ye.STATIC||g.type&ye.STATIC&&_.type&ye.KINEMATIC||g.type&ye.KINEMATIC&&_.type&ye.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],c),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);const T=g.shapes[v];for(let S=0;S<_.shapes.length;S++){_.quaternion.mult(_.shapeOrientations[S],l),_.quaternion.vmult(_.shapeOffsets[S],d),d.vadd(_.position,d);const b=_.shapes[S];if(!(T.collisionFilterMask&b.collisionFilterGroup&&b.collisionFilterMask&T.collisionFilterGroup)||u.distanceTo(d)>T.boundingSphereRadius+b.boundingSphereRadius)continue;let w=null;T.material&&b.material&&(w=n.getContactMaterial(T.material,b.material)||null),this.currentContactMaterial=w||m||n.defaultContactMaterial;const R=T.type|b.type,M=this[R];if(M){let A=!1;T.type<b.type?A=M.call(this,T,b,u,d,c,l,g,_,T,b,f):A=M.call(this,b,T,d,u,l,c,_,g,T,b,f),A&&f&&(n.shapeOverlapKeeper.set(T.id,b.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(e,t,n,i,s,a,o,c,l,u,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const h=this.createContactEquation(o,c,e,t,l,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(o.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(c.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,n,i,s,a,o,c,l,u,d){const h=this.createContactEquation(o,c,e,t,l,u);if(h.ni.set(0,0,1),a.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),n.vsub(i,Bs),h.ni.scale(h.ni.dot(Bs),bl),Bs.vsub(bl,h.rj),-Bs.dot(h.ni)<=e.radius){if(d)return!0;const p=h.ri,g=h.rj;p.vadd(n,p),p.vsub(o.position,p),g.vadd(i,g),g.vsub(c.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,n,i,s,a,o,c,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,a,o,c,e,t,d)}sphereBox(e,t,n,i,s,a,o,c,l,u,d){const h=this.v3pool,p=q0;n.vsub(i,zs),t.getSideNormals(p,a);const g=e.radius;let _=!1;const m=K0,f=$0,v=Z0;let T=null,S=0,b=0,w=0,R=null;for(let U=0,V=p.length;U!==V&&_===!1;U++){const q=k0;q.copy(p[U]);const G=q.length();q.normalize();const $=zs.dot(q);if($<G+g&&$>0){const Z=W0,ie=X0;Z.copy(p[(U+1)%3]),ie.copy(p[(U+2)%3]);const ge=Z.length(),qe=ie.length();Z.normalize(),ie.normalize();const Oe=zs.dot(Z),He=zs.dot(ie);if(Oe<ge&&Oe>-ge&&He<qe&&He>-qe){const J=Math.abs($-G-g);if((R===null||J<R)&&(R=J,b=Oe,w=He,T=G,m.copy(q),f.copy(Z),v.copy(ie),S++,d))return!0}}}if(S){_=!0;const U=this.createContactEquation(o,c,e,t,l,u);m.scale(-g,U.ri),U.ni.copy(m),U.ni.negate(U.ni),m.scale(T,m),f.scale(b,f),m.vadd(f,m),v.scale(w,v),m.vadd(v,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(o.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let M=h.get();const A=Y0;for(let U=0;U!==2&&!_;U++)for(let V=0;V!==2&&!_;V++)for(let q=0;q!==2&&!_;q++)if(M.set(0,0,0),U?M.vadd(p[0],M):M.vsub(p[0],M),V?M.vadd(p[1],M):M.vsub(p[1],M),q?M.vadd(p[2],M):M.vsub(p[2],M),i.vadd(M,A),A.vsub(n,A),A.lengthSquared()<g*g){if(d)return!0;_=!0;const G=this.createContactEquation(o,c,e,t,l,u);G.ri.copy(A),G.ri.normalize(),G.ni.copy(G.ri),G.ri.scale(g,G.ri),G.rj.copy(M),G.ri.vadd(n,G.ri),G.ri.vsub(o.position,G.ri),G.rj.vadd(i,G.rj),G.rj.vsub(c.position,G.rj),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}h.release(M),M=null;const L=h.get(),D=h.get(),z=h.get(),I=h.get(),P=h.get(),N=p.length;for(let U=0;U!==N&&!_;U++)for(let V=0;V!==N&&!_;V++)if(U%3!==V%3){p[V].cross(p[U],L),L.normalize(),p[U].vadd(p[V],D),z.copy(n),z.vsub(D,z),z.vsub(i,z);const q=z.dot(L);L.scale(q,I);let G=0;for(;G===U%3||G===V%3;)G++;P.copy(n),P.vsub(I,P),P.vsub(D,P),P.vsub(i,P);const $=Math.abs(q),Z=P.length();if($<p[G].length()&&Z<g){if(d)return!0;_=!0;const ie=this.createContactEquation(o,c,e,t,l,u);D.vadd(I,ie.rj),ie.rj.copy(ie.rj),P.negate(ie.ni),ie.ni.normalize(),ie.ri.copy(ie.rj),ie.ri.vadd(i,ie.ri),ie.ri.vsub(n,ie.ri),ie.ri.normalize(),ie.ri.scale(g,ie.ri),ie.ri.vadd(n,ie.ri),ie.ri.vsub(o.position,ie.ri),ie.rj.vadd(i,ie.rj),ie.rj.vsub(c.position,ie.rj),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult)}}h.release(L,D,z,I,P)}planeBox(e,t,n,i,s,a,o,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,a,o,c,e,t,d)}convexConvex(e,t,n,i,s,a,o,c,l,u,d,h,p){const g=u_;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,a,g,h,p)){const _=[],m=d_;e.clipAgainstHull(n,s,t,i,a,g,-100,100,_);let f=0;for(let v=0;v!==_.length;v++){if(d)return!0;const T=this.createContactEquation(o,c,e,t,l,u),S=T.ri,b=T.rj;g.negate(T.ni),_[v].normal.negate(m),m.scale(_[v].depth,m),_[v].point.vadd(m,S),b.copy(_[v].point),S.vsub(n,S),b.vsub(i,b),S.vadd(n,S),S.vsub(o.position,S),b.vadd(i,b),b.vsub(c.position,b),this.result.push(T),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(T,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(e,t,n,i,s,a,o,c,l,u,d){const h=this.v3pool;n.vsub(i,J0);const p=t.faceNormals,g=t.faces,_=t.vertices,m=e.radius;let f=!1;for(let v=0;v!==_.length;v++){const T=_[v],S=t_;a.vmult(T,S),i.vadd(S,S);const b=e_;if(S.vsub(n,b),b.lengthSquared()<m*m){if(d)return!0;f=!0;const w=this.createContactEquation(o,c,e,t,l,u);w.ri.copy(b),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(m,w.ri),S.vsub(i,w.rj),w.ri.vadd(n,w.ri),w.ri.vsub(o.position,w.ri),w.rj.vadd(i,w.rj),w.rj.vsub(c.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let v=0,T=g.length;v!==T&&f===!1;v++){const S=p[v],b=g[v],w=n_;a.vmult(S,w);const R=i_;a.vmult(_[b[0]],R),R.vadd(i,R);const M=s_;w.scale(-m,M),n.vadd(M,M);const A=r_;M.vsub(R,A);const L=A.dot(w),D=a_;if(n.vsub(R,D),L<0&&D.dot(w)>0){const z=[];for(let I=0,P=b.length;I!==P;I++){const N=h.get();a.vmult(_[b[I]],N),i.vadd(N,N),z.push(N)}if(H0(z,w,n)){if(d)return!0;f=!0;const I=this.createContactEquation(o,c,e,t,l,u);w.scale(-m,I.ri),w.negate(I.ni);const P=h.get();w.scale(-L,P);const N=h.get();w.scale(-m,N),n.vsub(i,I.rj),I.rj.vadd(N,I.rj),I.rj.vadd(P,I.rj),I.rj.vadd(i,I.rj),I.rj.vsub(c.position,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(o.position,I.ri),h.release(P),h.release(N),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult);for(let U=0,V=z.length;U!==V;U++)h.release(z[U]);return}else for(let I=0;I!==b.length;I++){const P=h.get(),N=h.get();a.vmult(_[b[(I+1)%b.length]],P),a.vmult(_[b[(I+2)%b.length]],N),i.vadd(P,P),i.vadd(N,N);const U=Q0;N.vsub(P,U);const V=j0;U.unit(V);const q=h.get(),G=h.get();n.vsub(P,G);const $=G.dot(V);V.scale($,q),q.vadd(P,q);const Z=h.get();if(q.vsub(n,Z),$>0&&$*$<U.lengthSquared()&&Z.lengthSquared()<m*m){if(d)return!0;const ie=this.createContactEquation(o,c,e,t,l,u);q.vsub(i,ie.rj),q.vsub(n,ie.ni),ie.ni.normalize(),ie.ni.scale(m,ie.ri),ie.rj.vadd(i,ie.rj),ie.rj.vsub(c.position,ie.rj),ie.ri.vadd(n,ie.ri),ie.ri.vsub(o.position,ie.ri),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult);for(let ge=0,qe=z.length;ge!==qe;ge++)h.release(z[ge]);h.release(P),h.release(N),h.release(q),h.release(Z),h.release(G);return}h.release(P),h.release(N),h.release(q),h.release(Z),h.release(G)}for(let I=0,P=z.length;I!==P;I++)h.release(z[I])}}}planeConvex(e,t,n,i,s,a,o,c,l,u,d){const h=o_,p=l_;p.set(0,0,1),s.vmult(p,p);let g=0;const _=c_;for(let m=0;m!==t.vertices.length;m++)if(h.copy(t.vertices[m]),a.vmult(h,h),i.vadd(h,h),h.vsub(n,_),p.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(o,c,e,t,l,u),T=h_;p.scale(p.dot(_),T),h.vsub(T,T),T.vsub(n,v.ri),v.ni.copy(p),h.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(o.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,a,o,c,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,a,o,c,e,t,d)}sphereHeightfield(e,t,n,i,s,a,o,c,l,u,d){const h=t.data,p=e.radius,g=t.elementSize,_=b_,m=E_;Je.pointToLocalFrame(i,a,n,m);let f=Math.floor((m.x-p)/g)-1,v=Math.ceil((m.x+p)/g)+1,T=Math.floor((m.y-p)/g)-1,S=Math.ceil((m.y+p)/g)+1;if(v<0||S<0||f>h.length||T>h[0].length)return;f<0&&(f=0),v<0&&(v=0),T<0&&(T=0),S<0&&(S=0),f>=h.length&&(f=h.length-1),v>=h.length&&(v=h.length-1),S>=h[0].length&&(S=h[0].length-1),T>=h[0].length&&(T=h[0].length-1);const b=[];t.getRectMinMax(f,T,v,S,b);const w=b[0],R=b[1];if(m.z-p>R||m.z+p<w)return;const M=this.result;for(let A=f;A<v;A++)for(let L=T;L<S;L++){const D=M.length;let z=!1;if(t.getConvexTrianglePillar(A,L,!1),Je.pointToWorldFrame(i,a,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(z=this.sphereConvex(e,t.pillarConvex,n,_,s,a,o,c,e,t,d)),d&&z||(t.getConvexTrianglePillar(A,L,!0),Je.pointToWorldFrame(i,a,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(z=this.sphereConvex(e,t.pillarConvex,n,_,s,a,o,c,e,t,d)),d&&z))return!0;if(M.length-D>2)return}}boxHeightfield(e,t,n,i,s,a,o,c,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,a,o,c,e,t,d)}convexHeightfield(e,t,n,i,s,a,o,c,l,u,d){const h=t.data,p=t.elementSize,g=e.boundingSphereRadius,_=S_,m=y_,f=M_;Je.pointToLocalFrame(i,a,n,f);let v=Math.floor((f.x-g)/p)-1,T=Math.ceil((f.x+g)/p)+1,S=Math.floor((f.y-g)/p)-1,b=Math.ceil((f.y+g)/p)+1;if(T<0||b<0||v>h.length||S>h[0].length)return;v<0&&(v=0),T<0&&(T=0),S<0&&(S=0),b<0&&(b=0),v>=h.length&&(v=h.length-1),T>=h.length&&(T=h.length-1),b>=h[0].length&&(b=h[0].length-1),S>=h[0].length&&(S=h[0].length-1);const w=[];t.getRectMinMax(v,S,T,b,w);const R=w[0],M=w[1];if(!(f.z-g>M||f.z+g<R))for(let A=v;A<T;A++)for(let L=S;L<b;L++){let D=!1;if(t.getConvexTrianglePillar(A,L,!1),Je.pointToWorldFrame(i,a,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(D=this.convexConvex(e,t.pillarConvex,n,_,s,a,o,c,null,null,d,m,null)),d&&D||(t.getConvexTrianglePillar(A,L,!0),Je.pointToWorldFrame(i,a,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(D=this.convexConvex(e,t.pillarConvex,n,_,s,a,o,c,null,null,d,m,null)),d&&D))return!0}}sphereParticle(e,t,n,i,s,a,o,c,l,u,d){const h=g_;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(c,o,t,e,l,u);h.normalize(),g.rj.copy(h),g.rj.scale(e.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,a,o,c,l,u,d){const h=f_;h.set(0,0,1),o.quaternion.vmult(h,h);const p=p_;if(i.vsub(o.position,p),h.dot(p)<=0){if(d)return!0;const _=this.createContactEquation(c,o,t,e,l,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=m_;h.scale(h.dot(i),m),i.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(e,t,n,i,s,a,o,c,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,a,o,c,e,t,d)}convexParticle(e,t,n,i,s,a,o,c,l,u,d){let h=-1;const p=v_,g=x_;let _=null;const m=__;if(m.copy(i),m.vsub(n,m),s.conjugate(wl),wl.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let f=0,v=e.faces.length;f!==v;f++){const T=[e.worldVertices[e.faces[f][0]]],S=e.worldFaceNormals[f];i.vsub(T[0],Tl);const b=-S.dot(Tl);if(_===null||Math.abs(b)<Math.abs(_)){if(d)return!0;_=b,h=f,p.copy(S)}}if(h!==-1){const f=this.createContactEquation(c,o,t,e,l,u);p.scale(_,g),g.vadd(i,g),g.vsub(n,g),f.rj.copy(g),p.negate(f.ni),f.ri.set(0,0,0);const v=f.ri,T=f.rj;v.vadd(i,v),v.vsub(c.position,v),T.vadd(n,T),T.vsub(o.position,T),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,a,o,c,l,u,d){return this.convexHeightfield(t,e,i,n,a,s,c,o,l,u,d)}particleCylinder(e,t,n,i,s,a,o,c,l,u,d){return this.convexParticle(t,e,i,n,a,s,c,o,l,u,d)}sphereTrimesh(e,t,n,i,s,a,o,c,l,u,d){const h=R0,p=C0,g=P0,_=L0,m=I0,f=N0,v=O0,T=A0,S=w0,b=B0;Je.pointToLocalFrame(i,a,n,m);const w=e.radius;v.lowerBound.set(m.x-w,m.y-w,m.z-w),v.upperBound.set(m.x+w,m.y+w,m.z+w),t.getTrianglesInAABB(v,b);const R=T0,M=e.radius*e.radius;for(let I=0;I<b.length;I++)for(let P=0;P<3;P++)if(t.getVertex(t.indices[b[I]*3+P],R),R.vsub(m,S),S.lengthSquared()<=M){if(T.copy(R),Je.pointToWorldFrame(i,a,T,R),R.vsub(n,S),d)return!0;let N=this.createContactEquation(o,c,e,t,l,u);N.ni.copy(S),N.ni.normalize(),N.ri.copy(N.ni),N.ri.scale(e.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),N.rj.copy(R),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}for(let I=0;I<b.length;I++)for(let P=0;P<3;P++){t.getVertex(t.indices[b[I]*3+P],h),t.getVertex(t.indices[b[I]*3+(P+1)%3],p),p.vsub(h,g),m.vsub(p,f);const N=f.dot(g);m.vsub(h,f);let U=f.dot(g);if(U>0&&N<0&&(m.vsub(h,f),_.copy(g),_.normalize(),U=f.dot(_),_.scale(U,f),f.vadd(h,f),f.distanceTo(m)<e.radius)){if(d)return!0;const q=this.createContactEquation(o,c,e,t,l,u);f.vsub(m,q.ni),q.ni.normalize(),q.ni.scale(e.radius,q.ri),q.ri.vadd(n,q.ri),q.ri.vsub(o.position,q.ri),Je.pointToWorldFrame(i,a,f,f),f.vsub(c.position,q.rj),Je.vectorToWorldFrame(a,q.ni,q.ni),Je.vectorToWorldFrame(a,q.ri,q.ri),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}const A=D0,L=U0,D=F0,z=b0;for(let I=0,P=b.length;I!==P;I++){t.getTriangleVertices(b[I],A,L,D),t.getNormal(b[I],z),m.vsub(A,f);let N=f.dot(z);if(z.scale(N,f),m.vsub(f,f),N=f.distanceTo(m),_t.pointInTriangle(f,A,L,D)&&N<e.radius){if(d)return!0;let U=this.createContactEquation(o,c,e,t,l,u);f.vsub(m,U.ni),U.ni.normalize(),U.ni.scale(e.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(o.position,U.ri),Je.pointToWorldFrame(i,a,f,f),f.vsub(c.position,U.rj),Je.vectorToWorldFrame(a,U.ni,U.ni),Je.vectorToWorldFrame(a,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}b.length=0}planeTrimesh(e,t,n,i,s,a,o,c,l,u,d){const h=new E,p=S0;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,h);const _=new E;_.copy(h),Je.pointToWorldFrame(i,a,_,h);const m=y0;if(h.vsub(n,m),p.dot(m)<=0){if(d)return!0;const v=this.createContactEquation(o,c,e,t,l,u);v.ni.copy(p);const T=E0;p.scale(m.dot(p),T),h.vsub(T,T),v.ri.copy(T),v.ri.vsub(o.position,v.ri),v.rj.copy(h),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const ni=new E,Ti=new E,Ai=new E,_0=new E,v0=new E,x0=new vt,M0=new vt,S0=new E,y0=new E,E0=new E,b0=new E,w0=new E;new E;const T0=new E,A0=new E,R0=new E,C0=new E,P0=new E,L0=new E,I0=new E,N0=new E,D0=new E,U0=new E,F0=new E,O0=new Wt,B0=[],Bs=new E,bl=new E,z0=new E,G0=new E,V0=new E;function H0(r,e,t){let n=null;const i=r.length;for(let s=0;s!==i;s++){const a=r[s],o=z0;r[(s+1)%i].vsub(a,o);const c=G0;o.cross(e,c);const l=V0;t.vsub(a,l);const u=c.dot(l);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const zs=new E,k0=new E,W0=new E,X0=new E,q0=[new E,new E,new E,new E,new E,new E],Y0=new E,K0=new E,$0=new E,Z0=new E,J0=new E,Q0=new E,j0=new E,e_=new E,t_=new E,n_=new E,i_=new E,s_=new E,r_=new E,a_=new E;new E;new E;const o_=new E,l_=new E,c_=new E,h_=new E,u_=new E,d_=new E,f_=new E,p_=new E,m_=new E,g_=new E,wl=new vt,__=new E;new E;const v_=new E,Tl=new E,x_=new E,M_=new E,S_=new E,y_=[0],E_=new E,b_=new E;class Al{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let a=i.length-1;a>=s;a--)i[a+1]=i[a];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,a=i.length;let o=0;for(let c=0;c<s;c++){let l=!1;const u=n[c];for(;u>i[o];)o++;l=u===i[o],l||Rl(e,u)}o=0;for(let c=0;c<a;c++){let l=!1;const u=i[c];for(;u>n[o];)o++;l=n[o]===u,l||Rl(t,u)}}}function Rl(r,e){r.push((e&4294901760)>>16,e&65535)}const kr=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`;class w_{constructor(){this.data={keys:[]}}get(e,t){const n=kr(e,t);return this.data[n]}set(e,t,n){const i=kr(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=kr(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class T_ extends pc{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new mc,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new h0,this.constraints=[],this.narrowphase=new g0(this),this.collisionMatrix=new fl,this.collisionMatrixPrevious=new fl,this.bodyOverlapKeeper=new Al,this.shapeOverlapKeeper=new Al,this.contactmaterials=[],this.contactMaterialTable=new w_,this.defaultMaterial=new ai("default"),this.defaultContactMaterial=new Fi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Qs?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=_t.ALL,n.from=e,n.to=t,n.callback=i,Wr.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=_t.ANY,n.from=e,n.to=t,n.result=i,Wr.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=_t.CLOSEST,n.from=e,n.to=t,n.result=i,Wr.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ye&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const a=i[s];if(a.id===e)return a}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Mt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Mt.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(Mt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const a=this.accumulator/e;for(let o=0;o!==this.bodies.length;o++){const c=this.bodies[o];c.previousPosition.lerp(c.position,a,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,a,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=L_,i=I_,s=this.bodies.length,a=this.bodies,o=this.solver,c=this.gravity,l=this.doProfiling,u=this.profile,d=ye.DYNAMIC;let h=-1/0;const p=this.constraints,g=P_;c.length();const _=c.x,m=c.y,f=c.z;let v=0;for(l&&(h=Mt.now()),v=0;v!==s;v++){const I=a[v];if(I.type===d){const P=I.force,N=I.mass;P.x+=N*_,P.y+=N*m,P.z+=N*f}}for(let I=0,P=this.subsystems.length;I!==P;I++)this.subsystems[I].update();l&&(h=Mt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(u.broadphase=Mt.now()-h);let T=p.length;for(v=0;v!==T;v++){const I=p[v];if(!I.collideConnected)for(let P=n.length-1;P>=0;P-=1)(I.bodyA===n[P]&&I.bodyB===i[P]||I.bodyB===n[P]&&I.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),l&&(h=Mt.now());const S=C_,b=t.length;for(v=0;v!==b;v++)S.push(t[v]);t.length=0;const w=this.frictionEquations.length;for(v=0;v!==w;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,S,this.frictionEquations,g),l&&(u.narrowphase=Mt.now()-h),l&&(h=Mt.now()),v=0;v<this.frictionEquations.length;v++)o.addEquation(this.frictionEquations[v]);const R=t.length;for(let I=0;I!==R;I++){const P=t[I],N=P.bi,U=P.bj,V=P.si,q=P.sj;let G;if(N.material&&U.material?G=this.getContactMaterial(N.material,U.material)||this.defaultContactMaterial:G=this.defaultContactMaterial,G.friction,N.material&&U.material&&(N.material.friction>=0&&U.material.friction>=0&&N.material.friction*U.material.friction,N.material.restitution>=0&&U.material.restitution>=0&&(P.restitution=N.material.restitution*U.material.restitution)),o.addEquation(P),N.allowSleep&&N.type===ye.DYNAMIC&&N.sleepState===ye.SLEEPING&&U.sleepState===ye.AWAKE&&U.type!==ye.STATIC){const $=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),Z=U.sleepSpeedLimit**2;$>=Z*2&&(N.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===ye.DYNAMIC&&U.sleepState===ye.SLEEPING&&N.sleepState===ye.AWAKE&&N.type!==ye.STATIC){const $=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),Z=N.sleepSpeedLimit**2;$>=Z*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(N,U,!0),this.collisionMatrixPrevious.get(N,U)||($i.body=U,$i.contact=P,N.dispatchEvent($i),$i.body=N,U.dispatchEvent($i)),this.bodyOverlapKeeper.set(N.id,U.id),this.shapeOverlapKeeper.set(V.id,q.id)}for(this.emitContactEvents(),l&&(u.makeContactConstraints=Mt.now()-h,h=Mt.now()),v=0;v!==s;v++){const I=a[v];I.wakeUpAfterNarrowphase&&(I.wakeUp(),I.wakeUpAfterNarrowphase=!1)}for(T=p.length,v=0;v!==T;v++){const I=p[v];I.update();for(let P=0,N=I.equations.length;P!==N;P++){const U=I.equations[P];o.addEquation(U)}}o.solve(e,this),l&&(u.solve=Mt.now()-h),o.removeAllEquations();const M=Math.pow;for(v=0;v!==s;v++){const I=a[v];if(I.type&d){const P=M(1-I.linearDamping,e),N=I.velocity;N.scale(P,N);const U=I.angularVelocity;if(U){const V=M(1-I.angularDamping,e);U.scale(V,U)}}}this.dispatchEvent(R_),l&&(h=Mt.now());const L=this.stepnumber%(this.quatNormalizeSkip+1)===0,D=this.quatNormalizeFast;for(v=0;v!==s;v++)a[v].integrate(e,L,D);this.clearForces(),this.broadphase.dirty=!0,l&&(u.integrate=Mt.now()-h),this.stepnumber+=1,this.dispatchEvent(A_);let z=!0;if(this.allowSleep)for(z=!1,v=0;v!==s;v++){const I=a[v];I.sleepTick(this.time),I.sleepState!==ye.SLEEPING&&(z=!0)}this.hasActiveBodies=z}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Tn,An),e){for(let s=0,a=Tn.length;s<a;s+=2)Zi.bodyA=this.getBodyById(Tn[s]),Zi.bodyB=this.getBodyById(Tn[s+1]),this.dispatchEvent(Zi);Zi.bodyA=Zi.bodyB=null}if(t){for(let s=0,a=An.length;s<a;s+=2)Ji.bodyA=this.getBodyById(An[s]),Ji.bodyB=this.getBodyById(An[s+1]),this.dispatchEvent(Ji);Ji.bodyA=Ji.bodyB=null}Tn.length=An.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Tn,An),n){for(let s=0,a=Tn.length;s<a;s+=2){const o=this.getShapeById(Tn[s]),c=this.getShapeById(Tn[s+1]);Rn.shapeA=o,Rn.shapeB=c,o&&(Rn.bodyA=o.body),c&&(Rn.bodyB=c.body),this.dispatchEvent(Rn)}Rn.bodyA=Rn.bodyB=Rn.shapeA=Rn.shapeB=null}if(i){for(let s=0,a=An.length;s<a;s+=2){const o=this.getShapeById(An[s]),c=this.getShapeById(An[s+1]);Cn.shapeA=o,Cn.shapeB=c,o&&(Cn.bodyA=o.body),c&&(Cn.bodyB=c.body),this.dispatchEvent(Cn)}Cn.bodyA=Cn.bodyB=Cn.shapeA=Cn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Wt;const Wr=new _t,Mt=globalThis.performance||{};if(!Mt.now){let r=Date.now();Mt.timing&&Mt.timing.navigationStart&&(r=Mt.timing.navigationStart),Mt.now=()=>Date.now()-r}new E;const A_={type:"postStep"},R_={type:"preStep"},$i={type:ye.COLLIDE_EVENT_NAME,body:null,contact:null},C_=[],P_=[],L_=[],I_=[],Tn=[],An=[],Zi={type:"beginContact",bodyA:null,bodyB:null},Ji={type:"endContact",bodyA:null,bodyB:null},Rn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Cn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function N_(r,e,t){const{hw:n,hh:i,H:s,s:a}=r;t=Object.assign({gravite:19,hauteur:6,vitesse:1.25,rotation:16,rebondMurs:.72,rebondSol:.36,frottement:.3},t||{});const o=new T_;o.gravity.set(0,-t.gravite*a,0),o.broadphase=new mc,o.solver.iterations=16;const c=new ai("floor"),l=new ai("wall"),u=new ai("die");o.addContactMaterial(new Fi(c,u,{friction:t.frottement,restitution:t.rebondSol})),o.addContactMaterial(new Fi(l,u,{friction:.03,restitution:t.rebondMurs}));const d=(V,q,G)=>new E(V,q,G),h=[],p=(V,q,G,$)=>{const Z=new ye({mass:0,material:G});Z.addShape(new l0),Z.position.copy(V);const ie=q.clone();ie.normalize(),Z.quaternion.setFromVectors(d(0,0,1),ie),o.addBody(Z),$&&h.push(Z)},g=.04*a,_=n-g,m=i-g;p(d(0,0,0),d(0,1,0),c,!1),p(d(0,Math.min(s*.7,(t.hauteur+3)*a),0),d(0,-1,0),l,!1),p(d(_,0,0),d(-s,-_,0),l,!0),p(d(-_,0,0),d(s,-_,0),l,!0),p(d(0,0,-m),d(0,-m,s),l,!0),p(d(0,0,m),d(0,-m,-s),l,!0);const f=new ye({mass:1,material:u});f.addShape(new ir(d(a/2,a/2,a/2))),f.linearDamping=.03,f.angularDamping=.05,o.addBody(f);const v=t.gravite*a,T=Math.min(s*.6,t.hauteur*a+e()*1.2*a);if(t.origine&&t.quatDepart?f.quaternion.set(t.quatDepart.x,t.quatDepart.y,t.quatDepart.z,t.quatDepart.w):f.quaternion.setFromEuler(e()*6.283,e()*6.283,e()*6.283),t.origine){const V=t.quatDepart?.52*a:.8*a,q=t.quatDepart?.6*a:.9*a,G=Math.max(-n+q,Math.min(n-q,t.origine.x*n)),$=Math.max(-i+q,Math.min(i-q,t.origine.z*i));f.position.set(G,V,$);const Z=Math.sqrt(2*v*Math.max(a,T-V)),ie=Z/s*1.5,ge=Math.atan2(-$,-G)+(e()-.5)*2.2,qe=(t.vitesse*.45+e()*.35)*Math.max(n,i);f.velocity.set(-G*ie+Math.cos(ge)*qe,Z,-$*ie+Math.sin(ge)*qe)}else{const V=T,q=(s-V)/s,G=e()<.5?-1:1,$=-G*n*q*(e()*.5),Z=-i*q+.95*a;f.position.set($,V,Z);const ie=(t.vitesse+e()*.6)*Math.max(n,i),ge=(.25+e()*.35)*Math.PI/2;f.velocity.set(G*Math.cos(ge)*ie,a*(1.5+e()*1.5),Math.sin(ge)*ie)}const S=t.rotation*(t.facteur||1)*(.85+e()*.3);f.angularVelocity.set((e()-.5)*S,(e()-.5)*S,(e()-.5)*S);let b=0,w=-99,R=0;f.addEventListener("collide",V=>{h.includes(V.body)&&R-w>10&&(b++,w=R)});const M=[],A=()=>{const V=new Float32Array(7);V[0]=f.position.x,V[1]=f.position.y,V[2]=f.position.z,V[3]=f.quaternion.x,V[4]=f.quaternion.y,V[5]=f.quaternion.z,V[6]=f.quaternion.w,M.push(V)};A();let L=0,D=0;const z=f.quaternion.clone(),I=t.rotation*(t.facteur||1)*1.6;for(R=1;R<540;R++){o.step(1/120),o.step(1/120),f.position.y<a*.62&&f.velocity.length()<.9*a?(f.angularDamping=.55,f.linearDamping=.35):(f.angularDamping=.05,f.linearDamping=.03);const V=f.angularVelocity.length();V>I&&f.angularVelocity.scale(I/V,f.angularVelocity);const q=z.conjugate().mult(f.quaternion);D+=2*Math.acos(Math.min(1,Math.abs(q.w)))/(2*Math.PI),z.copy(f.quaternion),A();const G=f.velocity.length()<.06*a&&f.angularVelocity.length()<.25;if(L=R>40&&G?L+1:0,L>=12)break}M.splice(Math.max(2,M.length-8));const P=[d(1,0,0),d(-1,0,0),d(0,1,0),d(0,-1,0),d(0,0,1),d(0,0,-1)];let N=0,U=-2;return P.forEach((V,q)=>{const G=f.quaternion.vmult(V).y;G>U&&(U=G,N=q)}),{frames:M,up:N,flat:U>.97,wallHits:b,tours:D}}function D_(r,e,t){const n=t&&t.rebondsMin!=null?t.rebondsMin:2,i=t&&t.tours||2.6,s=t&&t.tolerance!=null?t.tolerance:.2;let a=1,o=null,c=1/0;for(let l=0;l<30;l++){const u=N_(r,e,Object.assign({},t,{facteur:a})),d=Math.abs(u.tours-i)/i;if(u.flat&&u.wallHits>=n&&d<=s)return u;const h=d+(u.flat?0:10)+(u.wallHits>=n?0:1);h<c&&(c=h,o=u),u.tours>0&&(a=Math.max(.3,Math.min(2.5,a*Math.pow(i/u.tours,.8))))}return o}const Ri={H:62,fov:16,taille:.2,arrondi:.045,rugosite:.79,cercle:.53,lumiere:.66,ambiante:.51,appoint:0,lumiereX:-.3,lumiereZ:-.45,lampe:1.6,ombre:.3,flou:3,flouHauteur:1.5,ombreFondu:.25,tache:.3,tacheTaille:1,tacheFondu:.5,iconeLacet:12,iconeRemplissage:.8,pause:400,hauteur:8.1,gravite:22.5,vitesse:1.25,rotation:11,tours:2.6,tolerance:.2,rebondMurs:.82,rebondSol:.43,frottement:.4,rebondsMin:2},U_=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];class X_{constructor(e){var n;this.el=e,this.canvas=e.querySelector(".dice__scene"),this.btn=e.querySelector(".dice__btn");const t=e.querySelector(".dice__data");try{this.data=t?JSON.parse(t.textContent):null}catch{this.data=null}!this.data||!((n=this.data.faces)!=null&&n.length)||!this.canvas||!this.btn||(this.reduce=Lc,this.onClick=this.onClick.bind(this),this.onKey=this.onKey.bind(this),this.btn.addEventListener("click",this.onClick))}baseline(){const e=this.data.faces.map(t=>t.color);for(;e.length<5;)e.push(this.data.soft);return[e[0],e[1],this.data.soft,e[2],e[3],e[4]]}pickCategory(){let e=this.data.faces.filter(i=>i.urls.length);e.length||(e=this.data.faces);const t=e.filter(i=>!this.last||i.slug!==this.last),n=(t.length?t:e)[Math.floor(Math.random()*(t.length?t.length:e.length))];return n&&(this.last=n.slug),n||null}pickUrl(e){const t=location.pathname.replace(/\/$/,""),n=s=>{try{return new URL(s,location.href).pathname.replace(/\/$/,"")}catch{return s}};let i=e.urls.filter(s=>n(s)!==t);return i.length||(i=e.urls),i.length?i[Math.floor(Math.random()*i.length)]:e.archive}quatIcone(){return new xn().setFromAxisAngle(new X(0,1,0),Ri.iconeLacet*Math.PI/180)}instantCache(e,t){for(const n of[-.3,0])for(let i=2;i<e.length;i++){const s=e[i];if(new X(...U_[t]).applyQuaternion(new xn(s[3],s[4],s[5],s[6])).y<n)return i}return-1}ensureScene(){this.stage||(this.stage=new sg(this.canvas,Ri),this.canvas.parentNode!==document.body&&document.body.appendChild(this.canvas))}ensureCube(e){const t=e.toFixed(3);this.cubeKey!==t&&(this.cube&&(this.stage.scene.remove(this.cube.mesh),this.cube.dispose()),this.cube=new ag(e,Ri),this.stage.add(this.cube.mesh),this.cubeKey=t)}countClick(){const e=window.localize;if(!(e!=null&&e.ajaxurl)||!(e!=null&&e.nonce))return;const t=new FormData;t.append("action","dice_click"),t.append("nonce",e.nonce),fetch(e.ajaxurl,{method:"POST",body:t,credentials:"same-origin"}).catch(()=>{})}onClick(){if(this.busy)return;this.countClick();const e=this.pickCategory();if(!e)return;const t=this.pickUrl(e);if(!t)return;if(this.reduce.matches)return this.goto(t);this.busy=!0,this.ensureScene();const n=this.stage.resize();this.ensureCube(n.s);const i=this.btn.getBoundingClientRect(),s=i.bottom>0&&i.top<innerHeight,a=s?{x:(i.left+i.width/2)/innerWidth*2-1,z:(i.top+i.height/2)/innerHeight*2-1}:null,o=this.quatIcone(),c=this.baseline();let l,u,d,h;for(let g=0;g<6;g++){if(l=D_(n,Math.random,Object.assign({},Ri,{origine:a,quatDepart:s?{x:o.x,y:o.y,z:o.z,w:o.w}:null})),!l||!l.frames||l.frames.length<2)continue;if(!s)break;u=c.slice(),d=u.slice();const _=d.indexOf(e.color);if([d[l.up],d[_]]=[d[_],d[l.up]],h=[0,1,2,3,4,5].map(m=>u[m]===d[m]?0:this.instantCache(l.frames,m)),!h.includes(-1))break}if(!l||!l.frames||l.frames.length<2){this.busy=!1;return}let p=null;if(s){h=h.map(T=>Math.max(0,T)),this.cube.mesh.quaternion.copy(o),this.cube.mesh.position.set(0,0,0),this.cube.mesh.scale.setScalar(1),this.cube.mesh.updateMatrixWorld();const g=new Oi().setFromObject(this.cube.mesh),_=l.frames[0];let m=1e9,f=-1e9;for(const T of[g.min.x,g.max.x])for(const S of[g.min.y,g.max.y])for(const b of[g.min.z,g.max.z]){const R=(new X(T+_[0],S+_[1],b+_[2]).project(this.stage.camera).x+1)/2*innerWidth;m=Math.min(m,R),f=Math.max(f,R)}const v=i.width*Ri.iconeRemplissage;p={depart:u,final:d,bascule:h,echelle0:Math.min(1,v/Math.max(1,f-m))},this.cube.setFaces(u)}else{const g=c.slice(),_=g.indexOf(e.color);[g[l.up],g[_]]=[g[_],g[l.up]],this.cube.setFaces(g)}this.rollColor=e.color,this.el.classList.add("is-rolling"),this.canvas.classList.add("actif"),this.lock(!0),addEventListener("keydown",this.onKey),this.animate(l.frames,t,p)}render(e,t,n){let i=1;if(n){for(let a=0;a<6;a++)this.cube.mesh.material[a]=this.cube.material(t>=n.bascule[a]?n.final[a]:n.depart[a]);const s=Math.min(1,t/20);i=n.echelle0+(1-n.echelle0)*(1-Math.pow(1-s,3))}this.cube.mesh.scale.setScalar(i),this.stage.poser(this.cube.mesh,e,t)}animate(e,t,n){const i=performance.now(),s=a=>{const o=Math.max(0,(a-i)/1e3*60);if(o>=e.length-1)return this.render(e,e.length-1,n),this.finish(t);this.render(e,o,n),this.raf=requestAnimationFrame(s)};this.raf=requestAnimationFrame(s)}finish(e){this.timer=setTimeout(()=>this.reveal(e),Ri.pause)}easeInOut(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}animer(e,t){return new Promise(n=>{const i=performance.now(),s=a=>{const o=Math.min(1,(a-i)/e);t(this.easeInOut(o)),o<1?requestAnimationFrame(s):n()};requestAnimationFrame(s)})}pastilleTarget(e){let t="";try{t=new URL(e,location.href).hash.slice(1)}catch{t=""}if(t){const n=document.getElementById(t);return(n==null?void 0:n.querySelector("[data-pastille]"))||null}return document.querySelector("[data-pastille]")}async reveal(e){var c,l,u;const t=this.stage.pastille(this.cube.mesh),n=Math.hypot(Math.max(t.x,innerWidth-t.x),Math.max(t.y,innerHeight-t.y))+4,i=document.createElement("div");if(Object.assign(i.style,{position:"fixed",inset:"0",zIndex:"2001",background:this.rollColor,pointerEvents:"none",clipPath:`circle(${t.r}px at ${t.x}px ${t.y}px)`}),document.body.appendChild(i),this.canvas.classList.remove("actif"),removeEventListener("keydown",this.onKey),await this.animer(620,d=>{i.style.clipPath=`circle(${t.r+(n-t.r)*d}px at ${t.x}px ${t.y}px)`}),!e){i.remove(),this.el.classList.remove("is-rolling"),this.lock(!1),this.busy=!1;return}if((c=window.taxi)!=null&&c.navigateTo)try{await window.taxi.navigateTo(e,"dice")}catch{location.href=e;return}else{location.href=e;return}this.lock(!1);let s="";try{s=new URL(e,location.href).hash.slice(1)}catch{s=""}const a=s?document.getElementById(s):null;a?(l=window.lenis)!=null&&l.scrollTo?window.lenis.scrollTo(a,{immediate:!0}):a.scrollIntoView({block:"center"}):(u=window.lenis)!=null&&u.scrollTo?window.lenis.scrollTo(0,{immediate:!0}):scrollTo(0,0),await new Promise(d=>requestAnimationFrame(d));const o=this.pastilleTarget(e);if(o){const d=o.getBoundingClientRect(),h=d.left+d.width/2,p=d.top+d.height/2,g=Math.max(4,d.width/2);await this.animer(700,_=>{const m=t.x+(h-t.x)*_,f=t.y+(p-t.y)*_,v=n+(g-n)*_;i.style.clipPath=`circle(${v}px at ${m}px ${f}px)`})}else i.style.transition="opacity .45s",i.style.opacity="0",await new Promise(d=>setTimeout(d,460));i.remove(),this.el.classList.remove("is-rolling"),this.busy=!1}onKey(e){e.key==="Escape"&&this.cancel()}lock(e){const t=Pc();t&&(t.isStopped=e)}cancel(){cancelAnimationFrame(this.raf),clearTimeout(this.timer),removeEventListener("keydown",this.onKey),this.canvas.classList.remove("actif"),this.el.classList.remove("is-rolling"),this.lock(!1),this.busy=!1}goto(e){var t;this.cancel(),e&&((t=window.taxi)!=null&&t.navigateTo?window.taxi.navigateTo(e):location.href=e)}destroy(){var e,t,n,i;this.cancel(),(e=this.btn)==null||e.removeEventListener("click",this.onClick),(t=this.cube)==null||t.dispose(),(n=this.stage)==null||n.renderer.dispose(),((i=this.canvas)==null?void 0:i.parentNode)===document.body&&this.canvas.remove()}}export{X_ as default};
