<template>
  <div class="container">
    <Header/>
    <div class="router-view">
      <!-- <div class="wrap">
        <div class="main"> -->
          <router-view />
        <!-- </div>
      </div> -->
    </div>
    <Footer/>
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