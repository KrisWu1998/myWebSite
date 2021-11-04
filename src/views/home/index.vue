<template>
  <div class="home">
    <CarouselBox />
    <Content />
    <My />
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';
import CarouselBox from '../../components/Home/CarouselBox.vue';
import Content from '../../components/Home/Content.vue';
import My from '../../components/Home/My.vue';
export default {
  name: 'home',
  components: {
    CarouselBox,
    Content,
    My
  },
  setup () {
    
  }
}
</script>

<style lang="less" scoped>

</style>