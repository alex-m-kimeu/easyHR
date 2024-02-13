/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0 0 10px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'dark': '#2d2e2e',
        'green': '#48937e',
      },
    }
  },
  plugins: [],
}