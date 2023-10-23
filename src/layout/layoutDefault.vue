<template>
  <div class="body">
    <Navbar />
    <!-- Content of the page -->
    <main class="main">
      <RouterView />
    </main>
    <footer class="footer-distributed">
      <div class="footer-left">
        <div class="title-logo">
          <img class="footer-image" src="../assets/images/logo-app.webp">
          <h3>Meal<span>Mate</span></h3>
        </div>
      </div>
      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>Avenida Gregorio, 6 </span> 28040 Madrid</p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p>+34 636458956</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:info@mealmate.es">info@mealmate.es</a></p>
        </div>
      </div>
      <div class="footer-right">
        <p class="footer-company-about">
          <span>About the company</span>
          Download 'MealMate' now and make every meal a delicious and nutritious adventure!"
        </p>
        <div class="footer-icons">
          <a href="https://github.com/Karmik-Koala/"><i class="fa fa-github fa-lg"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "../shared/components/Navbar.vue";

export default {
  name: "LayoutDefault",
  components: {
    RouterView,
    Navbar,
  },
};
</script>

<style scoped>
.body {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.main {
  padding: 5%;
}

.footer-distributed {
  background: var(--color-faded-jade);
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 12%);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 30px 50px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
  font-family: var(--font-family-roboto);
}

/* Footer left */

.footer-distributed .footer-left {
  width: 40%;
}

/* The company logo */

.footer-image {
  width: 100px;
  height: 100px;
}

.footer-distributed h3 {
  font-family: var(--font-family-content);
  text-decoration: none;
  font-weight: bold;
  color: var(--color-white);
  margin: 0;
}

.footer-distributed h3 span {
  color: var(--color-grandis);
}

.title-logo {
  display: flex;
  align-content: center;
  align-items: center;
  font-family: var(--font-family-archivo-black);
  font-size: var(--font-size-ns);
  background: linear-gradient(to right, var(--color-grandis) 0%, var(--color-salmon) 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Footer links */

.footer-distributed .footer-links {
  color: var(--color-white);
  margin: 20px 0 12px;
  font-family: var(--font-family-content);
  font-size: var(--font-size-sm);
  padding: 0;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  font-family: var(--font-family-content);
  font-size: var(--font-size-sm);
  text-decoration: none;
  color: inherit;
}

.footer-distributed .footer-company-name {
  color: #222;
  font-size: 14px;
  font-weight: normal;
  font-family: var(--font-family-content);
  margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center {
  width: 35%;
}

.footer-distributed .footer-center i {
  background-color: var(--color-ferra);
  color: var(--color-white);
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: var(--color-white);
  font-family: var(--font-family-content);
  font-size: var(--font-size-sm);
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-family: var(--font-family-content);
  font-size: var(--font-size-sm);
  line-height: 2;
}

.footer-distributed .footer-center p a {
  text-decoration: none;
  color: var(--color-white);
}

.footer-distributed .footer-links a::before {
  content: "|";
  font-family: var(--font-family-content);
  font-size: var(--font-size-sm);
  left: 0;
  color: var(--color-white);
  display: inline-block;
  padding-right: 5px;
}

.footer-distributed .footer-links .link-1::before {
  content: none;
}

/* Footer Right */

.footer-distributed .footer-right {
  width: 20%;
}

.footer-distributed .footer-company-about {
  font-family: var(--font-family-content);
  font-size: var(--font-size-sm);
  color: var(--color-grandis);
  margin: 0;
}

.footer-distributed .footer-company-about span {
  display: block;
  color: var(--color-white);
  font-family: var(--font-family-content);
  font-size: var(--font-size-sm);
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-distributed .footer-icons {
  margin-top: 25px;
}

.footer-distributed .footer-icons a {
  display: inline-block;
  cursor: pointer;
  background-color: var(--color-ferra);
  border-radius: 2px;
  font-size: 30px;
  color: var(--color-white);
  text-align: center;
  line-height: 35px;
  padding: 5px;
}
</style>
