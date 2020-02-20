import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
Vue.use(Vuex)
const state = {
  articleObj:null,
  articleObjList:null,
  currentIndex:99
}

const store = new Vuex.Store({
  state,

  //对state中的数据进行同步操作，类似methods(里面的函数参数有state)
  mutations,

  //可对state中的数据进行异步修改
  //(里面的函数参数有context，即是整个vuex.store)
  //通过context.commit('时间type')对mutations进行操作
  actions,

  //类似于computed，参数有（state，getters）
  getters,
  modules:{
    //子模块中的state会被提取到store中的state
    //通过$store.state.a.variableName(state中的变量名)
    //其他核心方法有其他参数，可以通过打印查看
    a:moduleA
  }
})


export default store
