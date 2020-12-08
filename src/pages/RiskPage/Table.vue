<template>
 
    <table class="table">
      <tr class="table__header-row">
        <th></th>
        <th v-for="(text , index) in headers"
            v-bind:key="index">
          <p class="table__header-item">{{text}}</p>
        </th>
      </tr>

      <tr class="table__row" v-for="(row, index) in tableArr" v-bind:key="index">
        <td><p class="table__item table__item_index">{{ index+1 }}</p></td>
        <td class="table__item">{{ row[0] }}</td>
        <td class="table__item">{{ row[1] }}</td>
        <td class="table__item">
          <div class="table__item_star">
          {{ row[2].toFixed(1) }}
          <StarBar class="item__star_table"
            v-bind:value="row[2]"
            v-bind:mode="''"
          />
          </div>
        </td>
        <td class="table__item">{{ row[3] }}</td>
        <td class="table__item">{{ row[4] }}</td>
      </tr>

    </table>



</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import StarBar from '../../components/StarBar.vue'


@Component({
  components: {
    StarBar,
  },
})

export default class Table extends Vue {
  @Prop()  private headers!: string[];
  @Prop()  private tableArr!: any[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">

  .item__star_table {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;

    margin-left: 8px;
  }

  .table__item_star {
    margin-top: auto;
    height: 100%;
    display: flex;
    align-items: center;
  }

  th {
    margin: 0;
  }

  p {
   margin: 0; 
  }

  th:nth-child(1), td:nth-child(1) {
    text-align: left;
    width: 60px;
  }
  
  th:nth-child(2) > p {
    max-width: 74px;
  }

  th:nth-child(3) > p {
    max-width: 71px;
    margin-left: auto;
    margin-right: 0px;
  }

  th:nth-child(4) > p {
    max-width: 136px;
  }

  th:nth-child(5) > p {
    max-width: 90px;
  }

  th:nth-child(6) > p {
    max-width: 41px;
    margin-left: auto;
    margin-right: auto;
  }

  th:nth-child(2), td:nth-child(2) {
    text-align: left;
  }

  th:nth-child(3),td:nth-child(3) {
    text-align: right;
    border-right: solid 100px transparent;
  }

  th:nth-child(4),td:nth-child(4) {
    text-align: left;
  }

  th:nth-child(5),td:nth-child(5) {
    text-align: left;
  }

  th:nth-child(6),td:nth-child(6) {
    text-align: center;
  }


</style>
