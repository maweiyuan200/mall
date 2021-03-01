<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

<!--    默认不显示，用户滑动到一定位置时显示-->
    <tab-control :titles="['流行', '精选', '新款']"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 class="tabControl"
                 v-show="isTabFixed"/>

    <scroll class="content" ref="scroll"
            @scroll="contentScroll"
            :probeType="3"
            @pullingUp="pullLoadMore"
            :pullUpLoad="true">
      <home-swiper :banners="banners" @swiperImgLoad="swiperLoad"/>
      <home-recommend-view :recommends="recommends"/>
      <home-feature-view/>
      <tab-control :titles="['流行', '精选', '新款']"
                   @tabClick="tabClick"
                    ref="tabControl2"/>
      <goods-list :goods="goodsData" />
    </scroll>

<!--    监听组件原生事件时必须加上native-->
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'

import HomeSwiper from './childComp/HomeSwiper'
import HomeRecommendView from "./childComp/HomeRecommendView"
import HomeFeatureView from "./childComp/HomeFeatureView"

import {getHomeMultidata, getHomeGoods} from "network/home"
import {debounce} from "common/utils"

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      //默认当前类型为pop
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  created() {
    // 请求banner，commend
    this.getHomeMultidata()

    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on('imgLoadFinish', () => {
      refresh()
    })

  },
  deactivated() {
    this.saveY = this.$refs.scroll.getY()
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    // 回来时最好刷新一次，不然可能出现bug
    this.$refs.scroll.refresh()
  },
  methods: {
    /**
    **普通监听方法
    */
    tabClick(index) {
      // console.log(index);
      switch (index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backClick() {
      //拿到scroll组件里的scroll对象里的scrollTo方法(x轴， y轴， 毫秒)
      this.$refs.scroll.scrollTo(0, -610, 500)
    },
    contentScroll(position) {
      //判断y轴实时位置决定是否显示返回顶部按钮
      this.isShowBackTop = -(position.y) > 1000

      //决定tabControl是否吸顶
      this.isTabFixed = -(position.y) > this.tabOffsetTop
    },
    pullLoadMore() {
      this.getHomeGoods(this.currentType)
      //告诉scroll对象完成了下拉到底，才能再调用pullingUp方法
      this.$refs.scroll.finishPullUp()
    },
    swiperLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },

    /**
    **网络请求相关方法
    */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        // 把请求过来的数据一个个拆分，添加到goods变量的list数组里面
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  },
  computed: {
    goodsData() {
      return this.goods[this.currentType].list
    }
  },
}
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /*只对浏览器原生滚动有用*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }
  /*.tab-control {*/
  /*  !*当元素达到指定位置时，position自动变为fixed*!*/
  /*  !*position: sticky;*!*/
  /*  background-color: #fff;*/
  /*  position: relative;*/
  /*  !*top: 44px;*!*/
  /*  z-index: 9;*/
  /*}*/

  /* 1.通过定位解决要显示使用BScroll的内容*/
  .content {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }

  /* 2.通过计算解决要显示使用BScroll的内容*/
  /*.content {*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/

  .tabControl {
    position: relative;
    z-index: 9;
  }
</style>
