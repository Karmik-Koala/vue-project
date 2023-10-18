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
            <span> <strong>Total Calories:</strong> {{ (info.recipe.calories / 1000).toFixed(2) }} kcal</span>
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
        <h1>{{ info.recipe.label }}</h1>
        <h2> Ingredients list</h2>
        <div class="ingredients">
          <p v-for="(ingredient, index) in info.recipe.ingredientLines" :key=index> {{ ingredient }}</p>
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
      <div class="recipe-card"> </div>
    </section>
  </div>
</template>

<script>

import { getRecipeeInfo } from "../services/meals.js"
import SkeletonLoader from '../partials/detailsMeal/SkeletonLoader.vue'

export default {
  name: "DetailsMeal",
  components: {
    SkeletonLoader
  },
  data() {
    return {
      loading: true,
      info: '',
      nameToRelated: ''
    };
  },
  async mounted() {
    this.loading = true
    const info = await getRecipeeInfo(this.$route.params.id)
    this.info = info
    console.log(this.info.recipe.label.split(' ')[0])
    this.loading = false
  },
  methods: {

  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');

.container {
  display: flex;
  flex-direction: column;
  font-family: 'Mukta', sans-serif;
  justify-content: center;
  color: var(--color-ferra);

  & .meal-section {
    display: flex;
    flex-direction: row;
    gap: 60px;

    & .meal-card {
      display: flex;
      flex-direction: column;
      background: rgb(255, 255, 255);
      border-radius: 10px;

      & .meal-card-image {
        padding: 20px;
      }

      & img {
        height: 300px;
        width: 300px;
        box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 40%);
      }

      & .meal-card-container {
        padding: 20px;

        & .meal-card-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: var(--font-size-ns);

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
              background: rgb(209, 68, 58);
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

    & .meal-info .ingredients {
      font-size: var(--font-size-ns);
      padding: 30px 0px;
    }

    & .meal-info .process p {
      font-size: var(--font-size-ns);
      padding: 30px 0px;
    }

  }

  & .related {
    margin-top: 70px;
  }
}
</style>
