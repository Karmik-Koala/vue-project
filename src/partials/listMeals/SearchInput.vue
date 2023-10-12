<template>
  <form class="container" @submit.prevent="handleListMeals">
    <input type="text" @change="sendSearch" />
  </form>
</template>

<script>
import { CONSTANTS } from "../../constants";
const { FILTERS } = CONSTANTS;

export default {
  name: "SearchInput",
  emits: {
    search: null,
    handleDataMeals: null,
  },
  methods: {
    sendSearch(e) {
      this.$emit("search", FILTERS.SEARCH, e.target.value);
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

  & input {
    padding: 20px;
    border-radius: 25px;
    border: 0;
    background-color: #c4c4c4;
  }
}
</style>
