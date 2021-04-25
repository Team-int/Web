const colors = require('tailwindcss/colors')
module.exports = {
 mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            img: {
              borderWidth: '1px',
              borderRadius: '8px'
            }

            // ...
          }, 
        },
      }),
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}
