<template>
  <div class="meal-card">
    <div class="meal-card-image">
      <img :src="info.recipe.image" alt="Recipee Image">
    </div>
    <div class="meal-card-container">
      <div class="meal-card-info">
        <p> <strong>Total Calories:</strong> {{ (info.recipe.calories / 1000).toFixed(2) }} kcal</p>
        <br>
        <div class="proteins">
          <div class="square"></div>
          <p> <strong>PROTEINS:</strong> {{ (info.recipe.totalNutrients.PROCNT.quantity).toFixed(2) }} {{
            info.recipe.totalNutrients.PROCNT.unit }}</p>
        </div>
        <div class="fat">
          <div class="square"></div>
          <p> <strong>FAT:</strong> {{ (info.recipe.totalNutrients.FAT.quantity).toFixed(2) }} {{
            info.recipe.totalNutrients.FAT.unit }}</p>
        </div>
        <div class="carbs">
          <div class="square"></div>
          <p> <strong>CARBS:</strong> {{ (info.recipe.totalNutrients.CHOCDF.quantity).toFixed(2) }} {{
            info.recipe.totalNutrients.CHOCDF.unit }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MealDetailsCard",
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
p {
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-normal);
}

.meal-card {
  display: flex;
  flex-direction: column;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  width: 25%;

  & .meal-card-image {
    padding: 20px;

    & img {
      width: 100%;
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
          width: 15px;
          height: 15px;
          background: rgb(82, 172, 82);
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
          width: 15px;
          height: 15px;
          background: #d1443a;
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
          width: 15px;
          height: 15px;
          background: rgb(207, 173, 18);
        }
      }
    }
  }
}
</style>