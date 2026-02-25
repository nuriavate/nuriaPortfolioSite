/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        grace: ['"Covered By Your Grace"', "cursive"],
      },
    },
  },
  plugins: [],
};
