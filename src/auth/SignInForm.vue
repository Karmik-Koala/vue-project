<template>
  <form v-if="!userSignUp" @submit.prevent="onSubmit" class="form">
    <h1>WELLCOME</h1>
    <h2>we are glad to see you back with us</h2>
    <div class="form-group"><label for="email">Email</label><input id="email" v-model="email" type="text"></div>
    <div class="form-group"><label for="password">Password</label><input id="password" v-model="password" type="password">
    </div>
    <button type="submit" :disabled="!formIsValid">LOGIN</button>
    <p>Don't have an account <span @click="signUpEmmit">SIGN UP</span></p>
    <button auth="google" @click="loginGoogle"><img src="google-icon.png" alt=""></button>
    <button auth="github" @click="loginGithub"><img src="github-icon.png" alt=""></button>
  </form>
</template>

<script>
import { useAuthStore } from './stores/authStore'
import { mapState, mapActions } from 'pinia';
import { EMAIL_PATTERN, PASSWORD_MIN_LENGTH } from './constants/loginRestrictions'
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'SignInForm',
  emits: ['signUp'],
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState(useAuthStore, ['getUserAuth']),
    formIsValid() {
      return (
        this.mailIsValid &&
        this.passwordIsValid
      );
    },
    mailIsValid() {
      return EMAIL_PATTERN.test(this.email) && this.email.length > 0;
    },
    passwordIsValid() {
      return this.password.length > PASSWORD_MIN_LENGTH
    }
  },
  methods: {
        ...mapActions(useAuthStore, ['setUserAuth']),
    async onSubmit() {
      if (!this.formIsValid) return;
      console.log('Send my form!');
      await this.authUser()
    },
    async authUser() {
      try {
        const auth = getAuth()
        const authCredential = await signInWithEmailAndPassword(auth, this.email, this.password)
        this.setUserAuth(authCredential.user.accessToken)
      } catch (error) {
        console.error(error.message);
      }
    },
    async loginGoogle() {
      const googleProvider = new GoogleAuthProvider()
      const auth = getAuth()
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result)
          this.setUserAuth(credential?.accessToken)
        })
        .catch(() => alert('google login failed'))
    },
    async loginGithub() {
      const githubProvider = new GithubAuthProvider()
      const auth = getAuth()
      signInWithPopup(auth, githubProvider)
        .then((result) => {
          const credential = GithubAuthProvider.credentialFromResult(result)
          const token = credential?.accessToken
          this.setUserAuth(token)
        })
        .catch(() => alert('github failed'))
    },
    signUpEmmit(){
      this.$emit('signUp')
    }
  },

}
</script>

<style scoped>
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
</style>