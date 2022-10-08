import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

const BuildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
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
  const babelLoader = {
    test: /\.(js|jsx|tsx)/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const typescriptRules = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const scssRules = buildCssLoader(isDev);

  return [fileRules, svgRules, babelLoader, typescriptRules, scssRules];
};

export default BuildLoaders;
