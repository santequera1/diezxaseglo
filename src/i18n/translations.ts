export type Language = "es" | "en";

const es = {
  nav: {
    inicio: "Inicio",
    servicios: "Servicios",
    nosotros: "Sobre Nosotros",
    contacto: "Contacto",
    cotizar: "Cotizar",
  },
  hero: {
    badge: "Protección de élite",
    title1: "Soluciones de",
    titleHighlight: "Seguridad, Turismo y Transporte",
    title2: "a tu Medida",
    desc: "Garantizamos la seguridad, el transporte y el turismo de nuestros clientes con disciplina, lealtad y profesionalismo.",
    cta1: "Pedir Cotización",
    cta2: "Ver Servicios",
    stats: [
      { num: "25", label: "Profesionales de Élite" },
      { num: "500+", label: "Clientes Satisfechos" },
      { num: "4+", label: "Ciudades Principales de Colombia" },
      { num: "2K+", label: "Activos Protegidos" },
    ],
  },
  services: {
    badge: "Nuestros Servicios",
    title: "Seguridad, Turismo",
    titleHighlight: "y Transporte",
    subtitle:
      "10XASEGLO S.A.S ofrece soluciones de seguridad globales para la protección de la integridad física de bienes, inmuebles y personas.",
    solicitar: "Solicitar Servicio",
    verFlota: "Ver Flota →",
    items: {
      seguridad: {
        title: "Seguridad",
        description:
          "Escoltas privados de alto rendimiento con formación estricta, conocimiento y experiencia en protección ejecutiva de primer nivel.",
      },
      transporte: {
        title: "Transporte",
        description:
          "Flota de autos luxury para comodidad, eficacia y seguridad. Viajes confortables con total garantía.",
      },
      tour: {
        title: "Tour V.I.P",
        description:
          "Soluciones integrales: hospedaje, turismo, transporte, seguridad y diversión los 365 días del año.",
      },
      hospedaje: {
        title: "Hospedaje",
        description:
          "Hospedaje exclusivo en Colombia adaptado a tu viaje: romántico, de negocios o familiar.",
      },
      entrenamiento: {
        title: "Entrenamiento y Capacitación",
        description:
          "Formación profesional para escoltas privados. Cursos de actualización y reciclaje profesional.",
      },
      detective: {
        title: "Detective Privado",
        description:
          "Investigación con total profesionalidad, confidencialidad y rigor. Informes completos y válidos.",
      },
    },
  },
  operations: {
    badge: "Centro de Operaciones",
    title: "Vigilancia",
    titleHighlight: "24/7",
    realtime: "Monitoreo en tiempo real",
    items: [
      {
        title: "Tecnología de Punta",
        description:
          "Sistemas de cámaras CCTV, drones de vigilancia y software de reconocimiento para garantizar la seguridad total.",
      },
      {
        title: "Respuesta Inmediata",
        description:
          "Protocolos de reacción rápida con personal entrenado en Fuerzas Especiales, disponibles las 24 horas.",
      },
      {
        title: "Comunicación Encriptada",
        description:
          "Canales de comunicación seguros y encriptados para la coordinación de operaciones en tiempo real.",
      },
    ],
  },
  eliteTeam: {
    badge: "Equipo Profesional",
    title: "Protección Ejecutiva de",
    titleHighlight: "Alto Nivel",
    p1: "Somos un equipo de 25 profesionales con experiencia en las Fuerzas Militares, aprobados por el Gobierno Nacional, comprometidos con proteger la vida, los bienes y la tranquilidad de quienes confían en nosotros. Más que prestar un servicio, asumimos una misión: brindar acompañamiento confiable para que cada recorrido, traslado o experiencia turística se desarrolle con seguridad y sin interrupciones.",
    p2: "Cada escolta recibe entrenamiento continuo en protección ejecutiva, manejo defensivo, primeros auxilios tácticos y protocolos de seguridad internacional.",
    list: [
      "Licencia de seguridad vigente",
      "Entrenamiento en protección VIP",
      "Manejo táctico y defensivo",
      "Cobertura nacional e internacional",
    ],
    cta: "Solicitar Escolta",
    overlayTitle: "Escoltas de Élite",
    overlaySub: "Ex-militares certificados",
    imgAlt1: "Escolta profesional 10X ASEGLO",
    imgAlt2: "Escolta ejecutivo 10X ASEGLO",
  },
  whyUs: {
    badge: "Diferenciadores",
    title: "¿Por Qué",
    titleHighlight: "Elegirnos",
    titleEnd: "?",
    waText:
      "¿Tienes dudas o necesitas una cotización? Nuestro equipo te atiende de inmediato, las 24 horas.",
    waLink: "Escríbenos por WhatsApp →",
    items: [
      {
        title: "Perfección en Cualquier Momento",
        description: "Cada operación se planifica al detalle para ofrecer un servicio impecable, adaptado a cada cliente.",
      },
      {
        title: "Comunicación 24/7",
        description: "Referentes por constancia, garantías y profesionalidad. Atención directa en todo momento.",
      },
      {
        title: "Nuestra Flota",
        description: "La mejor flota de vehículos de élite con todas las garantías.",
      },
      {
        title: "Ayuda de Emergencias",
        description: "Rápida cobertura en caso de servicios de urgencia.",
      },
      {
        title: "Tecnología Avanzada",
        description: "Ciberseguridad, entrenamiento físico, técnico y táctico de punta.",
      },
      {
        title: "Oficiales Autorizados",
        description: "Ex militares de Fuerzas Especiales aprobados por el Gobierno Nacional.",
      },
    ],
  },
  testimonials: {
    badge: "Testimonios",
    title: "Lo Que Dicen",
    titleHighlight: "Nuestros Clientes",
    trustedBadge: "Confianza de Figuras Internacionales",
    trustedText:
      "Hemos brindado protección y acompañamiento a celebridades y figuras públicas durante sus estadías en Colombia.",
    trustedAlt: "Escolta 10X ASEGLO con figura internacional",
    videosTitle: "Testimonios Reales en Video",
    items: [
      {
        quote:
          "Fue increíble mi experiencia en Medellín Colombia, muy hermoso, agradezco a la Agencia de seguridad porque fueron geniales y me sentí en familia, logré grabar mis videos y al tiempo disfrutar.",
        role: "Music entrepreneur, USA",
      },
      {
        quote:
          "Soy muy afortunada de haber contactado a 10X, espectacular mi viaje con mi familia, me sentí como una artista. Un auto increíble solo para nosotros, conductor y un esquema de seguridad profesional y encantador.",
        role: "International Business, Alemania",
      },
      {
        quote:
          "10XASEGLO me brindó mi estadía de trabajo como si fuesen vacaciones. Me acompañaron por Medellín, Cali, Cartagena, Bogotá y fue monumental la seguridad que me brindaron.",
        role: "Empresario Internacional",
      },
    ],
    bannerOther: "Cuando otras empresas dicen:",
    bannerOtherQuote: '"Lo tenemos que estudiar."',
    bannerWe: "En",
    bannerWeSay: "decimos:",
    bannerWeQuote: '"El servicio ya está operativo."',
  },
  gallery: {
    badge: "Galería",
    title: "Momentos",
    titleHighlight: "Reales",
    subtitle:
      "Operaciones, clientes y destinos: así se vive la experiencia 10X ASEGLO en Colombia.",
    imgAlt: "Galería 10X ASEGLO",
  },
  cta: {
    badge: "Contacto",
    title: "Solicitar",
    titleHighlight: "Información",
    desc: "Nuestro equipo técnico y comercial desarrolla proyectos de seguridad a medida, comprometiéndonos a optimizar el coste de sus partidas destinadas a seguridad.",
    button: "Solicitar Cotización",
  },
  footer: {
    brandDesc:
      "Agency Security Global S.A.S — Soluciones de seguridad integrales en Colombia y el mundo.",
    navTitle: "Navegación",
    servicesTitle: "Servicios",
    contactTitle: "Contacto",
    nav: ["Inicio", "Servicios", "Sobre Nosotros", "Contacto"],
    services: ["Seguridad", "Transporte", "Tour V.I.P", "Hospedaje", "Entrenamiento", "Detective Privado"],
    rights: "Copyright © 2026 10X Agency Security Global S.A.S — Todos los derechos reservados",
  },
  contacto: {
    badge: "Contacto",
    title: "Contáctanos",
    titleHighlight: "Hoy",
    desc: "Nuestro equipo técnico y comercial desarrolla proyectos de seguridad a medida de cada cliente. Déjanos tus datos y un Asesor Comercial se pondrá en contacto contigo.",
    whatsappBtn: "Escribir por WhatsApp",
    formTitle: "Solicitar Cotización",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Email",
    emailPlaceholder: "tu@email.com",
    serviceInterest: "Servicio de Interés",
    serviceOptions: [
      "Seguridad",
      "Transporte",
      "Tour V.I.P",
      "Hospedaje",
      "Entrenamiento y Capacitación",
      "Detective Privado",
    ],
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos qué necesitas...",
    submit: "Enviar Solicitud",
  },
  nosotros: {
    badge: "Sobre Nosotros",
    title: "10X Agency",
    titleHighlight: "Security Global",
    subtitle: "Desde 2013 protegiendo lo que más importa",
    historyBadge: "Nuestra Historia",
    historyTitle: "10X AGENCY SECURITY",
    historyHighlight: "GLOBAL S.A.S",
    p1: "Nació en 2013 como parte de un grupo de amigos que ahora son ex militares de las fuerzas especiales de Colombia, y se dedicaba a ofrecer servicios de capacitación y seguridad. Con el paso de los años, observamos que los clientes requerían una agencia de seguridad de confianza, que le ofreciera todas las garantías cuando las cosas se ponen difíciles.",
    p2pre: "Así 10XASEGLO AGENCY SECURITY GLOBAL S.A.S, con la firme intención de proteger y garantizar lo que más nos importa: ",
    p2strong: "la seguridad de quien confía en nuestra marca.",
    p3: "Nos hemos ido posicionando como referentes del sector por ser una agencia de seguridad de espíritu familiar en la que se fundamentan los valores de la ética, el compromiso y la lealtad. Si algo caracteriza a 10XASEGLO es estar siempre que se nos necesita, por más adversa que sea la situación.",
    quote: '"SIEMPRE GARANTIZAMOS LA SEGURIDAD DE NUESTROS CLIENTES."',
    stats: [
      { num: "2013", label: "Año de Fundación" },
      { num: "500+", label: "Clientes Protegidos" },
      { num: "10+", label: "Años de Experiencia" },
      { num: "2K+", label: "Operaciones Exitosas" },
    ],
    values: ["Ética", "Compromiso", "Lealtad"],
    teamBadge: "Nuestro Equipo",
    teamTitle: "Escoltas",
    teamHighlight: "Reales",
    teamSubtitle:
      "Profesionales certificados que protegen a nuestros clientes en cada operación, dentro y fuera de Colombia.",
    teamAlt: "Equipo de escoltas 10X ASEGLO",
    missionTitle: "Misión",
    missionText:
      "Brindar soluciones integrales de seguridad, transporte y protección con los más altos estándares de calidad, profesionalismo y tecnología avanzada, garantizando la tranquilidad y bienestar de nuestros clientes en cada momento.",
    visionTitle: "Visión",
    visionText:
      "Ser la agencia de seguridad global más reconocida en Colombia y Latinoamérica, posicionándonos como el socio estratégico preferido para empresas y particulares que buscan protección, confianza y excelencia operativa.",
    sedesTitle: "Nuestras",
    sedesHighlight: "Sedes",
    sedesText: "Operamos en las principales ciudades de Colombia con cobertura nacional e internacional.",
    cities: ["Medellín", "Bogotá", "Cali", "Cartagena"],
  },
  transporte: {
    badge: "Servicio de Transporte",
    title: "Flota",
    titleHighlight: "Premium",
    subtitle:
      "Transporte ejecutivo y de lujo con la máxima seguridad, comodidad y eficacia para cada necesidad.",
    heroAlt: "Transporte 10X ASEGLO",
    features: [
      "Blindaje disponible",
      "Conductores capacitados",
      "Flota premium",
      "Servicio 24/7",
    ],
    fleetBadge: "Nuestra Flota",
    fleetTitle: "Camionetas",
    fleetHighlight: "Ejecutivas",
    fleetSubtitle: "Vehículos de alta gama para transporte ejecutivo, escoltas y protección VIP.",
    vansTitle: "Vans",
    vansHighlight: "de Lujo",
    vansSubtitle:
      "Para grupos más grandes, ofrecemos vans Mercedes de lujo con capacidad de 9 a 19 pasajeros.",
    passengers: "pasajeros",
    selectColor: "Selecciona el color:",
    colorsLabel: "Colores:",
    premium: "Premium",
    cotizar: "Cotizar",
    colors: {
      white: "Blanca",
      black: "Negra",
      blackLux: "Negra (Lujo)",
      darkGray: "Gris Oscuro",
      silver: "Gris Plata",
      gray: "Gris",
    },
  },
};

type Translation = typeof es;

const en: Translation = {
  nav: {
    inicio: "Home",
    servicios: "Services",
    nosotros: "About Us",
    contacto: "Contact",
    cotizar: "Get a Quote",
  },
  hero: {
    badge: "Elite Protection",
    title1: "Tailored",
    titleHighlight: "Security, Tourism & Transport",
    title2: "Solutions",
    desc: "We guarantee our clients' security, transport and tourism with discipline, loyalty and professionalism.",
    cta1: "Request a Quote",
    cta2: "View Services",
    stats: [
      { num: "25", label: "Elite Professionals" },
      { num: "500+", label: "Satisfied Clients" },
      { num: "4+", label: "Major Cities in Colombia" },
      { num: "2K+", label: "Assets Protected" },
    ],
  },
  services: {
    badge: "Our Services",
    title: "Security, Tourism",
    titleHighlight: "& Transport",
    subtitle:
      "10XASEGLO S.A.S provides global security solutions to protect the physical integrity of assets, properties and people.",
    solicitar: "Request Service",
    verFlota: "View Fleet →",
    items: {
      seguridad: {
        title: "Security",
        description:
          "High-performance private bodyguards with strict training, knowledge and experience in first-class executive protection.",
      },
      transporte: {
        title: "Transport",
        description:
          "Luxury car fleet for comfort, efficiency and safety. Comfortable trips with full guarantee.",
      },
      tour: {
        title: "V.I.P Tour",
        description:
          "Comprehensive solutions: lodging, tourism, transport, security and entertainment 365 days a year.",
      },
      hospedaje: {
        title: "Lodging",
        description:
          "Exclusive lodging in Colombia tailored to your trip: romantic, business or family.",
      },
      entrenamiento: {
        title: "Training & Certification",
        description:
          "Professional training for private bodyguards. Refresher and professional development courses.",
      },
      detective: {
        title: "Private Detective",
        description:
          "Investigation with full professionalism, confidentiality and rigor. Complete and valid reports.",
      },
    },
  },
  operations: {
    badge: "Operations Center",
    title: "Surveillance",
    titleHighlight: "24/7",
    realtime: "Real-time monitoring",
    items: [
      {
        title: "Cutting-Edge Technology",
        description:
          "CCTV camera systems, surveillance drones and recognition software to ensure total security.",
      },
      {
        title: "Immediate Response",
        description:
          "Rapid-reaction protocols with Special Forces-trained personnel, available 24 hours a day.",
      },
      {
        title: "Encrypted Communication",
        description:
          "Secure, encrypted communication channels for coordinating operations in real time.",
      },
    ],
  },
  eliteTeam: {
    badge: "Professional Team",
    title: "High-Level Executive",
    titleHighlight: "Protection",
    p1: "We are a team of 25 professionals with Military Forces experience, approved by the National Government, committed to protecting the lives, assets and peace of mind of those who trust us. More than providing a service, we take on a mission: reliable accompaniment so that every trip, transfer or tourism experience unfolds safely and without interruptions.",
    p2: "Every bodyguard receives continuous training in executive protection, defensive driving, tactical first aid and international security protocols.",
    list: [
      "Current security license",
      "VIP protection training",
      "Tactical and defensive driving",
      "National and international coverage",
    ],
    cta: "Request a Bodyguard",
    overlayTitle: "Elite Bodyguards",
    overlaySub: "Certified former military",
    imgAlt1: "10X ASEGLO professional bodyguard",
    imgAlt2: "10X ASEGLO executive bodyguard",
  },
  whyUs: {
    badge: "What Sets Us Apart",
    title: "Why",
    titleHighlight: "Choose Us",
    titleEnd: "?",
    waText:
      "Questions or need a quote? Our team is ready to assist you right away, 24 hours a day.",
    waLink: "Message us on WhatsApp →",
    items: [
      {
        title: "Perfection at Any Moment",
        description: "Every operation is planned in detail to deliver flawless service, tailored to each client.",
      },
      {
        title: "24/7 Communication",
        description: "A benchmark for consistency, guarantees and professionalism. Direct attention at all times.",
      },
      {
        title: "Our Fleet",
        description: "The best fleet of elite vehicles with all guarantees.",
      },
      {
        title: "Emergency Assistance",
        description: "Fast coverage in case of urgent services.",
      },
      {
        title: "Advanced Technology",
        description: "Cybersecurity, plus top-tier physical, technical and tactical training.",
      },
      {
        title: "Authorized Officers",
        description: "Former Special Forces military approved by the National Government.",
      },
    ],
  },
  testimonials: {
    badge: "Testimonials",
    title: "What Our",
    titleHighlight: "Clients Say",
    trustedBadge: "Trusted by International Figures",
    trustedText:
      "We have provided protection and support to celebrities and public figures during their stays in Colombia.",
    trustedAlt: "10X ASEGLO bodyguard with international figure",
    videosTitle: "Real Video Testimonials",
    items: [
      {
        quote:
          "My experience in Medellín, Colombia was incredible, so beautiful. I thank the security agency because they were great and I felt like family — I got to record my videos and enjoy at the same time.",
        role: "Music entrepreneur, USA",
      },
      {
        quote:
          "I'm very fortunate to have contacted 10X. My trip with my family was spectacular, I felt like an artist. An incredible car just for us, a driver and a professional, charming security detail.",
        role: "International Business, Germany",
      },
      {
        quote:
          "10XASEGLO made my work stay feel like a vacation. They accompanied me through Medellín, Cali, Cartagena and Bogotá, and the security they provided was monumental.",
        role: "International Businessman",
      },
    ],
    bannerOther: "When other companies say:",
    bannerOtherQuote: '"We have to look into it."',
    bannerWe: "At",
    bannerWeSay: "we say:",
    bannerWeQuote: '"The service is already operational."',
  },
  gallery: {
    badge: "Gallery",
    title: "Real",
    titleHighlight: "Moments",
    subtitle:
      "Operations, clients and destinations: this is the 10X ASEGLO experience in Colombia.",
    imgAlt: "10X ASEGLO gallery",
  },
  cta: {
    badge: "Contact",
    title: "Request",
    titleHighlight: "Information",
    desc: "Our technical and commercial team develops tailored security projects, committing to optimize the cost of your security budget.",
    button: "Request a Quote",
  },
  footer: {
    brandDesc:
      "Agency Security Global S.A.S — Comprehensive security solutions in Colombia and worldwide.",
    navTitle: "Navigation",
    servicesTitle: "Services",
    contactTitle: "Contact",
    nav: ["Home", "Services", "About Us", "Contact"],
    services: ["Security", "Transport", "V.I.P Tour", "Lodging", "Training", "Private Detective"],
    rights: "Copyright © 2026 10X Agency Security Global S.A.S — All rights reserved",
  },
  contacto: {
    badge: "Contact",
    title: "Contact Us",
    titleHighlight: "Today",
    desc: "Our technical and commercial team develops tailored security projects for each client. Leave us your details and a Sales Advisor will get in touch with you.",
    whatsappBtn: "Message us on WhatsApp",
    formTitle: "Request a Quote",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@email.com",
    serviceInterest: "Service of Interest",
    serviceOptions: [
      "Security",
      "Transport",
      "V.I.P Tour",
      "Lodging",
      "Training & Certification",
      "Private Detective",
    ],
    message: "Message",
    messagePlaceholder: "Tell us what you need...",
    submit: "Send Request",
  },
  nosotros: {
    badge: "About Us",
    title: "10X Agency",
    titleHighlight: "Security Global",
    subtitle: "Protecting what matters most since 2013",
    historyBadge: "Our Story",
    historyTitle: "10X AGENCY SECURITY",
    historyHighlight: "GLOBAL S.A.S",
    p1: "It began in 2013 as a group of friends who are now former Special Forces military of Colombia, dedicated to offering training and security services. Over the years, we saw that clients needed a trustworthy security agency that offered every guarantee when things get tough.",
    p2pre: "And so 10XASEGLO AGENCY SECURITY GLOBAL S.A.S was born, with the firm intention of protecting and guaranteeing what matters most to us: ",
    p2strong: "the safety of those who trust our brand.",
    p3: "We have positioned ourselves as a benchmark in the sector for being a security agency with a family spirit, grounded in the values of ethics, commitment and loyalty. If anything defines 10XASEGLO, it's being there whenever we are needed, no matter how adverse the situation.",
    quote: '"WE ALWAYS GUARANTEE THE SAFETY OF OUR CLIENTS."',
    stats: [
      { num: "2013", label: "Year Founded" },
      { num: "500+", label: "Clients Protected" },
      { num: "10+", label: "Years of Experience" },
      { num: "2K+", label: "Successful Operations" },
    ],
    values: ["Ethics", "Commitment", "Loyalty"],
    teamBadge: "Our Team",
    teamTitle: "Real",
    teamHighlight: "Bodyguards",
    teamSubtitle:
      "Certified professionals who protect our clients on every operation, inside and outside Colombia.",
    teamAlt: "10X ASEGLO bodyguard team",
    missionTitle: "Mission",
    missionText:
      "To provide comprehensive security, transport and protection solutions with the highest standards of quality, professionalism and advanced technology, ensuring the peace of mind and well-being of our clients at all times.",
    visionTitle: "Vision",
    visionText:
      "To be the most recognized global security agency in Colombia and Latin America, positioning ourselves as the preferred strategic partner for companies and individuals seeking protection, trust and operational excellence.",
    sedesTitle: "Our",
    sedesHighlight: "Locations",
    sedesText: "We operate in the main cities of Colombia with national and international coverage.",
    cities: ["Medellín", "Bogotá", "Cali", "Cartagena"],
  },
  transporte: {
    badge: "Transport Service",
    title: "Premium",
    titleHighlight: "Fleet",
    subtitle:
      "Executive and luxury transport with maximum safety, comfort and efficiency for every need.",
    heroAlt: "10X ASEGLO Transport",
    features: [
      "Armoring available",
      "Trained drivers",
      "Premium fleet",
      "24/7 service",
    ],
    fleetBadge: "Our Fleet",
    fleetTitle: "Executive",
    fleetHighlight: "SUVs",
    fleetSubtitle: "High-end vehicles for executive transport, bodyguards and VIP protection.",
    vansTitle: "Luxury",
    vansHighlight: "Vans",
    vansSubtitle:
      "For larger groups, we offer luxury Mercedes vans with capacity for 9 to 19 passengers.",
    passengers: "passengers",
    selectColor: "Select the color:",
    colorsLabel: "Colors:",
    premium: "Premium",
    cotizar: "Get a Quote",
    colors: {
      white: "White",
      black: "Black",
      blackLux: "Black (Luxury)",
      darkGray: "Dark Gray",
      silver: "Silver",
      gray: "Gray",
    },
  },
};

export const translations: Record<Language, Translation> = { es, en };
