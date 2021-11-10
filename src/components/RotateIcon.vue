<template>
  <div class="rotate-box">
    <div class="rect1">
      <img src="https://demosc.chinaz.net/Files/DownLoad/moban/202109/moban5765/image/shape-1.png"/>
    </div>
    <div class="rect2">
      <img src="https://demosc.chinaz.net/Files/DownLoad/moban/202109/moban5765/image/shape-2.png"/>
    </div>
    <div class="rect3">
      <img src="https://demosc.chinaz.net/Files/DownLoad/moban/202109/moban5765/image/shape-3.png"/>
    </div>
    <div class="rect4">
      <img src="https://demosc.chinaz.net/Files/DownLoad/moban/202109/moban5765/image/shape-4.png"/>
    </div>
  </div>
</template>

<style lang="less" scoped>
.rotate-box {
  position: absolute;
  width: 100%;
  height: 100%;
  .rect1 {
    position: absolute;
    top: 40%;
    left: 20px;
    z-index: -1;
    -webkit-animation: mover 15s infinite linear;
    animation: mover 15s infinite linear;
  }
  .rect2 {
    position: absolute;
    left: 23%;
    top: 0%;
    -webkit-animation: rotate3d 4s linear infinite;
    animation: rotate3d 4s linear infinite;
    opacity: .4;
  }
  .rect3 {
    position: absolute;
    top: 50%;
    right: 5%;
    -webkit-animation-name: rotate;
    animation-name: rotate;
    -webkit-animation-duration: 20s;
    animation-duration: 20s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    opacity: .4;
  }
  .rect4 {
    position: absolute;
    top: -3%;
    right: 20%;
    -webkit-animation-name: rotate;
    animation-name: rotate;
    -webkit-animation-duration: 20s;
    animation-duration: 20s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
  }
  img {
    vertical-align: middle;
    max-width: 100%;
  }
}

@keyframes mover {
  0% {
    transform: translate(0,0) rotate(0);
  }
  20% {
    transform: translate(73px,-1px) rotate(36deg);
  }
  40% {
    transform: translate(141px,72px) rotate(72deg);
  }
  60% {
    transform: translate(83px,122px) rotate(108deg);
  }
  80% {
    transform: translate(-40px,72px) rotate(144deg);
  }
  100% {
    transform: translate(0,0) rotate(0);
  }
}

@keyframes rotate3d {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>