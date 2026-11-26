// Snagged! RGS client: Engine launch parameters, wallet calls and money formatting (ported from Snow Big Deal's rgs.ts,
// params.ts and money.ts). Amounts from the RGS are integers with 6 decimals (1,000,000 = 1.00).
(function (root) {
  'use strict';
  const q = new URLSearchParams(location.search);
  const host = raw => !raw ? '' : raw.trim().replace(/^https?:\/\//i, '').replace(/\/+$/, '');
  const params = {
    sessionID: q.get('sessionID') || '', rgsHost: host(q.get('rgs_url')), lang: (q.get('lang') || 'en').toLowerCase(),
    currency: (q.get('currency') || '').toUpperCase(), device: q.get('device') || '', social: (q.get('social') || '').toLowerCase() === 'true',
    demo: (q.get('demo') || '').toLowerCase() === 'true', replay: (q.get('replay') || '').toLowerCase() === 'true',
    game: q.get('game') || '', version: q.get('version') || '', mode: q.get('mode') || '', event: q.get('event') || '', amount: Number(q.get('amount') || ''),
  };
  function rgsUrl(path) {
    const local = /^(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+)(:\d+)?$/.test(params.rgsHost);
    return `${local ? 'http' : 'https'}://${params.rgsHost}${path}`;
  }
  class RgsError extends Error { constructor(code, message, status = 0) { super(message); this.code = code; this.status = status; } }
  async function post(path, body) {
    if (!params.rgsHost) throw new RgsError('NO_HOST', 'missing rgs_url');
    let res; try { res = await fetch(rgsUrl(path), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }); }
    catch (e) { throw new RgsError('NETWORK', 'network'); }
    let data = null; try { data = await res.json(); } catch (e) { data = null; }
    if (!res.ok) throw new RgsError((data && data.error) || `HTTP_${res.status}`, (data && data.message) || '', res.status);
    return data;
  }
  const rgs = {
    authenticate: () => post('/wallet/authenticate', { sessionID: params.sessionID }),
    play: (amount, mode) => post('/wallet/play', { sessionID: params.sessionID, amount, mode }),
    endRound: () => post('/wallet/end-round', { sessionID: params.sessionID }),
    balance: () => post('/wallet/balance', { sessionID: params.sessionID }),
    event: event => post('/bet/event', { sessionID: params.sessionID, event }),
    async replay() {
      if (!params.rgsHost) throw new RgsError('NO_HOST', 'missing rgs_url');
      const path = `/bet/replay/${encodeURIComponent(params.game)}/${encodeURIComponent(params.version)}/${encodeURIComponent(params.mode)}/${encodeURIComponent(params.event)}`;
      let res; try { res = await fetch(rgsUrl(path)); } catch (e) { throw new RgsError('NETWORK', 'network'); }
      if (!res.ok) throw new RgsError(`HTTP_${res.status}`, '', res.status);
      return res.json();
    },
  };
  // ---- money
  const M = { USD: ['$', 2], CAD: ['CA$', 2], JPY: ['¥', 0], EUR: ['€', 2], MXN: ['MX$', 2], BRL: ['R$', 2], INR: ['₹', 2], KRW: ['₩', 0, ], IDR: ['Rp', 0],
    TRY: ['₺', 2], AUD: ['A$', 2], NZD: ['NZ$', 2], PHP: ['₱', 2], RUB: ['₽', 2], CNY: ['CN¥', 2], VND: ['₫', 0, 1], DKK: ['kr', 2, 1], PLN: ['zł', 2, 1],
    BTC: ['BTC', 6, 1], ETH: ['ETH', 6, 1], LTC: ['LTC', 6, 1], USDT: ['USDT', 2, 1], USDC: ['USDC', 2, 1], DOGE: ['DOGE', 4, 1], SOL: ['SOL', 6, 1],
    XRP: ['XRP', 4, 1], TRX: ['TRX', 4, 1], BNB: ['BNB', 6, 1], SHIB: ['SHIB', 0, 1], XGC: ['GC', 2, 1], XSC: ['SC', 2, 1] };
  const meta = c => { const m = M[c]; return m ? { symbol: m[0], decimals: m[1], after: !!m[2] } : { symbol: c || '', decimals: 2, after: true }; };
  function exactNumber(amount, min) {
    const neg = amount < 0, a = Math.round(Math.abs(amount)), whole = Math.floor(a / 1e6); let frac = String(a % 1e6).padStart(6, '0'), keep = 6;
    while (keep > min && frac[keep - 1] === '0') keep--; frac = frac.slice(0, keep);
    const w = whole.toLocaleString('en-US'); return (neg ? '-' : '') + (keep > 0 ? `${w}.${frac}` : w);
  }
  const wrap = (v, m) => !m.symbol ? v : m.after ? `${v} ${m.symbol}` : `${m.symbol}${v}`;
  const fmtBalance = (amount, cur) => { const m = meta(cur); const v = (Math.floor(amount / 10 ** (6 - m.decimals)) / 10 ** m.decimals).toLocaleString('en-US', { minimumFractionDigits: m.decimals, maximumFractionDigits: m.decimals }); return wrap(v, m); };
  const fmtMoney = (amount, cur) => { const m = meta(cur); return wrap(exactNumber(amount, m.decimals), m); };
  const fmtShort = (amount, cur) => exactNumber(amount, meta(cur).decimals); // number only, for small tags
  root.SnagRGS = { params, rgs, RgsError, rgsUrl, meta, fmtBalance, fmtMoney, fmtShort };
})(window);
