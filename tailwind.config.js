/** @type {import('tailwindcss').Config} */
import color from "./src/color/color";
import font from "./src/fonts/font";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: color,
      fontFamily: font,
    },
  },
  plugins: [],
};
