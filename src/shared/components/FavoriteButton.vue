<template>
  <button class="btn" @click="addFavoriteMealToUser">
    <svg v-if="!isAddedInFavorites" class="card-favorite" viewBox="0 0 24 24">
      <path
        fill="#000000"
        d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-heart-filled card-favorite"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#686868"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
        stroke-width="0"
        fill="#cd391b"
      />
    </svg>
  </button>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "@/auth/stores/authStore.js";
import { useSearchStore } from "@/partials/listMeals/stores/searchStore.js";
import { createFavoriteMeal, deleteFavoriteMeal } from "@/services/meals.js";

export default {
  name: "FavoriteButton",
  props: {
    meal: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(useAuthStore, ["user"]),
    ...mapState(useSearchStore, ["favorites"]),
    isAddedInFavorites() {
      const favorites = this.favorites;
      const isAddedInFavorites = favorites.some((f) => f.id === this.meal.id);

      return isAddedInFavorites;
    },
  },
  methods: {
    ...mapActions(useAuthStore, ["setUser"]),
    ...mapActions(useSearchStore, ["setFavorites"]),
    async addFavoriteMealToUser() {
      if (!this.user) {
        this.$router.push("/login");
      }

      if (!this.isAddedInFavorites) {
        const userId = this.user.uid;
        const { label, image, totalNutrients, id } = this.meal;
        const newMeal = { label, image, totalNutrients, id, userId };

        this.setFavorites([...this.favorites, newMeal]);
        createFavoriteMeal(newMeal);
      } else {
        this.setFavorites(this.favorites.filter((m) => m.id !== this.meal.id));
        deleteFavoriteMeal(this.meal.id);
      }
    },
  },
};
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
}

.card-favorite {
  width: 35px;
  height: 35px;
}
</style>
