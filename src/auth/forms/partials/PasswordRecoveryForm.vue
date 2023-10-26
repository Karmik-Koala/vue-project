<template>
    <FormHeader title="ACCOUNT RECOVERY" subtitle="You're so forgetful..."/>
    <form  class="form"></form>
    <p class="recovery-message">Enter your email address, and we will send you instructions to recover your account.</p>
    <div class="recovery-group">
      <CustomInput name="email" type="email"/>
      <BaseButton @click.prevent="resetPassword" :disabled="Object.keys(errors).length || !values.email">SEND</BaseButton>
    </div>

</template>

<script setup>
import { useForm } from "vee-validate";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import CustomInput from "../../components/CustomInput.vue";
import { passwordRecoveryValidationSchema } from '../schemas/passwordRecovery.scheme'
import FormHeader from "../../components/FormHeader.vue";
import BaseButton from "../../../shared/components/BaseButton.vue";
import { SIGN_IN_FORM } from "../constants/formTypes";


const emit = defineEmits(['display-form'])
const {values, errors} = useForm({
  validationSchema: passwordRecoveryValidationSchema
})

const resetPassword = () => {
  sendPasswordResetEmail(getAuth(), values.email)
    .then(() => alert('mail enviado'), () => alert('error envio'))
    .then(() => emit('display-form', SIGN_IN_FORM))
};
</script>

<style scoped>
.form {

  & * {
    margin-bottom: 1rem;
  }
}

.recovery-message {
  margin-bottom: 1rem;
}

.button-group {
  display: flex;
  justify-content: space-around;
}

.recovery-group {
  display: flex;
  gap: 1rem;
  flex-direction: column;

}

.recovery-group > :nth-child(2) {
  margin-left: auto;
}

@media screen and (width >=768px) {
  .recovery-group {
  display: flex;
  align-items: end;
}
  .sign-up-msg {
    text-align: right;
  }

  .form {
    text-align: center;
  }
}

@media screen and (width >=1024px) {}

@media screen and (width >=1200px) {}

@media screen and (width >=2560px) {}</style>