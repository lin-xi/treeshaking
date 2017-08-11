var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CSSTreeShakingPlugin = require('webpack-css-treeshaking-plugin')

module.exports = {
  // 入口文件地址，不需要写完，会自动查找
  entry: path.join(__dirname, 'src/main.js'),
  output: {filename: 'bundle.js'},
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loaders: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: 'production'
    //   }
    // }),
    new CSSTreeShakingPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        collapse_vars: true,
        reduce_vars: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'index.html'),
      inject: true
    })
    
  ]
}
