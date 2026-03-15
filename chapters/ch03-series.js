window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch03',
    number: 3,
    title: 'Series',
    subtitle: 'From partial sums to convergence tests — taming the infinite through accumulation',
    sections: [
        // ============================================================
        // SECTION 1: Series as Partial Sums
        // ============================================================
        {
            id: 'ch03-sec01',
            title: 'Series as Partial Sums',
            content: `
                <div class="env-block bridge">
                    <div class="env-title">Bridge from Chapter 2</div>
                    <div class="env-body">
                        <p>We have mastered convergence of sequences. A series \\(\\sum a_n\\) is nothing but a sequence of partial sums \\(S_N = a_1 + a_2 + \\cdots + a_N\\). So everything we learned about sequence convergence applies directly. The new challenge is developing practical tests for when these partial sums converge, since computing them explicitly is rarely feasible.</p>
                    </div>
                </div>

                <h2>Series as Partial Sums</h2>

                <p class="section-roadmap"><strong>Roadmap.</strong> We begin by defining series through partial sums, establishing the geometric and telescoping series as our first concrete examples. We then prove the divergence test, a necessary (but not sufficient) condition for convergence, which will motivate the more powerful tests in subsequent sections.</p>

                <p>A <strong>series</strong> is what happens when you try to add up infinitely many numbers. But what does that even mean? We cannot literally perform infinitely many additions, so we need a rigorous definition.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition (Infinite Series)</div>
                    <div class="env-body">
                        <p>Given a sequence \\((a_n)_{n=1}^\\infty\\), the <strong>infinite series</strong> \\(\\displaystyle\\sum_{n=1}^\\infty a_n\\) is defined through its <strong>partial sums</strong>:</p>
                        <p>\\[S_N = \\sum_{n=1}^{N} a_n = a_1 + a_2 + \\cdots + a_N.\\]</p>
                        <p>If the sequence \\((S_N)\\) converges to a limit \\(S\\), we say the series <strong>converges</strong> and write \\(\\sum_{n=1}^\\infty a_n = S\\). Otherwise, the series <strong>diverges</strong>.</p>
                    </div>
                </div>

                <p>The key insight: a series is really a <strong>sequence in disguise</strong> — the sequence of partial sums. Everything we learned about sequence convergence applies directly.</p>

                <div class="viz-placeholder" data-viz="partial-sum-staircase"></div>

                <div class="env-block example">
                    <div class="env-title">Example: The Geometric Series</div>
                    <div class="env-body">
                        <p>Consider \\(\\sum_{n=0}^\\infty r^n = 1 + r + r^2 + r^3 + \\cdots\\) for \\(|r| < 1\\).</p>
                        <p>The partial sum is \\(S_N = \\frac{1 - r^{N+1}}{1 - r}\\). As \\(N \\to \\infty\\), \\(r^{N+1} \\to 0\\), so:</p>
                        <p>\\[\\sum_{n=0}^\\infty r^n = \\frac{1}{1-r}.\\]</p>
                        <p>For example, \\(\\sum_{n=0}^\\infty \\left(\\frac{1}{2}\\right)^n = \\frac{1}{1-1/2} = 2\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Telescoping Series)</div>
                    <div class="env-body">
                        <p>If \\(a_n = b_n - b_{n+1}\\), then \\(\\sum_{n=1}^N a_n = b_1 - b_{N+1}\\). The series converges if and only if \\(\\lim_{n\\to\\infty} b_n\\) exists, and in that case \\(\\sum_{n=1}^\\infty a_n = b_1 - \\lim_{n\\to\\infty} b_n\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example: A Telescoping Series</div>
                    <div class="env-body">
                        <p>\\(\\displaystyle\\sum_{n=1}^\\infty \\frac{1}{n(n+1)} = \\sum_{n=1}^\\infty \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right) = 1 - \\lim_{n\\to\\infty}\\frac{1}{n+1} = 1.\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="geometric-series-fill"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Divergence Test)</div>
                    <div class="env-body">
                        <p>If \\(\\sum_{n=1}^\\infty a_n\\) converges, then \\(\\lim_{n\\to\\infty} a_n = 0\\).</p>
                        <p><em>Contrapositive:</em> If \\(a_n \\not\\to 0\\), then \\(\\sum a_n\\) diverges.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Caution</div>
                    <div class="env-body">
                        <p>The converse is <strong>false</strong>: \\(a_n \\to 0\\) does NOT imply convergence. The harmonic series \\(\\sum 1/n\\) diverges even though \\(1/n \\to 0\\). The divergence test can only detect divergence, never convergence.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Linearity of Series</div>
                    <div class="env-body">
                        <p>If \\(\\sum a_n\\) and \\(\\sum b_n\\) converge, then \\(\\sum (\\alpha a_n + \\beta b_n) = \\alpha \\sum a_n + \\beta \\sum b_n\\) for any constants \\(\\alpha, \\beta\\). However, if both diverge, the combination might converge (e.g., \\(a_n = 1/n\\), \\(b_n = -1/n\\)).</p>
                    </div>
                </div>

                <p class="section-connection"><strong>Looking ahead.</strong> The divergence test only detects divergence; it can never confirm convergence. We need more refined tools. In the next section, we develop the <em>comparison</em> and <em>integral</em> tests, which work by bounding our series against something we already understand.</p>
            `,
            visualizations: [
                {
                    id: 'partial-sum-staircase',
                    title: 'Partial Sum Staircase',
                    description: 'Watch how partial sums accumulate term by term, forming a staircase that may or may not converge.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 40, originX: 60, originY: 340 });
                        var seriesType = 'geometric';
                        var maxN = 20;

                        VizEngine.createButton(controls, '1/2^n (converges)', function() { seriesType = 'geometric'; });
                        VizEngine.createButton(controls, '1/n (diverges)', function() { seriesType = 'harmonic'; });
                        VizEngine.createButton(controls, '1/n^2 (converges)', function() { seriesType = 'pseries'; });
                        VizEngine.createButton(controls, '1/n(n+1) (telescope)', function() { seriesType = 'telescope'; });
                        var sl = VizEngine.createSlider(controls, 'Terms N', 3, 50, 20, 1, function(v) { maxN = Math.round(v); });

                        function getTerm(n) {
                            if (seriesType === 'geometric') return Math.pow(0.5, n);
                            if (seriesType === 'harmonic') return 1 / n;
                            if (seriesType === 'pseries') return 1 / (n * n);
                            if (seriesType === 'telescope') return 1 / (n * (n + 1));
                            return 0;
                        }

                        function getLimit() {
                            if (seriesType === 'geometric') return 1; // sum from n=1
                            if (seriesType === 'harmonic') return null;
                            if (seriesType === 'pseries') return Math.PI * Math.PI / 6;
                            if (seriesType === 'telescope') return 1;
                            return null;
                        }

                        function getLabel() {
                            if (seriesType === 'geometric') return 'Sum 1/2^n';
                            if (seriesType === 'harmonic') return 'Sum 1/n';
                            if (seriesType === 'pseries') return 'Sum 1/n^2';
                            if (seriesType === 'telescope') return 'Sum 1/n(n+1)';
                            return '';
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Compute partial sums
                            var sums = [0];
                            for (var n = 1; n <= maxN; n++) {
                                sums.push(sums[n - 1] + getTerm(n));
                            }
                            var maxS = Math.max.apply(null, sums);

                            // Dynamic scale
                            var yScale = maxS > 0 ? (280 / maxS) : 40;
                            var xScale = (600 / maxN);

                            // Draw limit line if convergent
                            var lim = getLimit();
                            if (lim !== null) {
                                var limY = 340 - lim * yScale;
                                ctx.strokeStyle = viz.colors.teal;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([6, 4]);
                                ctx.beginPath();
                                ctx.moveTo(60, limY);
                                ctx.lineTo(680, limY);
                                ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.fillStyle = viz.colors.teal;
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.textAlign = 'right';
                                ctx.textBaseline = 'bottom';
                                ctx.fillText('L = ' + lim.toFixed(4), 678, limY - 4);
                            }

                            // Draw staircase
                            for (var i = 0; i < maxN; i++) {
                                var x1 = 60 + i * xScale;
                                var x2 = 60 + (i + 1) * xScale;
                                var y1 = 340 - sums[i] * yScale;
                                var y2 = 340 - sums[i + 1] * yScale;

                                // Vertical rise (the term added)
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.moveTo(x2, y1);
                                ctx.lineTo(x2, y2);
                                ctx.stroke();

                                // Horizontal tread
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.moveTo(x1, y1);
                                ctx.lineTo(x2, y1);
                                ctx.stroke();

                                // Dot at S_n
                                ctx.fillStyle = viz.colors.white;
                                ctx.beginPath();
                                ctx.arc(x2, y2, 3, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Axes labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var k = 0; k <= maxN; k += Math.max(1, Math.floor(maxN / 10))) {
                                ctx.fillText(k, 60 + k * xScale, 345);
                            }
                            ctx.fillText('n', 680, 345);

                            // Y-axis ticks
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                            var yStep = maxS > 3 ? 1 : (maxS > 1 ? 0.5 : 0.25);
                            for (var yy = 0; yy <= maxS + yStep; yy += yStep) {
                                var sy = 340 - yy * yScale;
                                if (sy < 10) break;
                                ctx.fillText(yy.toFixed(yy === Math.round(yy) ? 0 : 2), 55, sy);
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.lineWidth = 0.5;
                                ctx.beginPath();
                                ctx.moveTo(60, sy);
                                ctx.lineTo(680, sy);
                                ctx.stroke();
                            }

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText(getLabel() + '    S_' + maxN + ' = ' + sums[maxN].toFixed(6), 370, 8);

                            // Legend
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Orange = term a_n added', 62, 15);
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('Blue = partial sum level', 62, 30);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'geometric-series-fill',
                    title: 'Geometric Series: Filling a Container',
                    description: 'Visualize how a geometric series fills up a finite region, each term adding a shrinking slice.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 360, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var ratio = 0.5;
                        var nTerms = 10;

                        VizEngine.createSlider(controls, 'Ratio r', 0.1, 0.95, 0.5, 0.05, function(v) { ratio = parseFloat(v); draw(); });
                        VizEngine.createSlider(controls, 'Terms', 1, 30, 10, 1, function(v) { nTerms = Math.round(v); draw(); });

                        function draw() {
                            viz.clear();
                            var totalWidth = 580;
                            var barHeight = 60;
                            var startX = 60;
                            var startY = 90;
                            var limit = 1 / (1 - ratio);

                            // Draw the limit container
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.strokeRect(startX, startY, totalWidth, barHeight);
                            ctx.setLineDash([]);

                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('1/(1-r) = ' + limit.toFixed(4), startX + totalWidth, startY - 4);

                            // Fill with terms
                            var colors = [viz.colors.blue, viz.colors.orange, viz.colors.green, viz.colors.purple, viz.colors.pink, viz.colors.red, viz.colors.yellow, viz.colors.teal];
                            var x = startX;
                            var partialSum = 0;

                            for (var n = 0; n < nTerms; n++) {
                                var term = Math.pow(ratio, n);
                                partialSum += term;
                                var w = (term / limit) * totalWidth;
                                var c = colors[n % colors.length];

                                ctx.fillStyle = c + '88';
                                ctx.fillRect(x, startY, Math.max(w, 0.5), barHeight);
                                ctx.strokeStyle = c;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(x, startY, Math.max(w, 0.5), barHeight);

                                // Label the first few terms
                                if (w > 12 && n < 8) {
                                    ctx.fillStyle = viz.colors.white;
                                    ctx.font = '11px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText('r^' + n, x + w / 2, startY + barHeight / 2);
                                }

                                x += w;
                            }

                            // Show remaining gap
                            var remaining = limit - partialSum;
                            if (remaining > 0.001) {
                                var remW = (remaining / limit) * totalWidth;
                                ctx.fillStyle = '#ffffff11';
                                ctx.fillRect(x, startY, remW, barHeight);
                                if (remW > 20) {
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '11px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText('gap', x + remW / 2, startY + barHeight / 2);
                                }
                            }

                            // Individual term bars below
                            var barY = 190;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Individual terms (heights = r^n):', startX, barY - 20);

                            var barW = Math.min(30, totalWidth / nTerms - 2);
                            for (var k = 0; k < nTerms && k < 25; k++) {
                                var termVal = Math.pow(ratio, k);
                                var h = termVal * 120;
                                var bx = startX + k * (barW + 2);
                                var c2 = colors[k % colors.length];

                                ctx.fillStyle = c2 + '66';
                                ctx.fillRect(bx, barY + 120 - h, barW, h);
                                ctx.strokeStyle = c2;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(bx, barY + 120 - h, barW, h);

                                if (barW > 14 && k < 12) {
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '9px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText(k, bx + barW / 2, barY + 125);
                                }
                            }

                            // Summary
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('r = ' + ratio.toFixed(2) + '    S_' + nTerms + ' = ' + partialSum.toFixed(6) + '    Limit = ' + limit.toFixed(6), 350, 340);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute \\(\\sum_{n=0}^{\\infty} \\left(\\frac{1}{3}\\right)^n\\).',
                    hint: 'This is a geometric series with \\(r = 1/3\\).',
                    solution: '\\(\\sum_{n=0}^\\infty (1/3)^n = \\frac{1}{1 - 1/3} = \\frac{3}{2}\\).'
                },
                {
                    question: 'Does \\(\\sum_{n=1}^\\infty \\frac{n}{n+1}\\) converge or diverge?',
                    hint: 'Check whether \\(a_n \\to 0\\).',
                    solution: 'Since \\(\\frac{n}{n+1} \\to 1 \\neq 0\\), the series diverges by the divergence test.'
                },
                {
                    question: 'Find \\(\\sum_{n=1}^\\infty \\frac{1}{n(n+2)}\\) using partial fractions.',
                    hint: 'Write \\(\\frac{1}{n(n+2)} = \\frac{1}{2}\\left(\\frac{1}{n} - \\frac{1}{n+2}\\right)\\) and telescope.',
                    solution: 'The partial sum telescopes: \\(S_N = \\frac{1}{2}\\left(1 + \\frac{1}{2} - \\frac{1}{N+1} - \\frac{1}{N+2}\\right) \\to \\frac{1}{2}\\cdot\\frac{3}{2} = \\frac{3}{4}\\).'
                },
                {
                    question: 'If \\(S_N = \\frac{2N}{N+3}\\), find \\(\\sum_{n=1}^\\infty a_n\\) and \\(a_n\\) for \\(n \\geq 2\\).',
                    hint: '\\(\\sum a_n = \\lim S_N\\) and \\(a_n = S_n - S_{n-1}\\).',
                    solution: '\\(\\sum a_n = \\lim \\frac{2N}{N+3} = 2\\). For \\(n \\geq 2\\): \\(a_n = \\frac{2n}{n+3} - \\frac{2(n-1)}{n+2} = \\frac{6}{(n+3)(n+2)}\\).'
                },
                {
                    question: 'Show that \\(\\sum_{n=1}^\\infty \\left(\\sqrt{n+1} - \\sqrt{n}\\right)\\) diverges.',
                    hint: 'Compute the partial sum directly by telescoping.',
                    solution: '\\(S_N = \\sqrt{N+1} - 1 \\to \\infty\\), so the series diverges even though each term \\(\\to 0\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Comparison and Integral Tests
        // ============================================================
        {
            id: 'ch03-sec02',
            title: 'Comparison and Integral Tests',
            content: `
                <h2>Comparison and Integral Tests</h2>

                <p class="section-roadmap"><strong>Roadmap.</strong> This section introduces three related tools: the direct comparison test, the limit comparison test, and the integral test. All share a common philosophy: relate an unfamiliar series to a familiar benchmark. We culminate with the \\(p\\)-series classification, which becomes our most-used reference point for the rest of the chapter.</p>

                <p>When we cannot find a closed form for partial sums, we need indirect methods to determine convergence. The first family of tests works by <strong>bounding</strong> our series against something we already understand.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Direct Comparison Test)</div>
                    <div class="env-body">
                        <p>Suppose \\(0 \\leq a_n \\leq b_n\\) for all \\(n\\) sufficiently large.</p>
                        <ul>
                            <li>If \\(\\sum b_n\\) converges, then \\(\\sum a_n\\) converges.</li>
                            <li>If \\(\\sum a_n\\) diverges, then \\(\\sum b_n\\) diverges.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>If a bigger series converges, the smaller one must too — it is trapped below a finite ceiling. If the smaller one already blows up, the bigger one certainly does as well.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="comparison-test-bars"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Limit Comparison Test)</div>
                    <div class="env-body">
                        <p>Let \\(a_n, b_n > 0\\). If \\(\\displaystyle\\lim_{n\\to\\infty}\\frac{a_n}{b_n} = L\\) where \\(0 < L < \\infty\\), then \\(\\sum a_n\\) converges if and only if \\(\\sum b_n\\) converges.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example</div>
                    <div class="env-body">
                        <p>Does \\(\\sum \\frac{n}{n^3 + 5}\\) converge? Compare with \\(b_n = 1/n^2\\):</p>
                        <p>\\[\\frac{a_n}{b_n} = \\frac{n \\cdot n^2}{n^3 + 5} = \\frac{n^3}{n^3+5} \\to 1.\\]</p>
                        <p>Since \\(\\sum 1/n^2\\) converges (p-series with \\(p=2\\)), so does \\(\\sum \\frac{n}{n^3+5}\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Integral Test)</div>
                    <div class="env-body">
                        <p>Let \\(f: [1,\\infty) \\to \\mathbb{R}\\) be positive, continuous, and decreasing. Then \\(\\sum_{n=1}^\\infty f(n)\\) converges if and only if \\(\\int_1^\\infty f(x)\\,dx\\) converges.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="integral-test-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Corollary (p-Series Test)</div>
                    <div class="env-body">
                        <p>\\(\\displaystyle\\sum_{n=1}^\\infty \\frac{1}{n^p}\\) converges if and only if \\(p > 1\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>Apply the integral test with \\(f(x) = 1/x^p\\). For \\(p \\neq 1\\):</p>
                        <p>\\[\\int_1^\\infty \\frac{dx}{x^p} = \\lim_{b\\to\\infty}\\frac{x^{1-p}}{1-p}\\Big|_1^b = \\begin{cases}\\frac{1}{p-1} & p > 1 \\\\ \\infty & p < 1\\end{cases}\\]</p>
                        <p>For \\(p = 1\\): \\(\\int_1^\\infty dx/x = \\ln b \\to \\infty\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Integral Remainder Estimate</div>
                    <div class="env-body">
                        <p>The integral test also gives a bound on the error of partial sums: \\(\\int_{N+1}^\\infty f(x)\\,dx \\leq \\sum_{n=N+1}^\\infty f(n) \\leq \\int_N^\\infty f(x)\\,dx\\).</p>
                    </div>
                </div>

                <p class="section-connection"><strong>Looking ahead.</strong> Comparison and integral tests require an external benchmark series. Can we determine convergence from the series' own internal structure? The ratio and root tests answer yes: they detect hidden geometric decay by examining consecutive term ratios or \\(n\\)-th roots.</p>
            `,
            visualizations: [
                {
                    id: 'comparison-test-bars',
                    title: 'Comparison Test: Domination',
                    description: 'See how a smaller series is trapped beneath a larger convergent one.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var testCase = 'conv';

                        VizEngine.createButton(controls, '1/(n^2+n) vs 1/n^2', function() { testCase = 'conv'; draw(); });
                        VizEngine.createButton(controls, '1/sqrt(n) vs 1/n', function() { testCase = 'div'; draw(); });

                        function draw() {
                            viz.clear();
                            var maxN = 25;
                            var barW = 22;
                            var startX = 50;
                            var baseY = 330;

                            var aLabel, bLabel, titleText;
                            var aFn, bFn;

                            if (testCase === 'conv') {
                                aFn = function(n) { return 1 / (n * n + n); };
                                bFn = function(n) { return 1 / (n * n); };
                                aLabel = 'a_n = 1/(n^2+n)';
                                bLabel = 'b_n = 1/n^2';
                                titleText = 'a_n <= b_n, and Sum b_n converges => Sum a_n converges';
                            } else {
                                aFn = function(n) { return 1 / n; };
                                bFn = function(n) { return 1 / Math.sqrt(n); };
                                aLabel = 'a_n = 1/n';
                                bLabel = 'b_n = 1/sqrt(n)';
                                titleText = 'a_n <= b_n, and Sum a_n diverges => Sum b_n diverges';
                            }

                            // Find max value for scaling
                            var maxVal = bFn(1);
                            var yScale = 240 / maxVal;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText(titleText, 350, 8);

                            // Draw bars
                            for (var n = 1; n <= maxN; n++) {
                                var x = startX + (n - 1) * (barW + 3);
                                var hA = aFn(n) * yScale;
                                var hB = bFn(n) * yScale;

                                // b_n bar (behind)
                                ctx.fillStyle = viz.colors.orange + '55';
                                ctx.fillRect(x, baseY - hB, barW, hB);
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(x, baseY - hB, barW, hB);

                                // a_n bar (front)
                                ctx.fillStyle = viz.colors.blue + '88';
                                ctx.fillRect(x + 3, baseY - hA, barW - 6, hA);
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(x + 3, baseY - hA, barW - 6, hA);

                                // Label n
                                if (n <= 10 || n % 5 === 0) {
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'top';
                                    ctx.fillText(n, x + barW / 2, baseY + 4);
                                }
                            }

                            // Partial sums
                            var sumA = 0, sumB = 0;
                            for (var m = 1; m <= maxN; m++) { sumA += aFn(m); sumB += bFn(m); }

                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText(bLabel + '  (S_' + maxN + ' = ' + sumB.toFixed(4) + ')', startX, 350);
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText(aLabel + '  (S_' + maxN + ' = ' + sumA.toFixed(4) + ')', startX, 365);
                        }

                        draw();
                    }
                },
                {
                    id: 'integral-test-viz',
                    title: 'Integral Test: Bounding Sums by Areas',
                    description: 'See how rectangles at integer points bound the area under a decreasing curve.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var pVal = 2;
                        var nTerms = 15;

                        VizEngine.createSlider(controls, 'p', 0.5, 3, 2, 0.1, function(v) { pVal = parseFloat(v); draw(); });
                        VizEngine.createSlider(controls, 'Terms', 5, 30, 15, 1, function(v) { nTerms = Math.round(v); draw(); });

                        function draw() {
                            viz.clear();
                            var f = function(x) { return 1 / Math.pow(x, pVal); };

                            var plotLeft = 70;
                            var plotRight = 670;
                            var plotTop = 50;
                            var plotBottom = 320;
                            var plotW = plotRight - plotLeft;
                            var plotH = plotBottom - plotTop;

                            var xMax = nTerms + 1;
                            var yMax = 1.2;
                            var xScale = plotW / xMax;
                            var yScaleV = plotH / yMax;

                            function toSX(x) { return plotLeft + x * xScale; }
                            function toSY(y) { return plotBottom - y * yScaleV; }

                            // Draw left-sum rectangles (upper bound)
                            for (var n = 1; n <= nTerms; n++) {
                                var h = f(n);
                                if (h > yMax) h = yMax;
                                var rx = toSX(n - 1);
                                var rw = xScale;
                                var ry = toSY(h);
                                var rh = plotBottom - ry;
                                ctx.fillStyle = viz.colors.blue + '33';
                                ctx.fillRect(rx, ry, rw, rh);
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(rx, ry, rw, rh);
                            }

                            // Draw the curve
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 0; i <= 300; i++) {
                                var x = 0.5 + (xMax - 0.5) * i / 300;
                                var y = f(x);
                                if (y > yMax) y = yMax;
                                var sx = toSX(x);
                                var sy = toSY(y);
                                if (!started) { ctx.moveTo(sx, sy); started = true; }
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Draw dots at f(n)
                            for (var n2 = 1; n2 <= nTerms; n2++) {
                                var val = f(n2);
                                if (val > yMax) val = yMax;
                                ctx.fillStyle = viz.colors.white;
                                ctx.beginPath();
                                ctx.arc(toSX(n2), toSY(val), 4, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(plotLeft, plotBottom);
                            ctx.lineTo(plotRight, plotBottom);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(plotLeft, plotBottom);
                            ctx.lineTo(plotLeft, plotTop);
                            ctx.stroke();

                            // X labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var xl = 1; xl <= nTerms; xl += Math.max(1, Math.floor(nTerms / 10))) {
                                ctx.fillText(xl, toSX(xl), plotBottom + 4);
                            }

                            // Compute sums
                            var series = 0;
                            for (var m = 1; m <= nTerms; m++) series += f(m);

                            var converges = pVal > 1;

                            // Title and info
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('f(x) = 1/x^' + pVal.toFixed(1) + '    Sum f(n) for n=1..' + nTerms + ' = ' + series.toFixed(4), 370, 8);

                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillStyle = converges ? viz.colors.green : viz.colors.red;
                            ctx.fillText(converges ? 'p = ' + pVal.toFixed(1) + ' > 1: CONVERGES' : 'p = ' + pVal.toFixed(1) + ' <= 1: DIVERGES', 370, 30);

                            // Legend
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Rectangles = f(n) (terms of series)', plotLeft, 345);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('Curve = f(x) (integral comparator)', plotLeft, 360);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Use the comparison test to determine whether \\(\\sum_{n=1}^\\infty \\frac{1}{n^2 + 3n}\\) converges.',
                    hint: 'Note \\(n^2 + 3n > n^2\\), so \\(\\frac{1}{n^2+3n} < \\frac{1}{n^2}\\).',
                    solution: 'Since \\(0 < \\frac{1}{n^2+3n} < \\frac{1}{n^2}\\) and \\(\\sum 1/n^2\\) converges (p-series, \\(p=2\\)), the series converges by direct comparison.'
                },
                {
                    question: 'Does \\(\\sum_{n=2}^\\infty \\frac{1}{n \\ln n}\\) converge?',
                    hint: 'Apply the integral test with \\(f(x) = 1/(x \\ln x)\\). Use the substitution \\(u = \\ln x\\).',
                    solution: '\\(\\int_2^\\infty \\frac{dx}{x \\ln x} = \\ln(\\ln x)\\big|_2^\\infty = \\infty\\). The integral diverges, so the series diverges.'
                },
                {
                    question: 'Use limit comparison to test \\(\\sum \\frac{3n^2 + 1}{n^4 + n + 7}\\).',
                    hint: 'The dominant terms give \\(\\sim 3/n^2\\). Compare with \\(1/n^2\\).',
                    solution: '\\(\\lim \\frac{(3n^2+1)/(n^4+n+7)}{1/n^2} = \\lim \\frac{3n^4+n^2}{n^4+n+7} = 3\\). Since \\(0 < 3 < \\infty\\) and \\(\\sum 1/n^2\\) converges, the given series converges.'
                },
                {
                    question: 'For what values of \\(p\\) does \\(\\sum_{n=2}^\\infty \\frac{1}{n(\\ln n)^p}\\) converge?',
                    hint: 'Use the integral test. \\(\\int_2^\\infty \\frac{dx}{x(\\ln x)^p}\\) can be evaluated via \\(u = \\ln x\\).',
                    solution: 'Substituting \\(u = \\ln x\\): \\(\\int_{\\ln 2}^\\infty u^{-p}\\,du\\), which converges iff \\(p > 1\\). So the series converges iff \\(p > 1\\).'
                },
                {
                    question: 'Show that \\(\\sum_{n=1}^\\infty \\frac{\\sin^2(n)}{n^2}\\) converges.',
                    hint: 'Use the fact that \\(0 \\leq \\sin^2(n) \\leq 1\\).',
                    solution: '\\(0 \\leq \\frac{\\sin^2(n)}{n^2} \\leq \\frac{1}{n^2}\\). Since \\(\\sum 1/n^2\\) converges, the series converges by direct comparison.'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Ratio and Root Tests
        // ============================================================
        {
            id: 'ch03-sec03',
            title: 'Ratio and Root Tests',
            content: `
                <h2>Ratio and Root Tests</h2>

                <p class="section-roadmap"><strong>Roadmap.</strong> We present two self-contained convergence tests that require no external comparison series. The ratio test excels for series involving factorials and exponentials; the root test handles \\(n\\)-th power expressions. We also characterize when each test fails (the inconclusive case \\(L = 1\\)), which will motivate the need for the alternating series test in the next section.</p>

                <p>The comparison and integral tests require us to find a comparison series. The <strong>ratio</strong> and <strong>root</strong> tests are self-contained: they examine the series' own internal growth rate.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Ratio Test)</div>
                    <div class="env-body">
                        <p>Let \\(\\sum a_n\\) be a series with \\(a_n \\neq 0\\). Define \\(L = \\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|\\) (if the limit exists).</p>
                        <ul>
                            <li>If \\(L < 1\\), the series converges absolutely.</li>
                            <li>If \\(L > 1\\) (or \\(L = \\infty\\)), the series diverges.</li>
                            <li>If \\(L = 1\\), the test is <strong>inconclusive</strong>.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The ratio \\(|a_{n+1}/a_n|\\) measures by what factor each term shrinks (or grows). If each term is consistently less than \\(r < 1\\) times the previous, the terms decay geometrically and the series converges. The ratio test essentially detects <strong>hidden geometric behavior</strong>.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ratio-test-dashboard"></div>

                <div class="env-block example">
                    <div class="env-title">Example</div>
                    <div class="env-body">
                        <p>Test \\(\\sum_{n=0}^\\infty \\frac{n!}{3^n}\\):</p>
                        <p>\\[\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{3^{n+1}} \\cdot \\frac{3^n}{n!} = \\frac{n+1}{3} \\to \\infty.\\]</p>
                        <p>Since \\(L = \\infty > 1\\), the series <strong>diverges</strong>. Factorials grow faster than exponentials.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Root Test)</div>
                    <div class="env-body">
                        <p>Let \\(L = \\limsup_{n\\to\\infty} |a_n|^{1/n}\\).</p>
                        <ul>
                            <li>If \\(L < 1\\), the series converges absolutely.</li>
                            <li>If \\(L > 1\\), the series diverges.</li>
                            <li>If \\(L = 1\\), the test is inconclusive.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Ratio vs Root</div>
                    <div class="env-body">
                        <p>The root test is at least as powerful as the ratio test: whenever the ratio test gives a verdict, the root test agrees. But the root test can sometimes resolve cases where the ratio test is inconclusive. In practice, the ratio test is easier to compute for series involving factorials, while the root test is better for \\(n\\)-th power expressions.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example: Root Test Wins</div>
                    <div class="env-body">
                        <p>Consider \\(a_n = \\begin{cases} 2^{-n} & n \\text{ odd} \\\\ 3^{-n} & n \\text{ even}\\end{cases}\\).</p>
                        <p>The ratio \\(a_{n+1}/a_n\\) oscillates and does not converge. But \\(|a_n|^{1/n} \\leq (1/2)\\) for all \\(n\\), so the root test gives \\(L \\leq 1/2 < 1\\): converges.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="root-test-viz"></div>

                <div class="env-block warning">
                    <div class="env-title">The Inconclusive Case</div>
                    <div class="env-body">
                        <p>When \\(L = 1\\), anything can happen. Both \\(\\sum 1/n\\) and \\(\\sum 1/n^2\\) have \\(L = 1\\) for both tests, yet one diverges and the other converges. When ratio/root are inconclusive, fall back to comparison or integral tests.</p>
                    </div>
                </div>

                <p class="section-connection"><strong>Looking ahead.</strong> Every test so far handles series with nonnegative terms. But many important series, such as \\(\\sum (-1)^{n+1}/n\\), have terms that change sign. This leads to a fundamental distinction: <em>absolute</em> versus <em>conditional</em> convergence, with surprising consequences for how series behave.</p>
            `,
            visualizations: [
                {
                    id: 'ratio-test-dashboard',
                    title: 'Ratio Test Dashboard',
                    description: 'Watch the ratio |a_{n+1}/a_n| stabilize (or not) as n grows, determining convergence.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var seriesChoice = 'factorial_exp';

                        VizEngine.createButton(controls, 'n!/3^n', function() { seriesChoice = 'factorial_exp'; draw(); });
                        VizEngine.createButton(controls, '2^n/n!', function() { seriesChoice = 'exp_factorial'; draw(); });
                        VizEngine.createButton(controls, 'n^n/n!', function() { seriesChoice = 'nn_nfact'; draw(); });
                        VizEngine.createButton(controls, '1/n^2 (L=1)', function() { seriesChoice = 'pseries'; draw(); });

                        function logTerm(n) {
                            // Return log(|a_n|) for numerical stability
                            if (seriesChoice === 'factorial_exp') {
                                var s = 0; for (var i = 1; i <= n; i++) s += Math.log(i); return s - n * Math.log(3);
                            }
                            if (seriesChoice === 'exp_factorial') {
                                var s2 = 0; for (var i2 = 1; i2 <= n; i2++) s2 += Math.log(i2); return n * Math.log(2) - s2;
                            }
                            if (seriesChoice === 'nn_nfact') {
                                var s3 = 0; for (var i3 = 1; i3 <= n; i3++) s3 += Math.log(i3); return n * Math.log(n) - s3;
                            }
                            if (seriesChoice === 'pseries') return -2 * Math.log(n);
                            return 0;
                        }

                        function ratio(n) {
                            // |a_{n+1}/a_n| = exp(logTerm(n+1) - logTerm(n))
                            return Math.exp(logTerm(n + 1) - logTerm(n));
                        }

                        function getTitle() {
                            if (seriesChoice === 'factorial_exp') return 'Sum n!/3^n  (L -> inf, diverges)';
                            if (seriesChoice === 'exp_factorial') return 'Sum 2^n/n!  (L -> 0, converges)';
                            if (seriesChoice === 'nn_nfact') return 'Sum n^n/n!  (L -> e, diverges)';
                            if (seriesChoice === 'pseries') return 'Sum 1/n^2  (L -> 1, inconclusive)';
                            return '';
                        }

                        function draw() {
                            viz.clear();
                            var maxN = 30;
                            var ratios = [];
                            for (var n = 1; n <= maxN; n++) {
                                var r = ratio(n);
                                if (!isFinite(r) || r > 100) r = 100;
                                ratios.push(r);
                            }

                            var maxR = Math.max.apply(null, ratios);
                            maxR = Math.max(maxR, 2);
                            if (maxR > 10) maxR = Math.min(maxR, 20);

                            var plotL = 70, plotR = 660, plotT = 55, plotB = 330;
                            var plotW = plotR - plotL, plotH = plotB - plotT;

                            // Draw L=1 line
                            var y1 = plotB - (1 / maxR) * plotH;
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            ctx.moveTo(plotL, y1);
                            ctx.lineTo(plotR, y1);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.red;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('L = 1 (boundary)', plotR, y1 - 3);

                            // Draw ratio values
                            var barW = plotW / maxN - 2;
                            for (var i = 0; i < ratios.length; i++) {
                                var x = plotL + i * (plotW / maxN);
                                var rVal = Math.min(ratios[i], maxR);
                                var h = (rVal / maxR) * plotH;
                                var y = plotB - h;

                                var c = ratios[i] < 1 ? viz.colors.green : (ratios[i] > 1 ? viz.colors.orange : viz.colors.yellow);
                                ctx.fillStyle = c + '66';
                                ctx.fillRect(x, y, barW, h);
                                ctx.strokeStyle = c;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(x, y, barW, h);

                                // Dot at top
                                ctx.fillStyle = c;
                                ctx.beginPath();
                                ctx.arc(x + barW / 2, y, 3, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Connect dots
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            for (var j = 0; j < ratios.length; j++) {
                                var xj = plotL + j * (plotW / maxN) + barW / 2;
                                var rj = Math.min(ratios[j], maxR);
                                var yj = plotB - (rj / maxR) * plotH;
                                if (j === 0) ctx.moveTo(xj, yj); else ctx.lineTo(xj, yj);
                            }
                            ctx.stroke();

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(plotL, plotB); ctx.lineTo(plotR, plotB); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(plotL, plotB); ctx.lineTo(plotL, plotT); ctx.stroke();

                            // Labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var xl = 1; xl <= maxN; xl += 5) {
                                ctx.fillText(xl, plotL + (xl - 1) * (plotW / maxN) + barW / 2, plotB + 4);
                            }
                            ctx.fillText('n', plotR + 10, plotB + 4);

                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                            ctx.fillText('0', plotL - 5, plotB);
                            ctx.fillText(maxR.toFixed(1), plotL - 5, plotT);
                            ctx.fillText('1.0', plotL - 5, y1);

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText(getTitle(), 370, 8);

                            // Legend
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('|a_{n+1}/a_n|', plotL, 35);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('< 1: converges', plotL + 90, 35);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('> 1: diverges', plotL + 200, 35);

                            // Final ratio value
                            var lastR = ratios[ratios.length - 1];
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Ratio at n=' + maxN + ': ' + (lastR < 100 ? lastR.toFixed(4) : '>100'), 370, 350);
                        }

                        draw();
                    }
                },
                {
                    id: 'root-test-viz',
                    title: 'Root Test: n-th Root of |a_n|',
                    description: 'Track |a_n|^{1/n} as n grows to see if it settles below or above 1.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var choice = 'exp_n2';

                        VizEngine.createButton(controls, '(n/(2n+1))^n', function() { choice = 'exp_n2'; draw(); });
                        VizEngine.createButton(controls, '(1+1/n)^{-n^2}', function() { choice = 'superexp'; draw(); });
                        VizEngine.createButton(controls, '2^n/n^n', function() { choice = 'two_nn'; draw(); });
                        VizEngine.createButton(controls, '1/n^2 (L=1)', function() { choice = 'p2'; draw(); });

                        function nthRoot(n) {
                            if (choice === 'exp_n2') return n / (2 * n + 1);
                            if (choice === 'superexp') return Math.exp(-n * Math.log(1 + 1 / n));
                            if (choice === 'two_nn') return 2 / n;
                            if (choice === 'p2') return Math.exp(-2 * Math.log(n) / n);
                            return 0;
                        }

                        function getTitle() {
                            if (choice === 'exp_n2') return '|a_n|^{1/n} = n/(2n+1) -> 1/2 < 1: converges';
                            if (choice === 'superexp') return '|a_n|^{1/n} -> 1/e < 1: converges';
                            if (choice === 'two_nn') return '|a_n|^{1/n} = 2/n -> 0 < 1: converges';
                            if (choice === 'p2') return '|a_n|^{1/n} -> 1: inconclusive';
                            return '';
                        }

                        function draw() {
                            viz.clear();
                            var maxN = 40;
                            var plotL = 70, plotR2 = 660, plotT2 = 55, plotB2 = 330;
                            var plotW2 = plotR2 - plotL, plotH2 = plotB2 - plotT2;

                            // Compute values
                            var vals = [];
                            for (var n = 1; n <= maxN; n++) vals.push(nthRoot(n));

                            var maxV = Math.max(1.5, Math.max.apply(null, vals) * 1.1);

                            // L=1 line
                            var y1line = plotB2 - (1 / maxV) * plotH2;
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            ctx.moveTo(plotL, y1line);
                            ctx.lineTo(plotR2, y1line);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.red;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('1', plotL - 5, y1line + 6);

                            // Plot dots and line
                            ctx.strokeStyle = viz.colors.purple;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i < vals.length; i++) {
                                var x = plotL + (i / maxN) * plotW2;
                                var y = plotB2 - (vals[i] / maxV) * plotH2;
                                if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
                            }
                            ctx.stroke();

                            for (var j = 0; j < vals.length; j++) {
                                var xd = plotL + (j / maxN) * plotW2;
                                var yd = plotB2 - (vals[j] / maxV) * plotH2;
                                var col = vals[j] < 1 ? viz.colors.green : (vals[j] > 1 ? viz.colors.orange : viz.colors.yellow);
                                ctx.fillStyle = col;
                                ctx.beginPath();
                                ctx.arc(xd, yd, 3.5, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(plotL, plotB2); ctx.lineTo(plotR2, plotB2); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(plotL, plotB2); ctx.lineTo(plotL, plotT2); ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var k = 5; k <= maxN; k += 5) {
                                ctx.fillText(k, plotL + (k / maxN) * plotW2, plotB2 + 4);
                            }

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText(getTitle(), 370, 8);

                            // Final value
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.purple;
                            ctx.fillText('|a_' + maxN + '|^{1/' + maxN + '} = ' + vals[vals.length - 1].toFixed(6), 370, 355);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Apply the ratio test to \\(\\sum_{n=1}^\\infty \\frac{n^3}{3^n}\\).',
                    hint: 'Compute \\(a_{n+1}/a_n = \\frac{(n+1)^3}{3^{n+1}} \\cdot \\frac{3^n}{n^3}\\).',
                    solution: '\\(\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)^3}{3n^3} \\to \\frac{1}{3} < 1\\). The series converges by the ratio test.'
                },
                {
                    question: 'Test \\(\\sum_{n=1}^\\infty \\frac{(2n)!}{(n!)^2 4^n}\\) with the ratio test.',
                    hint: 'Use \\(\\frac{(2(n+1))!}{(2n)!} = (2n+2)(2n+1)\\) and \\(\\frac{((n+1)!)^2}{(n!)^2} = (n+1)^2\\).',
                    solution: '\\(\\frac{a_{n+1}}{a_n} = \\frac{(2n+2)(2n+1)}{4(n+1)^2} = \\frac{2(2n+1)}{4(n+1)} = \\frac{2n+1}{2n+2} \\to 1\\). The ratio test is inconclusive. (The series actually diverges, proven by Stirling.)'
                },
                {
                    question: 'Use the root test on \\(\\sum_{n=1}^\\infty \\left(\\frac{n}{2n+3}\\right)^n\\).',
                    hint: '\\(|a_n|^{1/n} = \\frac{n}{2n+3}\\).',
                    solution: '\\(|a_n|^{1/n} = \\frac{n}{2n+3} \\to \\frac{1}{2} < 1\\). The series converges by the root test.'
                },
                {
                    question: 'Show that the ratio and root tests are both inconclusive for \\(\\sum 1/n^p\\) for any \\(p > 0\\).',
                    hint: 'Compute \\((n/(n+1))^p \\to ?\\) and \\((1/n^p)^{1/n} = n^{-p/n} \\to ?\\).',
                    solution: 'Ratio: \\(\\frac{a_{n+1}}{a_n} = (n/(n+1))^p \\to 1\\). Root: \\(|a_n|^{1/n} = n^{-p/n} = e^{-p \\ln n / n} \\to e^0 = 1\\). Both give \\(L=1\\), inconclusive for all \\(p\\).'
                },
                {
                    question: 'Does \\(\\sum_{n=1}^\\infty \\frac{n!}{n^n}\\) converge?',
                    hint: 'Try the ratio test: \\(\\frac{(n+1)!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{n!}\\).',
                    solution: '\\(\\frac{a_{n+1}}{a_n} = \\frac{n^n}{(n+1)^n} = \\left(\\frac{n}{n+1}\\right)^n = \\left(1 - \\frac{1}{n+1}\\right)^n \\to e^{-1} < 1\\). Converges by the ratio test.'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Absolute and Conditional Convergence
        // ============================================================
        {
            id: 'ch03-sec04',
            title: 'Absolute and Conditional Convergence',
            content: `
                <h2>Absolute and Conditional Convergence</h2>

                <p class="section-roadmap"><strong>Roadmap.</strong> We define absolute and conditional convergence, prove that absolute convergence implies convergence, and establish the alternating series test (Leibniz). The distinction between absolute and conditional convergence is not merely technical; it determines whether a series is robust (rearrangement-invariant) or fragile, as we will see in the final section.</p>

                <p>So far, most tests handle series with nonnegative terms. What about series whose terms alternate in sign or are generally signed? This leads to a subtle but important distinction.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition</div>
                    <div class="env-body">
                        <p>A series \\(\\sum a_n\\) <strong>converges absolutely</strong> if \\(\\sum |a_n|\\) converges. It <strong>converges conditionally</strong> if \\(\\sum a_n\\) converges but \\(\\sum |a_n|\\) diverges.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Absolute Convergence implies Convergence)</div>
                    <div class="env-body">
                        <p>If \\(\\sum |a_n|\\) converges, then \\(\\sum a_n\\) converges.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof idea</div>
                    <div class="env-body">
                        <p>Define \\(b_n = a_n + |a_n|\\). Then \\(0 \\leq b_n \\leq 2|a_n|\\), so \\(\\sum b_n\\) converges by comparison. Since \\(a_n = b_n - |a_n|\\), \\(\\sum a_n = \\sum b_n - \\sum |a_n|\\) converges. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Alternating Series Test / Leibniz)</div>
                    <div class="env-body">
                        <p>If \\((b_n)\\) is a decreasing sequence with \\(b_n \\geq 0\\) and \\(b_n \\to 0\\), then \\(\\sum_{n=1}^\\infty (-1)^{n+1} b_n\\) converges.</p>
                        <p>Moreover, the partial sums satisfy \\(|S - S_N| \\leq b_{N+1}\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="alternating-series-viz"></div>

                <div class="env-block example">
                    <div class="env-title">Example: Conditional Convergence</div>
                    <div class="env-body">
                        <p>The <strong>alternating harmonic series</strong> \\(\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots = \\ln 2\\).</p>
                        <p>This converges (by the alternating series test) but not absolutely (since \\(\\sum 1/n\\) diverges). So it converges <strong>conditionally</strong>.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: Why Alternating Works</div>
                    <div class="env-body">
                        <p>In an alternating series with decreasing terms, the partial sums "zigzag" toward the limit. Odd partial sums decrease while even partial sums increase, and they squeeze together. The visualization above shows this zigzag pattern beautifully.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="abs-vs-cond-viz"></div>

                <div class="env-block warning">
                    <div class="env-title">Caution</div>
                    <div class="env-body">
                        <p>Conditional convergence is fragile. As we shall see in the next section, rearranging a conditionally convergent series can change its sum — or make it diverge. Absolute convergence is robust: rearrangements do not affect the sum.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Alternating Series Remainder</div>
                    <div class="env-body">
                        <p>The bound \\(|S - S_N| \\leq b_{N+1}\\) is remarkably useful: the error is no more than the first omitted term. This makes alternating series very efficient for numerical approximation.</p>
                    </div>
                </div>

                <p class="section-connection"><strong>Looking ahead.</strong> We warned that conditional convergence is "fragile." How fragile exactly? The next section makes this precise with Riemann's rearrangement theorem: a conditionally convergent series can be rearranged to converge to <em>any</em> real number, or to diverge. This dramatically underscores why absolute convergence matters.</p>
            `,
            visualizations: [
                {
                    id: 'alternating-series-viz',
                    title: 'Alternating Series Zigzag',
                    description: 'Watch partial sums zigzag toward the limit, overshooting and undershooting alternately.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var maxN = 20;
                        var seriesType = 'harmonic';

                        VizEngine.createButton(controls, '(-1)^{n+1}/n', function() { seriesType = 'harmonic'; draw(); });
                        VizEngine.createButton(controls, '(-1)^{n+1}/sqrt(n)', function() { seriesType = 'sqrt'; draw(); });
                        VizEngine.createButton(controls, '(-1)^{n+1}/n^2', function() { seriesType = 'square'; draw(); });
                        VizEngine.createSlider(controls, 'Terms N', 5, 50, 20, 1, function(v) { maxN = Math.round(v); draw(); });

                        function term(n) {
                            var sign = (n % 2 === 1) ? 1 : -1;
                            if (seriesType === 'harmonic') return sign / n;
                            if (seriesType === 'sqrt') return sign / Math.sqrt(n);
                            if (seriesType === 'square') return sign / (n * n);
                            return 0;
                        }

                        function getLimit() {
                            if (seriesType === 'harmonic') return Math.LN2;
                            if (seriesType === 'sqrt') return 0.6049; // approximate
                            if (seriesType === 'square') return Math.PI * Math.PI / 12;
                            return 0;
                        }

                        function draw() {
                            viz.clear();
                            var plotL = 70, plotR3 = 660, plotT3 = 50, plotB3 = 350;
                            var plotW3 = plotR3 - plotL, plotH3 = plotB3 - plotT3;

                            // Compute partial sums
                            var sums = [0];
                            for (var n = 1; n <= maxN; n++) {
                                sums.push(sums[n - 1] + term(n));
                            }

                            var minS = Math.min.apply(null, sums);
                            var maxS = Math.max.apply(null, sums);
                            var range = maxS - minS;
                            if (range < 0.1) range = 0.1;
                            var pad = range * 0.15;
                            var yMin = minS - pad;
                            var yMax = maxS + pad;
                            var yRange = yMax - yMin;

                            function toY(v) { return plotB3 - ((v - yMin) / yRange) * plotH3; }
                            function toX(i) { return plotL + (i / maxN) * plotW3; }

                            // Draw limit line
                            var lim = getLimit();
                            var limY = toY(lim);
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            ctx.moveTo(plotL, limY);
                            ctx.lineTo(plotR3, limY);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('S = ' + lim.toFixed(4), plotR3, limY - 4);

                            // Draw zigzag path
                            ctx.strokeStyle = viz.colors.white + '55';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            for (var i = 0; i <= maxN; i++) {
                                var x = toX(i);
                                var y = toY(sums[i]);
                                if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
                            }
                            ctx.stroke();

                            // Draw vertical segments showing each term
                            for (var j = 1; j <= maxN; j++) {
                                var x1 = toX(j);
                                var y1 = toY(sums[j - 1]);
                                var y2 = toY(sums[j]);
                                ctx.strokeStyle = (j % 2 === 1) ? viz.colors.green : viz.colors.red;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.moveTo(x1, y1);
                                ctx.lineTo(x1, y2);
                                ctx.stroke();

                                // Arrow
                                var dir = y2 < y1 ? -1 : 1;
                                ctx.fillStyle = (j % 2 === 1) ? viz.colors.green : viz.colors.red;
                                ctx.beginPath();
                                ctx.moveTo(x1, y2);
                                ctx.lineTo(x1 - 4, y2 - dir * 8);
                                ctx.lineTo(x1 + 4, y2 - dir * 8);
                                ctx.closePath();
                                ctx.fill();
                            }

                            // Draw dots at partial sums
                            for (var k = 0; k <= maxN; k++) {
                                var xd2 = toX(k);
                                var yd2 = toY(sums[k]);
                                ctx.fillStyle = (k % 2 === 0) ? viz.colors.orange : viz.colors.blue;
                                ctx.beginPath();
                                ctx.arc(xd2, yd2, 4, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(plotL, plotB3); ctx.lineTo(plotR3, plotB3); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(plotL, plotB3); ctx.lineTo(plotL, plotT3); ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var xl2 = 0; xl2 <= maxN; xl2 += Math.max(1, Math.floor(maxN / 10))) {
                                ctx.fillText(xl2, toX(xl2), plotB3 + 4);
                            }

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Alternating series partial sums (N=' + maxN + ', S_N=' + sums[maxN].toFixed(6) + ')', 370, 8);

                            // Legend
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('Positive term (up)', plotL, 30);
                            ctx.fillStyle = viz.colors.red;
                            ctx.fillText('Negative term (down)', plotL + 140, 30);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('Limit', plotL + 300, 30);
                        }

                        draw();
                    }
                },
                {
                    id: 'abs-vs-cond-viz',
                    title: 'Absolute vs Conditional: A Visual Comparison',
                    description: 'Compare a series, its absolute version, and their partial sums side by side.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var maxN = 25;

                        VizEngine.createSlider(controls, 'Terms', 5, 60, 25, 1, function(v) { maxN = Math.round(v); draw(); });

                        function draw() {
                            viz.clear();
                            var plotL = 60, plotR4 = 670, plotT4 = 50, plotB4 = 340;
                            var plotW4 = plotR4 - plotL;

                            // Compute alternating harmonic and absolute harmonic sums
                            var altSums = [0], absSums = [0];
                            for (var n = 1; n <= maxN; n++) {
                                altSums.push(altSums[n - 1] + Math.pow(-1, n + 1) / n);
                                absSums.push(absSums[n - 1] + 1 / n);
                            }

                            // Two panels: top for alternating, bottom for absolute
                            var midY = 195;
                            var panelH = 130;

                            // Panel 1: Alternating harmonic (converges conditionally)
                            var altMin = 0, altMax = 1.1;
                            function altToY(v) { return midY - 20 - ((v - altMin) / (altMax - altMin)) * panelH; }
                            function toX4(i) { return plotL + (i / maxN) * plotW4; }

                            // ln(2) line
                            var ln2Y = altToY(Math.LN2);
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath(); ctx.moveTo(plotL, ln2Y); ctx.lineTo(plotR4, ln2Y); ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('ln 2', plotR4 + 2, ln2Y);

                            // Plot alternating sums
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= maxN; i++) {
                                var x = toX4(i);
                                var y = altToY(altSums[i]);
                                if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
                            }
                            ctx.stroke();
                            for (var i2 = 0; i2 <= maxN; i2++) {
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath();
                                ctx.arc(toX4(i2), altToY(altSums[i2]), 3, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Sum (-1)^{n+1}/n  (conditional, -> ln 2)', plotL, 42);

                            // Panel 2: Absolute harmonic (diverges)
                            var absMax = absSums[maxN] * 1.1;
                            function absToY(v) { return plotB4 - (v / absMax) * panelH; }

                            // Plot absolute sums
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var j = 0; j <= maxN; j++) {
                                var x2 = toX4(j);
                                var y2 = absToY(absSums[j]);
                                if (j === 0) ctx.moveTo(x2, y2); else ctx.lineTo(x2, y2);
                            }
                            ctx.stroke();
                            for (var j2 = 0; j2 <= maxN; j2++) {
                                ctx.fillStyle = viz.colors.orange;
                                ctx.beginPath();
                                ctx.arc(toX4(j2), absToY(absSums[j2]), 3, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Sum 1/n  (absolute version, diverges to inf)', plotL, midY + 5);

                            // Dividing line
                            ctx.strokeStyle = viz.colors.grid;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(plotL, midY); ctx.lineTo(plotR4, midY); ctx.stroke();

                            // Summary
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Conditional: Sum a_n converges but Sum |a_n| diverges', 370, plotB4 + 15);
                            ctx.fillText('S_' + maxN + ' (alternating) = ' + altSums[maxN].toFixed(4) + '    S_' + maxN + ' (absolute) = ' + absSums[maxN].toFixed(4), 370, plotB4 + 32);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Determine whether \\(\\sum_{n=1}^\\infty \\frac{(-1)^n}{\\sqrt{n}}\\) converges absolutely, conditionally, or diverges.',
                    hint: 'Check absolute convergence first: does \\(\\sum 1/\\sqrt{n}\\) converge? Then check the alternating series test.',
                    solution: '\\(\\sum 1/\\sqrt{n}\\) diverges (p-series, \\(p=1/2\\)), so not absolutely convergent. But \\(1/\\sqrt{n}\\) is decreasing and \\(\\to 0\\), so \\(\\sum (-1)^n/\\sqrt{n}\\) converges by the alternating series test. Convergence is <strong>conditional</strong>.'
                },
                {
                    question: 'Does \\(\\sum_{n=1}^\\infty \\frac{(-1)^n n}{n^2 + 1}\\) converge?',
                    hint: 'Check if \\(b_n = n/(n^2+1)\\) is eventually decreasing and approaches 0.',
                    solution: '\\(b_n = n/(n^2+1) \\to 0\\). To check decreasing: \\(b_n > b_{n+1}\\) iff \\(n(n^2+2n+2) > (n+1)(n^2+1)\\), which simplifies to \\(n^2 > 1\\), true for \\(n \\geq 2\\). By the alternating series test, the series converges. Since \\(n/(n^2+1) \\sim 1/n\\), convergence is conditional.'
                },
                {
                    question: 'Show that \\(\\sum_{n=1}^\\infty \\frac{\\cos(n)}{n^2}\\) converges absolutely.',
                    hint: '\\(|\\cos(n)| \\leq 1\\).',
                    solution: '\\(\\left|\\frac{\\cos(n)}{n^2}\\right| \\leq \\frac{1}{n^2}\\). Since \\(\\sum 1/n^2\\) converges, \\(\\sum \\cos(n)/n^2\\) converges absolutely by comparison.'
                },
                {
                    question: 'How many terms of \\(\\sum (-1)^{n+1}/n\\) are needed to approximate \\(\\ln 2\\) within \\(0.01\\)?',
                    hint: 'The alternating series remainder bound gives \\(|S - S_N| \\leq b_{N+1} = 1/(N+1)\\).',
                    solution: 'We need \\(1/(N+1) \\leq 0.01\\), i.e., \\(N+1 \\geq 100\\), so \\(N \\geq 99\\). We need at least 99 terms.'
                },
                {
                    question: 'Give an example of a series \\(\\sum a_n\\) where \\(a_n \\to 0\\), the signs alternate, but the series diverges.',
                    hint: 'The alternating series test requires the magnitudes to be decreasing. What if they are not?',
                    solution: 'Consider \\(a_n\\) defined by: \\(a_n = 1/\\sqrt{n}\\) if \\(n\\) odd, \\(a_n = -1/n\\) if \\(n\\) even. The terms approach 0 and alternate in sign, but positive terms dominate since \\(\\sum 1/\\sqrt{n}\\) grows faster, so the series diverges.'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Rearrangements and Riemann's Theorem
        // ============================================================
        {
            id: 'ch03-sec05',
            title: 'Rearrangements',
            content: `
                <h2>Rearrangements</h2>

                <p class="section-roadmap"><strong>Roadmap.</strong> We prove two contrasting theorems: Riemann's rearrangement theorem (conditional convergence allows arbitrary rearranged limits) and the rearrangement invariance of absolutely convergent series. We close with the Cauchy product, which connects series multiplication to the convergence type.</p>

                <p>One of the most astonishing results in analysis: rearranging the terms of a conditionally convergent series can change its sum to <strong>anything you want</strong> — or make it diverge.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition (Rearrangement)</div>
                    <div class="env-body">
                        <p>A <strong>rearrangement</strong> of \\(\\sum_{n=1}^\\infty a_n\\) is a series \\(\\sum_{n=1}^\\infty a_{\\sigma(n)}\\) where \\(\\sigma: \\mathbb{N} \\to \\mathbb{N}\\) is a bijection. Every term appears exactly once, just in a different order.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Riemann Rearrangement Theorem)</div>
                    <div class="env-body">
                        <p>If \\(\\sum a_n\\) converges conditionally, then for any \\(L \\in \\mathbb{R} \\cup \\{\\pm\\infty\\}\\), there exists a rearrangement of the series that converges to \\(L\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof idea</div>
                    <div class="env-body">
                        <p>Let \\(p_n\\) be the positive terms and \\(q_n\\) the negative terms (both in their original order). Since the series converges conditionally, both \\(\\sum p_n = +\\infty\\) and \\(\\sum |q_n| = +\\infty\\) (if either converged, the series would converge absolutely).</p>
                        <p>To reach target \\(L\\): add positive terms until you exceed \\(L\\), then add negative terms until you drop below \\(L\\), then repeat. Since \\(p_n \\to 0\\) and \\(q_n \\to 0\\), each overshoot/undershoot gets smaller, and the partial sums converge to \\(L\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="rearrangement-builder"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem (Absolute Convergence is Rearrangement-Invariant)</div>
                    <div class="env-body">
                        <p>If \\(\\sum a_n\\) converges absolutely, then every rearrangement converges to the same sum.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Absolute convergence means the total "amount of stuff" is finite. Rearranging a finite pile does not change its total. But conditional convergence is a delicate balance between positive and negative infinities — disturbing the order breaks the balance.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example: A Rearrangement of the Alternating Harmonic Series</div>
                    <div class="env-body">
                        <p>Take the alternating harmonic series (sum = \\(\\ln 2\\)). Rearrange it as:</p>
                        <p>\\[1 + \\frac{1}{3} - \\frac{1}{2} + \\frac{1}{5} + \\frac{1}{7} - \\frac{1}{4} + \\frac{1}{9} + \\frac{1}{11} - \\frac{1}{6} + \\cdots\\]</p>
                        <p>(two positive terms, one negative, repeating). This rearrangement converges to \\(\\frac{3}{2}\\ln 2\\), not \\(\\ln 2\\)!</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="riemann-target-viz"></div>

                <div class="env-block remark">
                    <div class="env-title">The Bigger Picture</div>
                    <div class="env-body">
                        <p>The Riemann rearrangement theorem reveals that <strong>conditional convergence is inherently about order</strong>. In higher dimensions (e.g., summing over \\(\\mathbb{Z}^2\\)), even the notion of "the sum" becomes order-dependent unless absolute convergence holds. This is one reason absolute convergence is so central to analysis.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Cauchy Product</div>
                    <div class="env-body">
                        <p>When multiplying two absolutely convergent series \\(\\sum a_n\\) and \\(\\sum b_n\\), the <strong>Cauchy product</strong> \\(\\sum c_n\\) where \\(c_n = \\sum_{k=0}^n a_k b_{n-k}\\) converges absolutely to \\((\\sum a_n)(\\sum b_n)\\). For conditionally convergent series, the Cauchy product may diverge (Mertens' theorem provides partial results).</p>
                    </div>
                </div>

                <div class="env-block bridge">
                    <div class="env-title">Bridge to Chapter 4</div>
                    <div class="env-body">
                        <p>Series concern convergence at individual points: does this particular sum converge, and to what value? But to deepen our understanding of functions and limits, we need to study the structure of the real line itself. Which subsets of \\(\\mathbb{R}\\) are open, closed, or compact? How do these topological properties interact with sequences and continuity? This is point-set topology, the subject of Chapter 4.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'rearrangement-builder',
                    title: 'Rearrangement Builder',
                    description: 'Compare the original alternating harmonic series with a 2-positive-1-negative rearrangement.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var posPerNeg = 2;
                        var maxTerms = 30;

                        VizEngine.createSlider(controls, 'Positives per negative', 1, 5, 2, 1, function(v) { posPerNeg = Math.round(v); draw(); });
                        VizEngine.createSlider(controls, 'Total terms', 10, 80, 30, 1, function(v) { maxTerms = Math.round(v); draw(); });

                        function draw() {
                            viz.clear();

                            // Original alternating harmonic sums
                            var origSums = [0];
                            for (var n = 1; n <= maxTerms; n++) {
                                origSums.push(origSums[n - 1] + Math.pow(-1, n + 1) / n);
                            }

                            // Rearranged: posPerNeg positive terms, then 1 negative term
                            var posIndex = 1; // next odd-indexed positive: 1, 1/3, 1/5, ...
                            var negIndex = 1; // next even-indexed negative: 1/2, 1/4, 1/6, ...
                            var rearSums = [0];
                            var count = 0;
                            while (count < maxTerms) {
                                // Add posPerNeg positive terms
                                for (var p = 0; p < posPerNeg && count < maxTerms; p++) {
                                    var term = 1 / (2 * posIndex - 1);
                                    rearSums.push(rearSums[rearSums.length - 1] + term);
                                    posIndex++;
                                    count++;
                                }
                                // Add 1 negative term
                                if (count < maxTerms) {
                                    var negTerm = -1 / (2 * negIndex);
                                    rearSums.push(rearSums[rearSums.length - 1] + negTerm);
                                    negIndex++;
                                    count++;
                                }
                            }

                            // Find range
                            var allVals = origSums.concat(rearSums);
                            var minV = Math.min.apply(null, allVals);
                            var maxV = Math.max.apply(null, allVals);
                            var range = maxV - minV;
                            if (range < 0.1) range = 0.1;
                            var pad = range * 0.15;
                            var yMin = minV - pad;
                            var yMax = maxV + pad;
                            var yRange = yMax - yMin;

                            var plotL = 70, plotR5 = 660, plotT5 = 50, plotB5 = 360;
                            var plotH5 = plotB5 - plotT5;
                            var plotW5 = plotR5 - plotL;

                            function toY5(v) { return plotB5 - ((v - yMin) / yRange) * plotH5; }
                            function toX5(i) { return plotL + (i / maxTerms) * plotW5; }

                            // ln(2) line
                            var ln2 = Math.LN2;
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath(); ctx.moveTo(plotL, toY5(ln2)); ctx.lineTo(plotR5, toY5(ln2)); ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('ln 2 = ' + ln2.toFixed(4), plotR5 + 2, toY5(ln2));

                            // Estimate rearranged limit
                            var rearLimit = 0.5 * Math.log(posPerNeg) + Math.LN2;
                            if (posPerNeg > 1) {
                                ctx.strokeStyle = viz.colors.purple;
                                ctx.lineWidth = 1.5;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath(); ctx.moveTo(plotL, toY5(rearLimit)); ctx.lineTo(plotR5, toY5(rearLimit)); ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.fillStyle = viz.colors.purple;
                                ctx.fillText('~' + rearLimit.toFixed(4), plotR5 + 2, toY5(rearLimit));
                            }

                            // Plot original
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i < origSums.length; i++) {
                                var x = toX5(i);
                                var y = toY5(origSums[i]);
                                if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
                            }
                            ctx.stroke();

                            // Plot rearranged
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var j = 0; j < rearSums.length && j <= maxTerms; j++) {
                                var x2 = toX5(j);
                                var y2 = toY5(rearSums[j]);
                                if (j === 0) ctx.moveTo(x2, y2); else ctx.lineTo(x2, y2);
                            }
                            ctx.stroke();

                            // Dots
                            for (var k = 0; k < origSums.length; k++) {
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.arc(toX5(k), toY5(origSums[k]), 2.5, 0, Math.PI * 2); ctx.fill();
                            }
                            for (var k2 = 0; k2 < rearSums.length && k2 <= maxTerms; k2++) {
                                ctx.fillStyle = viz.colors.orange;
                                ctx.beginPath(); ctx.arc(toX5(k2), toY5(rearSums[k2]), 2.5, 0, Math.PI * 2); ctx.fill();
                            }

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(plotL, plotB5); ctx.lineTo(plotR5, plotB5); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(plotL, plotB5); ctx.lineTo(plotL, plotT5); ctx.stroke();

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Same terms, different order, different sum!', 370, 8);

                            // Legend
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('Original order -> ln 2', plotL, 30);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('Rearranged (' + posPerNeg + ' pos, 1 neg)', plotL + 180, 30);

                            // Final values
                            var origFinal = origSums[origSums.length - 1];
                            var rearFinal = rearSums[Math.min(rearSums.length - 1, maxTerms)];
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Original S_' + maxTerms + ' = ' + origFinal.toFixed(5) + '    Rearranged S_' + maxTerms + ' = ' + rearFinal.toFixed(5), 370, 375);
                        }

                        draw();
                    }
                },
                {
                    id: 'riemann-target-viz',
                    title: 'Riemann Rearrangement: Hit Any Target',
                    description: 'Set a target value and watch the algorithm build a rearrangement of the alternating harmonic series converging to it.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var target = 1.5;
                        var nSteps = 60;

                        VizEngine.createSlider(controls, 'Target L', -2, 4, 1.5, 0.1, function(v) { target = parseFloat(v); draw(); });
                        VizEngine.createSlider(controls, 'Steps', 20, 150, 60, 1, function(v) { nSteps = Math.round(v); draw(); });

                        function draw() {
                            viz.clear();

                            // Build rearrangement targeting 'target'
                            var posN = 1; // next positive: 1/(2k-1)
                            var negN = 1; // next negative: 1/(2k)
                            var sums = [0];

                            for (var step = 0; step < nSteps; step++) {
                                var current = sums[sums.length - 1];
                                if (current <= target) {
                                    // Add positive term
                                    sums.push(current + 1 / (2 * posN - 1));
                                    posN++;
                                } else {
                                    // Add negative term
                                    sums.push(current - 1 / (2 * negN));
                                    negN++;
                                }
                            }

                            var minV2 = Math.min.apply(null, sums);
                            var maxV2 = Math.max.apply(null, sums);
                            var range2 = maxV2 - minV2;
                            if (range2 < 0.5) range2 = 0.5;
                            var pad2 = range2 * 0.12;
                            var yMin2 = minV2 - pad2;
                            var yMax2 = maxV2 + pad2;
                            var yRange2 = yMax2 - yMin2;

                            var plotL2 = 70, plotR6 = 660, plotT6 = 50, plotB6 = 350;
                            var plotH6 = plotB6 - plotT6;
                            var plotW6 = plotR6 - plotL2;

                            function toY6(v) { return plotB6 - ((v - yMin2) / yRange2) * plotH6; }
                            function toX6(i) { return plotL2 + (i / nSteps) * plotW6; }

                            // Target line
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 2.5;
                            ctx.setLineDash([8, 4]);
                            ctx.beginPath();
                            ctx.moveTo(plotL2, toY6(target));
                            ctx.lineTo(plotR6, toY6(target));
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.red;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Target L = ' + target.toFixed(1), plotR6 - 130, toY6(target) - 8);

                            // Plot sums with color coding
                            for (var i = 1; i < sums.length; i++) {
                                var x1 = toX6(i - 1);
                                var y1 = toY6(sums[i - 1]);
                                var x2 = toX6(i);
                                var y2 = toY6(sums[i]);
                                var up = sums[i] > sums[i - 1];

                                ctx.strokeStyle = up ? viz.colors.green : viz.colors.orange;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                ctx.moveTo(x1, y1);
                                ctx.lineTo(x2, y2);
                                ctx.stroke();

                                ctx.fillStyle = up ? viz.colors.green : viz.colors.orange;
                                ctx.beginPath();
                                ctx.arc(x2, y2, 2.5, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(plotL2, plotB6); ctx.lineTo(plotR6, plotB6); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(plotL2, plotB6); ctx.lineTo(plotL2, plotT6); ctx.stroke();

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Riemann Rearrangement: targeting L = ' + target.toFixed(1), 370, 8);

                            // Info
                            var finalVal = sums[sums.length - 1];
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('After ' + nSteps + ' terms: S = ' + finalVal.toFixed(6) + '    |S - L| = ' + Math.abs(finalVal - target).toFixed(6), 370, 30);

                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('Add positive until > L', plotL2, 370);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('Add negative until < L', plotL2 + 180, 370);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Explain why both \\(\\sum p_n\\) and \\(\\sum |q_n|\\) must diverge if \\(\\sum a_n\\) converges conditionally.',
                    hint: 'If \\(\\sum p_n\\) converged, what would \\(\\sum |a_n| = \\sum p_n + \\sum |q_n|\\) imply?',
                    solution: 'We have \\(|a_n| = p_n + |q_n|\\) and \\(a_n = p_n - |q_n|\\). If both \\(\\sum p_n\\) and \\(\\sum |q_n|\\) converged, then \\(\\sum |a_n|\\) would converge, contradicting conditional convergence. If one converged and the other diverged, \\(\\sum a_n\\) would diverge, a contradiction. So both must diverge.'
                },
                {
                    question: 'Show that any rearrangement of an absolutely convergent series converges to the same sum.',
                    hint: 'Use the Cauchy criterion: for \\(\\varepsilon > 0\\), there exists \\(N\\) such that \\(\\sum_{n>N}|a_n| < \\varepsilon\\). Any finite initial segment of the rearrangement includes all terms \\(a_1,...,a_N\\) for large enough index.',
                    solution: 'Let \\(S = \\sum a_n\\) and \\(T_M = \\sum_{n=1}^M a_{\\sigma(n)}\\). Given \\(\\varepsilon > 0\\), choose \\(N\\) with \\(\\sum_{n>N}|a_n| < \\varepsilon\\). Choose \\(M\\) large enough that \\(\\{\\sigma(1),...,\\sigma(M)\\} \\supseteq \\{1,...,N\\}\\). Then \\(|T_M - S_N| \\leq \\sum_{n>N}|a_n| < \\varepsilon\\) and \\(|S - S_N| < \\varepsilon\\), so \\(|T_M - S| < 2\\varepsilon\\).'
                },
                {
                    question: 'Describe a rearrangement of \\(\\sum (-1)^{n+1}/n\\) that diverges to \\(+\\infty\\).',
                    hint: 'You need to keep taking more and more positive terms before each negative term.',
                    solution: 'Take enough positive terms to exceed 1, then one negative term. Then enough positive terms to exceed 2, then one negative term. Continue: enough positives to exceed \\(k\\), then one negative. Since the positive partial sums \\(\\to \\infty\\) and each negative term \\(\\to 0\\), the rearranged partial sums \\(\\to \\infty\\).'
                },
                {
                    question: 'If \\(\\sum a_n\\) converges absolutely with sum \\(S\\), and we split it into \\(\\sum a_{2n}\\) and \\(\\sum a_{2n-1}\\), what can we say?',
                    hint: 'Both subseries are dominated by \\(\\sum |a_n|\\).',
                    solution: 'Both \\(\\sum a_{2n}\\) and \\(\\sum a_{2n-1}\\) converge absolutely (by comparison with \\(\\sum |a_n|\\)), and their sum equals \\(S\\). This is a special rearrangement, and by absolute convergence, the sum is preserved.'
                },
                {
                    question: 'The series \\(1 + \\frac{1}{3} - \\frac{1}{2} + \\frac{1}{5} + \\frac{1}{7} - \\frac{1}{4} + \\cdots\\) (2 positives, 1 negative from the alternating harmonic series) converges to \\(\\frac{3}{2}\\ln 2\\). Verify numerically by computing the first 12 terms.',
                    hint: 'The terms are: \\(1, 1/3, -1/2, 1/5, 1/7, -1/4, 1/9, 1/11, -1/6, 1/13, 1/15, -1/8\\).',
                    solution: 'Computing: \\(1 + 0.333 - 0.5 + 0.2 + 0.143 - 0.25 + 0.111 + 0.091 - 0.167 + 0.077 + 0.067 - 0.125 = 0.980\\). The target \\(\\frac{3}{2}\\ln 2 \\approx 1.0397\\). With only 12 terms we are approaching it; convergence is slow but heading in the right direction.'
                }
            ]
        }
    ]
});
