import React from 'react';
import { SPEC_ROWS } from '@/data/accord';

export default function SpecMatrix() {
  const categories = Array.from(new Set(SPEC_ROWS.map((r) => r.category)));

  return (
    <section id="specifications" className="section spec-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta-header">
          <div className="section-meta-left">
            <span className="section-index">06</span>
            <h2 className="section-title">04 / SPECIFICATIONS</h2>
            <span className="section-context">TECHNICAL COMPARISON MATRIX</span>
          </div>
          <span className="section-context">US MARKET / 2003 MODEL YEAR (7TH GEN)</span>
        </div>

        {/* Section Lead Notes */}
        <div className="spec-dossier-intro">
          <p>
            The specification matrix below reflects certified factory data for the seventh-generation
            Honda Accord EX 2.4L i-VTEC (CM5) and EX-V6 3.0L VTEC (CM6) trims (US Market). Values are recorded
            according to SAE J1349 net testing procedures and EPA regulatory measurement protocols.
          </p>
        </div>

        {/* Semantic Table with Horizontal Scroll Protection */}
        <div className="table-scroll-container" tabIndex={0} aria-label="Specification Matrix Scroll Region">
          <table className="spec-table">
            <thead>
              <tr>
                <th scope="col" className="col-param">
                  <span className="th-label">PARAMETER / SYSTEM</span>
                  <span className="th-sub">SAE BENCHMARK</span>
                </th>
                <th scope="col" className="col-trim">
                  <span className="th-label">EX 2.4L i-VTEC</span>
                  <span className="th-sub">CHASSIS CODE: CM5 (USDM)</span>
                </th>
                <th scope="col" className="col-trim">
                  <span className="th-label">EX-V6 3.0L VTEC</span>
                  <span className="th-sub">CHASSIS CODE: CM6 (FLAGSHIP)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => {
                const rows = SPEC_ROWS.filter((r) => r.category === cat);
                return (
                  <React.Fragment key={cat}>
                    {/* Category Divider Row */}
                    <tr className="category-header-row">
                      <td colSpan={3} className="category-title">
                        <span className="category-tag">CATEGORY:</span>
                        <span>{cat}</span>
                      </td>
                    </tr>

                    {/* Spec Rows */}
                    {rows.map((row, idx) => (
                      <tr key={`${cat}-${idx}`} className="data-row">
                        <th scope="row" className="row-parameter">
                          <span className="param-text">{row.parameter}</span>
                          {row.notes && <span className="param-notes">{row.notes}</span>}
                        </th>
                        <td className="row-val">
                          <span className="spec-mono">{row.ex4Cyl}</span>
                        </td>
                        <td className="row-val">
                          <span className="spec-mono">{row.exV6}</span>
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footnote Metadata */}
        <div className="table-footnote">
          <span className="footnote-tag">[1]</span>
          <span>
            Specifications pertain exclusively to North American market 2003 model year vehicles manufactured at
            Marysville Auto Plant, Ohio. EPA estimates: 26 city / 34 highway mpg (2.4L 5MT) and 21 city / 30 highway mpg (3.0L V6 5AT).
            Actual operational mileage will vary according to driving habits, maintenance, ambient temperature,
            and payload configuration.
          </span>
        </div>
      </div>
    </section>
  );
}
