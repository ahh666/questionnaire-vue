<template>
  <div class="form-side">
    <div class="meun">
      <p>填空</p>
      <AButton icon="edit" @click="addTemplateItem('TextInput')">
        文本填空
      </AButton>
      <p>选择</p>
      <AButton icon="check-circle" @click="addTemplateItem('Radio')">
        单选
      </AButton>
      <AButton icon="check-square" @click="addTemplateItem('Checkbox')">
        多选
      </AButton>
      <p>备注</p>
      <AButton icon="bulb" @click="addTemplateItem('Note')">
        备注说明
      </AButton>
      <p>附件</p>
      <AButton icon="upload" @click="addTemplateItem('Upload')">
        文件上传
      </AButton>
    </div>
  </div>
</template>

<script>
/**
 * 数据结构：
 * item = {
 *  title: '标题文字',
 *  type: '类型',
 *  options: '单选/多选/下拉的选项'
 * }
 */
import editTemplateItems from './config'
export default {
  methods: {
    addTemplateItem(type) {
      // 避免地址引用导致的数据互相影响问题
      const item = JSON.parse(JSON.stringify(editTemplateItems[type]))
      this.$store.commit('addItemToTemplateList', item)
    },
  },
}
</script>

<style lang="scss" scoped>
.form-side {
  min-width: 144px;
  height: 100vh;
}

.meun {
  display: flex;

  position: fixed;
  top: 68px;
  left: 0;

  padding: 20px 15px;
  width: 144px;

  background: #fff;

  flex-direction: column;

  p {
    font-size: 13px;
    font-weight: 600;

    ~ p {
      margin-top: 25px;
    }
  }

  button {
    margin-top: 6px;

    font-size: 12px;
  }
}

</style>
