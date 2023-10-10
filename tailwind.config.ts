import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "light-pink": "#F390A8",
      "dark-pink": "#EC7E99",
      "light-green": "#8ECB53",
      "light-yellow": "#C6B92C",
      "dark-yellow": "#9C9223",
      'dark-blue': '#00374E',
      'light-blue': '#36B6C7',
      'white': '#FFFFFF',
      'black': '#000000'
    },
    extend: {},
  },
  plugins: [],
};
export default config;
