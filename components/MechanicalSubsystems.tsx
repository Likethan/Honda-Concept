'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface SubsystemItem {
  id: string;
  tag: string;
  figure: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  alt: string;
  specs: { label: string; value: string }[];
  engineeringNotes: string;
}

const MECHANICAL_SUBSYSTEMS: SubsystemItem[] = [
  {
    id: 'engine',
    tag: 'SUBSYSTEM 01 / POWERTRAIN',
    figure: 'FIG 4.1',
    title: 'K24A4 2.4L DOHC i-VTEC ENGINE',
    subtitle: '2,354 CC 16-VALVE DUAL OVERHEAD CAMSHAFT',
    desc: 'Precision factory cutaway exposing the K24A4 architecture: dual overhead camshafts, continuous Variable Timing Control (VTC) on the intake cam, 60 PSI hydraulic rocker lockup pin, high-strength timing chain, and helical swirl intake ports.',
    image: '/images/mechanical/k24a4-engine.jpg',
    alt: 'Honda K24A4 2.4L DOHC i-VTEC engine cutaway with intake/exhaust camshafts, i-VTEC mechanism, water pump, and timing chain callouts',
    specs: [
      { label: 'Valvetrain Type', value: 'DOHC 16-Valve i-VTEC with VTC' },
      { label: 'Displacement', value: '2,354 cc (87.0 mm bore × 99.0 mm stroke)' },
      { label: 'Compression Ratio', value: '9.7:1 precision cast aluminum pistons' },
      { label: 'VTC Operating Range', value: '0° – 50° continuous advance' },
      { label: 'VTEC Lockup Pressure', value: '60 PSI hydraulic pin engagement' },
      { label: 'Output Benchmark', value: '160 HP @ 5,500 RPM / 161 lb-ft @ 4,500 RPM' },
    ],
    engineeringNotes:
      'The K24A4 block uses high-pressure die-cast aluminum with cast-iron cylinder liners. Counter-rotating balance shafts eliminate secondary engine vibrations, while the deep-skirt crankcase provides exceptional lower-end rigidity.',
  },
  {
    id: 'driveshaft',
    tag: 'SUBSYSTEM 02 / DRIVETRAIN',
    figure: 'FIG 4.2',
    title: 'EQUAL-LENGTH HALF-SHAFTS & CV AXLES',
    subtitle: '28-TOOTH WHEEL / 32-TOOTH TRANS SPLINED STEEL',
    desc: 'Front-wheel-drive driveshaft and constant-velocity (CV) joint assembly. Honda engineers utilized an intermediate half-shaft layout with equal-length left and right axles to equalize driveshaft angles, eliminating torque steer during full-throttle acceleration.',
    image: '/images/mechanical/driveshaft-halfshaft.jpg',
    alt: '2003 Honda Accord CM5 FWD driveshaft, inner and outer CV joints, and splined axle assembly with technical callouts',
    specs: [
      { label: 'Axle Configuration', value: 'Equal-length intermediate half-shaft layout' },
      { label: 'Wheel Splines', value: '28-Tooth induction-hardened steel' },
      { label: 'Transmission Splines', value: '32-Tooth differential interface' },
      { label: 'Outer CV Joint', value: 'High-articulation Rzeppa fixed ball-joint' },
      { label: 'Inner CV Joint', value: 'Plunging tripod joint with needle bearings' },
      { label: 'Boot Material', value: 'Heavy-duty chloroprene with stainless bands' },
    ],
    engineeringNotes:
      'Equalizing the driveshaft angles between the left and right wheels eliminates asymmetric torque steer forces under hard VTEC engagement, ensuring arrow-straight stability even on uneven road surfaces.',
  },
  {
    id: 'suspension',
    tag: 'SUBSYSTEM 03 / SUSPENSION & BRAKES',
    figure: 'FIG 4.3',
    title: 'FRONT DOUBLE-WISHBONE & DISC BRAKES',
    subtitle: 'RACE-DERIVED FORGED ALLOY A-ARM & VENTILATED ROTORS',
    desc: 'Race-derived front double-wishbone suspension assembly featuring a forged aluminum upper wishbone, high-rigidity lower control arm, anti-dive geometry, coilover spring/damper, steering knuckle, subframe mount, and multi-piston disc brake caliper.',
    image: '/images/mechanical/double-wishbone-suspension.jpg',
    alt: 'Race-derived front double-wishbone suspension assembly with forged aluminum upper wishbone, coilover damper, and disc brake caliper',
    specs: [
      { label: 'Suspension Type', value: '4-Wheel Independent Double-Wishbone' },
      { label: 'Upper Control Arm', value: 'Forged high-tensile aluminum alloy A-arm' },
      { label: 'Lower Arm Geometry', value: 'Wide-base stamped steel with anti-dive angle' },
      { label: 'Braking Hardware', value: 'Ventilated front disc rotors + multi-piston caliper' },
      { label: 'Kinematic Behavior', value: 'Negative camber gain under body roll' },
      { label: 'Subframe Mount', value: 'Rubber-isolated rigid front perimeter subframe' },
    ],
    engineeringNotes:
      'Unlike cost-reduced MacPherson struts used by competitors, Honda double-wishbones decouple shock-absorbing loads from steering knuckle rotation, keeping the tire contact patch strictly perpendicular to the road through extreme corners.',
  },
  {
    id: 'chassis',
    tag: 'SUBSYSTEM 04 / MONOCOQUE CHASSIS',
    figure: 'FIG 4.4',
    title: 'HIGH-TENSILE MONOCOQUE CHASSIS BLUEPRINT',
    subtitle: '+27% TORSIONAL RIGIDITY / 48% HIGH-STRENGTH STEEL',
    desc: 'SAE-standard structural CAD blueprint illustrating the CM5/CM6 monocoque architecture: hydroformed 3-stage front crush rails, laser-welded variable-gauge B-pillars, boxed rocker longitudinal reinforcements, and isolated rear 5-link subframe.',
    image: '/images/mechanical/chassis-architecture.jpg',
    alt: '2003 Honda Accord CM5 high-tensile steel monocoque chassis blueprint showing hydroformed front rails, laser-welded B-pillars and rear subframe',
    specs: [
      { label: 'Torsional Stiffness', value: '+27% increase over 6th Gen (1,480 N·m/deg)' },
      { label: 'Bending Rigidity', value: '+13% increase over previous platform' },
      { label: 'High-Strength Steel', value: '48% of total unibody curb structure (HSS)' },
      { label: 'Wheelbase Geometry', value: '2,740 mm (107.9 in) high-speed footprint' },
      { label: 'Overall Length', value: '4,813 mm (189.5 in)' },
      { label: 'Front Crush Rails', value: 'Hydroformed 3-stage progressive deceleration' },
    ],
    engineeringNotes:
      'Continuous structural laser-welding along the boxed rocker sills and A/B/C-pillar structural rings creates an ultra-rigid safety cell protecting passengers while providing an unyielding foundation for the race-derived suspension.',
  },
];

export default function MechanicalSubsystems() {
  const [activeModalItem, setActiveModalItem] = useState<SubsystemItem | null>(null);

  return (
    <section id="subsystems" className="section mechanical-subsystems-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta-header">
          <div className="section-meta-left">
            <span className="section-index">04</span>
            <h2 className="section-title">MECHANICAL SUBSYSTEMS</h2>
            <span className="section-context">CHASSIS, POWERTRAIN &amp; RUNNING GEAR</span>
          </div>
          <span className="section-context">AUTHENTIC FACTORY ARCHIVE BLUEPRINTS</span>
        </div>

        {/* Section Intro Editorial */}
        <div className="subsystems-intro-bar">
          <p className="subsystems-lead">
            The mechanical purity of the 2003 Honda Accord (CM5) is revealed through its core running gear. Below are
            the authentic technical cutaways and blueprints documenting the K24A4 engine, equal-length driveshaft
            assembly, race-derived double-wishbone geometry, and high-tensile unibody monocoque.
          </p>
        </div>

        {/* 2x2 Subsystems Grid */}
        <div className="subsystems-grid">
          {MECHANICAL_SUBSYSTEMS.map((item) => (
            <article key={item.id} className="subsystem-card interactive-tile" onClick={() => setActiveModalItem(item)}>
              {/* Photo Frame */}
              <div className="subsystem-media-box">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={675}
                  className="subsystem-photo"
                />
                <div className="subsystem-overlay">
                  <span className="inspect-badge">[ + CLICK TO EXPAND BLUEPRINT ]</span>
                </div>
                <div className="subsystem-fig-tag">
                  <span>{item.figure}</span>
                </div>
              </div>

              {/* Subsystem Details */}
              <div className="subsystem-content">
                <div className="subsystem-tag-row">
                  <span className="subsystem-tag">{item.tag}</span>
                  <span className="subsystem-code">{item.subtitle}</span>
                </div>

                <h3 className="subsystem-title">{item.title}</h3>
                <p className="subsystem-desc">{item.desc}</p>

                {/* Technical Specs 2x2 or 2x3 Grid */}
                <div className="subsystem-spec-grid">
                  {item.specs.slice(0, 4).map((spec, sIdx) => (
                    <div key={sIdx} className="subsystem-spec-cell">
                      <span className="subsystem-spec-lbl">{spec.label}</span>
                      <span className="subsystem-spec-val">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="subsystem-notes-bar">
                  <span className="notes-icon">▲</span>
                  <span className="notes-text">{item.engineeringNotes}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for Deep Inspection */}
        {activeModalItem && (
          <div
            className="subsystem-modal-backdrop"
            onClick={() => setActiveModalItem(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activeModalItem.title}
          >
            <div className="subsystem-modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="subsystem-modal-header">
                <div>
                  <span className="modal-fig">{activeModalItem.figure}</span>
                  <h3 className="modal-title">{activeModalItem.title}</h3>
                  <span className="modal-subtitle">{activeModalItem.subtitle}</span>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setActiveModalItem(null)}
                  aria-label="Close modal"
                >
                  ✕ CLOSE [ESC]
                </button>
              </div>

              <div className="subsystem-modal-body">
                <div className="modal-media-frame">
                  <Image
                    src={activeModalItem.image}
                    alt={activeModalItem.alt}
                    width={1600}
                    height={900}
                    className="modal-img"
                  />
                </div>

                <div className="modal-info-panel">
                  <h4 className="modal-info-heading">TECHNICAL SPECIFICATION MATRIX</h4>
                  <div className="modal-spec-list">
                    {activeModalItem.specs.map((spec, idx) => (
                      <div key={idx} className="modal-spec-row">
                        <span className="modal-spec-k">{spec.label}</span>
                        <span className="modal-spec-v">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="modal-engineering-thesis">
                    <h5 className="thesis-title">HONDA R&amp;D ENGINEERING THESIS:</h5>
                    <p className="thesis-text">{activeModalItem.engineeringNotes}</p>
                    <p className="thesis-subtext">{activeModalItem.desc}</p>
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
