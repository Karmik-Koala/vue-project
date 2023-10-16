<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="`icon icon-tabler icon-tabler-search ${className}`"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    :stroke="color"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M21 21l-6 -6" />
  </svg>
</template>

<script>
export default {
  name: "SearchIcon",
  props: {
    className: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#597e8d",
    },
  },
};
</script>

<style scoped></style>
