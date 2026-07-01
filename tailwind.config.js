/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./js/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cerso-navy': '#0d1b2e',
        'cerso-light': '#f8fafc',
        'cerso-accent': '#2563eb', // A complementary vibrant blue
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
