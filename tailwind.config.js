/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "480px",
      },
      colors: {
        //primary color
        primary: "#f3f4f6",

        //accent colors
        acc1: "#007FFF",
        acc2: "#2a52be",

        secondary: "#98FB98",

        gmailBlue: "#4285f4",
        gmailRed2: "#c5221f",
        gmailRed1: "#ea4335",
        gmailGold: "#fbbc04",
        gmailGreen: "#34a853",
      },

      keyframes: {
        changeColor: {
          "0%": { color: "#f3f4f6" },
          "50%": { color: "#FFD700" },
          "100%": { color: "#f3f4f6" },
        },
      },

      animation: {
        colorText: "changeColor 1.5s infinite",
      },
    },
  },
  plugins: [],
};
