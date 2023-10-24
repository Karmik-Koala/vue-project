<template>
  <div class="form-group">
    <label :for="name"></label>
    <div class="input-and-tooltip">

      <input v-model="value" :type="type || 'text'" :class="{inputError: errors.length}" class="input" />
      <BaseTooltip v-show="errors.length">
        <ul v-if="errors.length">
          <li v-for="error in errors" :key="error" :class="{error}">{{ error }}</li>
        </ul>
      </BaseTooltip>
    </div>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';
import BaseTooltip from '../../shared/components/BaseTooltip.vue'

const props = defineProps({
  name: String,
  type: String,
});

// The `name` is returned in a function because we want to make sure it stays reactive
// If the name changes you want `useField` to be able to pick it up
const { value, errors } = useField(() => props.name, undefined);
</script>

<style scoped>

.input-and-tooltip {
  display: flex;
  align-items: center;
}
.input {
  border-radius: 10px;
  padding: 3px;
}
.inputError {
    border: 1px solid red;

}

.error {
  color: red;
}



</style>