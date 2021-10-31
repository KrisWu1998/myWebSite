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
import bg2 from '../../assets/img/home/bg2.jpg';
export default {
  setup(props, ctx) {
    const imgObj = {
      0: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F-Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F55e736d12f2eb938789bd698d2628535e4dd6fe2.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638265814&t=0967690bc4ebeba0b34356b8fe64894e',
      1: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-07-01%2F5efc05674214f.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638266397&t=e60e4059a70f8e154f2ac227a17ff050',
      2: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F8f90a8cbe8a8beda8517608e34f3c21d8288c893.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638265883&t=40b0d10950458ba34e1f427bd0e6f4d4',
      3: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-02-19%2F5c6b7cbc98f1a.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638265908&t=2ce2278a136f9524494d24df2cd21ac8',
      4: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-10-12%2F5f8408325b8a7.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638265944&t=5789557a51696aca43081a3811c1b092',
      5: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-11-05%2F5bdfd64cbcd82.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638266514&t=c208fa6ac59897f70454dcf269989511'
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
:deep(.el-carousel__arrow) {
  display: none !important;
}
</style>
