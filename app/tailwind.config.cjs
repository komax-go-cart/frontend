/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          100: "#C7CBCD",
          200: "#EEEDED",
          300: "#A88C7B"
        }
      }
    },
  },
  plugins: [],
}
