<template>
  <div class="form-group">
    <label :for="name" v-beautify-text>{{ name }}</label>
    <div class="input-and-tooltip">
      <input v-model="value" :type="type || 'text'" :class="{inputError: errors.length}" class="input" />
      <BaseTooltip v-show="errors.length" class="error-tooltip">
        <ul v-if="errors.length">
          <li v-for="error in errors" :key="error" :class="{error}">{{ error }}</li>
        </ul>
      </BaseTooltip>
      <div class="underneath-error-container">
        <span v-for="error in errors" :key="error" class="underneath-error-message">{{ error }}</span>
      </div>
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
.form-group {
  display: flex;
  flex-direction: column;
}

.input-and-tooltip {
  display: flex;
  flex-direction: column;
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

  .error-tooltip {
    display: none;
  }

.underneath-error-message {
  font-size: var(--font-size-xxs);
  color: red;
}

span {
  display: block;
}


@media screen and (width >= 768px) {

  .input-and-tooltip {
    flex-direction: row;
      align-items: center;
  }
  .error-tooltip {
    display: initial;
  }

  .underneath-error-message {
    display: none;
  }

  .form-group {
    display: flex;
    justify-content: center;

  }
}



</style>