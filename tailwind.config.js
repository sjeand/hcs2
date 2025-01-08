/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/preline/preline.js"],
  theme: {
    extend: {
      colors:{       
        primary: '#B5A89C',
        secondary: '#B5A89C',
        accent: '#b4654a',
        background: '#e0dad5',
        slider: '#e0dad5',
        admin: '#88fe04',
        adminAccent:'#F49E9E',
        adminDisabled: '#aaaaaa'
        
      },
      width: {
        '128': '14rem'
      },
      fontFamily: {
        'display': ['Montserrat'],
        body:['Montserrat, sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    /* require('@popperjs/core'), */
    require('preline/plugin')
  ]
}