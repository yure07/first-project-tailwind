/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'cream': '#F2EAE2',
        'white': '#ffffff',
        'dark-grayish-blue': '#6B7189',
        'dark-cyan' :'#3C8067',
        'dark-dark-cyan': '#264B3D'
      },
      letterSpacing:{
        'widest': '.55em',
        'wider': '.25em'
      },
      spacing:{
        '75': '18.8rem'
      }
    },
  },
  plugins: [],
}