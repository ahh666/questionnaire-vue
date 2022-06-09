/*
 * @Description: Description
 * @Author: 艾欢欢<ahh666@qq.com>
 * @Date: 2021-02-26 10:49:36
 * @LastEditTime: 2021-02-26 14:23:17
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \web\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import editTemplate from './modules/editTemplate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    editTemplate,
  },
})
