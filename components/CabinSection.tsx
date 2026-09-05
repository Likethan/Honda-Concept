'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { NVH_ITEMS } from '@/data/accord';

export default function CabinSection() {
  const [openItemId, setOpenItemId] = useState<string>('01');

  const toggleItem = (id: string) => {
    setOpenItemId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="cabin" className="section cabin-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta-header">
          <div className="section-meta-left">
            <span className="section-index">04</span>
            <h2 className="section-title">CABIN / NVH ARCHITECTURE</h2>
            <span className="section-context">ACOUSTICS & ERGONOMICS</span>
          </div>
          <span className="section-context">INTERIOR BENCHMARK</span>
        </div>

        {/* Asymmetric Layout: Large Interior Photo + Editorial Accordion */}
        <div className="cabin-layout">
          {/* Left: Large Interior Photograph */}
          <div className="interior-media-column">
            <div className="image-technical-frame">
              <div className="interior-aspect-box">
                <Image
                  src="/images/interior/accord-cabin.jpg"
                  alt="2003 Honda Accord 7th Generation driver-oriented cockpit featuring progressive LED electroluminescent gauges and integrated center stack console"
                  width={1280}
                  height={860}
                  className="interior-image"
                />
              </div>
              <div className="image-caption-bar">
                <span>
                  <span className="image-caption-tag">FIG 3.1</span>
                  DRIVER ERGONOMICS & SIGHTLINE GEOMETRY
                </span>
                <span>HORIZONTAL COWL AXIS</span>
              </div>
            </div>

            {/* Micro Ergonomics Note */}
            <div className="ergonomics-spec">
              <div className="ergo-title">COCKPIT FIELD-OF-VIEW SPECIFICATION</div>
              <div className="ergo-grid">
                <div>
                  <span className="k">A-PILLAR GEOMETRY</span>
                  <span className="v">Ultra-slim 73 mm structural profile</span>
                </div>
                <div>
                  <span className="k">COWL DATUM</span>
                  <span className="v">-25 mm lowered for panoramic visibility</span>
                </div>
                <div>
                  <span className="k">PROGRESSIVE ILLUMINATION</span>
                  <span className="v">3-stage LED gauge welcome sequence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Editorial Accordion */}
          <div className="nvh-editorial-column">
            <div className="nvh-header-box">
              <span className="nvh-subhead">ENGINEERING DOSSIER</span>
              <h3 className="nvh-main-title">NOISE, VIBRATION & HARSHNESS</h3>
              <p className="nvh-lead-copy">
                Cabin refinement in the 7th-generation Accord (CM5/CM6) set a new benchmark in midsize packaging,
                combining acoustic melt-sheet floor dampening, subframe liquid-filled hydraulic engine mounts,
                and an intuitive driver interface with progressive LED electroluminescent instrumentation.
                Select an acoustic node below for engineering specifics:
              </p>
            </div>

            {/* Accordion List */}
            <div className="nvh-accordion" role="region" aria-label="NVH Engineering Measures">
              {NVH_ITEMS.map((item) => {
                const isOpen = openItemId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`nvh-item ${isOpen ? 'nvh-item-open' : ''}`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`nvh-content-${item.id}`}
                      id={`nvh-header-${item.id}`}
                      onClick={() => toggleItem(item.id)}
                      className="nvh-button"
                    >
                      <div className="nvh-btn-title-group">
                        <span className="nvh-id">{item.id}</span>
                        <span className="nvh-title">{item.title}</span>
                      </div>
                      <span className="nvh-glyph">{isOpen ? '−' : '+'}</span>
                    </button>

                    <div
                      id={`nvh-content-${item.id}`}
                      role="region"
                      aria-labelledby={`nvh-header-${item.id}`}
                      className={`nvh-collapse ${isOpen ? 'nvh-collapse-expanded' : ''}`}
                    >
                      <div className="nvh-content-body">
                        <p className="nvh-desc">{item.detail}</p>
                        <div className="nvh-spec-line">
                          <span className="nvh-spec-tag">BENCHMARK SPECIFICATION:</span>
                          <span className="nvh-spec-val">{item.specification}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
