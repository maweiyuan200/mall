module.exports = {
  configureWebpack: {
    resolve: {
      // extents: [],
      alias: {
        //@表示src，默认已经配置
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views',
        'network': '@/network',
        'store': '@/store'
      }
    }
  }
}
