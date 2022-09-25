import webpack from "webpack";
import { BuildOptions } from "./types/config";
import BuildPlugins from "./BuildPlugins";
import BuildResolve from "./BuildResolve";
import BuildLoaders from "./BuildLoaders";
import BuildDevServer from "./BuildDevServer";

const BuildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths, isDev } = options;

  const config = {
    mode: mode,
    entry: paths.entry,
    devtool: isDev ? "inline-source-map" : undefined,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: BuildPlugins(options),
    module: {
      rules: BuildLoaders(options),
    },
    resolve: BuildResolve(options),
    devServer: isDev ? BuildDevServer(options) : undefined,
  };
  return config;
};

export default BuildWebpackConfig;
