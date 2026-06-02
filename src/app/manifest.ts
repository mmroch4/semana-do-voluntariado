import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

/**
 * Web app manifest (installability + theming). Colours come from the brand
 * tokens in `globals.css`: brown is the theme colour, warm cream the splash.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Semana Solidária",
    description:
      "Semana da Cidadania, Voluntariado e Responsabilidade Social da U.Porto — 21 a 26 de setembro de 2026.",
    start_url: "/",
    display: "standalone",
    lang: "pt-PT",
    background_color: "#f5f0e8",
    theme_color: "#6b3a2a",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any", purpose: "any" },
    ],
  };
}
