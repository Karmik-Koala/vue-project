import { createApp } from "vue";
import { initializeApp } from "firebase/app";

import "./shared/css/normalize.css";
import "./shared/css/variables.css";
import { FIREBASE_CONFIG } from "./auth/FirebaseConfig";

initializeApp(FIREBASE_CONFIG)
import App from "./App.vue";
createApp(App).mount("#app");
