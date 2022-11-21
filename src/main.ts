/* eslint-disable */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { boussole } from 'boussole/vue';
createApp(App).use(router)
.use(boussole).mount('#app');

