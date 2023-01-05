import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
interface BuildBabelLoaderProps {
  isTsx: boolean;
}

export const buildBabelLoader = ({ isTsx }: BuildBabelLoaderProps) => {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx,
            },
          ],
          '@babel/plugin-transform-runtime',
          isTsx && [
            babelRemovePropsPlugin,
            {
              props: ['data-testid'],
            },
          ],
        ].filter(Boolean),
      },
    },
  };
};
