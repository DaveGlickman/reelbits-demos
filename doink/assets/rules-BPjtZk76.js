import{M as i}from"./index-CG-h75s3.js";const l="Malfunction voids all wins and plays. A consistent internet connection is required. In the event of a disconnection, reload the game to finish any uncompleted rounds. The expected return is calculated over many plays. The game display is not representative of any physical device and is for illustrative purposes only. Winnings are settled according to the amount received from the Remote Game Server and not from events within the web browser. TM and © 2026 Engine.",n=t=>`${(t/100).toLocaleString("en-US",{maximumFractionDigits:2})}x`;function b(t){const o=t.amount,s={"30_YARDS":"Chip shot. Most kicks win something. GOOD wins 0.8x, bumpers +1 or +2.","45_YARDS":"The balanced kick. GOOD wins 1.5x, bumpers +1, +2, +3 or +5.","60_YARDS":"A long bomb. Fewer straight GOODs, longer and richer doink sequences. GOOD wins 3x, bumpers +2, +3, +5 or +10.",GOLDEN_BOOT:`${t.costs(100)[0].toUpperCase()+t.costs(100).slice(1)} and starts a Golden Boot run every time.`},r=i.map(e=>`<tr><td><b>${e.name}</b></td><td>${e.cost}x</td><td>${e.rtp}</td><td>${e.max.toLocaleString("en-US")}x${e.cost>1?` (${(e.max/e.cost).toLocaleString("en-US")}x the ${e.cost}x)`:""}</td><td>${s[e.key]}</td></tr>`).join(""),a=i.filter(e=>e.cost===1).map(e=>`${e.name} ${n(e.base)} x ${1+8*Math.max(...e.bumpers)} = ${n(e.base*(1+8*Math.max(...e.bumpers)))}`).join("; ");return`
<h3>How to play</h3>
<p>Choose a distance, set your ${o} and press <b>BOOT IT</b> (or the space bar, or swipe up on the field). The kicker takes the kick.
Everything that happens is decided by the game server the moment the round starts; the kick on screen only shows it.
How you swipe or tap never changes the result.</p>
<h3>The kick</h3>
<ul>
<li><b>Bonks</b>: in flight the ball may hit the <b>DRONE (0.2x)</b>, the <b>BLIMP (0.5x)</b> or the <b>SCOREBOARD (1x)</b>.
The prize is added to your win and the ball is knocked back toward the posts. A kick can bonk up to two things.</li>
<li><b>GOOD</b>: the ball goes straight through and wins the distance's base win: 30 YARDS 0.8x, 45 YARDS 1.5x, 60 YARDS 3x.</li>
<li><b>MISS</b>: wide left, wide right, short, blocked by a leaping lineman, or into the band. A miss wins nothing (bonk prizes are kept).</li>
<li><b>DOINK!</b>: the ball hits the frame and bounces around it 1 to 8 times. The <b>DOINK METER</b> starts at x1.
Every bounce lights a bumper showing <b>+N</b>: the meter goes up by N and the bounce wins N x 0.1x straight away.
If the ball then <b>drops through</b>, you also win <b>base win x meter</b>. If it <b>drops out</b>, you keep what the bounces won.</li>
</ul>
<p>Your win for the round = all bonk prizes + the GOOD or doink wins, multiplied by your ${o}. The win counter climbs with every prize.</p>
<h3>Golden Boot</h3>
<ul>
<li>In 30, 45 and 60 YARDS the boot can catch fire (rarely) before the kick. That kick becomes a <b>Golden Boot run</b>.
In the GOLDEN BOOT mode every round is a Golden Boot run.</li>
<li>The run starts from 30 yards. Base win 1x, bumpers +1, +2, +3 or +5, bonks as above.</li>
<li>The <b>first kick of a run always scores</b> (GOOD or doink drop-through).</li>
<li>Every <b>make</b> (GOOD or drop-through) adds that kick's win to the <b>BANK</b>, then the whole bank <b>doubles</b> and the kicker moves back 10 yards.</li>
<li>The first kick that is not a make (a miss or a doink drop-out) ends the run. Its bonk and bounce prizes are still added. The bank is your win.</li>
<li>A Golden Boot cannot start again inside a run, and nothing carries over to the next round.</li>
</ul>
<h3>Max win</h3>
<p>The maximum win is <b>25,000x your ${o}</b> in every mode. If the win reaches it, the round ends at once and 25,000x is won.</p>
<h3>Distances</h3>
<table><tr><th>Mode</th><th>${t.modeCostHead}</th><th>RTP</th><th>Max win</th><th>What it does</th></tr>${r}</table>
<p>GOLDEN BOOT asks you to confirm every round because it ${t.costs(100)}. The RTP (return to player) of every mode is 96.50%.</p>
<h3>All prize values</h3>
<ul>
<li>Bonks: DRONE 0.2x, BLIMP 0.5x, SCOREBOARD 1x.</li>
<li>GOOD: 30 YARDS 0.8x, 45 YARDS 1.5x, 60 YARDS 3x, Golden Boot run 1x.</li>
<li>Bumper bounces: +1 = 0.1x, +2 = 0.2x, +3 = 0.3x, +5 = 0.5x, +10 = 1x.</li>
<li>Bumpers by distance: 30 YARDS +1, +2; 45 YARDS +1, +2, +3, +5; 60 YARDS +2, +3, +5, +10; Golden Boot +1, +2, +3, +5.</li>
<li>Drop-through: base win x meter (meter x2 up to x81). Highest single drop-through: ${a}.</li>
<li>Golden Boot bank: doubles after every make. Max win 25,000x.</li>
</ul>
<h3>Examples</h3>
<ul>
<li>45 YARDS: bonks the BLIMP (0.5x), then GOOD (1.5x). Win 2x.</li>
<li>30 YARDS: DOINK +1, +2 (0.1x + 0.2x, meter x4), drops through: 0.8x x 4 = 3.2x. Win 3.5x.</li>
<li>60 YARDS: DOINK +10, +5, +3 (1x + 0.5x + 0.3x, meter x19), drops out. Win 1.8x.</li>
<li>Golden Boot: GOOD 1x, bank (0 + 1) x 2 = 2x. Next kick DOINK +2 (0.2x, meter x3) drops through 3x: bank (2 + 0.2 + 3) x 2 = 10.4x. Next kick misses. Win 10.4x.</li>
<li>Any distance: wide left with no bonk. Win 0.</li>
</ul>
<h3>Buttons</h3>
<ul>
<li><b>BOOT IT</b> (or space bar, or swipe up on the field): take the kick. While a kick is playing, pressing it again speeds the round up.</li>
<li><b>30 / 45 / 60 / GOLDEN BOOT</b>: choose the distance (mode).</li>
<li><b>- / +</b>: lower or raise your ${o} through the available levels.</li>
<li><b>Autoplay</b> (circling arrows): choose a number of kicks and confirm to start. <b>STOP</b> ends it.</li>
<li><b>Turbo</b> (lightning bolt): plays rounds faster. Wins are still shown clearly.</li>
<li><b>Sound</b> (speaker): turns all sound on or off.</li>
<li><b>Info</b> (i): opens these rules. <b>X</b> closes them.</li>
<li><b>GOLDEN BOOT confirm</b>: <b>KICK IT</b> starts the round, <b>CANCEL</b> goes back without playing.</li>
<li><b>Replays</b>: a shared replay shows <b>PLAY</b>, then <b>PLAY AGAIN</b> to watch it again. Replays never ${t.replayNever}.</li>
<li><b>Balance</b>, <b>${t.Amount}</b> and <b>Win</b> are shown at the bottom. The counter at the top climbs with every prize and shows the final win.</li>
</ul>
<h3>General disclaimer</h3>
<p>${l}</p>`}export{b as r};
