<template>
  <div class="home">
    <Tabs />
    <!-- <CarouselBox />
    <Content />
    <My /> -->
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';
// import CarouselBox from '../../components/Home/CarouselBox.vue';
// import Content from '../../components/Home/Content.vue';
// import My from '../../components/Home/My.vue';
import Tabs from '../../components/Home/Tabs.vue';
export default {
  name: 'home',
  components: {
    // CarouselBox,
    // Content,
    // My
    Tabs
  },
  setup () {
    
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 600px;
}
</style>