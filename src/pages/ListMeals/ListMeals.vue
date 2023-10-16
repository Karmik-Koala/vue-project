<template>
  <div>
    <div class="container-title">
      <h2 class="title">Customized Cooking</h2>
      <p class="subtitle">Find Recipes to Inspire You</p>
    </div>
    <div>
      <!-- <FiltersBox @change-category="setFilter"/> -->
      <div class="container-search">
        <SearchInput @search="setFilter" @handle-data-meals="listMeals" />
      </div>
      <section>
        <ListRender :items="meals" />
      </section>
    </div>
  </div>
</template>

<script>
import { getListMeals } from "../../services/meals.js";
import SearchInput from "../../partials/listMeals/SearchInput.vue";
import ListRender from "../../partials/listMeals/ListRender.vue";

export default {
  name: "ListMeals",
  components: {
    SearchInput,
    ListRender,
  },
  data() {
    return {
      meals: [],
      filters: {},
    };
  },
  methods: {
    setFilter(filter, value) {
      this.filters = {
        ...this.filters,
        [filter]: value,
      };
    },
    async listMeals() {
      const data = await getListMeals(this.filters);
      this.meals = data.hits.map((item) => ({
        label: item.recipe.label,
        image: item.recipe.image,
        totalNutrients: item.recipe.totalNutrients,
      }));
    },
  },
};
</script>

<style scoped>
.container-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  & .title {
    font-family: var(--font-family-archivo-black);
    font-size: var(--font-size-lg);
    background: linear-gradient(
      to right,
      var(--color-ferra) 0%,
      var(--color-ferra-light) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin-bottom: 5px;
  }

  & .subtitle {
    font-family: var(--font-family-archivo-black);
    font-size: var(--font-size-md);
    background: linear-gradient(
      to right,
      var(--color-ferra) 0%,
      var(--color-ferra-light) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
}

.container-search {
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
</style>
