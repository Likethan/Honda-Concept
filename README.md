# Honda Accord Engineering Archive & Technical Showcase

An editorial, high-precision engineering showcase and technical archive celebrating the **7th Generation Honda Accord (2003 / chassis codes CM5 & CM6)**.

Built with **Next.js 14 (App Router) + TypeScript + Vanilla CSS**, reflecting the aesthetics of automotive engineering publications (SAE) and OEM technical archives.

---

## Key Features

- **Chassis Architecture & Telemetry**:
  - Race-derived 4-wheel double-wishbone suspension kinematics
  - High-tensile unibody monocoque rigidity analysis (+27% torsional stiffness)
  - 0.30 Cd low-cowl wedge aerodynamic integration

- **Interactive i-VTEC Valvetrain Schematic**:
  - Dynamic simulation of Honda's variable valve timing and cam-phasing architecture
  - Three operating regimes:
    1. *Low-RPM Swirl (< 2,500 RPM)*: Single-valve 3mm lift, helical swirl intake
    2. *Mid-RPM VTC Advance (2,500–5,500 RPM)*: Continuous intake camshaft advance up to 50°
    3. *High-RPM VTEC Lockup (> 5,500 RPM)*: 60 PSI hydraulic rocker pin engagement unlocking the 10.5 mm high-lift camshaft lobe

- **Driver Cockpit & NVH Architecture**:
  - Panoramic visibility geometry (-25 mm lowered cowl datum line, 73 mm slim A-pillars)
  - Interactive acoustic engineering accordion (hydraulic engine mounts, melt-sheet floor dampening, triple-sealed doors)

- **Technical Macro Inspection Modal**:
  - High-resolution macro inspection with certified OEM engineering notes:
    - Electroluminescent LED progressive illumination instruments
    - Aerodynamic decklid and sharp taillamp separation edge
    - Dual-zone center stack switchgear
    - Double-wishbone wedge stance

- **Certified Specification Matrix**:
  - Side-by-side technical comparison between the **EX 2.4L DOHC i-VTEC (CM5)** and **EX-V6 3.0L SOHC VTEC (CM6)** across 25+ certified parameters.

- **Evolution Timeline**:
  - Chronological 11-generation archive from 1976 to present, spotlighting Generation 07 (2003–2007) with era filtering (All, Classic, Modern).

---

## Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Native CSS Design System with CSS variables and custom typography
- **Typography**: Space Grotesk & JetBrains Mono

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.17+ recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Likethan/Honda-Concept.git

# Navigate to project directory
cd Honda-Concept

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

```bash
npm run build
npm run start
```

---

## Project Structure

```
├── app/
│   ├── globals.css        # Core engineering design system and styling tokens
│   ├── layout.tsx         # Root layout with SEO and metadata
│   └── page.tsx           # Main showcase sequence
├── components/
│   ├── CabinSection.tsx       # Cockpit sightlines and acoustic NVH accordion
│   ├── DetailGallery.tsx      # Macro image grid and technical inspection modal
│   ├── EditorialIntro.tsx     # Engineering philosophy and Sayama R&D thesis
│   ├── EngineeringSection.tsx # Suspension, valvetrain, and monocoque disciplines
│   ├── EvolutionTimeline.tsx  # 11-generation chronology with era filtering
│   ├── Footer.tsx             # Assembly provenance and documentation references
│   ├── Header.tsx             # Sticky navigation and document index
│   ├── Hero.tsx               # Platform dimensions, telemetry, and unibody profile
│   ├── PowertrainDiagram.tsx  # Interactive i-VTEC cam-phasing schematic
│   └── SpecMatrix.tsx         # EX 2.4L vs EX-V6 3.0L comparison matrix
├── data/
│   └── accord.ts          # Technical specifications, dimensions, and copy
└── public/
    └── images/            # Authentic OEM studio photography and detail imagery
```

---

## License

This project is open source and available under the [MIT License](LICENSE).
