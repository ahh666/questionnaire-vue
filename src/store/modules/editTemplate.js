/*
 * @Description: Description
 * @Author: 艾欢欢<ahh666@qq.com>
 * @Date: 2021-02-26 10:50:42
 * @LastEditTime: 2021-04-20 16:16:51
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \web\src\store\modules\project-questionnaire\editTemplate.js
 */
export default {
  state: {
    editTemplateList: [],
    activeTemplateItem: '',
    editPageTitle: '',
  },
  mutations: {
    // 设置问卷题目列表
    setTemplateList(state, list) {
      state.editTemplateList = list
    },
    /**
     * @description: 设置问卷题目某一项的某一个选项
     * @param {number} index 索引
     * @param {object} resetItem 需要重新赋值的某一个选项
     */
    setTemplateItem(state, { index, resetItem }) {
      const entries = Object.entries(resetItem)[0]
      state.editTemplateList[index][entries[0]] = entries[1]
    },
    addItemToTemplateList(state, item) {
      state.editTemplateList.push(item)
    },
    setActiveTemplateItem(state, type) {
      state.activeTemplateItem = type
    },

    // 用于同步页面标题
    setEditPageTitle(state, title) {
      state.editPageTitle = title
    },
  },
}
