<template>
  <div>
    <div class="container-title">
      <h2 class="title">Customized Cooking</h2>
      <p class="subtitle">Discover recipes and see their nutritional data.</p>
    </div>
    <div>
      <!-- <FiltersBox @change-category="setFilter"/> -->
      <div class="container-search">
        <SearchInput
          :on-clear-search="clearSearch"
          @search="setFilter"
          @handle-data-meals="listMeals"
        />
      </div>
      <section>
        <SkeletonListRender v-if="loading" />
        <ListRender v-else :items="meals" />
        <NotDataFound v-if="showNotData" />
      </section>
    </div>
  </div>
</template>

<script>
import { CONSTANTS } from "@/constants";
import { mapActions } from "pinia";
import { useSearchStore } from "@/partials/listMeals/stores/searchStore.js";
import { getListMeals } from "../../services/meals.js";
import SearchInput from "../../partials/listMeals/SearchInput.vue";
import ListRender from "../../partials/listMeals/ListRender.vue";
import SkeletonListRender from "../../partials/listMeals/SkeletonListRender.vue";
import NotDataFound from "../../partials/listMeals/NotDataFound.vue";

const { API, FILTERS } = CONSTANTS;

export default {
  name: "ListMeals",
  components: {
    SearchInput,
    ListRender,
    SkeletonListRender,
    NotDataFound,
  },
  data() {
    return {
      loading: false,
      meals: [],
      showNotData: false,
      filters: {},
    };
  },
  methods: {
    ...mapActions(useSearchStore, ["lastSearch"]),
    setFilter(filter, value) {
      this.filters = {
        ...this.filters,
        [filter]: value,
      };
    },
    async listMeals() {
      this.showNotData = false;
      this.loading = true;

      const useSearch = useSearchStore();
      useSearch.setLastSearch(this.filters[FILTERS.SEARCH]);

      const data = await getListMeals(this.filters);

      if (!data.hits.length) {
        this.showNotData = true;
        this.loading = false;
        return;
      }

      this.meals = data.hits.map((item) => ({
        label: item.recipe.label,
        image: item.recipe.image,
        totalNutrients: item.recipe.totalNutrients,
        id: item._links.self.href.slice(
          API.BASE_URL.length + 1,
          item._links.self.href.indexOf("?type")
        ),
      }));

      this.loading = false;
    },
    clearSearch(filter) {
      this.showNotData = false;
      this.loading = false;
      this.meals = [];
      this.filters = {
        ...this.filters,
        [filter]: null,
      };
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
