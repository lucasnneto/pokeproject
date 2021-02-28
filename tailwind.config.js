const palette = require('./palette')
const colors = require('tailwindcss/')
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: palette
    },
    scale: {
      '300': '3',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'extra': '50px'
    },
    fontFamily: {
      'lato': ["Lato", "Helvetica", "sans-serif"],
    }
  },
  variants: {},
  plugins: [],
}
