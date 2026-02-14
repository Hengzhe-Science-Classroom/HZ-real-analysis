window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch00',
    number: 0,
    title: 'The Natural Numbers & Induction',
    subtitle: 'Building the foundations: Peano axioms, the principle of induction, and recursive definitions on the natural numbers.',
    sections: [
        // ============================================================
        // SECTION 1: The Peano Axioms
        // ============================================================
        {
            id: 'ch00-sec01',
            title: 'The Peano Axioms',
            content: `
                <h2>The Peano Axioms</h2>

                <div class="env-block intuition">
                    <div class="env-title">Why Do We Care?</div>
                    <div class="env-body">
                        <p>You have been using natural numbers since childhood: \\(0, 1, 2, 3, \\ldots\\) They seem so obvious that asking "what <em>are</em> they?" feels absurd. But mathematics demands precision. If we want to <em>prove</em> theorems about all real numbers, we need an unshakeable foundation, and that foundation begins with the natural numbers.</p>
                        <p>The approach we take, following Tao's <em>Analysis I</em>, is <strong>axiomatic</strong>: we lay down a small list of rules (axioms) and derive everything else from them. The payoff is enormous: every arithmetic fact you have ever used becomes a <em>theorem</em>, not an assumption.</p>
                    </div>
                </div>

                <h3>The Informal Picture</h3>

                <p>Intuitively, the natural numbers are produced by starting at \\(0\\) and repeatedly applying a "next" operation:</p>
                <p style="text-align:center; font-size:1.15em; color:var(--accent-teal);">
                    \\(0 \\;\\longrightarrow\\; 1 \\;\\longrightarrow\\; 2 \\;\\longrightarrow\\; 3 \\;\\longrightarrow\\; 4 \\;\\longrightarrow\\; \\cdots\\)
                </p>
                <p>We call this "next" operation the <strong>successor function</strong>, written \\(S(n)\\) or \\(n\\!+\\!+\\) (Tao's notation) or \\(n'\\). So \\(S(0) = 1\\), \\(S(1) = 2\\), and so on. The Peano axioms make this precise.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.1 (Peano Axioms)</div>
                    <div class="env-body">
                        <p>The <strong>natural numbers</strong> are a set \\(\\mathbb{N}\\) together with a distinguished element \\(0 \\in \\mathbb{N}\\) and a function \\(S : \\mathbb{N} \\to \\mathbb{N}\\) (the <strong>successor function</strong>) satisfying:</p>
                        <ol>
                            <li><strong>(Axiom 1)</strong> \\(0\\) is a natural number.</li>
                            <li><strong>(Axiom 2)</strong> If \\(n\\) is a natural number, then \\(S(n)\\) is a natural number.</li>
                            <li><strong>(Axiom 3)</strong> \\(S(n) \\neq 0\\) for every natural number \\(n\\). <em>(Zero is not the successor of anything.)</em></li>
                            <li><strong>(Axiom 4)</strong> If \\(S(n) = S(m)\\), then \\(n = m\\). <em>(\\(S\\) is injective: different numbers have different successors.)</em></li>
                            <li><strong>(Axiom 5 &mdash; Induction)</strong> Let \\(P(n)\\) be a property pertaining to natural numbers. Suppose \\(P(0)\\) is true, and suppose that whenever \\(P(n)\\) is true, \\(P(S(n))\\) is also true. Then \\(P(n)\\) is true for every natural number \\(n\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Why do we need Axiom 5? Without it, there could be "rogue" elements in \\(\\mathbb{N}\\) that are not reachable from \\(0\\) by applying \\(S\\) finitely many times. The induction axiom rules this out: every natural number is obtained from \\(0\\) by applying \\(S\\) some finite number of times.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="successor-chain"></div>

                <h3>Why Axiom 3 and Axiom 4 Matter</h3>

                <p>Axiom 3 prevents the numbers from "looping back" to \\(0\\). Without it, we could have a system like \\(\\{0, 1, 2\\}\\) with \\(S(2) = 0\\), which would be a finite cycle, not an infinite sequence.</p>

                <p>Axiom 4 (injectivity) prevents "merging": without it, we could have \\(S(2) = S(5)\\) even though \\(2 \\neq 5\\), which would create a bizarre collapse in the number system.</p>

                <div class="env-block example">
                    <div class="env-title">Example 0.2</div>
                    <div class="env-body">
                        <p>Consider the set \\(\\{0, 1, 2, 3\\}\\) with \\(S(0) = 1,\\; S(1) = 2,\\; S(2) = 3,\\; S(3) = 1\\). This satisfies Axioms 1, 2, and 4 but violates Axiom 3 (since \\(S(3) = 1 \\neq 0\\), actually Axiom 3 is satisfied here!) and Axiom 5. The element \\(0\\) is unreachable from \\(1\\) by applying \\(S\\) &mdash; the system has a "loop" that induction cannot penetrate. More precisely: let \\(P(n)\\) be "\\(n\\) can be reached from \\(0\\)." Then \\(P(0)\\) holds, and if \\(P(n)\\) holds then \\(P(S(n))\\) holds, so by induction \\(P(n)\\) holds for all \\(n\\). This forces the entire set to be reachable from \\(0\\), which is incompatible with the loop \\(1 \\to 2 \\to 3 \\to 1\\) co-existing with the chain \\(0 \\to 1\\). Hence this system does not actually satisfy all five Peano axioms.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">The Big Picture</div>
                    <div class="env-body">
                        <p>The Peano axioms say that \\(\\mathbb{N}\\) looks like a single infinite chain starting at \\(0\\): no loops, no forks, no extra islands. This is the <em>only</em> structure (up to isomorphism) that satisfies all five axioms.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="peano-axiom-explorer"></div>

                <div class="env-block warning">
                    <div class="env-title">Convention</div>
                    <div class="env-body">
                        <p>Some authors start the natural numbers at \\(1\\) instead of \\(0\\). In this course, following Tao, we always have \\(0 \\in \\mathbb{N}\\). The choice is a convention; the mathematics works either way, but you should be aware of which convention a given text uses.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'successor-chain',
                    title: 'The Successor Chain',
                    description: 'Watch natural numbers being generated by the successor function. Each number is produced from the previous one.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 200, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var maxN = 8;
                        var animProgress = 0;
                        var lastTime = null;
                        var paused = false;

                        VizEngine.createButton(controls, 'Restart', function() { animProgress = 0; lastTime = null; });
                        VizEngine.createButton(controls, 'Pause / Play', function() { paused = !paused; });

                        function draw(t) {
                            if (lastTime === null) lastTime = t;
                            var dt = (t - lastTime) / 1000;
                            lastTime = t;
                            if (!paused && animProgress < maxN + 1) {
                                animProgress += dt * 0.8;
                            }

                            viz.clear();
                            var revealed = Math.min(Math.floor(animProgress), maxN);
                            var frac = animProgress - Math.floor(animProgress);

                            var spacing = 75;
                            var startX = 40;
                            var cy = 100;

                            // Draw revealed nodes and arrows
                            for (var i = 0; i <= revealed; i++) {
                                var cx = startX + i * spacing;

                                // Arrow from previous node
                                if (i > 0) {
                                    var fromX = startX + (i - 1) * spacing + 22;
                                    var toX = cx - 22;
                                    ctx.strokeStyle = viz.colors.teal;
                                    ctx.lineWidth = 2;
                                    ctx.beginPath();
                                    ctx.moveTo(fromX, cy);
                                    ctx.lineTo(toX, cy);
                                    ctx.stroke();
                                    // Arrowhead
                                    ctx.fillStyle = viz.colors.teal;
                                    ctx.beginPath();
                                    ctx.moveTo(toX, cy);
                                    ctx.lineTo(toX - 8, cy - 5);
                                    ctx.lineTo(toX - 8, cy + 5);
                                    ctx.closePath();
                                    ctx.fill();
                                    // Label "S" above arrow
                                    ctx.fillStyle = viz.colors.teal;
                                    ctx.font = 'italic 12px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'bottom';
                                    ctx.fillText('S', (fromX + toX) / 2, cy - 8);
                                }

                                // Node circle
                                ctx.fillStyle = i === 0 ? viz.colors.orange : viz.colors.blue;
                                ctx.beginPath();
                                ctx.arc(cx, cy, 20, 0, Math.PI * 2);
                                ctx.fill();

                                // Number label
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = 'bold 16px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(String(i), cx, cy);
                            }

                            // Partially appearing next node
                            if (revealed < maxN) {
                                var nextX = startX + (revealed + 1) * spacing;
                                var prevX = startX + revealed * spacing + 22;
                                var alpha = Math.max(0, Math.min(1, frac));

                                ctx.globalAlpha = alpha;
                                // Arrow
                                var arrowToX = nextX - 22;
                                ctx.strokeStyle = viz.colors.teal;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.moveTo(prevX, cy);
                                ctx.lineTo(prevX + (arrowToX - prevX) * alpha, cy);
                                ctx.stroke();
                                ctx.globalAlpha = 1;
                            }

                            // Dots at end
                            if (revealed >= maxN) {
                                var dotsX = startX + (maxN + 1) * spacing - 15;
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = 'bold 24px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.textBaseline = 'middle';
                                ctx.fillText('...', dotsX, cy);
                            }

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('The Successor Chain:  0  \u2192  S(0) = 1  \u2192  S(1) = 2  \u2192  ...', viz.width / 2, 15);

                            // Bottom label
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('Each number is uniquely produced by applying S to the previous one (Axioms 2, 3, 4)', viz.width / 2, viz.height - 10);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'peano-axiom-explorer',
                    title: 'Axiom Explorer: What Goes Wrong Without Each Axiom?',
                    description: 'Toggle axioms on and off to see what pathological number systems could arise.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 300, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var mode = 'normal'; // 'normal', 'no-axiom3', 'no-axiom4'

                        VizEngine.createButton(controls, 'All Axioms (Normal)', function() { mode = 'normal'; draw(); });
                        VizEngine.createButton(controls, 'Without Axiom 3 (Loop)', function() { mode = 'no-axiom3'; draw(); });
                        VizEngine.createButton(controls, 'Without Axiom 4 (Merge)', function() { mode = 'no-axiom4'; draw(); });

                        function draw() {
                            viz.clear();
                            var spacing = 70;
                            var startX = 50;
                            var cy = 150;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';

                            if (mode === 'normal') {
                                ctx.fillText('Normal: an infinite chain (all Peano axioms satisfied)', viz.width / 2, 15);

                                for (var i = 0; i <= 8; i++) {
                                    var cx = startX + i * spacing;
                                    // Arrow
                                    if (i > 0) {
                                        drawArrow(ctx, startX + (i - 1) * spacing + 18, cy, cx - 18, cy, viz.colors.teal);
                                    }
                                    // Node
                                    ctx.fillStyle = i === 0 ? viz.colors.orange : viz.colors.blue;
                                    ctx.beginPath();
                                    ctx.arc(cx, cy, 16, 0, Math.PI * 2);
                                    ctx.fill();
                                    ctx.fillStyle = viz.colors.white;
                                    ctx.font = 'bold 14px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText(String(i), cx, cy);
                                }
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = 'bold 20px -apple-system,sans-serif';
                                ctx.fillText('...', startX + 9 * spacing - 20, cy);

                                ctx.fillStyle = viz.colors.green;
                                ctx.font = '14px -apple-system,sans-serif';
                                ctx.textBaseline = 'top';
                                ctx.fillText('No loops, no merges, goes on forever.', viz.width / 2, cy + 50);
                            }
                            else if (mode === 'no-axiom3') {
                                ctx.fillText('Without Axiom 3: S can map back to 0 (creating a loop)', viz.width / 2, 15);

                                var loopSize = 5;
                                var cxCenter = viz.width / 2;
                                var cyCenter = 160;
                                var radius = 90;

                                for (var j = 0; j < loopSize; j++) {
                                    var angle = -Math.PI / 2 + (j / loopSize) * 2 * Math.PI;
                                    var nx = cxCenter + radius * Math.cos(angle);
                                    var ny = cyCenter + radius * Math.sin(angle);

                                    // Arrow to next
                                    var nextAngle = -Math.PI / 2 + ((j + 1) / loopSize) * 2 * Math.PI;
                                    var nnx = cxCenter + radius * Math.cos(nextAngle);
                                    var nny = cyCenter + radius * Math.sin(nextAngle);
                                    var dx = nnx - nx, dy = nny - ny;
                                    var len = Math.sqrt(dx * dx + dy * dy);
                                    var ux = dx / len, uy = dy / len;
                                    drawArrow(ctx, nx + ux * 20, ny + uy * 20, nnx - ux * 20, nny - uy * 20, viz.colors.red);

                                    // Node
                                    ctx.fillStyle = j === 0 ? viz.colors.orange : viz.colors.purple;
                                    ctx.beginPath();
                                    ctx.arc(nx, ny, 18, 0, Math.PI * 2);
                                    ctx.fill();
                                    ctx.fillStyle = viz.colors.white;
                                    ctx.font = 'bold 14px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText(String(j), nx, ny);
                                }

                                ctx.fillStyle = viz.colors.red;
                                ctx.font = '14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'top';
                                ctx.fillText('S(4) = 0 violates Axiom 3: the chain loops back!', viz.width / 2, cyCenter + radius + 30);
                            }
                            else if (mode === 'no-axiom4') {
                                ctx.fillText('Without Axiom 4: two different numbers can share a successor (merge)', viz.width / 2, 15);

                                // Draw a Y-shape: two branches merging
                                var branchY1 = 100;
                                var branchY2 = 200;
                                var mergeX = 350;
                                var mergeY = 150;

                                // Branch 1: 0 -> 1 -> 2 --\
                                for (var b1 = 0; b1 < 3; b1++) {
                                    var b1x = 50 + b1 * 80;
                                    if (b1 > 0) drawArrow(ctx, 50 + (b1 - 1) * 80 + 18, branchY1, b1x - 18, branchY1, viz.colors.teal);
                                    ctx.fillStyle = b1 === 0 ? viz.colors.orange : viz.colors.blue;
                                    ctx.beginPath();
                                    ctx.arc(b1x, branchY1, 16, 0, Math.PI * 2);
                                    ctx.fill();
                                    ctx.fillStyle = viz.colors.white;
                                    ctx.font = 'bold 14px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText(String(b1), b1x, branchY1);
                                }

                                // Branch 2: a -> b
                                var labels2 = ['a', 'b'];
                                for (var b2 = 0; b2 < 2; b2++) {
                                    var b2x = 100 + b2 * 80;
                                    if (b2 > 0) drawArrow(ctx, 100 + (b2 - 1) * 80 + 18, branchY2, b2x - 18, branchY2, viz.colors.teal);
                                    ctx.fillStyle = viz.colors.purple;
                                    ctx.beginPath();
                                    ctx.arc(b2x, branchY2, 16, 0, Math.PI * 2);
                                    ctx.fill();
                                    ctx.fillStyle = viz.colors.white;
                                    ctx.font = 'bold 14px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText(labels2[b2], b2x, branchY2);
                                }

                                // Both branches merge into node "3" at mergeX, mergeY
                                drawArrow(ctx, 210 + 18, branchY1, mergeX - 18, mergeY - 5, viz.colors.red);
                                drawArrow(ctx, 180 + 18, branchY2, mergeX - 18, mergeY + 5, viz.colors.red);

                                ctx.fillStyle = viz.colors.red;
                                ctx.beginPath();
                                ctx.arc(mergeX, mergeY, 18, 0, Math.PI * 2);
                                ctx.fill();
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText('3', mergeX, mergeY);

                                // Continue after merge
                                for (var m = 1; m <= 3; m++) {
                                    var mx = mergeX + m * 80;
                                    drawArrow(ctx, mergeX + (m - 1) * 80 + 18, mergeY, mx - 18, mergeY, viz.colors.teal);
                                    ctx.fillStyle = viz.colors.blue;
                                    ctx.beginPath();
                                    ctx.arc(mx, mergeY, 16, 0, Math.PI * 2);
                                    ctx.fill();
                                    ctx.fillStyle = viz.colors.white;
                                    ctx.font = 'bold 14px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText(String(3 + m), mx, mergeY);
                                }
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = 'bold 18px -apple-system,sans-serif';
                                ctx.fillText('...', mergeX + 4 * 80 - 20, mergeY);

                                ctx.fillStyle = viz.colors.red;
                                ctx.font = '14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'top';
                                ctx.fillText('S(2) = S(b) = 3, but 2 \u2260 b. Axiom 4 prevents this!', viz.width / 2, mergeY + 80);
                            }
                        }

                        function drawArrow(ctx, x1, y1, x2, y2, color) {
                            var dx = x2 - x1, dy = y2 - y1;
                            var len = Math.sqrt(dx * dx + dy * dy);
                            if (len < 1) return;
                            var angle = Math.atan2(dy, dx);
                            ctx.strokeStyle = color;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(x1, y1);
                            ctx.lineTo(x2, y2);
                            ctx.stroke();
                            ctx.fillStyle = color;
                            ctx.beginPath();
                            ctx.moveTo(x2, y2);
                            ctx.lineTo(x2 - 8 * Math.cos(angle - 0.35), y2 - 8 * Math.sin(angle - 0.35));
                            ctx.lineTo(x2 - 8 * Math.cos(angle + 0.35), y2 - 8 * Math.sin(angle + 0.35));
                            ctx.closePath();
                            ctx.fill();
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'State which Peano axiom is violated in the following system: \\(\\mathbb{N} = \\{0\\}\\) with \\(S(0) = 0\\).',
                    hint: 'What does Axiom 3 say about \\(S(n)\\) and \\(0\\)?',
                    solution: '<strong>Axiom 3</strong> is violated: it requires \\(S(n) \\neq 0\\) for every \\(n\\), but here \\(S(0) = 0\\). Note that Axiom 5 (induction) would also be problematic, since the property "\\(n \\neq S(n)\\)" should be provable for genuine natural numbers.'
                },
                {
                    question: 'Consider the system \\(\\{0, 1, 2, 3, \\ldots\\} \\cup \\{\\omega\\}\\) where \\(S(n) = n+1\\) for every ordinary natural number and \\(S(\\omega) = \\omega\\). Which axiom fails?',
                    hint: 'Is \\(\\omega\\) reachable from \\(0\\) by applying \\(S\\) finitely many times? Also, does injectivity hold?',
                    solution: '<strong>Axiom 4</strong> fails since \\(S(\\omega) = \\omega\\) would mean (if we tried to also keep the standard chain) that \\(S\\) is not injective once we account for all elements. More fundamentally, <strong>Axiom 5 (induction)</strong> fails: the property \\(P(n) = \\text{"} n \\neq \\omega \\text{"}\\) is true for \\(0\\) and preserved by \\(S\\), yet \\(P(\\omega)\\) is false.'
                },
                {
                    question: 'Prove from the Peano axioms that \\(4 \\neq 0\\). (Here \\(4 = S(S(S(S(0))))\\).)',
                    hint: 'You only need Axiom 3. What does it say about any \\(S(n)\\)?',
                    solution: 'Since \\(4 = S(3)\\), Axiom 3 directly gives \\(S(3) \\neq 0\\), i.e., \\(4 \\neq 0\\).'
                },
                {
                    question: 'Prove that \\(S(S(0)) \\neq S(0)\\) using the Peano axioms.',
                    hint: 'Apply Axiom 4 contrapositively: if \\(S(n) = S(m)\\) then \\(n = m\\).',
                    solution: 'Suppose for contradiction that \\(S(S(0)) = S(0)\\). By Axiom 4 (injectivity), this implies \\(S(0) = 0\\). But this contradicts Axiom 3 (\\(S(n) \\neq 0\\) for all \\(n\\)). Hence \\(S(S(0)) \\neq S(0)\\), i.e., \\(2 \\neq 1\\).'
                },
                {
                    question: 'Why can we not prove the existence of \\(\\mathbb{N}\\) from the Peano axioms alone? What role does set theory play?',
                    hint: 'The Peano axioms tell us <em>properties</em> of \\(\\mathbb{N}\\), but do they guarantee a model exists?',
                    solution: 'The Peano axioms are <em>properties</em> that any model of the natural numbers must satisfy, but they do not by themselves guarantee that such a model exists. Existence is typically established within a set-theoretic framework (e.g., ZFC), where one constructs a set satisfying the Peano axioms &mdash; for instance, using the von Neumann ordinals: \\(0 = \\emptyset\\), \\(S(n) = n \\cup \\{n\\}\\). The Axiom of Infinity in ZFC ensures this construction yields an actual set.'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Mathematical Induction
        // ============================================================
        {
            id: 'ch00-sec02',
            title: 'Mathematical Induction',
            content: `
                <h2>Mathematical Induction</h2>

                <div class="env-block intuition">
                    <div class="env-title">The Domino Metaphor</div>
                    <div class="env-body">
                        <p>Imagine an infinite line of dominoes, one for each natural number. You want to knock them <em>all</em> down. You need two things:</p>
                        <ol>
                            <li><strong>Push the first domino.</strong> (Verify that \\(P(0)\\) holds.)</li>
                            <li><strong>Ensure each domino knocks down the next.</strong> (Show that \\(P(n) \\Rightarrow P(S(n))\\) for all \\(n\\).)</li>
                        </ol>
                        <p>If both conditions hold, every domino falls. This is the <em>principle of mathematical induction</em>, and it is not merely an analogy &mdash; it is Axiom 5 of Peano.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="domino-induction"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.3 (Principle of Induction)</div>
                    <div class="env-body">
                        <p>Let \\(P(n)\\) be a statement about natural numbers. Suppose:</p>
                        <ol>
                            <li><strong>Base case:</strong> \\(P(0)\\) is true.</li>
                            <li><strong>Inductive step:</strong> For every \\(n \\in \\mathbb{N}\\), if \\(P(n)\\) is true then \\(P(n+1)\\) is true.</li>
                        </ol>
                        <p>Then \\(P(n)\\) is true for all \\(n \\in \\mathbb{N}\\).</p>
                    </div>
                </div>

                <h3>The Anatomy of an Induction Proof</h3>

                <p>Every induction proof has the same skeleton:</p>
                <ol>
                    <li><strong>State what \\(P(n)\\) is.</strong> Be explicit.</li>
                    <li><strong>Base case:</strong> Verify \\(P(0)\\) (or \\(P(b)\\) if you start induction at \\(b\\)).</li>
                    <li><strong>Inductive hypothesis:</strong> Assume \\(P(n)\\) is true for some arbitrary \\(n \\geq 0\\).</li>
                    <li><strong>Inductive step:</strong> Using the hypothesis, prove \\(P(n+1)\\).</li>
                    <li><strong>Conclude:</strong> By induction, \\(P(n)\\) holds for all \\(n \\geq 0\\).</li>
                </ol>

                <div class="env-block example">
                    <div class="env-title">Example 0.4 (Sum of First \\(n\\) Natural Numbers)</div>
                    <div class="env-body">
                        <p><strong>Claim:</strong> For all \\(n \\in \\mathbb{N}\\),
                        \\[ \\sum_{k=0}^{n} k = \\frac{n(n+1)}{2}. \\]</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(P(n)\\) be the statement \\(\\sum_{k=0}^{n} k = \\frac{n(n+1)}{2}\\).</p>
                        <p><strong>Base case (\\(n = 0\\)):</strong> \\(\\sum_{k=0}^{0} k = 0 = \\frac{0 \\cdot 1}{2}\\). \\(\\checkmark\\)</p>
                        <p><strong>Inductive step:</strong> Assume \\(P(n)\\) holds, i.e., \\(\\sum_{k=0}^{n} k = \\frac{n(n+1)}{2}\\). Then:</p>
                        \\[ \\sum_{k=0}^{n+1} k = \\left(\\sum_{k=0}^{n} k\\right) + (n+1) = \\frac{n(n+1)}{2} + (n+1) = \\frac{n(n+1) + 2(n+1)}{2} = \\frac{(n+1)(n+2)}{2}. \\]
                        <p>This is exactly \\(P(n+1)\\). By induction, \\(P(n)\\) holds for all \\(n \\in \\mathbb{N}\\). \\(\\blacksquare\\)</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 0.5 (An Inequality)</div>
                    <div class="env-body">
                        <p><strong>Claim:</strong> For all \\(n \\geq 4\\), \\(2^n > n^2\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(P(n)\\) be \\(2^n > n^2\\) for \\(n \\geq 4\\).</p>
                        <p><strong>Base case (\\(n = 4\\)):</strong> \\(2^4 = 16 > 16 = 4^2\\). Actually \\(16 \\not> 16\\). Let us try \\(n = 5\\): \\(2^5 = 32 > 25 = 5^2\\). \\(\\checkmark\\)</p>
                        <p>More carefully, for \\(n = 4\\): \\(2^4 = 16 = 4^2\\), so the strict inequality \\(2^n > n^2\\) fails at \\(n = 4\\). We adjust: the claim holds for \\(n \\geq 5\\).</p>
                        <p><strong>Inductive step:</strong> Assume \\(2^n > n^2\\) for some \\(n \\geq 5\\). Then:</p>
                        \\[ 2^{n+1} = 2 \\cdot 2^n > 2n^2. \\]
                        <p>We need \\(2n^2 > (n+1)^2 = n^2 + 2n + 1\\), i.e., \\(n^2 > 2n + 1\\), i.e., \\(n^2 - 2n - 1 > 0\\). For \\(n \\geq 5\\), \\(n^2 - 2n - 1 \\geq 25 - 10 - 1 = 14 > 0\\). \\(\\checkmark\\)</p>
                        <p>By induction, \\(2^n > n^2\\) for all \\(n \\geq 5\\). \\(\\blacksquare\\)</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Common Mistake</div>
                    <div class="env-body">
                        <p>A frequent error: <strong>forgetting the base case</strong> or choosing the wrong one. Without a valid base case, the inductive step is meaningless. For example, the "proof" that all horses are the same color uses induction with a flawed base case transition from \\(n = 1\\) to \\(n = 2\\).</p>
                        <p>Another pitfall: using \\(P(n+1)\\) in the proof of the inductive step. You may only assume \\(P(n)\\) (or \\(P(k)\\) for \\(k \\leq n\\) in strong induction), not the thing you are trying to prove.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Induction Starting at \\(b \\neq 0\\)</div>
                    <div class="env-body">
                        <p>Induction need not start at \\(0\\). If you verify \\(P(b)\\) and prove \\(P(n) \\Rightarrow P(n+1)\\) for all \\(n \\geq b\\), you conclude \\(P(n)\\) for all \\(n \\geq b\\). This follows from standard induction applied to \\(Q(m) := P(m + b)\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'domino-induction',
                    title: 'Domino Induction',
                    description: 'Watch the chain reaction: push the first domino (base case) and each domino knocks down the next (inductive step).',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 280, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var numDominoes = 12;
                        var fallenCount = 0;
                        var animProgress = -1; // -1 = waiting, 0+ = which domino is falling
                        var fallAngles = [];
                        var lastTime = null;
                        var started = false;

                        for (var i = 0; i < numDominoes; i++) {
                            fallAngles.push(0);
                        }

                        VizEngine.createButton(controls, 'Push First Domino!', function() {
                            if (!started) {
                                started = true;
                                animProgress = 0;
                            }
                        });
                        VizEngine.createButton(controls, 'Reset', function() {
                            started = false;
                            animProgress = -1;
                            for (var r = 0; r < numDominoes; r++) fallAngles[r] = 0;
                            fallenCount = 0;
                            lastTime = null;
                        });

                        var maxAngle = Math.PI / 2 * 0.85;
                        var fallSpeed = 4.5;

                        function draw(t) {
                            if (lastTime === null) lastTime = t;
                            var dt = (t - lastTime) / 1000;
                            lastTime = t;

                            // Animate falling
                            if (started && animProgress >= 0 && animProgress < numDominoes) {
                                fallAngles[animProgress] += dt * fallSpeed;
                                if (fallAngles[animProgress] >= maxAngle) {
                                    fallAngles[animProgress] = maxAngle;
                                    animProgress++;
                                }
                            }

                            viz.clear();

                            // Ground line
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(20, 220);
                            ctx.lineTo(680, 220);
                            ctx.stroke();

                            var spacing = 50;
                            var baseX = 50;
                            var baseY = 220;
                            var domW = 10;
                            var domH = 60;

                            for (var d = 0; d < numDominoes; d++) {
                                var dx = baseX + d * spacing;
                                var angle = fallAngles[d];
                                var fallen = angle >= maxAngle;
                                var falling = angle > 0 && !fallen;

                                ctx.save();
                                ctx.translate(dx, baseY);
                                ctx.rotate(angle);

                                // Domino body
                                var color;
                                if (d === 0 && !started) {
                                    color = viz.colors.orange; // highlight "push me"
                                } else if (fallen) {
                                    color = viz.colors.green;
                                } else if (falling) {
                                    color = viz.colors.yellow;
                                } else {
                                    color = viz.colors.blue;
                                }

                                ctx.fillStyle = color;
                                ctx.fillRect(-domW / 2, -domH, domW, domH);
                                ctx.strokeStyle = viz.colors.white;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(-domW / 2, -domH, domW, domH);

                                // Label
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = 'bold 10px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(String(d), 0, -domH / 2);

                                ctx.restore();
                            }

                            // Labels
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Domino Induction', viz.width / 2, 8);

                            if (!started) {
                                ctx.fillStyle = viz.colors.orange;
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.fillText('Click "Push First Domino!" to start the base case', viz.width / 2, 240);
                            } else {
                                var stage = '';
                                if (animProgress === 0) {
                                    stage = 'Base case: P(0) is true, domino 0 is falling...';
                                } else if (animProgress < numDominoes) {
                                    stage = 'Inductive step: P(' + (animProgress - 1) + ') implies P(' + animProgress + '), domino ' + animProgress + ' falls...';
                                } else {
                                    stage = 'All dominoes have fallen! By induction, P(n) holds for all n.';
                                }
                                ctx.fillStyle = animProgress >= numDominoes ? viz.colors.green : viz.colors.teal;
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.fillText(stage, viz.width / 2, 240);
                            }

                            // "P(n)" labels below dominoes
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.text;
                            ctx.textBaseline = 'top';
                            for (var l = 0; l < Math.min(numDominoes, 10); l++) {
                                ctx.fillText('P(' + l + ')', baseX + l * spacing, baseY + 10);
                            }
                            if (numDominoes > 10) {
                                ctx.fillText('...', baseX + 10 * spacing, baseY + 10);
                            }
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove by induction that \\(\\displaystyle\\sum_{k=0}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}\\) for all \\(n \\geq 0\\).',
                    hint: 'For the inductive step, compute \\(\\sum_{k=0}^{n+1} k^2 = \\frac{n(n+1)(2n+1)}{6} + (n+1)^2\\) and simplify.',
                    solution: '<strong>Base case (\\(n=0\\)):</strong> \\(0 = 0\\). \\(\\checkmark\\)<br><strong>Inductive step:</strong> Assume the formula holds for \\(n\\). Then \\[\\sum_{k=0}^{n+1} k^2 = \\frac{n(n+1)(2n+1)}{6} + (n+1)^2 = \\frac{n(n+1)(2n+1) + 6(n+1)^2}{6} = \\frac{(n+1)[n(2n+1) + 6(n+1)]}{6} = \\frac{(n+1)(2n^2 + 7n + 6)}{6} = \\frac{(n+1)(n+2)(2n+3)}{6}.\\] This is the formula with \\(n\\) replaced by \\(n+1\\). \\(\\blacksquare\\)'
                },
                {
                    question: 'Prove that \\(n! > 2^n\\) for all \\(n \\geq 4\\).',
                    hint: 'Base case: \\(4! = 24 > 16 = 2^4\\). For the inductive step, use \\((n+1)! = (n+1) \\cdot n!\\) and the fact that \\(n+1 \\geq 5 > 2\\).',
                    solution: '<strong>Base case (\\(n=4\\)):</strong> \\(4! = 24 > 16 = 2^4\\). \\(\\checkmark\\)<br><strong>Inductive step:</strong> Assume \\(n! > 2^n\\) for some \\(n \\geq 4\\). Then \\((n+1)! = (n+1) \\cdot n! > (n+1) \\cdot 2^n \\geq 5 \\cdot 2^n > 2 \\cdot 2^n = 2^{n+1}\\), where we used \\(n+1 \\geq 5 > 2\\). \\(\\blacksquare\\)'
                },
                {
                    question: 'Prove that for all \\(n \\geq 1\\), \\(1 + 2 + 4 + \\cdots + 2^{n-1} = 2^n - 1\\).',
                    hint: 'This is \\(\\sum_{k=0}^{n-1} 2^k = 2^n - 1\\). Base case \\(n = 1\\): \\(2^0 = 1 = 2^1 - 1\\).',
                    solution: '<strong>Base case (\\(n=1\\)):</strong> \\(2^0 = 1 = 2 - 1\\). \\(\\checkmark\\)<br><strong>Inductive step:</strong> Assume \\(\\sum_{k=0}^{n-1} 2^k = 2^n - 1\\). Then \\(\\sum_{k=0}^{n} 2^k = (2^n - 1) + 2^n = 2 \\cdot 2^n - 1 = 2^{n+1} - 1\\). \\(\\blacksquare\\)'
                },
                {
                    question: 'Find the flaw in the following "proof" that all natural numbers are equal: <em>"Let \\(P(n)\\) be: in any set of \\(n\\) natural numbers, all elements are equal. Base case: \\(P(1)\\) is trivially true. Inductive step: assume \\(P(n)\\). Given a set \\(\\{a_1, \\ldots, a_{n+1}\\}\\), the first \\(n\\) elements are equal by \\(P(n)\\), and the last \\(n\\) elements are equal by \\(P(n)\\). Since these overlap, all \\(n+1\\) elements are equal."</em>',
                    hint: 'Does the overlap argument work when \\(n = 1\\)?',
                    solution: 'The flaw is in the step from \\(n = 1\\) to \\(n = 2\\). When \\(n = 1\\), the set \\(\\{a_1, a_2\\}\\) has "first 1 element" \\(= \\{a_1\\}\\) and "last 1 element" \\(= \\{a_2\\}\\). These two subsets <strong>do not overlap</strong>, so we cannot conclude \\(a_1 = a_2\\). The inductive step is invalid at this critical transition.'
                },
                {
                    question: 'Prove by induction that \\(\\displaystyle\\sum_{k=1}^{n} \\frac{1}{k(k+1)} = \\frac{n}{n+1}\\) for all \\(n \\geq 1\\).',
                    hint: 'Note that \\(\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}\\) (partial fractions). The inductive step adds \\(\\frac{1}{(n+1)(n+2)}\\) to \\(\\frac{n}{n+1}\\).',
                    solution: '<strong>Base case (\\(n=1\\)):</strong> \\(\\frac{1}{1 \\cdot 2} = \\frac{1}{2} = \\frac{1}{2}\\). \\(\\checkmark\\)<br><strong>Inductive step:</strong> Assume \\(\\sum_{k=1}^{n} \\frac{1}{k(k+1)} = \\frac{n}{n+1}\\). Then \\[\\sum_{k=1}^{n+1} \\frac{1}{k(k+1)} = \\frac{n}{n+1} + \\frac{1}{(n+1)(n+2)} = \\frac{n(n+2) + 1}{(n+1)(n+2)} = \\frac{n^2 + 2n + 1}{(n+1)(n+2)} = \\frac{(n+1)^2}{(n+1)(n+2)} = \\frac{n+1}{n+2}.\\] \\(\\blacksquare\\)'
                },
                {
                    question: 'Prove the <strong>Bernoulli inequality</strong>: for all \\(n \\geq 0\\) and \\(x \\geq -1\\), \\((1 + x)^n \\geq 1 + nx\\).',
                    hint: 'Induct on \\(n\\). For the inductive step, multiply both sides of the hypothesis by \\((1+x) \\geq 0\\).',
                    solution: '<strong>Base case (\\(n=0\\)):</strong> \\((1+x)^0 = 1 \\geq 1 + 0 = 1\\). \\(\\checkmark\\)<br><strong>Inductive step:</strong> Assume \\((1+x)^n \\geq 1 + nx\\). Since \\(x \\geq -1\\), we have \\(1+x \\geq 0\\), so multiplying: \\[(1+x)^{n+1} = (1+x)^n(1+x) \\geq (1+nx)(1+x) = 1 + nx + x + nx^2 = 1 + (n+1)x + nx^2 \\geq 1 + (n+1)x,\\] since \\(nx^2 \\geq 0\\). \\(\\blacksquare\\)'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Strong Induction & Well-Ordering
        // ============================================================
        {
            id: 'ch00-sec03',
            title: 'Strong Induction & Well-Ordering',
            content: `
                <h2>Strong Induction &amp; Well-Ordering</h2>

                <div class="env-block intuition">
                    <div class="env-title">Motivation</div>
                    <div class="env-body">
                        <p>Sometimes the inductive step requires knowing not just \\(P(n)\\), but \\(P(k)\\) for <em>all</em> \\(k \\leq n\\). For example, when proving that every integer \\(\\geq 2\\) has a prime factorization, you need the result for all smaller values, not just the predecessor. <strong>Strong induction</strong> provides exactly this extra power.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.6 (Principle of Strong Induction)</div>
                    <div class="env-body">
                        <p>Let \\(P(n)\\) be a statement about natural numbers. Suppose that for every \\(n \\in \\mathbb{N}\\):</p>
                        <p style="text-align:center;">If \\(P(k)\\) is true for all \\(k < n\\), then \\(P(n)\\) is true.</p>
                        <p>Then \\(P(n)\\) is true for all \\(n \\in \\mathbb{N}\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Note that strong induction <em>includes</em> the base case automatically: when \\(n = 0\\), the hypothesis "\\(P(k)\\) for all \\(k < 0\\)" is vacuously true, so you must prove \\(P(0)\\) outright. In practice, many authors still state the base case explicitly for clarity.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.7 (Equivalence of Weak and Strong Induction)</div>
                    <div class="env-body">
                        <p>Weak induction (Axiom 5) and strong induction are logically equivalent. That is, each can be derived from the other.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p><em>Strong \\(\\Rightarrow\\) Weak:</em> Weak induction is a special case of strong induction (in the inductive step, you only use \\(P(n)\\) rather than all \\(P(k)\\) for \\(k \\leq n\\)).</p>
                        <p><em>Weak \\(\\Rightarrow\\) Strong:</em> Given a property \\(P\\) satisfying the strong induction hypothesis, define \\(Q(n) := \\text{"} P(k) \\text{ holds for all } k \\leq n \\text{"}\\). Then \\(Q(0)\\) amounts to \\(P(0)\\), which holds by the strong induction hypothesis (with the vacuously true premise). And \\(Q(n) \\Rightarrow Q(n+1)\\) holds because \\(Q(n)\\) gives \\(P(k)\\) for all \\(k \\leq n\\), which is precisely the hypothesis needed to deduce \\(P(n+1)\\) via strong induction, giving \\(Q(n+1)\\). By weak induction, \\(Q(n)\\) holds for all \\(n\\), hence \\(P(n)\\) holds for all \\(n\\). \\(\\blacksquare\\)</p>
                    </div>
                </div>

                <h3>The Well-Ordering Principle</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.8 (Well-Ordering Principle)</div>
                    <div class="env-body">
                        <p>Every nonempty subset of \\(\\mathbb{N}\\) has a <strong>least element</strong>. That is, if \\(\\emptyset \\neq S \\subseteq \\mathbb{N}\\), then there exists \\(m \\in S\\) such that \\(m \\leq s\\) for all \\(s \\in S\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (from Strong Induction)</div>
                    <div class="env-body">
                        <p>Suppose for contradiction that some nonempty \\(S \\subseteq \\mathbb{N}\\) has no least element. Define \\(P(n) := \\text{"} n \\notin S \\text{"}\\).</p>
                        <p>We prove \\(P(n)\\) for all \\(n\\) by strong induction. Let \\(n \\in \\mathbb{N}\\) and assume \\(P(k)\\) holds for all \\(k < n\\), i.e., no \\(k < n\\) belongs to \\(S\\). If \\(n \\in S\\), then \\(n\\) would be a least element of \\(S\\) (since nothing smaller is in \\(S\\)), contradicting our assumption. So \\(n \\notin S\\), i.e., \\(P(n)\\) holds.</p>
                        <p>By strong induction, \\(P(n)\\) holds for all \\(n\\), meaning \\(S = \\emptyset\\), contradicting \\(S \\neq \\emptyset\\). \\(\\blacksquare\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="well-ordering-viz"></div>

                <div class="env-block example">
                    <div class="env-title">Example 0.9 (Using Strong Induction)</div>
                    <div class="env-body">
                        <p><strong>Claim:</strong> Every natural number \\(n \\geq 2\\) can be written as a product of primes.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>We use strong induction on \\(n \\geq 2\\).</p>
                        <p><strong>Base case (\\(n = 2\\)):</strong> \\(2\\) is prime, so it is trivially a product of primes. \\(\\checkmark\\)</p>
                        <p><strong>Inductive step:</strong> Let \\(n \\geq 3\\) and assume every integer \\(k\\) with \\(2 \\leq k < n\\) is a product of primes.</p>
                        <ul>
                            <li>If \\(n\\) is prime, we are done.</li>
                            <li>If \\(n\\) is composite, write \\(n = ab\\) with \\(2 \\leq a, b < n\\). By the inductive hypothesis, both \\(a\\) and \\(b\\) are products of primes. Hence \\(n = ab\\) is also a product of primes.</li>
                        </ul>
                        <p>By strong induction, the result holds for all \\(n \\geq 2\\). \\(\\blacksquare\\)</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Three Equivalent Principles</div>
                    <div class="env-body">
                        <p>The following are logically equivalent (over the other Peano axioms):</p>
                        <ol>
                            <li>The Principle of (Weak) Mathematical Induction</li>
                            <li>The Principle of Strong Induction</li>
                            <li>The Well-Ordering Principle</li>
                        </ol>
                        <p>Each can be proved from either of the others. Different problems call for different formulations; flexibility in choosing the right one is a key mathematical skill.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'well-ordering-viz',
                    title: 'Well-Ordering: Every Nonempty Subset Has a Minimum',
                    description: 'Select elements to form a subset of the natural numbers. The minimum element is always highlighted.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 260, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var maxN = 20;
                        var inSubset = {};

                        // Preset buttons
                        VizEngine.createButton(controls, 'Evens', function() {
                            inSubset = {};
                            for (var i = 2; i <= maxN; i += 2) inSubset[i] = true;
                            draw();
                        });
                        VizEngine.createButton(controls, 'Primes', function() {
                            inSubset = {};
                            var primes = [2, 3, 5, 7, 11, 13, 17, 19];
                            for (var p = 0; p < primes.length; p++) inSubset[primes[p]] = true;
                            draw();
                        });
                        VizEngine.createButton(controls, 'Squares', function() {
                            inSubset = {};
                            for (var i = 1; i * i <= maxN; i++) inSubset[i * i] = true;
                            draw();
                        });
                        VizEngine.createButton(controls, 'Random', function() {
                            inSubset = {};
                            // At least 1 element
                            var count = 3 + Math.floor(Math.random() * 8);
                            while (Object.keys(inSubset).length < count) {
                                var r = Math.floor(Math.random() * (maxN + 1));
                                inSubset[r] = true;
                            }
                            draw();
                        });
                        VizEngine.createButton(controls, 'Clear', function() {
                            inSubset = {};
                            draw();
                        });

                        // Allow clicking on numbers to toggle membership
                        viz.canvas.addEventListener('click', function(e) {
                            var rect = viz.canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left;
                            var my = e.clientY - rect.top;
                            var spacing = 32;
                            var startX = 15;
                            var cy = 120;
                            for (var n = 0; n <= maxN; n++) {
                                var nx = startX + n * spacing + spacing / 2;
                                if (Math.abs(mx - nx) < 14 && Math.abs(my - cy) < 14) {
                                    if (inSubset[n]) {
                                        delete inSubset[n];
                                    } else {
                                        inSubset[n] = true;
                                    }
                                    draw();
                                    break;
                                }
                            }
                        });

                        function draw() {
                            viz.clear();
                            var spacing = 32;
                            var startX = 15;
                            var cy = 120;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Well-Ordering Principle: Click numbers to add/remove from subset S', viz.width / 2, 10);

                            // Find minimum
                            var subsetKeys = Object.keys(inSubset).map(Number).sort(function(a, b) { return a - b; });
                            var minElem = subsetKeys.length > 0 ? subsetKeys[0] : null;

                            // Draw number line
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(startX, cy);
                            ctx.lineTo(startX + (maxN + 1) * spacing, cy);
                            ctx.stroke();

                            // Draw numbers
                            for (var n = 0; n <= maxN; n++) {
                                var nx = startX + n * spacing + spacing / 2;
                                var isIn = !!inSubset[n];
                                var isMin = n === minElem;

                                // Circle
                                if (isMin) {
                                    // Glow for minimum
                                    ctx.fillStyle = viz.colors.orange + '44';
                                    ctx.beginPath();
                                    ctx.arc(nx, cy, 16, 0, Math.PI * 2);
                                    ctx.fill();
                                }

                                ctx.fillStyle = isMin ? viz.colors.orange : (isIn ? viz.colors.green : viz.colors.bg);
                                ctx.beginPath();
                                ctx.arc(nx, cy, 13, 0, Math.PI * 2);
                                ctx.fill();

                                ctx.strokeStyle = isIn ? (isMin ? viz.colors.orange : viz.colors.green) : viz.colors.axis;
                                ctx.lineWidth = isIn ? 2.5 : 1;
                                ctx.beginPath();
                                ctx.arc(nx, cy, 13, 0, Math.PI * 2);
                                ctx.stroke();

                                // Label
                                ctx.fillStyle = isIn ? viz.colors.white : viz.colors.text;
                                ctx.font = (isIn ? 'bold ' : '') + '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(String(n), nx, cy);
                            }

                            // Subset info
                            ctx.textBaseline = 'top';
                            ctx.textAlign = 'center';
                            if (subsetKeys.length > 0) {
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = '14px -apple-system,sans-serif';
                                var setStr = 'S = {' + subsetKeys.join(', ') + '}';
                                ctx.fillText(setStr, viz.width / 2, 45);

                                ctx.fillStyle = viz.colors.orange;
                                ctx.font = 'bold 16px -apple-system,sans-serif';
                                ctx.fillText('min(S) = ' + minElem, viz.width / 2, 70);
                            } else {
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '14px -apple-system,sans-serif';
                                ctx.fillText('S is empty. Click numbers above to build a subset.', viz.width / 2, 55);
                            }

                            // Bottom note
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('No matter which nonempty subset you choose, there is always a least element (orange).', viz.width / 2, cy + 60);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Use strong induction to prove that every natural number \\(n \\geq 2\\) is either prime or divisible by a prime.',
                    hint: 'If \\(n\\) is prime, done. If not, \\(n = ab\\) with \\(2 \\leq a < n\\). Apply the inductive hypothesis to \\(a\\).',
                    solution: '<strong>Base case (\\(n=2\\)):</strong> \\(2\\) is prime. \\(\\checkmark\\)<br><strong>Inductive step:</strong> Let \\(n \\geq 3\\) and assume the result for all \\(2 \\leq k < n\\). If \\(n\\) is prime, done. Otherwise \\(n = ab\\) with \\(2 \\leq a, b < n\\). By the inductive hypothesis, \\(a\\) is either prime or divisible by a prime \\(p\\). In either case, \\(p \\mid a\\) and \\(a \\mid n\\), so \\(p \\mid n\\). \\(\\blacksquare\\)'
                },
                {
                    question: 'Use the well-ordering principle to prove that \\(\\sqrt{2}\\) is irrational.',
                    hint: 'Suppose \\(\\sqrt{2} = a/b\\) with \\(a, b \\in \\mathbb{N}^+\\). Consider the set \\(S = \\{n \\in \\mathbb{N}^+ : n\\sqrt{2} \\in \\mathbb{N}^+\\}\\). Apply well-ordering to \\(S\\) and derive a contradiction.',
                    solution: 'Let \\(S = \\{n \\in \\mathbb{N}^+ : n\\sqrt{2} \\in \\mathbb{N}^+\\}\\). If \\(\\sqrt{2} = a/b\\) with \\(a, b \\in \\mathbb{N}^+\\), then \\(b \\in S\\), so \\(S \\neq \\emptyset\\). By well-ordering, \\(S\\) has a least element \\(m\\). Let \\(m\' = m\\sqrt{2} - m = m(\\sqrt{2} - 1)\\). Since \\(1 < \\sqrt{2} < 2\\), we have \\(0 < \\sqrt{2} - 1 < 1\\), so \\(0 < m\' < m\\). Moreover \\(m\'\\sqrt{2} = 2m - m\\sqrt{2} = 2m - m\' - m = m - m\'\\)... more carefully: \\(m\' = m\\sqrt{2} - m\\) is a positive integer (since \\(m\\sqrt{2} \\in \\mathbb{N}^+\\) and \\(m \\in \\mathbb{N}^+\\)), and \\(m\'\\sqrt{2} = m \\cdot 2 - m\\sqrt{2} = 2m - (m\' + m) = m - m\'\\)... Let us redo: \\(m\' \\sqrt{2} = (m\\sqrt{2} - m)\\sqrt{2} = 2m - m\\sqrt{2}\\), which is also an integer. So \\(m\' \\in S\\) with \\(m\' < m\\), contradicting minimality. \\(\\blacksquare\\)'
                },
                {
                    question: 'Prove the well-ordering principle implies the principle of (weak) mathematical induction.',
                    hint: 'Suppose \\(P(0)\\) holds and \\(P(n) \\Rightarrow P(n+1)\\) for all \\(n\\), but \\(P\\) fails somewhere. Consider the set of counterexamples.',
                    solution: 'Suppose \\(P(0)\\) and \\(P(n) \\Rightarrow P(n+1)\\) for all \\(n\\), but \\(P(m)\\) fails for some \\(m\\). Let \\(S = \\{n \\in \\mathbb{N} : \\neg P(n)\\}\\). Then \\(S \\neq \\emptyset\\). By well-ordering, \\(S\\) has a least element \\(n_0\\). Since \\(P(0)\\) holds, \\(n_0 \\geq 1\\). Then \\(n_0 - 1 < n_0\\) and \\(n_0 - 1 \\notin S\\), so \\(P(n_0 - 1)\\) holds. By the inductive hypothesis, \\(P(n_0)\\) holds, contradicting \\(n_0 \\in S\\). \\(\\blacksquare\\)'
                },
                {
                    question: 'Prove that any game of "subtract 1, 2, or 3" starting from \\(n\\) tokens must terminate in at most \\(n\\) moves. (Players alternate removing 1, 2, or 3 tokens; the player who takes the last token wins.)',
                    hint: 'Use strong induction on \\(n\\). Each move reduces the number of tokens by at least 1.',
                    solution: 'Use strong induction on \\(n\\). <strong>Base case (\\(n=0\\)):</strong> The game is already over; 0 moves needed. \\(\\checkmark\\)<br><strong>Inductive step:</strong> Suppose the result holds for all \\(k < n\\). In a game starting with \\(n \\geq 1\\) tokens, the first move reduces the count to some \\(k\\) with \\(n - 3 \\leq k \\leq n - 1\\), so \\(k < n\\). By the inductive hypothesis, the remaining game takes at most \\(k \\leq n - 1\\) moves. Adding the first move gives at most \\(n\\) moves total. \\(\\blacksquare\\)'
                },
                {
                    question: 'Prove using well-ordering that there is no natural number \\(n\\) satisfying \\(0 < n < 1\\).',
                    hint: 'Suppose such an \\(n\\) exists. Consider \\(\\{n \\in \\mathbb{N} : 0 < n < 1\\}\\) and apply well-ordering. What can you deduce about the least element?',
                    solution: 'Suppose \\(S = \\{n \\in \\mathbb{N} : 0 < n < 1\\} \\neq \\emptyset\\). By well-ordering, \\(S\\) has a least element \\(m\\). Then \\(0 < m < 1\\). But \\(m \\in \\mathbb{N}\\) and \\(m > 0\\) means \\(m \\geq 1\\) (since the smallest positive natural number is \\(1 = S(0)\\), and there is no natural number between \\(0\\) and \\(S(0)\\) by the Peano axioms). This contradicts \\(m < 1\\). Hence \\(S = \\emptyset\\). \\(\\blacksquare\\)'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Recursive Definitions — Addition, Multiplication, and Their Properties
        // ============================================================
        {
            id: 'ch00-sec04',
            title: 'Recursive Definitions on \\(\\mathbb{N}\\)',
            content: `
                <h2>Recursive Definitions on \\(\\mathbb{N}\\)</h2>

                <div class="env-block intuition">
                    <div class="env-title">Why Recursive Definitions?</div>
                    <div class="env-body">
                        <p>We have the natural numbers and induction. Now we want to <em>do things</em> with them &mdash; add, multiply, exponentiate. But wait: we cannot just assume these operations exist. We must <em>construct</em> them from the Peano axioms. The key tool is <strong>recursive definition</strong> (also called <em>definition by recursion</em>): define \\(f(0)\\) explicitly, then define \\(f(n+1)\\) in terms of \\(f(n)\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.10 (Recursion Principle)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a set, \\(x_0 \\in X\\), and \\(h : X \\to X\\) a function. Then there exists a <strong>unique</strong> function \\(f : \\mathbb{N} \\to X\\) satisfying:</p>
                        <ul>
                            <li>\\(f(0) = x_0\\)</li>
                            <li>\\(f(S(n)) = h(f(n))\\) for all \\(n \\in \\mathbb{N}\\)</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The recursion principle is the theoretical justification for defining functions by specifying a "base value" and a "step rule." Its proof uses induction (to show uniqueness) and requires some set theory (to show existence). Tao gives a careful treatment in Chapter 2 of <em>Analysis I</em>.</p>
                    </div>
                </div>

                <h3>Defining Addition</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.11 (Addition)</div>
                    <div class="env-body">
                        <p>For each \\(m \\in \\mathbb{N}\\), we define the function \\(n \\mapsto m + n\\) recursively:</p>
                        <ul>
                            <li>\\(m + 0 := m\\)</li>
                            <li>\\(m + S(n) := S(m + n)\\)</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 0.12</div>
                    <div class="env-body">
                        <p>Compute \\(2 + 3\\) from the definition. Recall \\(2 = S(S(0))\\) and \\(3 = S(S(S(0)))\\):</p>
                        \\[
                        \\begin{aligned}
                        2 + 3 &= 2 + S(2) = S(2 + 2) \\\\
                              &= S(2 + S(1)) = S(S(2 + 1)) \\\\
                              &= S(S(2 + S(0))) = S(S(S(2 + 0))) \\\\
                              &= S(S(S(2))) = S(S(3)) = S(4) = 5.
                        \\end{aligned}
                        \\]
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="recursive-sequence-builder"></div>

                <h3>Properties of Addition</h3>

                <p>From the recursive definition and induction, we can prove all the familiar properties of addition.</p>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 0.13</div>
                    <div class="env-body">
                        <p>For all \\(m, n, p \\in \\mathbb{N}\\):</p>
                        <ol>
                            <li><strong>Right identity:</strong> \\(m + 0 = m\\) (by definition).</li>
                            <li><strong>Left identity:</strong> \\(0 + n = n\\).</li>
                            <li><strong>Associativity:</strong> \\((m + n) + p = m + (n + p)\\).</li>
                            <li><strong>Commutativity:</strong> \\(m + n = n + m\\).</li>
                            <li><strong>Cancellation:</strong> If \\(m + n = m + p\\), then \\(n = p\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof of (2): \\(0 + n = n\\)</div>
                    <div class="env-body">
                        <p>By induction on \\(n\\).</p>
                        <p><strong>Base case:</strong> \\(0 + 0 = 0\\) by definition. \\(\\checkmark\\)</p>
                        <p><strong>Inductive step:</strong> Assume \\(0 + n = n\\). Then \\(0 + S(n) = S(0 + n) = S(n)\\). \\(\\blacksquare\\)</p>
                    </div>
                </div>

                <h3>Defining Multiplication</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.14 (Multiplication)</div>
                    <div class="env-body">
                        <p>For each \\(m \\in \\mathbb{N}\\), we define \\(n \\mapsto m \\times n\\) recursively:</p>
                        <ul>
                            <li>\\(m \\times 0 := 0\\)</li>
                            <li>\\(m \\times S(n) := (m \\times n) + m\\)</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Notice the layering: multiplication is defined in terms of addition, which is defined in terms of the successor function. From the Peano axioms alone, we build an entire arithmetic. This is a triumph of the axiomatic method.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 0.15</div>
                    <div class="env-body">
                        <p>For all \\(m, n, p \\in \\mathbb{N}\\):</p>
                        <ol>
                            <li>\\(m \\times 0 = 0\\) and \\(0 \\times n = 0\\).</li>
                            <li>\\(m \\times 1 = m\\) and \\(1 \\times n = n\\).</li>
                            <li><strong>Commutativity:</strong> \\(m \\times n = n \\times m\\).</li>
                            <li><strong>Associativity:</strong> \\((m \\times n) \\times p = m \\times (n \\times p)\\).</li>
                            <li><strong>Distributivity:</strong> \\(m \\times (n + p) = (m \\times n) + (m \\times p)\\).</li>
                        </ol>
                    </div>
                </div>

                <h3>Exponentiation</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.16 (Exponentiation)</div>
                    <div class="env-body">
                        <p>For each \\(m \\in \\mathbb{N}\\), define \\(n \\mapsto m^n\\) recursively:</p>
                        <ul>
                            <li>\\(m^0 := 1\\)</li>
                            <li>\\(m^{S(n)} := m^n \\times m\\)</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">The Recursive Tower</div>
                    <div class="env-body">
                        <p>We have built a tower of operations, each defined recursively from the one below:</p>
                        <ul>
                            <li><strong>Successor:</strong> \\(S(n)\\) (primitive)</li>
                            <li><strong>Addition:</strong> repeated successor</li>
                            <li><strong>Multiplication:</strong> repeated addition</li>
                            <li><strong>Exponentiation:</strong> repeated multiplication</li>
                        </ul>
                        <p>This pattern could continue: tetration is repeated exponentiation, and so on. The Peano axioms + recursion principle let us build <em>all</em> of these rigorously.</p>
                    </div>
                </div>

                <h3>The Ordering on \\(\\mathbb{N}\\)</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.17 (Ordering)</div>
                    <div class="env-body">
                        <p>We define \\(n \\leq m\\) to mean: there exists \\(k \\in \\mathbb{N}\\) such that \\(m = n + k\\). We write \\(n < m\\) if \\(n \\leq m\\) and \\(n \\neq m\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 0.18 (Properties of Order)</div>
                    <div class="env-body">
                        <p>The relation \\(\\leq\\) on \\(\\mathbb{N}\\) is:</p>
                        <ol>
                            <li><strong>Reflexive:</strong> \\(n \\leq n\\).</li>
                            <li><strong>Antisymmetric:</strong> If \\(n \\leq m\\) and \\(m \\leq n\\), then \\(n = m\\).</li>
                            <li><strong>Transitive:</strong> If \\(n \\leq m\\) and \\(m \\leq p\\), then \\(n \\leq p\\).</li>
                            <li><strong>Total:</strong> For any \\(n, m\\), either \\(n \\leq m\\) or \\(m \\leq n\\).</li>
                        </ol>
                        <p>That is, \\((\\mathbb{N}, \\leq)\\) is a <strong>total order</strong>, and by the well-ordering principle, it is moreover a <strong>well-order</strong>.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'recursive-sequence-builder',
                    title: 'Recursive Sequence Builder',
                    description: 'Choose a starting value and a recurrence rule, then watch the sequence unfold step by step.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 320, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;

                        var a0 = 1;
                        var ruleIndex = 0;
                        var rules = [
                            { name: 'a(n+1) = a(n) + n', fn: function(an, n) { return an + n; } },
                            { name: 'a(n+1) = 2 * a(n)', fn: function(an, n) { return 2 * an; } },
                            { name: 'a(n+1) = a(n) + a(n)', fn: function(an, n) { return an + an; } },
                            { name: 'a(n+1) = a(n) * a(n) (capped)', fn: function(an, n) { return Math.min(an * an, 1e12); } },
                            { name: 'a(n+1) = a(n) + 3', fn: function(an, n) { return an + 3; } },
                            { name: 'Triangular: a(n+1) = a(n) + (n+1)', fn: function(an, n) { return an + (n + 1); } },
                            { name: 'Factorial: a(n+1) = a(n) * (n+1)', fn: function(an, n) { return an * (n + 1); } }
                        ];

                        VizEngine.createSlider(controls, 'a(0)', 0, 10, 1, 1, function(v) {
                            a0 = Math.round(v);
                            draw();
                        });

                        // Rule selector buttons
                        for (var ri = 0; ri < rules.length; ri++) {
                            (function(idx) {
                                VizEngine.createButton(controls, rules[idx].name, function() {
                                    ruleIndex = idx;
                                    draw();
                                });
                            })(ri);
                        }

                        function formatNum(n) {
                            if (n >= 1e9) return n.toExponential(2);
                            return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                        }

                        function draw() {
                            viz.clear();
                            var rule = rules[ruleIndex];

                            // Compute sequence
                            var seq = [a0];
                            var maxSteps = 12;
                            for (var i = 0; i < maxSteps; i++) {
                                var next = rule.fn(seq[i], i);
                                if (!isFinite(next) || next > 1e15) break;
                                seq.push(next);
                            }

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Recursive Definition: ' + rule.name + ',  a(0) = ' + a0, viz.width / 2, 10);

                            // Draw sequence as table
                            var tableStartX = 30;
                            var tableY = 55;
                            var colW = Math.min(55, (viz.width - 60) / seq.length);
                            var rowH = 30;

                            // Header: n
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            for (var n = 0; n < seq.length; n++) {
                                var cx = tableStartX + n * colW + colW / 2;
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText('n=' + n, cx, tableY);
                            }

                            // Values: a(n)
                            for (var v = 0; v < seq.length; v++) {
                                var vx = tableStartX + v * colW + colW / 2;
                                var vy = tableY + rowH;

                                // Box
                                ctx.fillStyle = v === 0 ? viz.colors.orange + '33' : viz.colors.blue + '22';
                                ctx.fillRect(vx - colW / 2 + 2, vy - 14, colW - 4, 28);
                                ctx.strokeStyle = v === 0 ? viz.colors.orange : viz.colors.blue;
                                ctx.lineWidth = 1.5;
                                ctx.strokeRect(vx - colW / 2 + 2, vy - 14, colW - 4, 28);

                                // Value
                                ctx.fillStyle = v === 0 ? viz.colors.orange : viz.colors.blue;
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(formatNum(seq[v]), vx, vy);

                                // Arrow to next
                                if (v < seq.length - 1) {
                                    var arrowFromX = vx + colW / 2 - 2;
                                    var arrowToX = vx + colW / 2 + 2;
                                    ctx.strokeStyle = viz.colors.teal;
                                    ctx.lineWidth = 1.5;
                                    ctx.beginPath();
                                    ctx.moveTo(arrowFromX, vy);
                                    ctx.lineTo(arrowToX, vy);
                                    ctx.stroke();
                                }
                            }

                            // Draw bar chart below
                            var chartY = 140;
                            var chartH = 140;
                            var maxVal = Math.max.apply(null, seq);
                            if (maxVal === 0) maxVal = 1;

                            for (var b = 0; b < seq.length; b++) {
                                var bx = tableStartX + b * colW + 4;
                                var bw = colW - 8;
                                var bh = (seq[b] / maxVal) * chartH;
                                if (bh < 1 && seq[b] > 0) bh = 1;

                                ctx.fillStyle = b === 0 ? viz.colors.orange + '88' : viz.colors.blue + '66';
                                ctx.fillRect(bx, chartY + chartH - bh, bw, bh);
                                ctx.strokeStyle = b === 0 ? viz.colors.orange : viz.colors.blue;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(bx, chartY + chartH - bh, bw, bh);
                            }

                            // Chart baseline
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(tableStartX, chartY + chartH);
                            ctx.lineTo(tableStartX + seq.length * colW, chartY + chartH);
                            ctx.stroke();

                            // Note
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Each value is computed from the previous one using the recurrence rule.', viz.width / 2, chartY + chartH + 10);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Using the recursive definition of addition, compute \\(3 + 2\\) step by step.',
                    hint: 'Start with \\(3 + 2 = 3 + S(1)\\), then apply the rule \\(m + S(n) = S(m + n)\\) repeatedly.',
                    solution: '\\(3 + 2 = 3 + S(1) = S(3 + 1) = S(3 + S(0)) = S(S(3 + 0)) = S(S(3)) = S(4) = 5\\).'
                },
                {
                    question: 'Prove by induction that \\(S(n) = n + 1\\) for all \\(n \\in \\mathbb{N}\\), where \\(1 := S(0)\\).',
                    hint: 'This means proving \\(n + S(0) = S(n)\\). Use the definition of addition: \\(n + S(0) = S(n + 0) = S(n)\\).',
                    solution: 'By definition, \\(n + 1 = n + S(0) = S(n + 0) = S(n)\\). This follows directly from the recursive definition of addition (no induction needed). In detail: the rule \\(m + S(k) = S(m + k)\\) with \\(k = 0\\) gives \\(n + S(0) = S(n + 0)\\), and \\(n + 0 = n\\) by definition, so \\(n + S(0) = S(n)\\).'
                },
                {
                    question: 'Prove by induction on \\(n\\) that \\(m \\times S(n) = m \\times n + m\\) matches the definition, and use it to show \\(2 \\times 3 = 6\\).',
                    hint: 'This is the definition itself. Just unwind: \\(2 \\times 3 = 2 \\times S(2) = (2 \\times 2) + 2\\), etc.',
                    solution: 'The equation \\(m \\times S(n) = (m \\times n) + m\\) is the <em>definition</em>. Now compute:<br>\\(2 \\times 3 = 2 \\times S(2) = (2 \\times 2) + 2\\).<br>\\(2 \\times 2 = 2 \\times S(1) = (2 \\times 1) + 2\\).<br>\\(2 \\times 1 = 2 \\times S(0) = (2 \\times 0) + 2 = 0 + 2 = 2\\).<br>So \\(2 \\times 2 = 2 + 2 = 4\\), and \\(2 \\times 3 = 4 + 2 = 6\\).'
                },
                {
                    question: 'Prove the distributive law: \\(m \\times (n + p) = (m \\times n) + (m \\times p)\\) for all \\(m, n, p \\in \\mathbb{N}\\).',
                    hint: 'Induct on \\(p\\). Base case \\(p = 0\\): both sides equal \\(m \\times n\\). Inductive step: expand \\(m \\times (n + S(p))\\) using the definitions.',
                    solution: '<strong>Base case (\\(p = 0\\)):</strong> \\(m \\times (n + 0) = m \\times n = (m \\times n) + 0 = (m \\times n) + (m \\times 0)\\). \\(\\checkmark\\)<br><strong>Inductive step:</strong> Assume \\(m \\times (n + p) = (m \\times n) + (m \\times p)\\). Then:<br>\\(m \\times (n + S(p)) = m \\times S(n + p) = m \\times (n + p) + m = [(m \\times n) + (m \\times p)] + m = (m \\times n) + [(m \\times p) + m] = (m \\times n) + (m \\times S(p))\\).<br>(We used the inductive hypothesis and associativity of addition.) \\(\\blacksquare\\)'
                },
                {
                    question: 'Prove that \\(0 \\times n = 0\\) for all \\(n \\in \\mathbb{N}\\). (Note: the definition only gives \\(m \\times 0 = 0\\) directly.)',
                    hint: 'Induct on \\(n\\). For the inductive step, use \\(0 \\times S(n) = (0 \\times n) + 0\\).',
                    solution: '<strong>Base case (\\(n=0\\)):</strong> \\(0 \\times 0 = 0\\) by definition. \\(\\checkmark\\)<br><strong>Inductive step:</strong> Assume \\(0 \\times n = 0\\). Then \\(0 \\times S(n) = (0 \\times n) + 0 = 0 + 0 = 0\\). \\(\\blacksquare\\)'
                },
                {
                    question: 'Define the Fibonacci sequence recursively by \\(F(0) = 0\\), \\(F(1) = 1\\), and \\(F(n+2) = F(n+1) + F(n)\\). Prove by strong induction that \\(F(n) < 2^n\\) for all \\(n \\geq 0\\).',
                    hint: 'You need two base cases: \\(F(0) = 0 < 1\\) and \\(F(1) = 1 < 2\\). For the inductive step, use \\(F(n+2) = F(n+1) + F(n) < 2^{n+1} + 2^n < 2^{n+1} + 2^{n+1} = 2^{n+2}\\).',
                    solution: '<strong>Base cases:</strong> \\(F(0) = 0 < 1 = 2^0\\) and \\(F(1) = 1 < 2 = 2^1\\). \\(\\checkmark\\)<br><strong>Inductive step:</strong> Let \\(n \\geq 0\\) and assume \\(F(k) < 2^k\\) for all \\(k \\leq n+1\\). Then:<br>\\(F(n+2) = F(n+1) + F(n) < 2^{n+1} + 2^n \\leq 2^{n+1} + 2^{n+1} = 2 \\cdot 2^{n+1} = 2^{n+2}\\).<br>By strong induction, \\(F(n) < 2^n\\) for all \\(n \\geq 0\\). \\(\\blacksquare\\)'
                }
            ]
        }
    ]
});
