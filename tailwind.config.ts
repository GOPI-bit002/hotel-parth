import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        ink: "#000000",
        "near-black": "#212121",
        "deep-dark": "#17171c",
        // Accent
        blue: "#1863dc",
        "ring-blue": "#4c6ee6",
        "focus-purple": "#9b60aa",
        // Surface
        paper: "#ffffff",
        snow: "#fafafa",
        "gray-lightest": "#f2f2f2",
        // Neutral
        "muted-slate": "#93939f",
        "border-cool": "#d9d9dd",
        "border-light": "#e5e7eb",
        // Purple hero band
        "violet-deep": "#2a1649",
        "violet-mid": "#4b2a7a",
        "violet-accent": "#7b4bc4",
        // Footer
        footer: "#0A0A0A",
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "Instrument Serif",
          "Space Grotesk",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "serif",
        ],
        sans: [
          "var(--font-sans)",
          "Inter",
          "Arial",
          "ui-sans-serif",
          "system-ui",
        ],
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      borderRadius: {
        signature: "22px",
        pill: "9999px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      letterSpacing: {
        tightest: "-0.05em",
        display: "-0.02em",
        mono: "0.02em",
      },
      maxWidth: {
        container: "1440px",
        wide: "2560px",
      },
    },
  },
  plugins: [],
};
export default config;
