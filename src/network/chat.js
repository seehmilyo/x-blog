import {$axios} from "./requests";

export function postArticle(pdata) {
  return $axios({
    method:'post',
    url:'/publishArticle',
    data:pdata
  })
}