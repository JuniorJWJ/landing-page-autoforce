import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router); // Usando o Vue Router no app

app.mount("#app");
