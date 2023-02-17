/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007981",
        secondary: "#BFFDFF",
        tertiary: "#00F0FF",
        quaternary: "#EBFEFF",
        gray: {
          100: "#F0FEFF",
          200: "#DEF0F1",
          300: "#C2D8DA",
          400: "#A0B0B1",
          500: "#7F8C8D",
          600: "#3E4646",
          700: "#2B2F2F",
          800: "#171818",
          900: "#1a202c",
        },
      },
    },
  },
  plugins: [],
};
