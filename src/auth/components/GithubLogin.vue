<template>
  <button @click="loginGithub" class="social-login-button">
    <img src="github-icon.png" alt="" srcset="">
  </button>
</template>

<script setup>
import { GithubAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { setAuth } from '../utils/setAuth';

const githubProvider = new GithubAuthProvider();
const auth = getAuth();


const loginGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    const {
      user: { email, uid, accessToken },
    } = result;
    GithubAuthProvider.credentialFromResult(result);
        setAuth(email, uid, accessToken)
    // this.setAccessToken(idToken);
    // this.setUser({ email, uid });
    // this.$router.push("/");
  } catch (error) {
    console.log(error);
    alert("github failed");
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