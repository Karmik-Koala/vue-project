<template>
  <div class="form-group">
    <div class="info-group">
      <label :for="name" class="label" v-beautify-text>{{ name }}</label>
      <BaseTooltip v-show="errors.length" class="error-tooltip">
        <ul v-if="errors.length">
          <li v-for="error in errors" :key="error" :class="{ error }">{{ error }}</li>
        </ul>
      </BaseTooltip>
    </div>

    <div class="input-and-error-group">
      <input v-model="value" :type="type || 'text'" :class="{ inputError: errors.length }" class="input" />
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

const { value, errors } = useField(() => props.name, undefined);
</script>

<style scoped>
.form-group {
  --input-error-background-color: #fce4e4;
  --input-error-color: red;
  display: flex;
  flex-direction: column;
  font-family: var(--font-family-robot);
}

.input-and-error-group {
  display: flex;
  flex-direction: column;
}

.label {
  margin-bottom: 5px;
}

.input {
  border-radius: 10px;
  padding: 3px;
}

.input:focus {
  outline: none;
}

.inputError {
  border: 1px solid var(--input-error-color);
  background-color: var(--input-error-background-color);
}

.error {
  color: var(--input-error-color);
}

.error-tooltip {
  display: none;
}

.underneath-error-message {
  font-size: var(--font-size-xxs);
  color: var(--input-error-color);
}

span {
  display: block;
}


@media screen and (width >=768px) {

  .info-group {
    display: flex;
  }

  .form-group {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .info-group > :nth-child(2) {
    margin-left: auto;
  }

  .error-tooltip {
    display: initial;
  }

  .underneath-error-message {
    display: none;
  }

  .error {
    color: white;
    font-weight: bold;

  }
}
</style>