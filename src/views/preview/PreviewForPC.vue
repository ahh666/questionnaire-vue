<template>
  <div class="preview-for-pc">
    <div class="title">
      <h2>问卷标题文字</h2>
      <p>
        问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描
      </p>
    </div>
    <AFormModel layout="vertical">
      <div v-for="(item, index) in previewList" :key="index">
        <Component :is="previewItems[item.type]" :data="item" />
      </div>
      <AFormModelItem>
        <AButton type="primary">
          提交
        </AButton>
      </AFormModelItem>
    </AFormModel>
  </div>
</template>
<script>
export default {
  props: {
    previewItems: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    this.previewList = this.$store.state.editTemplate.editTemplateList
  },
}
</script>
<style lang="scss" scoped>
.preview-for-pc {
  width: 800px;
  margin: 0 auto;
  padding: 0 50px 50px;
  background: #fff;
  button {
    width: 100px;
  }
}
.title {
  background: #fff;
  word-break: normal;
  border-bottom: 3px solid #53a4f4;
  padding: 30px 20px 0 20px;
  margin-bottom: 40px;
  h2 {
    text-align: center;
  }
}
</style>
