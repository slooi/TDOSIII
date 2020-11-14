const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const publicPath = path.resolve(__dirname, "dist", "public");
//

// NOTE THIS FILE HAS NOT BEEN TESTED

module.exports = {
  mode: "production",
  entry: "./dist/public/index.js",
  output: {
    path: path.resolve(__dirname, "dist", "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "dist", "public", "index.html"),
      // template: 'src/index.html'
    }),
  ],
};
