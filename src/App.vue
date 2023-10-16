<template>
  <div>
    <LayoutDefault />
  </div>
</template>

<script>
// import { RouterView } from "vue-router";
import LayoutDefault from "./layout/layoutDefault.vue";

export default {
  components: {
    LayoutDefault,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

body {
  background: var(--color-white-rock);
  margin: 0;
  padding: 0;
}
</style>
