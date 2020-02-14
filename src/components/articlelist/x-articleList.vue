<template>
  <div class="body">
  <a class="articleListItem" v-for="item in data" @click="skipArticle(item.article_id)">
    <img class="img" :src="changeImg(item.classifacation)" alt="">
    <div class="text" style="margin-left: 5px">
      <div>
        <h3 style="text-align: center">{{item.title}}</h3>
        <div class="icons"><span><i class="fa fa-clock-o"/>&nbsp;{{item.time}}</span><span style="margin-left: 1.2rem"><i class="fa fa-thumbs-up"/>&nbsp;{{item.liveNumber}}</span></div>
      </div>
      <div class="content">&nbsp;&nbsp;<span v-html="item.content">{{item.content}}</span></div>
    </div>
  </a>

  </div>
</template>

<script>
  import jhc from '@/assets/imgs/home/classifacation/jhc.jpg'
  import vue from '@/assets/imgs/home/classifacation/vue.jpg'
  import node from '@/assets/imgs/home/classifacation/node.jpg'
  import python from '@/assets/imgs/home/classifacation/python.jpeg'
  import others from '@/assets/imgs/home/classifacation/others.jpg'
  export default {
    name: "x-articleList",
    data(){return{
      i:null,
      // img:null
    }},
    props:{
      data:{
        type:Array,
        //组件自带数据，用于测试组件
        // default(){
        //   return [{article_id:1,
        //       classifacation:'jhc',
        //       title:'title', time:'2020-02-02 20:20',
        //       liveNumber:99,
        //      content:'     2020-2-6完成文章模块，这尼玛的一个样式写一天，太难了。'
        //     },
        //     {article_id:11,
        //       classifacation:'vue',
        //       title:'title', time:'2020-02-02 20:20',
        //       liveNumber:100,
        //       content:'    正文结束汉子奥激发了拉法基案例发发链接发了发了附近可视对讲黄冈市教后反思科技公司框架好尬客家话'
        //     }]
        // }
      }
    },
    methods:{
      changeImg:function (res) {
        if (res === 'jhc') {
          return jhc
        }else if(res === 'vue'){
          return vue
        }else if(res === 'node' || res==='back-end'){
          return node
        }else if(res === 'python'){
          return python
        }else if(res === 'others'){
          return others
        }
      },
      skipArticle(aid){
        // console.log(aid);
        //方式一：url中自动添加‘?id=’
        this.$router.push({
          path:`/articleDetail`,
          query:{articleId:aid}
        })
        // this.$route.query.id

        //方式二:url中不显示参数
        // this.$router.push({
        //   name:`articleDetail`,
        //   params:{
        //     id:aid
        //   }
        // })
        // // this.$route.params.id

        // 方式三：url中有 '/id'
        // this.$router.push({
        //   path:`/articleDetail/${aid}`
        // })
        // // this.$route.params.id //参数id和router.js中的 path/:id(参数)一致
      }
    },


  }
</script>

<style lang="less" scoped>
  //@imgWidth:
  .body{
    margin: .5rem 0.5rem;
    /*border: black 1px solid;*/
    background-color: rgba(100,100,100,0.05);
    border-top:  rgba(0, 0, 0, 0.2) 1px solid;
    a{

      cursor:pointer;
      /*border: 2px black solid;*/
    }
    a:hover{
      color: red;
    }
    a:visited{
      color: purple;
    }
  }
  .articleListItem{
    /*margin-bottom: .1rem;*/
    border-radius: 5px;
    /*width: calc(100% - 9rem);*/
    border: rgba(0, 0, 0, 0.4) 1px solid;
    border-top: none;
    display: flex;
    position: relative;
    width: 100%;
    .img{
      border-radius: 5px 0 0 5px;
      width: 8rem;
      /*width: 33%;*/
      height: 6.6rem;
    }

  }
  .text{
    /*border: green 1px solid;*/
    /*flex-shrink:0;*/
    position: absolute;
    margin-left: 9rem;
    width: calc(100% - 8.5rem)  /* 9/20 */;
    left: 8rem;
    height: 6.6rem;

    h3{
      white-space: pre-wrap;/* 不换行 */
      overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
      text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
      display:-webkit-box; //将对象作为弹性伸缩盒子模型显示。
      -webkit-box-orient:vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
      -webkit-line-clamp:1;
    }
  }

    .icons{
      width: 100%;
      color: darkgray;
      font-size: 0.8rem;
      /*<!--box-shadow: #f6f6f6 20px -5px 0;-->*/
    }
    .content{
      //实现超出3行隐藏
      white-space: pre-wrap;/* 不换行 */
      overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
      text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
      display:-webkit-box; //将对象作为弹性伸缩盒子模型显示。
      -webkit-box-orient:vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
      -webkit-line-clamp:3;//这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
    }


</style>
