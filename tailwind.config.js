/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,hbs}",
    "*/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
        'jakarta': ['Plus+Jakarta+Sans'],
        'inter': ['Inter']
      },
      keyframes: {
        "fade-in": {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        }
      },
      animation: {
        "fade-in": 'fade-in 0.5s ease-in-out',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

