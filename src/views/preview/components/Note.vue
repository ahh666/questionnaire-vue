<template>
  <div class="form-item">
    <p>{{ data.title }}</p>
  </div>
</template>

<script>
import mixin from '@/mixins/mixinForPreview'
export default {
  name: 'Note',
  mixins: [mixin],
}
</script>
