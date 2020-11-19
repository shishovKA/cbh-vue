<template>
  <div id="app">
    <div class="header">
      <div class="header__logo-container">
        <p class="header__logo">cbh</p>
      </div>
      <h1 class="header__title">Fund Management Dashboard</h1>

      <p>Powered by CYBERHEDGE</p>
    </div>

    <HeaderMenu v-show="this.$store.getters.hasMenuHeader"/>
    <WelcomePage v-if='this.$store.state.currentPage === "Welcome"'/>
    <RiskPage v-if='this.$store.state.currentPage === "Portfolio Risk"'/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderMenu from "./components/HeaderMenu.vue";
import WelcomePage from "./pages/WelcomePage/index.vue";
import RiskPage from "./pages/RiskPage/index.vue";

@Component({
  components: {
    HeaderMenu,
    WelcomePage,
    RiskPage,
  },
})

export default class App extends Vue {}
</script>

<style lang="scss">

$header-height: 100px;

html, body {
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
  color: #FFFFFF;
  text-transform: uppercase;
  margin: 0;
}


</style>
