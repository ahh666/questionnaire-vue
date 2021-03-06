/*
 * @Description: 自动化注册全局组件
 * @Author: 艾欢欢
 * @Date: 2020-07-30 15:57:28
 * @LastEditTime: 2020-07-30 15:59:02
 * @LastEditors: 艾欢欢
 * @FilePath: \web\src\components\common\index.js
 */

import Vue from 'vue'
// 这里暂不考虑 JSX 和 TSX
const context = require.context('./', false, /\.vue$/)

// context.keys() 会返回一个数组，包含所有匹配到的文件的路径
context.keys().forEach(key => {
  // context(key)可以获取到对应的文件 .default表示 export default 导出的内容
  const component = context(key).default
  Vue.component(component.name, component)
})
