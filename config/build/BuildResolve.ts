import webpack from "webpack";
import { BuildOptions } from "./types/config";

const BuildResolve = ({ paths }: BuildOptions): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
    alias: {
      "@": paths.src,
    },
    mainFiles: ["index"],
  };
};

export default BuildResolve;
