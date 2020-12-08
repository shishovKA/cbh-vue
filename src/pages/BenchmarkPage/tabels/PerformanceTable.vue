<template>
 
    <table class="table">
      <tr class="table__header-row">
        <th v-for="(text , index) in headers"
            v-bind:key="index">
          <p class="table__header-item">{{text}}</p>
        </th>
      </tr>

      <tr class="table__row" v-for="(row, index) in tableArr" v-bind:key="index">
        <td class="table__item" v-for="(item, index) in row" v-bind:key="index">
          {{item}}
        </td>
      </tr>

    </table>


</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";


@Component
export default class PerformanceTable extends Vue {

  private headers: string[] = ['Cyber Risk Related Impact on Performace', 'Operating Income', 'Revenue', 'Free Cash Flow', 'Net Income', 'Quick Ratio', 'Working Capital Ratio', 'Book Value'];

  get tableArr() {
    return this.$store.getters[`BenchmarkingModule/tablePerformance`];
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">


</style>
