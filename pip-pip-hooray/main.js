var ji=(i,e)=>()=>(i&&(e=i(i=0)),e);var h0=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);function d0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function f0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tp(){let i=yr("canvas");return i.style.display="block",i}function ho(...i){let e="THREE."+i.shift();vr?vr("log",e,...i):console.log(e,...i)}function Ep(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=Ep(i);let e="THREE."+i.shift();if(vr)vr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=Ep(i);let e="THREE."+i.shift();if(vr)vr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Cs(...i){let e=i.join(" ");e in Zd||(Zd[e]=!0,He(...i))}function wp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function uh(i,e){return(i%e+e)%e}function p0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function m0(i,e,t){return i!==e?(t-i)/(e-i):0}function oo(i,e,t){return(1-t)*i+t*e}function g0(i,e,t,n){return oo(i,e,1-Math.exp(-t*n))}function _0(i,e=1){return e-Math.abs(uh(i,e*2)-e)}function x0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function y0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function v0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function M0(i,e){return i+Math.random()*(e-i)}function S0(i){return i*(.5-Math.random())}function b0(i){i!==void 0&&(Jd=i);let e=Jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function T0(i){return i*ro}function E0(i){return i*Ls}function w0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function A0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function R0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*u,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function dh(i,e){if(e.constructor===Float32Array)return i;let t=fc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function fh(i,e){if(e.constructor===Float32Array)return i;let t=fc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function C0(){let i={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?uo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pn]:{primaries:e,whitePoint:n,transfer:uo,toXYZ:Qd,fromXYZ:ef,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:Qd,fromXYZ:ef,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function eu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}function iu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function hu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bs.fromArray(i,r);let a=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),l=e.dot(bs),c=t.dot(bs),u=n.dot(bs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}function uf(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=mi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}function X0(i,e,t,n,s,r,o,a){let l;if(e.side===mn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ti,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ia);return c<t.near||c>t.far?null:{distance:c,point:Ia.clone(),object:i}}function Pa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,wa),i.getVertexPosition(l,Aa),i.getVertexPosition(c,Ra);let u=X0(i,e,t,n,wa,Aa,Ra,ff);if(u){let h=new P;rs.getBarycoord(ff,wa,Aa,Ra,h),s&&(u.uv=rs.getInterpolatedAttribute(s,a,l,c,h,new oe)),r&&(u.uv1=rs.getInterpolatedAttribute(r,a,l,c,h,new oe)),o&&(u.normal=rs.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};rs.getNormal(wa,Aa,Ra,d.normal),u.face=d,u.barycoord=h}return u}function Oa(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(nl.fromBufferAttribute(a,s),il.fromBufferAttribute(a,r),t.distanceSqToSegment(nl,il,yu,bf)>n)return;yu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(yu);if(!(c<e.near||c>e.far))return{distance:c,point:bf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}function Af(i,e,t,n,s,r,o){let a=Au.distanceSqToPoint(i);if(a<t){let l=new P;Au.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function ph(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}function If(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Z0(i,e){let t=1-i;return t*t*e}function J0(i,e){return 2*(1-i)*i*e}function j0(i,e){return i*i*e}function ao(i,e,t,n){return Z0(i,e)+J0(i,t)+j0(i,n)}function Q0(i,e){let t=1-i;return t*t*t*e}function eg(i,e){let t=1-i;return 3*t*t*i*e}function tg(i,e){return 3*(1-i)*i*i*e}function ng(i,e){return i*i*i*e}function lo(i,e,t,n,s){return Q0(i,e)+eg(i,t)+tg(i,n)+ng(i,s)}function ig(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Cp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=lg(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let u=a,h=l;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Io(r,o,t,a,l,c,0),o}function Cp(i,e,t,n,s){let r;if(s===yg(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Pf(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Pf(o/n|0,i[o],i[o+1],r);return r&&Cr(r,r.next)&&(Lo(r),r=r.next),r}function Bs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Cr(t,t.next)||Ht(t.prev,t,t.next)===0)){if(Lo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Io(i,e,t,n,s,r,o){if(!i)return;!o&&r&&fg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?rg(i,n,s,r):sg(i)){e.push(l.i,i.i,c.i),Lo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=og(Bs(i),e),Io(i,e,t,n,s,r,2)):o===2&&ag(i,e,t,n,s,r):Io(Bs(i),e,t,n,s,r,1);break}}}function sg(i){let e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&io(s,a,r,l,o,c,p.x,p.y)&&Ht(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function rg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ht(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(u,h,d),y=Math.max(a,l,c),_=Math.max(u,h,d),m=Cu(f,p,e,t,n),v=Cu(y,_,e,t,n),T=i.prevZ,S=i.nextZ;for(;T&&T.z>=m&&S&&S.z<=v;){if(T.x>=f&&T.x<=y&&T.y>=p&&T.y<=_&&T!==s&&T!==o&&io(a,u,l,h,c,d,T.x,T.y)&&Ht(T.prev,T,T.next)>=0||(T=T.prevZ,S.x>=f&&S.x<=y&&S.y>=p&&S.y<=_&&S!==s&&S!==o&&io(a,u,l,h,c,d,S.x,S.y)&&Ht(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;T&&T.z>=m;){if(T.x>=f&&T.x<=y&&T.y>=p&&T.y<=_&&T!==s&&T!==o&&io(a,u,l,h,c,d,T.x,T.y)&&Ht(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;S&&S.z<=v;){if(S.x>=f&&S.x<=y&&S.y>=p&&S.y<=_&&S!==s&&S!==o&&io(a,u,l,h,c,d,S.x,S.y)&&Ht(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function og(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Cr(n,s)&&Pp(n,t,t.next,s)&&Po(n,s)&&Po(s,n)&&(e.push(n.i,t.i,s.i),Lo(t),Lo(t.next),t=i=s),t=t.next}while(t!==i);return Bs(t)}function ag(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gg(o,a)){let l=Lp(o,a);o=Bs(o,o.next),l=Bs(l,l.next),Io(o,e,t,n,s,r,0),Io(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function lg(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Cp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(mg(c))}s.sort(cg);for(let r=0;r<s.length;r++)t=ug(s[r],t);return t}function cg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ug(i,e){let t=hg(i,e);if(!t)return e;let n=Lp(t,i);return Bs(n,n.next),Bs(t,t.next)}function hg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Cr(i,t))return t;do{if(Cr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ip(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);Po(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&dg(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function dg(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function fg(i,e,t,n){let s=i;do s.z===0&&(s.z=Cu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,pg(s)}function pg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Cu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function mg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ip(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function io(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Ip(i,e,t,n,s,r,o,a)}function gg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!_g(i,e)&&(Po(i,e)&&Po(e,i)&&xg(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||Cr(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Cr(i,e){return i.x===e.x&&i.y===e.y}function Pp(i,e,t,n){let s=za(Ht(i,e,t)),r=za(Ht(i,e,n)),o=za(Ht(t,n,i)),a=za(Ht(t,n,e));return!!(s!==r&&o!==a||s===0&&ka(i,t,e)||r===0&&ka(i,n,e)||o===0&&ka(t,i,n)||a===0&&ka(t,e,n))}function ka(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function za(i){return i>0?1:i<0?-1:0}function _g(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Pp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Po(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function xg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Lp(i,e){let t=Iu(i.i,i.x,i.y),n=Iu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pf(i,e,t,n){let s=Iu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Iu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function Lf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Nf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function Mg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Df(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Df(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Sn(i){let e={};for(let t=0;t<i.length;t++){let n=Ks(i[t]);for(let s in n)e[s]=n[s]}return e}function Df(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Sg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}function ss(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function so(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Eg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Uf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function wg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function Np(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Ag(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Rg(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Np(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Ag(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function Of(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Ff(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function Cg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hi;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return Fo;case"quaternion":return Gi;case"bool":case"boolean":return zi;case"string":return Vi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ig(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Cg(i.type);if(i.times===void 0){let n=[],s=[];wg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),so(i.settings)&&(t.settings={inTangents:ss(i.settings.inTangents,Float32Array),outTangents:ss(i.settings.outTangents,Float32Array)}),t}function Bf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function xh(i,e,t,n){let s=zg(n);switch(t){case nh:return i*e;case Pl:return i*e/s.components*s.byteLength;case Ll:return i*e/s.components*s.byteLength;case hs:return i*e*2/s.components*s.byteLength;case Nl:return i*e*2/s.components*s.byteLength;case ih:return i*e*3/s.components*s.byteLength;case ii:return i*e*4/s.components*s.byteLength;case Dl:return i*e*4/s.components*s.byteLength;case qo:case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ko:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:case Bl:return Math.max(i,16)*Math.max(e,8)/4;case Ul:case Fl:return Math.max(i,8)*Math.max(e,8)/2;case kl:case zl:case Gl:case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Zo:case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case rc:case oc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lc:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Jo:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zg(i){switch(i){case Un:case ju:return{byteLength:1,components:1};case Br:case Qu:case pi:return{byteLength:2,components:1};case Cl:case Il:return{byteLength:2,components:4};case fi:case Rl:case Hn:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var bl,Vf,Bu,Wf,Xo,Xf,Dr,ti,mn,Dn,Vs,Ur,ku,zu,Hu,qf,Ws,Yf,Kf,$f,Zf,Jf,jf,Qf,ep,Gu,Vu,tp,np,ip,sp,rp,op,ap,lp,cp,Xa,qa,Ya,gr,Ka,$a,Za,Ja,Tl,up,hp,Si,Wu,Xu,qu,Yu,Ku,$u,Zu,Eu,dp,Ju,Xs,Or,El,wl,os,$n,_r,Qt,Al,qs,rn,Fr,ni,Un,ju,Qu,Br,Rl,fi,Hn,pi,Cl,Il,Ys,eh,th,nh,ih,ii,Oi,Xi,Pl,Ll,hs,Nl,Dl,qo,Yo,Ko,$o,Ul,Ol,Fl,Bl,kl,zl,Hl,Gl,Vl,Zo,Wl,Xl,ql,Yl,Kl,$l,Zl,Jl,jl,Ql,ec,tc,nc,ic,sc,rc,oc,ac,lc,cc,Jo,uc,hc,fp,pp,Is,Ps,Va,wu,ws,As,co,dc,mp,sh,jo,kr,gp,Qo,_p,qi,zt,pn,uo,St,Wa,xp,yp,vp,Mp,rh,Sp,bp,oh,ah,lh,ch,Zn,xr,Zd,vr,Ap,di,vn,Jd,ro,Ls,ds,yh,oe,Jt,vh,P,jc,jd,Mh,et,Qc,Qd,ef,lt,tr,ja,I0,Mr,P0,tu,dn,Sh,Et,Qa,Bn,fo,el,Sl,$e,nr,ci,L0,N0,Qi,ga,On,tf,nf,yi,po,D0,sf,ir,Ci,_a,$r,U0,O0,rf,of,af,lf,F0,sr,nu,Dt,Wt,B0,Sr,Rp,es,xa,ke,Mn,Ns,ui,Ii,su,Pi,rr,or,cf,ru,ou,au,lu,cu,uu,rs,wn,Li,hi,ya,ar,lr,cr,ts,ns,Ss,Zr,va,Ma,bs,tn,Sa,k0,jt,mo,go,yt,z0,Jr,du,Ln,H0,Kn,fu,ur,Fn,jr,hn,Ut,as,En,ls,pu,G0,V0,Pn,W0,An,Ni,mu,ba,Ta,Ds,Jn,hf,Ts,Ea,df,wa,Aa,Ra,gu,Ca,ff,Ia,st,Qr,pf,mf,q0,gf,La,_u,_f,xu,_o,br,Tr,xf,Y0,xo,Fi,hr,yf,Na,vf,K0,eo,to,yo,Es,$0,Da,cs,Mf,tl,Er,nl,il,Sf,no,Ua,yu,bf,Us,Tf,Ef,vo,Mo,wr,wf,Au,Fa,Ba,So,bo,Bi,To,Eo,jn,ki,sl,kn,Ar,rl,Rf,Cf,vu,Mu,Su,ol,wo,al,Ao,ll,Ro,Rr,Co,Ru,cl,Os,Fs,Pu,Rs,Ir,vg,No,ks,zs,Do,pc,bg,Tg,Qn,ul,Hs,Rn,Uo,hl,dl,vi,fl,Oo,pl,ml,Nn,zi,Fo,Hi,gl,Gi,Vi,us,Gs,xi,_l,Dp,ei,Di,Lu,Wi,dr,xl,Bo,Pr,bu,kf,zf,Lr,Ha,Ga,_i,ko,is,Hf,Gf,Zt,Nu,zo,Du,Ho,Mi,Uu,Go,zn,Tu,Vo,fr,pr,Nr,yl,vl,gh,Pg,_h,Lg,Ng,Dg,Ug,Og,Fg,Bg,Ou,At,Ml,kg,Wo,bh,Fu,Th=ji(()=>{bl="187",Vf=0,Bu=1,Wf=2,Xo=1,Xf=2,Dr=3,ti=0,mn=1,Dn=2,Vs=0,Ur=1,ku=2,zu=3,Hu=4,qf=5,Ws=100,Yf=101,Kf=102,$f=103,Zf=104,Jf=200,jf=201,Qf=202,ep=203,Gu=204,Vu=205,tp=206,np=207,ip=208,sp=209,rp=210,op=211,ap=212,lp=213,cp=214,Xa=0,qa=1,Ya=2,gr=3,Ka=4,$a=5,Za=6,Ja=7,Tl=0,up=1,hp=2,Si=0,Wu=1,Xu=2,qu=3,Yu=4,Ku=5,$u=6,Zu=7,Eu="attached",dp="detached",Ju=300,Xs=301,Or=302,El=303,wl=304,os=1e3,$n=1001,_r=1002,Qt=1003,Al=1004,qs=1005,rn=1006,Fr=1007,ni=1008,Un=1009,ju=1010,Qu=1011,Br=1012,Rl=1013,fi=1014,Hn=1015,pi=1016,Cl=1017,Il=1018,Ys=1020,eh=35902,th=35899,nh=1021,ih=1022,ii=1023,Oi=1026,Xi=1027,Pl=1028,Ll=1029,hs=1030,Nl=1031,Dl=1033,qo=33776,Yo=33777,Ko=33778,$o=33779,Ul=35840,Ol=35841,Fl=35842,Bl=35843,kl=36196,zl=37492,Hl=37496,Gl=37488,Vl=37489,Zo=37490,Wl=37491,Xl=37808,ql=37809,Yl=37810,Kl=37811,$l=37812,Zl=37813,Jl=37814,jl=37815,Ql=37816,ec=37817,tc=37818,nc=37819,ic=37820,sc=37821,rc=36492,oc=36494,ac=36495,lc=36283,cc=36284,Jo=36285,uc=36286,hc=2200,fp=2201,pp=2202,Is=2300,Ps=2301,Va=2302,wu=2303,ws=2400,As=2401,co=2402,dc=2500,mp=2501,sh=0,jo=1,kr=2,gp=3200,Qo=0,_p=1,qi="",zt="srgb",pn="srgb-linear",uo="linear",St="srgb",Wa=7680,xp=519,yp=512,vp=513,Mp=514,rh=515,Sp=516,bp=517,oh=518,ah=519,lh=35044,ch="300 es",Zn=2e3,xr=2001;Zd={},vr=null;Ap={[Xa]:Xa,[Ya]:Za,[Ka]:Ka,[gr]:$a,[qa]:qa,[Za]:Ya,[Ja]:Ja,[$a]:gr},di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jd=1234567,ro=Math.PI/180,Ls=180/Math.PI;ds={DEG2RAD:ro,RAD2DEG:Ls,generateUUID:mi,clamp:dt,euclideanModulo:uh,mapLinear:p0,inverseLerp:m0,lerp:oo,damp:g0,pingpong:_0,smoothstep:x0,smootherstep:y0,randInt:v0,randFloat:M0,randFloatSpread:S0,seededRandom:b0,degToRad:T0,radToDeg:E0,isPowerOfTwo:w0,ceilPowerOfTwo:A0,floorPowerOfTwo:hh,setQuaternionFromProperEuler:R0,normalize:fh,denormalize:dh},yh=class yh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yh.prototype.isVector2=!0;oe=yh,Jt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],y=r[o+3];if(h!==y||l!==d||c!==f||u!==p){let _=l*d+c*f+u*p+h*y;_<0&&(d=-d,f=-f,p=-p,y=-y,_=-_);let m=1-a;if(_<.9995){let v=Math.acos(_),T=Math.sin(v);m=Math.sin(m*v)/T,a=Math.sin(a*v)/T,l=l*m+d*a,c=c*m+f*a,u=u*m+p*a,h=h*m+y*a}else{l=l*m+d*a,c=c*m+f*a,u=u*m+p*a,h=h*m+y*a;let v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vh=class vh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vh.prototype.isVector3=!0;P=vh,jc=new P,jd=new Jt,Mh=class Mh{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],y=s[0],_=s[3],m=s[6],v=s[1],T=s[4],S=s[7],A=s[2],w=s[5],x=s[8];return r[0]=o*y+a*v+l*A,r[3]=o*_+a*T+l*w,r[6]=o*m+a*S+l*x,r[1]=c*y+u*v+h*A,r[4]=c*_+u*T+h*w,r[7]=c*m+u*S+h*x,r[2]=d*y+f*v+p*A,r[5]=d*_+f*T+p*w,r[8]=d*m+f*S+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=h*y,e[1]=(s*c-u*n)*y,e[2]=(a*n-s*o)*y,e[3]=d*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qc.makeScale(e,t)),this}rotate(e){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qc.makeRotation(-e)),this}translate(e,t){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mh.prototype.isMatrix3=!0;et=Mh,Qc=new et,Qd=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ef=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);lt=C0();ja=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{tr===void 0&&(tr=yr("canvas")),tr.width=e.width,tr.height=e.height;let s=tr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=tr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},I0=0,Mr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(eu(s[o].image)):r.push(eu(s[o]))}else r=eu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};P0=0,tu=new P,dn=class i extends di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=$n,s=$n,r=rn,o=ni,a=ii,l=Un,c=i.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=mi(),this.name="",this.source=new Mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(tu).x}get height(){return this.source.getSize(tu).y}get depth(){return this.source.getSize(tu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case _r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case _r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Ju;dn.DEFAULT_ANISOTROPY=1;Sh=class Sh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],y=l[2],_=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(p-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(p+_)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,S=(f+1)/2,A=(m+1)/2,w=(u+d)/4,x=(h+y)/4,M=(p+_)/4;return T>S&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=x/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=M/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=x/r,s=M/r),this.set(n,s,r,t),this}let v=Math.sqrt((_-p)*(_-p)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(_-p)/v,this.y=(h-y)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sh.prototype.isVector4=!0;Et=Sh,Qa=class extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new dn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Mr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends Qa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fo=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},el=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Sl=class Sl{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,p,y,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,p,y,_)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,p,y,_){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=y,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/nr.setFromMatrixColumn(e,0).length(),r=1/nr.setFromMatrixColumn(e,1).length(),o=1/nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,y=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,y=c*h;t[0]=d+y*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,y=c*h;t[0]=d-y*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,y=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,y=a*c;t[0]=l*u,t[4]=y-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-y*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,y=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L0,e,N0)}lookAt(e,t,n){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),Qi.crossVectors(n,On),Qi.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Qi.crossVectors(n,On)),Qi.normalize(),ga.crossVectors(On,Qi),s[0]=Qi.x,s[4]=ga.x,s[8]=On.x,s[1]=Qi.y,s[5]=ga.y,s[9]=On.y,s[2]=Qi.z,s[6]=ga.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],y=n[6],_=n[10],m=n[14],v=n[3],T=n[7],S=n[11],A=n[15],w=s[0],x=s[4],M=s[8],R=s[12],C=s[1],D=s[5],F=s[9],B=s[13],L=s[2],H=s[6],Z=s[10],X=s[14],he=s[3],$=s[7],se=s[11],ee=s[15];return r[0]=o*w+a*C+l*L+c*he,r[4]=o*x+a*D+l*H+c*$,r[8]=o*M+a*F+l*Z+c*se,r[12]=o*R+a*B+l*X+c*ee,r[1]=u*w+h*C+d*L+f*he,r[5]=u*x+h*D+d*H+f*$,r[9]=u*M+h*F+d*Z+f*se,r[13]=u*R+h*B+d*X+f*ee,r[2]=p*w+y*C+_*L+m*he,r[6]=p*x+y*D+_*H+m*$,r[10]=p*M+y*F+_*Z+m*se,r[14]=p*R+y*B+_*X+m*ee,r[3]=v*w+T*C+S*L+A*he,r[7]=v*x+T*D+S*H+A*$,r[11]=v*M+T*F+S*Z+A*se,r[15]=v*R+T*B+S*X+A*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],y=e[7],_=e[11],m=e[15],v=l*f-c*d,T=a*f-c*h,S=a*d-l*h,A=o*f-c*u,w=o*d-l*u,x=o*h-a*u;return t*(y*v-_*T+m*S)-n*(p*v-_*A+m*w)+s*(p*T-y*A+m*x)-r*(p*S-y*w+_*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],y=e[13],_=e[14],m=e[15],v=t*a-n*o,T=t*l-s*o,S=t*c-r*o,A=n*l-s*a,w=n*c-r*a,x=s*c-r*l,M=u*y-h*p,R=u*_-d*p,C=u*m-f*p,D=h*_-d*y,F=h*m-f*y,B=d*m-f*_,L=v*B-T*F+S*D+A*C-w*R+x*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/L;return e[0]=(a*B-l*F+c*D)*H,e[1]=(s*F-n*B-r*D)*H,e[2]=(y*x-_*w+m*A)*H,e[3]=(d*w-h*x-f*A)*H,e[4]=(l*C-o*B-c*R)*H,e[5]=(t*B-s*C+r*R)*H,e[6]=(_*S-p*x-m*T)*H,e[7]=(u*x-d*S+f*T)*H,e[8]=(o*F-a*C+c*M)*H,e[9]=(n*C-t*F-r*M)*H,e[10]=(p*w-y*S+m*v)*H,e[11]=(h*S-u*w-f*v)*H,e[12]=(a*R-o*D-l*M)*H,e[13]=(t*D-n*R+s*M)*H,e[14]=(y*T-p*A-_*v)*H,e[15]=(u*A-h*T+d*v)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,y=o*u,_=o*h,m=a*h,v=l*c,T=l*u,S=l*h,A=n.x,w=n.y,x=n.z;return s[0]=(1-(y+m))*A,s[1]=(f+S)*A,s[2]=(p-T)*A,s[3]=0,s[4]=(f-S)*w,s[5]=(1-(d+m))*w,s[6]=(_+v)*w,s[7]=0,s[8]=(p+T)*x,s[9]=(_-v)*x,s[10]=(1-(d+y))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=nr.set(s[0],s[1],s[2]).length(),a=nr.set(s[4],s[5],s[6]).length(),l=nr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ci.copy(this);let c=1/o,u=1/a,h=1/l;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,t.setFromRotationMatrix(ci),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Zn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,y;if(l)p=r/(o-r),y=o*r/(o-r);else if(a===Zn)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===xr)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Zn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,y;if(l)p=1/(o-r),y=o/(o-r);else if(a===Zn)p=-2/(o-r),y=-(o+r)/(o-r);else if(a===xr)p=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Sl.prototype.isMatrix4=!0;$e=Sl,nr=new P,ci=new $e,L0=new P(0,0,0),N0=new P(1,1,1),Qi=new P,ga=new P,On=new P,tf=new $e,nf=new Jt,yi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nf.setFromEuler(this),this.setFromQuaternion(nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yi.DEFAULT_ORDER="XYZ";po=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},D0=0,sf=new P,ir=new Jt,Ci=new $e,_a=new P,$r=new P,U0=new P,O0=new Jt,rf=new P(1,0,0),of=new P(0,1,0),af=new P(0,0,1),lf={type:"added"},F0={type:"removed"},sr={type:"childadded",child:null},nu={type:"childremoved",child:null},Dt=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new yi,n=new Jt,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new et}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(rf,e)}rotateY(e){return this.rotateOnAxis(of,e)}rotateZ(e){return this.rotateOnAxis(af,e)}translateOnAxis(e,t){return sf.copy(e).applyQuaternion(this.quaternion),this.position.add(sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rf,e)}translateY(e){return this.translateOnAxis(of,e)}translateZ(e){return this.translateOnAxis(af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_a.copy(e):_a.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt($r,_a,this.up):Ci.lookAt(_a,$r,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(Ci),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lf),sr.child=e,this.dispatchEvent(sr),sr.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F0),nu.child=e,this.dispatchEvent(nu),nu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lf),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,U0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,O0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Dt.DEFAULT_UP=new P(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Wt=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},B0={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let _=t.getJointPose(y,n),m=this._getHandJoint(c,y);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},xa={h:0,s:0,l:0};ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=uh(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=iu(o,r,e+1/3),this.g=iu(o,r,e),this.b=iu(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=Rp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return lt.workingToColorSpace(Mn.copy(this),e),Math.round(dt(Mn.r*255,0,255))*65536+Math.round(dt(Mn.g*255,0,255))*256+Math.round(dt(Mn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,s=Mn.g,r=Mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=zt){lt.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,s=Mn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(xa);let n=oo(es.h,xa.h,t),s=oo(es.s,xa.s,t),r=oo(es.l,xa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new ke;ke.NAMES=Rp;Ns=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ui=new P,Ii=new P,su=new P,Pi=new P,rr=new P,or=new P,cf=new P,ru=new P,ou=new P,au=new P,lu=new Et,cu=new Et,uu=new Et,rs=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ui.subVectors(e,t),s.cross(ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ui.subVectors(s,t),Ii.subVectors(n,t),su.subVectors(e,t);let o=ui.dot(ui),a=ui.dot(Ii),l=ui.dot(su),c=Ii.dot(Ii),u=Ii.dot(su),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return lu.setScalar(0),cu.setScalar(0),uu.setScalar(0),lu.fromBufferAttribute(e,t),cu.fromBufferAttribute(e,n),uu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(lu,r.x),o.addScaledVector(cu,r.y),o.addScaledVector(uu,r.z),o}static isFrontFacing(e,t,n,s){return ui.subVectors(n,t),Ii.subVectors(e,t),ui.cross(Ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ui.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;rr.subVectors(s,n),or.subVectors(r,n),ru.subVectors(e,n);let l=rr.dot(ru),c=or.dot(ru);if(l<=0&&c<=0)return t.copy(n);ou.subVectors(e,s);let u=rr.dot(ou),h=or.dot(ou);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(rr,o);au.subVectors(e,r);let f=rr.dot(au),p=or.dot(au);if(p>=0&&f<=p)return t.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(or,a);let _=u*p-f*h;if(_<=0&&h-u>=0&&f-p>=0)return cf.subVectors(r,s),a=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(cf,a);let m=1/(_+y+d);return o=y*m,a=d*m,t.copy(n).addScaledVector(rr,o).addScaledVector(or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hi):hi.fromBufferAttribute(r,o),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ya.copy(n.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),va.subVectors(this.max,Zr),ar.subVectors(e.a,Zr),lr.subVectors(e.b,Zr),cr.subVectors(e.c,Zr),ts.subVectors(lr,ar),ns.subVectors(cr,lr),Ss.subVectors(ar,cr);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Ss.z,Ss.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Ss.z,0,-Ss.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Ss.y,Ss.x,0];return!hu(t,ar,lr,cr,va)||(t=[1,0,0,0,1,0,0,0,1],!hu(t,ar,lr,cr,va))?!1:(Ma.crossVectors(ts,ns),t=[Ma.x,Ma.y,Ma.z],hu(t,ar,lr,cr,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Li=[new P,new P,new P,new P,new P,new P,new P,new P],hi=new P,ya=new wn,ar=new P,lr=new P,cr=new P,ts=new P,ns=new P,Ss=new P,Zr=new P,va=new P,Ma=new P,bs=new P;tn=new P,Sa=new oe,k0=0,jt=class extends di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lh,this.updateRanges=[],this.gpuType=Hn,this.version=0,this._normalizationScale=e!==void 0?fc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):dh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):fh(e,this.array)}},mo=class extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},go=class extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},yt=class extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},z0=new wn,Jr=new P,du=new P,Ln=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):z0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);let t=Jr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Jr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(du)),this.expandByPoint(Jr.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},H0=0,Kn=new $e,fu=new Dt,ur=new P,Fn=new wn,jr=new wn,hn=new P,Ut=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(d0(e)?go:mo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return fu.lookAt(e),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Fn.min,jr.min),Fn.expandByPoint(hn),hn.addVectors(Fn.max,jr.max),Fn.expandByPoint(hn)):(Fn.expandByPoint(jr.min),Fn.expandByPoint(jr.max))}Fn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)hn.fromBufferAttribute(a,c),l&&(ur.fromBufferAttribute(e,c),hn.add(ur)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new P,l[R]=new P;let u=new P,h=new P,d=new P,f=new oe,p=new oe,y=new oe,_=new P,m=new P;function v(R,C,D){c[R]=c[C]=c[D]=1,u.fromBufferAttribute(n,R),h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,D),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,C),y.fromBufferAttribute(r,D),h.sub(u),d.sub(u),p.sub(f),y.sub(f);let F=1/(p.x*y.y-y.x*p.y);isFinite(F)&&(_.copy(h).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(F),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-y.x).multiplyScalar(F),a[R].add(_),a[C].add(_),a[D].add(_),l[R].add(m),l[C].add(m),l[D].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let R=0,C=T.length;R<C;++R){let D=T[R],F=D.start,B=D.count;for(let L=F,H=F+B;L<H;L+=3)v(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let S=new P,A=new P,w=new P,x=new P;function M(R){w.fromBufferAttribute(s,R),x.copy(w);let C=a[R];S.copy(C),S.sub(w.multiplyScalar(w.dot(C))).normalize(),A.crossVectors(x,C);let F=A.dot(l[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,F)}for(let R=0,C=n.count;R<C;++R)c[R]&&M(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),y=e.getX(d+1),_=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,_),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let y=0,_=l.length;y<_;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new jt(d,u,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},as=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lh,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=uf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=uf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};En=new P,ls=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?fc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ho("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ho("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):dh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):fh(e,this.data.array)}},pu=new P,G0=new P,V0=new et,Pn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=pu.subVectors(n,t).cross(G0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(pu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||V0.getNormalMatrix(e),s=this.coplanarPoint(pu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},W0=0,An=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Ur,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Vu,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Pn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ni=new P,mu=new P,ba=new P,Ta=new P,Ds=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){mu.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),Ta.copy(this.origin).sub(mu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ba),a=Ta.dot(this.direction),l=-Ta.dot(ba),c=Ta.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let y=1/u;h*=y,d*=y,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(mu).addScaledVector(ba,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);let n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,y=t.y-o.y,_=t.z-o.z,m=n.x-o.x,v=n.y-o.y,T=n.z-o.z,S=Math.abs(l),A=Math.abs(c),w=Math.abs(u),x,M,R,C,D,F,B,L,H,Z,X,he;if(S>=A&&S>=w?(R=l,F=h,H=p,he=m,l>=0?(x=c,M=u,C=d,D=f,B=y,L=_,Z=v,X=T):(x=u,M=c,C=f,D=d,B=_,L=y,Z=T,X=v)):A>=w?(R=c,F=d,H=y,he=v,c>=0?(x=u,M=l,C=f,D=h,B=_,L=p,Z=T,X=m):(x=l,M=u,C=h,D=f,B=p,L=_,Z=m,X=T)):(R=u,F=f,H=_,he=T,u>=0?(x=l,M=c,C=h,D=d,B=p,L=y,Z=m,X=v):(x=c,M=l,C=d,D=h,B=y,L=p,Z=v,X=m)),R===0)return null;let $=x/R,se=M/R,ee=1/R,Pe=C-$*F,De=D-se*F,J=B-$*H,ve=L-se*H,Le=Z-$*he,ie=X-se*he,V=Le*ve-ie*J,ue=Pe*ie-De*Le,pt=J*De-ve*Pe;if(s){if(V<0||ue<0||pt<0)return null}else if((V<0||ue<0||pt<0)&&(V>0||ue>0||pt>0))return null;let pe=V+ue+pt;if(pe===0)return null;let Ie=ee*(V*F+ue*H+pt*he);return(pe>0?Ie<0:Ie>0)?null:this.at(Ie/pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jn=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hf=new $e,Ts=new Ds,Ea=new Ln,df=new P,wa=new P,Aa=new P,Ra=new P,gu=new P,Ca=new P,ff=new P,Ia=new P,st=class extends Dt{constructor(e=new Ut,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(gu.fromBufferAttribute(h,e),o?Ca.addScaledVector(gu,u):Ca.addScaledVector(gu.sub(t),u))}t.add(Ca)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(Ea.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Ea,df)===null||Ts.origin.distanceToSquared(df)>(e.far-e.near)**2))&&(hf.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(hf),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=d.length;p<y;p++){let _=d[p],m=o[_.materialIndex],v=Math.max(_.start,f.start),T=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let S=v,A=T;S<A;S+=3){let w=a.getX(S),x=a.getX(S+1),M=a.getX(S+2);s=Pa(this,m,e,n,c,u,h,w,x,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let _=p,m=y;_<m;_+=3){let v=a.getX(_),T=a.getX(_+1),S=a.getX(_+2);s=Pa(this,o,e,n,c,u,h,v,T,S),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,y=d.length;p<y;p++){let _=d[p],m=o[_.materialIndex],v=Math.max(_.start,f.start),T=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));for(let S=v,A=T;S<A;S+=3){let w=S,x=S+1,M=S+2;s=Pa(this,m,e,n,c,u,h,w,x,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let _=p,m=y;_<m;_+=3){let v=_,T=_+1,S=_+2;s=Pa(this,o,e,n,c,u,h,v,T,S),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}};Qr=new Et,pf=new Et,mf=new Et,q0=new Et,gf=new $e,La=new P,_u=new Ln,_f=new $e,xu=new Ds,_o=class extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eu,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingBox.expandByPoint(La)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingSphere.expandByPoint(La)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_u.copy(this.boundingSphere),_u.applyMatrix4(s),e.ray.intersectsSphere(_u)!==!1&&(_f.copy(s).invert(),xu.copy(e.ray).applyMatrix4(_f),!(this.boundingBox!==null&&xu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dp?this.bindMatrixInverse.copy(this.bindMatrix).invert():He("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;pf.fromBufferAttribute(s.attributes.skinIndex,e),mf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Qr.copy(t),t.set(0,0,0,0)):(Qr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Qr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=mf.getComponent(r);if(o!==0){let a=pf.getComponent(r);gf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(q0.copy(Qr).applyMatrix4(gf),o)}}return t.isVector4&&(t.w=Qr.w),t.applyMatrix4(this.bindMatrixInverse)}},br=class extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Tr=class extends dn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Qt,u=Qt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xf=new $e,Y0=new $e,xo=class i{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){He("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Y0;xf.multiplyMatrices(a,t[r]),xf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Tr(t,e,e,ii,Hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(He("Skeleton: No bone found with UUID:",r),o=new br),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Fi=class extends jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hr=new $e,yf=new $e,Na=[],vf=new wn,K0=new $e,eo=new st,to=new Ln,yo=class extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,K0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),vf.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(vf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),to.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(to)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(n),e.ray.intersectsSphere(to)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),yf.multiplyMatrices(n,hr),eo.matrixWorld=yf,eo.raycast(e,Na);for(let o=0,a=Na.length;o<a;o++){let l=Na[o];l.instanceId=r,l.object=this,t.push(l)}Na.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tr(new Float32Array(s*this.count),s,this.count,Pl,Hn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Es=new Ln,$0=new oe(.5,.5),Da=new P,cs=class{constructor(e=new Pn,t=new Pn,n=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],y=r[9],_=r[10],m=r[11],v=r[12],T=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-o,f-u,m-p,A-v).normalize(),s[1].setComponents(c+o,f+u,m+p,A+v).normalize(),s[2].setComponents(c+a,f+h,m+y,A+T).normalize(),s[3].setComponents(c-a,f-h,m-y,A-T).normalize(),n)s[4].setComponents(l,d,_,S).normalize(),s[5].setComponents(c-l,f-d,m-_,A-S).normalize();else if(s[4].setComponents(c-l,f-d,m-_,A-S).normalize(),t===Zn)s[5].setComponents(c+l,f+d,m+_,A+S).normalize();else if(t===xr)s[5].setComponents(l,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);let t=$0.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Da.x=s.normal.x>0?e.max.x:e.min.x,Da.y=s.normal.y>0?e.max.y:e.min.y,Da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Mf=new $e,tl=class i{constructor(){this.coordinateSystem=Zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Mf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new cs),n[s].setFromProjectionMatrix(Mf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new cs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},Er=class extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},nl=new P,il=new P,Sf=new $e,no=new Ds,Ua=new Ln,yu=new P,bf=new P,Us=class extends Dt{constructor(e=new Ut,t=new Er){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)nl.fromBufferAttribute(t,s-1),il.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=nl.distanceTo(il);e.setAttribute("lineDistance",new yt(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=r,e.ray.intersectsSphere(Ua)===!1)return;Sf.copy(s).invert(),no.copy(e.ray).applyMatrix4(Sf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let y=f,_=p-1;y<_;y+=c){let m=u.getX(y),v=u.getX(y+1),T=Oa(this,e,no,l,m,v,y);T&&t.push(T)}if(this.isLineLoop){let y=u.getX(p-1),_=u.getX(f),m=Oa(this,e,no,l,y,_,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let y=f,_=p-1;y<_;y+=c){let m=Oa(this,e,no,l,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=Oa(this,e,no,l,p-1,f,p-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Tf=new P,Ef=new P,vo=class extends Us{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Tf.fromBufferAttribute(t,s),Ef.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tf.distanceTo(Ef);e.setAttribute("lineDistance",new yt(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Mo=class extends Us{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},wr=class extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wf=new $e,Au=new Ds,Fa=new Ln,Ba=new P,So=class extends Dt{constructor(e=new Ut,t=new wr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;wf.copy(s).invert(),Au.copy(e.ray).applyMatrix4(wf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,y=f;p<y;p++){let _=c.getX(p);Ba.fromBufferAttribute(h,_),Af(Ba,_,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,y=f;p<y;p++)Ba.fromBufferAttribute(h,p),Af(Ba,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};bo=class extends dn{constructor(e=[],t=Xs,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bi=class extends dn{constructor(e,t,n=fi,s,r,o,a=Qt,l=Qt,c,u=Oi,h=1){if(u!==Oi&&u!==Xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},To=class extends Bi{constructor(e,t=fi,n=Xs,s,r,o=Qt,a=Qt,l,c=Oi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Eo=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},jn=class i extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(h,2));function p(y,_,m,v,T,S,A,w,x,M,R){let C=S/x,D=A/M,F=S/2,B=A/2,L=w/2,H=x+1,Z=M+1,X=0,he=0,$=new P;for(let se=0;se<Z;se++){let ee=se*D-B;for(let Pe=0;Pe<H;Pe++){let De=Pe*C-F;$[y]=De*v,$[_]=ee*T,$[m]=L,c.push($.x,$.y,$.z),$[y]=0,$[_]=0,$[m]=w>0?1:-1,u.push($.x,$.y,$.z),h.push(Pe/x),h.push(1-se/M),X+=1}}for(let se=0;se<M;se++)for(let ee=0;ee<x;ee++){let Pe=d+ee+H*se,De=d+ee+H*(se+1),J=d+(ee+1)+H*(se+1),ve=d+(ee+1)+H*se;l.push(Pe,De,ve),l.push(De,J,ve),he+=6}a.addGroup(f,he,R),f+=he,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ki=class i extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,y=[],_=n/2,m=0;v(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(f,2));function v(){let S=new P,A=new P,w=0,x=(t-e)/n;for(let M=0;M<=r;M++){let R=[],C=M/r,D=C*(t-e)+e;for(let F=0;F<=s;F++){let B=F/s,L=B*l+a,H=Math.sin(L),Z=Math.cos(L);A.x=D*H,A.y=-C*n+_,A.z=D*Z,h.push(A.x,A.y,A.z),S.set(H,x,Z).normalize(),d.push(S.x,S.y,S.z),f.push(B,1-C),R.push(p++)}y.push(R)}for(let M=0;M<s;M++)for(let R=0;R<r;R++){let C=y[R][M],D=y[R+1][M],F=y[R+1][M+1],B=y[R][M+1];(e>0||R!==0)&&(u.push(C,D,B),w+=3),(t>0||R!==r-1)&&(u.push(D,F,B),w+=3)}c.addGroup(m,w,0),m+=w}function T(S){let A=p,w=new oe,x=new P,M=0,R=S===!0?e:t,C=S===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,_*C,0),d.push(0,C,0),f.push(.5,.5),p++;let D=p;for(let F=0;F<=s;F++){let L=F/s*l+a,H=Math.cos(L),Z=Math.sin(L);x.x=R*Z,x.y=_*C,x.z=R*H,h.push(x.x,x.y,x.z),d.push(0,C,0),w.x=H*.5+.5,w.y=Z*.5*C+.5,f.push(w.x,w.y),p++}for(let F=0;F<s;F++){let B=A+F,L=D+F;S===!0?u.push(L,L+1,B):u.push(L+1,L,B),M+=3}c.addGroup(m,M,S===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sl=class i extends Ut{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let T=new P,S=new P,A=new P;for(let w=0;w<t.length;w+=3)f(t[w+0],T),f(t[w+1],S),f(t[w+2],A),l(T,S,A,v)}function l(v,T,S,A){let w=A+1,x=[];for(let M=0;M<=w;M++){x[M]=[];let R=v.clone().lerp(S,M/w),C=T.clone().lerp(S,M/w),D=w-M;for(let F=0;F<=D;F++)F===0&&M===w?x[M][F]=R:x[M][F]=R.clone().lerp(C,F/D)}for(let M=0;M<w;M++)for(let R=0;R<2*(w-M)-1;R++){let C=Math.floor(R/2);R%2===0?(d(x[M][C+1]),d(x[M+1][C]),d(x[M][C])):(d(x[M][C+1]),d(x[M+1][C+1]),d(x[M+1][C]))}}function c(v){let T=new P;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(v),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function u(){let v=new P;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let S=_(v)/2/Math.PI+.5,A=m(v)/Math.PI+.5;o.push(S,1-A)}p(),h()}function h(){for(let v=0;v<o.length;v+=6){let T=o[v+0],S=o[v+2],A=o[v+4],w=Math.max(T,S,A),x=Math.min(T,S,A);w>.9&&x<.1&&(T<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,T){let S=v*3;T.x=e[S+0],T.y=e[S+1],T.z=e[S+2]}function p(){let v=new P,T=new P,S=new P,A=new P,w=new oe,x=new oe,M=new oe;for(let R=0,C=0;R<r.length;R+=9,C+=6){v.set(r[R+0],r[R+1],r[R+2]),T.set(r[R+3],r[R+4],r[R+5]),S.set(r[R+6],r[R+7],r[R+8]),w.set(o[C+0],o[C+1]),x.set(o[C+2],o[C+3]),M.set(o[C+4],o[C+5]),A.copy(v).add(T).add(S).divideScalar(3);let D=_(A);y(w,C+0,v,D),y(x,C+2,T,D),y(M,C+4,S,D)}}function y(v,T,S,A){A<0&&v.x===1&&(o[T]=v.x-1),S.x===0&&S.z===0&&(o[T]=A/2/Math.PI+.5)}function _(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],o=[],a=new P,l=new $e;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(dt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(dt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ar=class extends kn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rl=class extends Ar{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Rf=new P,Cf=new P,vu=new ph,Mu=new ph,Su=new ph,ol=class extends kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Cf.subVectors(s[0],s[1]).add(s[0]),c=Cf);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Rf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Rf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f);y<1e-4&&(y=1),p<1e-4&&(p=y),_<1e-4&&(_=y),vu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,y,_),Mu.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,y,_),Su.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,y,_)}else this.curveType==="catmullrom"&&(vu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Mu.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Su.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(vu.calc(l),Mu.calc(l),Su.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};wo=class extends kn{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lo(e,s.x,r.x,o.x,a.x),lo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},al=class extends kn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lo(e,s.x,r.x,o.x,a.x),lo(e,s.y,r.y,o.y,a.y),lo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ao=class extends kn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ll=class extends kn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ro=class extends kn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ao(e,s.x,r.x,o.x),ao(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rr=class extends kn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ao(e,s.x,r.x,o.x),ao(e,s.y,r.y,o.y),ao(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(If(a,l.x,c.x,u.x,h.x),If(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},Ru=Object.freeze({__proto__:null,ArcCurve:rl,CatmullRomCurve3:ol,CubicBezierCurve:wo,CubicBezierCurve3:al,EllipseCurve:Ar,LineCurve:Ao,LineCurve3:ll,QuadraticBezierCurve:Ro,QuadraticBezierCurve3:Rr,SplineCurve:Co}),cl=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ru[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ru[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Os=class extends cl{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ao(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ro(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new wo(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Co(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Ar(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Fs=class extends Os{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Os().fromJSON(s))}return this}};Pu=class{static triangulate(e,t,n=2){return ig(e,t,n)}},Rs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Lf(e),Nf(n,e);let o=e.length;t.forEach(Lf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Nf(n,t[l]);let a=Pu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Ir=class i extends Ut{constructor(e=new Fs([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new yt(s,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:vg,T,S=!1,A,w,x,M;if(m){T=m.getSpacedPoints(u),S=!0,d=!1;let z=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(u,z),w=new P,x=new P,M=new P}d||(_=0,f=0,p=0,y=0);let R=a.extractPoints(c),C=R.shape,D=R.holes;if(!Rs.isClockWise(C)){C=C.reverse();for(let z=0,le=D.length;z<le;z++){let ce=D[z];Rs.isClockWise(ce)&&(D[z]=ce.reverse())}}function B(z){let ce=10000000000000001e-36,we=z[0];for(let fe=1;fe<=z.length;fe++){let je=fe%z.length,Ue=z[je],qe=Ue.x-we.x,We=Ue.y-we.y,Ze=qe*qe+We*We,U=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(we.x),Math.abs(we.y)),Lt=ce*U*U;if(Ze<=Lt){z.splice(je,1),fe--;continue}we=Ue}}B(C),D.forEach(B);let L=D.length,H=C;for(let z=0;z<L;z++){let le=D[z];C=C.concat(le)}function Z(z,le,ce){return le||Je("ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(le,ce)}let X=C.length;function he(z,le,ce){let we,fe,je,Ue=z.x-le.x,qe=z.y-le.y,We=ce.x-z.x,Ze=ce.y-z.y,U=Ue*Ue+qe*qe,Lt=Ue*Ze-qe*We;if(Math.abs(Lt)>Number.EPSILON){let it=Math.sqrt(U),Mt=Math.sqrt(We*We+Ze*Ze),_e=le.x-qe/it,Nt=le.y+Ue/it,Ve=ce.x-Ze/Mt,Qe=ce.y+We/Mt,I=((Ve-_e)*Ze-(Qe-Nt)*We)/(Ue*Ze-qe*We);we=_e+Ue*I-z.x,fe=Nt+qe*I-z.y;let b=we*we+fe*fe;if(b<=2)return new oe(we,fe);je=Math.sqrt(b/2)}else{let it=!1;Ue>Number.EPSILON?We>Number.EPSILON&&(it=!0):Ue<-Number.EPSILON?We<-Number.EPSILON&&(it=!0):Math.sign(qe)===Math.sign(Ze)&&(it=!0),it?(we=-qe,fe=Ue,je=Math.sqrt(U)):(we=Ue,fe=qe,je=Math.sqrt(U/2))}return new oe(we/je,fe/je)}let $=[];for(let z=0,le=H.length,ce=le-1,we=z+1;z<le;z++,ce++,we++)ce===le&&(ce=0),we===le&&(we=0),$[z]=he(H[z],H[ce],H[we]);let se=[],ee,Pe=$.concat();for(let z=0,le=L;z<le;z++){let ce=D[z];ee=[];for(let we=0,fe=ce.length,je=fe-1,Ue=we+1;we<fe;we++,je++,Ue++)je===fe&&(je=0),Ue===fe&&(Ue=0),ee[we]=he(ce[we],ce[je],ce[Ue]);se.push(ee),Pe=Pe.concat(ee)}let De;if(_===0)De=Rs.triangulateShape(H,D);else{let z=[],le=[];for(let ce=0;ce<_;ce++){let we=ce/_,fe=f*Math.cos(we*Math.PI/2),je=p*Math.sin(we*Math.PI/2)+y;for(let Ue=0,qe=H.length;Ue<qe;Ue++){let We=Z(H[Ue],$[Ue],je);ue(We.x,We.y,-fe),we===0&&z.push(We)}for(let Ue=0,qe=L;Ue<qe;Ue++){let We=D[Ue];ee=se[Ue];let Ze=[];for(let U=0,Lt=We.length;U<Lt;U++){let it=Z(We[U],ee[U],je);ue(it.x,it.y,-fe),we===0&&Ze.push(it)}we===0&&le.push(Ze)}}De=Rs.triangulateShape(z,le)}let J=De.length,ve=p+y;for(let z=0;z<X;z++){let le=d?Z(C[z],Pe[z],ve):C[z];S?(x.copy(A.normals[0]).multiplyScalar(le.x),w.copy(A.binormals[0]).multiplyScalar(le.y),M.copy(T[0]).add(x).add(w),ue(M.x,M.y,M.z)):ue(le.x,le.y,0)}for(let z=1;z<=u;z++)for(let le=0;le<X;le++){let ce=d?Z(C[le],Pe[le],ve):C[le];S?(x.copy(A.normals[z]).multiplyScalar(ce.x),w.copy(A.binormals[z]).multiplyScalar(ce.y),M.copy(T[z]).add(x).add(w),ue(M.x,M.y,M.z)):ue(ce.x,ce.y,h/u*z)}for(let z=_-1;z>=0;z--){let le=z/_,ce=f*Math.cos(le*Math.PI/2),we=p*Math.sin(le*Math.PI/2)+y;for(let fe=0,je=H.length;fe<je;fe++){let Ue=Z(H[fe],$[fe],we);ue(Ue.x,Ue.y,h+ce)}for(let fe=0,je=D.length;fe<je;fe++){let Ue=D[fe];ee=se[fe];for(let qe=0,We=Ue.length;qe<We;qe++){let Ze=Z(Ue[qe],ee[qe],we);S?ue(Ze.x,Ze.y+T[u-1].y,T[u-1].x+ce):ue(Ze.x,Ze.y,h+ce)}}}Le(),ie();function Le(){let z=s.length/3;if(d){let le=0,ce=X*le;for(let we=0;we<J;we++){let fe=De[we];pt(fe[2]+ce,fe[1]+ce,fe[0]+ce)}le=u+_*2,ce=X*le;for(let we=0;we<J;we++){let fe=De[we];pt(fe[0]+ce,fe[1]+ce,fe[2]+ce)}}else{for(let le=0;le<J;le++){let ce=De[le];pt(ce[2],ce[1],ce[0])}for(let le=0;le<J;le++){let ce=De[le];pt(ce[0]+X*u,ce[1]+X*u,ce[2]+X*u)}}n.addGroup(z,s.length/3-z,0)}function ie(){let z=s.length/3,le=0;V(H,le),le+=H.length;for(let ce=0,we=D.length;ce<we;ce++){let fe=D[ce];V(fe,le),le+=fe.length}n.addGroup(z,s.length/3-z,1)}function V(z,le){let ce=z.length;for(;--ce>=0;){let we=ce,fe=ce-1;fe<0&&(fe=z.length-1);for(let je=0,Ue=u+_*2;je<Ue;je++){let qe=X*je,We=X*(je+1),Ze=le+we+qe,U=le+fe+qe,Lt=le+fe+We,it=le+we+We;pe(Ze,U,Lt,it)}}}function ue(z,le,ce){l.push(z),l.push(le),l.push(ce)}function pt(z,le,ce){Ie(z),Ie(le),Ie(ce);let we=s.length/3,fe=v.generateTopUV(n,s,we-3,we-2,we-1);Ne(fe[0]),Ne(fe[1]),Ne(fe[2])}function pe(z,le,ce,we){Ie(z),Ie(le),Ie(we),Ie(le),Ie(ce),Ie(we);let fe=s.length/3,je=v.generateSideWallUV(n,s,fe-6,fe-3,fe-2,fe-1);Ne(je[0]),Ne(je[1]),Ne(je[3]),Ne(je[1]),Ne(je[2]),Ne(je[3])}function Ie(z){s.push(l[z*3+0]),s.push(l[z*3+1]),s.push(l[z*3+2])}function Ne(z){r.push(z.x),r.push(z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Mg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ru[s.type]().fromJSON(s)),new i(n,e.options)}},vg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new oe(r,o),new oe(a,l),new oe(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],y=e[r*3],_=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-h),new oe(d,1-p),new oe(y,1-m)]:[new oe(a,1-l),new oe(u,1-h),new oe(f,1-p),new oe(_,1-m)]}};No=class i extends sl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ks=class i extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],y=[],_=[];for(let m=0;m<u;m++){let v=m*d-o;for(let T=0;T<c;T++){let S=T*h-r;p.push(S,-v,0),y.push(0,0,1),_.push(T/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let T=v+c*m,S=v+c*(m+1),A=v+1+c*(m+1),w=v+1+c*m;f.push(T,S,w),f.push(S,A,w)}this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(y,3)),this.setAttribute("uv",new yt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},zs=class i extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new P,d=new P,f=[],p=[],y=[],_=[];for(let m=0;m<=n;m++){let v=[],T=m/n,S=o+T*a,A=e*Math.cos(S),w=Math.sqrt(e*e-A*A),x=0;m===0&&o===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){let R=M/t,C=s+R*r;h.x=-w*Math.cos(C),h.y=A,h.z=w*Math.sin(C),p.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),_.push(R+x,1-T),v.push(c++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let T=u[m][v+1],S=u[m][v],A=u[m+1][v],w=u[m+1][v+1];(m!==0||o>0)&&f.push(T,S,w),(m!==n-1||l<Math.PI)&&f.push(S,A,w)}this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(y,3)),this.setAttribute("uv",new yt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Do=class i extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=new P,f=new P,p=new P;for(let y=0;y<=n;y++){let _=o+y/n*a;for(let m=0;m<=s;m++){let v=m/s*r;f.x=(e+t*Math.cos(_))*Math.cos(v),f.y=(e+t*Math.cos(_))*Math.sin(v),f.z=t*Math.sin(_),c.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),p.subVectors(f,d).normalize(),u.push(p.x,p.y,p.z),h.push(m/s),h.push(y/n)}}for(let y=1;y<=n;y++)for(let _=1;_<=s;_++){let m=(s+1)*y+_-1,v=(s+1)*(y-1)+_-1,T=(s+1)*(y-1)+_,S=(s+1)*y+_;l.push(m,v,S),l.push(v,T,S)}this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};pc={clone:Ks,merge:Sn},bg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bg,this.fragmentShader=Tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Sg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Et().fromArray(s.value);break;case"m3":this.uniforms[n].value=new et().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ul=class extends Qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Hs=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rn=class extends Hs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Uo=class extends An{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Tl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hl=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dl=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};vi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fl=class extends vi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ws,endingEnd:ws}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case As:r=e,a=2*t-n;break;case co:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case As:o=e,l=2*n-t;break;case co:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),y=p*p,_=y*p,m=-d*_+2*d*y-d*p,v=(1+d)*_+(-1.5-2*d)*y+(-.5+d)*p+1,T=(-1-f)*_+(1.5+f)*y+.5*p,S=f*_-f*y;for(let A=0;A!==a;++A)r[A]=m*o[u+A]+v*o[c+A]+T*o[l+A]+S*o[h+A];return r}},Oo=class extends vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},pl=class extends vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ml=class extends vi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(s-t),y=1-p;for(let _=0;_!==a;++_)r[_]=o[c+_]*y+o[l+_]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let y=o[c+p],_=o[l+p],m=f*d+p*2,v=h[m],T=h[m+1],S=e*d+p*2,A=u[S],w=u[S+1],x=Rg(n,t,v,A,s);r[p]=Np(x,y,T,w,_)}return r}};Nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ss(t,this.TimeBufferType),this.values=ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ss(e.times,Array),values:ss(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),so(e.settings)&&(n.settings={inTangents:ss(e.settings.inTangents,Array),outTangents:ss(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ml(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case Ps:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth;break;case wu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Ps;case this.InterpolantFactoryMethodSmooth:return Va;case this.InterpolantFactoryMethodBezier:return wu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;so(this.settings)&&(Of(this.settings.inTangents,e),Of(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;so(this.settings)&&(Ff(this.settings.inTangents,e),Ff(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&f0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Va,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let y=t[h+p];if(y!==t[d+p]||y!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,so(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Ps;zi=class extends Nn{constructor(e,t,n){super(e,t,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Is;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;Fo=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Fo.prototype.ValueTypeName="color";Hi=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Hi.prototype.ValueTypeName="number";gl=class extends vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Jt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Gi=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}};Gi.prototype.ValueTypeName="quaternion";Gi.prototype.InterpolantFactoryMethodSmooth=void 0;Vi=class extends Nn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Is;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;us=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};us.prototype.ValueTypeName="vector";Gs=class{constructor(e="",t=-1,n=[],s=dc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=mi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ig(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Nn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Eg(l);l=Uf(l,1,u),c=Uf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Hi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};xi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Bf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Bf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};_l=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Dp=new _l,ei=class{constructor(e){this.manager=e!==void 0?e:Dp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ei.DEFAULT_MATERIAL_NAME="__DEFAULT";Di={},Lu=class extends Error{constructor(e,t){super(e),this.response=t}},Wi=class extends ei{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=xi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Di[e]!==void 0){Di[e].push({onLoad:t,onProgress:n,onError:s});return}Di[e]=[],Di[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&He("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Di[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,y=0,_=new ReadableStream({start(m){v();function v(){h.read().then(({done:T,value:S})=>{if(T)m.close();else{y+=S.byteLength;let A=new ProgressEvent("progress",{lengthComputable:p,loaded:y,total:f});for(let w=0,x=u.length;w<x;w++){let M=u[w];M.onProgress&&M.onProgress(A)}m.enqueue(S),v()}},T=>{m.error(T)})}}});return new Response(_)}else throw new Lu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{xi.add(`file:${e}`,c);let u=Di[e];delete Di[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Di[e];if(u===void 0)throw this.manager.itemError(e),c;delete Di[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},dr=new WeakMap,xl=class extends ei{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=xi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=dr.get(o);h===void 0&&(h=[],dr.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=yr("img");function l(){u(),t&&t(this);let h=dr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}dr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),xi.remove(`image:${e}`);let d=dr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}dr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),xi.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}},Bo=class extends ei{constructor(e){super(e)}load(e,t,n,s){let r=new dn,o=new xl(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Pr=class extends Dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},bu=new $e,kf=new P,zf=new P,Lr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;kf.setFromMatrixPosition(e.matrixWorld),t.position.copy(kf),zf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){bu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(bu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===xr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ha=new P,Ga=new Jt,_i=new P,ko=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ha,Ga,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Ga,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ha,Ga,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Ga,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new P,Hf=new oe,Gf=new oe,Zt=class extends ko{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,Hf,Gf),t.subVectors(Gf,Hf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ro*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Nu=class extends Lr{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ls*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},zo=class extends Pr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Nu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Du=class extends Lr{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}},Ho=class extends Pr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Du}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Mi=class extends ko{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uu=class extends Lr{constructor(){super(new Mi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Go=class extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Uu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},zn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Tu=new WeakMap,Vo=class extends ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&He("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&He("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=xi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Tu.has(o)===!0?(s&&s(Tu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return xi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Tu.set(l,c),xi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});xi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},fr=-90,pr=1,Nr=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(fr,pr,e,t);s.layers=this.layers,this.add(s);let r=new Zt(fr,pr,e,t);r.layers=this.layers,this.add(r);let o=new Zt(fr,pr,e,t);o.layers=this.layers,this.add(o);let a=new Zt(fr,pr,e,t);a.layers=this.layers,this.add(a);let l=new Zt(fr,pr,e,t);l.layers=this.layers,this.add(l);let c=new Zt(fr,pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},yl=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},vl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Jt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Jt.multiplyQuaternionsFlat(e,o,e,t,e,n),Jt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},gh="\\[\\]\\.:\\/",Pg=new RegExp("["+gh+"]","g"),_h="[^"+gh+"]",Lg="[^"+gh.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",_h),Dg=/(WCOD+)?/.source.replace("WCOD",Lg),Ug=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_h),Og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_h),Fg=new RegExp("^"+Ng+Dg+Ug+Og+"$"),Bg=["material","materials","bones","map"],Ou=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pg,"")}static parseTrackName(e){let t=Fg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Ou;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Ml=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ws,endingEnd:ws};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=fp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case mp:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case dc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===pp;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===hc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=As,s.endingEnd=As):(e?s.endingStart=this.zeroSlopeAtStart?As:ws:s.endingStart=co,t?s.endingEnd=this.zeroSlopeAtEnd?As:ws:s.endingEnd=co)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},kg=new Float32Array(1),Wo=class extends di{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=s[h],f=d.name,p=u[f];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let y=t&&t._propertyBindings[h].binding.parsedPath;p=new vl(At.create(n,f,y),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Oo(new Float32Array(2),new Float32Array(2),1,kg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Gs.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=dc),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Ml(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Gs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},bh=class bh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};bh.prototype.isMatrix2=!0;Fu=bh;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl)});function nm(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hg(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],y=h[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let y=h[f];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function Sy(i,e,t,n,s,r){let o=new ke(0),a=s===!0?0:1,l,c,u=null,h=0,d=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let S=v.backgroundBlurriness>0;T=e.get(T,S)}return T}function p(v){let T=!1,S=f(v);S===null?_(o,a):S&&S.isColor&&(_(S,1),T=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(v,T){let S=f(T);S&&S.isCubeTexture?(c===void 0&&(c=new st(new jn(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Ks(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(My.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(im),c.material.toneMapped=lt.getTransfer(S.colorSpace)!==St,(u!==S||h!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new st(new ks(2,2),new Qn({name:"BackgroundMaterial",uniforms:Ks(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=lt.getTransfer(S.colorSpace)!==St,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function _(v,T){v.getRGB(mc,mh(i)),t.buffers.color.setClear(mc.r,mc.g,mc.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,_(o,a)},render:p,addToRenderList:y,dispose:m}}function by(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(D,F,B,L,H){let Z=!1,X=h(D,L,B,F);r!==X&&(r=X,c(r.object)),Z=f(D,L,B,H),Z&&p(D,L,B,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(D,F,B,L),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function h(D,F,B,L){let H=L.wireframe===!0,Z=n[F.id];Z===void 0&&(Z={},n[F.id]=Z);let X=D.isInstancedMesh===!0?D.id:0,he=Z[X];he===void 0&&(he={},Z[X]=he);let $=he[B.id];$===void 0&&($={},he[B.id]=$);let se=$[H];return se===void 0&&(se=d(l()),$[H]=se),se}function d(D){let F=[],B=[],L=[];for(let H=0;H<t;H++)F[H]=0,B[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,F,B,L){let H=r.attributes,Z=F.attributes,X=0,he=B.getAttributes();for(let $ in he)if(he[$].location>=0){let ee=H[$],Pe=Z[$];if(Pe===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(Pe=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(Pe=D.instanceColor)),ee===void 0||ee.attribute!==Pe||Pe&&ee.data!==Pe.data)return!0;X++}return r.attributesNum!==X||r.index!==L}function p(D,F,B,L){let H={},Z=F.attributes,X=0,he=B.getAttributes();for(let $ in he)if(he[$].location>=0){let ee=Z[$];ee===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));let Pe={};Pe.attribute=ee,ee&&ee.data&&(Pe.data=ee.data),H[$]=Pe,X++}r.attributes=H,r.attributesNum=X,r.index=L}function y(){let D=r.newAttributes;for(let F=0,B=D.length;F<B;F++)D[F]=0}function _(D){m(D,0)}function m(D,F){let B=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;B[D]=1,L[D]===0&&(i.enableVertexAttribArray(D),L[D]=1),H[D]!==F&&(i.vertexAttribDivisor(D,F),H[D]=F)}function v(){let D=r.newAttributes,F=r.enabledAttributes;for(let B=0,L=F.length;B<L;B++)F[B]!==D[B]&&(i.disableVertexAttribArray(B),F[B]=0)}function T(D,F,B,L,H,Z,X){X===!0?i.vertexAttribIPointer(D,F,B,H,Z):i.vertexAttribPointer(D,F,B,L,H,Z)}function S(D,F,B,L){y();let H=L.attributes,Z=B.getAttributes(),X=F.defaultAttributeValues;for(let he in Z){let $=Z[he];if($.location>=0){let se=H[he];if(se===void 0&&(he==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),he==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),se!==void 0){let ee=se.normalized,Pe=se.itemSize,De=e.get(se);if(De===void 0)continue;let J=De.buffer,ve=De.type,Le=De.bytesPerElement,ie=ve===i.INT||ve===i.UNSIGNED_INT||se.gpuType===Rl;if(se.isInterleavedBufferAttribute){let V=se.data,ue=V.isInterleavedBuffer===!0?V.stride:V.itemSize,pt=se.offset;if(V.isInstancedInterleavedBuffer||V.isInstancedBufferAttribute){for(let pe=0;pe<$.locationSize;pe++)m($.location+pe,V.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let pe=0;pe<$.locationSize;pe++)_($.location+pe);i.bindBuffer(i.ARRAY_BUFFER,J);for(let pe=0;pe<$.locationSize;pe++)T($.location+pe,Pe/$.locationSize,ve,ee,ue*Le,(pt+Pe/$.locationSize*pe)*Le,ie)}else{if(se.isInstancedBufferAttribute){for(let V=0;V<$.locationSize;V++)m($.location+V,se.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let V=0;V<$.locationSize;V++)_($.location+V);i.bindBuffer(i.ARRAY_BUFFER,J);for(let V=0;V<$.locationSize;V++)T($.location+V,Pe/$.locationSize,ve,ee,Pe*Le,Pe/$.locationSize*V*Le,ie)}}else if(X!==void 0){let ee=X[he];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv($.location,ee);break;case 3:i.vertexAttrib3fv($.location,ee);break;case 4:i.vertexAttrib4fv($.location,ee);break;default:i.vertexAttrib1fv($.location,ee)}}}}v()}function A(){R();for(let D in n){let F=n[D];for(let B in F){let L=F[B];for(let H in L){let Z=L[H];for(let X in Z)u(Z[X].object),delete Z[X];delete L[H]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;let F=n[D.id];for(let B in F){let L=F[B];for(let H in L){let Z=L[H];for(let X in Z)u(Z[X].object),delete Z[X];delete L[H]}}delete n[D.id]}function x(D){for(let F in n){let B=n[F];for(let L in B){let H=B[L];if(H[D.id]===void 0)continue;let Z=H[D.id];for(let X in Z)u(Z[X].object),delete Z[X];delete H[D.id]}}}function M(D){for(let F in n){let B=n[F],L=D.isInstancedMesh===!0?D.id:0,H=B[L];if(H!==void 0){for(let Z in H){let X=H[Z];for(let he in X)u(X[he].object),delete X[he];delete H[Z]}delete B[L],Object.keys(B).length===0&&delete n[F]}}}function R(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:_,disableUnusedAttributes:v}}function Ty(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ey(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==ii&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let M=x===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Un&&x!==Hn&&!M&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:S,maxSamples:A,samples:w}}function wy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Pn,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,y=h.clipIntersection,_=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||r&&!_)r?u(null):c();else{let v=r?0:n,T=v*4,S=m.clippingState||null;l.value=S,S=u(p,d,T,f);for(let A=0;A!==T;++A)S[A]=t[A];m.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let y=h!==null?h.length:0,_=null;if(y!==0){if(_=l.value,p!==!0||_===null){let m=f+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(_===null||_.length<m)&&(_=new Float32Array(m));for(let T=0,S=f;T!==y;++T,S+=4)o.copy(h[T]).applyMatrix4(v,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function Op(i,e,t){return new na(i,{minFilter:ni,generateMipmaps:e,type:pi,colorSpace:pn,depthBuffer:t})}function ia(i,e,t){return new Qn({name:i,uniforms:e,vertexShader:ut.cube_vert,fragmentShader:t,side:mn,blending:Vs,depthTest:!1,depthWrite:!1})}function Ly(){return ia("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${sm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ny(){return ia("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:rm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Dy(){return ia("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ry}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

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

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Fp(){return ia("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Bp(){return ia("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Uy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===El||f===wl)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let y=new na(p.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===El||f===wl,y=f===Xs||f===Or;if(p||y){let _=t.get(d),m=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new _c(i)),_=p?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{let v=d.image;return p&&v&&v.height>0||y&&v&&l(v)?(n===null&&(n=new _c(i)),_=p?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function a(d,f){return f===El?d.mapping=Xs:f===wl&&(d.mapping=Or),d}function l(d){let f=0,p=6;for(let y=0;y<p;y++)d[y]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Oy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Cs("WebGLRenderer: "+n+" extension not supported."),s}}}function Fy(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let _ in p.attributes)e.remove(p.attributes[_]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let y=r.get(p);y&&(e.remove(y),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function u(p){let y=p.attributes;for(let _ in y)e.update(y[_],i.ARRAY_BUFFER)}function h(p){let y=p.index,_=p.attributes.position,m=0;if(_===void 0)return;let v=y!==null?y.array.length:_.array.length/3-1,T=_.count>=65535?go:mo,S=new T(Math.ceil(v/3)*6,1),A=S.array;if(y!==null){let x=y.array;m=y.version;for(let M=0,R=0;M<v;M+=3){let C=x[M+0],D=x[M+1],F=x[M+2];A[R++]=C,A[R++]=D,A[R++]=D,A[R++]=F,A[R++]=F,A[R++]=C}}else{m=_.version;for(let x=0,M=0;x<v;x+=3){let R=x+0,C=x+1,D=x+2;A[M++]=R,A[M++]=C,A[M++]=C,A[M++]=D,A[M++]=D,A[M++]=R}}S.version=m;let w=r.get(p);w&&e.remove(w),r.set(p,S)}function d(p){let y=r.get(p);if(y){let _=p.index;_!==null&&y.version<_.version&&h(p)}else h(p);return r.get(p)}function f(){for(let p in s){let y=s[p].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function By(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*o,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let y=0;for(let _=0;_<f;_++)y+=d[_];t.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ky(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zy(i,e,t){let n=new WeakMap,s=new Et;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let R=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;f===!0&&(T=1),p===!0&&(T=2),y===!0&&(T=3);let S=a.attributes.position.count*T,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let w=new Float32Array(S*A*4*h),x=new fo(w,S,A,h);x.type=Hn,x.needsUpdate=!0;let M=T*4;for(let C=0;C<h;C++){let D=_[C],F=m[C],B=v[C],L=S*A*4*C;for(let H=0;H<D.count;H++){let Z=H*M;f===!0&&(s.fromBufferAttribute(D,H),w[L+Z+0]=s.x,w[L+Z+1]=s.y,w[L+Z+2]=s.z,w[L+Z+3]=0),p===!0&&(s.fromBufferAttribute(F,H),w[L+Z+4]=s.x,w[L+Z+5]=s.y,w[L+Z+6]=s.z,w[L+Z+7]=0),y===!0&&(s.fromBufferAttribute(B,H),w[L+Z+8]=s.x,w[L+Z+9]=s.y,w[L+Z+10]=s.z,w[L+Z+11]=B.itemSize===4?s.w:1)}}d={count:h,texture:x,size:new oe(S,A)},n.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hy(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}function Vy(i,e,t,n,s,r){let o=new Bn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Ut;u.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new yt([0,2,0,0,2,0],2));let h=new ul({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new st(u,h),f=new Mi(-1,1,1,-1,0,1),p=null,y=null,_=!1,m,v=null,T=[],S=!1;this.setSize=function(A,w){o.setSize(A,w),a!==null&&a.setSize(A,w),l!==null&&l.setSize(A,w);for(let x=0;x<T.length;x++){let M=T[x];M.setSize&&M.setSize(A,w)}},this.setEffects=function(A){T=A,S=T.length>0&&T[0].isRenderPass===!0;let w=o.width,x=o.height;T.length>0&&a===null&&(a=new Bn(w,x,{type:pi,depthBuffer:!1,stencilBuffer:!1}),l=new Bn(w,x,{type:pi,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&T.some(R=>R.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new Bi(w,x),r===!0&&(c.format=Xi,c.type=Ys)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let R=0;R<T.length;R++){let C=T[R];C.setSize&&C.setSize(w,x),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,w){if(_||A.toneMapping===Si&&T.length===0)return!1;if(v=w,w!==null){let x=w.width,M=w.height;(o.width!==x||o.height!==M)&&this.setSize(x,M)}return S===!1&&A.setRenderTarget(o),m=A.toneMapping,A.toneMapping=Si,!0},this.hasRenderPass=function(){return S},this.end=function(A,w){A.toneMapping=m,_=!0;let x=o,M=a;for(let R=0;R<T.length;R++){let C=T[R];C.enabled!==!1&&(C.render(A,M,x,w),C.needsSwap!==!1&&(x=M,M=M===a?l:a))}if(p!==A.outputColorSpace||y!==A.toneMapping){p=A.outputColorSpace,y=A.toneMapping,h.defines={},lt.getTransfer(p)===St&&(h.defines.SRGB_TRANSFER="");let R=Gy[y];R&&(h.defines[R]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(v),A.render(d,f),v=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}function Hr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=kp[s];if(r===void 0&&(r=new Float32Array(s),kp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yc(i,e){let t=zp[e];t===void 0&&(t=new Int32Array(e),zp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function Yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function Ky(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Vp.set(n),i.uniformMatrix2fv(this.addr,!1,Vp),an(t,n)}}function $y(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Gp.set(n),i.uniformMatrix3fv(this.addr,!1,Gp),an(t,n)}}function Zy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Hp.set(n),i.uniformMatrix4fv(this.addr,!1,Hp),an(t,n)}}function Jy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function Qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function tv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function vc(i){return i.version===0&&(i.compareFunction=ah,i.needsUpdate=!0),i}function rv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=vc(am):r=om,t.setTexture2D(e||r,s)}function ov(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||um,s)}function av(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=vc(lm):r=hm,t.setTextureCube(e||r,s)}function lv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||cm,s)}function cv(i){switch(i){case 5126:return Wy;case 35664:return Xy;case 35665:return qy;case 35666:return Yy;case 35674:return Ky;case 35675:return $y;case 35676:return Zy;case 5124:case 35670:return Jy;case 35667:case 35671:return jy;case 35668:case 35672:return Qy;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}function uv(i,e){i.uniform1fv(this.addr,e)}function hv(i,e){let t=Hr(e,this.size,2);i.uniform2fv(this.addr,t)}function dv(i,e){let t=Hr(e,this.size,3);i.uniform3fv(this.addr,t)}function fv(i,e){let t=Hr(e,this.size,4);i.uniform4fv(this.addr,t)}function pv(i,e){let t=Hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mv(i,e){let t=Hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gv(i,e){let t=Hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _v(i,e){i.uniform1iv(this.addr,e)}function xv(i,e){i.uniform2iv(this.addr,e)}function yv(i,e){i.uniform3iv(this.addr,e)}function vv(i,e){i.uniform4iv(this.addr,e)}function Mv(i,e){i.uniform1uiv(this.addr,e)}function Sv(i,e){i.uniform2uiv(this.addr,e)}function bv(i,e){i.uniform3uiv(this.addr,e)}function Tv(i,e){i.uniform4uiv(this.addr,e)}function Ev(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=vc(am):o=om;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function wv(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||um,r[o])}function Av(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=vc(lm):o=hm;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Rv(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||cm,r[o])}function Cv(i){switch(i){case 5126:return uv;case 35664:return hv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return xv;case 35668:case 35672:return yv;case 35669:case 35673:return vv;case 5125:return Mv;case 36294:return Sv;case 36295:return bv;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}function Wp(i,e){i.seq.push(e),i.map[e.id]=e}function Iv(i,e,t){let n=i.name,s=n.length;for(Eh.lastIndex=0;;){let r=Eh.exec(n),o=Eh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wp(t,c===void 0?new Ah(a,i,e):new Rh(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Ch(a),Wp(t,h)),t=h}}}function Xp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function Nv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Dv(i){lt._getMatrix(qp,lt.workingColorSpace,i);let e=`mat3( ${qp.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case uo:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Yp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Nv(i.getShaderSource(e),a)}else return r}function Uv(i,e){let t=Dv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function Fv(i,e){let t=Ov[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bv(){lt.getLuminanceCoefficients(gc);let i=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function zv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ta(i){return i!==""}function Kp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function $p(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Ih(i){return i.replace(Gv,Vv)}function Vv(i,e){let t=ut[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ih(t)}function Zp(i){return i.replace(Wv,Xv)}function Xv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yv(i){return qv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function $v(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Kv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Jv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zv[i.combine]||"ENVMAP_BLENDING_NONE"}function jv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Yv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=$v(t),h=Jv(t),d=kv(t),f=zv(r),p=s.createProgram(),y,_,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ta).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ta).join(`
`),_.length>0&&(_+=`
`)):(y=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),_=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?ut.tonemapping_pars_fragment:"",t.toneMapping!==Si?Fv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Uv("linearToOutputTexel",t.outputColorSpace),Bv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),o=Ih(o),o=Kp(o,t),o=$p(o,t),a=Ih(a),a=Kp(a,t),a=$p(a,t),o=Zp(o),a=Zp(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let v=m+y+o,T=m+_+a,S=Xp(s,s.VERTEX_SHADER,v),A=Xp(s,s.FRAGMENT_SHADER,T);s.attachShader(p,S),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(p)||"",F=s.getShaderInfoLog(S)||"",B=s.getShaderInfoLog(A)||"",L=D.trim(),H=F.trim(),Z=B.trim(),X=!0,he=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,S,A);else{let $=Yp(s,S,"vertex"),se=Yp(s,A,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+$+`
`+se)}else L!==""?He("WebGLProgram: Program Info Log:",L):(H===""||Z==="")&&(he=!1);he&&(C.diagnostics={runnable:X,programLog:L,vertexShader:{log:H,prefix:y},fragmentShader:{log:Z,prefix:_}})}s.deleteShader(S),s.deleteShader(A),x=new zr(s,p),M=Hv(s,p)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(p,Pv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=A,this}function eM(i){return i===hs||i===Zo||i===Jo}function tM(i,e,t,n,s,r){let o=new po,a=new Ph,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,M,R,C,D,F){let B=C.fog,L=D.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||H,Z),he=d[x.type],$=n.precision;x.precision!==null&&($=n.getMaxPrecision(x.precision),$!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",$,"instead."));let se=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=se!==void 0?se.length:0,Pe=0;L.morphAttributes.position!==void 0&&(Pe=1),L.morphAttributes.normal!==void 0&&(Pe=2),L.morphAttributes.color!==void 0&&(Pe=3);let De,J,ve,Le;if(he){let Re=Ti[he];De=Re.vertexShader,J=Re.fragmentShader}else{De=x.vertexShader,J=x.fragmentShader;let Re=a.getVertexShaderStage(x),Tt=a.getFragmentShaderStage(x);a.update(x,Re,Tt),ve=Re.id,Le=Tt.id}let ie=i.getRenderTarget(),V=i.state.buffers.depth.getReversed(),ue=D.isInstancedMesh===!0,pt=D.isBatchedMesh===!0,pe=!!x.map,Ie=!!x.matcap,Ne=!!X,z=Ne&&X.isPMREMTexture===!0,le=!!x.aoMap,ce=!!x.lightMap,we=!!x.bumpMap&&x.wireframe===!1,fe=!!x.normalMap,je=!!x.displacementMap,Ue=!!x.emissiveMap,qe=!!x.metalnessMap,We=!!x.roughnessMap,Ze=x.anisotropy>0,U=x.clearcoat>0,Lt=x.diffuseRoughness>0,it=x.dispersion>0,Mt=x.retroreflectivity>0,_e=x.iridescence>0,Nt=x.sheen>0,Ve=x.transmission>0,Qe=Ze&&!!x.anisotropyMap,I=U&&!!x.clearcoatMap,b=U&&!!x.clearcoatNormalMap,G=U&&!!x.clearcoatRoughnessMap,de=Lt&&!!x.diffuseRoughnessMap,re=_e&&!!x.iridescenceMap,xe=_e&&!!x.iridescenceThicknessMap,Te=Nt&&!!x.sheenColorMap,Q=Nt&&!!x.sheenRoughnessMap,te=!!x.specularMap,Me=!!x.specularColorMap,N=!!x.specularIntensityMap,ne=Ve&&!!x.transmissionMap,j=Ve&&!!x.thicknessMap,Se=!!x.gradientMap,ge=!!x.alphaMap,ye=x.alphaTest>0,Ge=!!x.alphaHash,ct=!!x.extensions,me=Si;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(me=i.toneMapping);let Xe=z?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,at={shaderID:he,shaderType:x.type,shaderName:x.name,vertexShader:De,fragmentShader:J,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:Le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:$,batching:pt,batchingColor:pt&&D._colorsTexture!==null,instancing:ue,instancingColor:ue&&D.instanceColor!==null,instancingMorph:ue&&D.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:pe,matcap:Ie,envMap:Ne,envMapMode:Ne&&X.mapping,envMapPMREM:z,envMapMaxLod:z?Xe.length-1:null,envMapSize:z?Xe[0].width:null,aoMap:le,lightMap:ce,bumpMap:we,normalMap:fe,displacementMap:je,emissiveMap:Ue,normalMapObjectSpace:fe&&x.normalMapType===_p,normalMapTangentSpace:fe&&x.normalMapType===Qo,packedNormalMap:fe&&x.normalMapType===Qo&&eM(x.normalMap.format),metalnessMap:qe,roughnessMap:We,anisotropy:Ze,anisotropyMap:Qe,clearcoat:U,clearcoatMap:I,clearcoatNormalMap:b,clearcoatRoughnessMap:G,diffuseRoughness:Lt,diffuseRoughnessMap:de,dispersion:it,retroreflection:Mt,iridescence:_e,iridescenceMap:re,iridescenceThicknessMap:xe,sheen:Nt,sheenColorMap:Te,sheenRoughnessMap:Q,specularMap:te,specularColorMap:Me,specularIntensityMap:N,transmission:Ve,transmissionMap:ne,thicknessMap:j,gradientMap:Se,opaque:x.transparent===!1&&x.blending===Ur&&x.alphaToCoverage===!1,alphaMap:ge,alphaTest:ye,alphaHash:Ge,combine:x.combine,mapUv:pe&&f(x.map.channel),aoMapUv:le&&f(x.aoMap.channel),lightMapUv:ce&&f(x.lightMap.channel),bumpMapUv:we&&f(x.bumpMap.channel),normalMapUv:fe&&f(x.normalMap.channel),displacementMapUv:je&&f(x.displacementMap.channel),emissiveMapUv:Ue&&f(x.emissiveMap.channel),metalnessMapUv:qe&&f(x.metalnessMap.channel),roughnessMapUv:We&&f(x.roughnessMap.channel),anisotropyMapUv:Qe&&f(x.anisotropyMap.channel),clearcoatMapUv:I&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:re&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(x.sheenRoughnessMap.channel),specularMapUv:te&&f(x.specularMap.channel),specularColorMapUv:Me&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:ne&&f(x.transmissionMap.channel),thicknessMapUv:j&&f(x.thicknessMap.channel),alphaMapUv:ge&&f(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(fe||Ze),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(pe||ge),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&fe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:V,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Pe,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(Re=>Re.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:pe&&x.map.isVideoTexture===!0&&lt.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&lt.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Dn,flipSided:x.side===mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ct&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&x.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function y(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)M.push(R),M.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(_(M,x),m(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function _(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function m(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let M=d[x.type],R;if(M){let C=Ti[M];R=pc.clone(C.uniforms)}else R=x.uniforms;return R}function T(x,M){let R=u.get(M);return R!==void 0?++R.usedTimes:(R=new jv(i,M,x,s),c.push(R),u.set(M,R)),R}function S(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:v,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:w}}function nM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function iM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function jp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,y,_,m){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:_,group:m},i[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=p,v.materialVariant=o(d),v.groupOrder=y,v.renderOrder=d.renderOrder,v.z=_,v.group=m),e++,v}function l(d,f,p,y,_,m,v){v.reversedDepth===!0&&(_=-_);let T=a(d,f,p,y,_,m);p.transmission>0?n.push(T):p.transparent===!0?s.push(T):t.push(T)}function c(d,f,p,y,_,m){let v=a(d,f,p,y,_,m);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function u(d,f){t.length>1&&t.sort(d||iM),n.length>1&&n.sort(f||jp),s.length>1&&s.sort(f||jp)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function sM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Qp,i.set(n,[o])):s>=r.length?(o=new Qp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function rM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new ke};break;case"SpotLight":t={position:new P,direction:new P,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function oM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function lM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cM(i){let e=new rM,t=oM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new $e,o=new $e;function a(c){let u=0,h=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,p=0,y=0,_=0,m=0,v=0,T=0,S=0,A=0,w=0,x=0,M=0,R=0,C=0;c.sort(lM);for(let F=0,B=c.length;F<B;F++){let L=c[F],H=L.color,Z=L.intensity,X=L.distance,he=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===hs?he=L.shadow.map.texture:he=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=H.r*Z,h+=H.g*Z,d+=H.b*Z;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],Z);C++}else if(L.isSunLight){let $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let se=L.shadow,ee=t.get(L);ee.shadowIntensity=se.intensity,ee.shadowBias=se.bias,ee.shadowNormalBias=se.normalBias,ee.shadowRadius=se.radius,ee.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),n.sunShadow[p]=ee,n.sunShadowMap[p]=he;let Pe=se.getViewportCount();for(let De=0;De<Pe;De++)n.sunShadowMatrix[y+De]=se.getMatrix(De),n.sunShadowCascade[y+De]=se._cascadeData[De];y+=Pe,p++}n.sun[f]=$,f++}else if(L.isDirectionalLight){let $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let se=L.shadow,ee=t.get(L);ee.shadowIntensity=se.intensity,ee.shadowBias=se.bias,ee.shadowNormalBias=se.normalBias,ee.shadowRadius=se.radius,ee.shadowMapSize=se.mapSize,n.directionalShadow[_]=ee,n.directionalShadowMap[_]=he,n.directionalShadowMatrix[_]=L.shadow.matrix,A++}n.directional[_]=$,_++}else if(L.isSpotLight){let $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(H).multiplyScalar(Z),$.distance=X,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[v]=$;let se=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,se.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[v]=se.matrix,L.castShadow){let ee=t.get(L);ee.shadowIntensity=se.intensity,ee.shadowBias=se.bias,ee.shadowNormalBias=se.normalBias,ee.shadowRadius=se.radius,ee.shadowMapSize=se.mapSize,n.spotShadow[v]=ee,n.spotShadowMap[v]=he,x++}v++}else if(L.isRectAreaLight){let $=e.get(L);$.color.copy(H).multiplyScalar(Z),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=$,T++}else if(L.isPointLight){let $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){let se=L.shadow,ee=t.get(L);ee.shadowIntensity=se.intensity,ee.shadowBias=se.bias,ee.shadowNormalBias=se.normalBias,ee.shadowRadius=se.radius,ee.shadowMapSize=se.mapSize,ee.shadowCameraNear=se.camera.near,ee.shadowCameraFar=se.camera.far,n.pointShadow[m]=ee,n.pointShadowMap[m]=he,n.pointShadowMatrix[m]=L.shadow.matrix,w++}n.point[m]=$,m++}else if(L.isHemisphereLight){let $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(Z),$.groundColor.copy(L.groundColor).multiplyScalar(Z),n.hemi[S]=$,S++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==_||D.pointLength!==m||D.spotLength!==v||D.rectAreaLength!==T||D.hemiLength!==S||D.numSunShadows!==p||D.numDirectionalShadows!==A||D.numPointShadows!==w||D.numSpotShadows!==x||D.numSpotMaps!==M||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=_,n.spot.length=v,n.rectArea.length=T,n.point.length=m,n.hemi.length=S,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-R,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,D.sunLength=f,D.directionalLength=_,D.pointLength=m,D.spotLength=v,D.rectAreaLength=T,D.hemiLength=S,D.numSunShadows=p,D.numDirectionalShadows=A,D.numPointShadows=w,D.numSpotShadows=x,D.numSpotMaps=M,D.numLightProbes=C,n.version=aM++)}function l(c,u){let h=0,d=0,f=0,p=0,y=0,_=0,m=u.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let S=c[v];if(S.isSunLight){let A=n.sun[h];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),h++}else if(S.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(S.isSpotLight){let A=n.spot[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let A=n.rectArea[y];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let A=n.hemi[_];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function em(i){let e=new cM(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):t.push(h)}function a(h){n.push(h)}function l(){e.setup(t),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function uM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new em(i),e.set(s,[a])):r>=o.length?(a=new em(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function mM(i,e,t){let n=new cs,s=new oe,r=new oe,o=new Et,a=new hl,l=new dl,c={},u=t.maxTextureSize,h={[ti]:mn,[mn]:ti,[Dn]:Dn},d=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:hM,fragmentShader:dM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ut;p.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new st(p,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xo;let m=this.type;this.render=function(w,x,M){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===Xf&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xo);let R=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Vs),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=m!==this.type;B&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=w.length;L<H;L++){let Z=w[L],X=Z.shadow;if(X===void 0){He("WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let he=X.getFrameExtents();s.multiply(he),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/he.x),s.x=r.x*he.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/he.y),s.y=r.y*he.y,X.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=$,X.map===null||B===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Dr){if(Z.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Bn(s.x,s.y,{format:hs,type:pi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),X.map.texture.name=Z.name+".shadowMap",X.map.depthTexture=new Bi(s.x,s.y,Hn),X.map.depthTexture.name=Z.name+".shadowMapDepth",X.map.depthTexture.format=Oi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Qt,X.map.depthTexture.magFilter=Qt}else Z.isPointLight?(X.map=new na(s.x),X.map.depthTexture=new To(s.x,fi)):(X.map=new Bn(s.x,s.y),X.map.depthTexture=new Bi(s.x,s.y,fi)),X.map.depthTexture.name=Z.name+".shadowMap",X.map.depthTexture.format=Oi,this.type===Xo?(X.map.depthTexture.compareFunction=$?oh:rh,X.map.depthTexture.minFilter=rn,X.map.depthTexture.magFilter=rn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Qt,X.map.depthTexture.magFilter=Qt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let se=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Z.isPointLight!==!0&&X.updateMatrices(Z,M);let ee=X.camera.layers.mask&4294967294?X.camera.layers:M.layers;for(let Pe=0;Pe<se;Pe++){let De=X.getCamera(Pe);if(Z.isPointLight){let J=X.camera,ve=X.matrix,Le=Z.distance||J.far;Le!==J.far&&(J.far=Le,J.updateProjectionMatrix()),ea.setFromMatrixPosition(Z.matrixWorld),J.position.copy(ea),wh.copy(J.position),wh.add(fM[Pe]),J.up.copy(pM[Pe]),J.lookAt(wh),J.updateMatrixWorld(),ve.makeTranslation(-ea.x,-ea.y,-ea.z),tm.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),X._frustum.setFromProjectionMatrix(tm,J.coordinateSystem,J.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Pe),i.clear();else{Pe===0&&(i.setRenderTarget(X.map),i.clear());let J=X.getViewport(Pe);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),F.viewport(o)}n=X.getFrustum(Pe),S(x,M,De,Z,ee,this.type)}X.isPointLightShadow!==!0&&this.type===Dr&&v(X,M),X.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(R,C,D)};function v(w,x){let M=e.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Bn(s.x,s.y,{format:hs,type:pi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(x,null,M,d,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(x,null,M,f,y,null)}function T(w,x,M,R){let C=null,D=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)C=D;else if(C=M.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=C.uuid,B=x.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let H=L[B];H===void 0&&(H=C.clone(),L[B]=H,x.addEventListener("dispose",A)),C=H}if(C.visible=x.visible,C.wireframe=x.wireframe,R===Dr?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:h[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=M}return C}function S(w,x,M,R,C,D){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Dr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let L=e.update(w),H=w.material;if(Array.isArray(H)){let Z=L.groups;for(let X=0,he=Z.length;X<he;X++){let $=Z[X],se=H[$.materialIndex];if(se&&se.visible){let ee=T(w,se,R,D);w.onBeforeShadow(i,w,x,M,L,ee,$),i.renderBufferDirect(M,null,L,ee,w,$),w.onAfterShadow(i,w,x,M,L,ee,$)}}}else if(H.visible){let Z=T(w,H,R,D);w.onBeforeShadow(i,w,x,M,L,Z,null),i.renderBufferDirect(M,null,L,Z,w,null),w.onAfterShadow(i,w,x,M,L,Z,null)}}let B=w.children;for(let L=0,H=B.length;L<H;L++)S(B[L],x,M,R,C,D)}function A(w){w.target.removeEventListener("dispose",A);for(let M in c){let R=c[M],C=w.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function gM(i,e){function t(){let N=!1,ne=new Et,j=null,Se=new Et(0,0,0,0);return{setMask:function(ge){j!==ge&&!N&&(i.colorMask(ge,ge,ge,ge),j=ge)},setLocked:function(ge){N=ge},setClear:function(ge,ye,Ge,ct,me){me===!0&&(ge*=ct,ye*=ct,Ge*=ct),ne.set(ge,ye,Ge,ct),Se.equals(ne)===!1&&(i.clearColor(ge,ye,Ge,ct),Se.copy(ne))},reset:function(){N=!1,j=null,Se.set(-1,0,0,0)}}}function n(){let N=!1,ne=!1,j=null,Se=null,ge=null;return{setReversed:function(ye){if(ne!==ye){let Ge=e.get("EXT_clip_control");ye?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),ne=ye;let ct=ge;ge=null,this.setClear(ct)}},getReversed:function(){return ne},setTest:function(ye){ye?V(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(ye){j!==ye&&!N&&(i.depthMask(ye),j=ye)},setFunc:function(ye){if(ne&&(ye=Ap[ye]),Se!==ye){switch(ye){case Xa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=ye}},setLocked:function(ye){N=ye},setClear:function(ye){ge!==ye&&(ge=ye,ne&&(ye=1-ye),i.clearDepth(ye))},reset:function(){N=!1,j=null,Se=null,ge=null,ne=!1}}}function s(){let N=!1,ne=null,j=null,Se=null,ge=null,ye=null,Ge=null,ct=null,me=null;return{setTest:function(Xe){N||(Xe?V(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(Xe){ne!==Xe&&!N&&(i.stencilMask(Xe),ne=Xe)},setFunc:function(Xe,at,Re){(j!==Xe||Se!==at||ge!==Re)&&(i.stencilFunc(Xe,at,Re),j=Xe,Se=at,ge=Re)},setOp:function(Xe,at,Re){(ye!==Xe||Ge!==at||ct!==Re)&&(i.stencilOp(Xe,at,Re),ye=Xe,Ge=at,ct=Re)},setLocked:function(Xe){N=Xe},setClear:function(Xe){me!==Xe&&(i.clearStencil(Xe),me=Xe)},reset:function(){N=!1,ne=null,j=null,Se=null,ge=null,ye=null,Ge=null,ct=null,me=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],y=null,_=!1,m=null,v=null,T=null,S=null,A=null,w=null,x=null,M=new ke(0,0,0),R=0,C=!1,D=null,F=null,B=null,L=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,he=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec($)[1]),X=he>=1):$.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=he>=2);let se=null,ee={},Pe=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),J=new Et().fromArray(Pe),ve=new Et().fromArray(De);function Le(N,ne,j,Se){let ge=new Uint8Array(4),ye=i.createTexture();i.bindTexture(N,ye),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<j;Ge++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(ne+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ye}let ie={};ie[i.TEXTURE_2D]=Le(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=Le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=Le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=Le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(i.DEPTH_TEST),o.setFunc(gr),we(!1),fe(Bu),V(i.CULL_FACE),le(Vs);function V(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function ue(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function pt(N,ne){return d[N]!==ne?(i.bindFramebuffer(N,ne),d[N]=ne,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function pe(N,ne){let j=p,Se=!1;if(N){j=f.get(ne),j===void 0&&(j=[],f.set(ne,j));let ge=N.textures;if(j.length!==ge.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Ge=ge.length;ye<Ge;ye++)j[ye]=i.COLOR_ATTACHMENT0+ye;j.length=ge.length,Se=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,Se=!0);Se&&i.drawBuffers(j)}function Ie(N){return y!==N?(i.useProgram(N),y=N,!0):!1}let Ne={[Ws]:i.FUNC_ADD,[Yf]:i.FUNC_SUBTRACT,[Kf]:i.FUNC_REVERSE_SUBTRACT};Ne[$f]=i.MIN,Ne[Zf]=i.MAX;let z={[Jf]:i.ZERO,[jf]:i.ONE,[Qf]:i.SRC_COLOR,[Gu]:i.SRC_ALPHA,[rp]:i.SRC_ALPHA_SATURATE,[ip]:i.DST_COLOR,[tp]:i.DST_ALPHA,[ep]:i.ONE_MINUS_SRC_COLOR,[Vu]:i.ONE_MINUS_SRC_ALPHA,[sp]:i.ONE_MINUS_DST_COLOR,[np]:i.ONE_MINUS_DST_ALPHA,[op]:i.CONSTANT_COLOR,[ap]:i.ONE_MINUS_CONSTANT_COLOR,[lp]:i.CONSTANT_ALPHA,[cp]:i.ONE_MINUS_CONSTANT_ALPHA};function le(N,ne,j,Se,ge,ye,Ge,ct,me,Xe){if(N===Vs){_===!0&&(ue(i.BLEND),_=!1);return}if(_===!1&&(V(i.BLEND),_=!0),N!==qf){if(N!==m||Xe!==C){if((v!==Ws||A!==Ws)&&(i.blendEquation(i.FUNC_ADD),v=Ws,A=Ws),Xe)switch(N){case Ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ku:i.blendFunc(i.ONE,i.ONE);break;case zu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",N);break}else switch(N){case Ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ku:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zu:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hu:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",N);break}T=null,S=null,w=null,x=null,M.set(0,0,0),R=0,m=N,C=Xe}return}ge=ge||ne,ye=ye||j,Ge=Ge||Se,(ne!==v||ge!==A)&&(i.blendEquationSeparate(Ne[ne],Ne[ge]),v=ne,A=ge),(j!==T||Se!==S||ye!==w||Ge!==x)&&(i.blendFuncSeparate(z[j],z[Se],z[ye],z[Ge]),T=j,S=Se,w=ye,x=Ge),(ct.equals(M)===!1||me!==R)&&(i.blendColor(ct.r,ct.g,ct.b,me),M.copy(ct),R=me),m=N,C=!1}function ce(N,ne){N.side===Dn?ue(i.CULL_FACE):V(i.CULL_FACE);let j=N.side===mn;ne&&(j=!j),we(j),N.blending===Ur&&N.transparent===!1?le(Vs):le(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Se=N.stencilWrite;a.setTest(Se),Se&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(N){D!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),D=N)}function fe(N){N!==Vf?(V(i.CULL_FACE),N!==F&&(N===Bu?i.cullFace(i.BACK):N===Wf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),F=N}function je(N){N!==B&&(X&&i.lineWidth(N),B=N)}function Ue(N,ne,j){N?(V(i.POLYGON_OFFSET_FILL),(L!==ne||H!==j)&&(L=ne,H=j,o.getReversed()&&(ne=-ne,j=-j),i.polygonOffset(ne,j))):ue(i.POLYGON_OFFSET_FILL)}function qe(N){N?V(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function We(N){N===void 0&&(N=i.TEXTURE0+Z-1),se!==N&&(i.activeTexture(N),se=N)}function Ze(N,ne,j){j===void 0&&(se===null?j=i.TEXTURE0+Z-1:j=se);let Se=ee[j];Se===void 0&&(Se={type:void 0,texture:void 0},ee[j]=Se),(Se.type!==N||Se.texture!==ne)&&(se!==j&&(i.activeTexture(j),se=j),i.bindTexture(N,ne||ie[N]),Se.type=N,Se.texture=ne)}function U(){let N=ee[se];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Lt(){try{i.compressedTexImage2D(...arguments)}catch(N){Je("WebGLState:",N)}}function it(){try{i.compressedTexImage3D(...arguments)}catch(N){Je("WebGLState:",N)}}function Mt(){try{i.texSubImage2D(...arguments)}catch(N){Je("WebGLState:",N)}}function _e(){try{i.texSubImage3D(...arguments)}catch(N){Je("WebGLState:",N)}}function Nt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Je("WebGLState:",N)}}function Ve(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Je("WebGLState:",N)}}function Qe(){try{i.texStorage2D(...arguments)}catch(N){Je("WebGLState:",N)}}function I(){try{i.texStorage3D(...arguments)}catch(N){Je("WebGLState:",N)}}function b(){try{i.texImage2D(...arguments)}catch(N){Je("WebGLState:",N)}}function G(){try{i.texImage3D(...arguments)}catch(N){Je("WebGLState:",N)}}function de(N){return h[N]!==void 0?h[N]:i.getParameter(N)}function re(N,ne){h[N]!==ne&&(i.pixelStorei(N,ne),h[N]=ne)}function xe(N){J.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),J.copy(N))}function Te(N){ve.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ve.copy(N))}function Q(N,ne){let j=c.get(ne);j===void 0&&(j=new WeakMap,c.set(ne,j));let Se=j.get(N);Se===void 0&&(Se=i.getUniformBlockIndex(ne,N.name),i.uniformBlockBinding(ne,Se,Se),j.set(N,Se))}function te(N,ne,j){let ge=c.get(ne).get(N);l[ge]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,ge,j),l[ge]=j)}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},se=null,ee={},d={},l={},f=new WeakMap,p=[],y=null,_=!1,m=null,v=null,T=null,S=null,A=null,w=null,x=null,M=new ke(0,0,0),R=0,C=!1,D=null,F=null,B=null,L=null,H=null,J.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:ue,bindFramebuffer:pt,drawBuffers:pe,useProgram:Ie,setBlending:le,setMaterial:ce,setFlipSided:we,setCullFace:fe,setLineWidth:je,setPolygonOffset:Ue,setScissorTest:qe,activeTexture:We,bindTexture:Ze,unbindTexture:U,compressedTexImage2D:Lt,compressedTexImage3D:it,texImage2D:b,texImage3D:G,pixelStorei:re,getParameter:de,updateUBOMapping:Q,uniformBlockBinding:te,texStorage2D:Qe,texStorage3D:I,texSubImage2D:Mt,texSubImage3D:_e,compressedTexSubImage2D:Nt,compressedTexSubImage3D:Ve,scissor:xe,viewport:Te,reset:Me}}function _M(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap,h=new Set,d,f=new WeakMap,p=new Set,y=new FinalizationRegistry(I=>p.delete(I)),_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,b){return _?new OffscreenCanvas(I,b):yr("canvas")}function v(I,b,G){let de=1,re=Qe(I);if((re.width>G||re.height>G)&&(de=G/Math.max(re.width,re.height)),de<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let xe=Math.floor(de*re.width),Te=Math.floor(de*re.height);d===void 0&&(d=m(xe,Te));let Q=b?m(xe,Te):d;return Q.width=xe,Q.height=Te,Q.getContext("2d").drawImage(I,0,0,xe,Te),He("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+xe+"x"+Te+")."),Q}else return"data"in I&&He("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),I;return I}function T(I){return I.generateMipmaps}function S(I){i.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(I,b,G,de,re,xe=!1){if(I!==null){if(i[I]!==void 0)return i[I];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Te;de&&(Te=e.get("EXT_texture_norm16"),Te||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=b;if(b===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8),G===i.UNSIGNED_SHORT&&Te&&(Q=Te.R16_EXT),G===i.SHORT&&Te&&(Q=Te.R16_SNORM_EXT)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),b===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8),G===i.UNSIGNED_SHORT&&Te&&(Q=Te.RG16_EXT),G===i.SHORT&&Te&&(Q=Te.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&(G===i.UNSIGNED_SHORT&&Te&&(Q=Te.RGB16_EXT),G===i.SHORT&&Te&&(Q=Te.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),b===i.RGBA){let te=xe?uo:lt.getTransfer(re);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=te===St?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&Te&&(Q=Te.RGBA16_EXT),G===i.SHORT&&Te&&(Q=Te.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(I,b){let G;return I?b===null||b===fi||b===Ys?G=i.DEPTH24_STENCIL8:b===Hn?G=i.DEPTH32F_STENCIL8:b===Br&&(G=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===fi||b===Ys?G=i.DEPTH_COMPONENT24:b===Hn?G=i.DEPTH_COMPONENT32F:b===Br&&(G=i.DEPTH_COMPONENT16),G}function M(I,b){return T(I)===!0||I.isFramebufferTexture&&I.minFilter!==Qt&&I.minFilter!==rn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function R(I){let b=new WeakRef(I);n.get(I).__ref=b,p.add(b),y.register(I,b,b)}function C(I){let b=n.get(I).__ref;b!==void 0&&(p.delete(b),y.unregister(b))}function D(I){B(I.target)}function F(I){L(I.target)}function B(I){I.removeEventListener("dispose",D),C(I),Z(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&h.delete(I)}function L(I){I.removeEventListener("dispose",F),C(I),he(I)}function H(){for(let I of p){let b=I.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):B(b))}p.clear(),h.clear()}function Z(I){let b=n.get(I);if(b.__webglInit===void 0)return;let G=I.source,de=f.get(G);if(de){let re=de[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&X(I),Object.keys(de).length===0&&f.delete(G)}n.remove(I)}function X(I){let b=n.get(I);i.deleteTexture(b.__webglTexture);let G=I.source,de=f.get(G);delete de[b.__cacheKey],o.memory.textures--}function he(I){let b=n.get(I);b.__depthDisposeCallback&&b.__depthDisposeCallback();let G=I.depthTexture;if(G&&G.renderTarget===I&&B(G),I.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(b.__webglFramebuffer[re]))for(let xe=0;xe<b.__webglFramebuffer[re].length;xe++)i.deleteFramebuffer(b.__webglFramebuffer[re][xe]);else i.deleteFramebuffer(b.__webglFramebuffer[re]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[re])}else{if(Array.isArray(b.__webglFramebuffer))for(let re=0;re<b.__webglFramebuffer.length;re++)i.deleteFramebuffer(b.__webglFramebuffer[re]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let re=0;re<b.__webglColorRenderbuffer.length;re++)b.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[re]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let de=I.textures;for(let re=0,xe=de.length;re<xe;re++){let Te=n.get(de[re]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),o.memory.textures--),n.remove(de[re])}n.remove(I)}let $=0;function se(){$=0}function ee(){return $}function Pe(I){$=I}function De(){let I=$;return I>=s.maxTextures&&He("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,I}function J(I){let b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.mipmapsAutoUpdate),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function ve(I,b){let G=n.get(I);if(I.isVideoTexture&&Nt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let de=I.image;if(de===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(G,I,b);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function Le(I,b){let G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){ce(G,I,b);return}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function ie(I,b){let G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){ce(G,I,b);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function V(I,b){let G=n.get(I);if(I.version>0&&G.__version!==I.version){we(G,I,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}let ue={[os]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[_r]:i.MIRRORED_REPEAT},pt={[Qt]:i.NEAREST,[Al]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Fr]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},pe={[yp]:i.NEVER,[ah]:i.ALWAYS,[vp]:i.LESS,[rh]:i.LEQUAL,[Mp]:i.EQUAL,[oh]:i.GEQUAL,[Sp]:i.GREATER,[bp]:i.NOTEQUAL};function Ie(I,b){if(b.type===Hn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===rn||b.magFilter===Fr||b.magFilter===qs||b.magFilter===ni||b.minFilter===rn||b.minFilter===Fr||b.minFilter===qs||b.minFilter===ni)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ue[b.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ue[b.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ue[b.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,pt[b.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,pt[b.minFilter]),b.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qt||b.minFilter!==qs&&b.minFilter!==ni||b.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ne(I,b){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",D),R(b));let de=b.source,re=f.get(de);re===void 0&&(re={},f.set(de,re));let xe=J(b);if(xe!==I.__cacheKey){re[xe]===void 0&&(re[xe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),re[xe].usedTimes++;let Te=re[I.__cacheKey];Te!==void 0&&(re[I.__cacheKey].usedTimes--,Te.usedTimes===0&&X(b)),I.__cacheKey=xe,I.__webglTexture=re[xe].texture}return G}function z(I,b,G){return Math.floor(Math.floor(I/G)/b)}function le(I,b,G,de){let xe=I.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,G,de,b.data);else{xe.sort((N,ne)=>N.start-ne.start);let Te=0;for(let N=1;N<xe.length;N++){let ne=xe[Te],j=xe[N],Se=ne.start+ne.count,ge=z(j.start,b.width,4),ye=z(ne.start,b.width,4);j.start<=Se+1&&ge===ye&&z(j.start+j.count-1,b.width,4)===ge?ne.count=Math.max(ne.count,j.start+j.count-ne.start):(++Te,xe[Te]=j)}xe.length=Te+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),Me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let N=0,ne=xe.length;N<ne;N++){let j=xe[N],Se=Math.floor(j.start/4),ge=Math.ceil(j.count/4),ye=Se%b.width,Ge=Math.floor(Se/b.width),ct=ge,me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(i.TEXTURE_2D,0,ye,Ge,ct,me,G,de,b.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function ce(I,b,G){let de=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(de=i.TEXTURE_3D);let re=Ne(I,b),xe=b.source;t.bindTexture(de,I.__webglTexture,i.TEXTURE0+G);let Te=n.get(xe);if(xe.version!==Te.__version||re===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let me=lt.getPrimaries(lt.workingColorSpace),Xe=b.colorSpace===qi?null:lt.getPrimaries(b.colorSpace),at=b.colorSpace===qi||me===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let te=v(b.image,!1,s.maxTextureSize);te=Ve(b,te);let Me=r.convert(b.format,b.colorSpace),N=r.convert(b.type),ne=w(b.internalFormat,Me,N,b.normalized,b.colorSpace,b.isVideoTexture);Ie(de,b);let j,Se=b.mipmaps,ge=b.isVideoTexture!==!0,ye=Te.__version===void 0||re===!0,Ge=xe.dataReady,ct=M(b,te);if(b.isDepthTexture)ne=x(b.format===Xi,b.type),ye&&(ge?t.texStorage2D(i.TEXTURE_2D,1,ne,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,Me,N,null));else if(b.isDataTexture)if(Se.length>0){ge&&ye&&t.texStorage2D(i.TEXTURE_2D,ct,ne,Se[0].width,Se[0].height);for(let me=0,Xe=Se.length;me<Xe;me++)j=Se[me],ge?Ge&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,j.width,j.height,Me,N,j.data):t.texImage2D(i.TEXTURE_2D,me,ne,j.width,j.height,0,Me,N,j.data);b.generateMipmaps=!1}else ge?(ye&&t.texStorage2D(i.TEXTURE_2D,ct,ne,te.width,te.height),Ge&&le(b,te,Me,N)):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,Me,N,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ge&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ne,Se[0].width,Se[0].height,te.depth);for(let me=0,Xe=Se.length;me<Xe;me++)if(j=Se[me],b.format!==ii)if(Me!==null)if(ge){if(Ge)if(b.layerUpdates.size>0){let at=xh(j.width,j.height,b.format,b.type);for(let Re of b.layerUpdates){let Tt=j.data.subarray(Re*at/j.data.BYTES_PER_ELEMENT,(Re+1)*at/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Re,j.width,j.height,1,Me,Tt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,j.width,j.height,te.depth,Me,j.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,ne,j.width,j.height,te.depth,0,j.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,j.width,j.height,te.depth,Me,N,j.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,ne,j.width,j.height,te.depth,0,Me,N,j.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ge&&ye&&t.texStorage2D(i.TEXTURE_2D,ct,ne,Se[0].width,Se[0].height);for(let me=0,Xe=Se.length;me<Xe;me++)j=Se[me],b.format!==ii?Me!==null?ge?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,j.width,j.height,Me,j.data):t.compressedTexImage2D(i.TEXTURE_2D,me,ne,j.width,j.height,0,j.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?Ge&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,j.width,j.height,Me,N,j.data):t.texImage2D(i.TEXTURE_2D,me,ne,j.width,j.height,0,Me,N,j.data)}else if(b.isDataArrayTexture)if(ge){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ne,te.width,te.height,te.depth),Ge)if(b.layerUpdates.size>0){let me=xh(te.width,te.height,b.format,b.type);for(let Xe of b.layerUpdates){let at=te.data.subarray(Xe*me/te.data.BYTES_PER_ELEMENT,(Xe+1)*me/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Xe,te.width,te.height,1,Me,N,at)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Me,N,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,te.width,te.height,te.depth,0,Me,N,te.data);else if(b.isData3DTexture)ge?(ye&&t.texStorage3D(i.TEXTURE_3D,ct,ne,te.width,te.height,te.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Me,N,te.data)):t.texImage3D(i.TEXTURE_3D,0,ne,te.width,te.height,te.depth,0,Me,N,te.data);else if(b.isFramebufferTexture){if(ye)if(ge)t.texStorage2D(i.TEXTURE_2D,ct,ne,te.width,te.height);else{let me=te.width,Xe=te.height;for(let at=0;at<ct;at++)t.texImage2D(i.TEXTURE_2D,at,ne,me,Xe,0,Me,N,null),me>>=1,Xe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let me=i.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),te.parentNode!==me){me.appendChild(te),h.add(b),me.onpaint=Xe=>{let at=Xe.changedElements;for(let Re of h)at.includes(Re.image)&&(Re.needsUpdate=!0)},me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let at=i.RGBA,Re=i.RGBA,Tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,at,Re,Tt,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Se.length>0){if(ge&&ye){let me=Qe(Se[0]);t.texStorage2D(i.TEXTURE_2D,ct,ne,me.width,me.height)}for(let me=0,Xe=Se.length;me<Xe;me++)j=Se[me],ge?Ge&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Me,N,j):t.texImage2D(i.TEXTURE_2D,me,ne,Me,N,j);b.generateMipmaps=!1}else if(ge){if(ye){let me=Qe(te);t.texStorage2D(i.TEXTURE_2D,ct,ne,me.width,me.height)}Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,N,te)}else t.texImage2D(i.TEXTURE_2D,0,ne,Me,N,te);T(b)&&b.mipmapsAutoUpdate===!0&&S(de),Te.__version=xe.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function we(I,b,G){if(b.image.length!==6)return;let de=Ne(I,b),re=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);let xe=n.get(re);if(re.version!==xe.__version||de===!0){t.activeTexture(i.TEXTURE0+G);let Te=lt.getPrimaries(lt.workingColorSpace),Q=b.colorSpace===qi?null:lt.getPrimaries(b.colorSpace),te=b.colorSpace===qi||Te===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Me=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,ne=[];for(let Re=0;Re<6;Re++)!Me&&!N?ne[Re]=v(b.image[Re],!0,s.maxCubemapSize):ne[Re]=N?b.image[Re].image:b.image[Re],ne[Re]=Ve(b,ne[Re]);let j=ne[0],Se=r.convert(b.format,b.colorSpace),ge=r.convert(b.type),ye=w(b.internalFormat,Se,ge,b.normalized,b.colorSpace),Ge=b.isVideoTexture!==!0,ct=xe.__version===void 0||de===!0,me=re.dataReady,Xe=M(b,j);Ie(i.TEXTURE_CUBE_MAP,b);let at;if(b.isDepthTexture){if(ye=x(b.format===Xi,b.type),ct)if(Ge)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ye,j.width,j.height);else for(let Re=0;Re<6;Re++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ye,j.width,j.height,0,Se,ge,null)}else if(Me){Ge&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,ye,j.width,j.height);for(let Re=0;Re<6;Re++){at=ne[Re].mipmaps;for(let Tt=0;Tt<at.length;Tt++){let cn=at[Tt];b.format!==ii?Se!==null?Ge?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Tt,0,0,cn.width,cn.height,Se,cn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Tt,ye,cn.width,cn.height,0,cn.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Tt,0,0,cn.width,cn.height,Se,ge,cn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Tt,ye,cn.width,cn.height,0,Se,ge,cn.data)}}}else{if(at=b.mipmaps,Ge&&ct){at.length>0&&Xe++;let Re=Qe(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,ye,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(N){Ge?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ne[Re].width,ne[Re].height,Se,ge,ne[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ye,ne[Re].width,ne[Re].height,0,Se,ge,ne[Re].data);for(let Tt=0;Tt<at.length;Tt++){let Zi=at[Tt].image[Re].image;Ge?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Tt+1,0,0,Zi.width,Zi.height,Se,ge,Zi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Tt+1,ye,Zi.width,Zi.height,0,Se,ge,Zi.data)}}else{Ge?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Se,ge,ne[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ye,Se,ge,ne[Re]);for(let Tt=0;Tt<at.length;Tt++){let cn=at[Tt];Ge?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Tt+1,0,0,Se,ge,cn.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Tt+1,ye,Se,ge,cn.image[Re])}}}T(b)&&b.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),xe.__version=re.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function fe(I,b,G,de,re,xe){let Te=r.convert(G.format,G.colorSpace),Q=r.convert(G.type),te=w(G.internalFormat,Te,Q,G.normalized,G.colorSpace),Me=n.get(b),N=n.get(G);if(N.__renderTarget=b,!Me.__hasExternalTextures){let ne=Math.max(1,b.width>>xe),j=Math.max(1,b.height>>xe);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,xe,te,ne,j,b.depth,0,Te,Q,null):t.texImage2D(re,xe,te,ne,j,0,Te,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),_e(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,re,N.__webglTexture,0,Mt(b)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,re,N.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(I,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),b.depthBuffer){let de=b.depthTexture,re=de&&de.isDepthTexture?de.type:null,xe=x(b.stencilBuffer,re),Te=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_e(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(b),xe,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(b),xe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,I)}else{let de=b.textures;for(let re=0;re<de.length;re++){let xe=de[re],Te=r.convert(xe.format,xe.colorSpace),Q=r.convert(xe.type),te=w(xe.internalFormat,Te,Q,xe.normalized,xe.colorSpace);_e(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(b),te,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(b),te,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,te,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(I,b,G){let de=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(b.depthTexture);re.__renderTarget=b;let xe=de?b.depthTexture.image[0]:b.depthTexture.image;(!re.__webglTexture||xe.width!==b.width||xe.height!==b.height)&&(xe.width=b.width,xe.height=b.height,b.depthTexture.needsUpdate=!0),de?V(b.depthTexture,0):ve(b.depthTexture,0);let Te=re.__webglTexture,Q=Mt(b),te=de?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,Me=b.depthTexture.format===Xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Oi)_e(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,te,Te,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,Me,te,Te,0);else if(b.depthTexture.format===Xi)_e(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,te,Te,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,Me,te,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qe(I){let b=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){let de=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),de){let re=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,de.removeEventListener("dispose",re)};de.addEventListener("dispose",re),b.__depthDisposeCallback=re}b.__boundDepthTexture=de}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let de=0;de<6;de++)Ue(b.__webglFramebuffer[de],I,de);else I.texture.mipmaps.length>0?Ue(b.__webglFramebuffer[0],I,0):Ue(b.__webglFramebuffer,I,0);else if(G){b.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[de]),b.__webglDepthbuffer[de]===void 0)b.__webglDepthbuffer[de]=i.createRenderbuffer(),je(b.__webglDepthbuffer[de],I,!1);else{let re=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer[de];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,xe)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),je(b.__webglDepthbuffer,I,!1);else{let re=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(I,b,G){let de=n.get(I);b!==void 0&&fe(de.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&qe(I)}function Ze(I){let b=I.texture,G=n.get(I),de=n.get(b);I.addEventListener("dispose",F),R(I);let re=I.textures,xe=I.isWebGLCubeRenderTarget===!0,Te=re.length>1;if(Te||(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=b.version,o.memory.textures++),xe){G.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(b.mipmaps.length>0){G.__webglFramebuffer[Q]=[];for(let te=0;te<b.mipmaps.length;te++)G.__webglFramebuffer[Q][te]=i.createFramebuffer()}else G.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(b.mipmaps.length>0){G.__webglFramebuffer=[];for(let Q=0;Q<b.mipmaps.length;Q++)G.__webglFramebuffer[Q]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Te)for(let Q=0,te=re.length;Q<te;Q++){let Me=n.get(re[Q]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&_e(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<re.length;Q++){let te=re[Q];G.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);let Me=r.convert(te.format,te.colorSpace),N=r.convert(te.type),ne=w(te.internalFormat,Me,N,te.normalized,te.colorSpace,I.isXRRenderTarget===!0),j=Mt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,ne,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),je(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,b);for(let Q=0;Q<6;Q++)if(b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)fe(G.__webglFramebuffer[Q][te],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,te);else fe(G.__webglFramebuffer[Q],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);T(b)?S(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let Q=0,te=re.length;Q<te;Q++){let Me=re[Q],N=n.get(Me),ne=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ne=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,N.__webglTexture),Ie(ne,Me),fe(G.__webglFramebuffer,I,Me,i.COLOR_ATTACHMENT0+Q,ne,0),T(Me)&&S(ne)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,de.__webglTexture),Ie(Q,b),b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)fe(G.__webglFramebuffer[te],I,b,i.COLOR_ATTACHMENT0,Q,te);else fe(G.__webglFramebuffer,I,b,i.COLOR_ATTACHMENT0,Q,0);T(b)?S(Q):b.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&qe(I)}function U(I){let b=I.textures;for(let G=0,de=b.length;G<de;G++){let re=b[G];if(T(re)&&re.mipmapsAutoUpdate===!0){let xe=A(I),Te=n.get(re).__webglTexture;t.bindTexture(xe,Te),S(xe),t.unbindTexture()}}}let Lt=[];function it(I){if(I.samples>0){if(_e(I)===!1){let b=I.textures,G=I.width,de=I.height,re=i.COLOR_BUFFER_BIT,xe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(I),Q=b.length>1;if(Q)for(let Me=0;Me<b.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);let N=n.get(b[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,G,de,0,0,G,de,re,i.NEAREST),l===!0&&(Lt.length=0,Lt.push(i.COLOR_ATTACHMENT0+Me),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Lt.push(xe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let Me=0;Me<b.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);let N=n.get(b[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let b=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Mt(I){return Math.min(s.maxSamples,I.samples)}function _e(I){let b=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Nt(I){let b=o.render.frame;u.get(I)!==b&&(u.set(I,b),I.update())}function Ve(I,b){let G=I.colorSpace,de=I.format,re=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==pn&&G!==qi&&(lt.getTransfer(G)===St?(de!==ii||re!==Un)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",G)),b}function Qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=De,this.resetTextureUnits=se,this.getTextureUnits=ee,this.setTextureUnits=Pe,this.setTexture2D=ve,this.setTexture2DArray=Le,this.setTexture3D=ie,this.setTextureCube=V,this.rebindTextures=We,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_e,this.dispose=H}function xM(i,e){function t(n,s=qi){let r,o=lt.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===Cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ju)return i.BYTE;if(n===Qu)return i.SHORT;if(n===Br)return i.UNSIGNED_SHORT;if(n===Rl)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===nh)return i.ALPHA;if(n===ih)return i.RGB;if(n===ii)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===Pl)return i.RED;if(n===Ll)return i.RED_INTEGER;if(n===hs)return i.RG;if(n===Nl)return i.RG_INTEGER;if(n===Dl)return i.RGBA_INTEGER;if(n===qo||n===Yo||n===Ko||n===$o)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ul||n===Ol||n===Fl||n===Bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===zl||n===Hl||n===Gl||n===Vl||n===Zo||n===Wl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kl||n===zl)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gl)return r.COMPRESSED_R11_EAC;if(n===Vl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zo)return r.COMPRESSED_RG11_EAC;if(n===Wl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xl||n===ql||n===Yl||n===Kl||n===$l||n===Zl||n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rc||n===oc||n===ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===rc)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lc||n===cc||n===Jo||n===uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===lc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function SM(i,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,mh(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,v,T,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(_,m):m.isMeshLambertMaterial?(r(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(_,m),h(_,m)):m.isMeshPhongMaterial?(r(_,m),u(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(_,m),d(_,m),m.isMeshPhysicalMaterial&&f(_,m,S)):m.isMeshMatcapMaterial?(r(_,m),p(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),y(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,v,T):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===mn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===mn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let v=e.get(m),T=v.envMap,S=v.envMapRotation;T&&(_.envMap.value=T,_.envMapRotation.value.setFromMatrix4(MM.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(dm),_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,v,T){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*v,_.scale.value=T*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function h(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function d(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function f(_,m,v){_.ior.value=m.ior,m.diffuseRoughness>0&&(_.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.retroreflectivity>0&&(_.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,m){m.matcap&&(_.matcap.value=m.matcap)}function y(_,m){let v=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bM(i,e,t,n){let s={},r={};function o(v,T){let S=T.program;n.uniformBlockBinding(v,S,s[v.id])}function a(v,T){let S=s[v.id];S===void 0&&(p(v),S=l(v),s[v.id]=S,v.addEventListener("dispose",_));let A=T.program;n.updateUBOMapping(v,A);let w=e.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let T=i.createBuffer(),S=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,S,A),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(v){let T=s[v.id],S=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,x=S.length;w<x;w++){let M=S[w];if(Array.isArray(M))for(let R=0,C=M.length;R<C;R++)u(M[R],w,R,A);else u(M,w,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,T,S,A){if(d(v,T,S,A)===!0){let w=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let R=0;R<x.length;R++){let C=x[R],D=y(C,!0);h(C,v.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,v.__data)}}function h(v,T,S){typeof v=="number"||typeof v=="boolean"?T[S]=v:v.isMatrix3?(T[S]=v.elements[0],T[S+1]=v.elements[1],T[S+2]=v.elements[2],T[S+3]=0,T[S+4]=v.elements[3],T[S+5]=v.elements[4],T[S+6]=v.elements[5],T[S+7]=0,T[S+8]=v.elements[6],T[S+9]=v.elements[7],T[S+10]=v.elements[8],T[S+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-S),S):v.toArray(T,S)}function d(v,T,S,A){let w=v.value,x=T+"_"+S;if(Array.isArray(w)){A[x]===void 0&&(A[x]=[]);let M=A[x],R=!1;for(let C=0;C<w.length;C++)f(w[C],M,C)===!0&&(R=!0);return R}return f(w,A,x)}function f(v,T,S){if(T[S]===void 0)return typeof v=="number"||typeof v=="boolean"?T[S]=v:ArrayBuffer.isView(v)?T[S]=v.slice():T[S]=v.clone(),!0;{let A=T[S];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return T[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function p(v){let T=v.uniforms,S=0,A=16;for(let x=0,M=T.length;x<M;x++){let R=Array.isArray(T[x])?T[x]:[T[x]];for(let C=0,D=R.length;C<D;C++){let F=R[C],B=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(T[x])||Array.isArray(F.value),H=S;for(let X=0,he=B.length;X<he;X++){let $=B[X],se=y($,L),ee=S%A,Pe=ee%se.boundary,De=ee+Pe;S+=Pe,De!==0&&A-De<se.storage&&(S+=A-De),X===0&&(H=S),S+=se.storage}let Z=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Z((S-H)/Float32Array.BYTES_PER_ELEMENT),F.__offset=H}}let w=S%A;return w>0&&(S+=A-w),v.__size=S,v.__cache={},this}function y(v,T){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):He("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function _(v){let T=v.target;T.removeEventListener("dispose",_),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:m}}function EM(){return bi===null&&(bi=new Tr(TM,16,16,hs,pi),bi.name="DFG_LUT",bi.minFilter=rn,bi.magFilter=rn,bi.wrapS=$n,bi.wrapT=$n,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var Gg,Vg,Wg,Xg,qg,Yg,Kg,$g,Zg,Jg,jg,Qg,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,u_,h_,d_,f_,p_,m_,g_,__,x_,y_,v_,M_,S_,b_,T_,E_,w_,A_,R_,C_,I_,P_,L_,N_,D_,U_,O_,F_,B_,k_,z_,H_,G_,V_,W_,X_,q_,Y_,K_,$_,Z_,J_,j_,Q_,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,ux,hx,dx,fx,px,mx,gx,_x,xx,yx,vx,Mx,Sx,bx,Tx,Ex,wx,Ax,Rx,Cx,Ix,Px,Lx,Nx,Dx,Ux,Ox,Fx,Bx,kx,zx,Hx,Gx,Vx,Wx,Xx,qx,Yx,Kx,$x,Zx,Jx,jx,Qx,ey,ty,ny,iy,sy,ry,oy,ay,ly,cy,uy,hy,dy,fy,py,my,gy,_y,xy,yy,vy,ut,Ae,Ti,mc,My,im,na,Up,Ay,Ry,sm,rm,Cy,Iy,Py,_c,Gy,om,am,lm,cm,um,hm,kp,zp,Hp,Gp,Vp,Ah,Rh,Ch,Eh,zr,Pv,Lv,qp,Ov,gc,Gv,Wv,qv,Kv,Zv,Qv,Ph,Lh,aM,hM,dM,fM,pM,tm,ea,wh,yM,vM,Nh,Dh,MM,dm,TM,bi,xc,$s=ji(()=>{Th();Th();Gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vg=`#ifdef USE_ALPHAHASH
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
#endif`,Wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kg=`#ifdef USE_AOMAP
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
#endif`,$g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zg=`#ifdef USE_BATCHING
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
#endif`,Jg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t_=`#ifdef USE_IRIDESCENCE
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
#endif`,n_=`#ifdef USE_BUMPMAP
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
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,h_=`#define PI 3.141592653589793
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
} // validated`,d_=`vec3 transformedNormal = objectNormal;
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
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,__="gl_FragColor = linearToOutputTexel( gl_FragColor );",x_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y_=`#ifdef USE_ENVMAP
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
#endif`,v_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
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
#endif`,T_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
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
}`,C_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,N_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
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
				#ifdef ENVMAP_TYPE_PMREM
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
#endif`,D_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
#endif`,k_=`uniform sampler2D dfgLUT;
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,z_=`
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,H_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
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
#endif`,G_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,W_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J_=`#if defined( USE_POINTS_UV )
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
#endif`,j_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tx=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
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
#endif`,sx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ux=`#ifdef USE_NORMALMAP
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
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wx=`float getShadowMask() {
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
}`,Ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rx=`#ifdef USE_SKINNING
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
#endif`,Cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ix=`#ifdef USE_SKINNING
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
#endif`,Px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ux=`#ifdef USE_TRANSMISSION
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
#endif`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gx=`uniform sampler2D t2D;
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`#include <common>
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
}`,Kx=`#if DEPTH_PACKING == 3200
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
}`,$x=`#define DISTANCE
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
}`,Zx=`#define DISTANCE
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`uniform float scale;
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#include <common>
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
}`,ny=`uniform vec3 diffuse;
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
}`,iy=`#define LAMBERT
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
}`,sy=`#define LAMBERT
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
}`,ry=`#define MATCAP
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
}`,oy=`#define MATCAP
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
}`,ay=`#define NORMAL
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
}`,ly=`#define NORMAL
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
}`,cy=`#define PHONG
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
}`,uy=`#define PHONG
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
}`,hy=`#define STANDARD
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
}`,dy=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
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
}`,fy=`#define TOON
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
}`,py=`#define TOON
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
}`,my=`uniform float size;
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
}`,gy=`uniform vec3 diffuse;
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
}`,_y=`#include <common>
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
}`,xy=`uniform vec3 color;
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
}`,yy=`uniform float rotation;
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
}`,vy=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:Gg,alphahash_pars_fragment:Vg,alphamap_fragment:Wg,alphamap_pars_fragment:Xg,alphatest_fragment:qg,alphatest_pars_fragment:Yg,aomap_fragment:Kg,aomap_pars_fragment:$g,batching_pars_vertex:Zg,batching_vertex:Jg,begin_vertex:jg,beginnormal_vertex:Qg,bsdfs:e_,iridescence_fragment:t_,bumpmap_pars_fragment:n_,clipping_planes_fragment:i_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:r_,clipping_planes_vertex:o_,color_fragment:a_,color_pars_fragment:l_,color_pars_vertex:c_,color_vertex:u_,common:h_,defaultnormal_vertex:d_,displacementmap_pars_vertex:f_,displacementmap_vertex:p_,emissivemap_fragment:m_,emissivemap_pars_fragment:g_,colorspace_fragment:__,colorspace_pars_fragment:x_,envmap_fragment:y_,envmap_common_pars_fragment:v_,envmap_pars_fragment:M_,envmap_pars_vertex:S_,envmap_physical_pars_fragment:N_,envmap_vertex:b_,fog_vertex:T_,fog_pars_vertex:E_,fog_fragment:w_,fog_pars_fragment:A_,gradientmap_pars_fragment:R_,lightmap_pars_fragment:C_,lights_lambert_fragment:I_,lights_lambert_pars_fragment:P_,lights_pars_begin:L_,lights_toon_fragment:D_,lights_toon_pars_fragment:U_,lights_phong_fragment:O_,lights_phong_pars_fragment:F_,lights_physical_fragment:B_,lights_physical_pars_fragment:k_,lights_fragment_begin:z_,lights_fragment_maps:H_,lights_fragment_end:G_,lightprobes_pars_fragment:V_,logdepthbuf_fragment:W_,logdepthbuf_pars_fragment:X_,logdepthbuf_pars_vertex:q_,logdepthbuf_vertex:Y_,map_fragment:K_,map_pars_fragment:$_,map_particle_fragment:Z_,map_particle_pars_fragment:J_,metalnessmap_fragment:j_,metalnessmap_pars_fragment:Q_,morphinstance_vertex:ex,morphcolor_vertex:tx,morphnormal_vertex:nx,morphtarget_pars_vertex:ix,morphtarget_vertex:sx,normal_fragment_begin:rx,normal_fragment_maps:ox,normal_pars_fragment:ax,normal_pars_vertex:lx,normal_vertex:cx,normalmap_pars_fragment:ux,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:dx,clearcoat_pars_fragment:fx,iridescence_pars_fragment:px,opaque_fragment:mx,packing:gx,premultiplied_alpha_fragment:_x,project_vertex:xx,dithering_fragment:yx,dithering_pars_fragment:vx,roughnessmap_fragment:Mx,roughnessmap_pars_fragment:Sx,shadowmap_pars_fragment:bx,shadowmap_pars_vertex:Tx,shadowmap_vertex:Ex,shadowmask_pars_fragment:wx,skinbase_vertex:Ax,skinning_pars_vertex:Rx,skinning_vertex:Cx,skinnormal_vertex:Ix,specularmap_fragment:Px,specularmap_pars_fragment:Lx,tonemapping_fragment:Nx,tonemapping_pars_fragment:Dx,transmission_fragment:Ux,transmission_pars_fragment:Ox,uv_pars_fragment:Fx,uv_pars_vertex:Bx,uv_vertex:kx,worldpos_vertex:zx,background_vert:Hx,background_frag:Gx,backgroundCube_vert:Vx,backgroundCube_frag:Wx,cube_vert:Xx,cube_frag:qx,depth_vert:Yx,depth_frag:Kx,distance_vert:$x,distance_frag:Zx,equirect_vert:Jx,equirect_frag:jx,linedashed_vert:Qx,linedashed_frag:ey,meshbasic_vert:ty,meshbasic_frag:ny,meshlambert_vert:iy,meshlambert_frag:sy,meshmatcap_vert:ry,meshmatcap_frag:oy,meshnormal_vert:ay,meshnormal_frag:ly,meshphong_vert:cy,meshphong_frag:uy,meshphysical_vert:hy,meshphysical_frag:dy,meshtoon_vert:fy,meshtoon_frag:py,points_vert:my,points_frag:gy,shadow_vert:_y,shadow_frag:xy,sprite_vert:yy,sprite_frag:vy},Ae={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Ti={basic:{uniforms:Sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Sn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Sn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ke(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Sn([Ae.points,Ae.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Sn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Sn([Ae.common,Ae.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Sn([Ae.sprite,Ae.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:Sn([Ae.common,Ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:Sn([Ae.lights,Ae.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ti.physical={uniforms:Sn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};mc={r:0,b:0,g:0},My=new $e,im=new et;im.set(-1,0,0,0,1,0,0,0,1);na=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new bo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jn(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Vs});r.uniforms.tEquirect.value=t;let o=new st(s,r),a=t.minFilter;return t.minFilter===ni&&(t.minFilter=rn),new Nr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Up=256,Ay=3,Ry=20,sm=256,rm=16,Cy=3,Iy=new P,Py=new ke,_c=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Nr(1,10,null),this._boxMesh=new st(new jn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Iy}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(Py));let _=new Nr(n,s,u);return _.position.copy(a),_.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=y,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Up,hh(e))}_fromTexture(e,t){e.mapping===Xs||e.mapping===Or?this._setSize(e.image.length===0?Up:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Op(e,!1,!1),n=Math.log2(e)-Ay;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Op(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Xs||e.mapping===Or?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Fp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ly(),this._integrationMaterial=Ny());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/rm);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Cy)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(sm*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Dy());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};Gy={[Wu]:"LINEAR_TONE_MAPPING",[Xu]:"REINHARD_TONE_MAPPING",[qu]:"CINEON_TONE_MAPPING",[Yu]:"ACES_FILMIC_TONE_MAPPING",[$u]:"AGX_TONE_MAPPING",[Zu]:"NEUTRAL_TONE_MAPPING",[Ku]:"CUSTOM_TONE_MAPPING"};om=new dn,am=new Bi(1,1),lm=new To(1),cm=new fo,um=new el,hm=new bo,kp=[],zp=[],Hp=new Float32Array(16),Gp=new Float32Array(9),Vp=new Float32Array(4);Ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cv(t.type)}},Rh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cv(t.type)}},Ch=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Eh=/(\w+)(\])?(\[|\.)?/g;zr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Iv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};Pv=37297,Lv=0;qp=new et;Ov={[Wu]:"Linear",[Xu]:"Reinhard",[qu]:"Cineon",[Yu]:"ACESFilmic",[$u]:"AgX",[Zu]:"Neutral",[Ku]:"Custom"};gc=new P;Gv=/^[ \t]*#include +<([\w\d./]+)>/gm;Wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;qv={[Xo]:"SHADOWMAP_TYPE_PCF",[Dr]:"SHADOWMAP_TYPE_VSM"};Kv={[Or]:"ENVMAP_MODE_REFRACTION"};Zv={[Tl]:"ENVMAP_BLENDING_MULTIPLY",[up]:"ENVMAP_BLENDING_MIX",[hp]:"ENVMAP_BLENDING_ADD"};Qv=0,Ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Lh(e),t.set(e,n)),n}},Lh=class{constructor(e){this.id=Qv++,this.code=e,this.usedTimes=0}};aM=0;hM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dM=`uniform sampler2D shadow_pass;
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
}`,fM=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],pM=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],tm=new $e,ea=new P,wh=new P;yM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vM=`
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

}`,Nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Eo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qn({vertexShader:yM,fragmentShader:vM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends di{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,y=typeof XRWebGLBinding<"u",_=new Nh,m={},v=t.getContextAttributes(),T=null,S=null,A=[],w=[],x=new oe,M=null,R=null,C=new Zt;C.viewport=new Et;let D=new Zt;D.viewport=new Et;let F=[C,D],B=new yl,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ve=A[J];return ve===void 0&&(ve=new Sr,A[J]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(J){let ve=A[J];return ve===void 0&&(ve=new Sr,A[J]=ve),ve.getGripSpace()},this.getHand=function(J){let ve=A[J];return ve===void 0&&(ve=new Sr,A[J]=ve),ve.getHandSpace()};function Z(J){let ve=w.indexOf(J.inputSource);if(ve===-1)return;let Le=A[ve];Le!==void 0&&(Le.update(J.inputSource,J.frame,c||o),Le.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",he);for(let J=0;J<A.length;J++){let ve=w[J];ve!==null&&(w[J]=null,A[J].disconnect(ve))}L=null,H=null,_.reset();for(let J in m)delete m[J];if(e.setRenderTarget(T),f=null,d=null,h=null,s=null,S=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),R!==null){let J=R.camera;J.fov=R.fov,J.zoom=R.zoom,J.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",he),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,ie=null,V=null;v.depth&&(V=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=v.stencil?Xi:Oi,ie=v.stencil?Ys:fi);let ue={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Bn(d.textureWidth,d.textureHeight,{format:ii,type:Un,depthTexture:new Bi(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Le={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Bn(f.framebufferWidth,f.framebufferHeight,{format:ii,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function he(J){for(let ve=0;ve<J.removed.length;ve++){let Le=J.removed[ve],ie=w.indexOf(Le);ie>=0&&(w[ie]=null,A[ie].disconnect(Le))}for(let ve=0;ve<J.added.length;ve++){let Le=J.added[ve],ie=w.indexOf(Le);if(ie===-1){for(let ue=0;ue<A.length;ue++)if(ue>=w.length){w.push(Le),ie=ue;break}else if(w[ue]===null){w[ue]=Le,ie=ue;break}if(ie===-1)break}let V=A[ie];V&&V.connect(Le)}}function $(J,ve){ve===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ve.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ve=J.near,Le=J.far;_.texture!==null&&(_.depthNear>0&&(ve=_.depthNear),_.depthFar>0&&(Le=_.depthFar)),B.near=D.near=C.near=ve,B.far=D.far=C.far=Le,(L!==B.near||H!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,H=B.far),B.layers.mask=J.layers.mask|6,C.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;let ie=J.parent,V=B.cameras;$(B,ie);for(let ue=0;ue<V.length;ue++)$(V[ue],ie);B.projectionMatrix.copy(C.projectionMatrix),B.projectionMatrixInverse.copy(C.projectionMatrixInverse),R===null&&J.isPerspectiveCamera&&(R={camera:J,fov:J.fov,zoom:J.zoom}),se(J,B,ie)};function se(J,ve,Le){Le===null?J.matrix.copy(ve.matrixWorld):(J.matrix.copy(Le.matrixWorld),J.matrix.invert(),J.matrix.multiply(ve.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ve.projectionMatrix),J.projectionMatrixInverse.copy(ve.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ls*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(B)},this.getCameraTexture=function(J){return m[J]};let ee=null;function Pe(J,ve){if(u=ve.getViewerPose(c||o),p=ve,u!==null){let Le=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let ie=!1;Le.length!==B.cameras.length&&(B.cameras.length=0,ie=!0);for(let pe=0;pe<Le.length;pe++){let Ie=Le[pe],Ne=null;if(f!==null)Ne=f.getViewport(Ie);else{let le=h.getViewSubImage(d,Ie);Ne=le.viewport,pe===0&&(e.setRenderTargetTextures(S,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(S))}let z=F[pe];z===void 0&&(z=new Zt,z.layers.enable(pe),z.viewport=new Et,F[pe]=z),z.matrix.fromArray(Ie.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(Ie.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),pe===0&&(B.matrix.copy(z.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ie===!0&&B.cameras.push(z)}let V=s.enabledFeatures;if(V&&V.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let pe=h.getDepthInformation(Le[0]);pe&&pe.isValid&&pe.texture&&_.init(pe,s.renderState)}if(V&&V.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let pe=0;pe<Le.length;pe++){let Ie=Le[pe].camera;if(Ie){let Ne=m[Ie];Ne||(Ne=new Eo,m[Ie]=Ne);let z=h.getCameraImage(Ie);Ne.sourceTexture=z}}}}for(let Le=0;Le<A.length;Le++){let ie=w[Le],V=A[Le];ie!==null&&V!==void 0&&V.update(ie,ve,c||o)}ee&&ee(J,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),p=null}let De=new nm;De.setAnimationLoop(Pe),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}},MM=new $e,dm=new et;dm.set(-1,0,0,0,1,0,0,0,1);TM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;xc=class{constructor(e={}){let{canvas:t=Tp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Un}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let y=f,_=new Set([Dl,Nl,Ll]),m=new Set([Un,fi,Br,Ys,Cl,Il]),v=new Uint32Array(4),T=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,w=null,x=[],M=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,F=null,B=null,L=null,H=null;this._outputColorSpace=zt;let Z=0,X=0,he=null,$=-1,se=null,ee=new Et,Pe=new Et,De=null,J=new ke(0),ve=0,Le=t.width,ie=t.height,V=1,ue=null,pt=null,pe=new Et(0,0,Le,ie),Ie=new Et(0,0,Le,ie),Ne=!1,z=new cs,le=new tl,ce=!1,we=!1,fe=new $e,je=new P,Ue=new Et,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Ze(){return he===null?V:1}let U=n;function Lt(E,O){return t.getContext(E,O)}let it,Mt,_e,Nt,Ve,Qe,I,b,G,de,re,xe,Te,Q,te,Me,N,ne,j,Se,ge,ye,Ge;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bl}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Re,!1),U===null){let O="webgl2";if(U=Lt(O,E),U===null)throw Lt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(E){throw t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Je("WebGLRenderer: "+E.message),E}function ct(){it=new Oy(U),it.init(),ge=new xM(U,it),Mt=new Ey(U,it,e,ge),_e=new gM(U,it),Mt.reversedDepthBuffer&&d&&_e.buffers.depth.setReversed(!0),B=U.createFramebuffer(),L=U.createFramebuffer(),H=U.createFramebuffer(),Nt=new ky(U),Ve=new nM,Qe=new _M(U,it,_e,Ve,Mt,ge,Nt),I=new Uy(C),b=new Hg(U),ye=new by(U,b),G=new Fy(U,b,Nt,ye),de=new Hy(U,G,b,ye,Nt),ne=new zy(U,Mt,Qe),te=new wy(Ve),re=new tM(C,I,it,Mt,ye,te),xe=new SM(C,Ve),Te=new sM,Q=new uM(it),N=new Sy(C,I,_e,de,p,l),Me=new mM(C,de,Mt),Ge=new bM(U,Nt,Mt,_e),j=new Ty(U,it,Nt),Se=new By(U,it,Nt),Nt.programs=re.programs,C.capabilities=Mt,C.extensions=it,C.properties=Ve,C.renderLists=Te,C.shadowMap=Me,C.state=_e,C.info=Nt}y!==Un&&(R=new Vy(y,t.width,t.height,a,s,r));let me=new Dh(C,U);this.xr=me,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=it.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=it.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(Le,ie,!1))},this.getSize=function(E){return E.set(Le,ie)},this.setSize=function(E,O,K=!0){if(me.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Le=E,ie=O,t.width=Math.floor(E*V),t.height=Math.floor(O*V),K===!0&&(t.style.width=E+"px",t.style.height=O+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Le*V,ie*V).floor()},this.setDrawingBufferSize=function(E,O,K){Le=E,ie=O,V=K,t.width=Math.floor(E*K),t.height=Math.floor(O*K),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(y===Un){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ee)},this.getViewport=function(E){return E.copy(pe)},this.setViewport=function(E,O,K,k){E.isVector4?pe.set(E.x,E.y,E.z,E.w):pe.set(E,O,K,k),_e.viewport(ee.copy(pe).multiplyScalar(Ze()).round())},this.getScissor=function(E){return E.copy(Ie)},this.setScissor=function(E,O,K,k){E.isVector4?Ie.set(E.x,E.y,E.z,E.w):Ie.set(E,O,K,k),_e.scissor(Pe.copy(Ie).multiplyScalar(Ze()).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(E){_e.setScissorTest(Ne=E)},this.setOpaqueSort=function(E){ue=E},this.setTransparentSort=function(E){pt=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,K=!0){let k=0;if(E){let W=!1;if(he!==null){let Ee=he.texture.format;W=_.has(Ee)}if(W){let Ee=he.texture.type,Oe=m.has(Ee),be=N.getClearColor(),Ce=N.getClearAlpha(),ze=be.r,tt=be.g,mt=be.b;Oe?(v[0]=ze,v[1]=tt,v[2]=mt,v[3]=Ce,U.clearBufferuiv(U.COLOR,0,v)):(T[0]=ze,T[1]=tt,T[2]=mt,T[3]=Ce,U.clearBufferiv(U.COLOR,0,T))}else k|=U.COLOR_BUFFER_BIT}O&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),N.dispose(),Te.dispose(),Q.dispose(),Qe.dispose(),Ve.dispose(),I.dispose(),de.dispose(),G.dispose(),ye.dispose(),Ge.dispose(),re.dispose(),me.dispose(),me.removeEventListener("sessionstart",zd),me.removeEventListener("sessionend",Hd),ys.stop()};function Xe(E){E.preventDefault(),ho("WebGLRenderer: Context Lost."),D=!0}function at(){ho("WebGLRenderer: Context Restored."),D=!1;let E=Nt.autoReset,O=Me.enabled,K=Me.autoUpdate,k=Me.needsUpdate,W=Me.type;ct(),Nt.autoReset=E,Me.enabled=O,Me.autoUpdate=K,Me.needsUpdate=k,Me.type=W}function Re(E){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Tt(E){let O=E.target;O.removeEventListener("dispose",Tt),cn(O)}function cn(E){Zi(E),Ve.remove(E)}function Zi(E){let O=Ve.get(E).programs;O!==void 0&&(O.forEach(function(K){re.releaseProgram(K)}),E.isShaderMaterial&&re.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,K,k,W,Ee){O===null&&(O=qe);let Oe=W.isMesh&&W.matrixWorld.determinantAffine()<0,be=l0(E,O,K,k,W);_e.setMaterial(k,Oe);let Ce=K.index,ze=1;if(k.wireframe===!0){if(Ce=G.getWireframeAttribute(K),Ce===void 0)return;ze=2}let tt=K.drawRange,mt=K.attributes.position,Fe=tt.start*ze,gt=(tt.start+tt.count)*ze;Ee!==null&&(Fe=Math.max(Fe,Ee.start*ze),gt=Math.min(gt,(Ee.start+Ee.count)*ze)),Ce!==null?(Fe=Math.max(Fe,0),gt=Math.min(gt,Ce.count)):mt!=null&&(Fe=Math.max(Fe,0),gt=Math.min(gt,mt.count));let en=gt-Fe;if(en<0||en===1/0)return;ye.setup(W,k,be,K,Ce);let Ct,Rt=j;if(Ce!==null&&(Ct=b.get(Ce),Rt=Se,Rt.setIndex(Ct)),W.isMesh)k.wireframe===!0?(_e.setLineWidth(k.wireframeLinewidth*Ze()),Rt.setMode(U.LINES)):Rt.setMode(U.TRIANGLES);else if(W.isLine){let xn=k.linewidth;xn===void 0&&(xn=1),_e.setLineWidth(xn*Ze()),W.isLineSegments?Rt.setMode(U.LINES):W.isLineLoop?Rt.setMode(U.LINE_LOOP):Rt.setMode(U.LINE_STRIP)}else W.isPoints?Rt.setMode(U.POINTS):W.isSprite&&Rt.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(it.get("WEBGL_multi_draw"))Rt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let xn=W._multiDrawStarts,Be=W._multiDrawCounts,Tn=W._multiDrawCount,xt=Ce?b.get(Ce).bytesPerElement:1,vs=Ve.get(k).currentProgram.getUniforms();for(let yn=0;yn<Tn;yn++)vs.setValue(U,"_gl_DrawID",yn),Rt.render(xn[yn]/xt,Be[yn])}else if(W.isInstancedMesh)Rt.renderInstances(Fe,en,W.count);else if(K.isInstancedBufferGeometry){let xn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Be=Math.min(K.instanceCount,xn);Rt.renderInstances(Fe,en,Be)}else Rt.render(Fe,en)};function kd(E,O,K,k){F!==null&&E.isNodeMaterial&&F.setObject(k,E),ce===!0&&te.setState(E,K,!1),E.transparent===!0&&E.side===Dn&&E.forceSinglePass===!1?(E.side=mn,E.needsUpdate=!0,Kr(E,O,k),E.side=ti,E.needsUpdate=!0,Kr(E,O,k),E.side=Dn):Kr(E,O,k)}this.compile=function(E,O,K=null){K===null&&(K=E),F!==null&&F.renderStart(E,O,K),w=Q.get(K),w.init(O),M.push(w),K.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),E!==K&&E.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),we=this.localClippingEnabled,ce=te.init(this.clippingPlanes,we),ce===!0&&te.setGlobalState(this.clippingPlanes,O),F!==null&&Me.render(w.state.shadowsArray,K,O);let k=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Oe=0;Oe<Ee.length;Oe++){let be=Ee[Oe];kd(be,K,O,W),k.add(be)}else kd(Ee,K,O,W),k.add(Ee)}),w=M.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(E,O,K=null){let k=this.compile(E,O,K);return new Promise(W=>{function Ee(){if(k.forEach(function(Oe){let Ce=Ve.get(Oe).currentProgram;(Ce===void 0||Ce.isReady())&&k.delete(Oe)}),k.size===0){W(E);return}setTimeout(Ee,10)}it.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Zc=null;function o0(E){Zc&&Zc(E)}function zd(){ys.stop()}function Hd(){ys.start()}let ys=new nm;ys.setAnimationLoop(o0),typeof self<"u"&&ys.setContext(self),this.setAnimationLoop=function(E){Zc=E,me.setAnimationLoop(E),E===null?ys.stop():ys.start()},me.addEventListener("sessionstart",zd),me.addEventListener("sessionend",Hd),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(E,O);let K=me.enabled===!0&&me.isPresenting===!0,k=R!==null&&(he===null||K)&&R.begin(C,he);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(O),O=me.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,O,he),w=Q.get(E,M.length),w.init(O),w.state.textureUnits=Qe.getTextureUnits(),M.push(w),fe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?le.setFromArrayCamera(O):z.setFromProjectionMatrix(fe,Zn,O.reversedDepth),we=this.localClippingEnabled,ce=te.init(this.clippingPlanes,we),A=Te.get(E,x.length),A.init(),x.push(A),this.info.render.frame++,me.enabled===!0&&me.isPresenting===!0){let Oe=C.xr.getDepthSensingMesh();Oe!==null&&Jc(Oe,O,-1/0,C.sortObjects)}Jc(E,O,0,C.sortObjects),A.finish(),F!==null&&F.updateLights(w.state.lightsArray),C.sortObjects===!0&&A.sort(ue,pt),We=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,We&&N.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),ce===!0&&te.beginShadows();let W=w.state.shadowsArray;if(Me.render(W,E,O),ce===!0&&te.endShadows(),(k&&R.hasRenderPass())===!1){let Oe=A.opaque,be=A.transmissive;if(w.setupLights(),O.isArrayCamera){let Ce=O.cameras;if(be.length>0)for(let ze=0,tt=Ce.length;ze<tt;ze++){let mt=Ce[ze];Vd(Oe,be,E,mt)}We&&N.render(E);for(let ze=0,tt=Ce.length;ze<tt;ze++){let mt=Ce[ze];Gd(A,E,mt,mt.viewport)}}else be.length>0&&Vd(Oe,be,E,O),We&&N.render(E),Gd(A,E,O)}he!==null&&X===0&&(Qe.updateMultisampleRenderTarget(he),Qe.updateRenderTargetMipmap(he)),k&&R.end(C),E.isScene===!0&&E.onAfterRender(C,E,O),ye.resetDefaultState(),$=-1,se=null,M.pop(),M.length>0?(w=M[M.length-1],Qe.setTextureUnits(w.state.textureUnits),ce===!0&&te.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,F!==null&&F.renderEnd()};function Jc(E,O,K,k){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Oe=O.isArrayCamera?le:z;if(!E.frustumCulled||E.intersectsFrustum(Oe)){k&&Ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);let be=de.update(E),Ce=E.material;Ce.visible&&A.push(E,be,Ce,K,Ue.z,null,O)}}else if(E.isMesh||E.isLine||E.isPoints){let Oe=O.isArrayCamera?le:z;if(!E.frustumCulled||E.intersectsFrustum(Oe)){let be=de.update(E),Ce=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ue.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ue.copy(be.boundingSphere.center)),Ue.applyMatrix4(E.matrixWorld).applyMatrix4(fe)),Array.isArray(Ce)){let ze=be.groups;for(let tt=0,mt=ze.length;tt<mt;tt++){let Fe=ze[tt],gt=Ce[Fe.materialIndex];gt&&gt.visible&&A.push(E,be,gt,K,Ue.z,Fe,O)}}else Ce.visible&&A.push(E,be,Ce,K,Ue.z,null,O)}}}let Ee=E.children;for(let Oe=0,be=Ee.length;Oe<be;Oe++)Jc(Ee[Oe],O,K,k)}function Gd(E,O,K,k){let{opaque:W,transmissive:Ee,transparent:Oe}=E;w.setupLightsView(K),ce===!0&&te.setGlobalState(C.clippingPlanes,K),k&&_e.viewport(ee.copy(k)),W.length>0&&pa(W,O,K),Ee.length>0&&pa(Ee,O,K),Oe.length>0&&pa(Oe,O,K),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Vd(E,O,K,k){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Fe=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new Bn(1,1,{generateMipmaps:!0,type:Fe?pi:Un,minFilter:ni,samples:Math.max(4,Mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Ee=w.state.transmissionRenderTarget[k.id],Oe=k.viewport||ee;Ee.setSize(Oe.z*C.transmissionResolutionScale,Oe.w*C.transmissionResolutionScale);let be=C.getRenderTarget(),Ce=C.getActiveCubeFace(),ze=C.getActiveMipmapLevel();C.setRenderTarget(Ee),C.getClearColor(J),ve=C.getClearAlpha(),ve<1&&C.setClearColor(16777215,.5),C.clear(),We&&N.render(K);let tt=C.toneMapping;C.toneMapping=Si;let mt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),ce===!0&&te.setGlobalState(C.clippingPlanes,k),pa(E,K,k),Qe.updateMultisampleRenderTarget(Ee),Qe.updateRenderTargetMipmap(Ee),it.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let gt=0,en=O.length;gt<en;gt++){let Ct=O[gt],{object:Rt,geometry:xn,material:Be,group:Tn}=Ct;if(Be.side===Dn&&Rt.layers.test(k.layers)){let xt=Be.side;Be.side=mn,Be.needsUpdate=!0,Wd(Rt,K,k,xn,Be,Tn),Be.side=xt,Be.needsUpdate=!0,Fe=!0}}Fe===!0&&(Qe.updateMultisampleRenderTarget(Ee),Qe.updateRenderTargetMipmap(Ee))}C.setRenderTarget(be,Ce,ze),C.setClearColor(J,ve),mt!==void 0&&(k.viewport=mt),C.toneMapping=tt}function pa(E,O,K){let k=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Ee=E.length;W<Ee;W++){let Oe=E[W],{object:be,geometry:Ce,group:ze}=Oe,tt=Oe.material;tt.allowOverride===!0&&k!==null&&(tt=k),be.layers.test(K.layers)&&Wd(be,O,K,Ce,tt,ze)}}function Wd(E,O,K,k,W,Ee){F!==null&&W.isNodeMaterial&&F.setObject(E,W),E.onBeforeRender(C,O,K,k,W,Ee),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(C,O,K,k,E,Ee),W.transparent===!0&&W.side===Dn&&W.forceSinglePass===!1?(W.side=mn,W.needsUpdate=!0,C.renderBufferDirect(K,O,k,W,E,Ee),W.side=ti,W.needsUpdate=!0,C.renderBufferDirect(K,O,k,W,E,Ee),W.side=Dn):C.renderBufferDirect(K,O,k,W,E,Ee),E.onAfterRender(C,O,K,k,W,Ee)}function Xd(E){let O=0;for(let K of E)K.texture!==null&&O++;return O}function Kr(E,O,K){O.isScene!==!0&&(O=qe);let k=Ve.get(E),W=w.state.lights,Ee=w.state.shadowsArray,Oe=W.state.version,be=re.getParameters(E,W.state,Ee,O,K,w.state.lightProbeGridArray),Ce=re.getProgramCacheKey(be),ze=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,k.fog=O.fog;let tt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=I.get(E.envMap||k.environment,tt),k.envMapRotation=k.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",Tt),ze=new Map,k.programs=ze,k.programVariants=new Map);let mt=ze.get(Ce);if(mt!==void 0){if(k.currentProgram===mt&&k.lightsStateVersion===Oe)return Yd(E,be),mt}else be.uniforms=re.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,K,be),E.onBeforeCompile(be,C),mt=re.acquireProgram(be,Ce),ze.set(Ce,mt),k.uniforms=be.uniforms;let Fe=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=te.uniform),Yd(E,be),k.needsLights=u0(E),k.lightsStateVersion=Oe,k.needsLights&&(Fe.ambientLightColor.value=W.state.ambient,Fe.lightProbe.value=W.state.probe,Fe.sunLights.value=W.state.sun,Fe.sunLightShadows.value=W.state.sunShadow,Fe.directionalLights.value=W.state.directional,Fe.directionalLightShadows.value=W.state.directionalShadow,Fe.spotLights.value=W.state.spot,Fe.spotLightShadows.value=W.state.spotShadow,Fe.rectAreaLights.value=W.state.rectArea,Fe.ltc_1.value=W.state.rectAreaLTC1,Fe.ltc_2.value=W.state.rectAreaLTC2,Fe.pointLights.value=W.state.point,Fe.pointLightShadows.value=W.state.pointShadow,Fe.hemisphereLights.value=W.state.hemi,Fe.sunShadowMatrix.value=W.state.sunShadowMatrix,Fe.sunShadowCascade.value=W.state.sunShadowCascade,Fe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Fe.spotLightMatrix.value=W.state.spotLightMatrix,Fe.spotLightMap.value=W.state.spotLightMap,Fe.pointShadowMatrix.value=W.state.pointShadowMatrix),k.numLightProbeGrids=Xd(w.state.lightProbeGridArray),k.currentProgram=mt,k.uniformsList=null,mt}function a0(E,O,K,k,W){let Ee=Ve.get(E),Oe=Ee.currentProgram.id+","+k+","+W,be=Ee.programVariants.get(Oe);return be===void 0?(be=Kr(E,O,K),Ee.programVariants.set(Oe,be)):(Ee.currentProgram=be,Ee.uniformsList=null,Ee.outputColorSpace=k,Ee.toneMapping=W),be}function qd(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=zr.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Yd(E,O){let K=Ve.get(E);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function l0(E,O,K,k,W){O.isScene!==!0&&(O=qe),Qe.resetTextureUnits();let Ee=O.fog,Oe=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?O.environment:null,be=he===null?C.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:lt.workingColorSpace,Ce=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,ze=I.get(k.envMap||Oe,Ce),tt=k.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,mt=!!K.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Fe=!!K.morphAttributes.position,gt=!!K.morphAttributes.normal,en=!!K.morphAttributes.color,Ct=Si;k.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ct=C.toneMapping);let Rt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xn=Rt!==void 0?Rt.length:0,Be=Ve.get(k),Tn=w.state.lights;if(ce===!0&&(we===!0||E!==se)){let kt=E===se&&k.id===$;te.setState(k,E,kt)}let xt=!1,vs=!1;k.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==Tn.state.version||W.isBatchedMesh&&Be.batching===!1||!W.isBatchedMesh&&Be.batching===!0||W.isBatchedMesh&&Be.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Be.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Be.instancing===!1||!W.isInstancedMesh&&Be.instancing===!0||W.isSkinnedMesh&&Be.skinning===!1||!W.isSkinnedMesh&&Be.skinning===!0||W.isInstancedMesh&&Be.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Be.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Be.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Be.instancingMorph===!1&&W.morphTexture!==null||Be.envMap!==ze||k.fog===!0&&Be.fog!==Ee||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==te.numPlanes||Be.numIntersection!==te.numIntersection)||Be.vertexAlphas!==tt||Be.vertexTangents!==mt||Be.morphTargets!==Fe||Be.morphNormals!==gt||Be.morphColors!==en||Be.morphTargetsCount!==xn||Be.numLightProbeGrids!==Xd(w.state.lightProbeGridArray)?xt=!0:(Be.outputColorSpace!==be||Be.toneMapping!==Ct)&&(vs=!0):(xt=!0,Be.__version=k.version);let yn=Be.currentProgram;(xt===!0||vs===!0)&&(yn=vs===!0?a0(k,O,W,be,Ct):Kr(k,O,W),F&&k.isNodeMaterial&&F.onUpdateProgram(k,yn,Be));let ma=!1,Ji=!1,Ms=!1,_t=yn.getUniforms(),fn=Be.uniforms;if(_e.useProgram(yn.program)&&(ma=!0,Ji=!0,Ms=!0),k.id!==$&&($=k.id,Ji=!0),ma||se!==E){_e.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),_t.setValue(U,"projectionMatrix",E.projectionMatrix),_t.setValue(U,"viewMatrix",E.matrixWorldInverse);let un=_t.map.cameraPosition;un!==void 0&&un.setValue(U,je.setFromMatrixPosition(E.matrixWorld)),Mt.logarithmicDepthBuffer&&_t.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&_t.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),se!==E&&(se=E,Ji=!0,Ms=!0)}if(Be.needsLights&&(Tn.state.sunShadowMap.length>0&&_t.setValue(U,"sunShadowMap",Tn.state.sunShadowMap,Qe),Tn.state.directionalShadowMap.length>0&&_t.setValue(U,"directionalShadowMap",Tn.state.directionalShadowMap,Qe),Tn.state.spotShadowMap.length>0&&_t.setValue(U,"spotShadowMap",Tn.state.spotShadowMap,Qe),Tn.state.pointShadowMap.length>0&&_t.setValue(U,"pointShadowMap",Tn.state.pointShadowMap,Qe)),W.isSkinnedMesh){_t.setOptional(U,W,"bindMatrix"),_t.setOptional(U,W,"bindMatrixInverse");let kt=W.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),_t.setValue(U,"boneTexture",kt.boneTexture,Qe))}W.isBatchedMesh&&(_t.setOptional(U,W,"batchingTexture"),_t.setValue(U,"batchingTexture",W._matricesTexture,Qe),_t.setOptional(U,W,"batchingIdTexture"),_t.setValue(U,"batchingIdTexture",W._indirectTexture,Qe),_t.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&_t.setValue(U,"batchingColorTexture",W._colorsTexture,Qe));let li=K.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&ne.update(W,K,yn),(Ji||Be.receiveShadow!==W.receiveShadow)&&(Be.receiveShadow=W.receiveShadow,_t.setValue(U,"receiveShadow",W.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&O.environment!==null&&(fn.envMapIntensity.value=O.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=EM()),Ji){if(_t.setValue(U,"toneMappingExposure",C.toneMappingExposure),Be.needsLights&&c0(fn,Ms),Ee&&k.fog===!0&&xe.refreshFogUniforms(fn,Ee),xe.refreshMaterialUniforms(fn,k,V,ie,w.state.transmissionRenderTarget[E.id]),Be.needsLights&&Be.numLightProbeGrids>0){let kt=S,un=0;for(let Ri of w.state.lightProbeGridArray)Ri.texture!==null&&(kt.textures[un]=Ri.texture,kt.min[un]=Ri.boundingBox.min,kt.max[un]=Ri.boundingBox.max,kt.resolution[un]=Ri.resolution,un++);for(let Ri in kt)kt[Ri].length=un;fn.probesSH.value=kt.textures,fn.probesMin.value=kt.min,fn.probesMax.value=kt.max,fn.probesResolution.value=kt.resolution}zr.upload(U,qd(Be),fn,Qe)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(zr.upload(U,qd(Be),fn,Qe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&_t.setValue(U,"center",W.center),_t.setValue(U,"modelViewMatrix",W.modelViewMatrix),_t.setValue(U,"normalMatrix",W.normalMatrix),_t.setValue(U,"modelMatrix",W.matrixWorld),k.uniformsGroups!==void 0){let kt=k.uniformsGroups;for(let un=0,Ri=kt.length;un<Ri;un++){let $d=kt[un];Ge.update($d,yn),Ge.bind($d,yn)}}return yn}function c0(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function u0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(E,O,K){let k=Ve.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ve.get(E.texture).__webglTexture=O,Ve.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:K,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let K=Ve.get(E);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,K=0){he=E,Z=O,X=K;let k=null,W=!1,Ee=!1;if(E){let be=Ve.get(E);if(be.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(U.FRAMEBUFFER,be.__webglFramebuffer),ee.copy(E.viewport),Pe.copy(E.scissor),De=E.scissorTest,_e.viewport(ee),_e.scissor(Pe),_e.setScissorTest(De),$=-1;return}else if(be.__webglFramebuffer===void 0)Qe.setupRenderTarget(E);else if(be.__hasExternalTextures)Qe.rebindTextures(E,Ve.get(E.texture).__webglTexture,Ve.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let tt=E.depthTexture;if(be.__boundDepthTexture!==tt){if(tt!==null&&Ve.has(tt)&&(E.width!==tt.image.width||E.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(E)}}let Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Ee=!0);let ze=Ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?k=ze[O][K]:k=ze[O],W=!0):E.samples>0&&Qe.useMultisampledRTT(E)===!1?k=Ve.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?k=ze[K]:k=ze,ee.copy(E.viewport),Pe.copy(E.scissor),De=E.scissorTest}else ee.copy(pe).multiplyScalar(V).floor(),Pe.copy(Ie).multiplyScalar(V).floor(),De=Ne;if(K!==0&&(k=B),_e.bindFramebuffer(U.FRAMEBUFFER,k)&&_e.drawBuffers(E,k),_e.viewport(ee),_e.scissor(Pe),_e.setScissorTest(De),W){let be=Ve.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,K)}else if(Ee){let be=O;for(let Ce=0;Ce<E.textures.length;Ce++){let ze=Ve.get(E.textures[Ce]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ce,ze.__webglTexture,K,be)}}else if(E!==null&&K!==0){let be=Ve.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,be.__webglTexture,K)}$=-1};function Kd(E){let O=Ve.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=Mt.textureFormatReadable(E.format),O.__typeReadable=Mt.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,K,k,W,Ee,Oe,be=0){if(!(E&&E.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ce=Ce[Oe],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){_e.bindFramebuffer(U.FRAMEBUFFER,Ce);try{let ze=E.textures[be],tt=ze.format,mt=ze.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be);let Fe=Kd(ze);if(Fe.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-k&&K>=0&&K<=E.height-W&&U.readPixels(O,K,k,W,ge.convert(tt),ge.convert(mt),Ee)}finally{let ze=he!==null?Ve.get(he).__webglFramebuffer:null;_e.bindFramebuffer(U.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,O,K,k,W,Ee,Oe,be=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ce=Ce[Oe],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(O>=0&&O<=E.width-k&&K>=0&&K<=E.height-W){_e.bindFramebuffer(U.FRAMEBUFFER,Ce);let ze=E.textures[be],tt=ze.format,mt=ze.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be);let Fe=Kd(ze);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,gt),U.bufferData(U.PIXEL_PACK_BUFFER,Ee.byteLength,U.STREAM_READ),U.readPixels(O,K,k,W,ge.convert(tt),ge.convert(mt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let en=he!==null?Ve.get(he).__webglFramebuffer:null;_e.bindFramebuffer(U.FRAMEBUFFER,en);let Ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await wp(U,Ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,gt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ee),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(gt),U.deleteSync(Ct),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,K=0){let k=Math.pow(2,-K),W=Math.floor(E.image.width*k),Ee=Math.floor(E.image.height*k),Oe=O!==null?O.x:0,be=O!==null?O.y:0;Qe.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Oe,be,W,Ee),_e.unbindTexture()},this.copyTextureToTexture=function(E,O,K=null,k=null,W=0,Ee=0){let Oe,be,Ce,ze,tt,mt,Fe,gt,en,Ct=E.isCompressedTexture?E.mipmaps[Ee]:E.image;if(K!==null)Oe=K.max.x-K.min.x,be=K.max.y-K.min.y,Ce=K.isBox3?K.max.z-K.min.z:1,ze=K.min.x,tt=K.min.y,mt=K.isBox3?K.min.z:0;else{let _t=Math.pow(2,-W);Oe=Math.floor(Ct.width*_t),be=Math.floor(Ct.height*_t),E.isDataArrayTexture?Ce=Ct.depth:E.isData3DTexture?Ce=Math.floor(Ct.depth*_t):Ce=1,ze=0,tt=0,mt=0}k!==null?(Fe=k.x,gt=k.y,en=k.z):(Fe=0,gt=0,en=0);let Rt=ge.convert(O.format),xn=ge.convert(O.type),Be;O.isData3DTexture?(Qe.setTexture3D(O,0),Be=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Qe.setTexture2DArray(O,0),Be=U.TEXTURE_2D_ARRAY):(Qe.setTexture2D(O,0),Be=U.TEXTURE_2D),_e.activeTexture(U.TEXTURE0),_e.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),_e.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_e.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let Tn=_e.getParameter(U.UNPACK_ROW_LENGTH),xt=_e.getParameter(U.UNPACK_IMAGE_HEIGHT),vs=_e.getParameter(U.UNPACK_SKIP_PIXELS),yn=_e.getParameter(U.UNPACK_SKIP_ROWS),ma=_e.getParameter(U.UNPACK_SKIP_IMAGES);_e.pixelStorei(U.UNPACK_ROW_LENGTH,Ct.width),_e.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ct.height),_e.pixelStorei(U.UNPACK_SKIP_PIXELS,ze),_e.pixelStorei(U.UNPACK_SKIP_ROWS,tt),_e.pixelStorei(U.UNPACK_SKIP_IMAGES,mt);let Ji=E.isDataArrayTexture||E.isData3DTexture,Ms=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let _t=Ve.get(E),fn=Ve.get(O),li=Ve.get(_t.__renderTarget),kt=Ve.get(fn.__renderTarget);_e.bindFramebuffer(U.READ_FRAMEBUFFER,li.__webglFramebuffer),_e.bindFramebuffer(U.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let un=0;un<Ce;un++)Ji&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ve.get(E).__webglTexture,W,mt+un),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ve.get(O).__webglTexture,Ee,en+un)),U.blitFramebuffer(ze,tt,ze+Oe,tt+be,Fe,gt,Fe+Oe,gt+be,U.DEPTH_BUFFER_BIT,U.NEAREST);_e.bindFramebuffer(U.READ_FRAMEBUFFER,null),_e.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||Ve.has(E)){let _t=Ve.get(E),fn=Ve.get(O);_e.bindFramebuffer(U.READ_FRAMEBUFFER,L),_e.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let li=0;li<Ce;li++)Ji?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_t.__webglTexture,W,mt+li):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_t.__webglTexture,W),Ms?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,fn.__webglTexture,Ee,en+li):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,fn.__webglTexture,Ee),W!==0?U.blitFramebuffer(ze,tt,ze+Oe,tt+be,Fe,gt,Fe+Oe,gt+be,U.COLOR_BUFFER_BIT,U.NEAREST):Ms?U.copyTexSubImage3D(Be,Ee,Fe,gt,en+li,ze,tt,Oe,be):U.copyTexSubImage2D(Be,Ee,Fe,gt,ze,tt,Oe,be);_e.bindFramebuffer(U.READ_FRAMEBUFFER,null),_e.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ms?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Be,Ee,Fe,gt,en,Oe,be,Ce,Rt,xn,Ct.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Be,Ee,Fe,gt,en,Oe,be,Ce,Rt,Ct.data):U.texSubImage3D(Be,Ee,Fe,gt,en,Oe,be,Ce,Rt,xn,Ct):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ee,Fe,gt,Oe,be,Rt,xn,Ct.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ee,Fe,gt,Ct.width,Ct.height,Rt,Ct.data):U.texSubImage2D(U.TEXTURE_2D,Ee,Fe,gt,Oe,be,Rt,xn,Ct);_e.pixelStorei(U.UNPACK_ROW_LENGTH,Tn),_e.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt),_e.pixelStorei(U.UNPACK_SKIP_PIXELS,vs),_e.pixelStorei(U.UNPACK_SKIP_ROWS,yn),_e.pixelStorei(U.UNPACK_SKIP_IMAGES,ma),Ee===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&U.generateMipmap(Be),_e.unbindTexture()},this.initRenderTarget=function(E){Ve.get(E).__webglFramebuffer===void 0&&Qe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Qe.setTextureCube(E,0):E.isData3DTexture?Qe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Qe.setTexture2DArray(E,0):Qe.setTexture2D(E,0),_e.unbindTexture()},this.resetState=function(){Z=0,X=0,he=null,_e.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}});function Uh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ut;l.morphTargetsRelative=a;let c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0,f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=fm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let y=0;y<o[u].length;++y)f.push(o[u][y][d]);let p=fm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function fm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new jt(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let y=u.getComponent(d,p);a.setComponent(d+h,p,y)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Oh(i,e){if(e===sh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===kr||e===jo){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===kr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Fh=ji(()=>{$s()});function pm(i){let e=new Map,t=new Map,n=i.clone();return mm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function mm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)mm(i.children[n],e.children[n],t)}var gm=ji(()=>{});function AM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Gt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function IM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Hs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),i.DefaultMaterial}function Zs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ei(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function PM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function LM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function NM(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zh(t.attributes):e=i.indices+":"+zh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+zh(i.targets[n]);return e}function zh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function hd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function DM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function OM(i,e,t){let n=e.attributes,s=new wn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){let u=hd(Gr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new P,l=new P;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let y=hd(Gr[d.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Ln;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function vm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=ud[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return lt.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),Ei(i,e),OM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?PM(i,e.targets,t):i})}var Mc,ft,Hh,Gh,Vh,Wh,Xh,qh,Yh,Kh,$h,Zh,Jh,jh,Qh,ed,td,nd,id,Sc,sd,Mm,sa,_m,rd,od,ad,ld,bc,RM,cd,si,Gr,xm,ym,Bh,ud,fs,CM,kh,UM,dd,Sm=ji(()=>{$s();Fh();gm();Mc=class extends ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Sc(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Sc(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new sd(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=zn.extractUrlBase(e);o=zn.resolveURL(c,this.path)}else o=zn.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Wi(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Mm){try{o[ft.KHR_BINARY_GLTF]=new rd(e)}catch(h){s&&s(h);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new dd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:o[h]=new Gh;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[h]=new od(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[h]=new ad;break;case ft.KHR_MESH_QUANTIZATION:o[h]=new ld;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Hh=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],pn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Go(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ho(u),c.distance=h;break;case"spot":c=new zo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ei(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Gh=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return Jn}extendParams(e,t,n){let s=[];e.color=new ke(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,zt))}return Promise.all(s)}},Vh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Wh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(r,r)}return Promise.all(s)}},Xh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},qh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Yh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Kh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,zt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},$h=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Zh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(r[0],r[1],r[2],pn),Promise.all(s)}},Jh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},jh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(r[0],r[1],r[2],pn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,zt)),Promise.all(s)}},Qh=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},ed=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},nd=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},id=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Sc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},sd=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==si.TRIANGLES&&c.mode!==si.TRIANGLE_STRIP&&c.mode!==si.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let p of h){let y=new $e,_=new P,m=new Jt,v=new P(1,1,1),T=new yo(p.geometry,p.material,d);for(let A=0;A<d;A++)l.TRANSLATION&&_.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,A),l.SCALE&&v.fromBufferAttribute(l.SCALE,A),T.setMatrixAt(A,y.compose(_,m,v));let S=null;for(let A in l)if(A==="_COLOR_0"){let w=l[A];T.instanceColor=new Fi(w.array,w.itemSize,w.normalized)}else if(A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"){if(S===null){let x=T.geometry;S=new Ut,S.name=x.name;for(let M in x.attributes)S.setAttribute(M,x.attributes[M]);for(let M in x.morphAttributes)S.morphAttributes[M]=x.morphAttributes[M];x.index!==null&&S.setIndex(x.index),S.morphTargetsRelative=x.morphTargetsRelative;for(let M of x.groups)S.addGroup(M.start,M.count,M.materialIndex);x.boundingBox!==null&&(S.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(S.boundingSphere=x.boundingSphere.clone()),S.drawRange.start=x.drawRange.start,S.drawRange.count=x.drawRange.count,S.userData=Object.assign({},x.userData),T.geometry=S}let w=l[A];S.setAttribute(A,new Fi(w.array,w.itemSize,w.normalized))}Dt.prototype.copy.call(T,p),this.parser.assignFinalMaterial(T),f.push(T)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Mm="glTF",sa=12,_m={JSON:1313821514,BIN:5130562},rd=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,sa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-sa,r=new DataView(e,sa),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===_m.JSON){let c=new Uint8Array(e,sa+o,a);this.content=n.decode(c)}else if(l===_m.BIN){let c=sa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},od=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=ud[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=ud[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Gr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let p in f.attributes){let y=f.attributes[p],_=l[p];_!==void 0&&(y.normalized=_)}h(f)},a,c,pn,d)})})}},ad=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},ld=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},bc=class extends vi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,y=p-c,_=-2*f+3*d,m=f-d,v=1-_,T=m-d+h;for(let S=0;S!==a;S++){let A=o[y+S+a],w=o[y+S+l]*u,x=o[p+S+a],M=o[p+S]*u;r[S]=v*A+T*w+_*x+m*M}return r}},RM=new Jt,cd=class extends bc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return RM.fromArray(r).normalize().toArray(r),r}},si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xm={9728:Qt,9729:rn,9984:Al,9985:Fr,9986:qs,9987:ni},ym={33071:$n,33648:_r,10497:os},Bh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ud={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},CM={CUBICSPLINE:void 0,LINEAR:Ps,STEP:Is},kh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};UM=new $e,dd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new AM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new Bo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Vo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wi(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Zs(r,a,s),Ei(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(zn.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Bh[s.type],a=Gr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new jt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Bh[s.type],c=Gr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,y,_;if(f&&f!==h){let m=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,T=t.cache.get(v);T||(y=new c(a,m*f,s.count*f/u),T=new as(y,f/u),t.cache.add(v,T)),_=new ls(T,l,d%f/u,p)}else a===null?y=new c(s.count*l):y=new c(a,d,s.count*l),_=new jt(y,l,p);if(s.sparse!==void 0){let m=Bh.SCALAR,v=Gr[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,A=new v(o[1],T,s.sparse.count*m),w=new c(o[2],S,s.sparse.count*l);a!==null&&(_=new jt(_.array.slice(),_.itemSize,_.normalized)),_.normalized=!1;for(let x=0,M=A.length;x<M;x++){let R=A[x];if(_.setX(R,w[x*l]),l>=2&&_.setY(R,w[x*l+1]),l>=3&&_.setZ(R,w[x*l+2]),l>=4&&_.setW(R,w[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}_.normalized=p}return _})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=xm[d.magFilter]||rn,u.minFilter=xm[d.minFilter]||ni,u.wrapS=ym[d.wrapS]||os,u.wrapT=ym[d.wrapT]||os,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Qt&&u.minFilter!==rn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let y=f;t.isImageBitmapLoader===!0&&(y=function(_){let m=new dn(_);m.needsUpdate=!0,f(m)}),t.load(zn.resolveURL(d,r.path),y,void 0,p)})})}let h=u.then(function(d){return c===!0&&a.revokeObjectURL(l),Ei(d,o),d.userData.mimeType=o.mimeType||DM(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new wr,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Er,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Hs}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ft.KHR_MATERIALS_UNLIT]){let h=s[ft.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new ke(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],pn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,zt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Dn);let u=r.alphaMode||kh.OPAQUE;if(u===kh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===kh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Jn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Jn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Jn){let h=r.emissiveFactor;a.emissive=new ke().setRGB(h[0],h[1],h[2],pn)}return r.emissiveTexture!==void 0&&o!==Jn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,zt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Ei(h,r),t.associations.set(h,{materials:e}),r.extensions&&Zs(s,h,r),h})}createUniqueName(e){let t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return vm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=NM(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=vm(new Ut,c,t),c.mode===si.TRIANGLE_STRIP?d=d.then(f=>Oh(f,jo)):c.mode===si.TRIANGLE_FAN&&(d=d.then(f=>Oh(f,kr))),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?IM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let y=u[f],_=o[f],m,v=c[f];if(_.mode===si.TRIANGLES||_.mode===si.TRIANGLE_STRIP||_.mode===si.TRIANGLE_FAN||_.mode===void 0){let T=r.isSkinnedMesh===!0,S=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");T&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=T&&S?new _o(y,v):new st(y,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(_.mode===si.LINES)m=new vo(y,v);else if(_.mode===si.LINE_STRIP)m=new Us(y,v);else if(_.mode===si.LINE_LOOP)m=new Mo(y,v);else if(_.mode===si.POINTS)m=new So(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(m.geometry.morphAttributes).length>0&&LM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Ei(m,r),_.extensions&&Zs(s,m,_),t.assignFinalMaterial(m),h.push(m)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Zs(s,h[0],r),h[0];let d=new Wt;r.extensions&&Zs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(ds.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Mi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ei(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new $e;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xo(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],p=s.samplers[f.sampler],y=f.target,_=y.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;y.node!==void 0&&(o.push(this.getDependency("node",_)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",v)),c.push(p),u.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],y=h[3],_=h[4],m=[];for(let T=0,S=d.length;T<S;T++){let A=d[T],w=f[T],x=p[T],M=y[T],R=_[T];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let C=n._createAnimationTracks(A,w,x,M,R);if(C)for(let D=0;D<C.length;D++)m.push(C[D])}let v=new Gs(r,void 0,m);return Ei(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,UM)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,p=h[0];u.pivot=new P().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new br:c.length>1?u=new Wt:c.length===1?u=c[0]:u=new Dt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ei(u,r),r.extensions&&Zs(n,u,r),r.matrix!==void 0){let h=new $e;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Wt;n.name&&(r.name=s.createUniqueName(n.name)),Ei(r,n),n.extensions&&Zs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?r.add(pm(d)):r.add(d)}let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof An||d instanceof dn)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}fs[r.path]===fs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(fs[r.path]){case fs.weights:u=Hi;break;case fs.rotation:u=Gi;break;case fs.translation:case fs.scale:u=us;break;default:switch(n.itemSize){case 1:u=Hi;break;case 2:case 3:default:u=us;break}break}let h=s.interpolation!==void 0?CM[s.interpolation]:Ps,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let y=new u(l[f]+"."+fs[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=hd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Gi?cd:bc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function zM(){let i,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(i)});break;case"decode":let l=a.buffer,c=a.taskConfig;e.then(u=>{let h=u.draco,d=new h.Decoder;try{let f=t(h,d,new Int8Array(l),c),p=f.attributes.map(y=>y.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{h.destroy(d)}});break}};function t(o,a,l,c){let u=c.attributeIDs,h=c.attributeTypes,d,f,p=a.GetEncodedGeometryType(l);if(p===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(p===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let y={index:null,attributes:[]};for(let _ in u){let m=self[h[_]],v,T;if(c.useUniqueIDs)T=u[_],v=a.GetAttributeByUniqueId(d,T);else{if(T=a.GetAttributeId(d,o[u[_]]),T===-1)continue;v=a.GetAttribute(d,T)}let S=s(o,a,d,_,m,v);_==="color"&&(S.vertexColorSpace=c.vertexColorSpace),y.attributes.push(S)}return p===o.TRIANGULAR_MESH&&(y.index=n(o,a,d)),o.destroy(d),y}function n(o,a,l){let u=l.num_faces()*3,h=u*4,d=o._malloc(h);a.GetTrianglesUInt32Array(l,h,d);let f=new Uint32Array(o.HEAPF32.buffer,d,u).slice();return o._free(d),{array:f,itemSize:1}}function s(o,a,l,c,u,h){let d=l.num_points(),f=h.num_components(),p=r(o,u),y=f*u.BYTES_PER_ELEMENT,_=Math.ceil(y/4)*4,m=_/u.BYTES_PER_ELEMENT,v=d*y,T=d*_,S=o._malloc(v);a.GetAttributeDataArrayForAllPoints(l,h,p,v,S);let A=new u(o.HEAPF32.buffer,S,v/u.BYTES_PER_ELEMENT),w;if(y===_)w=A.slice();else{w=new u(T/u.BYTES_PER_ELEMENT);let x=0;for(let M=0;M<d;M++){for(let R=0;R<f;R++)w[x+R]=A[M*f+R];x+=m}}return o._free(S),{name:c,count:d,itemSize:f,array:w,stride:m}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var fd,FM,BM,kM,X1,Tc,bm=ji(()=>{$s();fd=new WeakMap,FM=new URL("../libs/draco/draco_decoder.wasm",import.meta.url).toString(),BM=new URL("../libs/draco/draco_wasm_wrapper.js",import.meta.url).toString(),kM=new URL("../libs/draco/draco_decoder.js",import.meta.url).toString(),X1={js:new URL("../libs/draco/gltf/draco_wasm_wrapper.js",import.meta.url).toString(),wasm:new URL("../libs/draco/gltf/draco_decoder.wasm",import.meta.url).toString()},Tc=class extends ei{constructor(e){super(e),this.decoderPaths={js:BM,wasm:FM,dep_js:kM},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){let{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=zn.resolveURL("draco_wasm_wrapper.js",e),t.wasm=zn.resolveURL("draco_decoder.wasm",e),t.dep_js=zn.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new Wi(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,zt,n).catch(n)}decodeDracoFile(e,t,n,s,r=pn,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(fd.has(e)){let l=fd.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(s=l,new Promise((c,u)=>{s._callbacks[r]={resolve:c,reject:u},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),fd.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new Ut;e.index&&t.setIndex(new jt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let{name:s,array:r,itemSize:o,stride:a,vertexColorSpace:l}=e.attributes[n],c;if(o===a)c=new jt(r,o);else{let u=new as(r,a);c=new ls(u,o,0)}s==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(r instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==zt)return;let n=new ke;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),lt.colorSpaceToWorking(n,zt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new Wi(this.manager);return n.setPriority(this.priority),n.setCache(this.cache),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(s=>{let r=s[0];e||(this.decoderConfig.wasmBinary=s[1]);let o=zM.toString(),a=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}});var Ec,Tm=ji(()=>{$s();Ec=class{constructor(e,t={}){this.enabled=!0;let n=t.defaultThickness!==void 0?t.defaultThickness:.003,s=new ke().fromArray(t.defaultColor!==void 0?t.defaultColor:[0,0,0]),r=t.defaultAlpha!==void 0?t.defaultAlpha:1,o=t.defaultKeepAlive!==void 0?t.defaultKeepAlive:!1,a={},l=60,c={},u={},h={outlineThickness:{value:n},outlineColor:{value:s},outlineAlpha:{value:r}},d=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","	float thickness = outlineThickness;","	const float ratio = 1.0;","	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","	vec4 norm = normalize( pos - pos2 );","	return pos + norm * thickness * pos.w * ratio;","}","void main() {","	#include <uv_vertex>","	#include <beginnormal_vertex>","	#include <morphnormal_vertex>","	#include <skinbase_vertex>","	#include <skinnormal_vertex>","	#include <begin_vertex>","	#include <morphtarget_vertex>","	#include <skinning_vertex>","	#include <displacementmap_vertex>","	#include <project_vertex>","	vec3 outlineNormal = - objectNormal;","	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","	#include <logdepthbuf_vertex>","	#include <clipping_planes_vertex>","	#include <fog_vertex>","}"].join(`
`),f=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","	#include <clipping_planes_fragment>","	#include <logdepthbuf_fragment>","	gl_FragColor = vec4( outlineColor, outlineAlpha );","	#include <tonemapping_fragment>","	#include <colorspace_fragment>","	#include <fog_fragment>","	#include <premultiplied_alpha_fragment>","}"].join(`
`);function p(){return new Qn({type:"OutlineEffect",uniforms:pc.merge([Ae.fog,Ae.displacementmap,h]),vertexShader:d,fragmentShader:f,side:mn})}function y(M){let R=a[M.uuid];return R===void 0&&(R={material:p(),used:!0,keepAlive:o,count:0},a[M.uuid]=R),R.used=!0,R.material}function _(M){let R=y(M);return c[R.uuid]=M,w(R,M),R}function m(M){let R=M.geometry,C=R!==void 0&&R.attributes.normal!==void 0;return M.isMesh===!0&&M.material!==void 0&&C===!0}function v(M){if(m(M)!==!1){if(Array.isArray(M.material))for(let R=0,C=M.material.length;R<C;R++)M.material[R]=_(M.material[R]);else M.material=_(M.material);u[M.uuid]=M.onBeforeRender,M.onBeforeRender=S}}function T(M){if(m(M)!==!1){if(Array.isArray(M.material))for(let R=0,C=M.material.length;R<C;R++)M.material[R]=c[M.material[R].uuid];else M.material=c[M.material.uuid];M.onBeforeRender=u[M.uuid]}}function S(M,R,C,D,F){let B=c[F.uuid];B!==void 0&&A(F,B)}function A(M,R){let C=R.userData.outlineParameters;M.uniforms.outlineAlpha.value=R.opacity,C!==void 0&&(C.thickness!==void 0&&(M.uniforms.outlineThickness.value=C.thickness),C.color!==void 0&&M.uniforms.outlineColor.value.fromArray(C.color),C.alpha!==void 0&&(M.uniforms.outlineAlpha.value=C.alpha)),R.displacementMap&&(M.uniforms.displacementMap.value=R.displacementMap,M.uniforms.displacementScale.value=R.displacementScale,M.uniforms.displacementBias.value=R.displacementBias)}function w(M,R){if(M.name==="invisible")return;let C=R.userData.outlineParameters;M.fog=R.fog,M.toneMapped=R.toneMapped,M.premultipliedAlpha=R.premultipliedAlpha,M.displacementMap=R.displacementMap,C!==void 0?(R.visible===!1?M.visible=!1:M.visible=C.visible!==void 0?C.visible:!0,M.transparent=C.alpha!==void 0&&C.alpha<1?!0:R.transparent,C.keepAlive!==void 0&&(a[R.uuid].keepAlive=C.keepAlive)):(M.transparent=R.transparent,M.visible=R.visible),(R.wireframe===!0||R.depthTest===!1)&&(M.visible=!1),R.clippingPlanes&&(M.clipping=!0,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.clipShadows=R.clipShadows),M.version=R.version}function x(){let M;M=Object.keys(c);for(let R=0,C=M.length;R<C;R++)c[M[R]]=void 0;M=Object.keys(u);for(let R=0,C=M.length;R<C;R++)u[M[R]]=void 0;M=Object.keys(a);for(let R=0,C=M.length;R<C;R++){let D=M[R];a[D].used===!1?(a[D].count++,a[D].keepAlive===!1&&a[D].count>l&&delete a[D]):(a[D].used=!1,a[D].count=0)}}this.render=function(M,R){if(this.enabled===!1){e.render(M,R);return}let C=e.autoClear;e.autoClear=this.autoClear,e.render(M,R),e.autoClear=C,this.renderOutline(M,R)},this.renderOutline=function(M,R){let C=e.autoClear,D=M.matrixWorldAutoUpdate,F=M.background,B=e.shadowMap.enabled;M.matrixWorldAutoUpdate=!1,M.background=null,e.autoClear=!1,e.shadowMap.enabled=!1,M.traverse(v),e.render(M,R),M.traverse(T),x(),M.matrixWorldAutoUpdate=D,M.background=F,e.autoClear=C,e.shadowMap.enabled=B},this.setSize=function(M,R){e.setSize(M,R)}}}});function ri(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ra.copy(e),ra[n]=0,ra.normalize();let c=.5*o/(o+a),u=1-ra.angleTo(i)/l;return Math.sign(ra[t])===1?u*c:a/(o+a)+c+c*(1-u)}var ra,ps,Em=ji(()=>{$s();ra=new P;ps=class i extends jn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,u=new P(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,y=new P,_=.5/o;for(let m=0,v=0;m<h.length;m+=3,v+=2)switch(l.fromArray(h,m),c.copy(l),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=u.x*Math.sign(l.x)+c.x*r,h[m+1]=u.y*Math.sign(l.y)+c.y*r,h[m+2]=u.z*Math.sign(l.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/p)){case 0:y.set(1,0,0),f[v+0]=ri(y,c,"z","y",r,n),f[v+1]=1-ri(y,c,"y","z",r,t);break;case 1:y.set(-1,0,0),f[v+0]=1-ri(y,c,"z","y",r,n),f[v+1]=1-ri(y,c,"y","z",r,t);break;case 2:y.set(0,1,0),f[v+0]=1-ri(y,c,"x","z",r,e),f[v+1]=ri(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),f[v+0]=1-ri(y,c,"x","z",r,e),f[v+1]=1-ri(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),f[v+0]=1-ri(y,c,"x","y",r,e),f[v+1]=1-ri(y,c,"y","x",r,t);break;case 5:y.set(0,0,-1),f[v+0]=ri(y,c,"x","y",r,e),f[v+1]=1-ri(y,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}}});var tb=h0(()=>{$s();Sm();bm();Tm();Em();Fh();var qt=new URLSearchParams(location.search),Y=window.__game={frameTimes:[],ready:!1,phase:"loading",events:[]},HM=document.getElementById("c"),Wn=document.getElementById("ui"),oi=new xc({canvas:HM,antialias:!0,powerPreference:"high-performance",alpha:!!qt.get("render"),preserveDrawingBuffer:!!qt.get("render")});oi.setClearColor(2302794,1);oi.autoClear=!1;var aa=new Ec(oi,{defaultThickness:.0045,defaultColor:[.09,.06,.12]}),ht=new Ns,qn=new Zt(30,16/9,.5,120),ms=new Ns,Js=new Mi(0,1,0,-1,-2e3,2e3),vt=1,gn=1,Vn=!1,GM=new P(-.6866,.5675,.4544).normalize(),VM=new ke("#9db0e2").convertSRGBToLinear();function WM(i,e,t){let n=i.clone().lerp(VM,t),s=e?new ke(.78,.78,.86):new ke(.52,.53,.68),r=n.clone().multiply(s).lerp(n,t*.75),o=n.clone().multiplyScalar(1.4).lerp(new ke(1,.98,.92),.14).lerp(n,t*.75);return[r,n,o]}function Vt(i,{outline:e=!0,soft:t=!1,tint:n=0,side:s=ti}={}){let r=new Uo({color:16777215,side:s}),[o,a,l]=WM(i,t,n),c={uL:{value:GM},uS:{value:o},uB:{value:a},uH:{value:l}};return r.userData.U=c,r.userData.orig=[o.clone(),a.clone(),l.clone()],r.onBeforeCompile=u=>{Object.assign(u.uniforms,c),u.fragmentShader=`uniform vec3 uL; uniform vec3 uS; uniform vec3 uB; uniform vec3 uH;
`+u.fragmentShader.replace("#include <opaque_fragment>",`float v = 0.18 + 1.02 * max(dot(normalize(normal), normalize((viewMatrix * vec4(uL, 0.0)).xyz)), 0.0);
vec3 tc = v < 0.34 ? uS : (v < 0.78 ? uB : uH);
 gl_FragColor = vec4(tc, 1.0);`)},r.userData.outlineParameters={thickness:.0045,color:[.09,.06,.12],alpha:1,visible:e,keepAlive:!0},r}var It=i=>new ke(i).convertSRGBToLinear();function XM(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Xt=XM(7),Rd=new Mc,Lm=new Tc;Lm.setDecoderPath("draco/");Rd.setDRACOLoader(Lm);var bt={},Xn={},g,Lc,wc;async function qM(){wc=await(await fetch("set_info.json")).json();let e=(await Rd.loadAsync("set.glb")).scene;e.updateMatrixWorld(!0);let t={L0:0,L1:.34,L2:.56,L3:.72,CAT:.12,B:0,P:0},n={},s=(l,c,u)=>{let h=l+"|"+c+"|"+(u?1:0);return n[h]||(n[h]=Vt(It("#000000").copy(r[l]||new ke(1,0,1)),{outline:c==="L0"||c==="B"||c==="CAT"||c==="P"||u,tint:u?.05:t[c],soft:l==="cream"||l==="white"||l==="moon"||l==="sky"||l==="lit"}))},r={};e.traverse(l=>{l.isMesh&&l.material&&!r[l.material.name]&&(r[l.material.name]=l.material.color.clone())});let o=["L0_top","L0_jack","L1_mobile","L2_clock","GOLDKEY","L1_teddy","L1_train","L3_cloud0","L3_cloud1","L1_bunting","L0_soldier0","L0_soldier1","L1_mouse","L0B_horse","L0C_dancer","L0C_mlid","L1B_puppet"];Y.bays=[],Y.matCache=n;let a=(l,c)=>{let u=e.getObjectByName(l),h=new Wt,d={},f=_=>{for(let m=_;m&&m!==u;m=m.parent)if(o.includes(m.name.replace(/\.\d+$/,"")))return m;return null},p=new $e().copy(u.matrixWorld).invert(),y=new Set;u.traverse(_=>{var T;let m=f(_);if(m){y.add(m);return}if(!_.isMesh)return;let v=_.geometry.clone();v.applyMatrix4(new $e().multiplyMatrices(p,_.matrixWorld));for(let S of Object.keys(v.attributes))S!=="position"&&S!=="normal"&&v.deleteAttribute(S);(d[T=_.material.name]||(d[T]=[])).push(v.index?v.toNonIndexed():v)});for(let[_,m]of Object.entries(d)){let v=new st(Uh(m),s(_,c,!1));v.frustumCulled=!1,h.add(v)}for(let _ of y){let m=_.clone(!0);m.applyMatrix4(new $e().multiplyMatrices(p,_.parent.matrixWorld)),m.traverse(v=>{v.isMesh&&(v.material=s(v.material.name,c,_.name==="GOLDKEY"),v.frustumCulled=!1)}),h.add(m)}return h};for(let l of["L0","L1","L2","L3"]){let c=wc.layers[l].period,h=(wc.variants&&wc.variants[l]||["BAY_"+l]).map(f=>a(f,l));if(l==="L1"){let f=h[0].children.find(p=>p.name==="GOLDKEY");if(f)for(let p of h.slice(1))p.add(f.clone(!0))}let d=[];for(let f=0;f<3;f++){let p=new Wt;h.forEach(y=>p.add(f?y.clone(!0):y)),ht.add(p),d.push(p)}Y.bays.push({layer:l,period:c,copies:d,n:h.length})}for(let l of["L0_top","L0_jack","L0_jack_crank","L0_jack_lidhinge","L0_jack_head","L1_mobile","L2_pendulum","L2_clock_hand","GOLDKEY","L1_teddy","L1_train","L3_cloud0","L3_cloud1","L1_bunting","L0_soldier0","L0_soldier1","L0_sol_arm0","L0_sol_arm1","L1_mouse","L2_cuckoo","L2_clock_doorh","L0B_horse","L0C_dancer","L0C_mlid","L1B_puppet"])bt[l]=[],ht.traverse(c=>{(c.name===l||c.name.startsWith(l+"_hang"))&&bt[l].push(c)});bt.mobHang=[],ht.traverse(l=>{/^L1_mob_hang\d/.test(l.name)&&bt.mobHang.push(l)});for(let l of["coin","die","marble","button","spring","balloon","bonuskey","magnet","mousetrap","glue","books","sign_up","sign_on","catpaw","cathead","cattail","shelfend","toybox","jack","engine","wagon"]){let c=e.getObjectByName("tpl_"+l).clone(!0);c.position.set(0,0,0),c.rotation.set(0,0,0),c.traverse(u=>{u.isMesh&&(u.material=s(u.material.name,l==="cathead"||l==="cattail"?"CAT":"P",!1),u.frustumCulled=!1)}),Xn[l]=c}{let l=e.getObjectByName("BONUS"),c=new $e().copy(l.matrixWorld).invert(),u={};l.traverse(d=>{var p;if(!d.isMesh)return;let f=d.geometry.clone();f.applyMatrix4(new $e().multiplyMatrices(c,d.matrixWorld));for(let y of Object.keys(f.attributes))y!=="position"&&y!=="normal"&&f.deleteAttribute(y);(u[p=d.material.name]||(u[p]=[])).push(f.index?f.toNonIndexed():f)});let h=new Wt;for(let[d,f]of Object.entries(u)){let p=new st(Uh(f),s(d,"B",!1));p.frustumCulled=!1,h.add(p)}h.visible=!1,ht.add(h),Y.bonusSet=h}}async function YM(){Lc=await(await fetch("pip_info.json")).json();let i=await Rd.loadAsync("pip.glb"),e=new Set(Lc.no_outline.map(u=>"TOY_"+u)),t={},n={};i.scene.traverse(u=>{if(n[u.name]=u,u.isMesh){let h=u.material.name;t[h]||(t[h]=Vt(u.material.color.clone(),{outline:!e.has(h),soft:h==="TOY_cream"||h==="TOY_white"})),u.material=t[h],u.frustumCulled=!1}});let s=new Wt,r=new Wt,o=new Wt;r.position.z=.3,o.position.z=-.3,s.add(r),r.add(o),o.add(i.scene),ht.add(s);let a=new Wo(i.scene),l={};for(let u of i.animations){let h=a.clipAction(u);l[u.name]=h,["win","trip","stumble","getup","jump"].includes(u.name)&&(h.setLoop(hc),h.clampWhenFinished=!0)}l.idle.play(),g={root:s,pitch:r,squash:o,model:i.scene,nodes:n,mixer:a,actions:l,current:l.idle,clip:"idle",yaw:.35,yawT:.35,E:0,ts:1,dist:0,x:0,y:0,z:.35,extra:0,magnet:0,keyAng:0,keyVel:0,keyTarget:0,needle:.9,expr:{mouth:"smile",brow:0,lid:1,sleepy:0},sq:0,sqVel:0,hop:0,hopV:0,sway:0,lying:0},g.rest={};for(let u of["eyeL","eyeR","pupilL","pupilR","browL","browR","antenna","windkey","needle","mixamorigHead","mixamorigLeftArm","mixamorigRightArm","mixamorigLeftUpLeg","mixamorigRightUpLeg","mixamorigLeftLeg","mixamorigRightLeg","mixamorigSpine1","mixamorigHips"])n[u]&&(g.rest[u]={p:n[u].position.clone(),q:n[u].quaternion.clone(),s:n[u].scale.clone()});g.unit={};let c=new P;for(let u of Object.keys(g.rest))n[u].parent.getWorldScale(c),g.unit[u]=1/c.x;g.face={blinkT:1.5,blink:0,gaze:new oe,gazeTarget:new oe,gazeT:1,brow:0,lid:1},g.spring={prev:null,vel:new oe,ang:new oe,lastV:new oe}}function Ot(i,e=.2,t=1){let n=g.actions[i];if(n){if(g.current===n&&i!=="win"){n.timeScale=t;return}n.reset(),n.enabled=!0,n.setEffectiveWeight(1),n.timeScale=t,n.play(),g.current&&g.current!==n&&g.current.crossFadeTo(n,e,!1),g.current=n,g.clip=i}}var Yt=new P,la=new P;function Nm(i,e){let t=g.face,n=g.nodes,s=g.rest,r=g.expr;t.blinkT-=i,t.blinkT<=0&&(t.blink=.001,t.blinkT=(r.sleepy?1.2:2)+Math.random()*3,Math.random()<.25&&(t.double=.28)),t.double&&(t.double-=i,t.double<=0&&(t.double=0,t.blink=.001));let o=1;if(t.blink>0){t.blink+=i;let l=t.blink/(r.sleepy?.3:.13);o=l<.5?1-l*1.8:Math.min(1,.1+(l-.5)*1.8),l>=1&&(t.blink=0)}t.lid+=(r.lid-t.lid)*(1-Math.exp(-i*10)),o=Math.min(o,t.lid),t.gazeT-=i,r.gaze?t.gazeTarget.copy(r.gaze):t.gazeT<=0&&(t.gazeT=.6+Math.random()*1.6,t.gazeTarget.set((Math.random()-.5)*.016,(Math.random()-.4)*.01)),t.gaze.lerp(t.gazeTarget,1-Math.exp(-i*30)),t.brow+=(r.brow-t.brow)*(1-Math.exp(-i*18));for(let l of["L","R"]){let c=n["eye"+l],u=n["pupil"+l],h=n["brow"+l];if(c&&(c.scale.copy(s["eye"+l].s),c.scale.y*=Math.max(.08,o)*(r.mouth==="o"?1.14:1)),u){u.position.copy(s["pupil"+l].p);let d=g.unit["pupil"+l];u.position.x+=t.gaze.x*d,u.position.y+=t.gaze.y*d}h&&(h.position.copy(s["brow"+l].p),h.position.y+=(t.brow*.016+(o<.6?-.008:0))*g.unit["brow"+l],h.quaternion.identity(),h.rotateY((l==="L"?1:-1)*(r.worried||0)*.35))}for(let l of["smile","grin","o"])n["mouth_"+l]&&(n["mouth_"+l].visible=l===r.mouth);if(g.keyVel+=((g.keyTarget-g.keyAng)*420-g.keyVel*22)*i,g.keyAng+=g.keyVel*i,n.windkey&&(n.windkey.quaternion.copy(s.windkey.q),n.windkey.rotateY(g.keyAng)),n.antenna&&n.head){n.head.getWorldPosition(Yt);let l=g.spring;if(l.prev&&i>0){let c=(Yt.x-l.prev.x)/i,u=(Yt.y-l.prev.y)/i;l.vel.x+=(-l.ang.x*140-l.vel.x*6)*i-(c-l.lastV.x)*1.4,l.vel.y+=(-l.ang.y*140-l.vel.y*6)*i+(u-l.lastV.y)*.6,l.ang.addScaledVector(l.vel,i),l.ang.clampScalar(-.8,.8),l.lastV.set(c,u)}l.prev=(l.prev||new P).copy(Yt),n.antenna.quaternion.copy(s.antenna.q),n.antenna.rotateZ(l.ang.x+Math.sin(e*2.1)*.03-g.expr.droop*.5||0),n.antenna.rotateX(l.ang.y*.5)}let a=g.dialOverride??.9-2.15*g.E;g.needle+=(a-g.needle)*(1-Math.exp(-i*12)),n.needle&&(n.needle.quaternion.copy(s.needle.q),n.needle.rotateZ(g.needle+(g.E>0&&g.E<.3?Math.sin(e*40)*.04:0)))}var Ye={list:[],hitStop:0,kick:0,trails:{},snapDone:!1},Cd=(()=>{let i=new Fs;for(let t=0;t<10;t++){let n=t%2?.045:.11,s=Math.PI/2+t*Math.PI/5,r=Math.cos(s)*n,o=Math.sin(s)*n;t?i.lineTo(r,o):i.moveTo(r,o)}i.closePath();let e=new Ir(i,{depth:.035,bevelEnabled:!0,bevelThickness:.012,bevelSize:.01,bevelSegments:2});return e.center(),e})(),Dm=new No(.06,2),Wc,Id,Nc;function Xc(i,e,t){return ht.add(i),Ye.list.push({mesh:i,life:e,age:0,update:t}),i}function Yr(i,e){let t=i/e;return i<.12?1.25*(i/.12):i<.2?1.25-(i-.12)/.08*.25:t>.7?Math.max(0,1-(t-.7)/.3):1}function Yn(i,e=9,t=1,n=1){for(let s=0;s<e;s++){let r=new st(Cd,Wc);r.position.copy(i);let o=Math.PI*(.08+.84*s/Math.max(1,e-1))+(Xt()-.5)*.2,a=(2.4+Xt()*1.2)*n,l=new P(Math.cos(o)*a,Math.sin(o)*a*.9+.8*n,.3),c=(Xt()-.5)*14,u=(.5+Xt()*.35)*t;Xc(r,.8+Xt()*.3,(h,d)=>{l.y-=6.5*d,l.multiplyScalar(1-1.8*d),h.mesh.position.addScaledVector(l,d),h.mesh.rotation.z+=c*d,h.mesh.scale.setScalar(u*Yr(h.age,h.life))})}}function _n(i,e=6,t=1){for(let n=0;n<e;n++){let s=new st(Dm,Id),r=n%2?1:-1;s.position.set(i.x+r*(.08+Xt()*.08),.04+Xt()*.04,i.z+.1+Xt()*.1);let o=r*(.4+Xt()*.6)*t,a=(.15+Xt()*.3)*t,l=(.9+Xt()*.9)*t;Xc(s,.36+Xt()*.12,(c,u)=>{c.mesh.position.x+=o*u,c.mesh.position.y+=a*u;let h=l*Yr(c.age,c.life);c.mesh.scale.set(h*1.3,h*.8,h)})}}function KM(i,e){var s;let t=0,n=0;for(let r of["Left","Right"]){let o=g.nodes[r+"glove"];if(!o)continue;let a=(s=Ye.trails)[r]||(s[r]={start:null,end:null,mesh:null,shrink:0,prev:null,state:"idle"}),l=new P;o.getWorldPosition(l);let c=a.prev&&i>0?l.distanceTo(a.prev)/i:0;if(e>=0&&!Ye.snapDone&&(a.state==="idle"&&e>.3&&c>3&&a.prev&&l.y-a.prev.y>0&&(a.state="fast",a.start=a.prev.clone(),a.shrink=1),a.state==="fast"&&(a.end=l.clone(),c<2.2&&(a.state=a.end.y-a.start.y>.25?"done":"idle"),a.state==="idle"&&(a.start=null))),a.state==="fast"&&t++,a.state==="done"&&n++,(a.state==="done"||e<0&&a.start)&&(a.shrink-=i/.08,a.shrink<=0&&(a.start=null,a.state=e<0?"idle":"spent")),e<0&&!a.start&&(a.state="idle"),a.prev=l,a.mesh&&(ht.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh=null),a.start&&a.end&&a.start.distanceTo(a.end)>.12){let u=a.start.clone().lerp(a.end,.5);u.x+=.18;let h=new Rr(a.start,u,a.end),d=24,f=Math.max(0,a.shrink),p=1-f,y=[],_=[];for(let v=0;v<=d;v++){let T=p+(1-p)*(v/d),S=h.getPoint(T),A=h.getTangent(T),w=.07*Math.pow(T,.8),x=-A.y*w,M=A.x*w;if(y.push(S.x+x,S.y+M,S.z-.35,S.x-x,S.y-M,S.z-.35),v<d){let R=v*2;_.push(R,R+1,R+2,R+1,R+3,R+2)}}let m=new Ut;m.setAttribute("position",new yt(y,3)),m.setIndex(_),a.mesh=new st(m,Nc),a.mesh.frustumCulled=!1,ht.add(a.mesh)}}if(e>=0&&!Ye.snapDone&&n===2&&t===0){Ye.snapDone=!0;let r=new P;g.nodes.head.getWorldPosition(r),r.y+=.35,Yn(r,11,1.1),Ye.hitStop=.08,Ye.kick=1,g.dialOverride=-1.25,Y.events.push(["star_burst",+Ke.toFixed(2)]),(Kt/ai>=10||Y.round&&Y.round.pay>=1e3)&&Pt.bigWin(Hm(Y.round&&Y.round.pay!==void 0?Y.round.pay/100*ai:Kt))}}function $M(){Wc=Vt(It("#ffd257")),Id=Vt(It("#ead9b0"),{soft:!0}),Nc=new Jn({color:It("#ffe7a3"),side:Dn}),Nc.userData.outlineParameters={thickness:.003,color:[.09,.06,.12],alpha:1,visible:!0,keepAlive:!0}}function Um(i){return la.copy(i).project(qn),[(la.x*.5+.5)*vt,(-la.y*.5+.5)*gn]}var Ic=[];function wt(i,e,t="pop",n=1,s=1){let r=document.createElement("div");r.className=t,r.textContent=e,Wn.appendChild(r);let o=String(e),a=/^[+x÷]|^TOTAL|WIN|NICE/.test(o)&&!/TURNS/.test(o)?["#ffd257","#5a2a12"]:/STUCK|SNAP|THUD|SWAT|uh-oh|ow|OW|gulp|tink|POP!$/.test(o)?["#ff6b5b","#3b1220"]:/MAGNET|BOING|UP, UP|TURNS|WHIRR|WHEE|POMF|CARRIAGE|UPGRADE|GOLDEN|EXPRESS|TIER/.test(o)?["#7fe0d4","#173a44"]:["#fff4dc","#3b2230"];r.style.color=a[0],r.style.webkitTextStroke=(t==="call"?10:8)+"px "+a[1],Ic.push({el:r,world:i.clone(),age:0,life:s,size:n,rise:t==="pop"?.9:0,tilt:(Xt()-.5)*10})}function ZM(i){for(let e=Ic.length-1;e>=0;e--){let t=Ic[e];t.age+=i;let[n,s]=Um(Yt.copy(t.world).add(new P(0,t.rise*Math.min(1,t.age/.5),0))),r=Yr(t.age,t.life)*t.size;t.el.style.left=n+"px",t.el.style.top=s+"px",t.el.style.fontSize=Math.round(Dc(gn*.05,16,4e3)*(t.el.className==="call"?1.6:1))+"px",t.el.style.transform=`translate(-50%, -50%) scale(${r.toFixed(3)}) rotate(${(t.el.className==="call"?-6:t.tilt*(1-Math.min(1,t.age/.3)*.5)).toFixed(2)}deg)`,t.age>=t.life&&(t.el.remove(),Ic.splice(e,1))}}var Dc=(i,e,t)=>Math.max(e,Math.min(t,i)),bn=[],js=.35,Om=.9,vd=-.25,JM={coin:.38,button:.3,die:.28,marble:.17},jM={coin:.5,button:.1,stack:2};function pd(i,e,t={}){let n;if(i==="stack"){n=new Wt,n.scale.setScalar(1.3);for(let a=0;a<3;a++){let l=Xn.coin.clone(!0);l.rotation.x=Math.PI/2,l.position.y=.04+a*.075,l.rotation.z=a*.7,n.add(l)}let o=Xn.coin.clone(!0);o.position.y=.48,n.add(o),n.userData.spin=o}else i==="goldkey"?(n=bt.GOLDKEY[0].clone(!0),n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.setScalar(1.25)):(n=Xn[i].clone(!0),i==="coin"&&n.scale.setScalar(1.35),i==="button"&&n.scale.setScalar(1.3));let s=t.y||0,r={kind:i,x:e,z:t.z??js+.05,g:s,mesh:n,state:"wait",t:0,air:0,...t};if(r.baseY=s+(JM[i]||0)+r.air,n.position.set(e,r.baseY,r.z),ht.add(n),t.drop&&(r.dropT=t.drop,n.position.y=r.baseY+3.2,n.visible=!1),i==="die"){let o={1:[0,1,0],6:[0,-1,0],3:[1,0,0],4:[-1,0,0],2:[0,0,1],5:[0,0,-1]}[r.face];r.qF=new Jt().setFromUnitVectors(new P(...o),new P(0,0,1)),r.face===5&&r.qF.setFromAxisAngle(new P(0,1,0),Math.PI),r.q0=Bm(r,3*Math.PI/2,1.5*Math.PI),n.quaternion.copy(r.q0)}return r.part=o=>n.getObjectByName(o),bn.push(r),r}function QM(i){ht.remove(i.mesh);let e=bn.indexOf(i);e>=0&&bn.splice(e,1)}function eS(){for(let i of bn)ht.remove(i.mesh);bn.length=0}var Fm=()=>new P(g.x,g.y+g.hop+1,g.z);function tS(i,e){for(let t=bn.length-1;t>=0;t--){let n=bn[t],s=n.mesh;if(n.t+=i,n.dropT!==void 0&&(n.dropT-=i,n.dropT<=0&&!s.visible&&(s.visible=!0,n.vy=0,n.falling=!0),n.falling&&(n.vy-=22*i,s.position.y+=n.vy*i,s.position.y<=n.baseY&&(s.position.y=n.baseY,n.vy<-2?(n.vy=-n.vy*.32,n.kind!=="coin"&&n.kind!=="button"&&_n(s.position,4,.6)):(n.falling=!1,delete n.dropT)))),n.state==="wait"){if((n.kind==="coin"||n.kind==="button")&&(s.rotation.y=e*2.2+n.x,n.falling||(s.position.y=n.baseY+Math.sin(e*3+n.x)*.04)),n.kind==="die"&&!n.falling){let r=Math.max(0,Math.sin(e*2.2+n.x));s.position.y=n.baseY+Math.pow(r,8)*.12,s.quaternion.copy(n.q0),s.rotateZ(Math.pow(r,8)*.12)}if(n.kind==="stack"&&(s.userData.spin.rotation.y=e*2.2,s.userData.spin.position.y=.5+Math.sin(e*3)*.04),n.kind==="balloon"){let r=n.part("balloon_body");r.rotation.z=Math.sin(e*1.4+n.x)*.1,r.rotation.x=Math.sin(e*1.1)*.05,r.position.y=.14+Math.sin(e*2)*.03}if(n.kind==="bonuskey"){let r=n.part("bkey_key");r.rotation.y=e*2.4,r.position.y=.45+Math.sin(e*3)*.04}if(n.kind==="magnet"){let r=n.part("mag_body");r.rotation.y=Math.sin(e*1.8)*.6,r.position.y=.5+Math.sin(e*3)*.04}if(n.kind==="spring"){let r=n.part("spring_coil"),o=n.part("spring_cap"),a=1+Math.sin(e*5)*.04;r.scale.y=a,o.position.y=.08+.36*a}if(n.kind==="glue"&&n.part("glue_puddle").scale.set(1+Math.sin(e*2)*.02,1,1+Math.cos(e*2)*.02),n.kind==="goldkey"&&(s.rotation.y=Math.sin(e*1.2)*.3,s.position.y=n.baseY+Math.sin(e*2)*.05),n.kind==="jack"){let r=n.part("jackb_crank");r.rotation.x=-e*1.5,s.rotation.z=Math.sin(e*2.6)*.02}}if(n.state==="collect"){n.vy-=18*i,s.position.y+=n.vy*i,s.position.x+=i*1.6,s.rotation.y+=i*24;let r=Yr(n.t,.5)*(n.kind==="stack"?1.25:n.kind==="button"?1.4:1.6);if(s.scale.setScalar(Math.max(.001,r)),n.t>.5){ht.remove(s),bn.splice(t,1);continue}}if(n.state==="fly"){let r=Math.min(1,n.t/.45),o=Fm(),a=r*r;s.position.set(n.p0.x+(o.x-n.p0.x)*a,n.p0.y+(o.y-n.p0.y)*a+Math.sin(r*Math.PI)*.6,n.p0.z+(o.z-n.p0.z)*a),s.rotation.y+=i*30,r>=1&&$m(n)}if(n.state==="popout"){let r=n.t<.12?1+n.t/.12*.25:Math.max(.001,1.25*(1-(n.t-.12)/.25));if(s.scale.setScalar(r*(n.s0||1)),n.t>.37){ht.remove(s),bn.splice(t,1);continue}}if(n.kind==="die"&&n.state==="kicked"&&oS(n,i),n.kind==="die"&&n.state==="done"&&n.t>.7&&qc(n,6),n.kind==="marble"&&n.state==="roll"){let r=n.v;s.position.x+=r*i,s.rotation.z-=r*i/.17,n.trip&&s.position.x<=g.x+.38&&ot.phase==="march"&&US(n),Math.abs(s.position.x-Ft)>14&&(ht.remove(s),bn.splice(t,1))}if(n.kind==="marble"&&n.state==="shoot"&&(n.v*=1-.6*i,s.position.x+=n.v*i,s.rotation.z-=n.v*i/.17,n.t>3&&(ht.remove(s),bn.splice(t,1))),n.kind==="spring"&&n.state==="boing"){let r=n.part("spring_coil"),o=n.part("spring_cap"),a=n.t,l=a<.12?1-a/.12*.55:1+Math.sin((a-.12)*28)*Math.exp(-(a-.12)*5)*.9;r.scale.y=Math.max(.3,l),o.position.y=.08+.36*Math.max(.3,l),a>1.6&&(n.state="spent")}if(n.kind==="mousetrap"&&n.state==="snap"){let r=n.part("trap_bar"),o=Math.min(1,n.t/.07);r.rotation.z=-Math.PI*o*o}}}function qc(i,e=5){if(i.state==="popout")return;i.state="popout",i.t=0,i.s0=i.mesh.scale.x;let t=i.mesh.position.clone();t.y+=.2,Yn(t,e,.55,.6)}var nE=new Jt,nS=new Jt,iS=new P(0,0,1),sS=new P(0,1,0);function Bm(i,e,t){return new Jt().setFromAxisAngle(iS,e).multiply(nS.setFromAxisAngle(sS,t)).multiply(i.qF)}function rS(i){i.state="kicked",i.t=0,i.p0=i.mesh.position.clone(),i.kz=i.g>.5?-.3:-.62,Ye.hitStop=.05,Y.events.push(["die_kick",+Ke.toFixed(2)]),Kt*=i.value,_n(new P(i.x-.2,i.g,i.z),5,.8)}function oS(i,e){let t=i.mesh,n=.56,s=n/2,r=i.t,o=i.g,a=.5,l=.38,c=.45,u=0,h=i.p0.x,d=s,f=i.p0.z;if(r<a){let _=r/a;u=-Math.PI*_,h=i.p0.x+1.25*_,d=s+1.5*4*_*(1-_)+(Math.SQRT2-1)*s*Math.abs(Math.sin(u*2))*.5,f=i.p0.z+i.kz*_,t.scale.set(1,1,1)}else if(r<a+l){i.landed||(i.landed=!0,Ye.hitStop=.06,Ye.kick=.7,_n(new P(i.p0.x+1.25,o,i.p0.z+i.kz),7,1),Y.events.push(["die_land",+Ke.toFixed(2)]));let _=(r-a)/l,m=_*_*(3-2*_),v=-Math.PI/2*m,T=i.p0.x+1.25+s;u=-Math.PI+v;let S=Math.SQRT2*s,A=3*Math.PI/4+v;h=T+S*Math.cos(A),d=S*Math.sin(A),f=i.p0.z+i.kz;let w=_<.15?1-.12*Math.sin(_/.15*Math.PI):1;t.scale.set(1/Math.sqrt(w),w,1/Math.sqrt(w))}else{i.settled||(i.settled=!0,Ye.hitStop=.05,_n(new P(i.p0.x+1.25+2*s,o,i.p0.z+i.kz),4,.7),DS(i));let _=Math.min(1,(r-a-l)/c),m=Math.sin(_*Math.PI*2)*Math.exp(-_*3)*.22,v=i.p0.x+1.25+2*s;u=-3*Math.PI/2+m;let T=m>0?v-s:v+s,S=Math.SQRT2*s,A=(m>0?Math.PI/4:3*Math.PI/4)+m;h=T+S*Math.cos(A),d=S*Math.sin(A),f=i.p0.z+i.kz;let w=1+.15*Math.max(0,1-_*4)*Math.sin(_*4*Math.PI);t.scale.setScalar(w),_>=1&&(i.state="done",i.t=0)}t.position.set(h,d+o,f);let p=Math.min(1,r/(a+l)),y=1.5*Math.PI*Math.pow(1-p,1.6);t.quaternion.copy(Bm(i,u+3*Math.PI/2,y))}var Ft=0,Cn=null,Vr=10.2,Bt=10.2,Ac=0,Yc=0,md=1.05,er=1.05,Rc=0,km=0,Ke=0,oa=0,gi=0,_s=2.2,gd=0,Kc=0;function $t(){let e=5.408450704225352/(2*Math.tan(ds.degToRad(qn.fov/2)));return Vn&&(e=Math.max(e,5/qn.aspect/(2*Math.tan(ds.degToRad(qn.fov/2))))),e}function In(i,e=1.1){Cn={from:Ft,to:i,t:0,dur:e}}var aS=(i,e)=>{if(e<=1)return 0;let t=(n,s)=>(n%s+s)%s;return e===2?t(i,2):t(t(i,3)+Math.floor(i/3),3)};function Pd(i){if(Cn){Cn.t+=i;let s=Math.min(1,Cn.t/Cn.dur),r=s*s*s*(s*(s*6-15)+10);Ft=Cn.from+(Cn.to-Cn.from)*r,s>=1&&(Cn=null)}let e=1-Math.exp(-i*2.2),t=1-Math.exp(-i*_s);Vr+=(Bt-Vr)*e,Ac+=(Yc-Ac)*e,md+=(er-md)*e,Rc+=(km-Rc)*e,oa+=(gi-oa)*t,gd+=(Kc-gd)*e;let n=Math.sin(Ye.kick*Math.PI)*.03*Ye.kick;qn.position.set(Ft+Math.sin(Rc)*Vr,1.55+Ac-n+oa+gd,Math.cos(Rc)*Vr),qn.lookAt(Ft,md+Ac*.5-n+oa,0);for(let s of Y.bays){let r=Math.round(Ft/s.period);s.copies.forEach((o,a)=>{let l=r+a-1;o.position.x=l*s.period;let c=aS(l,s.n);o.children.forEach((u,h)=>{u.visible=h===c})})}Y.floor&&(Y.floor.position.x=Ft)}function Ld(i){return la.set(i,g.y+1,g.z).project(qn),la.x*.5+.5}var wm=[{name:"magnet_dance",mode:"full",turns:4,run:8.5,items:[["coin",1.6],["button",2.5],["magnet",3.5],["coin",5],["button",5.5],["coin",6],["die",7.4,3]],cam:{y:0,yaw:0}},{name:"glue_trip",mode:"full",turns:4,run:20,items:[["coin",1.6],["glue",2.9],["coin",4.6],["marble",5.6]],cam:{y:.2,yaw:-.05}},{name:"spring_hop",mode:"gentle",turns:3,run:5.6,items:[["button",1.4],["spring",2.6],["coin",3.9,{air:1.7}],["coin",4.6,{air:2.3}],["coin",5.3,{air:1.7}],["glue",4.6],["button",7.2]],cam:{y:-.15,yaw:.05}},{name:"fork_up",mode:"full",turns:4,run:8.4,items:[["coin",1.4]],fork:{at:2.6,pick:"up",up:[["stack",1.4],["die",2.6,2]],on:[["button",1.6],["button",3]]},cam:{y:.3,yaw:.03}},{name:"overwind_trap",mode:"over",turns:6,run:30,items:[["coin",1.8],["coin",2.8],["button",3.8],["mousetrap",6]],cat:"tail",cam:{y:.1,yaw:-.04}},{name:"balloon_big",mode:"full",turns:5,run:6.6,items:[["coin",1.5],["balloon",2.6],["coin",3.6,{air:1.4}],["stack",4.6,{air:1.6}],["coin",5.6,{air:1.4}],["mousetrap",4.2],["glue",5.4],["die",8.3,5]],cam:{y:-.2,yaw:.07}},{name:"cat_swipe",mode:"over",turns:6,run:30,items:[["coin",1.7],["coin",2.7],["button",3.7]],cat:"swipe",catAt:5,cam:{y:.15,yaw:0}},{name:"key_edge",mode:"full",turns:3,run:6,items:[["coin",1.5],["bonuskey",2.6],["coin",4],["button",5]],edge:6.6,cam:{y:.05,yaw:-.03}},{name:"fork_on_empty",mode:"gentle",turns:3,run:5,items:[],fork:{at:2.2,pick:"on",up:[["coin",1.2],["coin",2.4]],on:[["marble_past",0]]},cam:{y:.2,yaw:.04}},{name:"jack_bonus",mode:"full",turns:4,run:30,items:[["coin",1.5],["button",2.5],["jack",4.6]],bonus:{tier:1,start:[1],stations:[["add",2],["up",0,3],["add",3],["up",1,5]]},cam:{y:0,yaw:.02}},{name:"golden_key",mode:"gold",turns:5,run:30,items:[["stack",1.6],["coin",2.8],["coin",3.6],["goldkey",5.4]],bonus:{tier:3,start:[2,2,3],stations:[["add",5],["up",0,5],["add",4],["up",2,10]]},cam:{y:-.1,yaw:.05}}],zm={gentle:{ts:.98,label:"GENTLE WIND"},full:{ts:1.16,label:"FULL WIND"},over:{ts:1.45,label:"OVERWIND!"},gold:{ts:1.16,label:"GOLDEN KEY HUNT"}},Uc=+(qt.get("round")||0),ai=1,Kt=0,ot=window.game={phase:"loading",play:da,roundIdx:()=>Uc,choose:i=>{ot.phase==="fork"&&!ot.pick&&(ot.pick=i)}},Hm=i=>Ki(Math.round(i*1e6)),Oc=[];function Yi(i,e,t,n){let s=Xn[i].clone(!0);return s.position.set(e,t,n),ht.add(s),Oc.push(s),s}function lS(){for(let i of Oc)ht.remove(i);Oc.length=0,Fc(null),Gm(0),Y.catHead=Y.catPaw=Y.catTail=Y.toybox=null,Nd()}function _d(i,e,t={}){let n=Ft+5.5;for(let s of i){let[r,o]=s,a=s.find(h=>h&&typeof h=="object"&&!Array.isArray(h))||{},l=typeof s[2]=="number"?s[2]:void 0,c=e+o;if(r==="marble"){pd("marble",c+4.2,{trip:!0,z:js+.12,near:c});continue}if(r==="marble_past"){pd("marble",e+10,{z:-.55,pastRoll:!0});continue}let u=r==="coin"||r==="button"||r==="stack";pd(r,c,{...t,...a,value:l??jM[r],face:r==="die"?l:void 0,drop:u&&c<n&&!a.air?.2+.16*bn.length:void 0})}}function da(i){if(!Y.ready||!["idle","result"].includes(ot.phase))return;let e=i||wm[Uc%wm.length];Uc++,ai=$i()/1e6,Y.round=e,Y.t0round=Ke,Y.events.push(["play",e.name,+Ke.toFixed(2),(performance.timeOrigin+performance.now())/1e3]),Kt=0,Pt.setWin(0,!0),eS(),lS(),IS();let t=ot,n=g.off;if(n&&(g.off=!1,g.inBox=!1,g.y=0,g.z=js,g.x=Ft-(Vn?.3:2.4),g.pitch.rotation.set(0,0,0),g.root.visible=!0),g.hurt&&(g.hurt=!1,g.trap)){let s=g.trap;g.trap=null,ht.attach(s.mesh),bn.push(s),qc(s,5)}if(g.goldKey&&Hc(!1),Yc=e.cam.y,km=e.cam.yaw,Bt=$t(),er=1.05,gi=0,_s=2.2,Kc=0,g.startX=g.x,g.E=0,g.dist=0,g.dialOverride=null,Ye.snapDone=!1,g.magnet=0,g.extra=0,g.mode=e.mode,Gm(e.mode==="gold"?1:0),_d(e.items,g.x),t.fork=null,t.edgeX=null,t.cat=null,e.fork){let s=g.x+e.fork.at,r=s+.9,o=r+4.6;Yi("books",r+2.3,0,vd);let a=Yi("sign_up",s+.35,0,-.85),l=Yi("sign_on",s+.85,0,-.95);a.getObjectByName("tpl_sign_up_board").rotation.set(0,0,.55),l.getObjectByName("tpl_sign_on_board").rotation.set(0,0,-.08),kc(a.getObjectByName("tpl_sign_up_board"),"UP","up"),kc(l.getObjectByName("tpl_sign_on_board"),"ALONG","on"),_d(e.fork.up,r,{y:Om,z:vd+.1,fork:!0}),_d(e.fork.on,r,{fork:!0}),t.fork={x:s,x0:r,x1:o,pick:e.fork.pick,decided:!1,on:!1}}e.edge&&(t.edgeX=g.x+e.edge,Fc(t.edgeX),Yi("shelfend",t.edgeX,0,0),Y.toybox=Yi("toybox",t.edgeX+1.7,ca,1.7)),e.cat&&(Y.catTail=Yi("cattail",g.x+3,5.2,-1.6),Y.catTail.userData.ph=Ke,e.cat==="swipe"&&(Y.catHead=Yi("cathead",g.x+e.catAt+2.6,-1.8,-3.5),Y.catHead.scale.setScalar(.8),Y.catPaw=Yi("catpaw",g.x+e.catAt,9,js-.2),Y.catPaw.rotation.z=1.3,t.cat={x:g.x+e.catAt,state:"peek",t:0},Y.toybox=Yi("toybox",g.x+e.catAt+3.6,ca,2))),t.phase=g.lying>.5?"getup":n?"respawn":ot.phase==="result"&&g.wound?"wake":"wind";for(let s of["e1","e2","e3","landed","t1","c1","g1","g2","g3","ja","jack","gk","air","fl","tr","ft","ti"])t[s]=void 0;g.headDownT=0,g.balloonArm=0,t.t=0,t.cranks=0,g.wound=!1,t.res=t.tink=t.boing=t.closeUp=t.went=!1,t.rd=void 0,t.pick=null,g.headTurnT=0,g.lying=g.lying>.5?1:0,t.after=null,t.cele=null,Pt.keyPress()}function nt(i,e=0,t=1,n={}){g.expr={mouth:i,brow:e,lid:t,sleepy:0,worried:0,droop:0,gaze:null,...n}}var xd=[It("#a8641c"),It("#e7a93a"),It("#ffe08a")];function Gm(i){if(Y.matCache){for(let[e,t]of Object.entries(Y.matCache)){if(!e.endsWith("|L0|0")||!t.userData.U)continue;let n=t.userData.U,s=t.userData.orig;n.uS.value.copy(s[0]).lerp(xd[0],i*.45),n.uB.value.copy(s[1]).lerp(xd[1],i*.45),n.uH.value.copy(s[2]).lerp(xd[2],i*.45)}Y.gold=i}}var Am=new Pn(new P(-1,0,0),0);function Fc(i){if(Y.matCache){oi.localClippingEnabled=i!==null,i!==null&&(Am.constant=i+.12);for(let[e,t]of Object.entries(Y.matCache))e.includes("|L0|")&&(t.clippingPlanes=i!==null?[Am]:null,t.needsUpdate=!0)}}var ca=-8.3,Bc=[];function kc(i,e,t,n="sign"){let s=document.createElement("div");s.className="lbl "+n,s.textContent=e,Wn.appendChild(s),t&&(s.style.pointerEvents="auto",s.style.cursor="pointer",s.addEventListener("pointerdown",o=>{o.preventDefault(),ot.choose(t)}));let r={el:s,node:i,pick:t,size:1};return Bc.push(r),r}function Nd(){for(let i of Bc)i.el.remove();Bc.length=0}function cS(){for(let i of Bc){i.node.getWorldPosition(Yt);let[e,t]=Um(Yt),n=!i.gone;for(let s=i.node;n&&s;s=s.parent)if(s.visible===!1){n=!1;break}i.el.style.left=e+"px",i.el.style.top=t+"px",i.el.style.fontSize=Math.round(Dc(gn*.034,11,4e3)*i.size)+"px",i.el.style.display=n?"":"none",i.pick&&ot.fork&&ot.fork.decided&&(i.el.style.opacity=i.pick===ot.fork.pick?"1":"0.35")}}function uS(i,e){let t=ot;t.t+=i;let n=Y.round;switch(t.phase){case"respawn":{t.t<.02&&(g.hop=3.6,g.hopV=-2,g.root.visible=!0,Ot("idle",.01),nt("o",1.2)),g.hop<=0&&t.t>.3&&(nt("grin",.8),t.t>.75&&(t.phase="wind",t.t=0)),g.yawT=.35;break}case"getup":{t.went||(t.went=!0,bd("getup",sn.getupStart),g.current.timeScale=2.3,Zm(),g.lying=0,nt("o",.8,.8,{worried:.5}));let s=g.actions.getup;(s.time>sn.getupEnd-.15||!s.isRunning())&&(bd("idle",0,.25),g.yawT=.35,t.went=!1,t.phase="wind",t.t=0,g.sqVel=-3,nt("grin",1.1));break}case"wake":{g.sqVel=4,g.hop=0,nt("o",1.2),t.phase="wind",t.t=0;break}case"wind":{if(g.yawT=.35,g.clip!=="idle"&&Ot("idle",.25),t.t<.02&&!t.modeShown&&(t.modeShown=!0,wt(new P(g.x,g.y+2.7,g.z),zm[n.mode].label,"pop",n.mode==="over"?1.3:1,1.2)),t.t<.25){nt("smile",.5),g.sqT=.06;break}nt("o",1,1,{gaze:new oe(0,.006)});let s=n.mode==="over"?.17:.22;Math.floor((t.t-.25)/s)>=t.cranks&&t.cranks<n.turns&&(t.cranks++,g.keyTarget+=Math.PI/2,g.sqVel-=3.2,g.E=t.cranks/n.turns,Pt.crank(),Y.events.push(["crank",t.cranks,+Ke.toFixed(2)]),n.mode==="over"&&t.cranks>4&&zc()),t.t>.25+n.turns*s+.15&&(t.phase="go",t.t=0,t.modeShown=!1);break}case"go":{nt("grin",.8,1,{gaze:new oe(.012,.002)}),t.t<.18?g.sqT=.1:(g.sqT=0,t.went||(t.went=!0,g.sqVel=5,g.hopV=2.2,g.yawT=ua,Ot("march",.15))),t.t>.4&&(t.phase="march",t.t=0,t.went=!1);break}case"march":dS(i,e,t,n);break;case"air":Od(i,t);break;case"glue":{g.current.timeScale=1.7*(1+Math.sin(t.t*9)*.2),g.sway=.6,nt("o",1.2,1.1,{worried:1,gaze:new oe(0,-.01)}),g.sqT=Math.sin(t.t*14)*.04,g.glueStretch=Math.sin(t.t*7)*.5+.5,t.t>1.5&&(g.sqT=0,g.glueStretch=0,g.hopV=3.4,g.sqVel=5,wt(new P(g.x+.4,g.y+2.2,g.z),"POP!","pop",1.1,.8),_n(g.root.position,6,.9),t.phase="march",t.t=0,g.sway=0);break}case"pickup":{g.current.timeScale=Math.max(0,g.current.timeScale-i*6),g.yawT=.5,nt("o",1.2,1.1,{gaze:new oe(0,.006)});let s=Math.floor((t.t-.35)/.22);t.t>.35&&s>=t.cranks&&t.cranks<3&&(t.cranks++,g.keyTarget+=Math.PI/2,g.sqVel-=3.2,Pt.crank(),g.extra+=1.6,Yn(Vm(),3,.4,.4)),t.t>1.25&&(t.phase="march",t.t=0,t.cranks=0,g.yawT=ua,Ot("march",.1),g.hopV=2,wt(new P(g.x,g.y+2.6,g.z),"+3 TURNS","pop",1.2,1));break}case"fork":gS(i,t);break;case"trip":OS(i,t);break;case"trap":bS(i,t);break;case"cat":xS(i,t);break;case"fly":vS(i,t);break;case"edge":MS(i,t);break;case"jack":AS(i,t);break;case"gold":CS(i,t);break;case"bonus":PS(i,t);break;case"wound":{if(Ai=1,g.E=0,t.t<.05&&!t.tink&&(t.tink=!0,g.sqVel=-1.8,Ye.kick=.35,wt(new P(g.x-.2,g.y+2.3,g.z),"tink","pop",.8,.8)),t.t<.7&&nt("o",.3,.55,{gaze:new oe(0,-.006),droop:.4}),t.t>.6&&(g.headTurnT=yd),t.t<.7||(t.t<1.3?nt("smile",-.2,.5,{sleepy:1,gaze:new oe(-.006,0),worried:.6,droop:.6}):t.cele||nt("smile",.6,.62,{sleepy:1,gaze:new oe(-.004,.003),droop:.6})),g.sway=Math.max(0,.7-t.t*.35),g.wound=!0,t.t>1.1&&!t.res){t.res=!0,ha();let s=Kt/ai;t.cele=s<=0?null:s<3?"hop":"dance",t.ct=0}t.cele&&NS(i,t),t.t>1.6&&(Bt=$t()*.92),t.t>(t.cele==="dance"?3.4:t.cele==="hop"?2.5:2)&&(t.phase="result",t.cele&&(g.wound=!1,g.headTurnT=0));break}case"bigwin":{if(Ai=1,t.t<.6?(nt("o",.2+t.t*1.5,.6+t.t*.6,{droop:.4-t.t*.6,gaze:new oe(.008*Math.sin(t.t*9),.004)}),g.sway=.4,g.headTurnT=yd*.7):t.boing||(t.boing=!0,g.sway=0,g.headTurnT=0,g.yawT=.3,Ot("win",.08),g.sqVel=6,g.E=1,g.dialOverride=null,Bt=$t()*.85,ha(),Fd()),t.boing){g.sqT=Ye.snapDone?Math.sin(t.t*10)*.035:0;let s=g.actions.win.time;!Ye.snapDone&&s<1?nt("o",1,1,{gaze:new oe(0,.008)}):s<1.5?nt("grin",1.4):nt("smile",.4)}t.boing&&!g.actions.win.isRunning()&&t.t>2.4&&(g.sqT=0,Ot("idle",.3),t.phase="result",g.E=0,g.dialOverride=null);break}case"result":case"idle":{Ai=1,g.lying>.5?FS(i,e):g.hurt?qm(i,e,.6):g.inBox?Xm(i,e):g.wound?(g.headTurnT=yd+Math.sin(e*.5)*.12,nt("smile",.5+Math.sin(e*.7)*.15,.62,{sleepy:1,droop:.6,gaze:new oe(Math.sin(e*.4)*.006,.002)}),g.sway=.18):(g.yawT=.35,g.headTurnT=0,["idle","win","dance","jump"].includes(g.clip)||Ot("idle",.3),g.clip==="jump"&&!g.actions.jump.isRunning()&&Ot("idle",.3),g.clip==="dance"&&t.t>3&&Ot("idle",.4),g.clip==="idle"&&nt("smile",.2));break}}qt.get("auto")&&!ae.busy&&!ae.replay&&["idle","result"].includes(t.phase)&&(t.autoWait=(t.autoWait||0)+i)>(t.phase==="idle"&&Uc===0?2:2.4)&&(t.autoWait=0,qt.get("round")&&!ae.online?da():qr(qt.get("wind")||ae.mode)),["idle","result"].includes(t.phase)||(t.autoWait=0)}var ua=Math.PI/2;function hS(){return zm[g.mode]?.ts||1}function dS(i,e,t,n){let s=n.run+g.extra,r=Math.max(0,1-g.dist/s);r<.16&&t.rd===void 0&&(t.rd=0);let o=1;if(t.rd!==void 0){t.rd+=i;let c=Math.min(1,t.rd/1.7);o=Math.pow(1-c,1.35)*(1+.25*Math.sin(c*26)*c),g.E=.16*(1-c)}else g.E=r,o=r<.3?.78+.22*(r-.16)/.14:1;let a=hS();g.ts=o,g.current.timeScale=Math.max(0,o*a);let l=Lc.march_speed*.97*o*a;if(g.x+=l*i,g.dist=g.x-g.startX,g.keyAng-=i*9*o*a,g.keyTarget=g.keyAng,nt(o<.7?"smile":"grin",o<.7?.1:.6,o<.5?.75:1,{worried:o<.6?(.6-o)*1.6:0,gaze:o<.6?new oe(.002,-.004):null}),g.sway=t.rd!==void 0?Math.min(1,.4+t.rd/1.4):r<.3?(.3-r)/.35:0,Ai=t.rd!==void 0&&t.rd>1.1?.65:1,g.mode==="over"&&Math.random()<i*5&&zc(1),r<.22&&!t.closeUp&&(t.closeUp=!0,Bt=$t()*.8,er=1.15,In(g.x+.9,1.4)),!t.closeUp&&!Cn&&Ld(g.x)>(Vn?.5:.56)&&In(g.x+(Vn?1.2:2.2),1.15),gi=g.y*.6,Dd(t),t.phase==="march"){if(t.fork&&!t.fork.decided&&g.x>t.fork.x-.05){t.phase="fork",t.t=0;return}if(t.fork&&t.fork.on&&g.y>.5&&g.x>t.fork.x1-.35){Ud({dx:.9,y1:0,z1:js,h:.7,dur:.55}),t.fork.on=!1;return}if(t.edgeX!==null&&g.x>t.edgeX+.3){t.phase="edge",t.t=0;return}if(t.cat&&t.cat.state==="peek"&&g.x>t.cat.x-.6){t.phase="cat",t.t=0,t.cat.state="paw";return}t.rd!==void 0&&t.rd>=1.7&&(t.rd=void 0,g.current.timeScale=0,t.t=0,t.closeUp=!1,t.phase=Kt/ai>=10?"bigwin":"wound",Y.events.push(["ending",t.phase,+Ke.toFixed(2)]))}}function Dd(i){let e=i.phase==="air",t=g.y+g.hop+.95;for(let n of bn){if(n.state!=="wait"||n.falling||n.under)continue;let s=n.x-g.x,r=Math.abs(n.g-g.y)<.3&&!e&&g.hop<.15;if(n.kind==="coin"||n.kind==="button"||n.kind==="stack"){(n.air?Math.abs(s)<.45&&Math.abs(n.baseY-t)<1:r&&s<.32&&s>-.8)?$m(n):g.magnet>0&&!n.air&&!n.fork&&s>.3&&s<3&&Math.abs(n.g-g.y)<.3&&(n.state="fly",n.t=0,n.p0=n.mesh.position.clone());continue}if(!(!r&&n.kind!=="marble")&&(n.kind==="die"&&s<.55&&rS(n),n.kind==="marble"&&(n.trip?n.x-g.x<4.6:n.x-g.x<7.5)&&(n.state="roll",n.v=n.trip?-2:-1.6,n.t=0),n.kind==="spring"&&s<.2&&s>-.7&&fS(n),n.kind==="balloon"&&s<.35&&pS(n),n.kind==="bonuskey"&&s<.4&&(qc(n,6),i.phase="pickup",i.t=0,i.cranks=0,Y.events.push(["bonuskey",+Ke.toFixed(2)])),n.kind==="magnet"&&s<.4&&(n.state="held",n.t=0,g.magnet=4.5,g.magnetObj=n,wt(new P(g.x+.4,g.y+2.6,g.z),"MAGNET!","pop",1.1,.9),Y.events.push(["magnet",+Ke.toFixed(2)])),n.kind==="glue"&&s<-.05&&s>-.7&&(n.state="used",i.phase="glue",i.t=0,wt(new P(g.x,g.y+2.5,g.z),"STUCK!","pop",1.2,1),Y.events.push(["glue",+Ke.toFixed(2)])),n.kind==="mousetrap"&&s<.05&&s>-.7&&SS(n),n.kind==="jack"&&s<.95&&ES(n),n.kind==="goldkey"&&s<.5&&RS(n),i.phase!=="march"&&i.phase!=="air"))return}}function Vm(){let i=new P;return(g.nodes.windkey||g.nodes.head).getWorldPosition(i),i}function zc(i=3){let e=Vm();for(let t=0;t<i;t++){let n=new st(Cd,Wc);n.position.copy(e);let s=new P(-1-Xt()*2,1+Xt()*2,Xt()-.5),r=.25+Xt()*.2;Xc(n,.35,(o,a)=>{s.y-=8*a,o.mesh.position.addScaledVector(s,a),o.mesh.scale.setScalar(r*Yr(o.age,o.life))})}}function Ud(i){let e=ot;e.air={x0:g.x,y0:g.y,z0:g.z,x1:g.x+i.dx,y1:i.y1??g.y,z1:i.z1??g.z,h:i.h,dur:i.dur,t:0,kind:i.kind||"hop",onLand:i.onLand},e.phase="air",e.t=0,fa("jump",sn.jumpPeak-.38),g.sqVel=4}function Od(i,e){let t=e.air;t.t+=i;let n=Math.min(1,t.t/t.dur);g.x=t.x0+(t.x1-t.x0)*n,g.z=t.z0+(t.z1-t.z0)*n,g.y=t.y0+(t.y1-t.y0)*n+t.h*4*n*(1-n),g.actions.jump.time=sn.jumpPeak-.38+.76*n,nt(t.kind==="spring"?"grin":"o",1.2,1.1,{gaze:new oe(.006,.004)}),gi=Math.max(0,g.y-.4)*.75,!Cn&&Ld(g.x)>.56&&In(g.x+(Vn?.4:2.2),1),Dd(e),n>=1&&(g.y=t.y1,g.z=t.z1,g.sqVel=-5,_n(g.root.position,6,.8),Ye.kick=.4,e.phase="march",e.t=0,Ot("march",.08),g.yawT=ua,t.onLand&&t.onLand())}function fS(i){i.state="boing",i.t=0,Ye.hitStop=.04,Y.events.push(["spring",+Ke.toFixed(2)]),wt(new P(g.x+.3,g.y+2.5,g.z),"BOING!","pop",1.3,.9),Ud({dx:3.6,h:2.6,dur:1.05,kind:"spring"}),Bt=$t()*1.08,ot.air.onLand=()=>{Bt=$t()}}function pS(i){let e=ot;i.state="held",e.phase="air",e.t=0,Y.events.push(["balloon",+Ke.toFixed(2)]);let t=i.part("balloon_body");ht.attach(t),i.body=t,i.part("balloon_weight").visible=!1,e.air={x0:g.x,y0:g.y,z0:g.z,x1:g.x+3.9,y1:g.y,z1:g.z,h:0,dur:2.4,t:0,kind:"balloon",balloon:i},Ot("idle",.15),g.balloonArm=1,wt(new P(g.x+.3,g.y+3.4,g.z),"UP, UP!","pop",1.1,1)}var mS=Od;Od=function(i,e){let t=e.air;if(t.kind!=="balloon")return mS(i,e);t.t+=i;let n=Math.min(1,t.t/t.dur),s=n<.3?Math.sin(n/.3*Math.PI/2):1;t.popped||(g.x=t.x0+(t.x1-t.x0)*(n*n*(3-2*n)),g.y=t.y0+1.55*s+Math.sin(t.t*3)*.08,g.pitch.rotation.z=Math.sin(t.t*2.2)*.12),nt(n<.7?"grin":"o",1.1,1.1,{gaze:new oe(0,.01)});let r=new P;(g.nodes.Rightglove||g.nodes.head).getWorldPosition(r);let o=t.balloon.body;if(t.popped||o.position.set(r.x,r.y-.05,r.z),o.rotation.z=Math.sin(t.t*2.2+1)*.15,gi=Math.max(0,g.y-.4)*.75,!Cn&&Ld(g.x)>.56&&In(g.x+2.2,1),Dd(e),n>=1&&!t.popped&&(t.popped=!0,o.getWorldPosition(Yt),Yt.y+=1.5,Yn(Yt,9,.8,.9),ht.remove(o),Ye.hitStop=.05,Ye.kick=.5,wt(Yt.clone(),"POP!","pop",1.4,.8),g.balloonArm=0,t.dropT=0,nt("o",1.4,1.2,{worried:1}),Y.events.push(["balloon_pop",+Ke.toFixed(2)])),t.popped){if(t.dropT+=i,t.dropT<.25)return;t.vy=(t.vy||0)-18*i,g.y+=t.vy*i,g.y<=t.y0&&(g.y=t.y0,g.pitch.rotation.z=0,g.sqVel=-6,_n(g.root.position,8,1),Ye.kick=.6,Ye.hitStop=.05,e.phase="march",e.t=0,Ot("march",.08),g.yawT=ua)}};function gS(i,e){let t=e.fork;e.t<.05&&(g.current.timeScale=.3,Y.events.push(["fork",+Ke.toFixed(2)]),Bt=$t()*.86,In(t.x+1.4,.8)),g.current.timeScale=Math.max(0,g.current.timeScale-i*3),g.current.timeScale===0&&g.clip!=="idle"&&Ot("idle",.25),g.yawT=.55;let n=e.t<1?1:-1;nt("o",1,1,{gaze:new oe(.01,n>0?.012:-.004)}),g.headTurnT=n>0?-.35:.25,!e.pick&&e.t>1.2&&(e.pick=t.pick),e.pick&&!t.decided&&(t.decided=!0,t.pick=e.pick,e.ft=e.t,g.headTurnT=0,Y.events.push(["fork_pick",e.pick,+Ke.toFixed(2)]),nt("grin",1),g.sqVel=3),t.decided&&e.t-e.ft>.3&&(Bt=$t(),g.yawT=ua,t.pick==="up"?(Ud({dx:t.x0+.55-g.x,y1:Om,z1:vd+.1,h:.9,dur:.6}),t.on=!0):(e.phase="march",e.t=0,Ot("march",.1)))}function _S(i,e){var r;if(Y.catTail){let o=0;Y.catTail.traverse(a=>{/^cat_tail\d$/.test(a.name)&&(a.rotation.z=Math.sin(e*1.6-o*.55)*(.12+o*.02),o++)}),Y.catTail.position.x+=(Ft+2.8-Y.catTail.position.x)*i*.5,Y.catTail.position.y=oa+5.6+Math.sin(e*.8)*.15}let t=Y.catHead;if(!t)return;let n=ot.cat,s=n?n.state==="peek"?Math.min(1,(Ke-((r=t.userData).t0??(r.t0=Ke)))/1.4):1:0;t.position.y=-1.6+1.75*(s*s*(3-2*s))+Math.sin(e*1.2)*.04;for(let o of[-1,1]){let a=t.getObjectByName("cat_pupil"+o),l=ds.clamp((g.x-t.position.x)*.06,-.18,.18);a.position.x=o*.62+l,a.position.y=.25-.08;let c=t.getObjectByName("cat_lid"+o),u=e%3.1<.14?1:0;c.scale.y=u?1.9:n&&n.state==="smug"?1.5:.6}t.rotation.z=Math.sin(e*.9)*.06}function xS(i,e){let t=e.cat,n=Y.catPaw;if(t.t+=i,g.current.timeScale=Math.max(0,g.current.timeScale-i*4),g.current.timeScale===0&&g.clip!=="idle"&&Ot("idle",.2),g.yawT=.4,nt("o",1.4,1.2,{worried:1,gaze:new oe(-.004,.014)}),g.sqT=Math.sin(t.t*40)*.02,t.t<.05&&(Bt=$t()*1.05,In(g.x+.8,.6),wt(new P(g.x-.3,g.y+2.6,g.z),"uh-oh","pop",1,1),Y.events.push(["cat_paw",+Ke.toFixed(2)])),n.position.x=g.x+.25,t.t<.7){let s=t.t/.7,r=1-Math.pow(1-s,3);n.position.y=9-3.3*r,n.rotation.z=1.3-.45*r}else if(t.t<1.15)n.position.y=5.7+Math.sin(t.t*30)*.03,n.rotation.z=.85+(t.t-.7)*.5;else{let s=Math.min(1,(t.t-1.15)/.17);if(n.rotation.z=1.07-1.9*s*s,n.position.y=5.7,s>.55&&!t.hit){t.hit=!0,Ye.hitStop=.09,Ye.kick=1;let r=Fm();Yn(r,9,.8,1),_n(g.root.position,8,1.2),wt(r.clone().add(new P(.6,1.2,0)),"SWAT!","pop",1.6,1),Wm({vx:2.3,vy:5,vz:1,target:Y.toybox,spin:9}),t.state="smug",Y.events.push(["swat",+Ke.toFixed(2)])}}}function yS(i){let e=Y.catPaw;if(!e||!ot.cat||ot.cat.state!=="smug")return;ot.cat.t+=i;let t=Math.min(1,Math.max(0,ot.cat.t-1.6)/.8);e.rotation.z=-.83+.4*t,e.position.y=5.7+4*t*t}function Wm({vx:i,vy:e,vz:t,target:n,spin:s}){let r=ot;r.phase="fly",r.t=0;let o=n.position.x,a=n.position.z,l=ca+1.25,c=1.45;r.fl={p0:new P(g.x,g.y+g.hop,g.z),vx:(o-g.x)/c,vz:(a-g.z)/c,vy:(l-(g.y+g.hop)+.5*14*c*c)/c,T:c,spin:s,box:n},fa("jump",sn.jumpPeak),g.actions.jump.timeScale=0,g.hop=0,_s=1.6,gi=ca-.35,In(o-.2,1.6),Bt=$t()*.88,g.off=!0}function vS(i,e){let t=e.fl,n=Math.min(e.t,t.T);if(e.landed||(g.x=t.p0.x+t.vx*n,g.z=t.p0.z+t.vz*n,g.y=t.p0.y+t.vy*n-7*n*n),e.landed?Xm(i,Ke):(g.pitch.rotation.x=Math.min(1,e.t/t.T)*Math.PI*(t.spin>0?3:1),g.pitch.rotation.z=Math.sin(e.t*7)*.3),nt("o",1.5,1.25,{worried:1}),e.t>=t.T&&!e.landed){e.landed=!0,g.yaw=g.yawT=Math.PI/2,g.x=t.box.position.x,g.z=t.box.position.z-.1,g.pitch.rotation.x=Math.PI,g.pitch.rotation.z=0,g.y=t.box.position.y+2.8,g.inBox=!0,g.boxT=0,Ye.hitStop=.07,Ye.kick=.9;let s=t.box.position.clone();s.y+=1.4,Yn(s,8,.8,.9),wt(s.clone().add(new P(.9,1.4,.5)),"POMF!","pop",1.5,1),Y.events.push(["toybox",+Ke.toFixed(2)]),t.box.userData.bounce=1}e.landed&&e.t>t.T+1&&(e.res||(e.res=!0,ha()),e.phase="result")}function Xm(i,e){g.boxT=(g.boxT||0)+i,nt("o",1,1,{worried:1}),g.yawT=Math.PI/2,g.pitch.rotation.x=Math.PI,g.pitch.rotation.z=Math.sin(e*2.4)*.06}function MS(i,e){if(e.t<.45){g.x+=Lc.march_speed*.9*i*(1-e.t/.45);return}e.e1||(e.e1=!0,g.current.timeScale=0,Ot("idle",.2),Y.events.push(["edge_look",+Ke.toFixed(2)]),Bt=$t()*.8,In(g.x,.6),g.sqVel=-2),e.t<1.2?(nt("o",1,1,{gaze:new oe(0,-.014)}),g.headDownT=.5,g.yawT=.9):e.t<1.9?(g.headDownT=0,g.yawT=.2,g.headTurnT=0,nt("smile",-.4,1.1,{worried:1,gaze:new oe(0,0)}),e.e2||(e.e2=!0,wt(new P(g.x+.6,g.y+2.4,g.z),"gulp","pop",.9,.9),g.sqVel=2.5)):e.e3||(e.e3=!0,g.sqVel=-6,Wm({target:Y.toybox,spin:0}))}function SS(i){let e=ot;i.state="snap",i.t=0,e.phase="trap",e.t=0,Y.events.push(["snap",+Ke.toFixed(2)]),g.current.timeScale=0,Ye.hitStop=.1,Ye.kick=1,g.trapObj=i}function bS(i,e){let t=g.trapObj;if(e.t>.07&&!e.t1){e.t1=!0;let n=t.mesh.position.clone();n.y+=.4,Yn(n,8,.7,.8),wt(n.clone().add(new P(.4,1.6,0)),"SNAP!","pop",1.7,1),g.sqVel=-6,g.hopV=4.2,Ai=.7,Bt=$t()*.82,er=.9,In(g.x+.5,.6);let s=g.nodes.mixamorigLeftFoot||g.nodes.mixamorigLeftToeBase;s&&(s.attach(t.mesh),t.mesh.scale.multiplyScalar(.9),g.trap=t,TS(t)),g.hurt=!0,Ot("idle",.1)}if(e.t<.07){nt("o",1.4,1.2);return}qm(i,Ke,1),e.t>1&&(Ai=1),e.t>2.6&&!e.res&&(e.res=!0,ha(),e.phase="result")}function TS(i){let e=bn.indexOf(i);e>=0&&bn.splice(e,1)}function qm(i,e,t){g.yawT=.45,nt("o",1.3,.35,{worried:1});let n=e*3.2%1;g.hop<=.001&&g.hopV===0&&(g.hopV=2.6*t+.6,g.sqVel-=2),g.x+=Math.sin(e*1.3)*i*.5*t,(g.owT=(g.owT||0)-i)<0&&(g.owT=1.1+Xt(),wt(new P(g.x-.5+Xt(),g.y+2.3,g.z),Xt()<.5?"ow!":"OW!","pop",.8,.7))}function ES(i){let e=ot;i.state="used",e.jack=i,e.phase="jack",e.t=0,Y.events.push(["jack",+Ke.toFixed(2)]),wS(e,i)}function wS(i,e){i.ja={x0:g.x,x1:e.x-.05,t:0},fa("jump",sn.jumpPeak-.38)}function AS(i,e){let t=e.jack,n=e.ja;if(n.t+=i,n.t<.55){let l=n.t/.55;g.x=n.x0+(n.x1-n.x0)*l,g.y=.95*l+.9*4*l*(1-l),g.actions.jump.time=sn.jumpPeak-.38+.76*l;return}n.on||(n.on=!0,g.y=.95,g.sqVel=-4,Ot("idle",.15),Bt=$t()*.9,In(g.x+.4,.6),g.yawT=.4);let s=t.part("jackb_crank"),r=n.t<1.35?(n.t-.55)/.8:1;if(n.t<1.35){s.rotation.x-=i*(6+30*r),t.mesh.rotation.z=Math.sin(n.t*40)*.04*r,g.sqT=Math.sin(n.t*40)*.03*r,nt("o",1+r*.4,1.1,{worried:r,gaze:new oe(0,-.01)}),Math.random()<i*6&&wt(new P(g.x-1+Xt()*2,g.y+2.4,g.z),"\u266A","pop",.7,.6);return}n.boing||(n.boing=!0,Ye.hitStop=.06,Ye.kick=1,t.mesh.rotation.z=0,g.sqT=0,_n(t.mesh.position,10,1.3),wt(new P(g.x+.6,g.y+2.4,g.z),"BOING!","pop",1.8,1),Y.events.push(["launch",+Ke.toFixed(2)]),fa("jump",sn.jumpPeak-.1),g.actions.jump.timeScale=.15,nt("grin",1.5,1.2),_s=2.4,gi=9-.2,Bt=$t()*1.15);let o=n.t-1.35;t.part("jackb_lid").rotation.x=-Math.min(2.2,o*18);let a=t.part("jackb_spring");a.scale.y=Math.min(6,1+o*30),t.part("jackb_pad").position.y=.95+Math.min(2.4,o*12),g.y=.95+o*14-2*o*o,g.pitch.rotation.z=Math.sin(o*8)*.1,o>.95&&(g.pitch.rotation.z=0,Ym(Y.round.bonus,g.x))}function RS(i){let e=ot;i.state="used",e.gk=i,e.phase="gold",e.t=0,Y.events.push(["golden_key",+Ke.toFixed(2)])}function Hc(i){let e=g.nodes.windkey;e&&(g.goldKey=i,e.traverse(t=>{var n;t.isMesh&&((n=t.userData).mat0??(n.mat0=t.material),t.material=i?Y.goldMat||(Y.goldMat=Vt(It("#ffcf3a"))):t.userData.mat0)}))}function CS(i,e){let t=e.gk;if(g.current.timeScale=Math.max(0,g.current.timeScale-i*5),g.current.timeScale===0&&g.clip!=="idle"&&g.clip!=="win"&&Ot("idle",.2),e.t<.6){g.yawT=.35,nt("o",1.5,1.25,{gaze:new oe(.01,0)});let s=e.t/.6;t.mesh.position.y=t.baseY+s*1.2,t.mesh.rotation.y=s*6,e.t<.05&&(Bt=$t()*.82,In(g.x+.6,.5),wt(new P(g.x+.8,g.y+2.9,g.z),"THE GOLDEN KEY!","pop",1.4,1.6));return}if(!e.g1){e.g1=!0;let s=t.mesh.position.clone();Yn(s,11,1,1.1),QM(t),Hc(!0),Ye.hitStop=.08,Ye.kick=1,g.sqVel=6,Fd()}let n=Math.floor((e.t-.6)/.2);if(e.t<1.6){n>=e.cranks&&e.cranks<5&&(e.cranks++,g.keyTarget+=Math.PI/2,g.sqVel-=3,Pt.crank(),zc(4)),nt("grin",1.4);return}e.g2||(e.g2=!0,Ot("win",.1),Kt+=0),e.t>2.4&&!e.g3&&(e.g3=!0,wt(new P(g.x,g.y+2.8,g.z),"WHIRR!","pop",1.4,.9),_s=1.8,gi=9-.2,Bt=$t()*1.15,fa("jump",sn.jumpPeak),g.actions.jump.timeScale=0,e.gy=0),e.g3&&(e.gy+=i,g.keyAng+=i*40,g.keyTarget=g.keyAng,g.y=.4*e.gy+4.5*e.gy*e.gy,Math.random()<i*20&&zc(1),g.y>11&&Ym(Y.round.bonus,g.x))}function Fd(){Y.cuckooT=2.2}var q={on:!1},nn=9,wi={plane:new Pn,mats:null};function Md(i){if(i&&!wi.mats){let e=new P(-Math.sin(Math.PI*40/180),0,Math.cos(Math.PI*40/180));wi.plane.setFromNormalAndCoplanarPoint(e,new P(q.ox+40-1.9,nn,0)),wi.mats=new Set;for(let t of[q.engine,...q.wagons.map(n=>n.mesh)])t.traverse(n=>{if(n.material&&!Array.isArray(n.material)){let s=n.material;n.material=s.clone(),n.material.onBeforeCompile=s.onBeforeCompile,s.customProgramCacheKey&&(n.material.customProgramCacheKey=s.customProgramCacheKey),n.material.userData=s.userData,wi.mats.add(n.material)}});g.root.traverse(t=>{if(t.material)for(let n of[].concat(t.material))wi.mats.add(n)});for(let t of wi.mats)t.clippingPlanes=[wi.plane],t.needsUpdate=!0}else if(!i&&wi.mats){for(let e of wi.mats)e.clippingPlanes=null,e.needsUpdate=!0;wi.mats=null}i&&(oi.localClippingEnabled=!0)}function IS(){if(Md(!1),!(!q.on&&!q.wagons)){for(let i of q.wagons||[])ht.remove(i.mesh);q.engine&&ht.remove(q.engine),q.wagons=null,q.engine=null,q.on=!1,Y.bonusSet&&(Y.bonusSet.visible=!1),Nd()}}function Ym(i,e){let t=ot;t.phase="bonus",t.t=0,Y.events.push(["bonus_start",i.tier,+Ke.toFixed(2)]),q.on=!0,q.cfg=i,q.total=0,q.t2=0,q.ox=e-2,Y.bonusSet.visible=!0,Y.bonusSet.position.x=q.ox,q.engine=Xn.engine.clone(!0),ht.add(q.engine),q.ex=q.ox+0,q.v=0,q.st=0,q.evt=null,q.state="land",q.wagons=[];for(let n of i.start)Km(n,!1);q.engine.position.set(q.ex,nn,0);for(let n=0;n<4;n++){let s={node:new Dt};s.node.position.set(q.ox+7+n*8,nn+1.15,-.75),ht.add(s.node),Oc.push(s.node),kc(s.node,i.stations[n][0]==="add"?"+ CARRIAGE":"UPGRADE",null,"sign")}g.y=nn+6,g.x=q.ex-.62,g.z=0,g.hop=0,g.pitch.rotation.set(0,0,0),Ot("idle",.1),_s=3,gi=nn-.5,Bt=$t()*1.15,Yc=1.4,er=.55,In(q.ex+2,.4),Kc=1.6,Pt.setWin(Kt,!1),wt(new P(q.ex+2.5,nn+3.2,0),"TOP SHELF EXPRESS!","pop",1.6,1.8),i.tier===3&&wt(new P(q.ex+2.5,nn+2.4,0),"TIER 3","pop",1.2,1.8)}function Km(i,e){let t=Xn.wagon.clone(!0);ht.add(t);let n={mesh:t,v:i,drop:e?1:0,dy:e?5:0,vy:0,spin:0};return n.label=kc(t.getObjectByName("wag_block"),"x"+i,null,"cargo"),n.label.size=1.9,q.wagons.push(n),n}function PS(i,e){let t=q.engine;if(q.state==="land")g.y-=i*11,g.y<=nn+.42&&(g.y=nn+.42,g.sqVel=-6,Ye.kick=.6,_n(new P(g.x,nn+.5,0),6,.8),q.state="ride",q.t=0,Y.events.push(["bonus_ride",+Ke.toFixed(2)]));else if(q.state==="ride"){q.t+=i;let n=q.ox+7+q.st*8-.6,s=q.evt?0:q.st>=4?Math.min(6.6,Math.max(0,(q.ox+36.5-t.position.x)*1.5)):t.position.x>n-1.4?2:6.6;q.v+=(s-q.v)*(1-Math.exp(-i*3)),t.position.x+=q.v*i,!q.evt&&q.st<4&&t.position.x>=n&&(q.evt={t:0,s:q.cfg.stations[q.st]},q.st++),q.evt&&LS(i),q.st>=4&&!q.evt&&t.position.x>q.ox+36.2&&q.v<.35&&(q.state="tally",q.t=0,q.ti=-1,q.run=0,q.v=0,Ye.kick=.3,Y.events.push(["bonus_tally",+Ke.toFixed(2)])),Math.random()<i*(2+q.v*2)&&Rm()}else if(q.state==="tally"){q.t+=i;let n=q.wagons.length,s=Math.max(.22,Math.min(.42,2.6/n)),r=Math.floor((q.t-.45)/s);if(r>q.ti&&r<n){q.ti=r;let a=q.wagons[r];a.spin=1,q.run+=a.v,Ye.kick=.25+r*.03,_n(a.mesh.position.clone().setY(nn+1),4,.6),wt(new P(a.mesh.position.x,nn+2.3,.4),"x"+a.v,"pop",1.1,.8),Pt.setWin(Kt+q.run*ai,!1,"x"+q.run),Y.events.push(["tally",a.v,+Ke.toFixed(2)])}let o=q.ti<0?t.position.x-.5:q.wagons[Math.min(q.ti,n-1)].mesh.position.x+1;q.total||(Ft+=(o-Ft)*(1-Math.exp(-i*3.5)),Cn=null),!q.total&&q.ti>=n-1&&q.t>.45+n*s+.25&&(q.total=q.wagons.reduce((a,l)=>a+l.v,0),Kt+=q.total*ai,Pt.setWin(Kt,!1,"x"+q.total),Ye.kick=.9,Ye.hitStop=.08,Y.events.push(["bonus_total",q.total,+Ke.toFixed(2)]),wt(new P(t.position.x-1.5,nn+3.2,.5),"TOTAL x"+q.total,"pop",2,2),q.t2=0,In(q.ox+38.2,1)),q.total&&(q.t2+=i,q.t2>1.3&&(q.state="tunnel",q.t=0,q.t2=0,q.v=0))}else if(q.state==="tunnel"){q.t+=i,q.v=Math.min(5.5,q.v+i*6),t.position.x+=q.v*i,Math.random()<i*8&&Rm();let n=q.wagons[q.wagons.length-1];Md(!0);for(let s of q.wagons)s.mesh.position.x+s.mesh.position.z*1.19>q.ox+38.3&&(s.label.gone=!0);n.mesh.position.x>q.ox+40.4&&(q.t2+=i,q.t2>.45&&(q.state="out",q.t=0,Md(!1),g.root.visible=!0,g.x=q.ox+43.7,g.y=nn+.6,g.z=.6,g.pitch.rotation.set(0,0,0),_n(new P(q.ox+44,nn+1,.8),12,1.4),wt(new P(g.x+1.2,nn+3,.8),"WHEEE!","pop",1.4,1),_s=1.6,gi=0,Kc=0,Yc=Y.round.cam.y,er=1.05,Bt=$t()*.9,In(q.ox+44.4,.6),q.vy=7))}else if(q.state==="out"){if(q.t+=i,q.vy-=14*i,g.y+=q.vy*i,g.x+=2.6*i,_s=6,gi=Math.max(0,g.y-1.2),q.t>.5&&(Ft+=(g.x+.6-Ft)*(1-Math.exp(-i*4)),Cn=null),g.z+=(js-g.z)*i*2,g.pitch.rotation.x=Math.min(1,q.t/1.2)*Math.PI*2,nt("grin",1.4,1.2),g.y<=0){g.y=0,g.z=js,g.pitch.rotation.set(0,0,0),g.sqVel=-6,Ye.kick=.8,Ye.hitStop=.06,_n(g.root.position,10,1.3),e.phase="bigwin",e.t=.6,e.boing=!1,q.state="done",Y.bonusSet.visible=!1;for(let n of q.wagons)n.mesh.visible=!1;t.visible=!1,Nd(),Y.events.push(["bonus_end",+Ke.toFixed(2)])}return}if(q.wagons.forEach((n,s)=>{let r=t.position.x-1.95-s*1.65;n.mesh.position.x=r,n.mesh.position.z=0,n.drop&&(n.vy-=22*i,n.dy+=n.vy*i,n.dy<=0&&(n.dy=0,n.vy<-3?(n.vy=-n.vy*.3,Ye.kick=.4,_n(n.mesh.position,5,.8)):n.drop=0)),n.mesh.position.y=nn+n.dy,n.mesh.visible=q.state==="ride"||q.state==="land"||q.state==="tally"||n.mesh.position.x<q.ox+40.4,n.mesh.traverse(a=>{/^wag_wheel\d$/.test(a.name)&&(a.rotation.z=-t.position.x/.2)});let o=n.mesh.getObjectByName("wag_cargo");n.spin>0?(n.spin=Math.max(0,n.spin-i*2.2),o.rotation.y=n.spin*Math.PI*4,o.scale.setScalar(1+Math.sin(n.spin*Math.PI)*.4)):(o.rotation.y=Math.sin(Ke*2+s)*.15,o.position.y=.82+Math.abs(Math.sin(Ke*6+s))*.04*q.v)}),t.traverse(n=>{/^eng_wheel\d$/.test(n.name)&&(n.rotation.z=-t.position.x/.26)}),t.position.y=nn+Math.abs(Math.sin(t.position.x*3))*.02*q.v,t.visible=q.state==="ride"||q.state==="land"||q.state==="tally"||t.position.x<q.ox+41,(q.state==="ride"||q.state==="tunnel"||q.state==="tally")&&(g.x=t.position.x-.62,g.y=t.position.y+.42,g.z=0,g.yawT=1,g.root.visible=t.visible,g.wave=1,nt(q.evt?"o":"grin",1.2,1.1,{gaze:new oe(-.006,.004)}),!Cn&&q.state!=="tally")){let n=Math.min(t.position.x+1.6,q.state==="tunnel"?q.ox+38.2:1e9);Ft+=(n-Ft)*(1-Math.exp(-i*2.5))}}function LS(i){let e=q.evt;e.t+=i;let[t,n,s]=e.s;if(e.t<i*1.5&&(Ye.kick=.3,wt(new P(q.engine.position.x+.6,nn+2.6,0),t==="add"?"+ CARRIAGE!":"UPGRADE!","pop",1.3,1.1),Y.events.push(["station",t,+Ke.toFixed(2)])),e.t>.35&&!e.done)if(e.done=!0,t==="add")Km(n,!0).mesh.position.set(q.engine.position.x-1.95-(q.wagons.length-1)*1.65,nn+5,0);else{let r=q.wagons[n];r.v=s,r.spin=1,r.label.el.textContent="x"+s;let o=r.mesh.position.clone();o.y+=1.2,Yn(o,8,.7,.8)}e.t>.8&&(q.evt=null)}function Rm(){q.engine.getObjectByName("eng_chimney").getWorldPosition(Yt),Yt.y+=.45;let e=new st(Dm,Id);e.position.copy(Yt);let t=1.6+Xt();Xc(e,.7,(n,s)=>{n.mesh.position.y+=s*1.2,n.mesh.position.x-=s*q.v*.8,n.mesh.scale.setScalar(t*Yr(n.age,n.life))})}function NS(i,e){if(e.ct+=i,e.cele==="hop"){!e.c1&&e.ct>.15&&(e.c1=!0,g.headTurnT=0,g.wound=!1,Ot("jump",.15),g.actions.jump.timeScale=1.2,nt("grin",1.3));return}e.cele==="dance"&&(!e.c1&&e.ct>.15&&(e.c1=!0,g.headTurnT=0,g.wound=!1,g.yawT=.3,Ot("dance",.2),g.E=.6,nt("grin",1.2),wt(new P(g.x+1.1,g.y+2.3,g.z),"NICE WIN!","pop",1.9,1.6),Fd()),e.c1&&nt(e.ct%1.2<.6?"grin":"smile",1))}function $m(i){i.state="collect",i.t=0,i.vy=3.4,Kt+=i.value*ai,Pt.setWin(Kt),Y.events.push([i.kind,i.value,+Ke.toFixed(2)]);let e=i.mesh.position.clone();e.y+=.3,Yn(e,i.kind==="stack"?7:4,i.kind==="stack"?.8:.5,.55),wt(e.clone().add(new P(.75,1.9,0)),"+"+i.value+"x","pop",i.kind==="stack"?1.6:i.kind==="button"?1:1.3,1.1)}function DS(i){Pt.setWin(Kt,!1,"x"+i.value);let e=i.mesh.position.clone();e.y+=.55,Yn(e,7,.75,.7),wt(e.clone().add(new P(0,.5,0)),"x"+i.value,"pop",2,1.4),Y.events.push(["die",i.value,+Ke.toFixed(2)])}function ha(){Y.round&&Y.round.pay!==void 0&&(Y.events.push(["paycheck",+(Kt/ai).toFixed(4),Y.round.pay/100,Y.round.ending,Math.abs(Kt/ai-Y.round.pay/100)>.011?JSON.stringify(Y.round)+" GOT "+JSON.stringify(Y.events.filter(i=>["coin","button","stack","die","fork_pick","magnet","trip"].includes(i[0])&&i[i.length-1]>=Y.t0round)):""]),Kt=Y.round.pay/100*ai),Pt.setWin(Kt,!1),Y.events.push(["result",+(Kt/ai).toFixed(2),+Ke.toFixed(2)]),ae.round&&!ae.round.replay?KS():ae.round&&ae.round.replay&&!ae.round.shown&&(ae.round.shown=!0,setTimeout(()=>s0(!0),3200))}function US(i){let e=ot;e.phase="trip",e.t=0,e.tr={impact:!1,marble:i},bd("trip",sn.tripStart,.08),g.current.timeScale=1,Y.events.push(["trip",+Ke.toFixed(2)]),i.state="shoot",i.v=-2.6,i.t=0,Ai=.65,Bt=$t()*.82,er=.8,In(g.x+1.6,.9)}function OS(i,e){let t=e.tr,n=g.actions.trip;if(nt("o",1.3,1.15,{worried:1,gaze:new oe(0,-.01)}),!t.impact&&n.time>=sn.tripImpact){t.impact=!0,e.ti=e.t,Ye.hitStop=.09,Ye.kick=1,Ai=1;let s=new P;g.nodes.head.getWorldPosition(s),_n(new P(s.x,g.y,s.z),10,1.3),Yn(s.clone().setY(g.y+.4),6,.6,.6),Kt=Kt/2,Pt.setWin(Kt,!1,"\xF72"),Y.events.push(["faceplant",+Ke.toFixed(2)]),wt(s.clone().add(new P(.3,1.4,0)),"THUD","pop",1.3,.9)}t.impact&&(g.lying=1,e.t-e.ti>1.1&&!e.res&&(e.res=!0,ha()),e.t-e.ti>1.2&&(e.phase="result"))}var Wr=[];function FS(i,e){if(g.lyingT=(g.lyingT||0)+i,nt(g.lyingT>1.4?"smile":"o",.6,g.lyingT>1.4?.6:1,{worried:.8,sleepy:1,gaze:new oe(Math.sin(e*3)*.008,Math.cos(e*3)*.006)}),!Wr.length)for(let n=0;n<3;n++){let s=new st(Cd,Wc);s.scale.setScalar(.55),ht.add(s),Wr.push(s)}let t=new P;g.nodes.head.getWorldPosition(t),Wr.forEach((n,s)=>{let r=e*3.2+s*2.09;n.position.set(t.x+Math.cos(r)*.42,t.y+.55+Math.sin(r*2)*.05,t.z+Math.sin(r)*.42),n.rotation.z=e*4,n.visible=g.lyingT<6})}function Zm(){for(let i of Wr)ht.remove(i);Wr.length=0,g.lyingT=0}var sn={};function Sd(){let i=new P;return g.nodes.mixamorigHips.getWorldPosition(i),i}function bd(i,e=0,t=.1){g.root.updateMatrixWorld(!0);let n=Sd(),s=g.actions[i];for(let o of Object.values(g.actions))o!==s&&o.stop();s.reset(),s.enabled=!0,s.setEffectiveWeight(1),s.timeScale=1,s.play(),s.time=e,g.current=s,g.clip=i,g.mixer.update(0),g.root.updateMatrixWorld(!0);let r=Sd();g.x+=n.x-r.x,g.root.position.x=g.x,g.root.updateMatrixWorld(!0)}function fa(i,e){Ot(i,.08);let t=g.actions[i];t.time=Math.max(0,e),t.timeScale=0}function BS(){let i=(h,d=120)=>{let f=g.actions[h];for(let _ of Object.values(g.actions))_.stop();f.reset(),f.play();let p=f.getClip().duration,y=[];for(let _=0;_<=d;_++){f.time=p*_/d,g.mixer.update(0),g.root.updateMatrixWorld(!0);let m=Sd();y.push([f.time,m.y-g.root.position.y,m.x-g.root.position.x])}return f.stop(),{d:p,out:y}},e=i("trip"),t=Math.min(...e.out.map(h=>h[1])),n=e.out[0][1];sn.tripStart=0,sn.tripImpact=(e.out.find(h=>h[1]<t+(n-t)*.12)||e.out[e.out.length-1])[0],sn.tripDur=e.d;let s=i("getup"),r=Math.min(...s.out.map(h=>h[1])),o=Math.max(...s.out.map(h=>h[1])),a=s.out.find(h=>h[1]>r+(o-r)*.08)||s.out[0];sn.getupStart=Math.max(0,a[0]-.4);let l=s.out.find(h=>h[1]>r+(o-r)*.97)||s.out[s.out.length-1];sn.getupEnd=Math.min(s.d,l[0]+.3);let c=i("jump"),u=Math.max(...c.out.map(h=>h[1]));sn.jumpPeak=c.out.find(h=>h[1]>=u-1e-4)[0],sn.jumpDur=c.d,g.actions.idle.reset(),g.actions.idle.play(),g.current=g.actions.idle,g.clip="idle",g.mixer.update(0),Y.clipInfo=sn}var Ai=1;function Jm(i,e){g.yaw+=(g.yawT-g.yaw)*(1-Math.exp(-i*12));let t=g.sqT||0;g.sqVel+=(-(g.sq-t)*260-g.sqVel*14)*i,g.sq+=g.sqVel*i,g.hopV-=14*i,g.hop+=g.hopV*i,g.hop<0&&(g.hopV<-2.5&&(g.sqVel-=3,_n(g.root.position,5,.7)),g.hop=0,g.hopV=0);let n=Math.max(.75,1-g.sq);g.squash.scale.set(1/Math.sqrt(n),n,1/Math.sqrt(n)),g.root.position.set(g.x,g.y+g.hop,g.z),g.root.rotation.y=g.yaw;let s=g.actions.march.time/g.actions.march.getClip().duration;if(g.clip==="march"&&ot.phase==="march"){let o=Math.floor(s*2);o!==g.lastStep&&(g.lastStep=o,Gn.play("step"+Math.floor(Math.random()*4),{vol:.35+.4*g.ts,rate:.85+.25*g.ts,gap:.12}))}Gn.musicRate(["march","glue","air"].includes(ot.phase)?.78+.22*Math.min(1,g.E*1.6):ot.phase==="bonus"?1.08:1);let r=g.sway*.11*Math.sin(s*Math.PI*4+.6)+(g.wound||ot.phase==="bigwin"||ot.phase==="wound"||ot.rd!==void 0?Math.sin(e*3.2)*.05*Math.min(1,g.sway/.18):0);if(!["air","fly","bonus"].includes(ot.phase)&&!g.inBox&&(g.pitch.rotation.z=r,g.pitch.rotation.x=0),g.magnet>0){g.magnet-=i;let o=g.magnetObj;if(o){let a=new P;g.nodes.head.getWorldPosition(a),o.held2||(o.held2=!0,o.part("mag_stand").visible=!1),o.mesh.position.lerp(a.add(new P(0,.05,0)),1-Math.exp(-i*10)),o.part("mag_body").rotation.y+=i*6,g.magnet<=0&&(qc(o,5),g.magnetObj=null)}}if(Y.toybox&&Y.toybox.userData.bounce){let o=Y.toybox.userData;o.bounce=Math.max(0,o.bounce-i*1.6);let a=0;Y.toybox.traverse(l=>{var c;/^toybox_soft\d$/.test(l.name)&&(l.position.y=((c=l.userData).y0??(c.y0=l.position.y))+Math.sin(o.bounce*14+a)*.25*o.bounce,a++)}),Y.toybox.getObjectByName("toybox_lid").rotation.x=-1.9-Math.sin(o.bounce*10)*.2*o.bounce}}var yd=+(qt.get("ht")||.75),kS=+(qt.get("cheat")||.5);function jm(i,e){let t=g.nodes;g.headTurn=(g.headTurn||0)+((g.headTurnT||0)-(g.headTurn||0))*(1-Math.exp(-i*6)),g.headDown=(g.headDown||0)+((g.headDownT||0)-(g.headDown||0))*(1-Math.exp(-i*6));let n=Math.max(0,Math.min(1,(g.yaw-.9)/.6))*kS*(g.lying>.5||g.inBox?0:1);if(t.mixamorigSpine1&&n&&t.mixamorigSpine1.rotateY(-n*.55),t.mixamorigHead&&n&&t.mixamorigHead.rotateY(-n*.5),t.mixamorigHead&&Math.abs(g.headTurn)>.001&&t.mixamorigHead.rotateY(g.headTurn),t.mixamorigHead&&g.headDown>.001&&t.mixamorigHead.rotateX(g.headDown),g.lying>.5&&t.mixamorigHead){let s=Math.min(1,(g.lyingT||0)*1.5);t.mixamorigHead.rotateY(-1*s),t.mixamorigHead.rotateX(-.35*s)}if(g.hurt){for(let[s,r]of[["mixamorigLeftUpLeg",-1.25],["mixamorigLeftLeg",1.6]])t[s]&&t[s].rotateX(r);for(let[s,r]of[["mixamorigLeftArm",1],["mixamorigRightArm",-1]])t[s]&&(t[s].rotateZ(r*.55),t[s].rotateX(.7))}if(g.balloonArm>0&&t.mixamorigRightArm&&(t.mixamorigRightArm.rotateZ(1.9),t.mixamorigLeftUpLeg&&(t.mixamorigLeftUpLeg.rotateX(Math.sin(e*6)*.35),t.mixamorigRightUpLeg.rotateX(-Math.sin(e*6)*.35))),g.wave&&t.mixamorigRightArm&&(t.mixamorigRightArm.rotateZ(2),t.mixamorigRightForeArm&&t.mixamorigRightForeArm.rotateZ(.5+Math.sin(e*9)*.5)),g.inBox)for(let[s,r]of[["mixamorigLeftUpLeg",0],["mixamorigRightUpLeg",Math.PI]])t[s]&&t[s].rotateX(Math.sin(e*6+r)*.5);g.wave=0,ot.phase==="glue"&&t.mixamorigLeftUpLeg&&t.mixamorigSpine1&&t.mixamorigSpine1.rotateX(.25*Math.sin(e*9))}function zS(i,e){var l,c,u;for(let h of bt.L0_top||[]){h.rotation.set(0,0,0),h.rotateY(e*.6),h.rotateX(.18+Math.sin(e*.9)*.05);let d=h.children.find(f=>f.name==="L0_top_body");d&&(d.rotation.y=e*9)}for(let h of bt.L0_jack||[])h.rotation.z=Math.sin(e*2.4)*.05;for(let h of bt.L1_mobile||[])h.rotation.y=e*.35;for(let[h,d]of bt.mobHang.entries())d.rotation.z=Math.sin(e*1.3+h)*.12;for(let h of bt.L2_pendulum||[])h.rotation.z=Math.sin(e*2.6)*.32;for(let h of bt.L2_clock_hand||[])h.rotation.z=-e*.2;for(let h of bt.L1_bunting||[])h.rotation.x=Math.sin(e*.9)*.06,h.position.y=5.9+Math.sin(e*1.3)*.03;for(let h of bt.L1_teddy||[])h.rotation.z=Math.sin(e*1.1)*.08;for(let h of bt.L1_train||[])(l=h.userData).x0??(l.x0=h.position.x),h.position.x=h.userData.x0+Math.sin(e*.45)*1.3,h.rotation.z=Math.cos(e*.45)*.03;for(let h of[...bt.L3_cloud0||[],...bt.L3_cloud1||[]])(c=h.userData).x0??(c.x0=h.position.x),h.position.x=h.userData.x0+(e*.35+h.userData.x0*3)%14-7;let t=(e+3)%9,n=t>6.2&&t<8.4,s=n?(t-6.2)/2.2:0,r=n?s<.12?s/.12:s>.8?(1-s)/.2:1:0;for(let h of bt.L0_jack_lidhinge||[])h.rotation.x=-2*Math.min(1,r*1.6);for(let h of bt.L0_jack_head||[]){let d=r*(1+Math.sin(Math.max(0,s-.12)*40)*Math.exp(-Math.max(0,s-.12)*7)*.35);h.scale.set(1,Math.max(.05,d),1),h.position.y=.3+.1*r,h.rotation.z=Math.sin(e*9)*.2*r,h.visible=r>.02}for(let h of bt.L0_jack_crank||[])h.rotation.x=-e*(t>4.5&&t<6.2?9:1.4);for(let h of bt.GOLDKEY||[])h.rotation.y=Math.sin(e*.8)*.25,h.position.y=4.1+Math.sin(e*1.6)*.04;for(let[h,d]of["L0_soldier0","L0_soldier1"].entries())for(let f of bt[d]||[]){f.getWorldPosition(Yt);let p=f.userData,y=Math.abs(Yt.x-g.x)<3&&g.y<.5;Ye.kick>.6&&y&&!(p.wob>.6)&&(p.wob=1,p.dir=Yt.x>g.x?1:-1),p.wob=Math.max(0,(p.wob||0)-i*.9),f.rotation.z=Math.sin(e*1.3+h*2)*.03+(p.wob||0)*Math.sin((1-p.wob)*22)*.22*(p.dir||1),f.position.y=Math.abs(Math.sin((1-(p.wob||0))*22))*.06*(p.wob||0)}for(let[h,d]of["L0_sol_arm0","L0_sol_arm1"].entries())for(let f of bt[d]||[]){f.getWorldPosition(Yt);let p=Math.abs(Yt.x-g.x)<1.6&&g.y<.5?1:0;f.userData.s=(f.userData.s||0)+(p-(f.userData.s||0))*(1-Math.exp(-i*7)),f.rotation.set(0,0,0),f.rotateZ(f.userData.s*2.5),f.rotateX(-f.userData.s*.5)}for(let h of bt.L1_mouse||[]){let d=(e+1.5)%7.3,f=d<2.4?Math.min(1,d/.3,(2.4-d)/.3):0;(u=h.userData).y0??(u.y0=h.position.y),h.position.y=h.userData.y0-.35*(1-f),h.position.z=-5.05+.1*f,h.rotation.z=Math.sin(e*7)*.08*f,h.visible=f>.02}Y.cuckooT>0&&(Y.cuckooT-=i);let o=Math.max(0,Y.cuckooT||0),a=o>0?Math.min(1,(2.2-o)/.15,o/.2):0;for(let h of bt.L2_clock_doorh||[])h.rotation.y=-1.8*a;for(let h of bt.L2_cuckoo||[])h.position.z=.3+.45*a,h.rotation.x=Math.sin(e*14)*.25*a,h.visible=a>.02;for(let h of bt.L0B_horse||[])h.rotation.z=Math.sin(e*1.6)*.12;for(let h of bt.L0C_dancer||[])h.rotation.y=e*2.2,h.position.y=.5+Math.abs(Math.sin(e*2.2))*.02;for(let h of bt.L0C_mlid||[])h.rotation.x=-1.1+Math.sin(e*.8)*.05;for(let h of bt.L1B_puppet||[])h.position.y=2.65+Math.abs(Math.sin(e*3.1))*.25,h.rotation.z=Math.sin(e*2.3)*.25;_S(i,e),yS(i)}var Pt=(()=>{let i=Vt(It("#d79a55")),e=Vt(It("#9a5d36")),t=Vt(It("#f6e7c6"),{soft:!0}),n=Vt(It("#f1b93a")),s=Vt(It("#e2483b")),r=Vt(It("#3fb3a8")),o=Vt(It("#2d3f73")),a=Vt(It("#8a64c8")),l=Vt(It("#5b3b2c"),{outline:!1}),c={},u={};function h(ie,V,ue,pt,pe,Ie){let Ne=new st(new ps(1,1,1,3,.18),V);return Ne.userData.size=[ue,pt,pe],ms.add(Ne),c[ie]=Ne,Ne}function d(ie,V){let ue=new ki(.5,.5,.32,32);ue.rotateX(Math.PI/2);let pt=new st(ue,V);return ms.add(pt),c[ie]=pt,pt}h("balance",i),h("bet",i),h("balFace",t),h("betFace",t),d("minus",e),d("plus",e),d("turbo",e),d("auto",e),d("menu",e),d("sound",e),h("buy",e);let f=new Fs;f.moveTo(-.5,-.5),f.lineTo(.5,-.5),f.lineTo(.5,.5),f.lineTo(-.38,.5),f.lineTo(-.5,.36),f.closePath();let p=new Os;p.absarc(-.36,.3,.05,0,Math.PI*2,!0),f.holes.push(p);let y=new Ir(f,{depth:.08,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2});y.center();let _=new st(y,Vt(It("#ffd257")));ms.add(_),c.tag=_;let m=new Wt;ms.add(m),c.key=m;let v=new ki(.34,.34,.16,32).rotateX(Math.PI/2),T=new ki(.17,.17,.18,24).rotateX(Math.PI/2),S=Vt(It("#b9771f"));for(let ie of[-1,1]){let V=new st(v,n);V.position.x=ie*.4,V.scale.set(1,.82,1),m.add(V);let ue=new st(T,S);ue.position.set(ie*.44,0,.02),ue.scale.set(1,.8,1),m.add(ue)}let A=new st(new ps(.5,.26,.2,2,.06),n);m.add(A);let w=new st(new zs(.16,18,12),n);w.scale.z=.8,w.position.z=.1,m.add(w);let x=new st(new ki(.55,.55,.12,40).rotateX(Math.PI/2),s);ms.add(x),c.plate=x;let M=new st(new Do(.55,.05,8,40),t);x.add(M);let R={ang:0,vel:0,target:0,press:0,pressV:0},C=new Wt;ms.add(C),C.visible=!1;let D=new st(new ps(1,.42,.08,3,.05),s);C.add(D);let F=new st(new ps(.9,.32,.06,3,.04),t);F.position.z=.04,C.add(F);for(let ie of[-.36,.36]){let V=new st(new ki(.006,.006,1,6),l);V.position.set(ie,.71,-.02),C.add(V);let ue=new st(new zs(.025,10,8),n);ue.position.set(ie,.2,.06),C.add(ue)}let B={on:!1,t:0,y:0,vy:0,rot:0,vr:0},L=document.createElement("div");L.className="lbl",L.style.display="none",Wn.appendChild(L);let H=(ie,V="")=>{let ue=document.createElement("div");return ue.className="lbl "+V,Wn.appendChild(ue),u[ie]=ue,ue};H("balance").innerHTML="<small>BALANCE</small><span>$1,000.00</span>",H("bet").innerHTML="<small>BET</small><span>$1.00</span>",H("minus","light").textContent="\u2212",H("plus","light").textContent="+",H("tag").innerHTML="<small>WIN</small><span>$0.00</span>",H("turbo","light").innerHTML="<span>\xBB</span><small>TURBO</small>",H("auto","light").innerHTML="<span>\u21BB</span><small>AUTO</small>",H("play","light").innerHTML='<small style="font-size:0.62em;color:#fff4dc">PLAY</small>',H("menu","light").innerHTML="<span>\u2261</span><small>MENU</small>",H("sound","light").innerHTML="<span>\u266A</span><small>SOUND</small>",H("buy","light").innerHTML="<small>BUY</small><span>BONUS</span>";let Z={},X={},he={};for(let[ie,V]of[["GENTLE_WIND","GENTLE"],["FULL_WIND","FULL"],["OVERWIND","OVERWIND!"]]){let ue=document.createElement("div");ue.className="wind"+(ie==="FULL_WIND"?" sel":""),ue.textContent=V,Wn.appendChild(ue),he[ie]=ue,ue.addEventListener("pointerdown",pt=>{pt.preventDefault(),!Pc()&&(QS(ie),Y.snd?.("click"))})}for(let ie of["minus","plus","turbo","auto","key","menu","sound","buy"]){let V=document.createElement("div");V.className="hit",Wn.appendChild(V),Z[ie]=V,X[ie]={v:0,vel:0},V.addEventListener("pointerdown",ue=>{ue.preventDefault(),!Pc()&&(X[ie].vel-=9,Y.snd?.("click"),ie==="key"&&qr(),ie==="plus"&&se(1),ie==="minus"&&se(-1),ie==="turbo"&&!ae.jur.disabledTurbo&&($.turbo=ae.turbo=!ae.turbo),ie==="auto"&&jS(),ie==="buy"&&$S(),ie==="menu"&&JS(),ie==="sound"&&($.sound=!Gn.toggle()))})}let $={};function se(ie){ae.busy||ae.replay||!["idle","result"].includes(ot.phase)||(ae.li=Math.max(0,Math.min(ae.levels.length-1,ae.li+ie)),u.bet.querySelector("span").textContent=Ki($i()))}addEventListener("keydown",ie=>{if(ie.code==="Space"&&!ae.jur.disabledSpacebar){if(ie.preventDefault(),Pc())return;X.key.vel-=9,qr()}});let ee={};function Pe(){Js.left=0,Js.right=vt,Js.top=0,Js.bottom=-gn,Js.updateProjectionMatrix();let ie=(pe,Ie,Ne,z,le,ce)=>{pe.position.set(Ie,-Ne,0),pe.scale.set(z,le,ce??Math.min(z,le)*.6),pe.userData.base=[Ie,Ne,z,le]},V,ue,pt;if(Vn){V=Dc(Math.min(vt*.2,gn*.12),40,4e3);let pe=vt*.04,Ie=(vt-pe*2)*.34,Ne=V*.62,z=V*.46,le=gn-V*1.75,ce=gn-V*.62;ee={balance:[pe+Ie/2,le,Ie,Ne],tag:[vt/2+Ie*.05,le,Ie*.72,Ne*1.1],bet:[vt-pe-Ie*.36,le,Ie*.72,Ne],minus:[vt-pe-Ie*.62,le+Ne*.62,z*.8,z*.8],plus:[vt-pe-Ie*.1,le+Ne*.62,z*.8,z*.8],key:[vt/2,ce-V*.05,V*1.15,V*1.15],turbo:[vt/2-V*1.5,ce,z*1.3,z*1.3],auto:[vt/2+V*1.5,ce,z*1.3,z*1.3],menu:[vt-pe-z*.6,z*1,z,z],sound:[vt-pe-z*2,z*1,z,z],buy:[pe+V*.55,V*.5,V*1,V*.55]}}else{V=Math.min(Dc(gn*.15,40,4e3),vt*.94/11.4),ue=gn-V*.58;let pe=Math.max(vt*.025,V*.3),Ie=V*1.9,Ne=V*.66,z=V*.5,le=V*.12,ce=pe,we=ce+Ie/2;ce+=Ie+le*2;let fe=ce+z/2;ce+=z+le;let je=ce+Ie*.4;ce+=Ie*.8+le;let Ue=ce+z/2;ee={balance:[we,ue,Ie,Ne],bet:[je,ue,Ie*.8,Ne],minus:[fe,ue,z,z],plus:[Ue,ue,z,z],tag:[vt/2+V*.4,ue-V*.02,V*2.1,V*.82],key:[vt-pe-V*1.6,ue-V*.18,V*1.3,V*1.3],turbo:[vt-pe-V*3.05,ue,z*1.3,z*1.3],auto:[vt-pe-V*.4,ue,z*1.3,z*1.3],menu:[vt-pe-V*.32,V*.48,z,z],sound:[vt-pe-V*1.02,V*.48,z,z],buy:[pe+V*.62,V*.55,V*1.25,V*.66]},ee.tag[0]-ee.tag[2]/2<Ue+z&&(ee.tag[0]=Ue+z+ee.tag[2]/2)}for(let[pe,[Ie,Ne,z,le]]of Object.entries(ee)){let ce=Z[pe];ce&&(ce.style.left=Ie-z/2+"px",ce.style.top=Ne-le/2+"px",ce.style.width=z+"px",ce.style.height=le+"px");let we=pe==="key"?u.play:u[pe];if(!we)continue;let fe=pe==="balance"||pe==="bet"||pe==="tag"?le*.42:pe==="key"?le*.36:le*.5;we.style.fontSize=fe+"px",we.style.left=Ie+"px",we.style.top=(pe==="key"?Ne+le*.3:Ne+(pe==="balance"||pe==="bet"||pe==="tag"?le*.02:0))+"px"}u.tag.querySelector("small").style.fontSize="0.4em";{let pe=Object.values(he),Ie=Vn?Math.min(vt*.3,V*1.6):V*1.85,Ne=Ie*.34,z=Ie*.08,le=pe.length*Ie+(pe.length-1)*z,ce=Vn?ee.balance[1]-ee.balance[3]*.5-Ne*1.1:V*.42,we=vt/2-le/2;for(let fe of pe)fe.style.left=we+"px",fe.style.top=ce-Ne/2+"px",fe.style.width=Ie+"px",fe.style.height=Ne+"px",fe.style.fontSize=Ne*.46+"px",fe.style.lineHeight=Ne+"px",we+=Ie+z}Y.hb=V}let De={tag:0,tagV:0,bal:0,balV:0},J=0,ve=0;function Le(ie,V){let ue=(qe,We,Ze=0,U=0)=>{let[Lt,it,Mt,_e]=ee[We],Nt=X[We]||{v:0},Ve=1+Nt.v;qe.position.set(Lt,-it-Nt.v*_e*.25,Ze),qe.scale.set(Mt*Ve,_e*Ve,Math.min(Mt,_e)*.5),qe.rotation.z=U};for(let qe in X){let We=X[qe];We.vel+=(-We.v*300-We.vel*16)*ie,We.v+=We.vel*ie*.02,We.v=Math.max(-.12,Math.min(.12,We.v))}ue(c.balance,"balance"),ue(c.bet,"bet"),ue(c.balFace,"balance",20),ue(c.betFace,"bet",20),c.balFace.scale.x*=.88,c.balFace.scale.y*=.74,c.betFace.scale.x*=.86,c.betFace.scale.y*=.74,ue(c.minus,"minus"),ue(c.plus,"plus"),ue(c.buy,"buy"),ue(c.turbo,"turbo",0,$.turbo?V*3:0),ue(c.auto,"auto",0,$.auto?-V*2:0),ue(c.menu,"menu"),ue(c.sound,"sound"),De.tagV+=(-De.tag*220-De.tagV*10)*ie,De.tag+=De.tagV*ie;let[pt,pe,Ie,Ne]=ee.tag;c.tag.position.set(pt,-pe,0),c.tag.scale.set(Ie*(1+De.tag),Ne*(1+De.tag),Ne*.5),c.tag.rotation.z=Math.sin(V*1.4)*.025+De.tag*.3,u.tag.style.transform=`translate(-50%, -50%) rotate(${(-(Math.sin(V*1.4)*.025+De.tag*.3)).toFixed(3)}rad) scale(${(1+De.tag).toFixed(3)})`,J+=(ve-J)*(1-Math.exp(-ie*9)),Math.abs(ve-J)<.005&&(J=ve),u.tag.querySelector("span").textContent=J===ve?Hm(J):Cm(Math.round(J*1e6)),R.vel+=((R.target-R.ang)*380-R.vel*18)*ie,R.ang+=R.vel*ie;let[z,le,ce,we]=ee.key,fe=X.key,je=1+fe.v;if(c.key.position.set(z,-le-fe.v*we*.25,30),c.key.scale.setScalar(ce*.62*je),c.key.rotation.z=R.ang+Math.sin(V*2)*.03*(["idle","result"].includes(ot.phase)?1:0),c.plate.position.set(z,-le,-40),c.plate.scale.setScalar(ce*.9),B.on){B.t+=ie;let qe=Math.min(vt,gn*1.9)*.36,We=B.t<2.8?0:-1.4;B.vy+=((We-B.y)*160-B.vy*9)*ie,B.y+=B.vy*ie,B.vr+=(-B.rot*90-B.vr*2.2)*ie-B.vy*ie*.8,B.rot+=B.vr*ie;let Ze=Vn?vt*.5:vt*.24,U=(Vn?gn*.2:gn*.26)+B.y*gn*.5;C.visible=!0,C.position.set(Ze,-U,60),C.scale.setScalar(qe),C.rotation.z=B.rot,L.style.display="",L.style.fontSize=qe*.1+"px",L.style.left=Ze+"px",L.style.top=U+"px",L.style.transform=`translate(-50%, -50%) rotate(${(-B.rot).toFixed(3)}rad)`,B.t>3.6&&(B.on=!1,C.visible=!1,L.style.display="none")}for(let[qe,We]of[["balance",.82],["bet",.8],["tag",.8]]){let Ze=u[qe].querySelector("span");if(!Ze||!ee[qe])continue;Ze.style.display="inline-block";let U=Ze.textContent+"|"+ee[qe][2];if(Ze.dataset.fit===U)continue;Ze.dataset.fit=U,Ze.style.transform="";let Lt=Ze.scrollWidth,it=ee[qe][2]*We;Ze.style.transform=Lt>it?`scale(${(it/Lt).toFixed(3)})`:""}{let qe=!ae.replay&&!ae.busy&&["idle","result"].includes(ot.phase);for(let We of Object.values(he)){let Ze=qe?"":"none";We.style.display!==Ze&&(We.style.display=Ze)}}let Ue=["idle","result"].includes(ot.phase)?1+Math.sin(V*3)*.03:.94;c.key.scale.multiplyScalar(Ue)}return{layout:Pe,update:Le,setWin(ie,V,ue){ve=ie,V&&(J=ie),De.tagV+=ue?9:4},setBalance(ie){u.balance.querySelector("span").textContent=Cm(ie)},setTexts(){u.balance.querySelector("small").textContent=rt.balance,u.bet.querySelector("small").textContent=rt.bet,u.tag.querySelector("small").textContent=rt.win,u.bet.querySelector("span").textContent=Ki($i());let ie=rt.bonusBtn.split(" ");if(u.buy.innerHTML=ie.length>1?`<small>${ie[0]}</small><span>${ie.slice(1).join(" ")}</span>`:`<span>${ie[0]}</span>`,(ae.jur.disabledBuyFeature||ae.replay)&&(u.buy.style.display="none",Z.buy.style.display="none",c.buy.visible=!1),(ae.jur.disabledAutoplay||ae.replay)&&(u.auto.style.display="none",Z.auto.style.display="none",c.auto.visible=!1),(ae.jur.disabledTurbo||ae.replay)&&(u.turbo.style.display="none",Z.turbo.style.display="none",c.turbo.visible=!1),ae.replay){for(let V of["minus","plus","key"])u[V]&&(u[V].style.display="none"),Z[V].style.display="none",c[V]&&(c[V].visible=!1);u.play.style.display="none",c.plate.visible=!1;for(let V of Object.values(he))V.style.display="none";ae.replay.amount&&(ae.levels=[ae.replay.amount],ae.li=0,u.bet.querySelector("span").textContent=Ki($i()))}},setAuto(ie){u.auto.innerHTML=ie>0?`<span>${ie}</span><small>STOP</small>`:"<span>\u21BB</span><small>AUTO</small>",$.auto=ie>0},setWind(ie){for(let[V,ue]of Object.entries(he))ue.classList.toggle("sel",V===ie)},crank(){R.target+=Math.PI},keyPress(){X.key.vel-=9},bigWin(ie){B.on=!0,B.t=0,B.y=-1.2,B.vy=0,B.rot=.25,B.vr=0,L.innerHTML='<span style="font-size:1.25em;color:#c9384a">BIG WIN!</span><br><span style="font-size:0.8em">'+ie+"</span>"}}})(),ln=(()=>{let i=t=>qt.get(t),e=t=>(t||"").trim().replace(/^https?:\/\//i,"").replace(/\/+$/,"");return{sessionID:i("sessionID")||"",rgsHost:e(i("rgs_url")),lang:(i("lang")||"en").toLowerCase(),currency:(i("currency")||"").toUpperCase(),device:i("device")||"",social:(i("social")||"").toLowerCase()==="true",demo:(i("demo")||"").toLowerCase()==="true",replay:(i("replay")||"").toLowerCase()==="true",game:i("game")||"",version:i("version")||"",mode:i("mode")||"",event:i("event")||"",amount:Number(i("amount")||"")}})(),Qm=i=>`${/^(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+)(:\d+)?$/.test(ln.rgsHost)?"http":"https"}://${ln.rgsHost}${i}`,Xr=class extends Error{constructor(e,t){super(t),this.code=e}};async function Cc(i,e){let t;try{t=await fetch(Qm(i),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch{throw new Xr("NETWORK","network")}let n=null;try{n=await t.json()}catch{n=null}if(!t.ok)throw new Xr(n?.error??`HTTP_${t.status}`,n?.message??"");return n}var Gc={authenticate:()=>Cc("/wallet/authenticate",{sessionID:ln.sessionID}),play:(i,e)=>Cc("/wallet/play",{sessionID:ln.sessionID,amount:i,mode:e}),endRound:()=>Cc("/wallet/end-round",{sessionID:ln.sessionID}),event:i=>Cc("/bet/event",{sessionID:ln.sessionID,event:i}),async replay(){let i;try{i=await fetch(Qm(`/bet/replay/${encodeURIComponent(ln.game)}/${encodeURIComponent(ln.version)}/${encodeURIComponent(ln.mode)}/${encodeURIComponent(ln.event)}`))}catch{throw new Xr("NETWORK","network")}if(!i.ok)throw new Xr(`HTTP_${i.status}`,"");return i.json()}},HS={USD:["$",2],CAD:["CA$",2],JPY:["\xA5",0],EUR:["\u20AC",2],RUB:["\u20BD",2],CNY:["CN\xA5",2],PHP:["\u20B1",2],INR:["\u20B9",2],IDR:["Rp",0],KRW:["\u20A9",0],BRL:["R$",2],MXN:["MX$",2],DKK:["kr",2,1],PLN:["z\u0142",2,1],VND:["\u20AB",0,1],TRY:["\u20BA",2],CLP:["CLP",0,1],ARS:["ARS",2,1],PEN:["S/",2],NGN:["\u20A6",2],SAR:["SAR",2,1],ILS:["\u20AA",2],AED:["AED",2,1],TWD:["NT$",2],NOK:["kr",2,1],KWD:["KD",3],JOD:["JD",3],CRC:["\u20A1",2],TND:["TND",3,1],SGD:["SG$",2],MYR:["RM",2],OMR:["OMR",3,1],QAR:["QAR",2,1],BHD:["BD",3],PKR:["\u20A8",2],EGP:["EGP",2,1],NZD:["NZ$",2],BOB:["Bs",2],GHS:["GH\u20B5",2],KES:["KSh",2],MAD:["MAD",2,1],BAM:["KM",2],ISK:["kr",0,1],TZS:["TSh",2],UGX:["USh",0],XOF:["CFA",0,1],AUD:["A$",2],BWP:["P",2],GEL:["\u20BE",2],HNL:["L",2],JMD:["J$",2],KGS:["KGS",2,1],MZN:["MZN",2,1],PGK:["K",2],TMT:["TMT",2,1],TTD:["TT$",2],UAH:["\u20B4",2],XCD:["EC$",2],APE:["APE",4,1],BCH:["BCH",6,1],BNB:["BNB",6,1],BTC:["BTC",6,1],BUSD:["BUSD",2,1],CRO:["CRO",4,1],DAI:["DAI",2,1],DOGE:["DOGE",4,1],EOS:["EOS",4,1],ETH:["ETH",6,1],LINK:["LINK",4,1],LTC:["LTC",6,1],POL:["POL",4,1],SAND:["SAND",4,1],SHIB:["SHIB",0,1],SOL:["SOL",6,1],TRUMP:["TRUMP",4,1],TRX:["TRX",4,1],UNI:["UNI",4,1],USDC:["USDC",2,1],USDT:["USDT",2,1],XRP:["XRP",4,1],XGC:["GC",2,1],XSC:["SC",2,1],XEC:["SC",2,1],XRC:["SC",2,1],WRW:["SC",2,1]},e0=i=>{let e=HS[i];return e?{symbol:e[0],decimals:e[1],after:!!e[2]}:{symbol:i||"",decimals:2,after:!0}};function GS(i,e){i=Math.round(Math.abs(i));let t=Math.floor(i/1e6),n=String(i%1e6).padStart(6,"0"),s=6;for(;s>e&&n[s-1]==="0";)s--;n=n.slice(0,s);let r=t.toLocaleString("en-US");return s>0?`${r}.${n}`:r}var t0=(i,e)=>e.symbol?e.after?`${i} ${e.symbol}`:`${e.symbol}${i}`:i,Ki=i=>{let e=e0(ae.currency);return t0(GS(i,e.decimals),e)},Cm=i=>{let e=e0(ae.currency);return t0((Math.floor(i/10**(6-e.decimals))/10**e.decimals).toLocaleString("en-US",{minimumFractionDigits:e.decimals,maximumFractionDigits:e.decimals}),e)},VS="Malfunction voids all wins and plays. A consistent internet connection is required. In the event of a disconnection, reload the game to finish any uncompleted rounds. The expected return is calculated over many plays. The game display is not representative of any physical device and is for illustrative purposes only. Winnings are settled according to the amount received from the Remote Game Server and not from events within the web browser. TM and \xA9 2026 Engine.",$c={GENTLE_WIND:["GENTLE WIND","gentle"],FULL_WIND:["FULL WIND","full"],OVERWIND:["OVERWIND!","over"],GOLDEN_KEY_HUNT:["GOLDEN KEY HUNT","gold"],TOP_SHELF_EXPRESS:["TOP SHELF EXPRESS","express"]},Bd={FULL_WIND:{cost:1,rtp:96.5,maxWin:1001.95,hitRate:.519027324694,bonus:.010616220451,maxLands:5094061e-12},GENTLE_WIND:{cost:1,rtp:96.5,maxWin:517.6,hitRate:.635061541723,bonus:.00635277307,maxLands:3560994e-12},OVERWIND:{cost:1,rtp:96.5,maxWin:1004,hitRate:.423685462119,bonus:.01359738441,maxLands:4684367e-12},GOLDEN_KEY_HUNT:{cost:50,rtp:96.5,maxWin:1010,hitRate:.950269917665,bonus:.838977273719,maxLands:.000691435826},TOP_SHELF_EXPRESS:{cost:100,rtp:96.5,maxWin:1254,hitRate:1,bonus:1,maxLands:87080479e-12}},n0={balance:"BALANCE",bet:"BET",win:"WIN",bonusBtn:"BUY BONUS",buyTitle:"BUY BONUS",buyBtn:"BUY",cancel:"CANCEL",confirmTitle:"CONFIRM PURCHASE",confirmYes:"CONFIRM",confirmBody:(i,e,t)=>`Start <b>${i}</b> for <b>${t}</b> (${e}x your bet)? This amount is taken from your balance when you confirm.`,costs:i=>`costs ${i}x your bet`,buys:{GOLDEN_KEY_HUNT:"The whole shelf turns gold and the Golden Key waits on the route. Reach it and the Top Shelf Express starts at tier 3.",TOP_SHELF_EXPRESS:"Go straight to the bonus: the Jack-in-the-box launches Pip up to the toy train."},noFunds:"Not enough balance for this bet.",connErr:"Cannot connect to the game server. Please check your connection and reload the game.",autoTitle:"AUTOPLAY",autoBody:"Choose how many rounds to play automatically with the wind and bet shown. Press STOP at any time.",start:"START",stop:"STOP",replayTitle:"BET REPLAY",replayNote:"This is a replay of a previous round. No bets will be placed.",replayStart:"START REPLAY",replayAgain:"PLAY AGAIN",replayErr:"This replay could not be loaded.",rp:{mode:"MODE",base:"BASE BET",costMult:"COST MULTIPLIER",total:"TOTAL BET COST",payMult:"PAYOUT MULTIPLIER",win:"TOTAL WIN"},rulesTitle:"HOW TO PLAY",close:"CLOSE",amt:"bet",costWord:"costs"},Td={...n0,bet:"PLAY AMOUNT",bonusBtn:"FEATURES",buyTitle:"FEATURES",buyBtn:"PLAY",confirmTitle:"CONFIRM FEATURE",confirmBody:(i,e,t)=>`Start <b>${i}</b> for <b>${t}</b> (${e}x your play amount)? This amount comes off your balance when you confirm.`,costs:i=>`plays at ${i}x your play amount`,noFunds:"Not enough balance for this play amount.",autoBody:"Choose how many rounds to play automatically with the wind and play amount shown. Press STOP at any time.",replayTitle:"REPLAY",replayNote:"This is a replay of a previous round. Nothing is played and your balance does not change.",rp:{mode:"MODE",base:"PLAY AMOUNT",costMult:"PLAY MULTIPLIER",total:"TOTAL PLAY",payMult:"WIN MULTIPLIER",win:"TOTAL WIN"},amt:"play amount",costWord:"plays at"},rt=n0;function WS(){let i=rt===Td,e=rt.amt,t=s=>s.toLocaleString("en-US",{maximumFractionDigits:2})+"x";return`<h3>RTP and maximum win for each mode</h3>${`<table class="stats"><tr><th>Mode</th><th>${i?"Plays at":"Cost"}</th><th>RTP</th><th>Max win</th></tr>`+Object.entries(Bd).map(([s,r])=>`<tr><td>${$c[s][0]}</td><td>${r.cost}x</td><td>${r.rtp.toFixed(2)}%</td><td>${t(r.maxWin)}</td></tr>`).join("")+"</table>"}<p>The RTP (return to player) of every mode is 96.50%. Max win is a multiple of your ${e}.</p>
<h3>The round</h3><p>Press the brass KEY (PLAY) and Pip winds up. He marches along the toy-shop shelf, picking up what he passes, until his spring runs down or something stops him. Every round's result is decided by the game server before Pip moves; what you see always lands on the amount shown.</p>
<h3>Choose your wind (before each round)</h3><p><b>GENTLE WIND</b>: frequent small wins, fewer hazards. <b>FULL WIND</b>: balanced. <b>OVERWIND!</b>: Pip sprints, more dice and more hazards, the cat is awake; rarer, bigger wins. Each is its own mode at 1x your ${e}.</p>
<h3>Pickups (add to the win)</h3><p>Button +0.1x, coin +0.25x, gold coin stack +1x (x your ${e}).</p>
<h3>Dice</h3><p>Pip kicks a dice block; it lands on its number and multiplies the win so far (x2, x3, x5 or x6).</p>
<h3>Power-ups</h3><p><b>Spring pad</b> bounces him high over the shelf; <b>balloon</b> floats him over trouble; both can carry him past coins in the air. <b>Bonus key</b> gives 3 extra turns so he walks further. <b>Magnet</b> pulls nearby coins to him. <b>Glue</b> holds him for a moment.</p>
<h3>Endings</h3><p>He winds down (the round ends normally), or: a <b>marble</b> trips him (the win so far is halved), a <b>mousetrap</b> snaps shut, the <b>cat's paw</b> swats him off the shelf, or he walks off the <b>edge</b>. These end the round and keep the win so far (halved for the marble).</p>
<h3>The fork</h3><p>Sometimes the shelf splits: UP over the books or ALONG the shelf. Tap a sign, or Pip picks one himself. Both ways give the same result; it is already decided.</p>
<h3>Top Shelf Express (bonus)</h3><p>A Jack-in-the-box on the route launches Pip to the top shelf, where he rides the toy train past 4 stations. Each station adds a carriage or upgrades one; every carriage carries a multiplier. At the tunnel, all carriages count: their numbers are added together and that many times your ${e} is won, on top of the win so far. Tier 1 starts with one x1 carriage, tier 2 with x2 + x2, tier 3 with x2 + x2 + x3. Reaching the Golden Key starts tier 3.</p>
<h3>${i?"Features":"Bought modes"}</h3><p><b>GOLDEN KEY HUNT</b> (${rt.costWord} 50x your ${e}): the whole shelf turns gold and the Golden Key sits on the route. <b>TOP SHELF EXPRESS</b> (${rt.costWord} 100x your ${e}): straight to the bonus. Both ask you to CONFIRM first.</p>
<h3>Controls</h3><p>The KEY (or the space bar) plays a round. \u2212 and + change the ${e}. GENTLE / FULL / OVERWIND! choose the wind for the next round. ${rt.bonusBtn} opens the ${i?"features":"bought modes"}. TURBO speeds Pip up. AUTO plays a chosen number of rounds; press STOP to end it. MENU opens these rules. SOUND turns all sound on or off.</p>
<h3>General disclaimer</h3><p>${VS}</p>`}var Gn=(()=>{let i=null,e,t,n,s=null,r=!qt.get("mute"),o=!1,a={},l={},c=["step0","step1","step2","step3","crank","crank2","coin","coin2","button","stack","dice","dicestamp","boing","glue","pop","marble","thud","snap","swish","pomf","tink","magnet","key","clank","upgrade","creak","click","win_s","win_m","win_b","bonus","nowin"];async function u(m){try{let v=await fetch("audio/"+m+".m4a");a[m]=await i.decodeAudioData(await v.arrayBuffer())}catch{}}function h(){if(i){i.state==="suspended"&&i.resume();return}let m=window.AudioContext||window.webkitAudioContext;if(!m)return;i=new m,e=i.createGain(),e.gain.value=r?.9:0;let v=i.createDynamicsCompressor();v.threshold.value=-6,v.ratio.value=12,v.attack.value=.003,v.release.value=.15,e.connect(v),v.connect(i.destination),t=i.createGain(),t.connect(e),n=i.createGain(),n.gain.value=.42,n.connect(e),o||(o=!0,Promise.all(c.map(u)).then(()=>{}),u("music").then(()=>d()))}function d(){!a.music||s||(s=i.createBufferSource(),s.buffer=a.music,s.loop=!0,s.connect(n),s.start())}function f(m,{vol:v=1,rate:T=1,gap:S=.05}={}){if(!i||!r||!a[m])return;let A=i.currentTime;if(l[m]&&A-l[m]<S)return;l[m]=A;let w=i.createBufferSource();w.buffer=a[m],w.playbackRate.value=T*(.96+Math.random()*.08);let x=i.createGain();x.gain.value=v,w.connect(x),x.connect(t),w.start()}function p(m=1.2){if(!i)return;let v=i.currentTime;n.gain.cancelScheduledValues(v),n.gain.setValueAtTime(n.gain.value,v),n.gain.linearRampToValueAtTime(.12,v+.1),n.gain.linearRampToValueAtTime(.42,v+m)}function y(m){s&&s.playbackRate.setTargetAtTime(m,i.currentTime,.25)}function _(){return r=!r,e&&e.gain.setTargetAtTime(r?.9:0,i.currentTime,.02),r}return addEventListener("pointerdown",h,{capture:!0}),addEventListener("keydown",h,{capture:!0}),{play:f,duck:p,musicRate:y,toggle:_,get on(){return r}}})();Y.snd=(i,e)=>Gn.play(i,e);{let i={crank:["crank",{gap:.08}],coin:["coin"],button:["button"],stack:["stack"],die_kick:["dice"],die:["dicestamp"],magnet:["magnet"],glue:["glue"],spring:["boing"],balloon:["key"],balloon_pop:["pop"],bonuskey:["key"],trip:["marble"],faceplant:["thud"],snap:["snap"],cat_paw:["creak"],swat:["swish"],toybox:["pomf"],jack:["creak"],launch:["boing"],bonus_start:["bonus"],bonus_total:["win_m"],golden_key:["key"],star_burst:["win_b"],fork_pick:["click"],edge_look:["creak",{rate:1.3}]},e=Y.events.push.bind(Y.events);Y.events.push=t=>{let n=e(t),s=t[0];if(s==="station")Gn.play(t[1]==="add"?"clank":"upgrade");else if(s==="coin"&&Math.random()<.5)Gn.play("coin2");else if(s==="result"){let r=t[1];r<=0?Gn.play("nowin",{vol:.8}):r<3?Gn.play("win_s"):r<10&&(Gn.play("win_m"),Gn.duck(2.5))}else s==="ending"&&t[1]==="wound"?Gn.play("tink"):i[s]&&(Gn.play(i[s][0],i[s][1]),(s==="star_burst"||s==="bonus_start")&&Gn.duck(3.5));return n}}function i0(i){let e=document.createElement("div");e.id="splash";let t=["#ffd257","#7fe0d4","#ff8a6b","#ffd257","#b79cff","#7fe0d4","#ff8a6b","#ffd257","#7fe0d4","#b79cff","#ff8a6b","#ffd257","#7fe0d4","#ff8a6b"],n=0,s=l=>[...l].map(c=>c===" "?"<span>&nbsp;</span>":`<span style="color:${t[n++%t.length]}">${c}</span>`).join("");e.innerHTML=`<div class="logo">${s("Pip Pip")}<br>${s("Hooray!")}</div><div class="tap">${ln.device==="mobile"||matchMedia("(pointer:coarse)").matches?"TAP TO PLAY":"CLICK TO PLAY"}</div>`,Wn.appendChild(e);let r=!1,o=l=>{r||(r=!0,l&&l.preventDefault(),e.remove(),removeEventListener("keydown",a),i())},a=l=>{(l.code==="Space"||l.code==="Enter")&&o(l)};e.addEventListener("pointerdown",o),addEventListener("keydown",a),Y.splash=!0}function XS(i){Wn.style.display="none",document.documentElement.style.background="transparent",document.body.style.background="transparent";let e=(n,s,r)=>{g.root.visible=!0;for(let a of Object.values(g.actions))a.stop();let o=g.actions[n];o.reset(),o.enabled=!0,o.setEffectiveWeight(1),o.play(),o.time=s,o.timeScale=0,g.current=o,g.clip=n,g.yaw=g.yawT=.25,nt(r,1.2,1.05,{gaze:new oe(0,.004)}),g.sq=0,g.hop=0;for(let a=0;a<3;a++)Jm(0,0),g.mixer.update(0),jm(0,0),Nm(.2,0)},t=()=>{for(let n of["L0_soldier0","L0_soldier1","L1_mouse"])for(let s of bt[n]||[])s.visible=!1;g.root.visible=!1};if(i==="tile_bg"||i==="cover_bg"){t(),Ft=3;let n=new Zt(i==="tile_bg"?46:34,innerWidth/innerHeight,.5,200);n.position.set(Ft+.6,i==="tile_bg"?3.4:2.6,i==="tile_bg"?13.5:12),n.lookAt(Ft-.4,i==="tile_bg"?2.9:2,-2),Pd(0),Y.renderMode={scene:ht,cam:n,alpha:1}}else if(i==="tile_fg"){for(let l of Y.bays)l.copies.forEach(c=>{c.visible=!1});Y.floor&&(Y.floor.visible=!1),g.x=0,g.y=0,g.z=0,e("jump",sn.jumpPeak,"grin");let n=(l,c,u,h,d=1,f=0,p=0)=>{let y=Xn[l].clone(!0);return y.position.set(c,u,h),y.scale.setScalar(d),y.rotation.set(0,f,p),ht.add(y),y};n("coin",-.95,2.6,.3,.95,.5),n("coin",.95,2.85,.2,.9,-.6),n("coin",-1.1,1.6,.6,.85,.9),n("coin",1.1,1.85,.6,.85,-.3);let s=Xn.die.clone(!0);s.position.set(.95,.36,.6),s.rotation.set(.25,-.55,.12),ht.add(s);let r=new Wt;for(let l=0;l<3;l++){let c=Xn.coin.clone(!0);c.rotation.x=Math.PI/2,c.position.y=.04+l*.075,c.rotation.z=l*.7,r.add(c)}let o=Xn.coin.clone(!0);o.position.y=.48,r.add(o),r.scale.setScalar(1.15),r.position.set(-1,0,.6),r.rotation.y=.4,ht.add(r);let a=new Zt(30,innerWidth/innerHeight,.5,100);a.position.set(.05,1.5,6.3),a.lookAt(0,1.45,0),Y.renderMode={scene:ht,cam:a,alpha:0}}else if(i==="board"){let n=new Ns,s=innerWidth,r=innerHeight,o=new Mi(-s/2,s/2,r/2,-r/2,-500,500),a=Vt(It("#c98d4e")),l=Vt(It("#8a5432")),c=Vt(It("#f6e7c6"),{soft:!0}),u=Vt(It("#f1b93a")),h=Vt(It("#e2483b")),d=(f,p,y,_,m,v)=>{let T=new st(new ps(p,y,_,4,m),f);return T.position.z=v,n.add(T),T};d(l,s-16,r-16,40,34,-20),d(a,s-40,r-40,40,26,0),d(c,s-120,r-120,30,16,20);for(let[f,p]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let y=new st(new zs(13,18,12),u);y.position.set(f*(s/2-40),p*(r/2-40),40),n.add(y)}for(let f=0;f<9;f++){let p=new st(new jn(70+f%3*30,4,4),l);p.position.set(-s/2+60+f*(s-120)/9,(f%2?1:-1)*(r/2-30),22),n.add(p)}Y.renderMode={scene:n,cam:o,alpha:0}}else if(i==="logo"){oi.domElement.style.display="none",Wn.style.display="";for(let s of[...Wn.children])s.style.display="none";i0(()=>{});let n=document.getElementById("splash");n.style.background="transparent",n.querySelector(".tap").remove(),n.querySelector(".logo").style.fontSize="22vmin"}document.body.dataset.rendered="1"}var ae={online:!1,currency:"USD",levels:[.1,.2,.5,1,2,5,10,20,50,100].map(i=>Math.round(i*1e6)),li:3,bal:1e3*1e6,costs:{},jur:{},busy:!1,mode:"FULL_WIND",round:null,auto:0,turbo:!1,replay:null,books:null,minDur:0,t0:0,err:null},$i=()=>ae.levels[ae.li];async function qS(){if(ln.currency&&(ae.currency=ln.currency),ln.social&&(rt=Td),ln.replay&&ln.rgsHost){try{let i=await Gc.replay();ae.replay={mode:ln.mode,amount:ln.amount||1e6,payoutMultiplier:i.payoutMultiplier,cost:i.costMultiplier,state:i.state}}catch{ae.replay={err:!0}}return}if(ln.rgsHost){let i=await Gc.authenticate();ae.online=!0,ae.bal=i.balance.amount,ae.currency=i.balance.currency||ae.currency;let e=i.config||{};e.betLevels?.length&&(ae.levels=e.betLevels,ae.li=Math.max(0,ae.levels.indexOf(e.defaultBetLevel)));for(let t of e.gameModes||[])ae.costs[t.mode]=t.costMultiplier;ae.jur=e.jurisdiction||{},ae.jur.socialCasino&&(rt=Td),ae.minDur=(ae.jur.minimumRoundDuration||0)*1e3,i.round&&i.round.active&&(ae.resume=i.round)}else{qt.get("bal")&&(ae.bal=+qt.get("bal")*1e6);let i=await(await fetch("books.json")).json();ae.books=i;for(let e of Object.keys(i))ae.costs[e]=i[e].cost}}function YS(i){let e=ae.books[i],t=Math.random()*e.tot;for(let n of e.books)if(t-=n.w,t<=0)return n;return e.books[e.books.length-1]}var Vc=i=>{let e=(i||[]).find(t=>t.type==="round");return e?JSON.parse(JSON.stringify(e)):null};async function qr(i=ae.mode){if(!Y.ready||ae.busy||ae.replay||!["idle","result"].includes(ot.phase)||Pc()||document.getElementById("splash"))return;let e=ae.costs[i]||1,t=$i()*e;if(ae.bal<t){wd(rt.noFunds),Ed();return}ae.busy=!0,ae.t0=performance.now(),Pt.keyPress();let n,s,r;try{if(ae.online){let o=await Gc.play($i(),i);ae.bal=o.balance.amount;let a=o.round;n=Vc(a.state),s=Math.round(a.payoutMultiplier*100),r=a.active}else{ae.bal-=t;let o=YS(i);n=Vc(o.events),s=o.pay,r=s>0}}catch(o){ae.busy=!1,wd(o.code==="ERR_IPB"?rt.noFunds:rt.connErr),Ed();return}Pt.setBalance(ae.bal),ae.round={mode:i,pay:s,active:r,settled:!1,debit:t},n.pay=s,da(n)}async function KS(){let i=ae.round;if(!i||i.settled)return;i.settled=!0;let e=ae.minDur-(performance.now()-ae.t0);e>0&&await new Promise(n=>setTimeout(n,e));let t=Math.round($i()*i.pay/100);try{if(ae.online&&i.active){let n=await Gc.endRound();ae.bal=n.balance.amount}else ae.online||(ae.bal+=t)}catch{wd(rt.connErr)}Pt.setBalance(ae.bal),ae.busy=!1,ae.auto>0&&(ae.auto--,Pt.setAuto(ae.auto),ae.auto>0&&setTimeout(()=>{ae.auto>0&&qr()},ae.turbo?700:1200))}function Ed(){ae.auto=0,Pt.setAuto(0)}var gs=document.createElement("div");gs.id="panel";Wn.appendChild(gs);var Pc=()=>gs.classList.contains("on");function Qs(i,e=!1){return gs.innerHTML=`<div class="board${e?" wide":""}">${i}</div>`,gs.classList.add("on"),gs.firstChild}function xs(){gs.classList.remove("on"),gs.innerHTML=""}function wd(i){let e=Qs(`<p>${i}</p><div class="row"><button class="btn" data-a="ok">OK</button></div>`);e.querySelector("[data-a=ok]").onclick=xs}function $S(){if(ae.busy||ae.jur.disabledBuyFeature||ae.replay)return;let i=["GOLDEN_KEY_HUNT","TOP_SHELF_EXPRESS"].map(t=>{let n=ae.costs[t]||Bd[t].cost;return`<div class="buyrow"><div><b>${$c[t][0]}</b><br><small>${rt.buys[t]}</small><br><small>${rt.costs(n)}: <b>${Ki($i()*n)}</b></small></div><button class="btn" data-k="${t}">${rt.buyBtn}</button></div>`}).join(""),e=Qs(`<h2>${rt.buyTitle}</h2>${i}<div class="row"><button class="btn alt" data-a="x">${rt.cancel}</button></div>`,!0);e.querySelectorAll("[data-k]").forEach(t=>{t.onclick=()=>ZS(t.dataset.k)}),e.querySelector("[data-a=x]").onclick=xs}function ZS(i){let e=ae.costs[i]||Bd[i].cost,t=Qs(`<h2>${rt.confirmTitle}</h2><p>${rt.confirmBody($c[i][0],e,Ki($i()*e))}</p><div class="row"><button class="btn" data-a="y">${rt.confirmYes}</button><button class="btn alt" data-a="n">${rt.cancel}</button></div>`);t.querySelector("[data-a=y]").onclick=()=>{xs(),qr(i)},t.querySelector("[data-a=n]").onclick=xs}function JS(){let i=Qs(`<h2>${rt.rulesTitle}</h2><div class="scroll">${WS()}</div><div class="row"><button class="btn" data-a="x">${rt.close}</button></div>`,!0);i.querySelector("[data-a=x]").onclick=xs}function jS(){if(ae.auto>0){Ed();return}if(ae.jur.disabledAutoplay||ae.replay)return;let i=Qs(`<h2>${rt.autoTitle}</h2><p>${rt.autoBody}</p><div class="row">${[10,25,50,100].map(e=>`<button class="btn" data-n="${e}">${e}</button>`).join("")}</div><div class="row"><button class="btn alt" data-a="x">${rt.cancel}</button></div>`);i.querySelectorAll("[data-n]").forEach(e=>{e.onclick=()=>{xs(),ae.auto=+e.dataset.n,Pt.setAuto(ae.auto),qr()}}),i.querySelector("[data-a=x]").onclick=xs}function QS(i){ae.busy||(ae.mode=i,Pt.setWind(i))}function Im(i,e){let t=document.getElementById("replaytag");if(t||(t=document.createElement("div"),t.id="replaytag",Wn.appendChild(t)),!i){t.style.display="none";return}t.innerHTML=`<div><b>${rt.replayTitle}</b><br>${e.map(([n,s])=>`${n}: <b>${s}</b>`).join("<br>")}</div>`,t.style.display="block"}function s0(i){let e=ae.replay;if(e.err){Qs(`<h2>${rt.replayTitle}</h2><p>${rt.replayErr}</p>`);return}let t=e.amount,n=t*e.cost,s=Math.round(t*e.payoutMultiplier),r=[[rt.rp.mode,$c[e.mode]?.[0]||e.mode],[rt.rp.base,Ki(t)],[rt.rp.costMult,e.cost+"x"],[rt.rp.total,Ki(n)],[rt.rp.payMult,(+e.payoutMultiplier).toLocaleString("en-US",{maximumFractionDigits:2})+"x"],[rt.rp.win,Ki(s)]],o=Qs(`<h2>${rt.replayTitle}</h2><table class="stats rp">${r.map(([a,l])=>`<tr><td>${a}</td><td><b>${l}</b></td></tr>`).join("")}</table><p><small>${rt.replayNote}</small></p><div class="row"><button class="btn" data-a="go" id="replaygo">${i?rt.replayAgain:rt.replayStart}</button></div>`,!0);Im(!1),o.querySelector("[data-a=go]").onclick=()=>{xs(),Im(!0,r);let a=Vc(e.state);a.pay=Math.round(e.payoutMultiplier*100),ae.levels=[e.amount],ae.li=0,ae.round={replay:!0,settled:!0,pay:a.pay},da(a)}}function r0(){vt=innerWidth,gn=innerHeight,Vn=gn>vt*1.05;let i=Math.min(devicePixelRatio||1,qt.get("dpr")?+qt.get("dpr"):2);oi.setPixelRatio(i),oi.setSize(vt,gn,!1),qn.aspect=vt/gn,qn.fov=Vn?40:30,qn.updateProjectionMatrix(),Bt=$t(),Vr=Bt,Pt.layout()}addEventListener("resize",r0);var Pm=performance.now();function Ad(i){let e=i-Pm;Pm=i,Y.frameTimes.push(e),Y.frameTimes.length>4e3&&Y.frameTimes.shift();let t=Math.min(e/1e3,.05);if(Y.renderMode){oi.setClearColor(2302794,Y.renderMode.alpha),oi.clear(),aa.render(Y.renderMode.scene,Y.renderMode.cam),requestAnimationFrame(Ad);return}if(Y.ready){let n=t*Ai*(ae.turbo?1.6:1)*(qt.get("fast")?+qt.get("fast"):1);Ye.hitStop>0&&(Ye.hitStop-=t,n=0),Ke+=n,uS(n,Ke),Jm(n,Ke),g.mixer.update(n),jm(n,Ke),Nm(n,Ke),g.lying<.5&&Wr.length&&Zm(),KM(n,g.current===g.actions.win?g.actions.win.time:-1),tS(n,Ke),zS(n,Ke);for(let s=Ye.list.length-1;s>=0;s--){let r=Ye.list[s];r.age+=n,r.update(r,n),r.age>=r.life&&(ht.remove(r.mesh),Ye.list.splice(s,1))}if(Ye.kick=Math.max(0,Ye.kick-t/.15),Pd(t*(Ai<1?.8:1)),ZM(t),cS(),Pt.update(t,Ke),oi.clear(),aa.render(ht,qn),oi.clearDepth(),aa.render(ms,Js),Y.phase=ot.phase,qt.get("measure")&&(Y.fc=(Y.fc||0)+1)%6===0){let s=new wn().setFromObject(g.model),r=[],o=[];for(let a of[s.min.x,s.max.x])for(let l of[s.min.y,s.max.y])for(let c of[s.min.z,s.max.z])Yt.set(a,l,c).project(qn),r.push(Yt.x*.5+.5),o.push(.5-Yt.y*.5);(Y.box||(Y.box=[])).push([+Ke.toFixed(2),ot.phase,+Math.min(...r).toFixed(3),+Math.min(...o).toFixed(3),+Math.max(...r).toFixed(3),+Math.max(...o).toFixed(3)])}}requestAnimationFrame(Ad)}var eb=performance.now();Promise.all([qM(),YM(),document.fonts.load("700 20px Fredoka")]).then(()=>{$M(),r0(),g.x=0,Ft=g.x+(Vn?.3:2.4),Vr=Bt=$t()*(qt.get("auto")?1.25:1),Bt=$t(),ot.phase="idle",BS();{let e=new st(new jn(60,.4,9),Vt(It("#a8673f")));e.position.set(0,ca-.2,2.5),ht.add(e),Y.floor=e;for(let t=0;t<4;t++){let n=new st(new jn(60,.02,.04),Vt(It("#7d4a2e"),{outline:!1}));n.position.set(0,.21,-1.5+t*2.2),e.add(n)}}for(let e of Object.keys(Xn)){let t=Xn[e].clone(!0);t.position.set(Ft,1,-3),ht.add(t),Y.warm=(Y.warm||[]).concat(t)}Y.bonusSet.visible=!0,Y.warm.push(Y.bonusSet),Hc(!0),Fc(0),Yn(new P(Ft,-30,0),1),_n(new P(Ft,-30,0),1);let i=new st(new ks(.01,.01),Nc);i.position.set(Ft,-30,0),ht.add(i),Pd(0),aa.render(ht,qn),aa.render(ms,Js);for(let e of Y.warm)e===Y.bonusSet?e.visible=!1:ht.remove(e);return ht.remove(i),Hc(!1),Fc(null),qS().then(()=>{if(Pt.setTexts(),Pt.setBalance(ae.bal),Pt.setWind(ae.mode),document.title="Pip Pip Hooray!",Y.loadMs=Math.round(performance.now()-eb),Y.ready=!0,document.body.dataset.ready="1",qt.get("render")){XS(qt.get("render"));return}let e=()=>{ae.replay?s0(!1):ae.resume&&t()};qt.get("auto")||qt.get("nosplash")?e():i0(e);function t(){let n=ae.resume,s=Vc(n.state);s.pay=Math.round(n.payoutMultiplier*100),ae.li=Math.max(0,ae.levels.indexOf(n.amount)),Pt.setTexts(),ae.busy=!0,ae.t0=performance.now(),ae.round={mode:n.mode,pay:s.pay,active:!0,settled:!1},da(s)}})}).catch(i=>{let e=i&&i.code?rt.connErr:"load error: "+(i&&i.message),t=document.createElement("div");t.className="lbl",t.style.cssText="left:50%;top:40%;font-size:22px;color:#fff4dc;white-space:normal;width:80vw",t.textContent=e,Wn.appendChild(t),console.error(i)});requestAnimationFrame(Ad)});export default tb();
