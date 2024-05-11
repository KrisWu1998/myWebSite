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
          path: 'https://unpkg.com/vue@3',
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'https://unpkg.com/element-plus',
          css: 'https://unpkg.com/element-plus/dist/index.css',
        },
        {
          name: 'jquery',
          var: 'jquery',
          path: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js'
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
  },
  server: {
    host: '0.0.0.0',
    port: '8080',  // 端口号，一般情况下为8080
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