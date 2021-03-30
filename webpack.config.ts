import webpack, { Configuration } from "webpack";
import merge from "webpack-merge";
// @ts-ignore
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import "webpack-dev-server";

const isDevelopment = process.env.NODE_ENV === "development";

const baseConfig: Configuration = {
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            require.resolve("@babel/preset-env"),
            require.resolve("@babel/preset-typescript"),
            [require.resolve("@babel/preset-react"), { runtime: "automatic" }],
          ],
          plugins: [require.resolve("react-refresh/babel")],
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
};

export default baseConfig;
