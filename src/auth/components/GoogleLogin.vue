<template>
  <button class="social-login-button" @click="loginGoogle">
    <img :src="GoogleIcon" alt="google icon" />
  </button>
</template>

<script setup>
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { setAuth } from "../utils/setAuth";
import { useRouter } from "vue-router";
import GoogleIcon from "@/assets/images/google-icon.png";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const router = useRouter();

const loginGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const {
      user: { email, uid, accessToken },
    } = result;
    GoogleAuthProvider.credentialFromResult(result);
    setAuth(email, uid, accessToken);
    router.push("/");
  } catch (error) {
    alert("google login failed");
  }
};
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
