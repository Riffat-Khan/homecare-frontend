const Colors = require('./src/utils/colors.ts')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: Colors.Charcoal,
        secondary: Colors.White,
        tertiory: Colors.QuillGray,
      },
    },
  },
  plugins: [],
}