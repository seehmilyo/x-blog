<template>
  <div id="app">
    <!--    <router-link to="/home">home</router-link>-->
    <router-view></router-view>
    <tabbar></tabbar>

  </div>
</template>

<script>
  // import tabBar from './components/xTabbar'
  import tabbar from '@/components/tabbar/x-tabbar'
  // import XTabbarBody from "@/components/tabbar/cpn/x-tabbar-body";
  // import XTabbarItem from "@/components/tabbar/cpn/x-tabbar-item";
  export default {
    name: 'app',
    components: {
      tabbar,

    }
  }
</script>

<style>


</style>
