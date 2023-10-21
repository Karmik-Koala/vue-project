<template>
  <div class="card">
    <div class="image loading"></div>
    <div class="content">
      <h3 class="loading"></h3>
      <div class="description loading"></div>
      <div class="description loading"></div>
      <div class="description loading"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardImageSkeleton",
};
</script>

<style scoped>
.card {
  width: 100%;
  background-color: var(--color-white);
  border-radius: 12px;
  overflow: hidden;
}

.image {
  height: 235px;
}

.image img {
  display: block;
  width: 100%;
  height: inherit;
  object-fit: cover;
}

.content {
  padding: 16px 24px 24px 24px;
}

h3 {
  font-size: 1.5rem;
  line-height: 1.5rem;
  min-height: 1.6rem;
  border-radius: 50px;
  animation-delay: 0.05s;
}

.description {
  margin: 1rem 0 0;
  font-size: 1rem;
  line-height: 1.4rem;
  min-height: 1rem;
  border-radius: 50px;
  animation-delay: 0.06s;
}
</style>
