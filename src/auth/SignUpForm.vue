<template>
  <FormHeader
    title="CREATE NEW ACCOUNT"
    subtitle="we are glad to create your account with us"
  />
  <CustomInput name="email" type="email"/>
  <CustomInput name="password1" type="password"/>
  <CustomInput name="password2" type="password"/>

  <pre>values: {{ values }}</pre>
  <pre>errors: {{ errors }}</pre>


</template>

<script setup>
import {useForm} from 'vee-validate'
import { signOnValidationSchema } from './forms/schemas/signOn.schema'
import FormHeader from './FormHeader.vue';
import CustomInput from './CustomInput.vue'

const {values, errors } = useForm({
  validationSchema: signOnValidationSchema
})

</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.create-account-button {
  width: 15em;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
}

.input-section {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
