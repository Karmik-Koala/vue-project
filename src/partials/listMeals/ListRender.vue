<template>
  <div class="container">
    <div v-for="(meal, index) in items" :key="index">
      <div class="card-container">
        <CardMeal :meal="meal" />
      </div>
    </div>
  </div>
</template>

<script>
import CardMeal from "./CardMeal.vue";

export default {
  name: "ListRender",
  components: {
    CardMeal,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

@media screen and (width >= 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (width >= 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (width >= 1200px) {
  .container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (width >= 2560px) {
  .container {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
