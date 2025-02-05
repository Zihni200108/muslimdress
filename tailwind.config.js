/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js}",
       "./node_modules/flowbite/**/*.js"
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins : ['Poppins' , 'sans-serif'],
        },
        colors:{
          primary1 : "#003E29",
          primary2 : "#E4BBA1",
          primary3 : "#D9D9D9",
          borderColor : "#787878",
          bgColor : "#EDEDED",
          bgGreen : "#023423",
        }
      },
    },
    plugins: [require('flowbite/plugin')],
  }
  
  