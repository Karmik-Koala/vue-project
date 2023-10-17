import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";

import "./shared/css/normalize.css";
import "./shared/css/variables.css";

import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
