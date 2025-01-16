/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //primary color
        primary: "#f3f4f6",

        //accent colors
        acc1: "#007FFF",
        acc2: "#2a52be",

        secondary: "#98FB98",
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
