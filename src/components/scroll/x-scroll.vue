<template>
  <div class="wrapper" >
    <div class="content" ref="bwrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "x-scroll",
    data() {
      return{
       scroll:null
      }
    },
    props:{
      probeType: {
        type:Number,
        default:3
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.bwrapper,{
        //使得不scroll中的原生标签的click事件生效
        click:true,
        //监听滚动的位置
        probeType:this.probeType
      })

      this.scroll.on('scroll', position => {
        console.log(position);
      })
    }
  }
</script>

<style scoped>

</style>
