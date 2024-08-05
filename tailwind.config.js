/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {},
    
  },
    "plugins": ["prettier-plugin-tailwindcss"]

  
  // npx tailwindcss -i ./input.css -o ./output.css --watch
}

