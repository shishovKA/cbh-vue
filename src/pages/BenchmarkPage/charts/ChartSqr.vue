<template>
  <div id="gist">
    <section class="section section_chart">
      <div class="chart__container chart__container_half">
        <p class="chart__title">div - to insert your Chart:</p>
        <div id="indexChart_3" class="chart"></div>
      </div>
    </section>

    <section class="section section_panel">
      <div class="panel">
        <button @click="btn" id="rand_btn">Randomize series</button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { sayHello, csvToCols, prepareData, createChart } from "sqr-lib-1";

@Component
export default class ChartSqr extends Vue {
  private getcsvCol(csv: any, field: string) {
    // @ts-ignore
    const col = csv.map((item) => item[field]);
    return col;
  }

  mounted() {
    console.log("after CSV load");
    //console.log(this.getcsvCol(this.$store.state.Root.sqrCSV, 'x'));

    let x = this.getcsvCol(this.$store.state.Root.sqrCSV, "x");
    let y = this.getcsvCol(this.$store.state.Root.sqrCSV, "y");
    let labels = this.getcsvCol(this.$store.state.Root.sqrCSV, "labels");

    const oneX: number[] = [1.3];
    const oneY: number[] = [2.5];

    const chartContainer = document.getElementById("indexChart_3");
    // @ts-ignore
    //let chartData = csvToCols(this.$store.state.Root.sqrCSV);
    //разбираем CSV по рядам
    //chartData = prepareData(chartData);
    //создаем chart
    createChart(chartContainer, [x, y, oneX, oneY, labels]);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.button {
  color: black;
}

.section_chart {
  width: 100%;
  display: flex;
  justify-content: center;
}

.chart {
  height: 400px;
  width: 400px;
}
</style>
