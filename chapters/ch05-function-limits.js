window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch05',
    number: 5,
    title: 'Limits of Functions',
    subtitle: 'From the epsilon-delta challenge game to the squeeze theorem — master how functions behave near a point and at infinity.',
    sections: [
        // ============================================================
        // SECTION 1: The Epsilon-Delta Definition
        // ============================================================
        {
            id: 'ch05-sec01',
            title: 'The Epsilon-Delta Definition of a Limit',
            content: `
                <div class="env-block connection">
                    <div class="env-title">Chapter Bridge: From Sequences to Functions</div>
                    <div class="env-body">
                        <p>In Chapter 2, we defined limits for sequences using the \\(\\varepsilon\\text{-}N\\) framework: a sequence \\((a_n)\\) converges to \\(L\\) if, for every \\(\\varepsilon > 0\\), all terms beyond some index \\(N\\) lie within \\(\\varepsilon\\) of \\(L\\). Now we adapt this idea to <strong>functions</strong>, replacing the index \\(N\\) with a distance \\(\\delta\\). The resulting \\(\\varepsilon\\text{-}\\delta\\) definition is the central concept of this chapter. The two viewpoints turn out to be tightly linked: the <em>sequential characterization of limits</em> (Theorem 5.4) states that \\(\\lim_{x \\to a} f(x) = L\\) if and only if \\(f(x_n) \\to L\\) for every sequence \\(x_n \\to a\\). Meanwhile, the topological language from Chapter 4 (neighborhoods, limit points, open sets) provides the natural setting for the definitions that follow.</p>
                    </div>
                </div>

                <h2>The Epsilon-Delta Definition of a Limit</h2>

                <p>In Chapter 4 we learned what it means for a <em>sequence</em> to converge. Now we ask a subtler question: what does it mean for a <strong>function</strong> \\(f\\) to approach a value \\(L\\) as its input \\(x\\) approaches some point \\(a\\)?</p>

                <p>Informally, \\(\\lim_{x \\to a} f(x) = L\\) means: as \\(x\\) gets closer and closer to \\(a\\) (but \\(x \\neq a\\)), the outputs \\(f(x)\\) get closer and closer to \\(L\\).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.1 (Limit of a Function)</div>
                    <div class="env-body">
                        <p>Let \\(f : A \\to \\mathbb{R}\\) and let \\(a\\) be a limit point of \\(A\\). We write
                        \\[\\lim_{x \\to a} f(x) = L\\]
                        if for every \\(\\varepsilon > 0\\), there exists \\(\\delta > 0\\) such that for all \\(x \\in A\\),
                        \\[0 < |x - a| < \\delta \\implies |f(x) - L| < \\varepsilon.\\]</p>
                    </div>
                </div>

                <p>Think of this as a <strong>challenge-response game</strong>:</p>
                <ol>
                    <li>An adversary picks a tolerance \\(\\varepsilon > 0\\) (how close outputs must be to \\(L\\)).</li>
                    <li>You must respond with a radius \\(\\delta > 0\\) (how close inputs must be to \\(a\\)).</li>
                    <li>If every \\(x\\) within \\(\\delta\\) of \\(a\\) (but not \\(a\\) itself) maps to within \\(\\varepsilon\\) of \\(L\\), you win that round.</li>
                    <li>The limit exists only if you can win <em>every</em> round, no matter how small \\(\\varepsilon\\) is.</li>
                </ol>

                <div class="viz-placeholder" data-viz="epsilon-delta-game"></div>

                <div class="env-block intuition">
                    <div class="env-title">Geometric Intuition</div>
                    <div class="env-body">
                        <p>The horizontal band \\((L - \\varepsilon, L + \\varepsilon)\\) is your "target zone." The vertical strip \\((a - \\delta, a + \\delta)\\) is your "input window." The function's graph inside the input window must stay entirely inside the target zone. As the target zone shrinks, you shrink the input window accordingly.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.2</div>
                    <div class="env-body">
                        <p>Prove that \\(\\lim_{x \\to 3} (2x + 1) = 7\\).</p>
                        <p><em>Proof.</em> Let \\(\\varepsilon > 0\\). We need \\(|f(x) - 7| < \\varepsilon\\) whenever \\(0 < |x - 3| < \\delta\\). Compute:
                        \\[|f(x) - 7| = |(2x + 1) - 7| = |2x - 6| = 2|x - 3|.\\]
                        Choose \\(\\delta = \\varepsilon / 2\\). Then \\(0 < |x - 3| < \\delta\\) implies
                        \\[|f(x) - 7| = 2|x - 3| < 2\\delta = \\varepsilon. \\quad \\square\\]</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="linear-limit-proof"></div>

                <div class="env-block remark">
                    <div class="env-title">Why \\(0 < |x - a|\\)?</div>
                    <div class="env-body">
                        <p>The condition \\(0 < |x - a|\\) means \\(x \\neq a\\). The limit describes behavior <em>near</em> \\(a\\), not <em>at</em> \\(a\\). The function might not even be defined at \\(a\\), and that is perfectly fine. This is exactly what makes limits so powerful — they let us probe the behavior of functions at points where direct evaluation fails.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.3 (Limit Point)</div>
                    <div class="env-body">
                        <p>A point \\(a \\in \\mathbb{R}\\) is a <strong>limit point</strong> of \\(A \\subseteq \\mathbb{R}\\) if every open interval \\((a - \\delta, a + \\delta)\\) with \\(\\delta > 0\\) contains a point of \\(A\\) different from \\(a\\). Equivalently, there exists a sequence \\((x_n)\\) in \\(A \\setminus \\{a\\}\\) with \\(x_n \\to a\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Common Pitfall</div>
                    <div class="env-body">
                        <p>When constructing an \\(\\varepsilon\\text{-}\\delta\\) proof, work <em>backwards</em>: start from \\(|f(x) - L| < \\varepsilon\\), manipulate the inequality to isolate \\(|x - a|\\), and then read off the right choice of \\(\\delta\\). The written proof then goes <em>forwards</em>: "Let \\(\\varepsilon > 0\\). Choose \\(\\delta = \\ldots\\). Then..."</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'epsilon-delta-game',
                    title: 'The Epsilon-Delta Challenge Game',
                    description: 'An adversary sets epsilon. Adjust delta so the function stays inside the target band near the limit point.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 50, originX: 350, originY: 280 });
                        var ctx = viz.ctx;

                        var epsilon = 0.8;
                        var delta = 0.5;
                        var funcChoice = 0;

                        var funcs = [
                            { f: function(x) { return x * x; }, a: 2, L: 4, label: 'f(x) = x^2, a = 2, L = 4', xMin: -1, xMax: 5 },
                            { f: function(x) { return Math.sin(x) / x; }, a: 0, L: 1, label: 'f(x) = sin(x)/x, a = 0, L = 1', xMin: -4, xMax: 4 },
                            { f: function(x) { return (x * x - 1) / (x - 1); }, a: 1, L: 2, label: 'f(x) = (x^2-1)/(x-1), a = 1, L = 2', xMin: -2, xMax: 4 }
                        ];

                        VizEngine.createSlider(controls, '\u03b5 (epsilon)', 0.05, 2.0, 0.8, 0.05, function(v) { epsilon = v; });
                        VizEngine.createSlider(controls, '\u03b4 (delta)', 0.05, 2.0, 0.5, 0.05, function(v) { delta = v; });
                        VizEngine.createButton(controls, 'x\u00b2', function() { funcChoice = 0; });
                        VizEngine.createButton(controls, 'sin(x)/x', function() { funcChoice = 1; });
                        VizEngine.createButton(controls, '(x\u00b2-1)/(x-1)', function() { funcChoice = 2; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var fc = funcs[funcChoice];
                            var f = fc.f, a = fc.a, L = fc.L;

                            // Draw epsilon band
                            viz.drawEpsilonBand(L, epsilon, viz.colors.teal);

                            // Draw delta band
                            viz.drawDeltaBand(a, delta, viz.colors.orange);

                            // Draw the function curve
                            viz.drawFunction(f, fc.xMin, fc.xMax, viz.colors.blue, 2.5, 500);

                            // Check: does the function stay inside epsilon-band within the delta-band?
                            var win = true;
                            var steps = 200;
                            for (var i = 0; i <= steps; i++) {
                                var x = a - delta + (2 * delta) * i / steps;
                                if (Math.abs(x - a) < 1e-9) continue;
                                var y = f(x);
                                if (isFinite(y) && Math.abs(y - L) >= epsilon) {
                                    win = false;
                                    break;
                                }
                            }

                            // Draw limit point marker
                            var aScreen = viz.toScreen(a, L);
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.arc(aScreen[0], aScreen[1], 6, 0, Math.PI * 2);
                            ctx.stroke();

                            // Status
                            ctx.fillStyle = win ? viz.colors.green : viz.colors.red;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText(win ? 'You WIN this round!' : 'FAIL: curve escapes the band', 10, 10);

                            // Labels
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            var epsScreen = viz.toScreen(0, L + epsilon);
                            ctx.fillText('L + \u03b5 = ' + (L + epsilon).toFixed(2), viz.width - 10, epsScreen[1] - 2);
                            var epsScreen2 = viz.toScreen(0, L - epsilon);
                            ctx.fillText('L - \u03b5 = ' + (L - epsilon).toFixed(2), viz.width - 10, epsScreen2[1] + 12);

                            ctx.fillStyle = viz.colors.orange;
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                            var dScreen1 = viz.toScreen(a - delta, 0);
                            ctx.fillText('a-\u03b4', dScreen1[0], viz.originY + 20);
                            var dScreen2 = viz.toScreen(a + delta, 0);
                            ctx.fillText('a+\u03b4', dScreen2[0], viz.originY + 20);

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText(fc.label, viz.width / 2, viz.height - 22);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'linear-limit-proof',
                    title: 'Visualizing a Linear Limit Proof',
                    description: 'See how delta = epsilon/2 works for f(x) = 2x + 1 at a = 3.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 35, originX: 100, originY: 320 });
                        var ctx = viz.ctx;

                        var epsilon = 1.0;
                        VizEngine.createSlider(controls, '\u03b5 (epsilon)', 0.1, 3.0, 1.0, 0.1, function(v) { epsilon = v; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var a = 3, L = 7;
                            var delta = epsilon / 2;

                            // Epsilon band
                            viz.drawEpsilonBand(L, epsilon, viz.colors.teal);

                            // Delta band
                            viz.drawDeltaBand(a, delta, viz.colors.orange);

                            // Function
                            viz.drawFunction(function(x) { return 2 * x + 1; }, -1, 8, viz.colors.blue, 2.5);

                            // Highlight the constrained segment
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 4;
                            ctx.beginPath();
                            var p1 = viz.toScreen(a - delta, 2 * (a - delta) + 1);
                            var p2 = viz.toScreen(a + delta, 2 * (a + delta) + 1);
                            ctx.moveTo(p1[0], p1[1]);
                            ctx.lineTo(p2[0], p2[1]);
                            ctx.stroke();

                            // Point
                            viz.drawPoint(a, L, viz.colors.white, '(3, 7)', 4);

                            // Info
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('\u03b5 = ' + epsilon.toFixed(1) + ',  \u03b4 = \u03b5/2 = ' + delta.toFixed(2), 10, 10);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('Green segment stays inside the \u03b5-band.', 10, 30);
                            ctx.fillText('|f(x) - 7| = 2|x - 3| < 2\u03b4 = \u03b5', 10, 48);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Use the epsilon-delta definition to prove that \\(\\lim_{x \\to 1} (5x - 3) = 2\\).',
                    hint: 'Compute \\(|f(x) - 2| = |5x - 3 - 2| = 5|x - 1|\\). What choice of \\(\\delta\\) makes this less than \\(\\varepsilon\\)?',
                    solution: 'Let \\(\\varepsilon > 0\\). Choose \\(\\delta = \\varepsilon / 5\\). Then \\(0 < |x - 1| < \\delta\\) implies \\(|5x - 5| = 5|x-1| < 5\\delta = \\varepsilon\\). \\(\\square\\)'
                },
                {
                    question: 'Why does the definition require \\(a\\) to be a limit point of the domain? What would go wrong if \\(a\\) were an isolated point?',
                    hint: 'If \\(a\\) is isolated, is there any \\(x \\neq a\\) in the domain near \\(a\\)?',
                    solution: 'If \\(a\\) is isolated, there exists \\(\\delta > 0\\) with no domain points in \\((a - \\delta, a + \\delta) \\setminus \\{a\\}\\). The implication \\(0 < |x-a| < \\delta \\Rightarrow |f(x) - L| < \\varepsilon\\) is vacuously true for <em>any</em> \\(L\\), so the limit would not be unique.'
                },
                {
                    question: 'Prove \\(\\lim_{x \\to 2} x^2 = 4\\) using the \\(\\varepsilon\\text{-}\\delta\\) definition.',
                    hint: 'Write \\(|x^2 - 4| = |x - 2||x + 2|\\). If \\(|x - 2| < 1\\), then \\(|x + 2| < 5\\). Use this bound.',
                    solution: 'Let \\(\\varepsilon > 0\\). Choose \\(\\delta = \\min(1, \\varepsilon/5)\\). If \\(0 < |x - 2| < \\delta\\), then \\(|x - 2| < 1\\) so \\(1 < x < 3\\) and \\(|x + 2| < 5\\). Thus \\(|x^2 - 4| = |x-2||x+2| < \\delta \\cdot 5 \\le \\varepsilon\\). \\(\\square\\)'
                },
                {
                    question: 'In the challenge game visualization, set \\(f(x) = x^2\\) and \\(\\varepsilon = 0.5\\). Experimentally find the largest \\(\\delta\\) that still wins. Compare with the theoretical bound from the previous exercise.',
                    hint: 'Drag the \\(\\delta\\) slider and find the threshold where the game first reports FAIL.',
                    solution: 'Theoretically with \\(\\varepsilon = 0.5\\) and \\(a = 2\\): \\(\\delta = \\min(1, 0.5/5) = 0.1\\). Experimentally, the exact largest working \\(\\delta\\) is slightly bigger (around 0.12) because \\(\\delta = \\varepsilon / 5\\) is a conservative bound. The actual supremum of valid \\(\\delta\\) solves \\(|x^2 - 4| = 0.5\\), giving \\(x = \\sqrt{4.5} \\approx 2.121\\), so \\(\\delta_{\\max} \\approx 0.121\\).'
                },
                {
                    question: 'Prove that \\(\\lim_{x \\to 0} x \\sin(1/x) = 0\\).',
                    hint: 'Use the bound \\(|\\sin(1/x)| \\le 1\\).',
                    solution: 'Let \\(\\varepsilon > 0\\). Choose \\(\\delta = \\varepsilon\\). If \\(0 < |x| < \\delta\\), then \\(|x \\sin(1/x)| \\le |x| \\cdot 1 < \\delta = \\varepsilon\\). \\(\\square\\)'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Sequential Characterization & Divergence Criteria
        // ============================================================
        {
            id: 'ch05-sec02',
            title: 'The Sequential Characterization of Limits',
            content: `
                <h2>The Sequential Characterization of Limits</h2>

                <div class="env-block motivation">
                    <div class="env-title">Why This Section Matters</div>
                    <div class="env-body">
                        <p>Section 1 gave us a precise definition, but working directly with \\(\\varepsilon\\text{-}\\delta\\) proofs can be laborious. Here we build a bridge back to Chapter 2: we show that function limits are completely determined by sequence limits. This equivalence has two payoffs. First, it lets us <em>prove</em> that limits exist by importing all our sequence machinery (algebra of limits, comparison theorems, monotone convergence). Second, it gives us the easiest method for <em>disproving</em> limits: find two sequences that yield different values.</p>
                    </div>
                </div>

                <p>The \\(\\varepsilon\\text{-}\\delta\\) definition is precise but often cumbersome. Fortunately, there is an equivalent characterization using sequences that connects function limits directly to the sequence limits of Chapter 4.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.4 (Sequential Characterization)</div>
                    <div class="env-body">
                        <p>Let \\(f : A \\to \\mathbb{R}\\) and let \\(a\\) be a limit point of \\(A\\). Then
                        \\[\\lim_{x \\to a} f(x) = L\\]
                        if and only if for <em>every</em> sequence \\((x_n)\\) in \\(A \\setminus \\{a\\}\\) with \\(x_n \\to a\\), we have \\(f(x_n) \\to L\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Two Roads to the Same Destination</div>
                    <div class="env-body">
                        <p>Think of \\(a\\) as a city. There are infinitely many roads (sequences) leading into the city. The function limit equals \\(L\\) precisely when every single road delivers you to the same value \\(L\\). If even one road leads somewhere else, the limit does not exist.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sequential-characterization"></div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch of Theorem 5.4</div>
                    <div class="env-body">
                        <p><strong>(\\(\\Rightarrow\\))</strong> Suppose \\(\\lim_{x \\to a} f(x) = L\\) by \\(\\varepsilon\\text{-}\\delta\\). Let \\((x_n)\\) be any sequence in \\(A \\setminus \\{a\\}\\) with \\(x_n \\to a\\). Given \\(\\varepsilon > 0\\), choose \\(\\delta > 0\\) from the definition. Since \\(x_n \\to a\\), there exists \\(N\\) such that \\(n \\ge N\\) implies \\(0 < |x_n - a| < \\delta\\), hence \\(|f(x_n) - L| < \\varepsilon\\). So \\(f(x_n) \\to L\\).</p>
                        <p><strong>(\\(\\Leftarrow\\))</strong> We prove the contrapositive. If the \\(\\varepsilon\\text{-}\\delta\\) condition fails, there exists \\(\\varepsilon_0 > 0\\) such that for every \\(\\delta = 1/n\\), some \\(x_n \\in A\\) has \\(0 < |x_n - a| < 1/n\\) but \\(|f(x_n) - L| \\ge \\varepsilon_0\\). The sequence \\((x_n)\\) converges to \\(a\\) but \\(f(x_n) \\not\\to L\\). \\(\\square\\)</p>
                    </div>
                </div>

                <h3>The Divergence Criterion</h3>

                <p>The sequential characterization gives us a powerful tool for proving that limits <strong>do not</strong> exist.</p>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 5.5 (Divergence Criterion)</div>
                    <div class="env-body">
                        <p>If there exist two sequences \\((x_n)\\) and \\((y_n)\\) in \\(A \\setminus \\{a\\}\\), both converging to \\(a\\), such that \\(\\lim f(x_n) \\neq \\lim f(y_n)\\), then \\(\\lim_{x \\to a} f(x)\\) does not exist.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.6</div>
                    <div class="env-body">
                        <p>The function \\(f(x) = \\sin(1/x)\\) has no limit as \\(x \\to 0\\).</p>
                        <p><em>Proof.</em> Let \\(x_n = \\frac{1}{2n\\pi}\\) and \\(y_n = \\frac{1}{2n\\pi + \\pi/2}\\). Both converge to \\(0\\). But \\(f(x_n) = \\sin(2n\\pi) = 0\\) for all \\(n\\), while \\(f(y_n) = \\sin(2n\\pi + \\pi/2) = 1\\). Since \\(0 \\neq 1\\), the limit does not exist. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sin-1-over-x"></div>

                <div class="env-block remark">
                    <div class="env-title">Why Sequences Are So Useful</div>
                    <div class="env-body">
                        <p>The sequential characterization lets us transfer all our sequence-limit machinery (algebra of limits, comparison theorems, monotone convergence) to function limits. It also provides the easiest route for disproving limits: just find two sequences that disagree.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'sequential-characterization',
                    title: 'Sequences Converging to a Limit Point',
                    description: 'Different sequences approach a, and their images under f all converge to L when the limit exists.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 60, originX: 200, originY: 270 });
                        var ctx = viz.ctx;

                        var seqChoice = 0;
                        VizEngine.createButton(controls, 'From right: x_n = 2 + 1/n', function() { seqChoice = 0; });
                        VizEngine.createButton(controls, 'From left: x_n = 2 - 1/n', function() { seqChoice = 1; });
                        VizEngine.createButton(controls, 'Alternating: x_n = 2 + (-1)^n/n', function() { seqChoice = 2; });

                        var nTerms = 12;
                        VizEngine.createSlider(controls, 'Terms shown', 3, 25, 12, 1, function(v) { nTerms = Math.round(v); });

                        function f(x) { return x * x; }
                        var a = 2, L = 4;

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            // Draw function
                            viz.drawFunction(f, -0.5, 5, viz.colors.blue, 2);

                            // Draw limit point
                            viz.drawPoint(a, L, viz.colors.white, '(2, 4)', 5);

                            // Generate sequence
                            var terms = [];
                            for (var n = 1; n <= nTerms; n++) {
                                var xn;
                                if (seqChoice === 0) xn = a + 1 / n;
                                else if (seqChoice === 1) xn = a - 1 / n;
                                else xn = a + Math.pow(-1, n) / n;
                                terms.push({ n: n, x: xn, y: f(xn) });
                            }

                            // Draw vertical dotted lines from x_n to the curve
                            for (var i = 0; i < terms.length; i++) {
                                var t = terms[i];
                                var alpha = Math.max(0.2, 1 - i * 0.06);
                                var xScreen = viz.toScreen(t.x, 0);
                                var xyScreen = viz.toScreen(t.x, t.y);

                                // Dotted vertical line
                                ctx.strokeStyle = viz.colors.orange + Math.round(alpha * 99).toString(16).padStart(2, '0');
                                ctx.lineWidth = 1;
                                ctx.setLineDash([3, 3]);
                                ctx.beginPath();
                                ctx.moveTo(xScreen[0], xScreen[1]);
                                ctx.lineTo(xyScreen[0], xyScreen[1]);
                                ctx.stroke();

                                // Dotted horizontal line to y-axis
                                ctx.strokeStyle = viz.colors.teal + Math.round(alpha * 99).toString(16).padStart(2, '0');
                                ctx.beginPath();
                                ctx.moveTo(xyScreen[0], xyScreen[1]);
                                ctx.lineTo(viz.originX, xyScreen[1]);
                                ctx.stroke();
                                ctx.setLineDash([]);

                                // Draw points
                                viz.drawPoint(t.x, 0, viz.colors.orange, null, 3);
                                viz.drawPoint(t.x, t.y, viz.colors.teal, null, 3);
                            }

                            // Draw x_n labels for first few
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var j = 0; j < Math.min(5, terms.length); j++) {
                                var xp = viz.toScreen(terms[j].x, 0);
                                ctx.fillStyle = viz.colors.orange;
                                ctx.fillText('x' + (j + 1), xp[0], xp[1] + 6);
                            }

                            // Info
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('f(x) = x\u00b2, a = 2, L = 4', 10, 10);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            var last = terms[terms.length - 1];
                            ctx.fillText('x_' + nTerms + ' = ' + last.x.toFixed(4) + ',  f(x_' + nTerms + ') = ' + last.y.toFixed(4), 10, 30);
                            ctx.fillText('Every sequence x_n \u2192 2 gives f(x_n) \u2192 4', 10, 48);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'sin-1-over-x',
                    title: 'sin(1/x): A Limit That Does Not Exist',
                    description: 'Two sequences converge to 0 but yield different function values.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 200, originX: 100, originY: 190 });
                        var ctx = viz.ctx;

                        var showSeqA = true;
                        var showSeqB = true;
                        VizEngine.createButton(controls, 'Toggle x_n = 1/(2n\u03c0)', function() { showSeqA = !showSeqA; });
                        VizEngine.createButton(controls, 'Toggle y_n = 1/(2n\u03c0+\u03c0/2)', function() { showSeqB = !showSeqB; });

                        function f(x) {
                            if (Math.abs(x) < 1e-10) return NaN;
                            return Math.sin(1 / x);
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(0.5);
                            viz.drawAxes();

                            // Draw sin(1/x)
                            viz.drawFunction(f, -3, -0.003, viz.colors.blue, 1.5, 1000);
                            viz.drawFunction(f, 0.003, 3, viz.colors.blue, 1.5, 1000);

                            // Draw sequences
                            if (showSeqA) {
                                for (var n = 1; n <= 15; n++) {
                                    var xn = 1 / (2 * n * Math.PI);
                                    if (xn < 0.001) break;
                                    viz.drawPoint(xn, 0, viz.colors.green, null, 4);
                                    // Dotted line
                                    var sp = viz.toScreen(xn, 0);
                                    ctx.fillStyle = viz.colors.green;
                                    ctx.beginPath();
                                    ctx.arc(sp[0], sp[1], 4, 0, Math.PI * 2);
                                    ctx.fill();
                                }
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.textBaseline = 'top';
                                ctx.fillText('x_n = 1/(2n\u03c0) \u2192 f(x_n) = 0', viz.width - 250, 10);
                            }

                            if (showSeqB) {
                                for (var m = 1; m <= 15; m++) {
                                    var ym = 1 / (2 * m * Math.PI + Math.PI / 2);
                                    if (ym < 0.001) break;
                                    viz.drawPoint(ym, 1, viz.colors.red, null, 4);
                                }
                                ctx.fillStyle = viz.colors.red;
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.textBaseline = 'top';
                                ctx.fillText('y_n = 1/(2n\u03c0+\u03c0/2) \u2192 f(y_n) = 1', viz.width - 250, 28);
                            }

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('sin(1/x): two sequences, two different limits', 10, 10);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('\u21d2 lim_{x\u21920} sin(1/x) does NOT exist', 10, 30);

                            // y-axis labels
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            var y0 = viz.toScreen(0, 0);
                            var y1 = viz.toScreen(0, 1);
                            ctx.fillText('0', y0[0] - 8, y0[1]);
                            ctx.fillStyle = viz.colors.red;
                            ctx.fillText('1', y1[0] - 8, y1[1]);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Use the sequential characterization to prove \\(\\lim_{x \\to 1} x^3 = 1\\).',
                    hint: 'Let \\(x_n \\to 1\\) with \\(x_n \\neq 1\\). Use the algebra of sequence limits: \\(x_n^3 = x_n \\cdot x_n \\cdot x_n \\to 1 \\cdot 1 \\cdot 1\\).',
                    solution: 'Let \\((x_n)\\) be any sequence in \\(\\mathbb{R} \\setminus \\{1\\}\\) with \\(x_n \\to 1\\). By the algebra of sequence limits, \\(f(x_n) = x_n^3 = x_n \\cdot x_n \\cdot x_n \\to 1 \\cdot 1 \\cdot 1 = 1\\). Since this holds for every such sequence, \\(\\lim_{x \\to 1} x^3 = 1\\) by Theorem 5.4. \\(\\square\\)'
                },
                {
                    question: 'Prove that \\(\\lim_{x \\to 0} \\cos(1/x)\\) does not exist.',
                    hint: 'Find two sequences \\(x_n \\to 0\\) giving different values of \\(\\cos(1/x_n)\\).',
                    solution: 'Let \\(x_n = 1/(2n\\pi)\\) and \\(y_n = 1/((2n+1)\\pi)\\). Both converge to \\(0\\). But \\(\\cos(1/x_n) = \\cos(2n\\pi) = 1\\) and \\(\\cos(1/y_n) = \\cos((2n+1)\\pi) = -1\\). Since \\(1 \\neq -1\\), the limit does not exist. \\(\\square\\)'
                },
                {
                    question: 'True or false: if \\(\\lim_{x \\to a} f(x) = L\\) and \\(\\lim_{x \\to a} g(x) = M\\), then \\(\\lim_{x \\to a} [f(x) + g(x)] = L + M\\).',
                    hint: 'Use the sequential characterization and the algebra of sequence limits.',
                    solution: 'True. For any \\(x_n \\to a\\) with \\(x_n \\neq a\\), we have \\(f(x_n) \\to L\\) and \\(g(x_n) \\to M\\), so \\(f(x_n) + g(x_n) \\to L + M\\) by the algebra of sequence limits. By the sequential characterization, \\(\\lim_{x \\to a}[f(x)+g(x)] = L+M\\).'
                },
                {
                    question: 'Let \\(f(x) = \\begin{cases} 1 & x \\in \\mathbb{Q} \\\\ 0 & x \\notin \\mathbb{Q}\\end{cases}\\) (the Dirichlet function). Show that \\(\\lim_{x \\to a} f(x)\\) does not exist for any \\(a \\in \\mathbb{R}\\).',
                    hint: 'For any \\(a\\), find a rational sequence and an irrational sequence converging to \\(a\\).',
                    solution: 'Fix any \\(a \\in \\mathbb{R}\\). The rationals are dense, so there exists \\((r_n) \\subset \\mathbb{Q} \\setminus \\{a\\}\\) with \\(r_n \\to a\\); then \\(f(r_n) = 1\\). The irrationals are also dense, so there exists \\((s_n) \\subset \\mathbb{R} \\setminus \\mathbb{Q}\\) with \\(s_n \\to a\\); then \\(f(s_n) = 0\\). Since \\(1 \\neq 0\\), the limit does not exist. \\(\\square\\)'
                },
                {
                    question: 'Prove that the function limit, if it exists, is unique.',
                    hint: 'Suppose \\(\\lim_{x \\to a} f(x) = L\\) and \\(\\lim_{x \\to a} f(x) = M\\). Take any sequence \\(x_n \\to a\\), and use uniqueness of sequence limits.',
                    solution: 'Suppose \\(L \\neq M\\). Let \\((x_n)\\) be any sequence in \\(A \\setminus \\{a\\}\\) with \\(x_n \\to a\\). By the sequential characterization, \\(f(x_n) \\to L\\) and \\(f(x_n) \\to M\\). But sequence limits are unique (proved in Chapter 4), so \\(L = M\\), a contradiction. \\(\\square\\)'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Limit Laws and Algebraic Computation
        // ============================================================
        {
            id: 'ch05-sec03',
            title: 'Limit Laws',
            content: `
                <h2>Limit Laws</h2>

                <div class="env-block motivation">
                    <div class="env-title">Section Roadmap</div>
                    <div class="env-body">
                        <p>With the sequential characterization in hand, we can now harvest the algebraic limit theorems from Chapter 2 and transplant them wholesale into the function setting. This section builds the computational toolkit (sum, product, quotient, composition rules) that lets us evaluate limits without returning to \\(\\varepsilon\\text{-}\\delta\\) arguments each time. We also preview the concept of <em>continuity</em> that will be the focus of Chapter 6.</p>
                    </div>
                </div>

                <p>The sequential characterization makes it straightforward to inherit all the algebraic limit theorems from sequences. Here is the complete toolkit for computing limits.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.7 (Algebraic Limit Laws for Functions)</div>
                    <div class="env-body">
                        <p>Let \\(\\lim_{x \\to a} f(x) = L\\) and \\(\\lim_{x \\to a} g(x) = M\\). Then:</p>
                        <ol>
                            <li><strong>Sum:</strong> \\(\\lim_{x \\to a} [f(x) + g(x)] = L + M\\)</li>
                            <li><strong>Product:</strong> \\(\\lim_{x \\to a} [f(x) \\cdot g(x)] = L \\cdot M\\)</li>
                            <li><strong>Scalar:</strong> \\(\\lim_{x \\to a} [c \\cdot f(x)] = c \\cdot L\\) for any \\(c \\in \\mathbb{R}\\)</li>
                            <li><strong>Quotient:</strong> \\(\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{L}{M}\\) provided \\(M \\neq 0\\)</li>
                            <li><strong>Power:</strong> \\(\\lim_{x \\to a} [f(x)]^n = L^n\\) for any \\(n \\in \\mathbb{N}\\)</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (via sequential characterization)</div>
                    <div class="env-body">
                        <p>Let \\((x_n)\\) be any sequence in \\(A \\setminus \\{a\\}\\) with \\(x_n \\to a\\). Then \\(f(x_n) \\to L\\) and \\(g(x_n) \\to M\\). By the corresponding algebraic limit theorem for sequences, \\(f(x_n) \\cdot g(x_n) \\to L \\cdot M\\) (for example). Since this holds for every such sequence, the sequential characterization gives \\(\\lim_{x \\to a} f(x)g(x) = LM\\). The other parts are analogous. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="limit-laws-explorer"></div>

                <div class="env-block example">
                    <div class="env-title">Example 5.8</div>
                    <div class="env-body">
                        <p>Compute \\(\\displaystyle\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}\\).</p>
                        <p><em>Solution.</em> Direct substitution gives \\(0/0\\). Factor the numerator: \\(x^3 - 8 = (x - 2)(x^2 + 2x + 4)\\). For \\(x \\neq 2\\):
                        \\[\\frac{x^3 - 8}{x - 2} = x^2 + 2x + 4.\\]
                        Now apply the limit laws directly:
                        \\[\\lim_{x \\to 2} (x^2 + 2x + 4) = 4 + 4 + 4 = 12.\\]</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.9</div>
                    <div class="env-body">
                        <p>Compute \\(\\displaystyle\\lim_{x \\to 0} \\frac{\\sqrt{1+x} - 1}{x}\\).</p>
                        <p><em>Solution.</em> Multiply by the conjugate:
                        \\[\\frac{\\sqrt{1+x} - 1}{x} \\cdot \\frac{\\sqrt{1+x} + 1}{\\sqrt{1+x} + 1} = \\frac{(1+x) - 1}{x(\\sqrt{1+x} + 1)} = \\frac{1}{\\sqrt{1+x} + 1}.\\]
                        By the limit laws, \\(\\lim_{x \\to 0} \\frac{1}{\\sqrt{1+x} + 1} = \\frac{1}{1 + 1} = \\frac{1}{2}\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">When Limit Laws Fail</div>
                    <div class="env-body">
                        <p>Limit laws require that the individual limits <em>exist</em>. The expression \\(\\lim_{x \\to 0} [f(x) - g(x)]\\) where \\(f(x) = 1/x^2\\) and \\(g(x) = 1/x^2\\) equals \\(0\\) by simplification, but you cannot apply the difference law because neither \\(\\lim f\\) nor \\(\\lim g\\) exists individually. Always check hypotheses!</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.10 (Composition of Limits)</div>
                    <div class="env-body">
                        <p>If \\(\\lim_{x \\to a} g(x) = b\\) and \\(f\\) is continuous at \\(b\\), then
                        \\[\\lim_{x \\to a} f(g(x)) = f(b) = f\\!\\left(\\lim_{x \\to a} g(x)\\right).\\]</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Preview</div>
                    <div class="env-body">
                        <p>Continuity will be defined rigorously in Chapter 6. For now, think of continuous functions as those where the limit equals the function value: \\(\\lim_{x \\to a} f(x) = f(a)\\). Most familiar functions (polynomials, exponentials, trig functions) are continuous on their domains.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'limit-laws-explorer',
                    title: 'Limit Laws in Action',
                    description: 'Choose two functions and an operation. Watch how the combined limit is built from individual limits.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 50, originX: 200, originY: 280 });
                        var ctx = viz.ctx;

                        var opChoice = 0;
                        var aVal = 2;

                        function f(x) { return x; }
                        function g(x) { return x * x - 2; }
                        var fLabel = 'f(x) = x';
                        var gLabel = 'g(x) = x\u00b2 - 2';

                        VizEngine.createButton(controls, 'f + g', function() { opChoice = 0; });
                        VizEngine.createButton(controls, 'f \u00b7 g', function() { opChoice = 1; });
                        VizEngine.createButton(controls, 'f / g', function() { opChoice = 2; });
                        VizEngine.createSlider(controls, 'a', -2, 5, 2, 0.1, function(v) { aVal = v; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var Lf = f(aVal);
                            var Lg = g(aVal);

                            var combined, cLabel, cValue;
                            if (opChoice === 0) {
                                combined = function(x) { return f(x) + g(x); };
                                cLabel = 'f + g';
                                cValue = Lf + Lg;
                            } else if (opChoice === 1) {
                                combined = function(x) { return f(x) * g(x); };
                                cLabel = 'f \u00b7 g';
                                cValue = Lf * Lg;
                            } else {
                                combined = function(x) { return Math.abs(g(x)) < 1e-10 ? NaN : f(x) / g(x); };
                                cLabel = 'f / g';
                                cValue = Math.abs(Lg) < 1e-10 ? NaN : Lf / Lg;
                            }

                            // Draw all three functions
                            viz.drawFunction(f, -2, 7, viz.colors.blue, 1.5, 300);
                            viz.drawFunction(g, -2, 7, viz.colors.orange, 1.5, 300);
                            viz.drawFunction(combined, -2, 7, viz.colors.green, 2.5, 400);

                            // Draw vertical line at a
                            var aScreen = viz.toScreen(aVal, 0);
                            ctx.strokeStyle = viz.colors.white + '55';
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath();
                            ctx.moveTo(aScreen[0], 0);
                            ctx.lineTo(aScreen[0], viz.height);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Draw limit points
                            viz.drawPoint(aVal, Lf, viz.colors.blue, null, 5);
                            viz.drawPoint(aVal, Lg, viz.colors.orange, null, 5);
                            if (isFinite(cValue)) {
                                viz.drawPoint(aVal, cValue, viz.colors.green, null, 6);
                            }

                            // Legend
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';

                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText(fLabel + ',  lim = ' + Lf.toFixed(2), 10, 10);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText(gLabel + ',  lim = ' + Lg.toFixed(2), 10, 28);
                            ctx.fillStyle = viz.colors.green;
                            var limStr = isFinite(cValue) ? cValue.toFixed(2) : 'DNE (M=0)';
                            ctx.fillText(cLabel + ',  lim = ' + limStr, 10, 46);

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('a = ' + aVal.toFixed(1), 10, 68);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Use limit laws to compute \\(\\displaystyle\\lim_{x \\to 3} \\frac{x^2 - 9}{x + 3}\\).',
                    hint: 'Factor the numerator: \\(x^2 - 9 = (x-3)(x+3)\\). But wait -- is there a zero in the denominator?',
                    solution: 'The denominator at \\(x = 3\\) is \\(6 \\neq 0\\), so we can directly apply the quotient law: \\(\\lim_{x \\to 3} \\frac{x^2 - 9}{x + 3} = \\frac{9 - 9}{6} = 0\\). Alternatively, factor: \\(\\frac{(x-3)(x+3)}{x+3} = x - 3\\) for \\(x \\neq -3\\), giving \\(\\lim = 0\\).'
                },
                {
                    question: 'Compute \\(\\displaystyle\\lim_{x \\to 1} \\frac{x^3 - 1}{x^2 - 1}\\).',
                    hint: 'Factor: \\(x^3 - 1 = (x-1)(x^2+x+1)\\) and \\(x^2 - 1 = (x-1)(x+1)\\).',
                    solution: 'For \\(x \\neq 1\\): \\(\\frac{x^3 - 1}{x^2 - 1} = \\frac{x^2 + x + 1}{x + 1}\\). By the quotient law, \\(\\lim_{x \\to 1} \\frac{1 + 1 + 1}{1 + 1} = \\frac{3}{2}\\).'
                },
                {
                    question: 'Compute \\(\\displaystyle\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}\\).',
                    hint: 'Note \\(x - 4 = (\\sqrt{x} - 2)(\\sqrt{x} + 2)\\).',
                    solution: 'For \\(x \\neq 4\\): \\(\\frac{\\sqrt{x} - 2}{x - 4} = \\frac{\\sqrt{x} - 2}{(\\sqrt{x}-2)(\\sqrt{x}+2)} = \\frac{1}{\\sqrt{x} + 2}\\). By limit laws, \\(\\lim_{x \\to 4} \\frac{1}{\\sqrt{x}+2} = \\frac{1}{2+2} = \\frac{1}{4}\\).'
                },
                {
                    question: 'Show that if \\(\\lim_{x \\to a} f(x) = L > 0\\), then \\(\\lim_{x \\to a} \\sqrt{f(x)} = \\sqrt{L}\\).',
                    hint: 'Use the sequential characterization: if \\(f(x_n) \\to L\\) and the square root is continuous at \\(L > 0\\)...',
                    solution: 'Let \\(x_n \\to a\\) with \\(x_n \\neq a\\). Then \\(f(x_n) \\to L > 0\\). For large enough \\(n\\), \\(f(x_n) > 0\\). By continuity of \\(\\sqrt{\\cdot}\\) at \\(L\\) (or by the sequence-level theorem), \\(\\sqrt{f(x_n)} \\to \\sqrt{L}\\). The sequential characterization then gives \\(\\lim_{x \\to a} \\sqrt{f(x)} = \\sqrt{L}\\). \\(\\square\\)'
                },
                {
                    question: 'Give an example where \\(\\lim_{x \\to 0} [f(x) \\cdot g(x)]\\) exists but neither \\(\\lim_{x \\to 0} f(x)\\) nor \\(\\lim_{x \\to 0} g(x)\\) exists.',
                    hint: 'Consider functions that oscillate but whose product cancels the oscillation.',
                    solution: 'Let \\(f(x) = \\sin(1/x)\\) and \\(g(x) = x\\). Actually \\(\\lim g\\) exists (it equals 0). A better example: let \\(f(x) = \\mathbf{1}_{\\mathbb{Q}}(x)\\) and \\(g(x) = 0\\) except this is trivial. Instead: \\(f(x) = \\sin(1/x)\\) and \\(g(x) = \\sin(1/x)\\), product \\(= \\sin^2(1/x)\\). But this limit also fails to exist. In fact, if both limits fail to exist, the product law does not apply. A clean example: \\(\\lim_{x \\to 0} f(x) g(x)\\) can exist if \\(g \\to 0\\) (which exists) and \\(f\\) is bounded. So: \\(f(x) = \\sin(1/x), g(x) = x\\); then \\(f \\cdot g \\to 0\\) even though \\(\\lim f\\) does not exist, while \\(\\lim g = 0\\) does exist.'
                }
            ]
        },

        // ============================================================
        // SECTION 4: One-Sided Limits
        // ============================================================
        {
            id: 'ch05-sec04',
            title: 'One-Sided Limits',
            content: `
                <h2>One-Sided Limits</h2>

                <div class="env-block motivation">
                    <div class="env-title">Refining the Two-Sided View</div>
                    <div class="env-body">
                        <p>The two-sided limit \\(\\lim_{x \\to a} f(x) = L\\) requires that \\(f(x)\\) approach \\(L\\) from <em>every</em> direction. But many natural functions (step functions, piecewise definitions, absolute values) behave differently on opposite sides of a point. One-sided limits capture this asymmetry precisely. They will also play a central role in Chapter 6, where they characterize <em>jump discontinuities</em> and determine whether a function can be extended continuously to a boundary point.</p>
                    </div>
                </div>

                <p>Sometimes a function approaches different values depending on whether \\(x\\) approaches \\(a\\) from the <strong>left</strong> or from the <strong>right</strong>. This leads to the notion of one-sided limits.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.11 (Right-Hand Limit)</div>
                    <div class="env-body">
                        <p>We write \\(\\lim_{x \\to a^+} f(x) = L\\) if for every \\(\\varepsilon > 0\\), there exists \\(\\delta > 0\\) such that
                        \\[a < x < a + \\delta \\implies |f(x) - L| < \\varepsilon.\\]</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.12 (Left-Hand Limit)</div>
                    <div class="env-body">
                        <p>We write \\(\\lim_{x \\to a^-} f(x) = L\\) if for every \\(\\varepsilon > 0\\), there exists \\(\\delta > 0\\) such that
                        \\[a - \\delta < x < a \\implies |f(x) - L| < \\varepsilon.\\]</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.13 (Two-Sided vs One-Sided)</div>
                    <div class="env-body">
                        <p>If \\(a\\) is a limit point of both \\((-\\infty, a) \\cap A\\) and \\((a, \\infty) \\cap A\\), then
                        \\[\\lim_{x \\to a} f(x) = L \\iff \\lim_{x \\to a^-} f(x) = L \\text{ and } \\lim_{x \\to a^+} f(x) = L.\\]</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">The Bridge Metaphor</div>
                    <div class="env-body">
                        <p>A two-sided limit is like a bridge that must connect from <em>both</em> sides. If the left bank sits at height 3 and the right bank at height 5, the bridge is broken -- the two-sided limit does not exist. Only when both banks meet at the same height can we build a complete bridge.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="one-sided-limits"></div>

                <div class="env-block example">
                    <div class="env-title">Example 5.14</div>
                    <div class="env-body">
                        <p>Consider the <strong>sign function</strong>:
                        \\[\\text{sgn}(x) = \\begin{cases} -1 & x < 0 \\\\ 0 & x = 0 \\\\ 1 & x > 0 \\end{cases}\\]
                        Then \\(\\lim_{x \\to 0^-} \\text{sgn}(x) = -1\\) and \\(\\lim_{x \\to 0^+} \\text{sgn}(x) = 1\\). Since \\(-1 \\neq 1\\), \\(\\lim_{x \\to 0} \\text{sgn}(x)\\) does not exist.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.15</div>
                    <div class="env-body">
                        <p>The <strong>Heaviside step function</strong> \\(H(x) = \\begin{cases} 0 & x < 0 \\\\ 1 & x \\ge 0 \\end{cases}\\) has
                        \\[\\lim_{x \\to 0^-} H(x) = 0, \\quad \\lim_{x \\to 0^+} H(x) = 1.\\]
                        The function has a <strong>jump discontinuity</strong> at \\(x = 0\\) with jump size \\(|1 - 0| = 1\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="jump-discontinuity"></div>

                <div class="env-block remark">
                    <div class="env-title">One-Sided Limits at Endpoints</div>
                    <div class="env-body">
                        <p>If \\(f\\) is defined on \\([a, b]\\), then at the left endpoint \\(a\\) only the right-hand limit \\(\\lim_{x \\to a^+} f(x)\\) makes sense, and at \\(b\\) only \\(\\lim_{x \\to b^-} f(x)\\) makes sense. There is no "other side" to approach from.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Notation Pitfall</div>
                    <div class="env-body">
                        <p>The notation \\(x \\to a^+\\) means \\(x\\) approaches \\(a\\) from values <em>greater</em> than \\(a\\) (from the right). This is counterintuitive to some. The superscript \\(+\\) indicates the <em>direction</em> from which \\(x\\) comes, not where \\(x\\) goes.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'one-sided-limits',
                    title: 'One-Sided Limits Explorer',
                    description: 'See how a function can have different left-hand and right-hand limits at the same point.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 50, originX: 350, originY: 250 });
                        var ctx = viz.ctx;

                        var funcChoice = 0;
                        VizEngine.createButton(controls, 'sgn(x)', function() { funcChoice = 0; });
                        VizEngine.createButton(controls, '|x|/x', function() { funcChoice = 1; });
                        VizEngine.createButton(controls, 'floor(x) at x=1', function() { funcChoice = 2; });
                        VizEngine.createButton(controls, '1/x', function() { funcChoice = 3; });

                        var probeX = 0.5;
                        VizEngine.createSlider(controls, 'Probe x', -3, 3, 0.5, 0.01, function(v) { probeX = v; });

                        var funcData = [
                            {
                                f: function(x) { return x < 0 ? -1 : (x > 0 ? 1 : 0); },
                                a: 0, leftL: -1, rightL: 1,
                                label: 'sgn(x) at x = 0'
                            },
                            {
                                f: function(x) { return x === 0 ? NaN : Math.abs(x) / x; },
                                a: 0, leftL: -1, rightL: 1,
                                label: '|x|/x at x = 0'
                            },
                            {
                                f: function(x) { return Math.floor(x); },
                                a: 1, leftL: 0, rightL: 1,
                                label: 'floor(x) at x = 1'
                            },
                            {
                                f: function(x) { return x === 0 ? NaN : 1 / x; },
                                a: 0, leftL: -Infinity, rightL: Infinity,
                                label: '1/x at x = 0'
                            }
                        ];

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var fd = funcData[funcChoice];

                            // Draw function
                            viz.drawFunction(fd.f, -5, 5, viz.colors.blue, 2, 600);

                            // Draw one-sided limit indicators
                            var aScr = viz.toScreen(fd.a, 0);

                            // Vertical dashed line at a
                            ctx.strokeStyle = viz.colors.white + '44';
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath();
                            ctx.moveTo(aScr[0], 0);
                            ctx.lineTo(aScr[0], viz.height);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Left-hand limit marker
                            if (isFinite(fd.leftL)) {
                                var leftScr = viz.toScreen(fd.a, fd.leftL);
                                ctx.strokeStyle = viz.colors.red;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.arc(leftScr[0], leftScr[1], 7, 0, Math.PI * 2);
                                ctx.stroke();
                                ctx.fillStyle = viz.colors.red;
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.textAlign = 'right';
                                ctx.textBaseline = 'middle';
                                ctx.fillText('L\u207b = ' + fd.leftL, leftScr[0] - 12, leftScr[1]);

                                // Arrow from left
                                ctx.strokeStyle = viz.colors.red;
                                ctx.lineWidth = 2;
                                var arrowStart = viz.toScreen(fd.a - 2, fd.leftL);
                                ctx.beginPath();
                                ctx.moveTo(arrowStart[0], arrowStart[1]);
                                ctx.lineTo(leftScr[0] - 10, leftScr[1]);
                                ctx.stroke();
                                // Arrowhead
                                ctx.fillStyle = viz.colors.red;
                                ctx.beginPath();
                                ctx.moveTo(leftScr[0] - 10, leftScr[1]);
                                ctx.lineTo(leftScr[0] - 18, leftScr[1] - 4);
                                ctx.lineTo(leftScr[0] - 18, leftScr[1] + 4);
                                ctx.closePath();
                                ctx.fill();
                            } else {
                                ctx.fillStyle = viz.colors.red;
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.textAlign = 'right';
                                ctx.textBaseline = 'top';
                                ctx.fillText('L\u207b = ' + (fd.leftL > 0 ? '+\u221e' : '-\u221e'), aScr[0] - 12, 10);
                            }

                            // Right-hand limit marker
                            if (isFinite(fd.rightL)) {
                                var rightScr = viz.toScreen(fd.a, fd.rightL);
                                ctx.strokeStyle = viz.colors.green;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.arc(rightScr[0], rightScr[1], 7, 0, Math.PI * 2);
                                ctx.stroke();
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.textBaseline = 'middle';
                                ctx.fillText('L\u207a = ' + fd.rightL, rightScr[0] + 12, rightScr[1]);

                                // Arrow from right
                                ctx.strokeStyle = viz.colors.green;
                                ctx.lineWidth = 2;
                                var arrowStart2 = viz.toScreen(fd.a + 2, fd.rightL);
                                ctx.beginPath();
                                ctx.moveTo(arrowStart2[0], arrowStart2[1]);
                                ctx.lineTo(rightScr[0] + 10, rightScr[1]);
                                ctx.stroke();
                                ctx.fillStyle = viz.colors.green;
                                ctx.beginPath();
                                ctx.moveTo(rightScr[0] + 10, rightScr[1]);
                                ctx.lineTo(rightScr[0] + 18, rightScr[1] - 4);
                                ctx.lineTo(rightScr[0] + 18, rightScr[1] + 4);
                                ctx.closePath();
                                ctx.fill();
                            } else {
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.textBaseline = 'top';
                                ctx.fillText('L\u207a = ' + (fd.rightL > 0 ? '+\u221e' : '-\u221e'), aScr[0] + 12, 10);
                            }

                            // Probe point
                            var probeY = fd.f(probeX);
                            if (isFinite(probeY)) {
                                viz.drawPoint(probeX, probeY, viz.colors.purple, null, 5);
                                var pScr = viz.toScreen(probeX, probeY);
                                ctx.fillStyle = viz.colors.purple;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'bottom';
                                ctx.fillText('(' + probeX.toFixed(2) + ', ' + probeY.toFixed(2) + ')', pScr[0], pScr[1] - 8);
                            }

                            // Title and status
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText(fd.label, 10, 10);

                            var exists = isFinite(fd.leftL) && isFinite(fd.rightL) && fd.leftL === fd.rightL;
                            ctx.fillStyle = exists ? viz.colors.green : viz.colors.red;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText(exists ? 'Two-sided limit EXISTS (L\u207b = L\u207a)' : 'Two-sided limit DOES NOT EXIST (L\u207b \u2260 L\u207a)', 10, 30);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'jump-discontinuity',
                    title: 'Anatomy of a Jump Discontinuity',
                    description: 'Build a piecewise function and control the jump size at x = 0.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 50, originX: 350, originY: 250 });
                        var ctx = viz.ctx;

                        var leftVal = -1;
                        var rightVal = 2;

                        VizEngine.createSlider(controls, 'Left limit (L\u207b)', -3, 3, -1, 0.1, function(v) { leftVal = v; draw(); });
                        VizEngine.createSlider(controls, 'Right limit (L\u207a)', -3, 3, 2, 0.1, function(v) { rightVal = v; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            // Draw left piece
                            viz.drawFunction(function(x) { return leftVal + 0.3 * Math.sin(2 * x); }, -6, -0.01, viz.colors.blue, 2.5);

                            // Draw right piece
                            viz.drawFunction(function(x) { return rightVal + 0.3 * Math.sin(2 * x); }, 0.01, 6, viz.colors.blue, 2.5);

                            // Open circles at jump
                            var leftScr = viz.toScreen(0, leftVal);
                            var rightScr = viz.toScreen(0, rightVal);

                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.arc(leftScr[0], leftScr[1], 5, 0, Math.PI * 2);
                            ctx.stroke();

                            ctx.beginPath();
                            ctx.arc(rightScr[0], rightScr[1], 5, 0, Math.PI * 2);
                            ctx.stroke();

                            // Jump arrow
                            if (Math.abs(rightVal - leftVal) > 0.05) {
                                ctx.strokeStyle = viz.colors.red;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([4, 4]);
                                ctx.beginPath();
                                ctx.moveTo(leftScr[0] + 15, leftScr[1]);
                                ctx.lineTo(rightScr[0] + 15, rightScr[1]);
                                ctx.stroke();
                                ctx.setLineDash([]);

                                // Jump size label
                                ctx.fillStyle = viz.colors.red;
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.textBaseline = 'middle';
                                var midY = (leftScr[1] + rightScr[1]) / 2;
                                ctx.fillText('jump = ' + Math.abs(rightVal - leftVal).toFixed(1), leftScr[0] + 22, midY);
                            }

                            // Labels
                            ctx.fillStyle = viz.colors.red;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                            ctx.fillText('L\u207b = ' + leftVal.toFixed(1), leftScr[0] - 12, leftScr[1]);
                            ctx.fillStyle = viz.colors.green;
                            ctx.textAlign = 'left';
                            ctx.fillText('L\u207a = ' + rightVal.toFixed(1), rightScr[0] + 12, rightScr[1]);

                            // Info
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Piecewise function with jump at x = 0', 10, 10);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute \\(\\lim_{x \\to 0^+} \\lfloor x \\rfloor\\) and \\(\\lim_{x \\to 0^-} \\lfloor x \\rfloor\\), where \\(\\lfloor x \\rfloor\\) is the floor function.',
                    hint: 'For \\(0 < x < 1\\), \\(\\lfloor x \\rfloor = 0\\). For \\(-1 < x < 0\\), \\(\\lfloor x \\rfloor = -1\\).',
                    solution: '\\(\\lim_{x \\to 0^+} \\lfloor x \\rfloor = 0\\) since \\(\\lfloor x \\rfloor = 0\\) for \\(x \\in (0,1)\\). And \\(\\lim_{x \\to 0^-} \\lfloor x \\rfloor = -1\\) since \\(\\lfloor x \\rfloor = -1\\) for \\(x \\in (-1, 0)\\). Since \\(0 \\neq -1\\), \\(\\lim_{x \\to 0} \\lfloor x \\rfloor\\) does not exist.'
                },
                {
                    question: 'Does \\(\\lim_{x \\to 0} |x|/x\\) exist? Prove your answer.',
                    hint: 'For \\(x > 0\\), \\(|x|/x = 1\\). For \\(x < 0\\), \\(|x|/x = -1\\).',
                    solution: '\\(\\lim_{x \\to 0^+} |x|/x = 1\\) and \\(\\lim_{x \\to 0^-} |x|/x = -1\\). Since \\(1 \\neq -1\\), the two-sided limit does not exist.'
                },
                {
                    question: 'Let \\(f(x) = \\begin{cases} x^2 & x < 1 \\\\ 2 - x & x \\ge 1 \\end{cases}\\). Find \\(\\lim_{x \\to 1^-} f(x)\\) and \\(\\lim_{x \\to 1^+} f(x)\\). Does \\(\\lim_{x \\to 1} f(x)\\) exist?',
                    hint: 'Evaluate each piece at the boundary.',
                    solution: '\\(\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^-} x^2 = 1\\). \\(\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^+} (2-x) = 1\\). Since both equal \\(1\\), \\(\\lim_{x \\to 1} f(x) = 1\\). The two-sided limit exists.'
                },
                {
                    question: 'Prove using \\(\\varepsilon\\text{-}\\delta\\) that \\(\\lim_{x \\to 0^+} \\sqrt{x} = 0\\).',
                    hint: 'You need: for all \\(\\varepsilon > 0\\), there exists \\(\\delta > 0\\) such that \\(0 < x < \\delta\\) implies \\(\\sqrt{x} < \\varepsilon\\).',
                    solution: 'Let \\(\\varepsilon > 0\\). Choose \\(\\delta = \\varepsilon^2\\). If \\(0 < x < \\delta = \\varepsilon^2\\), then \\(\\sqrt{x} < \\sqrt{\\varepsilon^2} = \\varepsilon\\). So \\(|\\sqrt{x} - 0| < \\varepsilon\\). \\(\\square\\)'
                },
                {
                    question: 'Show that if \\(\\lim_{x \\to a^+} f(x) = L\\) and \\(\\lim_{x \\to a^+} g(x) = M\\), then \\(\\lim_{x \\to a^+} [f(x) + g(x)] = L + M\\).',
                    hint: 'The proof parallels the two-sided case. Use the sequential characterization restricted to sequences \\(x_n > a\\).',
                    solution: 'Let \\((x_n)\\) be any sequence with \\(x_n > a\\) and \\(x_n \\to a\\). Then \\(f(x_n) \\to L\\) and \\(g(x_n) \\to M\\) by the one-sided sequential characterization, so \\(f(x_n) + g(x_n) \\to L + M\\) by the algebra of sequence limits. Since this holds for every such sequence, \\(\\lim_{x \\to a^+} [f(x) + g(x)] = L + M\\). \\(\\square\\)'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Limits at Infinity & the Squeeze Theorem
        // ============================================================
        {
            id: 'ch05-sec05',
            title: 'Limits at Infinity & the Squeeze Theorem',
            content: `
                <h2>Limits at Infinity & the Squeeze Theorem</h2>

                <div class="env-block motivation">
                    <div class="env-title">Extending the Framework</div>
                    <div class="env-body">
                        <p>Sections 1 through 4 addressed limits at a <em>finite</em> point \\(a\\). But analysis frequently asks what happens "in the long run" (as \\(x \\to \\pm\\infty\\)) or when outputs grow without bound (infinite limits). These extensions mirror the sequence-level notions from Chapter 2: \\(\\lim_{x \\to \\infty} f(x) = L\\) parallels \\(\\lim_{n \\to \\infty} a_n = L\\), and \\(\\lim_{x \\to a} f(x) = \\infty\\) parallels divergence to infinity. We close the chapter with the Squeeze Theorem, one of the most versatile proof techniques in analysis, which will reappear in our study of continuity, differentiability, and integration.</p>
                    </div>
                </div>

                <p>So far we have studied \\(\\lim_{x \\to a} f(x)\\) where \\(a\\) is a real number. We now extend the concept in two directions: limits as \\(x \\to \\pm\\infty\\), and infinite limits.</p>

                <h3>Limits at Infinity</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.16 (Limit as \\(x \\to \\infty\\))</div>
                    <div class="env-body">
                        <p>We write \\(\\lim_{x \\to \\infty} f(x) = L\\) if for every \\(\\varepsilon > 0\\), there exists \\(M > 0\\) such that
                        \\[x > M \\implies |f(x) - L| < \\varepsilon.\\]
                        Similarly, \\(\\lim_{x \\to -\\infty} f(x) = L\\) if for every \\(\\varepsilon > 0\\), there exists \\(M > 0\\) such that \\(x < -M \\implies |f(x) - L| < \\varepsilon\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Horizontal Asymptotes</div>
                    <div class="env-body">
                        <p>If \\(\\lim_{x \\to \\infty} f(x) = L\\), the line \\(y = L\\) is a <strong>horizontal asymptote</strong> of \\(f\\). The function's graph gets arbitrarily close to this horizontal line as you look further and further to the right. Unlike the \\(\\varepsilon\\text{-}\\delta\\) definition where we shrink a neighborhood around a finite point, here we push \\(x\\) past a threshold \\(M\\) toward infinity.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="limits-at-infinity"></div>

                <div class="env-block example">
                    <div class="env-title">Example 5.17</div>
                    <div class="env-body">
                        <p>Show that \\(\\lim_{x \\to \\infty} \\frac{1}{x} = 0\\).</p>
                        <p><em>Proof.</em> Let \\(\\varepsilon > 0\\). Choose \\(M = 1/\\varepsilon\\). If \\(x > M\\), then \\(|1/x - 0| = 1/x < 1/M = \\varepsilon\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.18</div>
                    <div class="env-body">
                        <p>Compute \\(\\displaystyle\\lim_{x \\to \\infty} \\frac{3x^2 - x + 4}{2x^2 + 5}\\).</p>
                        <p><em>Solution.</em> Divide numerator and denominator by \\(x^2\\):
                        \\[\\frac{3 - 1/x + 4/x^2}{2 + 5/x^2} \\to \\frac{3 - 0 + 0}{2 + 0} = \\frac{3}{2} \\quad \\text{as } x \\to \\infty.\\]</p>
                    </div>
                </div>

                <h3>Infinite Limits</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.19 (Infinite Limit)</div>
                    <div class="env-body">
                        <p>We write \\(\\lim_{x \\to a} f(x) = \\infty\\) if for every \\(N > 0\\), there exists \\(\\delta > 0\\) such that
                        \\[0 < |x - a| < \\delta \\implies f(x) > N.\\]
                        Similarly for \\(-\\infty\\). Note: these are <em>not</em> true limits in the sense that \\(f\\) converges; rather they describe precise unbounded behavior.</p>
                    </div>
                </div>

                <h3>The Squeeze Theorem for Functions</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.20 (Squeeze Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(g(x) \\le f(x) \\le h(x)\\) for all \\(x\\) in some punctured neighborhood of \\(a\\). If
                        \\[\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L,\\]
                        then \\(\\lim_{x \\to a} f(x) = L\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(\\varepsilon > 0\\). Since \\(\\lim g = L\\), there exists \\(\\delta_1 > 0\\) with \\(0 < |x - a| < \\delta_1 \\implies g(x) > L - \\varepsilon\\). Since \\(\\lim h = L\\), there exists \\(\\delta_2 > 0\\) with \\(0 < |x - a| < \\delta_2 \\implies h(x) < L + \\varepsilon\\). Let \\(\\delta_3 > 0\\) be such that the sandwich inequality holds in \\(0 < |x - a| < \\delta_3\\). Set \\(\\delta = \\min(\\delta_1, \\delta_2, \\delta_3)\\). Then
                        \\[0 < |x - a| < \\delta \\implies L - \\varepsilon < g(x) \\le f(x) \\le h(x) < L + \\varepsilon,\\]
                        so \\(|f(x) - L| < \\varepsilon\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="squeeze-theorem"></div>

                <div class="env-block example">
                    <div class="env-title">Example 5.21</div>
                    <div class="env-body">
                        <p>Prove that \\(\\lim_{x \\to 0} x^2 \\cos(1/x) = 0\\).</p>
                        <p><em>Proof.</em> For \\(x \\neq 0\\), \\(-1 \\le \\cos(1/x) \\le 1\\), so \\(-x^2 \\le x^2 \\cos(1/x) \\le x^2\\). Since \\(\\lim_{x \\to 0} (-x^2) = 0 = \\lim_{x \\to 0} x^2\\), the Squeeze Theorem gives \\(\\lim_{x \\to 0} x^2 \\cos(1/x) = 0\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.22 (A celebrated limit)</div>
                    <div class="env-body">
                        <p>The limit \\(\\displaystyle\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1\\) is fundamental to calculus. A rigorous proof uses the geometric squeeze:
                        \\[\\cos x \\le \\frac{\\sin x}{x} \\le 1 \\quad \\text{for } 0 < |x| < \\pi/2,\\]
                        and the Squeeze Theorem, since \\(\\lim_{x \\to 0} \\cos x = 1\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sin-x-over-x"></div>

                <div class="env-block remark">
                    <div class="env-title">The Squeeze Theorem at Infinity</div>
                    <div class="env-body">
                        <p>The Squeeze Theorem also works for limits at infinity. If \\(g(x) \\le f(x) \\le h(x)\\) for all sufficiently large \\(x\\) and both \\(g, h \\to L\\) as \\(x \\to \\infty\\), then \\(f(x) \\to L\\).</p>
                    </div>
                </div>

                <div class="env-block connection">
                    <div class="env-title">Looking Ahead: From Limits to Continuity</div>
                    <div class="env-body">
                        <p>We can now rigorously evaluate limits of functions, whether at finite points, from one side, or at infinity. The natural next question is: <em>when does the limit equal the function value?</em> That is, when does \\(\\lim_{x \\to a} f(x) = f(a)\\)? This is the definition of <strong>continuity</strong>, the subject of Chapter 6. The consequences turn out to be surprisingly powerful: continuous functions on closed intervals attain their maximum, satisfy the Intermediate Value Theorem, and are uniformly continuous. All of these results rest on the limit theory we have built here.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'limits-at-infinity',
                    title: 'Limits at Infinity: Horizontal Asymptotes',
                    description: 'Watch functions approach their horizontal asymptotes as x grows large.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 25, originX: 80, originY: 200 });
                        var ctx = viz.ctx;

                        var funcChoice = 0;
                        var threshold = 5;

                        var funcs = [
                            { f: function(x) { return 1 / x; }, L: 0, label: '1/x \u2192 0', xMin: 0.1, xMax: 24 },
                            { f: function(x) { return (3 * x * x - x) / (2 * x * x + 5); }, L: 1.5, label: '(3x\u00b2-x)/(2x\u00b2+5) \u2192 3/2', xMin: 0, xMax: 24 },
                            { f: function(x) { return Math.sin(x) / x; }, L: 0, label: 'sin(x)/x \u2192 0', xMin: 0.1, xMax: 24 },
                            { f: function(x) { return (x + Math.sin(x)) / x; }, L: 1, label: '(x+sin(x))/x \u2192 1', xMin: 0.1, xMax: 24 }
                        ];

                        VizEngine.createButton(controls, '1/x', function() { funcChoice = 0; });
                        VizEngine.createButton(controls, 'Rational', function() { funcChoice = 1; });
                        VizEngine.createButton(controls, 'sin(x)/x', function() { funcChoice = 2; });
                        VizEngine.createButton(controls, '(x+sin)/x', function() { funcChoice = 3; });
                        VizEngine.createSlider(controls, 'M threshold', 1, 20, 5, 0.5, function(v) { threshold = v; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var fc = funcs[funcChoice];

                            // Draw horizontal asymptote
                            var asymScreen = viz.toScreen(0, fc.L);
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            ctx.moveTo(0, asymScreen[1]);
                            ctx.lineTo(viz.width, asymScreen[1]);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('y = ' + fc.L, viz.width - 10, asymScreen[1] - 4);

                            // Shade region x > M
                            var threshScreen = viz.toScreen(threshold, 0);
                            ctx.fillStyle = viz.colors.orange + '15';
                            ctx.fillRect(threshScreen[0], 0, viz.width - threshScreen[0], viz.height);
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath();
                            ctx.moveTo(threshScreen[0], 0);
                            ctx.lineTo(threshScreen[0], viz.height);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('x > M = ' + threshold.toFixed(1), threshScreen[0], viz.height - 5);

                            // Draw function
                            viz.drawFunction(fc.f, fc.xMin, fc.xMax, viz.colors.blue, 2, 500);

                            // Info
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText(fc.label, 10, 10);

                            // Show how close f is to L at the threshold
                            var fAtM = fc.f(threshold);
                            if (isFinite(fAtM)) {
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('f(M) = ' + fAtM.toFixed(4) + ',  |f(M) - L| = ' + Math.abs(fAtM - fc.L).toFixed(4), 10, 30);
                            }
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'squeeze-theorem',
                    title: 'The Squeeze Theorem in Action',
                    description: 'Watch the bounding functions squeeze the target function to the limit.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 100, originX: 350, originY: 280 });
                        var ctx = viz.ctx;

                        var funcChoice = 0;
                        VizEngine.createButton(controls, 'x\u00b2 cos(1/x)', function() { funcChoice = 0; });
                        VizEngine.createButton(controls, 'x sin(1/x)', function() { funcChoice = 1; });

                        var funcSets = [
                            {
                                f: function(x) { return x === 0 ? 0 : x * x * Math.cos(1 / x); },
                                g: function(x) { return -x * x; },
                                h: function(x) { return x * x; },
                                L: 0, a: 0,
                                gLabel: '-x\u00b2', hLabel: 'x\u00b2', fLabel: 'x\u00b2cos(1/x)'
                            },
                            {
                                f: function(x) { return x === 0 ? 0 : x * Math.sin(1 / x); },
                                g: function(x) { return -Math.abs(x); },
                                h: function(x) { return Math.abs(x); },
                                L: 0, a: 0,
                                gLabel: '-|x|', hLabel: '|x|', fLabel: 'x sin(1/x)'
                            }
                        ];

                        function draw() {
                            viz.clear();
                            viz.drawGrid(0.5);
                            viz.drawAxes();

                            var fs = funcSets[funcChoice];
                            var xRange = 3;

                            // Shade between g and h
                            viz.shadeBetween(fs.h, fs.g, -xRange, xRange, viz.colors.teal + '18', 300);

                            // Draw bounding functions
                            viz.drawFunction(fs.g, -xRange, xRange, viz.colors.red, 1.5, 300);
                            viz.drawFunction(fs.h, -xRange, xRange, viz.colors.green, 1.5, 300);

                            // Draw the squeezed function
                            viz.drawFunction(fs.f, -xRange, xRange, viz.colors.blue, 2, 800);

                            // Draw limit point
                            viz.drawPoint(fs.a, fs.L, viz.colors.white, null, 6);

                            // Legend
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';

                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('h(x) = ' + fs.hLabel + ' (upper)', 10, 10);
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('f(x) = ' + fs.fLabel + ' (squeezed)', 10, 28);
                            ctx.fillStyle = viz.colors.red;
                            ctx.fillText('g(x) = ' + fs.gLabel + ' (lower)', 10, 46);

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('g(x) \u2264 f(x) \u2264 h(x), and g,h \u2192 ' + fs.L + ', so f \u2192 ' + fs.L, 10, 68);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'sin-x-over-x',
                    title: 'The Celebrated Limit: sin(x)/x',
                    description: 'The geometric squeeze: cos(x) <= sin(x)/x <= 1 near x = 0.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 70, originX: 350, originY: 280 });
                        var ctx = viz.ctx;

                        var showSqueeze = true;
                        VizEngine.createButton(controls, 'Toggle squeeze bounds', function() { showSqueeze = !showSqueeze; });

                        function sinc(x) {
                            return Math.abs(x) < 1e-10 ? 1 : Math.sin(x) / x;
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            // Squeeze bounds
                            if (showSqueeze) {
                                viz.shadeBetween(
                                    function(x) { return 1; },
                                    function(x) { return Math.cos(x); },
                                    -Math.PI / 2, Math.PI / 2, viz.colors.teal + '15', 200
                                );
                                viz.drawFunction(Math.cos, -4, 4, viz.colors.red, 1.5, 300);
                                viz.drawFunction(function() { return 1; }, -4, 4, viz.colors.green, 1.5, 300);
                            }

                            // sin(x)/x
                            viz.drawFunction(sinc, -8, 8, viz.colors.blue, 2.5, 500);

                            // Limit point
                            viz.drawPoint(0, 1, viz.colors.white, null, 5);

                            // Legend
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';

                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('sin(x)/x', 10, 10);

                            if (showSqueeze) {
                                ctx.fillStyle = viz.colors.green;
                                ctx.fillText('h(x) = 1 (upper bound)', 10, 28);
                                ctx.fillStyle = viz.colors.red;
                                ctx.fillText('g(x) = cos(x) (lower bound)', 10, 46);
                            }

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('lim_{x\u21920} sin(x)/x = 1', 10, 68);

                            // Open circle at origin to show the function is not defined there
                            var oScr = viz.toScreen(0, 1);
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.arc(oScr[0], oScr[1], 5, 0, Math.PI * 2);
                            ctx.stroke();
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove from the definition that \\(\\lim_{x \\to \\infty} \\frac{1}{x^2} = 0\\).',
                    hint: 'Given \\(\\varepsilon > 0\\), choose \\(M = 1/\\sqrt{\\varepsilon}\\).',
                    solution: 'Let \\(\\varepsilon > 0\\). Choose \\(M = 1/\\sqrt{\\varepsilon}\\). If \\(x > M\\), then \\(x^2 > M^2 = 1/\\varepsilon\\), so \\(1/x^2 < \\varepsilon\\). Hence \\(|1/x^2 - 0| < \\varepsilon\\). \\(\\square\\)'
                },
                {
                    question: 'Compute \\(\\displaystyle\\lim_{x \\to \\infty} \\frac{5x^3 + 2x}{x^3 - 4}\\).',
                    hint: 'Divide numerator and denominator by \\(x^3\\).',
                    solution: '\\(\\frac{5x^3 + 2x}{x^3 - 4} = \\frac{5 + 2/x^2}{1 - 4/x^3} \\to \\frac{5 + 0}{1 - 0} = 5\\) as \\(x \\to \\infty\\).'
                },
                {
                    question: 'Show that \\(\\lim_{x \\to 0} x^2 \\sin(1/x^2) = 0\\) using the Squeeze Theorem.',
                    hint: 'Bound: \\(-x^2 \\le x^2 \\sin(1/x^2) \\le x^2\\).',
                    solution: 'For \\(x \\neq 0\\), \\(|\\sin(1/x^2)| \\le 1\\), so \\(-x^2 \\le x^2 \\sin(1/x^2) \\le x^2\\). Since \\(\\lim_{x \\to 0} (-x^2) = 0 = \\lim_{x \\to 0} x^2\\), by the Squeeze Theorem, \\(\\lim_{x \\to 0} x^2 \\sin(1/x^2) = 0\\). \\(\\square\\)'
                },
                {
                    question: 'Prove that \\(\\lim_{x \\to 0} \\frac{1-\\cos x}{x^2} = \\frac{1}{2}\\).',
                    hint: 'Use the identity \\(1 - \\cos x = 2\\sin^2(x/2)\\) and the known limit \\(\\sin(t)/t \\to 1\\).',
                    solution: '\\(\\frac{1 - \\cos x}{x^2} = \\frac{2\\sin^2(x/2)}{x^2} = \\frac{2\\sin^2(x/2)}{4(x/2)^2} \\cdot 1 = \\frac{1}{2}\\left(\\frac{\\sin(x/2)}{x/2}\\right)^2.\\) As \\(x \\to 0\\), \\(x/2 \\to 0\\), so \\(\\sin(x/2)/(x/2) \\to 1\\). By the product and composition laws, the limit is \\(\\frac{1}{2} \\cdot 1^2 = \\frac{1}{2}\\).'
                },
                {
                    question: 'Prove that \\(\\lim_{x \\to \\infty} \\frac{\\sin x}{x} = 0\\) using the Squeeze Theorem.',
                    hint: 'Use \\(-1/x \\le \\sin(x)/x \\le 1/x\\) for \\(x > 0\\).',
                    solution: 'For \\(x > 0\\): \\(-1 \\le \\sin x \\le 1\\), so \\(-1/x \\le \\sin(x)/x \\le 1/x\\). Since \\(\\lim_{x \\to \\infty} (-1/x) = 0 = \\lim_{x \\to \\infty} (1/x)\\), the Squeeze Theorem gives \\(\\lim_{x \\to \\infty} \\sin(x)/x = 0\\). \\(\\square\\)'
                },
                {
                    question: 'Show that \\(\\lim_{x \\to 0^+} x \\ln x = 0\\).',
                    hint: 'Substitute \\(x = e^{-t}\\) so that \\(x \\to 0^+\\) becomes \\(t \\to \\infty\\). Then \\(x \\ln x = -t e^{-t}\\).',
                    solution: 'Set \\(t = -\\ln x\\), so \\(x = e^{-t}\\) and as \\(x \\to 0^+\\), \\(t \\to +\\infty\\). Then \\(x \\ln x = e^{-t}(-t) = -t/e^t\\). For \\(t > 0\\), \\(e^t > t^2/2\\) (from the Taylor expansion), so \\(0 < t/e^t < 2/t \\to 0\\). By the Squeeze Theorem, \\(t/e^t \\to 0\\), hence \\(x \\ln x \\to 0\\). \\(\\square\\)'
                }
            ]
        }
    ]
});
