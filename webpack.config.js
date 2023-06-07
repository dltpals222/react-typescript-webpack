const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";
const config = {
  entry: path.resolve(__dirname, "develop", "router.tsx"),
  output: path.resolve(__dirname, "dist"),
  mode: isProduction ? "production" : "developmenet",
  plugins: [new HtmlWebpackPlugin({})],
};
