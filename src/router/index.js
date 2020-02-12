import Vue from 'vue'
import Router from 'vue-router'
// import home from '../views/home'
//注册组件
Vue.use(Router)

const home = () => import('../views/home/home')

const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/index',
    name:"home",
    component: home,
  },
  {
    path:'/learn',
    name:"learn",
    component: () => import('../views/learn/learn'),
  },
  {
    path:'/chat',
    name:"chat",
    component: () => import('../views/chat/chat'),
  },
  {
    path:'/profile',
    name:"profile",
    component: () => import('../views/profile/profile'),
  },
  {
    path:`/articleDetail`,
    name:"articleDetail",
    component: () => import('../views/home/articleDetail'),
  }
]

const router = new Router({
  routes,
  //URL中的hash值改为history，即是去掉#
  mode:'history',
  //给自定义的<link-active>标签加上class
  linkActiveClass:'linkActive'

})


export default router
