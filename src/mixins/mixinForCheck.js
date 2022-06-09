/*
 * @Description: Description
 * @Author: 艾欢欢<ahh666@qq.com>
 * @Date: 2021-03-08 14:24:03
 * @LastEditTime: 2021-04-20 16:16:38
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \web\src\mixins\project-questionnaire\mixinForCheck.js
 */
import mixin from './mixinForEdit'
export default {
  mixins: [mixin],
  data() {
    return {
      checkItem: [],
    }
  },
  computed: {
    checkOptions() {
      return this.editTemplateItem.options
    },
  },
  watch: {
    checkOptions: {
      handler(val) {
        this.checkItem = val
      },
      immediate: true,
    },
  },
  methods: {
    onStart() {},
    onEnd() {
      this.syncCheckItem()
    },
    delCheckItem(key) {
      this.checkItem.splice(key, 1)
      this.syncCheckItem()
    },
    addCheckItem(type) {
      this.checkItem.push({
        text: '新选项',
        type,
      })
      this.syncCheckItem()
    },
    // 设置单/多选的操作选项
    syncCheckItem() {
      this.setEditTemplateItem({ options: this.checkItem })
    },
    // 单/多选的操作选项文字编辑后的信息同步
    handleOptionsTextChange(index, args) {
      this.checkItem[index].text = args[0]
    },
  },
}
