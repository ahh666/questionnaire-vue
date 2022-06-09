/*
 * @Description: Description
 * @Author: 艾欢欢<ahh666@qq.com>
 * @Date: 2021-03-08 14:18:02
 * @LastEditTime: 2021-04-20 15:39:46
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \web\src\mixins\project-questionnaire\mixinForEdit.js
 */
export default {
  props: {
    index: {
      type: Number,
      require: true,
    },
  },
  computed: {
    editTemplateItem() {
      return this.$store.state.editTemplate.editTemplateList[this.index]
    },
  },
  methods: {
    setEditTemplateItem(options) {
      this.$store.commit('setTemplateItem', {
        index: this.index,
        resetItem: options,
      })
    },
    // 标题更新
    handleEditTextChange(text) {
      this.setEditTemplateItem({ title: text })
    },
  },
}
