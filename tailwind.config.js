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
          light: "#49a75e",
          deep: "#1F4E3D",
        },
        second: {
          light: "#f4c517",
          deep: "#e47125"
        },
      },

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

