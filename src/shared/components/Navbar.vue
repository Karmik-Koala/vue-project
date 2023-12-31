<template>
  <header class="header-container">
    <RouterLink class="container-logo" to="/">
      <img class="logo" :src="logoPath" alt="logo..." />
      <h1 class="company-name">MealMate</h1>
    </RouterLink>
    <nav class="navbar-container">
      <input id="menu-input" class="hidden" type="checkbox" />
      <label class="icon-bars" for="menu-input">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul class="navbar-list">
        <li v-for="(route, index) in routes" :key="index">
          <RouterLink class="navbar-links" :to="route.path">
            {{ route.label }}
          </RouterLink>
        </li>
        <li>
          <RouterLink
            v-if="accessToken == null"
            class="navbar-links"
            :to="{ name: 'login' }"
          >
            {{ "Sign in" }}
          </RouterLink>
          <div v-else class="nav-button navbar-links" @click="logout">
            Sign out
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
import { mapState, mapActions } from "pinia";
import Logo from "@/assets/images/logo-app.webp";
import { useAuthStore } from "../../auth/stores/authStore";

export default {
  name: "NavbarComponent",
  components: {
    RouterLink,
  },
  data() {
    return {
      logoPath: Logo,
      routes: [
        {
          label: "Home",
          path: "/",
        },
        {
          label: "Favorites",
          path: "/favorites",
        },
      ],
    };
  },
  computed: {
    ...mapState(useAuthStore, ["accessToken"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["setAccessToken", "setUser"]),
    logout() {
      this.setAccessToken(null);
      this.setUser(null);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}

.header-container {
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--color-faded-jade);
  font-size: var(--font-size-xs);
  padding: 0;
  border-top: 6px solid var(--color-grandis);
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .navbar-container {
    padding: 20px;
  }

  & .container-logo {
    display: flex;
    align-items: center;
    & .logo {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    & .company-name {
      margin: 0;
      font-family: var(--font-family-archivo-black);
      font-size: var(--font-size-nl);
      background: linear-gradient(
        to right,
        var(--color-grandis) 0%,
        var(--color-salmon) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  & .navbar-list {
    font-size: var(--font-size-xs);
    position: absolute;
    top: 100px;
    left: 0;
    background-color: var(--color-faded-jade);
    box-sizing: border-box;
    width: 100%;
    height: auto;
    max-height: 0;
    transition: max-height 0.6s ease-out;
    letter-spacing: 0;
    line-height: 28px;
    overflow: hidden;

    & li {
      padding: 20px 30px;

      & .navbar-links {
        font-family: var(--font-family-roboto);
        text-decoration: none;
        font-weight: bold;
        color: var(--color-white);
        display: inline-block;
        cursor: pointer;

        &::after {
          bottom: 0;
          content: "";
          display: block;
          height: 2px;
          left: 50%;
          position: relative;
          background: var(--color-salmon);
          transition:
            width 0.3s ease 0s,
            left 0.3s ease 0s;
          width: 0;
        }

        &:hover::after {
          width: 100%;
          left: 0;
        }
      }

      & .button-go-app {
        font-family: var(--font-family-content);
        background-color: var(--color-grandis);
        color: var(--color-ferra);
        padding: 5px 20px;
        border-radius: 25px;
        text-wrap: nowrap;

        &:hover {
          background-color: var(--color-salmon);
          color: var(--color-white);
          transition:
            all 0.3s ease 0s,
            left 0.3s ease 0s;
        }
      }
    }
  }
}

.icon-bars span {
  display: block;
  width: 28px;
  height: 3px;
  margin-bottom: 7px;
  background: var(--color-white);
  transform-origin: 3px 0;
  transition:
    transform 0.5s ease,
    opacity 0.55s ease;

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-child(3) {
    transform-origin: 0% 100%;
  }
}

#menu-input {
  &:checked ~ .navbar-list {
    max-height: 100vh;
    transition: max-height 0.25s ease-in;
  }

  /* movimiento a cruz */
  &:checked ~ label span:nth-child(1) {
    opacity: 100%;
    transform: rotate(45deg) translate(1px, 1px);
  }

  &:checked ~ label span:nth-child(2) {
    opacity: 0%;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  &:checked ~ label span:nth-child(3) {
    transform: rotate(-45deg) translate(0, 0);
  }
}

@media screen and (width >= 768px) {
  .header-container {
    & .container-logo {
      padding: 0 30px;
      & .logo {
        border-radius: 50%;
      }

      & .company-name {
        font-size: var(--font-size-lg);
      }
    }

    & .icon-bars {
      display: none;
    }

    & .navbar-list {
      position: initial;
      display: flex;
      align-items: center;
      max-height: 100%;
      font-size: var(--font-size-md);
    }
  }
  .nav-button {
    display: inline-block;
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;
  }
}
</style>
