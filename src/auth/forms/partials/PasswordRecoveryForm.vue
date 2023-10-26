<template>
  <div>
    <h2>Recuperación de Correo</h2>
    <p>Ingresa tu correo electrónico y te enviaremos instrucciones para recuperar tu cuenta.</p>
    <CustomInput name="email" type="email"/>
    <button @click="resetPassword">Recuperar Contraseña</button>
    <button @click="goToLogin">LOGIN</button>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import CustomInput from "../../components/CustomInput.vue";
import { passwordRecoveryValidationSchema } from '../schemas/passwordRecovery.scheme'

const {values} = useForm({
  validationSchema: passwordRecoveryValidationSchema
})

const resetPassword = () => {
  
  sendPasswordResetEmail(getAuth(), values.email)
    .then(() => alert('mail enviado'), () => alert('error envio'))
};

const goToLogin = () => { alert('hola ka se')}
</script>
