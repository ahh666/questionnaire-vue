<!--
 * @Description: Description
 * @Author: 艾欢欢
 * @Date: 2020-06-30 14:59:00
 * @LastEditTime: 2021-03-03 11:31:10
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \web\src\App.vue
-->
<template>
  <div id="app">
    <RouterView />
  </div>
</template>
<script>
export default {
  computed: {},
}
</script>
<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;

  font-family: "Microsoft YaHei", "SF Pro Display", Roboto, Noto, Arial, "PingFang SC", sans-serif;
  letter-spacing: 1px;

  :focus {
    outline: 0; // 去除输入框点击高亮
  }
}

#app {
  width: 100%;
  min-height: 100vh;

  font-family: Avenir, Helvetica, Arial, sans-serif;

  background-color: #f3f5f6;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
