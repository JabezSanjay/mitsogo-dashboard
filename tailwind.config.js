module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        120: "120%",
        165: "165%",
      },
      screens: {
        maxSm: { max: "639px" },
        rangelg: { min: "1024px", max: "1300px" },
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
      anchorColor: "#3B86FF",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
