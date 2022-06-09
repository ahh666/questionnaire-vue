<!--
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2021-09-15 13:12:15
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2022-06-09 10:50:04
 * @FilePath     : \wenj\src\views\edit\components\content-item\Checkbox.vue
 * @Description  : Description
-->
<template>
  <div class="form-item">
    <AiEditText style="margin-bottom: 8px;" :text="editTemplateItem.title" @textChange="handleEditTextChange" />
    <Draggable
      v-model="checkItem"
      handle=".sort-mover"
      ghost-class="ghost"
      force-fallback="true"
      animation="500"
      @start="onStart"
      @end="onEnd"
    >
      <TransitionGroup>
        <div v-for="(item, index) in checkItem" :key="'key' + index" class="check-box-item">
          <AiEditText
            :text="item.text"
            type="checkBox"
            :can-drag="true"
            :check-option-other="item.type"
            @onclick="delCheckItem(index)"
            @textChange="handleOptionsTextChange(index, arguments)"
          />
        </div>
      </TransitionGroup>
    </Draggable>
    <div class="options">
      <span @click="addCheckItem(1)">
        <AIcon type="plus" />
        <span>添加单个选项</span>
      </span>
      <span @click="addCheckItem(2)">
        <AIcon type="plus" />
        <span>添加【其他】项</span>
      </span>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import checkMixin from '@/mixins/mixinForCheck'
export default {
  name: 'CheckBox',
  components: { Draggable },
  mixins: [checkMixin],
}
</script>

<style lang="scss" scoped>
.form-item {
  font-size: 16px;
}

.options {
  font-size: 14px;

  color: $blue;

  > span {
    margin-right: 30px;

    cursor: pointer;
  }
}

.check-box-item {
  margin-bottom: 5px;
  padding-left: 8px;
}

.ghost {
  opacity: 0;
}

</style>
