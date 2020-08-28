const primaryColorHex = '#3271FC'
const blueLighthColorHex = '#F0F5FF'
const blueDarkColorHex = '#1B3DEC'

module.exports = {
  purge: ['./src/**/*.vue', './src/**/*.js'],
  theme: {
    extend: {
      fontSize: {
        '5.5xl': '3.5rem'
      },
      textColor: {
        primary: primaryColorHex,
        'blue-dark': blueDarkColorHex
      },
      backgroundColor: {
        primary: primaryColorHex,
        'blue-light': blueLighthColorHex,
        'blue-dark': blueDarkColorHex
      },
      borderColor: {
        primary: primaryColorHex
      },
      borderRadius: {
        xlg: '1.3rem'
      },
      boxShadow: {
        linear: '0 0 25px rgba(0, 0, 0, 0.05), 0 2px 3px -1px rgba(0, 0, 0, 0.05);'
      }
    }
  },
  variants: {},
  plugins: []
}
