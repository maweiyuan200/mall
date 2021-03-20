<template>
  <div class="recommends">
    <div v-for="item in recommends" class="recommends-item">
      <a :href="item.link">
        <img v-lazy="item.image" alt="" @load="recommondImgLoad">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data () {
    return {
      ImgLoad: false,
    }
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    recommondImgLoad () {
      if(!this.ImgLoad) {
        this.$emit('recommondImgLoad')
        this.ImgLoad = true
      }
    }
  }
}
</script>

<style scoped>
  .recommends {
    display: flex;
    text-align: center;
    font-size: 14px;
    width: 100%;
    border-bottom: 8px solid #eee;
    border-top: 8px solid #eee;
    padding: 15px 0 20px;
    margin-top: -5px;
  }
  .recommends-item {
    flex: 1;
  }
  .recommends-item img {
    width: 75px;
    height: 75px;
    margin-bottom: 10px;
  }
</style>
