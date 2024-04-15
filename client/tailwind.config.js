/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      scale: {
        '580':'0.58'
      },
      zIndex: {
        '0.1':'1'
      }
    },
  },
  plugins: [],
}

