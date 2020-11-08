import { createApp } from 'vue'
import App from '@/app.vue'
import router from './router'
import store from './store'
import '@/assets/sass/all.sass';
import "@/assets/css/root.css"
createApp(App).use(store).use(router).mount('#app')
