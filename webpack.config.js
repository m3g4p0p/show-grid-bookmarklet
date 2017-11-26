const path = require('path')

module.exports = {
  entry: {
    bookmarklet: './src/index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: path.resolve('./lib/bookmarklet-loader.js'),
          options: {
            filename: 'bookmarklet.txt'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  }
}