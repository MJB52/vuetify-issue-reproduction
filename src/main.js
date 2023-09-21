import { createApp } from 'vue';
import  ComponentLib from 'vuetify-lib-example';
import 'vuetify-lib-example/style.css';
import './style.css';
import App from './App.vue';
import vuetify from './vuetify';

const app = createApp(App);
app.use(vuetify);
app.use(ComponentLib);

app.mount('#app');
