<template>
  <FormHeader
    title="CREATE NEW ACCOUNT"
    subtitle="We are glad to create your account with us"
  />
  <form class="form">
    <CustomInput name="email" type="email"/>
    <CustomInput name="password" type="password"/>
    <CustomInput name="repeat_password" type="password"/>
    <div class="button-group">
      <BaseButton @click.prevent="goBack">GO BACK</BaseButton>
      <BaseButton @click.prevent="signUp">SIGN UP</BaseButton>
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
const {values } = useForm({
  validationSchema: signOnValidationSchema
})

const signUp = async () => {
  try {
    const { email, user: { uid, accessToken } } = await createUserWithEmailAndPassword(getAuth(), values.email, values.password )
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
    /* text-align: center; */

    & * {
      margin-bottom: 1rem;
    }
  }

  .button-group {
    display: flex;
    justify-content: space-around;
  }
@media screen and (width >=768px) {
  .sign-up-msg {
  text-align: right;
}
.form {
  text-align: center;
}
}

@media screen and (width >=1024px) {}

@media screen and (width >=1200px) {}

@media screen and (width >=2560px) {}
</style>
