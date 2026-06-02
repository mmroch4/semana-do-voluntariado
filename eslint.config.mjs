import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";

/**
 * Flat ESLint config (Next.js 16 removed the built-in `next lint`).
 *
 * `eslint-config-next` already registers the `jsx-a11y` plugin with a baseline
 * rule set; we layer the plugin's full *recommended* rules on top for stricter
 * accessibility linting without re-declaring the plugin.
 */
export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    name: "jsx-a11y/recommended",
    rules: { ...jsxA11y.flatConfigs.recommended.rules },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Not part of the app (see next.config.ts).
    "legacy/**",
    "references/**",
    "old/**",
  ]),
]);
