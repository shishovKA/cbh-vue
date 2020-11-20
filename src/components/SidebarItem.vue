<template>
  <div @click="selectPortfolio" class="item" v-bind:class="{ selected: selected }">
      <p class="item__text">Portfolio {{index}} </p>
      <strong> {{name}} </strong>
      <p class="item__text">{{score}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SidebarItem extends Vue {
  @Prop()  name!: string;
  @Prop()  score!: number;
  @Prop()  index!: number;
  @Prop()  selected!: boolean;

  selectPortfolio() {
    this.$store.commit("SWITCH_PORTFOLIO", this.index);
  }
}

</script>

<style scoped lang="scss">

.item {
  padding: 0px 10px;
  cursor: pointer;
  height: 105px;
  display: flex;
  flex-direction: column;
  padding-left: 28px;
  padding-top: 23px;
}

.item > * {
    margin: 0;
}

.selected {
  background-color: rgba($color: #343E47, $alpha: 0.1);
}

</style>