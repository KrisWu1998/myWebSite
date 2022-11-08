<template>
  <div class="loveMsg-box">
    <div>哈~ 很高兴你可以打开这封信</div>
    <div>那我就简单开始说明一下了(紧张)！！!</div>
    <div>我们认识也有一段时间了，自国庆后我们开始联系的比较频繁，最近我发现我好像喜欢上你了。我每天都在随时等着有你的消息冒泡，哪怕是小分队群，我都想看到你的出现(当然我更希望有私下聊天！！)。晚上也是到点等着你的消息是否会来找我玩玩游戏,但每当晚上看到是和别人在玩，我其实心里是有点失落的。</div>
    <div>我觉得我可能就是传说中的直男，也不大会什么花言巧语。所以我只能稍微用一些小伎俩做点东西帮我传达本意我的（时间原因，做得有点粗糙，可能没有网上那些程序员告白页面那么华丽:( ）</div>
    <div>你应该记得我一直说你很优秀，你确实是很优秀的，所以导致我一直不敢决心表白，一直在沟通中徘徊。我怕给拒绝，我也想到我会给拒绝。但是我发现如果我不说出来，传达给你我的心意，可能我会更难受。所以我不得不说出来，这样我心里会舒服点，至少我想让你知道，在2022年曾有一个男生很喜欢你。</div>
    <div>我想说的差不多就这些了，不过我已经猜到结果了。当然我希望不管结果是什么，都不要影响到小分队大家的约球状态！！！这是最重要的。等你可以打球了，我希望大家还是可以一如既往开心的约球！！！</div>
    <div class="close">
      <!-- <span class="text"> -->
        <!-- <el-icon class="el-icon-edit"></el-icon> -->
      <!-- </span> -->
      <CircleClose style="width: 30px;height: 30px;color: #606266" @click="onConfirm"/>
    </div>
  </div>

</template>

<script setup>
import { CircleClose } from '@element-plus/icons'
import { defineEmits } from 'vue';
const emits = defineEmits(['confirm']);

const onConfirm = () => {
  emits('confirm')
}
</script>

<style lang="less" scoped>
.loveMsg-box {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 12px 8px;
  font-size: 12px;
  box-sizing: border-box;
  z-index: 10;
  div {
    margin-bottom: 8px;
  }
  .close {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    margin-top: 10px;
    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
}
</style>