<template>
  <div class="body">
      <Navbar />
    <!-- Content of the page -->
    <main class="main">
      <RouterView />
    </main>
    <footer class="footer">TODO: FOOTER</footer>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "../shared/components/Navbar.vue";

export default {
  name: "LayoutDefault",
  components: {
    RouterView,
    Navbar,
  },
};
</script>

<style scoped>
.body{
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;

}
</style>
