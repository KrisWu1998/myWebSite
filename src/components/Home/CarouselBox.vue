<template>
  <div class="wrap">
    <div class="main container">
      <div class="carousel-box">
        <Carousel @confirm="handleClickIndicator"/>
        <div class="carousel-bottom">
          <Carousel ref="carouselMirror"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';
import Carousel from './Carousel.vue';
export default {
  name: 'CarouselBox',
  components: {
    Carousel,
  },
  setup () {
    const state = reactive({
      list: [
        1,2,3,4,5,6,7,8,9
      ],
      page: 1,
      pageSzie: 10,
    });
    const carouselMirror = ref(null);
    // 分页数量修改
    const handleSizeChange = (val)=> {
      state.pageSzie = val;
    }
    // 分页切换
    const handleCurrentChange = (val) => {
      state.page = val;
    }
    // 轮播图切换触发
    const handleClickIndicator = (val) => {
      carouselMirror.value.carousel.setActiveItem(val)
    }
    return {
      carouselMirror,
      ...toRefs(state),
      handleSizeChange,
      handleCurrentChange,
      handleClickIndicator
    };
  }
}
</script>

<style lang="less" scoped>
.wrap {
  padding-top: 40px;
  .carousel-box {
    width: 100%;
    height: 600px;
    overflow:hidden;
    position: relative;
    .carousel-bottom {
      position: absolute;
      bottom: -132px;
      width: 100%;
      transform: rotateX(180deg);
      opacity: 0.8;
      pointer-events: none;
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 270px;
        bottom: 0;
        z-index: 9999;
        background: linear-gradient(rgb(255, 255, 255) 4%, transparent 85%)
      }
    }
  }
}

</style>