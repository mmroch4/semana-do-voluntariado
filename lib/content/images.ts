/**
 * Centralized image paths (served from `public/images`).
 *
 * Images are identical across languages, so they live here once, keyed
 * semantically. The localized `alt` text lives in the dictionaries; these
 * are just the `src` values. Many decorative images carry empty alt in the
 * original markup — those are referenced directly where used.
 */
const base = "/images";

export const images = {
  home: {
    hero: `${base}/generated-1775681890806.png`,
    intro: `${base}/generated-1775681914571.png`,
    highlights: [
      `${base}/generated-1775681939233.png`,
      `${base}/generated-1775681953305.png`,
      `${base}/generated-1775681976229.png`,
    ],
    video: `${base}/generated-1775682015201.png`,
    strip: [
      `${base}/generated-1775681772588.png`,
      `${base}/generated-1775681789275.png`,
      `${base}/generated-1775681803561.png`,
      `${base}/generated-1775681819948.png`,
    ],
    partners: [
      `${base}/generated-1775729434078.png`,
      `${base}/generated-1775729450696.png`,
      `${base}/generated-1775729466947.png`,
      `${base}/generated-1775729480792.png`,
      `${base}/generated-1775729508588.png`,
      `${base}/generated-1775729533650.png`,
      `${base}/generated-1775729568723.png`,
    ],
  },
  program: {
    hero: `${base}/generated-1775728533902.png`,
    strip: [
      `${base}/generated-1775726803356.png`,
      `${base}/generated-1775726829794.png`,
      `${base}/generated-1775726855577.png`,
      `${base}/generated-1775726878329.png`,
    ],
    opening: [
      `${base}/generated-1775726924934.png`,
      `${base}/generated-1775726939145.png`,
      `${base}/generated-1775726958242.png`,
    ],
    highlights: [
      `${base}/generated-1775727001071.png`,
      `${base}/generated-1775727033311.png`,
      `${base}/generated-1775727061658.png`,
    ],
    daily: [
      `${base}/generated-1775727050611.png`,
      `${base}/generated-1775727066471.png`,
      `${base}/generated-1775727090722.png`,
      `${base}/generated-1775727113335.png`,
      `${base}/generated-1775727137766.png`,
    ],
    closing: [
      `${base}/generated-1775727166915.png`,
      `${base}/generated-1775727185821.png`,
      `${base}/generated-1775727206516.png`,
    ],
    participate: [
      `${base}/generated-1775727228589.png`,
      `${base}/generated-1775727250163.png`,
      `${base}/generated-1775727279395.png`,
    ],
  },
  location: {
    hero: `${base}/generated-1775727645540.png`,
    polos: [
      `${base}/generated-1775727692046.png`,
      `${base}/generated-1775727706213.png`,
      `${base}/generated-1775727729481.png`,
    ],
    strip: [
      `${base}/generated-1775727756580.png`,
      `${base}/generated-1775727772094.png`,
      `${base}/generated-1775727797603.png`,
      `${base}/generated-1775727820053.png`,
    ],
    estadio: `${base}/generated-1775727693047.png`,
  },
  organization: {
    hero: `${base}/generated-1775730277617.png`,
    about: `${base}/generated-1775730309437.png`,
    video: `${base}/generated-1775730331360.png`,
    partners: [
      `${base}/generated-1775730294030.png`,
      `${base}/generated-1775730318307.png`,
      `${base}/generated-1775730337195.png`,
      `${base}/generated-1775730352462.png`,
      `${base}/generated-1775730371430.png`,
      `${base}/generated-1775730393741.png`,
      `${base}/generated-1775730422340.png`,
    ],
  },
  privacy: {
    hero: `${base}/generated-1775731279296.png`,
  },
  volunteeringDay: {
    hero: `${base}/generated-1775740445375.png`,
    contest: [
      `${base}/generated-1775740491034.png`,
      `${base}/generated-1775740518016.png`,
      `${base}/generated-1775740538145.png`,
    ],
    strip: [
      `${base}/generated-1775740529632.png`,
      `${base}/generated-1775740552720.png`,
      `${base}/generated-1775740578623.png`,
      `${base}/generated-1775740615050.png`,
    ],
    award: `${base}/generated-1775740654879.png`,
    roundTable: `${base}/generated-1775740675114.png`,
  },
} as const;
