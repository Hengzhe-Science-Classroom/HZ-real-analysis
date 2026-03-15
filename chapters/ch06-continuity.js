window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch06',
    number: 6,
    title: 'Continuity',
    subtitle: 'Epsilon-delta continuity, the Intermediate and Extreme Value Theorems, and uniform continuity on compact sets.',
    sections: [
        // ============================================================
        // SECTION 1: The Epsilon-Delta Definition of Continuity
        // ============================================================
        {
            id: 'ch06-sec01',
            title: 'The Epsilon-Delta Definition of Continuity',
            content: `
                <h2>The Epsilon-Delta Definition of Continuity</h2>

                <div class="env-block motivation">
                    <div class="env-title">From Limits to Continuity</div>
                    <div class="env-body">
                        <p>In Chapter 5 we defined what it means for \\(\\lim_{x \\to a} f(x) = L\\). Continuity is the special case where \\(L = f(a)\\): the limit matches the function value. This seemingly simple condition, that the function has no "breaks," has deep consequences. The Intermediate Value Theorem (Section 3) and the Extreme Value Theorem (Section 4) both rely critically on the completeness of \\(\\mathbb R\\) established in Chapter 1 and the compactness results from Chapter 4. This chapter follows a clear arc: we define continuity (Sections 1--2), prove what continuous functions on intervals can do (Sections 3--4), and then refine the notion to uniform continuity (Section 5).</p>
                    </div>
                </div>

                <p>Imagine you have a very powerful microscope pointed at the graph of a function.
                You centre the view on a point \\((a, f(a))\\) and ask: <em>"If I zoom in enough
                horizontally around \\(a\\), can I keep the output within any vertical band I
                choose?"</em>  If the answer is always <strong>yes</strong>, the function is
                <strong>continuous at \\(a\\)</strong>.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.1 — Continuity at a Point</div>
                    <div class="env-body">
                        <p>Let \\(f:D\\to\\mathbb R\\) and \\(a\\in D\\).  We say \\(f\\) is <strong>continuous at \\(a\\)</strong> if</p>
                        <p style="text-align:center;">
                            \\(\\forall\\,\\varepsilon>0\\;\\;\\exists\\,\\delta>0\\;\\;\\text{such that}\\;\\;
                            |x-a|<\\delta \\;\\Longrightarrow\\; |f(x)-f(a)|<\\varepsilon.\\)
                        </p>
                        <p>Equivalently, for every neighbourhood \\((f(a)-\\varepsilon,\\,f(a)+\\varepsilon)\\) of the output there is a neighbourhood \\((a-\\delta,\\,a+\\delta)\\) of the input that maps entirely inside it.</p>
                    </div>
                </div>

                <p>The order matters: the "adversary" picks \\(\\varepsilon\\) first (the vertical tolerance), and then you must respond with a suitable \\(\\delta\\) (the horizontal window).  If you can always win this game, \\(f\\) is continuous at \\(a\\).</p>

                <div class="viz-placeholder" data-viz="epsilon-delta-microscope"></div>

                <div class="env-block intuition">
                    <div class="env-title">Microscope Intuition</div>
                    <div class="env-body">
                        <p>Think of \\(\\varepsilon\\) as the height of the microscope's field of view and \\(\\delta\\) as its width.  Continuity says: no matter how narrow you make the vertical view, you can always narrow the horizontal view to fit.  In the visualization above, drag \\(\\varepsilon\\) toward zero and watch \\(\\delta\\) shrink to keep the curve inside the box.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — \\(f(x)=2x+1\\) at \\(a=1\\)</div>
                    <div class="env-body">
                        <p>We need \\(|f(x)-f(1)|=|2x+1-3|=2|x-1|<\\varepsilon\\).  Choose \\(\\delta=\\varepsilon/2\\).  Then \\(|x-1|<\\delta\\) gives \\(2|x-1|<2\\delta=\\varepsilon\\).  \\(\\checkmark\\)</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — \\(f(x)=x^2\\) at \\(a=3\\)</div>
                    <div class="env-body">
                        <p>We need \\(|x^2-9|=|x-3||x+3|<\\varepsilon\\).  If we restrict \\(|x-3|<1\\), then \\(|x+3|<7\\), so \\(|x^2-9|<7|x-3|\\).  Choose \\(\\delta=\\min(1,\\,\\varepsilon/7)\\).  Then \\(|x^2-9|<7\\cdot\\varepsilon/7=\\varepsilon\\).  \\(\\checkmark\\)</p>
                    </div>
                </div>

                <h3>Sequential Characterisation</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.2 — Sequential Criterion for Continuity</div>
                    <div class="env-body">
                        <p>\\(f\\) is continuous at \\(a\\) if and only if for every sequence \\((x_n)\\) with \\(x_n\\to a\\) we have \\(f(x_n)\\to f(a)\\).</p>
                    </div>
                </div>

                <p>This gives an immediate tool for proving <em>dis</em>continuity: exhibit one sequence converging to \\(a\\) whose images do not converge to \\(f(a)\\).</p>

                <div class="viz-placeholder" data-viz="sequential-continuity"></div>

                <div class="env-block example">
                    <div class="env-title">Non-Example — Dirichlet's Function</div>
                    <div class="env-body">
                        <p>Define \\(D(x)=1\\) if \\(x\\in\\mathbb Q\\) and \\(D(x)=0\\) otherwise.  At any point \\(a\\), take a sequence of rationals \\(r_n\\to a\\) and a sequence of irrationals \\(s_n\\to a\\).  Then \\(D(r_n)=1\\) and \\(D(s_n)=0\\), so \\(D\\) is discontinuous everywhere.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The \\(\\varepsilon\\text{-}\\delta\\) definition and the sequential criterion are completely equivalent for functions on subsets of \\(\\mathbb R\\).  Use whichever is more convenient: \\(\\varepsilon\\text{-}\\delta\\) for constructive proofs, sequences for disproofs or when limits are already known.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'epsilon-delta-microscope',
                    title: 'The Epsilon-Delta Microscope',
                    description: 'Adjust epsilon to set the vertical tolerance. Delta automatically shrinks to keep the curve inside the box. Drag the point a along the x-axis.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 55, originX: 80, originY: 300 });
                        var ctx = viz.ctx;

                        var epsilon = 1.0;
                        var funcChoice = 0;
                        var funcs = [
                            { label: 'x^2', fn: function(x) { return x * x; }, desc: 'f(x) = x²' },
                            { label: 'sin(x)', fn: function(x) { return Math.sin(x); }, desc: 'f(x) = sin(x)' },
                            { label: 'sqrt(x)', fn: function(x) { return x >= 0 ? Math.sqrt(x) : NaN; }, desc: 'f(x) = sqrt(x)' },
                            { label: '1/(1+x^2)', fn: function(x) { return 1 / (1 + x * x); }, desc: 'f(x) = 1/(1+x²)' }
                        ];

                        var ptA = viz.addDraggable('a', 2, 0, viz.colors.orange, 8, function() {
                            ptA.y = 0;
                            ptA.x = Math.max(-1, Math.min(9, ptA.x));
                        });

                        VizEngine.createSlider(controls, 'epsilon', 0.05, 2.0, 1.0, 0.05, function(v) { epsilon = v; });
                        VizEngine.createButton(controls, 'x²', function() { funcChoice = 0; });
                        VizEngine.createButton(controls, 'sin(x)', function() { funcChoice = 1; });
                        VizEngine.createButton(controls, 'sqrt(x)', function() { funcChoice = 2; });
                        VizEngine.createButton(controls, '1/(1+x²)', function() { funcChoice = 3; });

                        function computeDelta(f, a, eps) {
                            // Numerically find the largest delta such that |f(x)-f(a)| < eps for |x-a| < delta
                            var fa = f(a);
                            var delta = 3.0;
                            for (var d = 3.0; d > 0.001; d -= 0.005) {
                                var ok = true;
                                for (var t = -1; t <= 1; t += 0.02) {
                                    var x = a + t * d;
                                    var fx = f(x);
                                    if (!isFinite(fx) || Math.abs(fx - fa) >= eps) { ok = false; break; }
                                }
                                if (ok) { delta = d; break; }
                            }
                            return Math.min(delta, 3.0);
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var f = funcs[funcChoice].fn;
                            var a = ptA.x;
                            var fa = f(a);

                            // Draw function
                            viz.drawFunction(f, -2, 10, viz.colors.blue, 2.5);

                            if (isFinite(fa)) {
                                var delta = computeDelta(f, a, epsilon);

                                // Epsilon band (horizontal stripe)
                                viz.drawEpsilonBand(fa, epsilon, viz.colors.green);

                                // Delta band (vertical stripe)
                                viz.drawDeltaBand(a, delta, viz.colors.orange);

                                // Highlight the box where curve must stay
                                var sx1 = viz.toScreen(a - delta, 0)[0];
                                var sx2 = viz.toScreen(a + delta, 0)[0];
                                var sy1 = viz.toScreen(0, fa + epsilon)[1];
                                var sy2 = viz.toScreen(0, fa - epsilon)[1];
                                ctx.strokeStyle = viz.colors.teal;
                                ctx.lineWidth = 2;
                                ctx.strokeRect(sx1, sy1, sx2 - sx1, sy2 - sy1);

                                // Point (a, f(a))
                                viz.drawPoint(a, fa, viz.colors.white, null, 6);

                                // Labels
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                var ey = viz.toScreen(0, fa + epsilon)[1];
                                ctx.fillText('f(a)+ε', 5, ey - 4);
                                var ey2 = viz.toScreen(0, fa - epsilon)[1];
                                ctx.fillText('f(a)−ε', 5, ey2 + 14);

                                ctx.fillStyle = viz.colors.orange;
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'top';
                                var dsx1 = viz.toScreen(a - delta, 0);
                                var dsx2 = viz.toScreen(a + delta, 0);
                                ctx.fillText('a−δ', dsx1[0], dsx1[1] + 6);
                                ctx.fillText('a+δ', dsx2[0], dsx2[1] + 6);
                            }

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'top';
                            ctx.fillText(funcs[funcChoice].desc, viz.width - 10, 10);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('ε = ' + epsilon.toFixed(2) + '   δ = ' + (isFinite(fa) ? computeDelta(f, a, epsilon).toFixed(3) : '—'), viz.width - 10, 30);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'sequential-continuity',
                    title: 'Sequential Criterion Visualiser',
                    description: 'A sequence x_n converges to a. Watch whether f(x_n) converges to f(a). Toggle between continuous and discontinuous functions.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 50, originX: 100, originY: 280 });
                        var ctx = viz.ctx;
                        var mode = 0; // 0 = continuous (x^2), 1 = discontinuous (jump)
                        var nTerms = 20;
                        var time = 0;

                        VizEngine.createButton(controls, 'Continuous: x²', function() { mode = 0; });
                        VizEngine.createButton(controls, 'Discontinuous: jump', function() { mode = 1; });
                        VizEngine.createSlider(controls, 'Terms', 5, 40, 20, 1, function(v) { nTerms = Math.round(v); });

                        function fCont(x) { return x * x; }
                        function fJump(x) {
                            if (x < 2) return x * 0.5;
                            return x * 0.5 + 1;
                        }

                        function draw(t) {
                            time = t / 1000;
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var a = 2;
                            var f = mode === 0 ? fCont : fJump;

                            // Draw function
                            if (mode === 0) {
                                viz.drawFunction(fCont, -1, 9, viz.colors.blue, 2);
                            } else {
                                viz.drawFunction(function(x) { return x < 2 ? x * 0.5 : NaN; }, -1, 1.999, viz.colors.blue, 2);
                                viz.drawFunction(function(x) { return x >= 2 ? x * 0.5 + 1 : NaN; }, 2, 9, viz.colors.blue, 2);
                                // open / closed circles at jump
                                var sLo = viz.toScreen(2, 1);
                                var sHi = viz.toScreen(2, 2);
                                ctx.beginPath(); ctx.arc(sLo[0], sLo[1], 5, 0, Math.PI * 2);
                                ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2; ctx.stroke();
                                ctx.beginPath(); ctx.arc(sHi[0], sHi[1], 5, 0, Math.PI * 2);
                                ctx.fillStyle = viz.colors.blue; ctx.fill();
                            }

                            // Draw sequence converging to a
                            var revealCount = Math.min(nTerms, Math.floor(time * 3));
                            for (var n = 1; n <= revealCount; n++) {
                                var xn = a + 2.5 / n * Math.pow(-1, n);
                                var fxn = f(xn);
                                // x_n on x-axis
                                var sxn = viz.toScreen(xn, 0);
                                ctx.fillStyle = viz.colors.orange + '88';
                                ctx.beginPath(); ctx.arc(sxn[0], sxn[1], 3, 0, Math.PI * 2); ctx.fill();
                                // f(x_n) on curve
                                viz.drawPoint(xn, fxn, viz.colors.green, null, 4);
                                // dashed connector
                                viz.drawSegment(xn, 0, xn, fxn, viz.colors.green + '44', 0.5, true);
                            }

                            // Mark a and f(a)
                            viz.drawPoint(a, f(a), viz.colors.white, 'f(a)', 6);
                            var sa = viz.toScreen(a, 0);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('a = ' + a, sa[0], sa[1] + 8);

                            // Label
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'right'; ctx.textBaseline = 'top';
                            var label = mode === 0 ? 'Continuous: f(x_n) -> f(a)' : 'Discontinuous: f(x_n) does NOT converge to f(a)';
                            ctx.fillText(label, viz.width - 10, 10);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Using the \\(\\varepsilon\\text{-}\\delta\\) definition, prove that \\(f(x) = 3x - 5\\) is continuous at \\(a = 2\\).',
                    hint: 'Compute \\(|f(x) - f(2)| = |3x - 5 - 1| = 3|x - 2|\\). What should \\(\\delta\\) be in terms of \\(\\varepsilon\\)?',
                    solution: 'We need \\(|3x - 6| = 3|x-2| < \\varepsilon\\).  Choose \\(\\delta = \\varepsilon / 3\\).  Then \\(|x-2| < \\delta\\) gives \\(3|x-2| < 3 \\cdot \\varepsilon/3 = \\varepsilon\\). \\(\\square\\)'
                },
                {
                    question: 'Prove that \\(f(x) = x^3\\) is continuous at \\(a = 1\\).',
                    hint: 'Factor: \\(|x^3 - 1| = |x - 1||x^2 + x + 1|\\).  Bound the second factor by restricting \\(|x - 1| < 1\\).',
                    solution: 'If \\(|x-1|<1\\) then \\(0<x<2\\) so \\(|x^2+x+1|<7\\).  Choose \\(\\delta = \\min(1, \\varepsilon/7)\\).  Then \\(|x^3 - 1| < 7 \\cdot \\varepsilon/7 = \\varepsilon\\). \\(\\square\\)'
                },
                {
                    question: 'Use the sequential criterion to show that \\(g(x) = \\begin{cases} x\\sin(1/x) & x \\neq 0 \\\\ 0 & x = 0 \\end{cases}\\) is continuous at 0.',
                    hint: 'If \\(x_n \\to 0\\), use the Squeeze Theorem on \\(|g(x_n)| = |x_n|\\,|\\sin(1/x_n)| \\le |x_n|\\).',
                    solution: 'For any \\(x_n \\to 0\\), \\(|g(x_n)| = |x_n\\sin(1/x_n)| \\le |x_n| \\to 0 = g(0)\\).  By the sequential criterion, \\(g\\) is continuous at 0. \\(\\square\\)'
                },
                {
                    question: 'Show that the function \\(h(x) = \\begin{cases} 1 & x \\ge 0 \\\\ -1 & x < 0 \\end{cases}\\) (the signum-like function) is discontinuous at \\(x = 0\\).',
                    hint: 'Find a sequence \\(x_n \\to 0\\) with \\(h(x_n) \\not\\to h(0)\\).',
                    solution: 'Take \\(x_n = -1/n \\to 0\\).  Then \\(h(x_n) = -1\\) for all \\(n\\), but \\(h(0) = 1\\).  Since \\(-1 \\neq 1\\), the sequential criterion fails. \\(\\square\\)'
                },
                {
                    question: 'If \\(f\\) is continuous at \\(a\\) and \\(f(a) > 0\\), prove there exists \\(\\delta > 0\\) with \\(f(x) > 0\\) for all \\(x \\in (a - \\delta, a + \\delta)\\).',
                    hint: 'Use \\(\\varepsilon = f(a)/2\\) in the definition of continuity.  Then \\(f(x) > f(a) - \\varepsilon = f(a)/2 > 0\\).',
                    solution: 'Set \\(\\varepsilon = f(a)/2 > 0\\).  By continuity, \\(\\exists\\,\\delta > 0\\) with \\(|f(x)-f(a)| < f(a)/2\\) whenever \\(|x-a|<\\delta\\).  This gives \\(f(x) > f(a) - f(a)/2 = f(a)/2 > 0\\). \\(\\square\\)'
                },
                {
                    question: 'Let \\(f(x) = \\begin{cases} x^2 & x \\in \\mathbb{Q} \\\\ 0 & x \\notin \\mathbb{Q} \\end{cases}\\).  At which points is \\(f\\) continuous?',
                    hint: 'At \\(x = 0\\) both branches agree.  At \\(x \\neq 0\\), find rational and irrational sequences converging to \\(x\\) whose images disagree.',
                    solution: 'At \\(x=0\\): for any \\(x_n \\to 0\\), \\(|f(x_n)| \\le x_n^2 \\to 0 = f(0)\\), so \\(f\\) is continuous at 0.  At \\(a \\neq 0\\): rational \\(r_n \\to a\\) gives \\(f(r_n) = r_n^2 \\to a^2\\), irrational \\(s_n \\to a\\) gives \\(f(s_n) = 0\\).  Since \\(a^2 \\neq 0\\), \\(f\\) is discontinuous at every \\(a \\neq 0\\). \\(\\square\\)'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Algebra of Continuous Functions & Key Examples
        // ============================================================
        {
            id: 'ch06-sec02',
            title: 'Algebra of Continuous Functions',
            content: `
                <h2>Algebra of Continuous Functions</h2>

                <p>Section 1 gave us the definition and a handful of worked examples. But proving continuity from scratch for every function would be tedious. Instead, we now develop <strong>algebraic closure rules</strong> that let us build a vast catalogue of continuous functions from a few verified building blocks, much as the limit laws in Chapter 5 let us compute limits without returning to \\(\\varepsilon\\text{-}\\delta\\) each time.</p>

                <p>One of the great strengths of continuity is that it is preserved by all the
                standard algebraic operations.  This lets us build a vast catalogue of
                continuous functions from a few simple building blocks, rather than re-doing
                \\(\\varepsilon\\text{-}\\delta\\) proofs from scratch each time.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.3 — Algebraic Combination Rules</div>
                    <div class="env-body">
                        <p>If \\(f\\) and \\(g\\) are continuous at \\(a\\), then so are:</p>
                        <ol>
                            <li>\\(f + g\\) and \\(f - g\\)</li>
                            <li>\\(f \\cdot g\\)</li>
                            <li>\\(f / g\\), provided \\(g(a) \\neq 0\\)</li>
                            <li>\\(|f|\\)</li>
                            <li>\\(\\alpha f\\) for any constant \\(\\alpha \\in \\mathbb{R}\\)</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch for (2)</div>
                    <div class="env-body">
                        <p>Write \\(|f(x)g(x) - f(a)g(a)| \\le |f(x)||g(x)-g(a)| + |g(a)||f(x)-f(a)|\\).  Since \\(f\\) is continuous at \\(a\\), it is bounded near \\(a\\): \\(|f(x)| \\le M\\) for \\(|x-a|<\\delta_0\\).  Then make each term less than \\(\\varepsilon/2\\) by choosing \\(\\delta\\) small enough.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.4 — Composition Rule</div>
                    <div class="env-body">
                        <p>If \\(g\\) is continuous at \\(a\\) and \\(f\\) is continuous at \\(g(a)\\), then \\(f \\circ g\\) is continuous at \\(a\\).</p>
                    </div>
                </div>

                <p>Composition is especially powerful: knowing \\(\\sin\\), \\(\\exp\\), \\(|\\cdot|\\) are continuous everywhere lets us immediately conclude that \\(e^{\\sin x}\\), \\(|x^2 - 3x + 1|\\), etc., are continuous.</p>

                <div class="viz-placeholder" data-viz="algebra-of-continuous"></div>

                <h3>Building Blocks</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.5 — Standard Continuous Functions</div>
                    <div class="env-body">
                        <p>The following are continuous on their natural domains:</p>
                        <ol>
                            <li><strong>Polynomials</strong> \\(p(x) = a_n x^n + \\cdots + a_0\\) — continuous on all of \\(\\mathbb R\\).</li>
                            <li><strong>Rational functions</strong> \\(p(x)/q(x)\\) — continuous wherever \\(q(x) \\neq 0\\).</li>
                            <li><strong>Root functions</strong> \\(x^{1/n}\\) — continuous on \\([0,\\infty)\\) (for even \\(n\\)) or \\(\\mathbb R\\) (for odd \\(n\\)).</li>
                            <li><strong>Trigonometric functions</strong> \\(\\sin,\\cos,\\tan,\\ldots\\) — continuous on their domains.</li>
                            <li><strong>Exponential and logarithm</strong> — \\(e^x\\) on \\(\\mathbb R\\), \\(\\ln x\\) on \\((0,\\infty)\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Continuity of \\(f(x) = e^{-x^2}\\cos(x)\\)</div>
                    <div class="env-body">
                        <p>Both \\(e^{-x^2}\\) (composition of \\(\\exp\\) with \\(-x^2\\)) and \\(\\cos(x)\\) are continuous on \\(\\mathbb R\\).  By the product rule, their product is continuous on \\(\\mathbb R\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="continuity-building-blocks"></div>

                <h3>Types of Discontinuity</h3>

                <p>When continuity fails, the failure can be classified:</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.6 — Removable and Jump Discontinuities</div>
                    <div class="env-body">
                        <ul>
                            <li><strong>Removable:</strong> \\(\\lim_{x \\to a} f(x)\\) exists but does not equal \\(f(a)\\) (or \\(f(a)\\) is undefined).  The "hole" can be patched.</li>
                            <li><strong>Jump:</strong> The left-hand and right-hand limits both exist but are different: \\(\\lim_{x \\to a^-} f(x) \\neq \\lim_{x \\to a^+} f(x)\\).</li>
                            <li><strong>Essential (oscillatory/infinite):</strong> At least one one-sided limit fails to exist (e.g., \\(\\sin(1/x)\\) at 0, or \\(1/x\\) at 0).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The algebraic rules mean that identifying the continuous functions on \\(\\mathbb R\\) reduces to knowing a few basic facts plus the combination rules.  This is why analysis courses devote so much energy to proving the building blocks are continuous — once done, huge families of functions inherit continuity for free.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'algebra-of-continuous',
                    title: 'Combining Continuous Functions',
                    description: 'Pick two continuous functions f and g, then view their sum, product, quotient, and composition.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 40, originX: 350, originY: 250 });
                        var ctx = viz.ctx;
                        var op = 'sum';

                        var f = function(x) { return Math.sin(x); };
                        var g = function(x) { return 0.5 * x; };

                        VizEngine.createButton(controls, 'f + g', function() { op = 'sum'; });
                        VizEngine.createButton(controls, 'f * g', function() { op = 'prod'; });
                        VizEngine.createButton(controls, 'f / g', function() { op = 'quot'; });
                        VizEngine.createButton(controls, 'f(g(x))', function() { op = 'comp'; });

                        function combined(x) {
                            if (op === 'sum') return f(x) + g(x);
                            if (op === 'prod') return f(x) * g(x);
                            if (op === 'quot') { var gx = g(x); return Math.abs(gx) < 0.01 ? NaN : f(x) / gx; }
                            if (op === 'comp') return f(g(x));
                            return 0;
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            // Draw f and g faintly
                            viz.drawFunction(f, -8, 8, viz.colors.blue + '66', 1.5);
                            viz.drawFunction(g, -8, 8, viz.colors.green + '66', 1.5);

                            // Draw combined prominently
                            viz.drawFunction(combined, -8, 8, viz.colors.orange, 3);

                            // Legend
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left'; ctx.textBaseline = 'top';
                            ctx.fillStyle = viz.colors.blue; ctx.fillText('f(x) = sin(x)', 10, 10);
                            ctx.fillStyle = viz.colors.green; ctx.fillText('g(x) = x/2', 10, 28);
                            ctx.fillStyle = viz.colors.orange;
                            var labels = { sum: 'f + g', prod: 'f * g', quot: 'f / g', comp: 'f(g(x)) = sin(x/2)' };
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillText(labels[op], 10, 50);
                        }

                        draw();
                        VizEngine.createButton(controls, 'Redraw', draw);
                        // Simple redraw on button clicks by overriding:
                        var origButtons = container.parentElement.querySelectorAll('button');
                        origButtons.forEach(function(b) {
                            var origClick = b.onclick;
                            b.addEventListener('click', function() { setTimeout(draw, 10); });
                        });
                    }
                },
                {
                    id: 'continuity-building-blocks',
                    title: 'Types of Discontinuity',
                    description: 'See the three types of discontinuity: removable, jump, and essential (oscillatory).',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 60, originX: 350, originY: 220 });
                        var ctx = viz.ctx;
                        var discType = 0;

                        VizEngine.createButton(controls, 'Removable', function() { discType = 0; draw(); });
                        VizEngine.createButton(controls, 'Jump', function() { discType = 1; draw(); });
                        VizEngine.createButton(controls, 'Essential', function() { discType = 2; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            if (discType === 0) {
                                // Removable: (x^2-1)/(x-1) at x=1, i.e. f(x)=x+1 with hole at x=1
                                viz.drawFunction(function(x) { return Math.abs(x - 1) < 0.01 ? NaN : (x * x - 1) / (x - 1); }, -3, 5, viz.colors.blue, 2.5);
                                // Open circle at (1, 2)
                                var s = viz.toScreen(1, 2);
                                ctx.beginPath(); ctx.arc(s[0], s[1], 5, 0, Math.PI * 2);
                                ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2; ctx.stroke();
                                // Label
                                ctx.fillStyle = viz.colors.white; ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                ctx.fillText('Removable discontinuity at x = 1', viz.width / 2, 10);
                                ctx.fillStyle = viz.colors.text; ctx.font = '13px -apple-system,sans-serif';
                                ctx.fillText('f(x) = (x²−1)/(x−1), limit = 2 but f(1) undefined', viz.width / 2, 30);
                            } else if (discType === 1) {
                                // Jump: floor function
                                for (var k = -3; k < 5; k++) {
                                    viz.drawFunction(function(x) { return Math.floor(x); }, k + 0.001, k + 0.999, viz.colors.blue, 2.5);
                                    // Closed circle at left
                                    var sL = viz.toScreen(k, k);
                                    ctx.fillStyle = viz.colors.blue;
                                    ctx.beginPath(); ctx.arc(sL[0], sL[1], 4, 0, Math.PI * 2); ctx.fill();
                                    // Open circle at right
                                    var sR = viz.toScreen(k + 1, k);
                                    ctx.beginPath(); ctx.arc(sR[0], sR[1], 4, 0, Math.PI * 2);
                                    ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2; ctx.stroke();
                                }
                                ctx.fillStyle = viz.colors.white; ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                ctx.fillText('Jump discontinuity at every integer', viz.width / 2, 10);
                                ctx.fillStyle = viz.colors.text; ctx.font = '13px -apple-system,sans-serif';
                                ctx.fillText('f(x) = floor(x)', viz.width / 2, 30);
                            } else {
                                // Essential: sin(1/x)
                                viz.drawFunction(function(x) { return x === 0 ? NaN : Math.sin(1 / x); }, -4, -0.01, viz.colors.blue, 1.5);
                                viz.drawFunction(function(x) { return x === 0 ? NaN : Math.sin(1 / x); }, 0.01, 4, viz.colors.blue, 1.5, 1000);
                                ctx.fillStyle = viz.colors.white; ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                ctx.fillText('Essential (oscillatory) discontinuity at x = 0', viz.width / 2, 10);
                                ctx.fillStyle = viz.colors.text; ctx.font = '13px -apple-system,sans-serif';
                                ctx.fillText('f(x) = sin(1/x) — oscillates infinitely near 0', viz.width / 2, 30);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that \\(f(x) = \\dfrac{x^2 + 1}{x^2 - 4}\\) is continuous at \\(x = 1\\).',
                    hint: 'The denominator at \\(x=1\\) is \\(1 - 4 = -3 \\neq 0\\).  Apply the quotient rule.',
                    solution: 'Both \\(x^2+1\\) and \\(x^2-4\\) are polynomials, hence continuous everywhere.  At \\(x=1\\), \\(x^2-4 = -3 \\neq 0\\).  By the quotient rule for continuous functions, \\(f\\) is continuous at 1. \\(\\square\\)'
                },
                {
                    question: 'Prove that \\(h(x) = |x^3 - 8|\\) is continuous on \\(\\mathbb R\\).',
                    hint: 'Write \\(h = |\\cdot| \\circ (x^3 - 8)\\).  Both \\(x^3-8\\) (polynomial) and \\(|\\cdot|\\) are continuous.',
                    solution: '\\(x^3 - 8\\) is a polynomial, hence continuous on \\(\\mathbb R\\).  The absolute value function \\(|\\cdot|\\) is continuous on \\(\\mathbb R\\).  By the composition rule, \\(h = |\\cdot| \\circ (x^3 - 8)\\) is continuous on \\(\\mathbb R\\). \\(\\square\\)'
                },
                {
                    question: 'Classify the discontinuity of \\(f(x) = \\dfrac{\\sin x}{x}\\) at \\(x = 0\\) (where \\(f(0)\\) is undefined).',
                    hint: 'Recall \\(\\lim_{x \\to 0} \\sin x / x = 1\\).  Does the limit exist?',
                    solution: 'The limit \\(\\lim_{x \\to 0} \\sin x / x = 1\\) exists and is finite, but \\(f(0)\\) is not defined.  This is a <strong>removable discontinuity</strong>: defining \\(f(0) = 1\\) makes \\(f\\) continuous at 0.'
                },
                {
                    question: 'Give an example of two functions that are both discontinuous at \\(a = 0\\) but whose sum is continuous at 0.',
                    hint: 'Let \\(f\\) have a jump and let \\(g = -f\\).',
                    solution: 'Define \\(f(x) = \\begin{cases} 1 & x \\ge 0 \\\\ 0 & x < 0 \\end{cases}\\) and \\(g(x) = \\begin{cases} 0 & x \\ge 0 \\\\ 1 & x < 0 \\end{cases}\\).  Both are discontinuous at 0, but \\((f+g)(x) = 1\\) for all \\(x\\), which is continuous. \\(\\square\\)'
                },
                {
                    question: 'Show that if \\(f\\) is continuous at \\(a\\) and \\(f(a) \\neq 0\\), then \\(1/f\\) is continuous at \\(a\\).',
                    hint: 'By the sign-preserving property, \\(|f(x)| > |f(a)|/2 > 0\\) in a neighbourhood of \\(a\\).  Use the quotient rule with numerator 1 (constant).',
                    solution: 'The constant function 1 is continuous.  Since \\(f(a) \\neq 0\\) and \\(f\\) is continuous at \\(a\\), the quotient rule applies: \\(1/f\\) is continuous at \\(a\\). \\(\\square\\)'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Intermediate Value Theorem
        // ============================================================
        {
            id: 'ch06-sec03',
            title: 'The Intermediate Value Theorem',
            content: `
                <h2>The Intermediate Value Theorem</h2>

                <p>With the definition and algebra of continuity in hand, we now turn to the first of two landmark theorems that reveal what continuity really buys us on closed intervals. The IVT says continuous functions hit every intermediate value; its proof will use the <strong>completeness of \\(\\mathbb R\\)</strong> (via the Nested Interval Property from Chapter 1) in an essential way.</p>

                <p>The Intermediate Value Theorem (IVT) captures an intuitive idea:
                <em>a continuous function cannot "jump" over any value</em>.  If a
                continuous curve starts below a horizontal line and ends above it, it
                must cross the line somewhere in between.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.7 — Intermediate Value Theorem</div>
                    <div class="env-body">
                        <p>Let \\(f:[a,b] \\to \\mathbb R\\) be continuous, and let \\(L\\) be any value strictly between \\(f(a)\\) and \\(f(b)\\).  Then there exists \\(c \\in (a,b)\\) with \\(f(c) = L\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ivt-explorer"></div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Bisection Argument)</div>
                    <div class="env-body">
                        <p>Assume \\(f(a) < L < f(b)\\) (the other case is symmetric).  Define nested intervals \\([a_n, b_n]\\) by bisection:</p>
                        <ul>
                            <li>Set \\(a_0 = a,\\; b_0 = b\\).</li>
                            <li>Let \\(m_n = (a_n + b_n)/2\\).  If \\(f(m_n) < L\\), set \\(a_{n+1} = m_n,\\; b_{n+1} = b_n\\).  Otherwise set \\(a_{n+1} = a_n,\\; b_{n+1} = m_n\\).</li>
                        </ul>
                        <p>Then \\([a_n, b_n]\\) is a nested sequence of closed intervals with \\(b_n - a_n = (b-a)/2^n \\to 0\\), \\(f(a_n) < L \\le f(b_n)\\) for all \\(n\\).  By the Nested Interval Property, \\(\\exists\\, c \\in \\bigcap [a_n, b_n]\\) with \\(a_n \\to c\\) and \\(b_n \\to c\\).  Continuity gives \\(f(a_n) \\to f(c)\\) and \\(f(b_n) \\to f(c)\\), so \\(f(c) \\le L\\) and \\(f(c) \\ge L\\), hence \\(f(c) = L\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Why Completeness is Essential</div>
                    <div class="env-body">
                        <p>The IVT <strong>fails</strong> in \\(\\mathbb Q\\).  Consider \\(f(x) = x^2 - 2\\) on \\([1, 2] \\cap \\mathbb Q\\).  Then \\(f(1) = -1 < 0\\) and \\(f(2) = 2 > 0\\), but there is no \\(c \\in \\mathbb Q\\) with \\(f(c) = 0\\) since \\(\\sqrt{2} \\notin \\mathbb Q\\).  The IVT is fundamentally a theorem about the <em>completeness</em> of \\(\\mathbb R\\).</p>
                    </div>
                </div>

                <h3>Applications of the IVT</h3>

                <div class="env-block example">
                    <div class="env-title">Application — Existence of \\(\\sqrt[n]{a}\\)</div>
                    <div class="env-body">
                        <p>For \\(a > 0\\) and \\(n \\in \\mathbb N\\), the function \\(f(x) = x^n\\) is continuous on \\([0, \\max(a,1)+1]\\), with \\(f(0) = 0 < a\\) and \\(f(\\max(a,1)+1) > a\\).  By the IVT, \\(\\exists\\, c > 0\\) with \\(c^n = a\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Application — Fixed Point Theorem on \\([0,1]\\)</div>
                    <div class="env-body">
                        <p>If \\(f:[0,1]\\to[0,1]\\) is continuous, then \\(f\\) has a <strong>fixed point</strong>: some \\(c\\) with \\(f(c) = c\\).</p>
                        <p><em>Proof:</em> Let \\(g(x) = f(x) - x\\).  Then \\(g(0) = f(0) \\ge 0\\) and \\(g(1) = f(1) - 1 \\le 0\\).  By IVT, \\(\\exists\\,c\\) with \\(g(c) = 0\\), i.e. \\(f(c) = c\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="fixed-point-ivt"></div>

                <div class="env-block remark">
                    <div class="env-title">Bolzano's Theorem</div>
                    <div class="env-body">
                        <p>The special case \\(L = 0\\) is known as <strong>Bolzano's Theorem</strong>: if \\(f\\) is continuous on \\([a,b]\\) and \\(f(a)\\) and \\(f(b)\\) have opposite signs, then \\(f\\) has a root in \\((a,b)\\).  This is the theoretical foundation of the bisection method for numerical root-finding.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'ivt-explorer',
                    title: 'Intermediate Value Theorem Explorer',
                    description: 'Drag the target value L between f(a) and f(b). The IVT guarantees a crossing point c. The bisection algorithm finds it step by step.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 50, originX: 80, originY: 320 });
                        var ctx = viz.ctx;

                        var f = function(x) { return 0.15 * x * x * x - 0.8 * x * x + 1.2 * x + 0.5; };
                        var aVal = 0.5, bVal = 6;
                        var targetL = 1.5;
                        var bisectionSteps = 0;

                        VizEngine.createSlider(controls, 'Target L', -1, 4, 1.5, 0.05, function(v) { targetL = v; bisectionSteps = 0; });
                        VizEngine.createButton(controls, 'Bisect once', function() { bisectionSteps++; draw(); });
                        VizEngine.createButton(controls, 'Bisect x10', function() { bisectionSteps += 10; draw(); });
                        VizEngine.createButton(controls, 'Reset', function() { bisectionSteps = 0; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            // Draw function
                            viz.drawFunction(f, -1, 10, viz.colors.blue, 2.5);

                            // Target line
                            var sL = viz.toScreen(0, targetL)[1];
                            ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 1.5;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath(); ctx.moveTo(0, sL); ctx.lineTo(viz.width, sL); ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.orange; ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
                            ctx.fillText('L = ' + targetL.toFixed(2), 5, sL - 4);

                            // Mark f(a) and f(b)
                            viz.drawPoint(aVal, f(aVal), viz.colors.green, 'f(a)=' + f(aVal).toFixed(2), 5);
                            viz.drawPoint(bVal, f(bVal), viz.colors.green, 'f(b)=' + f(bVal).toFixed(2), 5);

                            // Bisection
                            var lo = aVal, hi = bVal;
                            var flo = f(lo), fhi = f(hi);
                            // Make sure lo side < L and hi side >= L (or swap)
                            if (flo > fhi) { var tmp = lo; lo = hi; hi = tmp; flo = f(lo); fhi = f(hi); }

                            for (var step = 0; step < Math.min(bisectionSteps, 50); step++) {
                                var mid = (lo + hi) / 2;
                                if (f(mid) < targetL) { lo = mid; } else { hi = mid; }
                            }

                            if (bisectionSteps > 0) {
                                // Show current interval
                                viz.drawDeltaBand((lo + hi) / 2, (hi - lo) / 2, viz.colors.teal);
                                var c = (lo + hi) / 2;
                                viz.drawPoint(c, f(c), viz.colors.white, 'c ~ ' + c.toFixed(4), 6);

                                ctx.fillStyle = viz.colors.teal; ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'right'; ctx.textBaseline = 'top';
                                ctx.fillText('After ' + Math.min(bisectionSteps, 50) + ' bisections: [' + lo.toFixed(4) + ', ' + hi.toFixed(4) + ']', viz.width - 10, 50);
                                ctx.fillText('f(c) = ' + f(c).toFixed(6) + ',  |f(c) - L| = ' + Math.abs(f(c) - targetL).toFixed(6), viz.width - 10, 66);
                            }

                            // Title
                            ctx.fillStyle = viz.colors.white; ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('Intermediate Value Theorem — Bisection Search', viz.width / 2, 10);
                        }

                        draw();
                    }
                },
                {
                    id: 'fixed-point-ivt',
                    title: 'Fixed Points via IVT',
                    description: 'A continuous function f:[0,1]->[0,1] must cross the line y = x. Drag the control points to reshape the curve.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 500, height: 500, scale: 350, originX: 70, originY: 430 });
                        var ctx = viz.ctx;

                        // Control points for a simple Bezier-like curve
                        var p1 = viz.addDraggable('p1', 0.3, 0.8, viz.colors.purple, 8, function() {
                            p1.x = Math.max(0, Math.min(1, p1.x));
                            p1.y = Math.max(0, Math.min(1, p1.y));
                        });
                        var p2 = viz.addDraggable('p2', 0.7, 0.2, viz.colors.purple, 8, function() {
                            p2.x = Math.max(0, Math.min(1, p2.x));
                            p2.y = Math.max(0, Math.min(1, p2.y));
                        });

                        function fCurve(t) {
                            // Cubic Bezier from (0, f0) to (1, f1) through control pts
                            var f0 = Math.max(0, Math.min(1, p1.y * 1.2));
                            var f1 = Math.max(0, Math.min(1, p2.y * 0.8 + 0.1));
                            var u = 1 - t;
                            return u * u * u * f0 + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t * t * t * f1;
                        }

                        function draw() {
                            viz.clear();

                            // Draw unit square
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1;
                            var s00 = viz.toScreen(0, 0);
                            var s11 = viz.toScreen(1, 1);
                            ctx.strokeRect(s00[0], s11[1], s11[0] - s00[0], s00[1] - s11[1]);

                            // Axes labels
                            ctx.fillStyle = viz.colors.text; ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('0', s00[0], s00[1] + 4);
                            ctx.fillText('1', s11[0], s00[1] + 4);
                            ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
                            ctx.fillText('1', s00[0] - 6, s11[1]);

                            // Draw y = x line
                            viz.drawSegment(0, 0, 1, 1, viz.colors.text + '88', 1.5, true);

                            // Draw curve
                            viz.drawFunction(fCurve, 0, 1, viz.colors.blue, 3, 200);

                            // Find fixed point(s)
                            for (var t = 0.001; t < 1; t += 0.001) {
                                var g1 = fCurve(t) - t;
                                var g2 = fCurve(t + 0.001) - (t + 0.001);
                                if (g1 * g2 <= 0) {
                                    // Refine
                                    var lo = t, hi = t + 0.001;
                                    for (var s = 0; s < 20; s++) {
                                        var mid = (lo + hi) / 2;
                                        if ((fCurve(mid) - mid) * (fCurve(lo) - lo) <= 0) hi = mid; else lo = mid;
                                    }
                                    var c = (lo + hi) / 2;
                                    viz.drawPoint(c, fCurve(c), viz.colors.orange, 'fixed pt: ' + c.toFixed(3), 7);
                                    t += 0.02; // skip ahead to avoid duplicates
                                }
                            }

                            // Labels
                            ctx.fillStyle = viz.colors.white; ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('Fixed Point Theorem: f must cross y = x', viz.width / 2, 8);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that the equation \\(x^5 + x = 1\\) has a solution in \\((0, 1)\\).',
                    hint: 'Let \\(f(x) = x^5 + x - 1\\).  Compute \\(f(0)\\) and \\(f(1)\\).',
                    solution: '\\(f(x) = x^5 + x - 1\\) is continuous.  \\(f(0) = -1 < 0\\) and \\(f(1) = 1 > 0\\).  By the IVT, \\(\\exists\\,c \\in (0,1)\\) with \\(f(c) = 0\\), i.e. \\(c^5 + c = 1\\). \\(\\square\\)'
                },
                {
                    question: 'Show that every polynomial of odd degree has at least one real root.',
                    hint: 'If \\(p(x) = x^{2k+1} + \\text{lower terms}\\), then \\(p(x) \\to +\\infty\\) as \\(x \\to +\\infty\\) and \\(p(x) \\to -\\infty\\) as \\(x \\to -\\infty\\).',
                    solution: 'Let \\(p(x) = a_n x^n + \\cdots\\) with \\(n\\) odd and \\(a_n > 0\\) (WLOG).  Then \\(\\lim_{x \\to \\infty} p(x) = +\\infty\\) and \\(\\lim_{x \\to -\\infty} p(x) = -\\infty\\).  So \\(\\exists\\,M\\) with \\(p(M) > 0\\) and \\(p(-M) < 0\\).  Since \\(p\\) is continuous, the IVT gives a root in \\((-M, M)\\). \\(\\square\\)'
                },
                {
                    question: 'Let \\(f:[0,2]\\to\\mathbb R\\) be continuous with \\(f(0) = 3\\) and \\(f(2) = 3\\).  Must there exist \\(c\\) with \\(f(c) = 3\\)?',
                    hint: 'Be careful — the IVT applies to <em>intermediate</em> values, not to values already attained at the endpoints.',
                    solution: 'Yes, trivially: \\(f(0) = 3\\), so we can take \\(c = 0\\) (or \\(c = 2\\)).  The IVT is not even needed here since the value is already attained at the endpoints.'
                },
                {
                    question: 'If \\(f:[0,1]\\to\\mathbb R\\) is continuous and \\(f(0) = f(1)\\), show that there exists \\(c \\in [0, 1/2]\\) with \\(f(c) = f(c + 1/2)\\).',
                    hint: 'Define \\(g(x) = f(x) - f(x + 1/2)\\) on \\([0, 1/2]\\).  Evaluate \\(g(0) + g(1/2)\\).',
                    solution: 'Let \\(g(x) = f(x) - f(x+1/2)\\) on \\([0,1/2]\\).  Then \\(g(0) = f(0) - f(1/2)\\) and \\(g(1/2) = f(1/2) - f(1) = f(1/2) - f(0)\\).  So \\(g(0) + g(1/2) = 0\\), meaning \\(g(0)\\) and \\(g(1/2)\\) have opposite signs (or one is zero).  By the IVT, \\(\\exists\\,c\\) with \\(g(c) = 0\\). \\(\\square\\)'
                },
                {
                    question: 'The <em>Darboux property</em> says that derivatives have the IVT (even if not continuous).  Give an example of a differentiable function whose derivative is not continuous but satisfies the IVT.',
                    hint: 'Consider \\(f(x) = x^2 \\sin(1/x)\\) for \\(x \\neq 0\\) and \\(f(0) = 0\\).',
                    solution: 'For \\(f(x) = x^2\\sin(1/x)\\) (\\(f(0) = 0\\)), one computes \\(f\'(x) = 2x\\sin(1/x) - \\cos(1/x)\\) for \\(x \\neq 0\\) and \\(f\'(0) = 0\\).  The derivative \\(f\'\\) is not continuous at 0 (since \\(-\\cos(1/x)\\) oscillates), but being a derivative, it has the Darboux (intermediate value) property.'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Extreme Value Theorem
        // ============================================================
        {
            id: 'ch06-sec04',
            title: 'The Extreme Value Theorem',
            content: `
                <h2>The Extreme Value Theorem</h2>

                <p>The IVT told us which values a continuous function attains; the EVT tells us it attains its <em>most extreme</em> values. Where the IVT proof used the Nested Interval Property (a consequence of completeness), the EVT proof uses the <strong>Bolzano-Weierstrass theorem</strong> from Chapter 4, which is equivalent to the statement that closed bounded intervals are <strong>compact</strong>. This is the second major payoff of the completeness and compactness machinery we built earlier.</p>

                <p>The Extreme Value Theorem (EVT) says that a continuous function on a
                <strong>closed bounded interval</strong> must attain its maximum and minimum
                values.  It cannot escape to infinity; it cannot approach a supremum
                without actually reaching it.  Both hypotheses — closedness and
                boundedness — are essential.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.8 — Extreme Value Theorem</div>
                    <div class="env-body">
                        <p>If \\(f:[a,b]\\to\\mathbb R\\) is continuous, then \\(f\\) attains its supremum and infimum: there exist \\(c, d \\in [a,b]\\) with
                        \\[f(c) = \\sup_{x \\in [a,b]} f(x), \\qquad f(d) = \\inf_{x \\in [a,b]} f(x).\\]</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Outline</div>
                    <div class="env-body">
                        <p><strong>Step 1</strong> (Boundedness): Suppose \\(f\\) is unbounded.  Then \\(\\forall n\\), \\(\\exists\\, x_n \\in [a,b]\\) with \\(|f(x_n)| > n\\).  By Bolzano-Weierstrass, \\((x_n)\\) has a convergent subsequence \\(x_{n_k} \\to c \\in [a,b]\\).  Continuity gives \\(f(x_{n_k}) \\to f(c)\\), contradicting \\(|f(x_{n_k})| > n_k \\to \\infty\\).</p>
                        <p><strong>Step 2</strong> (Attainment): Let \\(M = \\sup f([a,b])\\).  By definition of supremum, \\(\\exists\\, x_n\\) with \\(f(x_n) > M - 1/n\\).  Again Bolzano-Weierstrass gives a subsequence \\(x_{n_k} \\to c\\), and continuity gives \\(f(c) = \\lim f(x_{n_k}) = M\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="evt-explorer"></div>

                <h3>Why Both Hypotheses Matter</h3>

                <div class="env-block warning">
                    <div class="env-title">Counterexamples</div>
                    <div class="env-body">
                        <ul>
                            <li><strong>Not closed:</strong> \\(f(x) = 1/x\\) on \\((0, 1]\\) is continuous but has no maximum (\\(f(x) \\to \\infty\\) as \\(x \\to 0^+\\)).</li>
                            <li><strong>Not bounded:</strong> \\(f(x) = x\\) on \\([0, \\infty)\\) is continuous but has no maximum.</li>
                            <li><strong>Not continuous:</strong> \\(f(x) = \\begin{cases} x & x \\in [0,1) \\\\ 0 & x = 1 \\end{cases}\\) has \\(\\sup f = 1\\) but never attains it.</li>
                        </ul>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="evt-counterexamples"></div>

                <div class="env-block example">
                    <div class="env-title">Application — Bounding a Polynomial</div>
                    <div class="env-body">
                        <p>The polynomial \\(p(x) = -x^4 + 3x^2 + 1\\) is continuous on \\([-2, 2]\\).  By the EVT, it attains a global maximum \\(M\\) and minimum \\(m\\) on this interval.  Calculus finds the critical points, but <em>existence</em> of the extrema is guaranteed by the EVT alone — no derivatives needed.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 6.9 — Continuous Image of \\([a,b]\\) is \\([m, M]\\)</div>
                    <div class="env-body">
                        <p>If \\(f:[a,b] \\to \\mathbb R\\) is continuous, then \\(f([a,b]) = [m, M]\\) where \\(m = \\min f\\) and \\(M = \\max f\\).  That is, the image of a closed bounded interval under a continuous function is again a closed bounded interval.</p>
                        <p><em>Proof:</em> By EVT, \\(m\\) and \\(M\\) are attained.  By IVT, every value between \\(m\\) and \\(M\\) is attained. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Connection to Compactness</div>
                    <div class="env-body">
                        <p>The EVT is really a theorem about <strong>compactness</strong>: the continuous image of a compact set is compact.  In \\(\\mathbb R\\), compact sets are precisely the closed bounded sets (Heine-Borel), and compact subsets of \\(\\mathbb R\\) have a maximum and minimum.  We will see this connection deepen when we study uniform continuity.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'evt-explorer',
                    title: 'Extreme Value Theorem Explorer',
                    description: 'Adjust the interval [a, b] and see the global maximum and minimum of the continuous function on that interval.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 45, originX: 120, originY: 250 });
                        var ctx = viz.ctx;

                        var aVal = 0.5, bVal = 5.5;
                        var f = function(x) { return Math.sin(1.3 * x) * Math.cos(0.5 * x) + 1.5; };

                        VizEngine.createSlider(controls, 'a', -1, 5, 0.5, 0.1, function(v) { aVal = v; draw(); });
                        VizEngine.createSlider(controls, 'b', 1, 10, 5.5, 0.1, function(v) { bVal = v; draw(); });

                        function findExtrema(f, a, b, steps) {
                            var maxY = -Infinity, minY = Infinity;
                            var maxX = a, minX = a;
                            for (var i = 0; i <= steps; i++) {
                                var x = a + (b - a) * i / steps;
                                var y = f(x);
                                if (y > maxY) { maxY = y; maxX = x; }
                                if (y < minY) { minY = y; minX = x; }
                            }
                            return { maxX: maxX, maxY: maxY, minX: minX, minY: minY };
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            if (aVal >= bVal) { bVal = aVal + 0.5; }

                            // Draw full function faintly
                            viz.drawFunction(f, -2, 11, viz.colors.blue + '44', 1.5);

                            // Highlight on [a, b]
                            viz.drawFunction(f, aVal, bVal, viz.colors.blue, 3);

                            // Shade the interval
                            var sa = viz.toScreen(aVal, 0);
                            var sb = viz.toScreen(bVal, 0);
                            ctx.fillStyle = viz.colors.teal + '15';
                            ctx.fillRect(sa[0], 0, sb[0] - sa[0], viz.height);

                            // Find extrema
                            var ext = findExtrema(f, aVal, bVal, 1000);

                            // Draw max
                            viz.drawPoint(ext.maxX, ext.maxY, viz.colors.orange, 'MAX = ' + ext.maxY.toFixed(3), 7);
                            viz.drawSegment(ext.maxX, 0, ext.maxX, ext.maxY, viz.colors.orange + '44', 1, true);

                            // Draw min
                            viz.drawPoint(ext.minX, ext.minY, viz.colors.green, 'min = ' + ext.minY.toFixed(3), 7);
                            viz.drawSegment(ext.minX, 0, ext.minX, ext.minY, viz.colors.green + '44', 1, true);

                            // Interval markers
                            ctx.fillStyle = viz.colors.teal; ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('a=' + aVal.toFixed(1), sa[0], sa[1] + 6);
                            ctx.fillText('b=' + bVal.toFixed(1), sb[0], sb[1] + 6);

                            // Title
                            ctx.fillStyle = viz.colors.white; ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('EVT: continuous f on [a,b] attains its max and min', viz.width / 2, 8);
                        }

                        draw();
                    }
                },
                {
                    id: 'evt-counterexamples',
                    title: 'When the EVT Fails',
                    description: 'See three scenarios where the hypotheses of the EVT are violated and the conclusion fails.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 80, originX: 100, originY: 300 });
                        var ctx = viz.ctx;
                        var example = 0;

                        VizEngine.createButton(controls, 'Open interval: 1/x on (0,1]', function() { example = 0; draw(); });
                        VizEngine.createButton(controls, 'Unbounded: x on [0, inf)', function() { example = 1; draw(); });
                        VizEngine.createButton(controls, 'Not continuous', function() { example = 2; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            if (example === 0) {
                                viz.drawFunction(function(x) { return 1 / x; }, 0.12, 1, viz.colors.blue, 2.5);
                                // Open circle at x=0 side (approaching infinity)
                                ctx.fillStyle = viz.colors.white; ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                ctx.fillText('f(x) = 1/x on (0, 1] — no maximum', viz.width / 2, 10);
                                ctx.fillStyle = viz.colors.text; ctx.font = '13px -apple-system,sans-serif';
                                ctx.fillText('sup = +inf (not attained), interval not closed at 0', viz.width / 2, 30);
                            } else if (example === 1) {
                                viz.drawFunction(function(x) { return x; }, 0, 6, viz.colors.blue, 2.5);
                                // Arrow at end
                                var sEnd = viz.toScreen(6, 6);
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.moveTo(sEnd[0] + 8, sEnd[1] - 8); ctx.lineTo(sEnd[0], sEnd[1]); ctx.lineTo(sEnd[0] - 4, sEnd[1] - 12); ctx.fill();
                                ctx.fillStyle = viz.colors.white; ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                ctx.fillText('f(x) = x on [0, inf) — no maximum', viz.width / 2, 10);
                                ctx.fillStyle = viz.colors.text; ctx.font = '13px -apple-system,sans-serif';
                                ctx.fillText('sup = +inf (not attained), domain unbounded', viz.width / 2, 30);
                            } else {
                                // f(x) = x on [0,1), f(1) = 0
                                viz.drawFunction(function(x) { return x; }, 0, 0.99, viz.colors.blue, 2.5);
                                // Open circle at (1, 1)
                                var s1 = viz.toScreen(1, 1);
                                ctx.beginPath(); ctx.arc(s1[0], s1[1], 5, 0, Math.PI * 2);
                                ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2; ctx.stroke();
                                // Closed circle at (1, 0)
                                var s10 = viz.toScreen(1, 0);
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.arc(s10[0], s10[1], 5, 0, Math.PI * 2); ctx.fill();

                                ctx.fillStyle = viz.colors.white; ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                ctx.fillText('f(x) = x for x in [0,1), f(1) = 0 — sup not attained', viz.width / 2, 10);
                                ctx.fillStyle = viz.colors.text; ctx.font = '13px -apple-system,sans-serif';
                                ctx.fillText('sup = 1 but f never equals 1 (discontinuous)', viz.width / 2, 30);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(f(x) = x e^{-x}\\) on \\([0, 5]\\).  Without calculus, explain why \\(f\\) attains a maximum on this interval.',
                    hint: 'Check that \\(f\\) is continuous and the interval is closed and bounded.',
                    solution: '\\(xe^{-x}\\) is the product of the continuous functions \\(x\\) and \\(e^{-x}\\), hence continuous on \\([0,5]\\).  Since \\([0,5]\\) is closed and bounded, the EVT guarantees \\(f\\) attains its maximum. \\(\\square\\)'
                },
                {
                    question: 'Give an example of a bounded continuous function on \\((0, 1)\\) that does not attain its supremum.',
                    hint: 'Try \\(f(x) = x\\) on the open interval \\((0, 1)\\).',
                    solution: '\\(f(x) = x\\) on \\((0,1)\\) is continuous and bounded, with \\(\\sup f = 1\\).  But \\(f(x) < 1\\) for all \\(x \\in (0,1)\\), so the supremum is never attained.  The open interval violates the "closed" hypothesis of the EVT.'
                },
                {
                    question: 'Prove: if \\(f:[a,b] \\to \\mathbb R\\) is continuous and injective (one-to-one), then \\(f\\) is strictly monotone.',
                    hint: 'Suppose \\(f\\) is not monotone.  Then there exist \\(x_1 < x_2 < x_3\\) with \\(f(x_2)\\) not between \\(f(x_1)\\) and \\(f(x_3)\\).  Apply IVT to get a contradiction with injectivity.',
                    solution: 'If \\(f\\) is not monotone, \\(\\exists\\, x_1 < x_2 < x_3\\) in \\([a,b]\\) with \\(f(x_1) < f(x_2)\\) and \\(f(x_2) > f(x_3)\\) (WLOG — a "local peak").  Choose \\(L\\) between \\(\\max(f(x_1), f(x_3))\\) and \\(f(x_2)\\).  By the IVT applied on \\([x_1, x_2]\\), \\(\\exists\\,c_1\\) with \\(f(c_1) = L\\); on \\([x_2, x_3]\\), \\(\\exists\\,c_2\\) with \\(f(c_2) = L\\).  Since \\(c_1 \\neq c_2\\), \\(f\\) is not injective — contradiction. \\(\\square\\)'
                },
                {
                    question: 'If \\(f:\\mathbb R \\to \\mathbb R\\) is continuous and \\(\\lim_{x \\to \\pm\\infty} f(x) = 0\\), prove \\(f\\) attains a global maximum or minimum (or both).',
                    hint: 'Since \\(f(x) \\to 0\\), for large \\(|x|\\) we have \\(|f(x)| < \\varepsilon\\).  Apply EVT on the remaining compact interval.',
                    solution: 'Given \\(\\varepsilon > 0\\), \\(\\exists\\,R\\) with \\(|f(x)| < \\varepsilon\\) for \\(|x| > R\\).  On \\([-R, R]\\), \\(f\\) attains its max \\(M\\) and min \\(m\\) (EVT).  If \\(M > \\varepsilon\\) or \\(m < -\\varepsilon\\), this is a global extremum.  For small enough \\(\\varepsilon < \\max(M, |m|)\\), we are done.'
                },
                {
                    question: 'Show that \\(f:[a,b] \\to \\mathbb R\\) continuous implies \\(f([a,b]) = [\\min f, \\max f]\\).',
                    hint: 'EVT gives min and max. IVT fills in every intermediate value.',
                    solution: 'By EVT, \\(m = \\min f\\) and \\(M = \\max f\\) are attained at some \\(c, d \\in [a,b]\\).  For any \\(L \\in [m, M]\\), since \\(f(c) = m \\le L \\le M = f(d)\\), the IVT (applied on the interval between \\(c\\) and \\(d\\)) yields \\(x\\) with \\(f(x) = L\\).  So \\(f([a,b]) \\supseteq [m, M]\\).  By definition of \\(m, M\\), \\(f([a,b]) \\subseteq [m, M]\\).  \\(\\square\\)'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Uniform Continuity & the Heine-Cantor Theorem
        // ============================================================
        {
            id: 'ch06-sec05',
            title: 'Uniform Continuity & the Heine-Cantor Theorem',
            content: `
                <h2>Uniform Continuity & the Heine-Cantor Theorem</h2>

                <p>The IVT and EVT showed that continuity on a closed bounded interval has powerful consequences. We now ask a subtler quantitative question: can the \\(\\delta\\) in the \\(\\varepsilon\\text{-}\\delta\\) definition be chosen <em>independently of the point</em>? This leads to <strong>uniform continuity</strong>, a stronger property that is automatic on compact domains (Heine-Cantor) and indispensable for the theory of integration in later chapters.</p>

                <p>Ordinary (pointwise) continuity says: for each \\(\\varepsilon > 0\\) and each point \\(a\\), there is a \\(\\delta\\) that works — but this \\(\\delta\\) is allowed to depend on <em>which point</em> \\(a\\) you are at.  <strong>Uniform continuity</strong> demands a single \\(\\delta\\) that works everywhere at once.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.10 — Uniform Continuity</div>
                    <div class="env-body">
                        <p>\\(f: D \\to \\mathbb R\\) is <strong>uniformly continuous</strong> on \\(D\\) if</p>
                        <p style="text-align:center;">
                            \\(\\forall\\,\\varepsilon > 0\\;\\;\\exists\\,\\delta > 0\\;\\;\\text{such that}\\;\\;
                            |x - y| < \\delta \\;\\Longrightarrow\\; |f(x) - f(y)| < \\varepsilon\\;\\;\\;\\forall\\,x, y \\in D.\\)
                        </p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">The Uniform Microscope</div>
                    <div class="env-body">
                        <p>Think of it this way: with pointwise continuity, you might need to adjust your microscope magnification as you slide along the curve.  With uniform continuity, you can set the magnification <em>once</em> and it works everywhere on the domain.  The function behaves "equally well" at every point.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="uniform-vs-pointwise"></div>

                <h3>Uniform Continuity vs. Pointwise Continuity</h3>

                <div class="env-block example">
                    <div class="env-title">Example — \\(f(x) = x^2\\) on \\(\\mathbb R\\) is NOT uniformly continuous</div>
                    <div class="env-body">
                        <p>Take \\(\\varepsilon = 1\\).  For any proposed \\(\\delta > 0\\), pick \\(x = 1/\\delta\\) and \\(y = 1/\\delta + \\delta/2\\).  Then \\(|x - y| = \\delta/2 < \\delta\\) but</p>
                        <p style="text-align:center;">\\(|x^2 - y^2| = |x - y|\\cdot|x + y| = \\frac{\\delta}{2}\\left(\\frac{2}{\\delta} + \\frac{\\delta}{2}\\right) = 1 + \\frac{\\delta^2}{4} > 1 = \\varepsilon.\\)</p>
                        <p>No single \\(\\delta\\) works for all \\(x\\): the steepness of \\(x^2\\) increases without bound.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — \\(f(x) = \\sqrt{x}\\) on \\([0, \\infty)\\) IS uniformly continuous</div>
                    <div class="env-body">
                        <p>For \\(x, y \\ge 0\\): \\(|\\sqrt{x} - \\sqrt{y}| = \\dfrac{|x - y|}{\\sqrt{x} + \\sqrt{y}} \\le \\dfrac{|x - y|}{\\sqrt{|x - y|}} = \\sqrt{|x - y|}\\).  So \\(\\delta = \\varepsilon^2\\) works universally.</p>
                    </div>
                </div>

                <h3>The Heine-Cantor Theorem</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.11 — Heine-Cantor</div>
                    <div class="env-body">
                        <p>If \\(f:[a,b]\\to\\mathbb R\\) is continuous on the <strong>closed bounded interval</strong> \\([a,b]\\), then \\(f\\) is <strong>uniformly continuous</strong> on \\([a,b]\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (by contradiction using Bolzano-Weierstrass)</div>
                    <div class="env-body">
                        <p>Suppose \\(f\\) is not uniformly continuous.  Then \\(\\exists\\,\\varepsilon_0 > 0\\) and sequences \\((x_n), (y_n) \\subset [a,b]\\) with \\(|x_n - y_n| < 1/n\\) but \\(|f(x_n) - f(y_n)| \\ge \\varepsilon_0\\).</p>
                        <p>By Bolzano-Weierstrass (\\([a,b]\\) is compact!), \\((x_n)\\) has a subsequence \\(x_{n_k} \\to c \\in [a,b]\\).  Since \\(|y_{n_k} - x_{n_k}| < 1/n_k \\to 0\\), we also have \\(y_{n_k} \\to c\\).</p>
                        <p>By continuity at \\(c\\): \\(f(x_{n_k}) \\to f(c)\\) and \\(f(y_{n_k}) \\to f(c)\\), so \\(|f(x_{n_k}) - f(y_{n_k})| \\to 0\\).  This contradicts \\(|f(x_{n_k}) - f(y_{n_k})| \\ge \\varepsilon_0 > 0\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="heine-cantor-demo"></div>

                <h3>Lipschitz Continuity</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.12 — Lipschitz Continuity</div>
                    <div class="env-body">
                        <p>\\(f: D \\to \\mathbb R\\) is <strong>Lipschitz continuous</strong> with constant \\(K\\) if</p>
                        <p style="text-align:center;">\\(|f(x) - f(y)| \\le K|x - y|\\quad \\forall\\,x, y \\in D.\\)</p>
                    </div>
                </div>

                <p>Lipschitz implies uniform continuity (take \\(\\delta = \\varepsilon / K\\)), which implies continuity.  The reverse implications are false in general.</p>

                <div class="env-block remark">
                    <div class="env-title">Hierarchy of Regularity</div>
                    <div class="env-body">
                        <p style="text-align:center;">\\(\\text{Lipschitz} \\;\\Longrightarrow\\; \\text{uniformly continuous} \\;\\Longrightarrow\\; \\text{continuous}\\)</p>
                        <p>\\(\\sqrt{x}\\) on \\([0,\\infty)\\) is uniformly continuous but NOT Lipschitz (the derivative blows up at 0).  \\(x^2\\) on \\(\\mathbb R\\) is continuous but NOT uniformly continuous.  On a compact interval \\([a,b]\\), continuous = uniformly continuous (Heine-Cantor), and if \\(f'\\) exists and is bounded, then \\(f\\) is Lipschitz.</p>
                    </div>
                </div>

                <div class="env-block motivation">
                    <div class="env-title">Looking Ahead: From Continuity to Differentiation</div>
                    <div class="env-body">
                        <p>Continuity describes functions without breaks: the output changes by an arbitrarily small amount when the input changes by a small enough amount. But we can ask a finer question: <em>how fast</em> does a continuous function change? This leads to <strong>differentiation</strong> (Chapter 7), where the derivative is defined as a limit of difference quotients, \\(f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}\\). The limit machinery from Chapter 5 and the continuity framework from this chapter will be the foundation for everything that follows.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'uniform-vs-pointwise',
                    title: 'Uniform vs Pointwise Continuity',
                    description: 'See how the required delta changes as you move along the curve. For uniformly continuous functions, delta stays roughly constant. For non-uniformly-continuous functions, delta shrinks to zero.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 55, originX: 80, originY: 350 });
                        var ctx = viz.ctx;
                        var epsilon = 0.5;
                        var funcIdx = 0;

                        var funcs = [
                            { label: 'x² on R (NOT uniform)', fn: function(x) { return x * x; }, minX: -1, maxX: 8 },
                            { label: 'sqrt(x) on [0,inf) (uniform)', fn: function(x) { return x >= 0 ? Math.sqrt(x) : NaN; }, minX: -0.5, maxX: 8 },
                            { label: 'sin(x) on R (uniform)', fn: function(x) { return Math.sin(x); }, minX: -1, maxX: 10 },
                            { label: '1/x on (0,inf) (NOT uniform)', fn: function(x) { return x > 0.05 ? 1 / x : NaN; }, minX: -0.5, maxX: 8 }
                        ];

                        VizEngine.createSlider(controls, 'epsilon', 0.1, 1.5, 0.5, 0.05, function(v) { epsilon = v; });
                        VizEngine.createButton(controls, 'x² (not unif.)', function() { funcIdx = 0; });
                        VizEngine.createButton(controls, 'sqrt(x) (unif.)', function() { funcIdx = 1; });
                        VizEngine.createButton(controls, 'sin(x) (unif.)', function() { funcIdx = 2; });
                        VizEngine.createButton(controls, '1/x (not unif.)', function() { funcIdx = 3; });

                        var probe = viz.addDraggable('probe', 3, 0, viz.colors.orange, 8, function() {
                            probe.y = 0;
                            probe.x = Math.max(0.1, Math.min(7, probe.x));
                        });

                        function computeDelta(f, a, eps) {
                            var fa = f(a);
                            if (!isFinite(fa)) return 0;
                            for (var d = 3.0; d > 0.002; d -= 0.005) {
                                var ok = true;
                                for (var t = -1; t <= 1; t += 0.02) {
                                    var x = a + t * d;
                                    var fx = f(x);
                                    if (!isFinite(fx) || Math.abs(fx - fa) >= eps) { ok = false; break; }
                                }
                                if (ok) return d;
                            }
                            return 0.002;
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var fi = funcs[funcIdx];
                            var f = fi.fn;
                            var a = probe.x;
                            var fa = f(a);

                            viz.drawFunction(f, fi.minX, fi.maxX, viz.colors.blue, 2.5);

                            if (isFinite(fa)) {
                                var delta = computeDelta(f, a, epsilon);
                                viz.drawEpsilonBand(fa, epsilon, viz.colors.green);
                                viz.drawDeltaBand(a, delta, viz.colors.orange);
                                viz.drawPoint(a, fa, viz.colors.white, null, 5);

                                // Show delta values at several points along the curve
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                                for (var px = 0.5; px <= 7; px += 1.0) {
                                    var fpx = f(px);
                                    if (!isFinite(fpx)) continue;
                                    var d = computeDelta(f, px, epsilon);
                                    var sp = viz.toScreen(px, fpx);
                                    ctx.fillStyle = (Math.abs(px - a) < 0.3) ? viz.colors.white : viz.colors.text;
                                    ctx.fillText('d=' + d.toFixed(2), sp[0], sp[1] - 8);
                                }
                            }

                            // Title
                            ctx.fillStyle = viz.colors.white; ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText(fi.label, viz.width / 2, 8);
                            ctx.fillStyle = viz.colors.teal; ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('epsilon = ' + epsilon.toFixed(2) + '   delta at probe = ' + (isFinite(fa) ? computeDelta(f, a, epsilon).toFixed(3) : 'N/A'), viz.width / 2, 28);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'heine-cantor-demo',
                    title: 'Heine-Cantor: Compact Domain Saves the Day',
                    description: 'On a closed interval [a,b], the minimum delta over all points is positive (Heine-Cantor). Watch the bar chart of delta values as epsilon changes.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var epsilon = 0.5;
                        var mode = 0; // 0 = x^2 on [0,3], 1 = x^2 on R (sampled)

                        VizEngine.createSlider(controls, 'epsilon', 0.1, 2.0, 0.5, 0.05, function(v) { epsilon = v; draw(); });
                        VizEngine.createButton(controls, 'x² on [0,3] (compact)', function() { mode = 0; draw(); });
                        VizEngine.createButton(controls, 'x² on [0,10] (wider)', function() { mode = 1; draw(); });

                        function computeDelta(f, a, eps) {
                            var fa = f(a);
                            if (!isFinite(fa)) return 0;
                            for (var d = 5.0; d > 0.001; d -= 0.005) {
                                var ok = true;
                                for (var t = -1; t <= 1; t += 0.02) {
                                    var x = a + t * d;
                                    var fx = f(x);
                                    if (!isFinite(fx) || Math.abs(fx - fa) >= eps) { ok = false; break; }
                                }
                                if (ok) return d;
                            }
                            return 0.001;
                        }

                        function draw() {
                            viz.clear();

                            var f = function(x) { return x * x; };
                            var lo = 0, hi = mode === 0 ? 3 : 10;
                            var nSamples = 30;
                            var deltas = [];
                            var minDelta = Infinity;

                            for (var i = 0; i <= nSamples; i++) {
                                var x = lo + (hi - lo) * i / nSamples;
                                var d = computeDelta(f, x, epsilon);
                                deltas.push({ x: x, delta: d });
                                if (d < minDelta) minDelta = d;
                            }

                            // Draw bar chart
                            var chartLeft = 60, chartRight = 680;
                            var chartTop = 60, chartBottom = 350;
                            var barW = (chartRight - chartLeft) / (nSamples + 1) - 2;
                            var maxDelta = 2.0;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(chartLeft, chartBottom); ctx.lineTo(chartRight, chartBottom); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(chartLeft, chartTop); ctx.lineTo(chartLeft, chartBottom); ctx.stroke();

                            // Y-axis labels
                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
                            for (var yv = 0; yv <= maxDelta; yv += 0.5) {
                                var yy = chartBottom - (yv / maxDelta) * (chartBottom - chartTop);
                                ctx.fillText(yv.toFixed(1), chartLeft - 6, yy);
                                ctx.strokeStyle = viz.colors.grid; ctx.lineWidth = 0.5;
                                ctx.beginPath(); ctx.moveTo(chartLeft, yy); ctx.lineTo(chartRight, yy); ctx.stroke();
                            }

                            // Bars
                            for (var j = 0; j <= nSamples; j++) {
                                var bx = chartLeft + j * ((chartRight - chartLeft) / (nSamples + 1)) + 1;
                                var bh = Math.min(deltas[j].delta / maxDelta, 1) * (chartBottom - chartTop);
                                var color = deltas[j].delta <= minDelta + 0.005 ? viz.colors.red : viz.colors.blue;
                                ctx.fillStyle = color + '88';
                                ctx.fillRect(bx, chartBottom - bh, barW, bh);
                                ctx.strokeStyle = color;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(bx, chartBottom - bh, barW, bh);

                                // X-label (every 5)
                                if (j % 5 === 0) {
                                    ctx.fillStyle = viz.colors.text; ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                    ctx.fillText(deltas[j].x.toFixed(1), bx + barW / 2, chartBottom + 4);
                                }
                            }

                            // Min delta line
                            var minDeltaY = chartBottom - (minDelta / maxDelta) * (chartBottom - chartTop);
                            ctx.strokeStyle = viz.colors.red; ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath(); ctx.moveTo(chartLeft, minDeltaY); ctx.lineTo(chartRight, minDeltaY); ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.red; ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
                            ctx.fillText('min delta = ' + minDelta.toFixed(4), chartLeft + 4, minDeltaY - 4);

                            // Title
                            ctx.fillStyle = viz.colors.white; ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            var titleText = mode === 0
                                ? 'x² on [0, 3]: min delta > 0 (Heine-Cantor!)'
                                : 'x² on [0, 10]: min delta shrinks — on R it would reach 0';
                            ctx.fillText(titleText, viz.width / 2, 10);
                            ctx.fillStyle = viz.colors.text; ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('epsilon = ' + epsilon.toFixed(2) + '   |   Each bar = delta at that point x', viz.width / 2, 32);

                            // Y-axis label
                            ctx.save();
                            ctx.translate(16, (chartTop + chartBottom) / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillStyle = viz.colors.text; ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                            ctx.fillText('delta(x)', 0, 0);
                            ctx.restore();

                            // X-axis label
                            ctx.fillStyle = viz.colors.text; ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('x', (chartLeft + chartRight) / 2, chartBottom + 18);

                            ctx.fillStyle = viz.colors.teal; ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Heine-Cantor: on compact [a,b], the infimum of all deltas is strictly positive', viz.width / 2, chartBottom + 48);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that \\(f(x) = 3x + 7\\) is uniformly continuous on \\(\\mathbb R\\).',
                    hint: 'Compute \\(|f(x) - f(y)| = 3|x - y|\\).  What \\(\\delta\\) works?',
                    solution: '\\(|f(x) - f(y)| = |3x + 7 - 3y - 7| = 3|x - y|\\).  Choose \\(\\delta = \\varepsilon / 3\\).  Then \\(|x - y| < \\delta\\) implies \\(|f(x) - f(y)| = 3|x-y| < 3\\varepsilon/3 = \\varepsilon\\).  This \\(\\delta\\) is independent of the point, confirming uniform continuity. \\(\\square\\)'
                },
                {
                    question: 'Show that \\(f(x) = \\sin(x^2)\\) is NOT uniformly continuous on \\(\\mathbb R\\).',
                    hint: 'Find sequences \\(x_n, y_n \\to \\infty\\) with \\(|x_n - y_n| \\to 0\\) but \\(|\\sin(x_n^2) - \\sin(y_n^2)| \\ge 1\\).  Try \\(x_n = \\sqrt{n\\pi}\\) and \\(y_n = \\sqrt{n\\pi + \\pi/2}\\).',
                    solution: 'Let \\(x_n = \\sqrt{2n\\pi}\\) and \\(y_n = \\sqrt{2n\\pi + \\pi/2}\\).  Then \\(|x_n - y_n| = \\frac{\\pi/2}{x_n + y_n} \\to 0\\), but \\(\\sin(x_n^2) = \\sin(2n\\pi) = 0\\) and \\(\\sin(y_n^2) = \\sin(2n\\pi + \\pi/2) = 1\\).  So \\(|f(x_n) - f(y_n)| = 1\\) for all \\(n\\), contradicting uniform continuity with \\(\\varepsilon_0 = 1\\). \\(\\square\\)'
                },
                {
                    question: 'Use the Heine-Cantor theorem to prove: if \\(f\\) is continuous on \\([0, 1]\\), then for every \\(\\varepsilon > 0\\) there exists a polynomial \\(p\\) with \\(|f(x) - p(x)| < \\varepsilon\\) for all \\(x \\in [0,1]\\).  (You may cite the Weierstrass Approximation Theorem; the point is to see that Heine-Cantor provides the uniform error bound.)',
                    hint: 'The Weierstrass Approximation Theorem gives pointwise approximation.  Heine-Cantor upgrades it to uniform.',
                    solution: 'By Heine-Cantor, \\(f\\) is uniformly continuous on \\([0,1]\\).  The Weierstrass Approximation Theorem (whose standard proof uses Bernstein polynomials) states that \\(\\exists\\) polynomials \\(p_n \\to f\\) <em>uniformly</em> on \\([0,1]\\).  In particular, for any \\(\\varepsilon > 0\\), \\(\\exists\\, N\\) with \\(\\|f - p_N\\|_\\infty < \\varepsilon\\).  The uniform convergence (not just pointwise) fundamentally relies on the compactness of \\([0,1]\\).'
                },
                {
                    question: 'Show that \\(f(x) = x^2\\) is Lipschitz on \\([0, 3]\\) and find the optimal Lipschitz constant.',
                    hint: '\\(|x^2 - y^2| = |x+y|\\cdot|x-y|\\).  On \\([0,3]\\), \\(|x+y| \\le 6\\).',
                    solution: '\\(|f(x) - f(y)| = |x-y|\\cdot|x+y| \\le 6|x-y|\\) for \\(x,y \\in [0,3]\\).  So \\(f\\) is Lipschitz with constant \\(K = 6\\).  This is optimal: take \\(x = 3, y = 3 - h\\), then \\(|f(x)-f(y)|/|x-y| = |6-h| \\to 6\\) as \\(h \\to 0\\). \\(\\square\\)'
                },
                {
                    question: 'Prove: if \\(f\\) is uniformly continuous on \\((a, b)\\), then \\(\\lim_{x \\to a^+} f(x)\\) and \\(\\lim_{x \\to b^-} f(x)\\) both exist (and are finite).  Hence \\(f\\) extends to a continuous function on \\([a, b]\\).',
                    hint: 'For the limit at \\(a\\): take a sequence \\(x_n \\to a^+\\).  Show \\((f(x_n))\\) is Cauchy using uniform continuity.',
                    solution: 'Let \\(x_n \\to a^+\\).  For \\(\\varepsilon > 0\\), uniform continuity gives \\(\\delta > 0\\) with \\(|f(s)-f(t)| < \\varepsilon\\) when \\(|s-t| < \\delta\\).  Since \\(x_n \\to a\\), \\(\\exists\\,N\\) with \\(|x_m - x_n| < \\delta\\) for \\(m,n \\ge N\\), so \\(|f(x_m) - f(x_n)| < \\varepsilon\\).  Thus \\((f(x_n))\\) is Cauchy, hence convergent.  The limit is independent of the sequence (same argument), so \\(\\lim_{x \\to a^+} f(x)\\) exists.  Similarly for \\(b^-\\). \\(\\square\\)'
                },
                {
                    question: 'Is \\(f(x) = \\cos(1/x)\\) uniformly continuous on \\((0, 1]\\)?  Justify your answer.',
                    hint: 'Consider \\(x_n = 1/(2n\\pi)\\) and \\(y_n = 1/((2n+1)\\pi)\\).  Compute \\(|x_n - y_n|\\) and \\(|f(x_n) - f(y_n)|\\).',
                    solution: 'No.  Take \\(x_n = \\frac{1}{2n\\pi}\\) and \\(y_n = \\frac{1}{(2n+1)\\pi}\\).  Then \\(f(x_n) = \\cos(2n\\pi) = 1\\) and \\(f(y_n) = \\cos((2n+1)\\pi) = -1\\), so \\(|f(x_n)-f(y_n)| = 2\\).  But \\(|x_n - y_n| = \\frac{1}{2n\\pi(2n+1)\\pi} \\to 0\\).  This violates uniform continuity with \\(\\varepsilon_0 = 2\\). \\(\\square\\)'
                }
            ]
        }
    ]
});
