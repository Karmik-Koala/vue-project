<template>
  <div class="meal-info">
    <div class="title-favourites">
      <h1>{{ info.recipe.label }}</h1>
    </div>
    <h2> Ingredients list</h2>
    <div class="ingredients">
      <p v-for="(ingredient, index) in info.recipe.ingredientLines" :key=index> - {{ ingredient }}</p>
    </div>
    <h2> How to make it (Example)</h2>
    <div class="process">
      <p> 1. Preheat your oven to 375°F (190°C).</p>
      <p> 2. In a pan, sauté the spinach in olive oil until wilted. Add garlic powder, salt, and pepper for flavor.</p>
      <p>3. Cut a pocket into each chicken breast. Be careful not to cut through entirely. </p>
      <p>4. Stuff each chicken breast with the sautéed spinach and feta cheese. </p>
      <p>5. Seal the pockets with toothpicks.</p>
      <p>6. Season the outside of the chicken breasts with a bit of salt and pepper. </p>
      <p>7. Place the stuffed chicken breasts on a baking sheet and bake for 25-30 minutes, or until the chicken
        is cooked through and the cheese is bubbly and golden.</p>
      <p>8. Remove the toothpicks and serve your delicious Spinach and Feta Stuffed Chicken. </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MealDetailsInfo",
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: var(--font-family-archivo-black);
  font-size: var(--font-size-xl);
  margin: 0px 0px 30px 0px;
  background: linear-gradient(to right,
      var(--color-ferra) 0%,
      var(--color-ferra-light) 30%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
  font-family: var(--font-family-archivo-black);
  font-size: var(--font-size-lg);
  background: linear-gradient(to right,
      var(--color-ferra) 0%,
      var(--color-ferra-light) 20%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-normal);
}

.meal-info .ingredients {
  padding: 30px 0px;
}

.meal-info .process {
  padding: 30px 0px;
}
</style>