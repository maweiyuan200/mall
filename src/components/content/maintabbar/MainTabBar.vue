<template>
  <TabBar class="tabbar">
    <TabBarItem path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/android-home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/android-home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/android-category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/android-category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/android-cart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/android-cart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/android-person.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/android-person_active.svg" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
    export default {
        name: "MainTabBar",
      components: {TabBar,TabBarItem}
    }
</script>

<style scoped>
  .tabbar {
    z-index: 10;
  }
</style>
