<template>
  <div class="form-item">
    <AiEditText :text="editTemplateItem.title" @textChange="handleEditTextChange" />
    <div class="upload-input">
      <AIcon type="upload" class="upload-icon" />
      上传文件
    </div>
    <div class="tips">
      30M以内、支持扩展名：.rar .zip .doc .docx .pdf .jpg...
    </div>
  </div>
</template>

<script>
import mixin from '@/mixins/mixinForEdit'
export default {
  name: 'Upload',
  mixins: [mixin],
}
</script>

<style lang="scss" scoped>
.form-item {
  font-size: 16px;
}

.upload-input {
  display: block;

  margin-top: 8px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  width: 128px;
  height: 34px;

  font-size: 14px;
  line-height: 34px;
  text-align: center;

  color: #484848;
  background-color: #fff;
}

.upload-icon {
  margin-right: 5px;

  font-size: 18px;
}

.tips {
  margin-top: 10px;

  font-size: 13px;

  color: #999;
}

</style>
