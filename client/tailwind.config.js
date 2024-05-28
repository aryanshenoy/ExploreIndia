/** @type {import('tailwindcss').Config} */

export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes : {
        pulse:{
          "0%" : {opacity : 0.7, "font-size" : "126px"},
          "100%" : {opacity : 0.7, "font-size" : "126px"},
          "50%" : {opacity : 1, "font-size" : "128px"},
        },
      },
      animation:{
      'pulse':"pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage : {
        'landingPage':"url('./src/assets/landing page 2.jpg')"
      },
      scale: {
        '580':'0.58'
      },
      zIndex: {
        '0.1':'1'
      },
      blur: {
        s:"2px",
      },
      inset: {
        "74":"300px",
      },
      height: {
        "74":"300px",
      }
    },
  },
  plugins: [],
  darkMode: "class",
}

