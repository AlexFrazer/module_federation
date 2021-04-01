import webpack, { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// @ts-ignore
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import "webpack-dev-server";

const isDevelopment = process.env.NODE_ENV === "development";

const baseConfig: Configuration = {
  mode: isDevelopment ? "development" : "production",
  devtool: "inline-source-map",
  output: {
    publicPath: "auto",
  },
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
          // plugins: [require.resolve("react-refresh/babel")],
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    // @ts-ignore
    new MiniCssExtractPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new ReactRefreshWebpackPlugin(),
  ],
};

export default baseConfig;
