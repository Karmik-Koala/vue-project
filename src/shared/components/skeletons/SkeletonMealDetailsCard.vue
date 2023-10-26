<template>
  <div class="meal-card">
    <div class="meal-card-image loading"></div>
    <div class="meal-card-container">
      <div class="meal-card-info">
        <br />
        <div class="nutrition-data loading"></div>
        <div class="nutrition-data loading"></div>
        <div class="nutrition-data loading"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonMealDetailsCard",
};
</script>

<style scoped>
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
    height: 350px;
    margin: 1rem;
    border-radius: 10px;
  }

  & .meal-card-container {
    padding: 1rem;

    & .meal-card-info {
      display: flex;
      flex-direction: column;
      gap: 10px;

      & .nutrition-data {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem 8rem;
        border-radius: 10px;
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
      width: 92%;
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
