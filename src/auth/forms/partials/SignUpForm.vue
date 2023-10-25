<template>
  <FormHeader
    title="CREATE NEW ACCOUNT"
    subtitle="we are glad to create your account with us"
  />
  <form action="" class="form">
    <CustomInput name="email" type="email"/>
    <CustomInput name="password1" type="password"/>
    <CustomInput name="password2" type="password"/>
    <div class="button-group">
      <BaseButton @click="goBack">GO BACK</BaseButton>
      <BaseButton @click="signUp">SIGN UP</BaseButton>
    </div>
  </form>
</template>

<script setup>
import {useForm} from 'vee-validate'
import { useRouter } from 'vue-router';
import { signOnValidationSchema } from '../schemas/signOn.schema'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import FormHeader from '../../components/FormHeader.vue';
import CustomInput from '../../components/CustomInput.vue'
import BaseButton from '../../../shared/components/BaseButton.vue';
import { setAuth } from '../../utils/setAuth';

const router = useRouter()
const {values, errors } = useForm({
  validationSchema: signOnValidationSchema
})

const signUp = async () => {
  try {
    const { email, user: { uid, accessToken } } = await createUserWithEmailAndPassword(getAuth(), values.email, values.password1 )
    setAuth(email, uid, accessToken)
    router.push('/')
  } catch (error) {
    console.error(error)
  }
}

const goBack = () => {
  
}

</script>

<style scoped>
  .form {
    text-align: center;

    & * {
      margin-bottom: 1rem;
    }
  }

  .button-group {
    display: flex;
    justify-content: space-around;
  }
@media screen and (width >=768px) {}

@media screen and (width >=1024px) {}

@media screen and (width >=1200px) {}

@media screen and (width >=2560px) {}
</style>
