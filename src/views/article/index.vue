<template>
  <div class="wrap">
    <div class="main">
      <div class="container">
        <h1>这是文章Item</h1>
        <div class="infor">
          <div class="left">
            <span class="infor--span">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icontouxiang"></use>
              </svg>
              作者：Kris Wu
            </span>
            <span class="infor--span">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shijian"></use>
              </svg>
              时间：2021-10-20
            </span>
          </div>
          <div class="right">
            <span class="infor--span">
              <el-tag>前端</el-tag>
            </span>
          </div>
        </div>
        <hr/>
        <div class="content">
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          <br />
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  setup () {
    const router = useRouter();
    const id = router.currentRoute.value.params.id;
    console.log(id)
  }
}
</script>

<style lang="less" scoped>
.container {
  box-sizing: border-box;
  width: 100%;
  height: 500px;
  border-radius: 5px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  transition: all .3s;
  padding: 16px 20px;
  margin: 20px 0;
  &:hover {
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
  }
  h1 {
    color: #2481bf;
    text-align: center;
  }
  hr {
    border-top: 0px solid #eaecef;
    margin: 7.5px 0;
  }
  .infor {
    display: flex;
    justify-content: space-between;
    margin-top: 7.5px;
    color: #7F7F7F;
    .infor--span +.infor--span{
      margin-left: 10px;
    }
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