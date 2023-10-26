<template>
  <div class="form-header">
    <h1 class="title">{{ title }}</h1>
    <h2 class="subtitle">{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  name: "FormHeader",
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.form-header {
  position: relative;
  margin-bottom: 20px;
  .title {
    font-family: var(--font-family-archivo-black);
    font-size: var(--font-size-xl);
    -webkit-text-stroke-width: 1px;
    -moz-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--color-ferra);
    -moz-text-stroke-color: var(--color-ferra);
    text-shadow: 0.3rem 0.3rem var(--color-salmon);
    color: var(--color-grandis);
    text-align: center;
    margin-bottom: 5px;
  }

  & .subtitle {
    font-family: var(--font-family-archivo-black);
    font-size: var(--font-size-xs);
    background: linear-gradient(
      to right,
      var(--color-ferra) 0%,
      var(--color-ferra-light) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
}
</style>
