// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",  // Add all app files to scan for classes
    "./src/components/**/*.{js,ts,jsx,tsx}",  // Add all components to scan for classes
    "./src/pages/**/*.{js,ts,jsx,tsx}",  // Include any page files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
