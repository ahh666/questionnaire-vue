/*
 * @Description: Description
 * @Author: 艾欢欢<ahh666@qq.com>
 * @Date: 2021-03-08 14:02:52
 * @LastEditTime: 2021-03-08 17:06:50
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \web\src\mixins\project-questionnaire\mixinForPreview.js
 */
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
}
