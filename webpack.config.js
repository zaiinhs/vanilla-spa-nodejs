const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public/build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/template.html",
    }),
  ],
};
