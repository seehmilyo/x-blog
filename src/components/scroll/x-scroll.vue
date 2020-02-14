<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
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
      },
      pullDownRefresh:{
        type: [Boolean,Object],
        default: false
      },
      pullUpLoad:{
        type:[Boolean,Object],
        default:false
      }
    },
    methods:{
      /*重写scroll中的方法*/
      //刷新bscroll，当content内容长度发生变化时，可能需要调用这个
      refresh(){
        this.scroll.refresh()
      },
      // 下拉完场（数据请求完成之后调用）
      finishPullDown(){
        this.scroll.finishPullDown()
      },
      // 上拉完场（数据请求完成之后调用）
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      ///直接定位到（）
      scrollTo(x=0, y=0, time=500){
        this.scroll.scrollTo(x, y, time)
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.scroll,{
        //使得scroll中的原生标签的click事件生效
        mouseWheel: true,
        click: true,
        tap: true,
        //阻止原生事件
        // preventDefault:false,
        preventDefaultException:{tagName: /^(INPUT|SPAN|TEXTAREA|BUTTON|SELECT)$/},
        //监听滚动的位置
        probeType:this.probeType,
        pullDownRefresh:this.pullDownRefresh,
        pullUpLoad:this.pullUpLoad
      })



      this.scroll.on('scroll', position => {
        if (position.y === this.pullDownRefresh.stop) this.scroll.stop()
        this.$emit('scroll', position)

      })
      this.scroll.on('pullingDown', () => {
        // console.log('下拉刷新');
        this.$emit('pullingDown')
      })
      this.scroll.on('pullingUp', () => {
        // console.log('上拉加载');
        this.$emit('pullingUp', this)
      })
    }
  }
</script>

<style scoped>

  .wrapper{
    /*height: 300px;*/
    /*border: black 1px solid;*/
    height: calc(100vh - 49px);
    overflow: hidden;
  }
</style>
