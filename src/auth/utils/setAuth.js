import { useAuthStore } from "../stores/authStore";

const authStore = useAuthStore();

export const setAuth = (email, uid, idToken) => {
  authStore.setAccessToken(idToken);
  authStore.setUser({ email, uid });
};
