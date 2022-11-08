<template>
  <div class="envlope-wrapper">
    <div id="envelope" :class="[isInit ? isOpen ? 'open': 'close' : ''] ">
        <div class="front flap" @click="onOpen"></div>
        <div class="front pocket" @click="onOpen"></div>
         <div :class="['letter', addMove ? 'move' : '', hasRead ? 'closeMove' : '' ]">
            <template v-if="showSkeleton">
              <div class="words line1"></div>
              <div class="words line2"></div>
              <div class="words line3"></div>
              <div class="words line4"></div>
            </template>
            <template v-else>
              <LoveMsg @confirm="onClose"/>
            </template>
            <div class="read-text" v-show="isShowRead" @click="onMove">滴滴，点我阅读！！</div>
        </div>
        <div class="hearts" v-if="addMove">
            <div class="heart a1"></div>
            <div class="heart a2"></div>
            <div class="heart a3"></div>
        </div>
    </div>
  </div>
  <div class="reset">
      <!-- <button id="open" @click="onOpen">打开</button> -->
      <!-- <button id="reset" @click="onReset">关掉信封</button> -->
      <template v-if="!isOpen">
        <div class="icon-block">
          <el-icon style="font-size:36px"><Pointer /></el-icon>
        </div>
        <div class="pointer-text">打开信封</div>
      </template>
      <template v-else-if="isShowRead">
        <button id="reset" @click="onReset">合起来</button>
      </template>
      
  </div>
</template>

<script setup>
import $ from 'jquery';
import { ref } from 'vue';
import LoveMsg from '../../components/loveMsg.vue'
import { Pointer } from '@element-plus/icons';

const isInit = ref(false);

const isOpen = ref(false);

const isShowRead = ref(false);

const addMove = ref(false);

const showSkeleton = ref(true);

const canAddRemove = ref(false);

const onOpen = () => {
  console.log('isopen---', isOpen.value)
  if (isOpen.value) return;
  isInit.value = true;
  isOpen.value = true;

  setTimeout(()=>{
    isShowRead.value = true;
  }, 2000)
}


const onReset = () => {
  isOpen.value = false;
  isShowRead.value = false;
  // canAddRemove.value = false;
  hasRead.value = false;
}

const onMove = () => {
  addMove.value = true;
  isShowRead.value = false;
  hasRead.value = false;
  setTimeout(()=>{
    showSkeleton.value = false;
  }, 1000)
}

const hasRead = ref(false);
const onClose = () => {
  addMove.value = false;
  showSkeleton.value = true;
  hasRead.value = true;
  setTimeout(() => {
    isShowRead.value = true;
    // hasRead.value = false;
  }, 1000)
}

</script>

<style>
#envelope {
  position: relative;
  width: 280px;
  height: 180px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  top: 150px;
  background-color: #00334c;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.front {
  position: absolute;
  width: 0;
  height: 0;
  z-index: 3;
}

.flap {
  border-left: 140px solid transparent;
  border-right: 140px solid transparent;
  border-bottom: 82px solid transparent;
  /* a little smaller */
  border-top: 98px solid #00334c;
  /* a little larger */
  -webkit-transform-origin: top;
  transform-origin: top;
}

.pocket {
  border-left: 140px solid #0077B2;
  border-right: 140px solid #0077B2;
  border-bottom: 90px solid #006da3;
  border-top: 90px solid transparent;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.letter {
  position: relative;
  background-color: #fff;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 90%;
  top: 5%;
  border-radius: 6px;
  box-shadow: 0 2px 26px rgba(0, 0, 0, 0.12);
}

.letter:after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(25%, rgba(255, 255, 255, 0)), color-stop(55%, rgba(215, 227, 239, 0.7)), to(#d7e3ef));
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 25%, rgba(215, 227, 239, 0.7) 55%, #d7e3ef 100%);
}

.words {
  position: absolute;
  left: 10%;
  width: 80%;
  height: 14%;
  background-color: #EEEFF0;
}

.words.line1 {
  top: 15%;
  width: 20%;
  height: 7%;
}

.words.line2 {
  top: 30%;
}

.words.line3 {
  top: 50%;
}

.words.line4 {
  top: 70%;
}

.open .flap {
  -webkit-transform: rotateX(180deg);
  transform: rotateX(180deg);
  -webkit-transition: z-index .6s, -webkit-transform .4s ease;
  transition: z-index .6s, -webkit-transform .4s ease;
  transition: transform .4s ease, z-index .6s;
  transition: transform .4s ease, z-index .6s, -webkit-transform .4s ease;
  z-index: 1;
}

.close .flap {
  -webkit-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transition: z-index 1s, -webkit-transform .4s .6s ease;
  transition: z-index 1s, -webkit-transform .4s .6s ease;
  transition: transform .4s .6s ease, z-index 1s;
  transition: transform .4s .6s ease, z-index 1s, -webkit-transform .4s .6s ease;
  /* animation: closeFlap 2s ease;
  animation-fill-mode: both; */
  z-index: 5;
}

/* @keyframes closeFlap {
  0% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(0deg);
  }
} */

.close .letter {
  /* -webkit-transform: translateY(0px);
  transform: translateY(0px);
  -webkit-transition: z-index 1s, -webkit-transform .4s ease;
  transition: z-index 1s, -webkit-transform .4s ease;
  transition: transform .4s ease, z-index 1s;
  transition: transform .4s ease, z-index 1s, -webkit-transform .4s ease; */
  z-index: 2 !important;
  animation: closeMsg .4s ease !important;
  animation-fill-mode: both !important;
}
@keyframes closeMsg {
  0% {
    transform: translateY(-160px)
  }
  100% {
    transform: translateY(0);
  }
  /* 100% {
    transform: rotateX(10deg);
  } */
}


.open .letter {
  /* -webkit-transform: translateY(-60px);
  transform: translateY(-60px); */
  /* -webkit-transition: z-index .6s, -webkit-transform .4s .6s ease;
  transition: z-index .6s, -webkit-transform .4s .6s ease;
  transition: transform .4s .6s ease, z-index .6s;
  transition: transform .4s .6s ease, z-index .6s, -webkit-transform .4s .6s ease; */
  z-index: 2;
  animation: showMsg 2s ease;
  animation-fill-mode: both;
}
.letter>.read-text {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all .2s ease;
  cursor: pointer;
  z-index: 2;
}
@keyframes showMsg {
  0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(-160px);
  }
  /* 100% {
    transform: rotateX(10deg);
  } */
}

.move.letter {
  /* height: 500px; */
  animation: addheight 1s ease;
  animation-fill-mode: both;
  z-index: 9;
}

@keyframes addheight {
  0% {
    transform: translateY(-160px);
  }
  100% {
    transform: translateY(-160px);
    height: 620px
  }
}

.closeMove.letter {
  animation: delheight 1s ease;
  animation-fill-mode: both;
  /* z-index: 9; */
}
@keyframes delheight {
  0% {
    transform: translateY(-160px);
    height: 600px;
    z-index: 9;
  }
  100% {
    transform: translateY(-160px);
    height: 90%;
    z-index: 2!important;
  }
}


.hearts {
  position: absolute;
  top: 90px;
  left: 0;
  right: 0;
  z-index: 20;
}

.heart {
  position: absolute;
  bottom: 0;
  right: 10%;
}

.heart:before,
.heart:after {
  position: absolute;
  content: "";
  left: 50px;
  top: 0;
  width: 50px;
  height: 80px;
  background: #D00000;
  border-radius: 50px 50px 0 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}

.heart:after {
  left: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

.close .heart {
  opacity: 0;
  -webkit-animation: none;
  animation: none;
}

.a1 {
  left: 20%;
  -webkit-transform: scale(0.6);
  transform: scale(0.6);
  opacity: 1;
  -webkit-animation: slideUp 4s linear 1, sideSway 2s ease-in-out 4 alternate;
  -moz-animation: slideUp 4s linear 1, sideSway 2s ease-in-out 4 alternate;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  /* -webkit-animation-delay: .7s;
  animation-delay: .7s; */
}

.a2 {
  left: 71%;
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  -webkit-animation: slideUp 5s linear 1, sideSway 4s ease-in-out 2 alternate;
  -moz-animation: slideUp 5s linear 1, sideSway 4s ease-in-out 2 alternate;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  /* -webkit-animation-delay: .7s;
  animation-delay: .7s; */
}

.a3 {
  left: -13%;
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 1;
  -webkit-animation: slideUp 7s linear 1, sideSway 2s ease-in-out 6 alternate;
  -moz-animation: slideUp 7s linear 1, sideSway 2s ease-in-out 6 alternate;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  /* -webkit-animation-delay: .7s;
  animation-delay: .7s; */
}

@-webkit-keyframes slideUp {
  0% {
    top: 0;
  }

  100% {
    top: -600px;
  }
}

@keyframes slideUp {
  0% {
    top: 0;
  }

  100% {
    top: -600px;
  }
}

@-webkit-keyframes sideSway {
  0% {
    margin-left: 0px;
  }

  100% {
    margin-left: 50px;
  }
}

@keyframes sideSway {
  0% {
    margin-left: 0px;
  }

  100% {
    margin-left: 50px;
  }
}


.envlope-wrapper {
  height: 380px;
}

.reset {
  text-align: center;
}

.reset button {
  font-weight: 800;
  font-style: normal;
  -webkit-transition: all .1s linear;
  transition: all .1s linear;
  -webkit-appearance: none;
  background-color: transparent;
  border: solid 2px #0077B2;
  border-radius: 4px;
  color: #0077B2;
  display: inline-block;
  font-size: 14px;
  text-transform: uppercase;
  margin: 5px;
  padding: 10px;
  line-height: 1em;
  text-decoration: none;
  min-width: 120px;
}

.reset button:hover {
  background-color: #0077B2;
  color: #fff;
}

.icon-block {
  margin-bottom: 10px;
  animation: pointerMove 2s ease infinite;
}
@keyframes pointerMove {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>