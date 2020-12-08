<template>
  <div id="app">
    <div class="header">
      <div class="logo__container">
        <p class="logo">cbh</p>
        <h1 class="logo__title">Fund Management Dashboard</h1>
      </div>

      <a class="help__container" href="https://cyberhedge.com/" target="_blank">
        <img class="help__by" src="./assets/DataBy.svg">
        <img class="help__button" src="./assets/Help.svg">
      </a>
    </div>

    <component v-bind:is="currentPage"></component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";




// Pages
import WelcomePage from "./pages/WelcomePage/index.vue";
import RiskPage from "./pages/RiskPage/index.vue";
import BenchmarkPage from "./pages/BenchmarkPage/index.vue";
import LossPage from "./pages/LossPage/index.vue";
import ResearchPage from "./pages/ResearchPage/index.vue";
import ScenarioPage from "./pages/ScenarioPage/index.vue";

// JSON
import dashboardDb from "../dashboardDb.json";

//CSV
//@ts-ignore
import dashboardCSV from "./csv-for-test/randomCos.csv";
//@ts-ignore
import sqrCSV from "./csv-for-test/cbhVulnerability_test.csv";

// Store
import store from "./store/index";

@Component({
  components: {
    WelcomePage,
    RiskPage,
    BenchmarkPage,
    LossPage,
    ResearchPage,
    ScenarioPage,
  },
})
export default class App extends Vue {
  private mounted() {
    store.commit("loadJSON", dashboardDb);
    store.commit("loadCSV", dashboardCSV);
    store.commit("loadSqrCSV", sqrCSV);
  }

  get currentPage() {
    return store.getters.currentPage;
  }
}
</script>

<style lang="scss">

@import url('./styles/fonts.module.scss');
@import url('./styles/tables.scss');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

$header-height: 100px;

html,
body {
  max-width: 1440px;
  margin: 0px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  background: #E5E5E5;
}

.header {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: $header-height;
  background-color: #ffffff;
  padding: 0px 18px;
  justify-content: space-between;
}

.logo__container {
  display: flex;
  align-items: center;
}

.logo {
  height: 64px;
  background: #000000;
  border-radius: 6px;
  margin: 0;
  padding: 0px 10px;

  font-family: Akkurat Pro;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;
}

.logo__title {
  font-family: Akkurat Pro;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.02em;

  line-height: 110%;
  letter-spacing: -0.02em;

  max-width: 140px;
  margin: 0;
  margin-left: 10px;
  color: #000000;

  display: flex;
  align-items: center;
}

.help__container {
  display: flex;
  align-items: center;
}

.help__button {
  width: 36px;
  height: 36px;
  margin-right: 10px;
  margin-left: 28px;
}

.help__by {
  width: 108px;
}

@font-face {
    font-family: "Akkurat Pro";
    src: url("//db.onlinewebfonts.com/t/cbbfee9126dc0abc730b9875dc28832f.eot");
    src: url("//db.onlinewebfonts.com/t/cbbfee9126dc0abc730b9875dc28832f.eot?#iefix") format("embedded-opentype"),
        url("//db.onlinewebfonts.com/t/cbbfee9126dc0abc730b9875dc28832f.woff2") format("woff2"),
        url("//db.onlinewebfonts.com/t/cbbfee9126dc0abc730b9875dc28832f.woff") format("woff"),
        url("//db.onlinewebfonts.com/t/cbbfee9126dc0abc730b9875dc28832f.ttf") format("truetype"),
        url("//db.onlinewebfonts.com/t/cbbfee9126dc0abc730b9875dc28832f.svg#Akkurat Pro") format("svg");
    font-weight: normal;
    font-style: normal;
}


</style>
