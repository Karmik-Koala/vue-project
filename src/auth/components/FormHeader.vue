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

  & .title {
    font-size: var(--font-size-xl);
    margin-bottom: 10px;
    text-align: center;
  }

  & .subtitle {
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    font-size: var(--font-size-xxs);
    text-align: center;
  }
}
</style>
