<template>
  <div class="quillEditor" ref="quillEditor">

  </div>
</template>

<script>
  // import 'quill/dist/quill.core.css'
  // import 'quill/dist/quill.snow.css'
  // import 'quill/dist/quill.bubble.css'
  import Quill from 'quill'
  export default {
    name: "x-quillEditor",
    data(){
      return{
        quill:null,
      }
    },
    props:{
      options:{
        type:Object,

      }
    },
    created() {
      this.quill = new Quill(this.$refs.quillEditor)
    }
  }
</script>

<style scoped>

</style>