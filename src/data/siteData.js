export const designTokens = {
  heroStyle: "carousel",
  typography: {
    heading: "Sora",
    body: "DM Sans",
    display: "Outfit",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: false,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "icon-top",
  projectGridStyle: "grid-3",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Telnet Smart Home Automation",
    legalName: "Telnet Smart Home Automation (Pvt) Ltd",
    tagline: "Intelligent Living, Simplified",
    description:
      "Zimbabwe's leading smart home automation company delivering cutting-edge IoT solutions, intelligent security, lighting control, and energy management systems for modern homes and offices.",
    phone: "+263 71 934 0815",
    phoneRaw: "+263719340815",
    whatsappNumber: "263719340815",
    email: "info@telnetsmarthome.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 24,
    established: "2018",
    yearsExperience: "7+",
    projectsCompleted: "200+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "telnet-cookie-consent",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },

  navbar: {
    logoLine1: "Telnet",
    logoLine2: "Smart Home",
  },

  hero: {
    badge: "Harare's Smart Home Experts",
    titleParts: [
      { text: "Your Home, " },
      { text: "Reimagined", highlight: true },
      { text: " With Intelligence" },
    ],
    subtitle:
      "Transform your living space with cutting-edge automation. From intelligent lighting to seamless security, we engineer homes that think ahead so you never have to.",
    ctaPrimary: "Get a Free Consultation",
    ctaSecondary: "View Our Work",
    trustBadge: "Certified Installers",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920",
    backgroundAlt:
      "Modern smart home interior with ambient lighting and sleek automation controls",
  },

  stats: [
    { number: "200+", label: "Homes Automated" },
    { number: "4.8", label: "Star Rating" },
    { number: "7+", label: "Years Experience" },
    { number: "15+", label: "Specialists" },
  ],

  servicesPreview: [
    {
      iconName: "Lightbulb",
      title: "Smart Lighting",
      desc: "Automated lighting scenes, motion-activated controls, and energy-efficient LED systems tailored to your lifestyle.",
    },
    {
      iconName: "ShieldCheck",
      title: "Security Systems",
      desc: "24/7 surveillance, smart locks, motion detection, and real-time alerts accessible from your phone anywhere in the world.",
    },
    {
      iconName: "Leaf",
      title: "Climate Control",
      desc: "Intelligent HVAC management that learns your preferences, optimizes comfort, and reduces energy consumption.",
    },
    {
      iconName: "Eye",
      title: "Audio & Visual",
      desc: "Multi-room audio, home cinema integration, and centralized entertainment systems with voice control.",
    },
    {
      iconName: "Lock",
      title: "Smart Locks",
      desc: "Keyless entry, biometric access, guest codes, and remote lock management for total access control.",
    },
    {
      iconName: "ChartLineUp",
      title: "Energy Management",
      desc: "Real-time consumption monitoring, solar integration, and automated load scheduling to slash utility bills.",
    },
  ],

  featuredProjects: [
    {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800",
      title: "Borrowdale Smart Villa",
      category: "Residential",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800",
      title: "Corporate HQ Automation",
      category: "Commercial",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
      title: "Glen Lorne Connected Home",
      category: "Residential",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Technology That " },
      { text: "Understands", highlight: true },
      { text: " You" },
    ],
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",
    imageAlt:
      "Smart home control panel and integrated automation system",
    experienceYears: "7+",
    experienceLabel: "Years of Innovation",
    points: [
      {
        title: "Certified Expertise",
        desc: "Our team holds certifications from leading automation brands including KNX, Control4, and Crestron.",
      },
      {
        title: "Custom Solutions",
        desc: "Every installation is designed around your lifestyle, not a one-size-fits-all package.",
      },
      {
        title: "Future-Proof Design",
        desc: "We build systems that scale. Add rooms, devices, or capabilities without rewiring your entire home.",
      },
      {
        title: "Ongoing Support",
        desc: "Dedicated after-installation support, remote diagnostics, and system updates to keep everything running flawlessly.",
      },
    ],
  },

  homeCta: {
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920",
    backgroundAlt:
      "Smart home living room with automated ambient lighting",
    titleParts: [
      { text: "Ready for a " },
      { text: "Smarter", highlight: true },
      { text: " Home?" },
    ],
    subtitle:
      "Whether you are building new or retrofitting, we design automation systems that elevate your daily life. Book a free site assessment today.",
    ctaPrimary: "Book Free Assessment",
    whatsappText:
      "Hello, I am interested in smart home automation for my property.",
  },

  homeTestimonials: [
    {
      name: "Tatenda Mushore",
      role: "Homeowner, Borrowdale",
      text: "Telnet transformed our home into something out of a sci-fi film. The lighting scenes alone changed how we live. Everything just works, seamlessly.",
      rating: 5,
    },
    {
      name: "Nyasha Chigumba",
      role: "Property Developer",
      text: "We have partnered with Telnet on three luxury developments now. Their systems add incredible value to our properties and buyers absolutely love the smart features.",
      rating: 5,
    },
    {
      name: "Rudo Mashingaidze",
      role: "Business Owner",
      text: "The security system they installed gives me total peace of mind. I can check my cameras, lock doors, and arm the system from anywhere in the world.",
      rating: 5,
    },
  ],

  // ====== ABOUT PAGE ======
  about: {
    heroTitle: [
      { text: "Engineering " },
      { text: "Intelligent", highlight: true },
      { text: " Spaces" },
    ],
    heroSubtitle:
      "For over 7 years, Telnet Smart Home Automation has been at the forefront of Zimbabwe's smart home revolution, making intelligent living accessible and reliable.",
    storyImage:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",
    storyImageAlt:
      "Smart home technology installation showcasing modern automation systems",
    storyProjectCount: "200+",
    storyProjectLabel: "Homes Automated",
    storyTitle: "From Passion Project to Industry Leader",
    storyParagraphs: [
      "Telnet Smart Home Automation was founded in Harare with a bold vision: to bring world-class home automation technology to Zimbabwe. We believed every homeowner deserved the convenience, security, and efficiency that smart technology delivers.",
      "Starting with residential lighting automation, we rapidly expanded into comprehensive home and commercial systems. Our team of certified installers and system designers has grown alongside the technology itself, always staying ahead of the curve.",
      "Today, we offer end-to-end smart home solutions covering lighting, security, climate, entertainment, and energy management. Every project we deliver reflects our core belief that technology should simplify life, not complicate it.",
    ],
    mission:
      "To make intelligent living accessible to every Zimbabwean home and business through expertly designed, reliable, and future-proof automation systems that enhance comfort, security, and energy efficiency.",
    vision:
      "To be Southern Africa's most trusted smart home automation company, recognized for innovation, technical excellence, and transforming how people interact with their living and working spaces.",
    values: [
      {
        iconName: "Lightbulb",
        title: "Innovation",
        desc: "We embrace emerging technologies and continuously push the boundaries of what smart homes can do.",
      },
      {
        iconName: "ShieldCheck",
        title: "Reliability",
        desc: "Every system we install is built for years of flawless operation with redundancy and failsafes.",
      },
      {
        iconName: "Trophy",
        title: "Excellence",
        desc: "We pursue perfection in every wire run, every sensor placement, and every software configuration.",
      },
      {
        iconName: "Handshake",
        title: "Partnership",
        desc: "We work closely with clients, architects, and builders to integrate automation seamlessly.",
      },
      {
        iconName: "Heart",
        title: "Customer Focus",
        desc: "Your lifestyle drives our design. We listen first, then engineer solutions around your needs.",
      },
      {
        iconName: "Users",
        title: "Education",
        desc: "We empower our clients to fully understand and enjoy their smart home systems through thorough training.",
      },
    ],
    team: [
      {
        name: "Tinashe Moyo",
        role: "Founder & Technical Director",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      },
      {
        name: "Kudakwashe Ndlovu",
        role: "Head of Installations",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      },
      {
        name: "Fadzai Chirwa",
        role: "Systems Designer",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      },
      {
        name: "Brian Matongo",
        role: "Customer Success Manager",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      },
    ],
    milestones: [
      {
        year: "2018",
        title: "Company Founded",
        desc: "Telnet Smart Home Automation launched in Harare with a focus on residential lighting automation.",
      },
      {
        year: "2019",
        title: "First Commercial Project",
        desc: "Completed our first full commercial office automation, expanding beyond residential work.",
      },
      {
        year: "2020",
        title: "Security Division",
        desc: "Launched our smart security division, integrating CCTV, access control, and alarm systems.",
      },
      {
        year: "2022",
        title: "100th Installation",
        desc: "Surpassed 100 completed smart home installations across Harare and surrounding areas.",
      },
      {
        year: "2024",
        title: "Energy Management Launch",
        desc: "Introduced solar integration and intelligent energy management to our service portfolio.",
      },
      {
        year: "2025",
        title: "200+ Homes Automated",
        desc: "Reached over 200 completed projects, solidifying our position as Zimbabwe's smart home leader.",
      },
    ],
    ctaTitle: "Let Us Automate Your World",
    ctaSubtitle:
      "Partner with us to design a smart home system that fits your lifestyle perfectly.",
    ctaCta: "Start a Conversation",
  },

  // ====== SERVICES PAGE ======
  services: {
    heroTitle: [
      { text: "Complete " },
      { text: "Smart Home", highlight: true },
      { text: " Solutions" },
    ],
    heroSubtitle:
      "Six core automation services engineered to transform every aspect of your living space. From intelligent lighting to comprehensive security, we have you covered.",
    items: [
      {
        iconName: "Lightbulb",
        title: "Smart Lighting",
        slug: "smart-lighting",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=900",
        desc: "Transform the ambiance of every room with intelligent lighting that adapts to your schedule, mood, and activities. From subtle dimming to dramatic colour scenes, our systems put total control at your fingertips.",
        features: [
          "Automated lighting scenes and schedules",
          "Motion-activated hallway and bathroom lights",
          "Colour temperature control for circadian wellness",
          "Integration with voice assistants (Alexa, Google)",
          "Outdoor landscape and security lighting",
          "Energy monitoring per lighting zone",
        ],
      },
      {
        iconName: "ShieldCheck",
        title: "Security Systems",
        slug: "security-systems",
        image:
          "https://images.unsplash.com/photo-1585128792020-803d29415281?w=900",
        desc: "Comprehensive smart security that gives you peace of mind around the clock. From HD cameras to intelligent intrusion detection, monitor and protect your property from anywhere in the world.",
        features: [
          "HD and 4K CCTV camera systems",
          "Smart motion and intrusion detection",
          "Real-time mobile alerts and notifications",
          "Video doorbell and intercom systems",
          "Perimeter sensor integration",
          "24/7 cloud recording with playback",
        ],
      },
      {
        iconName: "Leaf",
        title: "Climate Control",
        slug: "climate-control",
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900",
        desc: "Intelligent HVAC control that learns your comfort preferences and automatically adjusts temperature, humidity, and airflow throughout your home for optimal comfort and energy efficiency.",
        features: [
          "Smart thermostat installation and programming",
          "Zone-based climate management",
          "Schedule-based and occupancy-aware control",
          "Integration with split and ducted AC systems",
          "Humidity and air quality monitoring",
          "Energy consumption optimization",
        ],
      },
      {
        iconName: "Eye",
        title: "Audio & Visual",
        slug: "audio-visual",
        image:
          "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900",
        desc: "Immersive entertainment experiences across every room. From dedicated home cinemas to multi-room audio that follows you through the house, we design systems that delight.",
        features: [
          "Multi-room audio distribution",
          "Dedicated home cinema design and installation",
          "In-ceiling and in-wall speaker systems",
          "Voice-controlled playback and streaming",
          "Centralized AV switching and control",
          "Outdoor entertainment zones",
        ],
      },
      {
        iconName: "Lock",
        title: "Smart Locks",
        slug: "smart-locks",
        image:
          "https://images.unsplash.com/photo-1585128792020-803d29415281?w=900",
        desc: "Upgrade your access control with keyless, biometric, and remotely managed lock systems. Grant temporary access, monitor entry logs, and never worry about lost keys again.",
        features: [
          "Keyless entry with PIN, fingerprint, or phone",
          "Temporary guest and service provider codes",
          "Remote lock and unlock from anywhere",
          "Entry and exit activity logging",
          "Integration with security and alarm systems",
          "Battery backup and tamper alerts",
        ],
      },
      {
        iconName: "ChartLineUp",
        title: "Energy Management",
        slug: "energy-management",
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900",
        desc: "Take control of your energy consumption with real-time monitoring, solar integration, and intelligent load management that can reduce your utility bills significantly.",
        features: [
          "Real-time energy consumption dashboards",
          "Solar panel monitoring and optimization",
          "Automated load shedding schedules",
          "Smart plug and appliance control",
          "Battery storage system management",
          "Monthly usage reports and insights",
        ],
      },
    ],
    ctaTitle: "Need a Custom Automation Package?",
    ctaSubtitle:
      "Every home is unique. Contact us to discuss your specific requirements and we will design a tailored smart home solution.",
  },

  // ====== PROJECTS PAGE ======
  projects: {
    heroTitle: [
      { text: "Projects That " },
      { text: "Inspire", highlight: true },
      { text: " Smart Living" },
    ],
    heroSubtitle:
      "Explore our portfolio of smart home installations. Each project showcases our commitment to seamless integration, elegant design, and intelligent automation.",
    categories: [
      "All",
      "Residential",
      "Commercial",
      "Security",
      "Entertainment",
      "Energy",
    ],
    items: [
      {
        id: 1,
        title: "Borrowdale Smart Villa",
        category: "Residential",
        location: "Borrowdale, Harare",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800",
        desc: "Complete whole-home automation including lighting scenes, climate control, security cameras, smart locks, and a dedicated home cinema room with Dolby Atmos surround.",
        services: [
          "Smart Lighting",
          "Security Systems",
          "Audio & Visual",
        ],
      },
      {
        id: 2,
        title: "Corporate HQ Automation",
        category: "Commercial",
        location: "Harare CBD",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800",
        desc: "Full commercial automation for a 3-floor office building. Automated lighting, access control with biometric entry, conference room AV systems, and energy monitoring.",
        services: [
          "Smart Lighting",
          "Smart Locks",
          "Energy Management",
        ],
      },
      {
        id: 3,
        title: "Glen Lorne Connected Home",
        category: "Residential",
        location: "Glen Lorne, Harare",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
        desc: "Retrofit smart home project integrating lighting automation, multi-room audio, and a comprehensive security system with 12 cameras and perimeter sensors.",
        services: [
          "Smart Lighting",
          "Audio & Visual",
          "Security Systems",
        ],
      },
      {
        id: 4,
        title: "Avondale Security Upgrade",
        category: "Security",
        location: "Avondale, Harare",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800",
        desc: "High-security residential installation featuring 16 HD cameras, smart perimeter detection, automated gate control, video intercom, and 24/7 cloud recording.",
        services: [
          "Security Systems",
          "Smart Locks",
        ],
      },
      {
        id: 5,
        title: "Highlands Home Cinema",
        category: "Entertainment",
        location: "Highlands, Harare",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800",
        desc: "Purpose-built home cinema room with 4K laser projection, Dolby Atmos 7.2.4 surround sound, acoustic treatment, automated blinds, and ambient bias lighting.",
        services: [
          "Audio & Visual",
          "Smart Lighting",
        ],
      },
      {
        id: 6,
        title: "Chisipite Solar Smart Home",
        category: "Energy",
        location: "Chisipite, Harare",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
        desc: "Solar integration with smart energy management, automated load shedding schedules, battery monitoring, and a whole-home dashboard showing real-time consumption.",
        services: [
          "Energy Management",
          "Smart Lighting",
          "Climate Control",
        ],
      },
      {
        id: 7,
        title: "Mount Pleasant Smart Retrofit",
        category: "Residential",
        location: "Mount Pleasant, Harare",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800",
        desc: "Non-invasive retrofit of a 1990s home with wireless smart switches, automated blinds, voice-controlled entertainment, and whole-home WiFi mesh coverage.",
        services: [
          "Smart Lighting",
          "Audio & Visual",
          "Climate Control",
        ],
      },
      {
        id: 8,
        title: "Greystone Park Commercial Office",
        category: "Commercial",
        location: "Greystone Park, Harare",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800",
        desc: "Open-plan office automation with occupancy-based lighting, meeting room booking integration, centralized AV control, and smart access management.",
        services: [
          "Smart Lighting",
          "Smart Locks",
          "Audio & Visual",
        ],
      },
      {
        id: 9,
        title: "Emerald Hill Luxury Penthouse",
        category: "Residential",
        location: "Emerald Hill, Harare",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800",
        desc: "Ultra-luxury penthouse automation with motorized curtains, underfloor heating zones, integrated sound system, and a single-app control interface for all systems.",
        services: [
          "Smart Lighting",
          "Climate Control",
          "Audio & Visual",
          "Security Systems",
        ],
      },
    ],
  },

  // ====== REVIEWS PAGE ======
  reviews: {
    heroTitle: [
      { text: "What Our Clients " },
      { text: "Say", highlight: true },
    ],
    heroSubtitle:
      "Real feedback from homeowners and businesses who have experienced the Telnet difference. Our reputation is built on results.",
    ratingBreakdown: [
      { stars: 5, count: 18 },
      { stars: 4, count: 5 },
      { stars: 3, count: 1 },
      { stars: 2, count: 0 },
      { stars: 1, count: 0 },
    ],
    items: [
      {
        name: "Tatenda Mushore",
        role: "Homeowner, Borrowdale",
        text: "Telnet transformed our home into something out of a sci-fi film. The lighting scenes alone changed how we live. Everything just works, seamlessly. Highly recommend them to anyone considering automation.",
        rating: 5,
        date: "1 month ago",
        project: "Whole-Home Automation",
      },
      {
        name: "Nyasha Chigumba",
        role: "Property Developer",
        text: "We have partnered with Telnet on three luxury developments now. Their systems add incredible value to our properties and buyers absolutely love the smart features. Professional and reliable.",
        rating: 5,
        date: "2 months ago",
        project: "Multi-Property Development",
      },
      {
        name: "Rudo Mashingaidze",
        role: "Business Owner",
        text: "The security system they installed gives me total peace of mind. I can check my cameras, lock doors, and arm the system from anywhere in the world. Best investment I have made for my property.",
        rating: 5,
        date: "3 months ago",
        project: "Security Installation",
      },
      {
        name: "Gerald Mapfumo",
        role: "Architect",
        text: "I recommend Telnet to all my clients. They understand how to integrate technology into architectural design without it feeling like an afterthought. Clean installations and excellent cable management.",
        rating: 5,
        date: "4 months ago",
        project: "Various Residential",
      },
      {
        name: "Tsitsi Moyo",
        role: "Homeowner, Glen Lorne",
        text: "Our home cinema room is absolutely phenomenal. The sound quality, the automated lighting, the motorized screen. It is like having a private movie theatre. Telnet delivered beyond our expectations.",
        rating: 5,
        date: "4 months ago",
        project: "Home Cinema",
      },
      {
        name: "Wellington Ncube",
        role: "Office Manager",
        text: "The office automation has streamlined our operations significantly. Meeting rooms book themselves, lights adjust based on occupancy, and the energy savings have been substantial. Very impressed.",
        rating: 4,
        date: "5 months ago",
        project: "Commercial Automation",
      },
      {
        name: "Chenai Tawengwa",
        role: "Homeowner, Highlands",
        text: "What impressed me most was the after-sales support. When I wanted to add a zone to my system six months later, Telnet came back and expanded it seamlessly. True scalability.",
        rating: 5,
        date: "6 months ago",
        project: "System Expansion",
      },
      {
        name: "Patrick Chikwanda",
        role: "Hotel Manager",
        text: "Telnet automated our boutique hotel rooms with smart lighting and climate control. Guests are constantly impressed and our TripAdvisor reviews mention the technology experience specifically.",
        rating: 5,
        date: "6 months ago",
        project: "Hospitality Automation",
      },
      {
        name: "Mercy Chikowore",
        role: "Homeowner, Chisipite",
        text: "The solar monitoring system they installed is fantastic. I can see exactly how much energy we are generating, consuming, and storing. It has made us much more conscious and efficient.",
        rating: 4,
        date: "7 months ago",
        project: "Energy Management",
      },
      {
        name: "Farai Hwata",
        role: "Interior Designer",
        text: "I have worked with several automation companies and Telnet stands apart. Their attention to aesthetic detail is rare in the tech world. They hide wires, match switch plates to decor, and think about the design holistically.",
        rating: 5,
        date: "8 months ago",
        project: "Design Collaboration",
      },
      {
        name: "Simbarashe Gondo",
        role: "Homeowner, Mount Pleasant",
        text: "We retrofitted our older home with smart technology and Telnet made it painless. No major rewiring needed, wireless solutions where possible, and everything works through one app. Brilliant.",
        rating: 5,
        date: "9 months ago",
        project: "Smart Retrofit",
      },
      {
        name: "Tadiwa Mashoko",
        role: "Security Consultant",
        text: "As a security professional, I can vouch for the quality of Telnet's installations. Camera placement is strategic, system reliability is excellent, and their remote monitoring setup is top-tier.",
        rating: 4,
        date: "10 months ago",
        project: "Security Assessment",
      },
      {
        name: "Linda Chuma",
        role: "Homeowner, Avondale",
        text: "Telling my house goodnight and having every light turn off, doors lock, and cameras arm is something I never thought I would have in Harare. Telnet made it happen. Life-changing technology.",
        rating: 5,
        date: "10 months ago",
        project: "Whole-Home Automation",
      },
      {
        name: "Kudzai Mutero",
        role: "IT Professional",
        text: "Being in tech myself, I had high expectations. Telnet exceeded them. Clean network setup, proper VLANs for IoT devices, robust WiFi coverage, and an automation system that just works. No gimmicks.",
        rating: 5,
        date: "11 months ago",
        project: "Network & Automation",
      },
      {
        name: "Grace Banda",
        role: "Homeowner, Emerald Hill",
        text: "The voice control integration is seamless. I can control every aspect of my home through Alexa and it never fails. The kids love it. It has genuinely made our daily routines easier.",
        rating: 5,
        date: "1 year ago",
        project: "Voice Control Setup",
      },
      {
        name: "Maxwell Zhamu",
        role: "Commercial Property Owner",
        text: "Telnet automated our retail space with smart lighting that adjusts based on time of day, customer sensors for foot traffic, and an energy dashboard. Very professional team.",
        rating: 4,
        date: "1 year ago",
        project: "Retail Automation",
      },
      {
        name: "Tendai Marimo",
        role: "Homeowner, Greystone Park",
        text: "From the initial consultation to the final walkthrough, Telnet was thorough and professional. They took time to understand our family's needs and designed a system that truly works for us.",
        rating: 5,
        date: "1 year ago",
        project: "Family Home Automation",
      },
    ],
    ctaTitle: "Ready to Experience Smart Living?",
    ctaSubtitle:
      "Join hundreds of satisfied homeowners who have upgraded to intelligent automation. Contact us today to discuss your project.",
    ctaCta: "Get Started Today",
    ctaWhatsappText:
      "Hello, I saw your reviews and I am interested in smart home automation.",
  },

  // ====== CONTACT PAGE ======
  contact: {
    heroTitle: [
      { text: "Let's Make Your Home " },
      { text: "Smarter", highlight: true },
    ],
    heroSubtitle:
      "Have a smart home project in mind? We would love to hear from you. Reach out via phone, email, WhatsApp, or fill in the form below for a free consultation.",
    formTitle: "Send Us a Message",
    formSubtitle:
      "Fill in the form and choose how you'd like to send it.",
  },

  // ====== CAREERS PAGE ======
  careers: {
    heroTitle: [
      { text: "Build the " },
      { text: "Future", highlight: true },
      { text: " With Us" },
    ],
    heroSubtitle:
      "Join a team of passionate technologists who are bringing smart living to Zimbabwe. We offer exciting careers in a rapidly growing industry with real impact.",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920",
    cultureTitle: "Why Work Here?",
    cultureItems: [
      {
        iconName: "Lightbulb",
        title: "Cutting-Edge Technology",
        desc: "Work with the latest smart home platforms, IoT devices, and automation protocols.",
      },
      {
        iconName: "Rocket",
        title: "Growth Industry",
        desc: "Smart home adoption is accelerating across Africa. Be part of the wave.",
      },
      {
        iconName: "Users",
        title: "Small Team, Big Impact",
        desc: "Every team member makes a visible difference in the projects we deliver.",
      },
    ],
    cultureImage:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1400",
    cultureImageAlt:
      "Team collaborating on smart home system design",
    cultureTagline: "More Than a Job. A Revolution.",
    cultureTaglineDesc:
      "Every day, our team pushes the boundaries of what smart homes can do in Zimbabwe. We are not just installing gadgets, we are building the future of living.",
    benefits: [
      {
        iconName: "CurrencyDollar",
        title: "Competitive Salary",
        desc: "Industry-leading compensation with performance-based bonuses.",
      },
      {
        iconName: "FirstAid",
        title: "Health Coverage",
        desc: "Comprehensive medical aid for you and your immediate family.",
      },
      {
        iconName: "GraduationCap",
        title: "Training & Certifications",
        desc: "Sponsored vendor certifications (KNX, Control4, Crestron) and industry training.",
      },
      {
        iconName: "Car",
        title: "Transport Allowance",
        desc: "Monthly transport allowance for site visits and installations.",
      },
      {
        iconName: "Heart",
        title: "Flexible Working",
        desc: "Blend of office design work and on-site installation with flexible scheduling.",
      },
      {
        iconName: "ShieldCheck",
        title: "Tools & Equipment",
        desc: "All professional tools, test equipment, and safety gear provided.",
      },
    ],
    positions: [
      {
        id: 1,
        title: "Smart Home Installer",
        department: "Installations",
        type: "Full-Time",
        location: "Harare",
        description:
          "We are looking for a skilled installer to join our team. You will run cables, mount devices, configure systems, and ensure flawless installations across residential and commercial projects.",
        requirements: [
          "Diploma in Electrical Engineering or IT",
          "3+ years of low-voltage installation experience",
          "Knowledge of networking and IP systems",
          "Ability to read technical drawings",
          "Valid driver's license",
        ],
      },
      {
        id: 2,
        title: "Systems Designer",
        department: "Design",
        type: "Full-Time",
        location: "Harare",
        description:
          "Design smart home systems from concept to specification. You will work with clients and architects to create automation plans, select equipment, and produce detailed installation drawings.",
        requirements: [
          "Degree in Electrical/Electronic Engineering or IT",
          "Experience with automation platforms (KNX, Control4, or similar)",
          "Strong AutoCAD or Visio skills",
          "Excellent client communication skills",
          "Portfolio of completed automation designs preferred",
        ],
      },
      {
        id: 3,
        title: "Sales & Solutions Consultant",
        department: "Sales",
        type: "Full-Time",
        location: "Harare",
        description:
          "Drive new business by consulting with homeowners, developers, and businesses on smart home solutions. You will conduct site assessments, create proposals, and close deals.",
        requirements: [
          "2+ years of technical sales experience",
          "Understanding of smart home technology",
          "Excellent presentation and negotiation skills",
          "Self-motivated with a hunter mentality",
          "Valid driver's license and own vehicle preferred",
        ],
      },
      {
        id: 4,
        title: "Network & IT Technician",
        department: "Technical",
        type: "Full-Time",
        location: "Harare",
        description:
          "Ensure robust network infrastructure for all our smart home installations. You will design and deploy WiFi networks, configure routers and switches, and manage IoT device connectivity.",
        requirements: [
          "Diploma or Degree in IT/Networking",
          "CCNA certification or equivalent",
          "Experience with enterprise WiFi solutions",
          "Knowledge of VLANs, QoS, and firewall rules",
          "Strong troubleshooting skills",
        ],
      },
    ],
    generalApplicationTitle: "Don't See the Right Role?",
    generalApplicationSubtitle:
      "We are always looking for talented individuals. Send us your CV and we will keep you in mind for future opportunities.",
    generalApplicationCta: "Send Your CV",
  },

  // ====== FOOTER ======
  footer: {
    description:
      "Intelligent living, simplified. Delivering cutting-edge smart home automation to Zimbabwe since 2018. Your home, reimagined.",
    copyright: "Telnet Smart Home Automation (Pvt) Ltd",
  },
};

export default siteData;
