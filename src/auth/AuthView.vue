<template>
  <div class="login-container">
    <div class="form-container">

      <form action="" class="form">
        <h1>WELLCOME</h1>
        <h2>we are glad to see you back with us</h2>
        <div class="form-group"><label for="email">Email</label><input id="email" v-model="email" type="text"></div>
        <div class="form-group"><label for="password">Password</label><input id="password" v-model="password" type="password"></div>
        <button type="submit">LOGIN</button>
        <p>Don't have an account <span>SIGN UP</span></p>
      </form>
    </div>
    <div class="image-container">
      <img src="/logo-app.webp" alt="">
    </div>
  </div>
</template>

<script>
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
export default {
  name: 'AuthView', 
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async authUser() {
      try {
        const auth = getAuth()
        const authCredential = await signInWithEmailAndPassword(auth, this.email, this.password)
        authCredential? alert('logged') : alert('not logged')
      } catch (error) {
        console.error(error.message)
      }
    }
  }
}

</script>

<style scoped>
.login-container{
  width: clamp(700px, 50vw , 1200px);
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

.image-container{
  flex: 1;
}

.image-container img {
  max-width: 100%;
}

</style>