<template>
  <div class="meal-info">
    <h1 class="loading"></h1>
    <h2 class="loading"></h2>
    <div class="ingredients loading"></div>
    <h2 class="loading"></h2>
    <div class="process loading"></div>
    <div class="meal-tags loading"></div>
  </div>
</template>

<script>
export default {
  name: "MealDetailsInfo",
};
</script>

<style scoped>
h1,
h2 {
  font-size: 1.5rem;
  line-height: 1.5rem;
  min-height: 1.6rem;
  border-radius: 10px;
  animation-delay: 0.05s;
  width: 30%;
}

.meal-info {
  width: 100%;

  & .ingredients {
    height: 5rem;
    margin: 2rem 0;
    border-radius: 10px;
  }

  & .process {
    height: 8rem;
    margin: 2rem 0;
    border-radius: 10px;
  }

  & .meal-tags {
    height: 2rem;
    margin: 2rem 0;
    border-radius: 10px;
    width: 20%;
  }
}
</style>
