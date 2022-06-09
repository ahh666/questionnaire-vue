<template>
  <AFormModelItem :label="data.title">
    <ACheckboxGroup>
      <span v-for="(item, index) in checkBoxOptions" :key="index">
        <ACheckbox :value="index" style="margin-bottom:8px" @change="onChange($event, item.type)">
          {{ item.text }}
        </ACheckbox>
        <AInput v-if="!isMobile && item.type === 2" size="small" style="width: 150px" />
        <AInput
          v-if="isMobile && checkValue && item.type === 2"
          size="small"
          :style="{ display: isMobile && 'block' }"
        />
        <br />
      </span>
    </ACheckboxGroup>
  </AFormModelItem>
</template>

<script>
import mixin from '@/mixins/mixinForPreview'
export default {
  name: 'CheckBox',
  mixins: [mixin],
  data() {
    return {
      checkValue: undefined,
    }
  },
  computed: {
    checkBoxOptions() {
      return this.data.options
    },
  },
  methods: {
    onChange(e, type) {
      if (type === 2) {
        this.checkValue = e.target.checked
      }
    },
  },
}
</script>
