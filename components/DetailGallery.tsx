'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { DETAIL_GALLERY_ITEMS, DetailItem } from '@/data/accord';

export default function DetailGallery() {
  const [activeItem, setActiveItem] = useState<DetailItem | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeItem) {
        setActiveItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeItem]);

  const details = DETAIL_GALLERY_ITEMS;

  return (
    <section id="details" className="section details-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta-header">
          <div className="section-meta-left">
            <span className="section-index">05</span>
            <h2 className="section-title">MATERIALITY & DETAIL</h2>
            <span className="section-context">ARCHITECTURAL MACRO PHOTOGRAPHY</span>
          </div>
          <span className="section-context">EDITORIAL & TECHNICAL INSPECTION</span>
        </div>

        {/* Editorial Irregular Grid */}
        <div className="editorial-gallery-grid">
          {/* Card 1: Large Vertical / Driver Interface */}
          <div
            className="gallery-item item-tall interactive-tile"
            onClick={() => setActiveItem(details[0])}
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            aria-label={`Inspect ${details[0].title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveItem(details[0]);
              }
            }}
          >
            <div className="gallery-frame">
              <Image
                src={details[0].image}
                alt="2003 Honda Accord progressive LED electroluminescent instrument cluster"
                width={800}
                height={900}
                className="detail-img"
              />
              <div className="tile-inspect-overlay">
                <span className="inspect-pill">[ + CLICK TO INSPECT SPEC ]</span>
              </div>
            </div>
            <div className="gallery-caption-block">
              <div className="caption-top-line">
                <span className="detail-tag">{details[0].tag}</span>
                <span className="detail-status-pill">SPEC VERIFIED</span>
              </div>
              <h4 className="detail-title">{details[0].title}</h4>
              <p className="detail-desc">{details[0].desc}</p>
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="gallery-stack">
            {/* Card 2: Rear Lighting */}
            <div
              className="gallery-item item-standard interactive-tile"
              onClick={() => setActiveItem(details[1])}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`Inspect ${details[1].title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveItem(details[1]);
                }
              }}
            >
              <div className="gallery-frame standard-frame">
                <Image
                  src={details[1].image}
                  alt="2003 Honda Accord rear triangular aerodynamic decklid and taillamp assembly"
                  width={800}
                  height={500}
                  className="detail-img"
                />
                <div className="tile-inspect-overlay">
                  <span className="inspect-pill">[ + CLICK TO INSPECT SPEC ]</span>
                </div>
              </div>
              <div className="gallery-caption-block">
                <div className="caption-top-line">
                  <span className="detail-tag">{details[1].tag}</span>
                  <span className="detail-status-pill">AERO VALIDATED</span>
                </div>
                <h4 className="detail-title">{details[1].title}</h4>
                <p className="detail-desc">{details[1].desc}</p>
              </div>
            </div>

            {/* Card 3: Center Console */}
            <div
              className="gallery-item item-standard interactive-tile"
              onClick={() => setActiveItem(details[2])}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`Inspect ${details[2].title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveItem(details[2]);
                }
              }}
            >
              <div className="gallery-frame standard-frame">
                <Image
                  src={details[2].image}
                  alt="2003 Honda Accord center stack console with dual-zone climate and audio interface"
                  width={800}
                  height={500}
                  className="detail-img"
                />
                <div className="tile-inspect-overlay">
                  <span className="inspect-pill">[ + CLICK TO INSPECT SPEC ]</span>
                </div>
              </div>
              <div className="gallery-caption-block">
                <div className="caption-top-line">
                  <span className="detail-tag">{details[2].tag}</span>
                  <span className="detail-status-pill">CAN-BUS INTEGRATED</span>
                </div>
                <h4 className="detail-title">{details[2].title}</h4>
                <p className="detail-desc">{details[2].desc}</p>
              </div>
            </div>
          </div>

          {/* Card 4: Full-Width Stance Strip */}
          <div
            className="gallery-item item-wide interactive-tile"
            onClick={() => setActiveItem(details[3])}
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            aria-label={`Inspect ${details[3].title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveItem(details[3]);
              }
            }}
          >
            <div className="gallery-frame wide-frame">
              <Image
                src={details[3].image}
                alt="2003 Honda Accord 7th Generation aerodynamic profile and double-wishbone stance"
                width={1280}
                height={520}
                className="detail-img"
              />
              <div className="tile-inspect-overlay">
                <span className="inspect-pill">[ + CLICK TO INSPECT SPEC ]</span>
              </div>
            </div>
            <div className="gallery-caption-block wide-caption">
              <div>
                <div className="caption-top-line">
                  <span className="detail-tag">{details[3].tag}</span>
                  <span className="detail-status-pill">0.30 Cd COEFFICIENT</span>
                </div>
                <h4 className="detail-title">{details[3].title}</h4>
              </div>
              <p className="detail-desc wide-desc">{details[3].desc}</p>
            </div>
          </div>
        </div>

        {/* Technical Macro Inspection Modal */}
        {activeItem && (
          <div
            className="modal-backdrop"
            onClick={() => setActiveItem(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-spec-title"
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Header Bar */}
              <div className="modal-header">
                <div className="modal-meta-left">
                  <span className="modal-tag">{activeItem.tag}</span>
                  <h3 id="modal-spec-title" className="modal-title">
                    {activeItem.title}
                  </h3>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setActiveItem(null)}
                  aria-label="Close modal"
                >
                  [ ✕ CLOSE INSPECTION ]
                </button>
              </div>

              {/* Modal Body Grid */}
              <div className="modal-body-grid">
                {/* Left: High-Res Visual Frame */}
                <div className="modal-visual-frame">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    width={900}
                    height={650}
                    className="modal-visual-img"
                  />
                  <div className="modal-hud-overlay">
                    <span className="hud-coord">LOC: 35°24′N 139°38′E</span>
                    <span className="hud-status">CALIBRATED OEM MACRO</span>
                  </div>
                </div>

                {/* Right: Technical Dossier */}
                <div className="modal-dossier">
                  <div className="dossier-section">
                    <span className="dossier-section-title">ENGINEERING DISCOURSE</span>
                    <p className="dossier-p">{activeItem.engineeringNotes}</p>
                  </div>

                  <div className="dossier-section">
                    <span className="dossier-section-title">FUNCTIONAL ROLE & DYNAMICS</span>
                    <div className="functional-role-box">
                      <span className="role-indicator">■</span>
                      <span>{activeItem.functionalRole}</span>
                    </div>
                  </div>

                  <div className="dossier-section">
                    <span className="dossier-section-title">CERTIFIED METRICS & TOLERANCES</span>
                    <div className="dossier-specs-table">
                      {activeItem.technicalSpecs.map((spec, idx) => (
                        <div key={idx} className="dossier-spec-row">
                          <span className="dossier-spec-label">{spec.label}</span>
                          <span className="dossier-spec-val">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="dossier-footer">
                    <span className="dossier-doc-id">DOC REF: HA07-MET-{activeItem.id}</span>
                    <span className="dossier-signed">CERTIFIED: AUTOMOTIVE R&D</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
