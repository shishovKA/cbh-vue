<template>
 
    <table>
      <tr>
        <th v-for="text in headers">
          {{text}}
        </th>
      </tr>

      <tr v-for="row in tableArr">
        <td v-for="item in row">
          {{item}}
        </td>
      </tr>

    </table>

    <!-- 
    <HeaderMenuItem
      v-for="(menuItem, index) in this.$store.state.Header.data"
      v-bind:title="menuItem.title"
      v-bind:selected="menuItem.selected"
      v-bind:index="index"
      v-bind:key="index"
    >
    </HeaderMenuItem>
  -->

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

 table {
   width: 100%;
 }

 tr {
   width: 100%;
 }

</style>
