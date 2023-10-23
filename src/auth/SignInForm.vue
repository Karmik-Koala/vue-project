<template>
  <form class="form" @submit.prevent="onSubmit">
    <FormHeader
      title="WELCOME"
      subtitle="we are glad to see you back with us"
    />
    <div class="input-section">
      <BaseInput v-model.lazy="email" label="Email" />
      <BaseInput v-model.lazy="password" label="Password" type="password" />
    </div>

    <BaseButton class="login-button">LOGIN</BaseButton>

    <div class="auth-icons-container">
      <button auth="google" @click="loginGoogle">
        <img src="google-icon.png" alt="" />
      </button>
      <button auth="github" @click="loginGithub">
        <img src="github-icon.png" alt="" />
      </button>
    </div>
    <p>
      Don't have an account
      <BaseButton @click="signUpEmmit">SIGN UP</BaseButton>
    </p>
  </form>
</template>

<script>
import { useAuthStore } from "./stores/authStore";
import { mapState, mapActions } from "pinia";
import {
  EMAIL_PATTERN,
  PASSWORD_MIN_LENGTH,
} from "./constants/loginRestrictions";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import BaseButton from "../shared/components/BaseButton.vue";
import BaseInput from "./BaseInput.vue";
import FormHeader from "./FormHeader.vue";

export default {
  name: "SignInForm",
  components: { BaseButton, BaseInput, FormHeader },
  emits: ["signUp"],
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  computed: {
    ...mapState(useAuthStore, ["getAccessToken", "getUser"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["setAccessToken", "setUser"]),
    formIsValid() {
      return this.mailIsValid && this.passwordIsValid;
    },
    mailIsValid() {
      return EMAIL_PATTERN.test(this.email) && this.email.length > 0;
    },
    passwordIsValid() {
      return this.password.length > PASSWORD_MIN_LENGTH;
    },
    async onSubmit() {
      if (!this.formIsValid || this.loading) return;

      this.loading = true;

      try {
        const auth = getAuth();
        const authCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        const { email, uid, accessToken } = authCredential.user;

        this.setUser({ email, uid });
        this.setAccessToken(accessToken);

        this.$router.push("/");
      } catch (error) {
        console.error(error.message);
      }

      this.loading = false;
    },
    async loginGoogle() {
      if (this.loading) return;

      this.loading = true;

      const googleProvider = new GoogleAuthProvider();
      const auth = getAuth();

      const result = await signInWithPopup(auth, googleProvider);

      try {
        const {
          user: { email, uid, idToken },
        } = result;
        GoogleAuthProvider.credentialFromResult(result);
        this.setAccessToken(idToken);
        this.setUser({ email, uid });
        this.$router.push("/");
      } catch (error) {
        alert("google login failed");
      }

      this.loading = false;
    },
    async loginGithub() {
      if (this.loading) return;

      this.loading = true;

      const githubProvider = new GithubAuthProvider();
      const auth = getAuth();

      const result = await signInWithPopup(auth, githubProvider);

      try {
        const {
          user: { email, uid, idToken },
        } = result;
        GithubAuthProvider.credentialFromResult(result);
        this.setAccessToken(idToken);
        this.setUser({ email, uid });
        this.$router.push("/");
      } catch (error) {
        console.log(error);
        alert("github failed");
      }

      this.loading = false;
    },
    signUpEmmit() {
      this.$emit("signUp");
    },
  },
};
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

  & button {
    margin-right: 10px;
    margin-left: 10px;
  }
}

.login-button {
  padding: 10px;
  width: 10rem;
}
</style>
