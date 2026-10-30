/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: { 50: '#FFFCF6', 100: '#FFF7E8', 200: '#FBEBD0' },
        churro: { 300: '#F9C68A', 400: '#F7B267', 500: '#EE9A3F', 600: '#C2630F', 700: '#9A4D0B' },
        ink: { 900: '#3B2A1A', 600: '#6B5744', 400: '#9A8672' },
      },
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(194, 99, 15, 0.25)',
      },
    },
  },
  plugins: [],
}
