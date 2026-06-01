import type { Dictionary } from "@/lib/content/types";
import { images } from "@/lib/content/images";

/**
 * English (en) mirror of the Portuguese source of truth.
 * Whole-page translation per PLAN.md — no mixed PT/EN content.
 */
export const en: Dictionary = {
  chrome: {
    langSwitchLabel: "Português",
    header: {
      logo: "Semana Solidária",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    nav: {
      home: "Home",
      program: "Programme",
      location: "Location",
      organization: "Organisation",
      volunteeringDay: "Volunteering Day",
      privacy: "Privacy",
    },
    footer: {
      brandName: "Semana Solidária",
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
      title: "Home — Semana Solidária U.Porto",
      description:
        "Week of Citizenship, Volunteering and Social Responsibility at the University of Porto. 21–26 September 2026. Organised by ReVIReS.",
    },
    hero: {
      chip: "U.PORTO · SEPTEMBER 2026",
      title: "Semana Solidária U.Porto",
      subtitle:
        "Week of Citizenship, Volunteering and Social Responsibility — 21 to 26 September 2026",
      countdownAriaLabel: "Countdown to the opening ceremony",
      countdownUnits: {
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
      },
      countdownNoscript: "Opening ceremony: 21 September 2026, 11:30.",
      countdownEnded: "The Semana Solidária has begun!",
      primaryCta: "View programme",
      secondaryCta: "How to take part",
    },
    intro: {
      heading: "About the Semana Solidária",
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
      caption: "Discover the Semana Solidária",
      ariaLabel: "Watch video: Discover the Semana Solidária",
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
      body: "Join the movement. Share your experience and inspire others to be part of the Semana Solidária.",
      cta: "Share on social media",
      notice: "Social media links are being updated.",
    },
  },

  program: {
    meta: {
      title: "Programme — Semana Solidária U.Porto",
      description:
        "Programme for the Week of Citizenship, Volunteering and Social Responsibility at the University of Porto. 21–26 September 2026.",
    },
    hero: {
      chip: "Semana Solidária · U.Porto",
      title: "Programme",
      subtitle: "21 to 26 September 2026",
    },
    intro: {
      heading: { title: "A Week of Impact", subtitle: "6 days of solidarity actions" },
      lede: "The Semana Solidária brings the U.Porto community together around citizenship, volunteering and social responsibility. Discover the activities and join us.",
    },
    opening: {
      heading: { title: "Opening Day · 21 Sep", subtitle: "First day's programme" },
      entries: [
        {
          time: "10:00",
          datetime: "2026-09-21T10:00",
          title: "Opening Ceremony",
          description: "U.Porto Rectory · Salão Nobre",
          thumb: images.program.opening[0],
        },
        {
          time: "11:30",
          datetime: "2026-09-21T11:30",
          title: "Panel “Volunteering in Higher Education”",
          description: "Rectory · Sala de Atos",
          thumb: images.program.opening[1],
        },
        {
          time: "14:30",
          datetime: "2026-09-21T14:30",
          title: "Integration Workshop",
          description: "FADEUP · Sports Hall",
          thumb: images.program.opening[2],
        },
      ],
    },
    highlights: {
      heading: { title: "Featured Activities", subtitle: "Experiences that make a difference" },
      cards: [
        {
          image: images.program.highlights[0],
          chip: "Workshop",
          title: "Inclusive Communication",
          text: "FLUP · 22 Sep · 14:00–16:00",
        },
        {
          image: images.program.highlights[1],
          chip: "Social Action",
          title: "Food Bank",
          text: "FEUP · 23 Sep · 09:00–13:00",
        },
        {
          image: images.program.highlights[2],
          chip: "Conference",
          title: "Sustainability and Community",
          text: "FCUP · 24 Sep · 10:00–12:00",
        },
      ],
    },
    daily: {
      heading: { title: "Daily Activities", subtitle: "Programming throughout the week" },
      cards: [
        {
          image: images.program.daily[0],
          chip: "Workshop",
          title: "Inclusive Design",
          text: "FBAUP · 22 Sep · 14:00–16:00",
        },
        {
          image: images.program.daily[1],
          chip: "Volunteering",
          title: "Community Clean-up",
          text: "Palácio Gardens · 23 Sep · 09:00–12:00",
        },
        {
          image: images.program.daily[2],
          chip: "Debate",
          title: "Mental Health on Campus",
          text: "FMUP · 23 Sep · 15:00–17:00",
        },
        {
          image: images.program.daily[3],
          chip: "Training",
          title: "First Aid",
          text: "ICBAS · 24 Sep · 10:00–13:00",
        },
        {
          image: images.program.daily[4],
          chip: "Culture",
          title: "Solidarity Exhibition",
          text: "FBAUP · 25 Sep · All day",
        },
      ],
      notice: "Programme subject to change.",
    },
    closing: {
      heading: { title: "Closing Day · 26 Sep", subtitle: "Last day's programme" },
      entries: [
        {
          time: "10:00",
          datetime: "2026-09-26T10:00",
          title: "Collective Reflection",
          description: "Porto Botanical Garden",
          thumb: images.program.closing[0],
        },
        {
          time: "14:00",
          datetime: "2026-09-26T14:00",
          title: "Closing Activity",
          description: "U.Porto Rectory",
          thumb: images.program.closing[1],
        },
        {
          time: "16:30",
          datetime: "2026-09-26T16:30",
          title: "Closing Ceremony",
          description: "Rectory · Salão Nobre",
          thumb: images.program.closing[2],
        },
      ],
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
      title: "Location — Semana Solidária U.Porto",
      description:
        "The three campuses of the University of Porto, participating faculties and community venues hosting the Semana Solidária 2026.",
    },
    hero: {
      chip: "Semana Solidária · U.Porto",
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
      title: "Organisation — Semana Solidária U.Porto",
      description:
        "ReVIReS — the University of Porto's Network for Volunteering, Inclusion and Social Responsibility. Who organises the Semana Solidária 2026.",
    },
    hero: {
      chip: "Semana Solidária · U.Porto",
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
      body: "Join the movement. Share your experience and inspire others to be part of the Semana Solidária.",
      cta: "Share on social media",
      notice: "Links being updated.",
    },
  },

  privacy: {
    meta: {
      title: "Privacy — Semana Solidária U.Porto",
      description: "Privacy notice for the Semana Solidária at the University of Porto.",
    },
    hero: {
      chip: "Semana Solidária · U.Porto",
      title: "Privacy",
      subtitle: "Privacy notice for the Semana Solidária U.Porto",
    },
    title: "Privacy notice",
    sections: [
      {
        heading: "Image capture",
        body: "During the Semana Solidária, photographs and videos may be taken for institutional communication purposes by U.Porto and partner organisations. Participation in the activities implies consent to the use of these images on official channels.",
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

  volunteeringDay: {
    meta: {
      title: "International Volunteer Day — Semana Solidária U.Porto",
      description:
        "International Volunteer Day at the University of Porto. 4 and 5 December 2026. Photography contest, volunteering award and round table.",
    },
    hero: {
      chip: "Semana Solidária · U.Porto",
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
      eyebrow: "Semana Solidária · U.Porto",
      title: "Discover the full programme",
      body: "This celebration is part of the Semana Solidária U.Porto, from 21 to 26 September 2026.",
      button: "View Full Programme",
    },
  },

  notFound: {
    meta: {
      title: "Page not found — Semana Solidária U.Porto",
      description: "The page you are looking for was not found.",
    },
    code: "404",
    title: "Page not found",
    subtitle: "Página não encontrada",
    subtitleLang: "pt-PT",
    button: "Home page",
  },
};
