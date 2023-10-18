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
