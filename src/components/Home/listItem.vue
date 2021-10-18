<template>
  <div class="article-Item">
    <div class="title">Vue3.0学习分享</div>
    <hr />
    <div class="msg">
      <div class="msg-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icontouxiang"></use>
        </svg>
        <span>KrisWu</span>
      </div>
      <div class="msg-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shijian"></use>
        </svg>
        <span>2021-10-18</span>
      </div>
      <div class="msg-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-biaoqian"></use>
        </svg>
        <el-tag>前端</el-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style lang="less" scoped>
.article-Item {
  border-radius: 5px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  transition: all .3s;
  padding: 16px 20px;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .title {
    display: inline-block;
    position: relative;
    padding-bottom: 5px;
    font-size: 23px;
    color: #2481bf;
    cursor: pointer;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #2481bf;
      visibility: hidden;
      transform: scaleX(0);
      transition: .3s ease-in-out;
    }
    &:hover {
      &::after {
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }
  hr {
    border-top: 0px solid #eaecef;
    margin: 7.5px 0;
  }
}
.msg {
  display: flex;
  align-items: center;
  font-size: 15px;
  .msg-item {
    margin-right: 16px;
    color: #7F7F7F;
    .icon {
      width: 15px;
      height: 15px;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
      margin-right: 8px;
    }
  }
}
</style>
