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
  const codebabelLoader = buildBabelLoader({ isTsx: false });
  const tsxCodebabelLoader = buildBabelLoader({ isTsx: true });

  const scssRules = buildCssLoader(isDev);

  return [fileRules, svgRules, codebabelLoader, tsxCodebabelLoader, scssRules];
};

export default BuildLoaders;
