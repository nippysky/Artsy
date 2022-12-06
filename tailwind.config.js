/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#292929",
        light: "#333333",
        avatarBorder: "#78A3AD",
      },
      fontFamily: {
        satoshi: "Satoshi-Variable",
        clashDisplay: "ClashDisplay-Variable",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
