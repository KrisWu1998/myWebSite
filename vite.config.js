import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue';
import importToCDN from 'vite-plugin-cdn-import'
import viteCompression from 'vite-plugin-compression'
export default defineConfig({
  plugins: [
    vue(),
    viteCompression(),
    importToCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://unpkg.com/vue@next',
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'https://unpkg.com/element-plus',
          css: 'https://unpkg.com/element-plus/dist/index.css',
        }
      ],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    }
  }
  // optimizeDeps: {
  //   include: ['element-plus/lib/locale/lang/zh-cn'],
  // }
})
// module.exports = {
//   base: '/',
//   optimizeDeps: {
//     include: ['element-plus/lib/locale/lang/zh-cn'],
//   }
// }