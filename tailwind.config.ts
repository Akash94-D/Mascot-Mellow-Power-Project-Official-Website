import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        navy: "#0b1728",
        navy2: "#102640",
        blue: "#1d8bd1",
        cyan: "#55c8e8",
        ink: "#182638",
        muted: "#637287",
        paper: "#f4f7fa",
        line: "#dce5ed",
        gold: "#f2b84b",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
