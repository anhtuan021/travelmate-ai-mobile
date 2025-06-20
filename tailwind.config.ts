/** @type {import('tailwindcss').Config} */
const { lightColors } = require('./src/utils/theme/light.theme');
const { darkColors } = require('./src/utils/theme/dark.theme');

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...Object.fromEntries(
          Object.entries(lightColors).map(([key, val]) => [
            key.replace(/([A-Z])/g, '-$1').toLowerCase(),
            val,
          ])
        ),
        ...Object.fromEntries(
          Object.entries(darkColors).map(([key, val]) => [
            key.replace(/([A-Z])/g, '-$1').toLowerCase() + '-dark',
            val,
          ])
        ),
      },
    },
  },
  plugins: [],
};
