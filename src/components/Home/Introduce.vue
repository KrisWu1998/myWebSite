<template>
  <div class="wrap">
    <div class="main introduce-box">
      <div class="left"></div>
      <div class="right">
        <!-- <p>很高兴看到你的出现</p> -->
        <h4>
          时间总是在行走，我们虽要珍惜时间，合理使用。但当你感觉到累了，停下来，也是一种进步。生活不止眼前的苟且，还有诗和远方呢！
        </h4>
        <hr>
        <!-- <p>Nice to see you show up</p> -->
        <h4>
          Time is always walking, although we should cherish the time, reasonable use. But when you feel tired, stop for a while, also a kind of progress. Life is not only the casual, there are poems and distance!
        </h4>
      </div>
    </div>
    <RotateIcon />
  </div>
</template>

<script>
import RotateIcon from '../RotateIcon.vue';
export default {
  components: {RotateIcon},
  setup () {

  }
}
</script>

<style lang="less" scoped>
.wrap {
  background: url('https://demosc.chinaz.net/Files/DownLoad/moban/202109/moban5765/image/bg-gray.png') no-repeat;
  background-size: 110% 350%;
}
.introduce-box {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 390px;
  padding: 40px 0;
  .left {
    width: 370px;
    height: 100%;
    margin-right: 40px;
    background: url('../../assets/img/cjml.png') no-repeat center;
    background-size: 100% 100%;
  }
  .right {
    flex: 1;
    box-sizing: border-box;
    height: 100%;
    padding: 10px 0;
    letter-spacing: 1px;
    h4 {
      line-height: 2;
      font-weight: 700;
      color: rgba(0, 0, 0, .7);
    }
    hr {
      margin: 40px 0;
      border: none;
    }
  }
}
</style>