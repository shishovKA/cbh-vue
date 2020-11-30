<template>
  <div id="app">
    <div class="header">
      <div class="header__logo-container">
        <p class="header__logo">cbh</p>
      </div>
      <h1 class="header__title">Fund Management Dashboard</h1>

      <p>Powered by CYBERHEDGE</p>
    </div>

    <component v-bind:is="currentPage"></component>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Pages
import WelcomePage from './pages/WelcomePage/index.vue';
import RiskPage from './pages/RiskPage/index.vue';
import BenchmarkPage from './pages/BenchmarkPage/index.vue';
import LossPage from './pages/LossPage/index.vue';
import ResearchPage from './pages/ResearchPage/index.vue';
import ScenarioPage from './pages/ScenarioPage/index.vue';

// JSON
import dashboardDb from '../dashboardDb.json';

//CSV
//@ts-ignore
import dashboardCSV from './csv-for-test/randomCos.csv';

// Store
import store  from './store/index'

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
    store.commit('loadJSON', dashboardDb);
    store.commit('loadCSV', dashboardCSV);
  }

  get currentPage() {
    return store.getters.currentPage;
  }
}
</script>

<style lang="scss">
$header-height: 100px;

html,
body {
  margin: 0px;
  height: 100%;
}

.header {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: $header-height;
  background-color: #ffffff;
  padding: 0px 18px;
}

.header__title {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.02em;
  max-width: 140px;
  margin: 0;
  color: #000000;
}

.header__logo-container {
  background: #000000;
  border-radius: 6px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  margin-right: 10px;
}

.header__logo {
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 50px;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0;
}


</style>
