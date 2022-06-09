/*
 * @Description: 配置 cdn
 * @Author: 艾欢欢<ahh666@qq.com>
 * @Date: 2021-02-04 15:00:08
 * @LastEditTime: 2021-02-05 16:36:38
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \web\config\cdn.js
 */
module.exports = {
  // 是否启用CDN
  enable: false,
  JS: {
    vue: {
      url: 'https://cdn.bootcss.com/vue/2.6.11/vue.min.js',
      exportName: 'Vue',
    },
    vuex: {
      url: 'https://cdn.bootcdn.net/ajax/libs/vuex/3.4.0/vuex.js',
      exportName: 'Vuex',
    },
    'vue-router': {
      url: 'https://cdn.bootcss.com/vue-router/3.2.0/vue-router.min.js',
      exportName: 'VueRouter',
    },
    axios: 'https://cdn.bootcss.com/axios/0.19.2/axios.min.js',
  },
  CSS: {},
}
