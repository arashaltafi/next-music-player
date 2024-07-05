import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'maxW': '1600px'
      },
      spacing: {
        '98': '24.75rem',
        '22': '5.5rem',
        '23': '5.75rem',
      },
      backgroundImage: {
        gradient1: 'linear-gradient(0deg, #474bff 0%, #bc48ff 100%)',
        gradient2: 'linear-gradient(0deg, #cc99ff 0%, #b337a9 100%)',
        sliderBg: 'linear-gradient(0deg, #020617 5%, rgba(0, 0, 0, 0) 95%)'
      },
      boxShadow: {
        musicShadow: '10px 10px 20px 4px #000000',
        boxShadow: '3px 3px 10px 3px #000000',
      },
      dropShadow: {
        dropShadow1: '3px 3px 10px 1px #bc48ff',
      },
      borderRadius: {
        'xLarge': '0% 0% 50% 50% / 0% 0% 10% 10%',
        'large': '0% 0% 50% 50% / 0% 0% 7% 7%',
        'medium': '0% 0% 50% 50% / 0% 0% 5% 5%',
        'small': '0% 0% 50% 50% / 0% 0% 3% 3%',
        'xSmall': '0% 0% 50% 50% / 0% 0% 1% 1%',
        'video': '50% 50% 50% 50% / 10% 10% 10% 10%',
        'videoHover': '50% 50% 50% 50% / 5% 5% 5% 5%',
        'musicHover': '40% 40% 40% 40% / 40% 40% 40% 40%', 
        'boxRadius': '50% 50% 50% 50% / 10% 10% 10% 10%',
        'singerFav': '50% 50% 50% 50% / 40% 40% 5% 5%',
      }
    },
  },
  darkMode: "class",
  plugins: []
};
export default config;
