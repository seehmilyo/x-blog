<template>
  <x-article-list :data="datas"></x-article-list>
</template>

<script>
  import xArticleList from '@/components/articlelist/x-articleList'
  export default {
    name: "articleList",
    data(){return{

    }},
    components:{
      xArticleList
    },
    props:{
      datas:Array,
    },
  }
</script>

<style scoped>

</style>
