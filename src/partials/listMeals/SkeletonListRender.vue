<template>
  <div class="container">
    <div v-for="number in numCards" :key="number">
      <div class="card-container">
        <SkeletonCardImage />
      </div>
    </div>
  </div>
</template>

<script>
import SkeletonCardImage from "../../shared/components/skeletons/SkeletonCardImage.vue";

export default {
  name: "SkeletonListRender",
  components: {
    SkeletonCardImage,
  },
  props: {
    numCards: {
      type: Number,
      default: 20,
    },
  },
};
</script>

<style scoped>
.container {
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

@media screen and (width >= 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (width >= 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (width >= 1200px) {
  .container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (width >= 2560px) {
  .container {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
