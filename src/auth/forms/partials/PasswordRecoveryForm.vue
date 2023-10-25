<template>
  <div>
    <h2>Recuperación de Correo</h2>
    <p>Ingresa tu correo electrónico y te enviaremos instrucciones para recuperar tu cuenta.</p>
    <CustomInput name="email" type="email"/>
    <button @click="fnAlert">Recuperar Contraseña</button>
  </div>
</template>

<script setup>
import { projectAuth } from "@/firebase/config";
import { useForm } from "vee-validate";
import CustomInput from "../../components/CustomInput.vue";
import { passwordRecoveryValidationSchema } from '../schemas/passwordRecovery.scheme'

const {values} = useForm({
  validationSchema: passwordRecoveryValidationSchema
})

const fnAlert = () => alert('hola')
const resetPassword = () => {
  projectAuth
    .sendPasswordResetEmail(values.email)
    .then(() => {
      alert("Se han enviado instrucciones a tu correo electrónico.");
    })
    .catch((error) => {
      console.error(error.message);
      alert("Ha ocurrido un error. Verifica tu dirección de correo electrónico.");
    });
};
</script>
