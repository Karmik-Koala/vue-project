<template>
  <div>
    <Navbar />
    <!-- Content of the page -->
    <div class="container">
      <RouterView />
    </div>
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
.container {
  padding: 5%;
}
</style>
