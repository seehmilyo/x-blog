module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        // '@':'src'
        'components': '@/components',
        'assets': '@/assets',
        'network': '@/network',
        'router': '@/router',
        'store': '@/store',
        'views': '@/views',
      }
    }
  }


}
