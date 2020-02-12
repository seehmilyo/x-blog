<template>
  <div style="position: fixed; z-index: 1; width: 100%">
  <div class="x-navbar">
  <div class="left"><slot name="left"><i class="fa fa-chevron-left"></i></slot></div>
  <div class="center"><slot>首页</slot></div>
  <div class="right"><slot name="right"><i class="fa fa-link"></i></slot></div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "x-navbar"
  }
</script>

<style lang="less" scoped>
  .x-navbar{
    height: 44px;
    line-height: 44px;
    font-size: 1.5rem;
    background-color: red;
    color: white;
    display: flex;
    .left{
      width: 50px;
      text-align: center;
    }
    .center{
      text-align: center;
      flex: 1;
    }
    .right{
      width: 50px;
      text-align: center;
    }
  }

</style>
