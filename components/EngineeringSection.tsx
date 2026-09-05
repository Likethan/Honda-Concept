'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ENGINEERING_VIEWS = [
  {
    id: 'exterior',
    tag: 'FIG 2.1',
    label: '01 PROFILE & AERO',
    title: 'WEDGE AERODYNAMICS & LOW-COWL PROFILE',
    chassis: 'CM5/CM6 CHASSIS',
    src: '/images/engineering/accord-exterior.jpg',
    alt: 'Honda Accord 7th Gen 2003 front quarter dynamic view showing wedge profile and double-wishbone architecture',
  },
  {
    id: 'engine',
    tag: 'FIG 2.2',
    label: '02 K24A4 ENGINE',
    title: 'K24A4 2.4L DOHC i-VTEC VALVETRAIN CUTAWAY',
    chassis: '2,354 CC DOHC i-VTEC',
    src: '/images/mechanical/k24a4-engine.jpg',
    alt: 'Honda K24A4 2.4L DOHC i-VTEC engine technical cutaway with camshafts, timing chain, and i-VTEC mechanism callouts',
  },
  {
    id: 'driveshaft',
    tag: 'FIG 2.3',
    label: '03 DRIVESHAFT & AXLE',
    title: 'FWD EQUAL-LENGTH DRIVESHAFT & CV AXLES',
    chassis: '28T / 32T SPLINED STEEL',
    src: '/images/mechanical/driveshaft-halfshaft.jpg',
    alt: '2003 Honda Accord CM5 front-wheel-drive driveshafts, constant velocity joints, and splined axle assembly',
  },
  {
    id: 'suspension',
    tag: 'FIG 2.4',
    label: '04 SUSPENSION & BRAKES',
    title: 'FRONT DOUBLE-WISHBONE & DISC BRAKE SYSTEM',
    chassis: 'FORGED ALLOY A-ARM',
    src: '/images/mechanical/double-wishbone-suspension.jpg',
    alt: 'Race-derived front double-wishbone suspension assembly with forged aluminum upper wishbone, coilover damper, and disc brake caliper',
  },
  {
    id: 'chassis',
    tag: 'FIG 2.5',
    label: '05 CHASSIS BLUEPRINT',
    title: 'HIGH-TENSILE STEEL MONOCOQUE BLUEPRINT',
    chassis: '+27% TORSIONAL RIGIDITY',
    src: '/images/mechanical/chassis-architecture.jpg',
    alt: '2003 Honda Accord CM5 high-tensile steel monocoque chassis blueprint showing hydroformed front rails, laser-welded B-pillars and rear subframe',
  },
];

export default function EngineeringSection() {
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const currentView = ENGINEERING_VIEWS[activeViewIndex];

  return (
    <section id="engineering" className="section engineering-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta-header">
          <div className="section-meta-left">
            <span className="section-index">02</span>
            <h2 className="section-title">ENGINEERING / 01</h2>
            <span className="section-context">DISCIPLINE ANALYSIS</span>
          </div>
          <span className="section-context">CHASSIS & POWERTRAIN VALIDATION</span>
        </div>

        {/* Layout: Technical Photo + 3 Engineering Disciplines */}
        <div className="engineering-grid">
          {/* Left: Large Technical Photo Frame */}
          <div className="media-column">
            {/* Engineering Media View Tabs */}
            <div className="engineering-view-selector" role="tablist" aria-label="Engineering Media Selector">
              {ENGINEERING_VIEWS.map((view, index) => (
                <button
                  key={view.id}
                  role="tab"
                  aria-selected={activeViewIndex === index}
                  className={`eng-selector-btn ${activeViewIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveViewIndex(index)}
                  type="button"
                >
                  <span className="eng-btn-num">[{String(index + 1).padStart(2, '0')}]</span>
                  <span className="eng-btn-text">{view.label.replace(/^\d+\s*/, '')}</span>
                </button>
              ))}
            </div>

            <div className="image-technical-frame">
              <div className="aspect-box">
                <Image
                  key={currentView.src}
                  src={currentView.src}
                  alt={currentView.alt}
                  width={1280}
                  height={850}
                  className="engineering-photo"
                  priority={activeViewIndex === 0}
                />
              </div>
              <div className="image-caption-bar">
                <span>
                  <span className="image-caption-tag">{currentView.tag}</span>
                  {currentView.title}
                </span>
                <span>{currentView.chassis}</span>
              </div>
            </div>

            {/* Powertrain Specification Matrix Box */}
            <div className="powertrain-stat-box">
              <div className="stat-header">
                <span className="stat-title">POWERTRAIN BENCHMARK (US SPEC)</span>
                <span className="stat-code">i-VTEC & 3.0L VTEC V6</span>
              </div>
              <div className="stat-grid">
                <div className="stat-item">
                  <span className="stat-val">2,354 cc</span>
                  <span className="stat-lbl">K24A4 DOHC</span>
                </div>
                <div className="stat-item">
                  <span className="stat-val">2,997 cc</span>
                  <span className="stat-lbl">J30A4 V6</span>
                </div>
                <div className="stat-item">
                  <span className="stat-val">50° VTC</span>
                  <span className="stat-lbl">CONTINUOUS ADVANCE</span>
                </div>
                <div className="stat-item">
                  <span className="stat-val">240 HP</span>
                  <span className="stat-lbl">PEAK V6 OUTPUT</span>
                </div>
                <div className="stat-item">
                  <span className="stat-val">212 LB-FT</span>
                  <span className="stat-lbl">V6 TORQUE</span>
                </div>
                <div className="stat-item">
                  <span className="stat-val">0.30 Cd</span>
                  <span className="stat-lbl">AERODYNAMIC INDEX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Three Disciplines */}
          <div className="disciplines-column">
            {/* Discipline A */}
            <article className="discipline-item">
              <div className="discipline-head">
                <span className="discipline-badge">DISCIPLINE A</span>
                <h3 className="discipline-title">RACE-DERIVED 4-WHEEL DOUBLE WISHBONE SUSPENSION</h3>
              </div>
              <p className="discipline-desc">
                Unlike competing midsize sedans compromised with cost-reduced front MacPherson struts, the
                2003 Accord retains pure race-derived double-wishbone geometry at all four wheels. The front
                low-arm layout provides zero camber deflection and anti-dive kinematics during hard braking. In the
                rear, a 5-link independent double-wishbone system with precision compliance bushings keeps the tire contact
                patch strictly perpendicular to the asphalt across dynamic lateral transitions.
              </p>
              <div className="technical-notes-row">
                <div className="note-chip">
                  <span className="chip-k">FRONT</span>
                  <span className="chip-v">Independent Low-Arm Double Wishbone</span>
                </div>
                <div className="note-chip">
                  <span className="chip-k">REAR</span>
                  <span className="chip-v">5-Link Independent Double Wishbone</span>
                </div>
              </div>
            </article>

            {/* Discipline B */}
            <article className="discipline-item">
              <div className="discipline-head">
                <span className="discipline-badge">DISCIPLINE B</span>
                <h3 className="discipline-title">i-VTEC & 240-HP VTEC V6 POWERTRAIN ENGINEERING</h3>
              </div>
              <p className="discipline-desc">
                The 2003 Accord marked the debut of the K24A4 2.4L i-VTEC engine, integrating Variable Valve Timing
                and Lift with continuous electro-hydraulic Variable Timing Control (VTC) capable of 50 degrees of
                intake cam advance. The flagship 3.0L SOHC 24-valve V6 (J30A4) generated 240 horsepower—a massive
                40-hp leap over the 6th gen—utilizing 3-rocker VTEC, magnesium cylinder head covers, dual-stage resonance
                intake plenum, and Drive-by-Wire (DBW) electronic throttle control.
              </p>
              <div className="technical-notes-row">
                <div className="note-chip">
                  <span className="chip-k">VTC ADVANCE</span>
                  <span className="chip-v">50° Continuous Cam Phasing</span>
                </div>
                <div className="note-chip">
                  <span className="chip-k">THROTTLE</span>
                  <span className="chip-v">Drive-by-Wire Electronic Control</span>
                </div>
              </div>
            </article>

            {/* Discipline C */}
            <article className="discipline-item">
              <div className="discipline-head">
                <span className="discipline-badge">DISCIPLINE C</span>
                <h3 className="discipline-title">MONOCOQUE RIGIDITY & 0.30 Cd AERODYNAMIC BODY</h3>
              </div>
              <p className="discipline-desc">
                Achieving a 27% increase in torsional stiffness and a 13% gain in bending resistance over the previous
                platform, the 2003 monocoque features tailored laser-welded blank high-tensile steel pillars.
                Aerodynamic management includes near-flush windshield glass, aerodynamically recessed wiper blades,
                tailored A-pillar vortex channels, and extensive underfloor air deflection trays yielding an exceptional
                0.30 drag coefficient (0.29 on the Coupe).
              </p>
              <div className="technical-notes-row">
                <div className="note-chip">
                  <span className="chip-k">RIGIDITY</span>
                  <span className="chip-v">+27% Torsional / +13% Bending Gain</span>
                </div>
                <div className="note-chip">
                  <span className="chip-k">UNDERFLOOR</span>
                  <span className="chip-v">Aero Engine &amp; Floor Fairing Covers</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}