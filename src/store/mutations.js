export default {
//   changeModule(state, id){
//     state.home.moduleId = id;
//   }
  getAllArticles(state,res){
    state.articleObj = res.data
    state.articleObjList = res.data.all
    // console.log(res.data);
  },

  changeCurrentIndex(state, param){
    state.currentIndex = param.index
    // console.log(param);
    // console.log(state.currentIndex);
    if (param.id === 'python') {
      state.articleObjList = state.articleObj.python
      console.log(state.articleObjList);
    }else if (param.id === 'jhc'){
      state.articleObjList = state.articleObj.jhc
    } else if (param.id==='back-end' || param.id==='node'){
      state.articleObjList = state.articleObj.node
    }else if (param.id === 'vue'){
      state.articleObjList = state.articleObj.vue
    }else if (param.id === 'others'){
      state.articleObjList = state.articleObj.others
    }
  }
}
