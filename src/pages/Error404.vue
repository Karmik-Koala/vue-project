<template>
  <div class="container">
    <h2 class="error-title">Page not Found</h2>
    <RouterLink to="/" class="btn">Go to home</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "ErrorPage404",
  components: {
    RouterLink,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error-title {
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xl);
  color: var(--color-ferra);
  margin-bottom: 3rem;
}

.btn {
  font-family: var(--font-family-roboto);
  background-color: var(--color-salmon);
  color: var(--color-black);
  padding: 10px 20px;
  border-radius: 45px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grandis);
  }
}
</style>
