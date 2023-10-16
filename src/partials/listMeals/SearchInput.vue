<template>
  <form class="container" @submit.prevent="handleListMeals">
    <SearchIcon class="search-icon" @click="handleListMeals" />
    <input
      v-model.lazy="search"
      placeholder="coffee and croissant..."
      type="search"
      @change="sendSearch"
    />
    <XIcon v-if="search.length" class="clear-icon" @click="clearSerch" />
  </form>
</template>

<script>
import { CONSTANTS } from "../../constants";
const { FILTERS } = CONSTANTS;

import SearchIcon from "../../shared/components/icons/SearchIcon.vue";
import XIcon from "../../shared/components/icons/XIcon.vue";

export default {
  name: "SearchInput",
  components: {
    SearchIcon,
    XIcon,
  },
  emits: {
    search: null,
    handleDataMeals: null,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    sendSearch(e) {
      this.$emit("search", FILTERS.SEARCH, e.target.value);
    },
    clearSerch() {
      this.search = "";
      this.$emit("search", FILTERS.SEARCH, "");
    },
    handleListMeals() {
      this.$emit("handleDataMeals");
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;

  & svg {
    position: absolute;
    top: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
    width: 26px;
    height: 26px;
    cursor: pointer;
  }

  & .search-icon {
    left: 30px;
  }

  & .clear-icon {
    right: 10px;
  }

  & input {
    padding: 20px 60px;
    border-radius: 50px;
    border: 0;
    background-color: var(--color-white);
    width: 100%;
    outline: none;
    font-family: var(--font-family-roboto);
  }
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
}
</style>
