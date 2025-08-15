import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hive: { 500: "#c58325", 600: "#a86e1f" },
      },
      boxShadow: {
        promo: "0 0 0 2px rgba(197,131,37,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
