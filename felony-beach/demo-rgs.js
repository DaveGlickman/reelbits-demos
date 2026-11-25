// Play-money stand-in for the game server, so this demo runs from any web host. Rounds are real rounds from the
// game's maths, picked by their real odds. Balance starts at $10,000 and resets on reload.
(function () {
  var RGS = 'https://demo-rgs.invalid';
  var q = new URLSearchParams(location.search);
  if (!q.get('sessionID')) {
    var mobile = matchMedia('(pointer:coarse)').matches || Math.min(innerWidth, innerHeight) < 600;
    q.set('sessionID', 'demo'); q.set('rgs_url', RGS); q.set('currency', 'USD'); q.set('lang', 'en');
    q.set('device', mobile ? 'mobile' : 'desktop'); q.set('social', 'false');
    history.replaceState(null, '', location.pathname + '?' + q.toString());
  }
  var LEVELS = [0.1, 0.2, 0.4, 0.6, 0.8, 1, 2, 4, 6, 8, 10, 20, 50, 100].map(function (v) { return Math.round(v * 1e6); });
  var MODES = [['STREET', 1], ['POLICE_SCANNER', 1.5], ['CHOP_SHOP', 60], ['THE_GETAWAY', 100], ['FREEWAY', 250], ['MOST_WANTED', 500]];
  var s = { balance: 10000e6, round: null, betID: 1 }, cache = {}, realFetch = window.fetch.bind(window);
  function load(mode) {
    if (!cache[mode]) cache[mode] = realFetch('./rounds/' + mode + '.json').then(function (r) { return r.json(); }).then(function (d) {
      var c = [], a = 0; d.w.forEach(function (x) { a += x; c.push(a); }); d.cum = c; d.tot = a; return d;
    });
    return cache[mode];
  }
  function reply(code, obj) { return new Response(JSON.stringify(obj), { status: code, headers: { 'Content-Type': 'application/json' } }); }
  function bal() { return { amount: s.balance, currency: 'USD' }; }
  async function api(p, data) {
    if (p === '/wallet/authenticate') {
      load(MODES[0][0]); // only the base game's rounds up front; the others load when first played
      var out = { balance: bal(), config: { minBet: LEVELS[0], maxBet: LEVELS[LEVELS.length - 1], stepBet: LEVELS[0], defaultBetLevel: 1e6, betLevels: LEVELS,
        gameModes: MODES.map(function (m) { return { mode: m[0], costMultiplier: m[1], maxBet: LEVELS[LEVELS.length - 1] }; }), user: { id: 'demo' },
        jurisdiction: { socialCasino: false, disabledFullscreen: false, disabledTurbo: false, disabledSuperTurbo: false, disabledAutoplay: false, disabledSlamstop: false,
          disabledSpacebar: false, disabledBuyFeature: false, displayNetPosition: false, displayRTP: false, displaySessionTimer: false, minimumRoundDuration: 0 } } };
      return reply(200, out);
    }
    if (p === '/wallet/balance') return reply(200, { balance: bal() });
    if (p === '/wallet/play') {
      var mode = data.mode, amount = data.amount, m = MODES.find(function (x) { return x[0] === mode; });
      if (!m) return reply(400, { error: 'ERR_VAL', message: 'unknown mode' });
      if (LEVELS.indexOf(amount) < 0) return reply(400, { error: 'ERR_VAL', message: 'invalid amount' });
      if (s.round) return reply(400, { error: 'ERR_VAL', message: 'round already active' });
      var cost = Math.round(amount * m[1]);
      if (s.balance < cost) return reply(400, { error: 'ERR_IPB', message: 'insufficient balance' });
      var d = await load(mode), x = Math.random() * d.tot, lo = 0, hi = d.cum.length - 1;
      while (lo < hi) { var mid = (lo + hi) >> 1; if (d.cum[mid] < x) lo = mid + 1; else hi = mid; }
      var b = d.books[lo]; s.balance -= cost;
      var r = { betID: s.betID++, amount: amount, payoutMultiplier: b.pm / 100, active: b.pm > 0, mode: mode, state: b.e, event: null, bookId: b.id };
      r.payout = Math.round(amount * r.payoutMultiplier);
      if (r.active) s.round = r;
      return reply(200, { balance: bal(), round: r });
    }
    if (p === '/wallet/end-round') {
      if (!s.round) return reply(400, { error: 'ERR_VAL', message: 'no active round' });
      s.balance += s.round.payout; s.round = null; return reply(200, { balance: bal() });
    }
    if (p === '/bet/event') return reply(200, { event: data.event });
    return reply(400, { error: 'ERR_VAL', message: 'unknown endpoint' });
  }
  window.fetch = function (url, opts) {
    var u = typeof url === 'string' ? url : url.url;
    if (u.indexOf(RGS) !== 0) return realFetch(url, opts);
    var data = {}; try { data = JSON.parse((opts && opts.body) || '{}'); } catch (e) {}
    return api(u.slice(RGS.length).split('?')[0], data);
  };
})();
