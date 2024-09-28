/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'], // 'Poppins' for body text
        roboto: ['Roboto', 'sans-serif'], // Add 'Roboto'
      },
    },
  },
  plugins: [],
};
