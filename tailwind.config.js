/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        simplyWhite: "hsl(0, 0%, 100%)",
        simplyBlack: "hsl(0, 0%, 0%)",
        grey50: "hsl(210, 20%, 99%)",
        grey100: "hsl(210, 20%, 98%)",
        grey200: "hsl(220, 14%, 96%)",
        grey300: "hsl(220, 13%, 91%)",
        grey400: "hsl(216, 12%, 84%)",
        grey500: "hsl(218, 11%, 65%)",
        grey600: "hsl(220, 9%, 46%)",
        grey700: "hsl(215, 14%, 34%)",
        grey800: "hsl(217, 19%, 27%)",
        grey900: "hsl(215, 28%, 17%)",
        grey950: "hsl(221, 39%, 11%)",
        brandPurple: "hsl(265, 33%, 47%)",
        brandPink: "hsl(326, 86%, 51%)",
        brandNavyBlue: "hsl(228, 52%, 30%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
