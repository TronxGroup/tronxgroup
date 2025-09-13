import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f7ff", 100: "#e8eeff", 200: "#cddbff", 300: "#a8c0ff",
          400: "#7e9aff", 500: "#5a79ff", 600: "#3f5bff", 700: "#3349cc",
          800: "#28399f", 900: "#1b276b"
        }
      }
    }
  },
  plugins: [],
};
export default config;
