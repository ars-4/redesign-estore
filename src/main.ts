import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import '@/assets/css/bootstrap.min.css';
import '@/assets/css/stylesheet.css';
import '@/assets/css/icons.css';

const app = createApp(App);

app.config.globalProperties.$api = "https://redesign-estore-backend.ars-4.repl.co/api";

app.config.globalProperties.$auth = true;


app.use(store);

app.use(router);
app.mount('#app');
