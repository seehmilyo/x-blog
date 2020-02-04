<template>
<!--  <tab-bar></tab-bar>-->
  <div>{{message}}</div>
</template>

<script>
// import tabBar from '../../components/xTabbar'
  export default {
    name: "home",
    data(){
      return{
        message:this.$store.state.message
      }
    },
    components:{
     // tabBar
    },

  }
</script>

<style scoped>

</style>
