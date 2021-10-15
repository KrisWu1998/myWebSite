<template>
  <nav>
    <div class="main">
      <div>logo</div>
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
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
nav {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 50px;
  color: #FFF;
  background: #07122E;
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  
}
</style>