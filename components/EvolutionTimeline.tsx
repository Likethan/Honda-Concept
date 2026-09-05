'use client';

import React, { useState, useRef } from 'react';
import { TIMELINE_GENERATIONS, GenerationEntry } from '@/data/accord';

type EraFilter = 'all' | 'classic' | 'modern';

export default function EvolutionTimeline() {
  const [filter, setFilter] = useState<EraFilter>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredGenerations = TIMELINE_GENERATIONS.filter((gen) => {
    if (filter === 'all') return true;
    return gen.era === filter;
  });

  const scrollTimeline = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="evolution" className="section timeline-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta-header">
          <div className="section-meta-left">
            <span className="section-index">07</span>
            <h2 className="section-title">ACCORD / EVOLUTION</h2>
            <span className="section-context">CHASSIS & POWERTRAIN CHRONOLOGY</span>
          </div>
          <span className="section-context">1976 — PRESENT (50-YEAR ARCHIVE)</span>
        </div>

        {/* Section Lead & Interactive Era Filter Controls */}
        <div className="timeline-lead-row">
          <div className="timeline-lead">
            <p>
              An exhaustive archive of engineering milestone transitions across all eleven Accord generations,
              spotlighting the 7th-generation (2003) double-wishbone and i-VTEC platform alongside its mechanical
              heritage and modern successors.
            </p>
          </div>

          <div className="timeline-controls-wrap">
            <div className="era-filter-group" role="group" aria-label="Timeline Era Filters">
              <button
                type="button"
                className={`era-btn ${filter === 'all' ? 'era-btn-active' : ''}`}
                onClick={() => setFilter('all')}
                aria-pressed={filter === 'all'}
              >
                <span className="era-indicator">{filter === 'all' ? '●' : '○'}</span>
                <span>ALL (GEN 01–11)</span>
              </button>
              <button
                type="button"
                className={`era-btn ${filter === 'classic' ? 'era-btn-active' : ''}`}
                onClick={() => setFilter('classic')}
                aria-pressed={filter === 'classic'}
              >
                <span className="era-indicator">{filter === 'classic' ? '●' : '○'}</span>
                <span>CLASSIC (1976–1997)</span>
              </button>
              <button
                type="button"
                className={`era-btn ${filter === 'modern' ? 'era-btn-active' : ''}`}
                onClick={() => setFilter('modern')}
                aria-pressed={filter === 'modern'}
              >
                <span className="era-indicator">{filter === 'modern' ? '●' : '○'}</span>
                <span>MODERN & e:HEV (1998–PRESENT)</span>
              </button>
            </div>

            <div className="timeline-nav-arrows" aria-label="Horizontal scroll navigation">
              <button
                type="button"
                className="timeline-arrow-btn"
                onClick={() => scrollTimeline('left')}
                aria-label="Scroll timeline backward"
                title="Scroll backward"
              >
                ←
              </button>
              <button
                type="button"
                className="timeline-arrow-btn"
                onClick={() => scrollTimeline('right')}
                aria-label="Scroll timeline forward"
                title="Scroll forward"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Timeline Track */}
        <div
          ref={scrollContainerRef}
          className="timeline-scroll-wrap"
          tabIndex={0}
          aria-label="Chronological evolution timeline, use arrow keys or buttons to scroll"
          role="region"
        >
          <div className="timeline-track" aria-live="polite">
            {filteredGenerations.map((gen: GenerationEntry) => {
              const isCurrent = gen.highlight;
              return (
                <article
                  key={gen.gen}
                  className={`timeline-node ${isCurrent ? 'node-highlight' : ''}`}
                >
                  {/* Top Generation Number & Status */}
                  <div className="node-head">
                    <span className="gen-num">{gen.gen}</span>
                    <div className="head-meta">
                      <span className="gen-era">
                        {gen.era === 'classic' ? 'CLASSIC GEN' : 'GEN'} {gen.gen}
                      </span>
                      <span className="gen-years">{gen.years}</span>
                    </div>
                  </div>

                  {/* Horizontal Rule with Axis Dot */}
                  <div className="node-axis">
                    <span className="axis-dot" />
                    <span className="axis-line" />
                  </div>

                  {/* Body Content */}
                  <div className="node-body">
                    <span className="node-chassis">CHASSIS: {gen.chassisCode}</span>
                    <h4 className="node-title">{gen.title}</h4>
                    <p className="node-desc">{gen.majorEngineering}</p>

                    <div className="node-powertrain">
                      <span className="pt-tag">POWERTRAIN CONFIG:</span>
                      <span className="pt-val">{gen.powertrain}</span>
                    </div>

                    {isCurrent ? (
                      <div className="current-badge">
                        <span className="badge-marker">■</span>
                        <span>CURRENT ARCHIVE SPECIFICATION</span>
                      </div>
                    ) : (
                      <div className="heritage-badge">
                        <span className="badge-marker">◩</span>
                        <span>HISTORIC ARCHIVE RECORD</span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
