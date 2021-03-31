const path = require("path");

const tailwindPath = path.resolve(path.join(__dirname, "./tailwind.config.js"));

module.exports = {
  plugins: [
    require("postcss-preset-env")({
      browsers: "last 2 versions",
    }),
    require("tailwindcss")(tailwindPath),
    require("autoprefixer"),
  ],
};
