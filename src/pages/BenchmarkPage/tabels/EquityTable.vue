<template>
  <div class='section_equity'>
    <table>
      <tr>
        <th v-for="(text, index) in headers" v-bind:key="index">
          {{ text }}
        </th>
      </tr>

      <tr v-for="(row, index) in tableArr" v-bind:key="index">
        <td v-for="(item, index) in row" v-bind:key="index">
          {{ item }}
        </td>
      </tr>
    </table>

    <div class="total">
      <h2>Total Change in portfolio value</h2>
      <p style="background-color: red">
        {{ this.$store.getters["RiskPageModule/discount"] }}%
      </p>
      <strong>{{ this.$store.getters["RiskPageModule/fairValue"] }}</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EquityTable extends Vue {
  //@Prop()  private headers!: string[];
  //@Prop()  private tableArr!: any[];
  private headers: string[] = [
    "Cyber Risk Related Impact on Market Value",
    "Discount to Fair Value",
    "Fair Value",
  ];

  get tableArr() {
    return this.$store.getters[`BenchmarkingModule/tableEquity`];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.section_equity {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

table {
  width: 100%;
}

tr {
  width: 100%;
}

td {
  text-align: center;
}

.total {
  margin: 50px 0px;
  background-color: #F6F6F6;
}

</style>
