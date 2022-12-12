/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"'],
      },
    },
  },
};
