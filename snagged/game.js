// Snagged! Stage 1: one round, fully animated, no maths (scripted demo rounds).
// Every visible picture is a restyled Kenney CC0 sprite (see ART_SOURCES.md). Code only places, moves, tints and labels them.
// Rule: only rigid objects move. No mesh bending, no cross-fades, no blur, no glow, no rays.
(() => {
'use strict';
const Q = new URLSearchParams(location.search);
const CAPTURE = Q.get('capture') === '1';

// ---------------------------------------------------------------- assets
const ART = ('banner bar_plank bg_rock_a bg_rock_b bg_weed_a bg_weed_c bg_weed_g boom_1 boom_2 boom_3 btn btn_play bubble chain ' +
  'chest_base chest_lid cloud coin crate debris_metal_1 debris_metal_2 debris_wood_1 debris_wood_2 debris_wood_3 dial dial_ticks dyn_stick ' +
  'fence fish_blue fish_blue_dn fish_blue_up fish_eel fish_eel_dn fish_eel_up fish_green fish_green_dn fish_green_up fish_puffer ' +
  'fish_puffer_dn fish_puffer_up fish_red fish_red_dn fish_red_up fish_rust fish_rust_dn fish_rust_up fish_salmon fish_salmon_dn ' +
  'fish_salmon_up fish_slate fish_slate_dn fish_slate_up flame flame_b hook hook_gold junk_bottle junk_case junk_kettle junk_pan junk_pot ' +
  'junk_tin junk_trolley junk_tyre needle plank post rock sand sand_top seagull seagull_blink seagull_squawk sign silt_1 silt_2 silt_3 ' +
  'sinker sparkle splash_1 splash_2 splash_3 splash_4 tag torch ui_barsHorizontal ui_fastForward ui_minus ui_plus ui_return wave_top ' +
  'weed_green weed_orange weed_pink whopper whopper_dn whopper_up window rod_seg rod_handle reel holder lure torch').split(' ');
const img = {};
const C = { ink: '#1E2B31', cream: '#FFF3DC', creamDim: '#E9D9B8', lantern: '#F5C653', rust: '#D9703A' };
const SCENES = {
  shallows: { name: 'THE SHALLOWS', sky: ['#6A5A84','#8C6B8C','#B87C88','#DE957E','#F2B47E'],
            water: ['#68AAA6','#5F9F9C','#569492','#4E8988','#477F7F','#407475','#3A6A6C'], far: '#55908F', near: '#43787A' },
  reef:   { name: 'THE REEF',   sky: ['#5D4E78','#7E5F86','#A86E84','#D2847A','#EDA676'],
            water: ['#56989A','#4E8E8F','#468386','#3F787D','#386D74','#32636B','#2B5962'], far: '#467F87', near: '#356770' },
  trench: { name: 'THE TRENCH', sky: ['#4F4470','#6C5480','#94637E','#BF7774','#DE976C'],
            water: ['#477F83','#3F7479','#376A70','#305F67','#29555E','#224A54','#1C414B'], far: '#3A6F77', near: '#2A565E' },
  night:  { name: 'NIGHT SHIFT', bonus: 1, lanterns: true, sky: ['#141A33','#1B2240','#232B4C','#2D3558','#3A3F63'],
            water: ['#24485A','#203F51','#1C3748','#182F40','#152838','#122231','#0F1C2A'], far: '#2C4E5E', near: '#1F3A48', horizon: '#3B4A6A', sea: '#2E4560' },
  deep:   { name: 'DEEP WATER', bonus: 2, lanterns: true, sky: ['#0F2238','#132A44','#173250','#1C3B5C','#224468'],
            water: ['#1F5A78','#1B506E','#174664','#133C59','#10334F','#0D2A44','#0A223A'], far: '#2A6A86', near: '#1A4B64', horizon: '#2E5876', sea: '#25506E' },
  thing:  { name: 'THE THING BELOW', bonus: 3, lanterns: true, sky: ['#1E1030','#2A1540','#371B4E','#45215C','#552A66'],
            water: ['#3B2F5C','#352A54','#2F254C','#292044','#231B3C','#1D1634','#18122C'], far: '#4A3A70', near: '#33285A', horizon: '#5A3B6E', sea: '#3E2E5E' },
};
const SPOT_ORDER = ['shallows', 'reef', 'trench'];
const FISH_N = ['fish_salmon', 'fish_slate', 'fish_rust', 'fish_blue', 'fish_green', 'fish_red', 'fish_puffer', 'fish_eel'];
const JUNK_N = ['junk_bottle', 'junk_pan', 'junk_kettle', 'junk_tyre', 'junk_tin', 'junk_case', 'junk_pot', 'junk_trolley'];
const TACKLE_N = { '-': 'none', h: 'hook', k: 'weighted', d: 'dynamite' };
const MODES = { SHALLOWS: 1, REEF: 1, TRENCH: 1, SHALLOWS_BAIT: 3, REEF_BAIT: 3, TRENCH_BAIT: 3, NIGHT_SHIFT: 100, DEEP_WATER: 300, THING_BELOW: 1000 };
const BUYS = [['NIGHT_SHIFT', 'NIGHT SHIFT', '5 drops'], ['DEEP_WATER', 'DEEP WATER', '7 drops, two Whoppers'], ['THING_BELOW', 'THE THING BELOW', '9 drops, one giant chest']];
// ---------------------------------------------------------------- deterministic random
let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const R = (a, b) => a + (b - a) * rnd();

// ---------------------------------------------------------------- easing
const E = {
  lin: t => t, inQ: t => t * t, outQ: t => 1 - (1 - t) * (1 - t), inC: t => t * t * t, outC: t => 1 - Math.pow(1 - t, 3),
  inOut: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  back: t => { const c = 1.9; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); },
  backS: t => { const c = 1.2; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); },
  settle: t => 1 - Math.exp(-6 * t) * Math.cos(t * 11), // swing past, back, settle
};
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// ---------------------------------------------------------------- time and tweens
let RT = 0;          // real time ms (idle world)
let GT = 0;          // game time ms (round beats; turbo and skip speed it up)
let speed = 1, turbo = false, skipping = false;
const tasks = [];
function tween(dur, fn, ease = E.inOut) {
  return new Promise(res => { tasks.push({ t0: GT, dur: Math.max(1, dur * (turbo ? 0.5 : 1)), fn, ease, res }); });
}
const wait = ms => tween(ms, () => {});
const all = ps => Promise.all(ps);
function runTasks() {
  for (let i = tasks.length - 1; i >= 0; i--) {
    const k = tasks[i]; const p = clamp((GT - k.t0) / k.dur, 0, 1);
    k.fn(k.ease(p), p);
    if (p >= 1) { tasks.splice(i, 1); k.res(); }
  }
}

// ---------------------------------------------------------------- canvas and layout
const cv = document.getElementById('c'); let g = cv.getContext('2d');
let W = 0, H = 0, DPR = 1, L = null, bgCache = null, spot = SCENES.reef;
function layout() {
  const portrait = H >= W;
  const barH = Math.max(Math.round(H * (portrait ? 0.14 : 0.12)), Math.min(46, Math.round(H * 0.2))), stripH = Math.round(H * (portrait ? 0.22 : 0.13)), tackH = Math.round(H * (portrait ? 0.075 : 0.07));
  const waterTop = stripH + tackH, waterH = H - barH - waterTop;
  const boardW = portrait ? W - 12 : Math.min(W * 0.62, waterH * 1.75);
  const boardX = (W - boardW) / 2;
  const o = { portrait, barH, stripH, tackH, waterTop, waterH, boardX, boardW, laneW: boardW / 5, rowH: waterH / 6 };
  o.deckY = stripH * 0.80; o.surf = waterTop - tackH * 0.2;
  // scale geometry
  if (portrait) { o.beamY = stripH * 0.22; o.dialR = stripH * 0.16; o.scx = boardX + (boardW / 5) * 4; o.armY = o.beamY; }
  else { o.dialR = Math.min(H * 0.12, (W - boardX - boardW) * 0.28); o.scx = boardX + boardW + (W - boardX - boardW) * 0.42; o.armY = stripH * 0.05 + o.dialR * 0.12; }
  o.chainH = o.dialR * (portrait ? 0.4 : 0.55); o.sdy = o.armY + o.chainH + o.dialR;
  o.crateS = o.dialR * (portrait ? 1.35 : 1.3); o.ccy = o.sdy + o.dialR + o.crateS * 0.12 + o.crateS * 0.39;
  return o;
}
const X = u => L.boardX + L.laneW * u;
const Y = v => L.waterTop + L.rowH * v;
const vWin = () => -(L.tackH * 0.5) / L.rowH;
const vSurf = () => (L.surf - L.waterTop) / L.rowH;

// ---------------------------------------------------------------- drawing helpers
function spr(n, x, y, w, h, rot = 0, flip = false, sx = 1, sy = 1, flipY = false) {
  const i = img[n]; if (!i) return 0;
  const s = Math.min(w / i.width, h / i.height); const dw = i.width * s, dh = i.height * s;
  g.save(); g.translate(x, y); if (rot) g.rotate(rot); g.scale((flip ? -1 : 1) * sx, (flipY ? -1 : 1) * sy);
  g.drawImage(i, -dw / 2, -dh / 2, dw, dh); g.restore(); return dh;
}
const tintCache = {};
function tinted(n, col) {
  const k = n + col; if (tintCache[k]) return tintCache[k]; const i = img[n];
  const c = document.createElement('canvas'); c.width = i.width; c.height = i.height; const x = c.getContext('2d');
  x.drawImage(i, 0, 0); x.globalCompositeOperation = 'source-in'; x.fillStyle = col; x.fillRect(0, 0, c.width, c.height);
  return (tintCache[k] = c);
}
function sil(gx, n, col, x, yBottom, h, flip = false) {
  const t = tinted(n, col); const s = h / t.height; const w = t.width * s;
  gx.save(); gx.translate(x, yBottom); if (flip) gx.scale(-1, 1); gx.drawImage(t, -w / 2, -h, w, h); gx.restore();
}
function slice3(n, x, y, w, h, cap) {
  const i = img[n]; const sw = i.width * cap; const dw = Math.min(h * (i.width / i.height) * cap, w / 2);
  g.drawImage(i, 0, 0, sw, i.height, x, y, dw, h);
  g.drawImage(i, sw, 0, i.width - 2 * sw, i.height, x + dw, y, w - 2 * dw, h);
  g.drawImage(i, i.width - sw, 0, sw, i.height, x + w - dw, y, dw, h);
}
const DRAWN = new Set();
function text(t, x, y, size, col = C.cream, align = 'center', ink = true, gx = g) {
  if (social) DRAWN.add(t);
  gx.font = `700 ${size}px Fredoka`; gx.textAlign = align; gx.textBaseline = 'middle';
  if (ink) { gx.lineJoin = 'round'; gx.lineWidth = Math.max(2, size * 0.22); gx.strokeStyle = C.ink; gx.strokeText(t, x, y); }
  gx.fillStyle = col; gx.fillText(t, x, y);
}
const money = v => v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function fitText(t, x, y, size, maxW, col = C.cream) { g.font = `700 ${size}px Fredoka`; const w = g.measureText(t).width; text(t, x, y, w > maxW ? size * maxW / w : size, col); }
// nine-slice a framed sprite (keeps its painted corners) for panels
function slice9(n, x, y, w, h, c = 0.28) {
  const i = img[n], cw = i.width * c, chh = i.height * c * 1.6, dc = Math.min(cw, w / 3, h / 3), dch = Math.min(chh, h / 3);
  const sx = [0, cw, i.width - cw, i.width], sy = [0, chh, i.height - chh, i.height], dx = [x, x + dc, x + w - dc, x + w], dy = [y, y + dch, y + h - dch, y + h];
  for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) g.drawImage(i, sx[a], sy[b], sx[a + 1] - sx[a], sy[b + 1] - sy[b], dx[a], dy[b], dx[a + 1] - dx[a], dy[b + 1] - dy[b]);
}

// ---------------------------------------------------------------- static background (rebuilt on resize or spot change)
function buildBg() {
  const c = document.createElement('canvas'); c.width = Math.round(W * DPR); c.height = Math.round(H * DPR);
  const x = c.getContext('2d'); x.setTransform(DPR, 0, 0, DPR, 0, 0);
  x.fillStyle = spot.sea || '#7C9FA6'; x.fillRect(0, 0, W, H); // never leave an unpainted gap
  const sh = L.stripH + L.tackH * 0.4;
  spot.sky.forEach((col, i) => { x.fillStyle = col; x.fillRect(0, sh * i / spot.sky.length, W, sh / spot.sky.length + 1); });
  const hz = L.stripH * 0.78;
  const hc = spot.bonus ? spot.horizon : '#8C7EA0';
  sil(x, 'bg_rock_a', hc, W * 0.08, hz, L.stripH * 0.30);
  sil(x, 'bg_rock_b', hc, W * 0.30, hz, L.stripH * 0.22, true);
  sil(x, 'bg_rock_a', spot.bonus ? spot.far : '#7A6F92', W * 0.82, hz, L.stripH * 0.36, true);
  x.fillStyle = spot.sea || '#7C9FA6'; x.fillRect(0, hz, W, L.stripH - hz + 2); x.fillStyle = spot.horizon || '#8FB0B2'; x.fillRect(0, hz, W, 2);
  const top = L.surf, h = H - L.barH - top;
  spot.water.forEach((col, i) => { x.fillStyle = col; x.fillRect(0, top + h * i / spot.water.length, W, h / spot.water.length + 1); });
  const floor = H - L.barH - L.rowH * 0.35; let s = 5;
  const r2 = () => (s = (s * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < 9; i++) sil(x, i % 2 ? 'bg_weed_a' : 'bg_weed_c', spot.far, (i + 0.2 * r2()) * W / 8, floor - L.rowH * 0.6, L.rowH * (1.4 + r2()), i % 3 === 0);
  for (let i = 0; i < 7; i++) sil(x, ['bg_rock_a', 'bg_weed_g', 'bg_rock_b'][i % 3], spot.near, (i + 0.5 * r2()) * W / 6, floor, L.rowH * (0.8 + 0.6 * r2()), i % 2 === 0);
  const sb = H - L.barH - L.rowH * 0.42, sz = L.rowH * 0.5;
  for (let xx = 0; xx < W; xx += sz) { x.drawImage(img.sand_top, xx, sb, sz, sz); x.drawImage(img.sand, xx, sb + sz, sz, sz); }
  // jetty posts, fence and deck
  const postH = L.waterTop - L.deckY + L.rowH * 0.15, pw = Math.min(L.laneW * 0.16, 22);
  const xs = []; for (let i = 0; i <= 5; i++) xs.push(L.boardX + L.laneW * i);
  for (let p = L.boardX - L.laneW; p > -L.laneW; p -= L.laneW) xs.push(p);
  for (let p = L.boardX + L.laneW * 6; p < W + L.laneW; p += L.laneW) xs.push(p);
  xs.forEach(p => x.drawImage(img.post, p - pw / 2, L.deckY, pw, postH));
  const fh = L.stripH * 0.2, fi = img.fence, fs = fh / fi.height;
  for (let p = fh * 0.5; p < W + fh; p += fh * 0.98) x.drawImage(fi, p - fi.width * fs / 2, L.deckY - fh * 0.42 - fh / 2, fi.width * fs, fh);
  const deckH = L.stripH * 0.13, plw = deckH * (img.plank.width / img.plank.height);
  for (let p = -plw * 0.3; p < W; p += plw * 0.97) x.drawImage(img.plank, p, L.deckY, plw, deckH);
  bgCache = c;
}

// ---------------------------------------------------------------- world state
const FISH_V = { fish_rust: 1, fish_red: 1, fish_salmon: 1, fish_blue: 1, fish_green: 1, fish_slate: 1, fish_puffer: 1, fish_eel: 1 };
let items = [], leaving = [], hooks = [], fx = [], debris = [], pops = [], flyers = [], idleBubbles = [], trail = [];
let crate = { contents: [], squash: 0, mult: 1, coin: 0 };
let needle = { a: -2.3, target: -2.3 }, win = { shown: 0, value: 0 };
const RG = window.SnagRGS, ONLINE = !!(RG && RG.params.rgsHost);
// offline demo books only for recordings or an explicit offline flag; a real launch without a server shows an error instead
const OFFLINE_OK = CAPTURE || Q.get('offline') === '1';
const LOCAL_RGS = ONLINE && /^(localhost|127\.0\.0\.1|192\.168\.|10\.)/.test(RG.params.rgsHost);
const TEST = OFFLINE_OK || LOCAL_RGS; // test hooks never exist on a real Engine server
let connErr = (!ONLINE && !OFFLINE_OK) ? 'Unable to connect to the game server. Please reload the game.' : null, autoLeft = 0, tackleGold = [1, 1, 1, 1, 1], tackleDone = [true, true, true, true, true];
let currency = (RG && RG.params.currency) || 'USD', balanceMicro = 1000e6, betLevels = [0.1, 0.2, 0.4, 0.5, 1, 2, 4, 5, 10, 20, 50, 100].map(v => v * 1e6), betIx = 4;
let curSpot = 'reef', bait = false, auto = false, social = !!(RG && RG.params.social), panel = null, bonusState = null;
const betMicro = () => betLevels[betIx];
const amt = x => Math.round(x * betMicro());                       // x times the bet -> money (micro units)
const fmtM = x => RG ? RG.fmtMoney(amt(x), currency) : money(x);   // money with symbol
const fmtRoll = (x, final) => { if (!RG || final) return fmtM(x); const d = RG.meta(currency).decimals, q = 10 ** (6 - d); return RG.fmtMoney(Math.round(amt(x) / q) * q, currency); };
const fmtTag = x => RG ? RG.fmtShort(amt(x), currency) : money(x); // number only, for price tags
const fmtBal = () => RG ? RG.fmtBalance(balanceMicro, currency) : money(balanceMicro / 1e6);
const modeName = () => curSpot.toUpperCase() + (bait ? '_BAIT' : '');
let tackle = [], tackleSpin = [0, 0, 0, 0, 0], tackleLand = [0, 0, 0, 0, 0];
let gull = { pose: 'seagull', hop: 0, nextBlink: 2000, nextHop: 6000, squawkUntil: 0 };
let rods = [0, 1, 2, 3, 4].map(i => ({ cast: 0, bend: 0, spin: 0, quiver: 0, ph: i * 1.7 }));
let banner = null, shadows = [], playBtn = { press: 0 }, busy = false;
const TACKLE_ICONS = ['hook', 'weighted', 'golden', 'dynamite', 'none'];

function mkItem(def, lane, row) {
  if (!def || def === 'span') return null;
  const [name, value] = def;
  const kind = name === 'whopper' ? 'whopper' : (FISH_V[name] ? 'fish' : 'junk');
  return { name, value: value || 0, kind, lane, row, u: kind === 'whopper' ? lane + 1 : lane + 0.5 + R(-0.05, 0.05), v: row + 0.5 + R(-0.05, 0.05),
    rot: kind === 'junk' ? R(-0.45, 0.45) : R(-0.09, 0.09), flip: kind === 'whopper' ? false : rnd() > 0.5, sx: 1, sy: 1, ox: 0, oy: 0, phase: R(0, 6.28), rate: R(0.8, 1.25),
    flapRate: R(4.5, 7), state: 'idle', mult: 1, shake: 0, flipY: false, hidden: false };
}
function stock(board) {
  items = [];
  board.forEach((row, r) => row.forEach((d, c) => { const it = mkItem(d, c, r); if (it) items.push(it); }));
}
function makeChests(defs) { return defs.map((d, c) => ({ lane: c, content: d, giant: !!(d && d.giant), lid: 0, open: false, coinUp: 0, sparkT: -1 })); }
let chests = makeChests([null, null, null, null, null]);

// ---------------------------------------------------------------- books -> rounds (the page never decides an outcome)
function decodeCell(c) {
  if (!c) return null;
  if (c === 'W') return 'span';
  if (c[0] === 'w') return ['whopper', +c.split(':')[1] / 100];
  if (c[0] === 'f') { const [n, v] = c.slice(1).split(':'); return [FISH_N[+n], +v / 100]; }
  if (c[0] === 'j') return [JUNK_N[+c.slice(1)]];
  return null;
}
const decBoard = str => str.split('/').map(r => r.split(',').map(c => c || null));
const tackleName = t => t[0] === 'g' ? 'golden' : TACKLE_N[t] || 'none';
const chestDef = c => !c ? null : c[0] === 'x' ? { mult: +c.slice(1) } : c[0] === 'L' ? { lures: c.length } : c[0] === 'G' ? { giant: +c.slice(1) } : null;
function roundFrom(raw, spotName) {
  return { spot: spotName, raw, board: raw.board.map(r => r.map(decodeCell)), tackle: raw.tackle.map(tackleName), gold: raw.tackle.map(t => SnagRules.goldOf(t)), chests: raw.chests.map(chestDef) };
}
function itemAt(lane, row) { return items.find(it => it.row === row && (it.lane === lane || (it.kind === 'whopper' && it.lane + 1 === lane)) && !it.hidden); }
// turn the shared rules' result into the page's lane events (same rules file as the maths)
function laneEvents(res, rd) {
  return res.lanes.filter(l => l.type !== '-').map(l => ({
    lane: l.lane, type: tackleName(l.type), gold: rd.gold[l.lane],
    smash: l.smash.map(r => itemAt(l.lane, r)).filter(Boolean),
    hit: l.snag !== null ? itemAt(l.lane, l.snag) : l.catch !== null ? itemAt(l.lane, l.catch) : l.whopper !== null ? itemAt(l.lane, l.whopper) : null,
    chest: l.chest, blasted: l.blasted.map(r => itemAt(l.lane, r)).filter(Boolean), stunned: l.stunned.map(r => itemAt(l.lane, r)).filter(Boolean),
  }));
}

// ---------------------------------------------------------------- sound (CC0 only; see art/audio_src/LICENCES.md)
const VARIANTS = { tick: ['tick1', 'tick2', 'tick3'], plop: ['plop1', 'plop2', 'plop3'], snag: ['snag1', 'snag2', 'snag3'], twang: ['twang1', 'twang2'],
  bite: ['bite1', 'bite2'], smash: ['smash1', 'smash2', 'smash3'], thud: ['thud1', 'thud2'], cast: ['cast', 'cast2'] };
const FX = ['click', 'tick1', 'tick2', 'tick3', 'spin', 'cast', 'cast2', 'plop1', 'plop2', 'plop3', 'snag1', 'snag2', 'snag3', 'twang1', 'twang2', 'bite1', 'bite2',
  'smash1', 'smash2', 'smash3', 'fuse', 'boom', 'reel', 'splash', 'bigsplash', 'thud1', 'thud2', 'coins', 'chip', 'creak', 'latch', 'lure', 'snap', 'escape', 'gull',
  'confirm', 'win_s', 'win_m', 'win_b', 'bonus'];
const SND = { ctx: null, buf: {}, muted: (() => { try { return localStorage.getItem('snagged_mute') === '1'; } catch (e) { return false; } })(),
  last: {}, music: null, musicName: null, want: null, log: [], fx: null, mus: null, seed: 3 };
const srnd = () => (SND.seed = (SND.seed * 48271) % 2147483647) / 2147483647;
function loadBuf(n) {
  if (SND.buf[n] || !SND.ctx) return SND.buf[n];
  return (SND.buf[n] = fetch('audio/' + n + '.m4a').then(r => r.arrayBuffer()).then(a => SND.ctx.decodeAudioData(a)).then(b => (SND.buf[n] = b)).catch(() => null));
}
function sndInit() {
  if (SND.ctx || CAPTURE) return;
  try { SND.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
  const lim = SND.ctx.createDynamicsCompressor(); lim.threshold.value = -10; lim.knee.value = 6; lim.ratio.value = 12; lim.attack.value = 0.003; lim.release.value = 0.15; lim.connect(SND.ctx.destination);
  SND.fx = SND.ctx.createGain(); SND.fx.connect(lim); SND.mus = SND.ctx.createGain(); SND.mus.gain.value = 0.55; SND.mus.connect(lim);
  setMuted(SND.muted); FX.forEach(loadBuf); if (SND.want) music(SND.want, true);
}
function setMuted(m) { SND.muted = m; try { localStorage.setItem('snagged_mute', m ? '1' : '0'); } catch (e) {} if (SND.ctx) { SND.fx.gain.value = m ? 0 : 1; SND.mus.gain.value = m ? 0 : 0.55; } }
function sfx(name, o = {}) {
  let n = name; const v = VARIANTS[name];
  if (v) { let k = Math.floor(srnd() * v.length); if (v[k] === SND.last[name]) k = (k + 1) % v.length; n = v[k]; SND.last[name] = n; }
  const rate = (o.rate || 1) * (1 + (srnd() - 0.5) * 0.08), vol = o.vol === undefined ? 1 : o.vol;
  SND.log.push({ t: RT, n, rate, vol });
  if (!SND.ctx || SND.muted) return;
  const b = SND.buf[n]; if (!b || b instanceof Promise) return;
  const src = SND.ctx.createBufferSource(); src.buffer = b; src.playbackRate.value = rate;
  const gn = SND.ctx.createGain(); gn.gain.value = vol; src.connect(gn); gn.connect(SND.fx); src.start();
}
async function music(name, force) {
  if (SND.want === name && !force) return; SND.want = name; SND.log.push({ t: RT, music: name });
  if (!SND.ctx) return;
  const old = SND.music; if (old) { old.g.gain.setTargetAtTime(0, SND.ctx.currentTime, 0.25); setTimeout(() => { try { old.s.stop(); } catch (e) {} }, 1200); SND.music = null; }
  const b = await loadBuf(name); if (!b || SND.want !== name) return;
  const src = SND.ctx.createBufferSource(); src.buffer = b; src.loop = true; const g = SND.ctx.createGain(); g.gain.value = 0; src.connect(g); g.connect(SND.mus);
  src.start(); g.gain.setTargetAtTime(1, SND.ctx.currentTime, 0.4); SND.music = { s: src, g };
}

// offline soundtrack for recordings: replays the logged sound events through the same files, sample-accurate
async function renderAudio(durMs) {
  const sr = 44100, ctx = new OfflineAudioContext(2, Math.ceil(durMs / 1000 * sr), sr);
  const names = new Set(SND.log.map(e => e.n || e.music));
  const bufs = {}; await Promise.all([...names].map(n => fetch('audio/' + n + '.m4a').then(r => r.arrayBuffer()).then(a => ctx.decodeAudioData(a)).then(b => { bufs[n] = b; }).catch(() => {})));
  const lim = ctx.createDynamicsCompressor(); lim.threshold.value = -10; lim.knee.value = 6; lim.ratio.value = 12; lim.attack.value = 0.003; lim.release.value = 0.15; lim.connect(ctx.destination);
  const fxG = ctx.createGain(); fxG.gain.value = 0.8; fxG.connect(lim); const muG = ctx.createGain(); muG.gain.value = 0.5; muG.connect(lim);
  const mus = SND.log.filter(e => e.music);
  mus.forEach((e, i) => { const b = bufs[e.music]; if (!b) return; const s0 = ctx.createBufferSource(); s0.buffer = b; s0.loop = true; const g0 = ctx.createGain(); g0.gain.setValueAtTime(0, e.t / 1000); g0.gain.setTargetAtTime(1, e.t / 1000, 0.3);
    const end = i + 1 < mus.length ? mus[i + 1].t / 1000 : durMs / 1000; g0.gain.setTargetAtTime(0, end, 0.25); s0.connect(g0); g0.connect(muG); s0.start(e.t / 1000); s0.stop(Math.min(durMs / 1000, end + 1.5)); });
  for (const e of SND.log) { if (!e.n || !bufs[e.n] || e.t > durMs) continue; const s1 = ctx.createBufferSource(); s1.buffer = bufs[e.n]; s1.playbackRate.value = e.rate; const g1 = ctx.createGain(); g1.gain.value = e.vol; s1.connect(g1); g1.connect(fxG); s1.start(e.t / 1000); }
  const out = await ctx.startRendering(), L0 = out.getChannelData(0), R0 = out.getChannelData(1), n = out.length;
  const buf = new ArrayBuffer(44 + n * 4), v = new DataView(buf), ws = (o, t) => { for (let i = 0; i < t.length; i++) v.setUint8(o + i, t.charCodeAt(i)); };
  ws(0, 'RIFF'); v.setUint32(4, 36 + n * 4, true); ws(8, 'WAVE'); ws(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 2, true); v.setUint32(24, sr, true); v.setUint32(28, sr * 4, true); v.setUint16(32, 4, true); v.setUint16(34, 16, true); ws(36, 'data'); v.setUint32(40, n * 4, true);
  for (let i = 0; i < n; i++) { v.setInt16(44 + i * 4, Math.max(-1, Math.min(1, L0[i])) * 32767, true); v.setInt16(46 + i * 4, Math.max(-1, Math.min(1, R0[i])) * 32767, true); }
  let bin = ''; const u8 = new Uint8Array(buf); for (let i = 0; i < u8.length; i += 32768) bin += String.fromCharCode.apply(null, u8.subarray(i, i + 32768)); return btoa(bin);
}

// ---------------------------------------------------------------- effects
function addFx(frames, u, v, size, dur, opts = {}) { fx.push({ frames, u, v, size, dur, t0: GT, rot: opts.rot || 0, screen: opts.screen, grow: opts.grow || 0.35 }); }
function burstDebris(it) {
  const metal = /tyre|pan|pot|trolley|tin|kettle/.test(it.name);
  const names = metal ? ['debris_metal_1', 'debris_metal_2', 'debris_metal_1'] : ['debris_wood_1', 'debris_wood_2', 'debris_wood_3'];
  for (let i = 0; i < 4; i++) debris.push({ name: names[i % 3], u: it.u, v: it.v, vu: R(-1.6, 1.6), vv: R(-1.8, -0.4), rot: R(0, 6), vr: R(-8, 8), t0: GT, life: 900, s: R(0.16, 0.24) });
  addFx(['silt_1', 'silt_2', 'silt_3'], it.u, it.v, 0.9, 420);
}
function pop(textv, x, y, col = C.lantern, size = 1) {
  const live = pops.filter(p => GT - p.t0 < 500).length;
  const px = L.portrait ? L.scx - L.crateS * 1.45 : L.scx - L.crateS * 1.2, py = (L.portrait ? L.ccy - L.crateS * 0.2 : L.ccy) + live * L.rowH * 0.28;
  pops.push({ text: textv, x: px, y: py, t0: GT, col, size });
}

// ---------------------------------------------------------------- beats
async function spinTackle(types, gold) {
  tackle = types.slice(); tackleGold = gold || [1, 1, 1, 1, 1]; tackleDone = [false, false, false, false, false]; sfx('spin', { vol: 0.6 });
  const p = types.map((t, i) => {
    const target = 10 + TACKLE_ICONS.indexOf(t) + 5 * Math.floor(R(1, 2.99));
    const start = tackleSpin[i] % 5;
    return wait(i * 80).then(() => tween(500, k => { tackleSpin[i] = start + (target - start) * k; }, E.back))
      .then(() => { tackleDone[i] = true; sfx('tick', { rate: 0.9 + i * 0.06 }); return tween(160, (k, p) => { tackleLand[i] = Math.sin(p * Math.PI); }, E.lin); });
  });
  await all(p);
}
function rodGeom(i) {
  // five rods stand in holders on the jetty, leaning out so each tip sits over its lane. Two rigid pieces and a hinge:
  // the tip piece turns further than the butt, which reads as the rod flexing without bending any picture.
  const r = rods[i], len = L.stripH * (L.portrait ? 0.42 : 0.74), lean = 0.18, tipX0 = X(i + 0.5);
  const base = { x: tipX0 - Math.sin(lean) * len, y: L.deckY + L.stripH * 0.05 };
  const sw = Math.sin(RT / 1100 + r.ph) * 0.012 + (r.quiver ? Math.sin(GT / 21 + r.ph) * r.quiver : 0);
  const a1 = lean + r.cast + r.bend * 0.35 + sw, a2 = a1 + r.bend * 0.9 + sw * 1.6;
  const l1 = len * 0.55, l2 = len * 0.47;
  const j = { x: base.x + Math.sin(a1) * l1, y: base.y - Math.cos(a1) * l1 };
  const tip = { x: j.x + Math.sin(a2) * l2, y: j.y - Math.cos(a2) * l2 };
  return { base, j, tip, a1, a2, l1, l2, len };
}
const rodOf = h => rods[h.lane];
function rodPulse(r, amt, dur, hold = 0) { const b0 = r.bend; return tween(dur, (k, p) => { r.bend = lerp(b0, hold, p) + amt * Math.sin(p * Math.PI) * (1 - p * 0.3); }, E.lin); }
function castFlick(r) {
  return tween(140, k => { r.cast = lerp(-0.28, 0.14, k); }, E.outQ).then(() => tween(320, (k, p) => { r.cast = 0.14 * (1 - E.settle(p)); }, E.lin));
}
function hookFor(lane, type) {
  return { lane, type, u: lane + 0.5, v: vWin() + 0.35, sway: 0, twang: 0, twangT: -1, item: null, show: true, snapped: false, cut: 0, sinkV: 0, slack: 0 };
}
async function windUp(active) {
  hooks = active.map(t => hookFor(t.lane, t.type)); if (hooks.length) sfx('reel', { vol: 0.35, rate: 1.4 });
  const h0 = hooks.map(h => h.v);
  await tween(200, k => hooks.forEach((h, i) => { h.v = h0[i] - 0.18 * k; rodOf(h).cast = -0.28 * k; }), E.outQ);
}
function depthOf(ev) {
  if (ev.type === 'dynamite') return 4.5;
  if (ev.hit) return ev.hit.row + 0.25;
  if (ev.chest) return 5.25;
  return 5.25;
}
async function dropHook(h, ev, maxDepth) {
  const v0 = h.v, v1 = depthOf(ev), dur = 350 * Math.sqrt((v1 - v0) / (maxDepth - v0));
  let lastBubble = 0; castFlick(rodOf(h)); sfx('cast', { vol: 0.55 }); wait(90).then(() => sfx('plop', { vol: 0.7 }));
  // weighted: pause briefly at each piece of junk it smashes
  const stops = ev.smash.map(it => ({ it, v: it.row + 0.25 }));
  let from = v0;
  for (const s of stops) {
    await tween(dur * (s.v - from) / (v1 - v0), (k, p) => { h.v = lerp(from, s.v, k); h.sway = Math.sin(p * 9) * 0.05 * (1 - p); if (GT - lastBubble > 40) { lastBubble = GT; trail.push({ u: h.u + R(-0.05, 0.05), v: h.v - 0.3, t0: GT, s: R(4, 9) }); } }, E.inQ);
    smashJunk(s.it); h.twangT = GT; rodPulse(rodOf(h), 0.3, 160);
    await wait(80);
    from = s.v;
  }
  await tween(dur * (v1 - from) / (v1 - v0) + (stops.length ? 60 : 0), (k, p) => {
    h.v = lerp(from, v1, k); h.sway = Math.sin(p * 9) * 0.06 * (1 - p);
    if (GT - lastBubble > 40) { lastBubble = GT; trail.push({ u: h.u + R(-0.05, 0.05), v: h.v - 0.3, t0: GT, s: R(4, 9) }); }
  }, stops.length ? E.outQ : E.inQ);
}
function smashJunk(it) {
  it.state = 'smashed'; sfx('smash', { vol: 0.8 });
  tween(90, k => { it.sx = 1 + 0.25 * k; it.sy = 1 - 0.3 * k; }, E.outQ).then(() => { it.hidden = true; burstDebris(it); });
}
async function snag(h, it) {
  it.state = 'snagged'; h.twangT = GT; sfx('snag'); sfx('twang', { vol: 0.6 });
  addFx(['silt_1', 'silt_2', 'silt_3'], it.u, it.v + 0.15, 0.7, 380);
  const v = h.v; rodPulse(rodOf(h), 0.5, 330, 0.12);
  await all([
    tween(250, (k, p) => { h.v = v - 0.16 * Math.sin(p * Math.PI) * (1 - p * 0.3); }, E.lin),
    tween(330, (k, p) => { it.shake = Math.sin(p * Math.PI * 6) * 0.16 * (1 - p); }, E.lin),
  ]);
}
async function bite(h, it) {
  it.state = 'hooked'; h.item = it; sfx('bite', { vol: 0.8 }); sfx('twang', { vol: 0.35, rate: 1.25 });
  const u0 = it.u, v0 = it.v, r0 = it.rot;
  const r = rodOf(h);
  await tween(200, k => { it.u = lerp(u0, h.u, k); it.v = lerp(v0, h.v + 0.32, k); it.rot = lerp(r0, it.flip ? 1.25 : -1.25, k); r.bend = 0.4 * k; }, E.back);
  it.follow = true; it.flapRate = 16;
  await tween(360, (k, p) => { it.shake = Math.sin(p * Math.PI * 6) * 0.32 * (1 - p * 0.5); r.bend = 0.36 + Math.sin(p * Math.PI * 6) * 0.12 * (1 - p * 0.5); }, E.lin);
  it.shake = 0;
}
async function openChest(h, ch) {
  h.twangT = GT; rodPulse(rodOf(h), 0.3, 220);
  await tween(120, (k, p) => { h.v = 5.25 - 0.08 * Math.sin(p * Math.PI); }, E.lin);
  ch.open = true; ch.sparkT = GT; sfx('creak', { vol: 0.8 }); sfx('latch', { vol: 0.6 });
  await tween(300, k => { ch.lid = k; }, E.back);
  if (ch.content && (ch.content.mult || ch.content.giant)) await tween(400, k => { ch.coinUp = k; }, E.backS);
}
async function dynamite(h, ev) {
  // fuse burns, then a drawn explosion clears every piece of junk in the lane; its fish float up stunned
  sfx('fuse', { vol: 0.7 });
  await tween(250, (k, p) => { h.fuse = p; }, E.lin);
  h.show = false; h.boom = true; sfx('boom'); rodPulse(rodOf(h), 0.45, 300);
  addFx(['boom_1', 'boom_2', 'boom_3'], h.u, h.v, 1.6, 380, { grow: 0.5 });
  ev.blasted.forEach((it, i) => wait(i * 30).then(() => { it.state = 'smashed'; it.hidden = true; burstDebris(it); }));
  ev.stunned.forEach(it => { it.state = 'stunned'; it.mult = 0.5; tween(260, k => { it.rotStun = k; }, E.back); });
  await wait(250);
}
async function whopperStrain(it, hs) {
  hs.forEach(h => { h.twangT = GT; rodOf(h).quiver = 0.04; }); sfx('twang', { rate: 0.75 }); sfx('reel', { vol: 0.5, rate: 0.8 });
  await tween(400, (k, p) => { it.shake = Math.sin(p * Math.PI * 10) * 0.05; hs.forEach(h => { h.v = it.row + 0.25 + Math.sin(p * Math.PI * 10) * 0.04; rodOf(h).bend = 0.8 * E.outQ(Math.min(1, p * 3)); }); }, E.lin);
  hs.forEach(h => { rodOf(h).quiver = 0; });
  it.shake = 0;
}
async function whopperEscape(it, h) {
  // strain, the line snaps with a drawn twang, and the fish dives off with a tail flick
  it.state = 'escaping'; const r = rodOf(h); r.quiver = 0.05;
  await tween(220, (k, p) => { it.shake = Math.sin(p * Math.PI * 8) * 0.07; h.v = it.row + 0.25 + Math.sin(p * Math.PI * 8) * 0.05; r.bend = 0.85 * E.outQ(Math.min(1, p * 2.5)); }, E.lin);
  it.shake = 0; h.snapped = true; h.twangT = GT; r.quiver = 0; sfx('snap'); wait(120).then(() => sfx('escape', { vol: 0.8 }));
  tween(600, (k, p) => { r.bend = 0.85 * (1 - E.settle(p)); }, E.lin); // the rod springs back up past straight, then settles
  addFx(['sparkle'], h.u, h.v - 0.6, 0.35, 200);
  const u0 = it.u, v0 = it.v, dir = it.flip ? -1 : 1;
  it.flapRate = 20;
  await all([
    tween(140, (k, p) => { it.sx = 1 + 0.12 * Math.sin(p * Math.PI); }, E.lin),
    tween(600, k => { it.u = u0 + dir * 4.2 * k; it.v = v0 + 0.9 * k; it.rot = (it.flip ? -0.35 : 0.35) * Math.min(1, k * 3); }, E.inC),
    tween(600, k => { h.cut = k; }, E.outQ),
  ]);
  it.state = 'gone'; it.hidden = true;
}
async function haul(h, it, idx, sticky = 1) {
  // fast up, breaks the surface with a drawn splash, arcs into the crate
  await wait(idx * (bonusState ? 180 : 300));
  const v0 = h.v, vs = vSurf();
  it.state = 'hauled'; h.item = it;
  const r = rodOf(h), b0 = r.bend, s0 = r.spin;
  const rs = it.kind === 'whopper' ? [r].concat(hooks.filter(x => x !== h && Math.abs(x.lane + 0.5 - it.u) < 0.6).map(rodOf)) : [r];
  sfx('reel', { vol: 0.5 });
  await tween(it.kind === 'whopper' ? 420 : 300, (k, p) => { h.v = lerp(v0, vs - 0.15, k); rs.forEach(q => { q.cast = -0.34 * Math.sin(p * Math.PI); q.bend = lerp(b0, 0, p); q.spin = s0 + 16 * p; }); }, E.inC);
  addFx(['splash_1', 'splash_2', 'splash_3', 'splash_4'], h.u, vs, it.kind === 'whopper' ? 2.2 : 1.1, 260); sfx(it.kind === 'whopper' ? 'bigsplash' : 'splash', { vol: 0.75 });
  await flyToCrate(it, h, sticky);
}
async function floatUp(it, idx, sticky = 1) {
  await wait(idx * (bonusState ? 120 : 180));
  const v0 = it.v, vs = vSurf();
  it.state = 'hauled';
  await tween(520, k => { it.v = lerp(v0, vs, k); }, E.inOut);
  addFx(['splash_1', 'splash_2', 'splash_3', 'splash_4'], it.u, vs, 0.9, 240); sfx('splash', { vol: 0.5, rate: 1.15 });
  await flyToCrate(it, null, sticky);
}
function flyToCrate(it, h, sticky = 1) {
  return new Promise(res => {
    const f = { it, u: h ? h.u : it.u, v: vSurf(), p: 0, spin: (it.flip ? -1 : 1) * R(5, 7) };
    if (h) { h.item = null; h.show = false; }
    it.hidden = true; flyers.push(f);
    tween(350, k => { f.p = k; }, E.inOut).then(() => {
      flyers.splice(flyers.indexOf(f), 1);
      crate.contents.push(it.name);
      landInCrate(it, sticky).then(res);
    });
  });
}
async function landInCrate(it, sticky = 1) {
  sfx('thud', { vol: 0.8 });
  tween(260, (k, p) => { crate.squash = Math.sin(p * Math.PI) * (1 - p * 0.4); }, E.lin);
  const add = it.value * it.mult * sticky;
  if (add > 0) {
    pop('+' + fmtM(add), 0, 0);
    await weigh(win.value + add);
  }
}
const needleFor = v => -2.3 + 4.6 * clamp(Math.log10(1 + v) / Math.log10(501), 0, 1); // v in times the bet
let weighQ = Promise.resolve(), weighN = 0;
function weigh(newTotal) {
  win.value = newTotal; weighN++;
  weighQ = weighQ.then(() => {
    const a0 = needle.a, a1 = needleFor(newTotal), w0 = win.shown, dur = Math.max(160, 400 - 70 * (weighN - 1));
    const up = 1 + Math.min(1, Math.log10(1 + newTotal) / 2.5) * 0.7; sfx('tick', { rate: up * 1.2, vol: 0.7 }); sfx('coins', { rate: up, vol: 0.45 }); // pitch rises as the total builds
    return tween(dur, (k, p) => { needle.a = a0 + (a1 - a0) * E.settle(p); win.shown = lerp(w0, newTotal, E.outC(p)); }, E.lin).then(() => { win.shown = newTotal; weighN--; });
  });
  return weighQ;
}
async function bigWin(title) {
  // about 3 s, skippable, beside the scale, never over the bet bar. The catch stays in the crate as the tableau.
  gull.squawkUntil = RT + 900; sfx('win_b'); sfx('gull', { vol: 0.5 });
  banner = { title, amount: 0, drop: 0, swing: 0 };
  const target = win.value;
  await all([
    tween(500, k => { banner.drop = k; }, E.back),
    tween(1800, k => { banner.amount = target * k; }, E.outC), // amount in times the bet, shown as money
    tween(1600, (k, p) => { banner.swing = Math.sin(p * Math.PI * 4) * 0.12 * (1 - p); }, E.lin),
  ]);
  for (let i = 0; i < 8; i++) debris.push({ name: 'coin', screen: true, x: L.scx, y: L.ccy - L.crateS * 0.3, vx: R(-260, 260), vy: R(-520, -300), rot: R(0, 6), vr: R(-9, 9), t0: GT, life: 1100, s: 0.32 });
  await wait(900);
  await tween(300, k => { banner.drop = 1 - k; }, E.inQ);
  banner = null;
}

// ---------------------------------------------------------------- one drop (a base round, or one drop of the bonus)
async function playDrop(rd, opts = {}) {
  const res = SnagRules.resolve(rd.raw.board, rd.raw.tackle, rd.raw.chests, { bonus: !!opts.bonus });
  playBtn.press = GT;
  await spinTackle(rd.tackle, rd.gold);
  const active = rd.tackle.map((t, lane) => ({ lane, type: t })).filter(t => t.type !== 'none');
  await windUp(active);
  const evs = laneEvents(res, rd);
  const maxDepth = Math.max(...evs.map(depthOf));
  const catches = [], floats = [], openedCh = [];
  await all(evs.map(async (ev, i) => {
    const h = hooks[i];
    await dropHook(h, ev, maxDepth);
    if (ev.type === 'dynamite') { await dynamite(h, ev); floats.push(...ev.stunned); return; }
    if (ev.hit && ev.hit.kind === 'junk') { await snag(h, ev.hit); return; }
    if (ev.hit && ev.hit.kind === 'fish') { await bite(h, ev.hit); if (ev.type === 'golden') await golden(ev.hit, ev.gold); catches.push([h, ev.hit]); return; }
    if (ev.chest) { const ch = giantChest() || chests[ev.lane]; if (!ch.open) { openedCh.push(ch); await openChest(h, ch); } else rodPulse(rodOf(h), 0.2, 200); return; }
  }));
  // the Whopper pays only if both of its lanes reached it (decided by the rules, shown here)
  for (const w of res.whoppers) {
    const wh = itemAt(w.lane, w.row); if (!wh) continue;
    const hs = w.lanes.map(l => hooks.find(h => h.lane === l)).filter(Boolean);
    if (w.landed) { wh.state = 'hooked'; wh.mult = w.mult; await whopperStrain(wh, hs); catches.push([hs[0], wh]); hs.slice(1).forEach(h => { h.show = false; }); }
    else await whopperEscape(wh, hs[0]);
  }
  const multChests = openedCh.filter(ch => ch.content && (ch.content.mult || ch.content.giant));
  if (opts.bonus) {
    // in the bonus, chest multipliers go to the sticky scale first, then every catch is weighed with it
    for (const ch of multChests) await chestCoin(ch, true);
    await all(catches.map(([h, it], i) => haul(h, it, i, bonusState.sticky)).concat(floats.map((it, i) => floatUp(it, i + catches.length, bonusState.sticky))));
  } else {
    await all(catches.map(([h, it], i) => haul(h, it, i)).concat(floats.map((it, i) => floatUp(it, i + catches.length))));
    for (const ch of multChests) await chestCoin(ch, false);
  }
  for (const ch of openedCh.filter(ch => ch.content && ch.content.lures)) await lureFly(ch);
  const bends = hooks.map(h => rodOf(h).bend), spins = hooks.map(h => rodOf(h).spin);
  await tween(300, (k, p) => hooks.forEach((h, i) => { if (h.show && !h.snapped) { h.v = lerp(h.v, vWin() + 0.2, k); rodOf(h).spin = spins[i] + 10 * p; } rodOf(h).bend = lerp(bends[i], 0, k); }), E.inQ);
  hooks.forEach(h => { h.show = false; });
  return res;
}
const giantChest = () => chests.length === 1 && chests[0].giant ? chests[0] : null;

// ---------------------------------------------------------------- a whole book: base round, then the bonus if it triggered
async function playBook(events, payout) {
  busy = true; skipping = false; win.value = 0; win.shown = 0; crate.lures = 0;
  for (const e of events) {
    if (e.type === 'round') {
      const rd = roundFrom({ board: decBoard(e.board), tackle: e.tackle.split(','), chests: e.chests.split(',') }, e.spot);
      if (SCENES[rd.spot] !== spot) { spot = SCENES[rd.spot]; buildBg(); }
      await restock(rd);
      await playDrop(rd);
    }
    if (e.type === 'bonusTrigger') await bonusTrigger(e.tier);
    if (e.type === 'bonus') await playBonus(e);
  }
  if (payout !== undefined && Math.round(win.value * 100) !== payout) console.warn('Snagged! win shown', win.value, 'book', payout / 100);
  if (win.value > 0 && win.value < 20) sfx(win.value < 2 ? 'win_s' : 'win_m', { vol: 0.8 });
  if (win.value >= 20) await bigWin(bonusState ? 'WHAT A HAUL!' : (crate.contents.includes('whopper') ? 'WHOPPER!' : 'BIG CATCH!'));
  if (bonusState) { bonusState = null; spot = SCENES[curSpot]; buildBg(); chests = makeChests([null, null, null, null, null]); music('music_harbour'); }
  busy = false;
}
async function bonusTrigger(tier) {
  // anticipation: the lures wriggle, the seagull squawks, a banner names the tier
  gull.squawkUntil = RT + 900; sfx('bonus'); sfx('gull', { vol: 0.6 });
  await tween(500, (k, p) => { crate.lureWiggle = Math.sin(p * Math.PI * 6); }, E.lin);
}
async function playBonus(e) {
  const scene = ['night', 'deep', 'thing'][e.tier - 1];
  bonusState = { tier: e.tier, sticky: 1, drop: 0, drops: e.drops.length, scene };
  // the scene changes behind a swinging banner (under 2 s, skippable; no fade to black)
  banner = { title: SCENES[scene].name, amount: null, sub: e.drops.length + ' DROPS', drop: 0, swing: 0 };
  await tween(450, k => { banner.drop = k; }, E.back);
  spot = SCENES[scene]; buildBg(); crate.lures = 0; music('music_' + scene); sfx('gull', { vol: 0.5, rate: 0.9 });
  const board = decBoard(e.start);
  await restock(roundFrom({ board, tackle: e.drops[0].tackle.split(','), chests: e.drops[0].chests.split(',') }, scene), false, true);
  await tween(380, (k, p) => { banner.swing = Math.sin(p * Math.PI * 3) * 0.1 * (1 - p); }, E.lin);
  await tween(280, k => { banner.drop = 1 - k; }, E.inQ); banner = null;
  for (let i = 0; i < e.drops.length; i++) {
    const d = e.drops[i]; bonusState.drop = i + 1;
    const rd = roundFrom({ board, tackle: d.tackle.split(','), chests: d.chests.split(',') }, scene);
    if (i > 0) { chests = makeChests(rd.chests); }
    const res = await playDrop(rd, { bonus: true });
    SnagRules.applyDrop(board, res);
    items = items.filter(it => !it.hidden && it.state !== 'gone');
    // caught fish are replaced by new fish dropping in; cleared junk stays cleared
    if (d.refill) {
      const vs = vSurf(), drops = [];
      d.refill.split(';').forEach((f, k) => {
        const [r, c, cell] = f.split('.'); board[+r][+c] = cell;
        const it = mkItem(decodeCell(cell), +c, +r); const v1 = it.v; it.v = vs - 0.5; items.push(it);
        drops.push(wait(k * 30).then(() => tween(420, q => { it.v = lerp(vs - 0.5, v1, q); }, E.backS)));
      });
      await all(drops);
    }
    await wait(250);
  }
}
async function lureFly(ch) {
  // a chest full of lures: each worm wriggles up and hangs on the crate (3 or more starts the bonus)
  ch.luresGone = true;
  for (let i = 0; i < ch.content.lures; i++) {
    const f = { lure: true, u: ch.lane + 0.5, v: 5.1, p: 0 }; flyers.push(f);
    await tween(320, k => { f.p = k; }, E.inOut);
    flyers.splice(flyers.indexOf(f), 1); crate.lures = (crate.lures || 0) + 1; crate.lureT = GT; sfx('lure', { rate: 1 + 0.12 * crate.lures });
    tween(200, (k, p) => { crate.squash = Math.sin(p * Math.PI) * 0.6; }, E.lin);
  }
}
async function golden(it, m) {
  it.mult = m; addFx(['sparkle'], it.u + 0.25, it.v - 0.25, 0.35, 260);
  await tween(260, (k, p) => { it.goldPop = Math.sin(p * Math.PI); }, E.lin);
}
async function chestCoin(ch, sticky) {
  const m = ch.content.mult || ch.content.giant;
  const f = { coin: true, u: ch.giant ? 2.5 : ch.lane + 0.5, v: 5.1, p: 0, mult: m };
  ch.coinUp = 0; flyers.push(f);
  await tween(420, k => { f.p = k; }, E.inOut);
  flyers.splice(flyers.indexOf(f), 1);
  crate.coin = GT; sfx('chip');
  tween(260, (k, p) => { crate.squash = Math.sin(p * Math.PI); }, E.lin);
  if (sticky) { bonusState.sticky += m - 1; crate.mult = bonusState.sticky; pop('x' + bonusState.sticky, 0, 0, C.cream, 1.3); return; }
  crate.mult *= m; pop('x' + m, 0, 0, C.cream, 1.3);
  await weigh(win.value * m);
}
async function restock(rd, first, keepCrate) {
  // leftovers leave: fish swim off to the nearer side, junk sinks behind the seabed; chests close; new stock drops in
  if (first) { crate.contents = []; crate.mult = 1; stock(rd.board); chests = makeChests(rd.chests); return; }
  const left = items.filter(i => !i.hidden && i.state !== 'gone'); leaving = left;
  const leave = left.map((it, i) => {
    if (it.kind === 'fish' || it.kind === 'whopper') {
      const dir = it.u < 2.5 ? -1 : 1; it.flip = dir < 0; it.flapRate = 14; const u0 = it.u;
      return wait(i * 25).then(() => tween(520, k => { it.u = u0 + dir * 4 * k; }, E.inQ));
    }
    const v0 = it.v; return wait(i * 25).then(() => tween(480, k => { it.v = v0 + 6 * k; it.rot += 0.01; }, E.inQ));
  });
  const closeLids = chests.filter(c => c.lid > 0).map(c => tween(250, k => { c.lid = 1 - k; }, E.outQ).then(() => { c.open = false; }));
  await wait(200);
  if (!keepCrate) { crate.contents = []; crate.mult = 1; tween(300, k => { needle.a = lerp(needle.a, needleFor(0), k); }, E.outQ); }
  else { crate.mult = 1; }
  stock(rd.board);
  const vs = vSurf(); [0, 140, 300].forEach(d => wait(d).then(() => sfx('plop', { vol: 0.25, rate: 1.2 })));
  const drops = items.map((it, i) => { const v1 = it.v; it.v = vs - 0.5; return wait(i * 22).then(() => tween(460, k => { it.v = lerp(vs - 0.5, v1, k); }, E.backS)); });
  await all(drops.concat(leave, closeLids));
  chests = makeChests(rd.chests); leaving = [];
}

// ---------------------------------------------------------------- idle world
function initIdle() {
  idleBubbles = []; for (let i = 0; i < 22; i++) idleBubbles.push({ x: R(0, 1), y: R(0, 1), s: [4, 7, 11][i % 3], sp: R(0.025, 0.06), ph: R(0, 6) });
  shadows = [{ next: 3000, active: null }];
}
function updateIdle(dt) {
  idleBubbles.forEach(b => { b.y -= b.sp * dt / 1000; if (b.y < 0) { b.y = 1; b.x = R(0, 1); } });
  trail = trail.filter(b => GT - b.t0 < 700);
  const s = shadows[0];
  if (!s.active && RT > s.next) { const dir = rnd() > 0.5 ? 1 : -1; s.active = { dir, x: dir > 0 ? -0.15 : 1.15, y: R(0.25, 0.7), name: rnd() > 0.5 ? 'fish_slate' : 'fish_eel', sp: R(0.05, 0.08), h: R(0.14, 0.22) }; }
  if (s.active) { s.active.x += s.active.dir * s.active.sp * dt / 1000; if (s.active.x < -0.2 || s.active.x > 1.2) { s.active = null; s.next = RT + R(8000, 15000); } }
  if (RT > gull.nextBlink) { gull.blinkUntil = RT + 130; gull.nextBlink = RT + R(2500, 5000); }
  if (RT > gull.nextHop) { gull.hopT = RT; gull.nextHop = RT + R(6000, 9000); }
}

// ---------------------------------------------------------------- render
function itemSprite(it) {
  if (it.kind !== 'fish' && it.kind !== 'whopper') return it.name;
  const f = Math.floor((RT / 1000) * it.flapRate + it.phase * 3) % 4;
  return it.name + ['', '_up', '', '_dn'][f];
}
function drawItem(it) {
  if (it.hidden) return;
  const t = RT / 1000;
  let x = X(it.u), y = Y(it.v), rot = it.rot + (it.shake || 0);
  if (it.state === 'idle') {
    if (it.kind === 'fish' || it.kind === 'whopper') { y += Math.sin(t * 1.9 * it.rate + it.phase) * L.rowH * 0.035; x += Math.sin(t * 0.7 * it.rate + it.phase) * L.laneW * 0.035; }
    else rot += Math.sin(t * 0.9 * it.rate + it.phase) * 0.03;
  }
  if (it.state === 'stunned' || (it.state === 'hauled' && it.rotStun)) { rot = it.rot + Math.PI * (it.rotStun || 0); y += Math.sin(t * 3 + it.phase) * L.rowH * 0.02; }
  const isFish = it.kind === 'fish';
  if (it.kind === 'whopper') {
    spr(itemSprite(it), x, y - L.rowH * 0.05, L.laneW * 1.9 * it.sx, L.rowH * 0.95, rot, it.flip);
    if (it.state === 'idle' || it.state === 'hooked') price(x, y + L.rowH * 0.34, it.value, true);
    return;
  }
  spr(itemSprite(it), x, y - (isFish ? L.rowH * 0.10 : 0), L.laneW * (isFish ? 0.92 : 0.74), L.rowH * (isFish ? 0.66 : 0.80), rot, it.flip, it.sx, it.sy);
  if (isFish && (it.state === 'idle' || it.state === 'stunned')) price(x, y + L.rowH * 0.31, it.value * it.mult, false, it.mult === 0.5);
  if (isFish && it.state === 'hooked' && it.mult > 1) {
    const s = 1 + 0.4 * (it.goldPop || 0);
    spr('coin', x + L.laneW * 0.3, y - L.rowH * 0.2, L.rowH * 0.36 * s, L.rowH * 0.36 * s);
    text('x' + it.mult, x + L.laneW * 0.3, y - L.rowH * 0.2, L.rowH * 0.17 * s, C.ink, 'center', false);
  }
}
function price(x, y, v, big, half) {
  const w = Math.min(L.laneW * (big ? 0.95 : 0.66), L.rowH * (big ? 1.2 : 0.8)), h = w * 0.40;
  spr('tag', x, y, w, h);
  const t = fmtTag(v), fs = h * 0.52 * Math.min(1, 6 / Math.max(4, t.length));
  text(t, x, y + h * 0.02, fs, half ? '#A84A22' : C.ink, 'center', false);
}
function drawHook(h) {
  const tipP = rodGeom(h.lane).tip, x0 = tipP.x, y0 = tipP.y;
  const hx = X(h.u + h.sway), hy = Y(h.v);
  const hookH = L.rowH * 0.42;
  const tw = h.twangT >= 0 ? Math.max(0, 1 - (GT - h.twangT) / 300) : 0;
  const wob = Math.sin((GT - h.twangT) / 18) * tw * L.laneW * 0.12;
  g.strokeStyle = '#E9E2CF'; g.lineWidth = Math.max(1.5, L.rowH * 0.018); g.lineCap = 'round';
  const eyeY = hy - hookH * 0.45;
  if (h.snapped) {
    // the top half of the line whips back up; the bottom half drops with the hook
    const cutY = lerp(eyeY, y0, 0.5);
    g.beginPath(); g.moveTo(x0, y0); g.quadraticCurveTo(x0 + wob, lerp(y0, cutY, 0.5), x0 + wob * 0.6, lerp(cutY, y0, h.cut * 0.8)); g.stroke();
    const dropY = h.cut * L.rowH * 1.2;
    g.beginPath(); g.moveTo(hx - wob * 0.4, lerp(cutY, eyeY, h.cut * 0.5) + dropY); g.quadraticCurveTo(hx + wob, eyeY + dropY - L.rowH * 0.3, hx, eyeY + dropY); g.stroke();
    spr('hook', hx, hy + dropY, hookH, hookH, 0.4 * h.cut);
    return;
  }
  if (!h.show) return;
  g.beginPath(); g.moveTo(x0, y0); g.quadraticCurveTo(lerp(x0, hx, 0.5) + wob, lerp(y0, eyeY, 0.5), hx, eyeY); g.stroke();
  if (h.type === 'dynamite') {
    const k = L.rowH * 0.5;
    [-0.17, 0, 0.17].forEach(o => spr('dyn_stick', hx + o * k, hy, k * 0.24, k * 0.75, o * 0.6));
    const fl = Math.floor(RT / 70) % 2 ? 'flame' : 'flame_b', fs = 1 + (h.fuse || 0) * 0.8;
    spr(fl, hx + k * 0.1, hy - k * 0.42, k * 0.2 * fs, k * 0.34 * fs);
    return;
  }
  if (h.type === 'weighted') spr('sinker', hx, eyeY - hookH * 0.05, hookH * 0.5, hookH * 0.5);
  spr(h.type === 'golden' ? 'hook_gold' : 'hook', hx, hy, hookH, hookH, h.sway * 2);
  if (h.item && h.item.follow && h.item.state === 'hooked') { h.item.u = h.u + h.sway; h.item.v = h.v + 0.32; }
  if (h.item && h.item.state === 'hauled') { if (h.item.kind !== 'whopper') h.item.u = h.u; h.item.v = h.v + (h.item.kind === 'whopper' ? 0.25 : 0.32); }
}
function drawChest(ch) {
  if (ch.giant) return drawGiant(ch);
  const x = X(ch.lane + 0.5), y = Y(5.48), s = Math.min(L.laneW * 0.76, L.rowH * 0.9);
  const bw = s, bh = s * 0.5;
  // lid hinges open about its back edge
  const lidW = s, lidH = s * 0.46, hingeX = x, hingeY = y - bh * 0.42;
  g.save(); g.translate(hingeX, hingeY); g.rotate(-1.75 * ch.lid); g.scale(1, 1 - 0.35 * ch.lid);
  g.drawImage(img.chest_lid, -lidW / 2, -lidH, lidW, lidH); g.restore();
  if (ch.open && ch.content) {
    const up = (ch.coinUp || 0) * L.rowH * 0.5;
    if (ch.content.mult && ch.coinUp > 0) { spr('coin', x, y - bh * 0.4 - up, L.rowH * 0.4, L.rowH * 0.4); text('x' + ch.content.mult, x, y - bh * 0.4 - up, L.rowH * 0.18, C.ink, 'center', false); }
    if (ch.content.lures && !ch.luresGone) for (let k = 0; k < ch.content.lures; k++) spr('lure', x + (k - (ch.content.lures - 1) / 2) * L.laneW * 0.22, y - bh * 0.55, L.rowH * 0.32, L.rowH * 0.2, Math.sin(RT / 120 + k) * 0.4);
  }
  spr('chest_base', x, y + bh * 0.05, bw, bh * 1.16);
  if (ch.sparkT >= 0) { const p = (GT - ch.sparkT) / 500; if (p < 1) for (let i = 0; i < 4; i++) { const a = -1.9 + i * 0.5, r = L.rowH * (0.2 + 0.5 * p); spr('sparkle', x + Math.cos(a) * r, y - bh * 0.4 + Math.sin(a) * r, L.rowH * 0.22 * (1 - p), L.rowH * 0.22 * (1 - p), p * 3); } }
}
function drawGiant(ch) {
  // The Thing Below: the whole bottom row is one giant chest
  const x = X(2.5), y = Y(5.42), s = Math.min(L.laneW * 3.2, L.rowH * 2.4), bh = s * 0.42;
  const lidH = s * 0.4, hingeY = y - bh * 0.42;
  g.save(); g.translate(x, hingeY); g.rotate(-1.4 * ch.lid); g.scale(1, 1 - 0.3 * ch.lid); g.drawImage(img.chest_lid, -s / 2, -lidH, s, lidH); g.restore();
  if (ch.open) { const up = (ch.coinUp || 0) * L.rowH * 0.6; spr('coin', x, y - bh * 0.5 - up, L.rowH * 0.55, L.rowH * 0.55); text('x' + ch.content.giant, x, y - bh * 0.5 - up, L.rowH * 0.24, C.ink, 'center', false); }
  spr('chest_base', x, y + bh * 0.05, s, bh * 1.16);
  if (!ch.open) text('x?', x, y + bh * 0.25, L.rowH * 0.28, C.lantern);
}
function drawFx() {
  fx = fx.filter(f => GT - f.t0 < f.dur);
  fx.forEach(f => {
    const p = (GT - f.t0) / f.dur, fr = f.frames[Math.min(f.frames.length - 1, Math.floor(p * f.frames.length))];
    const s = L.rowH * f.size * (1 - f.grow + f.grow * Math.min(1, p * 1.6)) * (p > 0.85 ? (1 - p) / 0.15 : 1);
    spr(fr, X(f.u), Y(f.v), s, s, f.rot);
  });
  trail.forEach(b => { const p = (GT - b.t0) / 700; spr('bubble', X(b.u) + Math.sin(p * 9) * 3, Y(b.v) - p * L.rowH * 0.6, b.s * (1 - p * 0.5), b.s * (1 - p * 0.5)); });
  debris = debris.filter(d => GT - d.t0 < d.life);
  debris.forEach(d => {
    const t = (GT - d.t0) / 1000;
    if (d.screen) { const x = d.x + d.vx * t, y = d.y + d.vy * t + 900 * t * t; const s = L.rowH * d.s; spr(d.name, x, y, s, s, d.rot + d.vr * t); return; }
    const k = 1 - Math.exp(-2.4 * t); // water drag
    const u = d.u + d.vu * k * 0.5, v = d.v + d.vv * k * 0.5 + 0.9 * t * t;
    const s = L.rowH * d.s * (t > d.life / 1000 - 0.2 ? Math.max(0, (d.life / 1000 - t) / 0.2) : 1);
    spr(d.name, X(u), Y(v), s, s, d.rot + d.vr * t * (1 - k * 0.6));
  });
}
function drawFlyers() {
  flyers.forEach(f => {
    const sx = X(f.u), sy = Y(f.v), ex = L.scx, ey = L.ccy - L.crateS * 0.35;
    const cx = lerp(sx, ex, 0.5), cy = Math.min(sy, ey) - L.rowH * 1.4;
    const p = f.p, x = (1 - p) * (1 - p) * sx + 2 * (1 - p) * p * cx + p * p * ex, y = (1 - p) * (1 - p) * sy + 2 * (1 - p) * p * cy + p * p * ey;
    if (f.coin) { const s = L.rowH * 0.42; spr('coin', x, y, s, s, p * 6); text('x' + f.mult, x, y, s * 0.42, C.ink, 'center', false); return; }
    if (f.lure) { spr('lure', x, y, L.rowH * 0.5, L.rowH * 0.3, Math.sin(p * 20) * 0.4); return; }
    const it = f.it, big = it.kind === 'whopper';
    const s = lerp(1, big ? 0.55 : 0.75, p);
    spr(itemSprite(it), x, y, L.laneW * (big ? 1.9 : 0.9) * s, L.rowH * (big ? 0.95 : 0.62) * s, f.spin * p + (it.rotStun ? Math.PI : 0), it.flip);
  });
}
function drawTackle() {
  const y = L.stripH + L.tackH * 0.5, s = Math.min(L.laneW * 0.78, L.tackH * 0.98);
  for (let i = 0; i < 5; i++) {
    const x = X(i + 0.5), land = tackleLand[i];
    spr('window', x, y + land * s * 0.04, s, s * (1 - land * 0.06));
    const off = tackleSpin[i], idx = Math.floor(off), frac = off - idx;
    g.save(); g.beginPath(); g.rect(x - s * 0.36, y - s * 0.36, s * 0.72, s * 0.72); g.clip();
    for (let j = 0; j < 2; j++) drawTackleIcon(TACKLE_ICONS[(idx + j) % 5], x, y + (j - frac) * s * 0.8, s, tackleDone[i] && j === 0 ? tackleGold[i] : 0);
    g.restore();
  }
}
function drawTackleIcon(t, x, y, s, gold = 0) {
  const k = s * 0.62;
  if (t === 'hook') spr('hook', x, y, k, k);
  if (t === 'golden') { spr('hook_gold', x, y, k, k); text(gold > 1 ? 'x' + gold : 'x?', x + s * 0.2, y + s * 0.22, s * 0.2, C.lantern); }
  if (t === 'weighted') { spr('hook', x + k * 0.12, y + k * 0.12, k * 0.75, k * 0.75); spr('sinker', x - k * 0.08, y - k * 0.2, k * 0.42, k * 0.42); }
  if (t === 'dynamite') { [-0.17, 0, 0.17].forEach(o => spr('dyn_stick', x + o * k, y + k * 0.08, k * 0.24, k * 0.75, o * 0.6)); spr('flame', x + k * 0.1, y - k * 0.36, k * 0.18, k * 0.3); }
}
function drawScale() {
  const cx = L.scx, R0 = L.dialR, armY = L.armY, dy = L.sdy;
  if (!L.portrait) {
    const postX = cx + R0 * 1.75;
    { const pw = R0 * 0.32; g.drawImage(img.post, postX - pw / 2, armY, pw, L.deckY - armY + L.stripH * 0.05); }
    g.drawImage(img.plank, cx - R0 * 0.7, armY - R0 * 0.17, postX - cx + R0 * 0.9, R0 * 0.34);
  }
  // whole scale sways a little on its chain when the crate takes a hit
  const sway = crate.squash * 0.05;
  g.save(); g.translate(cx, armY + R0 * 0.1); g.rotate(sway); g.translate(-cx, -(armY + R0 * 0.1));
  spr('chain', cx, armY + L.chainH / 2 + R0 * 0.1, L.chainH, L.chainH);
  spr('dial', cx, dy, R0 * 2, R0 * 2);
  spr('dial_ticks', cx, dy, R0 * 1.62, R0 * 1.62);
  [['0', -2.3], ['5', -1.55], ['10', -0.8], ['20', 0], ['50', 0.8], ['100', 1.55], ['500', 2.3]].forEach(([t, a]) =>
    text(t, cx + Math.sin(a) * R0 * 0.56, dy - Math.cos(a) * R0 * 0.56, R0 * 0.17, C.ink, 'center', false));
  text(social ? 'x PLAY' : 'x BET', cx, dy + R0 * 0.38, R0 * 0.16, '#77502F', 'center', false);
  const trem = Math.sin(RT / 47) * 0.008 + Math.sin(RT / 131) * 0.006;
  // needle pivots at the hub: draw it offset so its base sits on the centre
  g.save(); g.translate(cx, dy); g.rotate(needle.a + trem);
  const nI = img.needle, nh = R0 * 0.95, nw = nh * nI.width / nI.height * 0.32;
  g.drawImage(nI, -nw / 2, -nh * 0.92, nw, nh); g.restore();
  spr('chest_lock', cx, dy, R0 * 0.26, R0 * 0.26);
  const cs = L.crateS, cy = L.ccy, sq = crate.squash;
  spr('chain', cx - cs * 0.3, dy + R0 + cs * 0.12, cs * 0.28, cs * 0.28, 0.35);
  spr('chain', cx + cs * 0.3, dy + R0 + cs * 0.12, cs * 0.28, cs * 0.28, -0.35);
  crate.contents.slice(-5).forEach((n, i) => {
    const big = n === 'whopper';
    spr(n, cx + (i % 3 - 1) * cs * 0.25, cy - cs * 0.38 - (i > 2 ? cs * 0.08 : 0) + sq * cs * 0.05, cs * (big ? 1.1 : 0.62), cs * (big ? 0.6 : 0.36), (i % 2 ? 0.4 : -0.35), i % 2 === 1);
  });
  spr('crate', cx, cy + sq * cs * 0.05, cs * (1 + sq * 0.08), cs * 0.78 * (1 - sq * 0.12));
  for (let i = 0; i < (crate.lures || 0); i++) { const wig = (crate.lureWiggle || 0) * 0.5 + Math.sin(RT / 160 + i) * 0.25; spr('lure', cx - cs * 0.45 + i * cs * 0.22, cy + cs * 0.42, cs * 0.3, cs * 0.18, 1.3 + wig); }
  if (crate.mult > 1) { const p = clamp((GT - crate.coin) / 300, 0, 1), s = cs * 0.5 * E.back(p); spr('coin', cx, cy + cs * 0.05, s, s); text('x' + crate.mult, cx, cy + cs * 0.05, s * 0.42, C.ink, 'center', false); }
  g.restore();
}
function drawBanner() {
  if (!banner) return;
  const w = L.portrait ? W * 0.52 : Math.min(W * 0.3, 420), h = w * 0.32;
  const x = L.portrait ? W * 0.36 : L.scx - w * 0.1, y0 = L.portrait ? L.beamY + h * 1.3 : L.ccy + L.crateS * 1.1;
  const y = lerp(-h * 2, y0, banner.drop);
  g.save(); g.translate(x, y - h * 1.2); g.rotate(banner.swing);
  g.strokeStyle = '#3B4950'; g.lineWidth = 3; g.beginPath(); const rt = L.portrait ? L.beamY - (y - h * 1.2) : -L.rowH * 2; g.moveTo(-w * 0.35, rt); g.lineTo(-w * 0.35, h * 0.8); g.moveTo(w * 0.35, rt); g.lineTo(w * 0.35, h * 0.8); g.stroke();
  spr('banner', 0, h * 1.2, w, h * 1.4);
  text(banner.title, 0, h * 0.95, h * 0.42, C.cream);
  text(banner.amount === null ? (banner.sub || '') : fmtRoll(banner.amount, Math.abs(banner.amount - win.value) < 1e-9), 0, h * 1.55, h * 0.38, C.lantern);
  g.restore();
}
function drawLanterns() {
  if (!spot.lanterns) return;
  for (let i = 0; i <= 5; i++) { const x = X(i), y = L.deckY - L.stripH * 0.06, s = L.stripH * 0.24, fl = 1 + Math.sin(RT / 90 + i * 2) * 0.05; spr('torch', x, y - s * 0.4, s * 0.5 * fl, s * fl); }
}
function drawGantry() {
  // phone layout: one wooden gantry across the top of the jetty; the spot sign and the scale hang from it, the seagull sits on it
  if (!L.portrait) return;
  const bh = L.stripH * 0.09, pw = L.stripH * 0.07;
  g.drawImage(img.post, 6 - pw / 2, L.beamY, pw, L.deckY - L.beamY + L.stripH * 0.05);
  g.drawImage(img.post, W - 6 - pw / 2, L.beamY, pw, L.deckY - L.beamY + L.stripH * 0.05);
  slice3('plank', -4, L.beamY - bh / 2, W + 8, bh, 0.2);
}
function drawRods() {
  for (let i = 0; i < 5; i++) {
    const G = rodGeom(i), r = rods[i], w1 = G.len * 0.075, w2 = G.len * 0.05;
    spr('holder', G.base.x, G.base.y - G.len * 0.02, G.len * 0.12, G.len * 0.22);
    const seg = (p, a, l, w) => { g.save(); g.translate(p.x, p.y); g.rotate(a); g.drawImage(img.rod_seg, -w / 2, -l - w * 0.3, w, l + w * 0.6); g.restore(); };
    seg(G.j, G.a2, G.l2, w2);
    seg(G.base, G.a1, G.l1, w1);
    g.save(); g.translate(G.base.x, G.base.y); g.rotate(G.a1);
    g.drawImage(img.rod_handle, -w1 * 0.75, -G.len * 0.26, w1 * 1.5, G.len * 0.2);
    const rsz = G.len * 0.17; g.translate(-w1 * 1.1, -G.len * 0.13); g.rotate(r.spin);
    g.drawImage(img.reel, -rsz / 2, -rsz / 2, rsz, rsz); g.restore();
    spr('chest_lock', G.j.x, G.j.y, w1 * 1.1, w1 * 1.1); // brass ferrule at the joint
  }
}
function drawGull() {
  const x = L.portrait ? W * 0.53 : L.boardX * 0.3, ph = L.stripH * 0.45;
  if (!L.portrait) spr('post', x, L.deckY - ph * 0.25, ph * 0.28, ph * 0.9);
  const sh = L.portrait ? L.stripH * 0.19 : L.stripH * 0.5;
  let hop = 0, sq = 1;
  if (gull.hopT) { const p = (RT - gull.hopT) / 420; if (p < 1) { hop = Math.sin(p * Math.PI) * sh * 0.18; sq = p < 0.15 ? 1 - p * 0.8 : 1; } }
  const pose = RT < gull.squawkUntil ? 'seagull_squawk' : (RT < (gull.blinkUntil || 0) ? 'seagull_blink' : 'seagull');
  const base = L.portrait ? L.beamY - L.stripH * 0.045 + sh * 0.42 - sh * 0.5 + sh * 0.08 : L.deckY - ph * 0.68;
  spr(pose, x + sh * 0.05, base - sh * 0.42 * sq - hop, sh * 1.1, sh * sq, Math.sin(RT / 900) * 0.03);
}
function signText() { return bonusState ? `${spot.name}  ${bonusState.drop}/${bonusState.drops}` : spot.name; }
function drawSign() {
  const w = L.portrait ? W * 0.30 : Math.min(H * 0.36, L.boardX * 0.75), h = w * 0.62;
  const x = L.portrait ? W * 0.37 : L.boardX * 0.5, y = L.portrait ? L.stripH * 0.38 : L.stripH + L.waterH * 0.12;
  if (L.portrait) {
    const pw = W * 0.4, ph = L.stripH * 0.15, px = W * 0.24, top = L.beamY + L.stripH * 0.03, py = top + ph / 2, sw = Math.sin(RT / 1500) * 0.015;
    g.save(); g.translate(px, L.beamY); g.rotate(sw); g.translate(-px, -L.beamY);
    spr('chain', px - pw * 0.36, (L.beamY + top) / 2 + 2, ph * 0.5, top - L.beamY + 6); spr('chain', px + pw * 0.36, (L.beamY + top) / 2 + 2, ph * 0.5, top - L.beamY + 6);
    g.drawImage(img.plank, px - pw / 2, top, pw, ph); text(signText(), px - pw * 0.07, py, ph * (bonusState ? 0.34 : 0.42)); text('\u25C2\u25B8', px + pw * 0.37, py, ph * 0.38, C.lantern);
    g.restore();
  }
  else { spr('sign', x, y + h * 0.4, w, h * 1.4); text(signText(), x, y + h * 0.18, h * (bonusState ? 0.15 : 0.2)); text('◂  SPOT  ▸', x, y + h * 0.45, h * 0.15, C.lantern); }
}
function drawWorld() {
  g.drawImage(bgCache, 0, 0, W, H);
  // clouds drift
  const cw = Math.min(W * 0.32, 170), dr = RT / 1000 * 4;
  [[0.18, 0.42, 0.18, '#C58C8E'], [0.62, 0.30, 0.22, '#E8A98D'], [0.9, 0.55, 0.15, '#F2BE96']].forEach(([fx0, fy, fh, col], i) => {
    const x = ((fx0 * W + dr * (1 + i * 0.4)) % (W + cw)) - cw * 0.2; sil(g, 'cloud', col, x, L.stripH * fy, cw * fh, i === 1);
  });
  // slow light shafts (flat, very faint) and a distant fish shadow
  g.save(); g.globalAlpha = 0.05; g.fillStyle = '#FFF3DC';
  for (let i = 0; i < 3; i++) { const x = W * (0.2 + i * 0.3) + Math.sin(RT / 7000 + i * 2) * W * 0.05, w = W * 0.07; g.beginPath(); g.moveTo(x, L.surf); g.lineTo(x + w, L.surf); g.lineTo(x + w * 2.2, H - L.barH); g.lineTo(x + w * 1.0, H - L.barH); g.closePath(); g.fill(); }
  g.restore();
  const sa = shadows[0] && shadows[0].active;
  if (sa) sil(g, sa.name, spot.far, sa.x * W, L.waterTop + sa.y * L.waterH, L.rowH * sa.h, sa.dir < 0);
  idleBubbles.forEach(b => spr('bubble', b.x * W + Math.sin(RT / 600 + b.ph) * 4, L.waterTop + b.y * L.waterH * 0.92, b.s, b.s));
  // surface ripple line
  const tw = L.tackH * 0.55, th = tw * (img.wave_top.height / img.wave_top.width), off = (RT / 1000 * 10) % tw;
  g.save(); g.globalAlpha = 0.55; for (let x = -tw; x < W + tw; x += tw) g.drawImage(img.wave_top, x + off, L.surf - th * 0.35, tw, th); g.restore();
  // seaweed sways from its base
  for (let c = 0; c < 4; c++) {
    const x = X(c + 1), y = Y(5.58) + L.rowH * 0.35, h = L.rowH * 0.7, n = ['weed_green', 'weed_pink', 'weed_orange', 'weed_green'][c];
    const i = img[n], s = h / i.height, a = Math.sin(RT / (900 + c * 230) + c) * 0.09;
    g.save(); g.translate(x, y); g.rotate(a); g.drawImage(i, -i.width * s / 2, -h, i.width * s, h); g.restore();
  }
}
function drawBar() {
  const y = H - L.barH, h = L.barH;
  slice3('bar_plank', -6, y - h * 0.06, W + 12, h * 1.12, 0.12);
  if (replay) { const cy = y + h * 0.5, val = Math.max(13, h * 0.24); text('WIN', W / 2, cy - h * 0.2, Math.max(9, h * 0.13), C.creamDim); fitText(fmtRoll(win.shown, Math.abs(win.shown - win.value) < 1e-9), W / 2, cy + h * 0.06, val * 1.2, W * 0.5, C.lantern); text(TXT().replayTitle, W * 0.85, cy, Math.max(9, h * 0.13), C.creamDim); { const bb = barButtons(); spr('btn', bb.menu[0], bb.menu[1], bb.menu[2] * 2, bb.menu[2] * 2); const t = tinted('ui_barsHorizontal', C.cream), ss = bb.menu[2]; g.drawImage(t, bb.menu[0] - ss / 2, bb.menu[1] - ss / 2, ss, ss); } return; }
  const cy = y + h * 0.52, big = Math.min(h * 0.86, W * 0.2), btn = big * 0.5;
  const lab = Math.max(9, h * 0.13), val = Math.max(13, h * 0.24);
  const icon = (n, x, s, yy = cy - h * 0.06) => { const t = tinted(n, C.cream); g.drawImage(t, x - s / 2, yy - s / 2, s, s); };
  const button = (x, s, n, label, on) => { spr('btn', x, cy - h * 0.06, s, s); icon(n, x, s * 0.5); text(label, x, cy + s * 0.62, lab * (L.portrait ? 0.85 : 1), on ? C.lantern : C.cream); };
  const pp = clamp((GT - playBtn.press) / 220, 0, 1), press = 1 - 0.12 * Math.sin(pp * Math.PI);
  const winTxt = fmtRoll(win.shown, Math.abs(win.shown - win.value) < 1e-9);
  const pm = (x, yy, s) => { spr('btn', x, yy, s, s); icon('ui_minus', x, s * 0.5, yy); };
  const pl = (x, yy, s) => { spr('btn', x, yy, s, s); icon('ui_plus', x, s * 0.5, yy); };
  if (L.portrait) {
    const lb = lab * 0.85, bs = btn * 0.82;
    button(W * 0.075, bs, 'ui_barsHorizontal', 'MENU');
    text('BALANCE', W * 0.285, cy - h * 0.30, lb, C.creamDim); fitText(fmtBal(), W * 0.285, cy - h * 0.12, val * 0.78, W * 0.3);
    text(bait ? TXT().bet + '  x3 BAIT' : TXT().bet, W * 0.285, cy + h * 0.08, lb, bait ? C.lantern : C.creamDim);
    const s = btn * 0.56, by = cy + h * 0.27; pm(W * 0.175, by, s); pl(W * 0.395, by, s); fitText(fmtM(bait ? 3 : 1), W * 0.285, by, val * 0.78, W * 0.15);
    text('WIN', W * 0.525, cy - h * 0.2, lb, C.creamDim); fitText(winTxt, W * 0.525, cy + h * 0.04, val * 1.1, W * 0.2, C.lantern);
    button(W * 0.685, bs, 'ui_fastForward', 'TURBO', turbo);
    spr('btn_play', W * 0.815, cy - h * 0.06, big * 0.9 * press, big * 0.9 * press); text(busy ? 'SKIP' : 'PLAY', W * 0.815, cy - h * 0.06, big * 0.21 * press);
    button(W * 0.935, bs, 'ui_return', auto ? 'STOP ' + autoLeft : 'AUTO', auto);
  } else {
    button(W * 0.04, btn, 'ui_barsHorizontal', 'MENU');
    text('BALANCE', W * 0.13, cy - h * 0.16, lab, C.creamDim); const nk = W < 700 ? 0.05 : 0; fitText(fmtBal(), W * 0.13, cy + h * 0.1, val, W * (0.13 + nk * 0.4));
    text(bait ? TXT().bet + '  x3 BAIT' : TXT().bet, W * (0.26 + nk), cy - h * 0.16, lab, bait ? C.lantern : C.creamDim); fitText(fmtM(bait ? 3 : 1), W * (0.26 + nk), cy + h * 0.1, val, W * 0.1);
    pm(W * (0.2 + nk), cy + h * 0.1, btn * 0.66); pl(W * (0.32 + nk), cy + h * 0.1, btn * 0.66);
    text('WIN', W * 0.5, cy - h * 0.2, lab, C.creamDim); fitText(winTxt, W * 0.5, cy + h * 0.08, val * 1.3, W * 0.2, C.lantern);
    button(W * 0.79, btn, 'ui_fastForward', 'TURBO', turbo);
    spr('btn_play', W * 0.88, cy - h * 0.02, big * press, big * press); text(busy ? 'SKIP' : 'PLAY', W * 0.88, cy - h * 0.02, big * 0.24 * press);
    button(W * 0.965, btn, 'ui_return', auto ? 'STOP ' + autoLeft : 'AUTO', auto);
  }
}
function buyGeom() {
  if (L.portrait) { const w = W * 0.15, h = L.stripH * 0.15; return { x: W * 0.565, y: L.beamY + L.stripH * 0.03 + h / 2, w, h, hang: true }; }
  const w = Math.min(H * 0.26, L.boardX * 0.6), h = w * 0.42; return { x: L.boardX * 0.5, y: L.stripH + L.waterH * 0.6, w, h };
}
function drawBuy() {
  if (bonusState || replay) return;
  const B = buyGeom(), sw = Math.sin(RT / 1300 + 1) * 0.015;
  g.save(); if (B.hang) { g.translate(B.x, L.beamY); g.rotate(sw); g.translate(-B.x, -L.beamY); spr('chain', B.x - B.w * 0.3, (L.beamY + B.y - B.h / 2) / 2 + 2, B.h * 0.5, B.y - B.h / 2 - L.beamY + 6); spr('chain', B.x + B.w * 0.3, (L.beamY + B.y - B.h / 2) / 2 + 2, B.h * 0.5, B.y - B.h / 2 - L.beamY + 6); }
  g.drawImage(img.plank, B.x - B.w / 2, B.y - B.h / 2, B.w, B.h);
  fitText(TXT().buy, B.x, B.y - (bait ? B.h * 0.12 : 0), B.h * 0.48, B.w * 0.8, C.lantern);
  if (bait) text('BAIT ON', B.x, B.y + B.h * 0.28, B.h * 0.24, C.cream);
  g.restore();
}
// ---- the buy menu and its confirm step (every mode over 2x asks to confirm)
function openBuy() { if (busy || bonusState || replay) return; panel = { kind: 'buy' }; sfx('click'); }
function drawPanel() {
  if (!panel) return;
  if (panel.kind === 'auto') { g.save(); g.globalAlpha = 0.55; g.fillStyle = '#0B1418'; g.fillRect(0, 0, W, H); g.restore(); drawAutoPanel(); return; }
  if (panel.kind === 'menu' || panel.kind === 'rules' || panel.kind === 'replay') { g.save(); g.globalAlpha = 0.55; g.fillStyle = '#0B1418'; g.fillRect(0, 0, W, H); g.restore(); if (panel.kind === 'menu') drawMenuPanel(); else if (panel.kind === 'rules') drawRulesPanel(); else drawReplayPanel(); return; }
  g.save(); g.globalAlpha = 0.55; g.fillStyle = '#0B1418'; g.fillRect(0, 0, W, H); g.restore();
  const pw = Math.min(W * 0.9, 460), ph = panel.kind === 'buy' ? Math.min(H * 0.8, 560) : Math.min(H * 0.5, 300), px = (W - pw) / 2, py = (H - ph) / 2;
  slice9('tag', px, py, pw, ph);
  panel.hits = [];
  const row = (y, h, label, sub, right, act, on) => {
    g.drawImage(img.plank, px + pw * 0.06, y, pw * 0.88, h);
    g.font = `700 ${h * 0.3}px Fredoka`; const lw = g.measureText(label).width, ls = lw > pw * 0.44 ? h * 0.3 * pw * 0.44 / lw : h * 0.3;
    text(label, px + pw * 0.1, y + h * 0.36, ls, on ? C.lantern : C.cream, 'left'); text(sub, px + pw * 0.1, y + h * 0.7, h * 0.18, C.creamDim, 'left');
    text(right, px + pw * 0.9, y + h * 0.5, h * 0.3, C.lantern, 'right');
    panel.hits.push([px + pw * 0.06, y, pw * 0.88, h, act]);
  };
  if (panel.kind === 'buy') {
    text(TXT().buyTitle, W / 2, py + ph * 0.09, ph * 0.06, C.ink, 'center', false);
    const rh = ph * 0.15; let y = py + ph * 0.16;
    row(y, rh, 'EXTRA BAIT', 'more lures in the chests (x3 per round)', bait ? 'ON' : fmtM(3), () => { panel = bait ? null : { kind: 'confirm', mode: 'BAIT', title: 'EXTRA BAIT', cost: 3 }; if (bait) bait = false; }, bait); y += rh * 1.12;
    for (const [mode, title, sub] of BUYS) { row(y, rh, title, sub, fmtM(MODES[mode]), () => { panel = { kind: 'confirm', mode, title, cost: MODES[mode] }; }); y += rh * 1.12; }
    const cy2 = py + ph * 0.9; g.drawImage(img.plank, W / 2 - pw * 0.2, cy2 - rh * 0.35, pw * 0.4, rh * 0.7); text('CLOSE', W / 2, cy2, rh * 0.28); panel.hits.push([W / 2 - pw * 0.2, cy2 - rh * 0.35, pw * 0.4, rh * 0.7, () => { panel = null; }]);
  } else {
    text(panel.title, W / 2, py + ph * 0.2, ph * 0.1, C.ink, 'center', false);
    const msg = panel.mode === 'BAIT' ? `Each round will be ${fmtM(3)} (3x ${TXT().yourAmt})` : `${TXT().buyFor} ${fmtM(panel.cost)} (${panel.cost}x ${TXT().yourAmt})?`;
    text(msg, W / 2, py + ph * 0.42, ph * 0.075, C.ink, 'center', false);
    const bw = pw * 0.36, bh = ph * 0.2, by = py + ph * 0.62;
    g.drawImage(img.plank, W / 2 - bw - pw * 0.03, by, bw, bh); text('CONFIRM', W / 2 - bw / 2 - pw * 0.03, by + bh / 2, bh * 0.32, C.lantern);
    g.drawImage(img.plank, W / 2 + pw * 0.03, by, bw, bh); text('CANCEL', W / 2 + bw / 2 + pw * 0.03, by + bh / 2, bh * 0.32);
    const P = panel;
    panel.hits.push([W / 2 - bw - pw * 0.03, by, bw, bh, () => { panel = null; sfx('confirm'); if (P.mode === 'BAIT') bait = true; else nextRound(P.mode); }]);
    panel.hits.push([W / 2 + pw * 0.03, by, bw, bh, () => { panel = null; }]);
  }
}
function drawConnErr() {
  if (!connErr) return;
  g.save(); g.globalAlpha = 0.7; g.fillStyle = '#0B1418'; g.fillRect(0, 0, W, H); g.restore();
  const pw = Math.min(W * 0.86, 440), ph = Math.min(H * 0.6, 220), px = (W - pw) / 2, py = (H - ph) / 2; slice9('tag', px, py, pw, ph);
  text('CONNECTION PROBLEM', W / 2, py + ph * 0.24, Math.max(12, ph * 0.1), C.ink, 'center', false);
  para(connErr, px + pw * 0.1, py + ph * 0.45, pw * 0.8, Math.max(10, ph * 0.075));
}
function drawPops() {
  pops = pops.filter(p => GT - p.t0 < 900);
  pops.forEach(p => { const k = (GT - p.t0) / 900, s = L.rowH * 0.3 * p.size * (k < 0.15 ? E.back(k / 0.15) : 1) * (k > 0.8 ? (1 - k) / 0.2 : 1); text(p.text, p.x, p.y - k * L.rowH * 0.7, s, p.col); });
}
function render() {
  g.setTransform(DPR, 0, 0, DPR, 0, 0); g.imageSmoothingQuality = 'high';
  drawWorld();
  chests.forEach(drawChest); // chests sit behind the fish so the bottom price tags stay readable
  g.save(); g.beginPath(); g.rect(0, L.surf - L.rowH * 0.35, W, H - L.barH - L.rowH * 0.22 - (L.surf - L.rowH * 0.35)); g.clip();
  leaving.forEach(drawItem);
  items.filter(i => i.kind === 'junk').forEach(drawItem);
  items.filter(i => i.kind !== 'junk' && i.state !== 'hooked').forEach(drawItem);
  g.restore();
  hooks.forEach(drawHook);
  items.filter(i => i.state === 'hooked').forEach(drawItem);
  drawTackle(); drawRods(); drawLanterns(); drawGantry(); drawSign(); drawGull(); drawScale();
  drawBuy(); drawFx(); drawFlyers(); drawBanner(); drawBar(); drawPops(); drawReplayCompact(); drawPanel(); drawSplash(); drawConnErr();
}


// ---------------------------------------------------------------- player-facing text (social mode uses Engine's replacement wording)
const MODE_STATS = { SHALLOWS: { cost: 1, max: 3988.1 },REEF: { cost: 1, max: 3559.6 },TRENCH: { cost: 1, max: 4839.35 },SHALLOWS_BAIT: { cost: 3, max: 4277 },REEF_BAIT: { cost: 3, max: 3828.2 },TRENCH_BAIT: { cost: 3, max: 3383.5 },NIGHT_SHIFT: { cost: 100, max: 9817.2 },DEEP_WATER: { cost: 300, max: 9823 },THING_BELOW: { cost: 1000, max: 9874.8 } }; // from math/library/gen_info.json (RTP 96.50% in every mode)
const MODE_NAMES = { SHALLOWS: 'The Shallows', REEF: 'The Reef', TRENCH: 'The Trench', SHALLOWS_BAIT: 'Shallows + Extra Bait', REEF_BAIT: 'Reef + Extra Bait', TRENCH_BAIT: 'Trench + Extra Bait', NIGHT_SHIFT: 'Night Shift', DEEP_WATER: 'Deep Water', THING_BELOW: 'The Thing Below' };
const DISCLAIMER = 'Malfunction voids all wins and plays. A consistent internet connection is required. In the event of a disconnection, reload the game to finish any uncompleted rounds. The expected return is calculated over many plays. The game display is not representative of any physical device and is for illustrative purposes only. Winnings are settled according to the amount received from the Remote Game Server and not from events within the web browser. TM and © 2026 Engine.';
function TXT() {
  const b = { bet: 'BET', buy: 'BUY', buyTitle: 'BUY A BONUS', buyFor: 'Buy for', yourAmt: 'your bet', noFunds: 'Not enough balance for this bet.',
    replayTitle: 'BET REPLAY', replayNote: 'This is a replay of a previous round. No bets will be placed.',
    rp: ['MODE', 'BASE BET', 'COST MULTIPLIER', 'TOTAL BET COST', 'PAYOUT MULTIPLIER', 'TOTAL WIN'], confirmTitle: 'CONFIRM PURCHASE', cost: 'Cost' };
  if (!social) return b;
  return { ...b, bet: 'PLAY AMOUNT', buy: 'FEATURES', buyTitle: 'FEATURES', buyFor: 'Play for', yourAmt: 'your play amount', noFunds: 'Not enough balance for this play amount.',
    replayTitle: 'REPLAY', replayNote: 'This is a replay of a previous round. Nothing is played and your balance does not change.',
    rp: ['MODE', 'PLAY AMOUNT', 'PLAY MULTIPLIER', 'TOTAL PLAY', 'WIN MULTIPLIER', 'TOTAL WIN'], confirmTitle: 'CONFIRM FEATURE', cost: 'Plays at' };
}
function wrapLines(t, maxW, size) {
  g.font = `700 ${size}px Fredoka`; const out = []; let line = '';
  for (const w of t.split(' ')) { const tryL = line ? line + ' ' + w : w; if (g.measureText(tryL).width > maxW && line) { out.push(line); line = w; } else line = tryL; }
  if (line) out.push(line); return out;
}
// Engine's social wording: no pay / buy / bet / cost-of words anywhere
const socialize = t => !social ? t : t.replace(/\bpays\b/g, 'gives').replace(/\bpay\b/g, 'give').replace(/\bpaid\b/g, 'given').replace(/\bPays\b/g, 'Gives')
  .replace(/\bCosts\b/g, 'Play amounts').replace(/\bcosts\b/g, 'plays at').replace(/\bbuy\b/gi, 'start').replace(/\bbets?\b/gi, 'play amount');
function para(t, x, y, maxW, size, col = C.ink) { t = socialize(t); const ls = wrapLines(t, maxW, size); ls.forEach((l, i) => text(l, x, y + i * size * 1.25, size, col, 'left', false)); return y + ls.length * size * 1.25; }

// ---------------------------------------------------------------- logo (Fredoka lettering, ink outline, two flat tones, a golden hook)
function drawLogo(x, y, w) {
  const size = w * 0.2; g.save(); g.font = `700 ${size}px Fredoka`; g.textAlign = 'center'; g.textBaseline = 'middle';
  const t = 'SNAGGED'; g.lineJoin = 'round'; g.lineWidth = size * 0.26; g.strokeStyle = C.ink; g.strokeText(t, x - w * 0.05, y);
  g.fillStyle = C.lantern; g.fillText(t, x - w * 0.05, y);
  g.save(); g.beginPath(); g.rect(x - w, y + size * 0.08, w * 2, size); g.clip(); g.fillStyle = '#D39A2C'; g.fillText(t, x - w * 0.05, y); g.restore();
  const tw = g.measureText(t).width; spr('hook_gold', x - w * 0.05 + tw / 2 + size * 0.32, y + size * 0.05, size * 0.55, size * 1.25, 0.15 + Math.sin(RT / 700) * 0.06);
  g.restore();
}

// ---------------------------------------------------------------- splash (first tap also unlocks sound)
let splash = !CAPTURE || Q.get('splash') === '1', replay = null;
function drawSplash() {
  if (!splash) return;
  g.save(); g.globalAlpha = 0.6; g.fillStyle = '#0B1418'; g.fillRect(0, 0, W, H); g.restore();
  const w = Math.min(W * 0.8, 520); drawLogo(W / 2, H * 0.38, w);
  text('Five hooks. One harbour full of junk.', W / 2, H * 0.38 + w * 0.2, Math.min(W * 0.045, 22), C.cream);
  const k = 1 + Math.sin(RT / 300) * 0.05; text(replay ? (replay.err ? 'This replay could not be loaded.' : 'TAP TO CONTINUE') : 'TAP TO PLAY', W / 2, H * 0.62, Math.min(W * 0.07, 34) * k, C.lantern);
}
function endSplash() { if (!splash) return; splash = false; sndInit(); music('music_harbour'); sfx('click'); if (replay && !replay.err) panel = { kind: 'replay', stage: 'start' }; }

// ---------------------------------------------------------------- menu and illustrated rules
function openMenu() { if (busy && !replay) return; panel = { kind: 'menu' }; sfx('click'); }
function panelBox(hFrac = 0.86, wMax = 520) { const pw = Math.min(W * 0.92, wMax), ph = Math.min(H * hFrac, 760), px = (W - pw) / 2, py = (H - ph) / 2; slice9('tag', px, py, pw, ph); return { pw, ph, px, py }; }
function plankBtn(x, y, w, h, label, act, col = C.cream) { g.drawImage(img.plank, x - w / 2, y - h / 2, w, h); fitText(label, x, y, h * 0.36, w * 0.85, col); panel.hits.push([x - w / 2, y - h / 2, w, h, act]); }
function drawAutoPanel() {
  const { pw, ph, px, py } = panelBox(0.55, 420); panel.hits = [];
  text('AUTOPLAY', W / 2, py + ph * 0.13, Math.max(12, ph * 0.08), C.ink, 'center', false);
  para(`Choose how many rounds to play automatically at ${fmtM(bait ? 3 : 1)} per round in ${spot.name}. Tap AUTO at any time to stop.`, px + pw * 0.1, py + ph * 0.24, pw * 0.8, Math.max(10, Math.min(ph * 0.05, pw * 0.042)));
  const bw = pw * 0.36, bh = Math.max(22, ph * 0.13);
  [10, 25, 50, 100].forEach((n, i) => plankBtn(W / 2 + (i % 2 ? 1 : -1) * pw * 0.2, py + ph * (0.55 + Math.floor(i / 2) * 0.17), bw, bh, String(n), () => { panel = null; auto = true; autoLeft = n; sfx('confirm'); if (!busy) nextRound(); }, C.lantern));
  plankBtn(W / 2, py + ph * 0.88, bw, bh, 'CANCEL', () => { panel = null; sfx('click'); });
}
function drawMenuPanel() {
  const { pw, ph, px, py } = panelBox(0.5, 420); panel.hits = [];
  text('MENU', W / 2, py + ph * 0.13, ph * 0.08, C.ink, 'center', false);
  const bw = pw * 0.7, bh = ph * 0.15;
  plankBtn(W / 2, py + ph * 0.34, bw, bh, 'RULES', () => { panel = { kind: 'rules', page: 0 }; sfx('click'); });
  plankBtn(W / 2, py + ph * 0.53, bw, bh, SND.muted ? 'SOUND: OFF' : 'SOUND: ON', () => { setMuted(!SND.muted); sfx('click'); }, SND.muted ? C.creamDim : C.lantern);
  plankBtn(W / 2, py + ph * 0.8, bw * 0.6, bh, 'CLOSE', () => { panel = null; sfx('click'); });
}
const RULE_PAGES = ['MODES, RTP AND MAX WIN', 'A ROUND', 'THE CATCH', 'FISH PRICES', 'THE BONUS', 'CONTROLS AND INFO'];
// fish prices per spot, as multiples of the bet (from math/sim.mjs; the page shows the same prices on the tags)
const FISH_LABEL = ['Minnow', 'Mullet', 'Snapper', 'Bluegill', 'Greenback', 'Redfin', 'Puffer', 'Eel'];
const PRICES = { shallows: [0.1, 0.1, 0.2, 0.2, 0.3, 0.5, 0.8, 1.5], reef: [0.1, 0.2, 0.3, 0.5, 0.8, 1, 2, 4], trench: [0.1, 0.2, 0.5, 1, 2, 3, 6, 15] };
const WHOPPERS = { shallows: [10, 20, 50], reef: [20, 50, 100], trench: [25, 50, 100, 250, 500] };
const fx2 = v => (Math.round(v * 10) / 10).toLocaleString('en-US') + 'x';
function drawRulesPanel() {
  const short = H < 520, { pw, ph, px, py } = panelBox(short ? 0.98 : 0.9, 560); panel.hits = [];
  const T = TXT(), pg = panel.page, x0 = px + pw * 0.08, cw = pw * 0.8, fs = Math.max(10, Math.min(pw * 0.04, ph * (short ? 0.05 : 0.03)));
  const head = short ? 0.13 : 0.15, foot = short ? 0.84 : 0.87;
  text(RULE_PAGES[pg], W / 2, py + ph * head * 0.5, Math.max(11, Math.min(ph * 0.045, pw * 0.06)), C.ink, 'center', false);
  text(`${pg + 1} / ${RULE_PAGES.length}`, W / 2, py + ph * head * 0.8, Math.max(9, fs * 0.8), '#77502F', 'center', false);
  const top = py + ph * head, bot = py + ph * foot;
  panel.scroll = panel.scroll || 0;
  g.save(); g.beginPath(); g.rect(px, top, pw, bot - top); g.clip();
  let y = top + fs * 0.6 - panel.scroll; const y0 = y;
  const icon = (n, cx, cy, s2) => spr(n, cx, cy, s2, s2);
  const row = (draw, t, w2 = 3) => { draw(x0 + fs * w2 * 0.55, y + fs * 1.1, fs * w2 * 0.9); y = Math.max(para(t, x0 + fs * (w2 + 1), y, cw - fs * (w2 + 1), fs), y + fs * 2.6) + fs * 0.6; };
  if (pg === 0) {
    const cols = [x0, x0 + cw * 0.5, x0 + cw * 0.68, x0 + cw * 0.86];
    ['Mode', T.cost, 'RTP', 'Max win'].forEach((h2, i) => text(h2, cols[i], y, fs, '#77502F', 'left', false)); y += fs * 1.7;
    for (const [m, st] of Object.entries(MODE_STATS)) {
      text(MODE_NAMES[m], cols[0], y, fs * 0.95, C.ink, 'left', false); text(st.cost + 'x', cols[1], y, fs * 0.95, C.ink, 'left', false);
      text('96.50%', cols[2], y, fs * 0.95, C.ink, 'left', false); text(st.max.toLocaleString('en-US') + 'x', cols[3], y, fs * 0.95, C.ink, 'left', false); y += fs * 1.55;
    }
    y += fs; y = para(`RTP (return to player) is the expected return over many plays: 96.50% in every mode. Costs and maximum wins are multiples of ${T.yourAmt}. Wins are capped at the maximum shown for each mode.`, x0, y, cw, fs);
    y += fs * 0.6; y = para('Every round is decided before it is shown. The animation only displays the result.', x0, y, cw, fs);
  }
  if (pg === 1) {
    y = para('Choose a fishing spot on the sign: The Shallows (frequent small catches), The Reef (balanced) or The Trench (mostly junk, rare huge fish). Then press PLAY.', x0, y, cw, fs) + fs * 0.6;
    y = para('The tackle row gives each of the five lanes one piece of tackle, and the hooks drop:', x0, y, cw, fs) + fs * 0.5;
    row((cx, cy, s2) => icon('hook', cx, cy, s2), 'HOOK: stops at the first thing in its lane. A fish pays its price. Junk pays nothing: the hook is snagged.');
    row((cx, cy, s2) => { icon('hook', cx + s2 * 0.1, cy + s2 * 0.1, s2 * 0.8); icon('sinker', cx - s2 * 0.15, cy - s2 * 0.2, s2 * 0.45); }, 'WEIGHTED HOOK: smashes all the junk in its way and stops at the first fish, the Whopper or the chest.');
    row((cx, cy, s2) => icon('hook_gold', cx, cy, s2), 'GOLDEN HOOK: like a hook, and multiplies the fish it catches by the number shown in its window (2, 3, 5 or 10).');
    row((cx, cy, s2) => { [-0.17, 0, 0.17].forEach(o => spr('dyn_stick', cx + o * s2, cy, s2 * 0.24, s2 * 0.75, o * 0.6)); }, 'DYNAMITE: clears every piece of junk in its lane, and every fish in the lane floats up at half price. It does not catch the Whopper or open the chest.');
    y = para('A lane with no tackle does nothing that round.', x0, y, cw, fs);
  }
  if (pg === 2) {
    row((cx, cy, s2) => icon('fish_rust', cx, cy, s2), 'Fish carry price tags: the price is what they pay when caught (see FISH PRICES).');
    row((cx, cy, s2) => { icon('junk_tyre', cx - s2 * 0.2, cy, s2 * 0.7); icon('junk_bottle', cx + s2 * 0.3, cy, s2 * 0.7); }, 'Junk pays nothing. A plain or golden hook that meets junk is snagged.');
    row((cx, cy, s2) => icon('whopper', cx, cy, s2 * 1.2), 'THE WHOPPER lies across two lanes. It is landed only if BOTH of its lanes get a hook down to it in the same round. With one hook it gets away. If a golden hook is on it, the higher golden multiplier applies.');
    row((cx, cy, s2) => icon('chest', cx, cy, s2), 'CHESTS on the seabed open when a hook reaches the bottom of their lane. A coin multiplies the whole round’s catch (x2, x3, x5 or x10). Two coins in one round multiply each other.');
    row((cx, cy, s2) => icon('lure', cx, cy, s2), 'A chest can also hold 1, 2 or 3 lures. Lures in one round start the bonus: 3 lures Night Shift, 4 lures Deep Water, 5 or more The Thing Below.');
  }
  if (pg === 3) {
    const cols = [x0 + fs * 2.6, x0 + cw * 0.52, x0 + cw * 0.71, x0 + cw * 0.9];
    ['Fish', 'Shallows', 'Reef', 'Trench'].forEach((h2, i) => text(h2, cols[i], y, fs, '#77502F', i ? 'right' : 'left', false)); y += fs * 1.8;
    FISH_N.forEach((n, i) => { spr(n, x0 + fs * 1.1, y, fs * 2.2, fs * 1.5); text(FISH_LABEL[i], cols[0], y, fs * 0.95, C.ink, 'left', false);
      ['shallows', 'reef', 'trench'].forEach((sp, k) => text(fx2(PRICES[sp][i]), cols[k + 1], y, fs * 0.95, C.ink, 'right', false)); y += fs * 1.75; });
    spr('whopper', x0 + fs * 1.1, y, fs * 2.2, fs * 1.5); text('Whopper', cols[0], y, fs * 0.95, C.ink, 'left', false);
    ['shallows', 'reef', 'trench'].forEach((sp, k) => text(WHOPPERS[sp].map(v => v).join(' / ') + 'x', cols[k + 1], y, fs * 0.8, C.ink, 'right', false)); y += fs * 2;
    y = para(`Prices are multiples of ${T.yourAmt}. In the bonus, fish are worth more: Night Shift uses the Reef prices x3.2, Deep Water the Trench prices x1.3, The Thing Below the Trench prices x1.6 (rounded to 0.1x), and the Whopper values rise the same way.`, x0, y, cw, fs);
  }
  if (pg === 4) {
    y = para('NIGHT SHIFT (3 lures): 5 drops in the harbour at night, with a Whopper in most bonuses. DEEP WATER (4 lures): 7 drops with up to two Whoppers. THE THING BELOW (5 or more lures): 9 drops, and the bottom row is one giant chest worth x2 to x25.', x0, y, cw, fs) + fs * 0.7;
    y = para('In the bonus the water stays between drops: junk that is cleared stays cleared, and most fish that are caught are replaced by new fish dropping in.', x0, y, cw, fs) + fs * 0.7;
    y = para('Opened chests raise a multiplier on the scale that only goes up (an x2 chest adds +1, the giant chest adds its value minus 1). Every catch in the bonus is multiplied by it. Chests in the bonus hold no lures, so the bonus cannot start again.', x0, y, cw, fs) + fs * 0.7;
    y = para(`${social ? 'FEATURES' : 'BUY'}: Extra Bait costs 3x ${T.yourAmt} per round; lures are dealt more often and the bonus comes about ten times as often. Night Shift, Deep Water and The Thing Below can be started directly for 100x, 300x and 1,000x ${T.yourAmt}. Each asks you to confirm first.`, x0, y, cw, fs);
  }
  if (pg === 5) {
    y = para(`PLAY starts a round (the space bar does too); during a round, tap anywhere or press PLAY to skip to the result. TURBO plays every round faster. AUTO asks how many rounds to play (10, 25, 50 or 100); tap AUTO again to stop. Use - and + to change ${T.yourAmt}. Tap the sign at the top to change fishing spot. The ${T.buy} sign opens Extra Bait and the bonuses.`, x0, y, cw, fs) + fs * 0.7;
    y = para('MENU opens RULES and SOUND ON/OFF (remembered next time). In the rules, BACK and NEXT turn the pages, and the arrows on the right scroll a long page.', x0, y, cw, fs) + fs * 0.7;
    y = para('The WIN box shows the round’s total; the scale’s needle shows it as a multiple of ' + T.yourAmt + '.', x0, y, cw, fs) + fs * 0.7;
    y = para(DISCLAIMER, x0, y, cw, fs * 0.85, '#3B4950');
  }
  g.restore();
  // scrolling for long pages / short screens
  const contentH = y - y0 + fs, viewH = bot - top, maxScroll = Math.max(0, contentH - viewH);
  panel.maxScroll = maxScroll; panel.scroll = clamp(panel.scroll, 0, maxScroll);
  if (maxScroll > 0) {
    const sx = px + pw * 0.93, bs = Math.max(22, fs * 1.8);
    plankBtn(sx, top + bs * 0.6, bs, bs, '▲', () => { panel.scroll = Math.max(0, panel.scroll - viewH * 0.7); });
    plankBtn(sx, bot - bs * 0.6, bs, bs, '▼', () => { panel.scroll = Math.min(maxScroll, panel.scroll + viewH * 0.7); });
  }
  const by = py + ph * (short ? 0.92 : 0.935), bh = Math.max(20, ph * (short ? 0.1 : 0.07));
  if (pg > 0) plankBtn(px + pw * 0.2, by, pw * 0.26, bh, '◂ BACK', () => { panel.page--; panel.scroll = 0; sfx('click'); });
  if (pg < RULE_PAGES.length - 1) plankBtn(px + pw * 0.8, by, pw * 0.26, bh, 'NEXT ▸', () => { panel.page++; panel.scroll = 0; sfx('click'); });
  plankBtn(W / 2, by, pw * 0.26, bh, 'CLOSE', () => { panel = null; sfx('click'); });
}
cv.addEventListener('wheel', e => { if (panel && panel.kind === 'rules' && panel.maxScroll) { panel.scroll = clamp((panel.scroll || 0) + e.deltaY, 0, panel.maxScroll); e.preventDefault(); } }, { passive: false });

// ---------------------------------------------------------------- Bet Replay panel (Engine's layout; no betting controls)
function replayRows() {
  const T = TXT(), r = replay, cost = r.cost, base = r.amount;
  return [[T.rp[0], MODE_NAMES[r.mode] || r.mode], [T.rp[1], RG.fmtMoney(base, currency)], [T.rp[2], cost + 'x'], [T.rp[3], RG.fmtMoney(base * cost, currency)],
    [T.rp[4], (r.payout / 100).toLocaleString('en-US', { maximumFractionDigits: 2 }) + 'x'], [T.rp[5], RG.fmtMoney(Math.round(base * r.payout / 100), currency)]];
}
function drawReplayPanel() {
  const T = TXT(), short = H < 520; const { pw, ph, px, py } = panelBox(short ? 0.98 : 0.7, 460); panel.hits = [];
  text(T.replayTitle, W / 2, py + ph * 0.09, Math.max(12, ph * 0.07), C.ink, 'center', false);
  const fs = Math.max(10, Math.min(ph * 0.045, pw * 0.045)), gap = Math.min(fs * 1.9, ph * 0.5 / 6);
  let y = py + ph * 0.2;
  for (const [k, v] of replayRows()) { text(k, px + pw * 0.08, y, fs, '#77502F', 'left', false); text(v, px + pw * 0.92, y, fs, C.ink, 'right', false); y += gap; }
  para(T.replayNote, px + pw * 0.08, y + fs * 0.1, pw * 0.84, Math.max(9, fs * 0.85));
  plankBtn(W / 2, py + ph * 0.88, pw * 0.6, Math.max(22, ph * 0.12), panel.stage === 'end' ? 'PLAY AGAIN' : 'START REPLAY', () => { panel = null; sfx('confirm'); runReplay(); }, C.lantern);
}
function drawReplayCompact() {
  if (!replay || panel || splash || !busy) return;
  const T = TXT(), w = Math.min(W * 0.46, 230), fs = Math.max(9, w * 0.055), rows = replayRows(), h = fs * 1.5 * (rows.length + 1.4);
  const x = 8, y = L.portrait ? L.stripH + L.tackH + 8 : L.stripH + 8;
  g.save(); g.globalAlpha = 0.92; slice9('tag', x, y, w, h); g.restore();
  text(T.replayTitle, x + w / 2, y + fs * 1.1, fs * 1.1, C.ink, 'center', false);
  rows.forEach(([k, v], i) => { const yy = y + fs * (2.6 + i * 1.5); text(k, x + w * 0.08, yy, fs * 0.85, '#77502F', 'left', false); text(v, x + w * 0.92, yy, fs * 0.85, C.ink, 'right', false); });
}
async function runReplay() {
  busy = true; await playBook(replay.state, replay.payout); busy = false;
  win.shown = win.value = replay.payout / 100; panel = { kind: 'replay', stage: 'end' };
}

// ---------------------------------------------------------------- playing a round: Engine's RGS when present, otherwise offline demo books
let DEMO = null, demoIx = {}, msg = null;
function demoBook(mode, kind) {
  const list = DEMO[mode]; const pool = kind ? list.filter(b => b.kind === kind) : list;
  const L2 = pool.length ? pool : list; demoIx[mode] = ((demoIx[mode] || 0) + 1) % L2.length; return L2[demoIx[mode]];
}
async function nextRound(modeOverride, kind) {
  if (busy || panel || connErr) return;
  const mode = modeOverride || modeName(), cost = MODES[mode] || 1, debit = betMicro() * cost;
  if (balanceMicro < debit) { pop(TXT().noFunds, 0, 0, C.cream, 0.7); auto = false; return; }
  busy = true;
  try {
    if (ONLINE) {
      const r = await RG.rgs.play(betMicro(), mode);
      balanceMicro = r.balance.amount;
      await playBook(r.round.state, Math.round(r.round.payoutMultiplier * 100));
      if (r.round.active) { const e = await RG.rgs.endRound(); balanceMicro = e.balance.amount; }
    } else {
      const b = demoBook(mode, kind); balanceMicro -= debit;
      await playBook(b.events, b.payout);
      balanceMicro += Math.round(betMicro() * b.payout / 100);
    }
  } catch (e) { busy = false; auto = false; pop((e && e.code) ? 'Connection problem: ' + e.code : 'Something went wrong', 0, 0, C.cream); console.error(e); return; }
  busy = false;
  if (auto) { autoLeft--; if (autoLeft <= 0) auto = false; }
  if (auto && !panel && !(MODES[mode] > 3)) setTimeoutGT(() => nextRound(), 700);
}
function setTimeoutGT(fn, ms) { wait(ms).then(fn); }
async function demo(tour) {
  if (splash) { await wait(1800); endSplash(); }
  if (!SND.want) music('music_harbour');
  // offline demo for recordings: a fixed, varied order of real books
  const T = tour || [['REEF', 'win'], ['TRENCH', 'whopper'], ['REEF', 'nowin'], ['SHALLOWS', 'win'], ['REEF_BAIT', 'bonus1'], ['TRENCH', 'big']];
  for (const [m, k] of T) {
    const buy = MODES[m] > 3, keep = betIx;
    if (!buy) { curSpot = m.split('_')[0].toLowerCase(); bait = m.endsWith('_BAIT'); } else { betIx = 0; panel = { kind: 'buy' }; await wait(1300); panel = { kind: 'confirm', mode: m, title: MODE_NAMES[m].toUpperCase(), cost: MODES[m] }; await wait(1200); panel = null; sfx('confirm'); }
    await nextRound(m, k); betIx = keep; await wait(1200);
  }
}

// ---------------------------------------------------------------- input
function barButtons() {
  const h = L.barH, cy = H - h + h * 0.52, big = Math.min(h * 0.86, W * 0.2), btn = big * 0.5;
  if (L.portrait) { const by = cy + h * 0.27, s = btn * 0.56; return { play: [W * 0.815, cy - h * 0.06, big * 0.45], turbo: [W * 0.685, cy - h * 0.06, btn * 0.5], auto: [W * 0.935, cy - h * 0.06, btn * 0.5], minus: [W * 0.175, by, s * 0.7], plus: [W * 0.395, by, s * 0.7], menu: [W * 0.075, cy - h * 0.06, btn * 0.5] }; }
  const s = btn * 0.66; return { play: [W * 0.88, cy - h * 0.02, big * 0.5], turbo: [W * 0.79, cy - h * 0.06, btn * 0.6], auto: [W * 0.965, cy - h * 0.06, btn * 0.6], minus: [W * (0.2 + (W < 700 ? 0.05 : 0)), cy + h * 0.1, s * 0.7], plus: [W * (0.32 + (W < 700 ? 0.05 : 0)), cy + h * 0.1, s * 0.7], menu: [W * 0.04, cy - h * 0.06, btn * 0.6] };
}
const hit = (x, y, c) => Math.hypot(x - c[0], y - c[1]) <= c[2];
const inRect = (x, y, r) => x >= r[0] && x <= r[0] + r[2] && y >= r[1] && y <= r[1] + r[3];
function signRect() {
  if (L.portrait) { const pw = W * 0.4, ph = L.stripH * 0.15, px = W * 0.24, top = L.beamY + L.stripH * 0.03; return [px - pw / 2, top, pw, ph]; }
  const w = Math.min(H * 0.36, L.boardX * 0.75), h = w * 0.62, x = L.boardX * 0.5, y = L.stripH + L.waterH * 0.12; return [x - w / 2, y - h * 0.3, w, h * 1.2];
}
function changeSpot(dir = 1) {
  if (busy || bonusState || replay) return; sfx('click');
  curSpot = SPOT_ORDER[(SPOT_ORDER.indexOf(curSpot) + dir + 3) % 3]; spot = SCENES[curSpot]; buildBg();
  const b = DEMO && demoBook(curSpot.toUpperCase(), 'nowin'); if (b) { const e = b.events[0]; restock(roundFrom({ board: decBoard(e.board), tackle: e.tackle.split(','), chests: e.chests.split(',') }, curSpot)); }
}
cv.addEventListener('pointerdown', e => {
  const x = e.clientX, y = e.clientY, B = barButtons();
  if (connErr) return;
  if (splash) { endSplash(); return; }
  if (panel) { const h2 = (panel.hits || []).find(r => inRect(x, y, r)); if (h2) h2[4](); return; }
  if (hit(x, y, B.menu)) { openMenu(); return; }
  if (replay) { if (busy) skipping = true; return; }
  if (hit(x, y, B.turbo)) { turbo = !turbo; sfx('click'); return; }
  if (hit(x, y, B.play)) { if (busy) skipping = true; else nextRound(); return; }
  if (hit(x, y, B.auto)) { sfx('click'); if (auto) { auto = false; autoLeft = 0; } else panel = { kind: 'auto' }; return; }
  if (!busy && hit(x, y, B.minus)) { betIx = Math.max(0, betIx - 1); sfx('click'); return; }
  if (!busy && hit(x, y, B.plus)) { betIx = Math.min(betLevels.length - 1, betIx + 1); sfx('click'); return; }
  const BG = buyGeom();
  if (!busy && !bonusState && inRect(x, y, [BG.x - BG.w / 2, BG.y - BG.h / 2, BG.w, BG.h])) { openBuy(); return; }
  if (!busy && inRect(x, y, signRect())) { const r = signRect(); changeSpot(x > r[0] + r[2] * 0.75 || !L.portrait ? 1 : 1); return; }
  if (y < H - L.barH && busy) skipping = true; // tap anywhere on the scene to skip
});
window.addEventListener('keydown', e => { if (e.code === 'Space') { e.preventDefault(); if (splash) { endSplash(); return; } if (panel || replay) { if (replay && busy) skipping = true; return; } if (busy) skipping = true; else nextRound(); } });

// ---------------------------------------------------------------- loop
function resize() {
  // size to the VISIBLE area (on iPhone Safari, 100vh includes the space behind the address bar, which cut off the bet bar)
  const vv = window.visualViewport;
  DPR = Math.min(window.devicePixelRatio || 1, 3); W = Math.round(vv ? vv.width : window.innerWidth); H = Math.round(vv ? vv.height : window.innerHeight);
  cv.style.width = W + 'px'; cv.style.height = H + 'px';
  cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR); L = layout(); buildBg();
}
function step(dt) {
  RT += dt; GT += dt * (skipping ? 6 : 1);
  runTasks(); updateIdle(dt); render();
}
function load() {
  // one texture atlas: a single download, cut into sprites once at start
  const sheet = new Image(); sheet.src = 'atlas.png';
  return Promise.all([fetch('atlas.json').then(r => r.json()), sheet.decode()]).then(([map]) => {
    for (const n of ART) { const r = map[n]; if (!r) continue; const c = document.createElement('canvas'); c.width = r[2]; c.height = r[3]; c.getContext('2d').drawImage(sheet, r[0], r[1], r[2], r[3], 0, 0, r[2], r[3]); img[n] = c; }
  }).then(() => document.fonts.load('700 20px Fredoka'));
}
load().then(async () => {
  resize(); initIdle(); needle.a = needleFor(0);
  DEMO = await fetch('demo_books.json').then(r => r.json()).catch(() => null);
  let resume = null;
  if (RG && RG.params.replay) {
    const P = RG.params; currency = P.currency || (social ? 'XSC' : 'USD'); const amt0 = Number.isFinite(P.amount) && P.amount > 0 ? P.amount : 1e6;
    replay = { mode: P.mode, event: P.event, amount: amt0, cost: MODES[P.mode] || 1, payout: 0, state: null };
    betLevels = [amt0]; betIx = 0;
    try { const r = await RG.rgs.replay(); replay.state = r.state; replay.payout = Math.round(r.payoutMultiplier * 100); replay.cost = r.costMultiplier || replay.cost; } catch (e) { replay.err = true; console.error('replay failed', e); }
  } else if (ONLINE) {
    try {
      const a = await RG.rgs.authenticate();
      balanceMicro = a.balance.amount; currency = a.balance.currency || currency;
      const cf = a.config || {};
      if (cf.betLevels && cf.betLevels.length) {
        let lv = cf.betLevels.filter(v => (!cf.minBet || v >= cf.minBet) && (!cf.maxBet || v <= cf.maxBet)); if (!lv.length) lv = cf.betLevels.slice();
        betLevels = lv; const d = cf.defaultBetLevel || lv[0]; let bi = 0; lv.forEach((v, i) => { if (Math.abs(v - d) < Math.abs(lv[bi] - d)) bi = i; }); betIx = bi;
      }
      const j = (a.config && a.config.jurisdiction) || {}; if (j.socialCasino) social = true;
      if (a.round && a.round.active) resume = a.round;
    } catch (e) { console.error('authenticate failed', e); connErr = 'Unable to connect to the game server. Please reload the game.'; }
  }
  const idle = DEMO && demoBook('REEF', 'whopper');
  if (idle) { const e = idle.events[0]; restock(roundFrom({ board: decBoard(e.board), tackle: e.tackle.split(','), chests: e.chests.split(',') }, 'reef'), true); }
  window.addEventListener('resize', resize);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', resize);
  window.addEventListener('orientationchange', () => setTimeout(resize, 300));
  window.__snag = !TEST ? { state: () => ({ busy }) } : { demo, nextRound, step: ms => step(ms), state: () => ({ busy, GT, RT, win: win.value, balance: balanceMicro, spot: curSpot, bait, panel: panel && panel.kind }), changeSpot, openBuy,
    rules: pg => { panel = { kind: 'rules', page: pg }; }, confirm: m => { panel = { kind: 'confirm', mode: m, title: MODE_NAMES[m].toUpperCase(), cost: MODES[m] }; }, drawn: () => [...DRAWN], renderAudio, logoPng: w => { const c = document.createElement('canvas'); c.width = w; c.height = Math.round(w * 0.36); const keep = g; g = c.getContext('2d'); const rt = RT; RT = 0; drawLogo(w * 0.47, c.height * 0.5, w * 0.92); RT = rt; g = keep; return c.toDataURL('image/png'); }, snd: () => ({ ctx: !!SND.ctx, state: SND.ctx && SND.ctx.state, loaded: Object.values(SND.buf).filter(b => b && !(b instanceof Promise)).length, music: SND.want, playing: !!SND.music, events: SND.log.length }), tap: (x, y) => cv.dispatchEvent(new PointerEvent('pointerdown', { clientX: x, clientY: y })) };
  if (!window.__snag.step) window.__snag.step = () => {};
  if (CAPTURE) { render(); document.title = 'Snagged! ready'; return; }
  let last = performance.now();
  const loop = now => { const dt = Math.min(50, now - last); last = now; step(dt); requestAnimationFrame(loop); };
  requestAnimationFrame(loop);
  document.title = 'Snagged! ready';
  if (resume) {
    try {
      let bi = betLevels.indexOf(resume.amount); if (bi < 0) { betLevels = [...betLevels, resume.amount].sort((x, y) => x - y); bi = betLevels.indexOf(resume.amount); } betIx = bi;
      const m = String(resume.mode || ''); if (MODES[m] && MODES[m] <= 3) { curSpot = m.split('_')[0].toLowerCase(); bait = m.endsWith('_BAIT'); spot = SCENES[curSpot]; buildBg(); }
      busy = true; await playBook(resume.state, Math.round(resume.payoutMultiplier * 100));
      const e = await RG.rgs.endRound(); balanceMicro = e.balance.amount;
    } catch (e) { console.error('resume failed', e); connErr = 'The previous round could not be finished. Please reload the game.'; }
    busy = false;
  }
  if (TEST && Q.get('snagtour') === '1') demo();
});
})();
