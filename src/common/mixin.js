// 引入防抖动的封装函数
import {debounce} from 'common/utils'
// 导出混入变量
export const MixIn = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted () {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);  //刷新，让滚动框架重新计算滚动区域
    this.itemImgListener = () => {
      this.newRefresh()
      }
    // 事件总线，接收传递过来的事件
    this.$bus.$on('imgLoadOk', this.itemImgListener)
    // 获取offsetTop值
    // 每一个组件都有一个$el属性，可以获取子组件元素的节点
    // console.log(this.$refs.tabTop2.$el.offsetTop)
    // console.log(11111)
  }
}


// backTOp按钮

// 返回首页导航按钮
  import BackTop from 'components/content/backtop/BackTop'

  export const backTopMixIn = {
    data () {
      return {
        isShowBackTop: false,  //默认设置是看不见的
      }
    },
    components: {
      BackTop,
    },
    methods: {
      // 返回顶部
      backClick () {
        this.$refs.scroll.scrollTo(0,0,300)
      },
      contentScroll(position) {
        //判断y轴实时位置决定是否显示返回顶部按钮
        this.isShowBackTop = -(position.y) > 1000
      },
      listenerBackTopShow (position) {
         // 当达到1000时将按钮显示出来,注意，position.y是负数
         this.isShowBackTop = -(position.y) > 1000
      }
    }
  }

