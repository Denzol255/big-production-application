import webpack from "webpack";

const BuildResolve = (): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
};

export default BuildResolve;
