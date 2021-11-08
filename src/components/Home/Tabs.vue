<template>
  <div class="wrap">
    <div class="main tabs-box">
      <div class="tabs-item">
        <div class="item-content">
          <div class="item-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-ai-code"></use>
            </svg>
          </div>
          <div class="item-right">
            <h5>前端开发</h5>
            <h4>专注于网站设计、网站交互</h4>
          </div>
        </div>
      </div>
      <div class="tabs-item">
        <div class="item-content">
          <div class="item-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-didian"></use>
            </svg>
          </div>
          <div class="item-right">
            <h5>工作地点</h5>
            <h4>现居于：广东广州</h4>
          </div>
        </div>
      </div>
      <div class="tabs-item">
        <div class="item-content">
          <div class="item-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xinrenzhinan"></use>
            </svg>
          </div>
          <div class="item-right">
            <h5>成长形态</h5>
            <h4>90后、男子汉</h4>
          </div>
        </div>
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
.wrap {
  background: rgba(62, 105, 167, .7);
}
.tabs-box {
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  // width: 100%;
  height: 200px;
  // border: 1px solid #000;
  .tabs-item {
    box-sizing: border-box;
    box-shadow: 0px 40px 60px 0px rgba(0, 0, 0, .1);
    display: flex;
    position: relative;
    top: -40px;
    width: 370px;
    height: 170px;
    padding: 50px 40px 40px;
    background: #FFF;
    border-radius: 20px;
    .item-content {
      display: flex;
      width: 100%;
      .item-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 70px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        background-color: rgba(62, 105, 167, .7);
        border-radius: 50%;
        margin-right: 20px;
        margin-bottom: 10px;
        font-size: 25px;
        transition: .5s;
        &::after {
          position: absolute;
          content: '';
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: rgb(62, 105, 167);
          border-radius: 50%;
          transition: .9s;
          transform: scale(0.5);
          opacity: 0;
        }
        .icon {
          position: relative;
          z-index: 10;
          width: 40px;
          height: 40px;
          transition: .9s;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        }
      }
      .item-right {
        flex: 1;
        h5 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        h4 {
          color: rgba(0, 0, 0, .7);
        }
      }
    }
    &:hover {
      .item-icon {
        &::after {
          transform: scale(1);
          opacity: 1;
        }
        .icon {
          color: #FFF;
        }
      }
    }
  }
}
</style>
