/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
  theme:{
    colors: {
      gray: {
        950: '#1c1c24',
      },
      inGreen:{
        500: '#04d15b'
      }
    }
  }
}

