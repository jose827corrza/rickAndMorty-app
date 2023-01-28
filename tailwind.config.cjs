/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      title: ['"Roboto Mono"', 'monospace'],
      splineSans: ['"Spline Sans Mono"', 'monospace'],
    },
    colors: {
      'purple-space': '#63229F',
      'deep-purple-space': '#642576',
      black: colors.black,
      cyan: colors.cyan,
      red: colors.red,
      green: colors.green,
      white: colors.white,
    },
    extend: {
      keyframes:{
        LoadingLogo: {
          from: {
            transform: 'rotate(0.0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        }
      },
      animation: {
        'rotating-logo': 'LoadingLogo 5s linear infinite'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
