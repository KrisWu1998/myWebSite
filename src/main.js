import {
  createApp
} from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import ElementPlus from 'element-plus'
import './assets/css/basic.css';
import './assets/iconfont/iconfont';


createApp(App).use(router).use(store).use(ElementPlus).mount('#app')