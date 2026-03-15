window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch10',
    number: 10,
    title: 'Metric Spaces',
    subtitle: 'Beyond the real line — measuring distance in abstract worlds, and discovering what "closeness" truly means.',
    sections: [
        // ============================================================
        // SECTION 1: The Idea of a Metric Space
        // ============================================================
        {
            id: 'ch10-sec01',
            title: 'The Idea of a Metric Space',
            content: `
                <h2>The Idea of a Metric Space</h2>

                <div class="env-block motivation">
                    <div class="env-title">Why Metric Spaces?</div>
                    <div class="env-body">
                        <p>Throughout this course, convergence has meant \\(|a_n - L| < \\varepsilon\\): closeness measured by absolute value on \\(\\mathbb{R}\\). But the same ideas (limits, continuity, compactness) work whenever we have a notion of "distance." A <strong>metric space</strong> is any set with a distance function satisfying three natural axioms. This chapter shows that the entire machinery of analysis generalizes beautifully.</p>
                        <p><strong>Roadmap for this chapter:</strong> We begin by defining metric spaces and building a gallery of key examples (Section 1). We then develop the topology of metric spaces: open sets, closed sets, interior, closure, and boundary (Section 2). Next, convergence and completeness are generalized to the abstract setting, culminating in the Banach fixed-point theorem (Section 3). The chapter continues with compactness (Section 4) and connectedness (Section 5), showing how these fundamental properties transfer from \\(\\mathbb{R}\\) to arbitrary metric spaces.</p>
                    </div>
                </div>

                <p>Throughout this course we have studied the real line \\(\\mathbb{R}\\) with its usual notion of distance \\(|x - y|\\). But many mathematical objects live in spaces far richer than a single number line. Points in the plane, continuous functions, sequences of numbers — all of these can be equipped with a notion of <strong>distance</strong>.</p>

                <p>A <strong>metric space</strong> is any set \\(X\\) together with a function \\(d: X \\times X \\to [0,\\infty)\\) satisfying three axioms that capture the essence of what "distance" should mean.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.1 (Metric Space)</div>
                    <div class="env-body">
                        <p>A <strong>metric space</strong> is a pair \\((X, d)\\) where \\(X\\) is a set and \\(d: X \\times X \\to [0, \\infty)\\) is a function (called a <strong>metric</strong> or <strong>distance function</strong>) satisfying, for all \\(x, y, z \\in X\\):</p>
                        <ol>
                            <li><strong>Positivity:</strong> \\(d(x, y) = 0\\) if and only if \\(x = y\\).</li>
                            <li><strong>Symmetry:</strong> \\(d(x, y) = d(y, x)\\).</li>
                            <li><strong>Triangle inequality:</strong> \\(d(x, z) \\leq d(x, y) + d(y, z)\\).</li>
                        </ol>
                    </div>
                </div>

                <p>These three axioms are remarkably powerful. They tell us that (1) two distinct points are always a positive distance apart, (2) the distance from \\(A\\) to \\(B\\) is the same as from \\(B\\) to \\(A\\), and (3) the direct route is never longer than a detour.</p>

                <div class="viz-placeholder" data-viz="metric-axioms-viz"></div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Think of the triangle inequality as a "no shortcuts beyond the direct path" principle. If you walk from your house to the store and then to school, you walk at least as far as going directly from your house to school. This idea, distilled into an axiom, is what makes a metric space work.</p>
                    </div>
                </div>

                <h3>Key Examples of Metric Spaces</h3>

                <p>Let us build a gallery of important metric spaces that will appear throughout analysis.</p>

                <div class="env-block example">
                    <div class="env-title">Example 10.2 (The Euclidean Metrics)</div>
                    <div class="env-body">
                        <p>On \\(\\mathbb{R}^n\\), the <strong>Euclidean metric</strong> is:</p>
                        <p>\\[d_2(\\mathbf{x}, \\mathbf{y}) = \\sqrt{\\sum_{k=1}^n (x_k - y_k)^2}\\]</p>
                        <p>For \\(n = 1\\) this reduces to \\(|x - y|\\); for \\(n = 2\\) it is the familiar distance formula from geometry.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.3 (Taxicab and Max Metrics on \\(\\mathbb{R}^2\\))</div>
                    <div class="env-body">
                        <p>On \\(\\mathbb{R}^2\\), two other natural metrics are:</p>
                        <ul>
                            <li><strong>Taxicab (Manhattan) metric:</strong> \\(d_1(\\mathbf{x}, \\mathbf{y}) = |x_1 - y_1| + |x_2 - y_2|\\)</li>
                            <li><strong>Maximum (Chebyshev) metric:</strong> \\(d_\\infty(\\mathbf{x}, \\mathbf{y}) = \\max(|x_1 - y_1|, |x_2 - y_2|)\\)</li>
                        </ul>
                        <p>All three metrics on \\(\\mathbb{R}^2\\) define different "shapes" for balls, but the same notion of convergence.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="metric-balls-compare"></div>

                <div class="env-block example">
                    <div class="env-title">Example 10.4 (The Discrete Metric)</div>
                    <div class="env-body">
                        <p>On any set \\(X\\), the <strong>discrete metric</strong> is:</p>
                        <p>\\[d(x, y) = \\begin{cases} 0 & \\text{if } x = y, \\\\ 1 & \\text{if } x \\neq y. \\end{cases}\\]</p>
                        <p>This is the simplest possible metric — every pair of distinct points is exactly distance 1 apart. All three axioms are easily verified.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.5 (Function Spaces)</div>
                    <div class="env-body">
                        <p>On \\(C([a,b])\\), the set of continuous functions \\(f: [a,b] \\to \\mathbb{R}\\), define:</p>
                        <p>\\[d_\\infty(f, g) = \\sup_{x \\in [a,b]} |f(x) - g(x)|\\]</p>
                        <p>This is the <strong>uniform metric</strong> (or sup metric). It measures the "worst-case" pointwise difference. Convergence in this metric is precisely <em>uniform convergence</em>.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>A metric space is <em>not</em> required to be a vector space. For instance, any subset of \\(\\mathbb{R}^n\\) inherits a metric (the <strong>subspace metric</strong>). The set of all English words with the edit-distance metric (Levenshtein distance) is a perfectly valid metric space with no linear structure at all.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="function-space-metric"></div>
            `,
            visualizations: [
                {
                    id: 'metric-axioms-viz',
                    title: 'The Triangle Inequality in Action',
                    description: 'Drag three points to see how the triangle inequality d(A,C) <= d(A,B) + d(B,C) always holds.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 40, originX: 350, originY: 210 });
                        var pA = viz.addDraggable('A', -3, 2, viz.colors.blue, 10, function() {});
                        var pB = viz.addDraggable('B', 2, 3, viz.colors.orange, 10, function() {});
                        var pC = viz.addDraggable('C', 3, -2, viz.colors.green, 10, function() {});

                        function dist(a, b) {
                            return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            var dAB = dist(pA, pB);
                            var dBC = dist(pB, pC);
                            var dAC = dist(pA, pC);

                            // Draw the triangle sides
                            viz.drawSegment(pA.x, pA.y, pB.x, pB.y, viz.colors.orange, 2);
                            viz.drawSegment(pB.x, pB.y, pC.x, pC.y, viz.colors.green, 2);
                            viz.drawSegment(pA.x, pA.y, pC.x, pC.y, viz.colors.red, 2.5);

                            // Labels on edges
                            var midAB = viz.toScreen((pA.x + pB.x) / 2, (pA.y + pB.y) / 2);
                            var midBC = viz.toScreen((pB.x + pC.x) / 2, (pB.y + pC.y) / 2);
                            var midAC = viz.toScreen((pA.x + pC.x) / 2, (pA.y + pC.y) / 2);

                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('d(A,B)=' + dAB.toFixed(2), midAB[0], midAB[1] - 14);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('d(B,C)=' + dBC.toFixed(2), midBC[0] + 14, midBC[1]);
                            ctx.fillStyle = viz.colors.red;
                            ctx.fillText('d(A,C)=' + dAC.toFixed(2), midAC[0] - 14, midAC[1] + 14);

                            viz.drawDraggables();

                            // Point labels
                            var sA = viz.toScreen(pA.x, pA.y);
                            var sB = viz.toScreen(pB.x, pB.y);
                            var sC = viz.toScreen(pC.x, pC.y);
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('A', sA[0] - 16, sA[1] - 16);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('B', sB[0] + 16, sB[1] - 16);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('C', sC[0] + 16, sC[1] + 16);

                            // Triangle inequality check
                            var slack = (dAB + dBC) - dAC;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('Triangle Inequality: d(A,C) \u2264 d(A,B) + d(B,C)', viz.width / 2, 22);
                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText(
                                dAC.toFixed(2) + ' \u2264 ' + dAB.toFixed(2) + ' + ' + dBC.toFixed(2) + ' = ' + (dAB + dBC).toFixed(2) +
                                '    (slack = ' + slack.toFixed(2) + ')',
                                viz.width / 2, 44
                            );
                            ctx.fillStyle = slack < 0.01 ? viz.colors.yellow : viz.colors.teal;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText(
                                slack < 0.01 ? 'Equality holds! (points are nearly collinear)' : 'Strict inequality \u2014 the detour is longer.',
                                viz.width / 2, 62
                            );
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'metric-balls-compare',
                    title: 'Unit Balls in Three Metrics',
                    description: 'Compare the shape of the unit ball B(0,r) under the Euclidean, Taxicab, and Max metrics.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 50, originX: 350, originY: 230 });
                        var radius = 2.0;
                        var showEuclid = true, showTaxi = true, showMax = true;

                        var slider = VizEngine.createSlider(controls, 'Radius r', 0.5, 4, 2.0, 0.1, function(v) {
                            radius = parseFloat(v);
                        });
                        VizEngine.createButton(controls, 'Toggle Euclidean', function() { showEuclid = !showEuclid; });
                        VizEngine.createButton(controls, 'Toggle Taxicab', function() { showTaxi = !showTaxi; });
                        VizEngine.createButton(controls, 'Toggle Max', function() { showMax = !showMax; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            // Max (Chebyshev) ball — a square
                            if (showMax) {
                                viz.drawPolygon(
                                    [[-radius, -radius], [radius, -radius], [radius, radius], [-radius, radius]],
                                    viz.colors.green + '18', viz.colors.green, 2
                                );
                            }

                            // Taxicab ball — a diamond
                            if (showTaxi) {
                                viz.drawPolygon(
                                    [[0, radius], [radius, 0], [0, -radius], [-radius, 0]],
                                    viz.colors.orange + '18', viz.colors.orange, 2
                                );
                            }

                            // Euclidean ball — a circle
                            if (showEuclid) {
                                viz.drawCircle(0, 0, radius, viz.colors.blue + '18', viz.colors.blue, 2);
                            }

                            // Origin
                            viz.drawPoint(0, 0, viz.colors.white, null, 4);

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                            ctx.fillText('Unit Balls: B(0, ' + radius.toFixed(1) + ') under Three Metrics', viz.width / 2, 20);

                            // Legend
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            if (showEuclid) { ctx.fillStyle = viz.colors.blue; ctx.fillText('\u25CF Euclidean (d\u2082) \u2014 circle', 20, viz.height - 50); }
                            if (showTaxi) { ctx.fillStyle = viz.colors.orange; ctx.fillText('\u25CF Taxicab (d\u2081) \u2014 diamond', 20, viz.height - 32); }
                            if (showMax) { ctx.fillStyle = viz.colors.green; ctx.fillText('\u25CF Max (d\u221E) \u2014 square', 20, viz.height - 14); }

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'function-space-metric',
                    title: 'Sup Metric on Function Space',
                    description: 'Two functions f and g on [0,1]. The sup metric d(f,g) is the maximum vertical gap.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 80, originX: 80, originY: 300 });
                        var amp = 0.5;

                        VizEngine.createSlider(controls, 'Perturbation', 0, 1.5, 0.5, 0.05, function(v) { amp = parseFloat(v); });

                        function f(x) { return Math.sin(Math.PI * x) * 2; }
                        function g(x) { return Math.sin(Math.PI * x) * 2 + amp * Math.sin(3 * Math.PI * x); }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(0.5);
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            // Shade between f and g
                            viz.shadeBetween(f, g, 0, 4, viz.colors.red + '22');

                            // Draw functions
                            viz.drawFunction(f, 0, 4, viz.colors.blue, 2.5);
                            viz.drawFunction(g, 0, 4, viz.colors.orange, 2.5);

                            // Find sup |f - g|
                            var maxDiff = 0;
                            var maxX = 0;
                            for (var i = 0; i <= 400; i++) {
                                var x = i / 100;
                                var diff = Math.abs(f(x) - g(x));
                                if (diff > maxDiff) { maxDiff = diff; maxX = x; }
                            }

                            // Draw the max gap line
                            var fy = f(maxX), gy = g(maxX);
                            viz.drawSegment(maxX, fy, maxX, gy, viz.colors.red, 3);
                            viz.drawPoint(maxX, fy, viz.colors.red, null, 4);
                            viz.drawPoint(maxX, gy, viz.colors.red, null, 4);

                            var midS = viz.toScreen(maxX, (fy + gy) / 2);
                            ctx.fillStyle = viz.colors.red;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
                            ctx.fillText('sup|f\u2212g| = ' + maxDiff.toFixed(3), midS[0] + 10, midS[1]);

                            // Title and legend
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('The Sup Metric on C([0, 4])', viz.width / 2, 18);

                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('f(x) = sin(\u03C0x)\u00B72', 480, 50);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('g(x) = f(x) + perturbation', 480, 68);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Verify that the discrete metric satisfies all three metric axioms. In particular, why does the triangle inequality hold?',
                    hint: 'For the triangle inequality, consider two cases: either \\(x = z\\) (and the inequality is trivially true), or \\(x \\neq z\\). In the latter case, what must \\(d(x,y) + d(y,z)\\) be?',
                    solution: '<strong>Positivity:</strong> \\(d(x,y) = 0 \\iff x = y\\) by definition. <strong>Symmetry:</strong> \\(d(x,y) = d(y,x)\\) since the condition \\(x = y\\) is symmetric. <strong>Triangle inequality:</strong> If \\(x = z\\), then \\(d(x,z) = 0 \\leq d(x,y) + d(y,z)\\). If \\(x \\neq z\\), then at least one of \\(x \\neq y\\) or \\(y \\neq z\\) must hold (otherwise \\(x = y = z\\)), so \\(d(x,y) + d(y,z) \\geq 1 = d(x,z)\\).'
                },
                {
                    question: 'Compute \\(d_1\\), \\(d_2\\), and \\(d_\\infty\\) between the points \\(\\mathbf{a} = (1, 4)\\) and \\(\\mathbf{b} = (4, 0)\\) in \\(\\mathbb{R}^2\\).',
                    hint: 'Apply each formula directly. For \\(d_2\\), recall the Pythagorean theorem.',
                    solution: '\\(d_1(\\mathbf{a}, \\mathbf{b}) = |1-4| + |4-0| = 3 + 4 = 7\\). \\(d_2(\\mathbf{a}, \\mathbf{b}) = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5\\). \\(d_\\infty(\\mathbf{a}, \\mathbf{b}) = \\max(3, 4) = 4\\). Note that \\(d_\\infty \\leq d_2 \\leq d_1\\) always holds.'
                },
                {
                    question: 'Show that if \\(d\\) is a metric on \\(X\\), then \\(d\'(x,y) = \\frac{d(x,y)}{1 + d(x,y)}\\) is also a metric on \\(X\\).',
                    hint: 'Positivity and symmetry are straightforward. For the triangle inequality, use the fact that \\(t \\mapsto \\frac{t}{1+t}\\) is an increasing function and apply the original triangle inequality.',
                    solution: 'Since \\(f(t) = t/(1+t)\\) is strictly increasing on \\([0,\\infty)\\) and \\(f(0) = 0\\), positivity and symmetry follow from those of \\(d\\). For the triangle inequality: \\(d(x,z) \\leq d(x,y) + d(y,z)\\), so \\(d\'(x,z) = f(d(x,z)) \\leq f(d(x,y) + d(y,z))\\). One checks that \\(f(a+b) \\leq f(a) + f(b)\\) for \\(a,b \\geq 0\\) (since \\(\\frac{a+b}{1+a+b} \\leq \\frac{a}{1+a} + \\frac{b}{1+b}\\)), which can be verified by cross-multiplication.'
                },
                {
                    question: 'Prove that in \\(\\mathbb{R}^n\\), \\(d_\\infty(\\mathbf{x}, \\mathbf{y}) \\leq d_2(\\mathbf{x}, \\mathbf{y}) \\leq d_1(\\mathbf{x}, \\mathbf{y}) \\leq n \\cdot d_\\infty(\\mathbf{x}, \\mathbf{y})\\).',
                    hint: 'The first inequality follows because the max is at most the Euclidean norm. The second follows from Cauchy-Schwarz. The third: each \\(|x_k - y_k| \\leq d_\\infty\\).',
                    solution: 'Let \\(a_k = |x_k - y_k|\\). Then \\(d_\\infty = \\max_k a_k \\leq \\sqrt{\\sum a_k^2} = d_2\\) (since the square root of a sum of squares is at least each term). Next, by Cauchy-Schwarz, \\(d_2 = \\sqrt{\\sum a_k^2} \\leq \\sum a_k = d_1\\). Finally, \\(d_1 = \\sum a_k \\leq n \\cdot \\max_k a_k = n \\cdot d_\\infty\\).'
                },
                {
                    question: 'Let \\(X = \\{0, 1\\}^n\\) be the set of binary strings of length \\(n\\), and define \\(d(x, y)\\) as the number of positions where \\(x\\) and \\(y\\) differ (the <strong>Hamming distance</strong>). Prove this is a metric.',
                    hint: 'Positivity and symmetry are clear. For the triangle inequality, argue position-by-position.',
                    solution: '\\(d(x,y) = 0 \\iff x_i = y_i\\) for all \\(i \\iff x = y\\). Symmetry is clear. For the triangle inequality: at each position \\(i\\), if \\(x_i \\neq z_i\\), then either \\(x_i \\neq y_i\\) or \\(y_i \\neq z_i\\) (or both). Summing over all positions gives \\(d(x,z) \\leq d(x,y) + d(y,z)\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Open Sets, Closed Sets, and Topology
        // ============================================================
        {
            id: 'ch10-sec02',
            title: 'Open Sets, Closed Sets, and Topology',
            content: `
                <h2>Open Sets, Closed Sets, and Topology</h2>

                <p>In Chapter 4, we studied open and closed sets on the real line and saw how they govern convergence and continuity. Those ideas relied on the absolute-value distance \\(|x - y|\\). Now that we have a general distance function \\(d\\), the same definitions carry over word-for-word, and we discover that topology is really about the metric, not about \\(\\mathbb{R}\\) specifically.</p>

                <p>The metric gives us a way to measure distance, but many fundamental concepts in analysis — continuity, convergence, compactness — depend not on the <em>specific distances</em> but on which sets are "open." This leads to the topological structure of a metric space.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.6 (Open Ball)</div>
                    <div class="env-body">
                        <p>Let \\((X, d)\\) be a metric space, \\(x \\in X\\), and \\(r > 0\\). The <strong>open ball</strong> of radius \\(r\\) centered at \\(x\\) is:</p>
                        <p>\\[B(x, r) = \\{y \\in X : d(x, y) < r\\}\\]</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.7 (Open and Closed Sets)</div>
                    <div class="env-body">
                        <p>A set \\(U \\subseteq X\\) is <strong>open</strong> if for every \\(x \\in U\\), there exists \\(r > 0\\) such that \\(B(x, r) \\subseteq U\\).</p>
                        <p>A set \\(F \\subseteq X\\) is <strong>closed</strong> if its complement \\(X \\setminus F\\) is open.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>"Open" and "closed" are <strong>not</strong> opposites. A set can be both open and closed (like \\(X\\) itself and \\(\\emptyset\\)), or neither (like \\([0,1)\\) in \\(\\mathbb{R}\\)).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="open-closed-sets-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.8 (Properties of Open Sets)</div>
                    <div class="env-body">
                        <p>In any metric space \\((X, d)\\):</p>
                        <ol>
                            <li>\\(\\emptyset\\) and \\(X\\) are open.</li>
                            <li>The intersection of <em>finitely many</em> open sets is open.</li>
                            <li>The union of <em>any collection</em> of open sets is open.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p>(1) \\(\\emptyset\\) is vacuously open; for any \\(x \\in X\\), take any \\(r > 0\\), and \\(B(x,r) \\subseteq X\\).</p>
                        <p>(2) If \\(x \\in U_1 \\cap \\cdots \\cap U_n\\) with each \\(U_i\\) open, choose \\(r_i > 0\\) so that \\(B(x, r_i) \\subseteq U_i\\). Then \\(r = \\min(r_1, \\ldots, r_n) > 0\\) works for the intersection.</p>
                        <p>(3) If \\(x \\in \\bigcup_\\alpha U_\\alpha\\), then \\(x \\in U_\\beta\\) for some \\(\\beta\\), and any ball \\(B(x,r) \\subseteq U_\\beta \\subseteq \\bigcup_\\alpha U_\\alpha\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Why can't we take infinite intersections of open sets? Consider \\(U_n = (-1/n, 1/n)\\) in \\(\\mathbb{R}\\). Each is open, but \\(\\bigcap_{n=1}^\\infty U_n = \\{0\\}\\), which is a single point — <em>not</em> open.</p>
                    </div>
                </div>

                <h3>Interior, Closure, and Boundary</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.9</div>
                    <div class="env-body">
                        <p>For \\(A \\subseteq X\\):</p>
                        <ul>
                            <li>The <strong>interior</strong> \\(\\mathrm{int}(A)\\) is the largest open set contained in \\(A\\).</li>
                            <li>The <strong>closure</strong> \\(\\overline{A}\\) is the smallest closed set containing \\(A\\).</li>
                            <li>The <strong>boundary</strong> \\(\\partial A = \\overline{A} \\setminus \\mathrm{int}(A)\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 10.10</div>
                    <div class="env-body">
                        <p>A point \\(x\\) is in \\(\\overline{A}\\) if and only if every open ball \\(B(x, r)\\) intersects \\(A\\). Equivalently, \\(x \\in \\overline{A}\\) if and only if there is a sequence \\((a_n)\\) in \\(A\\) with \\(a_n \\to x\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="interior-closure-boundary"></div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>A set is <strong>dense</strong> in \\(X\\) if \\(\\overline{A} = X\\). For example, \\(\\mathbb{Q}\\) is dense in \\(\\mathbb{R}\\) — every real number is the limit of rationals.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'open-closed-sets-viz',
                    title: 'Open vs Closed Sets in R',
                    description: 'See the difference between open intervals (a,b), closed intervals [a,b], and half-open intervals.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 320, scale: 50, originX: 100, originY: 160 });
                        var a = 2;
                        var b = 8;

                        VizEngine.createSlider(controls, 'Left endpoint', 0, 5, 2, 0.5, function(v) { a = parseFloat(v); });
                        VizEngine.createSlider(controls, 'Right endpoint', 5, 11, 8, 0.5, function(v) { b = parseFloat(v); });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Number line
                            var s0 = viz.toScreen(0, 0);
                            var s12 = viz.toScreen(11, 0);
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(s0[0], s0[1]); ctx.lineTo(s12[0], s12[1]); ctx.stroke();

                            // Tick marks
                            for (var i = 0; i <= 11; i++) {
                                var pos = viz.toScreen(i, 0);
                                ctx.strokeStyle = viz.colors.text; ctx.lineWidth = 1;
                                ctx.beginPath(); ctx.moveTo(pos[0], pos[1] - 5); ctx.lineTo(pos[0], pos[1] + 5); ctx.stroke();
                                ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                ctx.fillText(i, pos[0], pos[1] + 8);
                            }

                            // Open interval (a, b)
                            var y1 = 1.5;
                            viz.drawOpenInterval(a, b, y1, viz.colors.blue, 4);
                            var labelPos1 = viz.toScreen((a + b) / 2, y1);
                            ctx.fillStyle = viz.colors.blue; ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                            ctx.fillText('Open: (' + a.toFixed(1) + ', ' + b.toFixed(1) + ')', labelPos1[0], labelPos1[1] - 10);

                            // Closed interval [a, b]
                            var y2 = 0;
                            viz.drawClosedInterval(a, b, y2, viz.colors.orange, 4);
                            var labelPos2 = viz.toScreen((a + b) / 2, y2);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('Closed: [' + a.toFixed(1) + ', ' + b.toFixed(1) + ']', labelPos2[0], labelPos2[1] - 10);

                            // Half-open [a, b)
                            var y3 = -1.5;
                            var sA3 = viz.toScreen(a, y3);
                            var sB3 = viz.toScreen(b, y3);
                            ctx.strokeStyle = viz.colors.green; ctx.lineWidth = 4;
                            ctx.beginPath(); ctx.moveTo(sA3[0], sA3[1]); ctx.lineTo(sB3[0], sB3[1]); ctx.stroke();
                            // Closed at left
                            ctx.fillStyle = viz.colors.green;
                            ctx.beginPath(); ctx.arc(sA3[0], sA3[1], 4, 0, Math.PI * 2); ctx.fill();
                            // Open at right
                            ctx.beginPath(); ctx.arc(sB3[0], sB3[1], 4, 0, Math.PI * 2);
                            ctx.strokeStyle = viz.colors.green; ctx.lineWidth = 2; ctx.stroke();

                            var labelPos3 = viz.toScreen((a + b) / 2, y3);
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                            ctx.fillText('Neither: [' + a.toFixed(1) + ', ' + b.toFixed(1) + ')', labelPos3[0], labelPos3[1] - 10);

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.fillText('Open, Closed, and Neither', viz.width / 2, 20);

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('\u25CB = open endpoint (not included)    \u25CF = closed endpoint (included)', viz.width / 2, viz.height - 12);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'interior-closure-boundary',
                    title: 'Interior, Closure, and Boundary',
                    description: 'See how a set A in the plane decomposes into interior, boundary, and exterior regions.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 40, originX: 350, originY: 210 });
                        var radius = 3.0;
                        var showInterior = true, showBoundary = true, showClosure = false;

                        VizEngine.createSlider(controls, 'Radius', 1, 5, 3.0, 0.2, function(v) { radius = parseFloat(v); });
                        VizEngine.createButton(controls, 'Show Interior', function() { showInterior = !showInterior; });
                        VizEngine.createButton(controls, 'Show Boundary', function() { showBoundary = !showBoundary; });
                        VizEngine.createButton(controls, 'Show Closure', function() { showClosure = !showClosure; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            // The set A = closed disk of given radius
                            if (showClosure) {
                                viz.drawCircle(0, 0, radius, viz.colors.purple + '25', viz.colors.purple, 2);
                                var lblC = viz.toScreen(0, -radius - 0.6);
                                ctx.fillStyle = viz.colors.purple;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                                ctx.fillText('Closure = A (already closed)', lblC[0], lblC[1]);
                            }

                            // Interior = open disk
                            if (showInterior) {
                                viz.drawCircle(0, 0, radius * 0.95, viz.colors.teal + '20', null, 0);
                                viz.drawCircle(0, 0, radius, null, viz.colors.teal, 1.5);
                                var lblI = viz.toScreen(0, 0);
                                ctx.fillStyle = viz.colors.teal;
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                                ctx.fillText('int(A) = B(0,' + radius.toFixed(1) + ')', lblI[0], lblI[1]);
                            }

                            // Boundary = the circle itself
                            if (showBoundary) {
                                // Draw boundary as thick ring
                                var center = viz.toScreen(0, 0);
                                ctx.strokeStyle = viz.colors.red;
                                ctx.lineWidth = 4;
                                ctx.beginPath();
                                ctx.arc(center[0], center[1], radius * viz.scale, 0, Math.PI * 2);
                                ctx.stroke();

                                var lblB = viz.toScreen(radius * 0.7, radius * 0.7);
                                ctx.fillStyle = viz.colors.red;
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
                                ctx.fillText('\u2202A = circle of radius ' + radius.toFixed(1), lblB[0] + 8, lblB[1]);
                            }

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Interior, Closure, Boundary of the Closed Disk', viz.width / 2, 18);

                            // A sample boundary point with ball
                            var bx = radius, by = 0;
                            var sampleR = 0.8;
                            viz.drawCircle(bx, by, sampleR, null, viz.colors.yellow + '66', 1);
                            viz.drawPoint(bx, by, viz.colors.yellow, null, 4);
                            var lblS = viz.toScreen(bx + sampleR + 0.3, by);
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Every ball around', lblS[0], lblS[1] - 8);
                            ctx.fillText('a boundary point', lblS[0], lblS[1] + 5);
                            ctx.fillText('hits both A and X\\A', lblS[0], lblS[1] + 18);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that every open ball \\(B(x, r)\\) in a metric space is an open set.',
                    hint: 'Take \\(y \\in B(x,r)\\) and set \\(\\delta = r - d(x,y) > 0\\). Show that \\(B(y, \\delta) \\subseteq B(x, r)\\) using the triangle inequality.',
                    solution: 'Let \\(y \\in B(x,r)\\) and set \\(\\delta = r - d(x,y) > 0\\). For any \\(z \\in B(y, \\delta)\\), we have \\(d(x,z) \\leq d(x,y) + d(y,z) < d(x,y) + \\delta = d(x,y) + r - d(x,y) = r\\). So \\(z \\in B(x,r)\\), hence \\(B(y, \\delta) \\subseteq B(x,r)\\).'
                },
                {
                    question: 'Show that a set \\(F\\) in a metric space is closed if and only if it contains all its limit points (i.e., if \\((x_n) \\subseteq F\\) and \\(x_n \\to x\\), then \\(x \\in F\\)).',
                    hint: 'For the forward direction, argue by contradiction: if \\(x \\notin F\\), then \\(x \\in X \\setminus F\\) which is open, giving a ball around \\(x\\) missing \\(F\\).',
                    solution: '(\\(\\Rightarrow\\)) Suppose \\(F\\) is closed and \\(x_n \\to x\\) with \\(x_n \\in F\\). If \\(x \\notin F\\), then \\(x \\in X \\setminus F\\) which is open, so \\(B(x,r) \\subseteq X \\setminus F\\) for some \\(r > 0\\). But \\(x_n \\to x\\) means some \\(x_n \\in B(x,r)\\), contradicting \\(x_n \\in F\\). (\\(\\Leftarrow\\)) If \\(y \\in X \\setminus F\\), no sequence in \\(F\\) converges to \\(y\\), so there exists \\(r > 0\\) with \\(B(y,r) \\cap F = \\emptyset\\), making \\(X \\setminus F\\) open.'
                },
                {
                    question: 'In the discrete metric on a set \\(X\\), describe all open sets.',
                    hint: 'What does an open ball of radius \\(r\\) look like when \\(r \\leq 1\\) vs \\(r > 1\\)?',
                    solution: 'In the discrete metric, \\(B(x, r) = \\{x\\}\\) if \\(0 < r \\leq 1\\), and \\(B(x, r) = X\\) if \\(r > 1\\). Since \\(\\{x\\}\\) is an open ball, every singleton is open. Therefore every subset \\(A \\subseteq X\\) is a union of singletons, hence open. <em>Every set is open</em> (and therefore every set is also closed).'
                },
                {
                    question: 'Let \\(A = \\mathbb{Q} \\cap [0,1]\\) as a subset of \\(\\mathbb{R}\\). Find \\(\\mathrm{int}(A)\\), \\(\\overline{A}\\), and \\(\\partial A\\).',
                    hint: 'Can any open interval be contained entirely within \\(\\mathbb{Q}\\)? Can every real number in \\([0,1]\\) be approximated by rationals?',
                    solution: '\\(\\mathrm{int}(A) = \\emptyset\\) since no open interval lies entirely in \\(\\mathbb{Q}\\). \\(\\overline{A} = [0,1]\\) since every real number in \\([0,1]\\) is a limit of rationals. Therefore \\(\\partial A = \\overline{A} \\setminus \\mathrm{int}(A) = [0,1]\\).'
                },
                {
                    question: 'Give an example of a set in \\(\\mathbb{R}^2\\) (with the Euclidean metric) that is neither open nor closed.',
                    hint: 'Think of a disk that includes some boundary points but not others.',
                    solution: 'The set \\(A = \\{(x,y) : x^2 + y^2 \\leq 1, y > 0\\} \\cup \\{(x, 0) : -1 < x < 1\\}\\) is neither open nor closed. A simpler example: \\(B = \\{(x,y) : x^2 + y^2 < 1\\} \\cup \\{(1,0)\\}\\). It is not open (no ball around \\((1,0)\\) lies in \\(B\\)) and not closed (the rest of the boundary circle is missing).'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Convergence and Completeness
        // ============================================================
        {
            id: 'ch10-sec03',
            title: 'Convergence and Completeness',
            content: `
                <h2>Convergence and Completeness</h2>

                <p>Recall how central the Cauchy criterion was in Chapters 2 and 3: a sequence in \\(\\mathbb{R}\\) converges if and only if it is Cauchy, precisely because \\(\\mathbb{R}\\) is complete. In a general metric space, the Cauchy condition still makes sense, but completeness is no longer guaranteed; it becomes a property that some spaces enjoy and others lack. This distinction turns out to be one of the most important dividing lines in analysis.</p>

                <p>The notion of convergence — which has been the heartbeat of this entire course — generalizes seamlessly to metric spaces. All we need is a distance function.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.11 (Convergence in a Metric Space)</div>
                    <div class="env-body">
                        <p>A sequence \\((x_n)\\) in a metric space \\((X, d)\\) <strong>converges</strong> to \\(x \\in X\\) if for every \\(\\varepsilon > 0\\), there exists \\(N \\in \\mathbb{N}\\) such that \\(d(x_n, x) < \\varepsilon\\) for all \\(n \\geq N\\).</p>
                        <p>We write \\(x_n \\to x\\) or \\(\\lim_{n \\to \\infty} x_n = x\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.12 (Cauchy Sequence)</div>
                    <div class="env-body">
                        <p>A sequence \\((x_n)\\) in \\((X, d)\\) is <strong>Cauchy</strong> if for every \\(\\varepsilon > 0\\), there exists \\(N\\) such that \\(d(x_m, x_n) < \\varepsilon\\) for all \\(m, n \\geq N\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 10.13</div>
                    <div class="env-body">
                        <p>Every convergent sequence is Cauchy. The converse need not hold in general.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="convergence-metric-space"></div>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.14 (Complete Metric Space)</div>
                    <div class="env-body">
                        <p>A metric space \\((X, d)\\) is <strong>complete</strong> if every Cauchy sequence in \\(X\\) converges to a limit in \\(X\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.15 (Complete and Incomplete Spaces)</div>
                    <div class="env-body">
                        <ul>
                            <li>\\(\\mathbb{R}\\) with \\(|x - y|\\) is complete (this was the content of the Cauchy completeness theorem).</li>
                            <li>\\(\\mathbb{R}^n\\) with any of \\(d_1, d_2, d_\\infty\\) is complete.</li>
                            <li>\\(C([a,b])\\) with the sup metric is complete (uniform limits of continuous functions are continuous).</li>
                            <li>\\(\\mathbb{Q}\\) with \\(|x - y|\\) is <strong>not</strong> complete: the sequence \\(1, 1.4, 1.41, 1.414, \\ldots\\) is Cauchy in \\(\\mathbb{Q}\\) but converges to \\(\\sqrt{2} \\notin \\mathbb{Q}\\).</li>
                            <li>The open interval \\((0, 1)\\) with \\(|x-y|\\) is not complete: \\(x_n = 1/n\\) is Cauchy but converges to \\(0 \\notin (0,1)\\).</li>
                        </ul>
                    </div>
                </div>

                <h3>The Banach Fixed-Point Theorem</h3>

                <p>Completeness has a stunning application: the existence and uniqueness of fixed points for contraction mappings. This is one of the most useful theorems in all of mathematics.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.16 (Contraction Mapping)</div>
                    <div class="env-body">
                        <p>Let \\((X, d)\\) be a metric space. A function \\(T: X \\to X\\) is a <strong>contraction</strong> if there exists a constant \\(0 \\leq c < 1\\) such that:</p>
                        <p>\\[d(T(x), T(y)) \\leq c \\cdot d(x, y) \\quad \\text{for all } x, y \\in X.\\]</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.17 (Banach Fixed-Point Theorem)</div>
                    <div class="env-body">
                        <p>Let \\((X, d)\\) be a <strong>complete</strong> metric space and \\(T: X \\to X\\) a contraction with constant \\(c < 1\\). Then:</p>
                        <ol>
                            <li>\\(T\\) has a unique fixed point \\(x^* \\in X\\) (i.e., \\(T(x^*) = x^*\\)).</li>
                            <li>For any \\(x_0 \\in X\\), the iteration \\(x_{n+1} = T(x_n)\\) converges to \\(x^*\\).</li>
                            <li>The error estimate \\(d(x_n, x^*) \\leq \\frac{c^n}{1-c} \\cdot d(x_0, x_1)\\) holds.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Idea</div>
                    <div class="env-body">
                        <p>Start anywhere: \\(x_0, x_1 = T(x_0), x_2 = T(x_1), \\ldots\\). Then \\(d(x_{n+1}, x_n) \\leq c \\cdot d(x_n, x_{n-1}) \\leq c^n \\cdot d(x_1, x_0)\\). These distances form a geometric series, so \\((x_n)\\) is Cauchy. By completeness, \\(x_n \\to x^*\\). Taking limits in \\(x_{n+1} = T(x_n)\\) and using that \\(T\\) is continuous (it's Lipschitz) gives \\(x^* = T(x^*)\\). Uniqueness: if \\(T(y^*) = y^*\\) too, then \\(d(x^*, y^*) = d(T(x^*), T(y^*)) \\leq c \\cdot d(x^*, y^*)\\), forcing \\(d(x^*, y^*) = 0\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="banach-fixed-point"></div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Imagine repeatedly photocopying a picture, but each copy shrinks the image by a factor of \\(c\\). No matter what the original picture looks like, after many copies everything converges to a single point — the fixed point. The contraction squeezes the entire space down to one point.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.18 (Newton's Method as a Contraction)</div>
                    <div class="env-body">
                        <p>To solve \\(\\cos(x) = x\\), define \\(T(x) = \\cos(x)\\). On a suitable interval, \\(|T'(x)| = |\\sin(x)| < 1\\), so \\(T\\) is a contraction. Starting from any \\(x_0\\), the iterations \\(x_0, \\cos(x_0), \\cos(\\cos(x_0)), \\ldots\\) converge to the unique fixed point \\(x^* \\approx 0.7391\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'convergence-metric-space',
                    title: 'Convergence in a Metric Space',
                    description: 'Watch a sequence spiral toward its limit in R^2. The epsilon-ball shrinks to show convergence.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 50, originX: 350, originY: 210 });
                        var epsilon = 1.5;
                        var nTerms = 20;

                        VizEngine.createSlider(controls, '\u03B5', 0.1, 3, 1.5, 0.1, function(v) { epsilon = parseFloat(v); });
                        VizEngine.createSlider(controls, 'Terms shown', 5, 50, 20, 1, function(v) { nTerms = Math.round(parseFloat(v)); });

                        // Spiral converging to (0,0)
                        function seqX(n) { return 3 * Math.cos(n * 1.2) / (1 + n * 0.3); }
                        function seqY(n) { return 3 * Math.sin(n * 1.2) / (1 + n * 0.3); }

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            // Draw epsilon ball around limit
                            viz.drawCircle(0, 0, epsilon, viz.colors.teal + '15', viz.colors.teal, 1.5);

                            // Draw sequence trail
                            ctx.strokeStyle = viz.colors.text + '44';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            for (var i = 0; i <= nTerms; i++) {
                                var pos = viz.toScreen(seqX(i), seqY(i));
                                if (i === 0) ctx.moveTo(pos[0], pos[1]);
                                else ctx.lineTo(pos[0], pos[1]);
                            }
                            ctx.stroke();

                            // Draw points and find N
                            var foundN = -1;
                            for (var n = 0; n <= nTerms; n++) {
                                var x = seqX(n), y = seqY(n);
                                var d = Math.sqrt(x * x + y * y);
                                var inside = d < epsilon;
                                if (inside && foundN === -1) foundN = n;
                                var col = inside ? viz.colors.teal : viz.colors.red;
                                viz.drawPoint(x, y, col, null, n === 0 ? 5 : 3);

                                if (n <= 5 || n === nTerms) {
                                    var sp = viz.toScreen(x, y);
                                    ctx.fillStyle = col;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
                                    ctx.fillText('x\u2080' .replace('0', String(n)), sp[0] + 6, sp[1] - 4);
                                }
                            }

                            // Limit point
                            viz.drawPoint(0, 0, viz.colors.white, null, 6);
                            var limS = viz.toScreen(0, 0);
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left'; ctx.textBaseline = 'top';
                            ctx.fillText('x* (limit)', limS[0] + 10, limS[1] + 4);

                            // Title and info
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Convergence of a Spiral Sequence in \u211D\u00B2', viz.width / 2, 18);

                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.teal;
                            if (foundN >= 0) {
                                ctx.fillText('For \u03B5 = ' + epsilon.toFixed(1) + ', all x_n with n \u2265 ' + foundN + ' are inside B(x*, \u03B5)', viz.width / 2, 38);
                            } else {
                                ctx.fillText('No terms inside B(x*, \u03B5) yet \u2014 try larger \u03B5 or more terms', viz.width / 2, 38);
                            }
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'banach-fixed-point',
                    title: 'Banach Fixed-Point Theorem',
                    description: 'Watch iterates of a contraction mapping converge to the unique fixed point.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 70, originX: 100, originY: 350 });
                        var x0 = 3.0;
                        var whichFn = 0;

                        var fns = [
                            { label: 'T(x) = cos(x)', fn: Math.cos, c: 'sin(1) \u2248 0.84' },
                            { label: 'T(x) = (x + 2/x)/2 (\u2192\u221A2)', fn: function(x) { return (x + 2 / x) / 2; }, c: 'varies' },
                            { label: 'T(x) = x/2 + 1', fn: function(x) { return x / 2 + 1; }, c: '0.5' }
                        ];

                        VizEngine.createSlider(controls, 'Start x\u2080', 0.1, 5, 3.0, 0.1, function(v) { x0 = parseFloat(v); });
                        VizEngine.createButton(controls, 'cos(x)', function() { whichFn = 0; });
                        VizEngine.createButton(controls, '(x+2/x)/2', function() { whichFn = 1; });
                        VizEngine.createButton(controls, 'x/2 + 1', function() { whichFn = 2; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(0.5);
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            var T = fns[whichFn].fn;

                            // Draw y = x line
                            viz.drawFunction(function(x) { return x; }, 0, 5, viz.colors.text + '66', 1);

                            // Draw T(x)
                            viz.drawFunction(T, 0.01, 5, viz.colors.blue, 2.5);

                            // Cobweb iteration
                            var x = x0;
                            var iterates = [x];
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            var start = viz.toScreen(x, 0);
                            ctx.moveTo(start[0], start[1]);

                            for (var i = 0; i < 25; i++) {
                                var y = T(x);
                                if (!isFinite(y) || Math.abs(y) > 100) break;
                                var p1 = viz.toScreen(x, y);
                                ctx.lineTo(p1[0], p1[1]);
                                var p2 = viz.toScreen(y, y);
                                ctx.lineTo(p2[0], p2[1]);
                                x = y;
                                iterates.push(x);
                            }
                            ctx.stroke();

                            // Mark the fixed point (last iterate)
                            var fp = iterates[iterates.length - 1];
                            viz.drawPoint(fp, fp, viz.colors.green, null, 6);
                            var fpS = viz.toScreen(fp, fp);
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
                            ctx.fillText('x* \u2248 ' + fp.toFixed(4), fpS[0] + 10, fpS[1] - 4);

                            // Mark starting point
                            viz.drawPoint(x0, 0, viz.colors.orange, null, 5);
                            var x0S = viz.toScreen(x0, 0);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('x\u2080=' + x0.toFixed(1), x0S[0], x0S[1] + 6);

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Banach Fixed-Point: ' + fns[whichFn].label, viz.width / 2, 18);

                            // Iteration info
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.text;
                            var shown = Math.min(iterates.length, 8);
                            var iterStr = iterates.slice(0, shown).map(function(v) { return v.toFixed(3); }).join(' \u2192 ');
                            if (iterates.length > shown) iterStr += ' \u2192 ...';
                            ctx.fillText(iterStr, viz.width / 2, 38);

                            // Labels
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.textAlign = 'right';
                            ctx.fillText('y = T(x)', viz.width - 20, 60);
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('y = x', viz.width - 20, 76);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Give an example of a Cauchy sequence in the metric space \\((0, \\infty)\\) (with the usual metric) that does not converge within the space.',
                    hint: 'Find a sequence of positive numbers that is Cauchy but whose limit is 0.',
                    solution: '\\(x_n = 1/n\\). This is Cauchy in \\(\\mathbb{R}\\) (hence in \\((0,\\infty)\\) with the inherited metric), but \\(x_n \\to 0 \\notin (0,\\infty)\\). So \\((0,\\infty)\\) is not complete with the usual metric.'
                },
                {
                    question: 'Show that the map \\(T(x) = \\frac{x}{2} + 1\\) on \\(\\mathbb{R}\\) is a contraction with constant \\(c = 1/2\\). Find its fixed point directly and verify it matches the Banach theorem.',
                    hint: 'Compute \\(|T(x) - T(y)|\\) and solve \\(T(x^*) = x^*\\).',
                    solution: '\\(|T(x) - T(y)| = |x/2 + 1 - y/2 - 1| = \\frac{1}{2}|x - y|\\), so \\(c = 1/2\\). The fixed point satisfies \\(x^* = x^*/2 + 1\\), giving \\(x^*/2 = 1\\), so \\(x^* = 2\\). Starting from any \\(x_0\\), the iterates converge to 2.'
                },
                {
                    question: 'Prove that the space \\(C([0,1])\\) with the sup metric is complete. (Outline the key steps.)',
                    hint: 'Let \\((f_n)\\) be Cauchy in the sup metric. What does "Cauchy in the sup metric" mean pointwise? Use the completeness of \\(\\mathbb{R}\\) and then show the limit function is continuous.',
                    solution: 'If \\((f_n)\\) is Cauchy, then for each \\(x\\), \\(|f_m(x) - f_n(x)| \\leq d_\\infty(f_m, f_n) \\to 0\\), so \\((f_n(x))\\) is Cauchy in \\(\\mathbb{R}\\) and converges to some \\(f(x)\\). The convergence is uniform (given \\(\\varepsilon > 0\\), choose \\(N\\) with \\(d_\\infty(f_m, f_n) < \\varepsilon\\) for \\(m,n \\geq N\\); letting \\(m \\to \\infty\\) gives \\(|f(x) - f_n(x)| \\leq \\varepsilon\\)). The uniform limit of continuous functions is continuous, so \\(f \\in C([0,1])\\).'
                },
                {
                    question: 'Show that \\(T(x) = x^2\\) on the interval \\([0, 1/2]\\) is a contraction. What is the fixed point?',
                    hint: 'Use the mean value theorem: \\(|T(x) - T(y)| = |x^2 - y^2| = |x+y| \\cdot |x-y|\\). What is the maximum of \\(|x+y|\\) on \\([0, 1/2]\\)?',
                    solution: '\\(|T(x)-T(y)| = |x+y||x-y| \\leq (1/2+1/2)|x-y| = |x-y|\\). But more precisely, for \\(x,y \\in [0,1/2]\\), \\(|x+y| \\leq 1\\), and by MVT with \\(T\'(x) = 2x\\), the max of \\(|T\'|\\) on \\([0,1/2]\\) is \\(1\\). We need strict contraction, so on \\([0, 1/2]\\), \\(|x+y| \\leq 1\\) but in fact \\(|T(x)-T(y)| = |x+y||x-y| < 1 \\cdot |x-y|\\) unless \\(x=y=1/2\\). More carefully, take \\(c = 1\\) which is not strictly less than 1. To fix this, restrict to \\([0, a]\\) with \\(a < 1/2\\), giving \\(c = 2a < 1\\). On \\([0,1/2]\\), \\(T\\) maps into \\([0, 1/4] \\subset [0, 1/2]\\), and the contraction constant is \\(c \\leq 2 \\cdot 1/2 = 1\\). The fixed points of \\(x^2 = x\\) are \\(x = 0\\) and \\(x = 1\\); in \\([0, 1/2]\\), the only fixed point is \\(x^* = 0\\).'
                },
                {
                    question: 'Suppose \\((X, d)\\) is a metric space where every Cauchy sequence has a convergent subsequence. Must \\(X\\) be complete?',
                    hint: 'If \\((x_n)\\) is Cauchy and \\(x_{n_k} \\to x\\), can you show that the full sequence \\(x_n \\to x\\)?',
                    solution: 'Yes. Let \\((x_n)\\) be Cauchy with \\(x_{n_k} \\to x\\). Given \\(\\varepsilon > 0\\), choose \\(N\\) so that \\(d(x_m, x_n) < \\varepsilon/2\\) for \\(m,n \\geq N\\), and choose \\(k\\) so that \\(n_k \\geq N\\) and \\(d(x_{n_k}, x) < \\varepsilon/2\\). Then for \\(n \\geq N\\): \\(d(x_n, x) \\leq d(x_n, x_{n_k}) + d(x_{n_k}, x) < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Compactness
        // ============================================================
        {
            id: 'ch10-sec04',
            title: 'Compactness',
            content: `
                <h2>Compactness</h2>

                <p>In Chapter 4, the Heine-Borel theorem told us that in \\(\\mathbb{R}\\), "closed and bounded" is the magic combination guaranteeing that every sequence has a convergent subsequence and every continuous function attains its extrema. In general metric spaces, "closed and bounded" is no longer sufficient; we need the more powerful concept of <strong>compactness</strong>, defined through open covers. Understanding why the Heine-Borel characterization fails in infinite-dimensional spaces is one of the key insights of this section.</p>

                <p>Compactness is arguably the most important topological property in analysis. It generalizes the key features of closed bounded subsets of \\(\\mathbb{R}^n\\) — every sequence has a convergent subsequence, and every continuous function attains its maximum.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.19 (Open Cover)</div>
                    <div class="env-body">
                        <p>An <strong>open cover</strong> of a set \\(K\\) in a metric space \\(X\\) is a collection \\(\\{U_\\alpha\\}_{\\alpha \\in I}\\) of open sets whose union contains \\(K\\): \\(K \\subseteq \\bigcup_{\\alpha \\in I} U_\\alpha\\). A <strong>finite subcover</strong> is a finite subcollection that still covers \\(K\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.20 (Compact Set)</div>
                    <div class="env-body">
                        <p>A subset \\(K\\) of a metric space is <strong>compact</strong> if every open cover of \\(K\\) has a finite subcover.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="open-cover-compact"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.21 (Sequential Characterization)</div>
                    <div class="env-body">
                        <p>In a metric space, \\(K\\) is compact if and only if every sequence in \\(K\\) has a subsequence converging to a point of \\(K\\). (This is called <strong>sequential compactness</strong>.)</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Compact sets are the "finite-like" sets of analysis. Just as a finite set can always be covered by finitely many small neighborhoods, a compact set has this crucial finiteness property even when it contains infinitely many points. Sequences in a compact set cannot "escape" — they are always forced to accumulate somewhere inside.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.22 (Heine-Borel for \\(\\mathbb{R}^n\\))</div>
                    <div class="env-body">
                        <p>A subset of \\(\\mathbb{R}^n\\) is compact if and only if it is <strong>closed</strong> and <strong>bounded</strong>.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Heine-Borel is <strong>special to \\(\\mathbb{R}^n\\)</strong>. In a general metric space, closed and bounded does <em>not</em> imply compact. For example, the closed unit ball in \\(C([0,1])\\) is closed and bounded but not compact (the sequence \\(f_n(x) = x^n\\) has no uniformly convergent subsequence).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.23 (Properties of Compact Sets)</div>
                    <div class="env-body">
                        <ol>
                            <li>Compact sets are closed and bounded.</li>
                            <li>Closed subsets of compact sets are compact.</li>
                            <li>If \\(f: X \\to Y\\) is continuous and \\(K \\subseteq X\\) is compact, then \\(f(K)\\) is compact.</li>
                            <li>If \\(K\\) is compact and \\(f: K \\to \\mathbb{R}\\) is continuous, then \\(f\\) attains its maximum and minimum on \\(K\\) (the <strong>Extreme Value Theorem</strong>).</li>
                        </ol>
                    </div>
                </div>

                <h3>Total Boundedness</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.24 (Totally Bounded)</div>
                    <div class="env-body">
                        <p>A metric space \\(X\\) is <strong>totally bounded</strong> if for every \\(\\varepsilon > 0\\), there exist finitely many points \\(x_1, \\ldots, x_n\\) such that \\(X = B(x_1, \\varepsilon) \\cup \\cdots \\cup B(x_n, \\varepsilon)\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.25</div>
                    <div class="env-body">
                        <p>A metric space is compact if and only if it is <strong>complete</strong> and <strong>totally bounded</strong>.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="total-boundedness-viz"></div>
            `,
            visualizations: [
                {
                    id: 'open-cover-compact',
                    title: 'Open Covers and Finite Subcovers',
                    description: 'A compact set (the disk) can always be covered by finitely many open balls. Add and remove balls to build a cover.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 60, originX: 350, originY: 210 });
                        var coverBalls = [];
                        var ballRadius = 1.5;

                        VizEngine.createSlider(controls, 'Ball radius', 0.3, 3, 1.5, 0.1, function(v) { ballRadius = parseFloat(v); });
                        VizEngine.createButton(controls, 'Add Random Ball', function() {
                            var angle = Math.random() * 2 * Math.PI;
                            var r = Math.random() * 2.5;
                            coverBalls.push({ x: r * Math.cos(angle), y: r * Math.sin(angle) });
                        });
                        VizEngine.createButton(controls, 'Clear Balls', function() { coverBalls = []; });
                        VizEngine.createButton(controls, 'Auto-Cover', function() {
                            coverBalls = [];
                            // Grid cover
                            var step = ballRadius * 0.9;
                            for (var gx = -2; gx <= 2; gx += step) {
                                for (var gy = -2; gy <= 2; gy += step) {
                                    if (gx * gx + gy * gy <= (2 + ballRadius) * (2 + ballRadius)) {
                                        coverBalls.push({ x: gx, y: gy });
                                    }
                                }
                            }
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            // Draw cover balls
                            var coverColors = [viz.colors.blue, viz.colors.orange, viz.colors.green, viz.colors.purple, viz.colors.pink, viz.colors.teal, viz.colors.yellow];
                            for (var i = 0; i < coverBalls.length; i++) {
                                var col = coverColors[i % coverColors.length];
                                viz.drawCircle(coverBalls[i].x, coverBalls[i].y, ballRadius, col + '15', col + '55', 1);
                            }

                            // Draw the compact set K (closed disk of radius 2)
                            viz.drawCircle(0, 0, 2, null, viz.colors.white, 2.5);

                            // Check coverage: sample boundary points
                            var covered = true;
                            var uncoveredPt = null;
                            for (var t = 0; t < 100; t++) {
                                var angle = t / 100 * 2 * Math.PI;
                                for (var rr = 0; rr <= 2; rr += 0.3) {
                                    var px = rr * Math.cos(angle);
                                    var py = rr * Math.sin(angle);
                                    var ptCovered = false;
                                    for (var j = 0; j < coverBalls.length; j++) {
                                        var dx = px - coverBalls[j].x;
                                        var dy = py - coverBalls[j].y;
                                        if (Math.sqrt(dx * dx + dy * dy) < ballRadius) {
                                            ptCovered = true;
                                            break;
                                        }
                                    }
                                    if (!ptCovered) { covered = false; uncoveredPt = { x: px, y: py }; break; }
                                }
                                if (!covered) break;
                            }

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Open Cover of Compact Set K (disk of radius 2)', viz.width / 2, 18);

                            ctx.font = '13px -apple-system,sans-serif';
                            if (coverBalls.length === 0) {
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText('Add open balls to cover the disk K', viz.width / 2, 38);
                            } else if (covered) {
                                ctx.fillStyle = viz.colors.green;
                                ctx.fillText('K is covered! (' + coverBalls.length + ' balls)', viz.width / 2, 38);
                            } else {
                                ctx.fillStyle = viz.colors.red;
                                ctx.fillText('Not yet covered \u2014 ' + coverBalls.length + ' balls so far', viz.width / 2, 38);
                                if (uncoveredPt) {
                                    viz.drawPoint(uncoveredPt.x, uncoveredPt.y, viz.colors.red, null, 4);
                                }
                            }

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'total-boundedness-viz',
                    title: 'Total Boundedness: Finite \u03B5-Nets',
                    description: 'Cover a set with finitely many \u03B5-balls. As \u03B5 shrinks, you need more balls.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 60, originX: 350, originY: 230 });
                        var epsilon = 1.0;

                        VizEngine.createSlider(controls, '\u03B5 (ball radius)', 0.2, 2.5, 1.0, 0.1, function(v) { epsilon = parseFloat(v); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            var setRadius = 2.5;

                            // Compute epsilon-net: grid of points covering the disk
                            var centers = [];
                            var step = epsilon * 1.2; // slightly overlapping
                            for (var gx = -setRadius; gx <= setRadius; gx += step) {
                                for (var gy = -setRadius; gy <= setRadius; gy += step) {
                                    if (gx * gx + gy * gy <= setRadius * setRadius) {
                                        centers.push({ x: gx, y: gy });
                                    }
                                }
                            }

                            // Draw epsilon balls
                            var coverColors = [viz.colors.blue, viz.colors.orange, viz.colors.green, viz.colors.purple, viz.colors.pink, viz.colors.teal];
                            for (var i = 0; i < centers.length; i++) {
                                var col = coverColors[i % coverColors.length];
                                viz.drawCircle(centers[i].x, centers[i].y, epsilon, col + '12', col + '44', 1);
                                viz.drawPoint(centers[i].x, centers[i].y, col, null, 3);
                            }

                            // Draw the set boundary
                            viz.drawCircle(0, 0, setRadius, null, viz.colors.white, 2.5);

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Total Boundedness: \u03B5-net for the Disk', viz.width / 2, 18);

                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText(
                                '\u03B5 = ' + epsilon.toFixed(1) + '  |  ' + centers.length + ' balls needed to cover the disk',
                                viz.width / 2, 38
                            );

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('As \u03B5 \u2192 0, the number of balls \u2192 \u221E (but always finite for each \u03B5 > 0)', viz.width / 2, viz.height - 12);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that the set \\(\\{1/n : n \\in \\mathbb{N}\\} \\cup \\{0\\}\\) is compact in \\(\\mathbb{R}\\).',
                    hint: 'It suffices to check closed and bounded (Heine-Borel in \\(\\mathbb{R}\\)).',
                    solution: 'The set is bounded (contained in \\([0,1]\\)). It is closed: the only limit point is \\(0\\), and \\(0\\) is in the set. By Heine-Borel, it is compact. Alternatively, directly: let \\(\\{U_\\alpha\\}\\) cover the set. One \\(U_\\beta\\) contains \\(0\\), and since \\(U_\\beta\\) is open, it contains all \\(1/n\\) for \\(n \\geq N\\) (for some \\(N\\)). The finitely many remaining points \\(1, 1/2, \\ldots, 1/(N-1)\\) each need one open set, giving a finite subcover.'
                },
                {
                    question: 'Prove that \\(\\{1/n : n \\in \\mathbb{N}\\}\\) (without 0) is <em>not</em> compact.',
                    hint: 'Find an open cover with no finite subcover, or find a sequence with no convergent subsequence in the set.',
                    solution: 'The sequence \\((1/n)\\) converges to \\(0 \\notin \\{1/n\\}\\), and \\(1/n\\) is strictly decreasing, so no subsequence converges to any \\(1/k\\) in the set. Thus it is not sequentially compact. Alternatively, the open cover \\(U_n = (1/(n+1), 1/(n-1))\\) for each \\(n \\geq 2\\) (plus a set for \\(1\\)) has no finite subcover.'
                },
                {
                    question: 'Let \\(f: K \\to \\mathbb{R}\\) be continuous on a compact set \\(K\\). Prove that \\(f\\) is bounded.',
                    hint: 'Use the fact that continuous images of compact sets are compact.',
                    solution: '\\(f(K)\\) is compact in \\(\\mathbb{R}\\) (continuous image of compact). By Heine-Borel in \\(\\mathbb{R}\\), \\(f(K)\\) is closed and bounded. In particular, \\(f\\) is bounded.'
                },
                {
                    question: 'Show that a compact metric space is complete.',
                    hint: 'Let \\((x_n)\\) be Cauchy. By sequential compactness, extract a convergent subsequence. Then use the Cauchy property to show the full sequence converges.',
                    solution: 'Let \\((x_n)\\) be Cauchy in compact \\(K\\). By sequential compactness, \\((x_n)\\) has a subsequence \\(x_{n_k} \\to x \\in K\\). Since \\((x_n)\\) is Cauchy, for any \\(\\varepsilon > 0\\), choose \\(N\\) with \\(d(x_m,x_n) < \\varepsilon/2\\) for \\(m,n \\geq N\\), and \\(k\\) with \\(n_k \\geq N\\) and \\(d(x_{n_k},x) < \\varepsilon/2\\). Then \\(d(x_n, x) < \\varepsilon\\) for \\(n \\geq N\\). Hence \\(x_n \\to x \\in K\\).'
                },
                {
                    question: 'The closed unit ball \\(B = \\{f \\in C([0,1]) : \\|f\\|_\\infty \\leq 1\\}\\) is closed and bounded in \\(C([0,1])\\). Explain why it is <strong>not</strong> compact. What additional condition (Arzela-Ascoli) is needed?',
                    hint: 'Consider the sequence \\(f_n(x) = \\sin(n\\pi x)\\). Can you extract a uniformly convergent subsequence?',
                    solution: 'The sequence \\(f_n(x) = \\sin(n\\pi x)\\) lies in \\(B\\), but \\(\\|f_m - f_n\\|_\\infty \\geq \\sqrt{2}\\) for \\(m \\neq n\\) (evaluate at suitable points), so no subsequence is Cauchy, hence no subsequence converges. Compactness fails because \\(B\\) is not totally bounded. The <strong>Arzela-Ascoli theorem</strong> states that a subset of \\(C([a,b])\\) is compact iff it is closed, bounded, and <em>equicontinuous</em>. The missing condition here is equicontinuity.'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Connectedness
        // ============================================================
        {
            id: 'ch10-sec05',
            title: 'Connectedness',
            content: `
                <h2>Connectedness</h2>

                <p>The Intermediate Value Theorem in Chapter 6 told us that a continuous function on an interval cannot "skip" values. The deeper reason, we now see, is that intervals are <em>connected</em>: they cannot be split into two disjoint nonempty open pieces. Connectedness isolates the topological essence of the IVT and extends it to any metric space.</p>

                <p>While compactness generalizes "closed and bounded," <strong>connectedness</strong> generalizes "being in one piece." A connected space cannot be split into two disjoint nonempty open parts.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.26 (Connected Space)</div>
                    <div class="env-body">
                        <p>A metric space \\(X\\) is <strong>connected</strong> if the only subsets of \\(X\\) that are both open and closed (called <strong>clopen</strong>) are \\(\\emptyset\\) and \\(X\\) itself.</p>
                        <p>Equivalently, \\(X\\) is <strong>disconnected</strong> if there exist nonempty open sets \\(U, V\\) with \\(U \\cap V = \\emptyset\\) and \\(U \\cup V = X\\). Such a pair is called a <strong>separation</strong> of \\(X\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="connected-disconnected-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.27 (Connected Subsets of \\(\\mathbb{R}\\))</div>
                    <div class="env-body">
                        <p>A subset of \\(\\mathbb{R}\\) is connected if and only if it is an interval (possibly unbounded, open, closed, or half-open).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Idea</div>
                    <div class="env-body">
                        <p>(\\(\\Leftarrow\\)) Suppose \\(I\\) is an interval and \\(I = U \\cup V\\) is a separation. Pick \\(a \\in U\\), \\(b \\in V\\) with \\(a < b\\). Let \\(c = \\sup(U \\cap [a,b])\\). Then \\(c\\) belongs to \\(\\overline{U}\\) (as a sup of elements in \\(U\\)), so \\(c \\notin V\\) (since \\(V\\) is open and disjoint from \\(\\overline{U} \\cap V\\)... actually \\(c \\in \\overline{U}\\), and if \\(c \\in V\\), then an open ball around \\(c\\) lies in \\(V\\), contradicting \\(c = \\sup(U \\cap [a,b])\\)). Similarly \\(c \\in \\overline{V}\\), so \\(c \\notin U\\). But \\(c \\in I = U \\cup V\\), contradiction.</p>
                        <p>(\\(\\Rightarrow\\)) If \\(S\\) is not an interval, there exist \\(a < c < b\\) with \\(a, b \\in S\\) but \\(c \\notin S\\). Then \\(U = S \\cap (-\\infty, c)\\) and \\(V = S \\cap (c, \\infty)\\) form a separation of \\(S\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.28 (Continuous Image of Connected Set)</div>
                    <div class="env-body">
                        <p>If \\(f: X \\to Y\\) is continuous and \\(X\\) is connected, then \\(f(X)\\) is connected.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 10.29 (Intermediate Value Theorem, General Form)</div>
                    <div class="env-body">
                        <p>If \\(X\\) is a connected metric space and \\(f: X \\to \\mathbb{R}\\) is continuous, then \\(f(X)\\) is an interval. In particular, \\(f\\) has the intermediate value property.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>A continuous function cannot "jump" over values on a connected domain. If \\(f\\) takes values \\(f(a) = -3\\) and \\(f(b) = 5\\), then \\(f\\) must hit every value between \\(-3\\) and \\(5\\). This is exactly the Intermediate Value Theorem, now derived as a consequence of connectedness.</p>
                    </div>
                </div>

                <h3>Path-Connectedness</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.30 (Path-Connected)</div>
                    <div class="env-body">
                        <p>A metric space \\(X\\) is <strong>path-connected</strong> if for every \\(x, y \\in X\\), there exists a continuous function \\(\\gamma: [0,1] \\to X\\) with \\(\\gamma(0) = x\\) and \\(\\gamma(1) = y\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 10.31</div>
                    <div class="env-body">
                        <p>Every path-connected space is connected. The converse is false in general, but true in open subsets of \\(\\mathbb{R}^n\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="path-connected-viz"></div>

                <h3>Connected Components</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.32</div>
                    <div class="env-body">
                        <p>The <strong>connected component</strong> of a point \\(x \\in X\\) is the largest connected subset of \\(X\\) containing \\(x\\). The connected components partition \\(X\\) into maximal connected pieces.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.33</div>
                    <div class="env-body">
                        <ul>
                            <li>\\(\\mathbb{R}\\) is connected (it is an interval).</li>
                            <li>\\(\\mathbb{R} \\setminus \\{0\\} = (-\\infty, 0) \\cup (0, \\infty)\\) has two connected components.</li>
                            <li>\\(\\mathbb{Q}\\) with the usual metric is <strong>totally disconnected</strong>: every connected component is a single point.</li>
                            <li>The Cantor set is compact, uncountable, and totally disconnected.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Looking Ahead</div>
                    <div class="env-body">
                        <p>With the concepts of metric spaces, open/closed sets, compactness, completeness, and connectedness, we have built the foundation for <strong>point-set topology</strong>. These ideas underpin all of modern analysis: measure theory, functional analysis, differential geometry, and beyond. The metric space framework is the bridge between the concrete real line and the vast abstract structures of mathematics.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">The Road Ahead</div>
                    <div class="env-body">
                        <p>From the Peano axioms through Dedekind cuts, sequences, series, topology, continuity, differentiation, and integration, we built analysis on \\(\\mathbb{R}\\) from the ground up. Metric spaces show that these ideas extend far beyond the real line, to function spaces, probability spaces, and beyond. This is the gateway to functional analysis, measure theory, and modern mathematics.</p>
                        <p>You now possess the language and the reasoning tools that underpin virtually every branch of modern quantitative science. Wherever your mathematical journey takes you next, the \\(\\varepsilon\\)-\\(\\delta\\) way of thinking you have practiced in this course will remain your most reliable guide.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'connected-disconnected-viz',
                    title: 'Connected vs Disconnected Sets',
                    description: 'See examples of connected and disconnected subsets of the plane. Drag the gap to split a set apart.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 50, originX: 350, originY: 210 });
                        var gap = viz.addDraggable('gap', 0, 0, viz.colors.yellow, 10, function() {
                            gap.y = 0;
                            gap.x = Math.max(-3, Math.min(3, gap.x));
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            var gx = gap.x;
                            var setLeft = -4;
                            var setRight = 4;
                            var setTop = 2;
                            var setBot = -2;

                            // Draw two halves of the set
                            var gapWidth = 0.3;
                            var leftEnd = gx - gapWidth;
                            var rightStart = gx + gapWidth;

                            var isConnected = (leftEnd <= setLeft || rightStart >= setRight);

                            if (isConnected) {
                                // One piece
                                viz.drawPolygon(
                                    [[setLeft, setBot], [setRight, setBot], [setRight, setTop], [setLeft, setTop]],
                                    viz.colors.blue + '30', viz.colors.blue, 2
                                );
                            } else {
                                // Left piece
                                viz.drawPolygon(
                                    [[setLeft, setBot], [leftEnd, setBot], [leftEnd, setTop], [setLeft, setTop]],
                                    viz.colors.blue + '30', viz.colors.blue, 2
                                );
                                // Right piece
                                viz.drawPolygon(
                                    [[rightStart, setBot], [setRight, setBot], [setRight, setTop], [rightStart, setTop]],
                                    viz.colors.orange + '30', viz.colors.orange, 2
                                );

                                // Gap indicator
                                var gapScreenL = viz.toScreen(leftEnd, 0);
                                var gapScreenR = viz.toScreen(rightStart, 0);
                                ctx.fillStyle = viz.colors.red + '22';
                                var sTop = viz.toScreen(0, setTop);
                                var sBot = viz.toScreen(0, setBot);
                                ctx.fillRect(gapScreenL[0], sTop[1], gapScreenR[0] - gapScreenL[0], sBot[1] - sTop[1]);
                            }

                            viz.drawDraggables();

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(
                                isConnected ? 'Connected: One Piece (no separation)' : 'Disconnected: Two Disjoint Open Pieces',
                                viz.width / 2, 20
                            );

                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Drag the yellow point to introduce or remove a gap', viz.width / 2, 40);

                            if (!isConnected) {
                                ctx.fillStyle = viz.colors.red;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('U \u2229 V = \u2205, U \u222A V = X \u2014 this is a separation!', viz.width / 2, viz.height - 14);
                            }
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'path-connected-viz',
                    title: 'Path-Connectedness',
                    description: 'Draw a continuous path between two points in a connected region. In a path-connected space, such a path always exists.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 50, originX: 350, originY: 210 });
                        var pA = viz.addDraggable('A', -3, 1, viz.colors.blue, 10, function() {});
                        var pB = viz.addDraggable('B', 3, -1, viz.colors.orange, 10, function() {});
                        var animT = 0;
                        var animating = false;

                        VizEngine.createButton(controls, 'Animate Path', function() { animT = 0; animating = true; });
                        VizEngine.createButton(controls, 'Reset', function() { animT = 0; animating = false; });

                        function draw(time) {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();
                            var ctx = viz.ctx;

                            if (animating) {
                                animT += 0.008;
                                if (animT > 1) { animT = 1; animating = false; }
                            }

                            // The "region" — just a large connected ellipse
                            viz.drawCircle(0, 0, 4.5, viz.colors.teal + '08', viz.colors.teal + '33', 1);

                            // Draw a curved path from A to B
                            var ax = pA.x, ay = pA.y, bx = pB.x, by = pB.y;
                            var mx = (ax + bx) / 2 + (by - ay) * 0.3;
                            var my = (ay + by) / 2 + (ax - bx) * 0.3;

                            // Draw full path as dotted
                            ctx.strokeStyle = viz.colors.text + '44';
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath();
                            var steps = 100;
                            for (var i = 0; i <= steps; i++) {
                                var t = i / steps;
                                var px = (1 - t) * (1 - t) * ax + 2 * (1 - t) * t * mx + t * t * bx;
                                var py = (1 - t) * (1 - t) * ay + 2 * (1 - t) * t * my + t * t * by;
                                var sp = viz.toScreen(px, py);
                                if (i === 0) ctx.moveTo(sp[0], sp[1]);
                                else ctx.lineTo(sp[0], sp[1]);
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Draw animated portion
                            if (animT > 0) {
                                ctx.strokeStyle = viz.colors.green;
                                ctx.lineWidth = 3;
                                ctx.beginPath();
                                var stepsAnim = Math.round(animT * steps);
                                for (var j = 0; j <= stepsAnim; j++) {
                                    var t2 = j / steps;
                                    var px2 = (1 - t2) * (1 - t2) * ax + 2 * (1 - t2) * t2 * mx + t2 * t2 * bx;
                                    var py2 = (1 - t2) * (1 - t2) * ay + 2 * (1 - t2) * t2 * my + t2 * t2 * by;
                                    var sp2 = viz.toScreen(px2, py2);
                                    if (j === 0) ctx.moveTo(sp2[0], sp2[1]);
                                    else ctx.lineTo(sp2[0], sp2[1]);
                                }
                                ctx.stroke();

                                // Moving point
                                var ct = animT;
                                var cpx = (1 - ct) * (1 - ct) * ax + 2 * (1 - ct) * ct * mx + ct * ct * bx;
                                var cpy = (1 - ct) * (1 - ct) * ay + 2 * (1 - ct) * ct * my + ct * ct * by;
                                viz.drawPoint(cpx, cpy, viz.colors.green, null, 6);
                            }

                            viz.drawDraggables();

                            // Labels
                            var sA = viz.toScreen(pA.x, pA.y);
                            var sB = viz.toScreen(pB.x, pB.y);
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('A', sA[0], sA[1] - 16);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('B', sB[0], sB[1] - 16);

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Path-Connectedness: \u03B3: [0,1] \u2192 X with \u03B3(0)=A, \u03B3(1)=B', viz.width / 2, 18);

                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('A continuous path always exists between any two points in a path-connected space', viz.width / 2, viz.height - 12);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that the set \\(S = \\{(x, \\sin(1/x)) : x > 0\\} \\cup \\{(0, y) : -1 \\leq y \\leq 1\\}\\) (the <strong>topologist\'s sine curve</strong>) is connected but not path-connected.',
                    hint: 'For connectedness, show it cannot be separated. For non-path-connectedness, argue that any path from \\((0,0)\\) to a point on the curve \\(\\sin(1/x)\\) must oscillate infinitely.',
                    solution: 'The graph \\(\\{(x, \\sin(1/x)): x > 0\\}\\) is connected (it is the continuous image of the connected interval \\((0,\\infty)\\)). The topologist\'s sine curve is its closure, and the closure of a connected set is connected. However, it is not path-connected: any path \\(\\gamma: [0,1] \\to S\\) with \\(\\gamma(0) = (0,0)\\) and \\(\\gamma(1) = (1, \\sin 1)\\) would need to pass through points where the first coordinate is arbitrarily small, forcing the path to oscillate infinitely — contradicting the uniform continuity of \\(\\gamma\\) on \\([0,1]\\).'
                },
                {
                    question: 'Show that \\(\\mathbb{Q}\\) is totally disconnected: the only connected subsets are singletons.',
                    hint: 'If \\(S \\subseteq \\mathbb{Q}\\) contains two distinct points \\(p < q\\), find an irrational number between them to separate \\(S\\).',
                    solution: 'Let \\(S \\subseteq \\mathbb{Q}\\) with \\(p, q \\in S\\), \\(p < q\\). Choose \\(r\\) irrational with \\(p < r < q\\). Then \\(U = S \\cap (-\\infty, r)\\) and \\(V = S \\cap (r, \\infty)\\) are open in \\(S\\) (since \\(r \\notin \\mathbb{Q}\\), no point of \\(S\\) equals \\(r\\)), nonempty (\\(p \\in U, q \\in V\\)), and \\(U \\cup V = S\\). This is a separation, so \\(S\\) is disconnected.'
                },
                {
                    question: 'Prove the Intermediate Value Theorem using connectedness: If \\(f: [a,b] \\to \\mathbb{R}\\) is continuous and \\(f(a) < c < f(b)\\), then there exists \\(x \\in (a,b)\\) with \\(f(x) = c\\).',
                    hint: 'Use that \\([a,b]\\) is connected, \\(f\\) is continuous, so \\(f([a,b])\\) is connected in \\(\\mathbb{R}\\), hence an interval.',
                    solution: '\\([a,b]\\) is connected (it is an interval). Since \\(f\\) is continuous, \\(f([a,b])\\) is connected in \\(\\mathbb{R}\\), hence an interval. Since \\(f(a)\\) and \\(f(b)\\) are in this interval and \\(f(a) < c < f(b)\\), the value \\(c\\) must also be in the interval \\(f([a,b])\\). So there exists \\(x \\in [a,b]\\) with \\(f(x) = c\\).'
                },
                {
                    question: 'Is the set \\(\\mathbb{R}^2 \\setminus \\{(0,0)\\}\\) (the punctured plane) connected? Path-connected?',
                    hint: 'Can you connect any two points with a path that avoids the origin?',
                    solution: 'Yes to both. Given any two points \\(p, q \\in \\mathbb{R}^2 \\setminus \\{0\\}\\), if the line segment from \\(p\\) to \\(q\\) does not pass through the origin, it is a valid path. If it does pass through the origin, detour via a third point not on the line through \\(p\\) and \\(q\\). Two line segments avoiding the origin connect \\(p\\) to \\(q\\). Since path-connected implies connected, the punctured plane is both.'
                },
                {
                    question: 'Determine the connected components of \\(\\mathbb{R}^2 \\setminus (\\{0\\} \\times \\mathbb{R})\\) (the plane with the \\(y\\)-axis removed).',
                    hint: 'Removing the \\(y\\)-axis splits the plane into two half-planes.',
                    solution: 'The two connected components are the left half-plane \\(\\{(x,y) : x < 0\\}\\) and the right half-plane \\(\\{(x,y) : x > 0\\}\\). Each is path-connected (connect points by line segments, which stay in the same half-plane), hence connected. They are separated by the removed \\(y\\)-axis: no continuous path can cross from \\(x < 0\\) to \\(x > 0\\) without passing through \\(x = 0\\).'
                }
            ]
        }
    ]
});
