import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import BeautifyTextDirective from "./shared/directives/BeautifyTextDirective";

import "./shared/css/normalize.css";
import "./shared/css/variables.css";

import App from "./App.vue";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.directive("beautify-text", BeautifyTextDirective);
app.use(router);
app.use(pinia);
app.mount("#app");
