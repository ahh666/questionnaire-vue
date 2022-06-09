<template>
  <AFormModelItem :label="data.title">
    <ARadioGroup @change="onChange">
      <span v-for="(item, index) in radioOptions" :key="index">
        <ARadio :value="index" style="margin-bottom:8px">
          {{ item.text }}
        </ARadio>
        <AInput v-if="!isMobile && item.type === 2" size="small" style="width: 150px" />
        <AInput
          v-if="isMobile && checkValue === index && item.type === 2"
          size="small"
          :style="{ display: isMobile && 'block' }"
        />
        <!-- <a-input v-if="item.type === 2" size="small" :style="{ width: !isMobile && '150px' }" /> -->
        <br />
      </span>
      <!-- <a-radio v-for="(item, index) in radioOptions" :style="radioStyle" :key="index" :value="index">
        {{ item.text }}
        <a-input v-if="!isMobile && item.type === 2" size="small" style="width: 150px" />
        <a-input
          v-if="isMobile && checkValue === index && item.type === 2"
          size="small"
          :style="{ width: '100%', display: isMobile && 'block' }"
        />
      </a-radio> -->
    </ARadioGroup>
  </AFormModelItem>
</template>

<script>
import mixin from '@/mixins/mixinForPreview'
export default {
  name: 'Radio',
  mixins: [mixin],
  data() {
    return {
      checkValue: undefined,
    }
  },
  computed: {
    radioOptions() {
      return this.data.options
    },
  },
  methods: {
    onChange(e) {
      this.checkValue = e.target.value
    },
  },
}
</script>
