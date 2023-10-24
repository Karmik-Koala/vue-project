<template>
  <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @blur="$emit('blur')" />
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  modelValue: String,
});

defineEmits(['update:modelValue', 'blur']);
</script>

<style scoped>

</style>