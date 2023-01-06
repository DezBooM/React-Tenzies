/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": "0px 2px 2px black",
        "inset": "inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7)"
      },
      fontFamily: {
        "dokdo" : ["East Sea Dokdo"]
      }
    },
  },
  plugins: [],
}
