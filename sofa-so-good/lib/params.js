// Launch parameters Engine adds to the game URL. Nothing here is hardcoded: the RGS host
// always comes from rgs_url.
const q = new URLSearchParams(window.location.search);

function host(raw) {
  if (!raw) return '';
  const h = raw.trim().replace(/^https?:\/\//i, '').replace(/\/+$/, '');
  return h;
}

export const params = {
  sessionID: q.get('sessionID') ?? '',
  rgsHost: host(q.get('rgs_url')),
  lang: (q.get('lang') ?? 'en').toLowerCase(),
  currency: (q.get('currency') ?? '').toUpperCase(),
  device: q.get('device') ?? '',
  social: (q.get('social') ?? '').toLowerCase() === 'true',
  demo: (q.get('demo') ?? '').toLowerCase() === 'true',
  replay: (q.get('replay') ?? '').toLowerCase() === 'true',
  game: q.get('game') ?? '',
  version: q.get('version') ?? '',
  mode: q.get('mode') ?? '',
  event: q.get('event') ?? '',
  amount: Number(q.get('amount') ?? ''),
};

export function rgsUrl(path) {
  // a local mock server (this Mac, or this Mac seen from a phone on the same Wi-Fi) is plain http;
  // every real RGS host is https
  const local = /^(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+)(:\d+)?$/.test(params.rgsHost);
  return `${local ? 'http' : 'https'}://${params.rgsHost}${path}`;
}
