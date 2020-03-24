<template>
  <div>
<!--    刷新的效果-->
    <div class="refreshDiv" :style="{display:changeStyle}">
      <div class="i"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div>
      <!--        <span class="sr-only">Loading...</span>-->
    </div>
    <nav-bar>
      文章详情
      <div slot="right"><i @click="cRefresh" class="fa fa-refresh"></i></div>
    </nav-bar>
    <!-- <div v-html="article">{{article}}</div> -->
		<h3 style="font-size: 20px;">{{article.title}}</h3>
		<div class="timeMessage"><i class="fa fa-clock-o"></i>&nbsp;{{article.time}}</div>
		<div class="">{{article.author}}</div>
		<div class="fuller" style="border-top: #999999 1px solid;width: 90%;margin:5px 5% 15px"></div>
		<div class="content" v-html="article.content"></div>
  </div>
</template>

<script>
  import navBar from '@/components/navbar/x-navbar'
  export default {
    name: "articleDetail",
    data(){return{
      style:{},
      changeStyle:''
    }},
    components:{
      navBar
    },
						
    computed:{
      // changeStyle:{
      //   get:function () {
      //     return this.style
      //   },
      //   set:function (e) {
      //     this.style = e
      //   }
      // },
      //获取路由参数
      articleId(){
        //1。方式一
        // this.$router.push({
        //   path:`/articleDetail`,
        //   query:{id:aid}
        // })
        return this.$route.query.articleId

        //2.方式二:url中不显示参数
        // // this.$router.push({
        // //   name:`articleDetail`,
        // //   params:{
        // //     id:aid
        // //   }
        // // })
        // return  this.$route.params.id

        // 3.方式三：url中有 '/id'
        // // this.$router.push({
        // //   path:`/articleDetail/${aid}`
        // // })
        // return this.$route.params.id //参数id和router.js中的 path/:id(参数)一致
      },
      article(){
       // let aid = this.$route.query.articleId
        let aid = this.articleId
        let data = this.$store.state.articleObj.all;
        // console.log(this.$store.state.articleObj.all);
        return  data.find(item => {
          return item.article_id === aid
        })
        // console.log(articleId);
        // console.log(this.art);
        // console.log(aid);
        // return ar
      }
    },
    methods:{
      cRefresh(){
        let _this = this
        // console.log(_this);
        this.changeStyle = 'flex'
        this.$store.dispatch('getAllArticle')
        // this.changeStyle = {}
        // this.$store.dispatch('getAllArticle')
        setTimeout(function () {
          // console.log(this);
          // location.reload()
          _this.changeStyle = ''
        },400)

      }
    },
		
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/base.css";
	.timeMessage{
		height: 2rem;
		line-height: 2rem;
		width: 100%;
		color: darkgray;
		font-size: 0.8rem;
	}
  .refreshDiv{
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: .5;
    z-index: 9;
    .i{
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      /*background-color: white;*/
      z-index: 1;
      color: white;
    }
  }
</style>
