import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { isAuthenticated } from "@/services/user.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }

  if (isAuthenticated()) {
    next();
  } else {
    next("/login");
  }
});

export default router;
