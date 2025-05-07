/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  // ✅ Use "extend" to keep default colors
      colors: {
        blue: {
          light: '#49557e',
        },
        red: {
          light: '#ff4d4d',
          normal: '#fff4f2',
        }
      },
    },
  },
  plugins: [],
}
