/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: { DEFAULT: '#0a0a0a', elevated: '#0d0d0d', card: '#111111' },
        accent: { DEFAULT: '#C0202A', dark: '#8a1620' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        data: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['Inter', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
