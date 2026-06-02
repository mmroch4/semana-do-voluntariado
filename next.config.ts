import type { NextConfig } from "next";

// Baseline security headers applied to every response. These are
// industry-standard defaults; tighten with a Content-Security-Policy once the
// set of external origins (fonts are self-hosted, video embed host, etc.) is
// final.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // App code lives under `src/` (Next.js src directory). The repo also holds
  // the legacy static site (`legacy/`), HTTrack mirrors (`references/`) and
  // scratch files (`old/`). None of those three are part of the app.

  // Serve the existing PNG/JPEG sources as modern formats via the built-in
  // image optimizer (Node deployment → optimization runs at request time).
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // The image files are content-addressed placeholders; cache hard. (Next
      // already serves `/_next/static/*` as immutable.)
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
