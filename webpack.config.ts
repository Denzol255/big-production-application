import path from 'path';
import webpack from 'webpack';
import BuildWebpackConfig from './config/build/BuildConfig';
import {
  BuildEnv,
  BuildOptions,
  BuildPaths,
} from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };
  const mode = env.mode || 'development';
  const port = env.port || 3000;
  const analyze = env.analyze;
  const apiUrl = env.apiUrl || 'http://localhost:8000';
  const isDev = mode === 'development';
  const options: BuildOptions = {
    mode,
    paths,
    isDev,
    port,
    analyze,
    apiUrl,
    project: 'frontend',
  };

  const config: webpack.Configuration = BuildWebpackConfig(options);
  return config;
};
