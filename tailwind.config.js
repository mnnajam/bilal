module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        blue: "0 20px 30px 0 rgba(154, 255, 253, 1)",
      },
      colors: {
        primaryPurple: {
          50: "#E8E9F2",
          100: "#C5C7E0",
          200: "#9FA3CB",
          300: "#7B80B6",
          400: "#6165A8",
          500: "#484A99",
          600: "#424390",
          700: "#3A3984",
          800: "#323078",
          900: "#261F62",
        },
      },
    },
  },
  plugins: [],
}