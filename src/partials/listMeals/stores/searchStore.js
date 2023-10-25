import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => {
    return {
      lastSearch: "pizza",
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
