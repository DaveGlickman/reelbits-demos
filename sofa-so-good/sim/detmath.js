// Deterministic trig: only + - * / and Math.round/abs, which every JS engine computes bit-identically (IEEE-754).
// Math.sin/cos/atan2 are "implementation-approximated" in the JS spec and can differ between V8 (Chrome/Node)
// and JavaScriptCore (Safari), so the physics engine is rebuilt to call these instead.
const PIO2_1 = 1.5707963267341256, PIO2_1T = 6.077100506506192e-11;
const PIO2_2 = 6.077100506303966e-11, PIO2_2T = 2.0222662487959506e-21;
const INVPIO2 = 0.6366197723675814;
const S1 = -1.66666666666666324348e-01, S2 = 8.33333333332248946124e-03, S3 = -1.98412698298579493134e-04,
  S4 = 2.75573137070700676789e-06, S5 = -2.50507602534068634195e-08, S6 = 1.58969099521155010221e-10;
const C1 = 4.16666666666666019037e-02, C2 = -1.38888888888741095749e-03, C3 = 2.48015872894767294178e-05,
  C4 = -2.75573143513906633035e-07, C5 = 2.08757232129817482790e-09, C6 = -1.13596475577881948265e-11;
function ksin(y) { const z = y * y; return y + y * z * (S1 + z * (S2 + z * (S3 + z * (S4 + z * (S5 + z * S6))))); }
function kcos(y) { const z = y * y; return 1 - 0.5 * z + z * z * (C1 + z * (C2 + z * (C3 + z * (C4 + z * (C5 + z * C6))))); }
function reduce(x) {
  const k = Math.round(x * INVPIO2);
  const y = ((x - k * PIO2_1) - k * PIO2_1T);
  return [k, y];
}
export function dsin(x) {
  if (x !== x || x === Infinity || x === -Infinity) return NaN;
  const [k, y] = reduce(x); const q = ((k % 4) + 4) % 4;
  return q === 0 ? ksin(y) : q === 1 ? kcos(y) : q === 2 ? -ksin(y) : -kcos(y);
}
export function dcos(x) {
  if (x !== x || x === Infinity || x === -Infinity) return NaN;
  const [k, y] = reduce(x); const q = ((k % 4) + 4) % 4;
  return q === 0 ? kcos(y) : q === 1 ? -ksin(y) : q === 2 ? -kcos(y) : ksin(y);
}
// atan on [0, 1] via range reduction to |t| <= tan(pi/12) and an odd polynomial
const AT = [3.33333333333329318027e-01, -1.99999999998764832476e-01, 1.42857142725034663711e-01,
  -1.11111104054623557880e-01, 9.09088713343650656196e-02, -7.69187620504482999495e-02,
  6.66107313738753120669e-02, -5.83357013379057348645e-02, 4.97687799461593236017e-02,
  -3.65315727442169155270e-02, 1.62858201153657823623e-02];
function katan(x) { // |x| <= 0.4375-ish
  const z = x * x; let p = AT[10];
  for (let i = 9; i >= 0; i--) p = AT[i] + z * p;
  return x - x * z * p;
}
const PI = 3.141592653589793, PI2 = 1.5707963267948966, PI6 = 0.5235987755982988, T15 = 0.2679491924311227;
function datan01(x) { // 0 <= x <= 1
  if (x <= T15) return katan(x);
  const s3 = 1.7320508075688772; // sqrt(3)
  return PI6 + katan((x * s3 - 1) / (x + s3));
}
export function datan(x) {
  if (x !== x) return NaN;
  const neg = x < 0; const a = neg ? -x : x;
  const r = a <= 1 ? datan01(a) : PI2 - datan01(1 / a);
  return neg ? -r : r;
}
export function datan2(y, x) {
  if (x !== x || y !== y) return NaN;
  if (x === 0 && y === 0) return 0;
  const ax = Math.abs(x), ay = Math.abs(y);
  let r = ay <= ax ? datan01(ay / ax) : PI2 - datan01(ax / ay);
  if (x < 0) r = PI - r;
  return y < 0 ? -r : r;
}
