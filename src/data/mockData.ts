import { ServiceItem, PortfolioItem, TestimonialItem, VastuPrinciple } from '../types';

export const STUDIO_INFO = {
  name: "Siddhivinayak Interior",
  city: "Vadodara",
  subtitle: "Luxury Turnkey Interiors & Vastu Architecture",
  address: "304, Signature Heights, Opposite Inox Multiplex, Race Course Circle, Alkapuri, Vadodara, Gujarat 390007",
  phone: "+91 98250 84729",
  secondaryPhone: "+91 94281 92340",
  email: "contact@siddhivinayakinterior.com",
  hours: "Monday – Saturday: 10:00 AM – 8:00 PM (Sunday by appointment)",
  experienceYears: 10,
  completedProjects: 500,
  activeProjects: 24,
  clientSatisfaction: "99.4%",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "residential-turnkey",
    title: "Full Turnkey Residential Interiors",
    tagline: "End-to-end homes from bare brick to dream handover in 45 days",
    description: "Holistic interior solutions for 2BHK, 3BHK, penthouses & luxury bungalows in Vadodara. We oversee 100% of civil modifications, custom carpentry, Italian marble laying, and bespoke styling.",
    features: [
      "Fixed 45-day handover guarantee with zero cost overruns",
      "Termite-proof HDHMR & BWP marine grade woodwork",
      "Dedicated Project Manager & live photo updates via WhatsApp",
      "10-year comprehensive structural & fitting warranty"
    ],
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    iconName: "Home",
    startingPrice: "₹1,400 / sq.ft"
  },
  {
    id: "modular-kitchens",
    title: "Ergonomic & Modular Kitchens",
    tagline: "German precision hardware combined with Indian cooking resilience",
    description: "Custom modular kitchens designed for Gujarat's spice-rich culinary lifestyle. Moisture-resistant acrylic, anti-scratch PU coatings, and smooth Blum/Hafele soft-close systems.",
    features: [
      "Tough boiling waterproof (BWP) marine ply core",
      "Anti-fingerprint matte & seamless acrylic finishes",
      "Smart pull-outs, tandem drawers & spice pantry carousels",
      "Stain-resistant Kalinga / Quartz countertops"
    ],
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    iconName: "ChefHat",
    startingPrice: "₹1.85 Lakhs onw."
  },
  {
    id: "commercial-spaces",
    title: "Commercial & Corporate Workspaces",
    tagline: "Elevated brand identities that inspire productivity & client trust",
    description: "Tailored office layouts, doctor clinics, boutique showrooms, and modern tech workspaces across Vadodara's prime business districts with acoustic optimization and smart wiring.",
    features: [
      "Ergonomic workstations & acoustic ceiling baffles",
      "Sophisticated client reception & conference AV integration",
      "Fire-safe electrical compliance & HVAC layout planning",
      "Fast-track night & weekend execution to minimize downtime"
    ],
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    iconName: "Building2",
    startingPrice: "₹1,200 / sq.ft"
  },
  {
    id: "vastu-design",
    title: "Vastu-Compliant 2D/3D Space Planning",
    tagline: "Harmonizing elemental energy flow with contemporary luxury",
    description: "Authentic Vedic Vastu guidelines integrated naturally without compromising sleek modern aesthetics. We align room entrances, kitchens (Agni zone), mandirs, and master bedrooms.",
    features: [
      "Comprehensive site energy & cardinal direction mapping",
      "Non-demolition Vastu remedies for existing floor plans",
      "Photorealistic 4K 3D renders & 360° VR walk-throughs",
      "Strategic placement of natural lighting & ventilation shafts"
    ],
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    iconName: "Compass",
    startingPrice: "Complimentary with Turnkey"
  },
  {
    id: "furniture-lighting",
    title: "Custom Furniture & Architectural Lighting",
    tagline: "One-of-a-kind bespoke craftsmanship and layered ambiance",
    description: "Handcrafted sofas, fluted veneer consoles, dining sets with brass inlays, paired with low-glare magnetic track lighting, cove illumination, and smart mood scenes.",
    features: [
      "Custom upholstery with stain-guarded velvet & textured boucle",
      "Natural smoked oak, teak & American walnut veneers",
      "Architectural COB downlights & dimmable warm LED coves (3000K)",
      "Automated sensor lighting for wardrobes and footpaths"
    ],
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    iconName: "Sofa",
    startingPrice: "₹900 / sq.ft"
  },
  {
    id: "complete-renovation",
    title: "Complete Renovation & Remodeling",
    tagline: "Breathing vibrant new life into aging apartments and heritage homes",
    description: "Transforming 15-30 year old properties in Old Padra Road, Karelibaug, and Akota with modern plumbing, open-plan living, wall removals, and contemporary finishes.",
    features: [
      "Structural safety audit & civil wall modifications",
      "Complete replacement of concealed plumbing & CPVC conduits",
      "Italian tile overlay and anti-leak bathroom waterproofing",
      "Debris removal & dust-controlled execution protocol"
    ],
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    iconName: "Hammer",
    startingPrice: "Custom Assessment"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: "alkapuri-3bhk-luxury",
    title: "The Solitaire Residence",
    category: "Living Room",
    location: "Alkapuri, Vadodara",
    carpetArea: "2,450 sq.ft (3BHK)",
    style: "Modern Warm Minimalist",
    completionTime: "42 Days",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "A serene living space featuring fluted travertine wall paneling, brushed brass accents, and recessed linear magnetic lighting for a renowned Vadodara industrialist family.",
    highlights: ["Custom 10-seater L-shaped linen sofa", "Travertine stone TV accent wall", "100% concealed wiring & acoustic ceiling"]
  },
  {
    id: "sevasi-bungalow-kitchen",
    title: "The Terra Culinary Studio",
    category: "Modular Kitchen",
    location: "Sevasi Green Villa, Vadodara",
    carpetArea: "280 sq.ft Kitchen + Utility",
    style: "Contemporary Ergonomic",
    completionTime: "25 Days",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Island layout with matte terracotta and champagne gold cabinetry, anti-scratch Caesarstone quartz countertops, and dedicated Vastu-aligned Agni zone.",
    highlights: ["Hafele Matrix soft-close push mechanisms", "Built-in microwave & oven column", "Dedicated spice & grocery pull-out tower"]
  },
  {
    id: "vasna-master-suite",
    title: "Aura Master Bedroom Suite",
    category: "Bedroom",
    location: "Vasna-Bhayli Road, Vadodara",
    carpetArea: "420 sq.ft Master Suite",
    style: "Japandi Luxe",
    completionTime: "30 Days",
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Restful sanctuary combining fluted white oak headboard, integrated warm backlight coves, walk-in glass wardrobe with sensor lighting, and reading nook.",
    highlights: ["Floor-to-ceiling tinted glass wardrobes", "Floating walnut bedside consoles", "South-West Vastu headboard alignment"]
  },
  {
    id: "gotri-corporate-hq",
    title: "Nexis Capital Corporate Office",
    category: "Commercial",
    location: "Gotri IT Hub, Vadodara",
    carpetArea: "3,800 sq.ft Workfloor",
    style: "Biophilic Executive Modern",
    completionTime: "35 Days",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Executive workspace featuring sound-insulated glass cabins, hot-desking zones with integrated cable troughs, and a welcoming client lounge.",
    highlights: ["Acoustic felt ceiling cloud panels", "Biophilic indoor planters", "Keycard access meeting rooms"]
  },
  {
    id: "karelibaug-vastu-penthouse",
    title: "Ishaan Harmony Penthouse",
    category: "Vastu-Designed",
    location: "Karelibaug, Vadodara",
    carpetArea: "3,200 sq.ft (4BHK Penthouse)",
    style: "Vedic Contemporary",
    completionTime: "48 Days",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Complete north-east facing prayer mandir in Makrana white marble with brass jaali, open-to-sky terrace deck, and tranquil natural ventilation channels.",
    highlights: ["Handcrafted Makrana marble mandir", "East-facing study & work consoles", "Zero sharp-corner Vastu furniture profiling"]
  },
  {
    id: "akota-luxury-dining",
    title: "The Regal Pavilion Dining & Lounge",
    category: "Living Room",
    location: "Akota, Vadodara",
    carpetArea: "1,800 sq.ft (3BHK)",
    style: "Modern Classic & Brass",
    completionTime: "38 Days",
    imageUrl: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Custom 8-seater Italian Statuario marble dining table paired with custom velvet armchairs and a backlit wine bar console.",
    highlights: ["Italian Statuario book-matched tabletop", "Rose-gold brass accents", "Dimmable crystal chandelier pairing"]
  },
  {
    id: "manjalpur-open-kitchen",
    title: "Nordic Frost Island Kitchen",
    category: "Modular Kitchen",
    location: "Manjalpur, Vadodara",
    carpetArea: "220 sq.ft",
    style: "Scandinavian Crisp",
    completionTime: "22 Days",
    imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "All-white anti-glare laminate kitchen with natural ash wood breakfast counter, concealed exhaust chimney, and profile under-cabinet LED ribbons.",
    highlights: ["Corner LeMans carousel storage", "Under-mount granite composite sink", "Soft-close Blum hinges"]
  },
  {
    id: "bhayli-kids-suite",
    title: "Little Explorer Fantasy Suite",
    category: "Bedroom",
    location: "Bhayli Canal Road, Vadodara",
    carpetArea: "260 sq.ft",
    style: "Playful Pastel Modern",
    completionTime: "20 Days",
    imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Multifunctional study bunk with integrated chalkboard wall, ergonomic height-adjustable study desk, and rounded safety edges throughout.",
    highlights: ["Non-toxic low-VOC wall paints", "Hidden under-bed toy storage drawers", "Magnetic pinboard & study bookshelves"]
  }
];

export const BEFORE_AFTER_DATA = {
  title: "The Alkapuri Penthouse Transformation",
  subtitle: "Drag the slider to witness how Siddhivinayak Interior transformed a raw, bare-shell concrete floor into an ultra-luxury living lounge in 40 days.",
  location: "Race Course Road, Alkapuri, Vadodara",
  specs: "Carpet Area: 1,850 sq.ft | Turnaround: 40 Days | Style: Warm Contemporary Luxury",
  beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
  afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  details: [
    { label: "Civil Modifications", value: "Removed central partition wall to create a massive 30-foot open living-dining pavilion." },
    { label: "Flooring", value: "Replaced builder-grade vitrified tiles with bookmatched Italian Botticino marble." },
    { label: "Ceiling & Illumination", value: "Installed seamless acoustic drywall ceiling with recessed magnetic track lights (3000K Warm)." },
    { label: "Woodwork & Wall", value: "Fluted charcoal oak veneer paneling with concealed master bedroom pivot door." }
  ]
};

export const VASTU_PRINCIPLES: VastuPrinciple[] = [
  {
    zone: "North-East (Ishanya)",
    direction: "North-East",
    element: "Water / Ether",
    recommendedRoom: "Puja Room / Mandir & Living Room",
    advice: "Keep this zone ultra-light, clutter-free, and well-illuminated. Ideal for water fountains, light marble mandir, and family gathering.",
    colorSuggestion: "Soft White, Light Blue, Champagne Cream"
  },
  {
    zone: "South-East (Agneya)",
    direction: "South-East",
    element: "Fire (Agni)",
    recommendedRoom: "Modular Kitchen & Hob Location",
    advice: "Cooking hob must be placed so the cook faces East while preparing meals. Keep water sink and gas cooktop separated by at least 3 feet.",
    colorSuggestion: "Terracotta, Warm Peach, Soft Coral, Wood"
  },
  {
    zone: "South-West (Nairutya)",
    direction: "South-West",
    element: "Earth (Prithvi)",
    recommendedRoom: "Master Bedroom & Heavy Storage",
    advice: "The zone of stability and leadership. Place the master bed with head pointing South or East for deep, rejuvenating sleep.",
    colorSuggestion: "Warm Taupe, Earthy Beige, Walnut Wood"
  },
  {
    zone: "North-West (Vayavya)",
    direction: "North-West",
    element: "Air (Vayu)",
    recommendedRoom: "Guest Bedroom / Kids Room / Dining",
    advice: "Promotes movement and healthy social connections. Perfect for guest suites, finished storage for items in active circulation, and dining spaces.",
    colorSuggestion: "Light Grey, Cream, Silver, Mint White"
  },
  {
    zone: "North (Kuber Zone)",
    direction: "North",
    element: "Water",
    recommendedRoom: "Home Office & Cash Locker / Vault",
    advice: "Ruled by Lord Kubera. Position home office workstations facing North or East for business prosperity and financial growth.",
    colorSuggestion: "Pristine White, Light Green, Sage"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Dr. Rajesh & Priti Shah",
    location: "Alkapuri, Vadodara",
    projectType: "Complete 4BHK Turnkey Interior",
    rating: 5,
    date: "January 2026",
    quote: "Siddhivinayak Interior transformed our apartment in Alkapuri beyond what we imagined. Their 45-day handover promise was kept to the exact date! The quality of the Hafele modular kitchen and the Vastu-compliant Mandir is unmatched in Vadodara.",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t2",
    name: "Hardik Patel",
    location: "Sevasi Green Villas, Vadodara",
    projectType: "Luxury Villa & Landscape Lounge",
    rating: 5,
    date: "December 2025",
    quote: "What stands out about this team is their transparency in material specs. No hidden costs. They showed us exact 3D VR renders first, and the finished living room looks 100% identical to the 3D model.",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t3",
    name: "Meera & Amit Desai",
    location: "Vasna-Bhayli Road, Vadodara",
    projectType: "3BHK Modern Japandi Flat",
    rating: 5,
    date: "November 2025",
    quote: "Being in the tech industry, I was particular about smart automation and clean concealed wiring. Siddhivinayak's team executed magnetic track lights and fluted wall paneling with absolute German precision.",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t4",
    name: "Nilesh Trivedi",
    location: "Gotri, Vadodara",
    projectType: "Corporate Office & Executive Lounge",
    rating: 5,
    date: "February 2026",
    quote: "They renovated our 3,000 sq.ft Gotri office over weekend cycles without halting our weekday operations. Our clients constantly compliment the reception and acoustic glass cabins!",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export const VADODARA_LOCALITIES = [
  "Alkapuri",
  "Vasna-Bhayli Road",
  "Sevasi",
  "Gotri",
  "Akota",
  "Karelibaug",
  "Old Padra Road",
  "Manjalpur",
  "Sun Pharma Road",
  "Fatehgunj",
  "Waghodia Road",
  "Harni",
  "Other Area in Vadodara"
];

export const FAQS = [
  {
    q: "How does the Siddhivinayak 45-Day Handover Guarantee work?",
    a: "Once 3D designs, material moodboards, and civil permissions are finalized, we assign a dedicated on-site supervisor and follow pre-fabricated factory woodwork assembly. We commit to a written contract date with milestone-based progress tracking."
  },
  {
    q: "Do you offer Vastu Shastra consultation during the design stage?",
    a: "Yes! Vastu alignment is integral to our philosophy. Our principal architects evaluate cardinal directions, elemental balance (Agni, Ishanya, Nairutya), room orientations, and mandir positioning without compromising sleek modern aesthetics."
  },
  {
    q: "Can I customize the materials and brands used?",
    a: "Absolutely. We provide complete material transparency. You can select your preferred hardware (Blum, Hafele, Hettich), laminates (Merino, Greenlam), Italian stones, or paints (Asian Paints Royale / PU) with itemized rate sheets."
  },
  {
    q: "What is the typical payment structure for a turnkey project?",
    a: "Our payment schedule is tied strictly to tangible milestones: 10% design booking & 3D renders, 40% woodwork material arrival on-site, 30% after structural carpentry & electrical completion, 15% during painting & finishes, and 5% upon final inspection & deep-clean handover."
  },
  {
    q: "Do you provide after-handover maintenance and warranty?",
    a: "Yes, every turnkey client receives an official 10-Year Warranty Certificate covering termite protection, structural carpentry stability, and hardware alignments, along with complimentary 6-month and 12-month check-up visits."
  }
];
