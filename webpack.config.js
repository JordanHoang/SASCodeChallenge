const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {      
        use: 'babel-loader',
        exclude: /node_modules/,
        test: /\.jsx?$/
      },
      {
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
        test: /\.css$/
      },
      { test: /\.(jpe?g|png|gif|svg|JPG|pdf|ico)$/,use: [{loader: 'url-loader',options: { limit: 40000 }},'image-webpack-loader']}
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]

}

module.exports = config