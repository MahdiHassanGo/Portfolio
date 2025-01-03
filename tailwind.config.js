/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  colors: {
      primaryBg: '#021526',
      webdev:"#ebdcc4"
    },},
  
  },
  plugins: [
    require('daisyui'),
  ],
}

