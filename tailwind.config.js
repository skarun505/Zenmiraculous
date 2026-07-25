/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          amber: '#F59E0B',
          'amber-hover': '#D97706',
          bg: '#09090B',
          card: '#18181B',
          border: '#27272A',
        },
      },
    },
  },
  plugins: [],
};
