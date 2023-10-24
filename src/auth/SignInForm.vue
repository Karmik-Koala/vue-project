<template>
  <FormHeader title="CREATE NEW ACCOUNT" subtitle="we are glad to create your account with us" />
  <CustomInput v-bind="email"/>
  <CustomInput :type="'password'" v-bind="password"/>
  <pre>
    values: {{ values }}
  </pre>
  <pre>
    errors: {{ errors }}
  </pre>
</template>

<script setup>
import FormHeader from './FormHeader.vue';
import {signInValidationSchema} from './forms/schemas/signIn.schema'
import CustomInput from './CustomInput.vue';
import { useForm } from 'vee-validate';

const {values, errors, defineInputBinds} = useForm({
  validationSchema: signInValidationSchema
})

const email = defineInputBinds('email');
const password = defineInputBinds('password')


</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

[auth] {
  width: 50px;
  background-color: initial;
  border: initial;
  color: initial;
  box-shadow: initial;
  cursor: pointer;
}

[auth] img {
  max-width: 100%;
}

.input-section {
  margin-bottom: 20px;
}

.auth-icons-container {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;

  & button {
    margin-right: 10px;
    margin-left: 10px;
  }
}

.login-button {
  padding: 10px;
  width: 10rem;
}
</style>
