// import externalGlobals from 'rollup-plugin-external-globals'
import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue';
import importToCDN, {
  autoComplete
} from 'vite-plugin-cdn-import'
export default defineConfig({
  plugins: [
    vue(),
    importToCDN({
      modules: [
        autoComplete('vue'),
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'https://unpkg.com/element-plus',
          css: 'https://unpkg.com/element-plus/dist/index.css',
        }
      ],
    }),
  ],
  // build: {
  //   rollupOptions: {
  //     external: ['vue', 'element-plus'],
  //     plugins: [
  //       externalGlobals({
  //         vue: 'Vue',
  //         'element-plus': 'ElementPlus',
  //       }),
  //     ],
  //   }
  // }
})
// module.exports = {
//   base: '/',
//   optimizeDeps: {
//     include: ['element-plus/lib/locale/lang/zh-cn'],
//   }
// }