const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          50: "#a2f396",
          100: "#85ef75",
          200: "#68ec55",
          300: "#4ee836",
          400: "#30e118",
          500: "#2ac115",
          600: "#269f12",
          700: "#1d7f0e",
          800: "#15610a",
          900: "#104007",
        },
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      minWidth: {
        28: "7rem",
        32: "8rem",
      },
      minHeight: {
        28: "7rem",
        32: "8rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "disabled"],
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
