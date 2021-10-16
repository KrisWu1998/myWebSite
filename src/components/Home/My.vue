<template>
  <div class="wrap">
    <div class="main">
      <!-- 标题 -->
      <div class="title">
        <span class="title--span">站 长 介 绍</span>
      </div>
      <!-- 内容 -->
      <div class="container">
        <!-- 左侧 -->
        <div class="text">
          <ul>
            <li>90后一枚(暂未秃头)，广漂</li>
            <li>一名男子汉的前端工人，20年入行</li>
            <li>对前端技术充满好奇，挑战，一边工作一边积累经验</li>
            <li>喜欢以幽默的方式交流</li>
          </ul>
        </div>
        <!-- 右侧 -->
        <div class="portrait">
          <img src="../../assets/img/portrait.jpg"/>
        </div>
      </div>
    </div>
    <div class="render" />
  </div>
  
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style lang="less" scoped>
.wrap {
  background: #EFEFEF;
}
.main {
  position: relative;
  z-index: 999;
  padding-top: 20px;
}
.title {
  // display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 20px;
  font-weight: bold;
  color: #07122E;
  .title--span {
    display: inline-block;
    height: 100%;
    padding-bottom: 10px;
    border-bottom: 10px solid #445A71;
    // border-radius: 20px;
  }
}
.container {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 350px;
  padding: 10px 20px;
  .portrait {
    width: 350px;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    flex: 1;
    margin-right: 10px;
    padding-left: 20px;
    ul {
      li {
        margin-bottom: 5px;
      }
    }
    // border: 1px solid #000;
  }
}
.render {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  width: 100%;
  height: 50px;
  background: #445A71;
}
</style>