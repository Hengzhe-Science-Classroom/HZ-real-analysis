window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch07',
    number: 7,
    title: 'Differentiation',
    subtitle: 'The derivative, differentiation rules, the Mean Value Theorem, L\'Hopital\'s Rule, and Taylor\'s Theorem.',
    sections: [
        // ============================================================
        //  SECTION 1 — The Derivative: Zooming In
        // ============================================================
        {
            id: 'ch07-sec01',
            title: 'The Derivative: Zooming In',
            content: `
                <h2>The Derivative: Zooming In</h2>

                <p>Imagine pointing a <strong>mathematical microscope</strong> at a curve.  From far away the curve twists and bends, but as you zoom in on a single point, something remarkable happens: <em>the curve starts to look like a straight line</em>.  That straight line is the <strong>tangent line</strong>, and its slope is what we call the <strong>derivative</strong>.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.1 — The Derivative</div>
                    <div class="env-body">
                        <p>Let \\(f\\) be defined on an open interval containing \\(a\\).  The <strong>derivative of \\(f\\) at \\(a\\)</strong> is</p>
                        <p style="text-align:center;">
                            \\(\\displaystyle f'(a) \\;=\\; \\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h},\\)
                        </p>
                        <p>provided this limit exists.  Equivalently, setting \\(x = a + h\\),</p>
                        <p style="text-align:center;">
                            \\(\\displaystyle f'(a) \\;=\\; \\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}.\\)
                        </p>
                        <p>When this limit exists we say \\(f\\) is <strong>differentiable at \\(a\\)</strong>.</p>
                    </div>
                </div>

                <p>The fraction \\(\\frac{f(a+h)-f(a)}{h}\\) is the slope of a <strong>secant line</strong> through \\((a,f(a))\\) and \\((a+h,f(a+h))\\).  As \\(h\\to 0\\) the secant pivots into the tangent — the line that best approximates \\(f\\) near \\(a\\).</p>

                <div class="viz-placeholder" data-viz="secant-to-tangent"></div>

                <div class="env-block intuition">
                    <div class="env-title">Microscope Intuition</div>
                    <div class="env-body">
                        <p>The derivative answers: <em>"If I zoom in enough at \\(a\\), what slope does the curve appear to have?"</em>  The magnification factor is \\(1/h\\); as \\(h\\to 0\\) we increase magnification without bound and the curve flattens into a line of slope \\(f'(a)\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="zoom-microscope"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.2 — Differentiability Implies Continuity</div>
                    <div class="env-body">
                        <p>If \\(f\\) is differentiable at \\(a\\), then \\(f\\) is continuous at \\(a\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Write \\(f(x)-f(a) = \\frac{f(x)-f(a)}{x-a}\\cdot(x-a)\\).  As \\(x\\to a\\) the first factor tends to \\(f'(a)\\) (finite) and the second factor tends to \\(0\\), so \\(f(x)\\to f(a)\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">The Converse Fails!</div>
                    <div class="env-body">
                        <p>Continuity does <em>not</em> imply differentiability.  The absolute-value function \\(f(x)=|x|\\) is continuous everywhere but has a sharp corner at \\(x=0\\): the left and right limits of the difference quotient are \\(-1\\) and \\(+1\\), so the derivative does not exist there.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Computing \\(f'(a)\\) from the Definition</div>
                    <div class="env-body">
                        <p>Let \\(f(x) = x^2\\).  Then</p>
                        <p style="text-align:center;">
                            \\(\\displaystyle f'(a) = \\lim_{h\\to 0}\\frac{(a+h)^2 - a^2}{h} = \\lim_{h\\to 0}\\frac{2ah+h^2}{h} = \\lim_{h\\to 0}(2a+h) = 2a.\\)
                        </p>
                        <p>So \\((x^2)' = 2x\\).  This matches the tangent slope you see in the visualization above.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Local Linear Approximation</div>
                    <div class="env-body">
                        <p>Differentiability at \\(a\\) is equivalent to the existence of a number \\(L\\) such that</p>
                        <p style="text-align:center;">
                            \\(f(a+h) = f(a) + Lh + o(h)\\quad\\text{as }h\\to 0,\\)
                        </p>
                        <p>where \\(o(h)/h\\to 0\\).  The number \\(L\\) is \\(f'(a)\\).  This "linear approximation" viewpoint is the backbone of all differential calculus.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'secant-to-tangent',
                    title: 'From Secant to Tangent',
                    description: 'Drag h toward 0 and watch the secant line pivot into the tangent line.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 50, originX: 100, originY: 320 });
                        var ctx = viz.ctx;
                        var a = 2;
                        var h = 2;

                        VizEngine.createSlider(controls, 'a', 0.5, 5, 2, 0.1, function(v) { a = v; });
                        VizEngine.createSlider(controls, 'h', -3, 3, 2, 0.01, function(v) { h = v; });

                        function f(x) { return 0.15 * x * x * x - 0.5 * x * x + 1.2 * x + 0.5; }
                        function fp(x) { return 0.45 * x * x - 1.0 * x + 1.2; }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            // Draw the curve
                            viz.drawFunction(f, -1, 11, viz.colors.blue, 2.5);

                            var fa = f(a);
                            var fah = f(a + h);

                            // Secant line (extend it)
                            if (Math.abs(h) > 0.02) {
                                var slope = (fah - fa) / h;
                                var secF = function(x) { return fa + slope * (x - a); };
                                viz.drawFunction(secF, -1, 11, viz.colors.orange, 1.5, 100);

                                // Second point
                                viz.drawPoint(a + h, fah, viz.colors.orange, '(a+h, f(a+h))', 5);

                                // Vertical & horizontal markers for rise/run
                                viz.drawSegment(a, fa, a + h, fa, viz.colors.text, 1, true);
                                viz.drawSegment(a + h, fa, a + h, fah, viz.colors.text, 1, true);

                                // Labels
                                var midX = a + h / 2;
                                var riseDir = fah > fa ? 1 : -1;
                                viz.drawText('h = ' + h.toFixed(2), midX, fa - 0.3, viz.colors.text, 11);
                                viz.drawText('rise = ' + (fah - fa).toFixed(3), a + h + 0.4, (fa + fah) / 2, viz.colors.text, 11, 'left');
                            }

                            // Tangent line at a
                            var tang = function(x) { return fa + fp(a) * (x - a); };
                            viz.drawFunction(tang, -1, 11, viz.colors.teal, 1, 100);

                            // Point at a
                            viz.drawPoint(a, fa, viz.colors.green, '(a, f(a))', 6);

                            // Info box
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('a = ' + a.toFixed(2), 420, 15);
                            ctx.fillText("f'(a) = " + fp(a).toFixed(4), 420, 35);
                            if (Math.abs(h) > 0.02) {
                                ctx.fillStyle = viz.colors.orange;
                                ctx.fillText('secant slope = ' + ((fah - fa) / h).toFixed(4), 420, 55);
                            }
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('tangent slope = ' + fp(a).toFixed(4), 420, 75);

                            // Legend
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('-- f(x)', 420, 105);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('-- secant', 420, 123);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('-- tangent', 420, 141);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'zoom-microscope',
                    title: 'The Mathematical Microscope',
                    description: 'Zoom into a curve at a chosen point. At high magnification the curve looks like a straight line — the tangent!',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 50, originX: 350, originY: 210 });
                        var ctx = viz.ctx;
                        var centerX = 2;
                        var zoomLevel = 1;

                        VizEngine.createSlider(controls, 'Point', 0.5, 5, 2, 0.1, function(v) { centerX = v; });
                        VizEngine.createSlider(controls, 'Zoom', 1, 100, 1, 1, function(v) { zoomLevel = v; });

                        function f(x) { return Math.sin(x) + 0.3 * x; }
                        function fp(x) { return Math.cos(x) + 0.3; }

                        function draw() {
                            viz.clear();

                            var fc = f(centerX);
                            var scale = 50 * zoomLevel;
                            var oX = 350 - centerX * scale;
                            var oY = 210 + fc * scale;

                            // Override transform for this frame
                            var toS = function(x, y) { return [oX + x * scale, oY - y * scale]; };

                            // Grid (adaptive spacing)
                            var spacing = 1;
                            if (zoomLevel > 5) spacing = 0.1;
                            if (zoomLevel > 20) spacing = 0.01;
                            if (zoomLevel > 50) spacing = 0.001;

                            // Visible range in math coords
                            var xMin = (0 - oX) / scale;
                            var xMax = (700 - oX) / scale;
                            var yMin = (oY - 420) / scale;
                            var yMax = oY / scale;

                            // Draw light grid
                            ctx.strokeStyle = viz.colors.grid;
                            ctx.lineWidth = 0.5;
                            var gMin = Math.floor(xMin / spacing) * spacing;
                            var gMax = Math.ceil(xMax / spacing) * spacing;
                            for (var gx = gMin; gx <= gMax; gx += spacing) {
                                var sx = oX + gx * scale;
                                if (sx < 0 || sx > 700) continue;
                                ctx.beginPath(); ctx.moveTo(sx, 0); ctx.lineTo(sx, 420); ctx.stroke();
                            }
                            gMin = Math.floor(yMin / spacing) * spacing;
                            gMax = Math.ceil(yMax / spacing) * spacing;
                            for (var gy = gMin; gy <= gMax; gy += spacing) {
                                var sy = oY - gy * scale;
                                if (sy < 0 || sy > 420) continue;
                                ctx.beginPath(); ctx.moveTo(0, sy); ctx.lineTo(700, sy); ctx.stroke();
                            }

                            // Axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(0, oY); ctx.lineTo(700, oY); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(oX, 0); ctx.lineTo(oX, 420); ctx.stroke();

                            // Draw the curve
                            ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 0; i <= 500; i++) {
                                var x = xMin + (xMax - xMin) * i / 500;
                                var y = f(x);
                                var pt = toS(x, y);
                                if (pt[1] < -200 || pt[1] > 620) { started = false; continue; }
                                if (!started) { ctx.moveTo(pt[0], pt[1]); started = true; }
                                else ctx.lineTo(pt[0], pt[1]);
                            }
                            ctx.stroke();

                            // Tangent line
                            var slope = fp(centerX);
                            ctx.strokeStyle = viz.colors.teal; ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            var tl = toS(xMin, fc + slope * (xMin - centerX));
                            var tr = toS(xMax, fc + slope * (xMax - centerX));
                            ctx.moveTo(tl[0], tl[1]);
                            ctx.lineTo(tr[0], tr[1]);
                            ctx.stroke();

                            // Center point
                            var cp = toS(centerX, fc);
                            ctx.fillStyle = viz.colors.green;
                            ctx.beginPath(); ctx.arc(cp[0], cp[1], 6, 0, Math.PI * 2); ctx.fill();

                            // Crosshair circle (microscope reticle)
                            ctx.strokeStyle = viz.colors.green + '44'; ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.arc(cp[0], cp[1], 40, 0, Math.PI * 2); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(cp[0] - 50, cp[1]); ctx.lineTo(cp[0] + 50, cp[1]); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(cp[0], cp[1] - 50); ctx.lineTo(cp[0], cp[1] + 50); ctx.stroke();

                            // Info
                            ctx.fillStyle = '#0c0c20cc';
                            ctx.fillRect(8, 8, 230, 85);
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left'; ctx.textBaseline = 'top';
                            ctx.fillText('f(x) = sin(x) + 0.3x', 16, 14);
                            ctx.fillText('Point: (' + centerX.toFixed(2) + ', ' + fc.toFixed(4) + ')', 16, 34);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText("f'(" + centerX.toFixed(2) + ') = ' + slope.toFixed(4), 16, 54);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('Zoom: ' + zoomLevel + 'x', 16, 74);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Use the limit definition to compute the derivative of \\(f(x) = 3x^2 - 2x + 1\\) at a general point \\(a\\).',
                    hint: 'Expand \\(f(a+h) = 3(a+h)^2 - 2(a+h) + 1\\), subtract \\(f(a)\\), divide by \\(h\\), then take \\(h \\to 0\\).',
                    solution: '\\(f(a+h) - f(a) = 3(2ah + h^2) - 2h = 6ah + 3h^2 - 2h\\).  Dividing by \\(h\\): \\(6a + 3h - 2\\).  As \\(h \\to 0\\) this gives \\(f\'(a) = 6a - 2\\).'
                },
                {
                    question: 'Prove that \\(f(x) = |x|\\) is not differentiable at \\(x = 0\\) by computing the left-hand and right-hand limits of the difference quotient.',
                    hint: 'For \\(h > 0\\), \\(|h|/h = 1\\). For \\(h < 0\\), \\(|h|/h = -1\\).',
                    solution: 'The difference quotient at \\(0\\) is \\(|h|/h\\).  For \\(h \\to 0^+\\) this limit is \\(1\\); for \\(h \\to 0^-\\) it is \\(-1\\).  Since the one-sided limits disagree, the two-sided limit does not exist, so \\(f\\) is not differentiable at \\(0\\).'
                },
                {
                    question: 'If \\(f\\) is differentiable at \\(a\\) with \\(f\'(a) = 5\\), what is \\(\\lim_{h \\to 0} \\frac{f(a + 3h) - f(a)}{h}\\)?',
                    hint: 'Multiply and divide by 3 to bring out \\(\\frac{f(a+3h)-f(a)}{3h}\\).  Let \\(u = 3h\\).',
                    solution: '\\(\\frac{f(a+3h)-f(a)}{h} = 3\\cdot\\frac{f(a+3h)-f(a)}{3h}\\).  As \\(h \\to 0\\), \\(3h \\to 0\\), so the inner quotient tends to \\(f\'(a) = 5\\).  The full limit is \\(3 \\times 5 = 15\\).'
                },
                {
                    question: 'Let \\(f(x) = x^{1/3}\\).  Show that \\(f\\) is continuous at \\(0\\) but not differentiable there.',
                    hint: 'The difference quotient at 0 is \\(h^{1/3}/h = h^{-2/3}\\).  Does this have a finite limit?',
                    solution: 'Continuity: \\(\\lim_{x \\to 0} x^{1/3} = 0 = f(0)\\).  Differentiability: \\(\\frac{f(h)-f(0)}{h} = h^{-2/3} \\to +\\infty\\) as \\(h \\to 0\\).  Since the limit is not finite, \\(f\\) is not differentiable at \\(0\\) (the tangent is vertical).'
                },
                {
                    question: 'Give the linear approximation of \\(f(x) = \\sqrt{x}\\) near \\(a = 4\\), and use it to approximate \\(\\sqrt{4.1}\\).',
                    hint: '\\(f\'(x) = \\frac{1}{2\\sqrt{x}}\\), so \\(f\'(4) = \\frac{1}{4}\\).  The linearization is \\(L(x) = f(4) + f\'(4)(x-4)\\).',
                    solution: '\\(L(x) = 2 + \\frac{1}{4}(x - 4)\\).  At \\(x = 4.1\\): \\(L(4.1) = 2 + 0.025 = 2.025\\).  (True value: \\(\\approx 2.02485\\).)'
                }
            ]
        },

        // ============================================================
        //  SECTION 2 — Differentiation Rules
        // ============================================================
        {
            id: 'ch07-sec02',
            title: 'The Algebra of Derivatives',
            content: `
                <h2>The Algebra of Derivatives</h2>

                <p>Computing derivatives from the limit definition every time would be painfully slow.  Fortunately, a small collection of <strong>rules</strong> lets us differentiate virtually any function built from standard pieces.  Each rule is proved once from the definition; after that, we combine them freely.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.3 — Arithmetic Rules</div>
                    <div class="env-body">
                        <p>If \\(f\\) and \\(g\\) are differentiable at \\(a\\), then:</p>
                        <ol>
                            <li><strong>Sum:</strong> \\((f+g)'(a) = f'(a) + g'(a)\\).</li>
                            <li><strong>Scalar multiple:</strong> \\((cf)'(a) = c\\,f'(a)\\) for any constant \\(c\\).</li>
                            <li><strong>Product:</strong> \\((fg)'(a) = f'(a)g(a) + f(a)g'(a)\\).</li>
                            <li><strong>Quotient:</strong> If \\(g(a) \\ne 0\\), \\(\\displaystyle\\left(\\frac{f}{g}\\right)'(a) = \\frac{f'(a)g(a) - f(a)g'(a)}{[g(a)]^2}\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch — Product Rule</div>
                    <div class="env-body">
                        <p>The key trick is adding and subtracting \\(f(a+h)g(a)\\):</p>
                        <p style="text-align:center;">
                            \\(\\displaystyle \\frac{f(a+h)g(a+h) - f(a)g(a)}{h}
                            = f(a+h)\\frac{g(a+h)-g(a)}{h} + g(a)\\frac{f(a+h)-f(a)}{h}.\\)
                        </p>
                        <p>As \\(h\\to 0\\): \\(f(a+h)\\to f(a)\\) (continuity from differentiability), the first quotient \\(\\to g'(a)\\), the second \\(\\to f'(a)\\).  So the limit is \\(f(a)g'(a)+g(a)f'(a)\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="product-rule-explorer"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.4 — The Chain Rule</div>
                    <div class="env-body">
                        <p>If \\(g\\) is differentiable at \\(a\\) and \\(f\\) is differentiable at \\(g(a)\\), then</p>
                        <p style="text-align:center;">
                            \\(\\displaystyle (f \\circ g)'(a) = f'(g(a))\\,g'(a).\\)
                        </p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Chain Rule as Gear Ratio</div>
                    <div class="env-body">
                        <p>Think of two gears meshed together.  The outer function \\(f\\) amplifies the rate of the inner function \\(g\\).  If \\(g\\) changes at rate \\(g'(a)\\) and \\(f\\) multiplies changes by \\(f'(g(a))\\), the overall rate is the product.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="chain-rule-pipeline"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.5 — Power Rule (General)</div>
                    <div class="env-body">
                        <p>For any \\(n \\in \\mathbb{R}\\) and \\(x > 0\\),</p>
                        <p style="text-align:center;">
                            \\(\\displaystyle \\frac{d}{dx} x^n = n x^{n-1}.\\)
                        </p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Combining Rules</div>
                    <div class="env-body">
                        <p>Differentiate \\(h(x) = (3x^2+1)^5\\).</p>
                        <p><strong>Chain rule:</strong> outer \\(u^5\\), inner \\(u = 3x^2+1\\).</p>
                        <p style="text-align:center;">
                            \\(h'(x) = 5(3x^2+1)^4 \\cdot 6x = 30x(3x^2+1)^4.\\)
                        </p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example — Quotient Rule</div>
                    <div class="env-body">
                        <p>Differentiate \\(\\displaystyle q(x) = \\frac{x^2}{\\sin x}\\) for \\(x \\ne 0\\).</p>
                        <p style="text-align:center;">
                            \\(q'(x) = \\frac{2x \\sin x - x^2 \\cos x}{\\sin^2 x} = \\frac{x(2\\sin x - x\\cos x)}{\\sin^2 x}.\\)
                        </p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'product-rule-explorer',
                    title: 'Product Rule Explorer',
                    description: 'See (fg)\' as the sum of f\'g and fg\'. Drag x to explore.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 40, originX: 120, originY: 280 });
                        var ctx = viz.ctx;

                        var pt = viz.addDraggable('x', 2, 0, viz.colors.green, 8, function() {
                            pt.x = Math.max(0.2, Math.min(6, pt.x));
                            pt.y = 0;
                        });

                        function f(x) { return Math.sin(x) + 1.5; }
                        function g(x) { return 0.5 * x; }
                        function fp(x) { return Math.cos(x); }
                        function gp(x) { return 0.5; }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var xMin = -0.5, xMax = 7;

                            // Draw f, g, and fg
                            viz.drawFunction(f, xMin, xMax, viz.colors.blue, 2);
                            viz.drawFunction(g, xMin, xMax, viz.colors.orange, 2);
                            viz.drawFunction(function(x) { return f(x) * g(x); }, xMin, xMax, viz.colors.purple, 2.5);

                            var x = pt.x;
                            var fv = f(x), gv = g(x), fpv = fp(x), gpv = gp(x);
                            var prodVal = fv * gv;
                            var prodDeriv = fpv * gv + fv * gpv;

                            // Mark point on product curve
                            viz.drawPoint(x, prodVal, viz.colors.purple, null, 6);

                            // Tangent line to product
                            var tangProd = function(t) { return prodVal + prodDeriv * (t - x); };
                            viz.drawFunction(tangProd, Math.max(xMin, x - 2), Math.min(xMax, x + 2), viz.colors.purple, 1.5, 50);

                            // Draggable indicator on x-axis
                            viz.drawDraggables();

                            // Info panel
                            ctx.fillStyle = '#0c0c20dd';
                            ctx.fillRect(430, 10, 260, 150);
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'left'; ctx.textBaseline = 'top';
                            var lx = 440, ly = 16;
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('f(x) = sin(x) + 1.5', lx, ly);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('g(x) = 0.5x', lx, ly + 18);
                            ctx.fillStyle = viz.colors.purple;
                            ctx.fillText('(fg)(x) = (sin(x)+1.5)(0.5x)', lx, ly + 36);

                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('At x = ' + x.toFixed(2) + ':', lx, ly + 60);
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText("f'(x)g(x) = " + (fpv * gv).toFixed(3), lx, ly + 78);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText("f(x)g'(x) = " + (fv * gpv).toFixed(3), lx, ly + 96);
                            ctx.fillStyle = viz.colors.purple;
                            ctx.fillText("(fg)'(x) = " + prodDeriv.toFixed(3), lx, ly + 114);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('Sum check: ' + (fpv * gv + fv * gpv).toFixed(3), lx, ly + 132);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'chain-rule-pipeline',
                    title: 'Chain Rule Pipeline',
                    description: 'Watch how rates multiply through a composition f(g(x)). Adjust x to see the effect.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var xVal = 1.5;

                        VizEngine.createSlider(controls, 'x', 0, 4, 1.5, 0.05, function(v) { xVal = v; });

                        function g(x) { return x * x; }
                        function f(u) { return Math.sin(u); }
                        function gp(x) { return 2 * x; }
                        function fp(u) { return Math.cos(u); }

                        function draw() {
                            viz.clear();

                            var uVal = g(xVal);
                            var yVal = f(uVal);
                            var gpVal = gp(xVal);
                            var fpVal = fp(uVal);
                            var chainVal = fpVal * gpVal;

                            // Three boxes: x -> g -> f
                            var boxW = 160, boxH = 70;
                            var y0 = 60;
                            var positions = [60, 270, 480];

                            // Box backgrounds
                            var boxColors = [viz.colors.blue, viz.colors.orange, viz.colors.purple];
                            var boxLabels = ['Input: x', 'Inner: g(x) = x\u00B2', 'Outer: f(u) = sin(u)'];
                            var boxValues = [xVal.toFixed(3), uVal.toFixed(3), yVal.toFixed(4)];
                            var rateLabels = ['', "g'(x) = 2x = " + gpVal.toFixed(3), "f'(u) = cos(u) = " + fpVal.toFixed(3)];

                            for (var i = 0; i < 3; i++) {
                                var bx = positions[i];
                                ctx.fillStyle = boxColors[i] + '22';
                                ctx.fillRect(bx, y0, boxW, boxH);
                                ctx.strokeStyle = boxColors[i];
                                ctx.lineWidth = 2;
                                ctx.strokeRect(bx, y0, boxW, boxH);

                                ctx.fillStyle = boxColors[i];
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                ctx.fillText(boxLabels[i], bx + boxW / 2, y0 + 8);

                                ctx.fillStyle = viz.colors.white;
                                ctx.font = 'bold 20px -apple-system,sans-serif';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(boxValues[i], bx + boxW / 2, y0 + boxH / 2 + 10);
                            }

                            // Arrows between boxes
                            for (var j = 0; j < 2; j++) {
                                var ax1 = positions[j] + boxW;
                                var ax2 = positions[j + 1];
                                var ay = y0 + boxH / 2;
                                ctx.strokeStyle = viz.colors.white;
                                ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.moveTo(ax1 + 5, ay); ctx.lineTo(ax2 - 5, ay); ctx.stroke();
                                ctx.fillStyle = viz.colors.white;
                                ctx.beginPath();
                                ctx.moveTo(ax2 - 5, ay);
                                ctx.lineTo(ax2 - 13, ay - 5);
                                ctx.lineTo(ax2 - 13, ay + 5);
                                ctx.closePath(); ctx.fill();

                                // Rate label on arrow
                                if (rateLabels[j + 1]) {
                                    ctx.fillStyle = boxColors[j + 1];
                                    ctx.font = '11px -apple-system,sans-serif';
                                    ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                                    ctx.fillText(rateLabels[j + 1], (ax1 + ax2) / 2, ay - 8);
                                }
                            }

                            // Rate multiplication diagram
                            var ry = 180;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('Chain Rule: rates multiply!', 350, ry);

                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText("g'(x) = " + gpVal.toFixed(3), 200, ry + 30);
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('\u00D7', 310, ry + 30);
                            ctx.fillStyle = viz.colors.purple;
                            ctx.fillText("f'(g(x)) = " + fpVal.toFixed(3), 430, ry + 30);

                            // Result
                            ctx.font = 'bold 18px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText("(f \u2218 g)'(x) = " + chainVal.toFixed(4), 350, ry + 60);

                            // Small graphs below
                            var gLeftX = 40, gTopY = 260, gW = 200, gH = 100;
                            // g(x) graph
                            ctx.strokeStyle = viz.colors.grid; ctx.lineWidth = 1;
                            ctx.strokeRect(gLeftX, gTopY, gW, gH);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                            ctx.fillText('g(x) = x\u00B2', gLeftX + gW / 2, gTopY - 2);

                            ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var k = 0; k <= 50; k++) {
                                var xx = k / 50 * 4;
                                var px = gLeftX + (xx / 4) * gW;
                                var py = gTopY + gH - (g(xx) / 17) * gH;
                                k === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
                            }
                            ctx.stroke();
                            // Mark point
                            var markPx = gLeftX + (xVal / 4) * gW;
                            var markPy = gTopY + gH - (uVal / 17) * gH;
                            ctx.fillStyle = viz.colors.green;
                            ctx.beginPath(); ctx.arc(markPx, markPy, 4, 0, Math.PI * 2); ctx.fill();

                            // f(u) graph
                            var fLeftX = 250;
                            ctx.strokeStyle = viz.colors.grid; ctx.lineWidth = 1;
                            ctx.strokeRect(fLeftX, gTopY, gW, gH);
                            ctx.fillStyle = viz.colors.purple;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                            ctx.fillText('f(u) = sin(u)', fLeftX + gW / 2, gTopY - 2);

                            ctx.strokeStyle = viz.colors.purple; ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var m = 0; m <= 50; m++) {
                                var uu = m / 50 * 17;
                                var fpx = fLeftX + (uu / 17) * gW;
                                var fpy = gTopY + gH / 2 - f(uu) * (gH / 2.5);
                                m === 0 ? ctx.moveTo(fpx, fpy) : ctx.lineTo(fpx, fpy);
                            }
                            ctx.stroke();
                            var mFpx = fLeftX + (uVal / 17) * gW;
                            var mFpy = gTopY + gH / 2 - yVal * (gH / 2.5);
                            ctx.fillStyle = viz.colors.green;
                            ctx.beginPath(); ctx.arc(mFpx, mFpy, 4, 0, Math.PI * 2); ctx.fill();

                            // Composition graph
                            var cLeftX = 460;
                            ctx.strokeStyle = viz.colors.grid; ctx.lineWidth = 1;
                            ctx.strokeRect(cLeftX, gTopY, gW, gH);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                            ctx.fillText('f(g(x)) = sin(x\u00B2)', cLeftX + gW / 2, gTopY - 2);

                            ctx.strokeStyle = viz.colors.teal; ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var n = 0; n <= 80; n++) {
                                var xn = n / 80 * 4;
                                var cpx = cLeftX + (xn / 4) * gW;
                                var cpy = gTopY + gH / 2 - f(g(xn)) * (gH / 2.5);
                                n === 0 ? ctx.moveTo(cpx, cpy) : ctx.lineTo(cpx, cpy);
                            }
                            ctx.stroke();
                            var mcpx = cLeftX + (xVal / 4) * gW;
                            var mcpy = gTopY + gH / 2 - yVal * (gH / 2.5);
                            ctx.fillStyle = viz.colors.green;
                            ctx.beginPath(); ctx.arc(mcpx, mcpy, 4, 0, Math.PI * 2); ctx.fill();
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Differentiate \\(f(x) = x^3 e^x\\) using the product rule.',
                    hint: 'Let \\(u = x^3\\) and \\(v = e^x\\).  Then \\(u\' = 3x^2\\) and \\(v\' = e^x\\).',
                    solution: '\\(f\'(x) = 3x^2 e^x + x^3 e^x = x^2 e^x(3 + x)\\).'
                },
                {
                    question: 'Use the chain rule to differentiate \\(h(x) = \\cos(x^2 + 1)\\).',
                    hint: 'Outer: \\(\\cos u\\), inner: \\(u = x^2 + 1\\).  What is \\(\\frac{d}{du}\\cos u\\)?',
                    solution: '\\(h\'(x) = -\\sin(x^2+1) \\cdot 2x = -2x\\sin(x^2+1)\\).'
                },
                {
                    question: 'Prove the quotient rule from the product rule and chain rule.  That is, write \\(f/g = f \\cdot g^{-1}\\) and differentiate.',
                    hint: 'Note \\(\\frac{d}{dx}g(x)^{-1} = -g(x)^{-2}g\'(x)\\) by the chain rule.',
                    solution: '\\((f \\cdot g^{-1})\' = f\' \\cdot g^{-1} + f \\cdot (-g^{-2})g\' = \\frac{f\'}{g} - \\frac{fg\'}{g^2} = \\frac{f\'g - fg\'}{g^2}\\).'
                },
                {
                    question: 'Find the derivative of \\(y = (\\sin x)^{\\cos x}\\) for \\(x \\in (0, \\pi)\\) using logarithmic differentiation.',
                    hint: 'Take \\(\\ln y = \\cos x \\cdot \\ln(\\sin x)\\) and differentiate both sides.',
                    solution: '\\(\\frac{y\'}{y} = -\\sin x \\ln(\\sin x) + \\cos x \\cdot \\frac{\\cos x}{\\sin x}\\), so \\(y\' = (\\sin x)^{\\cos x}\\left(\\frac{\\cos^2 x}{\\sin x} - \\sin x \\ln(\\sin x)\\right)\\).'
                },
                {
                    question: 'If \\(f(1) = 2\\), \\(f\'(1) = 3\\), \\(g(1) = -1\\), \\(g\'(1) = 4\\), find \\((fg)\'(1)\\) and \\((f/g)\'(1)\\).',
                    hint: 'Product rule: \\(f\'g + fg\'\\).  Quotient rule: \\(\\frac{f\'g - fg\'}{g^2}\\).',
                    solution: '\\((fg)\'(1) = 3(-1) + 2(4) = 5\\).  \\((f/g)\'(1) = \\frac{3(-1) - 2(4)}{(-1)^2} = \\frac{-11}{1} = -11\\).'
                }
            ]
        },

        // ============================================================
        //  SECTION 3 — Rolle's Theorem, Mean Value Theorem
        // ============================================================
        {
            id: 'ch07-sec03',
            title: "Rolle's Theorem & the Mean Value Theorem",
            content: `
                <h2>Rolle's Theorem & the Mean Value Theorem</h2>

                <p>If you drive 150 km in 2 hours, your average speed is 75 km/h.  Must there have been at least one instant where your speedometer read exactly 75?  Intuitively yes — and the <strong>Mean Value Theorem</strong> makes this precise.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.6 — Rolle's Theorem</div>
                    <div class="env-body">
                        <p>Let \\(f\\) be continuous on \\([a,b]\\) and differentiable on \\((a,b)\\), with \\(f(a) = f(b)\\).  Then there exists \\(c \\in (a,b)\\) such that \\(f'(c) = 0\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By the Extreme Value Theorem, \\(f\\) attains its maximum and minimum on \\([a,b]\\).  If both occur at the endpoints, then \\(f\\) is constant (since \\(f(a)=f(b)\\)), so \\(f'(c)=0\\) for all \\(c\\).  Otherwise, at least one extremum is in \\((a,b)\\); at an interior extremum the derivative is zero (Fermat's theorem). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Picture</div>
                    <div class="env-body">
                        <p>Rolle's Theorem says: if a curve starts and ends at the same height, it must have a horizontal tangent somewhere in between — it has to "turn around."</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="rolle-demo"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.7 — Mean Value Theorem (MVT)</div>
                    <div class="env-body">
                        <p>Let \\(f\\) be continuous on \\([a,b]\\) and differentiable on \\((a,b)\\).  Then there exists \\(c \\in (a,b)\\) such that</p>
                        <p style="text-align:center;">
                            \\(\\displaystyle f'(c) = \\frac{f(b)-f(a)}{b-a}.\\)
                        </p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Idea</div>
                    <div class="env-body">
                        <p>Define \\(g(x) = f(x) - \\left[f(a) + \\frac{f(b)-f(a)}{b-a}(x-a)\\right]\\).  Then \\(g(a)=g(b)=0\\), so by Rolle's Theorem there is \\(c\\) with \\(g'(c)=0\\), which gives \\(f'(c) = \\frac{f(b)-f(a)}{b-a}\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="mvt-explorer"></div>

                <div class="env-block example">
                    <div class="env-title">Example — Speed Trap</div>
                    <div class="env-body">
                        <p>You pass toll booth A at time \\(t=0\\) and toll booth B (120 km away) at \\(t=1\\) hour.  By MVT, there is some instant when your speed was exactly \\(120\\) km/h — enough for a speeding ticket if the limit is \\(100\\)!</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 7.8 — Zero Derivative Implies Constant</div>
                    <div class="env-body">
                        <p>If \\(f'(x) = 0\\) for all \\(x\\) in an interval \\(I\\), then \\(f\\) is constant on \\(I\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>For any \\(x_1 < x_2\\) in \\(I\\), MVT gives \\(f(x_2)-f(x_1) = f'(c)(x_2-x_1) = 0\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Why the MVT Matters</div>
                    <div class="env-body">
                        <p>The MVT is the single most important result in differential calculus.  Nearly every theorem that converts <em>local</em> information (the derivative at each point) into <em>global</em> information (behavior on an interval) flows through it.  Monotonicity, concavity, L'Hopital, Taylor — all depend on the MVT.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'rolle-demo',
                    title: "Rolle's Theorem Demonstration",
                    description: 'The curve starts and ends at the same height. Find the point where the tangent is horizontal!',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 45, originX: 80, originY: 300 });
                        var ctx = viz.ctx;

                        // f(x) = -(x-1)(x-4) + 2 = -x^2 + 5x - 4 + 2 = -x^2 + 5x - 2
                        // f(0) = -2, f(5) = -25+25-2 = -2 -> same
                        function f(x) { return -0.25 * (x - 0.5) * (x - 2.5) * (x - 4.5) + 2; }
                        function fp(x) { return -0.25 * ((x - 2.5) * (x - 4.5) + (x - 0.5) * (x - 4.5) + (x - 0.5) * (x - 2.5)); }

                        var a = 0.5, b = 4.5;

                        var cDrag = viz.addDraggable('c', 2.5, 0, viz.colors.teal, 8, function() {
                            cDrag.x = Math.max(a + 0.05, Math.min(b - 0.05, cDrag.x));
                            cDrag.y = 0;
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            // Draw curve
                            viz.drawFunction(f, -0.5, 6, viz.colors.blue, 2.5);

                            // Endpoints
                            var fa = f(a), fb = f(b);
                            viz.drawPoint(a, fa, viz.colors.green, 'a', 6);
                            viz.drawPoint(b, fb, viz.colors.green, 'b', 6);

                            // Horizontal line through f(a)=f(b)
                            viz.drawSegment(a, fa, b, fb, viz.colors.green, 1, true);

                            // Point c and tangent
                            var c = cDrag.x;
                            var fc = f(c);
                            var slope = fp(c);
                            viz.drawPoint(c, fc, viz.colors.teal, null, 7);

                            // Tangent at c
                            var tangFunc = function(x) { return fc + slope * (x - c); };
                            viz.drawFunction(tangFunc, c - 2, c + 2, viz.colors.teal, 2, 50);

                            // Vertical dashed from c on x-axis to curve
                            viz.drawSegment(c, 0, c, fc, viz.colors.teal, 1, true);

                            viz.drawDraggables();

                            // Info
                            ctx.fillStyle = '#0c0c20dd';
                            ctx.fillRect(430, 10, 260, 95);
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left'; ctx.textBaseline = 'top';
                            ctx.fillText("Rolle's Theorem", 440, 16);
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('f(a) = f(b) = ' + fa.toFixed(3), 440, 36);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('c = ' + c.toFixed(3), 440, 54);
                            ctx.fillText("f'(c) = " + slope.toFixed(4), 440, 72);

                            if (Math.abs(slope) < 0.05) {
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.fillText("f'(c) ~ 0  -- Found it!", 440, 90);
                            }
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'mvt-explorer',
                    title: 'Mean Value Theorem Explorer',
                    description: 'Drag c to find where the tangent line is parallel to the secant joining a and b.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 55, originX: 70, originY: 340 });
                        var ctx = viz.ctx;
                        var aVal = 0.5, bVal = 4;

                        function f(x) { return 0.2 * x * x * x - 0.8 * x * x + 1.5 * x + 0.5; }
                        function fp(x) { return 0.6 * x * x - 1.6 * x + 1.5; }

                        VizEngine.createSlider(controls, 'a', 0, 3, 0.5, 0.1, function(v) { aVal = v; });
                        VizEngine.createSlider(controls, 'b', 1, 6, 4, 0.1, function(v) { bVal = v; });

                        var cDrag = viz.addDraggable('c', 2, 0, viz.colors.orange, 9, function() {
                            cDrag.x = Math.max(aVal + 0.05, Math.min(bVal - 0.05, cDrag.x));
                            cDrag.y = 0;
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            if (aVal >= bVal) bVal = aVal + 0.5;

                            var fa = f(aVal), fb = f(bVal);
                            var secantSlope = (fb - fa) / (bVal - aVal);

                            // Draw curve
                            viz.drawFunction(f, -0.5, 7, viz.colors.blue, 2.5);

                            // Secant line
                            var secant = function(x) { return fa + secantSlope * (x - aVal); };
                            viz.drawFunction(secant, -0.5, 7, viz.colors.green, 1.5, 100);

                            // Endpoints
                            viz.drawPoint(aVal, fa, viz.colors.green, 'a', 6);
                            viz.drawPoint(bVal, fb, viz.colors.green, 'b', 6);

                            // Point c and tangent
                            var c = cDrag.x;
                            var fc = f(c);
                            var tangSlope = fp(c);
                            viz.drawPoint(c, fc, viz.colors.orange, null, 7);

                            // Tangent at c
                            var tang = function(x) { return fc + tangSlope * (x - c); };
                            viz.drawFunction(tang, c - 2.5, c + 2.5, viz.colors.orange, 2, 50);

                            // Vertical dashed
                            viz.drawSegment(c, 0, c, fc, viz.colors.orange, 1, true);

                            viz.drawDraggables();

                            // Info
                            ctx.fillStyle = '#0c0c20dd';
                            ctx.fillRect(420, 10, 270, 110);
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left'; ctx.textBaseline = 'top';
                            ctx.fillText('Mean Value Theorem', 430, 16);
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('Secant slope = (f(b)-f(a))/(b-a) = ' + secantSlope.toFixed(4), 430, 38);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText("Tangent slope = f'(c) = " + tangSlope.toFixed(4), 430, 58);
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('Difference: ' + Math.abs(tangSlope - secantSlope).toFixed(5), 430, 78);

                            if (Math.abs(tangSlope - secantSlope) < 0.02) {
                                ctx.fillStyle = viz.colors.teal;
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.fillText('Tangent parallel to secant!', 430, 98);
                            } else {
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText('Drag c until slopes match...', 430, 98);
                            }
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: "Apply Rolle's Theorem to show that \\(f(x) = x^3 - 3x + 1\\) has a root in each of \\((-2, -1)\\), \\((-1, 1)\\), and \\((1, 2)\\).  (Hint: use the Intermediate Value Theorem for roots, then Rolle for critical points.)",
                    hint: 'Compute \\(f(-2), f(-1), f(0), f(1), f(2)\\).  The sign changes locate roots.  Between any two consecutive roots of \\(f\\), Rolle gives a root of \\(f\'\\).',
                    solution: '\\(f(-2) = -1, f(-1) = 3, f(0) = 1, f(1) = -1, f(2) = 3\\).  Sign changes: \\((-2,-1)\\), \\((0,1)\\), \\((1,2)\\) give three roots by IVT.  Between consecutive roots, Rolle gives roots of \\(f\'(x) = 3x^2 - 3 = 0\\) at \\(x = \\pm 1\\), consistent.'
                },
                {
                    question: 'Use the MVT to prove that \\(|\\sin a - \\sin b| \\le |a - b|\\) for all \\(a, b\\).',
                    hint: 'By MVT, \\(\\sin a - \\sin b = \\cos(c)(a - b)\\) for some \\(c\\).  How large can \\(|\\cos c|\\) be?',
                    solution: 'MVT: \\(\\sin a - \\sin b = \\cos(c)(a-b)\\) for some \\(c\\) between \\(a\\) and \\(b\\).  Since \\(|\\cos c| \\le 1\\), we get \\(|\\sin a - \\sin b| = |\\cos c||a-b| \\le |a-b|\\).  (This shows \\(\\sin\\) is Lipschitz-1.)'
                },
                {
                    question: 'Let \\(f\\) be differentiable on \\(\\mathbb{R}\\) with \\(f(0) = 0\\) and \\(|f\'(x)| \\le 3\\) for all \\(x\\).  Prove that \\(|f(x)| \\le 3|x|\\).',
                    hint: 'Apply the MVT to the interval \\([0, x]\\) (or \\([x, 0]\\) if \\(x < 0\\)).',
                    solution: 'By MVT, \\(f(x) - f(0) = f\'(c)x\\) for some \\(c\\) between \\(0\\) and \\(x\\).  So \\(|f(x)| = |f\'(c)||x| \\le 3|x|\\).'
                },
                {
                    question: 'If \\(f\\) is differentiable on \\((a, b)\\), continuous on \\([a, b]\\), and \\(f\'(x) > 0\\) for all \\(x \\in (a,b)\\), prove that \\(f\\) is strictly increasing on \\([a,b]\\).',
                    hint: 'Take \\(x_1 < x_2\\) in \\([a,b]\\) and apply MVT.',
                    solution: 'For \\(x_1 < x_2\\), MVT gives \\(f(x_2) - f(x_1) = f\'(c)(x_2 - x_1)\\) for some \\(c \\in (x_1, x_2)\\).  Since \\(f\'(c) > 0\\) and \\(x_2 - x_1 > 0\\), we get \\(f(x_2) > f(x_1)\\).'
                },
                {
                    question: 'Show that the equation \\(x^5 + 3x + 1 = 0\\) has exactly one real root.',
                    hint: 'First use IVT to show at least one root exists.  Then use the derivative and MVT to show there cannot be two.',
                    solution: 'Let \\(f(x) = x^5 + 3x + 1\\).  \\(f(-1) = -3, f(0) = 1\\), so IVT gives a root in \\((-1,0)\\).  Now \\(f\'(x) = 5x^4 + 3 \\ge 3 > 0\\) for all \\(x\\), so \\(f\\) is strictly increasing (by MVT).  A strictly increasing function can cross zero at most once.'
                }
            ]
        },

        // ============================================================
        //  SECTION 4 — L'Hopital's Rule
        // ============================================================
        {
            id: 'ch07-sec04',
            title: "L'H\u00F4pital's Rule",
            content: `
                <h2>L'H\u00F4pital's Rule</h2>

                <p>What happens when a limit gives the indeterminate form \\(\\frac{0}{0}\\) or \\(\\frac{\\infty}{\\infty}\\)?  Rather than algebraic gymnastics, we can often <strong>differentiate the numerator and denominator separately</strong> and try again.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.9 — L'H\u00F4pital's Rule (0/0 form)</div>
                    <div class="env-body">
                        <p>Suppose \\(f\\) and \\(g\\) are differentiable on an open interval containing \\(a\\) (except possibly at \\(a\\) itself), with \\(g'(x) \\ne 0\\) near \\(a\\).  If</p>
                        <p style="text-align:center;">
                            \\(\\lim_{x \\to a} f(x) = 0 \\quad\\text{and}\\quad \\lim_{x \\to a} g(x) = 0,\\)
                        </p>
                        <p>and if \\(\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}\\) exists (or is \\(\\pm\\infty\\)), then</p>
                        <p style="text-align:center;">
                            \\(\\displaystyle \\lim_{x \\to a}\\frac{f(x)}{g(x)} = \\lim_{x \\to a}\\frac{f'(x)}{g'(x)}.\\)
                        </p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Why It Works (Intuition)</div>
                    <div class="env-body">
                        <p>Near \\(a\\), \\(f(x) \\approx f'(a)(x-a)\\) and \\(g(x) \\approx g'(a)(x-a)\\) (linear approximation).  Their ratio is approximately \\(f'(a)/g'(a)\\), which is exactly what L'Hopital's Rule says.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="lhopital-demo"></div>

                <div class="env-block warning">
                    <div class="env-title">Common Pitfalls</div>
                    <div class="env-body">
                        <ul>
                            <li>L'Hopital's Rule only applies when the limit is an indeterminate form (\\(0/0\\) or \\(\\infty/\\infty\\)).  If you apply it to a non-indeterminate form, you will get a wrong answer.</li>
                            <li>The rule says to differentiate \\(f\\) and \\(g\\) <em>separately</em> — this is <strong>not</strong> the quotient rule!</li>
                            <li>If \\(\\lim f'/g'\\) does not exist, L'Hopital's Rule is inconclusive — the original limit may still exist (try other methods).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1 — Classic \\(0/0\\)</div>
                    <div class="env-body">
                        <p>\\(\\displaystyle \\lim_{x \\to 0}\\frac{\\sin x}{x} = \\lim_{x \\to 0}\\frac{\\cos x}{1} = 1.\\)</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2 — Repeated application</div>
                    <div class="env-body">
                        <p>\\(\\displaystyle \\lim_{x \\to 0}\\frac{1 - \\cos x}{x^2}\\).  This is \\(0/0\\).  Apply L'Hopital:</p>
                        <p style="text-align:center;">
                            \\(\\displaystyle = \\lim_{x \\to 0}\\frac{\\sin x}{2x}\\),
                        </p>
                        <p>still \\(0/0\\).  Apply again:</p>
                        <p style="text-align:center;">
                            \\(\\displaystyle = \\lim_{x \\to 0}\\frac{\\cos x}{2} = \\frac{1}{2}.\\)
                        </p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3 — \\(\\infty/\\infty\\) form</div>
                    <div class="env-body">
                        <p>\\(\\displaystyle \\lim_{x \\to \\infty}\\frac{\\ln x}{x} = \\lim_{x \\to \\infty}\\frac{1/x}{1} = 0.\\)</p>
                        <p>Logarithms grow slower than any positive power of \\(x\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 4 — Other indeterminate forms</div>
                    <div class="env-body">
                        <p>The form \\(0 \\cdot \\infty\\): \\(\\displaystyle \\lim_{x \\to 0^+} x \\ln x\\).  Rewrite as \\(\\frac{\\ln x}{1/x}\\), which is \\(-\\infty/\\infty\\).  L'Hopital: \\(\\frac{1/x}{-1/x^2} = -x \\to 0\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'lhopital-demo',
                    title: "L'H\u00F4pital's Rule: Zooming into 0/0",
                    description: "See how f(x) and g(x) both approach 0, and why f'/g' gives the limiting ratio.",
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 80, originX: 350, originY: 280 });
                        var ctx = viz.ctx;
                        var exChoice = 0;

                        var examples = [
                            { label: 'sin(x)/x', f: Math.sin, g: function(x){ return x; }, fp: Math.cos, gp: function(){ return 1; }, a: 0, ans: '1' },
                            { label: '(e^x - 1)/x', f: function(x){ return Math.exp(x)-1; }, g: function(x){ return x; }, fp: function(x){ return Math.exp(x); }, gp: function(){ return 1; }, a: 0, ans: '1' },
                            { label: '(1-cos x)/x^2', f: function(x){ return 1-Math.cos(x); }, g: function(x){ return x*x; }, fp: function(x){ return Math.sin(x); }, gp: function(x){ return 2*x; }, a: 0, ans: '1/2' }
                        ];

                        VizEngine.createButton(controls, 'sin(x)/x', function() { exChoice = 0; });
                        VizEngine.createButton(controls, '(e^x-1)/x', function() { exChoice = 1; });
                        VizEngine.createButton(controls, '(1-cos x)/x\u00B2', function() { exChoice = 2; });

                        var hDrag = viz.addDraggable('h', 1.5, 0, viz.colors.orange, 8, function() {
                            hDrag.x = Math.max(-3, Math.min(3, hDrag.x));
                            if (Math.abs(hDrag.x) < 0.03) hDrag.x = 0.03;
                            hDrag.y = 0;
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var ex = examples[exChoice];
                            var xMin = -3.5, xMax = 3.5;

                            // Draw f in blue, g in green
                            viz.drawFunction(ex.f, xMin, xMax, viz.colors.blue, 2);
                            viz.drawFunction(ex.g, xMin, xMax, viz.colors.green, 2);

                            // Ratio curve f/g (careful near a)
                            viz.drawFunction(function(x) {
                                if (Math.abs(x - ex.a) < 0.001) return null;
                                return ex.f(x) / ex.g(x);
                            }, xMin, xMax, viz.colors.purple, 2, 400);

                            // Point at x = h
                            var x = hDrag.x;
                            var fv = ex.f(x);
                            var gv = ex.g(x);
                            var ratio = Math.abs(gv) > 1e-10 ? fv / gv : NaN;

                            viz.drawPoint(x, fv, viz.colors.blue, null, 5);
                            viz.drawPoint(x, gv, viz.colors.green, null, 5);
                            if (isFinite(ratio)) {
                                viz.drawPoint(x, ratio, viz.colors.purple, null, 5);
                            }

                            // Vertical line at x
                            viz.drawSegment(x, -5, x, 5, viz.colors.orange, 1, true);

                            viz.drawDraggables();

                            // Info
                            ctx.fillStyle = '#0c0c20dd';
                            ctx.fillRect(8, 8, 280, 140);
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left'; ctx.textBaseline = 'top';
                            ctx.fillText("L'H\u00F4pital: " + ex.label, 16, 14);

                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('f(x) = ' + fv.toFixed(5), 16, 38);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('g(x) = ' + gv.toFixed(5), 16, 56);
                            ctx.fillStyle = viz.colors.purple;
                            ctx.fillText('f(x)/g(x) = ' + (isFinite(ratio) ? ratio.toFixed(5) : 'undef'), 16, 74);

                            ctx.fillStyle = viz.colors.teal;
                            var fpv = ex.fp(x), gpv = ex.gp(x);
                            var dpRatio = Math.abs(gpv) > 1e-10 ? fpv / gpv : NaN;
                            ctx.fillText("f'(x)/g'(x) = " + (isFinite(dpRatio) ? dpRatio.toFixed(5) : 'undef'), 16, 96);

                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('Limit = ' + ex.ans, 16, 118);

                            // Legend
                            ctx.fillStyle = viz.colors.blue; ctx.fillText('-- f(x)', 16, 140);
                            ctx.fillStyle = viz.colors.green; ctx.fillText('-- g(x)', 100, 140);
                            ctx.fillStyle = viz.colors.purple; ctx.fillText('-- f/g', 180, 140);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: "Evaluate \\(\\displaystyle\\lim_{x \\to 0}\\frac{e^x - 1 - x}{x^2}\\) using L'H\u00F4pital's Rule.",
                    hint: 'The form is \\(0/0\\).  You may need to apply L\'H\u00F4pital twice.',
                    solution: 'First application: \\(\\frac{e^x - 1}{2x}\\), still \\(0/0\\).  Second: \\(\\frac{e^x}{2} \\to \\frac{1}{2}\\).'
                },
                {
                    question: "Compute \\(\\displaystyle\\lim_{x \\to 0^+} x^x\\).",
                    hint: 'Write \\(x^x = e^{x \\ln x}\\).  Find \\(\\lim_{x \\to 0^+} x \\ln x\\) first (rewrite as \\(\\ln x / (1/x)\\)).',
                    solution: '\\(\\lim x \\ln x = \\lim \\frac{\\ln x}{1/x}\\) is \\(-\\infty/\\infty\\).  L\'H\u00F4pital: \\(\\frac{1/x}{-1/x^2} = -x \\to 0\\).  So \\(x^x = e^{x\\ln x} \\to e^0 = 1\\).'
                },
                {
                    question: "Evaluate \\(\\displaystyle\\lim_{x \\to \\infty}\\frac{x^3}{e^x}\\).",
                    hint: 'This is \\(\\infty/\\infty\\).  Apply L\'H\u00F4pital three times.',
                    solution: '\\(\\frac{x^3}{e^x} \\to \\frac{3x^2}{e^x} \\to \\frac{6x}{e^x} \\to \\frac{6}{e^x} \\to 0\\).  Exponentials dominate polynomials.'
                },
                {
                    question: "Compute \\(\\displaystyle\\lim_{x \\to 0}\\left(\\frac{1}{\\sin x} - \\frac{1}{x}\\right)\\).",
                    hint: 'Combine into a single fraction: \\(\\frac{x - \\sin x}{x \\sin x}\\).  This is \\(0/0\\).',
                    solution: '\\(\\frac{x - \\sin x}{x\\sin x}\\).  L\'H\u00F4pital: \\(\\frac{1 - \\cos x}{\\sin x + x\\cos x}\\), still \\(0/0\\).  Again: \\(\\frac{\\sin x}{2\\cos x - x\\sin x} \\to \\frac{0}{2} = 0\\).'
                },
                {
                    question: "Give an example where the limit of \\(f(x)/g(x)\\) exists but \\(\\lim f'(x)/g'(x)\\) does not, showing that the converse of L'H\u00F4pital's Rule fails.",
                    hint: 'Consider \\(f(x) = x + \\sin x\\) and \\(g(x) = x\\) as \\(x \\to \\infty\\).',
                    solution: '\\(\\frac{x + \\sin x}{x} = 1 + \\frac{\\sin x}{x} \\to 1\\).  But \\(\\frac{f\'(x)}{g\'(x)} = 1 + \\cos x\\), which oscillates between \\(0\\) and \\(2\\) and has no limit.  L\'H\u00F4pital is inconclusive here, yet the original limit is \\(1\\).'
                }
            ]
        },

        // ============================================================
        //  SECTION 5 — Taylor's Theorem
        // ============================================================
        {
            id: 'ch07-sec05',
            title: "Taylor's Theorem",
            content: `
                <h2>Taylor's Theorem</h2>

                <p>The derivative gives a <em>first-order</em> (linear) approximation of a function near a point.  What if we want a <em>quadratic</em> approximation?  Or cubic?  <strong>Taylor's Theorem</strong> extends the microscope idea: instead of matching just the slope at a point, we match the slope <em>and</em> curvature <em>and</em> higher-order behavior, building ever-better polynomial approximations.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.10 — Taylor Polynomial</div>
                    <div class="env-body">
                        <p>Suppose \\(f\\) is \\(n\\) times differentiable at \\(a\\).  The <strong>\\(n\\)th-degree Taylor polynomial of \\(f\\) centered at \\(a\\)</strong> is</p>
                        <p style="text-align:center;">
                            \\(\\displaystyle P_n(x) = \\sum_{k=0}^{n}\\frac{f^{(k)}(a)}{k!}(x-a)^k.\\)
                        </p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.11 — Taylor's Theorem with Lagrange Remainder</div>
                    <div class="env-body">
                        <p>Let \\(f\\) be \\((n+1)\\) times differentiable on an open interval containing \\(a\\).  Then for each \\(x\\) in that interval, there exists \\(c\\) between \\(a\\) and \\(x\\) such that</p>
                        <p style="text-align:center;">
                            \\(\\displaystyle f(x) = P_n(x) + \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}.\\)
                        </p>
                        <p>The last term is the <strong>Lagrange remainder</strong> \\(R_n(x)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Idea</div>
                    <div class="env-body">
                        <p>The case \\(n=0\\) is exactly the Mean Value Theorem: \\(f(x) = f(a) + f'(c)(x-a)\\).  The general case follows by applying the MVT to the remainder \\(f(x) - P_n(x)\\) via an auxiliary function designed so that Rolle's Theorem applies \\((n+1)\\) times. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Increasing Resolution</div>
                    <div class="env-body">
                        <p>Think of each Taylor degree as turning up the resolution of your microscope:</p>
                        <ul>
                            <li><strong>Degree 0:</strong> A horizontal line (matches the value).</li>
                            <li><strong>Degree 1:</strong> A tangent line (matches value + slope).</li>
                            <li><strong>Degree 2:</strong> A parabola (matches value + slope + curvature).</li>
                            <li><strong>Degree \\(n\\):</strong> Matches \\(n+1\\) pieces of information about \\(f\\).</li>
                        </ul>
                        <p>The higher the degree, the longer the polynomial "hugs" the curve before peeling away.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="taylor-approx"></div>

                <div class="env-block example">
                    <div class="env-title">Example — Taylor Series of \\(e^x\\) at \\(a=0\\)</div>
                    <div class="env-body">
                        <p>Since \\(f^{(k)}(0) = 1\\) for all \\(k\\),</p>
                        <p style="text-align:center;">
                            \\(\\displaystyle e^x = \\sum_{k=0}^{\\infty}\\frac{x^k}{k!} = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots\\)
                        </p>
                        <p>The remainder: \\(|R_n(x)| = \\frac{e^c}{(n+1)!}|x|^{n+1} \\le \\frac{e^{|x|}}{(n+1)!}|x|^{n+1} \\to 0\\) as \\(n\\to\\infty\\), so the series converges to \\(e^x\\) for all \\(x\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="taylor-error"></div>

                <div class="env-block example">
                    <div class="env-title">Example — \\(\\sin x\\) Taylor Polynomial</div>
                    <div class="env-body">
                        <p>\\(\\displaystyle \\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots\\)</p>
                        <p>Only odd powers appear (since \\(\\sin\\) is an odd function).  Just the first term \\(x\\) is already a decent approximation near \\(0\\) — this is why engineers sometimes say \\(\\sin\\theta \\approx \\theta\\) for small angles.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Taylor vs. Maclaurin</div>
                    <div class="env-body">
                        <p>A Taylor polynomial centered at \\(a = 0\\) is sometimes called a <strong>Maclaurin polynomial</strong>.  The distinction is purely terminological.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 7.12 — Uniqueness of Taylor Coefficients</div>
                    <div class="env-body">
                        <p>If \\(f(x) = \\sum_{k=0}^{n} c_k(x-a)^k + o((x-a)^n)\\), then \\(c_k = \\frac{f^{(k)}(a)}{k!}\\).  In other words, the Taylor coefficients are the <em>only</em> coefficients that match \\(f\\) to order \\(n\\) at \\(a\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'taylor-approx',
                    title: 'Taylor Polynomial Approximation',
                    description: 'Choose a function and increase the Taylor degree to see the polynomial hug the curve more and more closely.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 50, originX: 300, originY: 250 });
                        var ctx = viz.ctx;
                        var degree = 1;
                        var funcChoice = 0;
                        var centerA = 0;

                        var funcs = [
                            {
                                label: 'e^x',
                                f: Math.exp,
                                derivs: function(a, n) {
                                    // all derivatives of e^x at a are e^a
                                    var d = []; var ea = Math.exp(a);
                                    for (var i = 0; i <= n; i++) d.push(ea);
                                    return d;
                                }
                            },
                            {
                                label: 'sin(x)',
                                f: Math.sin,
                                derivs: function(a, n) {
                                    var d = [];
                                    var cycle = [Math.sin, Math.cos, function(x){return -Math.sin(x);}, function(x){return -Math.cos(x);}];
                                    for (var i = 0; i <= n; i++) d.push(cycle[i % 4](a));
                                    return d;
                                }
                            },
                            {
                                label: 'cos(x)',
                                f: Math.cos,
                                derivs: function(a, n) {
                                    var d = [];
                                    var cycle = [Math.cos, function(x){return -Math.sin(x);}, function(x){return -Math.cos(x);}, Math.sin];
                                    for (var i = 0; i <= n; i++) d.push(cycle[i % 4](a));
                                    return d;
                                }
                            },
                            {
                                label: 'ln(1+x)',
                                f: function(x) { return Math.log(1 + x); },
                                derivs: function(a, n) {
                                    // f^(k)(a) = (-1)^(k-1) (k-1)! / (1+a)^k  for k >= 1
                                    var d = [Math.log(1 + a)];
                                    for (var k = 1; k <= n; k++) {
                                        var fact = 1;
                                        for (var j = 1; j < k; j++) fact *= j;
                                        d.push(Math.pow(-1, k - 1) * fact / Math.pow(1 + a, k));
                                    }
                                    return d;
                                }
                            }
                        ];

                        VizEngine.createButton(controls, 'e^x', function() { funcChoice = 0; });
                        VizEngine.createButton(controls, 'sin(x)', function() { funcChoice = 1; });
                        VizEngine.createButton(controls, 'cos(x)', function() { funcChoice = 2; });
                        VizEngine.createButton(controls, 'ln(1+x)', function() { funcChoice = 3; });

                        VizEngine.createSlider(controls, 'Degree', 0, 15, 1, 1, function(v) { degree = Math.round(v); });
                        VizEngine.createSlider(controls, 'Center a', -2, 3, 0, 0.1, function(v) { centerA = v; });

                        function taylorPoly(derivsArr, a, x) {
                            var sum = 0;
                            var fact = 1;
                            var xma = 1; // (x-a)^k
                            for (var k = 0; k < derivsArr.length; k++) {
                                if (k > 0) { fact *= k; xma *= (x - a); }
                                sum += derivsArr[k] / fact * xma;
                            }
                            return sum;
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var fc = funcs[funcChoice];
                            var xMin = -5, xMax = 7;
                            var derivsArr = fc.derivs(centerA, degree);

                            // Draw the true function
                            viz.drawFunction(fc.f, xMin, xMax, viz.colors.blue, 2.5);

                            // Draw the Taylor polynomial
                            var tPoly = function(x) { return taylorPoly(derivsArr, centerA, x); };
                            viz.drawFunction(tPoly, xMin, xMax, viz.colors.orange, 2);

                            // Mark center
                            viz.drawPoint(centerA, fc.f(centerA), viz.colors.green, 'a=' + centerA.toFixed(1), 6);

                            // Info
                            ctx.fillStyle = '#0c0c20dd';
                            ctx.fillRect(8, 8, 260, 75);
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left'; ctx.textBaseline = 'top';
                            ctx.fillText('f(x) = ' + fc.label, 16, 14);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('Taylor degree: ' + degree, 16, 36);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('Center: a = ' + centerA.toFixed(1), 16, 56);

                            // Legend
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('-- f(x)', 500, 14);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('-- P_' + degree + '(x)', 500, 32);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'taylor-error',
                    title: 'Taylor Remainder Visualization',
                    description: 'See how the approximation error shrinks as the degree increases.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var xEval = 1;

                        VizEngine.createSlider(controls, 'x', 0.1, 3, 1, 0.05, function(v) { xEval = v; });

                        // Use e^x centered at 0
                        function taylorExp(x, n) {
                            var sum = 0, term = 1;
                            for (var k = 0; k <= n; k++) {
                                sum += term;
                                term *= x / (k + 1);
                            }
                            return sum;
                        }

                        function draw() {
                            viz.clear();

                            var exact = Math.exp(xEval);
                            var maxDeg = 15;
                            var errors = [];
                            for (var n = 0; n <= maxDeg; n++) {
                                errors.push(Math.abs(exact - taylorExp(xEval, n)));
                            }

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('Taylor Error: |e^x - P_n(x)| at x = ' + xEval.toFixed(2), 350, 12);

                            // Bar chart
                            var barLeft = 60, barBottom = 340, barTop = 50;
                            var barW = 36, gap = 4;
                            var maxErr = Math.max.apply(null, errors);
                            if (maxErr < 1e-15) maxErr = 1;

                            // y-axis
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(barLeft, barTop); ctx.lineTo(barLeft, barBottom); ctx.stroke();

                            for (var i = 0; i <= maxDeg; i++) {
                                var bx = barLeft + 10 + i * (barW + gap);
                                var logErr = errors[i] > 0 ? Math.log10(errors[i]) : -16;
                                var logMax = Math.log10(maxErr);
                                var logMin = logMax - 16;
                                var barH = Math.max(2, ((logErr - logMin) / (logMax - logMin)) * (barBottom - barTop));
                                var by = barBottom - barH;

                                // Color gradient
                                var t = i / maxDeg;
                                var col = t < 0.5 ? viz.colors.orange : viz.colors.teal;

                                ctx.fillStyle = col + '88';
                                ctx.fillRect(bx, by, barW, barH);
                                ctx.strokeStyle = col;
                                ctx.lineWidth = 1.5;
                                ctx.strokeRect(bx, by, barW, barH);

                                // Degree label
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                ctx.fillText('n=' + i, bx + barW / 2, barBottom + 4);

                                // Error value
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = '9px -apple-system,sans-serif';
                                ctx.textBaseline = 'bottom';
                                var errStr = errors[i] < 1e-14 ? '~0' : errors[i].toExponential(1);
                                ctx.save();
                                ctx.translate(bx + barW / 2, by - 3);
                                ctx.rotate(-Math.PI / 4);
                                ctx.fillText(errStr, 0, 0);
                                ctx.restore();
                            }

                            // Exact value
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText('e^' + xEval.toFixed(2) + ' = ' + exact.toFixed(8), 350, barBottom + 20);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Write the 3rd-degree Taylor polynomial of \\(f(x) = \\cos x\\) centered at \\(a = 0\\).',
                    hint: '\\(f(0)=1\\), \\(f\'(0)=0\\), \\(f\'\'(0)=-1\\), \\(f\'\'\'(0)=0\\).',
                    solution: '\\(P_3(x) = 1 - \\frac{x^2}{2}\\).  (The degree-3 term vanishes because \\(f\'\'\'(0) = 0\\).)'
                },
                {
                    question: "Use Taylor's Theorem with Lagrange remainder to show that \\(e^x \\ge 1 + x\\) for all \\(x\\).",
                    hint: 'The degree-1 Taylor polynomial of \\(e^x\\) at \\(0\\) is \\(1 + x\\).  The remainder is \\(\\frac{e^c}{2}x^2 \\ge 0\\).',
                    solution: 'By Taylor: \\(e^x = 1 + x + \\frac{e^c}{2}x^2\\) for some \\(c\\) between \\(0\\) and \\(x\\).  Since \\(e^c > 0\\) and \\(x^2 \\ge 0\\), the remainder is non-negative, so \\(e^x \\ge 1 + x\\).'
                },
                {
                    question: 'Estimate \\(\\sin(0.1)\\) using the 5th-degree Taylor polynomial and bound the error using the Lagrange remainder.',
                    hint: '\\(P_5(x) = x - \\frac{x^3}{6} + \\frac{x^5}{120}\\).  The 6th derivative of \\(\\sin\\) is \\(-\\sin\\), and \\(|{-}\\sin c| \\le 1\\).',
                    solution: '\\(P_5(0.1) = 0.1 - \\frac{0.001}{6} + \\frac{0.00001}{120} = 0.0998334...\\)  Error: \\(|R_5| \\le \\frac{(0.1)^6}{720} \\approx 1.39 \\times 10^{-9}\\).  Extremely accurate!'
                },
                {
                    question: 'Find the Taylor polynomial of degree 4 for \\(f(x) = \\frac{1}{1-x}\\) centered at \\(a = 0\\).  For which \\(x\\) does the full Taylor series converge?',
                    hint: '\\(f^{(k)}(0) = k!\\).  The series is geometric.',
                    solution: '\\(P_4(x) = 1 + x + x^2 + x^3 + x^4\\).  The full series is \\(\\sum_{k=0}^\\infty x^k\\), which converges for \\(|x| < 1\\) (geometric series).'
                },
                {
                    question: 'Use the Taylor polynomial of \\(\\ln(1+x)\\) to prove that \\(\\ln(1+x) \\le x\\) for \\(x > -1\\).',
                    hint: '\\(\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots\\) (alternating).  For the inequality, use the degree-1 Taylor with remainder.',
                    solution: 'By Taylor: \\(\\ln(1+x) = x - \\frac{1}{2(1+c)^2}x^2\\) for some \\(c\\) between \\(0\\) and \\(x\\).  Since \\(\\frac{1}{(1+c)^2} > 0\\) and \\(x^2 \\ge 0\\), the remainder is non-positive, giving \\(\\ln(1+x) \\le x\\).'
                },
                {
                    question: 'The Taylor polynomial \\(P_n(x)\\) of \\(f\\) at \\(a\\) is the unique polynomial of degree \\(\\le n\\) satisfying \\(P_n^{(k)}(a) = f^{(k)}(a)\\) for \\(k = 0, 1, \\ldots, n\\).  Verify this uniqueness by showing that if two degree-\\(n\\) polynomials agree on all derivatives up to order \\(n\\) at \\(a\\), they must be identical.',
                    hint: 'Their difference is a polynomial of degree \\(\\le n\\) with a zero of order \\(n+1\\) at \\(a\\).',
                    solution: 'If \\(P\\) and \\(Q\\) both satisfy the conditions, then \\(R = P - Q\\) is a polynomial of degree \\(\\le n\\) with \\(R^{(k)}(a) = 0\\) for \\(k = 0, \\ldots, n\\).  This means \\((x-a)^{n+1}\\) divides \\(R(x)\\).  But \\(\\deg R \\le n < n+1\\), so \\(R \\equiv 0\\).'
                }
            ]
        }
    ]
});
