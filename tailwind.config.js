/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        shadows: "'Shadows Into Light Two', cursive",
        outfit: "'Outfit', sans-serif",
      },
      colors: {
        primary: {
          light: "#4CBC8F",
          deep: "#4CBC8F",
        },
        second: {
          light: "#A9D15A",
          deep: "#cc9b41"
        },
      },

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

