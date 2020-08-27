module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontSize: {
        '5.5xl': '3.5rem'
      },
      backgroundColor: {
        primary: '#3271FC'
      },
      borderColor: {
        primary: '#3271FC'
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
