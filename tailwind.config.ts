import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Courier New"', "Courier", "monospace"],
        mono: ['"Courier New"', "Courier", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
