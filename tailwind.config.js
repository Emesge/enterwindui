/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx,json}',
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
