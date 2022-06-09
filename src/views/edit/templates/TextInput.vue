<template>
  <div class="form-item">
    <AiEditText :text="editTemplateItem.title" @textChange="handleEditTextChange" />
    <div class="form-item-input"></div>
  </div>
</template>

<script>
import mixin from '@/mixins/mixinForEdit'
export default {
  name: 'TextInput',
  mixins: [mixin],
}
</script>

<style lang="scss" scoped>
.form-item {
  font-size: 16px;
}

.form-item-input {
  margin-top: 8px;
  border: 1px solid #d8d8d8;
  border-radius: 2px;
  width: 360px;
  height: 30px;

  background: #fff;
}

</style>
