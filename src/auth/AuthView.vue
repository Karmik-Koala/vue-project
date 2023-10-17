<template>
  <div>
    <form action="">
      <div class="form-group">
        <label for="email">Email</label
        ><input id="email" v-model="email" type="text" />
      </div>
      <div class="form-group">
        <label for="password">Password</label
        ><input id="password" v-model="password" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthStore } from "./stores/authStore";

const store = useAuthStore();

export default {
  name: "AuthView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
    console.log(store.userAuth);
  },
  methods: {
    async authUser() {
      try {
        const auth = getAuth();
        const authCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        authCredential ? alert("logged") : alert("not logged");
      } catch (error) {
        console.error(error.message);
      }
    },
  },
};
</script>

<style scoped></style>
