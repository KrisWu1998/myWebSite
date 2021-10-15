<template>
  <div class="container">
    <Header/>
    <div class="router-view">
      <router-view />
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
}
.router-view {
  background: #FFF;
}
</style>