<template>
  <div class="goods-item" @click="itemClick">
      <img :src="goodsItem.show.img" alt="" @load="imgLoad">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoadFinish')
    },
    itemClick() {
      //拿到goodsItem里的iid传进详情页
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
  .goods-item {
    padding-bottom: 44px;
    position: relative;
    width: 49%;
  }
  .goods-item img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden; /*当内容溢出元素框时隐藏*/
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis; /*显示省略符号来代表被修剪的文本*/
    white-space: nowrap; /*规定段落中的文本不进行换行*/
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-height-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/home/collect_icon.png") 0 0/14px 14px;
  }
</style>
