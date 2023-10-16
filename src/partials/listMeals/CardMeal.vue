<template>
  <article class="card">
    <div class="card-info-hover">
      <svg class="card-favorite" viewBox="0 0 24 24">
        <path
          fill="#000000"
          d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
        />
      </svg>
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
    </div>
  </article>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "CardMeal",
  components: {
    RouterLink,
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
    padding: 16px;
    width: 100%;
    opacity: 0;
    top: 0;

    & .card-favorite {
      width: 24px;
    }
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
    height: 235px;
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
    z-index: 2;
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
  }

  &:hover .card-info {
    background-color: transparent;
    position: relative;
  }
}
</style>
