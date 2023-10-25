<template>
  <FormHeader title="CREATE NEW ACCOUNT" subtitle="we are glad to create your account with us" />
  <CustomInput name="email" type="email"/>
  <CustomInput name="password" type="password"/>
  <BaseButton @click="authUser" class="login-button">LOGIN</BaseButton>
  <div class="socialmedia-auth-container">
    <GoogleLogin/>
    <GithubLogin/>
    <FacebookLogin/>
  </div>
  <p>Don't have an account <BaseButton @click="$emit('signUp')">SIGN UP</BaseButton></p>
</template>

<script setup>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'vee-validate';
import {signInValidationSchema} from '../schemas/signIn.schema'
import FormHeader from '../../components/FormHeader.vue';
import BaseButton from '../../../shared/components/BaseButton.vue'
import CustomInput from '../../components/CustomInput.vue'
import GoogleLogin from '../../components/GoogleLogin.vue';
import GithubLogin from '../../components/GithubLogin.vue';
import FacebookLogin from '../../components/FacebookLogin.vue';
import { setAuth } from '../../utils/setAuth';

const {values, errors} = useForm({
  validationSchema: signInValidationSchema
})

const authUser = async () => {
  try {
    const auth = getAuth()
    const {user: {accessToken, uid, email}} = await signInWithEmailAndPassword(auth, values.email, values.password)
    setAuth(email, uid, accessToken)
  } catch (error) {
    alert(error)
  }
}

defineEmits(['signUp'])

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
