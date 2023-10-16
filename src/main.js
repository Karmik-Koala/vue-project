import { createApp } from "vue";
import router from "./router";

import "./shared/css/normalize.css";
import "./shared/css/variables.css";

import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
