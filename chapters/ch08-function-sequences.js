window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch08',
    number: 8,
    title: 'Sequences & Series of Functions',
    subtitle: 'Pointwise and uniform convergence, interchange of limits with integration and differentiation, power series, and the Weierstrass M-test.',
    sections: [

        // ============================================================
        // SECTION 1: Pointwise Convergence
        // ============================================================
        {
            id: 'ch08-sec01',
            title: 'Pointwise Convergence of Function Sequences',
            content: `
                <h2>Pointwise Convergence of Function Sequences</h2>

                <p>In earlier chapters we studied sequences of <em>numbers</em>. Now we level up: what happens when each term of a sequence is an entire <strong>function</strong>?</p>

                <p>Consider a sequence of functions \\(f_1, f_2, f_3, \\ldots\\) all defined on a common domain \\(D\\). At every fixed point \\(x \\in D\\) we get an ordinary numerical sequence \\(f_1(x), f_2(x), f_3(x), \\ldots\\)</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.1 — Pointwise Convergence</div>
                    <div class="env-body">
                        <p>We say \\(\\{f_n\\}\\) <strong>converges pointwise</strong> to a function \\(f\\) on \\(D\\) if, for every \\(x \\in D\\),</p>
                        <p>\\[\\lim_{n\\to\\infty} f_n(x) = f(x).\\]</p>
                        <p>In \\(\\varepsilon\\text{-}N\\) language: for every \\(x \\in D\\) and every \\(\\varepsilon > 0\\), there exists \\(N = N(\\varepsilon, x)\\) such that \\(n \\ge N \\Rightarrow |f_n(x) - f(x)| < \\varepsilon\\).</p>
                    </div>
                </div>

                <p>The crucial detail: the \\(N\\) is allowed to <strong>depend on \\(x\\)</strong>. At some points convergence may be fast; at others, painfully slow.</p>

                <div class="env-block example">
                    <div class="env-title">Example 8.2 — A Classic: \\(f_n(x) = x^n\\) on \\([0,1]\\)</div>
                    <div class="env-body">
                        <p>Fix any \\(x \\in [0,1)\\). Then \\(x^n \\to 0\\) as \\(n \\to \\infty\\). At \\(x = 1\\), we have \\(1^n = 1\\) for all \\(n\\). So the pointwise limit is</p>
                        <p>\\[f(x) = \\begin{cases} 0 & \\text{if } 0 \\le x < 1 \\\\ 1 & \\text{if } x = 1.\\end{cases}\\]</p>
                        <p>Each \\(f_n\\) is continuous, yet the limit \\(f\\) is <strong>discontinuous</strong> at \\(x = 1\\). Pointwise convergence does not preserve continuity!</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="pointwise-xn"></div>

                <div class="env-block intuition">
                    <div class="env-title">The Microscope Metaphor</div>
                    <div class="env-body">
                        <p>Pointwise convergence is like examining the sequence through a <strong>microscope</strong> focused on a single point \\(x\\). You look at one point, wait long enough, and eventually \\(f_n(x)\\) is within \\(\\varepsilon\\) of \\(f(x)\\). But if you shift the microscope to a different point, you may have to wait an entirely different (possibly much longer) amount of time.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 8.3 — Bump Functions: \\(g_n(x) = n x e^{-nx^2/2}\\)</div>
                    <div class="env-body">
                        <p>For each \\(n\\), \\(g_n\\) is a smooth "bump" near \\(x = 0\\). As \\(n \\to \\infty\\), the bump grows taller and narrower. For any fixed \\(x \\neq 0\\), the exponential decay wins and \\(g_n(x) \\to 0\\). At \\(x = 0\\), \\(g_n(0) = 0\\) for all \\(n\\). So \\(g_n \\to 0\\) pointwise. Yet the <em>maximum</em> of \\(g_n\\) grows without bound — another sign that pointwise convergence gives weak control.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="pointwise-bump"></div>

                <div class="env-block remark">
                    <div class="env-title">Why It Matters</div>
                    <div class="env-body">
                        <p>Pointwise convergence is the <em>natural</em> notion but it is too weak for most analytic operations. We cannot in general interchange limits with integrals or derivatives under mere pointwise convergence. The next section introduces the stronger notion that fixes this.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'pointwise-xn',
                    title: 'Pointwise Convergence: f_n(x) = x^n on [0,1]',
                    description: 'Watch how x^n converges to 0 for x<1 but stays at 1 for x=1. Use the slider to increase n.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 280, originX: 70, originY: 370 });
                        var n = 1;

                        VizEngine.createSlider(controls, 'n', 1, 50, 1, 1, function(v) { n = Math.round(v); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(0.25);
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            // Draw the limit function (step)
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            var s0 = viz.toScreen(0, 0);
                            var s1 = viz.toScreen(0.98, 0);
                            ctx.moveTo(s0[0], s0[1]);
                            ctx.lineTo(s1[0], s1[1]);
                            ctx.stroke();
                            // vertical jump indicator
                            var s2 = viz.toScreen(1, 0);
                            var s3 = viz.toScreen(1, 1);
                            ctx.beginPath();
                            ctx.moveTo(s2[0], s2[1]);
                            ctx.lineTo(s3[0], s3[1]);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            // dot at (1,1)
                            viz.drawPoint(1, 1, viz.colors.red, null, 5);

                            // Draw f_n(x) = x^n
                            viz.drawFunction(function(x) {
                                if (x < 0 || x > 1) return NaN;
                                return Math.pow(x, n);
                            }, 0, 1, viz.colors.blue, 2.5, 400);

                            // Draw a few ghost curves for context
                            var ghosts = [1, 2, 5, 10, 20];
                            for (var i = 0; i < ghosts.length; i++) {
                                var gn = ghosts[i];
                                if (gn === n) continue;
                                viz.drawFunction(function(x) {
                                    if (x < 0 || x > 1) return NaN;
                                    return Math.pow(x, gn);
                                }, 0, 1, viz.colors.blue + '22', 1, 200);
                            }

                            // Labels
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('f_n(x) = x^' + n, viz.width - 200, 20);

                            ctx.fillStyle = viz.colors.red;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('Limit: f(x) = 0 for x<1, f(1) = 1', viz.width - 260, 45);

                            // Show how N depends on x
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('N depends on x: near x=1, convergence is very slow', 80, 15);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'pointwise-bump',
                    title: 'Disappearing Bumps: g_n(x) = n x exp(-nx^2/2)',
                    description: 'Each g_n is a bump near 0 that grows taller but narrower. The pointwise limit is 0 everywhere, yet sup|g_n| diverges.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 80, originX: 350, originY: 370 });
                        var n = 1;

                        VizEngine.createSlider(controls, 'n', 1, 60, 1, 1, function(v) { n = Math.round(v); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            // Ghost curves
                            var ghosts = [1, 5, 10, 20, 40];
                            for (var i = 0; i < ghosts.length; i++) {
                                var gn = ghosts[i];
                                if (gn === n) continue;
                                viz.drawFunction(function(x) {
                                    return gn * x * Math.exp(-gn * x * x / 2);
                                }, -4, 4, viz.colors.teal + '20', 1, 300);
                            }

                            // Current curve
                            viz.drawFunction(function(x) {
                                return n * x * Math.exp(-n * x * x / 2);
                            }, -4, 4, viz.colors.teal, 2.5, 400);

                            // Limit line (y=0)
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([4, 4]);
                            var sy = viz.toScreen(0, 0);
                            ctx.beginPath();
                            ctx.moveTo(0, sy[1]);
                            ctx.lineTo(viz.width, sy[1]);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Peak info
                            var peakX = Math.sqrt(1 / n);
                            var peakY = n * peakX * Math.exp(-n * peakX * peakX / 2);
                            viz.drawPoint(peakX, peakY, viz.colors.orange, null, 5);

                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('g_' + n + '(x) = ' + n + 'x exp(-' + n + 'x^2/2)', 20, 15);

                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('Peak height = ' + peakY.toFixed(2) + '  (grows as sqrt(n/e))', 20, 40);

                            ctx.fillStyle = viz.colors.red;
                            ctx.fillText('Pointwise limit = 0 everywhere', 20, 60);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(f_n(x) = \\frac{x}{1 + nx^2}\\) for \\(x \\in \\mathbb{R}\\). Find the pointwise limit \\(f(x) = \\lim_{n\\to\\infty} f_n(x)\\).',
                    hint: 'For \\(x = 0\\), each \\(f_n(0) = 0\\). For \\(x \\neq 0\\), divide numerator and denominator by \\(n\\).',
                    solution: 'For \\(x = 0\\): \\(f_n(0) = 0\\) for all \\(n\\), so \\(f(0) = 0\\). For \\(x \\neq 0\\): \\(f_n(x) = \\frac{x}{1+nx^2} = \\frac{x/n}{1/n + x^2} \\to \\frac{0}{x^2} = 0\\). Thus \\(f(x) = 0\\) for all \\(x \\in \\mathbb{R}\\).'
                },
                {
                    question: 'For \\(f_n(x) = x^n\\) on \\([0,1]\\), given \\(\\varepsilon = 0.01\\) and \\(x = 0.99\\), find the smallest \\(N\\) such that \\(|f_n(x) - f(x)| < \\varepsilon\\) for all \\(n \\ge N\\).',
                    hint: 'We need \\(0.99^N < 0.01\\). Take logarithms: \\(N > \\frac{\\ln 0.01}{\\ln 0.99}\\).',
                    solution: '\\(N > \\frac{\\ln 0.01}{\\ln 0.99} = \\frac{-4.605}{-0.01005} \\approx 458.2\\). So \\(N = 459\\). Convergence near \\(x=1\\) is extremely slow!'
                },
                {
                    question: 'Let \\(h_n(x) = \\frac{nx}{1+n^2x^2}\\). Show that \\(h_n \\to 0\\) pointwise on \\(\\mathbb{R}\\) but \\(\\sup_{x \\in \\mathbb{R}} h_n(x) = \\frac{1}{2}\\) for all \\(n\\).',
                    hint: 'For the supremum, maximize \\(h_n\\) by calculus: set \\(h_n\'(x) = 0\\).',
                    solution: 'For fixed \\(x \\neq 0\\): \\(h_n(x) = \\frac{1}{1/(nx) + nx} \\to 0\\) since \\(nx \\to \\infty\\). For \\(x = 0\\): \\(h_n(0) = 0\\). So \\(h_n \\to 0\\) pointwise. Setting \\(h_n\'(x) = 0\\) gives \\(x = 1/n\\), and \\(h_n(1/n) = \\frac{n \\cdot 1/n}{1 + 1} = \\frac{1}{2}\\). The supremum never shrinks to 0.'
                },
                {
                    question: 'Does \\(f_n(x) = \\sin(nx)/n\\) converge pointwise on \\(\\mathbb{R}\\)? If so, is each \\(f_n\\) differentiable, and is the limit differentiable?',
                    hint: 'Use \\(|\\sin(nx)| \\le 1\\) and check what happens when you differentiate term-by-term.',
                    solution: '\\(|f_n(x)| = |\\sin(nx)/n| \\le 1/n \\to 0\\), so \\(f_n \\to 0\\) pointwise (in fact uniformly). Each \\(f_n\\) is differentiable with \\(f_n\'(x) = \\cos(nx)\\). But \\(f_n\'(x) = \\cos(nx)\\) does <strong>not</strong> converge for most \\(x\\). So the limit is differentiable (\\(f = 0\\)) but the derivatives do not converge. Pointwise convergence of functions does not imply convergence of derivatives.'
                },
                {
                    question: 'Prove: if \\(f_n \\to f\\) pointwise and \\(g_n \\to g\\) pointwise on \\(D\\), then \\(f_n + g_n \\to f + g\\) pointwise on \\(D\\).',
                    hint: 'Use the triangle inequality and the sum rule for limits of real sequences.',
                    solution: 'Fix \\(x \\in D\\) and \\(\\varepsilon > 0\\). Choose \\(N_1\\) with \\(|f_n(x) - f(x)| < \\varepsilon/2\\) for \\(n \\ge N_1\\) and \\(N_2\\) with \\(|g_n(x) - g(x)| < \\varepsilon/2\\) for \\(n \\ge N_2\\). Set \\(N = \\max(N_1, N_2)\\). Then for \\(n \\ge N\\): \\(|(f_n + g_n)(x) - (f+g)(x)| \\le |f_n(x) - f(x)| + |g_n(x) - g(x)| < \\varepsilon\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Uniform Convergence
        // ============================================================
        {
            id: 'ch08-sec02',
            title: 'Uniform Convergence and the Tube Test',
            content: `
                <h2>Uniform Convergence and the Tube Test</h2>

                <p>The weakness of pointwise convergence is that the "waiting time" \\(N\\) can vary wildly from point to point. Uniform convergence demands a <strong>single</strong> \\(N\\) that works for <em>all</em> points simultaneously.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.4 — Uniform Convergence</div>
                    <div class="env-body">
                        <p>We say \\(\\{f_n\\}\\) <strong>converges uniformly</strong> to \\(f\\) on \\(D\\) if for every \\(\\varepsilon > 0\\), there exists \\(N = N(\\varepsilon)\\) (independent of \\(x\\)) such that</p>
                        <p>\\[n \\ge N \\Rightarrow |f_n(x) - f(x)| < \\varepsilon \\quad \\text{for all } x \\in D.\\]</p>
                        <p>Equivalently, \\(\\sup_{x \\in D} |f_n(x) - f(x)| \\to 0\\) as \\(n \\to \\infty\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">The Telescope Metaphor — The \\(\\varepsilon\\)-Tube Test</div>
                    <div class="env-body">
                        <p>Instead of examining one point at a time with a microscope, step back and look at the <strong>whole graph</strong> through a telescope. Draw a "tube" of width \\(2\\varepsilon\\) around the limit function \\(f\\). Uniform convergence means that eventually the entire graph of \\(f_n\\) fits <strong>inside the tube</strong>. No part of the curve sticks out.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="uniform-tube-test"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.5 — Uniform Limit of Continuous Functions is Continuous</div>
                    <div class="env-body">
                        <p>If each \\(f_n\\) is continuous on \\(D\\) and \\(f_n \\to f\\) uniformly on \\(D\\), then \\(f\\) is continuous on \\(D\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p>Fix \\(a \\in D\\) and \\(\\varepsilon > 0\\). Use the "\\(\\varepsilon/3\\) trick":</p>
                        <p>\\[|f(x) - f(a)| \\le |f(x) - f_n(x)| + |f_n(x) - f_n(a)| + |f_n(a) - f(a)|.\\]</p>
                        <p>Choose \\(n\\) large enough so the first and third terms are each \\(< \\varepsilon/3\\) (uniformity makes this possible for all \\(x\\) at once). Then use continuity of \\(f_n\\) to make the middle term \\(< \\varepsilon/3\\) for \\(|x-a| < \\delta\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 8.6 — \\(f_n(x) = x^n\\) is NOT Uniformly Convergent on \\([0,1]\\)</div>
                    <div class="env-body">
                        <p>We saw that \\(f_n \\to f\\) pointwise where \\(f\\) is discontinuous. Since each \\(f_n\\) is continuous, Theorem 8.5 gives a quick proof by contradiction: if the convergence were uniform, the limit would have to be continuous. It isn't, so the convergence is not uniform.</p>
                        <p>Alternatively: \\(\\sup_{x \\in [0,1]} |x^n - f(x)| \\ge |f_n(x_n) - f(x_n)|\\) for \\(x_n = (1/2)^{1/n}\\), giving \\(\\sup \\ge 1/2\\) for all \\(n\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="uniform-vs-pointwise"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.7 — Interchanging Uniform Limits and Integrals</div>
                    <div class="env-body">
                        <p>If \\(f_n \\to f\\) uniformly on \\([a,b]\\) and each \\(f_n\\) is Riemann integrable, then</p>
                        <p>\\[\\lim_{n \\to \\infty} \\int_a^b f_n(x)\\, dx = \\int_a^b f(x)\\, dx.\\]</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Caution</div>
                    <div class="env-body">
                        <p>Under mere pointwise convergence, the limit of integrals need not equal the integral of the limit. Think of a sequence of tall, thin bumps with area 1 that converge pointwise to 0.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'uniform-tube-test',
                    title: 'The Epsilon-Tube Test',
                    description: 'Draw an epsilon-tube around the limit function. Does f_n fit entirely inside? Uniform convergence = the whole curve fits in the tube.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 440, scale: 55, originX: 70, originY: 280 });
                        var n = 1;
                        var epsilon = 0.3;

                        VizEngine.createSlider(controls, 'n', 1, 40, 1, 1, function(v) { n = Math.round(v); });
                        VizEngine.createSlider(controls, 'epsilon', 0.02, 1.0, 0.3, 0.02, function(v) { epsilon = v; });

                        // Example: f_n(x) = sin(x)/n converges uniformly to 0
                        function fn(x) { return Math.sin(3 * x) / n + Math.cos(x) / (n * n + 1); }
                        function limit(x) { return 0; }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            // Epsilon tube around limit (y=0)
                            viz.drawEpsilonBand(0, epsilon, viz.colors.green);

                            // Limit function
                            viz.drawFunction(limit, -1, 10, viz.colors.red, 2, 200);

                            // Current f_n
                            viz.drawFunction(fn, -1, 10, viz.colors.blue, 2.5, 400);

                            // Check if f_n fits in tube
                            var maxDev = 0;
                            for (var i = 0; i <= 500; i++) {
                                var x = -1 + 11 * i / 500;
                                var dev = Math.abs(fn(x) - limit(x));
                                if (dev > maxDev) maxDev = dev;
                            }
                            var fits = maxDev < epsilon;

                            ctx.fillStyle = fits ? viz.colors.green : viz.colors.red;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText(fits ? 'FITS in tube! (uniform convergence achieved)' : 'Does NOT fit in tube yet', 20, 15);

                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.fillText('f_' + n + '(x) = sin(3x)/' + n + ' + cos(x)/' + (n * n + 1), 20, 40);

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('sup|f_n - f| = ' + maxDev.toFixed(4) + '    epsilon = ' + epsilon.toFixed(2), 20, 62);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'uniform-vs-pointwise',
                    title: 'Uniform vs Pointwise: x^n on [0,1]',
                    description: 'Observe how x^n converges pointwise but not uniformly — the sup deviation stays at 1/2 regardless of n.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 440, scale: 300, originX: 60, originY: 390 });
                        var n = 2;
                        var epsilon = 0.3;

                        VizEngine.createSlider(controls, 'n', 1, 80, 2, 1, function(v) { n = Math.round(v); });
                        VizEngine.createSlider(controls, 'epsilon', 0.05, 0.9, 0.3, 0.05, function(v) { epsilon = v; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(0.25);
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            // Epsilon tube around the limit f=0 on [0,1)
                            viz.drawEpsilonBand(0, epsilon, viz.colors.green);

                            // Limit function: 0 on [0,1)
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([5, 3]);
                            var s0 = viz.toScreen(0, 0);
                            var s1 = viz.toScreen(1, 0);
                            ctx.beginPath();
                            ctx.moveTo(s0[0], s0[1]);
                            ctx.lineTo(s1[0], s1[1]);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            viz.drawPoint(1, 1, viz.colors.red, null, 4);

                            // f_n(x) = x^n
                            viz.drawFunction(function(x) {
                                if (x < 0 || x > 1.02) return NaN;
                                return Math.pow(x, n);
                            }, 0, 1, viz.colors.blue, 2.5, 500);

                            // sup deviation: find max of x^n on [0,1) vs 0
                            // max of x^n over [0,1) for the limit 0 is approached at x->1-
                            // Actually sup|x^n - 0| = sup x^n on [0,1) = 1 (in the limit)
                            // But on [0,1]: at x = (1/e)^{1/n}, x^n = 1/e? No...
                            // Actually x^n achieves values arbitrarily close to 1.
                            // The sup on [0,1) = 1 (limit). On [0,1] the sup = 1 (at x=1).
                            // A nice witness: x_n = (1/2)^{1/n}, f_n(x_n) = 1/2
                            var witness = Math.pow(0.5, 1.0 / n);
                            viz.drawPoint(witness, 0.5, viz.colors.orange, null, 6);

                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            var wp = viz.toScreen(witness, 0.5);
                            ctx.fillText('(' + witness.toFixed(3) + ')^' + n + ' = 0.5', wp[0] - 140, wp[1] - 5);

                            ctx.fillStyle = viz.colors.red;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillText('sup|x^n - 0| >= 1/2 for all n: NOT uniform', 80, 15);

                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.fillText('f_' + n + '(x) = x^' + n, 80, 38);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that \\(f_n(x) = \\frac{\\sin(nx)}{n}\\) converges uniformly to \\(0\\) on \\(\\mathbb{R}\\).',
                    hint: 'Compute \\(\\sup_{x \\in \\mathbb{R}} |f_n(x)|\\).',
                    solution: '\\(\\sup_{x} |\\sin(nx)/n| = 1/n \\to 0\\) as \\(n \\to \\infty\\). Since the supremum of the deviation tends to 0, the convergence is uniform.'
                },
                {
                    question: 'Show that \\(f_n(x) = \\frac{x^2}{x^2 + (1-nx)^2}\\) converges pointwise to 0 on \\([0,1]\\) but not uniformly.',
                    hint: 'Evaluate at \\(x = 1/n\\).',
                    solution: 'For \\(x \\neq 0\\), as \\(n \\to \\infty\\), \\((1-nx)^2 \\to \\infty\\) so \\(f_n(x) \\to 0\\). For \\(x=0\\), \\(f_n(0) = 0\\). So \\(f_n \\to 0\\) pointwise. But \\(f_n(1/n) = \\frac{1/n^2}{1/n^2 + 0} = 1\\), so \\(\\sup |f_n| \\ge 1\\) for all \\(n\\), and convergence is not uniform.'
                },
                {
                    question: 'Does \\(g_n(x) = x/n\\) converge uniformly on \\([0,1]\\)? On \\([0,\\infty)\\)?',
                    hint: 'Compute \\(\\sup|g_n(x)|\\) on each domain.',
                    solution: 'On \\([0,1]\\): \\(\\sup|x/n| = 1/n \\to 0\\). <strong>Yes</strong>, uniform convergence. On \\([0,\\infty)\\): \\(\\sup|x/n| = \\infty\\) for every \\(n\\). <strong>No</strong>, not even bounded, let alone uniformly convergent.'
                },
                {
                    question: 'Use the \\(\\varepsilon/3\\) argument to prove that the uniform limit of continuous functions is continuous (Theorem 8.5).',
                    hint: 'Given \\(\\varepsilon > 0\\), first pick \\(N\\) from uniform convergence, then \\(\\delta\\) from continuity of \\(f_N\\).',
                    solution: 'Fix \\(a \\in D\\), \\(\\varepsilon > 0\\). By uniform convergence, choose \\(N\\) so \\(|f_N(x) - f(x)| < \\varepsilon/3\\) for all \\(x\\). By continuity of \\(f_N\\) at \\(a\\), choose \\(\\delta > 0\\) so \\(|x-a|<\\delta \\Rightarrow |f_N(x) - f_N(a)| < \\varepsilon/3\\). Then \\(|f(x)-f(a)| \\le |f(x)-f_N(x)| + |f_N(x)-f_N(a)| + |f_N(a)-f(a)| < \\varepsilon/3 + \\varepsilon/3 + \\varepsilon/3 = \\varepsilon\\).'
                },
                {
                    question: 'Construct a sequence \\(\\{f_n\\}\\) on \\([0,1]\\) such that each \\(f_n\\) is continuous, \\(f_n \\to 0\\) pointwise, and \\(\\int_0^1 f_n = 1\\) for all \\(n\\). Why does this not contradict Theorem 8.7?',
                    hint: 'Use triangular bumps of height \\(n\\) and base \\(2/n\\), centered at 0.',
                    solution: 'Let \\(f_n(x) = n(1 - n|x|)\\) for \\(|x| \\le 1/n\\) and \\(f_n(x) = 0\\) otherwise (shifted to \\([0, 2/n]\\)). Each \\(f_n\\) is a triangle of height \\(n\\) and base \\(2/n\\), so \\(\\int f_n = 1\\). For each fixed \\(x > 0\\), eventually \\(2/n < x\\) so \\(f_n(x) = 0\\). Thus \\(f_n \\to 0\\) pointwise but \\(\\int f_n \\not\\to \\int 0 = 0\\). No contradiction: the convergence is <strong>not uniform</strong> (the sup is \\(n \\to \\infty\\)).'
                }
            ]
        },

        // ============================================================
        // SECTION 3: The Weierstrass M-Test
        // ============================================================
        {
            id: 'ch08-sec03',
            title: 'Series of Functions and the Weierstrass M-Test',
            content: `
                <h2>Series of Functions and the Weierstrass M-Test</h2>

                <p>Just as we built series from sequences of numbers, we can form <strong>series of functions</strong>:</p>
                <p>\\[\\sum_{k=1}^{\\infty} g_k(x) = \\lim_{n \\to \\infty} \\underbrace{\\sum_{k=1}^{n} g_k(x)}_{S_n(x)}.\\]</p>

                <p>The partial sums \\(S_n\\) form a sequence of functions, so all our convergence notions apply. But how do we <em>prove</em> uniform convergence of a series? Enter the Weierstrass M-test — the analyst's Swiss army knife.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.8 — Weierstrass M-Test</div>
                    <div class="env-body">
                        <p>Let \\(\\{g_k\\}\\) be functions on \\(D\\). Suppose there exist constants \\(M_k \\ge 0\\) such that</p>
                        <p>\\[|g_k(x)| \\le M_k \\quad \\text{for all } x \\in D, \\quad \\text{and} \\quad \\sum_{k=1}^{\\infty} M_k < \\infty.\\]</p>
                        <p>Then \\(\\sum g_k\\) converges uniformly (and absolutely) on \\(D\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p>For the tail: \\(|S(x) - S_n(x)| = \\left|\\sum_{k=n+1}^\\infty g_k(x)\\right| \\le \\sum_{k=n+1}^\\infty |g_k(x)| \\le \\sum_{k=n+1}^\\infty M_k\\). Since \\(\\sum M_k\\) converges, this tail can be made \\(< \\varepsilon\\) for \\(n \\ge N\\) — and \\(N\\) depends only on \\(\\varepsilon\\), not on \\(x\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Why "M-Test"?</div>
                    <div class="env-body">
                        <p>The idea is beautifully simple: if you can trap each function \\(g_k\\) inside a "box" of height \\(M_k\\), and the total height of all boxes is finite, then the series must converge uniformly. You are <strong>bounding the wild function behavior with tame constants</strong>.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="weierstrass-m-test"></div>

                <div class="env-block example">
                    <div class="env-title">Example 8.9 — \\(\\sum \\frac{\\sin(kx)}{k^2}\\)</div>
                    <div class="env-body">
                        <p>Take \\(g_k(x) = \\frac{\\sin(kx)}{k^2}\\). Then \\(|g_k(x)| \\le \\frac{1}{k^2} = M_k\\) and \\(\\sum \\frac{1}{k^2} = \\frac{\\pi^2}{6} < \\infty\\). By the M-test, the series converges uniformly on all of \\(\\mathbb{R}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 8.10 — \\(\\sum \\frac{x^k}{k!}\\) on \\([-R, R]\\)</div>
                    <div class="env-body">
                        <p>On \\([-R, R]\\): \\(\\left|\\frac{x^k}{k!}\\right| \\le \\frac{R^k}{k!} = M_k\\) and \\(\\sum \\frac{R^k}{k!} = e^R < \\infty\\). By the M-test, \\(\\sum x^k/k!\\) (which equals \\(e^x\\)) converges uniformly on every bounded interval.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="series-partial-sums"></div>

                <div class="env-block warning">
                    <div class="env-title">Limitation of the M-Test</div>
                    <div class="env-body">
                        <p>The M-test is sufficient but not necessary. A series can converge uniformly even if no bounding constants \\(M_k\\) with \\(\\sum M_k < \\infty\\) exist. It also requires absolute convergence, so conditionally convergent function series need other tools (like the Dirichlet test).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'weierstrass-m-test',
                    title: 'Weierstrass M-Test Visualized',
                    description: 'Each term g_k(x) = sin(kx)/k^p is bounded by M_k = 1/k^p. Adjust p to see when the M-test applies.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 440, scale: 55, originX: 70, originY: 250 });
                        var p = 2.0;
                        var showK = 5;

                        VizEngine.createSlider(controls, 'p (exponent)', 0.5, 3.0, 2.0, 0.1, function(v) { p = v; });
                        VizEngine.createSlider(controls, 'Show term k', 1, 20, 5, 1, function(v) { showK = Math.round(v); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            var k = showK;
                            var Mk = 1.0 / Math.pow(k, p);

                            // Draw the M_k band
                            viz.drawEpsilonBand(0, Mk, viz.colors.orange);

                            // Draw g_k(x) = sin(kx)/k^p
                            viz.drawFunction(function(x) {
                                return Math.sin(k * x) / Math.pow(k, p);
                            }, -1, 10, viz.colors.blue, 2.5, 500);

                            // Labels
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('g_' + k + '(x) = sin(' + k + 'x) / ' + k + '^' + p.toFixed(1), 20, 15);

                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('M_' + k + ' = 1/' + k + '^' + p.toFixed(1) + ' = ' + Mk.toFixed(4), 20, 38);

                            // Compute partial sum of M_k
                            var partialM = 0;
                            for (var j = 1; j <= 200; j++) {
                                partialM += 1.0 / Math.pow(j, p);
                            }
                            var converges = p > 1;

                            ctx.fillStyle = converges ? viz.colors.green : viz.colors.red;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.fillText('sum M_k = sum 1/k^' + p.toFixed(1) + (converges ? ' CONVERGES (approx ' + partialM.toFixed(3) + ')' : ' DIVERGES — M-test fails!'), 20, 60);

                            // Draw bar chart of M_k values on the right
                            var barX = viz.width - 180;
                            var barW = 8;
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('M_k values', barX + 60, viz.height - 15);

                            for (var j = 1; j <= 15; j++) {
                                var mjVal = 1.0 / Math.pow(j, p);
                                var barH = mjVal * 100;
                                if (barH > viz.height - 40) barH = viz.height - 40;
                                var bx = barX + (j - 1) * 10;
                                ctx.fillStyle = (j === k) ? viz.colors.orange : viz.colors.purple + '66';
                                ctx.fillRect(bx, viz.height - 30 - barH, barW, barH);
                            }
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'series-partial-sums',
                    title: 'Partial Sums of Function Series',
                    description: 'Watch how partial sums S_n(x) = sum_{k=1}^n sin(kx)/k^2 build up toward the infinite series.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 440, scale: 55, originX: 70, originY: 250 });
                        var nTerms = 1;

                        VizEngine.createSlider(controls, 'Terms n', 1, 50, 1, 1, function(v) { nTerms = Math.round(v); });

                        function partialSum(x, N) {
                            var s = 0;
                            for (var k = 1; k <= N; k++) {
                                s += Math.sin(k * x) / (k * k);
                            }
                            return s;
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            // Draw "converged" series (N=200 as proxy)
                            viz.drawFunction(function(x) { return partialSum(x, 200); }, -1, 10, viz.colors.red + '55', 1.5, 400);

                            // Draw ghost partial sums
                            var ghosts = [1, 3, 5, 10, 20];
                            for (var i = 0; i < ghosts.length; i++) {
                                if (ghosts[i] === nTerms || ghosts[i] > nTerms) continue;
                                var gn = ghosts[i];
                                viz.drawFunction(function(x) { return partialSum(x, gn); }, -1, 10, viz.colors.blue + '18', 1, 300);
                            }

                            // Current partial sum
                            viz.drawFunction(function(x) { return partialSum(x, nTerms); }, -1, 10, viz.colors.blue, 2.5, 400);

                            // Compute sup deviation
                            var maxDev = 0;
                            for (var i = 0; i <= 400; i++) {
                                var x = -1 + 11 * i / 400;
                                var dev = Math.abs(partialSum(x, nTerms) - partialSum(x, 200));
                                if (dev > maxDev) maxDev = dev;
                            }

                            // Tail bound from M-test: sum_{k=n+1}^inf 1/k^2
                            var tailBound = 0;
                            for (var k = nTerms + 1; k <= 1000; k++) {
                                tailBound += 1.0 / (k * k);
                            }

                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('S_' + nTerms + '(x) = sum_{k=1}^{' + nTerms + '} sin(kx)/k^2', 20, 15);

                            ctx.fillStyle = viz.colors.red;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('Full series (N=200 proxy) in red', 20, 38);

                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Actual sup deviation: ' + maxDev.toFixed(5), 20, 58);
                            ctx.fillText('M-test tail bound: ' + tailBound.toFixed(5), 20, 76);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Use the Weierstrass M-test to show \\(\\sum_{k=1}^{\\infty} \\frac{\\cos(kx)}{2^k}\\) converges uniformly on \\(\\mathbb{R}\\).',
                    hint: 'What is \\(\\sup_x |\\cos(kx)/2^k|\\)?',
                    solution: '\\(|\\cos(kx)/2^k| \\le 1/2^k = M_k\\). Since \\(\\sum 1/2^k = 1 < \\infty\\), the M-test gives uniform convergence on \\(\\mathbb{R}\\).'
                },
                {
                    question: 'Does the M-test apply to \\(\\sum_{k=1}^{\\infty} \\frac{(-1)^k}{k}\\sin(kx)\\) on \\(\\mathbb{R}\\)?',
                    hint: 'The natural bound is \\(M_k = 1/k\\). Does \\(\\sum 1/k\\) converge?',
                    solution: 'The best pointwise bound is \\(|(-1)^k \\sin(kx)/k| \\le 1/k\\), and \\(\\sum 1/k = \\infty\\). So the M-test does <strong>not apply</strong>. (The series actually does converge pointwise by the Dirichlet test, but the M-test cannot confirm uniform convergence.)'
                },
                {
                    question: 'Show that \\(\\sum_{k=0}^{\\infty} \\frac{x^k}{k!}\\) converges uniformly on \\([-5, 5]\\) using the M-test.',
                    hint: 'On \\([-5,5]\\), \\(|x^k/k!| \\le 5^k/k!\\).',
                    solution: '\\(M_k = 5^k / k!\\) and \\(\\sum 5^k/k! = e^5 \\approx 148.4 < \\infty\\). The M-test gives uniform convergence on \\([-5,5]\\).'
                },
                {
                    question: 'Let \\(g_k(x) = \\frac{x^2}{(1+x^2)^k}\\) for \\(x \\in \\mathbb{R}\\). Find \\(M_k = \\sup_x |g_k(x)|\\) and determine if \\(\\sum g_k\\) converges uniformly.',
                    hint: 'Substitute \\(t = 1/(1+x^2)\\) so \\(g_k = (1-t) \\cdot t^{k-1}\\). Maximize over \\(t \\in (0,1]\\).',
                    solution: 'Write \\(g_k(x) = \\frac{x^2}{(1+x^2)^k} = \\frac{1}{(1+x^2)^{k-1}} - \\frac{1}{(1+x^2)^k}\\). With \\(u = 1+x^2 \\ge 1\\), we get \\(g_k = u^{-k+1} - u^{-k}\\). Taking derivative and setting to 0: max at \\(u = k/(k-1)\\) for \\(k \\ge 2\\), giving \\(M_k = \\frac{(k-1)^{k-1}}{k^k} \\sim \\frac{1}{ek}\\) for large \\(k\\). Since \\(\\sum 1/k\\) diverges, the M-test fails. However, the series is actually a telescoping sum converging to \\(1\\) pointwise (for \\(x \\neq 0\\)).'
                },
                {
                    question: 'If \\(\\sum g_k\\) converges uniformly on \\(D\\) by the M-test, and each \\(g_k\\) is continuous on \\(D\\), what can you conclude about \\(\\sum g_k\\)?',
                    hint: 'Combine the M-test result with Theorem 8.5.',
                    solution: 'The partial sums \\(S_n = \\sum_{k=1}^n g_k\\) are continuous (finite sums of continuous functions). Since \\(S_n \\to S\\) uniformly (M-test), Theorem 8.5 tells us \\(S = \\sum g_k\\) is continuous on \\(D\\). Moreover, by Theorem 8.7, \\(\\int_a^b \\sum g_k = \\sum \\int_a^b g_k\\) on any \\([a,b] \\subset D\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Power Series
        // ============================================================
        {
            id: 'ch08-sec04',
            title: 'Power Series and Radius of Convergence',
            content: `
                <h2>Power Series and Radius of Convergence</h2>

                <p>A <strong>power series</strong> centered at \\(c\\) is a series of the form</p>
                <p>\\[\\sum_{k=0}^{\\infty} a_k (x - c)^k = a_0 + a_1(x-c) + a_2(x-c)^2 + \\cdots\\]</p>

                <p>Power series are the most important class of function series in analysis. They give us a concrete way to represent functions as "infinite polynomials."</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.11 — Radius of Convergence</div>
                    <div class="env-body">
                        <p>For any power series \\(\\sum a_k (x-c)^k\\), there exists a number \\(R \\in [0, \\infty]\\) (the <strong>radius of convergence</strong>) such that:</p>
                        <ul>
                            <li>The series converges absolutely for \\(|x - c| < R\\).</li>
                            <li>The series diverges for \\(|x - c| > R\\).</li>
                            <li>At \\(|x-c| = R\\), anything can happen.</li>
                        </ul>
                        <p>The radius is given by \\(1/R = \\limsup_{k\\to\\infty} |a_k|^{1/k}\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">The Convergence Disk</div>
                    <div class="env-body">
                        <p>Think of \\(R\\) as defining a "safe zone" around \\(c\\). Inside the interval \\((c-R, c+R)\\), the series converges nicely. Outside, it blows up. On the boundary, you must investigate case by case.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="power-series-radius"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.12 — Uniform Convergence on Compact Subsets</div>
                    <div class="env-body">
                        <p>A power series \\(\\sum a_k(x-c)^k\\) with radius \\(R > 0\\) converges uniformly on every compact subset of \\((c-R, c+R)\\). In particular, on any \\([c-r, c+r]\\) with \\(0 < r < R\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>On \\([c-r, c+r]\\) with \\(r < R\\): \\(|a_k(x-c)^k| \\le |a_k| r^k = M_k\\). Since \\(r < R\\), the series \\(\\sum |a_k| r^k\\) converges (absolute convergence inside the radius). Apply the Weierstrass M-test. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 8.13 — Key Power Series</div>
                    <div class="env-body">
                        <ul>
                            <li>\\(\\sum_{k=0}^{\\infty} x^k = \\frac{1}{1-x}\\), radius \\(R = 1\\).</li>
                            <li>\\(\\sum_{k=0}^{\\infty} \\frac{x^k}{k!} = e^x\\), radius \\(R = \\infty\\).</li>
                            <li>\\(\\sum_{k=1}^{\\infty} \\frac{x^k}{k} = -\\ln(1-x)\\), radius \\(R = 1\\). Diverges at \\(x = 1\\)? No — it converges at \\(x = -1\\) (alternating harmonic) but diverges at \\(x = 1\\) (harmonic).</li>
                            <li>\\(\\sum_{k=0}^{\\infty} \\frac{(-1)^k x^{2k+1}}{(2k+1)!} = \\sin(x)\\), radius \\(R = \\infty\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.14 — Term-by-Term Differentiation and Integration</div>
                    <div class="env-body">
                        <p>Within the radius of convergence, a power series can be differentiated and integrated term by term:</p>
                        <p>\\[\\left(\\sum a_k x^k\\right)' = \\sum k a_k x^{k-1}, \\qquad \\int \\sum a_k x^k\\, dx = \\sum \\frac{a_k x^{k+1}}{k+1} + C.\\]</p>
                        <p>Both derived series have the same radius of convergence \\(R\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="power-series-derivative"></div>
            `,
            visualizations: [
                {
                    id: 'power-series-radius',
                    title: 'Power Series Convergence Regions',
                    description: 'Explore the geometric series sum x^k and watch convergence/divergence as x varies. The radius of convergence is R=1.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 440, scale: 100, originX: 350, originY: 300 });
                        var nTerms = 5;
                        var xProbe = 0.5;

                        VizEngine.createSlider(controls, 'Terms n', 1, 40, 5, 1, function(v) { nTerms = Math.round(v); });
                        VizEngine.createSlider(controls, 'Probe x', -1.5, 1.5, 0.5, 0.01, function(v) { xProbe = v; });

                        function partialSum(x, N) {
                            var s = 0;
                            for (var k = 0; k <= N; k++) {
                                s += Math.pow(x, k);
                            }
                            return s;
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(0.5);
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            // Radius of convergence shading
                            var sL = viz.toScreen(-1, 0);
                            var sR = viz.toScreen(1, 0);
                            ctx.fillStyle = viz.colors.green + '11';
                            ctx.fillRect(sL[0], 0, sR[0] - sL[0], viz.height);
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath(); ctx.moveTo(sL[0], 0); ctx.lineTo(sL[0], viz.height); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(sR[0], 0); ctx.lineTo(sR[0], viz.height); ctx.stroke();
                            ctx.setLineDash([]);

                            // True function 1/(1-x)
                            viz.drawFunction(function(x) {
                                if (Math.abs(x - 1) < 0.01) return NaN;
                                return 1 / (1 - x);
                            }, -1.5, 0.99, viz.colors.red, 2, 300);

                            // Partial sum
                            viz.drawFunction(function(x) {
                                return partialSum(x, nTerms);
                            }, -1.5, 1.5, viz.colors.blue, 2.5, 400);

                            // Probe point
                            var probeY = partialSum(xProbe, nTerms);
                            var trueY = Math.abs(xProbe - 1) > 0.01 ? 1 / (1 - xProbe) : NaN;
                            if (isFinite(probeY) && Math.abs(probeY) < 10) {
                                viz.drawPoint(xProbe, probeY, viz.colors.orange, null, 6);
                            }

                            var inRadius = Math.abs(xProbe) < 1;

                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('S_' + nTerms + '(x) = 1 + x + x^2 + ... + x^' + nTerms, 20, 15);

                            ctx.fillStyle = viz.colors.red;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('1/(1-x) (true function)', 20, 38);

                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('R = 1 (convergence region shaded)', 20, 56);

                            ctx.fillStyle = inRadius ? viz.colors.green : viz.colors.red;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            var status = inRadius ? 'CONVERGES' : 'DIVERGES';
                            ctx.fillText('At x = ' + xProbe.toFixed(2) + ': ' + status, 20, 78);
                            if (isFinite(probeY) && isFinite(trueY)) {
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText('S_' + nTerms + ' = ' + probeY.toFixed(4) + ',  1/(1-x) = ' + trueY.toFixed(4) + ',  error = ' + Math.abs(probeY - trueY).toFixed(6), 20, 96);
                            }
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'power-series-derivative',
                    title: 'Term-by-Term Differentiation of Power Series',
                    description: 'See how differentiating a power series term-by-term gives the derivative of the sum. Example: d/dx[sum x^k/k!] = sum x^{k-1}/(k-1)! = e^x.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 440, scale: 40, originX: 250, originY: 340 });
                        var nTerms = 3;
                        var showDeriv = false;

                        VizEngine.createSlider(controls, 'Terms n', 1, 20, 3, 1, function(v) { nTerms = Math.round(v); });
                        VizEngine.createButton(controls, 'Toggle Derivative', function() { showDeriv = !showDeriv; });

                        function expPartial(x, N) {
                            var s = 0;
                            var term = 1;
                            for (var k = 0; k <= N; k++) {
                                s += term;
                                term *= x / (k + 1);
                            }
                            return s;
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            // True e^x
                            viz.drawFunction(Math.exp, -6, 5, viz.colors.red, 2, 400);

                            if (showDeriv) {
                                // Derivative partial sum (same as exp partial sum with n-1 terms)
                                viz.drawFunction(function(x) {
                                    return expPartial(x, nTerms - 1);
                                }, -6, 5, viz.colors.teal, 2.5, 400);

                                ctx.fillStyle = viz.colors.teal;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.textBaseline = 'top';
                                ctx.fillText("S'" + nTerms + '(x) = derivative of partial sum', 20, 15);
                            } else {
                                // Partial sum of e^x
                                viz.drawFunction(function(x) {
                                    return expPartial(x, nTerms);
                                }, -6, 5, viz.colors.blue, 2.5, 400);

                                ctx.fillStyle = viz.colors.blue;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.textBaseline = 'top';
                                ctx.fillText('S_' + nTerms + '(x) = 1 + x + x^2/2! + ... + x^' + nTerms + '/' + nTerms + '!', 20, 15);
                            }

                            ctx.fillStyle = viz.colors.red;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('e^x (both the function and its derivative!)', 20, 38);

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText(showDeriv ? 'Showing: term-by-term derivative' : 'Showing: partial sum', 20, 58);
                            ctx.fillText('Notice: differentiating e^x series gives the same series!', 20, 76);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Find the radius of convergence of \\(\\sum_{k=0}^{\\infty} \\frac{k!}{k^k} x^k\\).',
                    hint: 'Use the root test: \\(\\limsup |a_k|^{1/k}\\) where \\(a_k = k!/k^k\\). By Stirling, \\(k! \\sim \\sqrt{2\\pi k}\\, (k/e)^k\\).',
                    solution: '\\(|a_k|^{1/k} = (k!/k^k)^{1/k} \\to 1/e\\) by Stirling. So \\(1/R = 1/e\\) and \\(R = e\\).'
                },
                {
                    question: 'Find the radius of convergence of \\(\\sum_{k=1}^{\\infty} \\frac{(-1)^{k+1}}{k} x^k\\). At which endpoints does the series converge?',
                    hint: 'Use the ratio test: \\(|a_{k+1}/a_k| = k/(k+1) \\to 1\\). Then check \\(x = \\pm 1\\).',
                    solution: '\\(R = 1\\). At \\(x = 1\\): \\(\\sum (-1)^{k+1}/k\\) converges (alternating harmonic). At \\(x = -1\\): \\(\\sum (-1)^{k+1}(-1)^k/k = -\\sum 1/k\\) diverges. The interval of convergence is \\((-1, 1]\\).'
                },
                {
                    question: 'Prove that the derived series \\(\\sum k a_k x^{k-1}\\) has the same radius of convergence as \\(\\sum a_k x^k\\).',
                    hint: 'Show \\(\\limsup |ka_k|^{1/k} = \\limsup |a_k|^{1/k}\\) since \\(k^{1/k} \\to 1\\).',
                    solution: '\\(|ka_k|^{1/k} = k^{1/k} \\cdot |a_k|^{1/k}\\). Since \\(k^{1/k} \\to 1\\), we get \\(\\limsup |ka_k|^{1/k} = 1 \\cdot \\limsup |a_k|^{1/k}\\). Thus \\(1/R\' = 1/R\\), so \\(R\' = R\\).'
                },
                {
                    question: 'Using term-by-term integration, derive \\(-\\ln(1-x) = \\sum_{k=1}^{\\infty} \\frac{x^k}{k}\\) from the geometric series.',
                    hint: 'Start with \\(\\frac{1}{1-x} = \\sum x^k\\) and integrate both sides from 0 to \\(t\\).',
                    solution: 'Integrate \\(\\sum_{k=0}^\\infty x^k = 1/(1-x)\\) from \\(0\\) to \\(t\\) (for \\(|t|<1\\)): \\(\\int_0^t \\frac{1}{1-x}dx = -\\ln(1-t)\\). Term-by-term: \\(\\int_0^t \\sum x^k dx = \\sum \\frac{t^{k+1}}{k+1} = \\sum_{k=1}^\\infty \\frac{t^k}{k}\\). Justified since geometric series converges uniformly on \\([0,t]\\) for \\(|t|<1\\).'
                },
                {
                    question: 'Show that \\(f(x) = \\sum_{k=0}^{\\infty} x^k / k!\\) satisfies \\(f\'(x) = f(x)\\) using term-by-term differentiation.',
                    hint: 'Differentiate each term and re-index.',
                    solution: '\\(f\'(x) = \\sum_{k=1}^\\infty \\frac{k x^{k-1}}{k!} = \\sum_{k=1}^\\infty \\frac{x^{k-1}}{(k-1)!}\\). Let \\(j = k-1\\): \\(f\'(x) = \\sum_{j=0}^\\infty \\frac{x^j}{j!} = f(x)\\). Combined with \\(f(0) = 1\\), this uniquely characterizes \\(f(x) = e^x\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Taylor Series
        // ============================================================
        {
            id: 'ch08-sec05',
            title: 'Taylor Series and Analytic Functions',
            content: `
                <h2>Taylor Series and Analytic Functions</h2>

                <p>Given a function \\(f\\) that is infinitely differentiable at \\(c\\), we can write down its <strong>Taylor series</strong>:</p>
                <p>\\[\\sum_{k=0}^{\\infty} \\frac{f^{(k)}(c)}{k!}(x-c)^k = f(c) + f'(c)(x-c) + \\frac{f''(c)}{2!}(x-c)^2 + \\cdots\\]</p>

                <p>The big question: does this series <strong>converge back to \\(f(x)\\)</strong>?</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.15 — Analytic Functions</div>
                    <div class="env-body">
                        <p>A function \\(f\\) is <strong>analytic</strong> (or <strong>real-analytic</strong>) at \\(c\\) if its Taylor series converges to \\(f(x)\\) in some neighborhood of \\(c\\). It is analytic on an open set \\(U\\) if it is analytic at every point of \\(U\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.16 — Taylor's Theorem with Remainder</div>
                    <div class="env-body">
                        <p>If \\(f\\) has \\(n+1\\) continuous derivatives on an interval containing \\(c\\) and \\(x\\), then</p>
                        <p>\\[f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(c)}{k!}(x-c)^k + R_n(x)\\]</p>
                        <p>where the <strong>Lagrange remainder</strong> is \\(R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-c)^{n+1}\\) for some \\(\\xi\\) between \\(c\\) and \\(x\\).</p>
                        <p>The Taylor series converges to \\(f\\) if and only if \\(R_n(x) \\to 0\\) as \\(n \\to \\infty\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="taylor-approx"></div>

                <div class="env-block example">
                    <div class="env-title">Example 8.17 — Taylor Series of Common Functions</div>
                    <div class="env-body">
                        <ul>
                            <li>\\(e^x = \\sum_{k=0}^{\\infty} \\frac{x^k}{k!}\\), converges for all \\(x \\in \\mathbb{R}\\).</li>
                            <li>\\(\\sin x = \\sum_{k=0}^{\\infty} \\frac{(-1)^k x^{2k+1}}{(2k+1)!}\\), converges for all \\(x\\).</li>
                            <li>\\(\\cos x = \\sum_{k=0}^{\\infty} \\frac{(-1)^k x^{2k}}{(2k)!}\\), converges for all \\(x\\).</li>
                            <li>\\(\\ln(1+x) = \\sum_{k=1}^{\\infty} \\frac{(-1)^{k+1} x^k}{k}\\), converges for \\(x \\in (-1, 1]\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Not Every Smooth Function is Analytic!</div>
                    <div class="env-body">
                        <p>Consider \\(f(x) = e^{-1/x^2}\\) for \\(x \\neq 0\\) and \\(f(0) = 0\\). This function is infinitely differentiable and \\(f^{(k)}(0) = 0\\) for all \\(k\\). Its Taylor series at 0 is the zero series \\(\\sum 0 \\cdot x^k = 0\\), but \\(f(x) > 0\\) for \\(x \\neq 0\\). The Taylor series converges, but not to \\(f\\)!</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="taylor-remainder"></div>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 8.18 — Sufficient Condition for Analyticity</div>
                    <div class="env-body">
                        <p>If there exists \\(M > 0\\) and \\(r > 0\\) such that \\(|f^{(k)}(x)| \\le M \\cdot k! / r^k\\) for all \\(k\\) and all \\(x\\) in a neighborhood of \\(c\\), then \\(f\\) is analytic at \\(c\\). In particular, if the derivatives are uniformly bounded (\\(|f^{(k)}| \\le M^k\\) for some \\(M\\)), then \\(f\\) is analytic.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">The Bigger Picture</div>
                    <div class="env-body">
                        <p>Taylor series connect all the major themes of this course: sequences, series, continuity, differentiability, and integrability. A power series is the ultimate "nice" function — infinitely differentiable, integrable term by term, and completely determined by its coefficients. The theory of uniform convergence provides the rigorous foundation that makes these manipulations valid.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'taylor-approx',
                    title: 'Taylor Polynomial Approximations',
                    description: 'Choose a function and watch its Taylor polynomials converge as you add more terms.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 440, scale: 50, originX: 300, originY: 280 });
                        var nTerms = 1;
                        var funcChoice = 0;

                        var functions = [
                            {
                                name: 'sin(x)',
                                f: Math.sin,
                                taylor: function(x, N) {
                                    var s = 0;
                                    for (var k = 0; k <= N; k++) {
                                        var sign = (k % 2 === 0) ? 1 : -1;
                                        var power = 2 * k + 1;
                                        var fac = 1;
                                        for (var j = 2; j <= power; j++) fac *= j;
                                        s += sign * Math.pow(x, power) / fac;
                                    }
                                    return s;
                                }
                            },
                            {
                                name: 'cos(x)',
                                f: Math.cos,
                                taylor: function(x, N) {
                                    var s = 0;
                                    for (var k = 0; k <= N; k++) {
                                        var sign = (k % 2 === 0) ? 1 : -1;
                                        var power = 2 * k;
                                        var fac = 1;
                                        for (var j = 2; j <= power; j++) fac *= j;
                                        s += sign * Math.pow(x, power) / fac;
                                    }
                                    return s;
                                }
                            },
                            {
                                name: 'e^x',
                                f: Math.exp,
                                taylor: function(x, N) {
                                    var s = 0;
                                    var term = 1;
                                    for (var k = 0; k <= N; k++) {
                                        s += term;
                                        term *= x / (k + 1);
                                    }
                                    return s;
                                }
                            },
                            {
                                name: 'ln(1+x)',
                                f: function(x) { return Math.log(1 + x); },
                                taylor: function(x, N) {
                                    var s = 0;
                                    for (var k = 1; k <= N; k++) {
                                        s += Math.pow(-1, k + 1) * Math.pow(x, k) / k;
                                    }
                                    return s;
                                }
                            }
                        ];

                        VizEngine.createSlider(controls, 'Degree', 1, 25, 1, 1, function(v) { nTerms = Math.round(v); });
                        VizEngine.createButton(controls, 'sin(x)', function() { funcChoice = 0; });
                        VizEngine.createButton(controls, 'cos(x)', function() { funcChoice = 1; });
                        VizEngine.createButton(controls, 'e^x', function() { funcChoice = 2; });
                        VizEngine.createButton(controls, 'ln(1+x)', function() { funcChoice = 3; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            var fc = functions[funcChoice];
                            var xMin = -6, xMax = 6;
                            if (funcChoice === 3) { xMin = -0.99; xMax = 3; }

                            // True function
                            viz.drawFunction(fc.f, xMin, xMax, viz.colors.red, 2, 500);

                            // Taylor approximation
                            viz.drawFunction(function(x) {
                                var v = fc.taylor(x, nTerms);
                                if (Math.abs(v) > 20) return NaN;
                                return v;
                            }, xMin, xMax, viz.colors.blue, 2.5, 500);

                            // Ghost lower-order polynomials
                            var ghosts = [];
                            for (var g = 1; g < nTerms; g += Math.max(1, Math.floor(nTerms / 4))) {
                                ghosts.push(g);
                            }
                            for (var i = 0; i < ghosts.length; i++) {
                                var gn = ghosts[i];
                                viz.drawFunction(function(x) {
                                    var v = fc.taylor(x, gn);
                                    if (Math.abs(v) > 20) return NaN;
                                    return v;
                                }, xMin, xMax, viz.colors.purple + '25', 1, 300);
                            }

                            ctx.fillStyle = viz.colors.red;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText(fc.name, 20, 15);

                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.fillText('Taylor polynomial of degree ' + nTerms, 20, 38);

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('Higher degree = better approximation near x = 0', 20, 58);

                            if (funcChoice === 3) {
                                // Show radius of convergence
                                var sL = viz.toScreen(-1, 0);
                                var sR = viz.toScreen(1, 0);
                                ctx.fillStyle = viz.colors.green + '11';
                                ctx.fillRect(sL[0], 0, sR[0] - sL[0], viz.height);
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('R = 1', (sL[0] + sR[0]) / 2, viz.height - 20);
                            }
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'taylor-remainder',
                    title: 'Taylor Remainder Visualization',
                    description: 'See how the remainder R_n(x) = f(x) - T_n(x) shrinks as n grows, especially near the center.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 440, scale: 50, originX: 300, originY: 220 });
                        var nTerms = 2;

                        VizEngine.createSlider(controls, 'Degree n', 1, 20, 2, 1, function(v) { nTerms = Math.round(v); });

                        function sinTaylor(x, N) {
                            var s = 0;
                            for (var k = 0; k <= N; k++) {
                                var sign = (k % 2 === 0) ? 1 : -1;
                                var power = 2 * k + 1;
                                var fac = 1;
                                for (var j = 2; j <= power; j++) fac *= j;
                                s += sign * Math.pow(x, power) / fac;
                            }
                            return s;
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            var xMin = -6, xMax = 6;

                            // Top half: sin(x) vs Taylor
                            viz.drawFunction(Math.sin, xMin, xMax, viz.colors.red, 2, 500);
                            viz.drawFunction(function(x) {
                                var v = sinTaylor(x, nTerms);
                                return Math.abs(v) > 15 ? NaN : v;
                            }, xMin, xMax, viz.colors.blue, 2.5, 500);

                            // Shade the error region
                            viz.shadeBetween(
                                Math.sin,
                                function(x) {
                                    var v = sinTaylor(x, nTerms);
                                    return Math.abs(v) > 15 ? Math.sin(x) : v;
                                },
                                xMin, xMax, viz.colors.orange + '33', 300
                            );

                            // Compute max error on [-pi, pi]
                            var maxErr = 0;
                            for (var i = 0; i <= 200; i++) {
                                var x = -Math.PI + 2 * Math.PI * i / 200;
                                var err = Math.abs(Math.sin(x) - sinTaylor(x, nTerms));
                                if (err > maxErr) maxErr = err;
                            }

                            // Theoretical bound: |x|^{2n+3}/(2n+3)! on [-pi,pi]
                            var power = 2 * nTerms + 3;
                            var fac = 1;
                            for (var j = 2; j <= power; j++) fac *= j;
                            var theoBound = Math.pow(Math.PI, power) / fac;

                            ctx.fillStyle = viz.colors.red;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('sin(x) vs Taylor degree ' + (2 * nTerms + 1), 20, 15);

                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('Shaded: error region |sin(x) - T_n(x)|', 20, 38);

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('Max error on [-pi,pi]: ' + maxErr.toExponential(3), 20, 58);
                            ctx.fillText('Lagrange bound: pi^' + power + '/' + power + '! = ' + theoBound.toExponential(3), 20, 76);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute the Taylor series of \\(f(x) = \\frac{1}{1+x^2}\\) centered at \\(c = 0\\). What is its radius of convergence?',
                    hint: 'Write \\(1/(1+x^2) = 1/(1-(-x^2))\\) and use the geometric series formula.',
                    solution: '\\(\\frac{1}{1+x^2} = \\sum_{k=0}^\\infty (-x^2)^k = \\sum_{k=0}^\\infty (-1)^k x^{2k}\\). The geometric series converges when \\(|{-x^2}| < 1\\), i.e., \\(|x| < 1\\). So \\(R = 1\\). (The radius is 1 because \\(f\\) has singularities at \\(x = \\pm i\\) in the complex plane, at distance 1 from the origin.)'
                },
                {
                    question: 'Use the Lagrange remainder to show that the Taylor series of \\(e^x\\) converges to \\(e^x\\) for all \\(x\\).',
                    hint: '\\(|R_n(x)| = \\frac{e^{|\\xi|}}{(n+1)!} |x|^{n+1} \\le \\frac{e^{|x|}|x|^{n+1}}{(n+1)!}\\).',
                    solution: 'Since \\(f^{(k)}(x) = e^x\\), the remainder is \\(|R_n(x)| \\le \\frac{e^{|x|} |x|^{n+1}}{(n+1)!}\\). For any fixed \\(x\\), \\(\\frac{|x|^{n+1}}{(n+1)!} \\to 0\\) (ratio test: consecutive terms ratio is \\(|x|/(n+2) \\to 0\\)). So \\(R_n(x) \\to 0\\) and the Taylor series converges to \\(e^x\\).'
                },
                {
                    question: 'Show that \\(f(x) = e^{-1/x^2}\\) (with \\(f(0) = 0\\)) satisfies \\(f^{(k)}(0) = 0\\) for all \\(k \\ge 0\\), and conclude that the Taylor series at 0 does not converge to \\(f\\) away from 0.',
                    hint: 'Use induction and L\'Hopital to show each derivative at 0 is 0.',
                    solution: 'For \\(x \\neq 0\\), \\(f^{(k)}(x)\\) is \\(e^{-1/x^2}\\) times a rational function of \\(1/x\\). Each derivative satisfies \\(\\lim_{x\\to 0} f^{(k)}(x) = 0\\) because \\(e^{-1/x^2}\\) decays faster than any polynomial grows. So \\(f^{(k)}(0) = 0\\) for all \\(k\\), and the Taylor series is \\(\\sum 0 \\cdot x^k = 0\\). But \\(f(x) > 0\\) for \\(x \\neq 0\\), so the Taylor series does not represent \\(f\\). This function is \\(C^\\infty\\) but not analytic at 0.'
                },
                {
                    question: 'Derive the Taylor series of \\(\\arctan(x)\\) by integrating the series for \\(\\frac{1}{1+x^2}\\).',
                    hint: '\\(\\arctan(x) = \\int_0^x \\frac{1}{1+t^2} dt\\) and use term-by-term integration.',
                    solution: '\\(\\frac{1}{1+t^2} = \\sum_{k=0}^\\infty (-1)^k t^{2k}\\) for \\(|t| < 1\\). Integrating term by term from 0 to \\(x\\): \\(\\arctan(x) = \\sum_{k=0}^\\infty \\frac{(-1)^k x^{2k+1}}{2k+1} = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots\\) for \\(|x| \\le 1\\). (The series actually converges at \\(x = 1\\) by the alternating series test, giving \\(\\arctan(1) = \\pi/4 = 1 - 1/3 + 1/5 - \\cdots\\), the Leibniz formula!)'
                },
                {
                    question: 'If \\(f(x) = \\sum_{k=0}^\\infty a_k x^k\\) with radius \\(R > 0\\), prove the <strong>identity theorem</strong>: if \\(f(x_n) = 0\\) for a sequence \\(x_n \\to 0\\) with \\(x_n \\neq 0\\), then \\(a_k = 0\\) for all \\(k\\) (so \\(f = 0\\) on \\((-R,R)\\)).',
                    hint: 'Use continuity: \\(f(0) = \\lim f(x_n) = 0\\), so \\(a_0 = 0\\). Then \\(f(x)/x = \\sum_{k=1}^\\infty a_k x^{k-1}\\), and repeat.',
                    solution: 'By continuity, \\(f(0) = \\lim f(x_n) = 0\\), so \\(a_0 = 0\\). Then \\(g(x) = f(x)/x = \\sum_{k=0}^\\infty a_{k+1} x^k\\) also satisfies \\(g(x_n) = 0\\). By the same argument, \\(a_1 = g(0) = 0\\). By induction, \\(a_k = 0\\) for all \\(k\\). This is the real-analytic version of the identity theorem — a non-zero analytic function cannot have zeros accumulating at a point in its domain.'
                },
                {
                    question: 'Use Taylor series to evaluate \\(\\lim_{x \\to 0} \\frac{\\sin x - x + x^3/6}{x^5}\\).',
                    hint: 'Write out the Taylor expansion of \\(\\sin x\\) to enough terms.',
                    solution: '\\(\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\cdots\\). So \\(\\sin x - x + \\frac{x^3}{6} = \\frac{x^5}{120} - \\frac{x^7}{5040} + \\cdots\\). Dividing by \\(x^5\\): \\(\\frac{1}{120} - \\frac{x^2}{5040} + \\cdots \\to \\frac{1}{120}\\) as \\(x \\to 0\\).'
                }
            ]
        }
    ]
});
