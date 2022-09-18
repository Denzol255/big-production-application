import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

const BuildDevServer = ({ port }: BuildOptions): DevServerConfiguration => {
  return {
    port,
    open: true,
    historyApiFallback: true,
  };
};

export default BuildDevServer;
