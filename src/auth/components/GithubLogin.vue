<template>
  <button class="social-login-button" @click="loginGithub">
    <img :src="GithubIcon" alt="github icon" />
  </button>
</template>

<script setup>
import { GithubAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { setAuth } from "../utils/setAuth";
import { useRouter } from "vue-router";
import GithubIcon from "@/assets/images/github-icon.png";

const githubProvider = new GithubAuthProvider();
const auth = getAuth();
const router = useRouter();

const loginGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    const {
      user: { email, uid, accessToken },
    } = result;
    GithubAuthProvider.credentialFromResult(result);
    setAuth(email, uid, accessToken);
    router.push("/");
  } catch (error) {
    console.log(error);
    alert("github failed");
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
