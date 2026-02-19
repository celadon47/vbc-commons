import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{mdx,md}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-ink": "#1a1a2e",
        "clean-white": "#fafafa",
        "signal-green": {
          DEFAULT: "#00c896",
          dim: "#00c89615",
          soft: "#00c89630",
        },
        slate: "#64748b",
        "light-gray": "#f1f5f9",
        "soft-border": "#e2e8f0",
        blue: "#3b82f6",
        amber: "#f59e0b",
        red: "#ef4444",
        purple: "#8b5cf6",
      },
      fontFamily: {
        serif: ["var(--font-libre-baskerville)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      lineHeight: {
        heading: "1.3",
      },
      letterSpacing: {
        "heading-tight": "-0.02em",
        "heading-tighter": "-0.03em",
        label: "0.06em",
        "label-wide": "0.08em",
      },
      maxWidth: {
        article: "720px",
      },
      width: {
        toc: "220px",
      },
    },
  },
  plugins: [],
};
export default config;
