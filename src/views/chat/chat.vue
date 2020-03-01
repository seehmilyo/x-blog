<template>
  <div>
    <nav-bar><div>发布文章</div><div slot="right"></div></nav-bar>

    <div class="title">
      <input class="inTitle" v-model="title" placeholder="title">
      <div class="classifacation">
        <select v-model="selected">
          <option v-for="(item,index) in classifacation" :disabled="!index">{{item.txt}}</option>
        </select>
      </div>
      <div class="release" style="" @click="submitBtn">
        <div style="grid-area: characterIcon"><i class="fa fa-telegram"></i></div>
        <div style="grid-area: character">发布</div>
      </div>
    </div>

    <quill-editor @getContent="getContent"></quill-editor>
  </div>
</template>

<script>
  import {postArticle} from "../../network/chat";

  import {timeTransform} from "../../assets/js/common/common";

  import navBar from "components/navbar/x-navbar";
  import quillEditor from '@/components/quillEditor/Quill'
  export default {
    name: "chat",
    components:{
      quillEditor,
      navBar
    },
    data(){
      return{
        title:null,
        content:null,
        classifacation:[
            {id:0,txt:'文章分类'},
            {id:'jhc',txt:'三剑客'},
          {id:'vue',txt:'Vue'},
          {id:'node',txt:'node'},
          {id:'python',txt:'python'},
          {id:'others',txt:'其他'}],
        selected:'',
        responseData:null
      }
    },
    methods:{
      publishArticle(postData){
        let _this = this
        postArticle(postData)
            .then(res=>{
                console.log(res);
              _this.responseData = res
            })
            .catch(err=>{
                console.log(err);
              })
      },
      getContent(e){
        //接收从子组件quillEditor传过来的content
        this.content = e.html
        // console.log(e.html);
      },

      submitBtn(){
        let _this = this;
        console.log(this.selected);
        let id = this.classifacation.find(item => {
          return item.txt === this.selected
        })
        if(id.id === 0){
          alert('请选择文章类别')
          return;
        }
        // console.log(_this.title);
        if (!_this.title || !_this.title.trim()){
          alert('文章标题不能为空')
          return;
        }
        if (!_this.content ||  !_this.content.trim()){
          alert('文章内容不能为空')
          return;
        }
        // console.log(id.id);
        let date = timeTransform(new Date())

        // console.log(timeTransform());
        let postData = {
          title:_this.title,
          content:_this.content,
          classifacation: id.id,
          time:date,
          author:'',
          author_id:''

        }
        _this.publishArticle(postData)

        let timer = null
        timer = setTimeout(()=>{
          clearTimeout(timer)
          if(_this.responseData.status === 200) alert("发表成功")
        },400)
      },

    },
    created() {
      this.selected = this.classifacation[0].txt
    }
  }
</script>

<style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .title{
    height: 2rem;
    line-height: 2rem;
    width: 100%;
    display: flex;
    /*text-align: center;*/
    /*border: rgba(0, 0, 0, 0.2) 1px solid;*/
    /*border: red 1px solid;*/
  }
  .inTitle{
    width: calc(100% - 10rem);
    height: 100%;

    font-size: 1.1rem;
    margin-left: 1rem;
    border-left: rgba(0, 0, 0, 0.2) 1px solid;
    border-right: rgba(0, 0, 0, 0.2) 1px solid;

  }

  .release{
    color: blue;
    margin-left: 1rem;
    width: 2rem;
    display: grid;
    height: 100%;
    /*border: black 1px solid;*/
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 50%);
    grid-template-areas: 'characterIcon characterIcon'
    'character character';
    div{
      /*height: 0.5rem;*/
      font-size: 0.8rem;
      /*border: black 1px solid;*/
      margin: 0;
      line-height: 50%;
      text-align: center;
      padding-top: 0.2rem;
      /*border: 0;*/
    }
  }

</style>
<style>
  .ql-editor{
    height:calc(100vh - 93px - 2rem - 45px);
  }
</style>