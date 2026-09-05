import React from 'react';
import Image from 'next/image';
import { ACCORD_DIMENSIONS } from '@/data/accord';

export default function Hero() {
  return (
    <section id="platform" className="hero-section">
      <div className="container">
        {/* Top Reference Line */}
        <div className="hero-meta-bar">
          <div className="hero-meta-left">
            <span className="meta-index">01 / PLATFORM</span>
            <span className="meta-divider">|</span>
            <span className="meta-code">CHASSIS ARCHITECTURE CM5 / CM6</span>
          </div>
          <div className="hero-meta-right">
            <span>DEVELOPMENT TARGET: 4-WHEEL DOUBLE-WISHBONE & i-VTEC EFFICIENCY</span>
          </div>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="hero-grid">
          {/* Left Column (~42%) */}
          <div className="hero-content">
            <div className="headline-group">
              <span className="mono-subhead">HONDA MOTOR CO. TECHNICAL ARCHIVE</span>
              <h1 className="hero-title">
                ACCORD
                <span className="hero-title-sub">7TH GENERATION (2003)</span>
              </h1>
              <div className="statement-line">
                ENGINEERED FROM SUSPENSION TO CAM PROFILE.
              </div>
            </div>

            <div className="hero-body-text">
              <p>
                The seventh-generation 2003 Accord represents one of the most celebrated mechanical
                triumphs in Honda&apos;s history. Purpose-built to combine European-grade dynamic roadholding
                with everyday usability, the platform debuted race-derived four-wheel independent double-wishbone
                suspension and the revolutionary K24A4 i-VTEC engine with 50-degree continuous Variable Timing Control (VTC).
              </p>
              <p className="hero-secondary-para">
                Featuring a 27% increase in torsional monocoque stiffness, flush aerodynamic glass achieving a
                class-leading 0.30 Cd, and an available 240-horsepower 3.0L V6 with Drive-by-Wire throttle, the
                2003 Accord established an enduring high-water mark for midsize engineering integrity.
              </p>
            </div>

            {/* Quick Engineering Key Indicators */}
            <div className="key-indicators">
              <div className="indicator-cell">
                <span className="indicator-label">TORSIONAL RIGIDITY GAIN</span>
                <span className="indicator-val">+27% OVER GEN 6</span>
              </div>
              <div className="indicator-cell">
                <span className="indicator-label">SUSPENSION ARCHITECTURE</span>
                <span className="indicator-val">4-WHEEL DOUBLE WISHBONE</span>
              </div>
              <div className="indicator-cell">
                <span className="indicator-label">COEFFICIENT OF DRAG</span>
                <span className="indicator-val">0.30 Cd (SEDAN)</span>
              </div>
            </div>
          </div>

          {/* Right Column (~58%) */}
          <div className="hero-media-column">
            <div className="hero-image-frame">
              <div className="image-wrapper">
                <Image
                  src="/images/hero/accord-profile.jpg"
                  alt="Honda Accord 7th Generation 2003 Sedan in Satin Silver Metallic OEM studio reference photography"
                  width={1280}
                  height={720}
                  priority
                  className="hero-image"
                />
              </div>

              {/* Technical Caption Bar */}
              <div className="image-caption-bar">
                <span>
                  <span className="image-caption-tag">FIG 1.0</span>
                  ACCORD / 7TH GENERATION (2003) / OEM STUDIO BENCHMARK
                </span>
                <span className="status-indicator">CM-SERIES MONOCOQUE</span>
              </div>
            </div>

            {/* Printed Technical Dimensions Block */}
            <div className="dimensions-dossier">
              <div className="dossier-header">
                <span className="dossier-title">GEOMETRIC SPECIFICATIONS</span>
                <span className="dossier-code">ISO 3833-1977</span>
              </div>

              <dl className="spec-leader-list">
                <div className="spec-leader-item">
                  <dt className="spec-leader-label">WHEELBASE</dt>
                  <div className="spec-leader-dots" />
                  <dd className="spec-leader-val">{ACCORD_DIMENSIONS.wheelbase}</dd>
                </div>
                <div className="spec-leader-item">
                  <dt className="spec-leader-label">OVERALL LENGTH</dt>
                  <div className="spec-leader-dots" />
                  <dd className="spec-leader-val">{ACCORD_DIMENSIONS.length}</dd>
                </div>
                <div className="spec-leader-item">
                  <dt className="spec-leader-label">OVERALL WIDTH</dt>
                  <div className="spec-leader-dots" />
                  <dd className="spec-leader-val">{ACCORD_DIMENSIONS.width}</dd>
                </div>
                <div className="spec-leader-item">
                  <dt className="spec-leader-label">OVERALL HEIGHT</dt>
                  <div className="spec-leader-dots" />
                  <dd className="spec-leader-val">{ACCORD_DIMENSIONS.height}</dd>
                </div>
                <div className="spec-leader-item">
                  <dt className="spec-leader-label">FRONT / REAR TRACK</dt>
                  <div className="spec-leader-dots" />
                  <dd className="spec-leader-val">1,555 / 1,555 mm (61.2 in)</dd>
                </div>
                <div className="spec-leader-item">
                  <dt className="spec-leader-label">WEIGHT BALANCE (FRONT / REAR)</dt>
                  <div className="spec-leader-dots" />
                  <dd className="spec-leader-val">{ACCORD_DIMENSIONS.weightDistribution}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
