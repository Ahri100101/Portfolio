/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": "#C7B5B5",
        "dark": "#56453F",
        "red": "#F41515"
      },
      fontFamily: {
        "font1": "Arya",
        "font2": "Birthstone",
      },
    },
  },
  plugins: [],
}