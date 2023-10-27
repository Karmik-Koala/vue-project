<template>
  <div class="login-container">
    <div class="form-container">
      <SignInForm
        v-if="displayForm === 'sign-in'"
        @display-form="displayFormEvent"
      />
      <SignUpForm
        v-if="displayForm === 'sign-on'"
        @display-form="displayFormEvent"
      />
      <PasswordRecoveryForm
        v-if="displayForm === 'recovery'"
        @display-form="displayFormEvent"
      />
    </div>
    <div class="image-container">
      <img src="/logo-app.webp" alt="" />
    </div>
  </div>
</template>

<script>
import SignInForm from "../forms/partials/SignInForm.vue";
import SignUpForm from "../forms/partials/SignUpForm.vue";
import PasswordRecoveryForm from "../forms/partials/PasswordRecoveryForm.vue";

export default {
  name: "AuthView",
  components: {
    SignInForm,
    SignUpForm,
    PasswordRecoveryForm,
  },
  data() {
    return {
      displayForm: "sign-in",
    };
  },
  methods: {
    displayFormEvent(event) {
      this.displayForm = event;
    },
  },
};
</script>

<style scoped>
.image-container {
  position: fixed;
  top: 20vh;
  z-index: -1;
  opacity: 10%;
}

.image-container img {
  max-width: 100%;
}

@media screen and (width >=768px) {
  .login-container {
    width: clamp(700px, 50vw, 1200px);
    padding: 1rem;
    display: flex;
    background-color: white;
    border-radius: 20px;
    margin-right: auto;
    margin-left: auto;
  }

  .image-container {
    position: static;
    z-index: inherit;
    opacity: 100%;
    flex-basis: 50%;
  }
}

@media screen and (width >=1024px) {
}

@media screen and (width >=1200px) {
}

@media screen and (width >=2560px) {
}
</style>
