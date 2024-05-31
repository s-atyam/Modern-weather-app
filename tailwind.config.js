/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark_1': '#1B262C',
        'dark_2': '#0F4C75',
        'dark_3': '#3282B8',
        'dark_4': '#BBE1FA',
        
        'light_1': '#EFFFFD',
        'light_2': '#B8FFF9',
        'light_3': '#85F4FF',
        'light_4': '#42C2FF',
      }
    },
  },
  plugins: [],
}

