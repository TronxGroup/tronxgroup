import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        tronx: {
          bg: "#050814",
          card: "#0B1020",
          accent: "#22D3EE",
          accentSoft: "#0F172A"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.6)"
      }
    }
  },
  plugins: []
};

export default config;
