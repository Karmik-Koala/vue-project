<template>
  <SkeletonLoader v-if="loading" />
  <div v-else>
    <section class="meal-section">
      <MealDetailsCard :info="info"></MealDetailsCard>
      <MealDetailsInfo :info="info"></MealDetailsInfo>
    </section>

    <section v-if="meals.length" class="related">
      <h1>You might also like</h1>
      <div class="cards-container">
        <ListRender :items="meals" class="list-render" />
      </div>
    </section>
  </div>
</template>

<script>
import { CONSTANTS } from "@/constants";
import { getRecipeeInfo, getListMeals } from "../services/meals.js";
import { useSearchStore } from "../partials/listMeals/stores/searchStore";
import { mapState } from "pinia";
import SkeletonLoader from "../partials/detailsMeal/SkeletonLoader.vue";
import ListRender from "../partials/listMeals/ListRender.vue";
import MealDetailsCard from "../partials/detailsMeal/MealDetailsCard.vue";
import MealDetailsInfo from "../partials/detailsMeal/MealDetailsInfo.vue";

const { API, FILTERS } = CONSTANTS;

export default {
  name: "DetailsMeal",
  components: {
    SkeletonLoader,
    ListRender,
    MealDetailsCard,
    MealDetailsInfo,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      loading: true,
      info: "",
      meals: [],
    };
  },

  computed: {
    ...mapState(useSearchStore, ["lastSearch"]),
  },
  watch: {
    id() {
      this.getDataMeal();
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getDataMeal();
    this.listMeals();
  },
  methods: {
    async getDataMeal() {
      this.loading = true;

      const info = await getRecipeeInfo(this.id);
      this.info = info;

      this.loading = false;
    },
    async listMeals() {
      const filters = {
        [FILTERS.SEARCH]: this.lastSearch,
      };
      const data = await getListMeals(filters);

      if (!data.hits.length) {
        return;
      }

      this.meals = data.hits
        .filter((item) => item.recipe.label !== this.info.recipe.label)
        .slice(0, 4)
        .map((item) => ({
          label: item.recipe.label,
          image: item.recipe.image,
          totalNutrients: item.recipe.totalNutrients,
          id: item._links.self.href.slice(
            API.BASE_URL.length + 1,
            item._links.self.href.indexOf("?type")
          ),
        }));
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: var(--font-family-archivo-black);
  font-size: var(--font-size-xl);
  margin: 0px 0px 30px 0px;
  -webkit-text-stroke-width: 1px;
  -moz-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--color-ferra);
  -moz-text-stroke-color: var(--color-ferra);
  text-shadow: 0.3rem 0.3rem var(--color-salmon);
  color: var(--color-grandis);
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
