<template>
  <div class="page">
    <h1 class="title">Welcome to Fund Management Dashboard</h1>
    <p class="text">Identify and Prioritize Financial Risk from Cyber in your Portfolio</p>
    <div class="button" @click="changePage">Open Dashboard</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class WelcomePage extends Vue {

  private changePage() {
    this.$store.commit('switchPage', 'RiskPage');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.page {
  box-sizing: border-box;
  background-image: url('../../assets/welcome-page-back.png');
  height: calc(100vh - 100px);
  padding-top: 117px;
  padding-left: 208px;
}

.title {
  max-width: 689px;
  margin: 0px;
  font-family: Inter;
  font-size: 71px;
  font-style: normal;
  font-weight: 700;
  line-height: 86px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}

.text {
  margin: 0px;
  margin-top: 57px;
  margin-bottom: 92px;
  max-width: 689px;

  font-family: Transcript Pro;
  font-size: 41px;
  font-style: normal;
  font-weight: 300;
  line-height: 53px;
  letter-spacing: -0.01em;
  color: #FFFFFF;
}

.button {
  width: 284px;
  height: 71px;
  background: #0075FF;
  border-radius: 8px;
  
  font-family: Transcript Pro;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0em;
  color: #FFFFFF;
  text-align: center;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>