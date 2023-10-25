import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  persist: true,
  state: () => {
    return {
      accessToken: null,
      user: null,
    };
  },
  getters: {
    getAccessToken: (state) => state.accessToken,
    getUser: (state) => state.user,
  },
  actions: {
    setAccessToken(accessToken) {
      this.accessToken = accessToken;
    },
    setUser(user) {
      this.user = user;
    },
  },
});
