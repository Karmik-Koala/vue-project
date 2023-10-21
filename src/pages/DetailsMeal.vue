<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <SkeletonLoader v-if="loading" />
  <div v-else class="container">
    <section class="meal-section">
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
              <p> <strong>PROTEINS:</strong> {{ (info.recipe.totalNutrients.PROCNT.quantity).toFixed(2) }}g</p>
            </div>
            <div class="fat">
              <div class="square"></div>
              <p> <strong>FAT:</strong> {{ (info.recipe.totalNutrients.FAT.quantity).toFixed(2) }}g</p>
            </div>
            <div class="carbs">
              <div class="square"></div>
              <p> <strong>CARBS:</strong> {{ (info.recipe.totalNutrients.CHOCDF.quantity).toFixed(2) }}g</p>
            </div>
          </div>
        </div>
      </div>
      <div class="meal-info">
        <div class="title-favourites">
          <h1>{{ info.recipe.label }}</h1>
          <button class="button-favourites">
            <svg class="heart" viewBox="0 0 24 24">
              <path fill="#000000"
                d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
            </svg>
          </button>
        </div>
        <h2> Ingredients list</h2>
        <div class="ingredients">
          <p v-for="(ingredient, index) in info.recipe.ingredientLines" :key=index> - {{ ingredient }}</p>
        </div>
        <div class="process">
          <h2> How to make it</h2>
          <p> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el
            texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se
            dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un
            libro
            de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
            electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las
            hojas
            "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como
            por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
        </div>
      </div>
    </section>

    <section class="related">
      <h1> You might also like </h1>
      <div class="cards-container">
        <ListRender :items="[info.recipe, info.recipe, info.recipe, info.recipe]" />
      </div>
    </section>
  </div>
</template>

<script>

import { getRecipeeInfo } from "../services/meals.js"
import SkeletonLoader from '../partials/detailsMeal/SkeletonLoader.vue'
import ListRender from '../partials/listMeals/ListRender.vue'

export default {
  name: "DetailsMeal",
  components: {
    SkeletonLoader,
    ListRender
  },
  data() {
    return {
      loading: true,
      info: '',
    };
  },
  async mounted() {
    this.loading = true
    const info = await getRecipeeInfo(this.$route.params.id)
    this.info = info
    this.loading = false
  },
};
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

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-ferra);
  padding: 2%;

  & .meal-section {
    display: flex;
    flex-direction: row;
    gap: 5%;

    & .meal-card {
      display: flex;
      flex-direction: column;
      background: rgb(255, 255, 255);
      border-radius: 10px;
      width: 100%;

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

    .meal-info .title-favourites {
      display: flex;
      justify-content: space-between;

      & .button-favourites {
        color: var(--color-ferra);
        width: 45px;
        height: 45px;
        background: transparent;
        border: none;
      }

      .button-favourites:hover .heart {
        filter: invert(34%) sepia(73%) saturate(1219%) hue-rotate(336deg) brightness(94%) contrast(83%);
      }
    }

    & .meal-info .ingredients {
      padding: 30px 0px;
    }

    & .meal-info .process p {
      padding: 30px 0px;
    }
  }

  & .related h1 {
    margin: 70px 0px;
  }
}
</style>
