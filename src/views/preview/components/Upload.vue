<template>
  <AFormModelItem :label="data.title">
    <AUpload name="file" :multiple="true" action="" :headers="headers" @change="handleChange">
      <AButton>
        <AIcon type="upload" />
        上传文件(30M以内)
      </AButton>
    </AUpload>
  </AFormModelItem>
</template>

<script>
import mixin from '@/mixins/mixinForPreview'
export default {
  name: 'Upload',
  mixins: [mixin],
  data() {
    return {
      headers: {
        authorization: 'authorization-text',
      },
    }
  },
  methods: {
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    },
  },
}
</script>
