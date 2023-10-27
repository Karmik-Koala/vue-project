<template>
  <div>
    <div class="container-title">
      <h2 class="title stroke shadow">Your favorite meals</h2>
    </div>
    <div>
      <section>
        <SkeletonListRender v-if="loading" />
        <ListRender v-else :items="favorites" />
        <NotDataFound v-if="!(favorites || []).length" />
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useSearchStore } from "@/partials/listMeals/stores/searchStore.js";
import { getListFavoriteMeals } from "@/services/meals";
import ListRender from "@/partials/listMeals/ListRender.vue";
import SkeletonListRender from "@/partials/listMeals/SkeletonListRender.vue";
import NotDataFound from "@/partials/listMeals/NotDataFound.vue";

export default {
  name: "FavoriteMeals",
  components: {
    ListRender,
    SkeletonListRender,
    NotDataFound,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(useSearchStore, ["favorites"]),
  },
  mounted() {
    this.getFavoriteMealsByUser();
  },
  methods: {
    ...mapActions(useSearchStore, ["setFavorites"]),
    async getFavoriteMealsByUser() {
      this.loading = true;

      const data = await getListFavoriteMeals();
      this.setFavorites(data);

      this.loading = false;
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
    font-size: var(--font-size-xl);
    -webkit-text-stroke-width: 1px;
    -moz-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--color-ferra);
    -moz-text-stroke-color: var(--color-ferra);
    text-shadow: 0.3rem 0.3rem var(--color-salmon);
    color: var(--color-grandis);
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
