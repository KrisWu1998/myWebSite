<template>
  <header>
    <Nav />
    <div class="imgBg">
      <div class="mask" />
    </div>
  </header>
</template>

<script>
import Nav from './Nav.vue';
export default {
  components: {
    Nav
  }
}

</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: calc(450px);
  .imgBg {
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 400px;
    padding-top: 50px;
    background: url('../assets/img/bg.jpg');
    background-repeat: no-repeat;
    // background-size: 100% 100%;
    background-size:cover;
    .mask {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #000;
      opacity: 0.3;
    }
  }
}
@media screen and (max-width: 1200px){
  .imgBg {
    background-size: 100% 100% !important;
  }
}
</style>