import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

const BuildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;
  const fileRules = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  const svgRules = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
  const babelLoader = buildBabelLoader();

  const typescriptRules = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const scssRules = buildCssLoader(isDev);

  return [fileRules, svgRules, babelLoader, typescriptRules, scssRules];
};

export default BuildLoaders;
