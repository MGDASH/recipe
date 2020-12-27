const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/main.js",//js folder uusgeed dotor ni js ee hiisen. olon js folder dotor bbal tsegtstei
    path: path.resolve(__dirname, "docs")//git page deer tabihiin tuld docs gej oorchloh
  },
  devServer: {
    contentBase: "./docs"//git page deer tabihiin tuld docs gej oorchloh
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
