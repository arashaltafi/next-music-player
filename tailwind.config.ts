import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'maxW': '1600px'
      },
      backgroundImage: {
        gradient1 : 'linear-gradient(0deg, #474bff 0%, #bc48ff 100%)'
      },
      dropShadow: {
        dropShadow1: '3px 3px 10px 1px #bc48ff'
      },
      borderRadius: {
        'xLarge': '0% 0% 50% 50% / 0% 0% 10% 10%',
        'large': '0% 0% 50% 50% / 0% 0% 7% 7%',
        'medium': '0% 0% 50% 50% / 0% 0% 5% 5%',
        'small': '0% 0% 50% 50% / 0% 0% 3% 3%',
        'xSmall': '0% 0% 50% 50% / 0% 0% 1% 1%',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;