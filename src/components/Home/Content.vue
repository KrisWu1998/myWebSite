<template>
  <div :class="['wrap', canShow ? 'mt-0' : '']">
    <div class="main container">
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from "vuex";
export default {
  name: 'content',
  setup () {
    const store = useStore();

    const canShow = computed(()=>{
      const scrollTop = store.state.scrollTop;
      return scrollTop >= 400;
    });

    return {
      canShow
    }
  }

}


</script>

<style lang="less" scoped>
.wrap {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  background: #07122E;
  background: linear-gradient(rgba(7, 18, 46 ,0.9), rgba(7, 18, 46 , 0.9)), url('../../assets/img/bg2.jpg') no-repeat 100% 100%;
  background-position: 20% 0%;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.7) inset;
  padding: 100px 0;
  margin-top: 300px;
  transition: all .5s;
  &.mt-0 {
    margin-top: 0px;
  }
  .content {
    position: relative;
    width: 100%;
    height: 400px;
    // border: 1px solid #fff;
    &::after {
      content: '';
      position: absolute;
      top: -90px;
      left: 88%;
      z-index: 9998;
      width: 200px;
      height: 200px;
      margin-left: -50px;
      background: url('../../assets/img/zzx.png') no-repeat 100% 100%;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-top: 100px solid #fff;
    border-right: 100vw solid transparent;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border-bottom: 100px solid #FFF;
    border-left: 100vw solid transparent;
  }
}

</style>