<template>
  <div class="preview-for-mobile">
    <div class="preview-box-bg">
      <div class="preview-box">
        <div class="content">
          <div class="title">
            <h2>问卷标题文字</h2>
            <p>
              问卷描述问卷描述问卷描述问卷描述问卷描述问卷描述问卷描
            </p>
          </div>
          <AFormModel layout="vertical">
            <div v-for="(item, index) in previewList" :key="index">
              <Component :is="previewItems[item.type]" :data="item" :is-mobile="true" />
            </div>
            <AFormModelItem>
              <AButton type="primary">
                提交
              </AButton>
            </AFormModelItem>
          </AFormModel>
        </div>
      </div>
    </div>
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
  data() {
    return {
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
    }
  },
  created() {
    this.previewList = this.$store.state.editTemplate.editTemplateList
  },
}
</script>
<style lang="scss" scoped>
.preview-for-mobile {
  overflow: hidden;

  position: relative;

  margin: 0 auto;
  padding: 0 10px;

// display: inline-block;
  width: 274px;
  height: 542px;

  background: url("~@/assets/images/preview-phone.webp") no-repeat;
  background-size: 274px 542px;

  button {
    width: 100%;
  }
}

.preview-box-bg {
  overflow: hidden scroll;

  position: absolute;
  top: 75px;
  right: -30px;
  bottom: 75px;
  left: 28px;
}

.content {
  overflow-x: hidden;

  padding: 0 5px;
  width: 218px;

  background: #fff;
}

.title {
  // border-bottom: 3px solid #53a4f4;
  padding: 20px 10px 0 10px;
  min-height: 140px;

  word-break: normal;

  background: #fff;

  // margin-bottom: 26px;
  h2 {
    text-align: center;
  }

  p {
    font-size: .9em;
  }
}

</style>
