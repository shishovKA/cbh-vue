<template>
  <div class="navbtn" @click="changePage" v-bind:class="{ selected: selected }">{{ title }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HeaderMenuItem extends Vue {
  @Prop() private title!: string;
  @Prop() private selected!: string;

  changePage() {
    this.$store.commit("switchPage", this.title);
    this.$store.commit("toggleMenu");
  }
}
</script>

<style>
.navbtn {
  padding: 0px 10px;
  color: white;
  cursor: pointer;
  height: 100%;
  line-height: 52px;
}

.selected {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>