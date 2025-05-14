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
          light: "#49A760",
          deep: "#1F4E3D",
        },
        second: {
          light: "#F7C35F",
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

