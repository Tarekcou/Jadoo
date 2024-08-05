/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    fontFamily:{
      'Vokhov': ["Volkhov","serif"],
      Lobster: ["Lobster","sans-serif"]
    },
    extend: {
      borderColor:{
        'borderRed': '1px',
        borderColor: "red",
        

      },
      backgroundSize:{
        '16': '55%',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/Decore.png')",
        
      }
    },
    
  },
    "plugins": ["prettier-plugin-tailwindcss"]

  
  // npx tailwindcss -i ./input.css -o ./output.css --watch
}

