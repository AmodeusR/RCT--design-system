/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      transparent: "transparent",
      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7c7c8a",
        200: "#e1e1e6",
      },
      cyan: {
        500: "#81D8F7",
        300: "#b0eaff"
      }
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif"
      },
      backgroundImage: {
        "react-logo": "url('./src/assets/background.svg')"
      }
    },
  },
  plugins: [],
}
