<template>
  <div class="page">

    <div class="header header__welcome">
      <div class="logo__container">
        <p class="logo">cbh</p>
        <h1 class="logo__title">Fund Management Dashboard</h1>
      </div>
      <a class="help__container" href="https://cyberhedge.com/" target="_blank">
        <img class="help__by" src="../../assets/DataBy.svg" />
        <img class="help__button" src="../../assets/Help.svg" />
      </a>
    </div>

    <div class="content__container">
      <h1 class="title">Welcome to Fund Management Dashboard</h1>
      <p class="text">Identify and Prioritize Financial Risk from Cyber in your Portfolio</p>
      <div class="button" @click="changePage">Open Dashboard</div>
    </div>

    <div class="welcome__background-container" id="splash-cover">
      <canvas class="welcome__canvas"></canvas>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { create } from "./graphics.js";

@Component
export default class WelcomePage extends Vue {
  mounted() {
    create();
  }

  private changePage() {
    this.$store.commit("switchPage", "RiskPage");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



.content__container {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 100px);
  padding: 11.7rem 20rem 0px 20rem;
  z-index: 2;
}

.title {
  max-width: 689px;
  margin: 0px;
  font-family: "Inter";
  font-size: 7.1rem;
  line-height: 8.6rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.text {
  margin: 0px;
  max-width: 689px;
  font-family: "Transcript Pro";
  font-size: 4.1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 5.3rem;
  letter-spacing: -0.01em;
  color: #ffffff;

  margin-top: 5.7rem;
  margin-bottom: 9.2rem;
}

.button {
  width: 28.4rem;
  height: 7.1rem;
  background: #0075ff;
  border-radius: 8px;
  font-family: "Transcript Pro";
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 4.1rem;
  letter-spacing: 0em;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.welcome__background-container {
  background-color: pink;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.welcome__canvas {
  width: 100%;
  height: 100%;
}

</style>