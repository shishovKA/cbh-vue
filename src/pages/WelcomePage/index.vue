<template>
  <div class="page">
    <h1>Welcome to Fund Management Dashboard</h1>
    <p>Identify and Prioritize Financial Risk from Cyber in your Portfolio</p>
    <button class="button" @click="changePage">Open Dashboard</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class WelcomePage extends Vue {
  changePage() {
    this.$store.commit("SWITCH_PAGE", "Portfolio Risk");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page {
  background-color: black;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
}

.page > * {
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  color: #ffffff;
}

.button {
  color: black;
}
</style>