<template>
  <div class="login-container">
    <div class="form-container">
      <form v-if="!userSignUp" @submit.prevent="onSubmit" class="form">
        <h1>WELLCOME</h1>
        <h2>we are glad to see you back with us</h2>
        <div class="form-group"><label for="email">Email</label><input id="email" v-model="email" type="text"></div>
        <div class="form-group"><label for="password">Password</label><input id="password" v-model="password"
            type="password"></div>
        <button type="submit" :disabled="!formIsValid" >LOGIN</button>
        <p>Don't have an account <span @click="toggleSignInToSignUp()">SIGN UP</span></p>
      </form>
    </div>
    <div class="image-container">
      <img src="/logo-app.webp" alt="">
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {useAuthStore} from './stores/authStore'
import {EMAIL_PATTERN, PASSWORD_MIN_LENGTH} from './constants/loginRestrictions'

const store = useAuthStore()

export default {
  name: 'AuthView',
  data() {
    return {
      email: '',
      password: '',
      userSignUp: false
    }
  },
  computed: {
    formIsValid() {
      return (
        this.mailIsValid &&
        this.passwordIsValid
      );
    },
    mailIsValid(){ 
      return EMAIL_PATTERN.test(this.email) && this.email.length > 0;
    },
    passwordIsValid(){
      return this.password.length > PASSWORD_MIN_LENGTH
    }
  },
  methods: {
    async authUser() {
      try {
        const auth = getAuth()
        const authCredential = await signInWithEmailAndPassword(auth, this.email, this.password)
        store.setUserAuth(authCredential.user)
      } catch (error) {
        console.error(error.message)
      }
    },
    async onSubmit() {
      if (!this.formIsValid) return;
      console.log('Send my form!');
      await this.authUser()
    },
    toggleSignInToSignUp(){
      this.userSignUp = !this.userSignUp
    }
  },

}

</script>

<style scoped>
.login-container {
  width: clamp(700px, 50vw, 1200px);
  display: flex;
  background-color: white;
  border-radius: 7px;
  margin-right: auto;
  margin-left: auto;

}

.form-container {
  display: flex;
  flex-direction: column;
}

.form {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.image-container {
  flex: 1;
}

.image-container img {
  max-width: 100%;
}
</style>