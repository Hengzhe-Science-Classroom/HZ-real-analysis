// ================================================================
// Chapter 1 — Construction of the Real Numbers
// Creative theme: "Filling the Gaps"
//   The rationals look dense, but they are riddled with invisible
//   holes.  We discover these gaps (sqrt(2) is irrational), then
//   fill them systematically — first via Dedekind cuts (slicing Q
//   in two), then via completeness.  The payoff: the Least Upper
//   Bound Property, the Archimedean Property, and the surprising
//   density of Q inside R.
// ================================================================
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch01',
    number: 1,
    title: 'Construction of the Real Numbers',
    subtitle: 'Discover the hidden gaps in the rationals, fill them with Dedekind cuts, and build the complete number line from scratch.',
    sections: [
        // ============================================================
        //  SECTION 1 — The Rationals and Their Gaps
        // ============================================================
        {
            id: 'ch01-sec01',
            title: 'The Rationals and Their Gaps',
            content: `
                <h2>The Rationals and Their Gaps</h2>

                <div class="env-block motivation">
                    <div class="env-title">From Natural Numbers to Real Numbers</div>
                    <div class="env-body">
                        <p>In the previous chapter, we built the natural numbers from the Peano axioms and equipped ourselves with mathematical induction, a powerful tool for proving statements about \\(\\mathbb{N}\\). But to do analysis, we need far more than the naturals. We need a number system where we can take limits, measure distances with arbitrary precision, and talk about continuity. That system is \\(\\mathbb{R}\\), the real numbers. Constructing \\(\\mathbb{R}\\) rigorously reveals a surprising fact: the rationals, despite being "everywhere," are riddled with invisible gaps.</p>
                        <p><strong>Roadmap for this chapter:</strong> We first expose the gaps in \\(\\mathbb{Q}\\) (Section 1), then fill them using Dedekind cuts (Section 2). From this construction we extract the Least Upper Bound Property (Section 3), derive the Archimedean Property (Section 4), prove the density of both rationals and irrationals (Section 5), and finally survey how all these completeness results fit together (Section 6).</p>
                    </div>
                </div>

                <p>The <strong>rational numbers</strong> \\(\\mathbb{Q} = \\{p/q : p \\in \\mathbb{Z},\\, q \\in \\mathbb{Z},\\, q \\neq 0\\}\\) seem to be everywhere.  Between any two rationals you can always find another (just take their average), so \\(\\mathbb{Q}\\) is <strong>dense in itself</strong>.  Surely such a crowded set has no room for holes?</p>

                <p>It does.  The holes are invisible to the naked eye, but they are very much there.  We begin with the most famous one.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.1 — \\(\\sqrt{2}\\) is Irrational</div>
                    <div class="env-body">
                        <p>There is no rational number \\(r\\) such that \\(r^2 = 2\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (by contradiction)</div>
                    <div class="env-body">
                        <p>Suppose \\(\\sqrt{2} = p/q\\) in lowest terms (\\(\\gcd(p,q)=1\\)).  Then \\(p^2 = 2q^2\\), so \\(p^2\\) is even, hence \\(p\\) is even.  Write \\(p = 2k\\).  Then \\(4k^2 = 2q^2\\), giving \\(q^2 = 2k^2\\), so \\(q\\) is also even — contradicting \\(\\gcd(p,q)=1\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">What Does the Gap Look Like?</div>
                    <div class="env-body">
                        <p>Imagine zooming into the number line near \\(1.414\\ldots\\)  You will find rationals arbitrarily close — \\(1.4, 1.41, 1.414, 1.4142, \\ldots\\) — but the point \\(\\sqrt{2}\\) itself is <em>missing</em> from \\(\\mathbb{Q}\\).  It is like a line with an invisible pinhole drilled out.  In the visualization below, rational points are blue dots; the red marker is the "missing" irrational.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="gaps-in-Q"></div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.2 — Ordered Field</div>
                    <div class="env-body">
                        <p>\\(\\mathbb{Q}\\) is an <strong>ordered field</strong>: it has addition, multiplication, a total order \\(<\\), and the familiar algebraic axioms (commutativity, associativity, distributivity, existence of additive and multiplicative inverses).  These axioms are <em>not enough</em> to guarantee completeness — and that is exactly the problem we need to solve.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — More Gaps</div>
                    <div class="env-body">
                        <p>\\(\\sqrt{3}\\), \\(\\sqrt{5}\\), \\(\\sqrt[3]{2}\\), and in fact \\(\\sqrt{n}\\) for every non-perfect-square \\(n\\), are all irrational.  The same argument (or its generalization) applies.  Even more exotic irrationals exist: \\(\\pi\\), \\(e\\), \\(\\ln 2\\), etc.</p>
                    </div>
                </div>

                <p>The key question is: <em>can we build a number system that has no gaps at all?</em>  The answer is yes, and the result is \\(\\mathbb{R}\\).</p>

                <div class="env-block remark">
                    <div class="env-title">A Matter of Language</div>
                    <div class="env-body">
                        <p>We say a set \\(S \\subseteq \\mathbb{Q}\\) is <strong>bounded above</strong> if there exists \\(M \\in \\mathbb{Q}\\) with \\(s \\le M\\) for all \\(s \\in S\\).  The set \\(\\{r \\in \\mathbb{Q} : r^2 < 2\\}\\) is bounded above (e.g., by \\(2\\)), yet it has <em>no least upper bound in \\(\\mathbb{Q}\\)</em>.  This failure is the precise sense in which \\(\\mathbb{Q}\\) is incomplete.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sqrt2-approximation"></div>
            `,
            visualizations: [
                {
                    id: 'gaps-in-Q',
                    title: 'Gaps in the Rationals',
                    description: 'Zoom into the number line near sqrt(2). Blue dots are rationals; the red gap is the missing irrational.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 280, scale: 200, originX: 350, originY: 160 });
                        var ctx = viz.ctx;
                        var zoomLevel = 1;
                        var centerVal = 1.4142;

                        VizEngine.createSlider(controls, 'Zoom', 1, 500, 1, 1, function(v) { zoomLevel = v; });
                        VizEngine.createSlider(controls, 'Center', 1.0, 2.0, 1.4142, 0.0001, function(v) { centerVal = v; });

                        var sqrt2 = Math.sqrt(2);

                        function draw() {
                            viz.clear();

                            var scale = 200 * zoomLevel;
                            var oX = 350 - centerVal * scale;
                            var oY = 160;

                            // visible range
                            var xMin = (0 - oX) / scale;
                            var xMax = (700 - oX) / scale;

                            // Number line
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(0, oY);
                            ctx.lineTo(700, oY);
                            ctx.stroke();

                            // Generate rational points with bounded denominators
                            var maxDenom = Math.min(500, Math.floor(50 * zoomLevel));
                            var rationals = [];
                            for (var q = 1; q <= maxDenom; q++) {
                                var pMin = Math.floor(xMin * q);
                                var pMax = Math.ceil(xMax * q);
                                for (var p = pMin; p <= pMax; p++) {
                                    var r = p / q;
                                    if (r >= xMin && r <= xMax) {
                                        rationals.push(r);
                                    }
                                }
                            }

                            // Draw rational dots
                            var drawn = 0;
                            for (var i = 0; i < rationals.length && drawn < 2000; i++) {
                                var rx = oX + rationals[i] * scale;
                                if (rx < -5 || rx > 705) continue;
                                var dist = Math.abs(rationals[i] - sqrt2);
                                var alpha = Math.max(0.15, Math.min(1.0, 0.3 + dist * 10 * zoomLevel));
                                ctx.fillStyle = viz.colors.blue;
                                ctx.globalAlpha = alpha;
                                ctx.beginPath();
                                ctx.arc(rx, oY, 2, 0, Math.PI * 2);
                                ctx.fill();
                                drawn++;
                            }
                            ctx.globalAlpha = 1;

                            // Mark sqrt(2) gap
                            var s2x = oX + sqrt2 * scale;
                            if (s2x > -20 && s2x < 720) {
                                // Red circle (hollow — the gap)
                                ctx.strokeStyle = viz.colors.red;
                                ctx.lineWidth = 2.5;
                                ctx.beginPath();
                                ctx.arc(s2x, oY, 7, 0, Math.PI * 2);
                                ctx.stroke();

                                // Red dashed vertical
                                ctx.strokeStyle = viz.colors.red;
                                ctx.lineWidth = 1;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath();
                                ctx.moveTo(s2x, oY - 50);
                                ctx.lineTo(s2x, oY + 50);
                                ctx.stroke();
                                ctx.setLineDash([]);

                                ctx.fillStyle = viz.colors.red;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'bottom';
                                ctx.fillText('\u221A2 \u2209 \u211A', s2x, oY - 55);
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText('(' + sqrt2.toFixed(10) + '...)', s2x, oY - 40);
                            }

                            // Tick marks
                            var tickSpacing = 1;
                            if (zoomLevel > 5) tickSpacing = 0.1;
                            if (zoomLevel > 50) tickSpacing = 0.01;
                            if (zoomLevel > 200) tickSpacing = 0.001;

                            var tMin = Math.floor(xMin / tickSpacing) * tickSpacing;
                            for (var t = tMin; t <= xMax; t += tickSpacing) {
                                var tx = oX + t * scale;
                                if (tx < 0 || tx > 700) continue;
                                ctx.strokeStyle = viz.colors.text;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(tx, oY + 8);
                                ctx.lineTo(tx, oY - 8);
                                ctx.stroke();

                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '9px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'top';
                                var digits = Math.max(0, Math.ceil(Math.log10(zoomLevel)) + 1);
                                ctx.fillText(t.toFixed(digits), tx, oY + 12);
                            }

                            // Info
                            ctx.fillStyle = '#0c0c20cc';
                            ctx.fillRect(8, 8, 240, 50);
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Zoom: ' + zoomLevel + 'x', 16, 14);
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('Blue dots: rationals (denom \u2264 ' + maxDenom + ')', 16, 34);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'sqrt2-approximation',
                    title: 'Rational Approximations to \u221A2',
                    description: 'Watch the Pell sequence 1/1, 3/2, 7/5, 17/12, ... converge to sqrt(2) — getting closer but never arriving.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 300, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var nTerms = 8;

                        VizEngine.createSlider(controls, 'Terms', 1, 20, 8, 1, function(v) { nTerms = Math.round(v); });

                        function pellApprox(n) {
                            var p = 1, q = 1;
                            for (var i = 1; i < n; i++) {
                                var pNew = p + 2 * q;
                                var qNew = p + q;
                                p = pNew;
                                q = qNew;
                            }
                            return { p: p, q: q, val: p / q };
                        }

                        var sqrt2 = Math.sqrt(2);

                        function draw() {
                            viz.clear();

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Rational Approximations to \u221A2 (Pell Numbers)', 350, 10);

                            var tableTop = 45;
                            var rowH = 24;
                            var cols = [50, 120, 250, 420, 580];

                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('n', cols[0], tableTop);
                            ctx.fillText('p/q', cols[1], tableTop);
                            ctx.fillText('Decimal', cols[2], tableTop);
                            ctx.fillText('Error (p/q - \u221A2)', cols[3], tableTop);
                            ctx.fillText('Error\u00B2 ~ 1/q\u00B2', cols[4], tableTop);

                            ctx.strokeStyle = viz.colors.grid;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(20, tableTop + 16);
                            ctx.lineTo(680, tableTop + 16);
                            ctx.stroke();

                            for (var i = 1; i <= nTerms && i <= 20; i++) {
                                var approx = pellApprox(i);
                                var y = tableTop + 20 + (i - 1) * rowH;
                                var err = approx.val - sqrt2;

                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '12px monospace';
                                ctx.textAlign = 'center';
                                ctx.fillText(i, cols[0], y);
                                ctx.fillStyle = viz.colors.blue;
                                ctx.fillText(approx.p + '/' + approx.q, cols[1], y);
                                ctx.fillStyle = viz.colors.white;
                                ctx.fillText(approx.val.toFixed(12), cols[2], y);

                                var errStr = err >= 0 ? '+' + err.toExponential(4) : err.toExponential(4);
                                ctx.fillStyle = Math.abs(err) < 1e-10 ? viz.colors.green : viz.colors.orange;
                                ctx.fillText(errStr, cols[3], y);

                                var qSqInv = 1 / (approx.q * approx.q);
                                ctx.fillStyle = viz.colors.purple;
                                ctx.fillText(qSqInv.toExponential(3), cols[4], y);
                            }

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('\u221A2 = ' + sqrt2.toFixed(15) + '...   (never reached by p/q)', 350, tableTop + 30 + nTerms * rowH);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that \\(\\sqrt{3}\\) is irrational by adapting the proof for \\(\\sqrt{2}\\).',
                    hint: 'Assume \\(\\sqrt{3} = p/q\\) in lowest terms.  Show that \\(3 \\mid p\\), then \\(3 \\mid q\\), contradicting \\(\\gcd(p,q) = 1\\).',
                    solution: 'If \\(p^2 = 3q^2\\), then \\(3 \\mid p^2\\).  Since 3 is prime, \\(3 \\mid p\\), so \\(p = 3k\\).  Then \\(9k^2 = 3q^2\\), giving \\(q^2 = 3k^2\\), so \\(3 \\mid q\\).  Both \\(p\\) and \\(q\\) divisible by 3 contradicts lowest terms.'
                },
                {
                    question: 'Show that between any two distinct rationals \\(a < b\\), there exists an irrational number.',
                    hint: 'Consider \\(a + (b-a)/\\sqrt{2}\\), or use \\(a + (b-a) \\cdot t\\) for a suitable irrational \\(t \\in (0,1)\\).',
                    solution: 'Let \\(c = a + (b-a)/\\sqrt{2}\\).  Then \\(a < c < b\\) (since \\(1/\\sqrt{2} \\in (0,1)\\)).  If \\(c\\) were rational, then \\((c-a)/(b-a) = 1/\\sqrt{2}\\) would be rational, contradicting the irrationality of \\(\\sqrt{2}\\).'
                },
                {
                    question: 'Let \\(S = \\{r \\in \\mathbb{Q} : r^2 < 2\\}\\).  Show that \\(S\\) has no greatest element in \\(\\mathbb{Q}\\).',
                    hint: 'Given \\(r \\in S\\), find a rational \\(r\' > r\\) still in \\(S\\).  Try \\(r\' = r + (2-r^2)/(2r+2)\\) and verify \\(r\' \\in S\\).',
                    solution: 'For \\(r \\in S\\) with \\(r > 0\\), set \\(r\' = r + \\frac{2-r^2}{r+2}\\).  Then \\(r\' > r\\) and one can verify \\(r\'^2 < 2\\) by direct computation (the key is that \\(r\'^2 - 2 = \\frac{(r^2-2)(r^2+2r+2)}{(r+2)^2}\\), which is negative since \\(r^2 < 2\\)).  So no element of \\(S\\) is its maximum.'
                },
                {
                    question: 'Prove that \\(\\sqrt{2} + \\sqrt{3}\\) is irrational.',
                    hint: 'Suppose \\(\\sqrt{2}+\\sqrt{3} = r \\in \\mathbb{Q}\\).  Then \\(\\sqrt{3} = r - \\sqrt{2}\\).  Square both sides and derive a contradiction.',
                    solution: '\\((r - \\sqrt{2})^2 = 3\\) gives \\(r^2 - 2r\\sqrt{2} + 2 = 3\\), so \\(\\sqrt{2} = (r^2 - 1)/(2r)\\).  But the right side is rational (\\(r \\neq 0\\)), contradicting \\(\\sqrt{2} \\notin \\mathbb{Q}\\).'
                },
                {
                    question: 'Show that if \\(n\\) is a positive integer that is not a perfect square, then \\(\\sqrt{n}\\) is irrational.',
                    hint: 'Use the fact that if a prime \\(p\\) divides \\(n\\) to an odd power, then \\(p\\) divides the numerator and denominator of any supposed rational representation.',
                    solution: 'Write \\(n = p_1^{a_1}\\cdots p_k^{a_k}\\).  Since \\(n\\) is not a perfect square, some \\(a_i\\) is odd.  If \\(\\sqrt{n} = r/s\\) in lowest terms, then \\(r^2 = n s^2\\), so \\(v_{p_i}(r^2) = 2v_{p_i}(r)\\) and \\(v_{p_i}(ns^2) = a_i + 2v_{p_i}(s)\\).  Equality requires \\(a_i\\) even — contradiction.'
                }
            ]
        },

        // ============================================================
        //  SECTION 2 — Dedekind Cuts: Filling the Gaps
        // ============================================================
        {
            id: 'ch01-sec02',
            title: 'Dedekind Cuts: Filling the Gaps',
            content: `
                <h2>Dedekind Cuts: Filling the Gaps</h2>

                <p>Section 1 showed that \\(\\mathbb{Q}\\) has holes: there is no rational whose square is 2, and more generally, bounded sets of rationals can fail to have a least upper bound. The challenge now is to build a larger number system that fills every such gap. The key insight, due to Dedekind, is that we can define the missing numbers not by what they "are," but by the partition they create among the rationals.</p>

                <p>In 1872, Richard Dedekind found a beautifully simple way to "fill in" the gaps of \\(\\mathbb{Q}\\).  His idea: instead of trying to <em>name</em> the missing number, define it by the <strong>partition it would create</strong> in \\(\\mathbb{Q}\\).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.3 — Dedekind Cut</div>
                    <div class="env-body">
                        <p>A <strong>Dedekind cut</strong> is a partition of \\(\\mathbb{Q}\\) into two non-empty sets \\(A\\) and \\(B\\) (with \\(A \\cup B = \\mathbb{Q}\\), \\(A \\cap B = \\emptyset\\)) such that:</p>
                        <ol>
                            <li>Every element of \\(A\\) is less than every element of \\(B\\).</li>
                            <li>\\(A\\) has no greatest element.</li>
                        </ol>
                        <p>We identify each real number with a Dedekind cut \\((A, B)\\).  The set \\(\\mathbb{R}\\) is the collection of all Dedekind cuts.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Knife Analogy</div>
                    <div class="env-body">
                        <p>Imagine the rational number line as a rope made of infinitely many rational "fibers."  A Dedekind cut is a <strong>knife slice</strong> through this rope.  If the knife lands on a rational, we assign that rational to the right side (\\(B\\)) so that the left side (\\(A\\)) has no maximum.  If the knife lands in a "gap" (like \\(\\sqrt{2}\\)), both sides are well-defined — and we have just named the missing number.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="dedekind-cut"></div>

                <div class="env-block example">
                    <div class="env-title">Example — The Cut for \\(\\sqrt{2}\\)</div>
                    <div class="env-body">
                        <p>Define:</p>
                        <ul>
                            <li>\\(A = \\{r \\in \\mathbb{Q} : r < 0\\} \\cup \\{r \\in \\mathbb{Q} : r \\ge 0 \\text{ and } r^2 < 2\\}\\)</li>
                            <li>\\(B = \\{r \\in \\mathbb{Q} : r \\ge 0 \\text{ and } r^2 \\ge 2\\}\\)</li>
                        </ul>
                        <p>Then \\((A, B)\\) is a Dedekind cut.  \\(A\\) has no greatest element (as shown in Section 1), and \\(B\\) has no least element (symmetric argument).  This cut <em>is</em> \\(\\sqrt{2}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — The Cut for a Rational \\(q\\)</div>
                    <div class="env-body">
                        <p>For \\(q \\in \\mathbb{Q}\\), set \\(A = \\{r \\in \\mathbb{Q} : r < q\\}\\), \\(B = \\{r \\in \\mathbb{Q} : r \\ge q\\}\\).  Here \\(A\\) has no greatest element but \\(B\\) has a least element, namely \\(q\\) itself.  This is the cut corresponding to the rational number \\(q\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Arithmetic on Cuts</div>
                    <div class="env-body">
                        <p>We can define addition and multiplication of cuts purely in terms of set operations on \\(\\mathbb{Q}\\).  For example, if \\(\\alpha = (A_1, B_1)\\) and \\(\\beta = (A_2, B_2)\\), then \\(\\alpha + \\beta\\) is the cut whose left set is \\(\\{a_1 + a_2 : a_1 \\in A_1,\\, a_2 \\in A_2\\}\\).  This makes \\(\\mathbb{R}\\) an ordered field — extending \\(\\mathbb{Q}\\) without any new axioms.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Alternative: Cauchy Sequences</div>
                    <div class="env-body">
                        <p>Another approach: define a real number as an equivalence class of <strong>Cauchy sequences</strong> of rationals.  Two Cauchy sequences \\((a_n)\\) and \\((b_n)\\) are equivalent if \\(|a_n - b_n| \\to 0\\).  This construction (due to Cantor and Meray) yields the same \\(\\mathbb{R}\\).  We will explore sequences and Cauchy completeness in a later chapter.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'dedekind-cut',
                    title: 'Dedekind Cut Visualizer',
                    description: 'Move the "knife" along the rational number line. When it falls on an irrational, neither side has a boundary element at the cut.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 350, scale: 70, originX: 350, originY: 140 });
                        var ctx = viz.ctx;
                        var cutValue = 1.4142;

                        VizEngine.createSlider(controls, 'Cut Position', 0, 3, 1.4142, 0.001, function(v) { cutValue = v; });
                        VizEngine.createButton(controls, 'Jump to \u221A2', function() { cutValue = Math.sqrt(2); });
                        VizEngine.createButton(controls, 'Jump to 3/2', function() { cutValue = 1.5; });
                        VizEngine.createButton(controls, 'Jump to \u03C0-2', function() { cutValue = Math.PI - 2; });

                        function isCloseToRational(x, tol) {
                            for (var q = 1; q <= 100; q++) {
                                var p = Math.round(x * q);
                                if (Math.abs(x - p / q) < tol) return { p: p, q: q };
                            }
                            return null;
                        }

                        function draw() {
                            viz.clear();

                            var oY = 140;

                            // Number line
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(20, oY);
                            ctx.lineTo(680, oY);
                            ctx.stroke();

                            // Tick marks 0..3
                            for (var t = 0; t <= 3; t += 0.5) {
                                var tx = viz.toScreen(t, 0)[0];
                                ctx.strokeStyle = viz.colors.text;
                                ctx.lineWidth = t === Math.floor(t) ? 2 : 1;
                                ctx.beginPath();
                                ctx.moveTo(tx, oY - 8);
                                ctx.lineTo(tx, oY + 8);
                                ctx.stroke();
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'top';
                                ctx.fillText(t.toFixed(1), tx, oY + 12);
                            }

                            // Draw rational dots colored by side
                            var dotY = oY;
                            for (var q = 1; q <= 30; q++) {
                                for (var p = 0; p <= 3 * q; p++) {
                                    var r = p / q;
                                    if (r > 3.1) continue;
                                    var rx = viz.toScreen(r, 0)[0];
                                    if (rx < 15 || rx > 685) continue;

                                    var inA = r < cutValue;
                                    ctx.fillStyle = inA ? viz.colors.blue : viz.colors.orange;
                                    ctx.globalAlpha = 0.5 + 0.5 / q;
                                    ctx.beginPath();
                                    ctx.arc(rx, dotY, Math.max(1.5, 4 - q * 0.1), 0, Math.PI * 2);
                                    ctx.fill();
                                }
                            }
                            ctx.globalAlpha = 1;

                            // Cut line (the knife)
                            var cutX = viz.toScreen(cutValue, 0)[0];
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 2.5;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            ctx.moveTo(cutX, oY - 70);
                            ctx.lineTo(cutX, oY + 70);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Knife icon at top
                            ctx.fillStyle = viz.colors.red;
                            ctx.beginPath();
                            ctx.moveTo(cutX, oY - 70);
                            ctx.lineTo(cutX - 8, oY - 82);
                            ctx.lineTo(cutX + 8, oY - 82);
                            ctx.closePath();
                            ctx.fill();

                            // Labels for A and B
                            ctx.font = 'bold 18px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('A (left set)', cutX / 2, oY + 50);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('B (right set)', (cutX + 700) / 2, oY + 50);

                            // Analysis
                            var closeRat = isCloseToRational(cutValue, 0.0005);
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillStyle = viz.colors.white;

                            var infoY = 240;
                            ctx.fillText('Cut at \u2248 ' + cutValue.toFixed(6), 350, infoY);

                            if (closeRat && closeRat.q <= 50) {
                                ctx.fillStyle = viz.colors.green;
                                ctx.fillText('This is near the rational ' + closeRat.p + '/' + closeRat.q, 350, infoY + 22);
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText('A has no max; B has min = ' + closeRat.p + '/' + closeRat.q, 350, infoY + 44);
                            } else {
                                ctx.fillStyle = viz.colors.red;
                                ctx.fillText('This appears to be an irrational cut', 350, infoY + 22);
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText('A has no max; B has no min -- the gap is the new real number!', 350, infoY + 44);
                            }

                            // Show sqrt(2) marker
                            var sqrt2 = Math.sqrt(2);
                            var s2x = viz.toScreen(sqrt2, 0)[0];
                            ctx.fillStyle = viz.colors.purple;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('\u221A2', s2x, oY - 12);
                            ctx.fillStyle = viz.colors.purple;
                            ctx.beginPath();
                            ctx.arc(s2x, oY - 8, 2, 0, Math.PI * 2);
                            ctx.fill();
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Verify that the cut \\((A, B)\\) for \\(\\sqrt{2}\\) given in the text satisfies the two conditions of a Dedekind cut.',
                    hint: 'You must show: (1) every element of \\(A\\) is less than every element of \\(B\\); (2) \\(A\\) has no greatest element (use the result from Section 1).',
                    solution: '(1) If \\(a \\in A\\) and \\(b \\in B\\), then either \\(a < 0 \\le b\\), or \\(a \\ge 0\\) with \\(a^2 < 2 \\le b^2\\) (since \\(b \\ge 0\\)), so \\(a < b\\).  (2) Given \\(a \\in A\\) with \\(a \\ge 0\\), we showed in Section 1 that there exists \\(a\' > a\\) with \\(a\'^2 < 2\\), so \\(a\' \\in A\\) and \\(a\\) is not the greatest element.'
                },
                {
                    question: 'Construct the Dedekind cut for \\(\\sqrt{3}\\) and prove it is a valid cut.',
                    hint: 'Model it on the \\(\\sqrt{2}\\) construction: \\(A = \\{r \\in \\mathbb{Q} : r < 0\\} \\cup \\{r \\ge 0 : r^2 < 3\\}\\).',
                    solution: '\\(A = \\{r \\in \\mathbb{Q} : r < 0 \\text{ or } (r \\ge 0 \\text{ and } r^2 < 3)\\}\\), \\(B = \\mathbb{Q} \\setminus A\\).  Condition (1) holds as before.  For (2): given \\(a \\in A\\) with \\(a > 0\\) and \\(a^2 < 3\\), set \\(a\' = a + \\frac{3-a^2}{a+3}\\).  Then \\(a\' > a\\) and a calculation shows \\(a\'^2 < 3\\).'
                },
                {
                    question: 'Show that if \\((A, B)\\) is a Dedekind cut corresponding to a rational \\(q\\), then \\(B\\) has a least element.',
                    hint: 'By construction \\(B = \\{r \\in \\mathbb{Q} : r \\ge q\\}\\).  What is the infimum of this set?',
                    solution: '\\(q \\in B\\) and for all \\(r \\in B\\), \\(r \\ge q\\), so \\(q = \\min B\\).  This distinguishes rational cuts (\\(B\\) has a min) from irrational cuts (\\(B\\) has no min).'
                },
                {
                    question: 'Define the addition of two Dedekind cuts \\(\\alpha = (A_1, B_1)\\) and \\(\\beta = (A_2, B_2)\\).  Verify that the result is a valid Dedekind cut.',
                    hint: 'The left set is \\(A = \\{a_1 + a_2 : a_1 \\in A_1, a_2 \\in A_2\\}\\).  Show it has no greatest element.',
                    solution: 'Let \\(A = \\{a_1+a_2 : a_1 \\in A_1, a_2 \\in A_2\\}\\) and \\(B = \\mathbb{Q}\\setminus A\\).  (1) If \\(a \\in A\\) and \\(b \\in B\\), suppose \\(b \\le a = a_1+a_2\\).  Then \\(b-a_2 \\le a_1 \\in A_1\\) and one shows \\(b-a_2 \\in A_1\\), giving \\(b = (b-a_2)+a_2 \\in A\\), contradicting \\(b \\in B\\).  (2) Given \\(a_1+a_2 \\in A\\), pick \\(a_1\' > a_1\\) in \\(A_1\\); then \\(a_1\'+a_2 > a_1+a_2\\) and \\(a_1\'+a_2 \\in A\\).'
                },
                {
                    question: 'Explain why the Cauchy-sequence construction and the Dedekind-cut construction produce "the same" real numbers.',
                    hint: 'The key word is <em>isomorphism</em>.  Both produce a complete ordered field.',
                    solution: 'Any two complete ordered fields are isomorphic via the unique order-preserving isomorphism that maps \\(1\\) to \\(1\\).  Since both constructions produce complete ordered fields extending \\(\\mathbb{Q}\\), they are isomorphic as ordered fields.  In this sense, \\(\\mathbb{R}\\) is the <em>unique</em> complete ordered field.'
                }
            ]
        },

        // ============================================================
        //  SECTION 3 — Completeness and the Least Upper Bound Property
        // ============================================================
        {
            id: 'ch01-sec03',
            title: 'Completeness and the Least Upper Bound Property',
            content: `
                <h2>Completeness and the Least Upper Bound Property</h2>

                <p>Having constructed \\(\\mathbb{R}\\) via Dedekind cuts, we now extract the defining feature that makes it superior to \\(\\mathbb{Q}\\): every bounded set has a least upper bound. This single property, called completeness, is the engine behind virtually every major theorem in real analysis, from convergence of sequences to the existence of integrals.</p>

                <p>We now state the single most important property of \\(\\mathbb{R}\\) — the <strong>axiom that fills every gap</strong>.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.4 — Upper Bound, Supremum</div>
                    <div class="env-body">
                        <p>Let \\(S \\subseteq \\mathbb{R}\\) be non-empty.</p>
                        <ul>
                            <li>An <strong>upper bound</strong> of \\(S\\) is a number \\(M\\) such that \\(s \\le M\\) for all \\(s \\in S\\).</li>
                            <li>If \\(S\\) has an upper bound, we say \\(S\\) is <strong>bounded above</strong>.</li>
                            <li>The <strong>supremum</strong> (or <strong>least upper bound</strong>) of \\(S\\), written \\(\\sup S\\), is an upper bound \\(\\alpha\\) of \\(S\\) such that \\(\\alpha \\le M\\) for every upper bound \\(M\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Axiom 1.5 — Least Upper Bound Property (Completeness Axiom)</div>
                    <div class="env-body">
                        <p>Every non-empty subset of \\(\\mathbb{R}\\) that is bounded above has a supremum in \\(\\mathbb{R}\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Why This Matters</div>
                    <div class="env-body">
                        <p>In \\(\\mathbb{Q}\\), the set \\(\\{r \\in \\mathbb{Q} : r^2 < 2\\}\\) is bounded above but has no supremum <em>in \\(\\mathbb{Q}\\)</em>.  The LUB property guarantees that in \\(\\mathbb{R}\\), such a "missing" supremum always exists.  It is the <strong>one axiom</strong> that separates \\(\\mathbb{R}\\) from \\(\\mathbb{Q}\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sup-inf-explorer"></div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.6 — Lower Bound, Infimum</div>
                    <div class="env-body">
                        <p>Symmetrically, a <strong>lower bound</strong> of \\(S\\) is \\(m\\) with \\(m \\le s\\) for all \\(s \\in S\\).  The <strong>infimum</strong> \\(\\inf S\\) is the greatest lower bound.  By applying the LUB property to \\(-S = \\{-s : s \\in S\\}\\), every non-empty set bounded below has an infimum in \\(\\mathbb{R}\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.7 — Characterization of Supremum</div>
                    <div class="env-body">
                        <p>\\(\\alpha = \\sup S\\) if and only if:</p>
                        <ol>
                            <li>\\(\\alpha\\) is an upper bound of \\(S\\).</li>
                            <li>For every \\(\\varepsilon > 0\\), there exists \\(s \\in S\\) with \\(s > \\alpha - \\varepsilon\\).</li>
                        </ol>
                        <p>In other words, the supremum is "just barely" an upper bound — you can always find elements of \\(S\\) within \\(\\varepsilon\\) of it.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>(\\(\\Rightarrow\\)) Suppose \\(\\alpha = \\sup S\\).  (1) holds by definition.  If (2) failed, then \\(\\alpha - \\varepsilon\\) would be an upper bound of \\(S\\) strictly less than \\(\\alpha\\), contradicting leastness.</p>
                        <p>(\\(\\Leftarrow\\)) (1) says \\(\\alpha\\) is an upper bound.  (2) ensures no smaller number is an upper bound (any \\(M < \\alpha\\) satisfies \\(\\alpha - M > 0\\), so there exists \\(s > M\\), meaning \\(M\\) is not an upper bound). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="epsilon-challenge"></div>

                <div class="env-block example">
                    <div class="env-title">Example — Supremum of an Open Interval</div>
                    <div class="env-body">
                        <p>\\(\\sup(0,1) = 1\\).  Indeed, \\(1\\) is an upper bound, and for any \\(\\varepsilon > 0\\), the point \\(1 - \\varepsilon/2 \\in (0,1)\\) satisfies \\(1 - \\varepsilon/2 > 1 - \\varepsilon\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Supremum Not in the Set</div>
                    <div class="env-body">
                        <p>\\(\\sup\\{1 - 1/n : n \\in \\mathbb{N}\\} = 1\\), but \\(1 \\notin S\\).  The supremum need not belong to the set.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'sup-inf-explorer',
                    title: 'Supremum & Infimum Explorer',
                    description: 'Explore different sets and see their supremum (red) and infimum (green) on the number line.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 320, scale: 70, originX: 100, originY: 160 });
                        var ctx = viz.ctx;
                        var choice = 0;

                        var sets = [
                            { label: '(0, 1) -- open interval', draw: function(v) { v.drawOpenInterval(0, 1, 0, v.colors.blue, 4); }, sup: 1, inf: 0, supIn: false, infIn: false },
                            { label: '[0, 1] -- closed interval', draw: function(v) { v.drawClosedInterval(0, 1, 0, v.colors.blue, 4); }, sup: 1, inf: 0, supIn: true, infIn: true },
                            { label: '{1/n : n = 1,2,3,...}', draw: function(v) { for (var n = 1; n <= 30; n++) v.drawPoint(1/n, 0, v.colors.blue, null, 3); }, sup: 1, inf: 0, supIn: true, infIn: false },
                            { label: '{1 - 1/n : n = 1,2,3,...}', draw: function(v) { for (var n = 1; n <= 30; n++) v.drawPoint(1-1/n, 0, v.colors.blue, null, 3); }, sup: 1, inf: 0, supIn: false, infIn: true },
                            { label: '{r in Q : r\u00B2 < 2}', draw: function(v) { var s = Math.sqrt(2); v.drawOpenInterval(-s, s, 0, v.colors.blue, 4); var rats = [0, 0.5, 1, 1.2, 1.3, 1.4, 1.41, -1, -0.5]; for (var i = 0; i < rats.length; i++) v.drawPoint(rats[i], 0, v.colors.blue, null, 3); }, sup: Math.sqrt(2), inf: -Math.sqrt(2), supIn: false, infIn: false }
                        ];

                        VizEngine.createButton(controls, '(0,1)', function() { choice = 0; });
                        VizEngine.createButton(controls, '[0,1]', function() { choice = 1; });
                        VizEngine.createButton(controls, '{1/n}', function() { choice = 2; });
                        VizEngine.createButton(controls, '{1-1/n}', function() { choice = 3; });
                        VizEngine.createButton(controls, '{r\u00B2<2}', function() { choice = 4; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var s = sets[choice];
                            s.draw(viz);

                            // Draw sup
                            var supPt = viz.toScreen(s.sup, 0);
                            ctx.strokeStyle = viz.colors.red; ctx.lineWidth = 2;
                            ctx.setLineDash([5, 3]);
                            ctx.beginPath(); ctx.moveTo(supPt[0], supPt[1] - 50); ctx.lineTo(supPt[0], supPt[1] + 50); ctx.stroke();
                            ctx.setLineDash([]);

                            if (s.supIn) { ctx.fillStyle = viz.colors.red; ctx.beginPath(); ctx.arc(supPt[0], supPt[1], 6, 0, Math.PI * 2); ctx.fill(); }
                            else { ctx.strokeStyle = viz.colors.red; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(supPt[0], supPt[1], 6, 0, Math.PI * 2); ctx.stroke(); }

                            ctx.fillStyle = viz.colors.red; ctx.font = 'bold 13px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                            ctx.fillText('sup = ' + s.sup.toFixed(4), supPt[0], supPt[1] - 55);

                            // Draw inf
                            var infPt = viz.toScreen(s.inf, 0);
                            ctx.strokeStyle = viz.colors.green; ctx.lineWidth = 2;
                            ctx.setLineDash([5, 3]);
                            ctx.beginPath(); ctx.moveTo(infPt[0], infPt[1] - 50); ctx.lineTo(infPt[0], infPt[1] + 50); ctx.stroke();
                            ctx.setLineDash([]);

                            if (s.infIn) { ctx.fillStyle = viz.colors.green; ctx.beginPath(); ctx.arc(infPt[0], infPt[1], 6, 0, Math.PI * 2); ctx.fill(); }
                            else { ctx.strokeStyle = viz.colors.green; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(infPt[0], infPt[1], 6, 0, Math.PI * 2); ctx.stroke(); }

                            ctx.fillStyle = viz.colors.green; ctx.font = 'bold 13px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                            ctx.fillText('inf = ' + s.inf.toFixed(4), infPt[0], infPt[1] - 55);

                            // Set label
                            ctx.fillStyle = viz.colors.white; ctx.font = 'bold 15px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('S = ' + s.label, 350, 10);

                            ctx.fillStyle = viz.colors.text; ctx.font = '12px -apple-system,sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
                            ctx.fillText('sup ' + (s.supIn ? '\u2208' : '\u2209') + ' S', 20, 250);
                            ctx.fillText('inf ' + (s.infIn ? '\u2208' : '\u2209') + ' S', 20, 270);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'epsilon-challenge',
                    title: 'The Epsilon Challenge',
                    description: 'Given epsilon > 0, find an element of S within epsilon of the supremum. This is what makes the supremum "tight."',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 350, scale: 200, originX: 50, originY: 180 });
                        var ctx = viz.ctx;
                        var epsilon = 0.5;
                        var nPicked = 5;
                        var supVal = 1;

                        VizEngine.createSlider(controls, '\u03B5', 0.01, 1.0, 0.5, 0.01, function(v) { epsilon = v; });
                        VizEngine.createSlider(controls, 'Pick n', 1, 50, 5, 1, function(v) { nPicked = Math.round(v); });

                        function draw() {
                            viz.clear();

                            var oY = 180;

                            // Number line
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 2;
                            var lLeft = viz.toScreen(-0.1, 0)[0];
                            var lRight = viz.toScreen(1.2, 0)[0];
                            ctx.beginPath(); ctx.moveTo(lLeft, oY); ctx.lineTo(lRight, oY); ctx.stroke();

                            // Tick marks
                            for (var t = 0; t <= 1.2; t += 0.2) {
                                var tx = viz.toScreen(t, 0)[0];
                                ctx.strokeStyle = viz.colors.text; ctx.lineWidth = 1;
                                ctx.beginPath(); ctx.moveTo(tx, oY - 5); ctx.lineTo(tx, oY + 5); ctx.stroke();
                                ctx.fillStyle = viz.colors.text; ctx.font = '10px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                ctx.fillText(t.toFixed(1), tx, oY + 8);
                            }

                            // Draw set elements
                            for (var n = 1; n <= 30; n++) {
                                var val = 1 - 1 / n;
                                var px = viz.toScreen(val, 0)[0];
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.arc(px, oY, 3, 0, Math.PI * 2); ctx.fill();
                            }

                            // Supremum
                            var supX = viz.toScreen(supVal, 0)[0];
                            ctx.strokeStyle = viz.colors.red; ctx.lineWidth = 2.5;
                            ctx.beginPath(); ctx.moveTo(supX, oY - 40); ctx.lineTo(supX, oY + 40); ctx.stroke();
                            ctx.fillStyle = viz.colors.red; ctx.font = 'bold 12px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                            ctx.fillText('sup S = 1', supX, oY - 44);

                            // Epsilon band
                            var epsLeft = viz.toScreen(supVal - epsilon, 0)[0];
                            ctx.fillStyle = viz.colors.teal + '22';
                            ctx.fillRect(epsLeft, oY - 35, supX - epsLeft, 70);
                            ctx.strokeStyle = viz.colors.teal; ctx.lineWidth = 1.5; ctx.setLineDash([4, 3]);
                            ctx.beginPath(); ctx.moveTo(epsLeft, oY - 35); ctx.lineTo(epsLeft, oY + 35); ctx.stroke();
                            ctx.setLineDash([]);

                            ctx.fillStyle = viz.colors.teal; ctx.font = '11px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('sup - \u03B5 = ' + (supVal - epsilon).toFixed(3), epsLeft, oY + 42);

                            // Picked element
                            var pickedVal = 1 - 1 / nPicked;
                            var pickedX = viz.toScreen(pickedVal, 0)[0];
                            ctx.fillStyle = viz.colors.orange;
                            ctx.beginPath(); ctx.arc(pickedX, oY, 6, 0, Math.PI * 2); ctx.fill();

                            ctx.fillStyle = viz.colors.orange; ctx.font = 'bold 12px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                            ctx.fillText('s = 1 - 1/' + nPicked + ' = ' + pickedVal.toFixed(4), pickedX, oY - 50);

                            var inBand = pickedVal > supVal - epsilon;
                            ctx.font = 'bold 14px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';

                            if (inBand) {
                                ctx.fillStyle = viz.colors.green;
                                ctx.fillText('s > sup - \u03B5  (within \u03B5 of supremum)', 350, 260);
                            } else {
                                ctx.fillStyle = viz.colors.red;
                                ctx.fillText('s \u2264 sup - \u03B5  (need larger n!)', 350, 260);
                                var minN = Math.ceil(1 / epsilon) + 1;
                                ctx.fillStyle = viz.colors.text; ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('Try n \u2265 ' + minN + ' (need 1/n < \u03B5 = ' + epsilon.toFixed(3) + ')', 350, 282);
                            }

                            ctx.fillStyle = viz.colors.text; ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('S = {1 - 1/n : n \u2208 \u2115}      \u03B5 = ' + epsilon.toFixed(3), 350, 310);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Find \\(\\sup S\\) and \\(\\inf S\\) for \\(S = \\{(-1)^n / n : n \\in \\mathbb{N}\\} = \\{-1, 1/2, -1/3, 1/4, \\ldots\\}\\).',
                    hint: 'The positive terms are \\(1/2, 1/4, 1/6, \\ldots\\) and the negative terms are \\(-1, -1/3, -1/5, \\ldots\\).',
                    solution: '\\(\\sup S = 1/2\\) (the largest element, achieved at \\(n=2\\)).  \\(\\inf S = -1\\) (the smallest element, achieved at \\(n=1\\)).  Both belong to \\(S\\).'
                },
                {
                    question: 'Let \\(A\\) and \\(B\\) be non-empty bounded subsets of \\(\\mathbb{R}\\).  Define \\(A + B = \\{a + b : a \\in A, b \\in B\\}\\).  Prove that \\(\\sup(A+B) = \\sup A + \\sup B\\).',
                    hint: 'Show two inequalities using the epsilon characterization of supremum.',
                    solution: '(\\(\\le\\)): For \\(a+b \\in A+B\\), \\(a \\le \\sup A\\) and \\(b \\le \\sup B\\), so \\(a+b \\le \\sup A + \\sup B\\).  (\\(\\ge\\)): For any \\(\\varepsilon>0\\), pick \\(a > \\sup A - \\varepsilon/2\\) and \\(b > \\sup B - \\varepsilon/2\\).  Then \\(a+b > \\sup A + \\sup B - \\varepsilon\\).  Since \\(\\varepsilon\\) is arbitrary, done.'
                },
                {
                    question: 'Give an example showing that \\(\\sup(A \\cdot B) \\ne \\sup A \\cdot \\sup B\\) in general.',
                    hint: 'Try sets that contain negative numbers.',
                    solution: '\\(A = B = \\{-1, 0\\}\\).  Then \\(\\sup A = \\sup B = 0\\), so \\(\\sup A \\cdot \\sup B = 0\\).  But \\(A \\cdot B = \\{0, 1\\}\\) (since \\((-1)(-1) = 1\\)), so \\(\\sup(A \\cdot B) = 1 \\ne 0\\).'
                },
                {
                    question: 'Prove that \\(\\inf S = -\\sup(-S)\\), where \\(-S = \\{-s : s \\in S\\}\\).',
                    hint: '\\(m\\) is a lower bound of \\(S\\) iff \\(-m\\) is an upper bound of \\(-S\\).',
                    solution: '\\(m \\le s\\) for all \\(s \\in S\\) iff \\(-m \\ge -s\\) for all \\(s \\in S\\), i.e., \\(-m\\) is an upper bound of \\(-S\\).  The greatest such \\(m\\) corresponds to the least such \\(-m\\): \\(\\inf S = -(\\sup(-S))\\).'
                },
                {
                    question: 'Let \\(S = \\{x \\in \\mathbb{R} : x^3 < 8\\}\\).  Find \\(\\sup S\\).',
                    hint: '\\(x^3 < 8\\) iff \\(x < 2\\) (since \\(x \\mapsto x^3\\) is strictly increasing).',
                    solution: '\\(S = (-\\infty, 2)\\), so \\(\\sup S = 2\\).  Note \\(2 \\notin S\\) since \\(2^3 = 8 \\not< 8\\).'
                }
            ]
        },

        // ============================================================
        //  SECTION 4 — The Archimedean Property
        // ============================================================
        {
            id: 'ch01-sec04',
            title: 'The Archimedean Property',
            content: `
                <h2>The Archimedean Property</h2>

                <p>The Least Upper Bound Property is a powerful abstract guarantee. But what concrete consequences does it have for everyday arithmetic on \\(\\mathbb{R}\\)? One of the first and most important is the Archimedean Property: the natural numbers (which we built in Chapter 0) are unbounded in \\(\\mathbb{R}\\). This rules out "infinitely large" or "infinitely small" real numbers, and it connects our abstract completeness axiom back to the familiar world of counting.</p>

                <p>Can a positive number be so large that no natural number exceeds it?  Can a positive number be so small that it is less than \\(1/n\\) for every \\(n\\)?  The answer to both is <strong>no</strong>, and this is the <strong>Archimedean Property</strong> — a consequence of completeness.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.8 — Archimedean Property</div>
                    <div class="env-body">
                        <p>For any \\(x \\in \\mathbb{R}\\), there exists \\(n \\in \\mathbb{N}\\) such that \\(n > x\\).</p>
                        <p>Equivalently: for any \\(\\varepsilon > 0\\) and any \\(y > 0\\), there exists \\(n \\in \\mathbb{N}\\) with \\(n\\varepsilon > y\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Suppose for contradiction that \\(\\mathbb{N}\\) is bounded above in \\(\\mathbb{R}\\).  By the LUB property, \\(\\alpha = \\sup\\mathbb{N}\\) exists.  Then \\(\\alpha - 1\\) is not an upper bound, so there exists \\(n \\in \\mathbb{N}\\) with \\(n > \\alpha - 1\\).  But then \\(n + 1 > \\alpha\\), and \\(n+1 \\in \\mathbb{N}\\), contradicting \\(\\alpha = \\sup\\mathbb{N}\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">No Infinitesimals</div>
                    <div class="env-body">
                        <p>A corollary: if \\(x > 0\\), then there exists \\(n\\) with \\(1/n < x\\).  This means \\(\\mathbb{R}\\) has <strong>no infinitesimals</strong> — no positive number smaller than every \\(1/n\\).  (This fails in some exotic number systems like the hyperreals, which deliberately add infinitesimals.)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="archimedean-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 1.9 — The Floor Function</div>
                    <div class="env-body">
                        <p>For every \\(x \\in \\mathbb{R}\\), there exists a unique integer \\(n\\) (the <strong>floor</strong> \\(\\lfloor x \\rfloor\\)) such that \\(n \\le x < n + 1\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Why Completeness Is Needed</div>
                    <div class="env-body">
                        <p>The proof used the LUB property crucially.  There exist ordered fields where the Archimedean property fails — these are called <strong>non-Archimedean fields</strong> (e.g., the field of formal Laurent series).  Completeness rules them out.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'archimedean-viz',
                    title: 'Archimedean Property',
                    description: 'Choose any real x > 0 and step size epsilon > 0. Watch how n*epsilon eventually surpasses x.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 320, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var xVal = 10;
                        var epsVal = 0.3;

                        VizEngine.createSlider(controls, 'x (target)', 1, 50, 10, 0.5, function(v) { xVal = v; });
                        VizEngine.createSlider(controls, '\u03B5 (step)', 0.05, 5, 0.3, 0.05, function(v) { epsVal = v; });

                        function draw() {
                            viz.clear();

                            var nNeeded = Math.ceil(xVal / epsVal);
                            var maxN = Math.min(nNeeded + 3, 200);
                            var barMaxVal = Math.max(xVal * 1.3, (nNeeded + 2) * epsVal);

                            ctx.fillStyle = viz.colors.white; ctx.font = 'bold 15px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('n\u03B5 eventually exceeds x (Archimedean Property)', 350, 10);

                            var barLeft = 60, barRight = 660, barY = 100, barH = 30;
                            var scale = (barRight - barLeft) / barMaxVal;

                            // x line
                            var xPx = barLeft + xVal * scale;
                            ctx.strokeStyle = viz.colors.red; ctx.lineWidth = 2.5;
                            ctx.beginPath(); ctx.moveTo(xPx, barY - 20); ctx.lineTo(xPx, barY + barH + 80); ctx.stroke();
                            ctx.fillStyle = viz.colors.red; ctx.font = 'bold 13px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                            ctx.fillText('x = ' + xVal.toFixed(1), xPx, barY - 24);

                            var numBars = Math.min(maxN, 40);
                            var barGap = 2;
                            var singleBarH = Math.max(3, Math.min(14, (200 - barGap * numBars) / numBars));

                            for (var n = 1; n <= numBars; n++) {
                                var val = n * epsVal;
                                var bw = val * scale;
                                var by = barY + (n - 1) * (singleBarH + barGap);

                                var exceeded = val > xVal;
                                var col = exceeded ? viz.colors.green : viz.colors.blue;

                                ctx.fillStyle = col + '55';
                                ctx.fillRect(barLeft, by, Math.min(bw, barRight - barLeft), singleBarH);
                                ctx.strokeStyle = col; ctx.lineWidth = 1;
                                ctx.strokeRect(barLeft, by, Math.min(bw, barRight - barLeft), singleBarH);

                                if (n <= 15 || n === nNeeded || n === numBars) {
                                    ctx.fillStyle = viz.colors.text; ctx.font = '9px -apple-system,sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
                                    ctx.fillText('n=' + n, barLeft - 4, by + singleBarH / 2);
                                }

                                if (n === nNeeded) {
                                    ctx.fillStyle = viz.colors.green; ctx.font = 'bold 10px -apple-system,sans-serif'; ctx.textAlign = 'left';
                                    ctx.fillText(n + '\u00B7\u03B5 = ' + val.toFixed(2) + ' > x', Math.min(bw, barRight - barLeft) + barLeft + 5, by + singleBarH / 2);
                                }
                            }

                            ctx.fillStyle = viz.colors.teal; ctx.font = 'bold 14px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            var summaryY = barY + numBars * (singleBarH + barGap) + 10;
                            ctx.fillText('Need n = ' + nNeeded + '  (\u2308x/\u03B5\u2309 = ' + nNeeded + ')', 350, summaryY);
                            ctx.fillStyle = viz.colors.text; ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('No matter how small \u03B5 is, finitely many steps suffice.', 350, summaryY + 22);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Use the Archimedean property to prove that for any \\(\\varepsilon > 0\\), there exists \\(n \\in \\mathbb{N}\\) such that \\(1/n < \\varepsilon\\).',
                    hint: 'Apply the Archimedean property with \\(x = 1/\\varepsilon\\).',
                    solution: 'By the Archimedean property, there exists \\(n \\in \\mathbb{N}\\) with \\(n > 1/\\varepsilon\\).  Since \\(n, \\varepsilon > 0\\), this gives \\(1/n < \\varepsilon\\).'
                },
                {
                    question: 'Prove that \\(\\inf\\{1/n : n \\in \\mathbb{N}\\} = 0\\).',
                    hint: '0 is a lower bound.  Use the Archimedean property to show no larger number is a lower bound.',
                    solution: '\\(1/n > 0\\) for all \\(n\\), so 0 is a lower bound.  If \\(m > 0\\) were a lower bound, then \\(1/n \\ge m\\) for all \\(n\\), i.e., \\(n \\le 1/m\\) for all \\(n\\), contradicting the Archimedean property.'
                },
                {
                    question: 'Prove that there is no smallest positive real number.',
                    hint: 'If \\(x > 0\\) were the smallest, consider \\(x/2\\).',
                    solution: 'Suppose \\(x > 0\\) is the smallest positive real.  Then \\(x/2 > 0\\) and \\(x/2 < x\\), contradicting minimality.'
                },
                {
                    question: 'Show that the Archimedean property fails in the ordered field of rational functions \\(\\mathbb{R}(x)\\).',
                    hint: 'Consider the element \\(x\\) (the identity function).  Is there an integer \\(n\\) with \\(n > x\\)?',
                    solution: 'No integer \\(n\\) satisfies \\(n > x\\) in the ordering where \\(f > 0\\) if \\(f(t) > 0\\) for large \\(t\\), because \\(x - n\\) is eventually positive.  The Archimedean property fails.'
                },
                {
                    question: 'Use the Archimedean property to prove: for every real \\(x\\), there exists a unique \\(n \\in \\mathbb{Z}\\) with \\(n \\le x < n + 1\\).',
                    hint: 'Use the Archimedean property to show \\(\\{m \\in \\mathbb{Z} : m \\le x\\}\\) is non-empty and bounded above.',
                    solution: 'By the Archimedean property, \\(\\exists N\\) with \\(N > x\\), so \\(x < N\\).  Also \\(-N < x\\), so \\(S = \\{m \\in \\mathbb{Z} : m \\le x\\}\\) is non-empty and bounded above.  Let \\(n = \\max S\\).  Then \\(n \\le x\\) and \\(n+1 > x\\).  Uniqueness: \\(|n-n\'| < 1\\) for two such integers forces \\(n = n\'\\).'
                }
            ]
        },

        // ============================================================
        //  SECTION 5 — Density of the Rationals and Irrationals
        // ============================================================
        {
            id: 'ch01-sec05',
            title: 'Density of the Rationals and Irrationals',
            content: `
                <h2>Density of the Rationals and Irrationals</h2>

                <p>With the Archimedean Property in hand, we can now resolve a paradox that has been lurking since Section 1. We showed that \\(\\mathbb{Q}\\) has gaps, yet we also claimed the rationals are "everywhere." The Archimedean Property lets us make this precise: between any two real numbers, no matter how close, there is always a rational, and always an irrational. The gaps are real, but they are invisible at every scale.</p>

                <p>We began this chapter by noting that the rationals are "everywhere" yet have gaps.  We can now make "everywhere" precise.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.10 — Density of \\(\\mathbb{Q}\\) in \\(\\mathbb{R}\\)</div>
                    <div class="env-body">
                        <p>Between any two distinct real numbers \\(a < b\\), there exists a rational number \\(q \\in \\mathbb{Q}\\) with \\(a < q < b\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By the Archimedean property, choose \\(n \\in \\mathbb{N}\\) with \\(n > 1/(b-a)\\).  Let \\(m_0 = \\lfloor na \\rfloor\\).  Then \\(m_0 \\le na < m_0 + 1\\), and \\(q = (m_0+1)/n\\) satisfies \\(a < q\\).  Also \\(q = m_0/n + 1/n \\le a + 1/n < a + (b-a) = b\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.11 — Density of Irrationals in \\(\\mathbb{R}\\)</div>
                    <div class="env-body">
                        <p>Between any two distinct real numbers, there exists an irrational number.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Given \\(a < b\\), apply density of \\(\\mathbb{Q}\\) to \\(a/\\sqrt{2}\\) and \\(b/\\sqrt{2}\\): there exists rational \\(q\\) with \\(a/\\sqrt{2} < q < b/\\sqrt{2}\\).  Then \\(a < q\\sqrt{2} < b\\), and \\(q\\sqrt{2}\\) is irrational (if \\(q \\ne 0\\)). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Interleaved Everywhere</div>
                    <div class="env-body">
                        <p>Between any two rationals there is an irrational, and between any two irrationals there is a rational.  Both sets are <strong>dense</strong> in \\(\\mathbb{R}\\), yet they are complementary — the rationals are countable while the irrationals are uncountable.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="density-explorer"></div>

                <div class="env-block example">
                    <div class="env-title">Example — Finding a Rational Between \\(\\pi\\) and \\(\\pi + 0.001\\)</div>
                    <div class="env-body">
                        <p>Take \\(n > 1/0.001 = 1000\\), say \\(n = 1001\\).  Then \\(m_0 = \\lfloor 1001\\pi \\rfloor = 3144\\), and \\(q = 3145/1001 \\approx 3.14185\\), which lies in \\((\\pi, \\pi + 0.001)\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Looking Ahead</div>
                    <div class="env-body">
                        <p>The completeness axiom, the Archimedean property, and the density results form the <strong>foundation</strong> on which all of real analysis is built.  Sequences, limits, continuity, differentiation, integration — every major concept relies on \\(\\mathbb{R}\\) having no gaps.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'density-explorer',
                    title: 'Density of Q and R\\Q',
                    description: 'Zoom into any interval: rationals (blue) and irrationals (red) are always interleaved.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 360, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var center = 1.5;
                        var halfWidth = 1.0;
                        var maxDenom = 20;

                        VizEngine.createSlider(controls, 'Center', 0, 4, 1.5, 0.001, function(v) { center = v; });
                        VizEngine.createSlider(controls, 'Half-width', 0.001, 2, 1.0, 0.001, function(v) { halfWidth = v; });
                        VizEngine.createSlider(controls, 'Max denom', 5, 200, 20, 1, function(v) { maxDenom = Math.round(v); });

                        function draw() {
                            viz.clear();

                            var a = center - halfWidth;
                            var b = center + halfWidth;
                            var lineY = 160;
                            var lineLeft = 60, lineRight = 640;
                            var lineLen = lineRight - lineLeft;

                            ctx.fillStyle = viz.colors.white; ctx.font = 'bold 14px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('Interval (' + a.toFixed(4) + ', ' + b.toFixed(4) + ')    width = ' + (2 * halfWidth).toFixed(4), 350, 10);

                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(lineLeft, lineY); ctx.lineTo(lineRight, lineY); ctx.stroke();

                            // Endpoint labels
                            var digits = Math.max(0, Math.ceil(-Math.log10(halfWidth / 5)) + 1);
                            ctx.fillStyle = viz.colors.text; ctx.font = '10px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText(a.toFixed(digits), lineLeft, lineY + 10);
                            ctx.fillText(b.toFixed(digits), lineRight, lineY + 10);

                            // Find rationals
                            var uniqueRats = [];
                            var seen = {};
                            for (var q = 1; q <= maxDenom; q++) {
                                var pMin = Math.ceil(a * q);
                                var pMax = Math.floor(b * q);
                                for (var p = pMin; p <= pMax; p++) {
                                    var val = p / q;
                                    if (val > a && val < b) {
                                        var key = val.toFixed(15);
                                        if (!seen[key]) { seen[key] = true; uniqueRats.push({ p: p, q: q, val: val }); }
                                    }
                                }
                            }
                            uniqueRats.sort(function(x, y) { return x.val - y.val; });

                            var rCount = Math.min(uniqueRats.length, 500);
                            for (var j = 0; j < rCount; j++) {
                                var r = uniqueRats[j];
                                var rx = lineLeft + ((r.val - a) / (b - a)) * lineLen;
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.arc(rx, lineY, Math.max(2, 5 - r.q * 0.02), 0, Math.PI * 2); ctx.fill();
                                if (rCount <= 30) {
                                    ctx.fillStyle = viz.colors.blue; ctx.font = '9px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                                    ctx.fillText(r.p + '/' + r.q, rx, lineY - 8);
                                }
                            }

                            // Known irrationals
                            var irrationals = []; var irrNames = [];
                            var bases = [Math.sqrt(2), Math.sqrt(3), Math.sqrt(5), Math.PI, Math.E, Math.log(2), Math.sqrt(7)];
                            var names = ['\u221A2', '\u221A3', '\u221A5', '\u03C0', 'e', 'ln2', '\u221A7'];
                            for (var k = 0; k < bases.length; k++) {
                                for (var mult = -10; mult <= 10; mult++) {
                                    var v = bases[k] + mult;
                                    if (v > a && v < b) { irrationals.push(v); irrNames.push(names[k] + (mult > 0 ? '+' + mult : mult < 0 ? '' + mult : '')); }
                                }
                            }

                            for (var m = 0; m < irrationals.length; m++) {
                                var ix = lineLeft + ((irrationals[m] - a) / (b - a)) * lineLen;
                                ctx.fillStyle = viz.colors.red;
                                ctx.beginPath(); ctx.arc(ix, lineY + 25, 3, 0, Math.PI * 2); ctx.fill();
                                if (irrationals.length <= 20) {
                                    ctx.fillStyle = viz.colors.red; ctx.font = '9px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                    ctx.fillText(irrNames[m], ix, lineY + 32);
                                }
                            }

                            ctx.fillStyle = viz.colors.white; ctx.font = '13px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('Found ' + rCount + ' rationals (denom \u2264 ' + maxDenom + ') and ' + irrationals.length + ' named irrationals', 350, 250);
                            ctx.fillStyle = viz.colors.text; ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('Both Q and R\\Q are dense: no matter how small the interval, both types appear.', 350, 275);

                            ctx.fillStyle = viz.colors.blue; ctx.beginPath(); ctx.arc(250, 315, 4, 0, Math.PI * 2); ctx.fill();
                            ctx.font = '11px -apple-system,sans-serif'; ctx.textAlign = 'left'; ctx.fillText('Rationals', 260, 315);
                            ctx.fillStyle = viz.colors.red; ctx.beginPath(); ctx.arc(350, 315, 4, 0, Math.PI * 2); ctx.fill();
                            ctx.fillText('Irrationals', 360, 315);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Find a rational number between \\(3.141592\\) and \\(3.141593\\).',
                    hint: 'Use the proof method: pick \\(n > 10^6\\), compute \\(m_0 = \\lfloor na \\rfloor\\), and check \\((m_0+1)/n\\).',
                    solution: 'Take \\(n = 10^6 + 1\\).  Then \\(m_0 = \\lfloor 1000001 \\times 3.141592 \\rfloor = 3141595\\).  So \\(q = 3141596/1000001 \\approx 3.1415929\\).  Check: \\(3.141592 < q < 3.141593\\).'
                },
                {
                    question: 'Prove: between any two irrational numbers, there is a rational number.',
                    hint: 'This is just the density theorem applied to arbitrary reals.',
                    solution: 'Theorem 1.10 says: for all \\(a, b \\in \\mathbb{R}\\) with \\(a < b\\), there is \\(q \\in \\mathbb{Q}\\) with \\(a < q < b\\).  This applies regardless of whether \\(a, b\\) are rational or irrational.'
                },
                {
                    question: 'Prove that every real number is the supremum of the set of all rationals less than it: \\(x = \\sup\\{q \\in \\mathbb{Q} : q < x\\}\\).',
                    hint: '\\(x\\) is an upper bound.  For tightness, use density.',
                    solution: 'Let \\(S = \\{q \\in \\mathbb{Q} : q < x\\}\\).  \\(x\\) is an upper bound.  For any \\(\\varepsilon > 0\\), density gives \\(q\\) with \\(x-\\varepsilon < q < x\\), so \\(q \\in S\\) and \\(q > x-\\varepsilon\\).  By Theorem 1.7, \\(x = \\sup S\\).'
                },
                {
                    question: 'Show that \\(\\mathbb{Q}\\) is not complete: give a bounded subset with no sup in \\(\\mathbb{Q}\\).',
                    hint: '\\(\\{r \\in \\mathbb{Q} : r^2 < 2\\}\\) is the classical example.',
                    solution: '\\(S = \\{r \\in \\mathbb{Q} : r \\ge 0,\\, r^2 < 2\\}\\).  Bounded above by 2.  If \\(\\sup_{\\mathbb{Q}} S = q\\), then \\(q^2 < 2\\) or \\(q^2 > 2\\) (\\(q^2 = 2\\) is impossible in \\(\\mathbb{Q}\\)).  In either case, one finds a closer rational, contradicting the supremum property.'
                },
                {
                    question: 'Use density to prove: if \\(x \\le y + 1/n\\) for all \\(n \\in \\mathbb{N}\\), then \\(x \\le y\\).',
                    hint: 'Suppose \\(x > y\\).  Then \\(x - y > 0\\), and by the Archimedean property...',
                    solution: 'Suppose \\(x > y\\).  Then \\(x-y > 0\\).  Archimedean: \\(\\exists n\\) with \\(1/n < x-y\\), i.e., \\(y+1/n < x\\).  Contradiction.'
                },
                {
                    question: 'Prove that the set of irrational numbers is uncountable.',
                    hint: '\\(\\mathbb{R} = \\mathbb{Q} \\cup (\\mathbb{R}\\setminus\\mathbb{Q})\\).  \\(\\mathbb{Q}\\) is countable.  What if the irrationals were also countable?',
                    solution: 'If \\(\\mathbb{R}\\setminus\\mathbb{Q}\\) were countable, then \\(\\mathbb{R} = \\mathbb{Q} \\cup (\\mathbb{R}\\setminus\\mathbb{Q})\\) would be countable (union of two countable sets).  But \\(\\mathbb{R}\\) is uncountable (Cantor).  Contradiction.'
                }
            ]
        },

        // ============================================================
        //  SECTION 6 — The Completeness Landscape
        // ============================================================
        {
            id: 'ch01-sec06',
            title: 'The Completeness Landscape',
            content: `
                <h2>The Completeness Landscape</h2>

                <p>We have traveled a long path: from the gaps in \\(\\mathbb{Q}\\), through Dedekind's construction, to the LUB Property, the Archimedean Property, and the density theorems. Each result followed logically from the one before. Let us step back and see the architecture of what we have built.</p>

                <div class="env-block remark">
                    <div class="env-title">The Logical Chain</div>
                    <div class="env-body">
                        <ol>
                            <li><strong>\\(\\mathbb{Q}\\) is incomplete:</strong> bounded sets can lack a supremum.</li>
                            <li><strong>Dedekind cuts fill the gaps:</strong> the collection of all cuts forms \\(\\mathbb{R}\\).</li>
                            <li><strong>\\(\\mathbb{R}\\) satisfies the LUB property</strong> (completeness axiom).</li>
                            <li><strong>Completeness \\(\\Rightarrow\\) Archimedean property:</strong> \\(\\mathbb{N}\\) is unbounded.</li>
                            <li><strong>Archimedean \\(\\Rightarrow\\) Density of \\(\\mathbb{Q}\\)</strong> in \\(\\mathbb{R}\\).</li>
                            <li><strong>Density + irrationality \\(\\Rightarrow\\) Density of irrationals.</strong></li>
                        </ol>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="completeness-landscape"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.12 — Uniqueness of \\(\\mathbb{R}\\)</div>
                    <div class="env-body">
                        <p>Any two complete ordered fields are isomorphic.  \\(\\mathbb{R}\\) is the unique complete ordered field (up to isomorphism).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Equivalent Forms of Completeness</div>
                    <div class="env-body">
                        <p>The following are all equivalent for an ordered field:</p>
                        <ul>
                            <li>Least Upper Bound Property</li>
                            <li>Greatest Lower Bound Property</li>
                            <li>Monotone Convergence Theorem</li>
                            <li>Nested Intervals Property</li>
                            <li>Bolzano-Weierstrass Theorem</li>
                            <li>Cauchy Completeness + Archimedean Property</li>
                        </ul>
                        <p>We will prove several of these equivalences in the coming chapters.</p>
                    </div>
                </div>

                <div class="env-block motivation">
                    <div class="env-title">Looking Ahead: From Completeness to Limits</div>
                    <div class="env-body">
                        <p>We now have the complete real line, with its crucial Least Upper Bound Property. We have seen that this single axiom gives us the Archimedean Property, the density of both \\(\\mathbb{Q}\\) and the irrationals, and a web of equivalent completeness formulations. This completeness is exactly what we need to make <strong>limits</strong> rigorous. In the next chapter, we define sequences in \\(\\mathbb{R}\\) and the \\(\\varepsilon\\)-\\(N\\) definition of convergence. The reason limits "work" in \\(\\mathbb{R}\\) (and fail in \\(\\mathbb{Q}\\)) is precisely the completeness we have just established.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'completeness-landscape',
                    title: 'The Completeness Implication Map',
                    description: 'See how the key properties of R flow from the completeness axiom.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;

                        var nodes = [
                            { x: 350, y: 40, label: 'LUB Property', color: viz.colors.red, w: 140 },
                            { x: 350, y: 110, label: 'Archimedean Property', color: viz.colors.orange, w: 170 },
                            { x: 200, y: 180, label: 'Density of Q', color: viz.colors.blue, w: 130 },
                            { x: 500, y: 180, label: 'Density of R\\Q', color: viz.colors.purple, w: 140 },
                            { x: 140, y: 260, label: 'Nested Intervals', color: viz.colors.teal, w: 140 },
                            { x: 350, y: 260, label: 'Monotone Convergence', color: viz.colors.green, w: 170 },
                            { x: 560, y: 260, label: 'Bolzano-Weierstrass', color: viz.colors.pink, w: 160 },
                            { x: 350, y: 340, label: 'Cauchy Completeness', color: viz.colors.yellow, w: 160 }
                        ];

                        var edges = [ [0,1], [1,2], [2,3], [0,4], [0,5], [5,6], [6,7], [7,0], [4,0] ];

                        function draw() {
                            viz.clear();

                            for (var e = 0; e < edges.length; e++) {
                                var from = nodes[edges[e][0]];
                                var to = nodes[edges[e][1]];
                                var dx = to.x - from.x;
                                var dy = to.y - from.y;
                                var len = Math.sqrt(dx * dx + dy * dy);
                                var ux = dx / len, uy = dy / len;

                                ctx.strokeStyle = viz.colors.text; ctx.lineWidth = 1.5;
                                ctx.beginPath(); ctx.moveTo(from.x + ux * 22, from.y + uy * 22); ctx.lineTo(to.x - ux * 22, to.y - uy * 22); ctx.stroke();

                                var angle = Math.atan2(to.y - uy * 22 - (from.y + uy * 22), to.x - ux * 22 - (from.x + ux * 22));
                                var ex = to.x - ux * 22, ey = to.y - uy * 22;
                                ctx.fillStyle = viz.colors.text;
                                ctx.beginPath();
                                ctx.moveTo(ex, ey);
                                ctx.lineTo(ex - 8 * Math.cos(angle - 0.35), ey - 8 * Math.sin(angle - 0.35));
                                ctx.lineTo(ex - 8 * Math.cos(angle + 0.35), ey - 8 * Math.sin(angle + 0.35));
                                ctx.closePath(); ctx.fill();
                            }

                            for (var n = 0; n < nodes.length; n++) {
                                var nd = nodes[n];
                                var hw = nd.w / 2;
                                var rx = nd.x - hw, ry = nd.y - 16, rw = nd.w, rh = 32;

                                ctx.fillStyle = nd.color + '22'; ctx.strokeStyle = nd.color; ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.moveTo(rx + 6, ry); ctx.lineTo(rx + rw - 6, ry);
                                ctx.quadraticCurveTo(rx + rw, ry, rx + rw, ry + 6);
                                ctx.lineTo(rx + rw, ry + rh - 6);
                                ctx.quadraticCurveTo(rx + rw, ry + rh, rx + rw - 6, ry + rh);
                                ctx.lineTo(rx + 6, ry + rh);
                                ctx.quadraticCurveTo(rx, ry + rh, rx, ry + rh - 6);
                                ctx.lineTo(rx, ry + 6);
                                ctx.quadraticCurveTo(rx, ry, rx + 6, ry);
                                ctx.closePath(); ctx.fill(); ctx.stroke();

                                ctx.fillStyle = nd.color; ctx.font = 'bold 12px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                                ctx.fillText(nd.label, nd.x, nd.y);
                            }

                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('Arrows show implication. The cycle through LUB shows these properties are all equivalent.', 350, 380);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'State the Nested Intervals Property and prove it from the LUB property.',
                    hint: 'Given \\([a_n, b_n]\\) nested with \\(b_n - a_n \\to 0\\), consider \\(\\sup\\{a_n\\}\\).',
                    solution: 'If \\([a_n, b_n]\\) are nested with \\(b_n - a_n \\to 0\\), then \\(x = \\sup\\{a_n\\}\\) exists by LUB.  One shows \\(a_n \\le x \\le b_n\\) for all \\(n\\), so \\(x \\in \\bigcap [a_n, b_n]\\).  Uniqueness follows from \\(b_n - a_n \\to 0\\).'
                },
                {
                    question: 'Prove: the LUB property implies the Greatest Lower Bound property.',
                    hint: 'Use \\(\\inf S = -\\sup(-S)\\).',
                    solution: 'Let \\(S\\) be non-empty and bounded below.  Then \\(-S\\) is non-empty and bounded above.  By LUB, \\(\\sup(-S)\\) exists.  Then \\(\\inf S = -\\sup(-S) \\in \\mathbb{R}\\).'
                },
                {
                    question: 'Give an example of an Archimedean ordered field that is not complete.',
                    hint: 'Is \\(\\mathbb{Q}\\) Archimedean?',
                    solution: '\\(\\mathbb{Q}\\) is Archimedean but not complete (\\(\\{r : r^2 < 2\\}\\) has no sup in \\(\\mathbb{Q}\\)).'
                },
                {
                    question: 'Show that Cauchy completeness alone does not imply the Archimedean property.',
                    hint: 'Consider a non-Archimedean field where Cauchy sequences converge.',
                    solution: 'The field \\(\\mathbb{R}((x))\\) of formal Laurent series is Cauchy-complete but not Archimedean (\\(x\\) exceeds every integer).'
                },
                {
                    question: 'Summarize: why do we need to "construct" \\(\\mathbb{R}\\)?  Why not just declare completeness?',
                    hint: 'Declaring axioms does not guarantee a model exists.',
                    solution: 'Axioms are meaningless without a model.  The Dedekind cut (or Cauchy sequence) construction proves a complete ordered field exists.  Uniqueness then tells us it is essentially the only one.  After construction, we work axiomatically.'
                }
            ]
        }
    ]
});
