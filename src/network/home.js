import {$axios} from "./requests";

export function getHomeSwiper() {
  return  $axios({
    url:'/home/multidata'
  })
}

export function getHome() {
  return  $axios({
    url:'/home/dataLists'
  })
}
