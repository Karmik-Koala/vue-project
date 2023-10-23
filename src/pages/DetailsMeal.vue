<template>
  <SkeletonLoader v-if="loading" />
  <div v-else>
    <section class="meal-section ">
      <MealDetailsCard :info="info"></MealDetailsCard>
      <MealDetailsInfo :info="info"></MealDetailsInfo>
    </section>

    <section class="related">
      <h1> You might also like </h1>
      <div class="cards-container">
        <ListRender :items="[info.recipe, info.recipe, info.recipe, info.recipe]" class="list-render" />
      </div>
    </section>
  </div>
</template>

<script>

import { getRecipeeInfo } from "../services/meals.js"
import SkeletonLoader from '../partials/detailsMeal/SkeletonLoader.vue'
import ListRender from '../partials/listMeals/ListRender.vue'
import MealDetailsCard from "../partials/detailsMeal/MealDetailsCard.vue";
import MealDetailsInfo from "../partials/detailsMeal/MealDetailsInfo.vue";

export default {
  name: "DetailsMeal",
  components: {
    SkeletonLoader,
    ListRender,
    MealDetailsCard,
    MealDetailsInfo
  },
  data() {
    return {
      loading: true,
      info: '',
    };
  },
  async mounted() {
    this.loading = true
    const info = await getRecipeeInfo(this.$route.params.id)
    this.info = info
    this.loading = false
  },
};
</script>

<style scoped>
h1 {
  font-family: var(--font-family-archivo-black);
  font-size: var(--font-size-xl);
  margin: 0px 0px 30px 0px;
  background: linear-gradient(to right,
      var(--color-ferra) 0%,
      var(--color-ferra-light) 30%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.meal-section {
  display: flex;
  flex-direction: row;
  gap: 10%;
  color: var(--color-ferra);
  font-family: var(--font-family-roboto);
}

.related h1 {
  margin: 70px 0px;
}


.cards-container {
  /* padding: 40px; */
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  & .list-render {
    padding: 0;
  }
}
</style>
