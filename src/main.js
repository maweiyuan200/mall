import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

// 导入toast.js文件
import toast from 'components/common/toast'

Vue.config.productionTip = false

//添加事件总线
Vue.prototype.$bus = new Vue()

//安装完自动执行那边的install函数,而且默认传递Vue过去
Vue.use(toast)

// 安装插件懒加载
Vue.use(VueLazyLoad,{
  // 未加载的占位图片
  loading: require("@/assets/img/common/placeholder.png")
  //图片加载失败时加载
  // error
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
