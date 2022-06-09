<template>
  <AFormModelItem :label="data.title">
    <AInput placeholder="请输入" />
  </AFormModelItem>
</template>

<script>
import mixin from '@/mixins/mixinForPreview'
export default {
  name: 'TextInput',
  mixins: [mixin],
}
</script>
