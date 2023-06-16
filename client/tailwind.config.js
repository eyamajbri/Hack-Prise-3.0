/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkBlue: '#1F212D',
      white : '#FFFFFF',
      blueIcon:'#3482F6',
      gray : '#808080',
      lightBlue : '#2EADED'
    },
    extend: {},
  },
  plugins: [],
}

