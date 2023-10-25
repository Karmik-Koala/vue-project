<template>
  <div class="container">
    <img :src="KoalaSittingImg" alt="my-logo" />
    <p>No recipes found!</p>
  </div>
</template>

<script>
import KoalaSittingImg from "@/assets/images/koala-sitting.svg";

export default {
  name: "NotDataFound",
  data() {
    return {
      KoalaSittingImg,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 70%;
  }

  & p {
    padding: 0 50px;
    text-align: center;
    font-family: var(--font-family-archivo-black);
    font-size: var(--font-size-lg);
    color: var(--color-ferra);
    text-decoration: underline;
    text-decoration-color: var(--color-salmon);
  }
}

@media screen and (width >=768px) {
  .container {
    & img {
      width: 50%;
    }
  }
}

@media screen and (width >=1024px) {
  .container {
    & img {
      width: 40%;
    }
  }
}

@media screen and (width >=1200px) {
  .container {
    & img {
      width: 30%;
    }
  }
}

@media screen and (width >=2560px) {
  .container {
    & img {
      width: 20%;
    }

    & p {
      font-size: var(--font-size-xl);
    }
  }
}
</style>
