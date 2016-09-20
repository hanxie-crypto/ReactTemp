var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var assets = require('postcss-assets');
var devserverpath = 'http://127.0.0.1:3000/';
module.exports = {
  entry: [
    `webpack-dev-server/client?${devserverpath}`, // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'app/client.jsx')
  ],
  output: {
    path: __dirname + '/',
    filename: 'app.js',
    publicPath: devserverpath
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: [
        'react-hot',
        'babel-loader',
      ],
      exclude: /node_modules/,
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.json$/,
      loader: 'json-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(css|scss)$/,
      loader: 'style-loader!css-loader!postcss-loader!sass-loader',
    }, {
      test: /\.(ttf|eot|woff|woff2|otf|svg)/,
      loader: 'file-loader?name=./fonts/[name].[ext]'
    }, ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: '.eslintrc'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  postcss: [assets({
    loadPaths: ['images/']
  })]
};