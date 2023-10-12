import { createApp } from "vue";
import router from "./router";
import { initializeApp } from "firebase/app";

import "./shared/css/normalize.css";
import "./shared/css/variables.css";
import { FIREBASE_CONFIG } from "./auth/FirebaseConfig";

initializeApp(FIREBASE_CONFIG);
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
