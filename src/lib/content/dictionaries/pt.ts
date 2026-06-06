import type { Dictionary } from "@/lib/content/types";
import { images } from "@/lib/content/images";

/**
 * European Portuguese (pt-PT) — the source of truth for all copy.
 * Transcribed from the legacy static site under `src/pt/`.
 */
export const pt: Dictionary = {
  chrome: {
    langSwitchLabel: "English",
    skipToContent: "Saltar para o conteúdo",
    header: {
      logo: "Semana #SerCidadão",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    nav: {
      home: "Início",
      program: "Programa",
      location: "Localização",
      organization: "Organização",
      volunteeringDay: "Dia do Voluntariado",
      faq: "FAQ",
      privacy: "Privacidade",
    },
    footer: {
      brandName: "Semana #SerCidadão",
      dates: "21 a 26 de setembro de 2026",
      org: "U.Porto · ReVIReS",
      tagline: "Cidadania, Voluntariado e Responsabilidade Social",
      navLabel: "Navegação",
      contactLabel: "Contacto",
      contactEmail: "revires@up.pt",
      contactLines: ["Reitoria da U.Porto", "Praça de Gomes Teixeira, Porto"],
      copyright: "© 2026 Universidade do Porto",
      privacyLabel: "Política de Privacidade",
    },
  },

  home: {
    meta: {
      title: "Início — Semana #SerCidadão",
      description:
        "Semana da Cidadania, Voluntariado e Responsabilidade Social da Universidade do Porto. 21 a 26 de setembro de 2026. Organização: ReVIReS.",
    },
    announcement: {
      label: "Começa em",
      units: { days: "dias", hours: "horas", minutes: "min", seconds: "seg" },
      ariaLabel: "Contagem decrescente para o início da Semana #SerCidadão",
      noscript: "21 a 26 de setembro de 2026",
      ended: "A Semana #SerCidadão está a decorrer!",
    },
    hero: {
      chip: "U.PORTO · SETEMBRO 2026",
      title: "Semana #SerCidadão",
      subtitle:
        "Semana da Cidadania, Voluntariado e Responsabilidade Social — 21 a 26 de setembro de 2026",
      primaryCta: "Ver programa",
      secondaryCta: "Como participar",
    },
    intro: {
      heading: "Sobre a Semana #SerCidadão",
      body: "Uma semana dedicada à cidadania e ao voluntariado, promovida pela ReVIReS — Rede de Voluntariado, Inclusão e Responsabilidade Social da Universidade do Porto. Durante seis dias a Universidade abre as suas portas a ações de voluntariado, sensibilização e partilha.",
      cta: "Saber mais",
      imageAlt: "Estudantes da U.Porto em atividade de voluntariado",
    },
    highlights: {
      heading: { title: "A semana em destaque", subtitle: "Atividades confirmadas" },
      cards: [
        {
          image: images.home.highlights[0],
          chip: "Abertura",
          title: "Cerimónia de Abertura",
          text: "Reitoria da U.Porto · 21 de setembro",
        },
        {
          image: images.home.highlights[1],
          chip: "Toda a semana",
          title: "Ações de Voluntariado",
          text: "Diversas faculdades · 22 a 25 de setembro",
        },
        {
          image: images.home.highlights[2],
          chip: "Encerramento",
          title: "Caminhada Solidária",
          text: "Percurso pelo centro do Porto · 26 de setembro",
        },
      ],
    },
    video: {
      srTitle: "Vídeo institucional",
      caption: "Descobre a Semana #SerCidadão",
      ariaLabel: "Ver vídeo: Descobre a Semana #SerCidadão",
    },
    ods: {
      heading: {
        title: "Objetivos de Desenvolvimento Sustentável",
        subtitle:
          "As atividades desta semana alinham-se com os Objetivos de Desenvolvimento Sustentável da ONU.",
      },
      notice: "Mapeamento das atividades aos ODS em atualização.",
    },
    partners: {
      title: "Parceiros",
      items: [
        { src: images.home.partners[0], alt: "Câmara Municipal do Porto" },
        { src: images.home.partners[1], alt: "Caixa Geral de Depósitos" },
        { src: images.home.partners[2], alt: "Federação Académica do Porto" },
        { src: images.home.partners[3], alt: "Associações de Estudantes" },
        { src: images.home.partners[4], alt: "Associações de Voluntariado" },
        { src: images.home.partners[5], alt: "Centro de Desporto da U.Porto" },
        { src: images.home.partners[6], alt: "BAMBUP" },
      ],
    },
    social: {
      eyebrow: "Partilhe nas redes sociais",
      title: "#VoluntariadoUPorto",
      body: "Junte-se ao movimento. Partilhe a sua experiência e inspire outros a fazer parte da Semana #SerCidadão.",
      shareLabel: "Partilhar",
      shareOn: "Partilhar no",
      copyLabel: "Copiar ligação",
      copiedLabel: "Ligação copiada!",
      shareText: "Participe na Semana #SerCidadão, de 21 a 26 de setembro de 2026. #VoluntariadoUPorto",
    },
  },

  program: {
    meta: {
      title: "Programa — Semana #SerCidadão",
      description:
        "Programa da Semana da Cidadania, Voluntariado e Responsabilidade Social da Universidade do Porto. 21 a 26 de setembro de 2026.",
    },
    hero: {
      chip: "Semana #SerCidadão · U.Porto",
      title: "Programa",
      subtitle: "21 a 26 de setembro 2026",
    },
    intro: {
      heading: { title: "Uma Semana de Impacto", subtitle: "6 dias de ações solidárias" },
      lede: "A Semana #SerCidadão reúne a comunidade da U.Porto em torno da cidadania, voluntariado e responsabilidade social. Descubra as atividades e junte-se a nós.",
    },
    opening: {
      heading: { title: "Dia de Abertura · 21 Set", subtitle: "Programa do primeiro dia" },
      entries: [
        {
          time: "10:00",
          datetime: "2026-09-21T10:00",
          title: "Cerimónia de Abertura",
          description: "Reitoria da U.Porto · Salão Nobre",
          thumb: images.program.opening[0],
        },
        {
          time: "11:30",
          datetime: "2026-09-21T11:30",
          title: "Painel “Voluntariado no Ensino Superior”",
          description: "Reitoria · Sala de Atos",
          thumb: images.program.opening[1],
        },
        {
          time: "14:30",
          datetime: "2026-09-21T14:30",
          title: "Workshop de Integração",
          description: "FADEUP · Pavilhão",
          thumb: images.program.opening[2],
        },
      ],
    },
    highlights: {
      heading: {
        title: "Atividades em Destaque",
        subtitle: "Experiências que marcam a diferença",
      },
      cards: [
        {
          image: images.program.highlights[0],
          chip: "Workshop",
          title: "Comunicação Inclusiva",
          text: "FLUP · 22 Set · 14:00–16:00",
        },
        {
          image: images.program.highlights[1],
          chip: "Ação Social",
          title: "Banco Alimentar",
          text: "FEUP · 23 Set · 09:00–13:00",
        },
        {
          image: images.program.highlights[2],
          chip: "Conferência",
          title: "Sustentabilidade e Comunidade",
          text: "FCUP · 24 Set · 10:00–12:00",
        },
      ],
    },
    daily: {
      heading: {
        title: "Atividades Diárias",
        subtitle: "Programação ao longo da semana",
      },
      cards: [
        {
          image: images.program.daily[0],
          chip: "Workshop",
          title: "Design Inclusivo",
          text: "FBAUP · 22 Set · 14:00–16:00",
        },
        {
          image: images.program.daily[1],
          chip: "Voluntariado",
          title: "Limpeza Comunitária",
          text: "Jardins do Palácio · 23 Set · 09:00–12:00",
        },
        {
          image: images.program.daily[2],
          chip: "Debate",
          title: "Saúde Mental no Campus",
          text: "FMUP · 23 Set · 15:00–17:00",
        },
        {
          image: images.program.daily[3],
          chip: "Formação",
          title: "Primeiros Socorros",
          text: "ICBAS · 24 Set · 10:00–13:00",
        },
        {
          image: images.program.daily[4],
          chip: "Cultura",
          title: "Exposição Solidária",
          text: "FBAUP · 25 Set · Todo o dia",
        },
      ],
      notice: "Programa sujeito a alterações.",
    },
    closing: {
      heading: { title: "Dia de Encerramento · 26 Set", subtitle: "Programa do último dia" },
      entries: [
        {
          time: "10:00",
          datetime: "2026-09-26T10:00",
          title: "Reflexão Coletiva",
          description: "Jardim Botânico do Porto",
          thumb: images.program.closing[0],
        },
        {
          time: "14:00",
          datetime: "2026-09-26T14:00",
          title: "Atividade de Encerramento",
          description: "Reitoria da U.Porto",
          thumb: images.program.closing[1],
        },
        {
          time: "16:30",
          datetime: "2026-09-26T16:30",
          title: "Cerimónia de Encerramento",
          description: "Reitoria · Salão Nobre",
          thumb: images.program.closing[2],
        },
      ],
    },
    participate: {
      heading: { title: "Como Participar", subtitle: "Junte-se à comunidade" },
      cards: [
        {
          image: images.program.participate[0],
          title: "Inscrição Online",
          subtitle: "Garanta o seu lugar",
          href: "#inscricao",
        },
        {
          image: images.program.participate[1],
          title: "Voluntariado",
          subtitle: "Seja voluntário/a",
          href: "#voluntariado",
        },
        {
          image: images.program.participate[2],
          title: "Contacte-nos",
          subtitle: "Fale connosco",
          href: "mailto:revires@up.pt",
        },
      ],
    },
    note: "O programa completo será divulgado em breve. Atividades sujeitas a confirmação.",
  },

  location: {
    meta: {
      title: "Localização — Semana #SerCidadão",
      description:
        "Os três polos da Universidade do Porto, faculdades participantes e locais da comunidade que acolhem a Semana #SerCidadão 2026.",
    },
    hero: {
      chip: "Semana #SerCidadão · U.Porto",
      title: "Localização",
      subtitle: "Três polos, diversas faculdades, locais da comunidade",
    },
    polos: {
      heading: { title: "Polos da U.Porto", subtitle: "Três campus, uma universidade" },
      cards: [
        {
          image: images.location.polos[0],
          chip: "Polo I",
          title: "Centro Histórico",
          text: "Reitoria · FLUP · FDUP · FMUP",
        },
        {
          image: images.location.polos[1],
          chip: "Polo II",
          title: "Campus da Asprela",
          text: "FEUP · FCUP · FEP · FADEUP · ICBAS",
        },
        {
          image: images.location.polos[2],
          chip: "Polo III",
          title: "Campo Alegre",
          text: "FCNAUP · FBAUP · Ciências",
        },
      ],
    },
    faculties: {
      heading: {
        title: "Faculdades Participantes",
        subtitle: "As faculdades que acolhem atividades",
      },
      notice: "Lista em atualização.",
    },
    community: {
      heading: {
        title: "Locais da Comunidade",
        subtitle: "Parceiros e instituições fora do campus",
      },
      lede: "Diversas IPSS e entidades parceiras na área metropolitana do Porto acolhem atividades ao longo da semana.",
      notice: "Informação em atualização.",
    },
    estadio: {
      heading: "Estádio Universitário",
      body: "O Estádio Universitário será o ponto de chegada da caminhada solidária e palco das atividades de encerramento, no dia 26 de setembro.",
      cta: "Ver Localização",
      imageAlt: "Estádio Universitário do Porto",
      notice: "Morada e acessos em atualização.",
    },
    transport: {
      heading: { title: "Como Chegar", subtitle: "Transportes e acessos" },
      notice: "Informação em atualização.",
    },
  },

  organization: {
    meta: {
      title: "Organização — Semana #SerCidadão",
      description:
        "ReVIReS — Rede de Voluntariado, Inclusão e Responsabilidade Social da Universidade do Porto. Quem organiza a Semana #SerCidadão 2026.",
    },
    hero: {
      chip: "Semana #SerCidadão · U.Porto",
      title: "Organização",
      subtitle:
        "ReVIReS — Rede de Voluntariado, Inclusão e Responsabilidade Social da U.Porto",
    },
    about: {
      heading: "Sobre a ReVIReS",
      body: "A ReVIReS é a Rede de Voluntariado, Inclusão e Responsabilidade Social da Universidade do Porto. Promove a cidadania ativa e o voluntariado entre estudantes, docentes e funcionários, articulando com parceiros comunitários.",
      imageAlt: "Equipa ReVIReS em sessão de trabalho",
      notice: "Descrição detalhada em atualização.",
    },
    video: {
      srTitle: "Vídeo institucional da ReVIReS",
      caption: "Conheça a ReVIReS",
      ariaLabel: "Ver vídeo: Conheça a ReVIReS",
    },
    partners: {
      heading: { title: "Parceiros", subtitle: "Quem nos apoia" },
      items: [
        { src: images.organization.partners[0], alt: "Câmara Municipal do Porto" },
        { src: images.organization.partners[1], alt: "Caixa Geral de Depósitos" },
        { src: images.organization.partners[2], alt: "Federação Académica do Porto" },
        { src: images.organization.partners[3], alt: "Associações de Estudantes" },
        { src: images.organization.partners[4], alt: "Associações de Voluntariado" },
        { src: images.organization.partners[5], alt: "Centro de Desporto da U.Porto" },
        { src: images.organization.partners[6], alt: "BAMBUP" },
      ],
      notice: "Logótipos em atualização.",
    },
    contact: {
      heading: { title: "Contacto", subtitle: "Fale connosco" },
      notice: "Informação de contacto em atualização.",
    },
    social: {
      eyebrow: "Partilhe nas redes sociais",
      title: "#VoluntariadoUPorto",
      body: "Junte-se ao movimento. Partilhe a sua experiência e inspire outros a fazer parte da Semana #SerCidadão.",
      shareLabel: "Partilhar",
      shareOn: "Partilhar no",
      copyLabel: "Copiar ligação",
      copiedLabel: "Ligação copiada!",
      shareText: "Participe na Semana #SerCidadão, de 21 a 26 de setembro de 2026. #VoluntariadoUPorto",
    },
  },

  privacy: {
    meta: {
      title: "Privacidade — Semana #SerCidadão",
      description: "Aviso de privacidade da Semana #SerCidadão da Universidade do Porto.",
    },
    hero: {
      chip: "Semana #SerCidadão · U.Porto",
      title: "Privacidade",
      subtitle: "Aviso de privacidade da Semana #SerCidadão",
    },
    title: "Aviso de privacidade",
    sections: [
      {
        heading: "Captação de imagem",
        body: "Durante a Semana #SerCidadão, poderão ser captadas fotografias e vídeos para fins de divulgação institucional pela U.Porto e entidades parceiras. A participação nas atividades implica o consentimento para a utilização dessas imagens em canais oficiais.",
      },
      {
        heading: "Dados pessoais",
        body: "Este website não recolhe dados pessoais, não utiliza formulários, cookies ou ferramentas de análise. A navegação é totalmente anónima.",
      },
      {
        heading: "Política institucional",
        body: "Para informação detalhada sobre a política de privacidade da Universidade do Porto, consulte o portal institucional da U.Porto.",
      },
    ],
    notice: "Aviso completo em atualização.",
  },

  faq: {
    meta: {
      title: "Perguntas Frequentes — Semana #SerCidadão",
      description:
        "Respostas às perguntas mais frequentes sobre a Semana #SerCidadão: participação, inscrições, certificados, duração das atividades e uso de imagem.",
    },
    hero: {
      chip: "Semana #SerCidadão · U.Porto",
      title: "Perguntas Frequentes",
      subtitle: "Tudo o que precisa de saber para participar na Semana #SerCidadão",
    },
    title: "Perguntas frequentes",
    items: [
      {
        question: "Quem pode participar?",
        answer: "Resposta em atualização.",
      },
      {
        question: "Há limites de idade? A participação é gratuita?",
        answer: "Resposta em atualização.",
      },
      {
        question: "Como posso ser voluntário na U.Porto?",
        answer: "Resposta em atualização.",
      },
      {
        question: "As atividades dão direito a certificado?",
        answer: "Resposta em atualização.",
      },
      {
        question: "Qual é a duração das atividades?",
        answer: "Resposta em atualização.",
      },
      {
        question: "Como faço a inscrição?",
        answer: "Resposta em atualização.",
      },
      {
        question: "Como são utilizadas as imagens e fotografias captadas durante o evento?",
        answer: "Resposta em atualização.",
      },
    ],
    notice: "Respostas em atualização — esta página será completada em breve.",
  },

  volunteeringDay: {
    meta: {
      title: "Dia Internacional do Voluntariado — Semana #SerCidadão",
      description:
        "Dia Internacional do Voluntariado da Universidade do Porto. 4 e 5 de dezembro de 2026. Concurso de fotografia, prémio do voluntariado e mesa-redonda.",
    },
    hero: {
      chip: "Semana #SerCidadão · U.Porto",
      title: "Dia Internacional do Voluntariado",
      subtitle: "4 e 5 de dezembro de 2026",
    },
    contest: {
      heading: {
        title: "Concurso de Fotografia",
        subtitle: "Ano Internacional dos Voluntários para o Desenvolvimento Sustentável",
      },
      cards: [
        {
          image: images.volunteeringDay.contest[0],
          chip: "Tema",
          title: "Voluntariado e Sustentabilidade",
          text: "Fotografias que captem o impacto do voluntariado no desenvolvimento sustentável.",
        },
        {
          image: images.volunteeringDay.contest[1],
          chip: "Exposição",
          title: "Reitoria, 4 dez",
          text: "Exposição das obras finalistas no átrio da Reitoria da U.Porto.",
        },
        {
          image: images.volunteeringDay.contest[2],
          chip: "Regulamento",
          title: "Inscrições e Regras",
          text: "Regulamento em preparação.",
        },
      ],
      notice: "Informação sobre júri e prémios em atualização.",
    },
    award: {
      heading: {
        title: "Prémio do Dia do Voluntariado",
        subtitle: "Reconhecimento do voluntariado de excelência",
      },
      entries: [
        {
          time: "4 dez",
          datetime: "2026-12-04",
          title: "Cerimónia de Entrega",
          description: "Reconhecimento de voluntários e projetos de destaque da U.Porto.",
          thumb: images.volunteeringDay.award,
        },
      ],
      notice: "Critérios em atualização.",
    },
    roundTable: {
      heading: "Mesa-Redonda",
      body: "Sessão de partilha de experiências de voluntariado, com testemunhos de voluntários e organizações parceiras da U.Porto.",
      imageAlt: "Sessão de mesa-redonda na U.Porto",
      notice: "Detalhes em atualização.",
    },
    cta: {
      eyebrow: "Semana #SerCidadão · U.Porto",
      title: "Descubra o programa completo",
      body: "Esta celebração faz parte da Semana #SerCidadão, de 21 a 26 de setembro de 2026.",
      button: "Ver Programa Completo",
    },
  },

  notFound: {
    meta: {
      title: "Página não encontrada — Semana #SerCidadão",
      description: "A página que procura não foi encontrada.",
    },
    code: "404",
    title: "Página não encontrada",
    subtitle: "Page not found",
    subtitleLang: "en",
    button: "Página inicial",
  },
};
