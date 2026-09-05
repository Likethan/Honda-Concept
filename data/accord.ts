export type SpecRow = {
  category: string;
  parameter: string;
  ex4Cyl: string;
  exV6: string;
  notes?: string;
};

export type GenerationEntry = {
  gen: string;
  years: string;
  title: string;
  chassisCode: string;
  majorEngineering: string;
  powertrain: string;
  highlight?: boolean;
  era: 'classic' | 'modern';
};

export type DetailItem = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  aspect: 'tall' | 'standard' | 'wide';
  technicalSpecs: {
    label: string;
    value: string;
  }[];
  engineeringNotes: string;
  functionalRole: string;
};

export type NVHItem = {
  id: string;
  title: string;
  subtitle: string;
  detail: string;
  specification: string;
};

export type PowertrainMode = 'low-rpm' | 'mid-rpm' | 'high-rpm';

export type PowertrainModeData = {
  id: PowertrainMode;
  code: string;
  label: string;
  flowPath: string;
  description: string;
  camState: string;
  vtcAngle: string;
  rockerState: string;
  intakePlenum: string;
  rpmRange: string;
  powerOutput: string;
};

export const ACCORD_DIMENSIONS = {
  wheelbase: '2,740 mm (107.9 in)',
  length: '4,813 mm (189.5 in)',
  width: '1,816 mm (71.5 in)',
  height: '1,450 mm (57.1 in)',
  trackFront: '1,555 mm (61.2 in)',
  trackRear: '1,555 mm (61.2 in)',
  curbWeightEx4Cyl: '1,440 kg (3,175 lbs)',
  curbWeightExV6: '1,530 kg (3,375 lbs)',
  dragCoefficient: '0.30 Cd (Sedan) / 0.29 Cd (Coupe)',
  weightDistribution: '60 / 40 (Front / Rear)',
};

export const POWERTRAIN_SPECS = {
  engineType4Cyl: '2.4-Liter DOHC 16-Valve i-VTEC In-Line 4-Cylinder (K24A4)',
  displacement4Cyl: '2,354 cc (Bore: 87.0 mm / Stroke: 99.0 mm)',
  compressionRatio4Cyl: '9.7 : 1',
  powerOutput4Cyl: '160 hp @ 5,500 rpm / 161 lb-ft @ 4,500 rpm',
  engineTypeV6: '3.0-Liter SOHC 24-Valve VTEC 60° V6 (J30A4)',
  displacementV6: '2,997 cc (Bore: 86.0 mm / Stroke: 86.0 mm)',
  compressionRatioV6: '10.0 : 1',
  powerOutputV6: '240 hp @ 6,250 rpm / 212 lb-ft @ 5,000 rpm',
  valveManagement: 'i-VTEC Variable Valve Timing & Lift + 50° Continuous VTC',
  throttleSystem: 'Drive-by-Wire (DBW) Electronic Throttle Control (V6)',
  transmissions: '5-Speed Close-Ratio Manual / 5-Speed Electronic Automatic with Grade Logic',
  suspensionLayout: '4-Wheel Independent Double-Wishbone Suspension System',
};

export const POWERTRAIN_MODES: PowertrainModeData[] = [
  {
    id: 'low-rpm',
    code: 'REGIME 01 / IDLE & URBAN (< 2,500 RPM)',
    label: 'LOW-RPM SWIRL',
    flowPath: 'Single Intake Valve Restricted (3mm lift) → Helical Swirl Vortex → Ultra-Lean Combustion',
    description:
      'At idle and low cruising velocities (< 2,500 rpm), primary and secondary rocker arms cycle independently. One intake valve opens to 8.0 mm while the companion intake valve cracks open just 3.0 mm. This differential valve lift induces a high-velocity axial swirl inside the cylinder chamber, ensuring rapid flame propagation and minimal unburnt hydrocarbon emissions.',
    camState: 'PRIMARY CAM PROFILE (LOW-LIFT MODE)',
    vtcAngle: '0° ADVANCE (FULL RETARD / MINIMUM OVERLAP)',
    rockerState: 'DECOUPLED (HYDRAULIC PINS DISENGAGED)',
    intakePlenum: 'LONG RUNNERS (HIGH AIR-COLUMN MOMENTUM)',
    rpmRange: '800 – 2,500 RPM',
    powerOutput: 'Ultra-Clean Idle & Strong Off-Idle Urban Torque',
  },
  {
    id: 'mid-rpm',
    code: 'REGIME 02 / CONTINUOUS VTC ADVANCE (2,500–4,500 RPM)',
    label: 'MID-RANGE VTC',
    flowPath: 'ECU Pulse Oil Valve → VTC Vane Sprocket → 50° Continuously Variable Intake Cam Advance',
    description:
      'Under mid-throttle acceleration and sustained highway cruising, Honda’s electro-hydraulic Variable Timing Control (VTC) actuator dynamically advances the intake camshaft up to 50 degrees relative to the crankshaft. This creates beneficial internal exhaust gas recirculation (EGR) to suppress NOx emissions while dramatically increasing volumetric cylinder charge.',
    camState: 'PRIMARY LOBES + DYNAMIC CAM ROTATION',
    vtcAngle: 'UP TO 50° CONTINUOUSLY VARIABLE ADVANCE',
    rockerState: 'DECOUPLED (PRE-PRESSURIZING OIL RAIL)',
    intakePlenum: 'INTERMEDIATE DYNAMIC WAVE RESONANCE',
    rpmRange: '2,500 – 4,500 RPM',
    powerOutput: 'Broad Flat Torque Plateau (161 lb-ft @ 4,500 rpm)',
  },
  {
    id: 'high-rpm',
    code: 'REGIME 03 / HIGH-RPM VTEC LOCKUP (> 4,500–6,800 RPM)',
    label: 'HIGH-RPM VTEC',
    flowPath: 'VTEC Solenoid Spool Opens (60 PSI) → Steel Pin Locks Rockers → 10.5 mm High-Lift Racing Cam',
    description:
      'Crossing 4,500 rpm under positive throttle demand, the ECU commands the VTEC spool valve to channel high-pressure lubricating oil into the rocker shafts. Hardened steel synchronizing pins slide across, locking primary, mid, and secondary rocker arms into a unified bridge. All intake valves now track the center high-lift, long-duration racing cam profile (10.5 mm lift), accompanied by dual-stage intake runner butterflies opening wide for peak volumetric breathing.',
    camState: 'RACING HIGH-LIFT / LONG-DURATION LOBES',
    vtcAngle: 'OPTIMIZED ADVANCE FOR MAXIMUM PEAK POWER',
    rockerState: 'LOCKED (SYNCHRONIZING PINS HYDRAULICALLY ENGAGED)',
    intakePlenum: 'SHORT RUNNERS + SECONDARY PLENUM BUTTERFLIES OPEN',
    rpmRange: '4,500 – 6,800 RPM (REDLINE)',
    powerOutput: '160 HP (K24 4-Cyl) / 240 HP (J30A4 V6)',
  },
];

export const NVH_ITEMS: NVHItem[] = [
  {
    id: '01',
    title: 'PROGRESSIVE LED ELECTROLUMINESCENT GAUGES',
    subtitle: 'Three-stage ceremonial instrument illumination',
    detail:
      'Debuting for the 2003 model year, the Accord incorporated an automotive-first progressive illumination ceremony upon door entry. Opening the driver door awakens the gauge cluster in three distinct stages: first the needle center rings glow softly, followed by vivid red pointer needles sweeping to life, and finally high-contrast white dial markings illuminate through smoked anti-glare acrylic lenses.',
    specification: 'Three-stage startup ceremony / Vivid crimson LED pointer needles / 0.05 ms luminescence trigger',
  },
  {
    id: '02',
    title: 'FOUR-WHEEL INDEPENDENT DOUBLE-WISHBONE CHASSIS',
    subtitle: 'Race-derived suspension kinematics & zero camber deflection',
    detail:
      'Unlike conventional cost-reduced MacPherson struts, the 2003 Accord employs genuine race-derived independent double-wishbone geometry at all four wheels. The front low-arm configuration provides zero camber deflection and anti-dive kinematics under heavy braking. In the rear, a 5-link independent double-wishbone system with compliance bushings keeps the tire contact patch strictly perpendicular to the asphalt.',
    specification: 'Front independent double-wishbone / Rear 5-link double-wishbone / Anti-dive geometry',
  },
  {
    id: '03',
    title: 'DUAL-ZONE AUTOMATIC CLIMATE CONTROL',
    subtitle: 'Independent driver/passenger thermal zones & micron filtration',
    detail:
      'An executive benchmark for 2003, the Accord introduced fully independent left/right digital climate zones. Ambient cabin air is drawn through an electrostatic micron filtration cartridge capable of trapping pollen, diesel particulates, and airborne dust down to 3 microns before whisper-quiet distribution through low-turbulence ventilation ducting.',
    specification: 'Dual independent cabin thermistors / 3-micron electrostatic filter / Low-noise centrifugal blower',
  },
  {
    id: '04',
    title: 'VOICE-ACTIVATED TOUCHSCREEN SATELLITE NAVIGATION',
    subtitle: '8.0-inch full-color DVD-ROM display with 3D gyroscopic dead reckoning',
    detail:
      'Available on EX trim lines, the 2003 Accord pioneered an in-dash 8-inch touch-sensitive liquid crystal display. Powered by a high-density DVD-ROM drive containing complete map databases of the continental United States, the system combines GPS satellite signals with onboard solid-state gyroscopic inertial sensors to maintain precise navigation even inside tunnels and dense metropolitan canyons.',
    specification: '8.0-inch color touch display / DVD-ROM multi-gigabyte map database / 3D gyro inertial dead reckoning',
  },
  {
    id: '05',
    title: 'MELT-SHEET ACOUSTIC DAMPENING & HIGH-RIGIDITY MONOCOQUE',
    subtitle: '+27% Torsional body stiffness & oven-cured acoustic bitumen layering',
    detail:
      'Chassis engineers increased torsional rigidity by 27% and bending stiffness by 13% over the prior generation through tailored laser-welded high-tensile steel blank pillars. High-density acoustic bitumen melt-sheets are bonded directly to the floorpan and front bulkhead under factory oven cure, permanently eliminating mid-frequency tire drone and exhaust resonance.',
    specification: '+27% Torsional stiffness gain / Laser-welded door frames / Triple-layer acoustic firewall melt-sheet',
  },
];

export const SPEC_ROWS: SpecRow[] = [
  // Powertrain & Performance
  {
    category: 'POWERTRAIN',
    parameter: 'Engine Architecture',
    ex4Cyl: '2.4L In-Line 4-Cylinder DOHC 16-Valve i-VTEC (K24A4)',
    exV6: '3.0L 60° V6 SOHC 24-Valve VTEC (J30A4)',
    notes: 'All-aluminum block and cylinder heads',
  },
  {
    category: 'POWERTRAIN',
    parameter: 'Displacement',
    ex4Cyl: '2,354 cc (Bore: 87.0 mm / Stroke: 99.0 mm)',
    exV6: '2,997 cc (Bore: 86.0 mm / Stroke: 86.0 mm)',
  },
  {
    category: 'POWERTRAIN',
    parameter: 'Compression Ratio',
    ex4Cyl: '9.7 : 1',
    exV6: '10.0 : 1',
  },
  {
    category: 'POWERTRAIN',
    parameter: 'Horsepower (SAE Net)',
    ex4Cyl: '160 hp @ 5,500 rpm',
    exV6: '240 hp @ 6,250 rpm (+40 hp over 6th Gen)',
  },
  {
    category: 'POWERTRAIN',
    parameter: 'Torque (SAE Net)',
    ex4Cyl: '161 lb-ft @ 4,500 rpm',
    exV6: '212 lb-ft @ 5,000 rpm',
  },
  {
    category: 'POWERTRAIN',
    parameter: 'Valvetrain Management',
    ex4Cyl: 'i-VTEC (VTEC Valve Lift + 50° VTC Cam Advance)',
    exV6: 'VTEC (3-Rocker High-Lift Intake Timing)',
    notes: 'Silent timing chain (K24) / Timing belt (J30)',
  },
  {
    category: 'POWERTRAIN',
    parameter: 'Throttle Actuation System',
    ex4Cyl: 'Direct Mechanical Cable with Low-Friction Coating',
    exV6: 'Drive-by-Wire (DBW) Electronic Throttle Control',
    notes: 'DBW optimizes shift smoothness and traction',
  },
  {
    category: 'POWERTRAIN',
    parameter: 'Standard Transmission',
    ex4Cyl: '5-Speed Manual with Short-Throw Linkage',
    exV6: '5-Speed Electronic Automatic with Grade Logic',
  },
  {
    category: 'POWERTRAIN',
    parameter: 'Optional Transmission',
    ex4Cyl: '5-Speed Electronic Automatic with Grade Logic',
    exV6: '6-Speed Close-Ratio Manual (Coupe Exclusive)',
  },
  {
    category: 'POWERTRAIN',
    parameter: 'Fuel Injection System',
    ex4Cyl: 'Multi-Point Programmed Fuel Injection (PGM-FI)',
    exV6: 'Multi-Point Programmed Fuel Injection (PGM-FI)',
  },
  {
    category: 'POWERTRAIN',
    parameter: 'Emissions Certification',
    ex4Cyl: 'LEV-II / California ULEV-II (Tier 2 Bin 5)',
    exV6: 'LEV-II / California ULEV-II (Tier 2 Bin 5)',
  },

  // Chassis & Running Gear
  {
    category: 'CHASSIS',
    parameter: 'Front Suspension Layout',
    ex4Cyl: 'Independent Double-Wishbone with 25.4 mm Tubular Stabilizer',
    exV6: 'Independent Double-Wishbone with 26.5 mm Tubular Stabilizer',
    notes: 'Subframe isolated with fluid-filled bushings',
  },
  {
    category: 'CHASSIS',
    parameter: 'Rear Suspension Layout',
    ex4Cyl: 'Independent 5-Link Double-Wishbone with 14.0 mm Stabilizer',
    exV6: 'Independent 5-Link Double-Wishbone with 14.0 mm Stabilizer',
  },
  {
    category: 'CHASSIS',
    parameter: 'Steering Mechanism',
    ex4Cyl: 'Torque-Sensing Variable-Assist Rack-and-Pinion (2.75 Turns)',
    exV6: 'Torque-Sensing Variable-Assist Rack-and-Pinion (2.75 Turns)',
  },
  {
    category: 'CHASSIS',
    parameter: 'Front Brake Rotors',
    ex4Cyl: '11.1 in (282 mm) Power-Assisted Ventilated Discs',
    exV6: '11.8 in (300 mm) Power-Assisted Ventilated Discs',
  },
  {
    category: 'CHASSIS',
    parameter: 'Rear Brake Rotors',
    ex4Cyl: '10.2 in (260 mm) Power-Assisted Solid Discs',
    exV6: '10.2 in (260 mm) Power-Assisted Solid Discs',
  },
  {
    category: 'CHASSIS',
    parameter: 'Braking & Stability Assistance',
    ex4Cyl: '4-Channel ABS with Electronic Brake Distribution (EBD)',
    exV6: '4-Channel ABS with EBD & TCS Traction Control System',
  },
  {
    category: 'CHASSIS',
    parameter: 'Wheel Specification',
    ex4Cyl: '16 x 6.5 J 5-Spoke Cast Aluminum Alloy',
    exV6: '16 x 6.5 J 7-Spoke Cast Aluminum Alloy (Opt. 17" HFP)',
  },
  {
    category: 'CHASSIS',
    parameter: 'Tire Fitment',
    ex4Cyl: 'P205/60 R16 91V Michelin Energy All-Season',
    exV6: 'P205/60 R16 91V Michelin Energy All-Season',
  },

  // Dimensions & Capacities
  {
    category: 'DIMENSIONS',
    parameter: 'Wheelbase',
    ex4Cyl: '2,740 mm (107.9 in)',
    exV6: '2,740 mm (107.9 in)',
  },
  {
    category: 'DIMENSIONS',
    parameter: 'Overall Length',
    ex4Cyl: '4,813 mm (189.5 in)',
    exV6: '4,813 mm (189.5 in)',
  },
  {
    category: 'DIMENSIONS',
    parameter: 'Overall Width',
    ex4Cyl: '1,816 mm (71.5 in)',
    exV6: '1,816 mm (71.5 in)',
  },
  {
    category: 'DIMENSIONS',
    parameter: 'Overall Height',
    ex4Cyl: '1,450 mm (57.1 in)',
    exV6: '1,450 mm (57.1 in)',
  },
  {
    category: 'DIMENSIONS',
    parameter: 'Track (Front / Rear)',
    ex4Cyl: '1,555 mm / 1,555 mm (61.2 in / 61.2 in)',
    exV6: '1,555 mm / 1,555 mm (61.2 in / 61.2 in)',
  },
  {
    category: 'DIMENSIONS',
    parameter: 'Curb Weight',
    ex4Cyl: '1,440 kg (3,175 lbs) — EX 5MT',
    exV6: '1,530 kg (3,375 lbs) — EX-V6 5AT',
  },
  {
    category: 'DIMENSIONS',
    parameter: 'EPA Fuel Economy (City / Hwy)',
    ex4Cyl: '26 / 34 MPG (Manual) · 24 / 33 MPG (Automatic)',
    exV6: '21 / 30 MPG (Automatic) · 20 / 30 MPG (6MT Coupe)',
  },
  {
    category: 'DIMENSIONS',
    parameter: 'Fuel Tank Capacity',
    ex4Cyl: '64.7 Liters (17.1 US Gallons)',
    exV6: '64.7 Liters (17.1 US Gallons)',
  },

  // Electronics & Interior
  {
    category: 'ELECTRONICS',
    parameter: 'Instrument Cluster',
    ex4Cyl: 'Progressive LED Electroluminescent Display (White/Red)',
    exV6: 'Progressive LED Electroluminescent Display (White/Red)',
  },
  {
    category: 'ELECTRONICS',
    parameter: 'Audio Architecture',
    ex4Cyl: '120-Watt AM/FM In-Dash 6-Disc CD Changer, 6 Speakers',
    exV6: '180-Watt Premium System with In-Dash 6-Disc CD, 6 Speakers',
  },
  {
    category: 'ELECTRONICS',
    parameter: 'Climate Control',
    ex4Cyl: 'Dual-Zone Automatic Climate Control with Micron Filter',
    exV6: 'Dual-Zone Automatic Climate Control with Micron Filter',
  },
  {
    category: 'ELECTRONICS',
    parameter: 'Satellite Navigation System',
    ex4Cyl: 'Available 8.0-inch DVD-ROM Touchscreen with Voice Rec',
    exV6: 'Available 8.0-inch DVD-ROM Touchscreen with Voice Rec & 3D Gyro',
  },
  {
    category: 'ELECTRONICS',
    parameter: 'Safety Restraint Architecture',
    ex4Cyl: 'Dual-Stage Front Airbags (SRS) & Front Side Airbags with OPDS',
    exV6: 'Dual-Stage Front Airbags (SRS), Side Airbags & Side Curtain Airbags',
  },
];

export const DETAIL_GALLERY_ITEMS: DetailItem[] = [
  {
    id: '01',
    tag: 'DETAIL 01 / PROGRESSIVE GAUGES',
    title: 'ELECTROLUMINESCENT LED COCKPIT',
    desc: 'Progressive three-stage instrument cluster illumination with high-contrast white dial markings and vivid crimson pointers.',
    image: '/images/details/cockpit.jpg',
    aspect: 'tall',
    technicalSpecs: [
      { label: 'Illumination Architecture', value: 'Progressive three-tier LED backlighting' },
      { label: 'Pointer Movement', value: 'Micro-stepper motors with 0.1° sweep precision' },
      { label: 'Lens Substrate', value: 'Anti-glare smoke-tinted optical acrylic' },
      { label: 'Luminescence Response', value: '< 50 ms door-activated wake ceremony' },
    ],
    engineeringNotes:
      'Debuted for the 2003 model year to eliminate ocular transition lag between dark nocturnal roadways and cockpit instrumentation. The smoked acrylic outer lenses remain black and opaque when parked, awakening in three smooth ceremonial stages upon key proximity.',
    functionalRole: 'Prevents temporary ocular accommodation fatigue and delivers instantaneous speedometer and tachometer legibility.',
  },
  {
    id: '02',
    tag: 'DETAIL 02 / REAR DECK & LIGHTING',
    title: 'AERODYNAMIC TRUNCATION & TAILLAMPS',
    desc: 'Distinct triangular jewel-reflector taillight cluster integrated with a high-deck aerodynamic spoiler contour.',
    image: '/images/details/rear.jpg',
    aspect: 'standard',
    technicalSpecs: [
      { label: 'Aerodynamic Drag Index', value: '0.30 Cd low-drag body rating' },
      { label: 'Rear Deck Contour', value: 'Raised trailing edge for boundary detachment' },
      { label: 'Reflector Optics', value: 'Multi-faceted crystalline polycarbonate' },
      { label: 'Exhaust Routing', value: 'Dual-outlet tuned performance silencer (V6)' },
    ],
    engineeringNotes:
      'The raised rear trunk deck profile functions as an integrated aerodynamic ducktail, cleanly detaching turbulent air vortices shedding off the C-pillar fastback roofline. This design achieves a slippery 0.30 Cd without requiring an aftermarket add-on spoiler.',
    functionalRole: 'Minimizes rear aerodynamic lift (Clr) and maximizes straight-line highway tracking stability.',
  },
  {
    id: '03',
    tag: 'DETAIL 03 / CENTER CONSOLE & AUDIO',
    title: 'TACTILE CONTROL CLUSTER & CD STACK',
    desc: 'High-mounted in-dash 6-disc CD audio and dual-zone rotary climate controls with knurled mechanical detents.',
    image: '/images/details/console.jpg',
    aspect: 'standard',
    technicalSpecs: [
      { label: 'Audio Auto-Changer', value: 'In-dash 6-disc CD mechanism (no trunk cartridge)' },
      { label: 'Rotary Detent Pitch', value: 'Calibrated tactile clicks with dual thermistors' },
      { label: 'Display Readout', value: 'High-contrast vacuum fluorescent screen' },
      { label: 'Shifter Architecture', value: 'Straight-gate selector with overdrive lockout' },
    ],
    engineeringNotes:
      'Engineered in strict accordance with Honda human-factors biomechanics. Rotary dual-zone climate dials feature calibrated physical detents allowing the driver to adjust thermal boundaries by tactile muscle memory without diverting ocular attention from the roadway.',
    functionalRole: 'Eliminates cognitive driver distraction while providing instant micro-climate management.',
  },
  {
    id: '04',
    tag: 'DETAIL 04 / FASTBACK SILHOUETTE',
    title: 'DOUBLE-WISHBONE WEDGE STANCE',
    desc: 'European-inspired wedge architecture with low-cowl hood line and wide 1,555 mm track footprint.',
    image: '/images/details/stance.jpg',
    aspect: 'wide',
    technicalSpecs: [
      { label: 'Wheelbase Geometry', value: '2,740 mm (107.9 in) high-speed platform' },
      { label: 'Chassis Track Width', value: '1,555 mm front / 1,555 mm rear' },
      { label: 'Suspension Type', value: '4-Wheel Independent Double-Wishbone' },
      { label: 'Torsional Rigidity', value: '+27% increase over 6th generation monocoque' },
    ],
    engineeringNotes:
      'The compact packaging of front double-wishbones enabled Honda engineers to lower the hood cowl line by 15 mm, giving the 2003 Accord an aggressive forward wedge stance and unmatched forward sightlines while lowering the vehicle roll center.',
    functionalRole: 'Maintains optimal tire contact patch perpendicularity across extreme dynamic lateral transitions.',
  },
];

export const TIMELINE_GENERATIONS: GenerationEntry[] = [
  {
    gen: '01',
    years: '1976–1981',
    title: 'CVCC EMISSIONS BREAKTHROUGH',
    chassisCode: 'SJ / SM',
    majorEngineering:
      'Introduced as an automotive benchmark powered by the Compound Vortex Controlled Combustion (CVCC) engine. It was the first engine in the world to meet stringent US Clean Air Act standards without requiring an exhaust catalytic converter, demonstrating Honda’s dedication to pure thermal engineering.',
    powertrain: '1.6L EF CVCC I-4 (68 hp) / 1.8L EK1 CVCC (75 hp)',
    era: 'classic',
  },
  {
    gen: '02',
    years: '1982–1985',
    title: 'FIRST US-BUILT JAPANESE PRODUCTION',
    chassisCode: 'SY / SZ',
    majorEngineering:
      'Historic production milestone as the first Japanese automobile assembled in the United States at the Marysville Auto Plant in Ohio. Pioneered the world’s first production automotive inertial navigation system (Electro Gyrocator) and 4-speed automatic transaxle with lockup torque converter.',
    powertrain: '1.8L EK1 CVCC / 1.8L ES1 All-Aluminum (86 hp)',
    era: 'classic',
  },
  {
    gen: '03',
    years: '1986–1989',
    title: 'FOUR-WHEEL DOUBLE WISHBONE & POP-UP LIGHTS',
    chassisCode: 'CA1 / CA2 / CA3 / CA5',
    majorEngineering:
      'Groundbreaking engineering as the world’s first front-wheel-drive production sedan equipped with race-derived four-wheel double wishbone suspension. Aerodynamic pop-up concealed headlamps lowered the front cowl line, yielding a remarkable 0.32 drag coefficient.',
    powertrain: '2.0L A20A PGM-FI 12-Valve SOHC (110 hp)',
    era: 'classic',
  },
  {
    gen: '04',
    years: '1990–1993',
    title: 'MECHANICAL 4-WHEEL STEERING & ALL-ALUMINUM I-4',
    chassisCode: 'CB7 / CB8 / CB9',
    majorEngineering:
      'Introduction of optional mechanical Four-Wheel Steering (4WS) for high-speed lane change stability and urban agility. Debuted the all-aluminum F22A 16-valve multi-point fuel-injected engine with exceptionally low hood clearance and exceptional torsional stiffness.',
    powertrain: '2.2L F22A 16-Valve Multi-Point EFI (125–140 hp)',
    era: 'classic',
  },
  {
    gen: '05',
    years: '1994–1997',
    title: 'VTEC TECHNOLOGY & FIRST 2.7L V6',
    chassisCode: 'CD3 / CD4 / CD5 / CD6 / CD7',
    majorEngineering:
      'Adoption of Variable Valve Timing and Lift Electronic Control (VTEC) to combine low-speed torque with high-rpm breathing efficiency. First generation to offer a 2.7L SOHC V6 powerplant alongside a reinforced monocoque cabin safety cell.',
    powertrain: '2.2L F22B1 VTEC (145 hp) / 2.7L C27A4 V6 (170 hp)',
    era: 'classic',
  },
  {
    gen: '06',
    years: '1998–2002',
    title: 'GLOBAL MULTI-LINK & 3.0L V6',
    chassisCode: 'CG1 / CG5',
    majorEngineering:
      'Adoption of five-link double-wishbone rear suspension architecture and introductory 3.0L SOHC VTEC V6 (J30A1). Increased torsional rigidity by 35% through computer-optimized cross-sections.',
    powertrain: '2.3L F23A4 ULEV I-4 / 3.0L J30A1 V6 (200 hp)',
    era: 'modern',
  },
  {
    gen: '07',
    years: '2003–2007',
    title: '4-WHEEL DOUBLE WISHBONE & i-VTEC / 240-HP V6',
    chassisCode: 'CM5 / CM6 / CM7 / CM8',
    majorEngineering:
      'Seventh-generation breakthrough featuring race-derived four-wheel double-wishbone suspension, i-VTEC with 50° continuous VTC advance, 240-hp J30A4 V6 with Drive-by-Wire, progressive LED instrument gauges, and 0.30 Cd aerodynamics.',
    powertrain: '2.4L K24A4 DOHC i-VTEC (160 hp) / 3.0L J30A4 VTEC V6 (240 hp)',
    highlight: true,
    era: 'modern',
  },
  {
    gen: '08',
    years: '2008–2012',
    title: 'DIMENSIONAL SCALE & HIGH-TENSILE STEEL',
    chassisCode: 'CP2 / CP3',
    majorEngineering:
      'Expansion into EPA Large-Car classification. 48% high-tensile steel by structural weight. Variable Cylinder Management (VCM) 3-stage cylinder deactivation for reduced highway fuel consumption.',
    powertrain: '2.4L K24Z2 (177 hp) / 3.5L J35Z2 V6 (268 hp)',
    era: 'modern',
  },
  {
    gen: '09',
    years: '2013–2017',
    title: 'EARTH DREAMS & DUAL-MOTOR i-MMD',
    chassisCode: 'CR2 / CR6',
    majorEngineering:
      'Adoption of high-efficiency direct-injection Earth Dreams powertrains and debut of revolutionary two-motor Intelligent Multi-Mode Drive (i-MMD) hybrid, decoupling engine rpm from wheel speed.',
    powertrain: '2.4L K24W Earth Dreams / 3.5L J35Y / 2.0L Two-Motor i-MMD Hybrid',
    era: 'modern',
  },
  {
    gen: '10',
    years: '2018–2022',
    title: 'LOW-SLUNG MODULAR PLATFORM',
    chassisCode: 'CV1 / CV2 / CV3',
    majorEngineering:
      'All-new modular global architecture with 32% ultra-high-strength steel. Structural adhesive usage expanded to 115 feet. Center of gravity dropped by 10 mm. Introduction of 2.0L Turbo matched with 10-speed automatic.',
    powertrain: '1.5L Turbo (192 hp) / 2.0L Turbo (252 hp) / Gen-3 Two-Motor Hybrid (212 hp)',
    era: 'modern',
  },
  {
    gen: '11',
    years: '2023–PRESENT',
    title: 'PARALLEL-AXIS HYBRID & 15% RIGIDITY',
    chassisCode: 'CY1 / CY2',
    majorEngineering:
      'Fourth-generation two-motor hybrid with parallel-axis motor positioning allowing a larger traction motor. 15% improvement in front lateral chassis rigidity. Linear Shift Control logic emulates stepped gear ratios during acceleration.',
    powertrain: '1.5L VTEC Turbo (192 hp) / 2.0L Dual-Motor Atkinson Hybrid (204 hp, 247 lb-ft)',
    era: 'modern',
  },
];
