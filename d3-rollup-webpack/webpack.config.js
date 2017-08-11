var webpack = require('webpack')
var path = require('path')

module.exports = {
  // 入口文件地址，不需要写完，会自动查找
  entry: {
    bundle: [path.join(__dirname, 'main.js')]
  },
  output: {
    path: path.join(__dirname, ''),
    filename: 'webpack.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
        collapse_vars: true,
        reduce_vars: true
      }
    })
  ]
}
