import externalGlobals from 'rollup-plugin-external-globals'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  plugins: [vue()],
  build:{
      rollupOptions:{
          external: ['vue', 'element-plus'],
          plugins: [
              externalGlobals({
                  vue: 'Vue',
                  'element-plus': 'ElementPlus',
              }),
          ],
      }
  }
})
// module.exports = {
//   base: '/',
//   optimizeDeps: {
//     include: ['element-plus/lib/locale/lang/zh-cn'],
//   }
// }