/*
 * @Description: Description
 * @Author: 艾欢欢<ahh666@qq.com>
 * @Date: 2021-02-04 14:56:17
 * @LastEditTime: 2021-02-05 16:26:51
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \web\config\webpack.config.prod.js
 */
const cdn = require('./cdn')

module.exports = config => {
  // 如果启用了cdn,则添加cdn内容
  if (cdn.enable) {
    config.plugin('html').tap(args => {
      args.forEach(arg => {
        arg.cdns = {
          JS: Object.values(cdn.JS).map(item =>
            typeof item === 'string' ? item : item.url
          ),
          CSS: Object.values(cdn.CSS)
        }
      })
      return args
    })
    config.externals(
      Object.entries(cdn.JS).reduce((result, [key, value]) => {
        result[key] = typeof value === 'string' ? key : value.exportName
        return result
      }, {})
    )
  }
  // gzip压缩
  // config.plugin('gzip-plugin').use('compression-webpack-plugin', [
  //   {
  //     filename: '[path].gz[query]',
  //     algorithm: 'gzip',
  //     test: /\.js$|\.html$|\.json$|\.css$|\.ttf$/,
  //     threshold: 4096, // 只有大小大于该值（4KB）的资源会被处理
  //     minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
  //     deleteOriginalAssets: false // 删除原文件
  //   }
  // ])

  // 图片压缩
  // config.module
  //   .rule('images')
  //   .use('image-webpack-loader')
  //   .loader('image-webpack-loader')
  //   .options({
  //     mozjpeg: { progressive: true, quality: 65 },
  //     optipng: { enabled: false },
  //     pngquant: { quality: [0.65, 0.9], speed: 4 }
  //     // gifsicle: { interlaced: false },
  //     // webp: { quality: 75 }
  //   })
}
