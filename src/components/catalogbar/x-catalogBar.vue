<template>
  <div class="x-catalogBar">
    <span class="text">最新发布</span>
    <span class="option"><span class="options"><slot></slot></span></span>
  </div>
</template>

<script>
  export default {
    name: "x-catalogBar"
  }
</script>

<style lang="less" scoped>
  .x-catalogBar{
    z-index: 2;
    /*display: flex;*/
    background-color: white;
    height: 1.3rem;
    padding: 5px 0 15px 10px;
    font-size: 1.3rem;

    /**在better-scroll中失效**/
    position: sticky;
    top: 39px;
    .text{
      font-weight: 700;
      position: absolute;
      color: rgba(50, 50, 50, .7);
    }
    /*<!--@wid: 100% - 120px-->*/
    .option{
      width: calc(100% - 120px);
      left: 120px;
      margin-left: 120px;
      display: inline;
      white-space: nowrap;
      //pc显示滚动条
      /*overflow-x: scroll;*/
      float: left;
      overflow-y: hidden;
      .options{
        font-weight: 600;
        font-size: 1.1rem;
        color: rgba(100, 100, 100, 0.9);
        /*display: inline-block;*/
        span{
          margin: 0 0.5rem;
        }
      }
    }

  }

</style>
