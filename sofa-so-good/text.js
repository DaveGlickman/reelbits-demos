// Sofa So Good: words on screen and the rules page. Social mode (XSC / XGC currencies) swaps money words for play words.
const DISCLAIMER_EN = 'Malfunction voids all wins and plays. A consistent internet connection is required. In the event of a disconnection, ' +
  'reload the game to finish any uncompleted rounds. The expected return is calculated over many plays. The game display is ' +
  'not representative of any physical device and is for illustrative purposes only. Winnings are settled according to the ' +
  'amount received from the Remote Game Server and not from events within the web browser. TM and © 2026 Engine.';

// RTP and maximum win per mode, from the publish files (math/library/verify_table.json); update when the maths changes
export const MODE_STATS = {
  FUTON: { name: 'The Futon', cost: 1, rtp: '96.50%', max: 4042.3 },
  THREE_SEATER: { name: 'The Three-Seater', cost: 1, rtp: '96.50%', max: 6088.8 },
  CHESTERFIELD: { name: 'The Chesterfield', cost: 1, rtp: '96.50%', max: 7241 },
  REMOTE_HUNT: { name: 'Remote Hunt', cost: 3, rtp: '96.50%', max: 9740.5 },
  DOWN_THE_BACK: { name: 'Down the Back', cost: 20, rtp: '96.50%', max: 23885.4 },
  MATCH_DAY: { name: 'Match Day', cost: 100, rtp: '96.50%', max: 4334.4 },
  CUP_FINAL: { name: 'Cup Final', cost: 300, rtp: '96.50%', max: 8205.2 },
  BIG_WIN: { name: 'The Big Win', cost: 1000, rtp: '96.50%', max: 25000 },
};
const base = {
  bet: 'BET', buy: 'BUY', coinsWord: 'pays', buyTitle: 'BUY A BONUS', confirmTitle: 'CONFIRM BONUS BUY', costWord: 'Total cost', cost: 'Costs',
  replayTitle: 'BET REPLAY', replayNote: 'This is a replay of a previous round. No bets will be placed.',
  rp: { mode: 'MODE', base: 'BASE BET', costMult: 'COST MULTIPLIER', total: 'TOTAL BET COST', payMult: 'PAYOUT MULTIPLIER', win: 'TOTAL WIN' },
  noFunds: 'Not enough balance for this bet.',
};
const social = {
  ...base, bet: 'PLAY AMOUNT', buy: 'FEATURES', coinsWord: 'scores', buyTitle: 'FEATURES', confirmTitle: 'CONFIRM FEATURE', costWord: 'Play amount', cost: 'Plays at',
  replayTitle: 'REPLAY', replayNote: 'This is a replay of a previous round. Nothing is played and your balance does not change.',
  rp: { mode: 'MODE', base: 'PLAY AMOUNT', costMult: 'PLAY MULTIPLIER', total: 'TOTAL PLAY', payMult: 'WIN MULTIPLIER', win: 'TOTAL WIN' },
  noFunds: 'Not enough balance for this play amount.',
};
function rules(T, s) {
  const amt = s ? 'play amount' : 'bet';
  const fx = (v) => v.toLocaleString('en-US', { maximumFractionDigits: 2 }) + 'x';
  // the RTP is always shown (Engine full review: never hide it, even when displayRTP is false)
  const table = `<table class="stats"><tr><th>Mode</th><th>${s ? 'Plays at' : 'Cost'}</th><th>RTP</th><th>Max win</th></tr>` +
    Object.values(MODE_STATS).map(m => `<tr><td>${m.name}</td><td>${m.cost}x</td><td>${m.rtp}</td><td>${fx(m.max)}</td></tr>`).join('') +
    `</table><p>The RTP (return to player) of every mode is 96.50%. Max win is a multiple of your ${amt}; no round can win more than 25,000x your ${amt}.</p>`;
  return `
${table}
<h3>The idea</h3>
<p>Gaz is asleep on his sofa, on top of a lost fortune. Press PLAY to dig down through the inside of the sofa: foam, crumbs and popcorn, lost socks and remotes, springs, floorboards, and five biscuit tins at the bottom.</p>
<h3>One round</h3>
<p>The five windows along the front of the sofa spin and stop. Each column gets what its window shows: nothing, a <b>glove</b> (digs 1 layer), a <b>coat hanger</b> (2 hits), a <b>vacuum nozzle</b> (digs to the crumbs, then clears that whole row in every column), a <b>crowbar</b> (smashes 6 deep, straight through the springs, to the tin), or <b>the dog</b> (digs his column all the way to the bottom and opens the tin). Springs take two hits from everything but the crowbar and the dog.</p>
<p>Every coin dug up goes into the pint glass. Every row cleared all the way across <b>doubles</b> the number on the TV. A biscuit tin that is opened <b>adds</b> its number to the TV.</p>
<h3>Wins</h3>
<p>Win = coins dug up x the TV's number x your ${amt}. Coins show their value as a multiple of your ${amt}. The TV starts at x1 every round.</p>
<h3>Coin and tin values</h3>
<table class="vals"><tr><th>Where</th><th>Coins (x your ${amt})</th><th>Tins (added to the TV)</th></tr>
<tr><td>The Futon</td><td>0.1, 0.2, 0.5, 1, 2</td><td>+1, +2, +3, or a remote</td></tr>
<tr><td>The Three-Seater</td><td>0.2, 0.5, 1, 2, 5</td><td>+1, +2, +4, +9, or a remote</td></tr>
<tr><td>The Chesterfield</td><td>0.5, 1, 2, 5, 10</td><td>+2, +4, +9, +24, +49, or a remote</td></tr>
<tr><td>Match Day</td><td>0.1, 0.2, 0.5, 1, 2, 5</td><td>as the sofa</td></tr>
<tr><td>Cup Final</td><td>0.2, 0.5, 1, 2, 5, 10</td><td>as the sofa</td></tr>
<tr><td>The Big Win</td><td>0.5, 1, 2, 5, 10, 25</td><td>as the sofa</td></tr></table>
<h3>Choose your sofa (before each round)</h3>
<p>Tap the sofa's name plate. <b>The Futon</b>: soft and shallow, small wins often. <b>The Three-Seater</b>: balanced. <b>The Chesterfield</b>: deep and stingy, with huge tins. Each sofa is its own game mode at 1x your ${amt}.</p>
<h3>Match Day (bonus)</h3>
<p>Remotes hide in the sofa and sometimes in a tin. Find <b>3 remotes</b> in one round to start <b>Match Day</b>; 4 start <b>Cup Final</b>; 5 or more start <b>The Big Win</b>. The bonus is played on a fresh sofa that stays as dug between drops, so every drop goes deeper. The TV is sticky: it only goes up. Every remote found adds a drop. Each drop ${T.coinsWord} the coins it digs up at the TV's number after that drop. Every bonus has at least one coin in its top layer, so it always ${s ? 'scores' : 'pays'} something.</p>
<p><b>Match Day</b>: 4 drops, the TV starts at x1. <b>Cup Final</b>: 4 drops, bigger coins, the TV starts at x2. <b>The Big Win</b>: 5 drops, gold coins, the TV starts at x3. The bonus win adds to the round's own win.</p>
<h3>${s ? 'Features' : 'Bought modes'}</h3>
<p><b>Remote Hunt</b> (${s ? 'plays at' : 'costs'} 3x your ${amt}): the Three-Seater with more remotes in it. <b>Down the Back</b> (20x): the Three-Seater packed with remotes, so the bonus starts about once in 13 rounds. <b>Match Day</b> (100x), <b>Cup Final</b> (300x) and <b>The Big Win</b> (1000x): that bonus on its own, on the Three-Seater; ${s ? 'it always scores something' : 'a bought bonus always pays something'}. ${s ? 'Every feature asks you to confirm before it starts.' : 'Every bought mode asks you to confirm before anything is taken from your balance.'}</p>
<h3>How the result is decided</h3>
<p>The outcome of every round is decided by the game server before it starts. What you see is a replay of that result: the tools, the dig and the TV always land on the amount shown.</p>
<h3>Controls</h3>
<p>PLAY (or the space bar) starts a round. − and + change the ${amt}. The name plate (top left on a phone) chooses the sofa. ${s ? 'FEATURES opens the features' : 'BUY opens the bonus buys'}. TURBO speeds the round up. AUTO asks how many rounds to play (10, 25, 50 or 100) and starts on START; press AUTO again to stop. ${s ? 'Every feature' : 'Every bought mode'} shows CONFIRM and CANCEL before anything starts. MENU opens HOW TO PLAY (these rules; CLOSE returns to the game), ALL SOUND (turns every sound, music included, on or off) and MUSIC (the music only).</p>
<h3>General disclaimer</h3>
<p>${DISCLAIMER_EN}</p>`;
}
export function makeText(isSocial) { const T = isSocial ? social : base; return { ...T, social: isSocial, rules: rules(T, isSocial) }; }
