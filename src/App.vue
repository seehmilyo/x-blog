<template>
  <div id="app">
    <!--    <router-link to="/home">home</router-link>-->
    <router-view></router-view>
    <x-tabbar></x-tabbar>

  </div>
</template>

<script>
  // import tabBar from './components/xTabbar'
  import xTabbar from '@/components/tabbar/x-tabbar'
  // import XTabbarBody from "@/components/tabbar/cpn/x-tabbar-body";
  // import XTabbarItem from "@/components/tabbar/cpn/x-tabbar-item";
  export default {
    name: 'app',
    components: {
      xTabbar,

    }
  }
</script>

<style>


</style>
