import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d7',
          300: '#f4a8b5',
          400: '#ec7589',
          500: '#e04c65',
          600: '#cb2d4a',
          700: '#aa2040',
          800: '#8e1d38',
          900: '#5e1225',
          950: '#3b0b17',
        },
        leopard: {
          tan: '#C8956C',
          brown: '#6B3A2A',
          cream: '#F5E6C8',
          gold: '#D4A843',
        },
        blush: '#FFD6DE',
        champagne: '#F7E7CE',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        lato: ['Lato', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      animation: {
        'float-hearts': 'floatHearts 4s ease-in-out infinite',
        'fall-petal': 'fallPetal 8s linear infinite',
        'heart-burst': 'heartBurst 0.6s cubic-bezier(0.36, 0, 0.66, -0.56)',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        floatHearts: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'translateY(-30px) rotate(180deg)', opacity: '0.8' },
        },
        fallPetal: {
          '0%': { transform: 'translateY(-20px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
        },
        heartBurst: {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'scale(1.5) rotate(180deg)' },
          '100%': { transform: 'scale(0) rotate(360deg)', opacity: '0' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
