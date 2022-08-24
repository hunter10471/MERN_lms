/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx, jsx, js, ts, html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Lato', 'sans-serif'],
      },
      colors: {
        secondary: '#2d2d2d',
        primary: '#3B82F6',
      },
    },
  },
  plugins: [],
};
