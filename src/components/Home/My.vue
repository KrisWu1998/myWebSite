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
  background: #FFF;
  padding-top: 100px;
  margin-top: 300px;
  margin-bottom: 200px;
  transition: all .5s;
  &.mt-0 {
    margin-top: 0px;
  }
  .content {
    position: relative;
    width: 100%;
    height: 800px;
    // border: 1px solid #000;
    // &::after {
    //   content: '';
    //   position: absolute;
    //   top: -90px;
    //   left: 88%;
    //   z-index: 9999;
    //   width: 200px;
    //   height: 200px;
    //   margin-left: -50px;
    //   background: url('../../assets/img/gtx.png') no-repeat 100% 100%;
    // }
  }
  // &::after {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 0;
  //   height: 0;
  //   border-top: 100px solid #07122E;
  //   border-right: 100vw solid transparent;
  // }
}

</style>