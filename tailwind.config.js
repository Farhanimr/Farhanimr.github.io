/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '50px',
    },

    extend: {
      colors: {
        primary: '#0891b2',
        dark: '#1f2937',
        secondary: '#6b7280',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};

