/*
 * @Description: Description
 * @Author: 艾欢欢<ahh666@qq.com>
 * @Date: 2021-02-04 14:52:47
 * @LastEditTime: 2021-04-20 17:55:33
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \web\config\webpack.config.js
 */
const path = require('path')
const resolve = dir => path.resolve(__dirname, '../', dir)

module.exports = config => {
  config.resolve.alias
    .set('@', resolve('./src'))
    .set('@assets', resolve('./src/assets'))
    .set('@api', resolve('./src/api'))
    .set('@mixins', resolve('./src/mixins'))

  const oneOfsMap = config.module.rule('scss').oneOfs.store
  oneOfsMap.forEach(item => {
    item
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: [path.resolve(__dirname, '../src/assets/style/main.scss')]
      }).end
  })

  config.module
    .rule('md')
    .test(/\.md/)
    .use('vue-loader')
    .loader('vue-loader')
    .end()
    .use('vue-markdown-loader')
    .loader('vue-markdown-loader/lib/markdown-compiler')
    .options({
      raw: true
    })

  if (process.env.NODE_ENV === 'production') {
    require('./webpack.config.prod.js')(config)
  } else {
    require('./webpack.config.dev.js')(config)
  }
}
