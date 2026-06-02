import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

// Branded social share card (1200×630), generated on demand. Exposed as a
// plain route (`/og`) rather than an `opengraph-image` file convention: with
// two root layouts inside route groups there's no app-root layout to provide
// `metadataBase`, so the file convention can't resolve and warns at build. We
// reference this absolute URL explicitly from `src/lib/seo.ts` instead.
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #3d1f15 0%, #6b3a2a 100%)",
          color: "#fdf9f3",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#d4a843",
            marginBottom: 24,
          }}
        >
          U.Porto · ReVIReS
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>{SITE_NAME}</div>
        <div style={{ fontSize: 36, marginTop: 28, color: "rgba(253,249,243,0.85)" }}>
          Cidadania, Voluntariado e Responsabilidade Social
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 40,
            fontSize: 32,
            color: "#d4a843",
          }}
        >
          <div style={{ width: 64, height: 4, background: "#d4a843", marginRight: 20 }} />
          21–26 de setembro de 2026
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
