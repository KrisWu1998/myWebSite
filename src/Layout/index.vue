<template>
  <div class="container" ref="container">
    <Nav />
    <Header/>
    <div class="router-view">
      <router-view />
    </div>
    <Footer/>
    <el-backtop :bottom="100" v-show="isBeyondHeader">
      <div
        class="fiexd-scroll"
      >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-262"></use>
        </svg>
      </div>
    </el-backtop>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { onMounted } from 'vue';
import { useStore } from "vuex";
export default {
  name: 'Layout',
  components: {
    Nav,
    Header,
    Footer
  },
  setup () {

    const store = useStore();

    onMounted(()=>{
      window.addEventListener('scroll', function () {
        store.dispatch('setScrollTop', document.documentElement.scrollTop)
        // console.log(store.state.scrollTop)
        // state.isBeyondHeader = document.documentElement.scrollTop >= 390;
      })
    });

    return {
      
    }
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
.el-backtop {
  z-index: 9999;
}
.fiexd-scroll {
  width: 50px;
  height: 50px;
  .icon {
    width: 50px;
    height: 50px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    margin-right: 8px;
  }
}

</style>