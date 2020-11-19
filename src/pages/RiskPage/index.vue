<template>
  <div class="page">
    <h1>Risk</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RiskPage extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.page {
  background-color: #FFFFFF;
  min-height: calc(100vh - 100px - 52px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
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