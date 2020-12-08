<template>
 
    <table class="table">
      <tr class="table__header-row">
        <th v-for="text in headers">
          <p class="table__header-item">{{text}}</p>
        </th>
      </tr>

      <tr class="table__row" v-for="row in tableArr">
        <td class="table__item" v-for="item in row">
          {{item}}
        </td>
      </tr>

    </table>



</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HeaderMenuItem from "./HeaderMenuItem.vue";

@Component
export default class Table extends Vue {
  @Prop()  private headers!: string[];
  @Prop()  private tableArr!: any[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">

  th {
    margin: 0;
  }

  p {
   margin: 0; 
  }
  
  th:nth-child(1) > p {
    max-width: 74px;
  }

  th:nth-child(2) > p {
    max-width: 71px;
    margin-left: auto;
    margin-right: 0px;
  }

  th:nth-child(3) > p {
    max-width: 136px;
  }

  th:nth-child(4) > p {
    max-width: 90px;
  }

  th:nth-child(5) > p {
    max-width: 41px;
    margin-left: auto;
    margin-right: auto;
  }

  th:nth-child(1), td:nth-child(1) {
    text-align: left;
  }

  th:nth-child(2),td:nth-child(2) {
    text-align: right;
    border-right: solid 100px transparent;
  }

  th:nth-child(3),td:nth-child(3) {
    text-align: left;
  }

  th:nth-child(4),td:nth-child(4) {
    text-align: left;
  }

  th:nth-child(5),td:nth-child(5) {
    text-align: center;
  }


</style>
