<template>
  <form v-if="!userSignUp" @submit.prevent="onSubmit" class="form">
    <FormHeader title="CREATE NEW ACCOUNT" subtitle="we are glad to create your account with us"/>
    <div class="input-section">
      <BaseInput v-model="email" label="Email" />
      <BaseInput v-model="password1" label="Password" type="password"/>
      <BaseInput v-model="password2" label="Repeat Password" type="password"/>
      <BaseButton class="create-account-button">CREATE ACCOUNT</BaseButton>
    </div>  
    <p>Have an account? <BaseButton @click="signInEmmit">SIGN IN</BaseButton></p>
  </form>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { mapActions, mapState } from 'pinia';
import { useAuthStore } from "./stores/authStore";
import { EMAIL_PATTERN, PASSWORD_MIN_LENGTH } from "./constants/loginRestrictions";
import BaseInput from './BaseInput.vue'
import BaseButton from "../shared/components/BaseButton.vue";
import FormHeader from "./FormHeader.vue";

export default {
  name: 'SignOnForm',
  components: {
    BaseInput,
    BaseButton,
    FormHeader
  },
  emits: ['sign-in'],
    data() {
    return {
      email: '',
      password1: '',
      password2: ''
    }
  },
  computed: {
    ...mapState(useAuthStore, ['getUserAuth']),
    formIsValid() {
      return (
        this.mailIsValid &&
        this.passwordIsValid &&
        this.passwordsAreEqual
      );
    },
    mailIsValid() {
      return EMAIL_PATTERN.test(this.email) && this.email.length > 0;
    },
    passwordIsValid() {
      return this.password1.length > PASSWORD_MIN_LENGTH && this.password2.length > PASSWORD_MIN_LENGTH
    },
    passwordsAreEqual(){
      return this.password1 === this.password2
    }
  },
  methods: {
        ...mapActions(useAuthStore, ['setUserAuth']),
    signUpNewUser(){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password1)
        .then((userCredential) => {
          this.setUserAuth(userCredential.user.accessToken)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage)
        });
    },
            async onSubmit() {
      if (!this.formIsValid) return;
      console.log('Send my form!');
      await this.authUser()
    },
    signInEmmit(){
      this.$emit('signIn')
    }
  },
  
}
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