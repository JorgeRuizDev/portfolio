const { sky } = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          base: sky[600],
          hover: sky[500],
        },
      },
    },
  },
  plugins: [],
};
