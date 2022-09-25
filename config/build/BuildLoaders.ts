import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
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
  const typescriptRules = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const scssRules = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) =>
              Boolean(resourcePath.includes('.module.')),
            localIdentName: isDev
              ? '[local]__[hash:base64:8]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return [typescriptRules, fileRules, svgRules, scssRules];
};

export default BuildLoaders;
