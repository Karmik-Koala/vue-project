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

.loading {
  background-color: var(--color-gray);
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    var(--color-gray);
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
}

@keyframes loading {
  to {
    background-position-x: -20%;
  }
}
</style>
