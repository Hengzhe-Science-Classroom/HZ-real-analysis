window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch02',
    number: 2,
    title: 'Sequences & Limits',
    subtitle: 'From intuitive patterns to the rigorous epsilon-N definition of convergence, and the completeness of the real line.',
    sections: [
        // ============================================================
        // SECTION 1: What Is a Sequence?
        // ============================================================
        {
            id: 'ch02-sec01',
            title: 'What Is a Sequence?',
            content: `
                <h2>What Is a Sequence?</h2>

                <p>At the heart of analysis lies an embarrassingly simple object: a <strong>sequence</strong> is just a function from the natural numbers to the reals. You feed it \\(1, 2, 3, \\ldots\\) and it hands back real numbers, one at a time. Yet from this humble raw material, the entire edifice of limits, continuity, and integration will be built.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.1 (Sequence)</div>
                    <div class="env-body">
                        <p>A <strong>sequence</strong> of real numbers is a function \\(a \\colon \\mathbb{N} \\to \\mathbb{R}\\). We write its values as \\(a_1, a_2, a_3, \\ldots\\) and denote the sequence itself by \\((a_n)_{n=1}^{\\infty}\\) or simply \\((a_n)\\).</p>
                    </div>
                </div>

                <p>The notation is flexible. Some authors start at \\(n = 0\\); the choice is a matter of convenience, not substance. What matters is that a sequence is an <em>ordered list</em> indexed by natural numbers --- unlike a set, the same value may appear more than once, and the order matters.</p>

                <h3>Gallery of Important Sequences</h3>

                <p>Before diving into theory, build intuition by studying a few archetypes:</p>

                <div class="env-block example">
                    <div class="env-title">Example 2.2</div>
                    <div class="env-body">
                        <p><strong>(a)</strong> \\(a_n = \\dfrac{1}{n}\\): The harmonic sequence. The terms \\(1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\ldots\\) shrink toward zero. This is the prototypical convergent sequence.</p>
                        <p><strong>(b)</strong> \\(a_n = (-1)^n\\): The terms alternate between \\(-1\\) and \\(+1\\), never settling down. This sequence <em>diverges</em> --- it oscillates forever.</p>
                        <p><strong>(c)</strong> \\(a_n = n^2\\): The terms \\(1, 4, 9, 16, \\ldots\\) explode to infinity. This sequence diverges to \\(+\\infty\\).</p>
                        <p><strong>(d)</strong> \\(a_n = \\dfrac{n}{n+1}\\): The terms \\(\\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}, \\ldots\\) creep up toward \\(1\\) from below, never quite reaching it.</p>
                        <p><strong>(e)</strong> \\(a_n = \\left(1 + \\dfrac{1}{n}\\right)^n\\): This sequence converges to Euler's number \\(e \\approx 2.71828\\ldots\\) One of the most important limits in all of mathematics.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sequence-gallery"></div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Think of a sequence as a process that generates one number after another. The fundamental question of this chapter is: <strong>does the process settle down?</strong> If so, to what value? Making "settle down" precise is exactly what the \\(\\varepsilon\\)-\\(N\\) definition will accomplish.</p>
                    </div>
                </div>

                <h3>Recursive vs. Explicit Definitions</h3>

                <p>Sequences can be defined explicitly (a formula for \\(a_n\\) in terms of \\(n\\)) or recursively (each term defined in terms of previous terms).</p>

                <div class="env-block example">
                    <div class="env-title">Example 2.3 (Recursive sequence)</div>
                    <div class="env-body">
                        <p>Define \\(a_1 = 1\\) and \\(a_{n+1} = \\frac{1}{2}(a_n + 2/a_n)\\) for \\(n \\geq 1\\). This is Newton's method for \\(\\sqrt{2}\\). Computing: \\(a_1 = 1\\), \\(a_2 = 1.5\\), \\(a_3 = 1.4167\\ldots\\), \\(a_4 = 1.41422\\ldots\\). The convergence is spectacularly fast.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>A sequence is <em>not</em> the same as a set. The sequence \\(((-1)^n)\\) has infinitely many terms, but the underlying set \\(\\{-1, +1\\}\\) has only two elements. The sequence \\((1, 1, 1, \\ldots)\\) has one element as a set but infinitely many terms as a sequence.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'sequence-gallery',
                    title: 'Sequence Gallery',
                    description: 'Explore several important sequences. Watch how the terms behave as n grows.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 25, originX: 60, originY: 340 });
                        var current = '1/n';
                        var seqMap = {
                            '1/n': function(n) { return n === 0 ? null : 1 / n; },
                            '(-1)^n': function(n) { return Math.pow(-1, n); },
                            'n^2': function(n) { return n * n; },
                            'n/(n+1)': function(n) { return n / (n + 1); },
                            '(1+1/n)^n': function(n) { return n === 0 ? null : Math.pow(1 + 1 / n, n); }
                        };
                        var scaleMap = {
                            '1/n': { scaleX: 25, scaleY: 250, originY: 340, maxN: 25 },
                            '(-1)^n': { scaleX: 25, scaleY: 120, originY: 200, maxN: 25 },
                            'n^2': { scaleX: 40, scaleY: 1.2, originY: 380, maxN: 15 },
                            'n/(n+1)': { scaleX: 25, scaleY: 250, originY: 340, maxN: 25 },
                            '(1+1/n)^n': { scaleX: 25, scaleY: 100, originY: 340, maxN: 25 }
                        };
                        var limitMap = {
                            '1/n': 0,
                            '(-1)^n': null,
                            'n^2': null,
                            'n/(n+1)': 1,
                            '(1+1/n)^n': Math.E
                        };
                        var labelMap = {
                            '1/n': 'a_n = 1/n',
                            '(-1)^n': 'a_n = (-1)^n',
                            'n^2': 'a_n = n^2',
                            'n/(n+1)': 'a_n = n/(n+1)',
                            '(1+1/n)^n': 'a_n = (1+1/n)^n'
                        };

                        VizEngine.createButton(controls, '1/n', function() { current = '1/n'; });
                        VizEngine.createButton(controls, '(-1)^n', function() { current = '(-1)^n'; });
                        VizEngine.createButton(controls, 'n^2', function() { current = 'n^2'; });
                        VizEngine.createButton(controls, 'n/(n+1)', function() { current = 'n/(n+1)'; });
                        VizEngine.createButton(controls, '(1+1/n)^n', function() { current = '(1+1/n)^n'; });

                        function draw() {
                            var s = scaleMap[current];
                            viz.scale = s.scaleX;
                            viz.originY = s.originY;
                            viz.clear();
                            var ctx = viz.ctx;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 18px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillText(labelMap[current], viz.width / 2, 22);

                            // Draw axes
                            var axisY = s.originY;
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(60, axisY);
                            ctx.lineTo(viz.width - 10, axisY);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(60, 40);
                            ctx.lineTo(60, viz.height - 10);
                            ctx.stroke();

                            // n-axis labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var n = 1; n <= s.maxN; n++) {
                                var sx = 60 + n * s.scaleX;
                                if (sx > viz.width - 15) break;
                                ctx.fillText(n, sx, axisY + 4);
                            }

                            // Draw limit line if convergent
                            var lim = limitMap[current];
                            if (lim !== null) {
                                var limY = axisY - lim * s.scaleY;
                                ctx.strokeStyle = viz.colors.teal;
                                ctx.lineWidth = 1;
                                ctx.setLineDash([6, 4]);
                                ctx.beginPath();
                                ctx.moveTo(60, limY);
                                ctx.lineTo(viz.width - 10, limY);
                                ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.fillStyle = viz.colors.teal;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.textBaseline = 'bottom';
                                var limLabel = lim === Math.E ? 'L = e ~ 2.718' : 'L = ' + lim;
                                ctx.fillText(limLabel, viz.width - 140, limY - 4);
                            }

                            // Draw sequence points
                            var seq = seqMap[current];
                            for (var i = 1; i <= s.maxN; i++) {
                                var val = seq(i);
                                if (val === null || !isFinite(val)) continue;
                                var px = 60 + i * s.scaleX;
                                var py = axisY - val * s.scaleY;
                                if (px > viz.width - 5 || py < 10 || py > viz.height - 5) continue;

                                ctx.fillStyle = viz.colors.orange + '33';
                                ctx.beginPath();
                                ctx.arc(px, py, 7, 0, Math.PI * 2);
                                ctx.fill();
                                ctx.fillStyle = viz.colors.orange;
                                ctx.beginPath();
                                ctx.arc(px, py, 4, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Axis label
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('n', viz.width - 20, axisY + 4);
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                            ctx.fillText('a_n', 55, 50);

                            // Convergence status
                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'top';
                            if (lim !== null) {
                                ctx.fillStyle = viz.colors.green;
                                var limDisp = lim === Math.E ? 'e' : String(lim);
                                ctx.fillText('Converges to ' + limDisp, viz.width - 15, 45);
                            } else if (current === 'n^2') {
                                ctx.fillStyle = viz.colors.red;
                                ctx.fillText('Diverges to +Infinity', viz.width - 15, 45);
                            } else {
                                ctx.fillStyle = viz.colors.red;
                                ctx.fillText('Diverges (oscillates)', viz.width - 15, 45);
                            }
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Write out the first six terms of \\(a_n = \\frac{(-1)^{n+1}}{n}\\). Does this sequence appear to converge? If so, to what?',
                    hint: 'Compute \\(a_1, a_2, \\ldots, a_6\\) directly. Consider the absolute values.',
                    solution: 'The terms are \\(1, -\\frac{1}{2}, \\frac{1}{3}, -\\frac{1}{4}, \\frac{1}{5}, -\\frac{1}{6}\\). The magnitudes shrink to zero, and the terms alternate in sign. The sequence converges to \\(0\\).'
                },
                {
                    question: 'Let \\(a_n = \\frac{2n^2 + 1}{n^2 + 3}\\). Compute \\(a_1, a_{10}, a_{100}\\). What do you conjecture the limit is?',
                    hint: 'Divide numerator and denominator by \\(n^2\\).',
                    solution: '\\(a_1 = 3/4\\), \\(a_{10} = 201/103 \\approx 1.951\\), \\(a_{100} = 20001/10003 \\approx 1.9997\\). Dividing by \\(n^2\\): \\(\\frac{2 + 1/n^2}{1 + 3/n^2} \\to 2\\). The limit is \\(2\\).'
                },
                {
                    question: 'Give an example of a sequence whose terms are all distinct but whose range (as a set) is finite.',
                    hint: 'Think about sequences that cycle through a finite set of values but with a twist.',
                    solution: 'No such sequence exists if we require all terms to be <em>distinct</em> and the range to be finite (a finite set can only supply finitely many distinct values). If we drop the distinctness requirement: \\(a_n = (-1)^n\\) takes only two values but repeats them. If we truly want distinct terms, the range must be infinite.'
                },
                {
                    question: 'Define the sequence \\(a_1 = 2\\), \\(a_{n+1} = \\frac{a_n}{2} + \\frac{3}{a_n}\\). Compute \\(a_2, a_3, a_4\\) and conjecture the limit. If the limit \\(L\\) exists, find it by solving \\(L = L/2 + 3/L\\).',
                    hint: 'If the sequence converges to \\(L\\), then taking limits on both sides gives \\(L = L/2 + 3/L\\).',
                    solution: '\\(a_2 = 1 + 1.5 = 2.5\\), \\(a_3 \\approx 2.45\\), \\(a_4 \\approx 2.449\\ldots\\). Solving \\(L = L/2 + 3/L\\) gives \\(L/2 = 3/L\\), so \\(L^2 = 6\\), hence \\(L = \\sqrt{6} \\approx 2.449\\).'
                },
                {
                    question: 'Prove that if \\((a_n)\\) is a sequence with \\(a_n = c\\) for all \\(n\\) (a constant sequence), then \\((a_n)\\) converges to \\(c\\).',
                    hint: 'Use the definition of convergence directly. Given any \\(\\varepsilon > 0\\), what is \\(|a_n - c|\\)?',
                    solution: 'For any \\(\\varepsilon > 0\\), choose \\(N = 1\\). For all \\(n \\geq N\\), \\(|a_n - c| = |c - c| = 0 < \\varepsilon\\). Since \\(\\varepsilon\\) was arbitrary, \\(a_n \\to c\\).'
                },
                {
                    question: 'Consider \\(a_n = \\sin(n)\\). Does this sequence converge? Explain your reasoning intuitively.',
                    hint: 'Think about whether \\(\\sin(n)\\) for integer \\(n\\) (radians) ever settles down. What do you know about the density of \\(\\{n \\bmod 2\\pi : n \\in \\mathbb{N}\\}\\)?',
                    solution: 'The sequence \\((\\sin n)\\) does <em>not</em> converge. Since \\(\\pi\\) is irrational, the fractional parts \\(\\{n/(2\\pi)\\}\\) are dense in \\([0,1]\\) (by Weyl equidistribution). Hence \\(\\sin(n)\\) comes arbitrarily close to every value in \\([-1,1]\\) infinitely often and cannot settle to a single limit.'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Convergence: The epsilon-N Definition
        // ============================================================
        {
            id: 'ch02-sec02',
            title: 'Convergence: The \\(\\varepsilon\\)-\\(N\\) Definition',
            content: `
                <h2>Convergence: The \\(\\varepsilon\\)-\\(N\\) Definition</h2>

                <p>Informally, a sequence "converges to \\(L\\)" means the terms get <em>eventually as close as we like</em> to \\(L\\). The genius of Weierstrass's formalization is to replace this vague language with a precise game between a challenger and a defender.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.4 (Convergence of a sequence)</div>
                    <div class="env-body">
                        <p>A sequence \\((a_n)\\) <strong>converges</strong> to \\(L \\in \\mathbb{R}\\) if for every \\(\\varepsilon > 0\\) there exists \\(N \\in \\mathbb{N}\\) such that
                        \\[n \\geq N \\implies |a_n - L| < \\varepsilon.\\]
                        We write \\(\\lim_{n\\to\\infty} a_n = L\\) or \\(a_n \\to L\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">The \\(\\varepsilon\\)-\\(N\\) Game</div>
                    <div class="env-body">
                        <p>Picture this as a two-player game:</p>
                        <ol>
                            <li><strong>Challenger</strong> picks any \\(\\varepsilon > 0\\), no matter how tiny. This defines a horizontal band \\((L - \\varepsilon, \\, L + \\varepsilon)\\) around the limit.</li>
                            <li><strong>Defender</strong> must respond with an \\(N\\) so that every term \\(a_n\\) with \\(n \\geq N\\) lies inside the band.</li>
                        </ol>
                        <p>The sequence converges to \\(L\\) precisely when the Defender has a winning strategy for <em>every</em> challenge.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="epsilon-n-game"></div>

                <h3>Working through the definition</h3>

                <div class="env-block example">
                    <div class="env-title">Example 2.5</div>
                    <div class="env-body">
                        <p>Prove \\(\\lim_{n\\to\\infty} \\frac{1}{n} = 0\\).</p>
                        <p><em>Proof.</em> Let \\(\\varepsilon > 0\\). Choose \\(N\\) to be any natural number with \\(N > 1/\\varepsilon\\) (the Archimedean property guarantees such \\(N\\) exists). Then for all \\(n \\geq N\\),
                        \\[\\left|\\frac{1}{n} - 0\\right| = \\frac{1}{n} \\leq \\frac{1}{N} < \\varepsilon. \\quad \\blacksquare\\]</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.6</div>
                    <div class="env-body">
                        <p>Prove \\(\\lim_{n\\to\\infty} \\frac{3n+1}{2n+5} = \\frac{3}{2}\\).</p>
                        <p><em>Proof.</em> We compute \\(\\left|\\frac{3n+1}{2n+5} - \\frac{3}{2}\\right| = \\left|\\frac{2(3n+1) - 3(2n+5)}{2(2n+5)}\\right| = \\frac{13}{2(2n+5)} < \\frac{13}{4n}\\).</p>
                        <p>Given \\(\\varepsilon > 0\\), choose \\(N > 13/(4\\varepsilon)\\). Then for \\(n \\geq N\\):
                        \\[\\left|\\frac{3n+1}{2n+5} - \\frac{3}{2}\\right| < \\frac{13}{4n} \\leq \\frac{13}{4N} < \\varepsilon. \\quad \\blacksquare\\]</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="convergence-animation"></div>

                <div class="env-block warning">
                    <div class="env-title">Common Pitfalls</div>
                    <div class="env-body">
                        <ul>
                            <li>The order of quantifiers is sacred: \\(\\forall \\varepsilon > 0 \\; \\exists N\\), <strong>not</strong> \\(\\exists N \\; \\forall \\varepsilon\\). Swapping them gives a much stronger (and usually false) statement.</li>
                            <li>\\(N\\) is allowed to depend on \\(\\varepsilon\\). In fact it usually <em>must</em>: smaller \\(\\varepsilon\\) requires larger \\(N\\).</li>
                            <li>The definition says "for all \\(n \\geq N\\)," not just "for \\(n = N\\)." The entire tail must be captured.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.7 (Divergence)</div>
                    <div class="env-body">
                        <p>A sequence <strong>diverges</strong> if it does not converge to any \\(L \\in \\mathbb{R}\\). We say \\(a_n \\to +\\infty\\) if for every \\(M > 0\\) there exists \\(N\\) such that \\(n \\geq N \\implies a_n > M\\). Similarly for \\(a_n \\to -\\infty\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.8 (Uniqueness of limits)</div>
                    <div class="env-body">
                        <p>If \\(a_n \\to L\\) and \\(a_n \\to L'\\), then \\(L = L'\\).</p>
                        <p><em>Proof.</em> Let \\(\\varepsilon > 0\\). Choose \\(N_1\\) so that \\(n \\geq N_1 \\implies |a_n - L| < \\varepsilon/2\\) and \\(N_2\\) so that \\(n \\geq N_2 \\implies |a_n - L'| < \\varepsilon/2\\). For \\(n \\geq \\max(N_1, N_2)\\):
                        \\[|L - L'| \\leq |L - a_n| + |a_n - L'| < \\varepsilon.\\]
                        Since \\(\\varepsilon\\) was arbitrary, \\(|L - L'| = 0\\), so \\(L = L'\\). \\(\\blacksquare\\)</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'epsilon-n-game',
                    title: 'The Epsilon-N Game',
                    description: 'Set epsilon (the challenge) and find N (the response). All terms past N must lie in the green band.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 22, originX: 55, originY: 350 });
                        var epsilon = 0.3;
                        var userN = 4;
                        var seqChoice = '1/n';

                        var seqFn = {
                            '1/n': function(n) { return n === 0 ? 1 : 1 / n; },
                            'n/(n+1)': function(n) { return n / (n + 1); },
                            '(-1)^n/n': function(n) { return n === 0 ? 0 : Math.pow(-1, n) / n; }
                        };
                        var limitOf = { '1/n': 0, 'n/(n+1)': 1, '(-1)^n/n': 0 };
                        var maxN = 28;

                        VizEngine.createSlider(controls, 'Epsilon', 0.02, 1.0, 0.3, 0.01, function(v) { epsilon = v; });
                        VizEngine.createSlider(controls, 'Your N', 1, maxN, 4, 1, function(v) { userN = Math.round(v); });
                        VizEngine.createButton(controls, 'a_n = 1/n', function() { seqChoice = '1/n'; });
                        VizEngine.createButton(controls, 'a_n = n/(n+1)', function() { seqChoice = 'n/(n+1)'; });
                        VizEngine.createButton(controls, 'a_n = (-1)^n/n', function() { seqChoice = '(-1)^n/n'; });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var seq = seqFn[seqChoice];
                            var L = limitOf[seqChoice];

                            var scaleY = seqChoice === 'n/(n+1)' ? 250 : 200;
                            var originY = seqChoice === 'n/(n+1)' ? 380 : 250;
                            var scaleX = 22;

                            // Draw epsilon band
                            var bandTop = originY - (L + epsilon) * scaleY;
                            var bandBot = originY - (L - epsilon) * scaleY;
                            ctx.fillStyle = viz.colors.green + '18';
                            ctx.fillRect(55, bandTop, viz.width - 65, bandBot - bandTop);
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([5, 3]);
                            ctx.beginPath(); ctx.moveTo(55, bandTop); ctx.lineTo(viz.width - 10, bandTop); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(55, bandBot); ctx.lineTo(viz.width - 10, bandBot); ctx.stroke();
                            ctx.setLineDash([]);

                            // Limit line
                            var limY = originY - L * scaleY;
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(55, limY); ctx.lineTo(viz.width - 10, limY); ctx.stroke();

                            // N divider
                            var nLine = 55 + userN * scaleX;
                            ctx.strokeStyle = viz.colors.purple;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath(); ctx.moveTo(nLine, 30); ctx.lineTo(nLine, viz.height - 10); ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.purple;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('N = ' + userN, nLine, viz.height - 25);

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(55, originY); ctx.lineTo(viz.width - 10, originY); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(55, 20); ctx.lineTo(55, viz.height - 10); ctx.stroke();

                            // Draw sequence points
                            var allInBand = true;
                            for (var n = 1; n <= maxN; n++) {
                                var val = seq(n);
                                if (!isFinite(val)) continue;
                                var px = 55 + n * scaleX;
                                var py = originY - val * scaleY;
                                if (px > viz.width - 5) break;
                                if (py < 10 || py > viz.height - 5) continue;

                                var inBand = Math.abs(val - L) < epsilon;
                                var pastN = n >= userN;

                                if (pastN && !inBand) allInBand = false;

                                var color = pastN ? (inBand ? viz.colors.green : viz.colors.red) : viz.colors.orange;
                                ctx.fillStyle = color + '33';
                                ctx.beginPath();
                                ctx.arc(px, py, 7, 0, Math.PI * 2);
                                ctx.fill();
                                ctx.fillStyle = color;
                                ctx.beginPath();
                                ctx.arc(px, py, 4, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Labels
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'middle';
                            ctx.fillText('L + \u03B5 = ' + (L + epsilon).toFixed(2), viz.width - 130, bandTop - 8);
                            ctx.fillText('L - \u03B5 = ' + (L - epsilon).toFixed(2), viz.width - 130, bandBot + 12);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('L = ' + L, viz.width - 130, limY - 8);

                            // Title and verdict
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('The \u03B5-N Game: ' + seqChoice, viz.width / 2, 5);

                            if (allInBand) {
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.fillText('Success! All terms past N are in the band.', viz.width / 2, 28);
                            } else {
                                ctx.fillStyle = viz.colors.red;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.fillText('Not yet -- some terms past N escape the band. Increase N!', viz.width / 2, 28);
                            }
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'convergence-animation',
                    title: 'Convergence Animation',
                    description: 'Watch epsilon shrink and N chase after it. See the interplay between the challenge and the response.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 350, scale: 22, originX: 55, originY: 300 });
                        var animating = false;
                        var t = 0;
                        var speed = 0.5;

                        VizEngine.createButton(controls, 'Start Animation', function() { animating = true; t = 0; });
                        VizEngine.createButton(controls, 'Pause', function() { animating = false; });
                        VizEngine.createButton(controls, 'Reset', function() { animating = false; t = 0; });

                        function draw(timestamp) {
                            viz.clear();
                            var ctx = viz.ctx;
                            if (animating) t += 0.008 * speed;
                            if (t > 1) t = 0;

                            var epsilon = 0.8 * Math.pow(0.05 / 0.8, t);
                            var N = Math.ceil(1 / epsilon);
                            var maxN = 30;
                            var scaleX = 20;
                            var scaleY = 220;
                            var originY = 300;
                            var L = 0;

                            // Epsilon band
                            var bandTop = originY - (L + epsilon) * scaleY;
                            var bandBot = originY - (L - epsilon) * scaleY;
                            ctx.fillStyle = viz.colors.green + '18';
                            ctx.fillRect(55, bandTop, viz.width - 65, bandBot - bandTop);
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([5, 3]);
                            ctx.beginPath(); ctx.moveTo(55, bandTop); ctx.lineTo(viz.width - 10, bandTop); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(55, bandBot); ctx.lineTo(viz.width - 10, bandBot); ctx.stroke();
                            ctx.setLineDash([]);

                            // Limit line
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(55, originY); ctx.lineTo(viz.width - 10, originY); ctx.stroke();

                            // N divider
                            var nLine = 55 + Math.min(N, maxN) * scaleX;
                            ctx.strokeStyle = viz.colors.purple;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath(); ctx.moveTo(nLine, 45); ctx.lineTo(nLine, viz.height - 5); ctx.stroke();
                            ctx.setLineDash([]);

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(55, originY); ctx.lineTo(viz.width - 10, originY); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(55, 40); ctx.lineTo(55, viz.height - 5); ctx.stroke();

                            // Sequence 1/n
                            for (var n = 1; n <= maxN; n++) {
                                var val = 1 / n;
                                var px = 55 + n * scaleX;
                                var py = originY - val * scaleY;
                                if (px > viz.width - 5) break;
                                var inBand = Math.abs(val - L) < epsilon;
                                var pastN = n >= N;
                                var color = pastN ? viz.colors.green : viz.colors.orange;
                                ctx.fillStyle = color;
                                ctx.beginPath();
                                ctx.arc(px, py, 4, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Info display
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('a_n = 1/n converges to 0', viz.width / 2, 5);

                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.green;
                            ctx.textAlign = 'left';
                            ctx.fillText('\u03B5 = ' + epsilon.toFixed(4), 70, 30);
                            ctx.fillStyle = viz.colors.purple;
                            ctx.fillText('N = ' + N + '  (need N > 1/\u03B5 = ' + (1/epsilon).toFixed(1) + ')', 250, 30);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Using the \\(\\varepsilon\\)-\\(N\\) definition, prove that \\(\\lim_{n\\to\\infty} \\frac{n}{n+1} = 1\\).',
                    hint: 'Compute \\(|n/(n+1) - 1| = 1/(n+1)\\). Given \\(\\varepsilon > 0\\), find \\(N\\) so that \\(1/(N+1) < \\varepsilon\\).',
                    solution: 'Let \\(\\varepsilon > 0\\). We have \\(|n/(n+1) - 1| = 1/(n+1)\\). Choose \\(N > 1/\\varepsilon - 1\\) (i.e., \\(N+1 > 1/\\varepsilon\\)). Then for \\(n \\geq N\\): \\(1/(n+1) \\leq 1/(N+1) < \\varepsilon\\). \\(\\blacksquare\\)'
                },
                {
                    question: 'Show that the sequence \\(a_n = (-1)^n\\) does not converge. (Hint: try a proof by contradiction using \\(\\varepsilon = 1\\).)',
                    hint: 'Suppose \\(a_n \\to L\\). Choose \\(\\varepsilon = 1\\). Consider what happens at consecutive terms.',
                    solution: 'Suppose \\(a_n \\to L\\). Take \\(\\varepsilon = 1\\). Then there exists \\(N\\) with \\(|a_n - L| < 1\\) for all \\(n \\geq N\\). But \\(|a_n - a_{n+1}| = |(-1)^n - (-1)^{n+1}| = 2\\). By the triangle inequality, \\(2 = |a_n - a_{n+1}| \\leq |a_n - L| + |a_{n+1} - L| < 1 + 1 = 2\\), a contradiction.'
                },
                {
                    question: 'For \\(a_n = 1/n^2\\), find an explicit \\(N\\) (in terms of \\(\\varepsilon\\)) such that \\(n \\geq N \\implies |a_n| < \\varepsilon\\).',
                    hint: 'You need \\(1/n^2 < \\varepsilon\\), i.e., \\(n > 1/\\sqrt{\\varepsilon}\\).',
                    solution: 'Choose \\(N = \\lceil 1/\\sqrt{\\varepsilon} \\rceil + 1\\) (or any integer exceeding \\(1/\\sqrt{\\varepsilon}\\)). Then for \\(n \\geq N\\): \\(1/n^2 \\leq 1/N^2 < \\varepsilon\\).'
                },
                {
                    question: 'Prove that if \\(a_n \\to L\\) and \\(a_n \\geq 0\\) for all \\(n\\), then \\(L \\geq 0\\).',
                    hint: 'Suppose \\(L < 0\\) and use \\(\\varepsilon = |L|/2\\) to reach a contradiction.',
                    solution: 'Suppose \\(L < 0\\). Set \\(\\varepsilon = -L/2 > 0\\). Then there exists \\(N\\) with \\(|a_n - L| < -L/2\\) for all \\(n \\geq N\\). This gives \\(a_n < L + (-L/2) = L/2 < 0\\), contradicting \\(a_n \\geq 0\\).'
                },
                {
                    question: 'Does the definition of convergence change if we replace \\(|a_n - L| < \\varepsilon\\) with \\(|a_n - L| \\leq \\varepsilon\\)?',
                    hint: 'If the strict version holds for all \\(\\varepsilon > 0\\), does the non-strict version hold too? Conversely?',
                    solution: 'No, the definition is equivalent. If \\(|a_n - L| < \\varepsilon\\) holds for all \\(\\varepsilon > 0\\), then certainly \\(|a_n - L| \\leq \\varepsilon\\). Conversely, if \\(|a_n - L| \\leq \\varepsilon\\) for all \\(\\varepsilon > 0\\), then for any \\(\\varepsilon_0 > 0\\), applying the hypothesis with \\(\\varepsilon = \\varepsilon_0/2\\) gives \\(|a_n - L| \\leq \\varepsilon_0/2 < \\varepsilon_0\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Limit Laws
        // ============================================================
        {
            id: 'ch02-sec03',
            title: 'Limit Laws',
            content: `
                <h2>Limit Laws</h2>

                <p>Working from the \\(\\varepsilon\\)-\\(N\\) definition every single time would be excruciating. The <em>algebraic limit laws</em> let us compute limits by combining simpler ones, just as arithmetic rules let us build complicated calculations from basic operations.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.9 (Algebraic Limit Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(a_n \\to a\\) and \\(b_n \\to b\\). Then:</p>
                        <ol>
                            <li><strong>Sum:</strong> \\(a_n + b_n \\to a + b\\)</li>
                            <li><strong>Scalar multiple:</strong> \\(c \\cdot a_n \\to c \\cdot a\\) for any constant \\(c\\)</li>
                            <li><strong>Product:</strong> \\(a_n \\cdot b_n \\to a \\cdot b\\)</li>
                            <li><strong>Quotient:</strong> If \\(b \\neq 0\\), then \\(a_n / b_n \\to a/b\\) (eventually \\(b_n \\neq 0\\))</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Proof sketch for the sum rule</div>
                    <div class="env-body">
                        <p>Given \\(\\varepsilon > 0\\), we need \\(|(a_n + b_n) - (a+b)| < \\varepsilon\\). By the triangle inequality:
                        \\[|(a_n + b_n) - (a+b)| \\leq |a_n - a| + |b_n - b|.\\]
                        Make each piece less than \\(\\varepsilon/2\\) by choosing \\(N_1\\) for \\(|a_n - a| < \\varepsilon/2\\) and \\(N_2\\) for \\(|b_n - b| < \\varepsilon/2\\). Take \\(N = \\max(N_1, N_2)\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.10</div>
                    <div class="env-body">
                        <p>Compute \\(\\lim_{n\\to\\infty} \\frac{5n^2 - 3n + 1}{2n^2 + 7n}\\).</p>
                        <p><em>Solution.</em> Divide numerator and denominator by \\(n^2\\):
                        \\[\\frac{5 - 3/n + 1/n^2}{2 + 7/n}.\\]
                        By limit laws: numerator \\(\\to 5 - 0 + 0 = 5\\), denominator \\(\\to 2 + 0 = 2\\). By the quotient rule: limit is \\(5/2\\).</p>
                    </div>
                </div>

                <h3>The Squeeze Theorem</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.11 (Squeeze Theorem for Sequences)</div>
                    <div class="env-body">
                        <p>If \\(a_n \\leq c_n \\leq b_n\\) for all \\(n \\geq N_0\\) and \\(a_n \\to L\\) and \\(b_n \\to L\\), then \\(c_n \\to L\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="squeeze-theorem-viz"></div>

                <div class="env-block example">
                    <div class="env-title">Example 2.12</div>
                    <div class="env-body">
                        <p>Prove \\(\\lim_{n\\to\\infty} \\frac{\\sin n}{n} = 0\\).</p>
                        <p><em>Proof.</em> Since \\(-1 \\leq \\sin n \\leq 1\\), we have \\(-1/n \\leq \\sin(n)/n \\leq 1/n\\). Both \\(-1/n \\to 0\\) and \\(1/n \\to 0\\), so by the squeeze theorem, \\(\\sin(n)/n \\to 0\\). \\(\\blacksquare\\)</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.13 (Convergent sequences are bounded)</div>
                    <div class="env-body">
                        <p>If \\(a_n \\to L\\), then there exists \\(M > 0\\) such that \\(|a_n| \\leq M\\) for all \\(n\\).</p>
                        <p><em>Proof.</em> Take \\(\\varepsilon = 1\\). There exists \\(N\\) with \\(|a_n - L| < 1\\) for \\(n \\geq N\\), so \\(|a_n| < |L| + 1\\) for \\(n \\geq N\\). Set \\(M = \\max(|a_1|, \\ldots, |a_{N-1}|, |L| + 1)\\). \\(\\blacksquare\\)</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The converse is false: bounded sequences need not converge. Example: \\((-1)^n\\) is bounded by 1 but diverges. The extra ingredient needed is <em>monotonicity</em> --- see the next section.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'squeeze-theorem-viz',
                    title: 'Squeeze Theorem',
                    description: 'Watch sin(n)/n get squeezed between -1/n and 1/n as both converge to zero.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 20, originX: 55, originY: 200 });
                        var showBounds = true;
                        var nMax = 30;

                        VizEngine.createButton(controls, 'Toggle Bounds', function() { showBounds = !showBounds; });
                        VizEngine.createSlider(controls, 'Terms', 10, 60, 30, 1, function(v) { nMax = Math.round(v); });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var scaleX = 20;
                            var scaleY = 150;
                            var originY = 200;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(55, originY); ctx.lineTo(viz.width - 10, originY); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(55, 20); ctx.lineTo(55, viz.height - 20); ctx.stroke();

                            // Upper and lower bounds as curves
                            if (showBounds) {
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 1;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath();
                                for (var n = 1; n <= nMax; n++) {
                                    var px = 55 + n * scaleX;
                                    var py = originY - (1 / n) * scaleY;
                                    if (px > viz.width - 5) break;
                                    n === 1 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
                                }
                                ctx.stroke();

                                ctx.beginPath();
                                for (var n2 = 1; n2 <= nMax; n2++) {
                                    var px2 = 55 + n2 * scaleX;
                                    var py2 = originY - (-1 / n2) * scaleY;
                                    if (px2 > viz.width - 5) break;
                                    n2 === 1 ? ctx.moveTo(px2, py2) : ctx.lineTo(px2, py2);
                                }
                                ctx.stroke();
                                ctx.setLineDash([]);

                                // Fill between bounds
                                ctx.fillStyle = viz.colors.blue + '0a';
                                ctx.beginPath();
                                for (var n3 = 1; n3 <= nMax; n3++) {
                                    var px3 = 55 + n3 * scaleX;
                                    if (px3 > viz.width - 5) break;
                                    var py3u = originY - (1 / n3) * scaleY;
                                    n3 === 1 ? ctx.moveTo(px3, py3u) : ctx.lineTo(px3, py3u);
                                }
                                for (var n4 = Math.min(nMax, Math.floor((viz.width - 60) / scaleX)); n4 >= 1; n4--) {
                                    var px4 = 55 + n4 * scaleX;
                                    var py4l = originY - (-1 / n4) * scaleY;
                                    ctx.lineTo(px4, py4l);
                                }
                                ctx.closePath();
                                ctx.fill();
                            }

                            // Sequence points: sin(n)/n
                            for (var i = 1; i <= nMax; i++) {
                                var val = Math.sin(i) / i;
                                var spx = 55 + i * scaleX;
                                var spy = originY - val * scaleY;
                                if (spx > viz.width - 5) break;

                                ctx.fillStyle = viz.colors.orange;
                                ctx.beginPath();
                                ctx.arc(spx, spy, 4, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Limit line at 0
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(55, originY); ctx.lineTo(viz.width - 10, originY); ctx.stroke();

                            // Labels
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Squeeze Theorem: -1/n  <=  sin(n)/n  <=  1/n', viz.width / 2, 5);

                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.orange;
                            ctx.textAlign = 'left';
                            ctx.fillText('sin(n)/n (orange dots)', 70, 30);
                            if (showBounds) {
                                ctx.fillStyle = viz.colors.blue;
                                ctx.fillText('+/- 1/n bounds (blue dashes)', 70, 48);
                            }
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('L = 0 (limit)', 70, 66);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Using limit laws, compute \\(\\lim_{n\\to\\infty} \\frac{3n^3 + n}{n^3 - 2n^2 + 1}\\).',
                    hint: 'Divide numerator and denominator by \\(n^3\\).',
                    solution: 'Dividing by \\(n^3\\): \\(\\frac{3 + 1/n^2}{1 - 2/n + 1/n^3} \\to \\frac{3+0}{1-0+0} = 3\\).'
                },
                {
                    question: 'Prove the scalar multiple rule: if \\(a_n \\to a\\), then \\(c \\cdot a_n \\to c \\cdot a\\).',
                    hint: 'Use \\(|c a_n - ca| = |c| \\cdot |a_n - a|\\). If \\(c = 0\\), the result is trivial.',
                    solution: 'If \\(c = 0\\), the result is trivial. If \\(c \\neq 0\\), given \\(\\varepsilon > 0\\), choose \\(N\\) so that \\(|a_n - a| < \\varepsilon/|c|\\) for \\(n \\geq N\\). Then \\(|ca_n - ca| = |c||a_n - a| < |c| \\cdot \\varepsilon/|c| = \\varepsilon\\).'
                },
                {
                    question: 'Use the squeeze theorem to evaluate \\(\\lim_{n\\to\\infty} \\frac{n!}{n^n}\\).',
                    hint: 'Show \\(0 \\leq n!/n^n \\leq 1/n\\) by bounding each factor \\(k/n \\leq 1\\) except the first.',
                    solution: 'Write \\(n!/n^n = (1/n)(2/n)\\cdots(n/n)\\). Each factor \\(k/n \\leq 1\\), and the first factor is \\(1/n\\). So \\(0 \\leq n!/n^n \\leq 1/n \\to 0\\). By squeeze, \\(n!/n^n \\to 0\\).'
                },
                {
                    question: 'If \\(a_n \\to 0\\) and \\((b_n)\\) is bounded, prove \\(a_n b_n \\to 0\\).',
                    hint: 'Since \\((b_n)\\) is bounded, \\(|b_n| \\leq M\\) for some \\(M\\). Use \\(|a_n b_n| \\leq M|a_n|\\).',
                    solution: 'Let \\(M\\) bound \\(|b_n|\\). Given \\(\\varepsilon > 0\\), choose \\(N\\) with \\(|a_n| < \\varepsilon/M\\) for \\(n \\geq N\\). Then \\(|a_n b_n| \\leq M|a_n| < M \\cdot \\varepsilon/M = \\varepsilon\\).'
                },
                {
                    question: 'Find the limit of \\(a_n = \\sqrt{n+1} - \\sqrt{n}\\). (Hint: rationalize.)',
                    hint: 'Multiply and divide by \\(\\sqrt{n+1} + \\sqrt{n}\\).',
                    solution: '\\(\\sqrt{n+1} - \\sqrt{n} = \\frac{(n+1)-n}{\\sqrt{n+1}+\\sqrt{n}} = \\frac{1}{\\sqrt{n+1}+\\sqrt{n}} \\leq \\frac{1}{2\\sqrt{n}} \\to 0\\). The limit is \\(0\\).'
                },
                {
                    question: 'Show that \\(\\lim_{n \\to \\infty} \\frac{2^n}{n!} = 0\\). (Hint: for \\(n \\geq 3\\), each new factor \\(2/k\\) is at most \\(2/3\\).)',
                    hint: 'Split: \\(2^n/n! = (2/1)(2/2)(2/3)(2/4)\\cdots(2/n) = 2 \\cdot (2/3)(2/4)\\cdots(2/n) \\leq 2 \\cdot (2/3)^{n-2}\\).',
                    solution: 'For \\(n \\geq 3\\): \\(2^n/n! = 4/2 \\cdot \\prod_{k=3}^{n} 2/k \\leq 2 \\cdot (2/3)^{n-2}\\). Since \\(0 < 2/3 < 1\\), the geometric term \\(\\to 0\\), so by squeeze \\(2^n/n! \\to 0\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Monotone Convergence & Boundedness
        // ============================================================
        {
            id: 'ch02-sec04',
            title: 'Monotone Convergence & Boundedness',
            content: `
                <h2>Monotone Convergence & Boundedness</h2>

                <p>We saw that bounded sequences need not converge (example: \\((-1)^n\\)). But if we add <em>monotonicity</em> --- the terms march steadily in one direction --- then boundedness <em>does</em> guarantee convergence. This is one of the most powerful tools in analysis.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.14</div>
                    <div class="env-body">
                        <p>A sequence \\((a_n)\\) is:</p>
                        <ul>
                            <li><strong>increasing</strong> if \\(a_n \\leq a_{n+1}\\) for all \\(n\\),</li>
                            <li><strong>strictly increasing</strong> if \\(a_n < a_{n+1}\\) for all \\(n\\),</li>
                            <li><strong>decreasing</strong> if \\(a_n \\geq a_{n+1}\\) for all \\(n\\),</li>
                            <li><strong>monotone</strong> if it is either increasing or decreasing.</li>
                        </ul>
                        <p>A sequence is <strong>bounded above</strong> if there exists \\(M\\) with \\(a_n \\leq M\\) for all \\(n\\), <strong>bounded below</strong> if there exists \\(m\\) with \\(a_n \\geq m\\) for all \\(n\\), and <strong>bounded</strong> if both.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.15 (Monotone Convergence Theorem)</div>
                    <div class="env-body">
                        <p>Every bounded, monotone sequence converges. More precisely:</p>
                        <ul>
                            <li>If \\((a_n)\\) is increasing and bounded above, then \\(a_n \\to \\sup\\{a_n : n \\in \\mathbb{N}\\}\\).</li>
                            <li>If \\((a_n)\\) is decreasing and bounded below, then \\(a_n \\to \\inf\\{a_n : n \\in \\mathbb{N}\\}\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Proof idea</div>
                    <div class="env-body">
                        <p>Consider an increasing sequence bounded above. The set \\(\\{a_1, a_2, \\ldots\\}\\) is bounded above, so by the <strong>completeness axiom</strong>, it has a supremum \\(s\\). We claim \\(a_n \\to s\\). Given \\(\\varepsilon > 0\\), since \\(s - \\varepsilon\\) is not an upper bound, there exists \\(N\\) with \\(a_N > s - \\varepsilon\\). Since \\((a_n)\\) is increasing, for all \\(n \\geq N\\): \\(s - \\varepsilon < a_N \\leq a_n \\leq s\\), so \\(|a_n - s| < \\varepsilon\\).</p>
                        <p>Notice: <strong>this proof uses completeness of \\(\\mathbb{R}\\)</strong>. The theorem fails in \\(\\mathbb{Q}\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="monotone-convergence-viz"></div>

                <div class="env-block example">
                    <div class="env-title">Example 2.16</div>
                    <div class="env-body">
                        <p>Let \\(a_1 = 1\\) and \\(a_{n+1} = \\sqrt{2 + a_n}\\). Show that \\((a_n)\\) converges and find its limit.</p>
                        <p><em>Step 1 (bounded above):</em> By induction, \\(a_n < 2\\) for all \\(n\\). Base: \\(a_1 = 1 < 2\\). If \\(a_n < 2\\), then \\(a_{n+1} = \\sqrt{2 + a_n} < \\sqrt{4} = 2\\). Check.</p>
                        <p><em>Step 2 (increasing):</em> We show \\(a_{n+1} > a_n\\). Note \\(a_{n+1}^2 - a_n^2 = (2 + a_n) - a_n^2 = -(a_n^2 - a_n - 2) = -(a_n-2)(a_n+1)\\). Since \\(a_n < 2\\) and \\(a_n > 0\\), this is positive, so \\(a_{n+1} > a_n\\).</p>
                        <p><em>Step 3 (find limit):</em> By MCT, the limit \\(L\\) exists. Taking limits: \\(L = \\sqrt{2 + L}\\), so \\(L^2 = 2 + L\\), giving \\(L^2 - L - 2 = 0\\), hence \\((L-2)(L+1) = 0\\). Since \\(L > 0\\), \\(L = 2\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.17 (Euler's number)</div>
                    <div class="env-body">
                        <p>The sequence \\(a_n = \\left(1 + \\frac{1}{n}\\right)^n\\) is increasing and bounded above by \\(3\\) (one can show this using the binomial theorem). By the MCT, it converges. Its limit is Euler's number \\(e \\approx 2.71828\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Why completeness matters</div>
                    <div class="env-body">
                        <p>In \\(\\mathbb{Q}\\), define \\(a_1 = 1\\), \\(a_{n+1} = a_n/2 + 1/a_n\\). This is increasing and bounded above (by 2), but its limit is \\(\\sqrt{2} \\notin \\mathbb{Q}\\). The MCT fails in incomplete spaces. Completeness of \\(\\mathbb{R}\\) is not just a technical nicety --- it is the engine that makes analysis work.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'monotone-convergence-viz',
                    title: 'Monotone Convergence Theorem',
                    description: 'Watch a monotone bounded sequence converge to its supremum. Try different recursive sequences.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 20, originX: 55, originY: 340 });
                        var seqType = 'sqrt';

                        VizEngine.createButton(controls, 'sqrt(2+a_n)', function() { seqType = 'sqrt'; });
                        VizEngine.createButton(controls, '(1+1/n)^n', function() { seqType = 'euler'; });
                        VizEngine.createButton(controls, 'a_n/2 + 1/a_n', function() { seqType = 'newton'; });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var terms = [];
                            var limitVal, label;

                            if (seqType === 'sqrt') {
                                terms.push(1);
                                for (var i = 1; i < 20; i++) terms.push(Math.sqrt(2 + terms[i-1]));
                                limitVal = 2;
                                label = 'a_{n+1} = sqrt(2 + a_n), a_1 = 1';
                            } else if (seqType === 'euler') {
                                for (var j = 1; j <= 30; j++) terms.push(Math.pow(1 + 1/j, j));
                                limitVal = Math.E;
                                label = 'a_n = (1 + 1/n)^n';
                            } else {
                                terms.push(1);
                                for (var k = 1; k < 20; k++) terms.push(terms[k-1]/2 + 1/terms[k-1]);
                                limitVal = Math.sqrt(2);
                                label = 'a_{n+1} = a_n/2 + 1/a_n, a_1 = 1';
                            }

                            var scaleX = 22;
                            var scaleY = 100;
                            var originY = 340;
                            var maxDisp = Math.min(terms.length, Math.floor((viz.width - 70) / scaleX));

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(55, originY); ctx.lineTo(viz.width - 10, originY); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(55, 30); ctx.lineTo(55, viz.height - 10); ctx.stroke();

                            // Limit line
                            var limY = originY - limitVal * scaleY;
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath(); ctx.moveTo(55, limY); ctx.lineTo(viz.width - 10, limY); ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('L = ' + limitVal.toFixed(5), viz.width - 150, limY - 4);

                            // Sup band (slight highlight)
                            ctx.fillStyle = viz.colors.green + '0c';
                            ctx.fillRect(55, limY, viz.width - 65, originY - limY);

                            // Sequence points and connecting segments
                            for (var n = 0; n < maxDisp; n++) {
                                var px = 55 + (n + 1) * scaleX;
                                var py = originY - terms[n] * scaleY;

                                // Connect to previous
                                if (n > 0) {
                                    var ppx = 55 + n * scaleX;
                                    var ppy = originY - terms[n-1] * scaleY;
                                    ctx.strokeStyle = viz.colors.orange + '44';
                                    ctx.lineWidth = 1;
                                    ctx.beginPath(); ctx.moveTo(ppx, ppy); ctx.lineTo(px, py); ctx.stroke();
                                }

                                ctx.fillStyle = viz.colors.orange;
                                ctx.beginPath();
                                ctx.arc(px, py, 4, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Labels
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Monotone Convergence: ' + label, viz.width / 2, 5);

                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.text;
                            ctx.textAlign = 'left';
                            ctx.fillText('Increasing + bounded above => converges to sup', 70, 28);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that the sequence \\(a_n = 1 - 1/2^n\\) is increasing and bounded above. Find its limit.',
                    hint: 'Check \\(a_{n+1} - a_n > 0\\). Show \\(a_n < 1\\) for all \\(n\\).',
                    solution: '\\(a_{n+1} - a_n = 1/2^n - 1/2^{n+1} = 1/2^{n+1} > 0\\), so increasing. Also \\(a_n = 1 - 1/2^n < 1\\) for all \\(n\\), so bounded above by 1. By MCT, the limit exists. Taking limits: \\(L = 1 - 0 = 1\\).'
                },
                {
                    question: 'Let \\(a_1 = 1\\), \\(a_{n+1} = \\frac{1}{2}(a_n + 3)\\). Prove that \\((a_n)\\) is increasing, bounded above by 3, and find its limit.',
                    hint: 'Show \\(a_{n+1} - a_n = (3 - a_n)/2 > 0\\) when \\(a_n < 3\\). Use induction for the bound.',
                    solution: 'If \\(a_n < 3\\), then \\(a_{n+1} = (a_n + 3)/2 < (3+3)/2 = 3\\). Also \\(a_{n+1} - a_n = (3 - a_n)/2 > 0\\). Base: \\(a_1 = 1 < 3\\). By MCT, the limit \\(L\\) exists, and \\(L = (L+3)/2\\), so \\(L = 3\\).'
                },
                {
                    question: 'Give an example of a bounded sequence that is <em>not</em> monotone and <em>does not</em> converge.',
                    hint: 'Oscillation is the enemy of convergence.',
                    solution: '\\(a_n = (-1)^n\\). It is bounded (\\(|a_n| = 1\\)) but not monotone (alternating \\(-1, 1, -1, \\ldots\\)) and does not converge.'
                },
                {
                    question: 'Prove the MCT fails in \\(\\mathbb{Q}\\) by giving an explicit counterexample.',
                    hint: 'Construct an increasing sequence of rationals bounded above that converges to an irrational.',
                    solution: 'Let \\(a_n\\) be the decimal expansion of \\(\\sqrt{2}\\) truncated to \\(n\\) digits: \\(1, 1.4, 1.41, 1.414, \\ldots\\). Each \\(a_n \\in \\mathbb{Q}\\), the sequence is increasing, bounded above by \\(1.5\\), but \\(a_n \\to \\sqrt{2} \\notin \\mathbb{Q}\\).'
                },
                {
                    question: 'Let \\(a_1 = 2\\), \\(a_{n+1} = \\frac{1}{2}\\left(a_n + \\frac{6}{a_n}\\right)\\). Show this converges and find the limit.',
                    hint: 'This is Newton\'s method for \\(\\sqrt{6}\\). Show \\(a_n^2 \\geq 6\\) for \\(n \\geq 2\\) (AM-GM), then show decreasing.',
                    solution: 'By AM-GM: \\(a_{n+1} = (a_n + 6/a_n)/2 \\geq \\sqrt{6}\\) for \\(n \\geq 1\\). Also \\(a_{n+1} \\leq a_n\\) iff \\(a_n^2 \\geq 6\\), which holds for \\(n \\geq 2\\) (since \\(a_2 = 2.5\\), \\(a_2^2 = 6.25 \\geq 6\\)). So eventually decreasing and bounded below by \\(\\sqrt{6}\\). The limit satisfies \\(L = (L + 6/L)/2\\), giving \\(L = \\sqrt{6}\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Bolzano-Weierstrass & Cauchy Sequences
        // ============================================================
        {
            id: 'ch02-sec05',
            title: 'Bolzano-Weierstrass & Cauchy Sequences',
            content: `
                <h2>Bolzano-Weierstrass & Cauchy Sequences</h2>

                <p>The Monotone Convergence Theorem requires monotonicity. What about sequences that bounce around? The Bolzano-Weierstrass theorem says that even a wild bounded sequence has a <em>convergent subsequence</em>. And the Cauchy criterion gives a way to detect convergence <em>without knowing the limit in advance</em>.</p>

                <h3>Subsequences</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.18 (Subsequence)</div>
                    <div class="env-body">
                        <p>Let \\((a_n)\\) be a sequence and let \\(n_1 < n_2 < n_3 < \\cdots\\) be a strictly increasing sequence of natural numbers. Then \\((a_{n_k})_{k=1}^{\\infty}\\) is a <strong>subsequence</strong> of \\((a_n)\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.19</div>
                    <div class="env-body">
                        <p>The sequence \\(a_n = (-1)^n\\) diverges, but the subsequence \\(a_{2k} = (-1)^{2k} = 1\\) converges to \\(1\\), and the subsequence \\(a_{2k-1} = (-1)^{2k-1} = -1\\) converges to \\(-1\\). A divergent sequence can have convergent subsequences.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.20 (Bolzano-Weierstrass Theorem)</div>
                    <div class="env-body">
                        <p>Every bounded sequence in \\(\\mathbb{R}\\) has a convergent subsequence.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Proof idea (bisection)</div>
                    <div class="env-body">
                        <p>Suppose \\((a_n) \\subseteq [a, b]\\). Cut \\([a,b]\\) in half. At least one half contains infinitely many terms --- pick that half and select a term. Repeat. The selected terms form a subsequence in a nested sequence of intervals whose lengths shrink to zero. By the nested intervals theorem, they converge.</p>
                    </div>
                </div>

                <h3>Cauchy Sequences</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.21 (Cauchy sequence)</div>
                    <div class="env-body">
                        <p>A sequence \\((a_n)\\) is <strong>Cauchy</strong> if for every \\(\\varepsilon > 0\\), there exists \\(N \\in \\mathbb{N}\\) such that
                        \\[m, n \\geq N \\implies |a_m - a_n| < \\varepsilon.\\]</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>A Cauchy sequence is one where the terms get <em>close to each other</em> (not necessarily to a known limit). The brilliance is that this is an <strong>intrinsic</strong> property --- you don't need to know the limit to check it.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="cauchy-sequence-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.22 (Cauchy Criterion for Convergence)</div>
                    <div class="env-body">
                        <p>A sequence in \\(\\mathbb{R}\\) converges if and only if it is Cauchy.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p><strong>(\\(\\Rightarrow\\))</strong> If \\(a_n \\to L\\), then \\(|a_m - a_n| \\leq |a_m - L| + |L - a_n|\\), and each is small for large \\(m, n\\). Easy.</p>
                        <p><strong>(\\(\\Leftarrow\\))</strong> This is the deep direction. A Cauchy sequence is bounded (prove this). By Bolzano-Weierstrass, it has a convergent subsequence \\(a_{n_k} \\to L\\). Using the Cauchy property, show the <em>full sequence</em> converges to \\(L\\). This direction relies on completeness.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Completeness connection</div>
                    <div class="env-body">
                        <p>A metric space where every Cauchy sequence converges is called <strong>complete</strong>. The fact that \\(\\mathbb{R}\\) is complete is <em>equivalent</em> to the least upper bound property. This is why \\(\\mathbb{R}\\) --- and not \\(\\mathbb{Q}\\) --- is the natural home for analysis.</p>
                        <p>The following are all equivalent formulations of the completeness of \\(\\mathbb{R}\\):</p>
                        <ol>
                            <li>Least upper bound property (supremum axiom)</li>
                            <li>Monotone convergence theorem</li>
                            <li>Bolzano-Weierstrass theorem</li>
                            <li>Cauchy completeness</li>
                            <li>Nested intervals property</li>
                        </ol>
                        <p>These are logically equivalent: any one of them, together with the ordered field axioms, implies all the others.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'cauchy-sequence-viz',
                    title: 'Cauchy Sequence Visualization',
                    description: 'Compare a Cauchy sequence (convergent) with a non-Cauchy sequence. Watch how the terms cluster together or fail to.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 20, originX: 55, originY: 280 });
                        var showCauchy = true;

                        VizEngine.createButton(controls, 'Cauchy: 1/n', function() { showCauchy = true; });
                        VizEngine.createButton(controls, 'Cauchy: (-1)^n/n', function() { showCauchy = 'alt'; });
                        VizEngine.createButton(controls, 'Not Cauchy: (-1)^n', function() { showCauchy = false; });
                        VizEngine.createButton(controls, 'Not Cauchy: log(n)', function() { showCauchy = 'log'; });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var maxN = 30;
                            var scaleX = 20;
                            var terms = [];
                            var label, isCauchy;

                            if (showCauchy === true) {
                                for (var i = 1; i <= maxN; i++) terms.push(1 / i);
                                label = 'a_n = 1/n  (Cauchy -- converges to 0)';
                                isCauchy = true;
                            } else if (showCauchy === 'alt') {
                                for (var i2 = 1; i2 <= maxN; i2++) terms.push(Math.pow(-1, i2) / i2);
                                label = 'a_n = (-1)^n / n  (Cauchy -- converges to 0)';
                                isCauchy = true;
                            } else if (showCauchy === false) {
                                for (var i3 = 1; i3 <= maxN; i3++) terms.push(Math.pow(-1, i3));
                                label = 'a_n = (-1)^n  (Not Cauchy -- diverges)';
                                isCauchy = false;
                            } else {
                                for (var i4 = 1; i4 <= maxN; i4++) terms.push(Math.log(i4) / 3);
                                label = 'a_n = ln(n)/3  (Not Cauchy -- diverges to +inf)';
                                isCauchy = false;
                            }

                            var scaleY = 120;
                            var originY = 280;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(55, originY); ctx.lineTo(viz.width - 10, originY); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(55, 30); ctx.lineTo(55, viz.height - 10); ctx.stroke();

                            // Sequence plot
                            for (var n = 0; n < terms.length; n++) {
                                var px = 55 + (n + 1) * scaleX;
                                var py = originY - terms[n] * scaleY;
                                if (px > viz.width - 5) break;
                                if (py < 5 || py > viz.height - 5) continue;

                                // Connect to previous
                                if (n > 0) {
                                    var ppx = 55 + n * scaleX;
                                    var ppy = originY - terms[n-1] * scaleY;
                                    if (ppy >= 5 && ppy <= viz.height - 5) {
                                        ctx.strokeStyle = (isCauchy ? viz.colors.green : viz.colors.red) + '33';
                                        ctx.lineWidth = 1;
                                        ctx.beginPath(); ctx.moveTo(ppx, ppy); ctx.lineTo(px, py); ctx.stroke();
                                    }
                                }

                                ctx.fillStyle = isCauchy ? viz.colors.green : viz.colors.red;
                                ctx.beginPath();
                                ctx.arc(px, py, 4, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Show |a_m - a_n| gap for last few terms
                            if (terms.length >= 2) {
                                var lastIdx = Math.min(terms.length - 1, Math.floor((viz.width - 70) / scaleX) - 1);
                                var prevIdx = lastIdx - 1;
                                if (prevIdx >= 0 && lastIdx >= 0) {
                                    var gap = Math.abs(terms[lastIdx] - terms[prevIdx]);
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '13px -apple-system,sans-serif';
                                    ctx.textAlign = 'left';
                                    ctx.textBaseline = 'top';
                                    ctx.fillText('|a_' + (lastIdx+1) + ' - a_' + (lastIdx) + '| = ' + gap.toFixed(4), 70, viz.height - 30);
                                }
                            }

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText(label, viz.width / 2, 5);

                            // Status
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillStyle = isCauchy ? viz.colors.green : viz.colors.red;
                            ctx.textAlign = 'left';
                            if (isCauchy) {
                                ctx.fillText('Terms cluster together as n grows -- Cauchy criterion satisfied', 70, 28);
                            } else {
                                ctx.fillText('Terms do NOT cluster -- Cauchy criterion fails', 70, 28);
                            }
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(a_n = (-1)^n + 1/n\\). Find two convergent subsequences with different limits.',
                    hint: 'Consider the even-indexed and odd-indexed subsequences separately.',
                    solution: 'Even: \\(a_{2k} = 1 + 1/(2k) \\to 1\\). Odd: \\(a_{2k-1} = -1 + 1/(2k-1) \\to -1\\). Two subsequences converging to different limits, confirming the full sequence diverges.'
                },
                {
                    question: 'Prove that every convergent sequence is Cauchy.',
                    hint: 'Use the triangle inequality: \\(|a_m - a_n| \\leq |a_m - L| + |a_n - L|\\).',
                    solution: 'Let \\(a_n \\to L\\) and \\(\\varepsilon > 0\\). Choose \\(N\\) with \\(|a_n - L| < \\varepsilon/2\\) for \\(n \\geq N\\). For \\(m, n \\geq N\\): \\(|a_m - a_n| \\leq |a_m - L| + |a_n - L| < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon\\).'
                },
                {
                    question: 'Show that a Cauchy sequence is bounded.',
                    hint: 'Use \\(\\varepsilon = 1\\) to trap the tail, then add the finitely many initial terms.',
                    solution: 'Take \\(\\varepsilon = 1\\). There exists \\(N\\) with \\(|a_m - a_n| < 1\\) for \\(m,n \\geq N\\). In particular, \\(|a_n| \\leq |a_N| + 1\\) for \\(n \\geq N\\). Set \\(M = \\max(|a_1|, \\ldots, |a_{N-1}|, |a_N|+1)\\). Then \\(|a_n| \\leq M\\) for all \\(n\\).'
                },
                {
                    question: 'The sequence \\(a_n = \\sum_{k=1}^n \\frac{1}{k^2}\\) is increasing. Show it is bounded above by 2 and conclude it converges. (Hint: \\(1/k^2 \\leq 1/(k(k-1))\\) for \\(k \\geq 2\\), and telescope.)',
                    hint: '\\(1/(k(k-1)) = 1/(k-1) - 1/k\\). Sum this telescope.',
                    solution: '\\(a_n = 1 + \\sum_{k=2}^n 1/k^2 \\leq 1 + \\sum_{k=2}^n (1/(k-1) - 1/k) = 1 + (1 - 1/n) < 2\\). Since \\((a_n)\\) is increasing and bounded above by 2, MCT gives convergence. (The limit is \\(\\pi^2/6\\), proved by Euler.)'
                },
                {
                    question: 'Give an example of a Cauchy sequence in \\(\\mathbb{Q}\\) that does not converge in \\(\\mathbb{Q}\\). What does this say about the completeness of \\(\\mathbb{Q}\\)?',
                    hint: 'Construct rational approximations to an irrational number.',
                    solution: 'Let \\(a_n\\) be the decimal truncation of \\(\\sqrt{2}\\) to \\(n\\) places: \\(1, 1.4, 1.41, 1.414, \\ldots\\). Each \\(a_n \\in \\mathbb{Q}\\), and \\(|a_m - a_n| \\leq 10^{-\\min(m,n)}\\) so it is Cauchy. But \\(a_n \\to \\sqrt{2} \\notin \\mathbb{Q}\\). This shows \\(\\mathbb{Q}\\) is not complete.'
                },
                {
                    question: 'If \\(a_n \\to L\\), prove that <em>every</em> subsequence \\((a_{n_k})\\) also converges to \\(L\\).',
                    hint: 'Since \\(n_k \\geq k\\), the subsequence indices grow at least as fast.',
                    solution: 'Given \\(\\varepsilon > 0\\), choose \\(N\\) with \\(|a_n - L| < \\varepsilon\\) for \\(n \\geq N\\). Since \\(n_k \\geq k\\) (by strict increase), for \\(k \\geq N\\) we have \\(n_k \\geq k \\geq N\\), so \\(|a_{n_k} - L| < \\varepsilon\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 6: Limsup and Liminf
        // ============================================================
        {
            id: 'ch02-sec06',
            title: 'Limsup and Liminf',
            content: `
                <h2>Limsup and Liminf</h2>

                <p>Not every bounded sequence converges, but every bounded sequence has a <em>best attempt at a limit from above</em> and <em>from below</em>. These are the <strong>limit superior</strong> and <strong>limit inferior</strong>, two of the most useful technical tools in analysis.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.23 (Limsup and Liminf)</div>
                    <div class="env-body">
                        <p>Let \\((a_n)\\) be a bounded sequence. Define:</p>
                        <ul>
                            <li>\\(\\displaystyle\\limsup_{n\\to\\infty} a_n = \\lim_{n\\to\\infty} \\sup_{k \\geq n} a_k = \\inf_{n \\geq 1} \\sup_{k \\geq n} a_k\\)</li>
                            <li>\\(\\displaystyle\\liminf_{n\\to\\infty} a_n = \\lim_{n\\to\\infty} \\inf_{k \\geq n} a_k = \\sup_{n \\geq 1} \\inf_{k \\geq n} a_k\\)</li>
                        </ul>
                        <p>Equivalently, \\(\\limsup a_n\\) is the <strong>largest subsequential limit</strong> and \\(\\liminf a_n\\) is the <strong>smallest subsequential limit</strong>.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Think of \\(\\sup_{k \\geq n} a_k\\) as the "high-water mark of the future" at time \\(n\\). As \\(n\\) increases, you see less of the future, so this high-water mark can only decrease (or stay the same). It's a decreasing, bounded-below sequence --- hence it converges by MCT. Its limit is \\(\\limsup a_n\\).</p>
                        <p>Similarly, \\(\\inf_{k \\geq n} a_k\\) is the "worst case of the future," which can only increase. Its limit is \\(\\liminf a_n\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="limsup-liminf-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.24 (Properties of limsup and liminf)</div>
                    <div class="env-body">
                        <p>For any bounded sequence \\((a_n)\\):</p>
                        <ol>
                            <li>\\(\\liminf a_n \\leq \\limsup a_n\\)</li>
                            <li>\\(\\lim a_n\\) exists if and only if \\(\\liminf a_n = \\limsup a_n\\), in which case all three are equal.</li>
                            <li>There exist subsequences \\(a_{n_k} \\to \\limsup a_n\\) and \\(a_{m_k} \\to \\liminf a_n\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.25</div>
                    <div class="env-body">
                        <p><strong>(a)</strong> \\(a_n = (-1)^n\\): \\(\\limsup = 1\\), \\(\\liminf = -1\\). Since they differ, the sequence diverges.</p>
                        <p><strong>(b)</strong> \\(a_n = (-1)^n/n\\): \\(\\limsup = 0\\), \\(\\liminf = 0\\). They agree, confirming \\(a_n \\to 0\\).</p>
                        <p><strong>(c)</strong> \\(a_n = \\sin(n)\\): \\(\\limsup = 1\\), \\(\\liminf = -1\\) (by equidistribution of \\(n \\bmod 2\\pi\\)). The sequence diverges.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.26</div>
                    <div class="env-body">
                        <p>Consider \\(a_n = (-1)^n + 1/n\\). The terms are \\(-1 + 1, 1 + 1/2, -1 + 1/3, 1 + 1/4, \\ldots\\) i.e., \\(0, 3/2, -2/3, 5/4, -4/5, \\ldots\\)</p>
                        <p>The even subsequence converges to \\(1\\), the odd subsequence to \\(-1\\). So \\(\\limsup = 1\\) and \\(\\liminf = -1\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.27 (Limsup/liminf and subsequential limits)</div>
                    <div class="env-body">
                        <p>Let \\(S\\) denote the set of all subsequential limits of \\((a_n)\\). Then:</p>
                        <ul>
                            <li>\\(\\limsup a_n = \\sup S\\) and \\(\\liminf a_n = \\inf S\\).</li>
                            <li>Both \\(\\limsup\\) and \\(\\liminf\\) are themselves elements of \\(S\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Looking ahead</div>
                    <div class="env-body">
                        <p>The limsup and liminf will reappear throughout this course: in the <strong>root test</strong> and <strong>ratio test</strong> for series (Chapter 3), in defining the <strong>radius of convergence</strong> of power series, and in measure theory. They are the Swiss army knife of real analysis --- less elegant than a plain limit, but always available.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'limsup-liminf-viz',
                    title: 'Limsup and Liminf Tracker',
                    description: 'Watch the running sup and inf of the tail shrink toward the limsup and liminf.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 20, originX: 55, originY: 250 });
                        var seqType = 'alt';

                        VizEngine.createButton(controls, '(-1)^n', function() { seqType = 'alt'; });
                        VizEngine.createButton(controls, '(-1)^n + 1/n', function() { seqType = 'alt_decay'; });
                        VizEngine.createButton(controls, 'sin(n)', function() { seqType = 'sin'; });
                        VizEngine.createButton(controls, '1/n (converges)', function() { seqType = 'conv'; });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var maxN = 30;
                            var scaleX = 20;
                            var scaleY, originY, terms, label;

                            if (seqType === 'alt') {
                                scaleY = 120; originY = 250;
                                terms = []; for (var i = 1; i <= maxN; i++) terms.push(Math.pow(-1, i));
                                label = 'a_n = (-1)^n';
                            } else if (seqType === 'alt_decay') {
                                scaleY = 100; originY = 250;
                                terms = []; for (var j = 1; j <= maxN; j++) terms.push(Math.pow(-1, j) + 1/j);
                                label = 'a_n = (-1)^n + 1/n';
                            } else if (seqType === 'sin') {
                                scaleY = 100; originY = 250;
                                terms = []; for (var k = 1; k <= maxN; k++) terms.push(Math.sin(k));
                                label = 'a_n = sin(n)';
                            } else {
                                scaleY = 200; originY = 310;
                                terms = []; for (var l = 1; l <= maxN; l++) terms.push(1/l);
                                label = 'a_n = 1/n';
                            }

                            // Compute tail sups and infs
                            var tailSup = [];
                            var tailInf = [];
                            for (var n = 0; n < terms.length; n++) {
                                var s = -Infinity, inf = Infinity;
                                for (var m = n; m < terms.length; m++) {
                                    if (terms[m] > s) s = terms[m];
                                    if (terms[m] < inf) inf = terms[m];
                                }
                                tailSup.push(s);
                                tailInf.push(inf);
                            }

                            var limsup = tailSup[tailSup.length - 1];
                            var liminf = tailInf[tailInf.length - 1];

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(55, originY); ctx.lineTo(viz.width - 10, originY); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(55, 30); ctx.lineTo(55, viz.height - 10); ctx.stroke();

                            // Draw tail sup line (decreasing steps)
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            for (var ts = 0; ts < tailSup.length; ts++) {
                                var tpx = 55 + (ts + 1) * scaleX;
                                var tpy = originY - tailSup[ts] * scaleY;
                                if (tpx > viz.width - 5) break;
                                ts === 0 ? ctx.moveTo(tpx, tpy) : ctx.lineTo(tpx, tpy);
                            }
                            ctx.stroke();

                            // Draw tail inf line (increasing steps)
                            ctx.strokeStyle = viz.colors.purple;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            for (var ti = 0; ti < tailInf.length; ti++) {
                                var tipx = 55 + (ti + 1) * scaleX;
                                var tipy = originY - tailInf[ti] * scaleY;
                                if (tipx > viz.width - 5) break;
                                ti === 0 ? ctx.moveTo(tipx, tipy) : ctx.lineTo(tipx, tipy);
                            }
                            ctx.stroke();

                            // Draw limsup and liminf lines
                            var lsY = originY - limsup * scaleY;
                            var liY = originY - liminf * scaleY;
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath(); ctx.moveTo(55, lsY); ctx.lineTo(viz.width - 10, lsY); ctx.stroke();
                            ctx.strokeStyle = viz.colors.purple;
                            ctx.beginPath(); ctx.moveTo(55, liY); ctx.lineTo(viz.width - 10, liY); ctx.stroke();
                            ctx.setLineDash([]);

                            // Sequence points
                            for (var p = 0; p < terms.length; p++) {
                                var ppx = 55 + (p + 1) * scaleX;
                                var ppy = originY - terms[p] * scaleY;
                                if (ppx > viz.width - 5) break;
                                if (ppy < 5 || ppy > viz.height - 5) continue;
                                ctx.fillStyle = viz.colors.orange;
                                ctx.beginPath();
                                ctx.arc(ppx, ppy, 3.5, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Labels
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Limsup & Liminf: ' + label, viz.width / 2, 5);

                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('limsup = ' + limsup.toFixed(4) + '  (blue line = tail sup)', 70, 28);
                            ctx.fillStyle = viz.colors.purple;
                            ctx.fillText('liminf = ' + liminf.toFixed(4) + '  (purple line = tail inf)', 70, 46);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('Sequence terms (orange dots)', 70, 64);

                            // Convergence status
                            var converges = Math.abs(limsup - liminf) < 0.01;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            if (converges) {
                                ctx.fillStyle = viz.colors.green;
                                ctx.fillText('limsup = liminf => sequence converges', viz.width - 15, 28);
                            } else {
                                ctx.fillStyle = viz.colors.red;
                                ctx.fillText('limsup != liminf => sequence diverges', viz.width - 15, 28);
                            }
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute \\(\\limsup\\) and \\(\\liminf\\) for \\(a_n = (-1)^n \\frac{n}{n+1}\\).',
                    hint: 'The even terms approach 1, the odd terms approach -1.',
                    solution: 'Even terms: \\(a_{2k} = 2k/(2k+1) \\to 1\\). Odd terms: \\(a_{2k-1} = -(2k-1)/(2k) \\to -1\\). So \\(\\limsup = 1\\) and \\(\\liminf = -1\\).'
                },
                {
                    question: 'Prove that \\(\\liminf a_n \\leq \\limsup a_n\\) for any bounded sequence.',
                    hint: 'Use \\(\\inf_{k \\geq n} a_k \\leq \\sup_{k \\geq n} a_k\\) for each \\(n\\), then take limits.',
                    solution: 'For each fixed \\(n\\): \\(\\inf_{k \\geq n} a_k \\leq a_n \\leq \\sup_{k \\geq n} a_k\\). Taking \\(n \\to \\infty\\) preserves the inequality (limits preserve non-strict inequalities), giving \\(\\liminf \\leq \\limsup\\).'
                },
                {
                    question: 'Show: \\(a_n \\to L\\) if and only if \\(\\limsup a_n = \\liminf a_n = L\\).',
                    hint: 'One direction: if all subsequential limits equal \\(L\\), the sequence converges. Other direction: a convergent sequence has unique subsequential limit.',
                    solution: '(\\(\\Rightarrow\\)) If \\(a_n \\to L\\), every subsequence converges to \\(L\\) (Thm 2.27), so \\(\\limsup = \\liminf = L\\). (\\(\\Leftarrow\\)) If \\(\\limsup = \\liminf = L\\), then for large \\(n\\): \\(L - \\varepsilon < \\inf_{k \\geq n} a_k \\leq a_n \\leq \\sup_{k \\geq n} a_k < L + \\varepsilon\\), so \\(|a_n - L| < \\varepsilon\\).'
                },
                {
                    question: 'For \\(a_n = \\frac{1 + (-1)^n n}{n}\\), compute \\(\\limsup\\) and \\(\\liminf\\).',
                    hint: 'Simplify: \\(a_n = 1/n + (-1)^n\\).',
                    solution: '\\(a_n = 1/n + (-1)^n\\). Even terms: \\(1/(2k) + 1 \\to 1\\). Odd terms: \\(1/(2k-1) - 1 \\to -1\\). So \\(\\limsup = 1\\), \\(\\liminf = -1\\).'
                },
                {
                    question: 'Prove: \\(\\limsup(a_n + b_n) \\leq \\limsup a_n + \\limsup b_n\\) (assuming all are finite). Give an example showing strict inequality can occur.',
                    hint: 'Use \\(\\sup(A + B) \\leq \\sup A + \\sup B\\) for the tails, then take limits.',
                    solution: '\\(\\sup_{k \\geq n}(a_k + b_k) \\leq \\sup_{k \\geq n} a_k + \\sup_{k \\geq n} b_k\\). Taking \\(n \\to \\infty\\) gives the inequality. For strict inequality: \\(a_n = (-1)^n\\), \\(b_n = (-1)^{n+1}\\). Then \\(a_n + b_n = 0\\) for all \\(n\\), so \\(\\limsup(a_n + b_n) = 0\\), but \\(\\limsup a_n + \\limsup b_n = 1 + 1 = 2\\).'
                }
            ]
        }
    ]
});
