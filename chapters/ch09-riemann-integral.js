window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch09',
    number: 9,
    title: 'The Riemann Integral',
    subtitle: 'Darboux sums, Riemann integrability, properties of the integral, and the Fundamental Theorem of Calculus.',
    sections: [
        // ================================================================
        // SECTION 1: Darboux Sums — Upper and Lower Fences
        // ================================================================
        {
            id: 'ch09-sec01',
            title: 'Darboux Sums: Upper and Lower Fences',
            content: `
                <h2>Darboux Sums: Upper and Lower Fences</h2>

                <p>Imagine you own a plot of land whose boundary is described by a curve \\(f\\) above the \\(x\\)-axis, from \\(x = a\\) to \\(x = b\\). You want to know the <strong>exact area</strong> of this plot. But how do you measure a region with a curved boundary?</p>

                <p>The idea of <strong>Jean-Gaston Darboux</strong> is brilliantly simple: build two fences — one that <em>overestimates</em> and one that <em>underestimates</em> — then squeeze them together.</p>

                <h3>Partitions</h3>

                <p>A <strong>partition</strong> of \\([a, b]\\) is a finite set of points
                \\[
                    P = \\{x_0, x_1, x_2, \\ldots, x_n\\}, \\quad a = x_0 < x_1 < x_2 < \\cdots < x_n = b.
                \\]
                These points chop \\([a, b]\\) into \\(n\\) subintervals \\([x_{i-1}, x_i]\\). The <strong>mesh</strong> (or <strong>norm</strong>) of \\(P\\) is the width of the widest piece:
                \\[
                    \\|P\\| = \\max_{1 \\le i \\le n}(x_i - x_{i-1}).
                \\]</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.1 — Darboux Upper and Lower Sums</div>
                    <div class="env-body">
                        <p>Let \\(f : [a,b] \\to \\mathbb{R}\\) be <strong>bounded</strong>, and let \\(P = \\{x_0, \\ldots, x_n\\}\\) be a partition of \\([a,b]\\). Define on each subinterval:</p>
                        \\[
                            M_i = \\sup_{x \\in [x_{i-1}, x_i]} f(x), \\qquad
                            m_i = \\inf_{x \\in [x_{i-1}, x_i]} f(x).
                        \\]
                        <p>The <strong>upper Darboux sum</strong> and <strong>lower Darboux sum</strong> are:</p>
                        \\[
                            U(f, P) = \\sum_{i=1}^{n} M_i \\,(x_i - x_{i-1}), \\qquad
                            L(f, P) = \\sum_{i=1}^{n} m_i \\,(x_i - x_{i-1}).
                        \\]
                    </div>
                </div>

                <p>Geometrically, \\(U(f,P)\\) is the total area of rectangles that sit <em>above</em> the curve (the upper fence), while \\(L(f,P)\\) uses rectangles that sit <em>below</em> the curve (the lower fence). The true area is always trapped between them.</p>

                <div class="viz-placeholder" data-viz="darboux-upper-lower"></div>

                <h3>Refinements Tighten the Squeeze</h3>

                <p>A partition \\(Q\\) is a <strong>refinement</strong> of \\(P\\) if \\(P \\subseteq Q\\) — that is, \\(Q\\) contains all of \\(P\\)'s points plus possibly more. Adding points can only help:</p>

                <div class="env-block theorem">
                    <div class="env-title">Lemma 9.2 — Refinement Lemma</div>
                    <div class="env-body">
                        <p>If \\(Q\\) is a refinement of \\(P\\), then</p>
                        \\[
                            L(f, P) \\le L(f, Q) \\le U(f, Q) \\le U(f, P).
                        \\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p>It suffices to show the result when \\(Q\\) adds a single point \\(t\\) to a subinterval \\([x_{i-1}, x_i]\\). Splitting this interval into \\([x_{i-1}, t]\\) and \\([t, x_i]\\) replaces one term \\(M_i(x_i - x_{i-1})\\) in the upper sum by two terms whose suprema are at most \\(M_i\\). Hence the upper sum cannot increase. A symmetric argument shows the lower sum cannot decrease. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="refinement-squeeze"></div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Think of it this way: the upper fence can only come <em>down</em> (or stay put) when you add partition points, because each rectangle is replaced by two narrower ones whose tops can be no higher. The lower fence can only go <em>up</em>. They close in on the true area like the jaws of a vise.</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 9.3</div>
                    <div class="env-body">
                        <p>For <strong>any</strong> two partitions \\(P_1, P_2\\) of \\([a,b]\\),</p>
                        \\[
                            L(f, P_1) \\le U(f, P_2).
                        \\]
                        <p>(Every lower sum is at most every upper sum.)</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(Q = P_1 \\cup P_2\\). Then \\(Q\\) refines both, so \\(L(f, P_1) \\le L(f, Q) \\le U(f, Q) \\le U(f, P_2)\\). \\(\\square\\)</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'darboux-upper-lower',
                    title: 'Upper and Lower Darboux Sums',
                    description: 'See how upper and lower rectangles bracket the area under a curve. Adjust the number of subintervals to watch them converge.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 720, height: 400, scale: 70, originX: 60, originY: 340 });
                        var n = 4;
                        var showUpper = true;
                        var showLower = true;
                        var funcChoice = 0;
                        var funcs = [
                            function(x) { return 0.3 * x * x + 0.2; },
                            function(x) { return Math.sin(x * 1.2) + 1.2; },
                            function(x) { return 2.5 - 0.4 * (x - 4) * (x - 4) + 0.3 * Math.sin(3 * x); }
                        ];
                        var funcNames = ['x^2/3 + 0.2', 'sin(1.2x) + 1.2', 'bell curve + ripple'];
                        var a = 0.5, b = 8;

                        VizEngine.createSlider(controls, 'Subintervals n', 1, 60, 4, 1, function(v) { n = Math.round(v); });
                        VizEngine.createButton(controls, 'Toggle Upper', function() { showUpper = !showUpper; });
                        VizEngine.createButton(controls, 'Toggle Lower', function() { showLower = !showLower; });
                        VizEngine.createButton(controls, 'Next Function', function() { funcChoice = (funcChoice + 1) % funcs.length; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();
                            var f = funcs[funcChoice];
                            var dx = (b - a) / n;
                            var ctx = viz.ctx;
                            var upperSum = 0, lowerSum = 0;

                            for (var i = 0; i < n; i++) {
                                var xL = a + i * dx;
                                var xR = xL + dx;
                                var sup = -Infinity, inf = Infinity;
                                for (var s = 0; s <= 20; s++) {
                                    var val = f(xL + (xR - xL) * s / 20);
                                    if (val > sup) sup = val;
                                    if (val < inf) inf = val;
                                }
                                upperSum += sup * dx;
                                lowerSum += inf * dx;

                                var sxL = viz.toScreen(xL, 0);
                                var sxR = viz.toScreen(xR, 0);

                                if (showUpper) {
                                    var syU = viz.toScreen(0, sup);
                                    ctx.fillStyle = viz.colors.red + '30';
                                    ctx.fillRect(sxL[0], syU[1], sxR[0] - sxL[0], sxL[1] - syU[1]);
                                    ctx.strokeStyle = viz.colors.red;
                                    ctx.lineWidth = 1.5;
                                    ctx.strokeRect(sxL[0], syU[1], sxR[0] - sxL[0], sxL[1] - syU[1]);
                                }
                                if (showLower) {
                                    var syLo = viz.toScreen(0, inf);
                                    ctx.fillStyle = viz.colors.blue + '30';
                                    ctx.fillRect(sxL[0], syLo[1], sxR[0] - sxL[0], sxL[1] - syLo[1]);
                                    ctx.strokeStyle = viz.colors.blue;
                                    ctx.lineWidth = 1.5;
                                    ctx.strokeRect(sxL[0], syLo[1], sxR[0] - sxL[0], sxL[1] - syLo[1]);
                                }
                            }

                            viz.drawFunction(f, 0, 9, viz.colors.white, 2.5);

                            // Labels
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('f(x) = ' + funcNames[funcChoice], 80, 12);
                            ctx.fillText('n = ' + n, 80, 32);
                            if (showUpper) {
                                ctx.fillStyle = viz.colors.red;
                                ctx.fillText('U(f,P) = ' + upperSum.toFixed(4), 350, 12);
                            }
                            if (showLower) {
                                ctx.fillStyle = viz.colors.blue;
                                ctx.fillText('L(f,P) = ' + lowerSum.toFixed(4), 350, 32);
                            }
                            if (showUpper && showLower) {
                                ctx.fillStyle = viz.colors.teal;
                                ctx.fillText('Gap = ' + (upperSum - lowerSum).toFixed(4), 550, 12);
                            }

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'refinement-squeeze',
                    title: 'Refinement Squeezes the Gap',
                    description: 'Watch how adding partition points pushes upper sums down and lower sums up, closing the gap toward the true integral.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 720, height: 360, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var maxN = 80;
                        var f = function(x) { return Math.sin(x) + 1.3 + 0.15 * x; };
                        var a = 0.5, b = 6;

                        function computeSums(n) {
                            var dx = (b - a) / n;
                            var U = 0, L = 0;
                            for (var i = 0; i < n; i++) {
                                var xL = a + i * dx;
                                var sup = -Infinity, inf = Infinity;
                                for (var s = 0; s <= 20; s++) {
                                    var v = f(xL + dx * s / 20);
                                    if (v > sup) sup = v;
                                    if (v < inf) inf = v;
                                }
                                U += sup * dx;
                                L += inf * dx;
                            }
                            return { upper: U, lower: L };
                        }

                        var data = [];
                        for (var k = 1; k <= maxN; k++) {
                            data.push(computeSums(k));
                        }

                        var animN = 1;
                        VizEngine.createSlider(controls, 'Partitions shown', 1, maxN, 1, 1, function(v) { animN = Math.round(v); });

                        function draw() {
                            viz.clear();
                            var leftMargin = 70;
                            var rightMargin = 30;
                            var topMargin = 45;
                            var bottomMargin = 45;
                            var plotW = viz.width - leftMargin - rightMargin;
                            var plotH = viz.height - topMargin - bottomMargin;

                            var allVals = [];
                            for (var i = 0; i < data.length; i++) {
                                allVals.push(data[i].upper);
                                allVals.push(data[i].lower);
                            }
                            var yMin = Math.min.apply(null, allVals) - 0.3;
                            var yMax = Math.max.apply(null, allVals) + 0.3;

                            function toPlot(n, val) {
                                var px = leftMargin + ((n - 1) / (maxN - 1)) * plotW;
                                var py = topMargin + plotH - ((val - yMin) / (yMax - yMin)) * plotH;
                                return [px, py];
                            }

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(leftMargin, topMargin);
                            ctx.lineTo(leftMargin, topMargin + plotH);
                            ctx.lineTo(leftMargin + plotW, topMargin + plotH);
                            ctx.stroke();

                            // Y axis labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                            for (var y = Math.ceil(yMin); y <= Math.floor(yMax + 1); y += 1) {
                                var pt = toPlot(1, y);
                                ctx.fillText(y.toFixed(1), leftMargin - 8, pt[1]);
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.lineWidth = 0.5;
                                ctx.beginPath();
                                ctx.moveTo(leftMargin, pt[1]);
                                ctx.lineTo(leftMargin + plotW, pt[1]);
                                ctx.stroke();
                            }

                            // X axis labels
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var xn = 10; xn <= maxN; xn += 10) {
                                var ptx = toPlot(xn, yMin);
                                ctx.fillText(xn, ptx[0], topMargin + plotH + 6);
                            }
                            ctx.fillText('n (subintervals)', leftMargin + plotW / 2, topMargin + plotH + 25);

                            // Fill the gap region
                            ctx.beginPath();
                            for (var i = 0; i < animN; i++) {
                                var pt1 = toPlot(i + 1, data[i].upper);
                                if (i === 0) ctx.moveTo(pt1[0], pt1[1]);
                                else ctx.lineTo(pt1[0], pt1[1]);
                            }
                            for (var i = animN - 1; i >= 0; i--) {
                                var pt2 = toPlot(i + 1, data[i].lower);
                                ctx.lineTo(pt2[0], pt2[1]);
                            }
                            ctx.closePath();
                            ctx.fillStyle = viz.colors.teal + '22';
                            ctx.fill();

                            // Plot upper sums
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i < animN; i++) {
                                var pt = toPlot(i + 1, data[i].upper);
                                if (i === 0) ctx.moveTo(pt[0], pt[1]);
                                else ctx.lineTo(pt[0], pt[1]);
                            }
                            ctx.stroke();

                            // Plot lower sums
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i < animN; i++) {
                                var pt = toPlot(i + 1, data[i].lower);
                                if (i === 0) ctx.moveTo(pt[0], pt[1]);
                                else ctx.lineTo(pt[0], pt[1]);
                            }
                            ctx.stroke();

                            // True integral line (midpoint at high n)
                            var trueVal = (data[maxN - 1].upper + data[maxN - 1].lower) / 2;
                            var truePt1 = toPlot(1, trueVal);
                            var truePt2 = toPlot(maxN, trueVal);
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([5, 5]);
                            ctx.beginPath();
                            ctx.moveTo(truePt1[0], truePt1[1]);
                            ctx.lineTo(truePt2[0], truePt2[1]);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Title and legend
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Upper & Lower Sums vs. Number of Subintervals', viz.width / 2, 5);

                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = viz.colors.red;
                            ctx.fillText('U(f,P) = ' + data[animN - 1].upper.toFixed(4), leftMargin + plotW - 200, topMargin + 10);
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('L(f,P) = ' + data[animN - 1].lower.toFixed(4), leftMargin + plotW - 200, topMargin + 26);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('Gap = ' + (data[animN - 1].upper - data[animN - 1].lower).toFixed(4), leftMargin + plotW - 200, topMargin + 42);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('True integral (approx)', leftMargin + plotW - 200, topMargin + 58);
                        }

                        draw();
                        controls.querySelector('.viz-slider').addEventListener('input', draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(f(x) = 3\\) on \\([0, 5]\\). Compute \\(U(f, P)\\) and \\(L(f, P)\\) for any partition \\(P\\). What is the integral?',
                    hint: 'For a constant function, \\(M_i = m_i = 3\\) on every subinterval.',
                    solution: 'Since \\(f\\) is constant, \\(M_i = m_i = 3\\) for every \\(i\\). Therefore \\(U(f,P) = L(f,P) = 3 \\sum (x_i - x_{i-1}) = 3(5 - 0) = 15\\). The integral is \\(15\\).'
                },
                {
                    question: 'Compute the upper and lower Darboux sums for \\(f(x) = x\\) on \\([0, 1]\\) with the partition \\(P = \\{0, 1/2, 1\\}\\).',
                    hint: 'On \\([0, 1/2]\\): \\(\\sup f = 1/2\\), \\(\\inf f = 0\\). On \\([1/2, 1]\\): \\(\\sup f = 1\\), \\(\\inf f = 1/2\\).',
                    solution: '\\(U(f,P) = \\frac{1}{2}\\cdot\\frac{1}{2} + 1\\cdot\\frac{1}{2} = \\frac{3}{4}\\). \\(L(f,P) = 0\\cdot\\frac{1}{2} + \\frac{1}{2}\\cdot\\frac{1}{2} = \\frac{1}{4}\\). The true integral is \\(1/2\\), which indeed lies in \\([1/4, 3/4]\\).'
                },
                {
                    question: 'Prove that for any bounded function \\(f\\) on \\([a,b]\\) and any partition \\(P\\), we have \\(L(f,P) \\le U(f,P)\\).',
                    hint: 'On each subinterval, \\(m_i \\le M_i\\).',
                    solution: 'Since \\(m_i = \\inf f \\le \\sup f = M_i\\) on each \\([x_{i-1}, x_i]\\), and \\(x_i - x_{i-1} > 0\\), we get \\(m_i(x_i - x_{i-1}) \\le M_i(x_i - x_{i-1})\\). Summing: \\(L(f,P) \\le U(f,P)\\).'
                },
                {
                    question: 'Compute \\(U(f, P)\\) and \\(L(f, P)\\) for \\(f(x) = x^2\\) on \\([0, 1]\\) with the uniform partition into \\(n\\) equal pieces. Express your answer using the formula \\(\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}\\).',
                    hint: 'Each subinterval is \\([(k-1)/n, k/n]\\). Since \\(f\\) is increasing, \\(M_k = (k/n)^2\\) and \\(m_k = ((k-1)/n)^2\\).',
                    solution: '\\(U(f,P) = \\sum_{k=1}^n \\frac{k^2}{n^2}\\cdot\\frac{1}{n} = \\frac{1}{n^3}\\cdot\\frac{n(n+1)(2n+1)}{6} = \\frac{(n+1)(2n+1)}{6n^2}\\). Similarly \\(L(f,P) = \\frac{(n-1)(2n-1)}{6n^2}\\). Both tend to \\(1/3\\) as \\(n \\to \\infty\\), confirming \\(\\int_0^1 x^2\\,dx = 1/3\\).'
                },
                {
                    question: 'If \\(P\\) has 5 subintervals and \\(Q\\) is formed by adding 3 new points (one in each of 3 different subintervals), how many subintervals does \\(Q\\) have?',
                    hint: 'Each new point splits one subinterval into two, increasing the count by 1.',
                    solution: '\\(Q\\) has \\(5 + 3 = 8\\) subintervals. Each new point adds exactly one subinterval.'
                }
            ]
        },

        // ================================================================
        // SECTION 2: Riemann Integrability — When the Fences Meet
        // ================================================================
        {
            id: 'ch09-sec02',
            title: 'Riemann Integrability: When the Fences Meet',
            content: `
                <h2>Riemann Integrability: When the Fences Meet</h2>

                <p>The upper sums form a set bounded below (by any lower sum), and the lower sums form a set bounded above (by any upper sum). By the completeness of \\(\\mathbb{R}\\), both families have limiting values.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.4 — Upper and Lower Integrals</div>
                    <div class="env-body">
                        <p>The <strong>upper Darboux integral</strong> and <strong>lower Darboux integral</strong> of a bounded function \\(f : [a,b] \\to \\mathbb{R}\\) are:</p>
                        \\[
                            \\overline{\\int_a^b} f = \\inf_P \\, U(f, P), \\qquad
                            \\underline{\\int_a^b} f = \\sup_P \\, L(f, P),
                        \\]
                        <p>where the inf and sup are taken over <em>all</em> partitions \\(P\\) of \\([a,b]\\).</p>
                    </div>
                </div>

                <p>By Corollary 9.3, every lower sum \\(\\le\\) every upper sum, so:</p>
                \\[
                    \\underline{\\int_a^b} f \\;\\le\\; \\overline{\\int_a^b} f.
                \\]

                <div class="env-block definition">
                    <div class="env-title">Definition 9.5 — Riemann Integrability (Darboux's Criterion)</div>
                    <div class="env-body">
                        <p>A bounded function \\(f : [a,b] \\to \\mathbb{R}\\) is <strong>Riemann integrable</strong> (or <strong>Darboux integrable</strong>) if</p>
                        \\[
                            \\underline{\\int_a^b} f = \\overline{\\int_a^b} f.
                        \\]
                        <p>In this case, the common value is denoted \\(\\displaystyle\\int_a^b f(x)\\,dx\\).</p>
                    </div>
                </div>

                <p>The following criterion is the practical workhorse for proving integrability:</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.6 — The \\(\\varepsilon\\)-Criterion for Integrability</div>
                    <div class="env-body">
                        <p>A bounded function \\(f\\) on \\([a,b]\\) is Riemann integrable if and only if for every \\(\\varepsilon > 0\\), there exists a partition \\(P\\) such that</p>
                        \\[
                            U(f, P) - L(f, P) < \\varepsilon.
                        \\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(\\(\\Rightarrow\\))</strong> If \\(f\\) is integrable, then \\(\\inf_P U(f,P) = \\sup_P L(f,P)\\). Given \\(\\varepsilon > 0\\), choose \\(P_1\\) with \\(U(f,P_1) < \\int f + \\varepsilon/2\\) and \\(P_2\\) with \\(L(f,P_2) > \\int f - \\varepsilon/2\\). Let \\(P = P_1 \\cup P_2\\). Then \\(U(f,P) - L(f,P) \\le U(f,P_1) - L(f,P_2) < \\varepsilon\\).</p>
                        <p><strong>(\\(\\Leftarrow\\))</strong> Given \\(\\varepsilon > 0\\), take \\(P\\) with \\(U(f,P) - L(f,P) < \\varepsilon\\). Then \\(0 \\le \\overline{\\int} f - \\underline{\\int} f \\le U(f,P) - L(f,P) < \\varepsilon\\). Since \\(\\varepsilon\\) is arbitrary, the two integrals are equal. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="integrability-epsilon"></div>

                <h3>Classes of Integrable Functions</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.7 — Continuous Functions are Integrable</div>
                    <div class="env-body">
                        <p>If \\(f : [a,b] \\to \\mathbb{R}\\) is continuous, then \\(f\\) is Riemann integrable.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Since \\(f\\) is continuous on a compact interval, it is uniformly continuous. Given \\(\\varepsilon > 0\\), choose \\(\\delta > 0\\) so that \\(|x - y| < \\delta \\implies |f(x) - f(y)| < \\varepsilon / (b - a)\\).</p>
                        <p>Take any partition \\(P\\) with mesh \\(\\|P\\| < \\delta\\). On each subinterval \\([x_{i-1}, x_i]\\), the oscillation \\(M_i - m_i < \\varepsilon/(b-a)\\). Therefore:</p>
                        \\[
                            U(f,P) - L(f,P) = \\sum (M_i - m_i)(x_i - x_{i-1}) < \\frac{\\varepsilon}{b-a} \\cdot (b-a) = \\varepsilon. \\quad \\square
                        \\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.8 — Monotone Functions are Integrable</div>
                    <div class="env-body">
                        <p>If \\(f : [a,b] \\to \\mathbb{R}\\) is monotone (increasing or decreasing), then \\(f\\) is Riemann integrable.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Assume \\(f\\) is increasing (the decreasing case is analogous). Use the uniform partition with mesh \\((b-a)/n\\). On \\([x_{i-1}, x_i]\\): \\(M_i = f(x_i)\\) and \\(m_i = f(x_{i-1})\\). Then:</p>
                        \\[
                            U - L = \\frac{b-a}{n}\\sum_{i=1}^n [f(x_i) - f(x_{i-1})] = \\frac{b-a}{n}[f(b) - f(a)].
                        \\]
                        <p>This can be made smaller than any \\(\\varepsilon > 0\\) by choosing \\(n\\) large enough. \\(\\square\\)</p>
                    </div>
                </div>

                <h3>A Non-Integrable Function</h3>

                <div class="env-block example">
                    <div class="env-title">Example 9.9 — Dirichlet's Function</div>
                    <div class="env-body">
                        <p>Define \\(D(x) = \\begin{cases} 1 & \\text{if } x \\in \\mathbb{Q} \\\\ 0 & \\text{if } x \\notin \\mathbb{Q}\\end{cases}\\) on \\([0,1]\\).</p>
                        <p>Every subinterval contains both rationals and irrationals, so \\(M_i = 1\\) and \\(m_i = 0\\) for all \\(i\\). Hence \\(U(D, P) = 1\\) and \\(L(D, P) = 0\\) for every partition \\(P\\). The gap is always \\(1 > 0\\), so \\(D\\) is <strong>not</strong> Riemann integrable.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="integrable-vs-not"></div>
            `,
            visualizations: [
                {
                    id: 'integrability-epsilon',
                    title: 'The Epsilon Criterion in Action',
                    description: 'Set a target epsilon and watch as we find a partition making U - L < epsilon.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 720, height: 380, scale: 70, originX: 60, originY: 320 });
                        var ctx = viz.ctx;
                        var epsilon = 1.0;
                        var f = function(x) { return 0.5 + Math.sin(x) + 0.3 * Math.cos(2.5 * x); };
                        var a = 0.5, b = 7;

                        VizEngine.createSlider(controls, 'Target epsilon', 0.01, 3, 1, 0.01, function(v) { epsilon = v; });

                        function findN(eps) {
                            for (var n = 1; n <= 200; n++) {
                                var dx = (b - a) / n;
                                var gap = 0;
                                for (var i = 0; i < n; i++) {
                                    var xL = a + i * dx;
                                    var sup = -Infinity, inf = Infinity;
                                    for (var s = 0; s <= 20; s++) {
                                        var v = f(xL + dx * s / 20);
                                        if (v > sup) sup = v;
                                        if (v < inf) inf = v;
                                    }
                                    gap += (sup - inf) * dx;
                                }
                                if (gap < eps) return { n: n, gap: gap };
                            }
                            return { n: 200, gap: 0 };
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var result = findN(epsilon);
                            var n = result.n;
                            var dx = (b - a) / n;

                            // Draw lower and upper sums
                            for (var i = 0; i < n; i++) {
                                var xL = a + i * dx;
                                var xR = xL + dx;
                                var sup = -Infinity, inf = Infinity;
                                for (var s = 0; s <= 20; s++) {
                                    var v = f(xL + (xR - xL) * s / 20);
                                    if (v > sup) sup = v;
                                    if (v < inf) inf = v;
                                }

                                var sxL = viz.toScreen(xL, 0);
                                var sxR = viz.toScreen(xR, 0);

                                // Draw the gap (oscillation) band for each rectangle
                                var syU = viz.toScreen(0, sup);
                                var syLo = viz.toScreen(0, inf);
                                ctx.fillStyle = viz.colors.teal + '25';
                                ctx.fillRect(sxL[0], syU[1], sxR[0] - sxL[0], syLo[1] - syU[1]);
                                ctx.strokeStyle = viz.colors.teal;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(sxL[0], syU[1], sxR[0] - sxL[0], syLo[1] - syU[1]);
                            }

                            viz.drawFunction(f, 0, 8, viz.colors.white, 2.5);

                            // Info
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Target: U - L < ' + epsilon.toFixed(2), 80, 10);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('Achieved with n = ' + n + ' subintervals', 80, 30);
                            ctx.fillText('Actual gap = ' + result.gap.toFixed(4), 80, 50);

                            var verdict = result.gap < epsilon ? 'INTEGRABLE (gap < epsilon)' : 'Need more subintervals';
                            ctx.fillStyle = result.gap < epsilon ? viz.colors.green : viz.colors.red;
                            ctx.fillText(verdict, 400, 10);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'integrable-vs-not',
                    title: 'Integrable vs. Non-Integrable',
                    description: 'Compare a smooth function (integrable) with a function inspired by Dirichlet (non-integrable).',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 720, height: 350, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var n = 10;

                        VizEngine.createSlider(controls, 'Subintervals', 2, 80, 10, 1, function(v) { n = Math.round(v); draw(); });

                        function draw() {
                            viz.clear();
                            var halfW = 340;

                            // LEFT: smooth function f(x) = sin(x) + 1 on [0, pi]
                            var aL = 0, bL = Math.PI;
                            var fSmooth = function(x) { return Math.sin(x) + 1; };

                            function drawPanel(startX, title, a, b, f, canIntegrate) {
                                var plotLeft = startX + 40;
                                var plotRight = startX + halfW - 20;
                                var plotTop = 50;
                                var plotBottom = 280;
                                var plotW = plotRight - plotLeft;
                                var plotH = plotBottom - plotTop;

                                ctx.fillStyle = viz.colors.white;
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'top';
                                ctx.fillText(title, startX + halfW / 2, 8);

                                // Axes
                                ctx.strokeStyle = viz.colors.axis;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(plotLeft, plotTop);
                                ctx.lineTo(plotLeft, plotBottom);
                                ctx.lineTo(plotRight, plotBottom);
                                ctx.stroke();

                                var dx = (b - a) / n;
                                var upperSum = 0, lowerSum = 0;

                                for (var i = 0; i < n; i++) {
                                    var xL = a + i * dx;
                                    var xR = xL + dx;
                                    var sup = -Infinity, inf = Infinity;
                                    for (var s = 0; s <= 30; s++) {
                                        var v = f(xL + (xR - xL) * s / 30);
                                        if (v > sup) sup = v;
                                        if (v < inf) inf = v;
                                    }
                                    upperSum += sup * dx;
                                    lowerSum += inf * dx;

                                    var sx1 = plotLeft + ((xL - a) / (b - a)) * plotW;
                                    var sx2 = plotLeft + ((xR - a) / (b - a)) * plotW;
                                    var syU = plotBottom - (sup / 2.5) * plotH;
                                    var syL = plotBottom - (inf / 2.5) * plotH;

                                    // Upper rect
                                    ctx.fillStyle = viz.colors.red + '25';
                                    ctx.fillRect(sx1, syU, sx2 - sx1, plotBottom - syU);
                                    ctx.strokeStyle = viz.colors.red;
                                    ctx.lineWidth = 0.8;
                                    ctx.strokeRect(sx1, syU, sx2 - sx1, plotBottom - syU);

                                    // Lower rect
                                    ctx.fillStyle = viz.colors.blue + '25';
                                    ctx.fillRect(sx1, syL, sx2 - sx1, plotBottom - syL);
                                    ctx.strokeStyle = viz.colors.blue;
                                    ctx.lineWidth = 0.8;
                                    ctx.strokeRect(sx1, syL, sx2 - sx1, plotBottom - syL);
                                }

                                // Draw function curve
                                ctx.strokeStyle = viz.colors.white;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i <= 200; i++) {
                                    var x = a + (b - a) * i / 200;
                                    var y = f(x);
                                    var sx = plotLeft + ((x - a) / (b - a)) * plotW;
                                    var sy = plotBottom - (y / 2.5) * plotH;
                                    if (i === 0) ctx.moveTo(sx, sy);
                                    else ctx.lineTo(sx, sy);
                                }
                                ctx.stroke();

                                // Stats
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillStyle = viz.colors.red;
                                ctx.fillText('U = ' + upperSum.toFixed(3), startX + 10, plotBottom + 10);
                                ctx.fillStyle = viz.colors.blue;
                                ctx.fillText('L = ' + lowerSum.toFixed(3), startX + 10, plotBottom + 25);
                                ctx.fillStyle = canIntegrate ? viz.colors.green : viz.colors.red;
                                ctx.fillText('Gap = ' + (upperSum - lowerSum).toFixed(3), startX + 10, plotBottom + 40);
                                ctx.fillText(canIntegrate ? 'Gap shrinks with n' : 'Gap always = ' + (b - a).toFixed(1), startX + 10, plotBottom + 55);
                            }

                            drawPanel(0, 'f(x) = sin(x) + 1  [integrable]', 0, Math.PI, fSmooth, true);

                            // RIGHT: Dirichlet-style (we simulate it)
                            var fDir = function(x) {
                                // Pseudo-Dirichlet: appears to have sup=1, inf=0 on every interval
                                return (Math.round(x * 1000) % 7 < 3) ? 1 : 0;
                            };
                            // Override: for Dirichlet, every interval has M=1, m=0
                            drawPanel(halfW + 10, 'Dirichlet function  [not integrable]', 0, 1, fDir, false);

                            // Divider
                            ctx.strokeStyle = viz.colors.grid;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(halfW + 5, 0);
                            ctx.lineTo(halfW + 5, viz.height);
                            ctx.stroke();
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that \\(f(x) = x^3\\) is Riemann integrable on \\([0, 2]\\) using the \\(\\varepsilon\\)-criterion.',
                    hint: '\\(f\\) is continuous on a closed interval, or alternatively it is monotone increasing on \\([0,2]\\).',
                    solution: '\\(f(x) = x^3\\) is continuous on \\([0,2]\\), hence Riemann integrable by Theorem 9.7. Alternatively, \\(f\\) is increasing, so Theorem 9.8 applies directly. With the uniform partition: \\(U - L = \\frac{2}{n}(f(2) - f(0)) = \\frac{16}{n} < \\varepsilon\\) for \\(n > 16/\\varepsilon\\).'
                },
                {
                    question: 'Let \\(f(x) = \\begin{cases} 1 & x = 1/2 \\\\ 0 & \\text{otherwise} \\end{cases}\\) on \\([0,1]\\). Is \\(f\\) Riemann integrable? If so, find \\(\\int_0^1 f\\).',
                    hint: 'Only one point has \\(f \\neq 0\\). Enclose it in a tiny subinterval.',
                    solution: 'Yes. Given \\(\\varepsilon > 0\\), take a partition that places \\(1/2\\) inside a subinterval of width \\(< \\varepsilon\\). On that subinterval, \\(M = 1, m = 0\\); on all others, \\(M = m = 0\\). So \\(U - L < \\varepsilon\\). The integral is \\(0\\), since \\(L(f,P) = 0\\) for every \\(P\\).'
                },
                {
                    question: 'Let \\(f\\) be bounded and have finitely many discontinuities on \\([a,b]\\). Show \\(f\\) is Riemann integrable.',
                    hint: 'Enclose each discontinuity in a subinterval of total width at most \\(\\varepsilon / (2M)\\), where \\(M\\) bounds \\(|f|\\). Use uniform continuity on the remaining intervals.',
                    solution: 'Let \\(|f| \\le M\\). Given \\(\\varepsilon > 0\\), enclose each of the \\(k\\) discontinuities in intervals of total length \\(< \\varepsilon/(4M)\\). On these intervals, the oscillation contributes at most \\(2M \\cdot \\varepsilon/(4M) = \\varepsilon/2\\). On the remaining (closed) intervals, \\(f\\) is uniformly continuous, so refine the partition so that the oscillation contribution there is also \\(< \\varepsilon/2\\). Total gap \\(< \\varepsilon\\).'
                },
                {
                    question: 'Give an example of a bounded function on \\([0,1]\\) that is Riemann integrable but discontinuous at infinitely many points.',
                    hint: 'Consider \\(f(x) = 0\\) if \\(x\\) is irrational, and \\(f(p/q) = 1/q\\) for \\(p/q\\) in lowest terms.',
                    solution: 'Thomae\'s function: \\(f(x) = 1/q\\) if \\(x = p/q\\) in lowest terms, \\(f(x) = 0\\) for irrational \\(x\\). It is discontinuous at every rational and continuous at every irrational. It is Riemann integrable with integral \\(0\\), because for any \\(\\varepsilon > 0\\), only finitely many rationals have \\(f(p/q) \\ge \\varepsilon\\).'
                },
                {
                    question: 'Suppose \\(f\\) and \\(g\\) are both Riemann integrable on \\([a,b]\\) and \\(f(x) = g(x)\\) for all but finitely many points. Show that \\(\\int_a^b f = \\int_a^b g\\).',
                    hint: 'Apply the result from the previous exercise to \\(f - g\\).',
                    solution: '\\(h = f - g\\) is zero except at finitely many points, so by the same argument as Exercise 2, \\(\\int_a^b h = 0\\). Linearity gives \\(\\int f = \\int g\\).'
                }
            ]
        },

        // ================================================================
        // SECTION 3: Properties of the Riemann Integral
        // ================================================================
        {
            id: 'ch09-sec03',
            title: 'Properties of the Riemann Integral',
            content: `
                <h2>Properties of the Riemann Integral</h2>

                <p>Once we know a function is integrable, we can manipulate its integral using a toolkit of properties that parallel the familiar rules of summation.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.10 — Linearity of the Integral</div>
                    <div class="env-body">
                        <p>If \\(f\\) and \\(g\\) are Riemann integrable on \\([a,b]\\) and \\(c \\in \\mathbb{R}\\), then:</p>
                        <ol>
                            <li>\\(\\displaystyle\\int_a^b [f(x) + g(x)]\\,dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx\\),</li>
                            <li>\\(\\displaystyle\\int_a^b c \\cdot f(x)\\,dx = c \\cdot \\int_a^b f(x)\\,dx\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.11 — Order Preservation</div>
                    <div class="env-body">
                        <p>If \\(f(x) \\le g(x)\\) for all \\(x \\in [a,b]\\), and both are integrable, then</p>
                        \\[
                            \\int_a^b f(x)\\,dx \\le \\int_a^b g(x)\\,dx.
                        \\]
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 9.12 — Triangle Inequality for Integrals</div>
                    <div class="env-body">
                        <p>If \\(f\\) is integrable on \\([a,b]\\), then \\(|f|\\) is also integrable, and</p>
                        \\[
                            \\left|\\int_a^b f(x)\\,dx\\right| \\le \\int_a^b |f(x)|\\,dx.
                        \\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.13 — Additivity over Intervals</div>
                    <div class="env-body">
                        <p>If \\(f\\) is integrable on \\([a,b]\\), and \\(a < c < b\\), then \\(f\\) is integrable on \\([a,c]\\) and on \\([c,b]\\), and</p>
                        \\[
                            \\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx.
                        \\]
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="interval-additivity"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.14 — Products of Integrable Functions</div>
                    <div class="env-body">
                        <p>If \\(f\\) and \\(g\\) are integrable on \\([a,b]\\), then \\(fg\\) is integrable on \\([a,b]\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Idea</div>
                    <div class="env-body">
                        <p>Use the identity \\(fg = \\frac{1}{4}[(f+g)^2 - (f-g)^2]\\) and the fact that \\(h^2\\) is integrable whenever \\(h\\) is integrable. The latter follows because the oscillation of \\(h^2\\) on an interval is bounded by \\(2M \\cdot \\omega(h)\\) where \\(M\\) bounds \\(|h|\\) and \\(\\omega(h)\\) is the oscillation of \\(h\\).</p>
                    </div>
                </div>

                <h3>The Mean Value Theorem for Integrals</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.15 — Mean Value Theorem for Integrals</div>
                    <div class="env-body">
                        <p>If \\(f\\) is continuous on \\([a,b]\\), then there exists \\(c \\in [a,b]\\) such that</p>
                        \\[
                            \\int_a^b f(x)\\,dx = f(c)\\cdot(b - a).
                        \\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By the Extreme Value Theorem, \\(f\\) attains its minimum \\(m\\) and maximum \\(M\\) on \\([a,b]\\). By order preservation, \\(m(b-a) \\le \\int_a^b f \\le M(b-a)\\), so \\(\\frac{1}{b-a}\\int_a^b f \\in [m, M]\\). By the Intermediate Value Theorem, \\(f(c) = \\frac{1}{b-a}\\int_a^b f\\) for some \\(c \\in [a,b]\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="mean-value-integral"></div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The average value of \\(f\\) on \\([a,b]\\) is \\(\\bar{f} = \\frac{1}{b-a}\\int_a^b f\\). The MVT says that a continuous function actually <em>attains</em> its average value somewhere in the interval. The integral equals the area of a rectangle with width \\(b - a\\) and height \\(f(c) = \\bar{f}\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'interval-additivity',
                    title: 'Additivity Over Intervals',
                    description: 'Drag the split point c to see how the integral over [a,b] decomposes into the sum of integrals over [a,c] and [c,b].',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 720, height: 370, scale: 55, originX: 60, originY: 310 });
                        var ctx = viz.ctx;
                        var f = function(x) { return 1 + Math.sin(x) + 0.3 * x; };
                        var a = 0.5, b = 9;

                        var cPoint = viz.addDraggable('c', 4.5, 0, viz.colors.teal, 10, function() {
                            cPoint.x = Math.max(a + 0.1, Math.min(b - 0.1, cPoint.x));
                            cPoint.y = 0;
                        });

                        function approxIntegral(fn, lo, hi) {
                            var sum = 0, steps = 200;
                            var dx = (hi - lo) / steps;
                            for (var i = 0; i < steps; i++) {
                                sum += fn(lo + (i + 0.5) * dx) * dx;
                            }
                            return sum;
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var c = cPoint.x;

                            // Shade [a, c]
                            viz.shadeBetween(f, function() { return 0; }, a, c, viz.colors.blue + '44');
                            // Shade [c, b]
                            viz.shadeBetween(f, function() { return 0; }, c, b, viz.colors.orange + '44');

                            // Draw c vertical line
                            var sc = viz.toScreen(c, 0);
                            var scTop = viz.toScreen(c, f(c));
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath();
                            ctx.moveTo(sc[0], sc[1]);
                            ctx.lineTo(scTop[0], scTop[1]);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            viz.drawFunction(f, 0, 10, viz.colors.white, 2.5);

                            var intAC = approxIntegral(f, a, c);
                            var intCB = approxIntegral(f, c, b);
                            var intAB = approxIntegral(f, a, b);

                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('integral [a,c] = ' + intAC.toFixed(3), 80, 10);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('integral [c,b] = ' + intCB.toFixed(3), 80, 28);
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('Sum = ' + (intAC + intCB).toFixed(3), 80, 46);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('integral [a,b] = ' + intAB.toFixed(3), 80, 64);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('c = ' + c.toFixed(2), 400, 10);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'mean-value-integral',
                    title: 'Mean Value Theorem for Integrals',
                    description: 'See how the average value f(c) creates a rectangle with the same area as the region under the curve.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 720, height: 380, scale: 55, originX: 60, originY: 320 });
                        var ctx = viz.ctx;
                        var funcChoice = 0;
                        var funcs = [
                            function(x) { return Math.sin(x) + 1.5; },
                            function(x) { return 0.1 * x * x + 0.5; },
                            function(x) { return 2 + Math.cos(x * 0.8) * Math.exp(-0.1 * x); }
                        ];
                        var funcNames = ['sin(x) + 1.5', '0.1x^2 + 0.5', '2 + cos(0.8x)e^{-0.1x}'];
                        var a = 0.5, b = 8;

                        VizEngine.createButton(controls, 'Next Function', function() { funcChoice = (funcChoice + 1) % funcs.length; });

                        function approxIntegral(fn, lo, hi) {
                            var sum = 0, steps = 500;
                            var dx = (hi - lo) / steps;
                            for (var i = 0; i < steps; i++) sum += fn(lo + (i + 0.5) * dx) * dx;
                            return sum;
                        }

                        function findC(fn, avg, lo, hi) {
                            // bisection to find c where f(c) = avg
                            for (var x = lo; x <= hi; x += 0.01) {
                                if (Math.abs(fn(x) - avg) < 0.02) return x;
                            }
                            return (lo + hi) / 2;
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();
                            var f = funcs[funcChoice];

                            // Shade area under curve
                            viz.shadeBetween(f, function() { return 0; }, a, b, viz.colors.purple + '33');
                            viz.drawFunction(f, 0, 9.5, viz.colors.white, 2.5);

                            var integral = approxIntegral(f, a, b);
                            var avg = integral / (b - a);
                            var c = findC(f, avg, a, b);

                            // Draw average value line
                            var sA = viz.toScreen(a, avg);
                            var sB = viz.toScreen(b, avg);
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            ctx.moveTo(sA[0], sA[1]);
                            ctx.lineTo(sB[0], sB[1]);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Draw the equivalent rectangle
                            var sA0 = viz.toScreen(a, 0);
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.strokeRect(sA[0], sA[1], sB[0] - sA[0], sA0[1] - sA[1]);

                            // Mark c
                            viz.drawPoint(c, f(c), viz.colors.orange, null, 7);
                            var sc = viz.toScreen(c, f(c));
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('c = ' + c.toFixed(2), sc[0], sc[1] - 12);

                            // Vertical line at c
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([3, 3]);
                            var sc0 = viz.toScreen(c, 0);
                            ctx.beginPath();
                            ctx.moveTo(sc0[0], sc0[1]);
                            ctx.lineTo(sc[0], sc[1]);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Info
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('f(x) = ' + funcNames[funcChoice], 80, 10);
                            ctx.fillStyle = viz.colors.purple;
                            ctx.fillText('Integral = ' + integral.toFixed(3), 80, 28);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('Average f = ' + avg.toFixed(3), 80, 46);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('f(c) = ' + f(c).toFixed(3) + '  (rectangle has same area)', 80, 64);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove the linearity property: if \\(f\\) and \\(g\\) are integrable on \\([a,b]\\), then \\(\\int_a^b (f+g) = \\int_a^b f + \\int_a^b g\\).',
                    hint: 'Show that \\(L(f,P) + L(g,P) \\le L(f+g, P)\\) and \\(U(f+g, P) \\le U(f,P) + U(g,P)\\).',
                    solution: 'On each subinterval, \\(\\inf f + \\inf g \\le \\inf(f+g)\\) and \\(\\sup(f+g) \\le \\sup f + \\sup g\\). So \\(L(f,P) + L(g,P) \\le L(f+g,P) \\le U(f+g,P) \\le U(f,P) + U(g,P)\\). Taking the appropriate inf/sup: \\(\\int f + \\int g \\le \\underline{\\int}(f+g) \\le \\overline{\\int}(f+g) \\le \\int f + \\int g\\). Equality throughout gives the result.'
                },
                {
                    question: 'Let \\(f(x) = |x|\\) on \\([-1, 1]\\). Compute \\(\\int_{-1}^1 |x|\\,dx\\) using additivity over intervals.',
                    hint: 'Split at \\(c = 0\\): on \\([-1,0]\\), \\(|x| = -x\\); on \\([0,1]\\), \\(|x| = x\\).',
                    solution: '\\(\\int_{-1}^1 |x|\\,dx = \\int_{-1}^0 (-x)\\,dx + \\int_0^1 x\\,dx = \\frac{1}{2} + \\frac{1}{2} = 1\\).'
                },
                {
                    question: 'Find the average value of \\(f(x) = x^2\\) on \\([0, 3]\\), and find a point \\(c \\in [0,3]\\) where \\(f(c)\\) equals this average.',
                    hint: 'Average value = \\(\\frac{1}{3-0}\\int_0^3 x^2\\,dx\\).',
                    solution: '\\(\\int_0^3 x^2\\,dx = 9\\). Average \\(= 9/3 = 3\\). We need \\(c^2 = 3\\), so \\(c = \\sqrt{3} \\approx 1.732\\).'
                },
                {
                    question: 'Show that if \\(f\\) is integrable and \\(f(x) \\ge 0\\) on \\([a,b]\\), then \\(\\int_a^b f \\ge 0\\).',
                    hint: 'Use order preservation with \\(g(x) = 0\\).',
                    solution: 'Since \\(f(x) \\ge 0 = g(x)\\) for all \\(x\\), order preservation gives \\(\\int_a^b f \\ge \\int_a^b 0 = 0\\).'
                },
                {
                    question: 'Prove the triangle inequality for integrals: \\(|\\int_a^b f| \\le \\int_a^b |f|\\).',
                    hint: 'Note \\(-|f(x)| \\le f(x) \\le |f(x)|\\) and integrate.',
                    solution: 'From \\(-|f| \\le f \\le |f|\\), integrating (using order preservation and linearity): \\(-\\int |f| \\le \\int f \\le \\int |f|\\). This is equivalent to \\(|\\int f| \\le \\int |f|\\).'
                }
            ]
        },

        // ================================================================
        // SECTION 4: The Fundamental Theorem of Calculus
        // ================================================================
        {
            id: 'ch09-sec04',
            title: 'The Fundamental Theorem of Calculus',
            content: `
                <h2>The Fundamental Theorem of Calculus</h2>

                <p>We now arrive at the crown jewel of single-variable analysis: the <strong>Fundamental Theorem of Calculus</strong> (FTC). It reveals the profound duality between differentiation and integration — two operations that seem worlds apart are, in fact, inverses of each other.</p>

                <h3>Part I: Differentiation Undoes Integration</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.16 — FTC Part I</div>
                    <div class="env-body">
                        <p>Let \\(f : [a,b] \\to \\mathbb{R}\\) be Riemann integrable. Define the <strong>accumulation function</strong></p>
                        \\[
                            F(x) = \\int_a^x f(t)\\,dt, \\quad x \\in [a,b].
                        \\]
                        <p>Then:</p>
                        <ol>
                            <li>\\(F\\) is <strong>continuous</strong> on \\([a,b]\\).</li>
                            <li>If \\(f\\) is <strong>continuous at \\(c \\in (a,b)\\)</strong>, then \\(F\\) is <strong>differentiable at \\(c\\)</strong> and \\(F'(c) = f(c)\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(1)</strong> Let \\(|f| \\le M\\). For \\(x, y \\in [a,b]\\):</p>
                        \\[
                            |F(x) - F(y)| = \\left|\\int_y^x f(t)\\,dt\\right| \\le M|x - y|,
                        \\]
                        <p>so \\(F\\) is Lipschitz (hence continuous).</p>
                        <p><strong>(2)</strong> Suppose \\(f\\) is continuous at \\(c\\). For \\(x \\neq c\\):</p>
                        \\[
                            \\frac{F(x) - F(c)}{x - c} = \\frac{1}{x-c}\\int_c^x f(t)\\,dt.
                        \\]
                        <p>By the MVT for integrals, this equals \\(f(\\xi)\\) for some \\(\\xi\\) between \\(c\\) and \\(x\\). As \\(x \\to c\\), \\(\\xi \\to c\\), and continuity of \\(f\\) at \\(c\\) gives \\(f(\\xi) \\to f(c)\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ftc-part1-accumulation"></div>

                <h3>Part II: Integration Undoes Differentiation</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.17 — FTC Part II (Newton-Leibniz Formula)</div>
                    <div class="env-body">
                        <p>If \\(f : [a,b] \\to \\mathbb{R}\\) is Riemann integrable and has an <strong>antiderivative</strong> \\(G\\) (i.e., \\(G'(x) = f(x)\\) for all \\(x \\in [a,b]\\)), then</p>
                        \\[
                            \\int_a^b f(x)\\,dx = G(b) - G(a).
                        \\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(P = \\{x_0, \\ldots, x_n\\}\\) be any partition of \\([a,b]\\). By the Mean Value Theorem (for derivatives), on each \\([x_{i-1}, x_i]\\) there exists \\(t_i\\) with</p>
                        \\[
                            G(x_i) - G(x_{i-1}) = G'(t_i)(x_i - x_{i-1}) = f(t_i)(x_i - x_{i-1}).
                        \\]
                        <p>Summing telescopically:</p>
                        \\[
                            G(b) - G(a) = \\sum_{i=1}^n f(t_i)(x_i - x_{i-1}).
                        \\]
                        <p>Since \\(m_i \\le f(t_i) \\le M_i\\), we get \\(L(f,P) \\le G(b) - G(a) \\le U(f,P)\\) for every partition \\(P\\). Since \\(f\\) is integrable, the only number trapped between all lower and upper sums is the integral. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ftc-part2-antideriv"></div>

                <div class="env-block warning">
                    <div class="env-title">Caution</div>
                    <div class="env-body">
                        <p>FTC Part II requires that \\(G'(x) = f(x)\\) <strong>everywhere</strong> on \\([a,b]\\) and that \\(f\\) is Riemann integrable. Not every integrable function has an antiderivative, and not every derivative is Riemann integrable (though every derivative that is bounded and Riemann integrable obeys the formula).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.18</div>
                    <div class="env-body">
                        <p>Compute \\(\\displaystyle\\int_0^{\\pi} \\sin x\\,dx\\).</p>
                        <p><strong>Solution:</strong> An antiderivative of \\(\\sin x\\) is \\(G(x) = -\\cos x\\). By FTC II:</p>
                        \\[
                            \\int_0^{\\pi} \\sin x\\,dx = G(\\pi) - G(0) = -\\cos(\\pi) - (-\\cos(0)) = 1 + 1 = 2.
                        \\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.19 — Differentiating an Integral with Variable Limits</div>
                    <div class="env-body">
                        <p>Find \\(\\frac{d}{dx}\\int_0^{x^2} e^{-t^2}\\,dt\\).</p>
                        <p><strong>Solution:</strong> Let \\(F(u) = \\int_0^u e^{-t^2}\\,dt\\). By FTC I, \\(F'(u) = e^{-u^2}\\). By the chain rule with \\(u = x^2\\):</p>
                        \\[
                            \\frac{d}{dx} F(x^2) = F'(x^2) \\cdot 2x = e^{-x^4} \\cdot 2x = 2x\\,e^{-x^4}.
                        \\]
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'ftc-part1-accumulation',
                    title: 'FTC Part I: The Accumulation Function',
                    description: 'Drag x to see how F(x) = integral from a to x of f(t) dt grows. The slope of F at each point equals f(x).',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 720, height: 420, scale: 50, originX: 60, originY: 200 });
                        var ctx = viz.ctx;
                        var f = function(t) { return Math.sin(t) + 0.5 * Math.cos(2 * t) + 1; };
                        var a = 0;

                        var xPt = viz.addDraggable('x', 4, 0, viz.colors.orange, 10, function() {
                            xPt.x = Math.max(a, Math.min(10, xPt.x));
                            xPt.y = 0;
                        });

                        function computeF(x) {
                            var sum = 0, steps = 300;
                            var dx = (x - a) / steps;
                            for (var i = 0; i < steps; i++) sum += f(a + (i + 0.5) * dx) * dx;
                            return sum;
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var x = xPt.x;

                            // Shade area under f from a to x
                            if (x > a) {
                                viz.shadeBetween(f, function() { return 0; }, a, x, viz.colors.blue + '33');
                            }

                            // Draw f(t) on top half
                            viz.drawFunction(f, -0.5, 11, viz.colors.blue, 2);

                            // Compute F(x) curve
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 0; i <= 200; i++) {
                                var xi = a + (10 - a) * i / 200;
                                var Fval = computeF(xi);
                                var sp = viz.toScreen(xi, Fval);
                                if (!started) { ctx.moveTo(sp[0], sp[1]); started = true; }
                                else ctx.lineTo(sp[0], sp[1]);
                            }
                            ctx.stroke();

                            // Mark current x
                            var Fx = computeF(x);
                            var fx = f(x);
                            viz.drawPoint(x, Fx, viz.colors.green, null, 7);
                            viz.drawPoint(x, fx, viz.colors.blue, null, 5);

                            // Draw tangent line to F at x (slope = f(x))
                            var tangLen = 1.5;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([5, 3]);
                            var s1 = viz.toScreen(x - tangLen, Fx - fx * tangLen);
                            var s2 = viz.toScreen(x + tangLen, Fx + fx * tangLen);
                            ctx.beginPath();
                            ctx.moveTo(s1[0], s1[1]);
                            ctx.lineTo(s2[0], s2[1]);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Labels
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('f(t)  [the integrand]', 400, 10);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('F(x) = integral_0^x f(t) dt', 400, 28);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('Tangent to F (slope = f(x))', 400, 46);

                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('x = ' + x.toFixed(2), 400, 72);
                            ctx.fillText('f(x) = ' + fx.toFixed(3), 400, 90);
                            ctx.fillText('F(x) = ' + Fx.toFixed(3), 400, 108);
                            ctx.fillText("F'(x) = f(x) = " + fx.toFixed(3), 400, 126);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'ftc-part2-antideriv',
                    title: 'FTC Part II: Evaluating Integrals via Antiderivatives',
                    description: 'Choose a function and see how the integral equals G(b) - G(a), the net change in the antiderivative.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 720, height: 400, scale: 50, originX: 60, originY: 340 });
                        var ctx = viz.ctx;
                        var choice = 0;
                        var funcs = [
                            { f: function(x) { return x; }, G: function(x) { return x * x / 2; }, fname: 'x', Gname: 'x^2/2' },
                            { f: function(x) { return Math.sin(x); }, G: function(x) { return -Math.cos(x); }, fname: 'sin(x)', Gname: '-cos(x)' },
                            { f: function(x) { return 3 * x * x; }, G: function(x) { return x * x * x; }, fname: '3x^2', Gname: 'x^3' }
                        ];

                        var aVal = 0, bVal = Math.PI;

                        VizEngine.createButton(controls, 'Next Function', function() { choice = (choice + 1) % funcs.length; });
                        VizEngine.createSlider(controls, 'a', -1, 6, 0, 0.1, function(v) { aVal = v; });
                        VizEngine.createSlider(controls, 'b', 0, 7, Math.PI, 0.1, function(v) { bVal = v; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();
                            var fc = funcs[choice];
                            var aa = Math.min(aVal, bVal);
                            var bb = Math.max(aVal, bVal);

                            // Shade area under f
                            if (bb > aa) {
                                viz.shadeBetween(fc.f, function() { return 0; }, aa, bb, viz.colors.purple + '33');
                            }

                            // Draw f
                            viz.drawFunction(fc.f, -1.5, 8, viz.colors.blue, 2.5);

                            // Draw G
                            viz.drawFunction(fc.G, -1.5, 8, viz.colors.green, 2, 300);

                            // Mark G(a) and G(b)
                            var Ga = fc.G(aa);
                            var Gb = fc.G(bb);
                            viz.drawPoint(aa, Ga, viz.colors.green, null, 6);
                            viz.drawPoint(bb, Gb, viz.colors.green, null, 6);

                            // Labels for G(a) and G(b)
                            var sGa = viz.toScreen(aa, Ga);
                            var sGb = viz.toScreen(bb, Gb);
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('G(a)=' + Ga.toFixed(2), sGa[0], sGa[1] - 10);
                            ctx.fillText('G(b)=' + Gb.toFixed(2), sGb[0], sGb[1] - 10);

                            // Net change arrow
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath();
                            ctx.moveTo(viz.width - 50, sGa[1]);
                            ctx.lineTo(viz.width - 50, sGb[1]);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('G(b)-G(a)', viz.width - 48, (sGa[1] + sGb[1]) / 2);

                            // Info
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('f(x) = ' + fc.fname, 80, 8);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('G(x) = ' + fc.Gname + "  (antiderivative, G' = f)", 80, 26);
                            ctx.fillStyle = viz.colors.purple;
                            var integral = Gb - Ga;
                            ctx.fillText('Integral = G(b) - G(a) = ' + Gb.toFixed(3) + ' - ' + Ga.toFixed(3) + ' = ' + integral.toFixed(3), 80, 44);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(F(x) = \\int_1^x \\frac{1}{t}\\,dt\\). Where is \\(F\\) defined? Show \\(F\'(x) = 1/x\\) for \\(x > 0\\).',
                    hint: 'Apply FTC Part I directly. The function \\(1/t\\) is continuous on \\((0, \\infty)\\).',
                    solution: '\\(F\\) is defined for \\(x > 0\\) (since \\(1/t\\) is continuous on any \\([1,x]\\) or \\([x,1]\\) with \\(x > 0\\)). By FTC I, since \\(1/t\\) is continuous at every \\(x > 0\\), we get \\(F\'(x) = 1/x\\). (This is, of course, the natural logarithm: \\(F(x) = \\ln x\\).)'
                },
                {
                    question: 'Compute \\(\\int_0^2 (3x^2 + 2x)\\,dx\\) using FTC Part II.',
                    hint: 'Find an antiderivative: \\(G(x) = x^3 + x^2\\).',
                    solution: '\\(G(x) = x^3 + x^2\\) satisfies \\(G\'(x) = 3x^2 + 2x\\). So \\(\\int_0^2 (3x^2 + 2x)\\,dx = G(2) - G(0) = (8 + 4) - 0 = 12\\).'
                },
                {
                    question: 'Find \\(\\frac{d}{dx} \\int_x^{x^3} \\sin(t^2)\\,dt\\).',
                    hint: 'Write this as \\(\\int_0^{x^3} \\sin(t^2)\\,dt - \\int_0^x \\sin(t^2)\\,dt\\) and differentiate each using chain rule + FTC I.',
                    solution: 'Let \\(F(u) = \\int_0^u \\sin(t^2)\\,dt\\). Then the expression is \\(F(x^3) - F(x)\\). Differentiating: \\(F\'(x^3) \\cdot 3x^2 - F\'(x) = \\sin(x^6) \\cdot 3x^2 - \\sin(x^2)\\).'
                },
                {
                    question: 'If \\(f\\) is continuous and \\(\\int_a^x f(t)\\,dt = 0\\) for all \\(x \\in [a,b]\\), prove that \\(f(x) = 0\\) for all \\(x \\in [a,b]\\).',
                    hint: 'Differentiate using FTC I to get \\(f(x) = 0\\) at every point.',
                    solution: 'By FTC Part I, \\(F(x) = \\int_a^x f(t)\\,dt\\) is differentiable with \\(F\'(x) = f(x)\\). But \\(F(x) = 0\\) for all \\(x\\), so \\(F\'(x) = 0\\) for all \\(x\\), hence \\(f(x) = 0\\).'
                },
                {
                    question: 'Prove that there is no differentiable function \\(G\\) on \\([0,1]\\) with \\(G\'(x) = D(x)\\) (Dirichlet\'s function). What does this say about FTC II?',
                    hint: 'Darboux\'s theorem says that every derivative has the intermediate value property. Does \\(D\\) have the IVP?',
                    solution: 'Dirichlet\'s function takes values 0 and 1 but never anything in between, violating the intermediate value property. By Darboux\'s theorem, every derivative must satisfy the IVP. Therefore no differentiable function has \\(D\\) as its derivative. This shows FTC II cannot be applied to \\(D\\) — it is not integrable <em>and</em> has no antiderivative.'
                }
            ]
        },

        // ================================================================
        // SECTION 5: Improper Integrals
        // ================================================================
        {
            id: 'ch09-sec05',
            title: 'Improper Integrals',
            content: `
                <h2>Improper Integrals</h2>

                <p>The Riemann integral as defined requires a <strong>bounded</strong> function on a <strong>bounded interval</strong>. But many natural integrals violate one or both conditions. We handle these by taking limits.</p>

                <h3>Type I: Infinite Intervals</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.20 — Improper Integral (Infinite Interval)</div>
                    <div class="env-body">
                        <p>If \\(f\\) is integrable on \\([a, R]\\) for every \\(R > a\\), we define</p>
                        \\[
                            \\int_a^\\infty f(x)\\,dx = \\lim_{R \\to \\infty} \\int_a^R f(x)\\,dx,
                        \\]
                        <p>provided the limit exists (in which case the integral <strong>converges</strong>). Similarly for \\(\\int_{-\\infty}^b\\) and \\(\\int_{-\\infty}^{\\infty}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.21 — The \\(p\\)-Integral</div>
                    <div class="env-body">
                        <p>For \\(p > 0\\):</p>
                        \\[
                            \\int_1^\\infty \\frac{1}{x^p}\\,dx = \\begin{cases} \\dfrac{1}{p-1} & \\text{if } p > 1 \\\\ +\\infty & \\text{if } p \\le 1 \\end{cases}
                        \\]
                        <p><strong>Proof (\\(p \\ne 1\\)):</strong> An antiderivative of \\(x^{-p}\\) is \\(\\frac{x^{1-p}}{1-p}\\). So \\(\\int_1^R x^{-p}\\,dx = \\frac{R^{1-p} - 1}{1-p}\\). As \\(R \\to \\infty\\): if \\(p > 1\\), \\(R^{1-p} \\to 0\\), giving \\(\\frac{1}{p-1}\\). If \\(p < 1\\), \\(R^{1-p} \\to \\infty\\).</p>
                        <p><strong>Case \\(p = 1\\):</strong> \\(\\int_1^R \\frac{1}{x}\\,dx = \\ln R \\to \\infty\\). Diverges.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="p-integral-explorer"></div>

                <h3>Type II: Unbounded Functions</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.22 — Improper Integral (Unbounded Function)</div>
                    <div class="env-body">
                        <p>If \\(f\\) is integrable on \\([a+\\varepsilon, b]\\) for every \\(\\varepsilon > 0\\) but \\(f\\) is unbounded near \\(a\\), we define</p>
                        \\[
                            \\int_a^b f(x)\\,dx = \\lim_{\\varepsilon \\to 0^+} \\int_{a+\\varepsilon}^b f(x)\\,dx.
                        \\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.23</div>
                    <div class="env-body">
                        <p>\\(\\displaystyle\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx = \\lim_{\\varepsilon \\to 0^+} \\int_\\varepsilon^1 x^{-1/2}\\,dx = \\lim_{\\varepsilon \\to 0^+} [2\\sqrt{x}]_\\varepsilon^1 = \\lim_{\\varepsilon \\to 0^+} (2 - 2\\sqrt{\\varepsilon}) = 2.\\)</p>
                        <p>Converges, even though \\(f(x) \\to \\infty\\) as \\(x \\to 0^+\\)!</p>
                    </div>
                </div>

                <h3>Comparison Tests</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.24 — Comparison Test for Improper Integrals</div>
                    <div class="env-body">
                        <p>Suppose \\(0 \\le f(x) \\le g(x)\\) for all \\(x \\ge a\\).</p>
                        <ol>
                            <li>If \\(\\int_a^\\infty g\\) converges, then \\(\\int_a^\\infty f\\) converges (and \\(\\int_a^\\infty f \\le \\int_a^\\infty g\\)).</li>
                            <li>If \\(\\int_a^\\infty f\\) diverges, then \\(\\int_a^\\infty g\\) diverges.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.25 — Limit Comparison Test</div>
                    <div class="env-body">
                        <p>Suppose \\(f(x), g(x) > 0\\) for \\(x \\ge a\\) and \\(\\displaystyle\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = L\\), where \\(0 < L < \\infty\\). Then \\(\\int_a^\\infty f\\) converges if and only if \\(\\int_a^\\infty g\\) converges.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="comparison-test-viz"></div>

                <div class="env-block example">
                    <div class="env-title">Example 9.26 — Gaussian Integral</div>
                    <div class="env-body">
                        <p>The integral \\(\\displaystyle\\int_0^\\infty e^{-x^2}\\,dx\\) converges because for \\(x \\ge 1\\), \\(e^{-x^2} \\le e^{-x}\\), and \\(\\int_1^\\infty e^{-x}\\,dx = 1/e < \\infty\\). (The exact value is \\(\\sqrt{\\pi}/2\\), proved using multivariable techniques.)</p>
                    </div>
                </div>

                <h3>Absolute vs. Conditional Convergence</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.27</div>
                    <div class="env-body">
                        <p>An improper integral \\(\\int_a^\\infty f\\) <strong>converges absolutely</strong> if \\(\\int_a^\\infty |f|\\) converges. If \\(\\int_a^\\infty f\\) converges but \\(\\int_a^\\infty |f|\\) diverges, we say it <strong>converges conditionally</strong>.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.28</div>
                    <div class="env-body">
                        <p>\\(\\displaystyle\\int_1^\\infty \\frac{\\sin x}{x^2}\\,dx\\) converges absolutely (compare with \\(1/x^2\\)).</p>
                        <p>\\(\\displaystyle\\int_0^\\infty \\frac{\\sin x}{x}\\,dx\\) converges conditionally to \\(\\pi/2\\) (the Dirichlet integral).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'p-integral-explorer',
                    title: 'The p-Integral: Convergence Threshold at p = 1',
                    description: 'Vary p to see when the integral of 1/x^p from 1 to R converges or diverges.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 720, height: 400, scale: 50, originX: 60, originY: 340 });
                        var ctx = viz.ctx;
                        var p = 1.5;
                        var R = 8;

                        VizEngine.createSlider(controls, 'p', 0.2, 3, 1.5, 0.05, function(v) { p = v; });
                        VizEngine.createSlider(controls, 'Upper limit R', 2, 20, 8, 0.5, function(v) { R = v; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();
                            var f = function(x) { return Math.pow(x, -p); };

                            // Shade area
                            viz.shadeBetween(f, function() { return 0; }, 1, Math.min(R, 12), p > 1 ? viz.colors.green + '33' : viz.colors.red + '33');

                            viz.drawFunction(f, 0.05, 13, viz.colors.white, 2.5, 500);

                            // Compute integral value
                            var integralVal;
                            var limitVal;
                            if (Math.abs(p - 1) < 0.02) {
                                integralVal = Math.log(R);
                                limitVal = Infinity;
                            } else {
                                integralVal = (Math.pow(R, 1 - p) - 1) / (1 - p);
                                limitVal = p > 1 ? 1 / (p - 1) : Infinity;
                            }

                            // Info
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('f(x) = 1/x^' + p.toFixed(2), 200, 10);
                            ctx.fillStyle = p > 1.02 ? viz.colors.green : viz.colors.red;
                            ctx.fillText('integral from 1 to ' + R.toFixed(1) + ' = ' + integralVal.toFixed(4), 200, 30);
                            if (limitVal === Infinity) {
                                ctx.fillStyle = viz.colors.red;
                                ctx.fillText('Limit as R -> inf: DIVERGES', 200, 50);
                            } else {
                                ctx.fillStyle = viz.colors.green;
                                ctx.fillText('Limit as R -> inf: ' + limitVal.toFixed(4) + '  (CONVERGES)', 200, 50);
                            }

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('Threshold: p = 1 (converges iff p > 1)', 200, 70);

                            // Mark x=1
                            var s1 = viz.toScreen(1, 0);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.beginPath();
                            ctx.arc(s1[0], s1[1], 4, 0, Math.PI * 2);
                            ctx.fill();

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'comparison-test-viz',
                    title: 'Comparison Test: Squeezing Convergence',
                    description: 'Compare an unknown integral with a known convergent/divergent one to determine behavior.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 720, height: 380, scale: 50, originX: 60, originY: 320 });
                        var ctx = viz.ctx;

                        var exChoice = 0;
                        var examples = [
                            {
                                f: function(x) { return Math.exp(-x * x); },
                                g: function(x) { return Math.exp(-x); },
                                fname: 'e^{-x^2}',
                                gname: 'e^{-x}',
                                fconverges: true,
                                desc: 'f <= g for x >= 1, and g converges'
                            },
                            {
                                f: function(x) { return 1 / (x * Math.log(x + 1)); },
                                g: function(x) { return 1 / x; },
                                fname: '1/(x ln(x+1))',
                                gname: '1/x',
                                fconverges: false,
                                desc: 'f ~ 1/(x ln x) >= C/x for large x, and 1/x diverges'
                            },
                            {
                                f: function(x) { return Math.abs(Math.sin(x)) / (x * x); },
                                g: function(x) { return 1 / (x * x); },
                                fname: '|sin x|/x^2',
                                gname: '1/x^2',
                                fconverges: true,
                                desc: '|sin x|/x^2 <= 1/x^2, and 1/x^2 converges'
                            }
                        ];

                        VizEngine.createButton(controls, 'Next Example', function() { exChoice = (exChoice + 1) % examples.length; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var ex = examples[exChoice];

                            // Shade under g
                            viz.shadeBetween(ex.g, function() { return 0; }, 1, 11, viz.colors.red + '22');
                            // Shade under f
                            viz.shadeBetween(ex.f, function() { return 0; }, 1, 11, viz.colors.blue + '33');

                            viz.drawFunction(ex.g, 0.1, 12, viz.colors.red, 2);
                            viz.drawFunction(ex.f, 0.1, 12, viz.colors.blue, 2.5);

                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('f(x) = ' + ex.fname, 250, 10);
                            ctx.fillStyle = viz.colors.red;
                            ctx.fillText('g(x) = ' + ex.gname + '  (comparison)', 250, 28);
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText(ex.desc, 250, 46);
                            ctx.fillStyle = ex.fconverges ? viz.colors.green : viz.colors.red;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.fillText('integral of f: ' + (ex.fconverges ? 'CONVERGES' : 'DIVERGES'), 250, 64);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Determine whether \\(\\int_1^\\infty \\frac{1}{x^{3/2}}\\,dx\\) converges or diverges. If it converges, find its value.',
                    hint: 'This is a \\(p\\)-integral with \\(p = 3/2 > 1\\).',
                    solution: 'Converges. \\(\\int_1^R x^{-3/2}\\,dx = [-2x^{-1/2}]_1^R = -2R^{-1/2} + 2\\). As \\(R \\to \\infty\\), this tends to \\(2\\). So \\(\\int_1^\\infty x^{-3/2}\\,dx = 2\\).'
                },
                {
                    question: 'Show that \\(\\int_0^1 \\frac{1}{x^p}\\,dx\\) converges if and only if \\(p < 1\\).',
                    hint: 'This is a Type II improper integral at \\(x = 0\\). Compute \\(\\int_\\varepsilon^1 x^{-p}\\,dx\\).',
                    solution: 'For \\(p \\ne 1\\): \\(\\int_\\varepsilon^1 x^{-p}\\,dx = [\\frac{x^{1-p}}{1-p}]_\\varepsilon^1 = \\frac{1 - \\varepsilon^{1-p}}{1-p}\\). If \\(p < 1\\), \\(\\varepsilon^{1-p} \\to 0\\), giving \\(\\frac{1}{1-p}\\). If \\(p > 1\\), \\(\\varepsilon^{1-p} \\to \\infty\\), diverges. For \\(p = 1\\): \\(\\int_\\varepsilon^1 1/x\\,dx = -\\ln\\varepsilon \\to \\infty\\). Diverges.'
                },
                {
                    question: 'Use the comparison test to show \\(\\int_1^\\infty \\frac{\\arctan x}{x^2}\\,dx\\) converges.',
                    hint: '\\(0 \\le \\arctan x \\le \\pi/2\\) for all \\(x\\).',
                    solution: 'Since \\(0 \\le \\frac{\\arctan x}{x^2} \\le \\frac{\\pi/2}{x^2}\\) and \\(\\int_1^\\infty \\frac{\\pi/2}{x^2}\\,dx = \\pi/2 < \\infty\\), the comparison test gives convergence.'
                },
                {
                    question: 'Evaluate \\(\\int_0^\\infty x e^{-x}\\,dx\\) (this is \\(\\Gamma(2)\\)).',
                    hint: 'Integrate by parts: \\(u = x\\), \\(dv = e^{-x}\\,dx\\).',
                    solution: 'Integration by parts: \\(\\int_0^R xe^{-x}\\,dx = [-xe^{-x}]_0^R + \\int_0^R e^{-x}\\,dx = -Re^{-R} + [-e^{-x}]_0^R = -Re^{-R} - e^{-R} + 1\\). As \\(R \\to \\infty\\): \\(Re^{-R} \\to 0\\) and \\(e^{-R} \\to 0\\), so the integral is \\(1\\). (Equivalently, \\(\\Gamma(2) = 1! = 1\\).)'
                },
                {
                    question: 'Does \\(\\int_2^\\infty \\frac{1}{x \\ln x}\\,dx\\) converge or diverge?',
                    hint: 'Find an antiderivative using the substitution \\(u = \\ln x\\).',
                    solution: 'Substitution: \\(u = \\ln x\\), \\(du = dx/x\\). So \\(\\int_2^R \\frac{dx}{x\\ln x} = \\int_{\\ln 2}^{\\ln R} \\frac{du}{u} = \\ln(\\ln R) - \\ln(\\ln 2)\\). As \\(R \\to \\infty\\), \\(\\ln(\\ln R) \\to \\infty\\). Diverges.'
                },
                {
                    question: 'Give an example of a function \\(f\\) with \\(\\int_0^\\infty f(x)\\,dx\\) converging but \\(f(x) \\not\\to 0\\) as \\(x \\to \\infty\\).',
                    hint: 'Consider a function with thin, tall spikes at each integer.',
                    solution: 'Define \\(f(x) = n\\) on \\([n, n + 1/n^3]\\) and \\(f(x) = 0\\) otherwise. Then \\(\\int_0^\\infty f = \\sum_{n=1}^\\infty n \\cdot 1/n^3 = \\sum 1/n^2 < \\infty\\). But \\(f(n) = n \\to \\infty\\). The function has arbitrarily tall spikes but they become so narrow that the total area is finite.'
                }
            ]
        }
    ]
});
