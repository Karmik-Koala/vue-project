import { defineStore } from "pinia";

export const searchStore = defineStore("search", {
  state: () => {
    return {
      lastSearch: "",
    };
  },
  getters: {
    getLastSearch: (state) => state.lastSearch,
  },
  actions: {
    setLastSearch(search) {
      this.lastSearch = (search || "").trim();
    },
  },
});
