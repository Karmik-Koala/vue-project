<template>
  <FormHeader
    title="WELCOME"
    subtitle="We are glad to create your account with us"
  />
  <form action="" class="form">
    <CustomInput name="email" type="email" />
    <CustomInput name="password" type="password" />
    <BaseButton
      class="login-button"
      :disabled="
        Object.keys(errors).length || !values.email || !values.password
      "
      @click.prevent="authUser"
      >LOGIN</BaseButton
    >
    <!-- <div class="login-button-wrapper">
    </div> -->
  </form>
  <div class="socialmedia-auth-container">
    <GoogleLogin />
    <GithubLogin />
    <FacebookLogin />
  </div>
  <p class="sign-up-msg" @click="goToSignOn">Don't have an account? Sign Up</p>
  <p class="recovery-msg" @click="goToRecovery">Account recovery</p>
</template>

<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "vee-validate";
import { signInValidationSchema } from "../schemas/signIn.schema";
import FormHeader from "../../components/FormHeader.vue";
import BaseButton from "../../../shared/components/BaseButton.vue";
import CustomInput from "../../components/CustomInput.vue";
import GoogleLogin from "../../components/GoogleLogin.vue";
import GithubLogin from "../../components/GithubLogin.vue";
import FacebookLogin from "../../components/FacebookLogin.vue";
import { setAuth } from "../../utils/setAuth";
import { useRouter } from "vue-router";
import { SIGN_ON_FORM, RECOVERY_FORM } from "../constants/formTypes";

const emit = defineEmits(["display-form"]);

const { values, errors } = useForm({
  validationSchema: signInValidationSchema,
});

const router = useRouter();

const authUser = async () => {
  try {
    const auth = getAuth();
    const {
      user: { accessToken, uid, email },
    } = await signInWithEmailAndPassword(auth, values.email, values.password);
    setAuth(email, uid, accessToken);
    router.push("/");
  } catch (error) {
    alert(error);
  }
};

const goToSignOn = () => {
  emit("display-form", SIGN_ON_FORM);
};

const goToRecovery = () => {
  emit("display-form", RECOVERY_FORM);
};
</script>

<style scoped>
.login-button-wrapper {
  text-align: right;
}

.login-button {
  padding: 10px;
  width: 10rem;
}

.socialmedia-auth-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  padding: 0 5rem;
}

.form {
  margin-bottom: 2rem;

  & * {
    margin-bottom: 1rem;
  }
}

.sign-up-msg,
.recovery-msg {
  color: var(--color-salmon);
  padding: 5px 0;
  font-weight: bold;
  text-align: right;
  cursor: pointer;
}

@media screen and (width >=768px) {
  .sign-up-msg,
  .recovery-msg {
    text-align: left;
    margin-left: 4rem;
  }
  .form {
    text-align: center;
  }
}

@media screen and (width >=1024px) {
}

@media screen and (width >=1200px) {
}

@media screen and (width >=2560px) {
}
</style>
