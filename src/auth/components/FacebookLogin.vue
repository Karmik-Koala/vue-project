<template>
  <button @click="loginFacebook" class="social-login-button">
    <img src="facebook-icon.png" alt="" srcset="">
  </button>
</template>

<script setup>
import { FacebookAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { setAuth } from '../utils/setAuth';
import { useRouter } from 'vue-router';

const googleProvider = new FacebookAuthProvider()
const auth = getAuth();
const router = useRouter()

const loginFacebook = async () => {
  try {
  const result = await signInWithPopup(auth, googleProvider);
    const {
      user: { email, uid, accessToken },
    } = result;
    FacebookAuthProvider.credentialFromResult(result);
        setAuth(email, uid, accessToken)
    router.push('/')
  } catch (error) {
    console.log(error)
  }
}

</script>

<style scoped>
.social-login-button {
  width: 50px;
  border: none;
  border-style: none;
  border-width: 0;
  border-color: transparent;
  cursor: pointer;
  background: none;
  background-color: transparent;
}

.social-login-button img {
  max-width: 100%;
}
</style>