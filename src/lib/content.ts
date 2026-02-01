export const LINKS = {
  stripeCheckout: "https://buy.stripe.com/4gMbJ16yz9NYbe7bEx9ws00",
  vimeoId: "1148993755",
  whatsapp: "https://wa.me/13073818506",
  phone: "+1 (307) 429-3264",
  email: "contacto@pulseagencyusa.com",
  linkedin: "https://www.linkedin.com/company/pulseagencyusa/",
  instagram: "https://www.instagram.com/pulseagencyusa",
  facebook: "https://www.facebook.com/share/1CYuxrYote/?mibextid=wwXIfr",
  reviews: {
    trustpilot: "https://www.trustpilot.com/review/pulseagencyusa.com",
    google: "https://www.google.com/search?q=Pulse+Agency+LLC+Sheridan+Wyoming+reviews"
  }
};

export const t = {
  nav: {
    home: "EL PROBLEMA",
    method: "Metodología",
    cases: "Casos",
    faq: "FAQ",
    cta: "QUIERO ORDENAR MI MARCA",
    contact: "Habla con nosotros",
    whatsapp: "WhatsApp Directo",
    testimonials: "Testimonios"
  },
  hero: {
    titleA: "Haz que tu",
    titleB: "marca",
    titleC: "se vea de",
    titleD: "alto valor",
    titleE: "y atraiga clientes hoy",
    subtitle: "Diagnóstico práctico y accionable para ordenar tu marca, tu mensaje y tus métricas en 7 días.",
    disclaimer: "Acceso inmediato . Sin contratos . Sin llamadas de venta"
  },
  marquee: {
    ua: "CALIFICACIÓN 5.0",
    clients: "500+ CLIENTAS SATISFECHAS"
  },
  pain: {
    title: "¿Esto te está",
    titleHighlight: "pasando?",
    subtitle: "Reconoce los bloqueos que están frenando tu crecimiento."
  },
  value: {
    kicker: "PULSE VISIBILITY SPRINT",
    titleA: "No es un curso. No es teoría.",
    titleB: "Es claridad aplicada a tu marca."
  },
  priceWhy: {
      title: "¿POR QUÉ SOLO $ 27?",
      subtitle: "Un trato en el que no puedes perder.",
      description: "Quiero que ordenar tu marca sea una decisión obvia. No quiero que el precio sea la barrera entre tu situación actual y una marca que proyecta autoridad, atrae clientes de alto valor y escala con precisión estratégica.",
      quote: "Porque creemos que la confianza se construye entregando valor primero, no forzando ventas grandes desde el inicio."
  },
  testimonials: {
      titleA: "Lo que opinan nuestras",
      titleB: "clientas",
      subtitle: "Historias reales de marcas transformadas."
  },
  faq: {
      title: "Resolvemos tus dudas de inmediato...",
      subtitle: "Respondemos tus dudas sobre inversión, metodología y garantías."
  },
  sections: {
    final: {
      titleA: "¿Lista para ordenar tu marca?",
      titleB: "Empieza hoy mismo por solo ...",
      subtitle: "Deja de perder ventas por una imagen que no te representa. Únete a las 500+ marcas que han dado el salto.",
      button: "QUIERO ORDENAR MI MARCA",
      price: "27",
      offer: "Oferta de Lanzamiento",
      disclaimer: "Acceso inmediato . Sin cláusulas ocultas"
    }
  },
  footer: {
      description: "Escalando el futuro de los negocios de alto valor en EE.UU. mediante Inteligencia Artificial y Automatización Estratégica.",
      linksTitle: "EMPRESA",
      legalTitle: "LEGAL",
      contactTitle: "CONTACTO DIRECTO",
      complianceTitle: "COMPLIANCE US",
      address: "30 North Gould St Ste R Sheridan, WY 82801",
      phone: "+1 (307) 429-3264",
      email: "contacto@pulseagencyusa.com",
      legal: "Legal",
      privacy: "Politica de Privacidad",
      terms: "Terminos y condiciones",
      rights: "TODOS LOS DERECHOS RESERVADOS.",
      badges: ["CCPA (CA)", "FIPA (FL)", "TDPSA (TX)"],
      disclaimer: "Cumplimiento estricto: CCPA (CA), FIPA (FL), TDPSA (TX)."
  }
} as const;

export const PAIN_POINTS = [
  {
    title: "Mi marca no se ve seria",
    description: "Sientes que tu imagen no refleja el valor real de tu servicio.",
    dotColor: "from-red-500 to-orange-500"
  },
  {
    title: "Publico, pero no vendo",
    description: "Creas contenido pero el cliente ideal no te contacta.",
    dotColor: "from-fuchsia-500 to-violet-500"
  },
  {
    title: "Ya perdí dinero con agencias",
    description: "Experiencias pasadas te han hecho dudar de la inversión digital.",
    dotColor: "from-cyan-500 to-blue-500"
  },
  {
    title: "No tengo métricas claras",
    description: "No sabes de dónde vienen tus ventas ni cómo escalarlas.",
    dotColor: "from-emerald-500 to-teal-500"
  }
];

export const VALUE_CARDS = [
  {
    title: "Diagnóstico profesional",
    description: "Análisis profundo de tu marca y redes sociales con directrices optimizadas.",
    icon: "Target"
  },
  {
    title: "Auditoria visual",
    description: "Revisión de imagen, voz y coherencia visual para una marca profesional.",
    icon: "Zap"
  },
  {
    title: "Diagnóstico de mensaje",
    description: "Evaluamos qué dices y cómo realmente conectas con el mercado.",
    icon: "Rocket"
  },
  {
    title: "Mini roadmap personalizado",
    description: "Un plan claro de 90 dias adaptado a los objetivos de tu negocio.",
    icon: "Clock"
  },
  {
    title: "Checklist Marca de Alto Valor",
    description: "Guia paso a paso para asegurar que tu marca cumpla los estándares profesionales.",
    icon: "CheckCircle2"
  },
  {
    title: "Base de métricas",
    description: "Establece un embudo de ventas real con indicadores claves y retorno de inversión.",
    icon: "BarChart3"
  }
];

export const TESTIMONIALS = [
  { name: "Andrea R.", text: "Por fin entendí qué estaba fallando en mi marca. Todo tiene sentido.", brand: "Founder", stars: 5, image: "https://i.pravatar.cc/150?u=Andrea", source: "Google", sourceIcon: "google" },
  { name: "Mariana L.", text: "No me vendieron humo. Me dieron claridad y estructura.", brand: "Mentora", stars: 5, image: "https://i.pravatar.cc/150?u=Mariana", source: "Trustpilot", sourceIcon: "star" },
  { name: "Sofía P.", text: "Un antes y un después. Ya no me siento perdida.", brand: "CEO Brand", stars: 5, image: "https://i.pravatar.cc/150?u=Sofia", source: "Google", sourceIcon: "google" }
];

export const FAQS = [
  {
    question: "¿Esto me va a ayudar a vender más?",
    answer: "Te ayuda a ordenar tu marca y mensaje, que es el primer paso real para vender mejor."
  },
  {
    question: "¿Tengo que saber marketing?",
    answer: "No. Está pensado para emprendedoras que quieren delegar y entender lo básico."
  },
  {
    question: "¿Hay contrato o compromiso?",
    answer: "No. Es una compra única."
  },
  {
    question: "¿Luego me van a presionar para comprar algo más?",
    answer: "No. Solo te mostraremos el siguiente paso si tiene sentido para ti."
  }
];

