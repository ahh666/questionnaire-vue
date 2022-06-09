<template>
  <div class="form-item">
    <AiEditText :text="editTemplateItem.title" @textChange="handleEditTextChange" />
  </div>
</template>

<script>
import mixin from '@/mixins/mixinForEdit'
export default {
  name: 'Note',
  mixins: [mixin],
}
</script>

<style lang="scss" scoped>
.form-item {
  font-size: 16px;
}

</style>
