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
    port: 3000,
    contentBase: path.join(__dirname, "./dist"),
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app",
      remotes: {
        movies: "movies@http://localhost:3001/remoteEntry.js",
        elements: "elements@http://localhost:3002/remoteEntry.js",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
    }),
  ],
};

export default merge(baseConfig, config);
