<template>
  <el-carousel
    ref="carousel"
    :interval="4000"
    :loop="true"
    :autoplay="false"
    indicator-position="none" 
    type="card"
    height="400px"
    @change="change"
  >
    <el-carousel-item v-for="(item, index) in 6" :key="item">
      <img :src="imgObj[index]" class="carousel-img"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { ref } from 'vue';
import bg1 from '../../assets/img/home/bg.jpg';
import bg2 from '../../assets/img/home/bg2.jpg';
import bg3 from '../../assets/img/home/bg3.jpg';
import bg4 from '../../assets/img/home/bg4.jpg';
import bg5 from '../../assets/img/home/bg5.jpg';
import bg6 from '../../assets/img/home/bg6.jpg';
export default {
  setup(props, ctx) {
    const imgObj = {
      0: bg1,
      1: bg2,
      2: bg3,
      3: bg4,
      4: bg5,
      5: bg6
    };
    const carousel = ref(null);
    const change = (val)=>{
      ctx.emit('confirm', val)
    }
    return {
      imgObj,
      carousel,
      change
    }
  },
}
</script>

<style lang="less" scoped>
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.el-carousel__item {
  width: 70%;
  left: -10%
}
/deep/ .el-carousel__arrow {
  display: none !important;
}
</style>
