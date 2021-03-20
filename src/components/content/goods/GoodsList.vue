<template>
  <div class="goods-list">
    <goods-list-item
        v-for="(item, index) in goods"
        :key="index"
        :goodsItem="item"
        :isDetailMsg='isDetailMsg'/>
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
    },
    isDetailMsg: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap; /*根据元素宽度显示一行最多可以放下多少个元素*/
    /*align-items: center;*/
    justify-content: space-evenly;
    padding: 3px;
  }
</style>
