import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => {
    return {
      lastSearch: "",
      favorites: [],
    };
  },
  getters: {
    getLastSearch: (state) => state.lastSearch,
    getFavorites: (state) => state.favorites,
  },
  actions: {
    setLastSearch(search) {
      this.lastSearch = (search || "").trim();
    },
    setFavorites(favorites) {
      this.favorites = favorites;
    },
  },
});
