// Snagged! round rules. ONE file shared by the maths (Node) and the page (browser), so they can never disagree.
// The page never decides an outcome: it replays a book (stocking + tackle + chests) through these fixed rules and
// checks the result against the book's recorded win.
//
// Cells (board[row][lane], 5 rows x 5 lanes):  null | 'j<n>' junk n | 'f<n>:<value>' fish n | 'w:<value>' (Whopper, left half) | 'W' (its right half)
// Values are in hundredths of the bet (50 = 0.50x).
// Tackle per lane: '-' none | 'h' hook | 'k' weighted hook | 'g2' 'g3' 'g5' 'g10' golden hook | 'd' dynamite
// Chests per lane: '' empty | 'x2' 'x3' 'x5' 'x10' multiplier | 'L' 'LL' 'LLL' one to three lures.   Giant chest (The Thing Below): chests = ['G<mult>'] spans all lanes.
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api; else root.SnagRules = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const ROWS = 5, LANES = 5;
  const kind = c => !c ? null : c[0] === 'j' ? 'junk' : c[0] === 'f' ? 'fish' : (c[0] === 'w' || c === 'W') ? 'whopper' : null;
  const valueOf = c => (c[0] === 'f' || c[0] === 'w') ? +c.split(':')[1] : 0;
  const goldOf = t => t[0] === 'g' ? +t.slice(1) : 1;
  const isHook = t => t === 'h' || t === 'k' || t[0] === 'g';

  // which lane cells belong to the Whopper (it can lie across two neighbouring lanes)
  function whopperAt(board) {
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < LANES; c++) if (board[r][c] && board[r][c][0] === 'w') return { row: r, lane: c, value: valueOf(board[r][c]) };
    return null;
  }
  function whoppersAt(board) {
    const out = [];
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < LANES; c++) if (board[r][c] && board[r][c][0] === 'w') out.push({ row: r, lane: c, value: valueOf(board[r][c]) });
    return out;
  }

  // resolve one drop. Returns per-lane events, the catches, whopper outcomes, chests opened and the win (hundredths, before any cap)
  function resolve(board, tackle, chests, opts = {}) {
    const lanes = [];
    const catches = [];         // {lane,row,cell,value,mult,how:'hook'|'float'}
    const reached = new Map();  // whopper key -> {w, lanes:[{lane,gold}]}
    const opened = [];          // {lane, content}
    let giantOpened = false;
    const giant = chests && chests.length === 1 && chests[0][0] === 'G';
    for (let c = 0; c < LANES; c++) {
      const t = tackle[c] || '-';
      const ev = { lane: c, type: t, smash: [], snag: null, catch: null, whopper: null, chest: false, blasted: [], stunned: [] };
      lanes.push(ev);
      if (t === '-') continue;
      if (t === 'd') {
        for (let r = 0; r < ROWS; r++) {
          const k = kind(board[r][c]);
          if (k === 'junk') ev.blasted.push(r);
          if (k === 'fish') { ev.stunned.push(r); catches.push({ lane: c, row: r, cell: board[r][c], value: valueOf(board[r][c]), mult: 0.5, how: 'float' }); }
        }
        continue;
      }
      let done = false;
      for (let r = 0; r < ROWS && !done; r++) {
        const cell = board[r][c], k = kind(cell);
        if (!k) continue;
        if (k === 'junk') { if (t === 'k') { ev.smash.push(r); continue; } ev.snag = r; done = true; break; }
        if (k === 'fish') { ev.catch = r; catches.push({ lane: c, row: r, cell, value: valueOf(cell), mult: goldOf(t), how: 'hook' }); done = true; break; }
        if (k === 'whopper') {
          const left = cell === 'W' ? c - 1 : c, key = r + ':' + left;
          if (!reached.has(key)) reached.set(key, { row: r, lane: left, value: valueOf(board[r][left]), lanes: [] });
          reached.get(key).lanes.push({ lane: c, gold: goldOf(t) });
          ev.whopper = r; done = true; break;
        }
      }
      if (!done) { ev.chest = true; if (giant) giantOpened = true; else opened.push({ lane: c, content: chests ? chests[c] || '' : '' }); }
    }
    const whoppers = [];
    for (const w of reached.values()) {
      const landed = w.lanes.length >= 2;
      const mult = landed ? Math.max(...w.lanes.map(l => l.gold)) : 0;
      whoppers.push({ row: w.row, lane: w.lane, value: w.value, landed, lanes: w.lanes.map(l => l.lane), mult });
      if (landed) catches.push({ lane: w.lane, row: w.row, cell: 'w:' + w.value, value: w.value, mult, how: 'whopper' });
    }
    let chestMult = 1, lures = 0;
    for (const o of opened) { if (o.content[0] === 'x') chestMult *= +o.content.slice(1); if (o.content[0] === 'L') lures += o.content.length; }
    const giantMult = giantOpened ? +chests[0].slice(1) : 0;
    const catchSum = catches.reduce((a, k) => a + k.value * k.mult, 0);
    const win = opts.bonus ? catchSum : catchSum * chestMult; // in the bonus, chest multipliers go to the sticky scale instead
    return { lanes, catches, whoppers, opened, chestMult, lures, giantMult, catchSum, win };
  }

  // a short label for how a losing round ended (used so losing rounds don't all look alike)
  function lossEnding(res, tackle) {
    if (res.whoppers.some(w => !w.landed)) return 'whopper-lost';
    if (tackle.includes('d') && res.lanes.some(l => l.type === 'd' && l.blasted.length)) return 'dynamite-junk';
    const snags = res.lanes.filter(l => l.snag !== null).length;
    if (snags >= 3) return 'snagged';
    if (res.opened.length) return 'empty-chests';
    return 'mixed';
  }

  // apply a bonus drop to the board: caught fish leave (their cells refill later), smashed or blasted junk is cleared for good,
  // a Whopper that was reached leaves (landed or escaped). Returns the list of cells freed by fish (refill candidates).
  function applyDrop(board, res) {
    const freed = [];
    for (const l of res.lanes) {
      for (const r of l.smash) board[r][l.lane] = null;
      for (const r of l.blasted) board[r][l.lane] = null;
      for (const r of l.stunned) { board[r][l.lane] = null; freed.push([r, l.lane]); }
      if (l.catch !== null) { board[l.catch][l.lane] = null; freed.push([l.catch, l.lane]); }
    }
    for (const w of res.whoppers) { board[w.row][w.lane] = null; board[w.row][w.lane + 1] = null; }
    return freed;
  }
  const copyBoard = b => b.map(r => r.slice());
  return { ROWS, LANES, kind, valueOf, goldOf, isHook, resolve, lossEnding, applyDrop, copyBoard, whopperAt, whoppersAt };
});
