<template>
  <FormHeader
    title="CREATE NEW ACCOUNT"
    subtitle="we are glad to create your account with us"
  />


</template>

<script setup>
import FormHeader from './FormHeader.vue';
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
