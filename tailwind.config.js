module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        185: "185%",
      },
    },
    colors: {
      bodyColor: "#F0F0F7",
      white: "#ffffff",
      mainColor: "#43425D",
      darkMainColor: "#3C3B54",
      lightGray: "#4D4F5C",
      veryLightGray: "#F0F4F7",
      buttonPurple: "#6763E3",
      buttonSecondaryPurple: "#514DDC",
      activePurple: "#A3A0FB",
      warningRed: "#FF4A33",
      tableHeadColor: "#F5F6FA",
      tableHeadTextColor: "#A3A6B4",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
