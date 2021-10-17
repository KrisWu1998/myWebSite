<template>
  <div class="home">
    <!-- 站长介绍 -->
    <My />
    <div class="wrap">
      <div class="main">
        <ul>
          <li>代码未敲1</li>
          <li>代码未敲2</li>
          <li>代码未敲3</li>
          <li>代码未敲4</li>
          <li>代码未敲5</li>
          <li>代码未敲6</li>
          <li>代码未敲7</li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
import My from '../../components/Home/My.vue';
export default {
  name: 'home',
  components: {
    My
  }
}
</script>

<style lang="less" scoped>
.home {
  // border: 1px solid #000;
  // height: 600px;
}
</style>