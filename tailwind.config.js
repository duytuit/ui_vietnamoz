/** @type {import('tailwindcss').Config} */
// _app.js or _app.tsx
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,md,mdx}',
    './src/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.blue,
      },
      fontFamily: {
        sans: ['var(--font-custom)', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
