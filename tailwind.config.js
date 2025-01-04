/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  colors: {
      primaryBg: '#021526',
      webdev:"#ebdcc4",
      card:"#03346E"
    },
    fontFamily: {
      league: ['"League Gothic"', 'sans-serif'], // 
    },
  
  },
  
  },
  plugins: [
    require('daisyui'),
  ],
}

