import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import Element from "element-plus";
import "element-plus/theme-chalk/index.css";
import './assets/css/basic.css';

createApp(App).use(router).use(Element).mount('#app')
