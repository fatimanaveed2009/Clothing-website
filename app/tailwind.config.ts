/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{html,js,ts,jsx,tsx}", // Scans app directory
    "./src/components/**/*.{html,js,ts,jsx,tsx}", // Scans components directory
    "./src/pages/**/*.{html,js,ts,jsx,tsx}", // Scans pages directory
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px', // Custom breakpoint for very large screens
      },
      spacing: {
        '128': '32rem', // Example: add custom spacing for consistent sizing
        '144': '36rem',
      },
      colors: {
        primary: '#1D4ED8', // Example: define primary color
        secondary: '#9333EA',
      },
    },
  },
  plugins: [],
};



