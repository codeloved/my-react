const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[name]-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        include: /src/,
        use: [
          {
           loader: 'babel-loader' 
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        include: /src/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"), //静态服务器地址  默认访问localhost:port会返回index.html文件,或者使用具体地址访问文件
    port: 3000,
    host: "0.0.0.0",
    hot: true,
    publicPath: "http://localhost:3000/", // 打包文件可访问路径
    inline: true,
    historyApiFallback: true // 使用react-router时,所有路由都要返回index.html,否则刷新子路由页面会报错
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}