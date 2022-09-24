/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastel: {
          blue: "#55CBCD",
          lightblue: "#A2E1DB",
          red: "#FC89AA",
          lightred: "#FFDBCC",
          white: "#ECEAE4",
        },
      },
      fontFamily: {
        monospace: ["Roboto Mono", "monospace"],
        inter: ["Inter", "sans"],
        sans: ["Poppins", "sans"],
        serif: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
