'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>('platform');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['platform', 'engineering', 'powertrain', 'subsystems', 'cabin', 'details', 'specifications', 'evolution'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const navItems = [
    { href: '#platform', id: 'platform', label: '01 PLATFORM' },
    { href: '#engineering', id: 'engineering', label: '02 ENGINEERING' },
    { href: '#powertrain', id: 'powertrain', label: '03 POWERTRAIN' },
    { href: '#subsystems', id: 'subsystems', label: '04 SUBSYSTEMS' },
    { href: '#cabin', id: 'cabin', label: '05 CABIN' },
    { href: '#details', id: 'details', label: '06 DETAILS' },
    { href: '#specifications', id: 'specifications', label: '07 SPECS' },
  ];

  return (
    <header className={`header-root ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Identifiers */}
        <div className="brand-group">
          <Link href="/" className="brand-main">
            <span className="brand-maker">HONDA</span>
            <span className="brand-divider">/</span>
            <span className="brand-model">ACCORD</span>
          </Link>
          <div className="brand-sub">
            <span className="gen-tag">7TH GENERATION (2003)</span>
            <span className="bullet">·</span>
            <span className="archive-tag">ENGINEERING ARCHIVE</span>
          </div>
        </div>

        {/* Center Document Reference */}
        <div className="doc-reference">
          <span className="doc-dot" />
          <span>DOC REF: CM5-CM6 / 2003-MY TECHNICAL DOSSIER</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Engineering Sections">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                  >
                    <span className="nav-label">{item.label}</span>
                    {isActive && <span className="nav-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={handlePrint}
            className="export-spec-btn"
            title="Export specification sheet formatted for print"
          >
            [ EXPORT SPEC SHEET ]
          </button>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="mobile-toggle"
          aria-label={mobileMenuOpen ? 'Close index' : 'Open document index'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="mobile-toggle-text">{mobileMenuOpen ? 'CLOSE' : 'INDEX'}</span>
          <span className="mobile-toggle-icon">{mobileMenuOpen ? '×' : '≡'}</span>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="mobile-panel">
          <div className="container mobile-panel-inner">
            <div className="mobile-meta">
              <span>INDEX NAVIGATION</span>
              <span>MARKET: US SPEC</span>
            </div>
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${activeSection === item.id ? 'mobile-nav-active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    <span className="arrow">→</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#evolution"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>05 EVOLUTION</span>
                  <span className="arrow">→</span>
                </a>
              </li>
            </ul>

            <div className="mobile-action-bar">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handlePrint();
                }}
                className="export-spec-btn w-full"
              >
                [ EXPORT SPEC SHEET ]
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
