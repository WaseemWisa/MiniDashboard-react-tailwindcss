/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    'border-t-facebook',
    'border-t-youtube',
    'border-t-instgram',
    'border-t-twitter',
    'text-facebook',
    'text-youtube',
    'text-instgram',
    'text-twitter',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter' : ['Inter', "sans-serif"]
      },
      colors: {
        facebook: "#1791f0",
        twitter: "#1da1f5",
        youtube: '#FF0000',
        instgram: '#833AB4',
        maingreen: "#3fac8e",
        bg: {
          DEFAULT: "#f8f9ff",
          card: "#f1f3fa",
        },
        darkbg: {
          DEFAULT: "#20222f",
          card: "#252b43",
          dark: "#1d2029",
        },
      }
    },
  },
  plugins: [],
}
