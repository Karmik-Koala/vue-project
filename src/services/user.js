import { useAuthStore } from "@/auth/stores/authStore.js";

export const isAuthenticated = () => {
  return useAuthStore.userId;
};
