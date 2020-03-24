import {getHome} from "../network/home";

export  default {
  getAllArticle(context){
    getHome()
      .then(res => {
        console.log(res);
        this.data = res.data.all
        context.commit('getAllArticles',res)
        // console.log(this.dataList)
      })
      .catch(err => {
        console.log(err);
      })
  }

}
