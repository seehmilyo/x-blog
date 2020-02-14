<template>
  <div class="home">
    <nav-bar/>
    <scroll ref="scroll"
            :pullDownRefresh="{threshold:50,stop:0}"
            :pullUpLoad="true"
            @scroll="scroll"
            @pullingDown="pullingDown"
            @pullingUp="pullingUp">
    <div style="padding-top: 44px;">
    <swiper  v-if="datas" :sliderList="datas.data.data.banner.list"></swiper>
    <catalog-bar @refreshScroll="refreshScroll"  :dataa="dataList"></catalog-bar>
    </div>

    </scroll>
  </div>
</template>

<script>
  import {getHomeSwiper} from "@/network/home"

  import scroll from '@/components/scroll/x-scroll'

  import navBar from './cpn/navbar'
  import swiper from './cpn/swiper'
  import catalogBar from './cpn/catalogBar'
  import articleList from './cpn/articleList'

  export default {
    name: "home",
    data(){
      return{
        datas:null,
        // message:this.$store.state.message,
        dataList:{},
      }
    },
    components:{
      scroll,
      navBar,
      swiper,
      catalogBar,
      articleList
    },
    methods:{
      //用于切换模块后的刷新bscroll,重新计算要滚动的内容的长度
      refreshScroll(){
        this.$refs.scroll.refresh()
      },

      scroll(position){
        console.log(position);
        // this.$refs.scroll.stop();
      },
      pullingUp(_this){
        // console.log(document.querySelector('.wrapper'))
        console.log('上拉加载');
        this.$nextTick(() => {
          console.log(this.$refs.scroll);
        })
      },
      pullingDown(){
        console.log('下拉刷新');
        // document.querySelector('.wrapper').scrollTo(0,0,500)
      }
    },
    created() {
      getHomeSwiper()
        .then(res => {
          this.datas = res
          // console.log(res);
          // console.log(this.datas )
        })
        .catch(err => {
          console.log(err);
        });

      // this.$store.dispatch('getAllArticle')
    },
  }
</script>

<style scoped>

</style>
