<template>
  <SkeletonLoader v-if="loading" />
  <div v-else>
    <section class="meal-section">
      <MealDetailsCard :info="info"></MealDetailsCard>
      <MealDetailsInfo :info="info"></MealDetailsInfo>
    </section>

    <section class="related">
      <h1>You might also like</h1>
      <div class="cards-container">
        <ListRender
          :items="[
            info.recipe,
            info.recipe,
            info.recipe,
            info.recipe,
            info.recipe,
          ]"
          class="list-render"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { getRecipeeInfo, getListMeals } from "../services/meals.js";
import { useSearchStore } from "../partials/listMeals/stores/searchStore";
import { mapState } from "pinia";
import SkeletonLoader from "../partials/detailsMeal/SkeletonLoader.vue";
import ListRender from "../partials/listMeals/ListRender.vue";
import MealDetailsCard from "../partials/detailsMeal/MealDetailsCard.vue";
import MealDetailsInfo from "../partials/detailsMeal/MealDetailsInfo.vue";

export default {
  name: "DetailsMeal",
  components: {
    SkeletonLoader,
    ListRender,
    MealDetailsCard,
    MealDetailsInfo,
  },
  data() {
    return {
      loading: true,
      info: "",
      // filters: {}
    };
  },
  computed: {
    ...mapState(useSearchStore, ["lastSearch"]),
  },
  async mounted() {
    // const data = await getListMeals(this.filters)

    this.loading = true;
    const info = await getRecipeeInfo(this.$route.params.id);
    this.info = info;
    this.loading = false;
  },
};
</script>

<style scoped>
h1 {
  font-family: var(--font-family-archivo-black);
  font-size: var(--font-size-xl);
  margin: 0px 0px 30px 0px;
  background: linear-gradient(
    to right,
    var(--color-ferra) 0%,
    var(--color-ferra-light) 30%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.go-back {
  display: flex;
  margin-bottom: 1rem;

  & .button-back {
    display: flex;
    align-items: center;
    gap: 1%;
    padding: 5px;
    border: 2px solid var(--color-ferra);
    border-radius: 7px;

    & img {
      filter: invert(20%) saturate(50%) sepia(100%);
    }
  }
}

.meal-section {
  display: flex;
  flex-direction: column;
  gap: 5%;
  color: var(--color-ferra);
  font-family: var(--font-family-roboto);
}

.related h1 {
  margin: 50px 0px;
}

.cards-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  & .list-render {
    padding: 0;
  }
}

@media screen and (width >=768px) {
  .meal-section {
    flex-direction: column;
  }

  .related h1 {
    font-size: var(--font-size-lg);
  }
}

@media screen and (width >=1024px) {
  .meal-section {
    flex-direction: row;
  }
}

@media screen and (width >=1200px) {
  .meal-section {
    /* flex-direction: row; */
  }
}
</style>
