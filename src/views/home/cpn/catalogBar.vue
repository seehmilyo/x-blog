<template>
  <div>
  <x-catalog-bar>
    <span v-for="(item, index) in textArr" :class="{active:isActive === index}" @click="catalogClick(index, item.id)">{{item.txt}}</span>
<!--    <span>三剑客</span>-->
<!--    <span>Vue</span>-->
<!--    <span>后端</span>-->
<!--    <span>python</span>-->
<!--    <span>其他</span>-->
<!--    {{this.$store.state.home.moduleId}}-->
  </x-catalog-bar>
  <article-list :datas="data"/>
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
      data:null,
      // data:this.$store.state.articleList.all,
      isActive:99,
      textArr:[{id:'jhc',txt:'三剑客'},
        { id:'vue',txt:'Vue'},
        {id:'node',txt:'node'},
        {id:'python',txt:'python'},
        {id:'others',txt:'其他'}]
    }},
    // props:{
    //   dataa:{
    //     type:Object,
    //     default(){
    //       return {
    //         all:[{article_id:12,classifacation:'jhc',
    //           title:'title', time:'2020-02-02 20:20',
    //           liveNumber:99,
    //           content:'     2020-2-6完成文章模块，这尼玛的一个样式写一天，太难了。'
    //         },
    //           {article_id:111,classifacation:'vue',
    //             title:'title', time:'2020-02-02 20:20',
    //             liveNumber:100,
    //             content:'    正文结束汉子奥激发了拉法基案例发发链接发了发了附近可视对讲黄冈市教后反思科技公司框架好尬客家话'
    //           }]
    //       }
    //     }
    //   }
    // },
    methods:{
      catalogClick(index, id){
        this.isActive = index
        // console.log(id);
        // this.$store.commit('changeModule', id)
        if (id === 'python') {
          // console.log('ttt');
          // this.data = this.dataa.python
          this.data = this.$store.state.articleObj.python
          // this.data = [{classifacation:'python',
          //   title:'title', time:'2020-02-02 20:20',
          //   liveNumber:100,
          //   content:'    正文结束汉子奥激发了拉法基案例发发链接发了发了附近可视对讲黄冈市教后反思科技公司框架好尬客家话'
          // }]
        }else if (id === 'jhc'){
          this.data = this.$store.state.articleObj.jhc
          // this.data = [{classifacation:'jhc',
          //   title:'title', time:'2020-02-02 20:20',
          //   liveNumber:100,
          //   content:'    正文结束汉子奥激发了拉法基案例发发链接发了发了附近可视对讲黄冈市教后反思科技公司框架好尬客家话'
          // }]
        } else if (id==='back-end' || id==='node'){
          this.data = this.$store.state.articleObj.node
          // this.data = [{classifacation:'node',
          //   title:'title', time:'2020-02-02 20:20',
          //   liveNumber:100,
          //   content:'    正文结束汉子奥激发了拉法基案例发发链接发了发了附近可视对讲黄冈市教后反思科技公司框架好尬客家话'
          // }]
        }else if (id === 'vue'){
          this.data = this.$store.state.articleObj.vue
          // this.data = [{classifacation:'vue',
          //   title:'title', time:'2020-02-02 20:20',
          //   liveNumber:100,
          //   content:'    正文结束汉子奥激发了拉法基案例发发链接发了发了附近可视对讲黄冈市教后反思科技公司框架好尬客家话'
          // }]
        }else if (id === 'others'){
          this.data = this.$store.state.articleObj.others
          // this.data = [{classifacation:'others',
          //   title:'title', time:'2020-02-02 20:20',
          //   liveNumber:100,
          //   content:'    正文结束汉子奥激发了拉法基案例发发链接发了发了附近可视对讲黄冈市教后反思科技公司框架好尬客家话'
          // }]
        }

      },

    },
    created() {
      this.$store.dispatch('getAllArticle')
      getHome()
        .then(res => {
          // console.log(res.data);
          this.data = res.data.all
          // console.log(this.dataList)
        })
        .catch(err => {
          console.log(err);
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
