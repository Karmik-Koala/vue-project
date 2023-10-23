<template>
  <article class="card">
    <div class="card-info-hover">
      <FavoriteButton :meal="meal" />
    </div>
    <div class="card-img"></div>
    <RouterLink :to="`/details/${meal.id}`">
      <div
        class="card-img--hover"
        :style="`background-image: url(${meal.image});`"
      ></div>
    </RouterLink>
    <div class="card-info">
      <h3 class="card-title">{{ meal.label }}</h3>
      <div>
        <p class="nutrient-info">
          <span class="green"></span><strong>PROTEINS:</strong>
          {{ meal.totalNutrients.PROCNT.quantity.toFixed(2)
          }}{{ meal.totalNutrients.PROCNT.unit }}
        </p>
        <p class="nutrient-info">
          <span class="red"></span><strong>FAT:</strong>
          {{ meal.totalNutrients.FAT.quantity.toFixed(2)
          }}{{ meal.totalNutrients.FAT.unit }}
        </p>
        <p class="nutrient-info">
          <span class="yellow"></span><strong>CARBS:</strong>
          {{ meal.totalNutrients.CHOCDF.quantity.toFixed(2)
          }}{{ meal.totalNutrients.CHOCDF.unit }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import { RouterLink } from "vue-router";
import FavoriteButton from "@/shared/components/FavoriteButton.vue";

export default {
  name: "CardMeal",
  components: {
    RouterLink,
    FavoriteButton,
  },
  props: {
    meal: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
  }

  & .card-info-hover {
    position: absolute;
    z-index: 10;
    padding: 16px;
    box-sizing: border-box;
    width: 100%;
    opacity: 0;
    top: 0;
  }

  &:hover .card-info-hover {
    opacity: 1;
  }

  & .card-img {
    visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  & .card-img--hover {
    transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    top: 0;
  }

  &:hover .card-img--hover {
    height: 100%;
    opacity: 0.3;
  }

  & .card-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background-color: #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px 24px 24px 24px;

    & .card-title {
      margin-top: 5px;
      margin-bottom: 10px;
      font-family: var(--font-family-roboto);
      font-weight: normal;
    }

    & .nutrient-info {
      font-family: var(--font-family-roboto);
      font-size: var(--font-size-xs);

      & span {
        display: inline-block;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        margin-right: 6px;
      }
    }
  }

  &:hover .card-info {
    background-color: transparent;
    position: relative;
  }
}

.red {
  background-color: var(--color-thunderbird);
}

.green {
  background-color: var(--color-green);
}

.yellow {
  background-color: var(--color-yellow);
}
</style>
