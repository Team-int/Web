const colors = require('tailwindcss/colors')
module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'header':'#',
        'primary':'#141a23',
        'foreground':'#181e2a',
        ...theme(colors)
      }),
      colors: {
        teal: colors.teal,
      },
    },
    
  },
  variants: {
    extend: {},
  },
}
