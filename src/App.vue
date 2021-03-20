<template>
  <div id="app">
  <main-tab-bar/>
<!--    Detail不用每次销毁创建-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'

export default {
  name: 'App',
  components: {MainTabBar},
}
</script>

<style>
  @import "assets/css/base.css";
</style>
