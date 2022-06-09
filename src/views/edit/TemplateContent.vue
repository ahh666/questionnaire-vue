<template>
  <div class="template-content" @click.stop.prevent>
    <div class="tips">
      <AiEditText v-model="titleText" @textChange="handleEditTextChange" />
    </div>
    <div v-if="list.length < 1" class="none-tip">
      <p>点击左侧题型进行添加</p>
      <p>
        或者
        <a href="#">导入已有表单</a>
      </p>
    </div>
    <Draggable
      v-model="list"
      handle=".mover"
      chosen-class="chosen"
      ghost-class="ghost"
      force-fallback="true"
      animation="500"
      @start="onStart"
      @end="onEnd"
    >
      <TransitionGroup>
        <div
          v-for="(item, index) in list"
          :key="'key' + index"
          :class="['item-style', index === activeTemplateItem && 'active-item-style']"
          @click="itemActivation(index)"
        >
          <Component :is="templateComponents[item.type]" :index="index" />
          <span class="icon-style" @click.stop.prevent>
            <ATooltip :mouse-leave-delay="0">
              <template slot="title">
                按住拖动
              </template>
              <AIcon type="drag" class="icon-hover-style-blue mover" style="margin-right:14px" />
            </ATooltip>
            <ATooltip :mouse-leave-delay="0">
              <template slot="title">
                点击删除
              </template>
              <AIcon class="icon-hover-style-blue" type="delete" @click="delTemplateItem(index)" />
            </ATooltip>
          </span>
        </div>
      </TransitionGroup>
    </Draggable>
  </div>
</template>

<script>
import TextInput from './templates/TextInput'
import Radio from './templates/Radio'
import Checkbox from './templates/Checkbox'
import Note from './templates/Note'
import Upload from './templates/Upload'
const FORM_ITEMS = {
  TextInput,
  Radio,
  Checkbox,
  Note,
  Upload,
}
import Draggable from 'vuedraggable'
export default {
  components: {
    Draggable,
  },
  data() {
    return {
      templateComponents: FORM_ITEMS,
      titleText: '点击更改标题，失焦生效',
      list: [],
    }
  },
  computed: {
    activeTemplateItem() {
      return this.$store.state.editTemplate.activeTemplateItem
    },
  },
  created() {
    this.list = this.$store.state.editTemplate.editTemplateList
    this.$store.commit('setEditPageTitle', this.titleText)
  },
  methods: {
    // 标题同步
    handleEditTextChange(text) {
      this.$store.commit('setEditPageTitle', text)
    },
    // 通过 vuex 设置模板列表
    setTemplateList() {
      this.$store.commit('setTemplateList', this.list)
    },
    // 通过 vuex 设置激活项
    setActiveTemplateItem(active = '') {
      this.$store.commit('setActiveTemplateItem', active)
    },
    onStart() {
      this.setActiveTemplateItem()
    },
    onEnd() {
      this.setTemplateList()
    },
    // 删除模板子项
    delTemplateItem(key) {
      this.setActiveTemplateItem()
      this.list.splice(key, 1)
    },
    // 点击设置激活项
    itemActivation(index) {
      if (index === this.activeTemplateItem) {
        return false
      }
      this.setActiveTemplateItem()
      setTimeout(() => {
        this.setActiveTemplateItem(index)
      }, 10)
    },
  },
}
</script>

<style lang="scss" scoped>
.none-tip {
  margin-top: 10px;
  border: 1px dashed #2672ff;
  border-radius: 4px;
  padding-top: 100px;
  height: 300px;

  font-size: 16px;
  line-height: 30px;
  text-align: center;

  color: #484848;
}

.icon-style {
  display: none;

  position: absolute;
  top: 10px;
  right: 22px;

  font-size: 20px;

  color: #949393;

  cursor: pointer;
}

.template-content {
  margin: 68px 8px;
  width: 100%;
  min-width: 560px;
  min-height: 100vh;
}

.item-style {
  position: relative;

  margin: 10px 0;
  border: 2px solid #fff;
  border-radius: 4px;
  padding: 18px 20px;

  background: #fff;

  box-shadow: 0 2px 4px 0 rgba($color: #000, $alpha: .1);

  &:hover {
    > span {
      display: block;
    }
  }
}

.active-item-style {
  border: 2px solid #2672ff;
}

.tips {
  padding: 10px;

  background: #fff;
}

.ghost {
  opacity: 0;
  // border: 2px solid green;
}

.chosen {
  // border: 2px solid red;
}

</style>
