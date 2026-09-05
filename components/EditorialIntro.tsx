import React from 'react';

export default function EditorialIntro() {
  return (
    <section className="editorial-section">
      <div className="container">
        <div className="editorial-layout">
          {/* Left Column — Structural Marker */}
          <aside className="editorial-marker" aria-label="Section metadata">
            <span className="marker-index">01 — STRUCTURE</span>
            <span className="marker-label">DESIGN ARCHITECTURE</span>
            <div className="marker-rule" />
            <div className="marker-meta">
              <span className="meta-key">PHILOSOPHY</span>
              <span className="meta-val">MAN MAXIMUM / MACHINE MINIMUM (M/M) · 2003 MILESTONE</span>
            </div>
          </aside>

          {/* Right Column — Editorial Discourse & Pull Quote */}
          <article className="editorial-content">
            <h2 className="editorial-lead-heading">
              Engineering European Dynamic Roadholding Into a Precision Monocoque
            </h2>

            <div className="editorial-body">
              <p>
                When Honda engineers set out to architect the seventh-generation Accord for 2003, their mandate
                was resolute: achieve European-caliber chassis dynamics, surgical steering feedback, and mechanical
                purity without sacrificing everyday midsize packaging. Rather than succumbing to cost-reduced front
                MacPherson struts, Honda engineered an advanced four-wheel independent double-wishbone suspension
                system, lowering the vehicle roll center and guaranteeing zero camber deflection across high-speed maneuvers.
              </p>
            </div>

            {/* Editorial Pull Quote */}
            <blockquote className="editorial-pull-quote">
              <span className="quote-glyph">&ldquo;</span>
              A car should respond to the driver&apos;s intentions as intuitively as an extension of the human body.
              <footer className="quote-attribution">
                — 2003 Honda Accord Chief Engineering Team, Tochigi R&amp;D Center
              </footer>
            </blockquote>

            <div className="editorial-body">
              <p>
                Tailored laser-welded high-tensile steel blank pillars and computer-modeled structural bulkheads
                delivered a substantial 27% increase in torsional rigidity over the prior generation. Near-flush
                windshield glazing, aerodynamically recessed wipers, and extensive underfloor aero cladding produced a
                sleek 0.30 drag coefficient (0.29 on the Coupe), establishing an aerodynamic and mechanical benchmark
                that defined executive sedan engineering throughout the decade.
              </p>
            </div>

            <div className="rule" />
          </article>
        </div>
      </div>
    </section>
  );
}
