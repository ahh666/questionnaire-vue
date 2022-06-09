<template>
  <div class="questionnaire-about">
    <AboutMd />
  </div>
</template>

<script>
import AboutMd from './About.md'
export default {
  components: { AboutMd },
}
</script>

<style lang="scss" scoped>
.questionnaire-about {
  height: 100vh;
  background: #fff;
  padding: 20px;
}
</style>
