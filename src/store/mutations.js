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
		state.articleObjList = state.articleObj[param.id]
  }
}
