import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      accessToken: null,
      user: {
        uid: null,
        email: null,
      },
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
