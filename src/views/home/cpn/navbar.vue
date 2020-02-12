<template>
  <nav-bar>
<!--    <div style="width: 100%;background-color: deepskyblue;height: 40px"></div>-->
  </nav-bar>
</template>

<script>
  import navBar from '@/components/navbar/x-navbar'
  export default {
    name: "navbar",
    components:{
      navBar
    },
    mounted() {
      // let box = document.querySelector('.right').style.display = 'none'
      // console.log(box)
    }
  }
</script>

<style scoped>

</style>
