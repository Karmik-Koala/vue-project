<template>
  <form v-if="!userSignUp" class="form" @submit.prevent="onSubmit">
    <FormHeader title="WELLCOME" subtitle="we are glad to see you back with us" />
<div class="input-section">

  <BaseInput v-model="email" label="Email" />
  <BaseInput v-model="password" label="Password" type="password" />
</div>


  <BaseButton class="login-button">LOGIN</BaseButton>

      
      <div class="auth-icons-container">
        <button auth="google" @click="loginGoogle"><img src="google-icon.png" alt=""></button>
        <button auth="github" @click="loginGithub"><img src="github-icon.png" alt=""></button>
      </div>
      <p>Don't have an account <BaseButton @click="signUpEmmit">SIGN UP</BaseButton></p>
  </form>
</template>

<script>
import { useAuthStore } from './stores/authStore'
import { mapState, mapActions } from 'pinia';
import { EMAIL_PATTERN, PASSWORD_MIN_LENGTH } from './constants/loginRestrictions'
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
import BaseButton from '../shared/components/BaseButton.vue'
import BaseInput from './BaseInput.vue';
import FormHeader from './FormHeader.vue';
export default {
  name: 'SignInForm',
  components: { BaseButton, BaseInput, FormHeader },
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
    signUpEmmit() {
      this.$emit('signUp')
    },
    onInput() {

    }
  },

}
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

  & button{
    margin-right: 10px;
    margin-left: 10px;
  }
}

.login-button {
  padding: 10px;
  width: 10rem;
}
</style>