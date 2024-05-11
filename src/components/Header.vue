<template>
  <header>
    <!-- <Nav /> -->
    <div class="imgBg">
      <div class="mask" />
      <h1>Kris Wu</h1>
      <p>Don't change the world, just change yourself</p>
    </div>
  </header>
</template>

<script>

export default {
  
}

</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: calc(450px);
  // background-color: rgba(62, 105, 167, 0.7);;
  .imgBg {
    // position: fixed;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 400px;
    padding-top: 50px;
    background: url('http://www.kriswuzz.com:7070/img/bg.png');
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center center;
    .mask {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      // background: #000;
      // opacity: 0.3;
      // background: rgba(0, 0, 0, .3);
    }
    h1, p {
      display: flex;
      justify-content: center;
      position: relative;
      z-index: 9999;
      color: #FFF;
    }
    h1 {
      margin-top: 100px;
      font-size: 50px;
    }
    p {
      margin-top: 20px;
      font-size: 20px;
    }
  }
}
// @media screen and (max-width: 1200px){
//   .imgBg {
//     background-size: 100% 100% !important;
//   }
// }
</style>