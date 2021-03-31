import * as path from "path";
import webpack from "webpack";
import merge from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import baseConfig from "../../webpack.config";

const {
  container: { ModuleFederationPlugin },
} = webpack;

export default merge(baseConfig, {
  entry: ["./src"],
  module: {
    rules: [
      {
        test: /bootstrap\.ts$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
    }),
  ],
});
