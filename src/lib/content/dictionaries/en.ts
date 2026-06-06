import type { Dictionary } from "@/lib/content/types";
import { images } from "@/lib/content/images";

/**
 * English (en) mirror of the Portuguese source of truth.
 * Whole-page translation per PLAN.md — no mixed PT/EN content.
 */
export const en: Dictionary = {
  chrome: {
    langSwitchLabel: "Português",
    skipToContent: "Skip to content",
    header: {
      logo: "Semana #SerCidadão",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    nav: {
      home: "Home",
      program: "Programme",
      location: "Location",
      organization: "Organisation",
      volunteeringDay: "Volunteering Day",
      faq: "FAQ",
      privacy: "Privacy",
    },
    footer: {
      brandName: "Semana #SerCidadão",
      dates: "21–26 September 2026",
      org: "U.Porto · ReVIReS",
      tagline: "Citizenship, Volunteering and Social Responsibility",
      navLabel: "Navigation",
      contactLabel: "Contact",
      contactEmail: "revires@up.pt",
      contactLines: ["U.Porto Rectory", "Praça de Gomes Teixeira, Porto"],
      copyright: "© 2026 University of Porto",
      privacyLabel: "Privacy Policy",
    },
  },

  home: {
    meta: {
      title: "Home — Semana #SerCidadão",
      description:
        "Week of Citizenship, Volunteering and Social Responsibility at the University of Porto. 21–26 September 2026. Organised by ReVIReS.",
    },
    announcement: {
      label: "Starts in",
      units: { days: "days", hours: "hrs", minutes: "min", seconds: "sec" },
      ariaLabel: "Countdown to the start of the Semana #SerCidadão",
      noscript: "21–26 September 2026",
      ended: "The Semana #SerCidadão is underway!",
    },
    hero: {
      chip: "U.PORTO · SEPTEMBER 2026",
      title: "Semana #SerCidadão",
      subtitle:
        "Week of Citizenship, Volunteering and Social Responsibility — 21 to 26 September 2026",
      primaryCta: "View programme",
      secondaryCta: "How to take part",
    },
    intro: {
      heading: "About the Semana #SerCidadão",
      body: "A week dedicated to citizenship and volunteering, promoted by ReVIReS — the University of Porto's Network for Volunteering, Inclusion and Social Responsibility. Over six days the University opens its doors to volunteering, awareness and sharing activities.",
      cta: "Learn more",
      imageAlt: "U.Porto students in a volunteering activity",
    },
    highlights: {
      heading: { title: "Week highlights", subtitle: "Confirmed activities" },
      cards: [
        {
          image: images.home.highlights[0],
          chip: "Opening",
          title: "Opening Ceremony",
          text: "U.Porto Rectory · 21 September",
        },
        {
          image: images.home.highlights[1],
          chip: "All week",
          title: "Volunteering Activities",
          text: "Several faculties · 22 to 25 September",
        },
        {
          image: images.home.highlights[2],
          chip: "Closing",
          title: "Solidarity Walk",
          text: "Route through central Porto · 26 September",
        },
      ],
    },
    video: {
      srTitle: "Institutional video",
      caption: "Discover the Semana #SerCidadão",
      ariaLabel: "Watch video: Discover the Semana #SerCidadão",
    },
    ods: {
      heading: {
        title: "Sustainable Development Goals",
        subtitle:
          "This week's activities align with the United Nations Sustainable Development Goals.",
      },
      notice: "Mapping of activities to the SDGs is being updated.",
    },
    partners: {
      title: "Partners",
      items: [
        { src: images.home.partners[0], alt: "Porto City Council" },
        { src: images.home.partners[1], alt: "Caixa Geral de Depósitos" },
        { src: images.home.partners[2], alt: "Porto Academic Federation" },
        { src: images.home.partners[3], alt: "Student Associations" },
        { src: images.home.partners[4], alt: "Volunteering Associations" },
        { src: images.home.partners[5], alt: "U.Porto Sports Centre" },
        { src: images.home.partners[6], alt: "BAMBUP" },
      ],
    },
    social: {
      eyebrow: "Share on social media",
      title: "#VoluntariadoUPorto",
      body: "Join the movement. Share your experience and inspire others to be part of the Semana #SerCidadão.",
      shareLabel: "Share",
      shareOn: "Share on",
      copyLabel: "Copy link",
      copiedLabel: "Link copied!",
      shareText: "Join the Semana #SerCidadão, 21–26 September 2026. #VoluntariadoUPorto",
    },
  },

  program: {
    meta: {
      title: "Programme — Semana #SerCidadão",
      description:
        "Programme for the Week of Citizenship, Volunteering and Social Responsibility at the University of Porto. 21–26 September 2026.",
    },
    hero: {
      chip: "Semana #SerCidadão · U.Porto",
      title: "Programme",
      subtitle: "21 to 26 September 2026",
    },
    intro: {
      heading: { title: "A Week of Impact", subtitle: "6 days of solidarity actions" },
      lede: "The Semana #SerCidadão brings the U.Porto community together around citizenship, volunteering and social responsibility. Discover the activities and join us.",
    },
    schedule: {
      heading: { title: "Week Programme", subtitle: "Pick a day to see its activities" },
      tabsLabel: "Event days",
      dayTabs: {
        1: { short: "Mon 21", long: "Monday, 21 September" },
        2: { short: "Tue 22", long: "Tuesday, 22 September" },
        3: { short: "Wed 23", long: "Wednesday, 23 September" },
        4: { short: "Thu 24", long: "Thursday, 24 September" },
        5: { short: "Fri 25", long: "Friday, 25 September" },
        6: { short: "Sat 26", long: "Saturday, 26 September" },
      },
      activities: {
        "d1-abertura": {
          title: "Opening Ceremony",
          description: "Official opening of the Semana #SerCidadão, with the Rectory and the ReVIReS team.",
          venueLabel: "U.Porto Rectory · Salão Nobre",
        },
        "d1-painel": {
          title: "Panel “Volunteering in Higher Education”",
          description: "A conversation with students, lecturers and social institutions on volunteering in academia.",
          venueLabel: "Rectory · Sala de Atos",
        },
        "d1-workshop-integracao": {
          title: "Integration Workshop",
          description: "Group dynamics to meet fellow volunteers and form teams for the week.",
          venueLabel: "FADEUP · Sports Hall",
        },
        "d1-caminhada": {
          title: "Solidarity Walk",
          description: "An accessible route through the gardens, open to the whole community.",
          venueLabel: "Crystal Palace Gardens · Main entrance",
        },
        "d2-recolha-bens": {
          title: "Essential Goods Collection",
          description: "Sorting and packing donated goods for partner institutions.",
          venueLabel: "FPCEUP · Atrium",
        },
        "d2-comunicacao-inclusiva": {
          title: "Inclusive Communication",
          description: "Hands-on workshop on clear, accessible and non-discriminatory language.",
          venueLabel: "FLUP · Amphitheatre 1",
        },
        "d2-design-inclusivo": {
          title: "Inclusive Design",
          description: "Universal design principles applied to solidarity communication materials.",
          venueLabel: "FBAUP · Project Room",
        },
        "d2-cinema-cidadania": {
          title: "Cinema and Citizenship Series",
          description: "Documentary screening followed by a conversation with guests.",
          venueLabel: "Rectory · Auditorium",
        },
        "d3-banco-alimentar": {
          title: "Food Bank",
          description: "Food collection and sorting campaign with U.Porto volunteers.",
          venueLabel: "FEUP · Pavilion B",
        },
        "d3-limpeza-comunitaria": {
          title: "Community Clean-up",
          description: "Environmental action cleaning and caring for the city's green spaces.",
          venueLabel: "Crystal Palace Gardens",
        },
        "d3-saude-mental": {
          title: "Mental Health on Campus",
          description: "A debate on well-being and peer support in higher education.",
          venueLabel: "FMUP · Aula Magna",
        },
        "d3-teatro-oprimido": {
          title: "Theatre of the Oppressed Workshop",
          description: "Participatory theatre exploring exclusion and active citizenship.",
          venueLabel: "FLUP · Multipurpose Room",
        },
        "d4-dadiva-sangue": {
          title: "Blood Donation",
          description: "Blood collection session in partnership with the Portuguese Blood Institute.",
          venueLabel: "Rectory · Exhibition Room",
        },
        "d4-sustentabilidade": {
          title: "Sustainability and Community",
          description: "Conference on local sustainability projects and social impact.",
          venueLabel: "FCUP · Main Auditorium",
        },
        "d4-primeiros-socorros": {
          title: "First Aid",
          description: "Basic life-support training with a certificate of participation.",
          venueLabel: "ICBAS · Skills Laboratory",
        },
        "d4-torneio-interfaculdades": {
          title: "Inter-Faculty Solidarity Tournament",
          description: "Sports tournament whose entry fees go to social causes.",
          venueLabel: "University Stadium · Outdoor pitches",
        },
        "d5-jardim-botanico": {
          title: "Volunteering at the Botanical Garden",
          description: "A morning of garden maintenance supporting the gardening team.",
          venueLabel: "Porto Botanical Garden",
        },
        "d5-exposicao-solidaria": {
          title: "Solidarity Exhibition",
          description: "Showcase of student work; sale proceeds support social projects.",
          venueLabel: "FBAUP · Museum",
        },
        "d5-projetos-voluntariado": {
          title: "How to Start a Volunteering Project",
          description: "Practical workshop on turning a solidarity idea into a sustainable project.",
          venueLabel: "FPCEUP · Room 204",
        },
        "d5-concerto-solidario": {
          title: "Solidarity Concert",
          description: "Performance by U.Porto music groups with entry by donation.",
          venueLabel: "Rectory · Inner courtyard",
        },
        "d6-corrida-solidaria": {
          title: "U.Porto Solidarity Run",
          description: "Run and walk open to the city; registration fees go to partner institutions.",
          venueLabel: "University Stadium · Athletics track",
        },
        "d6-reflexao-coletiva": {
          title: "Collective Reflection",
          description: "A shared look back at the week with volunteers, organizations and participants.",
          venueLabel: "Porto Botanical Garden",
        },
        "d6-mostra-projetos": {
          title: "Solidarity Projects Showcase",
          description: "Presentation of the projects and partnerships born during the week.",
          venueLabel: "U.Porto Rectory · Cloister",
        },
        "d6-cerimonia-encerramento": {
          title: "Closing Ceremony",
          description: "Closing session with recognition awards for the volunteers.",
          venueLabel: "Rectory · Salão Nobre",
        },
      },
      categories: {
        conference: "Conference",
        volunteering: "Volunteering",
        workshop: "Workshop",
        sport: "Sport",
        culture: "Culture",
      },
      venues: {
        reitoria: "U.Porto Rectory",
        feup: "FEUP — Faculty of Engineering",
        flup: "FLUP — Faculty of Arts and Humanities",
        fcup: "FCUP — Faculty of Sciences",
        fbaup: "FBAUP — Faculty of Fine Arts",
        fmup: "FMUP — Faculty of Medicine",
        icbas: "ICBAS — School of Medicine and Biomedical Sciences",
        fpceup: "FPCEUP — Faculty of Psychology and Education Sciences",
        fadeup: "FADEUP — Faculty of Sport",
        estadio: "University of Porto Stadium",
        jardimBotanico: "Porto Botanical Garden",
        palacioCristal: "Crystal Palace Gardens",
      },
      filterLabel: "Filter by category",
      filterAllLabel: "All",
      capacityLabel: "Capacity: {n} participants",
      mapHeading: { title: "Activity Map", subtitle: "Venues for the selected day's activities" },
      mapAriaLabel: "Map with the locations of the selected day's activities",
      emptyState: "No activities match the selected filters.",
      dayAnnounce: "Showing {day} — {count} activities",
      notice: "Provisional programme — activities, times and venues subject to confirmation.",
    },
    participate: {
      heading: { title: "How to Take Part", subtitle: "Join the community" },
      cards: [
        {
          image: images.program.participate[0],
          title: "Online Registration",
          subtitle: "Secure your place",
          href: "#registration",
        },
        {
          image: images.program.participate[1],
          title: "Volunteering",
          subtitle: "Become a volunteer",
          href: "#volunteering",
        },
        {
          image: images.program.participate[2],
          title: "Contact Us",
          subtitle: "Get in touch",
          href: "mailto:revires@up.pt",
        },
      ],
    },
    note: "The full programme will be announced soon. Activities subject to confirmation.",
  },

  location: {
    meta: {
      title: "Location — Semana #SerCidadão",
      description:
        "The three campuses of the University of Porto, participating faculties and community venues hosting the Semana #SerCidadão 2026.",
    },
    hero: {
      chip: "Semana #SerCidadão · U.Porto",
      title: "Location",
      subtitle: "Three campuses, several faculties, community venues",
    },
    polos: {
      heading: { title: "U.Porto Campuses", subtitle: "Three campuses, one university" },
      cards: [
        {
          image: images.location.polos[0],
          chip: "Campus I",
          title: "Historic Centre",
          text: "Rectory · FLUP · FDUP · FMUP",
        },
        {
          image: images.location.polos[1],
          chip: "Campus II",
          title: "Asprela Campus",
          text: "FEUP · FCUP · FEP · FADEUP · ICBAS",
        },
        {
          image: images.location.polos[2],
          chip: "Campus III",
          title: "Campo Alegre",
          text: "FCNAUP · FBAUP · Sciences",
        },
      ],
    },
    faculties: {
      heading: {
        title: "Participating Faculties",
        subtitle: "The faculties hosting activities",
      },
      notice: "List being updated.",
    },
    community: {
      heading: { title: "Community Venues", subtitle: "Partners and institutions off campus" },
      lede: "Several non-profit institutions and partner organisations in the Porto metropolitan area host activities throughout the week.",
      notice: "Information being updated.",
    },
    estadio: {
      heading: "University Stadium",
      body: "The University Stadium will be the finish point of the solidarity walk and the stage for the closing activities on 26 September.",
      cta: "View Location",
      imageAlt: "University Stadium of Porto",
      notice: "Address and access being updated.",
    },
    transport: {
      heading: { title: "Getting There", subtitle: "Transport and access" },
      notice: "Information being updated.",
    },
  },

  organization: {
    meta: {
      title: "Organisation — Semana #SerCidadão",
      description:
        "ReVIReS — the University of Porto's Network for Volunteering, Inclusion and Social Responsibility. Who organises the Semana #SerCidadão 2026.",
    },
    hero: {
      chip: "Semana #SerCidadão · U.Porto",
      title: "Organisation",
      subtitle:
        "ReVIReS — Network for Volunteering, Inclusion and Social Responsibility of U.Porto",
    },
    about: {
      heading: "About ReVIReS",
      body: "ReVIReS is the University of Porto's Network for Volunteering, Inclusion and Social Responsibility. It promotes active citizenship and volunteering among students, faculty and staff, working with community partners.",
      imageAlt: "ReVIReS team in a working session",
      notice: "Detailed description being updated.",
    },
    video: {
      srTitle: "ReVIReS institutional video",
      caption: "Get to know ReVIReS",
      ariaLabel: "Watch video: Get to know ReVIReS",
    },
    partners: {
      heading: { title: "Partners", subtitle: "Who supports us" },
      items: [
        { src: images.organization.partners[0], alt: "Porto City Council" },
        { src: images.organization.partners[1], alt: "Caixa Geral de Depósitos" },
        { src: images.organization.partners[2], alt: "Porto Academic Federation" },
        { src: images.organization.partners[3], alt: "Student Associations" },
        { src: images.organization.partners[4], alt: "Volunteering Associations" },
        { src: images.organization.partners[5], alt: "U.Porto Sports Centre" },
        { src: images.organization.partners[6], alt: "BAMBUP" },
      ],
      notice: "Logos being updated.",
    },
    contact: {
      heading: { title: "Contact", subtitle: "Get in touch" },
      notice: "Contact information being updated.",
    },
    social: {
      eyebrow: "Share on social media",
      title: "#VoluntariadoUPorto",
      body: "Join the movement. Share your experience and inspire others to be part of the Semana #SerCidadão.",
      shareLabel: "Share",
      shareOn: "Share on",
      copyLabel: "Copy link",
      copiedLabel: "Link copied!",
      shareText: "Join the Semana #SerCidadão, 21–26 September 2026. #VoluntariadoUPorto",
    },
  },

  privacy: {
    meta: {
      title: "Privacy — Semana #SerCidadão",
      description: "Privacy notice for the Semana #SerCidadão at the University of Porto.",
    },
    hero: {
      chip: "Semana #SerCidadão · U.Porto",
      title: "Privacy",
      subtitle: "Privacy notice for the Semana #SerCidadão",
    },
    title: "Privacy notice",
    sections: [
      {
        heading: "Image capture",
        body: "During the Semana #SerCidadão, photographs and videos may be taken for institutional communication purposes by U.Porto and partner organisations. Participation in the activities implies consent to the use of these images on official channels.",
      },
      {
        heading: "Personal data",
        body: "This website does not collect personal data and does not use forms, cookies or analytics tools. Browsing is entirely anonymous.",
      },
      {
        heading: "Institutional policy",
        body: "For detailed information about the University of Porto's privacy policy, please consult the U.Porto institutional portal.",
      },
    ],
    notice: "Full notice being updated.",
  },

  faq: {
    meta: {
      title: "Frequently Asked Questions — Semana #SerCidadão",
      description:
        "Answers to the most frequent questions about the Semana #SerCidadão: participation, registration, certificates, activity duration and image use.",
    },
    hero: {
      chip: "Semana #SerCidadão · U.Porto",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know to take part in the Semana #SerCidadão",
    },
    title: "Frequently asked questions",
    items: [
      {
        question: "Who can take part?",
        answer: "Answer being updated.",
      },
      {
        question: "Are there age limits? Is participation free?",
        answer: "Answer being updated.",
      },
      {
        question: "How can I become a volunteer at U.Porto?",
        answer: "Answer being updated.",
      },
      {
        question: "Do the activities award a certificate?",
        answer: "Answer being updated.",
      },
      {
        question: "How long do the activities last?",
        answer: "Answer being updated.",
      },
      {
        question: "How do I register?",
        answer: "Answer being updated.",
      },
      {
        question: "How are images and photographs taken during the event used?",
        answer: "Answer being updated.",
      },
    ],
    notice: "Answers being updated — this page will be completed soon.",
  },

  volunteeringDay: {
    meta: {
      title: "International Volunteer Day — Semana #SerCidadão",
      description:
        "International Volunteer Day at the University of Porto. 4 and 5 December 2026. Photography contest, volunteering award and round table.",
    },
    hero: {
      chip: "Semana #SerCidadão · U.Porto",
      title: "International Volunteer Day",
      subtitle: "4 and 5 December 2026",
    },
    contest: {
      heading: {
        title: "Photography Contest",
        subtitle: "International Year of Volunteers for Sustainable Development",
      },
      cards: [
        {
          image: images.volunteeringDay.contest[0],
          chip: "Theme",
          title: "Volunteering and Sustainability",
          text: "Photographs capturing the impact of volunteering on sustainable development.",
        },
        {
          image: images.volunteeringDay.contest[1],
          chip: "Exhibition",
          title: "Rectory, 4 Dec",
          text: "Exhibition of the finalist works in the atrium of the U.Porto Rectory.",
        },
        {
          image: images.volunteeringDay.contest[2],
          chip: "Rules",
          title: "Entries and Rules",
          text: "Rules in preparation.",
        },
      ],
      notice: "Information about jury and prizes being updated.",
    },
    award: {
      heading: {
        title: "Volunteering Day Award",
        subtitle: "Recognising outstanding volunteering",
      },
      entries: [
        {
          time: "4 Dec",
          datetime: "2026-12-04",
          title: "Award Ceremony",
          description: "Recognition of outstanding volunteers and projects at U.Porto.",
          thumb: images.volunteeringDay.award,
        },
      ],
      notice: "Criteria being updated.",
    },
    roundTable: {
      heading: "Round Table",
      body: "A session sharing volunteering experiences, with testimonies from volunteers and partner organisations of U.Porto.",
      imageAlt: "Round table session at U.Porto",
      notice: "Details being updated.",
    },
    cta: {
      eyebrow: "Semana #SerCidadão · U.Porto",
      title: "Discover the full programme",
      body: "This celebration is part of the Semana #SerCidadão, from 21 to 26 September 2026.",
      button: "View Full Programme",
    },
  },

  notFound: {
    meta: {
      title: "Page not found — Semana #SerCidadão",
      description: "The page you are looking for was not found.",
    },
    code: "404",
    title: "Page not found",
    subtitle: "Página não encontrada",
    subtitleLang: "pt-PT",
    button: "Home page",
  },
};
