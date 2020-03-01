<template>
  <div class="x-catalogBar">
    <span class="text">最新发布</span>
    <span class="option"  ref="scrollX"><span class="options"><slot></slot></span></span>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: "x-catalogBar",
    data(){
      return{
        Bscroll:null
      }
    },
    mounted() {
        // console.log(this.$refs.scrollX);
        this.Bscroll = new Bscroll(this.$refs.scrollX,{
          //使得scroll中的原生标签的click事件生效
          mouseWheel: true,
          click: true,
          tap: true,
          scrollX:true,
          scrollY: false,
          momentum: false,
          freeScroll:true,
          eventPassthrough: 'horizontal'

        })
        this.Bscroll.on('scroll', position => {
          console.log(position);
        })
      document.querySelector('.x-catalogBar').addEventListener('wheel', (e) => {
        e.stopPropagation();
      });
    }

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
    /*position: fixed;*/
    /**在better-scroll中失效**/
    /*position: sticky;*/
    /*top: 39px;*/
    .text{
      font-weight: 700;
      position: absolute;
      color: rgba(50, 50, 50, .7);
    }
    /*<!--@wid: 100% - 120px-->*/
    .option{
      /*z-index: 99;*/
      /*width: calc(100% - 120px);*/
      width: calc(100vw - 120px);
      left: 120px;
      margin-left: 120px;
      display: inline;
      white-space: nowrap;
      //pc显示滚动条
      /*overflow-x: scroll;*/
      float: left;
      overflow-y: hidden;
      /*overflow: hidden;*/
      /*touch-action: none;*/
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
