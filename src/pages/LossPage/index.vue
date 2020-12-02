<template>
  <div>
    <HeaderMenu />
    <div class="page__container">
      <Sidebar />
      <div class="page">
        <h1>
          Loss Model
          <span class="notbold">{{
            this.$store.getters.curPortfolioJSON.name
          }}</span>
        </h1>

        <section class="btn__main-container">
          <div class="btn__container">
            <div
              class="btn"
              v-for="(element, index) in this.$store.state.LossModule.attacks"
              v-bind:key="index"
              v-bind:class="{ selected: element.selected }"
              @click="changeAttack(index)"
            >
              {{ element.title }}
            </div>
          </div>

          <div class="btn__container">
            <div
              class="btn"
              v-for="(element, index) in this.$store.state.LossModule.periods"
              v-bind:key="index"
              v-bind:class="{ selected: element.selected }"
              @click="changePeriod(index)"
            >
              {{ element.title }}
            </div>
          </div>
        </section>

        <LossTable />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Sidebar from "../../components/Sidebar.vue";
import HeaderMenu from "../../components/HeaderMenu.vue";
import LossTable from "./tables/LossTable.vue";

@Component({
  components: {
    Sidebar,
    HeaderMenu,
    LossTable,
  },
})
export default class LossPage extends Vue {
  private changeAttack(index: number) {
    this.$store.commit("LossModule/selectAttack", index);
  }

  private changePeriod(index: number) {
    this.$store.commit("LossModule/selectPeriod", index);
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
  width: 100%;
  min-height: calc(100vh - 100px - 52px);
  display: flex;
  flex-direction: column;
}

.page > * {
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
}

.btn__main-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.btn__container {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}

.btn {
  width: 40%;
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 4px;
  min-height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}

.selected {
  background-color: white;
  border: solid 1px black;
}

.notbold {
  font-weight: normal;
}
​ .button {
  color: black;
}
</style>