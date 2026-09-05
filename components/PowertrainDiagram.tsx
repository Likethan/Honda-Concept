'use client';

import React, { useState } from 'react';
import { POWERTRAIN_MODES, PowertrainMode } from '@/data/accord';

export default function PowertrainDiagram() {
  const [activeMode, setActiveMode] = useState<PowertrainMode>('low-rpm');

  const currentModeData =
    POWERTRAIN_MODES.find((m) => m.id === activeMode) || POWERTRAIN_MODES[0];

  return (
    <section id="powertrain" className="section powertrain-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta-header">
          <div className="section-meta-left">
            <span className="section-index">03</span>
            <h2 className="section-title">POWERTRAIN ARCHITECTURE</h2>
            <span className="section-context">i-VTEC &amp; VTEC CAM-PHASING SCHEMATIC</span>
          </div>
          <span className="section-context">VALVETRAIN INTERACTIVE TELEMETRY</span>
        </div>

        {/* Lead Explanatory Discourse */}
        <div className="powertrain-lead">
          <p>
            The 2003 Accord introduced Honda&apos;s intelligent Variable Valve Timing and Lift Electronic Control
            (i-VTEC) system, pairing multi-lobe camshaft rocker lockup with continuous electro-hydraulic Variable
            Timing Control (VTC). Valves transition autonomously between swirl fuel-economy, mid-range advance,
            and high-lift racing cam profiles without stepped mechanical hesitation.
          </p>
        </div>

        {/* Interactive Control Console */}
        <div className="interactive-console">
          <div className="console-top-bar">
            <div className="console-status-left">
              <span className="dot active-dot" />
              <span className="console-label">OPERATING REGIME: {currentModeData.code}</span>
            </div>
            <div className="mode-selector" role="tablist" aria-label="i-VTEC valvetrain operating regimes">
              {POWERTRAIN_MODES.map((mode, index) => {
                const isSelected = activeMode === mode.id;
                const handleKeyDown = (e: React.KeyboardEvent) => {
                  let targetIndex = index;
                  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    targetIndex = (index + 1) % POWERTRAIN_MODES.length;
                  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    targetIndex = (index - 1 + POWERTRAIN_MODES.length) % POWERTRAIN_MODES.length;
                  } else if (e.key === 'Home') {
                    e.preventDefault();
                    targetIndex = 0;
                  } else if (e.key === 'End') {
                    e.preventDefault();
                    targetIndex = POWERTRAIN_MODES.length - 1;
                  } else {
                    return;
                  }
                  const nextMode = POWERTRAIN_MODES[targetIndex];
                  setActiveMode(nextMode.id);
                  const nextBtn = document.getElementById(`tab-${nextMode.id}`);
                  nextBtn?.focus();
                };

                return (
                  <button
                    key={mode.id}
                    type="button"
                    role="tab"
                    id={`tab-${mode.id}`}
                    tabIndex={isSelected ? 0 : -1}
                    aria-selected={isSelected}
                    aria-controls={`panel-${mode.id}`}
                    onClick={() => setActiveMode(mode.id)}
                    onKeyDown={handleKeyDown}
                    className={`mode-btn ${isSelected ? 'mode-btn-active' : ''}`}
                  >
                    <span className="btn-indicator">{isSelected ? '●' : '○'}</span>
                    <span>{mode.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SVG i-VTEC & VTEC Mechanical Schematic */}
          <div className="schematic-canvas">
            <svg
              viewBox="0 0 920 380"
              className="schematic-svg"
              aria-label={`Schematic representation of 2003 Honda Accord ${currentModeData.label} valvetrain operation`}
            >
              <defs>
                {/* Flow Arrow Markers */}
                <marker
                  id="flow-arrow-active"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--text)" />
                </marker>
                <marker
                  id="flow-arrow-inactive"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#343438" />
                </marker>
              </defs>

              {/* Background Engineering Grid */}
              <g className="schematic-grid" opacity="0.3">
                <line x1="40" y1="90" x2="880" y2="90" stroke="#343438" strokeDasharray="2 4" />
                <line x1="40" y1="210" x2="880" y2="210" stroke="#343438" strokeDasharray="2 4" />
                <line x1="40" y1="310" x2="880" y2="310" stroke="#343438" strokeDasharray="2 4" />
              </g>

              {/* FLOW PATH 1: Throttle Body -> Intake Plenum */}
              <path
                id="path-throttle-plenum"
                d="M 190 90 L 290 90"
                className="flow-path path-active"
                markerEnd="url(#flow-arrow-active)"
              />

              {/* FLOW PATH 2: Plenum -> VTC Cam Sprocket (Active in Mid & High) */}
              <path
                id="path-plenum-vtc"
                d="M 440 90 L 530 90"
                className={`flow-path ${activeMode !== 'low-rpm' ? 'path-active' : 'path-dim'}`}
                markerEnd={activeMode !== 'low-rpm' ? 'url(#flow-arrow-active)' : 'url(#flow-arrow-inactive)'}
              />

              {/* FLOW PATH 3: Oil Control Spool -> Rocker Pins (Active in High-RPM) */}
              <path
                id="path-vtec-oil"
                d="M 680 90 L 760 90"
                className={`flow-path ${activeMode === 'high-rpm' ? 'path-active' : 'path-dim'}`}
                markerEnd={activeMode === 'high-rpm' ? 'url(#flow-arrow-active)' : 'url(#flow-arrow-inactive)'}
              />

              {/* FLOW PATH 4: Hydraulic Pin -> Cylinder Valves (Active in High-RPM) */}
              <path
                id="path-rocker-valve"
                d="M 835 145 L 835 220 L 530 220"
                className={`flow-path ${activeMode === 'high-rpm' ? 'path-active' : 'path-dim'}`}
                markerEnd={activeMode === 'high-rpm' ? 'url(#flow-arrow-active)' : 'url(#flow-arrow-inactive)'}
              />

              {/* FLOW PATH 5: Differential Valve Swirl Motion (Active in Low-RPM) */}
              <path
                id="path-swirl-motion"
                d="M 365 145 L 365 220 L 410 220"
                className={`flow-path ${activeMode === 'low-rpm' ? 'path-active' : 'path-dim'}`}
                markerEnd={activeMode === 'low-rpm' ? 'url(#flow-arrow-active)' : 'url(#flow-arrow-inactive)'}
              />

              {/* FLOW PATH 6: VTC Continuous Phasing (Active in Mid-RPM) */}
              <path
                id="path-vtc-advance"
                d="M 605 145 L 605 310 L 410 310"
                className={`flow-path ${activeMode === 'mid-rpm' ? 'path-active' : 'path-dim'}`}
                markerEnd={activeMode === 'mid-rpm' ? 'url(#flow-arrow-active)' : 'url(#flow-arrow-inactive)'}
              />

              {/* NODES */}

              {/* Node 1: Throttle Body & DBW Stepper */}
              <g className="node-group" transform="translate(50, 40)">
                <rect
                  width="140"
                  height="100"
                  fill="#1A1A1C"
                  stroke="#343438"
                  strokeWidth="1.2"
                />
                <text x="70" y="30" textAnchor="middle" fill="var(--technical)" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="1">
                  INDUCTION
                </text>
                <text x="70" y="52" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="500" fontFamily="var(--font-sans)">
                  THROTTLE BODY
                </text>
                <text x="70" y="70" textAnchor="middle" fill="var(--muted)" fontSize="11" fontFamily="var(--font-mono)">
                  DRIVE-BY-WIRE
                </text>
                <rect x="25" y="78" width="90" height="12" fill="rgba(52, 52, 56, 0.4)" />
                <text x="70" y="87" textAnchor="middle" fill="var(--technical)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.8">
                  ELECTRONIC ACTUATOR
                </text>
              </g>

              {/* Node 2: Dual-Stage Intake Plenum */}
              <g className="node-group" transform="translate(290, 40)">
                <rect
                  width="150"
                  height="100"
                  fill="#1A1A1C"
                  stroke={activeMode === 'high-rpm' ? 'var(--text)' : '#343438'}
                  strokeWidth="1.2"
                />
                <text x="75" y="30" textAnchor="middle" fill="var(--technical)" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="1">
                  AIR MANIFOLD
                </text>
                <text x="75" y="52" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="500" fontFamily="var(--font-sans)">
                  DUAL-STAGE PLENUM
                </text>
                <text x="75" y="70" textAnchor="middle" fill="var(--muted)" fontSize="11" fontFamily="var(--font-mono)">
                  {activeMode === 'high-rpm' ? 'SHORT RUNNERS OPEN' : 'LONG RUNNERS ACTIVE'}
                </text>
                <rect
                  x="20"
                  y="78"
                  width="110"
                  height="12"
                  fill={activeMode === 'high-rpm' ? 'rgba(201, 59, 43, 0.2)' : 'rgba(52, 52, 56, 0.4)'}
                />
                <text
                  x="75"
                  y="87"
                  textAnchor="middle"
                  fill={activeMode === 'high-rpm' ? 'var(--accent)' : 'var(--technical)'}
                  fontSize="9"
                  fontFamily="var(--font-mono)"
                  letterSpacing="0.8"
                >
                  {activeMode === 'high-rpm' ? 'RESONANCE CHARGE ON' : 'VELOCITY CHARGE ON'}
                </text>
              </g>

              {/* Node 3: VTC Phase Sprocket (50° Advance) */}
              <g className="node-group" transform="translate(530, 40)">
                <rect
                  width="150"
                  height="100"
                  fill="#1A1A1C"
                  stroke={activeMode === 'mid-rpm' || activeMode === 'high-rpm' ? 'var(--text)' : '#343438'}
                  strokeWidth="1.2"
                />
                <text x="75" y="30" textAnchor="middle" fill="var(--technical)" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="1">
                  CAM PHASING
                </text>
                <text x="75" y="52" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="500" fontFamily="var(--font-sans)">
                  VTC SPROCKET
                </text>
                <text x="75" y="70" textAnchor="middle" fill="var(--muted)" fontSize="11" fontFamily="var(--font-mono)">
                  {currentModeData.vtcAngle}
                </text>
                <rect
                  x="20"
                  y="78"
                  width="110"
                  height="12"
                  fill={activeMode !== 'low-rpm' ? 'rgba(201, 59, 43, 0.2)' : 'rgba(52, 52, 56, 0.4)'}
                />
                <text
                  x="75"
                  y="87"
                  textAnchor="middle"
                  fill={activeMode !== 'low-rpm' ? 'var(--accent)' : 'var(--technical)'}
                  fontSize="9"
                  fontFamily="var(--font-mono)"
                  letterSpacing="0.8"
                >
                  HYDRAULIC VANE ADVANCE
                </text>
              </g>

              {/* Node 4: 3-Rocker Arm & Hydraulic Pin */}
              <g className="node-group" transform="translate(760, 40)">
                <rect
                  width="150"
                  height="100"
                  fill="#1A1A1C"
                  stroke={activeMode === 'high-rpm' ? 'var(--text)' : '#343438'}
                  strokeWidth="1.2"
                />
                <text x="75" y="30" textAnchor="middle" fill="var(--technical)" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="1">
                  VALVE LIFT
                </text>
                <text x="75" y="52" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="500" fontFamily="var(--font-sans)">
                  VTEC ROCKER ARMS
                </text>
                <text x="75" y="70" textAnchor="middle" fill={activeMode === 'high-rpm' ? 'var(--accent)' : 'var(--muted)'} fontSize="10" fontFamily="var(--font-mono)">
                  {activeMode === 'high-rpm' ? 'PINS LOCKED (10.5mm)' : 'PINS DISENGAGED'}
                </text>
                <rect
                  x="20"
                  y="78"
                  width="110"
                  height="12"
                  fill={activeMode === 'high-rpm' ? 'rgba(201, 59, 43, 0.25)' : 'rgba(52, 52, 56, 0.4)'}
                />
                <text
                  x="75"
                  y="87"
                  textAnchor="middle"
                  fill={activeMode === 'high-rpm' ? 'var(--accent)' : 'var(--technical)'}
                  fontSize="9"
                  fontFamily="var(--font-mono)"
                  letterSpacing="0.8"
                >
                  {activeMode === 'high-rpm' ? '60 PSI OIL PRESSURE' : 'SLIDING PIN AT REST'}
                </text>
              </g>

              {/* Node 5: Combustion Chamber & Differential Valves */}
              <g className="node-group" transform="translate(410, 185)">
                <rect
                  width="240"
                  height="75"
                  fill="#1A1A1C"
                  stroke={activeMode === 'high-rpm' ? 'var(--text)' : '#343438'}
                  strokeWidth="1.2"
                />
                <text x="120" y="24" textAnchor="middle" fill="var(--technical)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.8">
                  COMBUSTION DYNAMICS
                </text>
                <text x="120" y="45" textAnchor="middle" fill="var(--text)" fontSize="13" fontWeight="500" fontFamily="var(--font-sans)">
                  {activeMode === 'low-rpm' ? 'AXIAL SWIRL VORTEX (3mm / 8mm)' : activeMode === 'mid-rpm' ? 'MAX VOLUMETRIC CHARGE' : 'HIGH-LIFT MAXIMUM AIRFLOW (10.5mm)'}
                </text>
                <text
                  x="120"
                  y="63"
                  textAnchor="middle"
                  fill={activeMode === 'high-rpm' ? 'var(--accent)' : 'var(--technical)'}
                  fontSize="9"
                  fontFamily="var(--font-mono)"
                  letterSpacing="0.8"
                >
                  {currentModeData.powerOutput}
                </text>
              </g>

              {/* Node 6: Engine Output Crankshaft & Wheels */}
              <g className="node-group" transform="translate(250, 280)">
                <rect
                  width="160"
                  height="60"
                  fill="#1A1A1C"
                  stroke="#343438"
                  strokeWidth="1.2"
                />
                <text x="80" y="24" textAnchor="middle" fill="var(--technical)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.8">
                  TRANSMISSION
                </text>
                <text x="80" y="44" textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="500" fontFamily="var(--font-mono)">
                  5-SPEED MT / 5-AT
                </text>
              </g>

              <g className="node-group" transform="translate(480, 280)">
                <rect
                  width="170"
                  height="60"
                  fill="#1A1A1C"
                  stroke="var(--text)"
                  strokeWidth="1.2"
                />
                <text x="85" y="24" textAnchor="middle" fill="var(--technical)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.8">
                  DRIVE WHEELS
                </text>
                <text x="85" y="44" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="500" fontFamily="var(--font-mono)">
                  FRONT-WHEEL DRIVE
                </text>
              </g>
            </svg>
          </div>

          {/* Educational Technical Explanatory Panel */}
          <div
            id={`panel-${activeMode}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeMode}`}
            className="explanation-panel"
          >
            <div className="explanation-left">
              <div className="flow-path-title">ACTIVE VALVETRAIN &amp; INDUCTION PATH:</div>
              <div className="flow-path-string">{currentModeData.flowPath}</div>
              <p className="flow-description">{currentModeData.description}</p>
            </div>

            <div className="explanation-right">
              <div className="state-summary-grid">
                <div className="state-row">
                  <span className="state-label">CAM PROFILE:</span>
                  <span className="state-val">{currentModeData.camState}</span>
                </div>
                <div className="state-row">
                  <span className="state-label">VTC CAM ANGLE:</span>
                  <span className="state-val">{currentModeData.vtcAngle}</span>
                </div>
                <div className="state-row">
                  <span className="state-label">ROCKER STATUS:</span>
                  <span className="state-val">{currentModeData.rockerState}</span>
                </div>
                <div className="state-row">
                  <span className="state-label">INTAKE PLENUM:</span>
                  <span className="state-val">{currentModeData.intakePlenum}</span>
                </div>
                <div className="state-row">
                  <span className="state-label">RPM SPECTRUM:</span>
                  <span className="state-val">{currentModeData.rpmRange}</span>
                </div>
              </div>
              <div className="efficiency-note">
                <span className="eff-tag">DELIVERED OUTPUT RATING</span>
                <span className="eff-val">{currentModeData.powerOutput}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}