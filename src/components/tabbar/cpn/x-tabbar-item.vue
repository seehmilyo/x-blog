<template>
<!--  <div>-->
  <div class="x-item" :style="aColor" @click="learnClick">
      <div><slot name="x-item-icon"><i class="fa fa-home"></i> </slot></div>
      <div><slot name="x-item-text">首页</slot></div>
  </div>
</template>

<script>
  export default {
    name: "x-tabbar-item",
    data(){
      return{
        //用于修改活跃的tabbar单元的的颜色（点击按钮变色），从props中获取
        test:this.testProps,
        // selectColor:{color: 'red'}
        //tabbar单元的颜色，从props中传过来的参数
        sColor: this.color,
        fontSize:this.faSize,
        link:this.path,
      }},
    props:{
      //用于修改活跃的tabbar单元的的颜色（点击按钮变色）
      testProps:{
        type:String,
        default:'red',
        // required:true,//true为必须有这个值
      },
      //用于修改tabbar单元的颜色
      color:{
        type:String,
        default:'rgba(169,165,152,0.8)',
        // required:true,//true为必须有这个值
      },
      faSize:{
        type:Number,
        default:30,
        // required:true,//true为必须有这个值
      },
      path:String,
    },
    computed:{
      aColor() {
        //此处的数据来自data
        if (this.link === '/') this.link='/index'
        if (this.link === this.$route.path) {
          return {color:this.test}
        }else {
          return {color:this.sColor}
        }

      }
      },
    methods:{
      learnClick(){
        //变量来自data
        this.$router.push(this.link)
        // console.log('learnClick');
      }
    },



  }
</script>

<style scoped>
  @import "~@/assets/css/font-awesome.min.css";
  .x-item{
    flex: 1;
    text-align: center
  }
  .fa{
    font-size: 1.5rem;
    /*color: #eeeeee;*/
  }
</style>
