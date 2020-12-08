<template>
  <div>
    <HeaderMenu />
    <div class="page__container">
      <Sidebar />
      <div class="page">

        <div class="title__container">
          <h1 class="title">Peer Benchmarking <span class="title title_notbold">{{this.$store.getters.curPortfolioJSON.name}}</span></h1>
        </div>

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

        <div class="table__container table__container_benchmark" v-if="this.$store.getters['BenchmarkingModule/selectedTab'].hasTable">
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
  max-width: 693px;
  display: flex;
  justify-content: space-between;
  padding-left: 85px;
}

.header__item {
  padding-top: 28px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #16223F;

  opacity: 0.7;
  cursor: pointer;
}

.selected {
  border-top: 2px solid black;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  opacity: 1;
  color: #2D2D2D;
}

.table__container_benchmark {
  margin-top: 50px;
}


</style>