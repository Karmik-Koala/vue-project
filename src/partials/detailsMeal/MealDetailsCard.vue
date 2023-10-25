<template>
  <div class="meal-card">
    <div class="meal-card-image">
      <img :src="info.recipe.image" alt="Recipee Image" />
      <FavoriteButton class="icon-favorite" :meal="info" />
    </div>
    <div class="meal-card-container">
      <div class="meal-card-info">
        <p>
          <strong>Total Calories:</strong>
          {{ (info.recipe.calories / 1000).toFixed(2) }} kcal
        </p>
        <br />
        <div class="proteins">
          <div class="square"></div>
          <p>
            <strong>PROTEINS:</strong>
            {{ info.recipe.totalNutrients.PROCNT.quantity.toFixed(2) }}
            {{ info.recipe.totalNutrients.PROCNT.unit }}
          </p>
        </div>
        <div class="fat">
          <div class="square"></div>
          <p>
            <strong>FAT:</strong>
            {{ info.recipe.totalNutrients.FAT.quantity.toFixed(2) }}
            {{ info.recipe.totalNutrients.FAT.unit }}
          </p>
        </div>
        <div class="carbs">
          <div class="square"></div>
          <p>
            <strong>CARBS:</strong>
            {{ info.recipe.totalNutrients.CHOCDF.quantity.toFixed(2) }}
            {{ info.recipe.totalNutrients.CHOCDF.unit }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FavoriteButton from "@/shared/components/FavoriteButton.vue";

export default {
  name: "MealDetailsCard",
  components: {
    FavoriteButton,
  },
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.icon-favorite {
  position: absolute;
  left: 30px;
  top: 30px;
}

p {
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-md);
}

.square {
  width: 15px;
  height: 15px;
  border-radius: 45px;
}

.meal-card {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border-radius: 10px;

  & .meal-card-image {
    position: relative;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;

    & img {
      width: 100%;
      border-radius: 10px;
    }
  }

  & .meal-card-container {
    padding: 20px;

    & .meal-card-info {
      display: flex;
      flex-direction: column;
      gap: 10px;

      & .proteins {
        display: flex;
        flex-direction: row;
        align-items: center;

        & p {
          margin-left: 10px;
        }

        & .square {
          background: var(--color-green);
        }
      }

      & .fat {
        display: flex;
        flex-direction: row;
        align-items: center;

        & p {
          margin-left: 10px;
        }

        & .square {
          background: var(--color-thunderbird);
        }
      }

      & .carbs {
        display: flex;
        flex-direction: row;
        align-items: center;

        & p {
          margin-left: 10px;
        }

        & .square {
          background: var(--color-yellow);
        }
      }
    }
  }
}

@media screen and (width >=500px) {
  .meal-card {
    flex-direction: row;
    width: 100%;

    & .meal-card-image {
      width: 50%;
    }

    & .meal-card-container {
      display: flex;
      align-items: center;
    }
  }
}

@media screen and (width >=768px) {
  .meal-card {
    flex-direction: row;

    & .meal-card-image {
      width: 40%;
    }

    & .meal-card-container {
      display: flex;
      align-items: center;
    }
  }
}

@media screen and (width >=1024px) {
  .meal-card {
    flex-direction: column;

    & .meal-card-image {
      width: 100%;
    }
  }
}

@media screen and (width >=1200px) {
  .meal-card {
    width: 100%;
  }
}

@media screen and (width >=1400px) {
  .meal-card {
    width: 50%;
  }
}

@media screen and (width >=2300px) {
  .meal-card {
    width: 25%;
  }
}
</style>
