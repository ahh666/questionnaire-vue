/*
 * @Description: 问卷系统的配置内容
 * @Author: 艾欢欢<ahh666@qq.com>
 * @Date: 2021-03-05 17:24:02
 * @LastEditTime: 2021-03-05 17:39:53
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \web\src\utils\config\questionnaire\editTemplateItems.js
 */

// 这些可以作为配置项，也可以做在数据库中
/**
 * 数据结构：
 * item = {
 *  title: '标题文字',
 *  type: '类型',
 *  options: '单选/多选/下拉的选项'
 * }
 */
export default {
  TextInput: {
    type: 'TextInput',
    title: '请填写本项内容',
  },
  Radio: {
    type: 'Radio',
    title: '请选择一个选项',
    options: [
      {
        text: '选项1',
        type: 1,
      },
      {
        text: '选项2',
        type: 1,
      },
    ],
  },
  Checkbox: {
    type: 'Checkbox',
    title: '请选择以下选项（多选）',
    options: [
      {
        text: '选项1',
        type: 1,
      },
      {
        text: '选项2',
        type: 1,
      },
    ],
  },
  Note: {
    type: 'Note',
    title: '提示内容',
  },
  Upload: {
    type: 'Upload',
    title: '点击上传文件',
  },
}
