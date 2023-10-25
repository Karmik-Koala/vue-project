<template>
  <FormHeader title="CREATE NEW ACCOUNT" subtitle="we are glad to create your account with us" />
  <form action="" class="form">

    <CustomInput name="email" type="email"/>
    <CustomInput name="password" type="password"/>
    <BaseButton @click="authUser" class="login-button">LOGIN</BaseButton>
  </form>
  <div class="socialmedia-auth-container">
    <GoogleLogin/>
    <GithubLogin/>
    <FacebookLogin/>
  </div>
  <p class="sign-up-msg">Don't have an account <BaseButton @click="$emit('signUp')">SIGN UP</BaseButton></p>
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
import { useRouter } from 'vue-router';

const {values, errors} = useForm({
  validationSchema: signInValidationSchema
})

const router = useRouter()

const authUser = async () => {
  try {
    const auth = getAuth()
    const {user: {accessToken, uid, email}} = await signInWithEmailAndPassword(auth, values.email, values.password)
    setAuth(email, uid, accessToken)
    router.push('/')
  } catch (error) {
    alert(error)
  }
}

defineEmits(['signUp'])

</script>

<style scoped>

.login-button {
  padding: 10px;
  width: 10rem;
}

.socialmedia-auth-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
}

.form {
  text-align: center;
  margin-bottom: 2rem;

  & * {
    margin-bottom: 1rem;
  }
}

.sign-up-msg {
  text-align: right;
}



@media screen and (width >=768px) {}

@media screen and (width >=1024px) {}

@media screen and (width >=1200px) {}

@media screen and (width >=2560px) {}
</style>
