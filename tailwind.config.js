/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*{js,css}', './src/home/*{js,css}', './src/js/*{js,css}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '786px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightBlue: '#00D4E6',
        bluish: '#0098AA',
        light: '#fff',
        veryDarkBlue: '#1f242d',
        darkBlue: '#323946',
        darkest: '#18181b', 
        grayish: '#27272a',
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      }
    },
  },
  plugins: [],
}

