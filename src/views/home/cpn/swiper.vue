<template v-if="sliderList">
  <x-swiper>
    <x-swiper-item  v-for="item in sliderList">
      <img :src="item.image" alt="">
    </x-swiper-item>
  </x-swiper>
</template>

<script>
  import {xSwiper, xSwiperItem} from '@/components/swiper/index'
  export default {
    name: "swiper",
    data(){
      return{
        // imgList:null
      }
    },
    components:{
      xSwiper,
      xSwiperItem
    },
  props:{
      sliderList:Array
  },
    created() {
      // getHome()
      //   .then(res => {
      //     this.imgList = res.data
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   })
      // axios({
      //   url:'http://123.207.32.32:8000/home/multidata'
      // }).then(res => {
      //   console.log(res);
      // }).catch(err => {
      //   console.log(err);
      // })
    }
  }
</script>

<style scoped>

</style>
