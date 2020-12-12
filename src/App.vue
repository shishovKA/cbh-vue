<template>
  <div id="app">

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

@import url('./styles/styles.scss');


html,body,#app {
  height: 100%;
  width: 100%;
}


</style>
