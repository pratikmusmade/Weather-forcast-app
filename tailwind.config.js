/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        'NotoSans' : ['Noto Sans KR', 'sans-serif']
      }
    },
  },
  plugins: [],
}

