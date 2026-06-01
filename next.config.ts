import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The repo also holds the legacy static site (`src/`), HTTrack mirrors
  // (`references/`) and scratch files (`old/`). None are part of the app.
  // ESLint is not wired up, so don't let an absent config fail the build.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
