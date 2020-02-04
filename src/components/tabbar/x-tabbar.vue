<template>
  <div><slot>
    <x-tabbar-body>
      <x-tabbar-item :color="color" path="/">
        <span slot="x-item-text">首页</span>
      </x-tabbar-item>
      <x-tabbar-item :color="color" path="/learn">
        <span slot="x-item-icon"><i class="fa fa-leanpub"></i></span>
        <span slot="x-item-text">学习</span>
      </x-tabbar-item>
      <x-tabbar-item :color="color" path="/chat">
        <span slot="x-item-icon"><i class="fa fa-commenting"></i></span>
        <span slot="x-item-text">交流</span>
      </x-tabbar-item>
      <x-tabbar-item :color="color" path="/profile">
        <span slot="x-item-icon"><i class="fa fa-user"></i></span>
        <span slot="x-item-text">我的</span>
      </x-tabbar-item>
    </x-tabbar-body>
  </slot></div>
</template>

<script>
  import xTabbarBody from './cpn/x-tabbar-body'
  import xTabbarItem from './cpn/x-tabbar-item'

  export default {
    name: "x-tabbar",
    data(){
      return{
        //props中的数据
        color:this.mainColor,
      }
    },
    props:{
      //用于修改tabbar的主题色
      mainColor:String,
    },
    components:{
      xTabbarBody,
      xTabbarItem
    },
    created() {
      // console.log(this.mainColor)
    }

  }
</script>

<style scoped>

</style>
