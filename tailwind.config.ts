import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['var(--font-open-sans)'],
        'playfair': ['var(--font-playfair)'],
        'julee': ['var(--font-julee)']
      },
      colors:{
        'lime': '#32CD32',
        'grey': '#e3e3e3',
        'dark-color': '#1e2029',
        'greyTwo': '#D6D6D6'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
