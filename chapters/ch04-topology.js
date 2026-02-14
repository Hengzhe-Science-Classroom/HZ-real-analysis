window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch04',
    number: 4,
    title: 'Topology of the Real Line',
    subtitle: 'Open and closed sets, compactness, connectedness, and the Cantor set — the geometric structure underlying analysis.',
    sections: [

        // ============================================================
        // SECTION 1 — Open & Closed Sets: Prairies and Walled Gardens
        // ============================================================
        {
            id: 'ch04-sec01',
            title: 'Open and Closed Sets',
            content: `
                <h2>Open and Closed Sets</h2>

                <p>Imagine you are a mapmaker charting the real line \\(\\mathbb{R}\\).
                Every region you draw is a <strong>subset</strong> of \\(\\mathbb{R}\\),
                but not all regions are alike. Some have solid boundary walls;
                others fade into the horizon without a fence in sight.</p>

                <h3>Open Sets: The Boundless Prairie</h3>

                <p>An <strong>open set</strong> is a region where every resident has
                <em>breathing room</em>: no matter which point \\(x\\) you visit, you
                can find a small interval \\((x - \\varepsilon,\\, x + \\varepsilon)\\)
                that lies entirely inside the set.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.1 (Open Set)</div>
                    <div class="env-body">
                        <p>A set \\(U \\subseteq \\mathbb{R}\\) is <strong>open</strong> if for every \\(x \\in U\\), there exists \\(\\varepsilon > 0\\) such that \\((x - \\varepsilon,\\, x + \\varepsilon) \\subseteq U\\).</p>
                    </div>
                </div>

                <p>The prototypical open set is an <strong>open interval</strong> \\((a, b)\\).
                If you stand at any point inside, you can always find wiggle room
                before hitting the boundary — because the boundary points \\(a\\)
                and \\(b\\) are <em>not</em> in the set.</p>

                <div class="viz-placeholder" data-viz="open-set-breathing-room"></div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Think of an open set as a prairie with no fence posts. No matter where
                        you stand, you can take at least a tiny step in every direction and still
                        remain on the prairie. There is never a point where you are pressed against
                        the edge with no room to move.</p>
                    </div>
                </div>

                <h3>Closed Sets: The Walled Garden</h3>

                <p>A <strong>closed set</strong> is the opposite in spirit: it captures
                every point that it "almost" contains.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.2 (Closed Set)</div>
                    <div class="env-body">
                        <p>A set \\(F \\subseteq \\mathbb{R}\\) is <strong>closed</strong> if its
                        complement \\(\\mathbb{R} \\setminus F\\) is open. Equivalently, \\(F\\)
                        contains all its <strong>limit points</strong>: if \\((x_n)\\) is a
                        convergent sequence with every \\(x_n \\in F\\), then
                        \\(\\lim x_n \\in F\\).</p>
                    </div>
                </div>

                <p>The <strong>closed interval</strong> \\([a, b]\\) is the classic example:
                the walls at \\(a\\) and \\(b\\) are included, so sequences sneaking
                toward the boundary still land inside.</p>

                <div class="env-block warning">
                    <div class="env-title">Warning: "Open" and "Closed" are NOT Opposites</div>
                    <div class="env-body">
                        <p>A set can be <strong>both open and closed</strong> (\\(\\mathbb{R}\\)
                        and \\(\\emptyset\\)), or <strong>neither</strong> (the half-open
                        interval \\([0, 1)\\)). "Not open" does not imply "closed"!</p>
                    </div>
                </div>

                <h3>The Algebra of Open and Closed Sets</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.1 (Structural Properties)</div>
                    <div class="env-body">
                        <ol>
                            <li>The union of <em>any</em> collection of open sets is open.</li>
                            <li>The intersection of <em>finitely many</em> open sets is open.</li>
                            <li>The intersection of <em>any</em> collection of closed sets is closed.</li>
                            <li>The union of <em>finitely many</em> closed sets is closed.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch (1)</div>
                    <div class="env-body">
                        <p>Let \\(\\{U_\\alpha\\}\\) be open sets and \\(x \\in \\bigcup U_\\alpha\\).
                        Then \\(x \\in U_\\beta\\) for some \\(\\beta\\), so an
                        \\(\\varepsilon\\)-ball around \\(x\\) fits inside \\(U_\\beta\\), hence
                        inside the union. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Why finiteness matters for intersections</div>
                    <div class="env-body">
                        <p>The intersection of <em>infinitely many</em> open sets need not be open.
                        Consider \\(\\bigcap_{n=1}^{\\infty}\\bigl(-\\tfrac{1}{n},\\,\\tfrac{1}{n}\\bigr) = \\{0\\}\\),
                        which is a single point — definitely not open in \\(\\mathbb{R}\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="open-closed-gallery"></div>
            `,
            visualizations: [
                {
                    id: 'open-set-breathing-room',
                    title: 'Breathing Room in an Open Set',
                    description: 'Drag a point inside an open interval. The green zone shows the largest epsilon-ball that stays inside.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 220, scale: 60, originX: 100, originY: 130 });
                        var a = 1, b = 8;
                        var pt = viz.addDraggable('pt', 4.5, 0, viz.colors.orange, 10, function() {
                            pt.x = Math.max(a + 0.01, Math.min(b - 0.01, pt.x));
                            pt.y = 0;
                        });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // number line
                            var sL = viz.toScreen(a - 0.5, 0);
                            var sR = viz.toScreen(b + 0.5, 0);
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(sL[0], sL[1]); ctx.lineTo(sR[0], sR[1]); ctx.stroke();

                            // open interval bar
                            viz.drawOpenInterval(a, b, 0, viz.colors.blue, 4);

                            // labels
                            var pa = viz.toScreen(a, 0);
                            var pb = viz.toScreen(b, 0);
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('a = ' + a, pa[0], pa[1] + 14);
                            ctx.fillText('b = ' + b, pb[0], pb[1] + 14);

                            // epsilon = min distance to boundary
                            var eps = Math.min(pt.x - a, b - pt.x);
                            var epsL = pt.x - eps;
                            var epsR = pt.x + eps;

                            // shade epsilon ball
                            var seL = viz.toScreen(epsL, 0);
                            var seR = viz.toScreen(epsR, 0);
                            ctx.fillStyle = viz.colors.green + '33';
                            ctx.fillRect(seL[0], sL[1] - 30, seR[0] - seL[0], 60);

                            // epsilon markers
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath(); ctx.moveTo(seL[0], sL[1] - 30); ctx.lineTo(seL[0], sL[1] + 30); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(seR[0], sL[1] - 30); ctx.lineTo(seR[0], sL[1] + 30); ctx.stroke();
                            ctx.setLineDash([]);

                            // epsilon annotation
                            var sp = viz.toScreen(pt.x, 0);
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('\u03B5 = ' + eps.toFixed(2), sp[0], sL[1] - 34);

                            // title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Open interval (1, 8) \u2014 drag the orange point', viz.width / 2, 18);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'open-closed-gallery',
                    title: 'Gallery: Open, Closed, Neither, Both',
                    description: 'See several subsets of R classified as open, closed, both, or neither.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 340, scale: 40, originX: 120, originY: 30 });
                        var ctx = viz.ctx;

                        function draw() {
                            viz.clear();

                            var examples = [
                                { label: '(0, 3)  \u2014  open', a: 0, b: 3, type: 'open', color: viz.colors.blue },
                                { label: '[1, 4]  \u2014  closed', a: 1, b: 4, type: 'closed', color: viz.colors.orange },
                                { label: '[0, 2)  \u2014  neither', a: 0, b: 2, type: 'half-closed-left', color: viz.colors.purple },
                                { label: '\u211D  \u2014  both open & closed', a: -1.5, b: 5.5, type: 'both', color: viz.colors.teal },
                                { label: '{1, 2, 3}  \u2014  closed (finite set)', a: -1, b: 5, type: 'discrete', color: viz.colors.pink }
                            ];

                            for (var i = 0; i < examples.length; i++) {
                                var ex = examples[i];
                                var y = 0 - i * 1.5;

                                // number line
                                var sL = viz.toScreen(-1.5, y);
                                var sR = viz.toScreen(5.5, y);
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.lineWidth = 1;
                                ctx.beginPath(); ctx.moveTo(sL[0], sL[1]); ctx.lineTo(sR[0], sR[1]); ctx.stroke();

                                // label
                                ctx.fillStyle = ex.color;
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.textAlign = 'right';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(ex.label, sL[0] - 8, sL[1]);

                                if (ex.type === 'open') {
                                    viz.drawOpenInterval(ex.a, ex.b, y, ex.color, 4);
                                } else if (ex.type === 'closed') {
                                    viz.drawClosedInterval(ex.a, ex.b, y, ex.color, 4);
                                } else if (ex.type === 'half-closed-left') {
                                    // left closed, right open
                                    var s1 = viz.toScreen(ex.a, y);
                                    var s2 = viz.toScreen(ex.b, y);
                                    ctx.strokeStyle = ex.color;
                                    ctx.lineWidth = 4;
                                    ctx.beginPath(); ctx.moveTo(s1[0], s1[1]); ctx.lineTo(s2[0], s2[1]); ctx.stroke();
                                    ctx.fillStyle = ex.color;
                                    ctx.beginPath(); ctx.arc(s1[0], s1[1], 5, 0, Math.PI * 2); ctx.fill();
                                    ctx.beginPath(); ctx.arc(s2[0], s2[1], 5, 0, Math.PI * 2);
                                    ctx.strokeStyle = ex.color; ctx.lineWidth = 2; ctx.stroke();
                                } else if (ex.type === 'both') {
                                    // draw arrows to show extends to infinity
                                    ctx.strokeStyle = ex.color;
                                    ctx.lineWidth = 4;
                                    ctx.beginPath(); ctx.moveTo(sL[0], sL[1]); ctx.lineTo(sR[0], sR[1]); ctx.stroke();
                                    // arrows
                                    ctx.fillStyle = ex.color;
                                    ctx.beginPath(); ctx.moveTo(sL[0] - 6, sL[1]); ctx.lineTo(sL[0] + 4, sL[1] - 5); ctx.lineTo(sL[0] + 4, sL[1] + 5); ctx.closePath(); ctx.fill();
                                    ctx.beginPath(); ctx.moveTo(sR[0] + 6, sR[1]); ctx.lineTo(sR[0] - 4, sR[1] - 5); ctx.lineTo(sR[0] - 4, sR[1] + 5); ctx.closePath(); ctx.fill();
                                } else if (ex.type === 'discrete') {
                                    // isolated points
                                    for (var p = 1; p <= 3; p++) {
                                        var sp = viz.toScreen(p, y);
                                        ctx.fillStyle = ex.color;
                                        ctx.beginPath(); ctx.arc(sp[0], sp[1], 5, 0, Math.PI * 2); ctx.fill();
                                    }
                                }
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that every open interval \\((a,b)\\) is an open set by explicitly finding \\(\\varepsilon\\) in terms of \\(x\\), \\(a\\), and \\(b\\).',
                    hint: 'For any \\(x \\in (a,b)\\), try \\(\\varepsilon = \\min(x - a,\\, b - x)\\).',
                    solution: 'Take \\(\\varepsilon = \\min(x - a,\\, b - x) > 0\\). Then for any \\(y\\) with \\(|y - x| < \\varepsilon\\), we have \\(y > x - \\varepsilon \\ge x - (x - a) = a\\) and \\(y < x + \\varepsilon \\le x + (b - x) = b\\), so \\(y \\in (a, b)\\). Hence \\((x - \\varepsilon,\\, x + \\varepsilon) \\subseteq (a, b)\\).'
                },
                {
                    question: 'Show that the singleton \\(\\{0\\}\\) is closed but not open in \\(\\mathbb{R}\\).',
                    hint: 'Check the complement \\(\\mathbb{R} \\setminus \\{0\\} = (-\\infty, 0) \\cup (0, \\infty)\\).',
                    solution: 'The complement is \\((-\\infty, 0) \\cup (0, \\infty)\\), a union of two open intervals, hence open. So \\(\\{0\\}\\) is closed. It is not open because no \\(\\varepsilon\\)-ball around \\(0\\) fits inside \\(\\{0\\}\\).'
                },
                {
                    question: 'Prove that a finite intersection of open sets is open. Where does the proof fail for infinitely many?',
                    hint: 'For \\(U_1 \\cap \\cdots \\cap U_n\\), take \\(\\varepsilon = \\min(\\varepsilon_1, \\ldots, \\varepsilon_n)\\).',
                    solution: 'If \\(x \\in U_1 \\cap \\cdots \\cap U_n\\), choose \\(\\varepsilon_k > 0\\) for each \\(U_k\\). Set \\(\\varepsilon = \\min(\\varepsilon_1, \\ldots, \\varepsilon_n) > 0\\) (a finite minimum of positive numbers is positive). For infinitely many sets, the infimum of the \\(\\varepsilon_k\\) may be \\(0\\), so we cannot guarantee \\(\\varepsilon > 0\\).'
                },
                {
                    question: 'Classify each set as open, closed, both, or neither: (a) \\(\\mathbb{Z}\\), (b) \\((0,1) \\cup (2,3)\\), (c) \\([0,1) \\cup \\{2\\}\\), (d) \\(\\emptyset\\).',
                    hint: 'Check the complement of each, or use definitions directly.',
                    solution: '(a) \\(\\mathbb{Z}\\) is closed (complement is a union of open intervals) but not open (no \\(\\varepsilon\\)-ball around an integer avoids non-integers). (b) Open (union of open sets). (c) Neither (complement \\((-\\infty,0) \\cup [1,2) \\cup (2,\\infty)\\) is not open because of \\([1,2)\\)). (d) Both open and closed (vacuously satisfies both definitions).'
                },
                {
                    question: 'Give an example of an infinite collection of closed sets whose union is not closed.',
                    hint: 'Consider \\(F_n = [1/n, 1]\\).',
                    solution: '\\(\\bigcup_{n=1}^{\\infty}[1/n, 1] = (0, 1]\\), which is not closed because \\(0\\) is a limit point not in the union. Each \\([1/n, 1]\\) is closed, but the infinite union loses closure.'
                }
            ]
        },

        // ============================================================
        // SECTION 2 — Interior, Closure, and Boundary: Anatomy of a Set
        // ============================================================
        {
            id: 'ch04-sec02',
            title: 'Interior, Closure, and Boundary',
            content: `
                <h2>Interior, Closure, and Boundary</h2>

                <p>Given any set \\(A \\subseteq \\mathbb{R}\\), we can dissect it into
                three anatomical regions: the soft interior, the fortified closure,
                and the razor-thin boundary separating a set from its complement.</p>

                <h3>Interior: The Open Core</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.3 (Interior)</div>
                    <div class="env-body">
                        <p>The <strong>interior</strong> of \\(A\\), written \\(\\operatorname{int}(A)\\) or \\(A^\\circ\\), is the set of all points \\(x \\in A\\) for which some \\(\\varepsilon\\)-ball \\((x-\\varepsilon, x+\\varepsilon) \\subseteq A\\). Equivalently, \\(A^\\circ\\) is the largest open set contained in \\(A\\).</p>
                    </div>
                </div>

                <h3>Closure: Sealing Every Crack</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.4 (Closure)</div>
                    <div class="env-body">
                        <p>The <strong>closure</strong> of \\(A\\), written \\(\\overline{A}\\), is
                        \\(A\\) together with all its <strong>limit points</strong>.
                        Equivalently, \\(\\overline{A}\\) is the smallest closed set containing \\(A\\).</p>
                        <p>A point \\(x\\) is a limit point of \\(A\\) if every \\(\\varepsilon\\)-ball
                        around \\(x\\) contains a point of \\(A\\) different from \\(x\\) itself.</p>
                    </div>
                </div>

                <h3>Boundary: The Border Zone</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.5 (Boundary)</div>
                    <div class="env-body">
                        <p>The <strong>boundary</strong> of \\(A\\), denoted \\(\\partial A\\), is
                        \\(\\partial A = \\overline{A} \\setminus A^\\circ\\).
                        A point \\(x \\in \\partial A\\) has the property that every \\(\\varepsilon\\)-ball
                        around \\(x\\) meets both \\(A\\) and \\(\\mathbb{R} \\setminus A\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="interior-closure-boundary"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.2 (Decomposition)</div>
                    <div class="env-body">
                        <p>For any \\(A \\subseteq \\mathbb{R}\\):</p>
                        <ol>
                            <li>\\(A^\\circ \\subseteq A \\subseteq \\overline{A}\\).</li>
                            <li>\\(A\\) is open \\(\\iff\\) \\(A = A^\\circ\\).</li>
                            <li>\\(A\\) is closed \\(\\iff\\) \\(A = \\overline{A}\\).</li>
                            <li>\\(\\partial A = \\overline{A} \\cap \\overline{\\mathbb{R}\\setminus A}\\).</li>
                            <li>\\(\\overline{A} = A^\\circ \\sqcup \\partial A\\) (disjoint union).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example</div>
                    <div class="env-body">
                        <p>Let \\(A = [0, 1) \\cup \\{2\\}\\). Then:</p>
                        <ul>
                            <li>\\(A^\\circ = (0, 1)\\) — the point \\(0\\) has no open ball fitting inside, and \\(2\\) is isolated.</li>
                            <li>\\(\\overline{A} = [0, 1] \\cup \\{2\\}\\) — the point \\(1\\) is a limit point of \\([0,1)\\).</li>
                            <li>\\(\\partial A = \\{0, 1, 2\\}\\).</li>
                        </ul>
                    </div>
                </div>

                <h3>Dense Sets</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.6 (Dense Set)</div>
                    <div class="env-body">
                        <p>A set \\(A\\) is <strong>dense</strong> in \\(\\mathbb{R}\\) if \\(\\overline{A} = \\mathbb{R}\\).
                        Equivalently, every nonempty open interval contains a point of \\(A\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Key Example</div>
                    <div class="env-body">
                        <p>\\(\\mathbb{Q}\\) is dense in \\(\\mathbb{R}\\):
                        between any two real numbers there is a rational.
                        And \\(\\mathbb{R} \\setminus \\mathbb{Q}\\) (the irrationals) is <em>also</em> dense!
                        So both sets weave through each other with no gaps.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="dense-rationals-viz"></div>
            `,
            visualizations: [
                {
                    id: 'interior-closure-boundary',
                    title: 'Anatomy of a Set',
                    description: 'Explore interior, closure, and boundary for the set [0,1) \u222a {2}. Drag epsilon to see how boundary points behave.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 280, scale: 80, originX: 120, originY: 140 });
                        var epsVal = 0.3;

                        VizEngine.createSlider(controls, '\u03B5', 0.05, 1.0, 0.3, 0.01, function(v) {
                            epsVal = v;
                        });

                        var bdryPt = viz.addDraggable('bp', 0, 0, viz.colors.orange, 9, function() {
                            // snap to one of the boundary points {0, 1, 2}
                            var candidates = [0, 1, 2];
                            var best = 0;
                            var bestDist = 999;
                            for (var i = 0; i < candidates.length; i++) {
                                var d = Math.abs(bdryPt.x - candidates[i]);
                                if (d < bestDist) { bestDist = d; best = candidates[i]; }
                            }
                            bdryPt.x = best;
                            bdryPt.y = 0;
                        });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('A = [0, 1) \u222a {2}', viz.width / 2, 18);

                            // number line
                            var nL = viz.toScreen(-0.8, 0);
                            var nR = viz.toScreen(3.0, 0);
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(nL[0], nL[1]); ctx.lineTo(nR[0], nR[1]); ctx.stroke();

                            // tick marks
                            for (var t = -0.5; t <= 2.5; t += 0.5) {
                                var tp = viz.toScreen(t, 0);
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.lineWidth = 1;
                                ctx.beginPath(); ctx.moveTo(tp[0], tp[1] - 5); ctx.lineTo(tp[0], tp[1] + 5); ctx.stroke();
                                if (t === Math.round(t)) {
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '11px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'top';
                                    ctx.fillText(t, tp[0], tp[1] + 8);
                                }
                            }

                            var yRow = 0;
                            // Draw the set A: [0,1) solid left, open right, plus {2}
                            var s0 = viz.toScreen(0, yRow);
                            var s1 = viz.toScreen(1, yRow);
                            var s2 = viz.toScreen(2, yRow);
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 5;
                            ctx.beginPath(); ctx.moveTo(s0[0], s0[1]); ctx.lineTo(s1[0], s1[1]); ctx.stroke();
                            // closed at 0
                            ctx.fillStyle = viz.colors.blue;
                            ctx.beginPath(); ctx.arc(s0[0], s0[1], 5, 0, Math.PI * 2); ctx.fill();
                            // open at 1
                            ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.arc(s1[0], s1[1], 5, 0, Math.PI * 2); ctx.stroke();
                            // isolated point at 2
                            ctx.fillStyle = viz.colors.blue;
                            ctx.beginPath(); ctx.arc(s2[0], s2[1], 5, 0, Math.PI * 2); ctx.fill();

                            // Interior (0,1) — shown below the line
                            var intY = -0.5;
                            var si0 = viz.toScreen(0, intY);
                            var si1 = viz.toScreen(1, intY);
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 4;
                            ctx.beginPath(); ctx.moveTo(si0[0], si0[1]); ctx.lineTo(si1[0], si1[1]); ctx.stroke();
                            ctx.beginPath(); ctx.arc(si0[0], si0[1], 4, 0, Math.PI * 2); ctx.strokeStyle = viz.colors.green; ctx.lineWidth = 2; ctx.stroke();
                            ctx.beginPath(); ctx.arc(si1[0], si1[1], 4, 0, Math.PI * 2); ctx.stroke();
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                            ctx.fillText('int(A) = (0,1)', si0[0] - 10, si0[1]);

                            // Closure [0,1] u {2} — shown above
                            var clY = 0.5;
                            var sc0 = viz.toScreen(0, clY);
                            var sc1 = viz.toScreen(1, clY);
                            var sc2 = viz.toScreen(2, clY);
                            ctx.strokeStyle = viz.colors.purple;
                            ctx.lineWidth = 4;
                            ctx.beginPath(); ctx.moveTo(sc0[0], sc0[1]); ctx.lineTo(sc1[0], sc1[1]); ctx.stroke();
                            ctx.fillStyle = viz.colors.purple;
                            ctx.beginPath(); ctx.arc(sc0[0], sc0[1], 4, 0, Math.PI * 2); ctx.fill();
                            ctx.beginPath(); ctx.arc(sc1[0], sc1[1], 4, 0, Math.PI * 2); ctx.fill();
                            ctx.beginPath(); ctx.arc(sc2[0], sc2[1], 4, 0, Math.PI * 2); ctx.fill();
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                            ctx.fillText('cl(A) = [0,1]\u222a{2}', sc0[0] - 10, sc0[1]);

                            // Boundary points {0, 1, 2} — epsilon ball around selected
                            var bx = bdryPt.x;
                            var sb = viz.toScreen(bx, 0);
                            var sbL = viz.toScreen(bx - epsVal, 0);
                            var sbR = viz.toScreen(bx + epsVal, 0);

                            // shade epsilon ball
                            ctx.fillStyle = viz.colors.orange + '22';
                            ctx.fillRect(sbL[0], sb[1] - 40, sbR[0] - sbL[0], 80);
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([3, 3]);
                            ctx.beginPath(); ctx.moveTo(sbL[0], sb[1] - 40); ctx.lineTo(sbL[0], sb[1] + 40); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(sbR[0], sb[1] - 40); ctx.lineTo(sbR[0], sb[1] + 40); ctx.stroke();
                            ctx.setLineDash([]);

                            // check if ball meets A and complement
                            var meetsA = false;
                            var meetsComp = false;
                            // A = [0,1) u {2}
                            var lo = bx - epsVal;
                            var hi = bx + epsVal;
                            // meets A if ball intersects [0,1) or contains 2
                            if (hi > 0 && lo < 1) meetsA = true;
                            if (lo < 2 + 0.001 && hi > 2 - 0.001 && Math.abs(bx - 2) < epsVal + 0.001) meetsA = true;
                            // meets complement if ball extends below 0, or above 1 (but not =2), or between 1 and 2, or above 2
                            if (lo < 0) meetsComp = true;
                            if (hi > 1) meetsComp = true;

                            // annotation
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            var msg = 'Boundary pt x=' + bx;
                            if (meetsA && meetsComp) {
                                msg += ': ball meets A \u2714 and A\u1D9C \u2714 \u2192 boundary!';
                            }
                            ctx.fillText(msg, viz.width / 2, viz.height - 30);

                            ctx.fillStyle = viz.colors.pink;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('\u2202A = {0, 1, 2}', viz.width / 2, viz.height - 12);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'dense-rationals-viz',
                    title: 'Density of the Rationals',
                    description: 'Zoom into any interval and see rational numbers (p/q with bounded denominator) filling up the space.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 220, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var center = 0.5;
                        var halfWidth = 0.5;
                        var maxDenom = 10;

                        VizEngine.createSlider(controls, 'Center', -2, 3, 0.5, 0.01, function(v) { center = v; draw(); });
                        VizEngine.createSlider(controls, 'Zoom (half-width)', 0.01, 2, 0.5, 0.01, function(v) { halfWidth = v; draw(); });
                        VizEngine.createSlider(controls, 'Max denom q', 2, 50, 10, 1, function(v) { maxDenom = Math.round(v); draw(); });

                        function draw() {
                            viz.clear();
                            var lo = center - halfWidth;
                            var hi = center + halfWidth;
                            var lineY = 120;
                            var lineL = 60;
                            var lineR = 640;
                            var lineLen = lineR - lineL;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillText('Rationals with denominator \u2264 ' + maxDenom + ' in [' + lo.toFixed(3) + ', ' + hi.toFixed(3) + ']', 350, 20);

                            // number line
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(lineL, lineY); ctx.lineTo(lineR, lineY); ctx.stroke();

                            // endpoints
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText(lo.toFixed(3), lineL, lineY + 8);
                            ctx.fillText(hi.toFixed(3), lineR, lineY + 8);

                            // find rationals p/q in [lo, hi] with q <= maxDenom
                            var count = 0;
                            var maxShow = 300;
                            for (var q = 1; q <= maxDenom && count < maxShow; q++) {
                                var pLo = Math.ceil(lo * q);
                                var pHi = Math.floor(hi * q);
                                for (var p = pLo; p <= pHi && count < maxShow; p++) {
                                    var val = p / q;
                                    if (val < lo || val > hi) continue;
                                    var sx = lineL + (val - lo) / (hi - lo) * lineLen;
                                    var r = Math.max(1.5, 5 - q * 0.08);
                                    var alpha = Math.max(0.3, 1 - q / maxDenom * 0.7);
                                    // color by denominator
                                    var hue;
                                    if (q <= 2) hue = viz.colors.orange;
                                    else if (q <= 5) hue = viz.colors.blue;
                                    else if (q <= 10) hue = viz.colors.green;
                                    else if (q <= 20) hue = viz.colors.purple;
                                    else hue = viz.colors.teal;
                                    ctx.fillStyle = hue;
                                    ctx.globalAlpha = alpha;
                                    ctx.beginPath(); ctx.arc(sx, lineY, r, 0, Math.PI * 2); ctx.fill();
                                    count++;
                                }
                            }
                            ctx.globalAlpha = 1;

                            // count display
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(count + ' rationals found (larger dots = smaller denominators)', 350, lineY + 45);
                            ctx.fillText('No matter how far you zoom in, rationals keep appearing \u2014 Q is dense in R.', 350, lineY + 65);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Find the interior, closure, and boundary of \\(A = (0, 1] \\cup (2, 3)\\).',
                    hint: 'Consider which endpoints are limit points and which points have epsilon-balls inside A.',
                    solution: '\\(A^\\circ = (0, 1) \\cup (2, 3)\\) (the point \\(1\\) has no open ball inside \\(A\\)). \\(\\overline{A} = [0, 1] \\cup [2, 3]\\) (\\(0, 2, 3\\) are limit points). \\(\\partial A = \\{0, 1, 2, 3\\}\\).'
                },
                {
                    question: 'Prove that \\(A^\\circ\\) is always an open set.',
                    hint: 'Show that every point of \\(A^\\circ\\) has an epsilon-ball contained in \\(A^\\circ\\).',
                    solution: 'Let \\(x \\in A^\\circ\\). Then some \\((x-\\varepsilon, x+\\varepsilon) \\subseteq A\\). Every \\(y\\) in this ball also has a sub-ball inside \\(A\\) (namely \\((y-\\delta, y+\\delta)\\) where \\(\\delta = \\varepsilon - |y-x| > 0\\)), so \\(y \\in A^\\circ\\). Hence the ball around \\(x\\) lies in \\(A^\\circ\\), proving \\(A^\\circ\\) is open.'
                },
                {
                    question: 'Show that \\(\\overline{\\mathbb{Q}} = \\mathbb{R}\\), i.e., the rationals are dense.',
                    hint: 'Use the Archimedean property: for any \\(\\varepsilon > 0\\), there exists \\(n\\) with \\(1/n < \\varepsilon\\).',
                    solution: 'Let \\(x \\in \\mathbb{R}\\) and \\(\\varepsilon > 0\\). Choose \\(n\\) with \\(1/n < \\varepsilon\\). Among the multiples \\(k/n\\), pick \\(k = \\lceil nx \\rceil\\), giving \\(|k/n - x| \\le 1/n < \\varepsilon\\). So every \\(\\varepsilon\\)-ball around \\(x\\) contains a rational, hence \\(x \\in \\overline{\\mathbb{Q}}\\).'
                },
                {
                    question: 'Find a set \\(A \\subseteq \\mathbb{R}\\) such that \\(A^\\circ = \\emptyset\\) but \\(\\overline{A} = \\mathbb{R}\\).',
                    hint: 'Think of a set that is everywhere dense but has no interior.',
                    solution: '\\(A = \\mathbb{Q}\\). Its interior is empty because no open interval consists entirely of rationals (every interval contains irrationals). Its closure is \\(\\mathbb{R}\\) by density.'
                },
                {
                    question: 'Prove that \\(\\partial A = \\partial(\\mathbb{R} \\setminus A)\\) for any \\(A\\).',
                    hint: 'Use the characterization: \\(x \\in \\partial A\\) iff every \\(\\varepsilon\\)-ball meets both \\(A\\) and \\(A^c\\).',
                    solution: 'The condition "every \\(\\varepsilon\\)-ball around \\(x\\) meets both \\(A\\) and \\(\\mathbb{R} \\setminus A\\)" is symmetric in \\(A\\) and \\(\\mathbb{R} \\setminus A\\). Hence \\(\\partial A = \\partial(\\mathbb{R}\\setminus A)\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 3 — Compactness and the Heine-Borel Theorem
        // ============================================================
        {
            id: 'ch04-sec03',
            title: 'Compactness and Heine-Borel',
            content: `
                <h2>Compactness and the Heine-Borel Theorem</h2>

                <p>Compactness is one of the most powerful ideas in analysis. Intuitively,
                a compact set is one that is "finite-like" even though it may contain
                infinitely many points. The key property: every attempt to cover a compact
                set with open sets can be <em>simplified</em> to a finite sub-cover.</p>

                <h3>Open Covers and Finite Sub-covers</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.7 (Open Cover)</div>
                    <div class="env-body">
                        <p>An <strong>open cover</strong> of a set \\(K\\) is a collection
                        \\(\\{U_\\alpha\\}\\) of open sets whose union contains \\(K\\):
                        \\(K \\subseteq \\bigcup_\\alpha U_\\alpha\\).</p>
                        <p>A <strong>finite sub-cover</strong> is a finite sub-collection
                        that still covers \\(K\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.8 (Compact Set)</div>
                    <div class="env-body">
                        <p>A set \\(K \\subseteq \\mathbb{R}\\) is <strong>compact</strong> if
                        <em>every</em> open cover of \\(K\\) has a finite sub-cover.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="open-cover-explorer"></div>

                <div class="env-block intuition">
                    <div class="env-title">The Atlas Metaphor</div>
                    <div class="env-body">
                        <p>Imagine \\(K\\) is a country and each open set is a map page.
                        The country is compact if no matter how someone designs an atlas
                        covering it (possibly with infinitely many pages), you can always
                        rip out all but finitely many pages and still see every point of the country.</p>
                    </div>
                </div>

                <h3>The Heine-Borel Theorem</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.3 (Heine-Borel)</div>
                    <div class="env-body">
                        <p>A set \\(K \\subseteq \\mathbb{R}\\) is compact if and only if it is
                        <strong>closed and bounded</strong>.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch (\\(\\Leftarrow\\))</div>
                    <div class="env-body">
                        <p>Suppose \\(K\\) is closed and bounded, say \\(K \\subseteq [a, b]\\).
                        Let \\(\\{U_\\alpha\\}\\) be an open cover. Define
                        \\(S = \\{x \\in [a,b] : [a,x] \\cap K \\text{ has a finite sub-cover from } \\{U_\\alpha\\}\\}\\).
                        Then \\(S\\) is nonempty (\\(a \\in S\\)) and bounded above by \\(b\\). Let
                        \\(s = \\sup S\\). One shows \\(s \\in S\\) and \\(s = b\\) using the fact
                        that \\(s\\) is covered by some \\(U_\\beta\\), which is open and therefore
                        "pushes past" \\(s\\). Hence a finite sub-cover exists. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch (\\(\\Rightarrow\\))</div>
                    <div class="env-body">
                        <p><em>Bounded:</em> Cover \\(K\\) by \\(\\{(-n, n) : n \\in \\mathbb{N}\\}\\).
                        A finite sub-cover gives \\(K \\subseteq (-N, N)\\).</p>
                        <p><em>Closed:</em> If \\(x \\notin K\\), build opens
                        \\(U_n = \\mathbb{R} \\setminus [x - 1/n,\\, x + 1/n]\\).
                        These cover \\(K\\) (each point of \\(K\\) is separated from \\(x\\)),
                        and a finite sub-cover shows \\(x\\) has a neighborhood missing \\(K\\),
                        so \\(K^c\\) is open. \\(\\square\\)</p>
                    </div>
                </div>

                <h3>Sequential Compactness</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.4 (Bolzano-Weierstrass for Sets)</div>
                    <div class="env-body">
                        <p>A set \\(K \\subseteq \\mathbb{R}\\) is compact if and only if every
                        sequence in \\(K\\) has a subsequence converging to a point <em>in \\(K\\)</em>.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Why compactness matters</div>
                    <div class="env-body">
                        <p>Compactness turns infinite problems into finite ones. A continuous
                        function on a compact set attains its maximum and minimum (Extreme Value
                        Theorem). Compactness is the hidden engine behind many of the deepest
                        results in analysis.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="heine-borel-failure"></div>
            `,
            visualizations: [
                {
                    id: 'open-cover-explorer',
                    title: 'Open Cover and Finite Sub-cover',
                    description: 'See an open cover of [0,1]. Toggle intervals on/off and check whether the remaining ones still cover the set.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 320, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;

                        // predefined open cover of [0,1]
                        var intervals = [
                            { a: -0.1, b: 0.25, on: true },
                            { a: 0.1,  b: 0.45, on: true },
                            { a: 0.3,  b: 0.6,  on: true },
                            { a: 0.5,  b: 0.75, on: true },
                            { a: 0.65, b: 0.85, on: true },
                            { a: 0.7,  b: 1.05, on: true },
                            { a: 0.15, b: 0.55, on: false },
                            { a: 0.4,  b: 0.95, on: false }
                        ];

                        var colors = [
                            viz.colors.blue, viz.colors.orange, viz.colors.green,
                            viz.colors.purple, viz.colors.teal, viz.colors.pink,
                            viz.colors.red, viz.colors.yellow
                        ];

                        // create toggle buttons
                        for (var i = 0; i < intervals.length; i++) {
                            (function(idx) {
                                var label = 'U' + (idx + 1) + ': (' + intervals[idx].a.toFixed(2) + ', ' + intervals[idx].b.toFixed(2) + ')';
                                VizEngine.createButton(controls, label, function() {
                                    intervals[idx].on = !intervals[idx].on;
                                    draw();
                                });
                            })(i);
                        }

                        function draw() {
                            viz.clear();

                            var lineY = 60;
                            var lineL = 80;
                            var lineR = 620;
                            var lineLen = lineR - lineL;
                            var setLo = 0;
                            var setHi = 1;

                            function toX(val) { return lineL + (val - (-0.15)) / (1.15 - (-0.15)) * lineLen; }

                            // title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Open cover of K = [0, 1] \u2014 click intervals to toggle', 350, 22);

                            // draw [0,1] as thick bar
                            var x0 = toX(0);
                            var x1 = toX(1);
                            ctx.fillStyle = viz.colors.white + '33';
                            ctx.fillRect(x0, lineY - 6, x1 - x0, 12);
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 2;
                            ctx.strokeRect(x0, lineY - 6, x1 - x0, 12);

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('0', x0, lineY + 12);
                            ctx.fillText('1', x1, lineY + 12);

                            // draw active intervals
                            var activeCount = 0;
                            for (var i = 0; i < intervals.length; i++) {
                                var iv = intervals[i];
                                var row = 90 + i * 26;
                                var xA = toX(iv.a);
                                var xB = toX(iv.b);

                                var c = colors[i % colors.length];
                                if (iv.on) {
                                    ctx.fillStyle = c + '44';
                                    ctx.fillRect(xA, row, xB - xA, 18);
                                    ctx.strokeStyle = c;
                                    ctx.lineWidth = 2;
                                    ctx.strokeRect(xA, row, xB - xA, 18);
                                    activeCount++;
                                } else {
                                    ctx.fillStyle = '#1a1a40';
                                    ctx.fillRect(xA, row, xB - xA, 18);
                                    ctx.strokeStyle = '#30363d';
                                    ctx.lineWidth = 1;
                                    ctx.strokeRect(xA, row, xB - xA, 18);
                                }

                                ctx.fillStyle = iv.on ? c : viz.colors.text + '55';
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'right';
                                ctx.textBaseline = 'middle';
                                ctx.fillText('U' + (i + 1), xA - 6, row + 9);
                            }

                            // check if active intervals cover [0,1]
                            var covered = true;
                            var testPoints = 200;
                            var uncoveredPt = null;
                            for (var t = 0; t <= testPoints; t++) {
                                var val = t / testPoints;
                                var isCovered = false;
                                for (var j = 0; j < intervals.length; j++) {
                                    if (intervals[j].on && val > intervals[j].a && val < intervals[j].b) {
                                        isCovered = true;
                                        break;
                                    }
                                }
                                if (!isCovered) {
                                    covered = false;
                                    uncoveredPt = val;
                                    break;
                                }
                            }

                            var statusY = 300;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            if (covered) {
                                ctx.fillStyle = viz.colors.green;
                                ctx.fillText('\u2714 [0,1] is covered using ' + activeCount + ' interval(s)', 350, statusY);
                            } else {
                                ctx.fillStyle = viz.colors.red;
                                ctx.fillText('\u2718 Not covered! Gap near x = ' + uncoveredPt.toFixed(3), 350, statusY);
                            }
                        }

                        draw();
                    }
                },
                {
                    id: 'heine-borel-failure',
                    title: 'When Heine-Borel Fails',
                    description: 'See why (0,1] is not compact: an open cover with no finite sub-cover.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 280, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var nMax = 5;

                        VizEngine.createSlider(controls, 'Number of intervals n', 2, 30, 5, 1, function(v) {
                            nMax = Math.round(v);
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            var lineY = 80;
                            var lineL = 80;
                            var lineR = 620;
                            var lineLen = lineR - lineL;

                            function toX(val) { return lineL + val * lineLen; }

                            // title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Cover of (0, 1] by U_n = (1/n, 2) \u2014 no finite sub-cover!', 350, 20);

                            // draw (0,1] on number line
                            var x0 = toX(0);
                            var x1 = toX(1);
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 3;
                            ctx.beginPath(); ctx.moveTo(x0, lineY); ctx.lineTo(x1, lineY); ctx.stroke();
                            // open at 0
                            ctx.beginPath(); ctx.arc(x0, lineY, 5, 0, Math.PI * 2);
                            ctx.strokeStyle = viz.colors.white; ctx.lineWidth = 2; ctx.stroke();
                            // closed at 1
                            ctx.fillStyle = viz.colors.white;
                            ctx.beginPath(); ctx.arc(x1, lineY, 5, 0, Math.PI * 2); ctx.fill();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('0', x0, lineY + 12);
                            ctx.fillText('1', x1, lineY + 12);

                            // draw intervals (1/n, 2) for n=1..nMax
                            var maxToShow = Math.min(nMax, 20);
                            for (var n = 1; n <= maxToShow; n++) {
                                var left = 1.0 / n;
                                var row = 100 + (n - 1) * 22;
                                var xL = toX(left);
                                var xR = toX(1); // cap display at 1 for visibility
                                var alpha = Math.max(0.3, 1 - n * 0.04);
                                var hue = n <= 3 ? viz.colors.blue : (n <= 8 ? viz.colors.green : viz.colors.purple);

                                ctx.fillStyle = hue + '33';
                                ctx.fillRect(xL, row, xR - xL, 16);
                                ctx.strokeStyle = hue;
                                ctx.lineWidth = 1.5;
                                ctx.strokeRect(xL, row, xR - xL, 16);
                                // open circle at left endpoint
                                ctx.beginPath(); ctx.arc(xL, row + 8, 3, 0, Math.PI * 2);
                                ctx.strokeStyle = hue; ctx.lineWidth = 1.5; ctx.stroke();

                                ctx.fillStyle = hue;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'right';
                                ctx.textBaseline = 'middle';
                                ctx.fillText('U' + n + ': (1/' + n + ', 2)', xL - 6, row + 8);
                            }

                            // uncovered region
                            var uncoveredEnd = 1.0 / nMax;
                            if (uncoveredEnd > 0.001) {
                                var ux = toX(uncoveredEnd);
                                ctx.fillStyle = viz.colors.red + '33';
                                ctx.fillRect(x0, lineY - 8, ux - x0, 16);
                                ctx.strokeStyle = viz.colors.red;
                                ctx.lineWidth = 1.5;
                                ctx.setLineDash([3, 3]);
                                ctx.strokeRect(x0, lineY - 8, ux - x0, 16);
                                ctx.setLineDash([]);
                            }

                            // annotation
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillStyle = viz.colors.red;
                            ctx.fillText('Uncovered: (0, 1/' + nMax + '] \u2014 always a gap near 0 with finitely many intervals!',
                                350, Math.min(100 + maxToShow * 22 + 15, 260));
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Determine whether each set is compact: (a) \\([0, 1]\\), (b) \\((0, 1)\\), (c) \\(\\{1/n : n \\in \\mathbb{N}\\}\\), (d) \\(\\{1/n : n \\in \\mathbb{N}\\} \\cup \\{0\\}\\).',
                    hint: 'Apply Heine-Borel: check closed and bounded.',
                    solution: '(a) Compact (closed and bounded). (b) Not compact (not closed: 0 is a limit point not in the set). (c) Not compact (not closed: 0 is a limit point). (d) Compact (bounded in \\([0,1]\\) and closed since 0, the only limit point, is included).'
                },
                {
                    question: 'Construct an explicit open cover of \\((0, 1)\\) with no finite sub-cover.',
                    hint: 'Consider intervals that avoid the endpoints.',
                    solution: 'Use \\(U_n = (1/n, 1)\\) for \\(n \\ge 2\\). Then \\(\\bigcup_{n=2}^\\infty U_n = (0, 1)\\). But any finite subcollection \\(U_{n_1}, \\ldots, U_{n_k}\\) only covers \\((1/N, 1)\\) where \\(N = \\max(n_i)\\), missing \\((0, 1/N]\\).'
                },
                {
                    question: 'Prove that a compact set \\(K \\subseteq \\mathbb{R}\\) is bounded using the open-cover definition.',
                    hint: 'Cover \\(K\\) with \\((-n, n)\\) for all \\(n\\).',
                    solution: 'The collection \\(\\{(-n, n) : n \\in \\mathbb{N}\\}\\) is an open cover of \\(K\\) (in fact of all of \\(\\mathbb{R}\\)). By compactness, finitely many suffice: \\(K \\subseteq (-n_1, n_1) \\cup \\cdots \\cup (-n_k, n_k) = (-N, N)\\) where \\(N = \\max(n_i)\\). Hence \\(K\\) is bounded.'
                },
                {
                    question: 'If \\(K\\) is compact and \\(F \\subseteq K\\) is closed, prove \\(F\\) is compact.',
                    hint: 'Take any open cover of \\(F\\) and add \\(F^c\\) to make it an open cover of \\(K\\).',
                    solution: 'Let \\(\\{U_\\alpha\\}\\) cover \\(F\\). Since \\(F\\) is closed, \\(F^c\\) is open. Then \\(\\{U_\\alpha\\} \\cup \\{F^c\\}\\) is an open cover of \\(K\\). Extract a finite sub-cover \\(U_{\\alpha_1}, \\ldots, U_{\\alpha_n}, F^c\\). Dropping \\(F^c\\), we get \\(U_{\\alpha_1}, \\ldots, U_{\\alpha_n}\\) still covers \\(F\\).'
                },
                {
                    question: 'Show that the intersection of a compact set and a closed set is compact.',
                    hint: 'A closed subset of a compact set is compact.',
                    solution: 'Let \\(K\\) be compact and \\(F\\) closed. Then \\(K \\cap F\\) is closed (intersection of closed sets) and bounded (subset of bounded \\(K\\)). By Heine-Borel, \\(K \\cap F\\) is compact.'
                }
            ]
        },

        // ============================================================
        // SECTION 4 — Connectedness
        // ============================================================
        {
            id: 'ch04-sec04',
            title: 'Connectedness',
            content: `
                <h2>Connectedness</h2>

                <p>A connected set is one that cannot be "split into two separate pieces."
                Imagine a continent: it is connected if you can walk from any point
                to any other without crossing an ocean. A disconnected set is an
                archipelago — separate islands with water between them.</p>

                <h3>The Formal Definition</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.9 (Disconnected / Connected)</div>
                    <div class="env-body">
                        <p>A set \\(A \\subseteq \\mathbb{R}\\) is <strong>disconnected</strong>
                        if there exist nonempty open sets \\(U, V\\) such that:</p>
                        <ol>
                            <li>\\(A \\subseteq U \\cup V\\),</li>
                            <li>\\(A \\cap U \\neq \\emptyset\\) and \\(A \\cap V \\neq \\emptyset\\),</li>
                            <li>\\(A \\cap U \\cap V = \\emptyset\\).</li>
                        </ol>
                        <p>We call \\((U, V)\\) a <strong>separation</strong> of \\(A\\).
                        A set is <strong>connected</strong> if no such separation exists.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="connected-vs-disconnected"></div>

                <h3>The Connected Subsets of R</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.5</div>
                    <div class="env-body">
                        <p>A subset of \\(\\mathbb{R}\\) is connected if and only if it is an <strong>interval</strong>
                        (including rays \\((-\\infty, a)\\), \\([a, \\infty)\\), and \\(\\mathbb{R}\\) itself).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p><em>Intervals are connected:</em> Suppose \\(I\\) is an interval with a
                        separation \\((U, V)\\). Pick \\(a \\in I \\cap U\\) and \\(b \\in I \\cap V\\)
                        with \\(a < b\\). Let \\(c = \\sup(I \\cap U \\cap [a, b])\\). Since \\(I\\) is
                        an interval, \\(c \\in I\\). But \\(c\\) cannot belong to \\(U\\) (the sup would
                        be exceeded) nor \\(V\\) (points near \\(c\\) from below are in \\(U\\)),
                        contradicting \\(A \\subseteq U \\cup V\\).</p>
                        <p><em>Non-intervals are disconnected:</em> If \\(A\\) is not an interval,
                        some \\(c \\notin A\\) separates two points of \\(A\\). Take
                        \\(U = (-\\infty, c)\\), \\(V = (c, \\infty)\\). \\(\\square\\)</p>
                    </div>
                </div>

                <h3>Intermediate Value Theorem (Topological Form)</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.6 (IVT — Topological)</div>
                    <div class="env-body">
                        <p>The continuous image of a connected set is connected. In particular,
                        if \\(f : [a,b] \\to \\mathbb{R}\\) is continuous and \\(f(a) < y < f(b)\\)
                        (or \\(f(a) > y > f(b)\\)), then \\(y \\in f([a,b])\\) — the function
                        must hit every intermediate value.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Connectedness is the topological engine behind the Intermediate Value
                        Theorem. The IVT says continuous functions on intervals cannot "jump"
                        over values — they are forced to pass through every intermediate output.
                        This is because intervals are connected and continuous images of
                        connected sets are connected (hence also intervals).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ivt-connectedness-viz"></div>

                <div class="env-block example">
                    <div class="env-title">Example</div>
                    <div class="env-body">
                        <p>The set \\(A = [0, 1] \\cup [2, 3]\\) is disconnected. We can separate
                        it with \\(U = (-0.5, 1.5)\\) and \\(V = (1.5, 3.5)\\): both hit \\(A\\),
                        their union covers \\(A\\), and \\(A \\cap U \\cap V = \\emptyset\\).</p>
                        <p>But \\([0, 3]\\) is connected (an interval), and no separation
                        is possible. Every proposed split must leave a "gap point" uncovered,
                        and that gap point lies in the interval.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'connected-vs-disconnected',
                    title: 'Connected vs. Disconnected',
                    description: 'Drag the gap to see when a set splits into two pieces and when it stays connected.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 260, scale: 60, originX: 80, originY: 130 });
                        var gapCenter = viz.addDraggable('gap', 4.5, 0, viz.colors.red, 9, function() {
                            gapCenter.y = 0;
                            gapCenter.x = Math.max(0.3, Math.min(8.7, gapCenter.x));
                        });
                        var gapWidth = 0.5;

                        VizEngine.createSlider(controls, 'Gap width', 0, 1.5, 0.5, 0.01, function(v) {
                            gapWidth = v;
                        });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var setA = 0;
                            var setB = 9;
                            var gL = gapCenter.x - gapWidth / 2;
                            var gR = gapCenter.x + gapWidth / 2;

                            // number line
                            var nL = viz.toScreen(-0.5, 0);
                            var nR = viz.toScreen(9.5, 0);
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(nL[0], nL[1]); ctx.lineTo(nR[0], nR[1]); ctx.stroke();

                            if (gapWidth > 0.01) {
                                // two pieces
                                viz.drawClosedInterval(setA, gL, 0, viz.colors.blue, 5);
                                viz.drawClosedInterval(gR, setB, 0, viz.colors.orange, 5);

                                // gap region
                                var sgL = viz.toScreen(gL, 0);
                                var sgR = viz.toScreen(gR, 0);
                                ctx.fillStyle = viz.colors.red + '22';
                                ctx.fillRect(sgL[0], sgL[1] - 30, sgR[0] - sgL[0], 60);

                                // labels
                                ctx.fillStyle = viz.colors.blue;
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'top';
                                var smid1 = viz.toScreen((setA + gL) / 2, 0);
                                ctx.fillText('[' + setA + ', ' + gL.toFixed(2) + ']', smid1[0], smid1[1] + 20);
                                ctx.fillStyle = viz.colors.orange;
                                var smid2 = viz.toScreen((gR + setB) / 2, 0);
                                ctx.fillText('[' + gR.toFixed(2) + ', ' + setB + ']', smid2[0], smid2[1] + 20);

                                // status
                                ctx.fillStyle = viz.colors.red;
                                ctx.font = 'bold 16px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('DISCONNECTED \u2014 gap of width ' + gapWidth.toFixed(2), viz.width / 2, 20);
                            } else {
                                // one piece
                                viz.drawClosedInterval(setA, setB, 0, viz.colors.teal, 5);
                                ctx.fillStyle = viz.colors.teal;
                                ctx.font = 'bold 16px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('CONNECTED \u2014 the interval [0, 9] has no gap', viz.width / 2, 20);
                            }

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'ivt-connectedness-viz',
                    title: 'IVT via Connectedness',
                    description: 'A continuous function on a connected domain must hit every intermediate value. Drag y to find where f(x) = y.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 50, originX: 80, originY: 280 });
                        var yTarget = viz.addDraggable('yt', -1, 1.5, viz.colors.orange, 9, function() {
                            yTarget.x = -1;
                            yTarget.y = Math.max(-0.5, Math.min(4.5, yTarget.y));
                        });

                        function f(x) {
                            return 0.15 * x * x * x - 0.8 * x * x + 1.5 * x + 0.5;
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            viz.drawGrid(1);
                            viz.drawAxes();

                            // draw f
                            viz.drawFunction(f, -0.5, 8.5, viz.colors.blue, 2.5);

                            // f(a), f(b) labels
                            var a = 0;
                            var b = 8;
                            viz.drawPoint(a, f(a), viz.colors.green, 'f(0)=' + f(a).toFixed(1), 5);
                            viz.drawPoint(b, f(b), viz.colors.green, 'f(8)=' + f(b).toFixed(1), 5);

                            // target y line
                            var yVal = yTarget.y;
                            var sy = viz.toScreen(0, yVal);
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([5, 4]);
                            ctx.beginPath(); ctx.moveTo(0, sy[1]); ctx.lineTo(viz.width, sy[1]); ctx.stroke();
                            ctx.setLineDash([]);

                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('y = ' + yVal.toFixed(2), 10, sy[1] - 4);

                            // find intersections by scanning
                            var hits = [];
                            var steps = 500;
                            for (var i = 0; i < steps; i++) {
                                var x1 = a + (b - a) * i / steps;
                                var x2 = a + (b - a) * (i + 1) / steps;
                                var y1 = f(x1) - yVal;
                                var y2 = f(x2) - yVal;
                                if (y1 * y2 <= 0 && Math.abs(y1 - y2) > 1e-10) {
                                    // linear interpolation for root
                                    var xr = x1 - y1 * (x2 - x1) / (y2 - y1);
                                    hits.push(xr);
                                }
                            }

                            for (var h = 0; h < hits.length; h++) {
                                var xh = hits[h];
                                var sp = viz.toScreen(xh, yVal);
                                ctx.fillStyle = viz.colors.red;
                                ctx.beginPath(); ctx.arc(sp[0], sp[1], 6, 0, Math.PI * 2); ctx.fill();
                                // dashed vertical
                                ctx.strokeStyle = viz.colors.red;
                                ctx.lineWidth = 1;
                                ctx.setLineDash([3, 3]);
                                var sxBase = viz.toScreen(xh, 0);
                                ctx.beginPath(); ctx.moveTo(sp[0], sp[1]); ctx.lineTo(sxBase[0], sxBase[1]); ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.fillStyle = viz.colors.red;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'top';
                                ctx.fillText('x\u2248' + xh.toFixed(2), sxBase[0], sxBase[1] + 4);
                            }

                            // title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('IVT: drag y \u2014 the function must cross every intermediate value', viz.width / 2, 14);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText(hits.length + ' intersection(s) found', viz.width / 2, 32);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that the set \\(A = (0,1) \\cup (1,2)\\) is disconnected by exhibiting a separation.',
                    hint: 'The sets \\(U = (-0.5, 1)\\) and \\(V = (1, 2.5)\\) work.',
                    solution: 'Take \\(U = (-\\infty, 1)\\) and \\(V = (1, \\infty)\\). Both are open. \\(A \\cap U = (0,1) \\neq \\emptyset\\), \\(A \\cap V = (1,2) \\neq \\emptyset\\), and \\(A \\cap U \\cap V = \\emptyset\\) since \\(1 \\notin A\\). Also \\(A \\subseteq U \\cup V\\). Hence \\((U, V)\\) is a separation.'
                },
                {
                    question: 'Show that \\([0, 1]\\) is connected by contradiction.',
                    hint: 'If \\((U, V)\\) separates \\([0,1]\\), let \\(c = \\sup([0,1] \\cap U)\\).',
                    solution: 'Assume \\(U, V\\) separate \\([0,1]\\). WLOG \\(0 \\in U\\). Let \\(c = \\sup([0,1] \\cap U)\\). Since \\(U\\) is open, if \\(c \\in U\\), then a ball around \\(c\\) is in \\(U\\), so \\(c\\) is not the supremum (we could go further) unless \\(c = 1\\), but then \\([0,1] \\cap V = \\emptyset\\), contradiction. If \\(c \\in V\\), then since \\(V\\) is open, points just below \\(c\\) are in \\(V\\), contradicting \\(c = \\sup([0,1]\\cap U)\\). Either way, contradiction.'
                },
                {
                    question: 'Use the topological IVT to prove: if \\(f : [0,1] \\to [0,1]\\) is continuous, then \\(f\\) has a fixed point.',
                    hint: 'Consider \\(g(x) = f(x) - x\\).',
                    solution: 'Let \\(g(x) = f(x) - x\\). Then \\(g(0) = f(0) \\ge 0\\) and \\(g(1) = f(1) - 1 \\le 0\\). By the IVT, there exists \\(c \\in [0,1]\\) with \\(g(c) = 0\\), i.e., \\(f(c) = c\\).'
                },
                {
                    question: 'Is \\(\\mathbb{Q}\\) connected? Prove or disprove.',
                    hint: 'Consider \\(U = (-\\infty, \\sqrt{2})\\) and \\(V = (\\sqrt{2}, \\infty)\\).',
                    solution: '\\(\\mathbb{Q}\\) is disconnected. Take \\(U = (-\\infty, \\sqrt{2})\\) and \\(V = (\\sqrt{2}, \\infty)\\). Both are open, and since \\(\\sqrt{2} \\notin \\mathbb{Q}\\), we have \\(\\mathbb{Q} \\subseteq U \\cup V\\), \\(\\mathbb{Q} \\cap U \\neq \\emptyset\\) (e.g. \\(1\\)), \\(\\mathbb{Q} \\cap V \\neq \\emptyset\\) (e.g. \\(2\\)), and \\(\\mathbb{Q} \\cap U \\cap V = \\emptyset\\).'
                },
                {
                    question: 'Prove: the continuous image of a connected set is connected.',
                    hint: 'Assume for contradiction that \\(f(A)\\) has a separation, and pull it back to \\(A\\).',
                    solution: 'Suppose \\(f : A \\to \\mathbb{R}\\) is continuous and \\(A\\) is connected. If \\(f(A) = (f(A) \\cap U) \\cup (f(A) \\cap V)\\) is a separation (with \\(U, V\\) open), then \\(A = (A \\cap f^{-1}(U)) \\cup (A \\cap f^{-1}(V))\\). Since \\(f\\) is continuous, \\(f^{-1}(U)\\) and \\(f^{-1}(V)\\) are open, and both intersect \\(A\\) nonemptily. This gives a separation of \\(A\\), contradicting connectedness.'
                },
                {
                    question: 'Show that the union of two connected sets with nonempty intersection is connected.',
                    hint: 'If \\(A \\cup B\\) had a separation, where would the common point land?',
                    solution: 'Let \\(p \\in A \\cap B\\). Suppose \\((U, V)\\) separates \\(A \\cup B\\). Then \\(p \\in U\\) or \\(p \\in V\\); say \\(p \\in U\\). Since \\(A\\) is connected and \\(p \\in A \\cap U\\), all of \\(A\\) must lie in \\(U\\) (else \\(A\\) would be separated). Similarly \\(B \\subseteq U\\). But then \\((A\\cup B) \\cap V = \\emptyset\\), contradicting the separation requirement.'
                }
            ]
        },

        // ============================================================
        // SECTION 5 — The Cantor Set
        // ============================================================
        {
            id: 'ch04-sec05',
            title: 'The Cantor Set',
            content: `
                <h2>The Cantor Set</h2>

                <p>The <strong>Cantor set</strong> is one of the most surprising objects in
                mathematics. It is constructed by repeatedly deleting open middle thirds
                from the interval \\([0, 1]\\). What remains after infinitely many
                deletions is a set that is</p>
                <ul>
                    <li>uncountably infinite (as large as \\(\\mathbb{R}\\) in a sense),</li>
                    <li>has total length zero,</li>
                    <li>is closed, bounded, compact, perfect, and totally disconnected,</li>
                    <li>and looks like "fractal dust."</li>
                </ul>

                <h3>Construction</h3>

                <p>Start with \\(C_0 = [0, 1]\\). At each stage, remove the open middle
                third of every remaining interval:</p>

                <ul>
                    <li>\\(C_0 = [0, 1]\\)</li>
                    <li>\\(C_1 = [0, 1/3] \\cup [2/3, 1]\\)</li>
                    <li>\\(C_2 = [0, 1/9] \\cup [2/9, 1/3] \\cup [2/3, 7/9] \\cup [8/9, 1]\\)</li>
                    <li>\\(\\vdots\\)</li>
                </ul>

                <p>The <strong>Cantor set</strong> is \\(C = \\bigcap_{n=0}^{\\infty} C_n\\).</p>

                <div class="viz-placeholder" data-viz="cantor-construction"></div>

                <h3>Properties</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.7 (Properties of the Cantor Set)</div>
                    <div class="env-body">
                        <ol>
                            <li><strong>Compact:</strong> \\(C\\) is closed and bounded (intersection of closed sets, contained in \\([0,1]\\)).</li>
                            <li><strong>Measure zero:</strong> The total length removed is \\(\\sum_{n=0}^{\\infty}\\frac{2^n}{3^{n+1}} = 1\\). So \\(C\\) has length 0.</li>
                            <li><strong>Uncountable:</strong> \\(C\\) consists of all \\(x \\in [0,1]\\) whose ternary expansion uses only digits \\(0\\) and \\(2\\). This bijects with \\(\\{0,1\\}^{\\mathbb{N}}\\), which is uncountable.</li>
                            <li><strong>Perfect:</strong> Every point of \\(C\\) is a limit point of \\(C\\) (no isolated points).</li>
                            <li><strong>Totally disconnected:</strong> The only connected subsets of \\(C\\) are single points.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">The Paradox</div>
                    <div class="env-body">
                        <p>The Cantor set has "no length" (measure zero) yet is "as large as
                        the real line" (uncountable). It contains no interval of positive
                        length, yet it is not just a sparse scattering of points — every
                        point is surrounded by infinitely many others, with no isolated points.
                        It is pure boundary: \\(C = \\partial C\\).</p>
                    </div>
                </div>

                <h3>Ternary Representation</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.10 (Ternary Characterization)</div>
                    <div class="env-body">
                        <p>A number \\(x \\in [0, 1]\\) belongs to the Cantor set \\(C\\)
                        if and only if \\(x\\) has a <strong>base-3 expansion</strong>
                        using only the digits \\(0\\) and \\(2\\):</p>
                        <p>\\[x = \\sum_{k=1}^{\\infty} \\frac{a_k}{3^k}, \\quad a_k \\in \\{0, 2\\}.\\]</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="cantor-ternary-explorer"></div>

                <div class="env-block proof">
                    <div class="env-title">Why uncountable?</div>
                    <div class="env-body">
                        <p>The map \\(\\sum a_k / 3^k \\mapsto \\sum (a_k/2) / 2^k\\)
                        sends \\(C\\) surjectively onto \\([0, 1]\\) (replacing each ternary
                        digit \\(0 \\to 0\\), \\(2 \\to 1\\) to get a binary expansion). Since
                        \\([0,1]\\) is uncountable, so is \\(C\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Topological Significance</div>
                    <div class="env-body">
                        <p>The Cantor set is a universal object: every compact, totally
                        disconnected, perfect metric space is homeomorphic to the Cantor set.
                        It appears throughout analysis, dynamics, and fractal geometry.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'cantor-construction',
                    title: 'Building the Cantor Set',
                    description: 'Watch the middle-third removal process step by step. Adjust the number of iterations.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var maxLevel = 6;

                        VizEngine.createSlider(controls, 'Iterations', 0, 8, 6, 1, function(v) {
                            maxLevel = Math.round(v);
                            draw();
                        });

                        function getCantorIntervals(level) {
                            var intervals = [[0, 1]];
                            for (var l = 0; l < level; l++) {
                                var next = [];
                                for (var i = 0; i < intervals.length; i++) {
                                    var a = intervals[i][0];
                                    var b = intervals[i][1];
                                    var third = (b - a) / 3;
                                    next.push([a, a + third]);
                                    next.push([b - third, b]);
                                }
                                intervals = next;
                            }
                            return intervals;
                        }

                        function draw() {
                            viz.clear();
                            var lineL = 40;
                            var lineR = 660;
                            var lineLen = lineR - lineL;
                            var rowHeight = 38;
                            var startY = 30;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Cantor Set Construction \u2014 ' + maxLevel + ' iterations', 350, 18);

                            for (var level = 0; level <= maxLevel; level++) {
                                var y = startY + level * rowHeight;
                                var intervals = getCantorIntervals(level);

                                // Label
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.textBaseline = 'middle';
                                ctx.fillText('C' + level, 8, y + 8);

                                var totalLen = 0;
                                for (var i = 0; i < intervals.length; i++) {
                                    var a = intervals[i][0];
                                    var b = intervals[i][1];
                                    totalLen += (b - a);
                                    var xL = lineL + a * lineLen;
                                    var xR = lineL + b * lineLen;
                                    var w = Math.max(xR - xL, 0.5);

                                    // color: brighter at higher levels
                                    var hue = level <= 2 ? viz.colors.blue : (level <= 5 ? viz.colors.teal : viz.colors.purple);
                                    ctx.fillStyle = hue;
                                    ctx.fillRect(xL, y, w, 16);
                                }

                                // length annotation
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'right';
                                ctx.textBaseline = 'middle';
                                ctx.fillText('len = (2/3)^' + level + ' \u2248 ' + totalLen.toFixed(4), lineR + 38, y + 8);
                            }

                            // bottom note
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('As n \u2192 \u221E, the remaining length \u2192 0, but uncountably many points survive!',
                                350, startY + (maxLevel + 1) * rowHeight + 10);
                        }

                        draw();
                    }
                },
                {
                    id: 'cantor-ternary-explorer',
                    title: 'Cantor Set & Ternary Digits',
                    description: 'Build a point in the Cantor set by choosing ternary digits (0 or 2). See where it lands.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 340, scale: 1, originX: 0, originY: 0 });
                        var ctx = viz.ctx;
                        var digits = [0, 2, 0, 2, 0, 0, 2, 0];
                        var numDigits = 8;

                        // toggle buttons for each digit
                        function makeToggle(idx) {
                            VizEngine.createButton(controls, 'Digit ' + (idx + 1) + ': toggle', function() {
                                digits[idx] = (digits[idx] === 0) ? 2 : 0;
                                draw();
                            });
                        }
                        for (var d = 0; d < numDigits; d++) {
                            makeToggle(d);
                        }

                        function draw() {
                            viz.clear();
                            var lineL = 60;
                            var lineR = 640;
                            var lineLen = lineR - lineL;

                            // compute value
                            var val = 0;
                            for (var k = 0; k < numDigits; k++) {
                                val += digits[k] / Math.pow(3, k + 1);
                            }

                            // title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Cantor Set Point from Ternary Digits', 350, 22);

                            // show ternary expansion
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '16px -apple-system,sans-serif';
                            var ternStr = '0.';
                            for (var i = 0; i < numDigits; i++) {
                                ternStr += digits[i];
                            }
                            ternStr += '...  (base 3)';
                            ctx.fillText(ternStr, 350, 52);

                            // show decimal value
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.fillText('= ' + val.toFixed(8) + '  (decimal)', 350, 76);

                            // draw [0,1] line
                            var lineY = 130;
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(lineL, lineY); ctx.lineTo(lineR, lineY); ctx.stroke();
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('0', lineL, lineY + 6);
                            ctx.fillText('1', lineR, lineY + 6);

                            // show Cantor levels narrowing in on the point
                            var lo = 0;
                            var hi = 1;
                            for (var level = 0; level < numDigits; level++) {
                                var third = (hi - lo) / 3;
                                var rowY = 160 + level * 22;

                                // draw current interval
                                var xL = lineL + lo * lineLen;
                                var xR = lineL + hi * lineLen;
                                var w = Math.max(xR - xL, 1);

                                var alpha = Math.max(0.3, 1 - level * 0.08);
                                ctx.fillStyle = viz.colors.blue;
                                ctx.globalAlpha = alpha;
                                ctx.fillRect(xL, rowY, w, 14);
                                ctx.globalAlpha = 1;

                                // label
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '9px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.textBaseline = 'middle';
                                ctx.fillText('d' + (level+1) + '=' + digits[level], xR + 4, rowY + 7);

                                // narrow based on digit
                                if (digits[level] === 0) {
                                    hi = lo + third;
                                } else {
                                    lo = hi - third;
                                }
                            }

                            // point marker on number line
                            var px = lineL + val * lineLen;
                            ctx.fillStyle = viz.colors.orange;
                            ctx.beginPath(); ctx.arc(px, lineY, 6, 0, Math.PI * 2); ctx.fill();

                            // vertical line to last zoom level
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([2, 2]);
                            ctx.beginPath(); ctx.moveTo(px, lineY + 6); ctx.lineTo(px, 160 + (numDigits - 1) * 22 + 14); ctx.stroke();
                            ctx.setLineDash([]);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute the total length of the intervals removed in constructing the Cantor set. Why does this show \\(C\\) has measure zero?',
                    hint: 'At stage \\(n\\), we remove \\(2^n\\) intervals each of length \\(1/3^{n+1}\\).',
                    solution: 'Total removed = \\(\\sum_{n=0}^{\\infty} \\frac{2^n}{3^{n+1}} = \\frac{1}{3}\\sum_{n=0}^{\\infty}(2/3)^n = \\frac{1}{3} \\cdot \\frac{1}{1-2/3} = \\frac{1}{3}\\cdot 3 = 1\\). Since the total length of \\([0,1]\\) is 1 and we removed 1, the Cantor set has length (Lebesgue measure) zero.'
                },
                {
                    question: 'Show that \\(1/4\\) belongs to the Cantor set by finding its ternary expansion.',
                    hint: 'Compute the ternary expansion: \\(1/4 = 0.020202\\ldots_3\\).',
                    solution: 'In base 3: \\(1/4 = 0/3 + 2/9 + 0/27 + 2/81 + \\cdots = 0.\\overline{02}_3\\). This uses only digits 0 and 2, so \\(1/4 \\in C\\). Verification: \\(\\sum_{k=1}^{\\infty} 2/3^{2k} = 2/(9-1) = 2/8 = 1/4\\). \\(\\checkmark\\)'
                },
                {
                    question: 'Prove that the Cantor set \\(C\\) is closed.',
                    hint: 'Each \\(C_n\\) is a finite union of closed intervals.',
                    solution: 'Each \\(C_n\\) is a finite union of closed intervals, hence closed. The Cantor set \\(C = \\bigcap_{n=0}^{\\infty} C_n\\) is an intersection of closed sets, which is closed.'
                },
                {
                    question: 'Show that the Cantor set is totally disconnected: it contains no interval \\((a,b)\\) with \\(a < b\\).',
                    hint: 'Any interval has positive length, but \\(C_n\\) has length \\((2/3)^n\\).',
                    solution: 'If \\((a,b) \\subseteq C\\) with \\(a < b\\), then \\((a,b) \\subseteq C_n\\) for all \\(n\\). But each interval in \\(C_n\\) has length \\(1/3^n\\), and for large enough \\(n\\), \\(1/3^n < b-a\\), so \\((a,b)\\) cannot fit in a single interval of \\(C_n\\). Hence \\((a,b)\\) spans a removed gap, contradiction.'
                },
                {
                    question: 'Prove that the Cantor set is perfect (every point is a limit point).',
                    hint: 'Given \\(x \\in C\\) and \\(\\varepsilon > 0\\), find another point of \\(C\\) within distance \\(\\varepsilon\\) by modifying a late ternary digit.',
                    solution: 'Let \\(x = \\sum a_k/3^k \\in C\\) and \\(\\varepsilon > 0\\). Choose \\(N\\) with \\(1/3^N < \\varepsilon\\). Define \\(y\\) by changing \\(a_N\\): if \\(a_N = 0\\), set \\(b_N = 2\\); if \\(a_N = 2\\), set \\(b_N = 0\\); keep all other digits the same. Then \\(y \\in C\\) (only digits 0 and 2), \\(y \\neq x\\), and \\(|x - y| = 2/3^N < \\varepsilon\\). So \\(x\\) is a limit point of \\(C\\).'
                },
                {
                    question: 'The "Cantor function" (devil\'s staircase) maps \\([0,1]\\) to \\([0,1]\\), is continuous, nondecreasing, has derivative 0 almost everywhere, yet rises from 0 to 1. Explain briefly why the Cantor function is constant on each removed interval.',
                    hint: 'Points in a removed interval all have the same ternary prefix up to the first digit-1 position.',
                    solution: 'If \\(x\\) is in a removed open interval, its ternary expansion has a first digit equal to 1. The Cantor function replaces this 1 by a 1 in binary and terminates. All points in the same removed interval share the same ternary prefix up to that position, so they all map to the same binary number, making the function constant on that interval.'
                }
            ]
        }
    ]
});
