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
    plugins: [
      require('flowbite/plugin'),
      require("daisyui"),
    ],
    daisyui: {
      themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
      darkTheme: "dark", // name of one of the included themes for dark mode
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
      themeRoot: ":root", // The element that receives theme color CSS variables
    },
  }
  
  