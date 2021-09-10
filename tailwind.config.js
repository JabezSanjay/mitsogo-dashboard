module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        170: "170%",
      },
    },
    colors: {
      bodyColor: "#F0F0F7",
      white: "#ffffff",
      mainColor: "#43425D",
      darkMainColor: "#3C3B54",
      lightGray: "#4D4F5C",
      buttonPurple: "#6763E3",
      buttonSecondaryPurple: "#514DDC",
      activePurple: "#A3A0FB",
      warningRed: "#FF4A33",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
