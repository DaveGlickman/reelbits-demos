import{M as r,V as i}from"./index-C_pLrqvT.js";const l=e=>`${(e/100).toLocaleString("en-US",{maximumFractionDigits:2})}x`;function c(e){const n=r.map(a=>`<tr><td>${a.name}</td><td>${a.cost}x</td><td>${a.rtp}</td><td>${a.max.toLocaleString("en-US")}x</td></tr>`).join(""),t=(a,s,o)=>`<tr><td><span class="capdot ${o}"></span>${a}</td><td>${s}</td><td>${i[o].map(l).join(", ")}</td></tr>`;return`
<h3>How to play</h3>
<p>Choose a machine, set your ${e.amount}, then press <b>DROP</b> (or the space bar, or tap the cabinet). Before you drop you can slide the claw left and right by dragging across the cabinet or with the arrow keys. This is for fun only: the capsules are sealed, and the claw's position never changes the result.</p>
<ol>
<li><b>The grab.</b> The claw drops into the cabinet and grabs 1 to 4 sealed capsules.</li>
<li><b>The wobble.</b> On its way to the chute the claw swings, and capsules can slip out, one at a time. Every capsule has the same chance to slip, whatever is inside. A Diamond or Black capsule first dangles on one prong, then either holds on or falls.</li>
<li><b>The chute.</b> Every capsule still in the claw drops into the chute and rolls onto the shelf.</li>
<li><b>The opening.</b> The capsules crack open one by one, lowest tier first (and lowest value first within a tier). Each one adds its prize to the win, so the win counter climbs capsule by capsule.</li>
</ol>
<p><b>Your win is the sum of all the capsules that are opened</b>, multiplied by your ${e.amount}. If no capsule reaches the chute, the round wins nothing. Every win is capped at the max win of 20,000x your ${e.amount}; when the cap is reached the round ends there.</p>

<h3>${e.prizes}</h3>
<table><tr><th>Capsule</th><th>Holds</th><th>Prize values (x ${e.amount})</th></tr>
${t("Bronze","casino chips","bronze")}
${t("Silver","banded bundles","silver")}
${t("Gold","watches and gold bars","gold")}
${t("Diamond","diamonds","diamond")}
${t("Black","the vault key","black")}
</table>
<p>The colour of a capsule shows its tier before it opens; its exact prize is revealed when it cracks open. Winning combinations are simply sums of these values, for example Bronze 0.5x + Silver 5x + Gold 20x = 25.5x.</p>

<h3>Features</h3>
<p><b>Golden Claw</b> (random, rare). The claw turns gold before a grab, grabs 5 to 8 capsules from the richer golden stock, and nothing can slip. It can light up on any grab, including the second grab of a Double Dip, and is guaranteed on every grab in the GOLDEN CLAW machine.</p>
<p><b>Magnet</b> (random). After the wobble, a magnet can pull the last capsule that slipped back into the claw. At most once per grab. It never works on the Golden Claw, because nothing slips from it.</p>
<p><b>Double Dip</b> (random). After the first grab has opened its capsules, the claw can go back for a second grab in the same round. Both grabs add to the same win. Double Dip can only trigger after the first grab: it never re-triggers.</p>

<h3>Machines</h3>
<table><tr><th>Machine</th><th>${e.modeCostHead}</th><th>RTP</th><th>Max win</th></tr>${n}</table>
<p><b>LOBBY MACHINE</b> (${e.costs(1)}): low volatility. A grippy claw and a cabinet of mostly Bronze and Silver: frequent small wins.</p>
<p><b>CASINO FLOOR</b> (${e.costs(1)}): medium volatility. More Gold and Diamond capsules, a slipperier claw.</p>
<p><b>PENTHOUSE</b> (${e.costs(1)}): high volatility. The slipperiest claw and the richest cabinet: wins are rarer (about 1 round in 2.7 delivers a capsule) and Diamond and Black capsules are far more common.</p>
<p><b>GOLDEN CLAW</b> (${e.costs(100)}): every grab is a Golden Claw: 5 to 8 capsules from the golden stock, and nothing slips. Asks you to confirm before each round.</p>
<p>The RTP (return to player) of every machine is 96.50%. The max win is 20,000x your ${e.amount} in every machine. RTP is calculated over many rounds.</p>

<h3>Buttons</h3>
<ul class="guide">
<li><b>DROP</b>: start a round (also the space bar, or a tap on the cabinet). During a round it speeds the round up to the result.</li>
<li><b>Machine buttons</b>: choose LOBBY MACHINE, CASINO FLOOR, PENTHOUSE or GOLDEN CLAW.</li>
<li><b>&minus; / +</b>: lower or raise your ${e.amount}.</li>
<li><b>Autoplay</b> (circular arrows): play a chosen number of rounds automatically after you confirm. Press STOP to end it.</li>
<li><b>Turbo</b> (lightning): faster animations. Wins are still shown in full.</li>
<li><b>Sound</b> (speaker): sound on or off.</li>
<li><b>i</b>: these rules. The <b>X</b> in the corner closes them.</li>
<li><b>Drag across the cabinet</b> or use the <b>arrow keys</b>: slide the claw before you drop (for show only).</li>
</ul>

<h3>Replays</h3>
<p>A replay shows the round's ${e.amount}, every grab, slip and capsule, and the win exactly as it happened. The claw always starts from the centre in a replay, because where the claw was slid is for show only and is not recorded.</p>

<h3>General disclaimer</h3>
<p>Malfunction voids all wins and plays. A consistent internet connection is required. In the event of a disconnection, reload the game to finish any uncompleted rounds. The expected return is calculated over many plays. The game display is not representative of any physical device and is for illustrative purposes only. Winnings are settled according to the amount received from the Remote Game Server and not from events within the web browser. TM and © 2026 Engine.</p>
`}export{c as r};
