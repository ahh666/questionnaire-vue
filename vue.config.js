/*
 * @Description: Description
 * @Author: 艾欢欢<ahh666@qq.com>
 * @Date: 2021-02-04 13:43:04
 * @LastEditTime: 2021-02-18 17:45:31
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \web\vue.config.js
 */

const isProd = process.env.NODE_ENV === 'production'
const webpackConfig = require('./config/webpack.config.js')
module.exports = {
  publicPath: '/',
  productionSourceMap: !isProd,
  devServer: {
    port: 80,
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '问卷系统'
        return args // 传递给 html-webpack-plugin's 构造函数的新参数
      })
      .end()

    webpackConfig(config)
  },
}
