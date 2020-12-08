<template>
  <div class="section_equity">
    <table class="table">
      <tr class="table__header-row">
        <th v-for="(text, index) in headers" v-bind:key="index">
          <p class="table__header-item">{{ text }}</p>
        </th>
      </tr>

      <tr
        class="table__row"
        v-for="(row, index) in tableArr"
        v-bind:key="index"
      >
        <td class="table__item" v-for="(item, index) in row" v-bind:key="index">
          {{ item }}
        </td>
      </tr>
    </table>

    <div class="total">
      <h2 class="total__title">Total Change in portfolio value</h2>
      <p class="valuebox__value valuebox__value_red">
        {{ this.$store.getters["RiskPageModule/discount"] }}%
      </p>
      <strong class="valuebox__value">{{
        this.$store.getters["RiskPageModule/fairValue"]
      }}</strong>
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

.total {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px 0px;
  background-color: #f6f6f6;
  height: 72px;
  padding-right: 82px;
}

.total > * {
  margin-top: 0px;
}

.total__title {
  margin: 0;
  margin-right: 24px;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-align: right;

  color: #000000;
}

th:nth-child(1) > p {
  max-width: 255px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
  text-decoration: none;
}

th:nth-child(2) > p {
  max-width: 86px;
  margin-left: 0px;
  margin-right: auto;
}

th:nth-child(3) > p {
  max-width: 41px;
  margin-left: auto;
  margin-right: auto;
}

th:nth-child(1),
td:nth-child(1) {
  text-align: left;
}

th:nth-child(2),
td:nth-child(2) {
  text-align: left;
  border-right: solid 100px transparent;
}

th:nth-child(3),
td:nth-child(3) {
  text-align: center;
}
</style>
