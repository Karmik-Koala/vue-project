<template>
  <div class="login-container">
    <div class="form-container">
      <SignInForm v-if="userAlreadyExist"/>
      <SignUpForm v-else/>
    </div>
    <div class="image-container">
      <img src="/logo-app.webp" alt="">
    </div>
  </div>
</template>

<script>
import SignInForm from './SignInForm.vue'
import SignUpForm from './SignUpForm.vue'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {useAuthStore} from './stores/authStore'
import { mapActions } from 'pinia'



export default {
  name: 'AuthView',
  components: {
    SignInForm,
    SignUpForm
  },
  data() {
    return {
      userAlreadyExist: true
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['setUserAuth']),
    async authUser() {
      try {
        const auth = getAuth()
        const authCredential = await signInWithEmailAndPassword(auth, this.email, this.password)
        this.setUserAuth(authCredential.user.accessToken)
      } catch (error) {
        console.error(error.message);
      }
    }
  }
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
