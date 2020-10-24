const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "babel-polyfill", "./src/js/index.js"], // For Babel - Step 4: add "babel-polyfill".
  // So, this is one huge bundle which will have polyfills for >=ES6 code and our js code as well
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  devServer: {
    /*  contentBase: path.resolve(__dirname, "dist"), 
    publicPath: "/scripts/", */
    contentBase: "./dist", //this is the one which we will be giving to client
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
        test: /\.js$/, // For Babel - Step 1: Check if the file is a .js, if yes, then it will apply babel-loader
        exclude: /node_modules/, // For Babel - Step 2: If we don't exclude, babel will be applied to all js files inside node_modules
        use: {
          loader: "babel-loader", // For Babel - Step 3: converting sass to css, es6 to es5 etc. Also, we have .babelrc file where we will
          // mention what are the browser version we are targeting.
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
