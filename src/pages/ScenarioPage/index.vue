<template>
  <div>
    <HeaderMenu />
    <div class="page__container">
      <div class="page">
        <h1>Get in-depth report for each portfolio company</h1>
        <button>Unlock Scenario Planner</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

import HeaderMenu from '../../components/HeaderMenu.vue';

@Component({
  components: {
    HeaderMenu,
  },
})
export default class ScenarioPage extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page__container {
  display: flex;
  justify-content: stretch;
}

.page {
  background-color: #ffffff;
  min-height: calc(100vh - 100px - 52px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  flex-basis: 100%;
}

.page > * {
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
}

.button {
  color: black;
}
</style>