import type { Metadata } from "next";
import type { Meta } from "@/lib/content/types";

/** Builds a Next.js Metadata object from a localized page `Meta`. */
export function buildMetadata(meta: Meta): Metadata {
  return {
    title: meta.title,
    description: meta.description,
  };
}
