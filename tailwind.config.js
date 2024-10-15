/** @type {import('tailwindcss').Config} */
import color from "./src/color/color";
import font from "./src/font/font";
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
