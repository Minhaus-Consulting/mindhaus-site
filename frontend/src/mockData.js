// Mock data for MINDhaus Consulting website - Updated with StoryBrand structure
export const mockData = {
  hero: {
    title: "Architektur & Beratung für Unternehmen im Wandel",
    subtitle: "Wir helfen Unternehmen, Digitalisierung und Wissenstransfer nachhaltig zu meistern – mit globalem Netzwerk, KI-Know-how und individueller Beratung.",
    primaryCTA: "Jetzt Erstgespräch vereinbaren",
    secondaryCTA: "Mehr über Methodik",
    videoPlaceholder: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1"
  },
  
  // StoryBrand Structure
  storyBrand: {
    hero: "Unternehmen, die in Digitalisierung und Wissenstransfer Unterstützung brauchen",
    problems: [
      "Digitale Transformation stockt",
      "Wissen bleibt isoliert",
      "Fehlende Strategiearchitektur & Tool-Auswahl"
    ],
    solution: "MINDhaus – mit über 10 Jahren Logistik- & HR-Erfahrung, globalem Netzwerk aus Dubai",
    plan: [
      { step: 1, title: "Erstgespräch", description: "Analyse Ihrer aktuellen Situation" },
      { step: 2, title: "Strategiekonzeption", description: "Entwicklung der optimalen Roadmap" },
      { step: 3, title: "Umsetzung & Wissenstransfer", description: "Implementierung inkl. Tool-Auswahl" }
    ],
    failure: "Kein richtiger Digital-Start, Wissen versickert, Konkurrenz steigt vorbei",
    success: "Nachhaltige Strategien, messbarer ROI, gesteigerte Effizienz und skalierbare Prozesse"
  },

  founder: {
    name: "Marwa Toprak",
    title: "Gründerin & CEO",
    description: "Mit über 10 Jahren Erfahrung in Logistik, HR und IT bei internationalen Unternehmen wie Dachser und DSV Road GmbH bringe ich echte Praxis-Expertise in die Digitalisierung. Mein Fokus liegt auf Wissenstransfer und der Architektur digitaler Lösungen für Konzerne und Mittelstand.",
    quote: "Dubai als Innovation-Hub – Zugang zu Experten, Agenturen und Vordenkern weltweit.",
    image: "https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb", // Placeholder - will be replaced with actual CEO photo
    stats: {
      experience: "10+",
      projects: "50+",
      success: "100%"
    }
  },

  services: [
    {
      id: 1,
      title: "Beratung & Strategie-Architektur",
      description: "Ganzheitliche Strategieentwicklung für nachhaltige Digitalisierung",
      icon: "🎯",
      featured: true,
      benefits: ["Individuelle Roadmap", "Stakeholder-Alignment", "ROI-Optimierung"],
      areas: ["Sales", "Marketing", "HR", "Service"],
      headerImage: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg"
    },
    {
      id: 2,
      title: "Automatisierung & KI-Integration",
      description: "Intelligente Prozessoptimierung mit modernsten KI-Tools",
      icon: "🤖",
      benefits: ["Effizienzsteigerung", "Kostenreduktion", "Skalierbarkeit"],
      areas: ["Operations", "Customer Service", "Analytics"],
      headerImage: "https://images.unsplash.com/photo-1698047682129-c3e217ac08b7"
    },
    {
      id: 3,
      title: "Tool-Auswahl & Implementierung",
      description: "Passende Technologie-Lösungen für Ihre Herausforderungen",
      icon: "⚙️",
      benefits: ["Bedarfsanalyse", "Vendor-Evaluation", "Rollout-Support"],
      areas: ["CRM", "HR", "Marketing", "Sales"],
      headerImage: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
    },
    {
      id: 4,
      title: "Wissenstransfer & Change-Management",
      description: "Nachhaltiger Wandel durch strukturierte Wissensvermittlung",
      icon: "💡",
      benefits: ["Team-Enablement", "Kultur-Transformation", "Nachhaltigkeit"],
      areas: ["Training", "Coaching", "Change"],
      headerImage: "https://images.pexels.com/photos/32844868/pexels-photo-32844868.jpeg"
    }
  ],

  team: [
    {
      id: 1,
      name: "Marwa Toprak",
      role: "Gründerin & CEO",
      skills: ["Strategieberatung", "KI-Integration", "Change Management"],
      image: "https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb"
    }
  ],

  testimonials: [
    {
      id: 1,
      text: "MINDhaus Consulting hat unsere Digitalisierungsstrategie komplett transformiert. Professionell, praxisnah und mit echtem Mehrwert.",
      author: "Sarah M.",
      company: "Tech Startup",
      rating: 5,
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
    },
    {
      id: 2,
      text: "Die Expertise von Marwa und ihrem Team hat uns geholfen, unsere HR-Prozesse zu revolutionieren. Absolut empfehlenswert!",
      author: "Michael K.",
      company: "Dachser Group",
      rating: 5,
      image: "https://images.unsplash.com/photo-1698047682129-c3e217ac08b7"
    }
  ],

  contact: {
    email: "hello@mindhaus-consulting.com",
    phone: "+971 50 123 4567",
    address: "Dubai, UAE",
    linkedin: "https://linkedin.com/in/marwa-toprak"
  },

  // New: Office and team placeholders
  officeImages: [
    "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1",
    "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
    "https://images.unsplash.com/photo-1698047682129-c3e217ac08b7",
    "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg",
    "https://images.pexels.com/photos/32844868/pexels-photo-32844868.jpeg"
  ],

  // Trust signals
  clientLogos: [
    "Dachser Group",
    "DSV Road GmbH",
    "International Logistics",
    "Dubai Tech Hub"
  ]
};