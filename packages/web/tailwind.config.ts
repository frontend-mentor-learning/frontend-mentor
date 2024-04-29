import type { Config } from "tailwindcss";

const config: Config = {
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
          'gradient-to-r': 'linear-gradient(to right, #FE5376 0%, #FE5376 10.149253904819489%, #F46E7F 20.298507809638977%, #F46E7F 60.14925390481949%, #FF6E45 100%)',

          
          
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
      }
    },

    boxShadow: {
      'tomato-lift': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    }
  },
  plugins: [],
};
export default config;
