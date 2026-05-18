/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        pink: '#FF1493',
        'hot-pink': '#FF007F',
        'dark-red': '#722F37',
        gold: '#FFD700',
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
