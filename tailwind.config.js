/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        img : "url('/src/photo/background.jpeg')",
        line : "url('/src/photo/36235341-multi-color-of-small-size-stone-background.jpg')"
      },
    },
  },
  plugins: [],
});
