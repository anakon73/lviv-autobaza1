/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,hbs}",
    "*/index.html",
  ],
  theme: {
    fontSize: {
      big: "2.5rem",
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
        jakarta: ["Plus+Jakarta+Sans"],
        inter: ["Inter"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
      },
      lineHeight: {
        "extra-height": "2.75rem",
        normal: "2.0625rem",
        small: "1.375rem",
      },
      borderRadius: {
        large: "1.875rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
