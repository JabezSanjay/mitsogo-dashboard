module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bodyColor: "#F0F0F7",
      white: "#ffffff",
      mainColor: "#43425D",
      lightGray: "#4D4F5C",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
