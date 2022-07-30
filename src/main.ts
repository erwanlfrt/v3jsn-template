import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { vjsn } from 'vue-js-spatial-navigation';

createApp(App).use(router).use(vjsn).mount('#app');
