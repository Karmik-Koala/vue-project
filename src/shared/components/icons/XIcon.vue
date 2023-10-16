<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="`icon icon-tabler icon-tabler-x ${className}`"
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
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
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
