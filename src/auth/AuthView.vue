<template>
  <div class="login-container">
    <div class="form-container"  >
      <SignInForm v-if="userAlreadyExist" @sign-up="handleSignUp"/>
      <SignUpForm v-else @sign-in="handleSignIn"/>
    </div>
    <div class="image-container">
      <img src="/logo-app.webp" alt="">
    </div>
  </div>
</template>

<script>
import SignInForm from './SignInForm.vue'
import SignUpForm from './SignUpForm.vue'

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
    handleSignUp(){
      this.userAlreadyExist = false
    },
        handleSignIn() {
      this.userAlreadyExist = true
    }
  },
}

</script>

<style scoped>
.login-container {
  width: clamp(700px, 50vw, 1200px);
  padding: 1rem;
  display: flex;
  background-color: white;
  border-radius: 20px;
  margin-right: auto;
  margin-left: auto;
  
}

.form-container {
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
}



.image-container {
  flex-basis: 50%;
}

.image-container img {
  max-width: 100%;
}


</style>
