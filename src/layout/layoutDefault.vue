<template>
  <div class="body">
    <Navbar />
    <!-- Content of the page -->
    <main class="main">
      <RouterView />
    </main>
  </div>

  <FooterComponent />
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "@/shared/components/Navbar.vue";
import FooterComponent from "@/shared/components/Footer.vue";

export default {
  name: "LayoutDefault",
  components: {
    RouterView,
    Navbar,
    FooterComponent,
  },
};
</script>

<style scoped>
.body {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.main {
  padding: 5%;
  min-height: 100vh;
}
</style>
