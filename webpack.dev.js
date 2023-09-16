const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
  watch: true,
  mode: "development",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
  },
});
