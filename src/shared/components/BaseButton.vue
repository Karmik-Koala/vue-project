<template>
  <button class="base-button" :type="type" :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      default: 'submit',
      type: String
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['clicked'],

}
</script>

<style scoped>
.base-button {
  font-family: var(--font-family-content);
  background-color: var(--color-grandis);
  color: var(--color-ferra);
  padding: 5px 20px;
  border: 0;
  border-radius: 25px;
  text-wrap: nowrap;

  &:hover {
    background-color: var(--color-salmon);
    cursor: pointer;
    color: var(--color-white);
    transition: all 0.3s ease 0s, left 0.3s ease 0s;
  }

  &:disabled{
    background-color: rgb(179, 172, 172);
    
  }
}
</style>