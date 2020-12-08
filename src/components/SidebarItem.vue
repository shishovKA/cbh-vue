<template>
  <div @click="selectPortfolio" class="item" v-bind:class="{ selected: selected }">
      <p class="item__text">Portfolio {{index+1}} </p>
      <p class="item__text item__text_name"> {{name}} </p>
      <p class="item__text">{{score}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SidebarItem extends Vue {
  @Prop()  private name!: string;
  @Prop()  private score!: number;
  @Prop()  private index!: number;
  @Prop()  private selected!: boolean;
  @Prop()  private id!: string;

  private selectPortfolio() {
    this.$store.commit('switchPortfolio', this.id);
  }
}

</script>

<style scoped lang="scss">

.item {
  box-sizing: border-box;
  padding: 0px 10px;
  cursor: pointer;
  height: 105px;
  display: flex;
  flex-direction: column;
  padding-left: 28px;
  padding-top: 23px;
}

.selected {
  background-color: rgba($color: #343E47, $alpha: 0.1);
}

.item__text {
  margin: 0;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
}

.item__text_name {
  font-weight: 700;
}



</style>