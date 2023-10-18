<template>
  <form v-if="!userSignUp" @submit.prevent="onSubmit" class="form">
    <h1>WELLCOME</h1>
    <h2>we are glad to create your account with us</h2>
    <div class="form-group"><label for="email">Email</label><input id="email" v-model="email" type="text"></div>
    <div class="form-group"><label for="password">Password</label><input id="password" v-model="password1" type="password">
    </div>
        <div class="form-group"><label for="password">Password</label><input id="password" v-model="password2" type="password">
      </div>
    <button type="submit" :disabled="!formIsValid">LOGIN</button>
  </form>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { mapActions, mapState } from 'pinia';
import { useAuthStore } from "./stores/authStore";
import { EMAIL_PATTERN, PASSWORD_MIN_LENGTH } from "./constants/loginRestrictions";


export default {
  name: 'SignOnForm',
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
  },
  
}
</script>

<style scoped></style>