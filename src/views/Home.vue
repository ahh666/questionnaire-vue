<template>
  <div class="questionnaire-home">
    <nav>
      <AMenu v-model="active" mode="horizontal" class="nav-menu" @select="handleSelect">
        <AMenuItem key="project">
          <MyIcon type="iconxiangmu" />
          我的项目
        </AMenuItem>
        <AMenuItem key="about">
          <AIcon type="info-circle" />
          关于
        </AMenuItem>
      </AMenu>
    </nav>
    <ul v-if="!showAbout" class="template-list">
      <li class="template-list-item" @click="$router.push('edit')">
        <AIcon type="plus" style="margin-right: 6px" />
        <span>新建项目</span>
      </li>
    </ul>
    <About v-else />
  </div>
</template>

<script>
import About from './About'
export default {
  components: { About },
  data() {
    return {
      active: ['project'],
    }
  },
  computed: {
    showAbout() {
      return this.active[0] === 'about'
    },
  },
  methods: {
    handleSelect({ selectedKeys }) {
      this.active = selectedKeys
    },
  },
}
</script>

<style lang="scss" scoped>


.nav-menu {
  padding: 0 30px;
  height: 60px;

  line-height: 60px;
}

.template-list {
  padding: 6px 40px;
}

.template-list-item {
  float: left;

  margin: 18px 18px 0 0;
  box-sizing: border-box;
  border-radius: 4px;
  width: 250px;
  height: 155px;

  font-size: 14px;

  color: $blue;
  background: #fff;

  box-shadow: -2px 4px 5px 0 rgba($color: #000, $alpha: .06);

  cursor: pointer;
@include setFlexDisplay();
}

</style>
