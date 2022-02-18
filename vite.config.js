import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue';
import importToCDN from 'vite-plugin-cdn-import'
export default defineConfig({
  plugins: [
    vue(),
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