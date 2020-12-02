<template>
  <div>
    <HeaderMenu />
    <div class="page__container">
      <Sidebar />
      <div class="page">
        <h1>Peer Benchmarking</h1>
        <div class="header__container">
          <div
            class="header__item"
            v-for="(element, index) in this.$store.state.BenchmarkingModule
              .data"
            v-bind:key="index"
            v-bind:class="{ selected: element.selected }"
            @click="changeTab(index)"
          >
            {{ element.title }}
          </div>
        </div>

        <div class="table" v-if="this.$store.getters['BenchmarkingModule/selectedTab'].hasTable">
          <component v-bind:is="this.$store.getters['BenchmarkingModule/selectedTab'].tableName"></component>
        </div>

        <ChartSqr v-if="this.$store.getters['BenchmarkingModule/selectedTab'].hasSqrChart"/>

      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import Sidebar from "../../components/Sidebar.vue";
import HeaderMenu from "../../components/HeaderMenu.vue";

// tables
import EquityTable from "./tabels/EquityTable.vue";
import CreditTable from "./tabels/CreditTable.vue";
import PerformanceTable from "./tabels/PerformanceTable.vue";

// charts
import ChartSqr from "./charts/ChartSqr.vue";


@Component({
  components: {
    Sidebar,
    HeaderMenu,
    EquityTable,
    CreditTable,
    PerformanceTable,

    ChartSqr,
  },
})
export default class BenchmarkPage extends Vue {
  
  private changeTab(index: number) {
    this.$store.commit("BenchmarkingModule/selectHeaderItem", index);
  }

}
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
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  
}

td {
  text-align: center;
}

.header__container {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-top: 2px solid rgb(180, 180, 180);
}

.header__item {
  cursor: pointer;
}

.selected {
  border-top: 2px solid black;
}

.table {
  margin-top: 50px;
  height: 100%;
}


</style>