<template>
  <div>
    <HeaderMenu />
    <div class="page__container">
      <Sidebar />
      
      <div v-if="this.$store.getters.curPortfolioJSON" class="page">
        <div>
          <h1>Portfolio Risk Critical Infrastructure</h1>
          <p>
            Potfolio Value {{ this.$store.getters["RiskPageModule/value"] }}
          </p>
        </div>

        <div class="value-container">
          <div>
            <h2>Overall Portfolio Risk Score</h2>
            <p>{{ this.$store.getters["RiskPageModule/riskScore"] }}</p>
          </div>

          <div>
            <h2>Cyber based Discount to Fair Value</h2>
            <p>
              {{ this.$store.getters["RiskPageModule/discount"] }}%
              {{ this.$store.getters["RiskPageModule/fairValue"] }}
            </p>
          </div>
        </div>

        <div class="table">
          <Table
            v-bind:headers="this.$store.state.RiskPageModule.headers"
            v-bind:tableArr="this.$store.getters['RiskPageModule/tableArr']"
          >
          </Table>

        </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Sidebar from "../../components/Sidebar.vue";
import HeaderMenu from "../../components/HeaderMenu.vue";
import Table from "../../components/Table.vue";

@Component({
  components: {
    Sidebar,
    HeaderMenu,
    Table,
  },
})
export default class RiskPage extends Vue {}
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
  color: black;
  flex-basis: 100%;
}

.page > * {
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
}

.value-container {
  display: flex;
  justify-content: space-evenly;
}

</style>