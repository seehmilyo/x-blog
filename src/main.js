import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './assets/css/base.css'

// import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
  // render: function (h) { return h(App) },
}).$mount('#app')

//
//
// import {$axios} from './network/requests'
// $axios({
//   url:'home/data',
//   params:{
//     type: 'pop',
//     page: 1
//   },
// //   baseParams:{
// //     url:'home/data',
// //     params:{
// //       type: 'pop',
// //       page: 1
// //     },
// //   },
// //   //多传两个参数，回调方式
// //   res => {
// //   console.log(res);
// // },
// //   err => {
// //     console.log(err);
// //   }
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
