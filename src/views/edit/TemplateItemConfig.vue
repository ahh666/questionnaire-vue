<template>
  <div class="form-config" @click.stop.prevent>
    <Transition name="fade">
      <div v-if="!(itemType === '' || itemType === 'Note')">
        <p>题目设置</p>
        <AFormModel
          label-align="left"
          :colon="false"
          :model="templateConfigItem"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
        >
          <AFormModelItem label="此题必答" class="a-form-item-style">
            <ASwitch v-model="templateConfigItem.mustAnswer" size="small">
              <span slot="open"></span>
              <span slot="close"></span>
            </ASwitch>
          </AFormModelItem>
          <AFormModelItem label="最少填写" class="a-form-item-style">
            <AInput v-model="templateConfigItem.minInput" style="width:80px" placeholder="请输入" size="small" />
            字
          </AFormModelItem>
          <AFormModelItem label="最多填写" class="a-form-item-style">
            <AInput v-model="templateConfigItem.maxInput" style="width:80px" placeholder="请输入" size="small" />
            字
          </AFormModelItem>
          <AFormModelItem label="默认文本" class="a-form-item-style">
            <AInput v-model="templateConfigItem.defaultText" size="small" />
          </AFormModelItem>
        </AFormModel>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      templateConfigItem: {
        mustAnswer: true,
        maxInput: 20,
        minInput: 0,
        defaultText: '',
      },
    }
  },
  computed: {
    itemType() {
      return this.$store.state.editTemplate.activeTemplateItem
    },
  },
}
</script>

<style lang="scss" scoped>
.form-config {
  min-width: 260px;
  > div {
    width: 260px;
    position: fixed;
    top: 68px;
    right: 0;
    padding: 25px 20px;
    background: #fff;
    > p {
      display: inline-block;
      color: #fff;
      font-size: 14px;
      padding: 5px 15px;
      border-radius: 2px;
      background-color: #495165;
      margin-bottom: 15px;
    }
  }
}
.a-form-item-style {
  text-align: right;
  border-bottom: 1px solid #dde5ed;
  margin-bottom: 0;
  padding: 4px 0;
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-enter {
  transform: translateX(260px);
}
</style>
