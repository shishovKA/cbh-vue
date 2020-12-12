<template>
  <div class="navbtn" @click="changePage" v-bind:class="{ selected: selected }">{{ title }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HeaderMenuItem extends Vue {
  @Prop() private title!: string;
  @Prop() private selected!: string;
  @Prop() private index!: number;

  private changePage() {
    this.$store.commit('selectHeaderItem', this.index);
  }
}
</script>

<style scoped lang="css">

.navbtn {
  padding: 0px 3rem;
  color: white;
  cursor: pointer;
  height: 100%;
  line-height: 52px;

  font-family: "Akkurat Pro";
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.03em;
  opacity: 0.3;

  white-space: nowrap; /* Запрещаем перенос строк */
  overflow: hidden; /* Обрезаем все, что не помещается в область */
  text-overflow: ellipsis; /* Добавляем многоточие */

  min-width: 0;
}

.selected {
  background-color: #343E47;
  opacity: 1;
}

</style>