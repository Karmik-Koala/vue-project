<template>
  <div class="form-control">
    <label v-if="label" class="label">{{ label }}</label>
    <input v-bind="$attrs" :value="modelValue" :placeholder="label" :class="input" :type="type" @input="$emit('update:modelValue', $event.target.value)"
    class="field">
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style scoped>
.form-control{
  display: flex;
  flex-direction: column;
  padding: 10px;
}
  .label {
    font-size: var(--font-size-xxs);
  }

  .field {
    padding: 7px;
    border-radius: 5px;
    border: 0;
    background-color: var(--color-gray);
    outline: none;
    font-family: var(--font-family-roboto);
  }
</style>