const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  watch: true,
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/template.html",
    }),
  ],
};
