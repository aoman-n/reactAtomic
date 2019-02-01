const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: path.join(__dirname, '/src'),
  entry: [
    '@babel/polyfill',
    'react-hot-loader/patch',
    path.join(__dirname, '/src'),
  ],
  output: {
    path: path.join(__dirname, '/public'),
    filename: './js/bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      components: path.join(__dirname, 'src/components'),
      image: path.join(__dirname, 'src/images'),
      styles: path.join(__dirname, 'src/styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 51200,
              // name: '[name].[ext]',
              // outputPath: 'images/',
              // publicPath: path => `./${path}`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
    config.devServer = {
      contentBase: path.join(__dirname, '/public'),
      historyApiFallback: true,
      port: 3000,
    };
  }
  return config;
};
