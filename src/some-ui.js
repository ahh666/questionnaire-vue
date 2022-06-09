/*
 * @Description: ui
 * @Author: 艾欢欢
 * @Date: 2020-06-30 17:29:00
 * @LastEditTime : 2022-06-09 11:02:53
 * @LastEditors  : Archer<ahh666@qq.com>
 * @FilePath     : \wenj\src\some-ui.js
 */

import Vue from 'vue'
import './components'

import {
  Tooltip,
  Icon,
  Tabs,
  Upload,
  Button,
  Input,
  Radio,
  Checkbox,
  Menu,
  FormModel,
  Switch,
} from 'ant-design-vue'

// 引入自己的iconfont项目 Symbol格式
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1916842_ogpvjdiuu68.js', // 在 iconfont.cn 上生成
})
Vue.component('MyIcon', MyIcon)
Vue.use(Icon)
Vue.use(Tabs)
Vue.use(Upload)
Vue.use(Button)
Vue.use(Input)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Tooltip)
Vue.use(Menu)
Vue.use(FormModel)
Vue.use(Switch)
