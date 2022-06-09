/*
 * @Description: Description
 * @Author: 艾欢欢<ahh666@qq.com>
 * @Date: 2021-02-04 13:43:04
 * @LastEditTime: 2021-02-26 14:40:56
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \web\src\main.js
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './some-ui'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
