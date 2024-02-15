/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '1180px',
    },
    extend: {
      boxShadow: {
        'lg': '0 0 10px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'dark': '#2d2e2e',
        'green': '#48937e',
        'dark1': '#323434',
        'dark2': '#4c4d4d',
        'dark3': '#3F4040',              
      },
    }
  },
  plugins: [],
}