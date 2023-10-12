<template>
  <div>
    <!-- <FiltersBox @change-category="setFilter"/> -->
    <SearchInput @search="setFilter" @handle-data-meals="listMeals" />
    <section>
      <div v-for="(meal, index) in meals" :key="index">
        {{ meal.recipe.label }}
      </div>
    </section>
  </div>
</template>

<script>
import SearchInput from "../partials/listMeals/SearchInput.vue";
import { getListMeals } from "../services/meals";

export default {
  name: "ListMeals",
  components: {
    SearchInput,
  },
  data() {
    return {
      meals: [],
      filters: {},
    };
  },
  //   async mounted() {
  //     const filters = {
  //       q: "coffee and croissant",
  //       //   diet: "balanced",
  //     };

  //     const data = await listMeals(filters);
  //     console.log(data);
  //   },
  methods: {
    setFilter(filter, value) {
      this.filters = {
        ...this.filters,
        [filter]: value,
      };
    },
    async listMeals() {
      console.log(this.filters);
      const data = await getListMeals(this.filters);
      console.log(data);
      this.meals = data.hits;
    },
  },
};
</script>

<style scoped></style>
