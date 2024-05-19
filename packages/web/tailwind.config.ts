import type { Config } from "tailwindcss";


const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-to-r': 'linear-gradient(to right, #FF527B, hsl(4, 100%, 67%))',



      },
      colors: {
        'light-pink': 'hsl(275, 100%, 97%)',
        'grayish-purple': 'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)',
        'bright-orange': 'hsl(31, 77%, 52%)',
        'dark-cyan': 'hsl(184, 100%, 22%)',
        'very-dark-cyan': 'hsl(179, 100%, 13%)',
        'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
        'very-light-gray': 'hsl(0, 0%, 95%)',

        // newsletter-signup
        'tomato': 'hsl(4,100%,67%)',
        'slate-grey': 'hsl(234, 29%, 20%)',
        'charcoal-grey': 'hsl(235, 18%, 26%)',
        'grey': 'hsl(231, 7%, 60%)',
        'white': 'hsl(0, 0%, 100%)',
        'slayer': 'hsla(4, 86%, 86%, 0.384)',

        // countries
        'geo-blue': 'hsl(209, 23%, 22%)', // Originally "Dark Mode Elements"
        'geo-dark': 'hsl(207, 26%, 17%)', // Originally "Very Dark Blue (Dark Mode Background)"
        'geo-dtext': 'hsl(200, 15%, 8%)', // Originally "Very Dark Blue (Light Mode Text)"
        'geo-gray': 'hsl(0, 0%, 52%)', // Originally "Dark Gray (Light Mode Input)"
        'geo-light': 'hsl(0, 0%, 98%)', // Originally "Very Light Gray (Light Mode Background)"
        'geo-white': 'hsl(0, 0%, 100%)' // Originally "White (Dark Mode Text & Light Mode Elements)"
      }
    },

    boxShadow: {
      'tomato-lift': '7px 5px 34px -11px hsl(4, 100%, 67%)',
      // countries
      'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'custom': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',

    }
  },
  plugins: [],
};
export default config;
