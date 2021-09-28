const color = require("tailwindcss/colors")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class",
  theme: {
    colors: {
      gray: color.gray,
      blue: color.sky,
      yellow: color.amber,
      red:color.red,
      darkBackground: "#181818"
    }
  }
}