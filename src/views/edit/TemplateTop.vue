<template>
  <div class="top">
    <div class="title">
      <span class="back cursor-pointer" @click="$router.back()">
        <AIcon type="arrow-left" />
      </span>
      <span>{{ pageTitle }}</span>
    </div>
    <AFormModel layout="inline">
      <AFormModelItem>
        <AButton @click="previewQuestionnaire">
          <AIcon type="eye" />
          预览
        </AButton>
        <AButton type="primary" @click="saveQuestionnaire">
          保存
        </AButton>
      </AFormModelItem>
    </AFormModel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        select: '',
      },
    }
  },
  computed: {
    pageTitle() {
      return this.$store.state.editTemplate.editPageTitle
    },
  },
  methods: {
    previewQuestionnaire() {
      this.$router.push('preview')
    },
    saveQuestionnaire() {},
  },
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 60px;
  box-shadow: 0 2px 4px 0 rgba($color: #000000, $alpha: 0.08);
  position: fixed;
  top: 0;
  z-index: 9;
  background: #fff;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    min-width: 120px;
    margin-right: 10px;
  }
}
.title {
  font-size: 16px;
}
.back {
  margin-right: 14px;
}
</style>
