<template>
  <div class="tab-bar-item" @click="activeBtn()">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
<!--    <div :class="{active: isActive}"><slot name="item-text"></slot></div>-->

<!--    判断是否处于活跃状态，是就使用activeColor，否则返回一个空对象-->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
      props: {
        path: String,
        // 可以接受外界自定义color
        activeColor: {
          type: String,
          default: '#FF6047'
        }
      },
      data() {
          return {
            // active: true
          }
      },
      methods: {
        activeBtn() {
          this.$router.push(this.path)
        }
      },
      computed: {
          isActive() {
            //判断当前活跃路由路径是否包含当前页面路径
            return this.$route.path.indexOf(this.path) !== -1
          },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;   /*内容区则会自动放大占满剩余空间。*/
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle; /*把此元素放置在父元素的中部*/
    margin-bottom: 2px;
  }
  /*.active {*/
  /*  color: #FF6047;*/
  /*}*/
</style>
