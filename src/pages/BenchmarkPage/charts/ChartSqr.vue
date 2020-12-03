<template>
  <div class="container">
    <div class="menu">
      <div class="menu__container">
        <p class="menu__title">CYBER FACTORS</p>
        <div
          class="menu__btn"
          v-for="(element, index) in this.$store.state.BenchmarkingModule
            .cyberFactors"
          v-bind:key="index"
          v-bind:class="{ selected: element.selected }"
          @click="changeCyberFactor(index)"
        >
          {{ element.title }}
        </div>
      </div>

      <div class="menu__container">
        <p class="menu__title">Financial FACTORS</p>
        <div
          class="menu__btn"
          v-for="(element, index) in this.$store.state.BenchmarkingModule
            .financialFactors"
          v-bind:key="index"
          v-bind:class="{ selected: element.selected }"
          @click="changeFinancialFactor(index)"
        >
          {{ element.title }}
        </div>
      </div>
    </div>
    <div class="chart__container">
      <div id="indexChart_3" class="chart"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { createChart, chart, reorganizeChart} from "sqr-lib-1";

@Component
export default class ChartSqr extends Vue {
  
  private getcsvCol(csv: any, field: string) {
    // @ts-ignore
    const col = csv.map((item) => item[field]);
    return col;
  }

  mounted() {
    const chartContainer = document.getElementById("indexChart_3");
    createChart(chartContainer, [this.x, this.y, this.labels]);
    chart.xAxis.setName(this.$store.getters["BenchmarkingModule/selectedFinancialFactor"].title,'start');
    chart.yAxis.setName(this.$store.getters["BenchmarkingModule/selectedCyberFactor"].title,'start');
  }

  private updateChart() {
    reorganizeChart(this.x, this.y, this.labels);
    chart.xAxis.setName(this.$store.getters["BenchmarkingModule/selectedFinancialFactor"].title,'start');
    chart.yAxis.setName(this.$store.getters["BenchmarkingModule/selectedCyberFactor"].title,'start');
  }

  private changeCyberFactor(index: number) {
    this.$store.commit("BenchmarkingModule/selectCyberFactor", index);
    this.updateChart();
  }

  private changeFinancialFactor(index: number) {
    this.$store.commit("BenchmarkingModule/selectFinancialFactor", index);
    this.updateChart();
  }

  get x() {
    const portfolioID = this.$store.state.Root.curPorfolioId;
    // @ts-ignore
    const table = this.$store.state.Root.csvDB.filter(company => company['portID'] === portfolioID);
    const col = this.getcsvCol(table, this.$store.getters["BenchmarkingModule/selectedFinancialFactor"].dbKey);
    return col;
  }

  get y() {
    const portfolioID = this.$store.state.Root.curPorfolioId;
    // @ts-ignore
    const table = this.$store.state.Root.csvDB.filter(company => company['portID'] === portfolioID);
    const col = this.getcsvCol(table, this.$store.getters["BenchmarkingModule/selectedCyberFactor"].dbKey);
    return col;
  }

  get labels() {
    const portfolioID = this.$store.state.Root.curPorfolioId;
    // @ts-ignore
    const table = this.$store.state.Root.csvDB.filter(company => company['portID'] === portfolioID);
    const col = this.getcsvCol(table, 'companyID');
    return col;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.chart__container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart {
  width: 80%;
  height: 80%;
}

.menu {
  margin-top: 104px;
  margin-left: 71px;
  width: 267px;
  display: flex;
  flex-direction: column;
}

.menu__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 27px;
}

.menu__title {
  margin: 0px;
  margin-left: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 38px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #16223f;
}

.menu__btn {
  width: 100%;
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 38px;
  color: #2d2d2d;
}

.selected {
  background-color: #f1f1f1;
}
</style>
