import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import Element from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import './assets/css/basic.css';
import './assets/iconfont/iconfont';

createApp(App).use(router).use(store).use(Element).mount('#app')
