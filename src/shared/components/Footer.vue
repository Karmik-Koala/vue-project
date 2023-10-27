<template>
  <footer class="footer-distributed">
    <div class="footer-left">
      <img class="footer-image" :src="LogoApp" />
      <h3>Meal<span>Mate</span></h3>
    </div>
    <div class="footer-center">
      <div class="footer-info-container">
        <i class="fa fa-map-marker"></i>
        <p class="info"><span>Avenida Gregorio, 6 </span> 28040 Madrid</p>
      </div>
      <div class="footer-info-container">
        <i class="fa fa-phone"></i>
        <p class="info">+34 636458956</p>
      </div>
      <div class="footer-info-container">
        <i class="fa fa-envelope"></i>
        <p class="info">
          <a href="mailto:info@mealmate.es">info@mealmate.es</a>
        </p>
      </div>
    </div>
    <div class="footer-right">
      <a href="https://github.com/Karmik-Koala/"
        ><i class="fa fa-github fa-lg"></i
      ></a>
      <p class="footer-company-about">
        <span>About the company</span>
        Download 'MealMate' now and make every meal a delicious and nutritious
        adventure!"
      </p>
      <div class="footer-icons"></div>
    </div>
  </footer>
</template>

<script>
import LogoApp from "@/assets/images/logo-app.webp";

export default {
  name: "FooterComponent",
  data() {
    return {
      LogoApp,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(--color-white);
}
.footer-distributed {
  display: grid;
  grid-template-columns: 1fr;
  background: var(--color-faded-jade);
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 12%);
  padding: 30px 50px;

  & .footer-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .footer-image {
      width: 60%;
    }

    & h3 {
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

  & .footer-center {
    & .footer-info-container {
      display: flex;
      align-items: center;
      padding: 5px;

      & i {
        border-radius: 6px;
        padding: 4px;
        width: 24px;
        height: 24px;
        background-color: var(--color-ferra);
        color: var(--color-white);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 4px;
      }

      & .info {
        font-size: var(--font-size-xs);
        font-family: var(--font-family-roboto);
        color: var(--color-white);
      }
    }
  }

  & .footer-right {
    display: flex;
    align-items: center;
    padding: 5px;
    & p {
      padding: 20px 5px;
      font-size: var(--font-size-sm);
      font-family: var(--font-family-roboto);
      color: var(--color-white);
    }

    & .footer-icons a {
      display: inline-block;
      border-radius: 4px;
      padding: 4px;
      width: 24px;
      height: 24px;
      box-sizing: border-box;
    }

    & i {
      border-radius: 6px;
      padding: 4px;
      width: 24px;
      height: 24px;
      background-color: var(--color-ferra);
      color: var(--color-white);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 4px;
    }
  }
}

@media screen and (width >=768px) {
  .footer-distributed {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-right a {
    order: 2;
  }

  .footer-right {
    grid-column: 2;
  }
}

@media screen and (width >= 1024px) {
  .footer-distributed {
    grid-template-columns: repeat(3, 1fr);
  }

  .footer-center,
  .footer-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .footer-center .footer-info-container .info {
    font-size: var(--font-size-md);
  }

  .footer-right {
    grid-column: 3;
  }
}
</style>
