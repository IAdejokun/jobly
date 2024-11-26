/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ['Open Sans', 'sans-serif'],
        "poppins": ['Poppins', 'sans-serif']
    }
    },
  },
  plugins: [
    require('preline/plugin')
  ],
}

