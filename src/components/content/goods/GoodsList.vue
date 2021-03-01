<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap; /*根据元素宽度显示一行最多可以放下多少个元素*/
    /*align-items: center;*/
    justify-content: space-between;
    padding: 3px;
  }
</style>