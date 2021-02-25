const path = require('path');
const fs = require('fs');
const isDev = process.env.NODE_ENV === 'development';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

const testFolder = path.resolve(__dirname, './src/entryPoints/');
const entry = {};

fs.readdirSync(testFolder).forEach(file => {
  if (file) {
    entry[file] = [path.resolve(__dirname, `./src/entryPoints/${file}/index.ts`)];
  }
});

module.exports = {
  entry: entry,
  output: {
    path: isDev ? path.resolve(__dirname, './dist/dev/') : path.resolve(__dirname, './dist/build/'),
    filename: isDev ? '[name]/dev.[name].min.js' : '[name]/build.[name].min.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      Images: path.resolve(__dirname, 'src/images/'),
      Scripts: path.resolve(__dirname, 'src/scripts/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
      Tests: path.resolve(__dirname, 'src/tests/'),
    },
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].min.css',
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader?url=false', 'postcss-loader', 'sass-loader'],
      },
      // images
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: content => svgToMiniDataURI(content.toString()),
            },
          },
        ],
      },
    ],
  },
  devtool: isDev ? 'source-map' : false,
  optimization: {
    minimize: isDev ? false : true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    /**
     * Мы можем разделить библиотеки вручную. Для это пишем, внутри регулярных выражений какие библиотеки нам нужны
     * Например, мы можем добавить несколько библиотек в единый чанк вот в таком формате
     * /[\\/]node_modules[\\/](react|react-dom|lodash)[\\/]/
     */
    splitChunks: isDev
      ? false
      : {
          cacheGroups: {
            react: {
              test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
              name: 'react',
              chunks: 'all',
              filename: 'libs/react.min.js',
            },
            lodash: {
              test: /[\\/]node_modules[\\/](lodash)[\\/]/,
              name: 'lodash',
              chunks: 'all',
              filename: 'libs/lodash.libs.min.js',
            },
          },
        },
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
