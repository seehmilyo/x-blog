<template>
  <div>
  <x-catalog-bar ref="xCatalog">
    <span v-for="(item, index) in textArr" :class="{active:$store.state.currentIndex === index}" @click="catalogClick(index, item.id)">{{item.txt}}</span>
<!--    <span>三剑客</span>-->
<!--    <span>Vue</span>-->
<!--    <span>后端</span>-->
<!--    <span>python</span>-->
<!--    <span>其他</span>-->
<!--    {{this.$store.state.home.moduleId}}-->
  </x-catalog-bar>
    <article-list :datas="data"/>
        <div class="filler" style="height: 6rem"></div>
  </div>
</template>

<script>

  import {getHome} from "../../../network/home"



  import xCatalogBar from '@/components/catalogbar/x-catalogBar'
  import articleList from './articleList'
  export default {
    name: "catalogBar",
    components:{
      xCatalogBar,
      articleList
    },
    data(){return{
      currentIndex:this.$store.state.currentIndex,
      textArr:this.$store.state.catalogText
    }},
    computed:{
      data:{
        get(){
          return this.$store.state.articleObjList
        },
        set(data){
          return data
        }
      }
    },
    methods:{
      catalogClick(index, id) {
        // this.currentIndex = index
        this.$store.commit('changeCurrentIndex', {index, id})
        // console.log(id);
        // this.$store.commit('changeModule', id)
        // if (id === 'python') {
        //   // console.log('ttt');
        //   // this.data = this.dataa.python
        //   this.data = this.$store.state.articleObj.python
        //   // this.data = [{classifacation:'python',
        //   //   title:'title', time:'2020-02-02 20:20',
        //   //   liveNumber:100,
        //   //   content:'    正文结束汉子奥激发了拉法基案例发发链接发了发了附近可视对讲黄冈市教后反思科技公司框架好尬客家话'
        //   // }]
        // }else if (id === 'jhc'){
        //   this.data = this.$store.state.articleObj.jhc
        //   // this.data = [{classifacation:'jhc',
        //   //   title:'title', time:'2020-02-02 20:20',
        //   //   liveNumber:100,
        //   //   content:'    正文结束汉子奥激发了拉法基案例发发链接发了发了附近可视对讲黄冈市教后反思科技公司框架好尬客家话'
        //   // }]
        // } else if (id==='back-end' || id==='node'){
        //   this.data = this.$store.state.articleObj.node
        //   // this.data = [{classifacation:'node',
        //   //   title:'title', time:'2020-02-02 20:20',
        //   //   liveNumber:100,
        //   //   content:'    正文结束汉子奥激发了拉法基案例发发链接发了发了附近可视对讲黄冈市教后反思科技公司框架好尬客家话'
        //   // }]
        // }else if (id === 'vue'){
        //   this.data = this.$store.state.articleObj.vue
        //   // this.data = [{classifacation:'vue',
        //   //   title:'title', time:'2020-02-02 20:20',
        //   //   liveNumber:100,
        //   //   content:'    正文结束汉子奥激发了拉法基案例发发链接发了发了附近可视对讲黄冈市教后反思科技公司框架好尬客家话'
        //   // }]
        // }else if (id === 'others'){
        //   this.data = this.$store.state.articleObj.others
        //   // this.data = [{classifacation:'others',
        //   //   title:'title', time:'2020-02-02 20:20',
        //   //   liveNumber:100,
        //   //   content:'    正文结束汉子奥激发了拉法基案例发发链接发了发了附近可视对讲黄冈市教后反思科技公司框架好尬客家话'
        //   // }]
        // }
        let timer = null;
        let _this = this;
        (function () {
          timer = setTimeout(function () {
            _this.$emit('refreshScroll')
          }, 200)
        })()

      }
    },
    created() {
      this.$store.dispatch('getAllArticle')
    },
    mounted() {
      //使内部的原生滚动生效。
      //获取滚动元素
      let setScroll = document.querySelector('.option')
      // // console.log(setScroll);
      // setScroll.addEventListener('wheel', (e) => {
      //   e.stopPropagation();
      // })
        setScroll.addEventListener('touchstart', (e) => {
          e.stopPropagation();
        })
    }

  }
</script>

<style lang="less" scoped>
  @ccolor:rgba(253, 0, 1, 0.7);
  .active{
    color:@ccolor;
    border-bottom: 0.5rem solid;
  }
</style>
