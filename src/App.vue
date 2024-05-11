<template>
  <!-- <el-config-provider :locale="locale"> -->
    <router-view />
  <!-- </el-config-provider> -->
</template>

<script>
// import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { onMounted, onBeforeMount } from 'vue';
export default {
  name: 'App',
  setup () {
    
    function handleResize() {
      if (window.innerWidth <= 768) {
        alert('请使用电脑端访问网站效果更加！');
      }
    }

    onMounted(() => {
      window.addEventListener('resize', handleResize);
      handleResize();
    })

      onBeforeMount(() => {
        window.removeEventListener('resize', handleResize)
      })
    
    return {
      // locale: zhCn,
    }
  }
}
</script>
