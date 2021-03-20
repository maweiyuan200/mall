<template>
  <div class="goods-item" @click="itemClick">
    <!-- 这个组件是被home，detail两个组件复用的，由于图片数据不一样，所以这里v-if判断 -->
    <!-- 图片链接 -->
    <!-- img的src改成v-lazy是因为使用懒加载插件 -->
    <img
        v-lazy="goodsItem.show.img" alt=""
        @load="imgLoad"
        v-if="!isDetailMsg" />
    <!-- detail组件的推荐商品数据 -->
    <img v-lazy="goodsItem.image" alt="" v-else />
    <!-- 下面文字 -->
    <div class="context">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="cafv">{{goodsItem.cfav}}</span>
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
    },
    isDetailMsg: {
      type: Boolean
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoadFinish')

      // 不使用混入时，进入哪个就发送给哪个组件请求刷新
      //  if (this.$route.path.indexOf('/home')) {
      //     this.$bus.$emit('HomeimgLoadOk');
      //  } else if (this.$route.path.indexOf('/details')) {
      //     this.$bus.$emit('DetailImgLoad');
      //  }
    },
    itemClick() {
      if (/detail/.test(this.$route.path)) {
        //  跳转到其它路径
        this.$toast.show(this.goodsItem.title)
      } else {
        //拿到goodsItem里的iid传进详情页
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
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
  .goods-item .context {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden; /*当内容溢出元素框时隐藏*/
    text-align: center;
  }
  .context p {
    overflow: hidden;
    text-overflow: ellipsis; /*显示省略符号来代表被修剪的文本*/
    white-space: nowrap; /*规定段落中的文本不进行换行*/
    margin-bottom: 3px;
  }
  .price {
    color: var(--color-height-text);
    margin-right: 20px;
  }
  .cafv {
    position: relative;
  }
  .cafv::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/home/collect_icon.png") 0 0/14px 14px;
  }
</style>
