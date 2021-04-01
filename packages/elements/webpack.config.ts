import * as path from "path";
import webpack, { Configuration } from "webpack";
import merge from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration as WebpackDevServerConfig } from "webpack-dev-server";
import baseConfig from "../../webpack.config";

const {
  container: { ModuleFederationPlugin },
} = webpack;

interface Config extends Configuration {
  readonly devServer?: WebpackDevServerConfig;
}

const config: Config = {
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
  devServer: {
    port: 3002,
    contentBase: path.join(__dirname, "./dist"),
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "elements",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
    }),
  ],
};

export default merge(baseConfig, config);
