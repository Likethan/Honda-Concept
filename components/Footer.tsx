import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-grid">
          {/* Left: Identification & Archive Mark */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <span className="bold">HONDA</span>
              <span className="slash">/</span>
              <span>ACCORD</span>
            </div>
            <div className="archive-edition">
              7TH GENERATION (2003) ENGINEERING DOSSIER
            </div>
            <p className="footer-meta-text">
              Compiled from official Honda Motor Co. Technical Information System (TIS), SAE
              engineering papers, and North American factory press materials.
            </p>
          </div>

          {/* Center: Legal & Regulatory Disclaimer */}
          <div className="footer-col legal-col">
            <div className="col-heading">LEGAL & REGULATORY NOTICE</div>
            <p className="disclaimer-text">
              Specifications, dimensions, and powertrain ratings cited herein reflect 2003 model
              year production (chassis codes CM5 / CM6) for the United States domestic market. Horsepower and torque measured
              under SAE J1349 net test procedures. All registered trademarks, model nomenclature, and
              badges are the intellectual property of Honda Motor Co., Ltd. This digital showcase is
              curated for technical analysis and editorial reference.
            </p>
            <div className="spec-version-code">
              ARCHIVE REVISION: REV 7.0.1-US · MONOCOQUE CM5/CM6
            </div>
          </div>

          {/* Right: Technical Index Links */}
          <div className="footer-col nav-col">
            <div className="col-heading">DOCUMENT INDEX</div>
            <ul className="footer-links">
              <li>
                <a href="#platform" className="footer-link">
                  01 PLATFORM & DIMENSIONS
                </a>
              </li>
              <li>
                <a href="#engineering" className="footer-link">
                  02 ENGINEERING DISCIPLINES
                </a>
              </li>
              <li>
                <a href="#powertrain" className="footer-link">
                  03 POWERTRAIN & i-VTEC SCHEMATIC
                </a>
              </li>
              <li>
                <a href="#cabin" className="footer-link">
                  04 CABIN & NVH ACOUSTICS
                </a>
              </li>
              <li>
                <a href="#details" className="footer-link">
                  05 MATERIALITY & DETAIL
                </a>
              </li>
              <li>
                <a href="#specifications" className="footer-link">
                  06 SPECIFICATION MATRIX
                </a>
              </li>
              <li>
                <a href="#evolution" className="footer-link">
                  07 CHASSIS EVOLUTION
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-left">
            <span>© {new Date().getFullYear()} ENGINEERING ARCHIVE</span>
            <span className="dot">·</span>
            <span>MANUFACTURED AT MARYSVILLE AUTO PLANT, OHIO, USA & SAYAMA, JAPAN</span>
          </div>
          <div className="bottom-right">
            <span>END OF DOSSIER</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
