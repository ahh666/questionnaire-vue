<template>
  <div :style="{ height: isPreviewForPC ? '' : '100vh', overflow: 'hidden' }">
    <header class="top">
      <div class="menu flex-between">
        <span class="flex-between cursor-pointer" @click="$router.back()">
          <MyIcon type="icontuichu" class="out-icon-style" />
          退出预览
        </span>
        <span class="tips">提示：当前为预览页面，答案不被记录。</span>
        <AButton type="primary">
          发布
        </AButton>
      </div>
      <div class="radio-button">
        <ARadioGroup v-model="mode">
          <ARadioButton value="mobile">
            <MyIcon type="iconshouji1" />
            手机
          </ARadioButton>
          <ARadioButton value="pc">
            <MyIcon type="icondiannao" />
            电脑
          </ARadioButton>
        </ARadioGroup>
      </div>
    </header>
    <main class="main">
      <PreviewForPC v-if="isPreviewForPC" :preview-items="previewItems" />
      <PreviewForMobile v-else :preview-items="previewItems" />
      <p>@不才的小站</p>
    </main>
  </div>
</template>

<script>
import PreviewForMobile from './PreviewForMobile'
import PreviewForPC from './PreviewForPC'

import TextInput from './components/TextInput'
import Radio from './components/Radio'
import Checkbox from './components/Checkbox'
import Note from './components/Note'
import Upload from './components/Upload'
const PREVIEW_ITEMS = {
  TextInput,
  Radio,
  Checkbox,
  Note,
  Upload,
}
export default {
  components: { PreviewForMobile, PreviewForPC },
  data() {
    return {
      previewItems: PREVIEW_ITEMS,
      mode: 'pc',
    }
  },
  computed: {
    isPreviewForPC() {
      return this.mode === 'pc'
    },
  },
  methods: {
    callback(val) {
      console.log(val)
    },
  },
}
</script>

<style lang="scss" scoped>
.top {
  position: fixed;
  top: 0;
  z-index: 9;

  width: 100%;
  height: 140px;

  background: #f3f5f6;

  button {
    min-width: 100px;
  }

  .flex-between {
    @include setFlexDisplay(row, space-between);
  }
}

.menu {
  padding: 20px;
  width: 100%;
  height: 50px;

  background: #efefef;

  .out-icon-style {
    margin-right: 6px;

    font-size: 24px;
  }

  .tips {
    color: #aaa;
  }
}

.radio-button {
  position: absolute;
  top: 80px;
  left: 50%;

  transform: translateX(-50%);
}

.main {
  padding: 141px 0 1px 0;

  > p {
    line-height: 60px;
    text-align: center;
  }
}

</style>
