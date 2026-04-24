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
        "deep-black": "#030303",
        "dark-surface": "#1a1a1a",
        paper: "#ffffff",
        "near-white": "#fefefe",
        "cool-cloud": "#e9ecf2",
        // Borders
        "border-dark": "#27272a",
        "cool-silver": "#c9ccd1",
        "light-silver": "#d0d4d4",
        // Text
        charcoal: "#404040",
        "near-charcoal": "#3f3f3f",
        "cool-slate": "#767d88",
        "mid-slate": "#7d848e",
        "muted-gray": "#a7a7a7",
        "footer-gray": "#999999",
        "dark-link": "#0c0c0c",
        "tw-gray": "#6b7280",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Inter",
          "DM Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        sharp: "4px",
        subtle: "6px",
        comfy: "8px",
        generous: "16px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      letterSpacing: {
        display: "-0.025em",
        tight2: "-0.01em",
        label: "0.35px",
      },
      maxWidth: {
        container: "1600px",
      },
    },
  },
  plugins: [],
};
export default config;
