<template>
  <div class="home">
    <nav-bar/>
    <x-catalog-bar v-show="isShowCatalogBar" class="activeCatalogBar">
      <span v-for="(item, index) in textArr" :key="index" :class="{active:$store.state.currentIndex === index}" @click="catalogClick(index, item.id)">{{item.txt}}</span>
    </x-catalog-bar>

    <scroll ref="scroll"
            :pullDownRefresh="{threshold:30,stop:0}"
            :pullUpLoad="true"
            @scroll="scroll"
            @pullingDown="pullingDown"
            @pullingUp="pullingUp">
<!--    <div style="padding-top: 44px;">-->
    <swiper  v-if="datas" :sliderList="datas.data.data.banner.list"></swiper>
    <catalog-bar @refreshScroll="refreshScroll"></catalog-bar>
<!--    </div>-->

    </scroll>
  </div>
</template>

<script>
  import {getHomeSwiper} from "@/network/home"

  import scroll from '@/components/scroll/x-scroll'

  import navBar from './cpn/navbar'
  import xCatalogBar from '@/components/catalogbar/x-catalogBar'
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
        textArr:[{id:'jhc',txt:'三剑客'},
          { id:'vue',txt:'Vue'},
          {id:'node',txt:'node'},
          {id:'python',txt:'python'},
          {id:'others',txt:'其他'}],
        isShowCatalogBar:false,
        currentIndex:this.$store.state.currentIndex
      }
    },
    components:{
      scroll,
      navBar,
      xCatalogBar,
      swiper,
      catalogBar,
      articleList
    },
    methods:{

      catalogClick(index,id){
        // console.log(index);
        // this.currentIndex = index
        this.$store.commit('changeCurrentIndex', {index, id})
      },

      //用于切换模块后的刷新bscroll,重新计算要滚动的内容的长度
      refreshScroll(){
        this.$refs.scroll.refresh()
      },

      scroll(position){
        // console.log(position);
        // if(position.y <= -198) this.isShowCatalogBar = true
        // else this.isShowCatalogBar = false
        this.isShowCatalogBar = position.y <= -198 ? true : 0
      },
      pullingUp(_this){
        // console.log(document.querySelector('.wrapper'))
        console.log('上拉加载');
        // this.$refs.scroll.refresh()
        // this.$refs.scroll.finish
        this.$nextTick(() => {
          // console.log(this.$refs.scroll);
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
  @import "../../assets/css/base.css";
  .active{
    color:rgba(253, 0, 1, 0.7);
    border-bottom: 0.5rem solid;
  }
  .x-catalogBar{
    /*//利用fixed实现吸顶效果*/
    position: fixed;
  }
</style>
