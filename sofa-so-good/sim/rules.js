// Loose Change: the game rules, shared by the maths generator (node) and the page, so both compute every dig the same way.
// Pure and deterministic: no Math.random, no time. A round is fully described by its board and the tools; this file
// turns that into what gets dug, what is collected and what it pays. The page only animates the result.
//
// Board: 5 columns x 5 layers (0 foam, 1 crumbs, 2 socks + remotes, 3 springs, 4 floorboards), a biscuit tin under each column.
// A cell holds nothing, a coin (value in x the bet) or a remote ('R'). A tin holds a multiplier or a remote.
// Tools, one per column per drop:
//   glove 1 hit, hanger 2 hits, crowbar 6 hits that ignore hardness (reaches the tin),
//   nozzle: 1 hit, then it clears the whole row below it, every column,
//   dog: digs his column to the bottom and opens the tin.
// A tin opens when a hit lands on it after its column is empty.
// The TV: starts at x1; an opened tin adds its number; every fully cleared row doubles it. WIN = coins x TV.
// Three remotes found in one base round start MATCH DAY (4: CUP FINAL, 5 or more: THE BIG WIN).
// Bonus: a fresh sofa that stays as dug between drops; the TV is sticky (it only climbs); every remote found adds a drop;
// each drop pays the coins it digs up at the TV's number after that drop.

export const LAYERS = ['foam', 'crumbs', 'socks', 'springs', 'boards'];
export const TOOL_KINDS = ['none', 'glove', 'hanger', 'nozzle', 'crowbar', 'dog'];
export const HITS = { glove: 1, hanger: 2, crowbar: 6, nozzle: 1, dog: 99, none: 0 };

export const SOFAS = {
  FUTON: {
    label: 'The Futon', hp: [1, 1, 1, 1, 1], coinRate: [0.21, 0.2, 0.18, 0.17, 0.17],
    coins: [[0.1, 30], [0.2, 30], [0.5, 20], [1, 9], [2, 3]], remoteRate: [0.02, 0.03, 0.08, 0.06, 0.05],
    tins: [[1, 40], [2, 25], [3, 8], ['R', 10]],
    tools: [['none', 30], ['glove', 42], ['hanger', 22], ['nozzle', 2.2], ['crowbar', 1.6], ['dog', 1.0]],
  },
  THREE_SEATER: {
    label: 'The Three-Seater', hp: [1, 1, 1, 2, 1], coinRate: [0.11, 0.11, 0.1, 0.1, 0.1],
    coins: [[0.2, 26], [0.5, 26], [1, 16], [2, 6], [5, 1.5]], remoteRate: [0.025, 0.035, 0.09, 0.07, 0.06],
    tins: [[1, 30], [2, 25], [4, 12], [9, 4], ['R', 12]],
    tools: [['none', 34], ['glove', 38], ['hanger', 20], ['nozzle', 2.0], ['crowbar', 1.6], ['dog', 1.0]],
  },
  CHESTERFIELD: {
    label: 'The Chesterfield', hp: [1, 1, 1, 2, 2], coinRate: [0.033, 0.038, 0.038, 0.04, 0.045],
    coins: [[0.5, 20], [1, 18], [2, 10], [5, 4], [10, 1]], remoteRate: [0.022, 0.03, 0.075, 0.06, 0.05],
    tins: [[2, 20], [4, 20], [9, 12], [24, 3], [49, 0.6], ['R', 12]],
    tools: [['none', 38], ['glove', 34], ['hanger', 20], ['nozzle', 1.8], ['crowbar', 1.6], ['dog', 1.0]],
  },
};
export const TIERS = ['MATCH_DAY', 'CUP_FINAL', 'BIG_WIN'];
export const TIER = {
  MATCH_DAY: { label: 'Match Day', rate: 0.22, coins: [[0.1, 30], [0.2, 30], [0.5, 22], [1, 10], [2, 3], [5, 0.6]], tvStart: 1, drops: 4 },
  CUP_FINAL: { label: 'Cup Final', rate: 0.26, coins: [[0.2, 28], [0.5, 28], [1, 20], [2, 9], [5, 2.5], [10, 0.5]], tvStart: 2, drops: 4 },
  BIG_WIN: { label: 'The Big Win', rate: 0.3, coins: [[0.5, 26], [1, 26], [2, 20], [5, 9], [10, 3], [25, 0.6]], tvStart: 3, drops: 5 },
};
export const MAX_DROPS = 10;
export const MAX_WIN = 25000;   // x the bet, every mode
export const BONUS_TOOLS = [['glove', 40], ['hanger', 34], ['nozzle', 8], ['crowbar', 6], ['dog', 4]];

// ---------- random draws (the generator passes its own seeded rng) ----------
export function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function pickW(r, list) { let tot = 0; for (const [, w] of list) tot += w; let x = r() * tot; for (const [v, w] of list) { x -= w; if (x <= 0) return v; } return list[list.length - 1][0]; }

export function makeBoard(r, sofa, opts = {}) {
  const S = SOFAS[sofa], cx = opts.coinX || 1, rr = opts.remoteX || 1, rx = opts.rateX || 1, T = opts.tier ? TIER[opts.tier] : null;
  const cells = [];
  for (let c = 0; c < 5; c++) { const col = []; for (let l = 0; l < 5; l++) {
    let v = null; const u = r();
    const cr = T ? T.rate : S.coinRate[l] * rx;
    if (u < S.remoteRate[l] * rr) v = 'R'; else if (u < S.remoteRate[l] * rr + cr) v = +(pickW(r, T ? T.coins : S.coins) * cx).toFixed(2);
    col.push(v);
  } cells.push(col); }
  // every bonus pays something (planning chat pass 2): a bonus board always has a coin in its top layer, which the first drop digs
  if (T && !cells.some(col => typeof col[0] === 'number')) { let c = Math.floor(r() * 5); if (cells[c][0] === 'R') c = (c + 1) % 5; cells[c][0] = T.coins[0][0]; }
  const tins = [0, 1, 2, 3, 4].map(() => { const t = pickW(r, S.tins); return t !== 'R' && rr > 1 && r() < (rr - 1) * 0.05 ? 'R' : t; });
  return { sofa, cells, tins };
}
export function drawTools(r, sofa, opts = {}) {
  const S = SOFAS[sofa]; const list = opts.bonus ? BONUS_TOOLS : S.tools;
  return [0, 1, 2, 3, 4].map(() => pickW(r, list));
}

// ---------- the dig: pure state machine ----------
export function newState(board, tvStart = 1) {
  return { board, hp: board.cells.map(col => col.map((_, l) => SOFAS[board.sofa].hp[l])), dug: board.cells.map(() => [false, false, false, false, false]),
    tinOpen: [false, false, false, false, false], rows: [false, false, false, false, false], coins: 0, remotes: 0, tvStart };
}
const top = (st, c) => { for (let l = 0; l < 5; l++) if (!st.dug[c][l]) return l; return 5; };
// Plays one drop. Returns the ordered list of things that happen, for the page to animate:
//   { k: 'hit', c, l } (one hit, cell survives), { k: 'break', c, l, got }, { k: 'suck', c, l } (nozzle takes row l),
//   { k: 'tin', c, v }, { k: 'row', l } (row fully cleared), { k: 'miss', c } (tool had nothing to hit)
export function playDrop(st, tools) {
  const ev = [];
  const breakCell = (c, l, by) => {
    st.dug[c][l] = true; st.hp[c][l] = 0; const got = st.board.cells[c][l];
    if (got === 'R') st.remotes++; else if (got) st.coins = +(st.coins + got).toFixed(2);
    ev.push({ k: 'break', c, l, got, by });
    if (!st.rows[l] && st.dug.every(col => col[l])) { st.rows[l] = true; ev.push({ k: 'row', l }); }
  };
  const openTin = (c, by) => { if (st.tinOpen[c]) return; st.tinOpen[c] = true; const v = st.board.tins[c]; if (v === 'R') st.remotes++; ev.push({ k: 'tin', c, v, by }); };
  tools.forEach((t, c) => {
    if (t === 'none') return;
    if (t === 'dog') { for (let l = top(st, c); l < 5; l = top(st, c)) breakCell(c, l, 'dog'); openTin(c, 'dog'); return; }
    if (t === 'nozzle') {
      let l = top(st, c); if (l === 5) { openTin(c, t); return; }
      if (l === 0) { if (--st.hp[c][0] <= 0) breakCell(c, 0, t); else ev.push({ k: 'hit', c, l: 0, by: t }); l = top(st, c); }
      if (l < 5) { ev.push({ k: 'suck', c, l }); for (let cc = 0; cc < 5; cc++) if (!st.dug[cc][l]) breakCell(cc, l, 'suck'); }
      return;
    }
    let hits = HITS[t];
    while (hits > 0) {
      const l = top(st, c);
      if (l === 5) { if (!st.tinOpen[c]) openTin(c, t); else ev.push({ k: 'miss', c, by: t }); break; }
      hits--;
      if (t === 'crowbar') { breakCell(c, l, t); continue; }
      if (--st.hp[c][l] <= 0) breakCell(c, l, t); else ev.push({ k: 'hit', c, l, by: t });
    }
  });
  return ev;
}
export function tv(st) {
  const rows = st.rows.filter(Boolean).length; let t = st.tvStart;
  st.tinOpen.forEach((o, c) => { if (o && st.board.tins[c] !== 'R') t += st.board.tins[c]; });
  return t * (2 ** rows);
}
export const tierFor = n => n >= 5 ? 'BIG_WIN' : n === 4 ? 'CUP_FINAL' : 'MATCH_DAY';

// ---------- whole rounds (used by the generator, and by the page to verify a book) ----------
export function baseRound(seed, sofa, opts = {}) {
  const r = rng(seed); const board = makeBoard(r, sofa, opts); const tools = drawTools(r, sofa);
  const st = newState(board); const ev = playDrop(st, tools);
  return { seed, sofa, board, tools, ev, coins: st.coins, tv: tv(st), remotes: st.remotes, win: +(st.coins * tv(st)).toFixed(2) };
}
export function bonusRound(seed, sofa, tier) {
  const T = TIER[tier], r = rng(seed);
  const board = makeBoard(r, sofa, { tier }); const st = newState(board, T.tvStart);
  const drops = []; let left = T.drops, n = 0, won = 0;
  while (left > 0 && n < MAX_DROPS) {
    const before = st.remotes, c0 = st.coins; const tools = drawTools(r, sofa, { bonus: true }); const ev = playDrop(st, tools); n++;
    const extra = Math.max(0, Math.min(st.remotes - before, MAX_DROPS - n - (left - 1))); left += extra - 1;
    const pay = +((st.coins - c0) * tv(st)).toFixed(2); won = +(won + pay).toFixed(2);       // each drop pays its coins at the TV's number now
    drops.push({ tools, ev, coins: st.coins, tv: tv(st), extra, pay, total: won });
    if (st.dug.every(col => col.every(Boolean)) && st.tinOpen.every(Boolean)) break;      // nothing left in the sofa
  }
  return { seed, sofa, tier, board, drops, coins: st.coins, tv: tv(st), win: won };
}
