<template>
  <div class="ai-edit-text">
    <MyIcon v-if="canDrag" type="icontuodong" class="sort-icon-style sort-mover" />
    <MyIcon v-if="showCheck" :type="checkIconType" />
    <div
      :class="['edit-text', isOther && 'edit-text-other', active && 'active']"
      contenteditable="true"
      onclick="document.execCommand('selectAll',false,null)"
      @focus="active = true"
      @blur="editTextBlur"
    >
      <span>{{ text }}</span>
    </div>
    <ATooltip v-if="showCheck" :mouse-leave-delay="0" placement="right">
      <template slot="title">
        删除
      </template>
      <MyIcon type="iconshanchuyuanxing" class="del-icon-style" @click="$emit('onclick')" />
    </ATooltip>
  </div>
</template>

<script>
export default {
  name: 'AiEditText',
  model: {
    event: 'textChange',
    prop: 'text',
  },
  props: {
    text: {
      type: String,
      default: '点击此处进行编辑',
    },
    // 可编辑文本类型： 普通文本、多选checkBox、单选radio
    type: {
      type: String,
      default: 'text',
    },
    canDrag: {
      type: Boolean,
      default: false,
    },
    // 用于判断 单/多选 的选项是否其他选项 1是 2否
    checkOptionOther: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  computed: {
    isOther() {
      return this.checkOptionOther === 2
    },
    showCheck() {
      return this.type === 'checkBox' || this.type === 'radio'
    },
    checkIconType() {
      return this.type === 'checkBox' ? 'iconcheck_box' : 'iconIoniconsiosradiobuttonoff'
    },
  },
  methods: {
    editTextBlur(e) {
      this.$emit('textChange', e.target.innerText)
      this.active = false
    },
  },
}
</script>

<style lang="scss" scoped>
.ai-edit-text {
  max-width: 460px;
  display: flex;
  align-items: center;
  &:hover {
    .edit-text {
      border: 1px dashed #aaa;
    }
    .sort-icon-style,
    .del-icon-style {
      opacity: 1;
    }
  }
}
.sort-icon-style {
  cursor: move;
  &:hover {
    color: $blue;
  }
}
.del-icon-style {
  margin-left: 8px;
  &:hover {
    color: $red;
  }
}
.sort-icon-style,
.del-icon-style {
  opacity: 0;
  color: #9b9b9b;
  font-size: 20px;
}

.edit-text {
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  border: 1px solid transparent;
  width: 360px;
  min-height: 30px;
  padding: 2px 8px;
  &.active {
    background-color: #f4f4f4;
  }
}
.edit-text-other::after {
  content: '';
  display: inline-block;
  width: 66px;
  height: 18px;
  border: 1px solid #d8d8d8;
  border-radius: 2px;
  background-color: #fff;
  margin-left: 14px;
  vertical-align: top;
  margin-top: 3px;
}
.item-input {
  display: inline-block;
  width: 70px;
  height: 22px;
  margin-left: 10px;
  background: #fff;
  border: 1px solid #d8d8d8;
  border-radius: 2px;
}
</style>
