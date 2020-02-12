export default {
//   changeModule(state, id){
//     state.home.moduleId = id;
//   }
  getAllArticles(state,res){
    state.articleObj = res.data
    // console.log(res);
  }


}
