// Sofa So Good (working folder loose-change): front end. Plays real books from the RGS (Engine or the local mock) and never decides an outcome:
// every round is rebuilt from its seed by sim/rules.js; physics (planck-det, fixed 1/60 s steps) only times and animates it.
import * as planck from './sim/planck-det.mjs';
import { LAYERS, SOFAS, TIER, baseRound, bonusRound, newState, tv as tvOf, MAX_WIN } from './sim/rules.js';
import { params } from './lib/params.js';
import { rgs } from './lib/rgs.js';
import { fmtBalance, fmtMoney, meta as curMeta } from './lib/money.js';
import { makeText } from './text.js';

const cv = document.getElementById('c'), cx = cv.getContext('2d'), rulesDiv = document.getElementById('rules');
const Q = new URLSearchParams(location.search);
const DEMO = Q.get('autodemo') === '1';        // auto-plays rounds, for our own recordings only (Engine's demo=true/false never triggers it)
const IMG = {}, CLIP = {}, STEP = 1 / 60;
const SOFA_PREFIX = { THREE_SEATER: 'gaz', FUTON: 'futon', CHESTERFIELD: 'chester' };
const SOFA_CARD = { THREE_SEATER: 'card_three', FUTON: 'card_futon', CHESTERFIELD: 'card_chester' };
const SOFA_MODES = ['FUTON', 'THREE_SEATER', 'CHESTERFIELD'];
const BUYS = [
  { mode: 'REMOTE_HUNT', label: 'REMOTE HUNT', note: 'more remotes', icon: 'tok_remote' },
  { mode: 'DOWN_THE_BACK', label: 'DOWN THE BACK', note: 'bonus 1 in 13', icon: 'big_sock' },
  { mode: 'MATCH_DAY', label: 'MATCH DAY', note: '4 drops, TV x1', icon: 'coin_m' },
  { mode: 'CUP_FINAL', label: 'CUP FINAL', note: '4 drops, TV x2', icon: 'tin_closed' },
  { mode: 'BIG_WIN', label: 'THE BIG WIN', note: '5 drops, TV x3', icon: 'tin_open' },
];
const BUY_COST = { REMOTE_HUNT: 3, DOWN_THE_BACK: 20, MATCH_DAY: 100, CUP_FINAL: 300, BIG_WIN: 1000 };
const GAZ_ACTS = ['snore', 'situp', 'fist', 'roll', 'twitch'];
const MODE_NAME = { FUTON: 'The Futon', THREE_SEATER: 'The Three-Seater', CHESTERFIELD: 'The Chesterfield', REMOTE_HUNT: 'Remote Hunt', DOWN_THE_BACK: 'Down the Back', MATCH_DAY: 'Match Day', CUP_FINAL: 'Cup Final', BIG_WIN: 'The Big Win' };

// ---------- assets (atlases from art/tools/pack.py) ----------
const WARM = [], WARM_LO = [];   // GPU uploads: WARM (this sofa + the dog, before PLAY), WARM_LO (the rest, only between rounds)
const img = src => new Promise((ok, no) => { const i = new Image(); i.onload = () => (i.decode ? i.decode().catch(() => {}) : Promise.resolve()).then(() => ok(i)); i.onerror = no; i.src = src; });
const sprite = (a, sx, sy, w, h) => ({ a, sx, sy, w, h, width: w, height: h });
async function loadClip(n, lo = false) {
  if (CLIP[n] || CLIP[n + '_loading']) return CLIP[n + '_loading'];
  return CLIP[n + '_loading'] = (async () => {
    const m = await (await fetch(`./atlas/${n}.json`)).json();
    const pages = await Promise.all([...Array(m.pages).keys()].map(k => img(`./atlas/${n}_p${k}.webp`)));
    pages.forEach(p => (lo ? WARM_LO : WARM).push(p));
    CLIP[n] = { meta: m, frames: [...Array(m.n).keys()].map(i => { const p = Math.floor(i / m.per), j = i % m.per; return sprite(pages[p], (j % m.cols) * (m.fw + 2), Math.floor(j / m.cols) * (m.fh + 2), m.fw, m.fh); }) };
  })();
}
async function loadBg(n, lo = false) { if (IMG[n]) return; const i = await img(`./atlas/${n}.webp`); (lo ? WARM_LO : WARM).push(i); IMG[n] = sprite(i, 0, 0, i.width, i.height); }
const sofaClips = s => GAZ_ACTS.map(a => `${SOFA_PREFIX[s]}_${a}`);
async function loadFirst() {
  const st = await (await fetch('./atlas/static.json')).json();
  const portrait = innerHeight / innerWidth > 1.05;
  const statics = (async () => { const pages = await Promise.all([...Array(st.pages).keys()].map(k => img(`./atlas/static_${k}.webp`)));
    for (const [n, [p, x, y, w, h]] of Object.entries(st.sprites)) IMG[n] = sprite(pages[p], x, y, w, h); })();
  await Promise.all([statics, loadBg(portrait ? 'bg_room_p' : 'bg_room_l'), loadBg('bg_cavity'), loadClip(`${SOFA_PREFIX[S.sofa]}_snore`), loadClip('dog_wag'), document.fonts.load('24px Lilita')]);
}
async function streamRest() {
  for (const n of [...sofaClips(S.sofa), 'dog_ears', 'dog_run', 'dog_dig', 'dog_sock', 'dog_yawn']) await loadClip(n);
  window.__allClips = true;
  for (const n of ['bg_room_p', 'bg_room_l']) await loadBg(n, true);
  for (const t of ['matchday', 'cupfinal', 'bigwin']) for (const o of ['p', 'l']) await loadBg(`bg_${t}_${o}`, true);
  await loadClip('mates_idle', true); await loadClip('mates_cheer', true);
  for (const s of SOFA_MODES) if (s !== S.sofa) for (const n of sofaClips(s)) await loadClip(n, true);
  window.__streamed = true;
}
function blit(s, x, y, w, h) { cx.drawImage(s.a, s.sx, s.sy, s.w, s.h, x, y, w, h); }
// painted brass plate drawn nine-slice: corners and rim keep their shape at any size
function plate(x, y, w, h) {
  const s = IMG.ui_label, c = Math.round(s.h * 0.42), d = Math.min(h * 0.45, w * 0.3, Math.max(14, Math.min(48, h * 0.35)));
  const sx = [0, c, s.w - c, s.w], dx = [0, d, w - d, w], sy = [0, c, s.h - c, s.h];
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { const dy = [0, d, h - d, h];
    cx.drawImage(s.a, s.sx + sx[i], s.sy + sy[j], sx[i + 1] - sx[i], sy[j + 1] - sy[j], x + dx[i], y + dy[j], dx[i + 1] - dx[i], dy[j + 1] - dy[j]); }
}

// ---------- state ----------
const S = { t: 0, freeze: 0, phase: 'boot', phaseT: 0, sofa: 'THREE_SEATER', mode: 'THREE_SEATER',
  balance: 0, currency: params.currency || '', levels: [1e6], betIdx: 0, win: 0, winShown: 0, social: false, jur: {},
  fx: [], past: [], flights: [], plates: [], pressed: 0, turbo: false, auto: 0, panel: null, msg: null,
  cam: { z: 1, fx: 0, fy: 0, target: 0 }, tvFlash: 0, tvRock: 0, tvSlam: 0, remotes: 0, remPop: 0, scene: 'room', tier: null,
  bonus: null, title: null, hits: 0, deadN: 0 };
const bet = () => S.levels[S.betIdx];
const SOCIAL_CUR = ['XSC', 'XGC', 'XEC', 'XRC', 'WRW'];
let T = makeText(SOCIAL_CUR.includes((params.currency || '').toUpperCase()) || params.social); S.social = T.social;
const gaz = { clip: 'gaz_snore', t: 0, max: 0, cut: 9, snort: 0, idle: 0 };
const dog = { mode: 'sofa', t: 0, clip: 'dog_wag', x: 0, y: 0, col: -1, earsAt: 3 };
const mates = { clip: 'mates_idle', t: 0 };
let world, cellBodies = {}, debris = [], tools = [], board = null, disp = null, queues = null, groups = [], groupIdx = 0, timers = [];

// ---------- layout (CSS px) ----------
let W = 0, H = 0, DPR = 1, L = {};
const SAFE = document.createElement('div'); SAFE.style.cssText = 'position:fixed;left:0;bottom:0;width:0;padding-bottom:env(safe-area-inset-bottom,0px);visibility:hidden;pointer-events:none'; document.body.appendChild(SAFE);
function layout() {
  // the visible area (iPhone Safari's 100vh includes the space behind its toolbar), minus the home-bar safe area
  const vv = window.visualViewport; DPR = Math.min(devicePixelRatio || 1, 2.5);
  W = Math.round(vv ? vv.width : innerWidth); H = Math.round(vv ? Math.min(vv.height, innerHeight) : innerHeight);
  cv.style.width = W + 'px'; cv.style.height = H + 'px';
  const sb = Math.min(40, parseFloat(getComputedStyle(SAFE).paddingBottom) || 0); H -= sb;
  cv.style.height = (H + sb) + 'px'; cv.width = Math.round(W * DPR); cv.height = Math.round((H + sb) * DPR);
  const portrait = H / W > 1.05; const sn = CLIP[`${SOFA_PREFIX[S.sofa]}_snore`].meta, snAR = sn.h / sn.w; const tvAR = IMG.tv.height / IMG.tv.width;
  if (portrait) {
    const barH = Math.round(Math.min(Math.max(H * 0.125, 104), 150));
    let cw = W * 0.18; const maxB = H * 0.40; if (5 * cw / 1.5 + cw * 0.9 > maxB) cw = maxB / (5 / 1.5 + 0.9);
    let gk = 1; for (let it = 0; it < 30; it++) { const gh0 = W * 1.06 * gk * snAR, need = barH + 8 + 5 * cw / 1.5 + cw * 0.9 + cw * 0.9 + (gh0 - cw * 0.84 * 0.42) + gh0 * 0.36 + H * 0.01; if (need <= H) break; cw *= 0.97; gk *= 0.97; }
    const rh = cw / 1.5, th = cw * 0.9, bx = (W - 5 * cw) / 2, by = H - barH - (5 * rh + th) - 8;
    const ww = cw * 0.84, wy = by - ww - cw * 0.06;
    const gW = W * 1.06 * gk, gH = gW * snAR, gx = (W - gW) / 2 - W * 0.035 * gk, gy = wy + ww * 0.42 - gH;
    const tvW = W * 0.40;
    L = { portrait, barH, cw, rh, th, bx, by, ww, wy, gW, gH, gx, gy,
      tv: { x: W - tvW - W * 0.025, y: Math.max(6, gy - tvW * tvAR * 0.42), w: tvW, h: tvW * tvAR },
      glass: { x: W * 0.02, y: 10, h: H * 0.1 }, lamp: { x: W * 0.17, y: gy - gH * 0.42, h: gH * 0.78 },
      dog: { x: gx + gW * 0.70, y: gy + gH * 0.80, h: gH * 0.46 }, mates: { x: W * 0.02, y: gy - gH * 0.35, h: gH * 0.95 } };
  } else {
    const barH = H < 300 ? Math.round(Math.max(40, H * 0.19)) : Math.round(Math.max(H * 0.1, 64)), topH = H * 0.235;   // pop-out windows get a slim bar
    const rh = Math.min((H - barH - topH - 14) / 7.1, W * 0.46 / 7.5), cw = rh * 1.5, th = rh * 0.95, ww = rh * 1.05;
    const bx = W * 0.5 + (W * 0.5 - 5 * cw) / 2, wy = topH + 2, by = wy + ww + rh * 0.1;
    const gH = Math.min(H * 0.5, (W * 0.49) * snAR), gW = gH / snAR, gx = W * 0.25 - gW / 2 + W * 0.005, gy = H - barH - gH - H * 0.03;
    const tvH = topH * 0.96, tvW = tvH / tvAR;
    L = { portrait, barH, cw, rh, th, bx, by, ww, wy, gW, gH, gx, gy,
      tv: { x: bx + 5 * cw * 0.5 - tvW * 0.75, y: 4, w: tvW, h: tvH },
      glass: { x: bx + 5 * cw * 0.5 + tvW * 0.4, y: topH * 0.16, h: topH * 0.8 },
      lamp: { x: gx - gW * 0.02, y: gy - gH * 0.42, h: gH * 0.95 },
      dog: { x: gx + gW * 0.70, y: gy + gH * 0.80, h: gH * 0.46 }, mates: { x: gx - W * 0.01, y: H * 0.02, h: H * 0.42 } };
  }
  L.U = L.cw;
  // short phones (planning chat pass 2): the name plate goes to the top-left corner and the glass beside the TV, clear of Gaz's head
  L.short = L.portrait && H / W < 1.9;
  if (L.short) { const gh = H * 0.085, gw = gh * IMG.glass_empty.width / IMG.glass_empty.height; L.glass = { x: W - gw - W * 0.03, y: L.tv.y + L.tv.h * 0.98, h: gh }; }
  L.rem = L.portrait ? { x: L.short ? W * 0.39 : W * 0.36, y: 8, d: Math.min(36, W * 0.09) } : { x: L.tv.x - L.tv.w * 0.05, y: L.tv.y + L.tv.h * 0.15, d: L.tv.h * 0.26 };
  L.sofaTag = L.portrait ? { x: W * 0.02, y: L.short ? 10 : L.glass.y + L.glass.h + 6, w: W * 0.34, h: 28 } : { x: L.gx + L.gW * 0.33, y: L.gy + L.gH * 0.86, w: L.gW * 0.34, h: L.gH * 0.12 };
}

// ---------- helpers ----------
const ease = { out: t => 1 - (1 - t) ** 3, inOut: t => t < .5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2, back: t => 1 + 2.7 * (t - 1) ** 3 + 1.7 * (t - 1) ** 2 };
const lerp = (a, b, t) => a + (b - a) * t, clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function draw(n, x, y, w, h, rot = 0, flip = false, sx = 1, sy = 1) {
  const i = typeof n === 'string' ? IMG[n] : n; if (!i) return;
  if (h == null) h = w * i.height / i.width; if (w == null) w = h * i.width / i.height;
  cx.save(); cx.translate(x + w / 2, y + h / 2); if (rot) cx.rotate(rot); if (flip || sx !== 1 || sy !== 1) cx.scale(flip ? -sx : sx, sy);
  blit(i, -w / 2, -h / 2, w, h); cx.restore();
}
function digits(s, mx, my, h, maxW) {
  const map = { x: 'dg_x', '.': 'dg_dot', ',': 'dg_comma' }, REL = { x: 0.82, '.': 0.42, ',': 0.5 }; const parts = []; let tw = 0;
  if (maxW) { let w0 = 0; for (const ch of s) { const i = IMG[map[ch] || 'dg_' + ch]; if (i) w0 += i.width * (h / i.height * (REL[ch] || 1)) * 0.9; } if (w0 > maxW) h *= maxW / w0; }   // shrink to fit
  for (const ch of s) { const i = IMG[map[ch] || 'dg_' + ch]; if (!i) continue; const sc = h / i.height * (REL[ch] || 1); const w = i.width * sc * 0.9; parts.push([i, w, i.height * sc]); tw += w; }
  let x = mx - tw / 2; for (const [i, w, hh] of parts) { blit(i, x - w * 0.05, my + h / 2 - hh, w / 0.9, hh); x += w; }
  return tw;
}
// a money amount in painted digits, with the currency's symbol or code drawn beside them, exact to the currency's decimals
function digitsMoney(micro, mx, my, h, maxW, step = false) {
  if (step) { const u = 10 ** (6 - Math.min(6, curMeta(S.currency).decimals)); micro = Math.floor(micro / u) * u; }   // a count-up shows whole currency units
  const str = fmtMoney(Math.round(micro), S.currency); const m = str.match(/^([^0-9]*?)\s*([0-9][0-9.,]*)\s*(.*)$/); if (!m) return digits(str, mx, my, h, maxW);
  const [, pre, num, post] = m, ls = h * 0.5; cx.font = `${ls}px Lilita`; const pw = pre ? cx.measureText(pre).width + h * 0.08 : 0, sw = post ? cx.measureText(post).width + h * 0.08 : 0;
  const dm = mx + (pw - sw) / 2, tw = digits(num, dm, my, h, maxW ? Math.max(20, maxW - pw - sw) : 0);
  if (pre) label(pre, dm - tw / 2 - pw / 2, my - ls * 0.62, ls); if (post) label(post, dm + tw / 2 + sw / 2, my - ls * 0.62, ls);
}
function label(s, x, y, size, col = '#FFF2D9') {
  if (window.__collect) window.__collect.add(String(s));
  cx.font = `${size}px Lilita`; cx.textAlign = 'center'; cx.textBaseline = 'top'; cx.lineJoin = 'round';
  // dark ink on the cream plates is drawn clean (an espresso outline round dark letters turns them into blobs)
  if (col === '#2A1E1A' || col === '#7A4E32') { cx.fillStyle = col; cx.fillText(s, x, y); return; }
  cx.lineWidth = Math.max(3, size * 0.22); cx.strokeStyle = '#2A1E1A'; cx.strokeText(s, x, y); cx.fillStyle = col; cx.fillText(s, x, y);
}
const money = v => fmtMoney(Math.round(v * 1e6), S.currency);
function leftFit(s, x, y, size, maxW, col) { cx.font = `${size}px Lilita`; const w = cx.measureText(s).width; const sz = w > maxW ? Math.max(9, size * maxW / w) : size; label(s, x + Math.min(w, maxW) / 2, y + (size - sz) * 0.5, sz, col); }
function labelFit(s, x, y, size, maxW, col) { cx.font = `${size}px Lilita`; const w = cx.measureText(s).width; const sz = w > maxW ? Math.max(9, size * maxW / w) : size; label(s, x, y + (size - sz) * 0.5, sz, col); }
const fmtMult = v => (Math.round(v * 100) / 100).toString();


// ---------- sound (CC0, see art/audio_src/LICENCES.md) ----------
const SFX = {}; let AC = null, MASTER = null; S.sound = true;
const SFX_NAMES = ['foam0', 'foam1', 'crumbs0', 'crumbs1', 'socks0', 'springs0', 'springs1', 'boards0', 'boards1', 'punch', 'hanger', 'crowbar', 'vacuum', 'drop', 'clunk',
  'glass0', 'glass1', 'glass2', 'glass3', 'glass4', 'remote', 'tin', 'coins', 'tvup', 'spin', 'stop', 'click', 'win_s', 'win_m', 'win_b', 'nowin', 'bonus'];
function audioUnlock() {
  if (AC) { if (AC.state === 'suspended') AC.resume(); return; }
  try { AC = new (window.AudioContext || window.webkitAudioContext)(); MASTER = AC.createGain(); MASTER.gain.value = S.sound ? 0.8 : 0; MASTER.connect(AC.destination); } catch { return; }
  loadMusic('music_room'); loadMusic('music_bonus');
  for (const n of SFX_NAMES) fetch(`./audio/${n}.m4a`).then(r => r.arrayBuffer()).then(b => AC.decodeAudioData(b)).then(buf => { SFX[n] = buf; }).catch(() => {});
}
let MUS = null, musName = null; S.music = true;
const MUSIC = {}; function loadMusic(n) { if (MUSIC[n] || !AC) return; MUSIC[n] = 'loading'; fetch(`./audio/${n}.m4a`).then(r => r.arrayBuffer()).then(b => AC.decodeAudioData(b)).then(buf => { MUSIC[n] = buf; if (musName === n) { musName = null; music(n); } }).catch(() => {}); }
function music(n) {
  if (!AC || window.__manual) { musName = n; return; } if (musName === n && MUS) return; musName = n; loadMusic(n);
  const buf = MUSIC[n]; if (!buf || buf === 'loading') return;
  if (MUS) { const old = MUS; old.g.gain.setTargetAtTime(0, AC.currentTime, 0.4); setTimeout(() => { try { old.src.stop(); } catch {} }, 2500); }
  const src = AC.createBufferSource(); src.buffer = buf; src.loop = true; const g = AC.createGain(); g.gain.value = 0; g.connect(MASTER); src.connect(g); src.start();
  g.gain.setTargetAtTime(S.music ? 0.45 : 0, AC.currentTime, 0.6); MUS = { src, g };
}
function setSoundOn(on) { S.sound = on; if (MASTER) MASTER.gain.setTargetAtTime(on ? 0.8 : 0, AC.currentTime, 0.05); }   // SOUND is the master switch (music too)
function setMusicOn(on) { S.music = on; if (MUS) MUS.g.gain.setTargetAtTime(on ? 0.45 : 0, AC.currentTime, 0.2); }
function sfx(n, rate = 1, vol = 1) {
  if (window.__manual) { (window.__sfxLog ||= []).push([+S.t.toFixed(3), n, rate, vol]); return; }
  if (!AC || !S.sound) return; const b = SFX[n]; if (!b) return;
  const src = AC.createBufferSource(); src.buffer = b; src.playbackRate.value = rate; const g = AC.createGain(); g.gain.value = vol; src.connect(g); g.connect(MASTER); src.start();
}
const LAYER_SFX = [['foam0', 'foam1'], ['crumbs0', 'crumbs1'], ['socks0'], ['springs0', 'springs1'], ['boards0', 'boards1']];
const layerSfx = (l, k = 0) => { const a = LAYER_SFX[l]; sfx(a[k % a.length], 0.95 + (k % 3) * 0.05); };
const TOOL_SFX = { glove: 'punch', hanger: 'hanger', crowbar: 'crowbar', nozzle: 'clunk' };

// ---------- Gaz ----------
const gclip = a => `${SOFA_PREFIX[S.sofa]}_${a}`;
function gazPlay(a, maxFrames = 0) { const n = gclip(a); if (!CLIP[n]) return; gaz.clip = n; gaz.t = 0; gaz.max = maxFrames; gaz.cut = 0; gaz.snort = 0; }
function gazSnort() { gaz.cut = 0; gaz.snort = 1; }
function isSnore() { return gaz.clip === gclip('snore'); }
function stepGaz(dt) {
  gaz.t += dt; gaz.cut += dt;
  const quiet = S.phase === 'idle' || S.phase === 'result';
  if (isSnore() && quiet) { gaz.idle += dt; if (gaz.idle > 2.2) { gaz.idle = 0; gazPlay('twitch'); } } else gaz.idle = 0;
  const c = CLIP[gaz.clip]; if (!c) { gaz.clip = gclip('snore'); return; }
  const n = gaz.max || c.meta.n; if (!isSnore() && Math.floor(gaz.t * c.meta.fps) >= n) { gaz.clip = gclip('snore'); gaz.t = 0; gaz.cut = 0; gaz.snort = 0; }
}
function squash(t, big) {
  const k = big ? 1 : 0.6;
  if (t < 0.07) { const u = t / 0.07; return [1 + 0.05 * k * u, 1 - 0.08 * k * u]; }
  if (t < 0.16) { const u = (t - 0.07) / 0.09; return [lerp(1 + 0.05 * k, 1 - 0.03 * k, u), lerp(1 - 0.08 * k, 1 + 0.07 * k, u)]; }
  if (t < 0.28) { const u = (t - 0.16) / 0.12; return [lerp(1 - 0.03 * k, 1, ease.out(u)), lerp(1 + 0.07 * k, 1, ease.out(u))]; }
  return [1, 1];
}
function drawGaz() {
  const snN = gclip('snore'); if (!CLIP[snN]) return; const sn = CLIP[snN].meta; const c = CLIP[gaz.clip] || CLIP[snN], m = c.meta, s = L.gW / (sn.box[2] - sn.box[0]);
  const f = c === CLIP[snN] ? Math.floor(gaz.t * m.fps) % m.n : Math.min(Math.floor(gaz.t * m.fps), (gaz.max || m.n) - 1);
  const x = L.gx + (m.box[0] - sn.box[0]) * s, y = L.gy + (m.box[1] - sn.box[1]) * s;
  const big = /situp|roll/.test(gaz.clip) || gaz.snort;
  const [sx, sy] = squash(gaz.cut, big); const px = L.gx + L.gW / 2, py = L.gy + L.gH;
  cx.save(); cx.translate(px, py); cx.scale(sx, sy); cx.translate(-px, -py); blit(c.frames[f], x, y, (m.box[2] - m.box[0]) * s, (m.box[3] - m.box[1]) * s); cx.restore();
}
// small reactions on ordinary hits: every second hit, rotating a peek, a snort and an arm flop
function gazReact() {
  if (!isSnore()) return; S.hits++; if (S.hits % 2) return;
  const k = (S.hits / 2) % 3; if (k === 1) gazPlay('twitch', 10); else if (k === 2) gazSnort(); else gazPlay('fist', 9);
}

// ---------- physics ----------
const CAT = { cell: 1, debris: 2, tool: 4, wall: 8 };
const RH = () => L.rh / L.U, rowY = l => (l + 0.5) * RH();
function buildWorld() {
  world = new planck.World({ gravity: planck.Vec2(0, 34) }); cellBodies = {}; debris = []; tools = [];
  const rh = RH(), depth = 5 * rh; const walls = world.createBody();
  walls.createFixture(planck.Box(0.1, 6, planck.Vec2(-0.1, depth / 2), 0), { filterCategoryBits: CAT.wall, filterMaskBits: CAT.debris });
  walls.createFixture(planck.Box(0.1, 6, planck.Vec2(5.1, depth / 2), 0), { filterCategoryBits: CAT.wall, filterMaskBits: CAT.debris });
  for (let c = 0; c < 5; c++) {
    for (let l = 0; l < 5; l++) { if (disp.dug[c][l]) continue; addCellBody(c, l); }
    const tb = world.createBody(planck.Vec2(c + 0.5, depth + 0.1 + L.th / L.U * 0.5));
    tb.createFixture(planck.Box(0.42, L.th / L.U * 0.4), { filterCategoryBits: CAT.cell, filterMaskBits: CAT.debris | CAT.tool, friction: 0.8 });
    tb.setUserData({ kind: 'tin', c });
  }
}
function addCellBody(c, l) { const b = world.createBody(planck.Vec2(c + 0.5, rowY(l))); b.createFixture(planck.Box(0.5, RH() / 2), { filterCategoryBits: CAT.cell, filterMaskBits: CAT.debris | CAT.tool, friction: 0.7 }); b.setUserData({ kind: 'cell', c, l }); cellBodies[c + ',' + l] = b; }
function spawnDebris(c, l, r, toward = null) {
  const name = LAYERS[l]; const out = [];
  for (let i = 0; i < 5; i++) {
    const stay = i < 2; const k = Math.floor(r() * 7), im = IMG[`${name}_p${k}`]; const s = (stay ? 0.24 : 0.3) + r() * 0.18; const w = s, h = s * im.height / im.width;
    const b = world.createDynamicBody({ position: planck.Vec2(c + 0.2 + r() * 0.6, rowY(l) - 0.05), angle: r() * 6.28, angularDamping: 0.4 });
    b.createFixture(planck.Box(w / 2, h / 2), { density: 1, friction: 0.6, restitution: 0.25, filterCategoryBits: CAT.debris, filterMaskBits: stay ? (CAT.cell | CAT.debris | CAT.wall) : 0 });
    if (toward) { const dx = toward.x - (c + 0.5), dy = toward.y - rowY(l); const d = Math.hypot(dx, dy) || 1; b.setLinearVelocity(planck.Vec2(dx / d * 12, dy / d * 12 - 2)); b.setGravityScale(0.2); }
    else b.setLinearVelocity(planck.Vec2((r() - 0.5) * (stay ? 6 : 11), -5 - r() * 6));
    b.setAngularVelocity((r() - 0.5) * 18);
    const d = { b, im, w, h, stay, born: S.t }; debris.push(d); out.push(d);
  }
  return out;
}
function fx(kind, x, y, s, life = 0.4) { S.fx.push({ kind, x, y, s, t: 0, life }); }
function after(s, f) { timers.push({ at: S.t + s, f }); }

// ---------- the display state follows the rules' events ----------
function cellPx(c, l) { return { x: L.bx + (c + 0.5) * L.cw, y: L.by + (l + 0.5) * L.rh }; }
function applyBreak(e, opts = {}) {
  const { c, l } = e; if (disp.dug[c][l]) return;
  disp.dug[c][l] = true; disp.hp[c][l] = 0;
  const b = cellBodies[c + ',' + l]; if (b) { world.destroyBody(b); delete cellBodies[c + ',' + l]; }
  const r = rng((disp.seed || 1) * 97 + c * 13 + l * 7);
  const pcs = spawnDebris(c, l, r, opts.toward); layerSfx(l, c + l);
  const p = cellPx(c, l);
  if (!opts.toward) fx('dust', p.x + (opts.small ? L.cw * 0.3 : 0), p.y - (opts.small ? L.rh * 0.3 : 0), L.cw * (opts.small ? 0.45 : 1.0), opts.small ? 0.3 : 0.42);
  S.freeze = opts.noFreeze ? 0 : 0.055;
  if (e.got === 'R') { disp.remotes++; S.flights.push({ kind: 'remote', x0: p.x, y0: p.y, t: -0.05 * S.flights.length, d: 0.7, slot: Math.min(4, disp.remotes - 1) }); }
  else if (e.got) S.flights.push({ kind: 'coin', v: e.got, x0: p.x, y0: p.y, t: -0.05 * S.flights.length, d: 0.62 });
  if (!disp.rows[l] && disp.dug.every(col => col[l])) { disp.rows[l] = true; tvEvent(); if (isSnore()) gazPlay('twitch'); }
  else if (!opts.quiet) gazReact();
  return pcs;
}
function applyTin(e) {
  const { c, v } = e; if (disp.tinOpen[c]) return; disp.tinOpen[c] = true; S.freeze = 0.12; sfx('tin'); sfx('coins', 1, 0.7);
  const p = { x: L.bx + (c + 0.5) * L.cw, y: L.by + 5 * L.rh + L.th * 0.4 };
  fx('dust', p.x, p.y - L.th * 0.3, L.cw * 1.3, 0.5);
  if (v === 'R') { disp.remotes++; S.flights.push({ kind: 'remote', x0: p.x, y0: p.y, t: 0, d: 0.8, slot: Math.min(4, disp.remotes - 1) }); }
  else S.plates.push({ v, x: p.x, y: p.y, t: 0 });
  gazPlay('situp');
}
function tvValue() { let t = disp.tvStart; disp.tinOpen.forEach((o, c) => { if (o && disp.tinsShown[c] && disp.board.tins[c] !== 'R') t += disp.board.tins[c]; }); return t * 2 ** disp.rows.filter(Boolean).length; }
function tvEvent() { sfx('tvup'); S.tvFlash = 1; S.tvRock = 1; S.tvSlam = 1; S.freeze = Math.max(S.freeze, 0.1); }

// split a drop's events into per-column queues; the nozzle's row suck makes a barrier (columns before it, it, then after)
function buildQueues(ev, tools) {
  const q = [[], [], [], [], []];
  for (const e of ev) {
    if (e.k === 'row') continue;
    if (e.by === 'suck') { const nz = q.findIndex((qq, c) => tools[c] === 'nozzle' && qq.some(x => x.k === 'suck' && !x.done && x.l === e.l)); const tgt = nz >= 0 ? nz : 0; q[tgt].find(x => x.k === 'suck' && x.l === e.l).breaks.push(e); continue; }
    if (e.k === 'suck') { q[e.c].push({ ...e, breaks: [] }); continue; }
    q[e.c].push(e);
  }
  const gs = []; let cur = [];
  tools.forEach((t, c) => { if (t === 'nozzle') { if (cur.length) gs.push(cur); gs.push([c]); cur = []; } else if (t !== 'none') cur.push(c); });
  if (cur.length) gs.push(cur);
  return { q, gs };
}

// ---------- tools ----------
const TOOL_SPR = { glove: 'tool_glove', hanger: 'tool_hanger', crowbar: 'tool_crowbar', nozzle: 'tool_nozzle' };
function dropGroup(cols) {
  cols.forEach((c, i) => {
    const t = disp.tools[c];
    if (t === 'dog') { dog.mode = 'crouch'; dog.t = 0; dog.col = c; dog.queue = queues.q[c]; return; }
    const im = IMG[TOOL_SPR[t]]; const h = 1.0, ww = Math.min(1.05, h * im.width / im.height);
    const b = world.createDynamicBody({ position: planck.Vec2(c + 0.5, -(L.by - L.wy) / L.U + h * 0.45), angle: 0, angularDamping: 3, fixedRotation: t === 'glove' || t === 'nozzle' });
    b.createFixture(planck.Box(Math.min(0.42, ww / 2 * 0.8), h / 2 * 0.8), { density: 2, friction: 0.4, restitution: 0.05, filterCategoryBits: CAT.tool, filterMaskBits: CAT.cell });
    b.setLinearVelocity(planck.Vec2(0, t === 'glove' ? 6 : 3)); if (t === 'hanger' || t === 'crowbar') b.setAngularVelocity((c % 2 ? 1 : -1) * 1.2);
    tools.push({ kind: t, b, im, w: ww, h, c, q: queues.q[c], state: 'fall', t: 0, sq: 9, delay: i * 0.09 });
    if (i > 0) b.setActive(false);
  });
}
function touching(b) { const out = []; for (let ce = b.getContactList(); ce; ce = ce.next) if (ce.contact.isTouching()) { const u = ce.other.getUserData(); if (u) out.push(u); } return out; }
function stepTools(dt) {
  for (const T of tools) {
    if (T.state === 'rest') { T.restT = (T.restT || 0) + dt; if (T.restT > 1.1) poofTool(T); continue; }   // a spent tool lies there a moment, then puffs away
    if (T.state === 'gone') continue;
    T.t += dt; T.sq += dt;
    if (T.delay > 0) { T.delay -= dt; if (T.delay <= 0) T.b.setActive(true); continue; }
    if (T.state === 'fall') {
      const hit = touching(T.b).find(u => u.c === T.c);
      if (hit) {
        T.state = 'strike'; T.t = 0; T.sq = 0; T.target = hit;
        if (hit.kind === 'cell') disp.shake[T.c][hit.l] = 0.16;
        if (T.kind === 'crowbar' && T.q.length) T.b.setAngularVelocity((T.c % 2 ? 1 : -1) * 10);
      }
    } else if (T.state === 'strike' && T.t > 0.16) {
      const e = T.q.shift();
      if (!e || e.k === 'miss') { sfx('clunk', 0.9); T.state = 'rest'; T.restT = 0; T.b.setLinearVelocity(planck.Vec2(0, -3)); fx('dust', L.bx + (T.c + 0.5) * L.cw, L.by + (T.target.l ?? 5) * L.rh, L.cw * 0.6, 0.35); continue; }   // bounces off and settles
      if (e.k === 'tin') { applyTin(e); poofTool(T); continue; }
      if (e.k === 'suck') { suckRow(T, e); continue; }
      if (e.k === 'hit') { sfx(TOOL_SFX[T.kind] || 'punch', 1.1); layerSfx(e.l, 1); disp.hp[e.c][e.l]--; S.freeze = 0.055; fx('dust', L.bx + (e.c + 0.5) * L.cw, L.by + e.l * L.rh, L.cw * 0.5, 0.3); T.state = 'fall'; T.sq = 9; T.b.setLinearVelocity(planck.Vec2(0, -6)); T.b.setAngularVelocity((T.c % 2 ? 1 : -1) * 6); continue; }
      sfx(TOOL_SFX[T.kind] || 'punch'); const pcs = applyBreak(e);
      if (T.kind === 'hanger' && pcs) { pcs[0].b.setLinearVelocity(planck.Vec2((T.c < 2 ? 1 : -1) * 2, -16)); pcs[0].b.setAngularVelocity(14); }
      if (T.kind === 'glove' && !T.q.length) { poofTool(T); continue; }
      T.state = 'fall'; T.sq = 9;
      if (T.kind === 'hanger') { T.b.setLinearVelocity(planck.Vec2(0, -7)); T.b.setAngularVelocity((T.c % 2 ? 1 : -1) * 5); }
      else T.b.setLinearVelocity(planck.Vec2(0, -1.5));
    }
    if (T.t > 5) { while (T.q.length) { const e = T.q.shift(); if (e.k === 'break') applyBreak(e, { quiet: true }); if (e.k === 'tin') applyTin(e); } T.state = 'rest'; }   // safety: never leave the book unfinished
  }
}
function suckRow(T, e) {
  sfx('vacuum'); T.state = 'suck'; T.t = 0; const p = T.b.getPosition(); T.b.setActive(false);
  const br = [...e.breaks].sort((a, b) => Math.abs(a.c - T.c) - Math.abs(b.c - T.c));
  br.forEach((b, i) => after(i * 0.12, () => applyBreak(b, { toward: { x: p.x, y: p.y }, noFreeze: i > 0, quiet: true })));
  after(br.length * 0.12 + 0.35, () => poofTool(T));
}
function poofTool(T) { if (T.state === 'gone') return; T.state = 'gone'; const p = T.b.getPosition(); fx('dust', L.bx + p.x * L.U, L.by + p.y * L.U, L.cw * 0.9, 0.4); world.destroyBody(T.b); }
function clearTools() { for (const T of tools) if (T.state !== 'gone') poofTool(T); }

// ---------- the dog ----------
function topCellDisp(c) { for (let l = 0; l < 5; l++) if (!disp.dug[c][l]) return l; return 5; }
function colTopPx(c) { const l = topCellDisp(c); return l < 5 ? L.by + l * L.rh : L.by + 5 * L.rh + L.th * 0.15; }
function stepDog(dt) {
  dog.t += dt;
  if (dog.mode === 'sofa') { if ((dog.clip === 'dog_ears' || dog.clip === 'dog_yawn') && dog.t > CLIP[dog.clip].meta.n / CLIP[dog.clip].meta.fps) { dog.clip = 'dog_wag'; dog.t = 0; } return; }
  const c = dog.col, cxp = L.bx + (c + 0.5) * L.cw;
  if (dog.mode === 'crouch') { if (dog.t > 0.25) { dog.mode = 'leap'; dog.t = 0; } }
  else if (dog.mode === 'leap') {
    const d = L.portrait ? 0.55 : 0.75, k = Math.min(1, dog.t / d), a = L.dog, bY = colTopPx(c);
    dog.x = a.x + (cxp - a.x) * k; dog.y = a.y + (bY - a.y) * k - Math.sin(k * Math.PI) * L.gH * (L.portrait ? 0.55 : 0.45);
    if (k >= 1) { dog.mode = 'dig'; dog.t = 0; dog.next = 0.4; S.cam.target = 1; S.cam.fx = cxp; S.cam.fy = colTopPx(c) + L.rh * 0.6; }
  } else if (dog.mode === 'dig') {
    dog.x = cxp; dog.y += (colTopPx(c) - dog.y) * Math.min(1, dt * 12); S.cam.fy += (dog.y + L.rh * 0.6 - S.cam.fy) * Math.min(1, dt * 6);
    dog.next -= dt;
    if (dog.next <= 0) {
      const e = dog.queue.shift();
      if (e && e.k === 'break') {
        applyBreak(e, { small: true, quiet: true }); dog.next = 0.5; fx('flecks', cxp - L.cw * 0.45, dog.y - L.rh * 0.2, L.cw * 0.5, 0.3);
        const big = ['big_foam', 'big_pop', 'big_sock', 'big_board']; const r = rng((disp.seed || 1) + e.l * 11);
        for (let i = 0; i < 2; i++) S.past.push({ im: IMG[big[Math.floor(r() * 4)]], a: r() * 6.28, dx: (r() - 0.5) * 2.2, dy: -0.4 - r() * 0.9, t: 0, rot: (r() - 0.5) * 6 });
      } else { if (e && e.k === 'tin') applyTin(e); dog.mode = 'grab'; dog.t = 0; S.cam.target = 0; }
    }
  } else if (dog.mode === 'grab') { if (dog.t > 0.55) { dog.mode = 'back'; dog.t = 0; dog.from = { x: dog.x, y: dog.y }; } }
  else if (dog.mode === 'back') {
    const d = L.portrait ? 0.8 : 1.0, k = Math.min(1, dog.t / d), a = L.dog;
    dog.x = dog.from.x + (a.x - dog.from.x) * k; dog.y = dog.from.y + (a.y - dog.from.y) * k - Math.sin(k * Math.PI) * L.gH * 0.5;
    if (k >= 1) { dog.mode = 'sofa'; dog.clip = 'dog_wag'; dog.t = 0; }
  }
}
function clipFrame(n, t, loop = true) { const c = CLIP[n]; let f = Math.floor(t * c.meta.fps); f = loop ? f % c.meta.n : Math.min(f, c.meta.n - 1); return c.frames[f]; }
function drawDog(inBoard) {
  const onSofa = dog.mode === 'sofa' || dog.mode === 'crouch'; if (onSofa === inBoard) return;
  if (onSofa) {
    const n = CLIP[dog.clip] ? dog.clip : 'dog_wag', c = CLIP[n], wb = CLIP.dog_wag.meta.box, sc = L.dog.h / (wb[3] - wb[1]);
    const ax = L.dog.x - (wb[2] - wb[0]) * sc / 2, ay = L.dog.y - L.dog.h, bx = c.meta.box;
    const sq = dog.mode === 'crouch' ? [1.08, 0.86] : [1, 1];
    draw(clipFrame(n, dog.t, n === 'dog_wag'), ax + (bx[0] - wb[0]) * sc, ay + (bx[1] - wb[1]) * sc, (bx[2] - bx[0]) * sc, (bx[3] - bx[1]) * sc, 0, false, sq[0], sq[1]); return;
  }
  const z = L.cw; let n, hh, dy = 1, flip = false;
  if (dog.mode === 'leap') { n = 'dog_run'; hh = z * 1.3; flip = L.bx + (dog.col + 0.5) * L.cw < L.dog.x; }
  else if (dog.mode === 'back') { n = 'dog_sock'; hh = z * 1.35; flip = L.dog.x < dog.x; }
  else if (dog.mode === 'dig') { n = 'dog_dig'; hh = z * 1.4; dy = 0.92; } else { n = 'dog_sock'; hh = z * 1.35; dy = 0.92; }
  const m = CLIP[n].meta, w = hh * m.w / m.h; draw(clipFrame(n, dog.t), dog.x - w / 2, dog.y - hh * dy, w, hh, 0, flip);
}

// ---------- rounds: from the RGS book to the screen ----------
function setBoard(b, tvStart = 1, seed = 1) {
  disp = newState(b, tvStart); disp.seed = seed; disp.tinsShown = [false, false, false, false, false];
  disp.shake = b.cells.map(() => [0, 0, 0, 0, 0]); disp.remotes = 0; board = b; buildWorld();
}
function startDrop(tools, ev, opts = {}) {
  disp.tools = tools; const qs = buildQueues(ev, tools); queues = qs; groups = qs.gs; groupIdx = -1;
  S.spin = tools.map((t, i) => ({ stopAt: (S.turbo ? 0.2 : 0.4) + i * (S.turbo ? 0.05 : 0.11), tool: t, pop: 0 }));
  S.phase = 'spin'; S.phaseT = 0; S.hits = 0; S.dropOpts = opts; S.clink = 0; sfx('spin');
  if (tools.includes('dog') && CLIP.dog_ears && dog.mode === 'sofa') { dog.clip = 'dog_ears'; dog.t = 0; }
}
function busy() { return tools.some(t => t.state === 'fall' || t.state === 'strike' || t.state === 'suck') || dog.mode !== 'sofa' || S.flights.length || S.plates.length || timers.length; }
let roundDone = null;
async function playRound(state, payoutX) {
  // payoutX: the book's payout as a multiple of the base bet (from the RGS)
  S.win = 0; S.winShown = 0; clearTools();
  const digE = state.find(e => e.type === 'dig'), bonE = state.find(e => e.type === 'bonus'), trig = state.find(e => e.type === 'bonusTrigger');
  if (digE) {
    S.sofa = digE.sofa; await Promise.all(sofaClips(S.sofa).map(loadClip)); layout(); if (!isSnore() && !CLIP[gaz.clip]) gaz.clip = gclip('snore');
    const r = baseRound(digE.seed, digE.sofa, { remoteX: digE.remoteX });
    if (board) for (let c = 0; c < 5; c++) fx('dust', L.bx + (c + 0.5) * L.cw, L.by + L.rh * 2.5, L.cw * 1.3, 0.45);   // last round's debris clears with a puff
    setBoard(r.board, 1, digE.seed); S.remotes = 0;
    await new Promise(ok => { roundDone = ok; startDrop(r.tools, r.ev, { base: true, win: r.win, remotes: r.remotes }); });
    S.win = digE.win;
  }
  if (bonE) await playBonus(bonE, !!trig);
  S.win = payoutX * bet() / 1e6; S.phase = 'result'; S.phaseT = 0;
  if (payoutX >= 10) { const tier = payoutX >= 25000 ? 'MAX WIN' : payoutX >= 250 ? 'MEGA WIN' : payoutX >= 50 ? 'HUGE WIN' : 'BIG WIN'; S.celebrate = { tier, x: payoutX, money: S.win, t: 0, dur: tier === 'BIG WIN' ? 3.2 : tier === 'HUGE WIN' ? 4.2 : 5.2 }; gazPlay('fist'); }
  if (S.win === 0) { deadReaction(); sfx('nowin', 1, 0.6); } else { sfx(payoutX >= 20 ? 'win_b' : payoutX >= 3 ? 'win_m' : 'win_s'); if (payoutX >= 5 && isSnore()) gazPlay('fist'); }
}
function deadReaction() {
  S.deadN++; const near = disp && disp.remotes === 2; const anyTool = disp && disp.tools.some(t => t !== 'none');
  if (near) { S.remPop = 1; gazPlay('twitch', 14); after(1.4, () => gazPlay('roll')); }        // two remotes: so close
  else if (!anyTool) { gazPlay('fist', 9); dog.clip = 'dog_yawn'; dog.t = 0; }                      // nothing in the windows: an arm flop and a yawn
  else { gazPlay('roll'); if (S.deadN % 2 === 0 && CLIP.dog_yawn) { dog.clip = 'dog_yawn'; dog.t = 0; } }   // tools bounce off and settle; he rolls over
}
async function playBonus(e, triggered) {
  const tier = e.tier, T = TIER[tier], b = bonusRound(e.seed, e.sofa, tier);
  if (S.sofa !== e.sofa) { S.sofa = e.sofa; await Promise.all(sofaClips(S.sofa).map(loadClip)); layout(); gaz.clip = gclip('snore'); }
  // trigger: remotes shake, the TV flashes, Gaz sits up, the title slams in, the room changes
  if (triggered) { S.remPop = 1; tvEvent(); gazPlay('situp'); await wait(1.4); }
  sfx('bonus');
  music('music_bonus'); if (window.__manual) (window.__sfxLog ||= []).push([+S.t.toFixed(3), '#music', 'music_bonus']);
  S.title = { n: tier === 'MATCH_DAY' ? 't_matchday' : tier === 'CUP_FINAL' ? 't_cupfinal' : 't_bigwin', t: 0 }; await wait(1.6);
  S.scene = tier; S.tier = tier; S.title = null;
  if (board) for (let c = 0; c < 5; c++) fx('dust', L.bx + (c + 0.5) * L.cw, L.by + L.rh * 2.5, L.cw * 1.4, 0.5);
  setBoard(b.board, T.tvStart, e.seed); S.bonus = { tier, left: T.drops, total: 0, n: 0, pop: 0 };
  for (const d of b.drops) {
    S.bonus.left--; S.bonus.n++; const c0 = S.bonus.total;
    await new Promise(ok => { roundDone = ok; startDrop(d.tools, d.ev, { bonus: true }); });
    if (d.extra) { S.bonus.left += d.extra; S.bonus.pop = 1; }
    S.bonus.total = d.total; S.bonus.payPop = d.pay > 0 ? 1 : 0; if (d.pay > 0 && tier === 'CUP_FINAL') { mates.clip = 'mates_cheer'; mates.t = 0; }
    await wait(d.pay > 0 ? 0.9 : 0.5); void c0;
  }
  await wait(0.8); S.scene = 'room'; S.tier = null; S.bonus = null; music('music_room'); if (window.__manual) (window.__sfxLog ||= []).push([+S.t.toFixed(3), '#music', 'music_room']);
  if (SOFA_MODES.includes(S.mode) && S.sofa !== S.mode) { S.sofa = S.mode; await Promise.all(sofaClips(S.sofa).map(loadClip)); layout(); gaz.clip = gclip('snore'); }
}
const wait = s => new Promise(ok => after(s, ok));
function stepRound(dt) {
  S.phaseT += dt;
  if (S.phase === 'spin') {
    for (const s of S.spin) if (!s.stopped && S.phaseT >= s.stopAt) { s.stopped = true; s.pop = 1; sfx('stop', 0.9 + S.spin.indexOf(s) * 0.06); }
    if (S.spin.every(s => s.stopped) && S.phaseT > S.spin[4].stopAt + 0.15) { S.phase = 'dig'; S.phaseT = 0; nextGroup(); }
  } else if (S.phase === 'dig') {
    if (!busy() && S.phaseT > 0.25) { if (groupIdx < groups.length - 1) nextGroup(); else { S.phase = 'settle'; S.phaseT = 0; } }
  } else if (S.phase === 'settle') {
    if (S.phaseT > 0.25 && !busy()) { const f = roundDone; roundDone = null; S.phase = 'between'; if (f) f(); }
  }
}
function nextGroup() { groupIdx++; S.phaseT = 0; if (groups[groupIdx]) { sfx('drop'); dropGroup(groups[groupIdx]); } }

// ---------- RGS flow ----------
async function boot() {
  layout(); S.phase = DEMO ? 'idle' : 'splash';
  setBoard(baseRound(5, S.sofa).board, 1, 5);
  if (params.replay) {
    S.currency = params.currency || 'USD'; S.social = SOCIAL_CUR.includes(S.currency) || params.social; T = makeText(S.social);
    S.levels = [params.amount > 0 ? params.amount : 1e6]; S.betIdx = 0; S.replayMode = true;
    try { S.replay = await rgs.replay(); } catch (err) { S.replayErr = 'This replay could not be loaded.'; }
    return;
  }
  if (!params.rgsHost) { S.msg = 'Open the game through Engine (or the local test server).'; return; }
  try {
    const a = await rgs.authenticate(); S.balance = a.balance.amount / 1e6; S.currency = a.balance.currency;
    S.levels = a.config.betLevels; S.betIdx = Math.max(0, S.levels.indexOf(a.config.defaultBetLevel)); S.jur = a.config.jurisdiction || {}; S.social = params.social || !!S.jur.socialCasino || SOCIAL_CUR.includes(S.currency); T = makeText(S.social); S.ready = true;
    if (a.round && a.round.state) {
      // an unfinished round: play it at its own bet, then go back to the chosen sofa (never leave a bought mode armed)
      const amt = a.round.amount; if (amt) { let i = S.levels.indexOf(amt); if (i < 0) { S.levels = [...S.levels, amt].sort((x, y) => x - y); i = S.levels.indexOf(amt); } S.betIdx = i; }
      if (SOFA_MODES.includes(a.round.mode) && a.round.mode !== S.sofa) { S.sofa = a.round.mode; await Promise.all(sofaClips(S.sofa).map(n => loadClip(n))); layout(); gaz.clip = gclip('snore'); }
      S.mode = a.round.mode; await playRound(a.round.state, a.round.payoutMultiplier); if (a.round.active) { const e = await rgs.endRound(); S.balance = e.balance.amount / 1e6; }
      if (!SOFA_MODES.includes(S.mode)) S.mode = S.sofa;
    }
  } catch (err) { S.msg = 'Could not connect. Please reload.'; console.error(err); }
}
async function spin(mode = S.mode) {
  if (S.phase !== 'idle' && S.phase !== 'result') return;
  if (!S.ready || S.replayMode || rulesDiv.style.display === 'block') return;   // no bets before connecting, in a replay or under the rules
  if (!window.__allClips || WARM.length) return;                    // this sofa's clips are still loading (a second at most)
  const cost = mode === S.mode && SOFA_MODES.includes(mode) ? 1 : BUY_COST[mode] || 1;
  if (S.balance < bet() / 1e6 * cost) { S.msg = T.noFunds; after(2.5, () => { if (S.msg === T.noFunds) S.msg = null; }); return; }
  S.phase = 'wait'; S.pressed = 0.15; S.msg = null;
  try {
    const r = await rgs.play(bet(), mode); S.balance = r.balance.amount / 1e6;
    await playRound(r.round.state, r.round.payoutMultiplier);
    if (r.round.active) { const e = await rgs.endRound(); S.balance = e.balance.amount / 1e6; }
  } catch (err) { S.phase = 'idle'; S.msg = err.code === 'ERR_IPB' ? 'Not enough balance.' : 'Connection problem. Please try again.'; console.error(err); }
}

async function playReplay() {
  S.phase = 'wait'; const R = S.replay; S.mode = params.mode || S.mode;
  await playRound(R.state || [], R.payoutMultiplier); S.phase = 'replayEnd'; S.winShown = S.win;
  const waitCel = () => S.celebrate ? setTimeout(waitCel, 200) : (S.panel = { kind: 'replay', end: true });
  waitCel();
}
function openRules() { rulesDiv.querySelector('.in').innerHTML = '<h2>HOW TO PLAY</h2>' + T.rules; rulesDiv.style.display = 'block'; rulesDiv.querySelector('.in').scrollTop = 0; }
rulesDiv.querySelector('.close').addEventListener('click', () => { rulesDiv.style.display = 'none'; sfx('click'); });

// ---------- update ----------
function update(dt) {
  S.t += dt; stepGaz(dt); mates.t += dt; if (mates.clip === 'mates_cheer' && CLIP.mates_cheer && mates.t > CLIP.mates_cheer.meta.n / CLIP.mates_cheer.meta.fps) { mates.clip = 'mates_idle'; mates.t = 0; }
  if (dog.mode === 'sofa' && dog.clip === 'dog_wag') { dog.earsAt -= dt; if (dog.earsAt <= 0 && CLIP.dog_ears) { dog.clip = 'dog_ears'; dog.t = 0; dog.earsAt = 3.2; } }
  for (const k of ['tvFlash', 'tvSlam', 'remPop', 'glassPop']) S[k] = Math.max(0, (S[k] || 0) - dt * 2.4); S.tvRock = Math.max(0, S.tvRock - dt * 0.9);
  S.pressed = Math.max(0, S.pressed - dt); if (S.bonus) { S.bonus.pop = Math.max(0, S.bonus.pop - dt * 2); S.bonus.payPop = Math.max(0, (S.bonus.payPop || 0) - dt * 2); }
  for (const s of S.spin || []) s.pop = Math.max(0, s.pop - dt * 4);
  for (const f of S.fx) f.t += dt; S.fx = S.fx.filter(f => f.t < f.life);
  for (const p of S.past) p.t += dt; S.past = S.past.filter(p => p.t < 0.55);
  if (S.title) S.title.t += dt;
  for (const f of S.flights) f.t += dt;
  for (const f of S.flights.filter(f => f.t >= f.d)) { if (f.kind === 'coin') { disp.coins = +(disp.coins + f.v).toFixed(2); S.glassPop = 1; S.clink = (S.clink || 0) + 1; sfx('glass' + (S.clink % 5), Math.min(1.8, 0.9 + S.clink * 0.06)); } else { S.remotes++; S.remPop = 1; sfx('remote', 1 + S.remotes * 0.08); } }
  S.flights = S.flights.filter(f => f.t < f.d);
  for (const p of S.plates) p.t += dt;
  for (const p of S.plates.filter(p => p.t >= 1.3)) { const c = disp.board.tins.indexOf(p.v); for (let k = 0; k < 5; k++) if (disp.tinOpen[k] && !disp.tinsShown[k] && disp.board.tins[k] === p.v) { disp.tinsShown[k] = true; break; } tvEvent(); void c; }
  S.plates = S.plates.filter(p => p.t < 1.3);
  S.cam.z += ((S.cam.target ? 1.6 : 1) - S.cam.z) * Math.min(1, dt * (S.cam.target ? 5 : 4));
  for (const T of timers.filter(T => T.at <= S.t)) { timers.splice(timers.indexOf(T), 1); T.f(); }
  if (S.celebrate) { S.celebrate.t += dt; if (S.celebrate.t > S.celebrate.dur) S.celebrate = null; }
  if (S.phase === 'result' && !S.celebrate) { S.phaseT += dt; S.winShown = S.win * Math.min(1, S.phaseT / 0.7); if (DEMO && S.phaseT > 1.5) spin(); if (S.auto > 0 && S.phaseT > 0.8) { S.auto--; spin(); } }
  if (S.phase === 'idle') { S.phaseT += dt; if (DEMO && S.ready && S.phaseT > 0.8 && window.__allClips && !WARM.length && !S.msg) spin(); }
  if (!disp) return;
  if (S.freeze > 0) { S.freeze -= dt; stepDog(0); return; }
  for (const col of disp.shake) for (let l = 0; l < 5; l++) if (col[l] > 0) col[l] -= dt;
  stepTools(dt); stepDog(dt); world.step(dt, 8, 3);
  for (const d of debris) if (!d.gone && !d.stay && (d.b.getPosition().y > 12 || S.t - d.born > 1.6)) { d.gone = true; world.destroyBody(d.b); }
  debris = debris.filter(d => !d.gone);
  stepRound(dt);
}

// ---------- render ----------
const BG = { room: ['bg_room_p', 'bg_room_l'], MATCH_DAY: ['bg_matchday_p', 'bg_matchday_l'], CUP_FINAL: ['bg_cupfinal_p', 'bg_cupfinal_l'], BIG_WIN: ['bg_bigwin_p', 'bg_bigwin_l'] };
function render() {
  const z = S.cam.z, k = (z - 1) / 0.6; const fx0 = S.cam.fx || W / 2, fy0 = S.cam.fy || H / 2;
  const sx = lerp(fx0, W / 2, k), sy = lerp(fy0, (H - L.barH) * 0.5, k);
  const ox = clamp(sx - fx0 * z, W - W * z, 0), oy = clamp(sy - fy0 * z, H - H * z, 0);
  cx.setTransform(DPR, 0, 0, DPR, 0, 0); cx.fillStyle = '#2A1E1A'; cx.fillRect(0, 0, W, H);
  cx.setTransform(DPR * z, 0, 0, DPR * z, DPR * ox, DPR * oy);
  const bgn = BG[S.scene][L.portrait ? 0 : 1]; const bg = IMG[bgn] || IMG.bg_room_p || IMG.bg_room_l; const s = Math.max(W / bg.width, H / bg.height);
  blit(bg, (W - bg.width * s) / 2, 0, bg.width * s, bg.height * s);
  const NM = Math.round(26 * Math.max(1, W * H / (390 * 844)));
  for (let i = 0; i < NM; i++) { const r = rng(i * 31 + 5); const x = (r() * W + Math.sin(S.t * 0.2 + i) * 30 + S.t * 6 * (r() - 0.3)) % W; const y = (r() * H * 0.45 + Math.cos(S.t * 0.27 + i * 2) * 18 + H) % (H * 0.5);
    cx.globalAlpha = 0.45 + 0.3 * Math.sin(S.t * 1.3 + i); cx.fillStyle = S.scene === 'BIG_WIN' ? '#FFC72C' : '#FFF2D9'; cx.beginPath(); cx.arc((x + W) % W, y, (2 + r() * 2.2) * Math.max(1, H / 720), 0, 7); cx.fill(); cx.globalAlpha = 1; }
  if (S.scene === 'CUP_FINAL' && CLIP[mates.clip] && CLIP.mates_idle) { const mb = CLIP.mates_idle.meta.box, b2 = CLIP[mates.clip].meta.box, sc = L.mates.h / (mb[3] - mb[1]); draw(clipFrame(mates.clip, mates.t, mates.clip === 'mates_idle'), L.mates.x + (b2[0] - mb[0]) * sc, L.mates.y + (b2[1] - mb[1]) * sc, (b2[2] - b2[0]) * sc, (b2[3] - b2[1]) * sc); }
  else draw('lamp', L.lamp.x, L.lamp.y, null, L.lamp.h);
  drawTV();
  drawGaz(); drawDog(false); drawRemotes();
  // sofa name plate (tap to choose a sofa)
  if (!S.bonus && !S.replayMode) { const t = L.sofaTag; plate(t.x, t.y, t.w, t.h); label(SOFAS[S.sofa].label.replace('The ', '').toUpperCase() + ' ▾', t.x + t.w / 2, t.y + t.h * 0.24, t.h * 0.46); }
  drawGlass();
  // tool windows
  for (let i = 0; i < 5; i++) {
    const x = L.bx + i * L.cw + (L.cw - L.ww) / 2; draw('win_' + i, x, L.wy, L.ww, L.ww);
    let t = null; const sp = S.spin && S.spin[i];
    if (sp) t = sp.stopped ? sp.tool : ['glove', 'hanger', 'tok_paw', 'crowbar', 'nozzle', null][Math.floor(S.t * 14 + i * 2) % 6];
    if (t === 'dog') t = 'tok_paw'; if (t === 'none') t = null;
    const dropped = S.phase !== 'spin' && sp && sp.stopped && sp.tool !== 'dog';
    if (t && !dropped) { const kk = 1 + 0.25 * Math.sin((1 - (sp ? sp.pop : 0)) * Math.PI) * (sp && sp.pop > 0 ? 1 : 0), iw = L.ww * 0.66 * kk; const im = IMG[TOOL_SPR[t] || t]; const ih = iw * Math.min(1, im.height / im.width); const w2 = ih * im.width / im.height;
      const jit = sp && !sp.stopped ? (Math.floor(S.t * 14) % 2 ? -L.ww * 0.05 : L.ww * 0.05) : 0; draw(im, x + (L.ww - w2) / 2, L.wy + (L.ww - ih) / 2 + jit, w2, ih); }
  }
  // the inside of the sofa
  const bw = 5 * L.cw, bh = 5 * L.rh + L.th;
  cx.save(); cx.beginPath(); cx.rect(L.bx - L.cw * 0.05, L.by - 2, bw + L.cw * 0.1, bh + 6); cx.clip();
  const cav = IMG.bg_cavity, cs = Math.max((bw + 20) / cav.width, (bh + 20) / cav.height); blit(cav, L.bx + bw / 2 - cav.width * cs / 2, L.by + bh / 2 - cav.height * cs / 2, cav.width * cs, cav.height * cs);
  cx.globalAlpha = 0.12; cx.fillStyle = '#1E1512'; cx.fillRect(L.bx - L.cw * 0.05, L.by - 2, bw + L.cw * 0.1, bh + 6); cx.globalAlpha = 1;
  if (disp) for (let c = 0; c < 5; c++) for (let l = 0; l < 5; l++) {
    if (disp.dug[c][l]) continue; const got = disp.board.cells[c][l];
    let ox2 = 0, oy2 = 0; if (disp.shake[c][l] > 0) { ox2 = Math.sin(S.t * 90 + c) * L.cw * 0.03; oy2 = Math.cos(S.t * 77 + l) * L.cw * 0.015; }
    const x = L.bx + c * L.cw + ox2, y = L.by + l * L.rh + oy2;
    blit(IMG[`cell_${LAYERS[l]}_${c}`], x, y, L.cw + 0.6, L.rh + 0.6);
    if (disp.hp[c][l] < SOFAS[disp.board.sofa].hp[l]) draw('dust_3', x + L.cw * 0.2, y + L.rh * 0.15, L.cw * 0.6);
    if (got === 'R') { const d = L.rh * 0.9; draw('tok_remote', x + L.cw / 2 - d / 2, y + L.rh / 2 - d / 2, d, d); }
    else if (got) { const d = L.rh * 0.92; draw('coin_m', x + L.cw / 2 - d * 0.95, y + L.rh / 2 - d / 2, d, d); const pw = L.cw * 0.6, ph = L.rh * 0.5; plate(x + L.cw * 0.42, y + L.rh / 2 - ph / 2, pw, ph); digits(got < 1 ? got.toFixed(2) : String(got), x + L.cw * 0.42 + pw / 2, y + L.rh / 2, ph * 0.66); }
  }
  if (disp) for (let c = 0; c < 5; c++) { const open = disp.tinOpen[c]; const n = open ? 'tin_open' : 'tin_closed'; const iw = L.cw * 0.9, ih = iw * IMG[n].height / IMG[n].width; draw(n, L.bx + c * L.cw + (L.cw - iw) / 2, L.by + 5 * L.rh + L.th - ih - L.th * 0.02, iw, ih); }
  for (const d of debris) if (d.stay) { const p = d.b.getPosition(); draw(d.im, L.bx + (p.x - d.w / 2) * L.U, L.by + (p.y - d.h / 2) * L.U, d.w * L.U, d.h * L.U, d.b.getAngle()); }
  cx.restore();
  for (const d of debris) if (!d.stay) { const p = d.b.getPosition(); draw(d.im, L.bx + (p.x - d.w / 2) * L.U, L.by + (p.y - d.h / 2) * L.U, d.w * L.U, d.h * L.U, d.b.getAngle()); }
  draw('fabric_top', L.bx - L.cw * 0.45, L.by - L.cw * 0.2, bw + L.cw * 0.9, L.cw * 0.42);
  for (const T of tools) {
    if (T.state === 'gone' || T.delay > 0) continue; const p = T.b.getPosition(); const v = T.b.getLinearVelocity();
    const x = L.bx + (p.x - T.w / 2) * L.U, y = L.by + (p.y - T.h / 2) * L.U;
    if (v.y > 4 && T.state === 'fall') draw('trail_' + (T.c % 4), x + T.w * L.U * 0.1, y - T.h * L.U * 0.55, T.w * L.U * 0.8);   // painted motion trail on the fall
    let sq = [1, 1]; if (T.sq < 0.035) sq = [1.18, 0.8]; else if (T.sq < 0.07) sq = [0.92, 1.1];
    if (T.state === 'suck') sq = [1 + 0.06 * Math.sin(S.t * 60), 1 - 0.06 * Math.sin(S.t * 60)];
    draw(T.im, x, y, T.w * L.U, T.h * L.U, T.b.getAngle(), false, sq[0], sq[1]);
  }
  for (const f of S.fx) { const kk = f.t / f.life; if (f.kind === 'dust') { const fr = Math.min(3, Math.floor(kk * 4)); const im = IMG['dust_' + fr]; const w = f.s * (0.8 + kk * 0.5); draw(im, f.x - w / 2, f.y - w * im.height / im.width / 2, w); }
    else { const w = f.s * (0.7 + kk * 0.6); draw('flecks', f.x - w / 2, f.y - w / 2, w, null, kk * 2); } }
  drawDog(true);
  const tv = L.tv;
  // the row's x2 plate flies into the TV and shrinks away as it lands, so it never sits on top of the TV's own number
  for (const p of S.plates) { const k1 = Math.min(1, p.t / 0.5), k2 = Math.min(1, Math.max(0, (p.t - 0.7) / 0.6)); if (k2 >= 0.97) continue; const tx = tv.x + tv.w * 0.41, ty = tv.y + tv.h * 0.44;
    const x = p.x + (tx - p.x) * ease.inOut(k2), y = p.y - L.rh * 1.3 * ease.back(k1) + (ty - p.y + L.rh * 1.3) * ease.inOut(k2);
    cx.globalAlpha = k2 < 0.6 ? 1 : Math.max(0, 1 - (k2 - 0.6) / 0.37); digits('x' + p.v, x, y, L.rh * (1.2 - 1.0 * ease.inOut(k2))); cx.globalAlpha = 1; }
  const g = L.glass, gw = g.h * IMG.glass_empty.width / IMG.glass_empty.height;
  for (const f of S.flights) { if (f.t < 0) continue; const kk = f.t / f.d;
    let tx = g.x + gw / 2, ty = g.y + g.h * 0.2; if (f.kind === 'remote') { const r = remSlot(f.slot); tx = r.x + r.d / 2; ty = r.y + r.d / 2; }
    const x = f.x0 + (tx - f.x0) * ease.inOut(kk), y = f.y0 + (ty - f.y0) * kk - Math.sin(kk * Math.PI) * H * 0.16; const d = L.rh * (0.95 - 0.3 * kk);
    draw(f.kind === 'coin' ? 'coin_m' : 'tok_remote', x - d / 2, y - d / 2, d, d, f.kind === 'coin' ? kk * 5 : 0); }
  // screen space
  cx.setTransform(DPR, 0, 0, DPR, 0, 0);
  for (const p of S.past) { const kk = p.t / 0.55, c0x = W / 2, c0y = (H - L.barH) * 0.45; const sc = L.cw * (0.6 + kk * 1.5);
    draw(p.im, c0x + p.dx * W * 0.6 * kk - sc / 2, c0y + p.dy * H * 0.5 * kk + kk * kk * H * 0.3 - sc / 2, sc, null, p.a + p.rot * kk); }
  if (S.bonus) drawBonusHud();
  if (S.title) { const tt = S.title.t, im = IMG[S.title.n]; const w = Math.min(W * 0.9, 700) * (tt < 0.25 ? 1.8 - 0.8 * ease.out(tt / 0.25) : 1); draw(im, W / 2 - w / 2, (H - L.barH) * 0.42 - w * im.height / im.width / 2, w); }
  drawBar();
  if (S.celebrate) drawCelebrate();
  if (S.replayMode && S.phase !== 'splash' && !S.panel) { const pw = Math.min(W * 0.42, 220), ph = 46, ry = H - L.barH - ph - 6; plate(8, ry, pw, ph); label(T.replayTitle, 8 + pw / 2, ry + 6, 13, '#A87A1C'); label(fmtMoney(params.amount || 0, S.currency) + ' · ' + (MODE_NAME[params.mode] || params.mode || ''), 8 + pw / 2, ry + 22, 12, '#2A1E1A'); }
  if (S.phase === 'splash') drawSplash();
  if (S.panel) drawPanel();
  if (S.msg) { cx.fillStyle = 'rgba(42,30,26,0.82)'; const mw = Math.min(W * 0.9, 520); cx.fillRect(W / 2 - mw / 2, H * 0.4, mw, 70); label(S.msg, W / 2, H * 0.4 + 22, Math.min(20, W * 0.045)); }
  const quiet = S.phase === 'idle' || S.phase === 'result' || S.phase === 'boot';
  const wq = WARM.length ? WARM : quiet && (S.t - (S.lastWarm || 0)) > 0.2 ? WARM_LO : null;
  if (wq && wq.length) { const a = wq.shift(); S.lastWarm = S.t; cx.globalAlpha = 0.004; cx.drawImage(a, 0, 0, 2, 2, 0, 0, 1, 1); cx.globalAlpha = 1; }
}
function drawSplash() {
  cx.fillStyle = 'rgba(30,21,18,0.55)'; cx.fillRect(0, 0, W, H);
  const im = IMG.logo; const w = Math.min(W * 0.86, 620, H * 0.62 * im.width / im.height) * (1 + 0.02 * Math.sin(S.t * 2.2)); const h = w * im.height / im.width; draw(im, W / 2 - w / 2, H * 0.4 - h / 2, w, h);
  const k = 0.5 + 0.5 * Math.sin(S.t * 3.5); label(S.ready || S.replay || S.replayErr ? 'TAP TO START' : 'LOADING…', W / 2, Math.min(H * 0.4 + h / 2 + 18, H - Math.min(30, W * 0.065, H * 0.09) - 8), Math.min(30, W * 0.065, H * 0.09), k > 0.3 ? '#FFC72C' : '#FFF2D9');
}
function drawCelebrate() {
  const c = S.celebrate, k = c.t, out = Math.max(0, (k - (c.dur - 0.45)) / 0.45);
  cx.fillStyle = `rgba(30,21,18,${0.55 * (1 - out)})`; cx.fillRect(0, 0, W, H);
  // coins rain down, more for bigger tiers
  const n = c.tier === 'BIG WIN' ? 18 : c.tier === 'HUGE WIN' ? 32 : 48;
  for (let i = 0; i < n; i++) { const r = rng(i * 17 + 3); const t0 = r() * 1.2, tt = k - t0; if (tt < 0) continue; const x = r() * W, y = -40 + tt * tt * 420 + tt * 160 * r(); if (y > H) continue; const d = 26 + r() * 30; draw('coin_m', x - d / 2, y - d / 2, d, d, tt * (3 + r() * 6)); }
  // the top tiers get their own painted title (MEGA WIN: coins in a biscuit tin; MAX WIN: bursting out of a cushion) above a number plate
  const art = c.tier === 'MEGA WIN' ? IMG.t_mega : c.tier === 'MAX WIN' ? IMG.t_max : null;
  const pw = Math.min(W * 0.86, 520, (H - L.barH) * (art ? 0.62 : 2)), ph = pw * (art ? 0.34 : 0.48), slam = k < 0.3 ? 1.6 - 0.6 * ease.out(k / 0.3) : 1, x = W / 2 - pw / 2;
  const tw = art ? pw * (c.tier === 'MAX WIN' ? 1.12 : 1.0) : 0, th = art ? tw * art.height / art.width : 0;
  const y = (H - L.barH) * (art ? 0.5 : 0.42) - ph / 2 + th * 0.36 - out * H * 0.8;
  cx.save(); cx.translate(W / 2, y + ph / 2); cx.scale(slam, slam); cx.translate(-W / 2, -(y + ph / 2));
  plate(x, y, pw, ph);
  const v = c.money * Math.min(1, k / (c.dur * 0.6));
  if (art) { digitsMoney(v * 1e6, W / 2, y + ph * 0.52, ph * 0.56, pw * 0.86, v < c.money); const bob = Math.sin(k * 5) * 0.03, sq = 1 + 0.04 * Math.sin(k * 10); draw(art, W / 2 - tw / 2, y - th * 0.86, tw, th, bob, false, sq, 2 - sq); }
  else { label(c.tier + '!', W / 2, y + ph * 0.12, ph * 0.22, c.tier === 'BIG WIN' ? '#A87A1C' : '#C8483A'); digitsMoney(v * 1e6, W / 2, y + ph * 0.66, ph * 0.36, pw * 0.86, v < c.money); }
  cx.restore();
}
function drawTV() {
  const tv = L.tv; const rock = Math.sin(S.t * 22) * 0.06 * S.tvRock, slam = 1 + 0.12 * S.tvSlam;
  draw('tv_bracket', tv.x + tv.w * 0.22, tv.y + tv.h * 0.62, tv.w * 0.56);
  cx.save(); cx.translate(tv.x + tv.w / 2, tv.y + tv.h * 0.7); cx.rotate(rock); cx.scale(slam, slam); cx.translate(-(tv.x + tv.w / 2), -(tv.y + tv.h * 0.7));
  draw('tv', tv.x, tv.y, tv.w, tv.h);
  const scr = { x: tv.x + tv.w * 0.10, y: tv.y + tv.h * 0.12, w: tv.w * 0.62, h: tv.h * 0.64 };
  cx.save(); cx.beginPath(); cx.rect(scr.x, scr.y, scr.w, scr.h); cx.clip();
  cx.globalAlpha = 0.07 + 0.06 * Math.sin(S.t * 23) * Math.sin(S.t * 3.1) + S.tvFlash * 0.75; cx.fillStyle = '#FFF2D9'; cx.fillRect(scr.x, scr.y, scr.w, scr.h);
  const band = (S.t * 0.45 % 1) * (scr.h * 1.4) - scr.h * 0.2; cx.globalAlpha = 0.22; cx.fillRect(scr.x, scr.y + band, scr.w, scr.h * 0.16);
  cx.globalAlpha = 0.12; cx.fillStyle = '#2E7D7A'; for (let q = 0; q < scr.h; q += Math.max(3, scr.h / 40)) cx.fillRect(scr.x, scr.y + q + (S.t * 30 % 3), scr.w, 1);
  cx.restore(); cx.globalAlpha = 1;
  const v = window.__tvForce || (disp ? tvValue() : 1); const ds = 1 + 0.9 * S.tvSlam * S.tvSlam;            // the digit slams in
  digits('x' + (v >= 10000 ? v.toLocaleString('en-US') : String(v)), scr.x + scr.w / 2, scr.y + scr.h / 2, Math.min(scr.h * 0.7 * ds, scr.h * 1.1), scr.w * 0.95 * Math.min(ds, 1.25));   // no comma below 10,000: bigger digits
  cx.restore();
}
function drawRemotes() {
  // remote slots: three needed for MATCH DAY
  for (let i = 0; i < 3; i++) { const r = remSlot(i); const lit = S.remotes > i; const p = S.remPop > 0 && (lit || S.remotes === 2) ? Math.sin(S.t * 40) * 0.08 * S.remPop : 0;
    draw(lit ? 'tok_remote' : 'ui_rb0', r.x, r.y, r.d, r.d, p); }
}
function remSlot(i) { const r = L.rem; return L.portrait ? { x: r.x + i * (r.d + 3), y: r.y, d: r.d } : { x: r.x - r.d * 1.1, y: r.y + i * (r.d + 3), d: r.d }; }
function drawGlass() {
  const g = L.glass, gi = IMG.glass_empty, gw = g.h * gi.width / gi.height, gp = 1 + 0.06 * (S.glassPop || 0);
  const lvl = disp ? Math.min(1, disp.coins / Math.max(1, 3)) : 0;
  cx.save(); cx.translate(g.x + gw / 2, g.y + g.h); cx.scale(gp, gp); cx.translate(-(g.x + gw / 2), -(g.y + g.h));
  draw('glass_empty', g.x, g.y, gw, g.h);
  if (lvl > 0) { const lv = 0.12 + 0.62 * lvl; cx.save(); cx.beginPath(); cx.rect(g.x, g.y + g.h * (1 - lv), gw, g.h * lv); cx.clip(); draw('glass_full', g.x, g.y, gw, g.h); cx.restore(); }
  cx.restore();
}
function drawBonusHud() {
  const b = S.bonus, pw = Math.min(W * 0.46, 300), ph = pw * 0.36, x = L.portrait ? W * 0.5 - pw / 2 : Math.min(L.bx - pw - 12, W * 0.27), y = L.portrait ? L.wy - ph - 4 : 8;
  const k = 1 + 0.15 * (b.payPop || 0); cx.save(); cx.translate(x + pw / 2, y + ph / 2); cx.scale(k, k); cx.translate(-(x + pw / 2), -(y + ph / 2));
  plate(x, y, pw, ph); label('BONUS WIN', x + pw * 0.3, y + ph * 0.16, ph * 0.26, '#A87A1C'); digitsMoney(Math.min(b.total, MAX_WIN) * bet(), x + pw * 0.3, y + ph * 0.62, ph * 0.42, pw * 0.5);
  label('DROPS', x + pw * 0.8, y + ph * 0.16, ph * 0.26, '#A87A1C'); digits(String(Math.max(0, b.left)), x + pw * 0.8, y + ph * 0.62, ph * 0.5 * (1 + 0.4 * b.pop));
  cx.restore();
}
// bet bar: balance + bet with -/+ left, win centre, turbo / PLAY / auto right; BUY on the bar; every icon labelled
const HIT = [];
function btn(n, x, y, d, glyph, lab, id, ls) { draw(n, x - d / 2, y, d, d); if (glyph) label(glyph, x, y + d * 0.16, d * 0.56); if (lab) label(lab, x, y + d + 1, ls || Math.max(10, d * 0.24), '#FFC72C'); HIT.push({ id, x: x - d / 2, y, w: d, h: d + (lab ? 12 : 0) }); }
function drawBar() {
  HIT.length = 0;
  const y = H - L.barH, P = IMG.plank; const ph = L.barH * 1.28, s = ph / P.height; let pw = P.width * s; if (pw < W * 1.12) pw = W * 1.12;
  blit(P, (W - pw) / 2, y - L.barH * 0.16, pw, ph);
  if (S.replayMode) { label(T.rp.win, W / 2, y + L.barH * 0.15, 14, '#FFC72C'); label(fmtMoney(Math.round(S.winShown * 1e6), S.currency), W / 2, y + L.barH * 0.15 + 18, 24); return; }
  const b = L.barH, pr = S.pressed > 0, playLab = S.social ? 'PLAY' : 'PLAY';
  const live = S.ready || S.replayMode, balT = live ? fmtBalance(Math.round(S.balance * 1e6), S.currency) : '', betT = live ? fmtMoney(bet(), S.currency) : '', winT = live ? fmtMoney(Math.round(S.winShown * 1e6), S.currency) : '';
  if (L.portrait) {
    const lab = 12, val = 22;
    label('BALANCE', W * 0.19, y + 4, lab, '#FFC72C'); labelFit(balT, W * 0.19, y + 4 + lab + 2, val, W * 0.3);
    label('WIN', W * 0.45, y + 4, lab, '#FFC72C'); labelFit(winT, W * 0.45, y + 4 + lab + 2, val * 1.1, W * 0.19);
    btn('ui_rb2', W * 0.66, y + 3, 40, '»', 'TURBO', 'turbo', 9);
    btn('ui_sq0', W * 0.065, y + b * 0.5, 40, '≡', 'MENU', 'menu', 9);
    btn('ui_rb0', W * 0.175, y + b * 0.52, 40, '−', null, 'minus'); btn('ui_rb1', W * 0.445, y + b * 0.52, 40, '+', null, 'plus');
    label(T.bet, W * 0.31, y + b * 0.5, lab, '#FFC72C'); labelFit(betT, W * 0.31, y + b * 0.5 + lab + 2, val, W * 0.17);
    btn('ui_sq0', W * 0.585, y + b * 0.5, 40, '★', T.buy, 'buy', 9);
    btn('ui_rb3', W * 0.70, y + b * 0.5, 40, '↻', S.auto ? String(S.auto) : 'AUTO', 'auto', 9);
    const pd = b * 0.84; draw(pr ? 'ui_play_down' : 'ui_play', W * 0.87 - pd / 2, y + b * 0.5 - pd / 2, pd, pd); label(playLab, W * 0.87, y + b * 0.5 - pd * 0.13, pd * 0.25); HIT.push({ id: 'play', x: W * 0.87 - pd / 2, y: y + b * 0.5 - pd / 2, w: pd, h: pd });
  } else if (H < 300) {
    // pop-out windows (Engine's 400x225): one slim row, every control inside the screen and labelled
    const d = Math.min(30, b * 0.66), lab = 8, val = 12, ty = y + b * 0.06, cy = y + (b - d) / 2 - 3;
    btn('ui_sq0', W * 0.05, cy, d, '≡', 'MENU', 'menu', lab);
    label('BALANCE', W * 0.16, ty, lab, '#FFC72C'); labelFit(balT, W * 0.16, ty + lab + 2, val, W * 0.13);
    btn('ui_rb0', W * 0.265, cy, d * 0.8, '−', null, 'minus'); btn('ui_rb1', W * 0.415, cy, d * 0.8, '+', null, 'plus');
    label(T.bet, W * 0.34, ty, lab, '#FFC72C'); labelFit(betT, W * 0.34, ty + lab + 2, val, W * 0.1);
    btn('ui_sq0', W * 0.49, cy, d, '★', T.buy, 'buy', lab);
    label('WIN', W * 0.6, ty, lab, '#FFC72C'); labelFit(winT, W * 0.6, ty + lab + 2, val, W * 0.13);
    btn('ui_rb2', W * 0.71, cy, d, '»', 'TURBO', 'turbo', lab);
    const pd = Math.min(b * 1.05, 46); draw(pr ? 'ui_play_down' : 'ui_play', W * 0.83 - pd / 2, y + b * 0.5 - pd * 0.55, pd, pd); label(playLab, W * 0.83, y + b * 0.5 - pd * 0.55 + pd * 0.37, pd * 0.25); HIT.push({ id: 'play', x: W * 0.83 - pd / 2, y: y + b * 0.5 - pd * 0.55, w: pd, h: pd });
    btn('ui_rb3', W * 0.945, cy, d, '↻', S.auto ? String(S.auto) : 'AUTO', 'auto', lab);
  } else {
    const lab = Math.max(14, b * 0.19), val = Math.max(24, b * 0.36), ty = y + b * 0.08, d = Math.max(48, b * 0.6);
    btn('ui_sq0', W * 0.035, y + b * 0.04, d * 0.9, '≡', 'MENU', 'menu', lab * 0.8);
    label('BALANCE', W * 0.12, ty, lab, '#FFC72C'); labelFit(balT, W * 0.12, ty + lab + 3, val, W * 0.095);   // long currencies shrink, never touch the − button
    btn('ui_rb0', W * 0.21, ty + 4, d * 0.85, '−', null, 'minus'); btn('ui_rb1', W * 0.345, ty + 4, d * 0.85, '+', null, 'plus');
    label(T.bet, W * 0.2775, ty, lab, '#FFC72C'); labelFit(betT, W * 0.2775, ty + lab + 3, val, Math.min(W * 0.135 - d * 0.85 - 8, W * 0.09));
    btn('ui_sq0', W * 0.41, y + b * 0.04, d * 0.9, '★', T.buy, 'buy', lab * 0.8);
    label('WIN', W * 0.53, ty, lab, '#FFC72C'); labelFit(winT, W * 0.53, ty + lab + 3, val * 1.15, W * 0.2);
    btn('ui_rb2', W * 0.765, y + b * 0.04, d * 0.9, '»', 'TURBO', 'turbo', lab * 0.8);
    btn('ui_rb3', W * 0.955, y + b * 0.04, d * 0.9, '↻', S.auto ? String(S.auto) : 'AUTO', 'auto', lab * 0.8);
    const pd = Math.max(56, b * 1.3); draw(pr ? 'ui_play_down' : 'ui_play', W * 0.86 - pd / 2, y + b * 0.5 - pd * 0.6, pd, pd); label(playLab, W * 0.86, y + b * 0.5 - pd * 0.6 + pd * 0.37, pd * 0.25); HIT.push({ id: 'play', x: W * 0.86 - pd / 2, y: y + b * 0.5 - pd * 0.6, w: pd, h: pd });
  }
  const t = L.sofaTag; HIT.push({ id: 'sofa', x: t.x, y: t.y, w: t.w, h: t.h });
}
// painted panels: sofa picker, buy list, confirm step
function drawPanel() {
  const n0 = HIT.length;
  HIT.push({ id: 'close', x: 0, y: 0, w: W, h: H, back: true });
  const p = S.panel; cx.fillStyle = 'rgba(30,21,18,0.72)'; cx.fillRect(0, 0, W, H);
  // sizes scale with the screen; floors (planning chat pass 2): title 28, rows and prices 22, notes 14
  const tiny = H < 320, port = L.portrait;
  const pw = port ? Math.min(W * 0.94, 640) : (p.kind === 'confirm' || p.kind === 'auto') ? Math.min(W * 0.6, H * 1.05) : Math.min(W * 0.8, H * 1.35);
  const ph = tiny ? H * 0.94 : (p.kind === 'confirm' || p.kind === 'auto') ? Math.min(H * 0.66, pw * (port ? 0.95 : 0.66)) : port ? Math.min(H * 0.8, pw * 1.6) : p.kind === 'sofa' ? Math.min(H * 0.84, pw * 0.56) : H * 0.84;
  const x = W / 2 - pw / 2, y = tiny ? H * 0.03 : (H - (port ? L.barH * 0.6 : 0)) * 0.48 - ph / 2;
  plate(x, y, pw, ph);
  const fs = tiny ? 20 : Math.max(28, Math.min(ph * 0.075, pw * 0.07)), rs = tiny ? 15 : Math.max(22, fs * 0.78), ns = tiny ? 11 : Math.max(14, fs * 0.5);
  if (p.kind === 'sofa') {
    label('CHOOSE YOUR SOFA', W / 2, y + ph * 0.045, fs, '#A87A1C');
    const notes = { FUTON: 'small wins, often', THREE_SEATER: 'balanced', CHESTERFIELD: 'deep and rare, huge tins' };
    SOFA_MODES.forEach((m, i) => {
      const im = IMG[SOFA_CARD[m]]; let bx2, by2, bw2, bh2;
      if (port) { bh2 = ph * 0.25; bw2 = pw * 0.9; bx2 = x + pw * 0.05; by2 = y + ph * 0.14 + i * ph * 0.26; }
      else { bw2 = pw * 0.3; bh2 = ph * 0.72; bx2 = x + pw * 0.035 + i * pw * 0.32; by2 = y + ph * 0.17; }
      const iw = port ? bw2 * 0.46 : bw2 * 0.98, ih = Math.min(iw * im.height / im.width, port ? bh2 * 0.9 : bh2 * 0.62); const iw2 = ih * im.width / im.height;
      draw(im, port ? bx2 : bx2 + (bw2 - iw2) / 2, by2, iw2, ih);
      const tx = port ? bx2 + bw2 * 0.74 : bx2 + bw2 / 2, ty = port ? by2 + bh2 * 0.22 : by2 + ih + ph * 0.04, tw = port ? bw2 * 0.52 : bw2 * 0.98;
      labelFit((port ? SOFAS[m].label.replace('The ', '') : SOFAS[m].label).toUpperCase(), tx, ty, rs, tw, m === S.sofa ? '#C8483A' : '#2A1E1A'); labelFit(notes[m], tx, ty + rs * 1.2, ns * 1.15, tw, '#7A4E32');
      if (m === S.sofa) label('PLAYING', tx, ty + rs * 1.2 + ns * 1.8, ns, '#A87A1C');
      HIT.push({ id: 'pick:' + m, x: bx2, y: by2, w: bw2, h: bh2 });
    });
    label(`Every sofa plays at 1x the ${S.social ? 'play amount' : 'bet'}.`, W / 2, y + ph * 0.92, ns * 1.1, '#7A4E32');
  } else if (p.kind === 'buy') {
    label(T.buyTitle, W / 2, y + ph * 0.045, fs, '#A87A1C');
    const n = BUYS.length, top = y + ph * 0.15, step = (ph * 0.8) / n, ic = Math.min(step * 0.72, pw * 0.16);
    BUYS.forEach((B, i) => { const yy = top + i * step, cost = BUY_COST[B.mode], mid = yy + step * 0.42;
      if (i) { cx.fillStyle = 'rgba(168,122,28,0.35)'; cx.fillRect(x + pw * 0.06, yy - 2, pw * 0.88, 2); }
      const im = IMG[B.icon]; const iw = ic, ih = Math.min(ic, iw * im.height / im.width); draw(im, x + pw * 0.06 + (ic - iw) / 2, mid - ih / 2, iw, ih);
      const tx = x + pw * 0.06 + ic + pw * 0.03, tw = pw * 0.56 - ic; cx.textAlign = 'left';
      leftFit(B.label, tx, mid - rs * 0.95, rs, tw, '#2A1E1A'); leftFit(B.note, tx, mid + rs * 0.2, ns * 1.1, tw, '#7A4E32');
      labelFit(fmtMoney(bet() * cost, S.currency), x + pw * 0.8, mid - rs * 0.75, rs * 1.05, pw * 0.26, '#C8483A'); label(cost + 'x', x + pw * 0.8, mid + rs * 0.4, ns * 1.1, '#7A4E32');
      HIT.push({ id: 'buy:' + B.mode, x: x + pw * 0.04, y: yy, w: pw * 0.92, h: step }); });
  } else if (p.kind === 'confirm') {
    const B = BUYS.find(b => b.mode === p.mode); const cost = BUY_COST[p.mode];
    label(T.confirmTitle, W / 2, y + ph * 0.07, fs, '#A87A1C');
    const im = IMG[B.icon], ic = ph * 0.2; draw(im, W / 2 - ic / 2, y + ph * 0.2, ic, Math.min(ic, ic * im.height / im.width));
    labelFit(B.label, W / 2, y + ph * 0.42, rs * 1.15, pw * 0.85, '#2A1E1A');
    label(T.costWord.toUpperCase(), W / 2, y + ph * 0.42 + rs * 1.45, ns, '#7A4E32');
    labelFit(`${fmtMoney(bet() * cost, S.currency)} (${cost}x)`, W / 2, y + ph * 0.42 + rs * 1.45 + ns * 1.3, rs * 1.25, pw * 0.88, '#C8483A');
    const d = Math.max(48, Math.min(76, ph * 0.19)); btn('ui_rb0', W / 2 - pw * 0.2, y + ph * 0.72, d, '✕', 'CANCEL', 'cancel', ns); btn('ui_rb1', W / 2 + pw * 0.2, y + ph * 0.72, d, '✓', 'CONFIRM', 'confirm', ns);
  } else if (p.kind === 'auto') {
    label('AUTOPLAY', W / 2, y + ph * 0.07, fs, '#A87A1C'); label('How many rounds?', W / 2, y + ph * 0.07 + fs * 1.25, ns * 1.1, '#7A4E32');
    const ns4 = [10, 25, 50, 100], cw2 = pw * 0.19, ch2 = Math.min(ph * 0.2, cw2 * 0.8), y2 = y + ph * 0.36;
    ns4.forEach((n, i) => { const xx = x + pw * 0.1 + i * pw * 0.205; plate(xx, y2, cw2, ch2); if (n === p.n) { cx.fillStyle = 'rgba(255,199,44,0.45)'; cx.fillRect(xx + cw2 * 0.12, y2 + ch2 * 0.16, cw2 * 0.76, ch2 * 0.68); } label(String(n), xx + cw2 / 2, y2 + ch2 * 0.22, Math.max(22, ch2 * 0.5), n === p.n ? '#C8483A' : '#2A1E1A'); HIT.push({ id: 'autoN:' + n, x: xx, y: y2, w: cw2, h: ch2 }); });
    labelFit(tiny ? `${p.n} rounds at ${fmtMoney(bet(), S.currency)}. AUTO again stops.` : `Plays ${p.n} rounds at ${fmtMoney(bet(), S.currency)} each. Press AUTO again to stop.`, W / 2, y2 + ch2 + ns * 0.8, ns, pw * (tiny ? 0.62 : 0.84), '#7A4E32');
    const d = Math.max(48, Math.min(76, ph * 0.19)); btn('ui_rb0', W / 2 - pw * 0.2, y + ph * 0.72, d, '✕', 'CANCEL', 'cancel', ns); btn('ui_rb1', W / 2 + pw * 0.2, y + ph * 0.72, d, '▶', 'START', 'autoStart', ns);
  } else if (p.kind === 'menu') {
    label('MENU', W / 2, y + ph * 0.06, fs, '#A87A1C'); const d = Math.min(64, ph * 0.13), col = W / 2;
    const rows = [['rules', 'HOW TO PLAY', '?'], ['snd', 'ALL SOUND: ' + (S.sound ? 'ON' : 'OFF'), '♪'], ['mus', 'MUSIC: ' + (S.music ? 'ON' : 'OFF'), '♫'], ['back', 'CLOSE', '✕']];
    rows.forEach(([id, t, g], i) => { const yy = y + ph * (0.2 + i * 0.19); draw('ui_rb2', col - pw * 0.3 - d / 2, yy, d, d); label(g, col - pw * 0.3, yy + d * 0.18, d * 0.5); label(t, col + pw * 0.05, yy + d * 0.25, fs * 0.8, '#2A1E1A'); HIT.push({ id, x: x + pw * 0.08, y: yy, w: pw * 0.84, h: d }); });
  } else if (p.kind === 'replay') {
    const R = S.replay || {}; const amt = params.amount > 0 ? params.amount : 1e6, cost = R.costMultiplier || 1, pm = R.payoutMultiplier || 0;
    label(T.replayTitle, W / 2, y + ph * 0.05, fs, '#A87A1C');
    const rows = [[T.rp.mode, (MODE_NAME[params.mode] || params.mode || '').toUpperCase()], [T.rp.base, fmtMoney(amt, S.currency)], [T.rp.costMult, cost + 'x'], [T.rp.total, fmtMoney(amt * cost, S.currency)], [T.rp.payMult, (Math.round(pm * 100) / 100) + 'x'], [T.rp.win, fmtMoney(Math.round(amt * pm), S.currency)]];
    rows.forEach(([k, v], i) => { const yy = y + ph * (0.16 + i * 0.09); label(k, x + pw * 0.3, yy, fs * 0.62, '#7A4E32'); label(v, x + pw * 0.72, yy, fs * 0.72, '#2A1E1A'); });
    if (S.replayErr) label(S.replayErr, W / 2, y + ph * 0.72, fs * 0.6, '#C8483A');
    else if (S.replay) { const bw = Math.min(pw * 0.7, 300), bh = Math.min(56, ph * 0.15), bx = W / 2 - bw / 2, by = y + ph * (tiny ? 0.7 : 0.72); plate(bx, by, bw, bh); label(p.end ? 'PLAY AGAIN' : 'START REPLAY', W / 2, by + bh * 0.26, bh * 0.42, '#C8483A'); HIT.push({ id: 'startReplay', x: bx, y: by, w: bw, h: bh }); }
    label(T.replayNote, W / 2, y + ph * (tiny ? 0.88 : 0.88), fs * (tiny ? 0.42 : 0.48), '#7A4E32');
  }
  for (let i = n0; i < HIT.length; i++) HIT[i].panel = true;
}

// ---------- input ----------
cv.addEventListener('pointerdown', e => {
  audioUnlock();
  const x = e.clientX, y = e.clientY;
  if (S.phase === 'splash') { if (!S.ready && !S.replay) return; audioUnlock(); music('music_room'); S.phase = 'idle'; S.phaseT = 0; if (params.replay) S.panel = { kind: 'replay', end: false }; return; }
  if (S.celebrate) { S.celebrate.t = Math.max(S.celebrate.t, S.celebrate.dur - 0.4); return; }
  const h = [...HIT].reverse().find(r => x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h && (!S.panel || r.panel));
  if (!h) return; const id = h.id; sfx('click'); const free = S.phase === 'idle' || S.phase === 'result';
  if (S.panel) {
    if (id.startsWith('pick:')) { const m = id.slice(5); S.sofa = m; S.mode = m; S.panel = null; Promise.all(sofaClips(m).map(loadClip)).then(() => { layout(); gaz.clip = gclip('snore'); }); }
    else if (id.startsWith('buy:')) S.panel = { kind: 'confirm', mode: id.slice(4) };
    else if (id === 'confirm') { const m = S.panel.mode; S.panel = null; spin(m); }
    else if (id === 'rules') { S.panel = null; openRules(); }
    else if (id === 'snd') { setSoundOn(!S.sound); }
    else if (id === 'mus') { setMusicOn(!S.music); }
    else if (id.startsWith('autoN:')) { S.panel.n = +id.slice(6); }
    else if (id === 'autoStart') { S.auto = S.panel.n; S.panel = null; if (S.phase === 'idle' || S.phase === 'result') { S.auto--; spin(); } }
    else if (id === 'startReplay') { S.panel = null; playReplay(); }
    else if (id === 'close' && S.panel.kind === 'replay') { /* the replay panel stays until START REPLAY */ }
    else S.panel = null;
    return;
  }
  if (id === 'play') { if (free) spin(); }
  else if (id === 'minus' && free) S.betIdx = Math.max(0, S.betIdx - 1);
  else if (id === 'plus' && free) S.betIdx = Math.min(S.levels.length - 1, S.betIdx + 1);
  else if (id === 'turbo' && !S.jur.disabledTurbo) S.turbo = !S.turbo;
  else if (id === 'auto' && !S.jur.disabledAutoplay) { if (S.auto) S.auto = 0; else S.panel = { kind: 'auto', n: 10 }; }   // AUTO asks how many rounds first; pressing it while running stops
  else if (id === 'buy' && free && !S.jur.disabledBuyFeature) S.panel = { kind: 'buy' };
  else if (id === 'sofa' && free) S.panel = { kind: 'sofa' };
  else if (id === 'menu') S.panel = { kind: 'menu' };
});
addEventListener('keydown', e => { if (e.code === 'Space' && !S.jur.disabledSpacebar) { e.preventDefault(); if (!S.panel && S.phase !== 'splash' && rulesDiv.style.display !== 'block') spin(); } });

// ---------- loop ----------
let acc = 0, last = 0;
function tick(dt) { acc += Math.min(dt, 0.1); while (acc >= STEP) { update(STEP); acc -= STEP; } render(); }
function frame(ts) { if (window.__manual) return; const dt = last ? (ts - last) / 1000 : 0; last = ts; tick(dt); window.__frames = (window.__frames || 0) + 1; requestAnimationFrame(frame); }
window.__advance = ms => { tick(ms / 1000); };
window.__gameT = () => S.t;
window.__gaz = n => { gazPlay(n); gaz.t = 1.2; };
window.__celebrate = (tier, money, t) => { S.celebrate = { tier, x: 300, money, t, dur: 5.2 }; };
window.__state = () => ({ phase: S.phase, scene: S.scene, mode: S.mode, sofa: S.sofa, tv: disp ? tvValue() : 0, win: +S.win.toFixed(2), bal: +S.balance.toFixed(2), coins: disp ? disp.coins : 0, rem: S.remotes, gaz: gaz.clip, dog: dog.mode, zoom: +S.cam.z.toFixed(2), bonus: S.bonus ? S.bonus.n : 0 });
window.__layout = () => ({ W, H, cw: L.cw, rh: L.rh, gH: L.gH, gaz_frac: L.gH / H, board_w: 5 * L.cw, barH: L.barH, tv_h_frac: L.tv.h / H });
window.__dbg = () => ({ panel: S.panel, hit: HIT.map(h => h.id + '@' + Math.round(h.x) + ',' + Math.round(h.y) + ' ' + Math.round(h.w) + 'x' + Math.round(h.h)) });
window.__tap = id => { const h = HIT.find(r => r.id === id); if (h) cv.dispatchEvent(new PointerEvent('pointerdown', { clientX: h.x + h.w / 2, clientY: h.y + h.h / 2 })); return !!h; };
addEventListener('resize', () => layout());
if (window.visualViewport) visualViewport.addEventListener('resize', () => layout());
addEventListener('orientationchange', () => setTimeout(layout, 300));
if (Q.get('sofa') && SOFAS[Q.get('sofa')]) { S.sofa = Q.get('sofa'); S.mode = S.sofa; }
loadFirst().then(() => { layout(); gaz.clip = gclip('snore'); window.READY = true; requestAnimationFrame(frame); streamRest(); boot(); });
