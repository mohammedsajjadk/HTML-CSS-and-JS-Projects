const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "scripts/bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"), //this is the one which we will be giving to client
    publicPath: "/scripts/",
    watchContentBase: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugins: ["transform-object-rest-spread"],
          },
        },
      },
    ],
  },
  devtool: "source-map",
};
