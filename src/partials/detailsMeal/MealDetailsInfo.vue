<template>
  <div class="meal-info">
    <div class="title-favourites">
      <h1>{{ info.recipe.label }}</h1>
    </div>
    <h2>Ingredients list</h2>
    <div v-if="!timePrepZero" class="prep-time">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-alarm"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="#686868"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M12 10l0 3l2 0" />
        <path d="M7 4l-2.75 2" />
        <path d="M17 4l2.75 2" />
      </svg>
      <p>
        <strong>{{ info.recipe.totalTime }}'</strong>
      </p>
    </div>
    <div class="ingredients">
      <p
        v-for="(ingredient, index) in info.recipe.ingredientLines"
        :key="index"
      >
        - {{ ingredient }}
      </p>
    </div>
    <h2>How to make it (Example)</h2>
    <div class="process">
      <p>1. Preheat your oven to 375°F (190°C).</p>
      <p>
        2. In a pan, sauté the spinach in olive oil until wilted. Add garlic
        powder, salt, and pepper for flavor.
      </p>
      <p>
        3. Cut a pocket into each chicken breast. Be careful not to cut through
        entirely.
      </p>
      <p>
        4. Stuff each chicken breast with the sautéed spinach and feta cheese.
      </p>
      <p>5. Seal the pockets with toothpicks.</p>
      <p>
        6. Season the outside of the chicken breasts with a bit of salt and
        pepper.
      </p>
      <p>
        7. Place the stuffed chicken breasts on a baking sheet and bake for
        25-30 minutes, or until the chicken is cooked through and the cheese is
        bubbly and golden.
      </p>
      <p>
        8. Remove the toothpicks and serve your delicious Spinach and Feta
        Stuffed Chicken.
      </p>
    </div>
    <div class="meal-tags">
      <span
        v-for="(type, index) in info.recipe.mealType"
        :key="index"
        class="meal-type tag"
        >{{ type.toUpperCase() }}</span
      >
      <span
        v-for="(type, index) in info.recipe.cuisineType"
        :key="index"
        class="cuisine-type tag"
        >{{ type.toUpperCase() }}</span
      >
      <span
        v-for="(label, index) in info.recipe.dietLabels"
        :key="index"
        class="diet-label tag"
        >{{ label.toUpperCase() }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MealDetailsInfo",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timePrepZero: false,
    };
  },
  mounted() {
    this.timePrepZero = this.isTimePrepZero();
  },
  methods: {
    isTimePrepZero() {
      return this.info.recipe.totalTime === 0;
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: var(--font-family-archivo-black);
  font-size: var(--font-size-xl);
  margin: 0px 0px 30px 0px;
  -webkit-text-stroke-width: 1px;
  -moz-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--color-ferra);
  -moz-text-stroke-color: var(--color-ferra);
  text-shadow: 0.3rem 0.3rem var(--color-salmon);
  color: var(--color-grandis);
}

h2 {
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-lg);
  color: var(--color-ferra);
}

p {
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-md);
}

.meal-info .ingredients {
  padding: 30px 0px;
}

.meal-info .process {
  padding: 30px 0px;
}

.prep-time {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;

  & p {
    color: var(--color-salmon);
    margin-left: 0.5rem;
  }
}

.meal-tags {
  display: flex;
  gap: 1rem;

  & .meal-type {
    background: var(--color-thunderbird);
  }

  & .diet-label {
    background: var(--color-green);
  }

  & .cuisine-type {
    background: var(--color-faded-jade);
  }

  & .tag {
    padding: 0.5rem;
    border-radius: 10px;
    color: white;
  }
}

.icon-tabler-alarm {
  stroke: var(--color-salmon);
  width: 48px;
  height: 48px;
}

@media screen and (width >=768px) {
  h1 {
    margin-top: 30px;
    font-size: var(--font-size-lg);
  }

  h2 {
    font-size: var(--font-size-nl);
  }

  /* p {
    font-size: var(--font-size-ns);
  } */
}

@media screen and (width >=1400px) {
  h1 {
    margin-top: 30px;
    font-size: var(--font-size-xl);
  }

  h2 {
    font-size: var(--font-size-lg);
  }
}

@media screen and (width >=2300px) {
  p {
    font-size: var(--font-size-normal);
  }
}
</style>
