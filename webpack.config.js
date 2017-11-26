const webpack = require('webpack')
const path = require('path')
const BookmarkletPlugin = require('./lib/bookmarklet-plugin')

module.exports = {
  entry: {
    'show-grid': './src/index.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      }
    }]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new BookmarkletPlugin({
      test: /\.js$/
    })
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  }
}