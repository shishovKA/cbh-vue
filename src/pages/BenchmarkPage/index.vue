<template>
  <div>
    <HeaderMenu />
    <div class="page__container">
      <Sidebar />
      <div class="page">
        <h1>Peer Benchmarking</h1>
        <div class="header__container">
          <div
            class="header__item"
            v-for="(element, index) in this.$store.state.BenchmarkingModule
              .data"
            v-bind:key="index"
            v-bind:class="{ selected: element.selected }"
            @click="changeTab(index)"
          >
            {{ element.title }}
          </div>
        </div>

        <div class="table">
          <Table
            v-if="
              this.$store.getters['BenchmarkingModule/selectedTab'].hasTable
            "
            v-bind:headers="
              this.$store.getters['BenchmarkingModule/selectedTab'].tableHeaders
            "
            v-bind:tableArr="
              this.$store.getters[
                `BenchmarkingModule/${this.$store.getters['BenchmarkingModule/selectedTab'].tableName}`
              ]
            "
          >
          </Table>
        </div>

        <div v-if="
              this.$store.getters['BenchmarkingModule/selectedTab'].hasSqrChart
            ">
          <section class="section section_chart">
            <div class="chart__container chart__container_half">
              <p class="chart__title">div - to insert your Chart:</p>
              <div id="indexChart_3" class="chart"></div>
            </div>
          </section>

          <section class="section section_panel">
            <div class="panel">
              <button id="rand_btn">Randomize series</button>
            </div>
          </section>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Sidebar from "../../components/Sidebar.vue";
import HeaderMenu from "../../components/HeaderMenu.vue";
import Table from "../../components/Table.vue";


@Component({
  components: {
    Sidebar,
    HeaderMenu,
    Table,
  },
})
export default class BenchmarkPage extends Vue {
  private changeTab(index: number) {
    this.$store.commit("BenchmarkingModule/selectHeaderItem", index);
  }

  mounted() {
    //Vue.loadScript("/js/jquery-2.2.4.min.js")
    //this.$loadScript("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY")
    //.then(() => {
      // Script is loaded, do something
    //})
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page__container {
  display: flex;
  justify-content: stretch;
}

.page {
  background-color: #ffffff;
  min-height: calc(100vh - 100px - 52px);
  color: black;
  width: 100%;
}

td {
  text-align: center;
}

.header__container {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-top: 2px solid rgb(180, 180, 180);
}

.header__item {
  cursor: pointer;
}

.selected {
  border-top: 2px solid black;
}

.table {
  margin-top: 50px;
}

.button {
  color: black;
}
</style>