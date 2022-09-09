/*
 * @Description: 前端路由
 * @Author: 艾欢欢
 * @Date: 2020-06-30 14:59:00
 * @LastEditTime: 2021-07-20 18:18:23
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \web\src\router\index.js
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

// 处理路由跳转会报错的问题: Error: Avoided redundant navigation to current location: xxx
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/edit',
    component: () => import('@/views/edit'),
  },
  {
    path: '/preview',
    component: () => import('@/views/preview'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/project/questionnaire',
  routes,
})

export default router
