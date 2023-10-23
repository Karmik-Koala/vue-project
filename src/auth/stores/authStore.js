import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      accessToken: null,
      user: {
        uid: "wdawdwad",
        email: "dieguito777@gmail.com",
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
