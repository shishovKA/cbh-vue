<template>
 
    <table>
      <tr>
        <th v-for="(text , index) in headers"
            v-bind:key="index">
          {{text}}
        </th>
      </tr>

      <tr v-for="(row, index) in tableArr" v-bind:key="index">
        <td v-for="(item, index) in row" v-bind:key="index">
          {{item}}
        </td>
      </tr>

    </table>


</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";


@Component
export default class CreditTable extends Vue {

  private headers: string[] = ['Cyber Risk Related Impact on Credit Downgrade ', 'Probability of Downgrade'];

  get tableArr() {
    return this.$store.getters[`BenchmarkingModule/tableCredit`];
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">

 table {
   width: 100%;
 }

 tr {
   width: 100%;
 }

 td {
   text-align: center;
 }

</style>
