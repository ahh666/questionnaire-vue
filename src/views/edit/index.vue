<template>
  <div class="template-edit-page" @click="closeConfig">
    <TemplateTop />
    <div class="content">
      <TemplateSide />
      <TemplateContent />
      <TemplateItemConfig />
    </div>
  </div>
</template>

<script>
import TemplateItemConfig from './TemplateItemConfig'
import TemplateContent from './TemplateContent'
import TemplateSide from './TemplateSide'
import TemplateTop from './TemplateTop'
export default {
  components: {
    TemplateItemConfig,
    TemplateTop,
    TemplateContent,
    TemplateSide,
  },
  methods: {
    closeConfig() {
      this.$store.commit('setActiveTemplateItem', '')
    },
  },
}
</script>

<style lang="scss" scoped>
.template-edit-page {
  width: 100%;
  min-height: 100vh;
  .content {
    display: flex;
    align-items: flex-start;
  }
}
</style>
