/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",  'node_modules/preline/dist/*.js',],
  theme: {
    extend: {
      colors:{       
        primary: '#3d3b30',
        secondary: '#AAA274',
        accent: '#b4654a',
        background: '#F1EBE2'
      },
      fontFamily: {
        body:['"Montserrat", sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    /* require('@popperjs/core'), */
    /* require('preline/plugin') */
  ]
}