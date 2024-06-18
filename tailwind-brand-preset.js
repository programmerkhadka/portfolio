const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
        nato_sans: ["Noto Sans", "serif", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        brand: {
          DEFAULT: "rgba(14, 102, 85, 1)",
          bg: "rgba(255, 255, 255, 1)",
        },
      },
    },
  },
  plugins: [],
};
