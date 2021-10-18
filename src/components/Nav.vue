<template>
  <nav class="wrap">
    <div class="wrap-left">
      <div class="logo" />
      <span>Kris Wu</span>
    </div>
    <ul>
      <li>
        <a>首页</a>
      </li>
      <li>
        <a>关于我</a>
      </li>
      <li>
        <a>前端</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
nav {
  box-sizing: border-box;
  position: fixed;
  z-index: 9999;
  width: 100%;
  padding: 10px 20px;
  color: #FFF;
  background: #07122E;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .wrap-left {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    .logo {
      width: 50px;
      height: 40px;
      margin-right: 10px;
      background: url('../assets/img/logo.png') no-repeat;
      background-size: 100% 100%;
    }
  }  
    ul {
      display: flex;
      li {
        list-style: none;
        box-sizing: border-box;
        padding: 10px;
        margin-right: 10px;
        cursor: pointer;
        :hover {
          border-bottom: 2px solid #FFF;
        }
      }
    }
  
  
}
</style>