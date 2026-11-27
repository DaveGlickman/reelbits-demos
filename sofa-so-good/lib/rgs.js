// Engine RGS client (ported from Cart Wars' rgs.ts). Amounts are integers with 6 decimals (1_000_000 = 1.00).
import { params, rgsUrl } from './params.js';

export class RgsError extends Error {
  constructor(code, message, status = 0) { super(message); this.code = code; this.status = status; }
}

async function post(path, body) {
  if (!params.rgsHost) throw new RgsError('NO_HOST', 'missing rgs_url');
  let res;
  try { res = await fetch(rgsUrl(path), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }); }
  catch { throw new RgsError('NETWORK', 'network'); }
  let data = null; try { data = await res.json(); } catch { data = null; }
  if (!res.ok) throw new RgsError(data?.error ?? `HTTP_${res.status}`, data?.message ?? '', res.status);
  return data;
}

export const rgs = {
  authenticate: () => post('/wallet/authenticate', { sessionID: params.sessionID }),
  play: (amount, mode) => post('/wallet/play', { sessionID: params.sessionID, amount, mode }),
  endRound: () => post('/wallet/end-round', { sessionID: params.sessionID }),
  balance: () => post('/wallet/balance', { sessionID: params.sessionID }),
  event: (event) => post('/bet/event', { sessionID: params.sessionID, event }),
  async replay() {
    if (!params.rgsHost) throw new RgsError('NO_HOST', 'missing rgs_url');
    const path = `/bet/replay/${encodeURIComponent(params.game)}/${encodeURIComponent(params.version)}/${encodeURIComponent(params.mode)}/${encodeURIComponent(params.event)}`;
    let res; try { res = await fetch(rgsUrl(path)); } catch { throw new RgsError('NETWORK', 'network'); }
    if (!res.ok) throw new RgsError(`HTTP_${res.status}`, '', res.status);
    return res.json();
  },
};
