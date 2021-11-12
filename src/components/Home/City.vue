<template>
  <div class="wrap">
    <div class="main city-box">


    </div>
  </div>
</template>

<script>
export default {
  setup () {

  }
}
</script>

<style lang="less" scoped>
.wrap {
  background: rgba(236, 243, 255, .2);
  .city-box {
    display: flex;
    height: 450px;
    padding: 40px 0;
  }
  .mask {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 100%;
    height: 100%;
    padding-bottom: 20px;
    background: rgba(0, 0, 0, .4);
    color: #FFF;
    h3 {
      text-align: center;
      font-size: 24px;
      letter-spacing: 5px;
    }
  }
}
</style>