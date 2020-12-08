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
export default class CreditTable extends Vue {

  private headers: string[] = ['Cyber Risk Related Impact on Credit Downgrade ', 'Probability of Downgrade'];

  get tableArr() {
    return this.$store.getters[`BenchmarkingModule/tableCredit`];
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">

th:nth-child(1) > p {
    max-width: 280px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    color: #000000;
    text-decoration: none;
  }

  th:nth-child(2) > p {
    max-width: 103px;
    margin-left: 0px;
    margin-right: auto;
  }


  th:nth-child(1), td:nth-child(1) {
    text-align: left;
  }

  th:nth-child(2),td:nth-child(2) {
    text-align: left;
    border-right: solid 100px transparent;
  }


</style>
