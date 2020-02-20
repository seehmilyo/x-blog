<template>
  <div id="x-body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "x-tabbar-body",
  }
</script>

<style scoped>
@import "~@/assets/css/base.css";
  #x-body{
    height: 49px;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: -1px;
    background-color: #f6f6f6;
    box-shadow: 0 -2px 5px rgba(100,100,100,0.2);
  }

</style>
