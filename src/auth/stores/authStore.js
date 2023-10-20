import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      accessToken: "",
    };
  },
  getters: {
    getUserAuth: (state) => state.accessToken,
  },
  actions: {
    setUserAuth(accessToken) {
      this.accessToken = accessToken;
    },
  },
});
