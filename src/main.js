import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import hello from "./components/Hello.vue";
import './index.css';

const app = createApp(App);

app.component('hello-vue', hello.default);

app.use(router);

app.mount("#app");
